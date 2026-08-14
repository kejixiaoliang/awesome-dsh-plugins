// gen-readme.mjs — 从 plugins/*.md 提取条目，生成 README（英文）与 README.zh.md（中文）
// 里的内联折叠区（表格形式）与 Hot Plugins 排行榜。
// 用法：node scripts/gen-readme.mjs
// 折叠区由 <!-- categories:start --> ... <!-- categories:end --> 标记包裹，
// Hot Plugins 由 <!-- hot:start --> ... <!-- hot:end --> 标记包裹，脚本幂等替换。
import { readFileSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = fileURLToPath(new URL('..', import.meta.url))
const PLUGINS_DIR = join(ROOT, 'plugins')

const taxonomy = JSON.parse(readFileSync(join(ROOT, 'data', 'taxonomy.json'), 'utf8'))
const CATEGORIES = taxonomy.categories.map((c) => ({ file: c.file, en: c.en, zh: c.zh }))

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

function extractEntries(file) {
  const content = readFileSync(join(PLUGINS_DIR, file), 'utf8')
  return content.split('\n').filter((l) => ENTRY_RE.test(l)).map(parseEntry).filter(Boolean)
}

function catTableHeader(lang) {
  return lang === 'zh'
    ? '| 插件 | 描述 | ⭐ | 安装命令 |\n|---|---|---|---|'
    : '| Plugin | Description | ⭐ | Install |\n|---|---|---|---|'
}

function toCatRow(e) {
  return `| [${e.name}](${e.url}) | ${esc(e.desc)} | ${e.star || ''} | ${e.install || ''} |`
}

function buildBlocks(lang) {
  let total = 0
  const blocks = CATEGORIES.map((c) => {
    const entries = extractEntries(c.file)
    total += entries.length
    const title = lang === 'zh' ? c.zh : c.en
    const table = `${catTableHeader(lang)}\n${entries.map(toCatRow).join('\n')}`
    return `<details>\n<summary>${title} · ${entries.length}</summary>\n\n${table}\n\n</details>`
  })
  return { html: blocks.join('\n\n'), total }
}

function hotTableHeader(lang) {
  return lang === 'zh'
    ? '| # | 插件 | 描述 | ⭐ |\n|---|---|---|---|'
    : '| # | Plugin | Description | ⭐ |\n|---|---|---|---|'
}

function buildHot(lang) {
  const all = CATEGORIES.flatMap((c) => extractEntries(c.file))
  const top = all.filter((e) => e.star > 0).sort((a, b) => b.star - a.star).slice(0, 10)
  const rows = top.map((e, i) => `| ${i + 1} | [${e.name}](${e.url}) | ${esc(e.desc)} | ${e.star} |`)
  return `${hotTableHeader(lang)}\n${rows.join('\n')}`
}

function injectSection(content, startMarker, endMarker, html) {
  const start = content.indexOf(startMarker)
  const end = content.indexOf(endMarker)
  if (start === -1 || end === -1 || end < start) {
    throw new Error(`未找到标记 ${startMarker} / ${endMarker}`)
  }
  return content.slice(0, start + startMarker.length) + '\n\n' + html + '\n\n' + content.slice(end)
}

function inject(readmePath, lang) {
  let content = readFileSync(readmePath, 'utf8')
  const { html, total } = buildBlocks(lang)
  const hot = buildHot(lang)
  content = injectSection(content, '<!-- hot:start -->', '<!-- hot:end -->', hot)
  content = injectSection(content, '<!-- categories:start -->', '<!-- categories:end -->', html)
  writeFileSync(readmePath, content)
  return total
}

const enTotal = inject(join(ROOT, 'README.md'), 'en')
const zhTotal = inject(join(ROOT, 'README.zh.md'), 'zh')
console.log(`README.md 折叠区：${enTotal} 条；README.zh.md 折叠区：${zhTotal} 条`)
