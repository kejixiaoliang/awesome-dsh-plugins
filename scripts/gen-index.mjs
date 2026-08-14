// gen-index.mjs — 从 plugins/*.md 提取全部插件条目，生成单文件总索引 INDEX.md（表格形式）
// 用法：node scripts/gen-index.mjs
import { readFileSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = fileURLToPath(new URL('..', import.meta.url))
const PLUGINS_DIR = join(ROOT, 'plugins')

const taxonomy = JSON.parse(readFileSync(join(ROOT, 'data', 'taxonomy.json'), 'utf8'))
const CATEGORIES = taxonomy.categories.map((c) => [c.file, c.zh])

const ENTRY_RE = /^-\s*\[[^\]]+\]\(https:\/\/github\.com\/[^)]+\)\s*—\s*.*$/

// 把一行 `- [name](url) — 描述 [⭐N] [· \`install\`]` 解析成字段
function parseEntry(line) {
  const m = line.match(/^-\s*\[([^\]]+)\]\((https:\/\/github\.com\/[^)]+)\)\s*—\s*(.*)$/)
  if (!m) return null
  let [, name, url, rest] = m
  let install = ''
  const im = rest.match(/\s*·\s*(`[^`]+`)\s*$/)
  if (im) { install = im[1]; rest = rest.replace(/\s*·\s*`[^`]+`\s*$/, '') }
  let star = 0
  const sm = rest.match(/\s*⭐\s*(\d+)\s*$/)
  if (sm) { star = Number(sm[1]); rest = rest.replace(/\s*⭐\s*\d+\s*$/, '') }
  return { name, url, desc: rest.trim(), star, install }
}

const esc = (s) => s.replace(/\|/g, '\\|')

const TABLE_HEADER = '| 插件 | 描述 | ⭐ | 安装命令 |\n|---|---|---|---|'
const toRow = (e) => `| [${e.name}](${e.url}) | ${esc(e.desc)} | ${e.star || ''} | ${e.install || ''} |`

let total = 0
const sections = []

for (const [file, title] of CATEGORIES) {
  const content = readFileSync(join(PLUGINS_DIR, file), 'utf8')
  const entries = content
    .split('\n')
    .filter((l) => ENTRY_RE.test(l))
    .map(parseEntry)
    .filter(Boolean)
  total += entries.length
  const table = `${TABLE_HEADER}\n${entries.map(toRow).join('\n')}`
  sections.push(`## ${title}\n\n${table}\n\n[↩ 回到 ${title} 分类页](${file})\n`)
}

const header = `# 插件总索引

> 全部插件单文件扁平清单（按分类分组），方便在仓库里 \`Ctrl+F\` 全局搜索。共 **${total}** 条。
>
> 返回：[README](README.md) · [中文](README.zh.md)

`

writeFileSync(join(ROOT, 'INDEX.md'), header + sections.join('\n'))
console.log(`INDEX.md 已生成，共 ${total} 条`)
