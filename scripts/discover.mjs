// discover.mjs — 扫描 GitHub 上 topic:dsh-plugin 的仓库，生成「候选待收录」清单。
// 用法：GITHUB_TOKEN=xxx node scripts/discover.mjs
// 输出：docs/discover.md（按 star 降序，去重目录里已收录的仓库）
import { readFileSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = fileURLToPath(new URL('..', import.meta.url))
const PLUGINS_DIR = join(ROOT, 'plugins')

const token = process.env.GITHUB_TOKEN || process.env.GH_TOKEN
if (!token) throw new Error('需要 GITHUB_TOKEN 环境变量')

const taxonomy = JSON.parse(readFileSync(join(ROOT, 'data', 'taxonomy.json'), 'utf8'))
const CATEGORY_FILES = taxonomy.categories.map((c) => c.file)

// 1. 收集目录里已收录的 fullName（owner/repo，小写）
const URL_RE = /\(https:\/\/github\.com\/([^/]+\/[^)/?#]+)\)/g
function collectListed() {
  const set = new Set()
  for (const f of CATEGORY_FILES) {
    const content = readFileSync(join(PLUGINS_DIR, f), 'utf8')
    let m
    while ((m = URL_RE.exec(content)) !== null) {
      set.add(m[1].toLowerCase())
    }
  }
  return set
}

// 2. 搜索 topic:dsh-plugin（最多 1000 条，GitHub Search API 上限）
async function searchRepos() {
  const q = encodeURIComponent('topic:dsh-plugin fork:false archived:false')
  const headers = {
    Authorization: `Bearer ${token}`,
    'User-Agent': 'dsh-plugin-discovery',
    Accept: 'application/vnd.github+json',
  }
  const items = []
  for (let page = 1; page <= 10; page++) {
    const url = `https://api.github.com/search/repositories?q=${q}&sort=stars&order=desc&per_page=100&page=${page}`
    const res = await fetch(url, { headers })
    if (!res.ok) {
      const msg = await res.text()
      throw new Error(`GitHub Search API ${res.status}: ${msg.slice(0, 200)}`)
    }
    const data = await res.json()
    if (!Array.isArray(data.items) || data.items.length === 0) break
    items.push(...data.items)
    if (items.length >= Math.min(data.total_count, 1000)) break
  }
  return items
}

const esc = (s) => (s || '').replace(/\|/g, '\\|').replace(/\r?\n/g, ' ')

const listed = collectListed()
const repos = await searchRepos()

const candidates = repos
  .filter((r) => !listed.has(r.full_name.toLowerCase()))
  .sort((a, b) => b.stargazers_count - a.stargazers_count)

const rows = candidates.map((r) => {
  const lic = r.license?.spdx_id || ''
  const pushed = (r.pushed_at || '').slice(0, 10)
  return `| [${r.full_name}](${r.html_url}) | ${r.stargazers_count} | ${esc(r.description)} | ${pushed} | ${lic} |`
})

const report = `# 新插件候选（自动发现）

> 由 \`node scripts/discover.mjs\` 生成。扫描 GitHub \`topic:dsh-plugin\` 的仓库，去掉已收录、fork、归档的仓库后，列出候选。
> 扫描日期：${new Date().toISOString().slice(0, 10)} · 扫描到 ${repos.length} 个仓库 · 候选 ${candidates.length} 个
>
> ⚠️ 说明：① 受 GitHub Search API 限制，仅扫描 star 最高的 1000 个仓库；② \`topic\` 标签由仓库作者自行标注，候选需人工确认是否符合收录标准（DSH 专属、有 README/代码，见 CONTRIBUTING.md）。

## 候选待收录（按 star 降序）— ${candidates.length} 个

| 仓库 | ⭐ | 描述 | 最近 push | 许可证 |
|---|---|---|---|---|
${rows.join('\n')}

> 收录方式：确认某候选符合收录标准后，在对应 \`plugins/<分类>.md\` 添加条目并提 PR（见 CONTRIBUTING.md）。
`

writeFileSync(join(ROOT, 'docs', 'discover.md'), report)
console.log(`topic:dsh-plugin 共 ${repos.length} 个仓库，去重后候选 ${candidates.length} 个，已写入 docs/discover.md`)
