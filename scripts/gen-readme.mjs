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
const CATEGORIES = taxonomy.categories.map((c) => ({ file: c.file, en: c.en, zh: c.zh, enDesc: c.en_desc, zhDesc: c.zh_desc }))

const ENTRY_RE = /^-\s*\[[^\]]+\]\(https:\/\/github\.com\/[^)]+\)\s*—\s*.*$/

// 英文描述映射（fullName 小写 -> 英文描述），用于英文版 README
let EN_DESC = {}
try {
  EN_DESC = JSON.parse(readFileSync(join(ROOT, 'data', 'descriptions-en.json'), 'utf8'))
} catch { /* 文件不存在则回退中文描述 */ }

// 把一行 `- [name](url) — 描述 [⭐N] [· \`install\`]` 解析成字段
function parseEntry(line) {
  const m = line.match(/^-\s*\[([^\]]+)\]\((https:\/\/github\.com\/([^/]+\/[^)/?#]+))\)\s*—\s*(.*)$/)
  if (!m) return null
  let [, name, url, full, rest] = m
  let install = ''
  const im = rest.match(/\s*·\s*(`[^`]+`)\s*$/)
  if (im) { install = im[1]; rest = rest.replace(/\s*·\s*`[^`]+`\s*$/, '') }
  let star = 0
  const sm = rest.match(/\s*⭐\s*(\d+)\s*$/)
  if (sm) { star = Number(sm[1]); rest = rest.replace(/\s*⭐\s*\d+\s*$/, '') }
  return { name, url, full: full.toLowerCase(), desc: rest.trim(), star, install }
}

// 英文版用英文描述，中文版用中文描述
function getDesc(e, lang) {
  if (lang === 'en' && EN_DESC[e.full]) return EN_DESC[e.full]
  return e.desc
}

const esc = (s) => s.replace(/\|/g, '\\|')

function extractEntries(file) {
  const content = readFileSync(join(PLUGINS_DIR, file), 'utf8')
  return content.split('\n').filter((l) => ENTRY_RE.test(l)).map(parseEntry).filter(Boolean)
}

function catTableHeader(lang) {
  return lang === 'zh'
    ? '| 插件 | ⭐ | 描述 | 安装命令 |\n|---|---|---|---|'
    : '| Plugin | ⭐ | Description | Install |\n|---|---|---|---|'
}

function toCatRow(e, lang) {
  return `| [${e.name}](${e.url}) | ${e.star || ''} | ${esc(getDesc(e, lang))} | ${e.install || ''} |`
}

function buildBlocks(lang) {
  let total = 0
  const blocks = CATEGORIES.map((c) => {
    const entries = extractEntries(c.file)
    total += entries.length
    const title = lang === 'zh' ? c.zh : c.en
    const table = `${catTableHeader(lang)}\n${entries.map((e) => toCatRow(e, lang)).join('\n')}`
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
  const medals = ['🥇', '🥈', '🥉']
  const rows = top.map((e, i) => `| ${medals[i] ?? (i + 1)} | [${e.name}](${e.url}) | ${esc(getDesc(e, lang))} | ${e.star} |`)
  return `${hotTableHeader(lang)}\n${rows.join('\n')}`
}

// 生成「分类目录」表（含插件数）
function buildCatIndex(lang) {
  const header = lang === 'zh'
    ? '| # | 分类 | 插件数 | 说明 |\n|---|---|---|---|'
    : '| # | Category | Plugins | Description |\n|---|---|---|---|'
  const rows = CATEGORIES.map((c, i) => {
    const count = extractEntries(c.file).length
    const name = lang === 'zh' ? c.zh : c.en
    const desc = lang === 'zh' ? c.zhDesc : c.enDesc
    return `| ${i + 1} | [${name}](plugins/${c.file}) | ${count} | ${desc} |`
  })
  return `${header}\n${rows.join('\n')}`
}

function injectSection(content, startMarker, endMarker, html) {
  const start = content.indexOf(startMarker)
  const end = content.indexOf(endMarker)
  if (start === -1 || end === -1 || end < start) {
    throw new Error(`未找到标记 ${startMarker} / ${endMarker}`)
  }
  return content.slice(0, start + startMarker.length) + '\n\n' + html + '\n\n' + content.slice(end)
}

// 统计目录里唯一的 fullName 数（去重）
function collectUniqueCount() {
  const set = new Set()
  const URL_RE = /\(https:\/\/github\.com\/([^/]+\/[^)/?#]+)\)/g
  for (const c of CATEGORIES) {
    const content = readFileSync(join(PLUGINS_DIR, c.file), 'utf8')
    let m
    while ((m = URL_RE.exec(content)) !== null) set.add(m[1].toLowerCase())
  }
  return set.size
}

// 动态替换 README 顶部/Stats 的手写数字，避免过时（正则泛化，兼容任意历史数字）
function injectStats(content, lang, { entryCount, uniqueCount }) {
  if (lang === 'zh') {
    return content
      .replace(/14 类 \d+\+? 个插件/, `14 类 ${entryCount} 个插件`)
      .replace(/plugins-\d+\+?-blue/, `plugins-${entryCount}-blue`)
      .replace(/\*\*\d+\*\* 条（去重后 \d+ 个插件）/, `**${entryCount}** 条（去重后 ${uniqueCount} 个插件）`)
  }
  return content
    .replace(/of \d+\+? \[DeepSeek/, `of ${entryCount}+ [DeepSeek`)
    .replace(/plugins-\d+\+?-blue/, `plugins-${entryCount}-blue`)
    .replace(/\*\*\d+\*\* entries \(\d+ unique\)/, `**${entryCount}** entries (${uniqueCount} unique)`)
}

function inject(readmePath, lang) {
  let content = readFileSync(readmePath, 'utf8')
  const { html, total } = buildBlocks(lang)
  const hot = buildHot(lang)
  const catIndex = buildCatIndex(lang)
  content = injectSection(content, '<!-- catindex:start -->', '<!-- catindex:end -->', catIndex)
  content = injectSection(content, '<!-- hot:start -->', '<!-- hot:end -->', hot)
  content = injectSection(content, '<!-- categories:start -->', '<!-- categories:end -->', html)
  const stats = {
    entryCount: total,
    uniqueCount: collectUniqueCount(),
  }
  content = injectStats(content, lang, stats)
  writeFileSync(readmePath, content)
  return total
}

const enTotal = inject(join(ROOT, 'README.md'), 'en')
const zhTotal = inject(join(ROOT, 'README.zh.md'), 'zh')
console.log(`README.md 折叠区：${enTotal} 条；README.zh.md 折叠区：${zhTotal} 条`)
