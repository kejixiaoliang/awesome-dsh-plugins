// enrich.mjs — 从 data/plugins.json 读取 star/npm，统一补进 plugins/*.md，并追加「上一类/下一类」导航
// ⚠️ 已废弃：star 更新已由 probe-stars.mjs 直接探测 GitHub 实时值替代，sync-data 不再调用本脚本。
// 保留仅作历史参考（npm → install 命令的同步逻辑仍有参考价值）。
// 用法：node scripts/enrich.mjs
import { readFileSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = fileURLToPath(new URL('..', import.meta.url))
const PLUGINS_DIR = join(ROOT, 'plugins')
const DATA_PATH = join(ROOT, 'data', 'plugins.json')

// 分类顺序（单一真源：data/taxonomy.json）
const taxonomy = JSON.parse(readFileSync(join(ROOT, 'data', 'taxonomy.json'), 'utf8'))
const CATEGORIES = taxonomy.categories.map((c) => [c.file, c.zh])

const data = JSON.parse(readFileSync(DATA_PATH, 'utf8'))
const byRepo = new Map()
for (const p of data.plugins) {
  byRepo.set(p.fullName.toLowerCase(), { stars: p.stars, npmName: p.npmName })
}

function fullNameFromUrl(url) {
  const m = url.match(/github\.com\/([^/]+\/[^/?#]+)/i)
  return m ? m[1].toLowerCase() : null
}

let enriched = 0
let notFound = 0
let installs = 0

for (let i = 0; i < CATEGORIES.length; i++) {
  const [file, title] = CATEGORIES[i]
  const path = join(PLUGINS_DIR, file)
  let content = readFileSync(path, 'utf8')

  // 去掉旧导航块与尾部空行（幂等）
  content = content.replace(/<!-- nav:start -->[\s\S]*?<!-- nav:end -->\n?$/, '').replace(/\n+$/, '')

  // 逐行处理插件条目
  const lines = content.split('\n')
  const out = lines.map((line) => {
    const m = line.match(/^(-\s*\[[^\]]+\]\([^)]+\)\s*—\s*)(.*)$/)
    if (!m) return line
    const linkPart = m[1]
    const rest = m[2]
    const urlMatch = linkPart.match(/\(([^)]+)\)/)
    if (!urlMatch) return line
    const fullName = fullNameFromUrl(urlMatch[1])
    if (!fullName || !byRepo.has(fullName)) {
      notFound++
      return line
    }
    const { stars, npmName } = byRepo.get(fullName)
    // 保守策略：上游 npm 探测为 null 时，保留目录里已有的 install 命令
    const existingInstall = rest.match(/`dsh plugin add ([^`]+)`/)?.[1] ?? null
    const installName = npmName || existingInstall
    // 去掉已有的 ⭐ 数字和 install 命令，避免重复
    let clean = rest.replace(/\s*⭐\s*\d+/g, '').replace(/\s*·\s*`dsh plugin add [^`]+`/g, '').trimEnd()
    let tail = ''
    if (typeof stars === 'number' && stars > 0) {
      tail += ` ⭐${stars}`
    }
    if (installName) {
      tail += ` · \`dsh plugin add ${installName}\``
      installs++
    }
    enriched++
    return `${linkPart}${clean}${tail}`
  })

  // 上一类 / 下一类
  const prev = CATEGORIES[(i - 1 + CATEGORIES.length) % CATEGORIES.length]
  const next = CATEGORIES[(i + 1) % CATEGORIES.length]
  const nav = `\n\n<!-- nav:start -->\n---\n← [上一类: ${prev[1]}](${prev[0]}) · [返回目录](../README.md) · [下一类: ${next[1]}](${next[0]}) →\n<!-- nav:end -->`

  writeFileSync(path, out.join('\n') + nav + '\n')
  console.log(`${file}: ${title}`)
}

console.log(`\n完成：enriched=${enriched}, install 命令=${installs}, 未在数据中找到=${notFound}`)
