// 生成 web/data.js —— 供纯静态展示页消费的插件数据
//
// 数据来源（只用 14 类清单）：
//   1. data/taxonomy.json  —— 14 类权威分类表（id / zh / en / 描述）
//   2. plugins/*.md        —— 每条插件的 14 类归属、中文描述、⭐star、安装命令
//
// 用法：node scripts/gen-web-data.mjs
// 产物：web/data.js（window.__DSH_DATA__ = {...}）

import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');
const WEB_DIR = join(ROOT, 'web');

function readJson(path, fallback) {
  try {
    return JSON.parse(readFileSync(path, 'utf8'));
  } catch {
    return fallback;
  }
}

// 1) 分类表
const taxonomy = readJson(join(ROOT, 'data', 'taxonomy.json'), { categories: [] });
const categories = taxonomy.categories || [];

// 2) 解析 plugins/*.md
const plugins = [];
const perCategory = new Map(); // catId -> count

for (const cat of categories) {
  let text = '';
  try {
    text = readFileSync(join(ROOT, 'plugins', cat.file), 'utf8');
  } catch {
    console.warn(`⚠️  跳过：找不到 plugins/${cat.file}`);
    continue;
  }

  let count = 0;
  for (const line of text.split(/\r?\n/)) {
    const link = line.match(/^-\s*\[([^\]]+)\]\(([^)]+)\)/);
    if (!link) continue;

    const name = link[1].trim();
    const url = link[2].trim();
    let rest = line.slice(link[0].length);

    // 安装命令：行尾最后一个以 `dsh` 开头的反引号片段
    let install = null;
    const instMatch = rest.match(/`(dsh[^`]*)`\s*$/);
    if (instMatch) {
      install = instMatch[1];
      rest = rest.slice(0, instMatch.index);
    }

    // star：⭐ 后跟数字（可能含千分位逗号）
    let stars = null;
    const starMatch = rest.match(/⭐\s*([\d,]+)/);
    if (starMatch) {
      stars = parseInt(starMatch[1].replace(/,/g, ''), 10);
      rest = rest.replace(/⭐\s*[\d,]+/, '');
    }

    // 描述：去掉前导「 — 」与尾部「 · 」
    const description = rest
      .replace(/^\s*—\s*/, '')
      .replace(/\s*·\s*$/, '')
      .trim();

    const gh = url.match(/github\.com\/([^/]+)\/([^/]+)/);
    const owner = gh ? gh[1] : '';
    const repo = gh ? gh[2] : '';

    plugins.push({
      name,
      url,
      owner,
      repo,
      description,
      stars,
      install,
      category: cat.id,
    });
    count += 1;
  }
  perCategory.set(cat.id, count);
}

// 3) 产出 data.js
const data = {
  generatedAt: new Date().toISOString(),
  source: 'scripts/gen-web-data.mjs',
  stats: {
    plugins: plugins.length,
    categories: categories.length,
    withInstall: plugins.filter((p) => p.install).length,
    withStars: plugins.filter((p) => typeof p.stars === 'number').length,
  },
  categories,
  plugins,
};

mkdirSync(WEB_DIR, { recursive: true });
writeFileSync(
  join(WEB_DIR, 'data.js'),
  `// 由 scripts/gen-web-data.mjs 自动生成，请勿手改。\nwindow.__DSH_DATA__ = ${JSON.stringify(data, null, 2)};\n`,
  'utf8',
);

// 4) 控制台摘要
console.log(`✅ 已生成 web/data.js`);
console.log(`   插件总数：${data.stats.plugins}`);
console.log(`   分类总数：${data.stats.categories}`);
console.log(`   含安装命令：${data.stats.withInstall}`);
console.log(`   含 star：${data.stats.withStars}`);
console.log('');
for (const cat of categories) {
  console.log(`   ${String(perCategory.get(cat.id) ?? 0).padStart(3)}  ${cat.zh}`);
}
