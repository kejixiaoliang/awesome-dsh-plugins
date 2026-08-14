// convert-registry.mjs — 把上游 awesome-dsh-plugin 的 docs/plugins.json（registry）
// 转成本仓库 data/plugins.json 的种子数据格式。
//
// 背景：上游把旧的 data/plugins.json 拆成了 docs/plugins.json（Public registry API），
// 字段结构随之变化（owner/name 拆分、description 变双语对象、category 换成上游 11 类 id、
// 移除 license/isPlugin/pushedAt）。本脚本做字段映射，保持本仓库 data/plugins.json 既有格式，
// 使 enrich.mjs / reconcile.mjs / validate 无需改动。
//
// 用法：cat upstream-registry.json | node scripts/convert-registry.mjs > data/plugins.json
import { readFileSync } from 'node:fs'

const input = readFileSync(0, 'utf8')
const reg = JSON.parse(input)

if (!Array.isArray(reg.plugins)) {
  throw new Error('上游 registry 缺少 plugins 数组')
}

const catTitle = (id) => {
  const c = reg.categories?.[id]
  return c ? `${c.zh} / ${c.en}` : id
}

const plugins = reg.plugins.map((p) => ({
  fullName: `${p.owner}/${p.name}`,
  url: p.url,
  description: p.description?.en ?? p.description?.zh ?? '',
  stars: p.stars ?? 0,
  pushedAt: p.added ? `${p.added}T00:00:00Z` : null,
  license: null,
  isPlugin: true,
  npmName: p.npm ?? null,
  category: { id: p.category, title: catTitle(p.category) },
}))

const out = {
  updatedAt: reg.updated ? `${reg.updated}T00:00:00.000Z` : null,
  plugins,
}

process.stdout.write(JSON.stringify(out, null, 2) + '\n')
