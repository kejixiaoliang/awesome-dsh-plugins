// probe-stars.mjs — 直接探测目录里每个插件的实时 GitHub star，更新 plugins/*.md。
// 同时检测改名（301 重定向）与死仓库（404），输出报告供维护者排查。
// 用法：GITHUB_TOKEN=xxx node scripts/probe-stars.mjs
import { readFileSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = fileURLToPath(new URL('..', import.meta.url))
const PLUGINS_DIR = join(ROOT, 'plugins')

const token = process.env.GITHUB_TOKEN
if (!token) throw new Error('需要 GITHUB_TOKEN 环境变量')

const taxonomy = JSON.parse(readFileSync(join(ROOT, 'data', 'taxonomy.json'), 'utf8'))
const CATEGORY_FILES = taxonomy.categories.map((c) => c.file)

// 1. 收集目录里已收录的 fullName（小写）
const URL_RE = /\(https:\/\/github\.com\/([^/]+\/[^)/?#]+)\)/g
const listed = new Set()
for (const f of CATEGORY_FILES) {
  const content = readFileSync(join(PLUGINS_DIR, f), 'utf8')
  let m
  while ((m = URL_RE.exec(content)) !== null) listed.add(m[1].toLowerCase())
}

// 2. 探测实时 star（分批并发），并检测改名 / 死仓库
const H = { Authorization: `Bearer ${token}`, 'User-Agent': 'dsh-probe', Accept: 'application/vnd.github+json' }
const starMap = new Map() // 小写 fullName -> stars
const renamed = [] // { from, to }
const dead = [] // fullName
const fulls = [...listed]

for (let i = 0; i < fulls.length; i += 20) {
  const batch = fulls.slice(i, i + 20)
  await Promise.all(batch.map(async (full) => {
    try {
      const res = await fetch(`https://api.github.com/repos/${full}`, { headers: H })
      if (res.status === 404) { dead.push(full); return }
      if (!res.ok) return
      const repo = await res.json()
      if (typeof repo.stargazers_count === 'number') starMap.set(full, repo.stargazers_count)
      // 改名检测：GitHub 对改名仓库返回重定向，full_name 是新名字
      if (repo.full_name && repo.full_name.toLowerCase() !== full) {
        renamed.push({ from: full, to: repo.full_name })
      }
    } catch { /* 网络/限流错误，忽略 */ }
  }))
}

// 3. 更新 plugins/*.md 每个条目的 ⭐（保留已有 install 命令）
let mdUpdated = 0
for (const f of CATEGORY_FILES) {
  const path = join(PLUGINS_DIR, f)
  const content = readFileSync(path, 'utf8')
  const lines = content.split('\n')
  const out = lines.map((line) => {
    const m = line.match(/^(-\s*\[[^\]]+\]\(https:\/\/github\.com\/([^/]+\/[^)/?#]+)\)\s*—\s*)(.*)$/)
    if (!m) return line
    const linkPart = m[1]
    const full = m[2].toLowerCase()
    const rest = m[3]
    if (!starMap.has(full)) return line
    const newStar = starMap.get(full)
    const existingInstall = rest.match(/`dsh plugin add ([^`]+)`/)?.[1] ?? null
    let clean = rest.replace(/\s*⭐\s*\d+/g, '').replace(/\s*·\s*`dsh plugin add [^`]+`/g, '').trimEnd()
    let tail = ''
    if (newStar > 0) tail += ` ⭐${newStar}`
    if (existingInstall) tail += ` · \`dsh plugin add ${existingInstall}\``
    mdUpdated++
    return `${linkPart}${clean}${tail}`
  })
  writeFileSync(path, out.join('\n'))
}

console.log(`探测 ${listed.size} 个仓库，md 更新 ${mdUpdated} 条`)
if (renamed.length) {
  console.log(`\n⚠️ 改名仓库 ${renamed.length} 个：`)
  for (const r of renamed) console.log(`  ${r.from} → ${r.to}`)
}
if (dead.length) {
  console.log(`\n❌ 死仓库（404）${dead.length} 个：`)
  for (const d of dead) console.log(`  ${d}`)
}
