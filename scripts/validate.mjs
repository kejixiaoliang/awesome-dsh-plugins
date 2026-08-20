// validate.mjs — 校验目录数据质量（纯本地，不调网络）
// 1. 条目格式：是否匹配 `- [name](url) — 描述` 规范
// 2. 重复仓库：同一 fullName 被多次收录
// 用法：node scripts/validate.mjs
import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = fileURLToPath(new URL('..', import.meta.url))
const PLUGINS_DIR = join(ROOT, 'plugins')

const taxonomy = JSON.parse(readFileSync(join(ROOT, 'data', 'taxonomy.json'), 'utf8'))
const CATEGORY_FILES = taxonomy.categories.map((c) => c.file)

const ENTRY_RE = /^-\s*\[[^\]]+\]\(https:\/\/github\.com\/[^)]+\)\s*—\s*.*$/

const errors = []

// 目录条目格式 + 重复仓库校验
const seen = new Map() // fullName(小写) -> 分类文件
let total = 0
for (const f of CATEGORY_FILES) {
  const content = readFileSync(join(PLUGINS_DIR, f), 'utf8')
  for (const line of content.split('\n')) {
    if (!line.startsWith('- [')) continue
    if (!ENTRY_RE.test(line)) {
      errors.push(`格式错误 [${f}]: ${line.trim().slice(0, 70)}`)
      continue
    }
    const m = line.match(/\(https:\/\/github\.com\/([^/]+\/[^)/?#]+)\)/)
    if (m) {
      const full = m[1].toLowerCase()
      total++
      if (seen.has(full)) {
        errors.push(`重复仓库 [${f}]: ${full}（已见于 ${seen.get(full)}）`)
      } else {
        seen.set(full, f)
      }
    }
  }
}

if (errors.length) {
  console.error(`校验失败，共 ${errors.length} 个问题：`)
  for (const e of errors) console.error('  ✗ ' + e)
  process.exit(1)
}

console.log(`校验通过：目录 ${total} 条（唯一 ${seen.size}），无格式错误、无重复`)
