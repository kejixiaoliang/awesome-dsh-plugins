# data/ 机器可读数据

本目录提供机器可读的插件数据，供脚本、插件市场、下游工具直接消费。

## 文件

- [`plugins.json`](plugins.json) — 插件结构化数据（334 条种子数据）

## 字段说明（plugins.json）

```jsonc
{
  "updatedAt": "2026-08-13T19:30:37.422Z",   // 数据快照时间
  "plugins": [
    {
      "fullName": "owner/repo",              // 仓库全名
      "url": "https://github.com/owner/repo",// GitHub 地址
      "description": "...",                   // 一句话描述
      "stars": 696,                           // star 数（快照时）
      "pushedAt": "2026-08-14T00:00:00Z",     // 收录日期（由上游 added 字段近似，非精确 push 时间）
      "license": null,                        // 许可证（上游新 registry 不再提供，恒为 null）
      "isPlugin": true,                       // 是否为插件（当前全为 true）
      "npmName": "@scope/pkg",                // npm 包名（可能为 null）
      "category": { "id": "ui", "title": "UI 增强 / UI Enhancements" }  // 上游 11 类分类
    }
  ]
}
```

> 注意：`category` 字段沿用上游（awesome-dsh-plugin）当前 registry 的 11 类 taxonomy（ui/theme/session/memory/tools/skill/workflow/notify/model/dev/fun），与本仓库 `docs/taxonomy.md` 的 14 类**不完全一致**。人类可读的权威分类以各 `plugins/*.md` 与 `docs/taxonomy.md` 为准。

## 消费示例

```bash
# 统计各分类数量（jq）
jq '.plugins | group_by(.category.id) | map({cat: .[0].category.id, n: length})' data/plugins.json

# 按 star 排序取前 10（jq）
jq '.plugins | sort_by(-.stars) | .[0:10] | map(.fullName + " " + (.stars|tostring))' data/plugins.json
```

```js
// Node.js
const { plugins } = JSON.parse(require('fs').readFileSync('data/plugins.json', 'utf8'))
const top = plugins.filter(p => p.isPlugin).sort((a, b) => b.stars - a.stars).slice(0, 10)
```

```python
# Python
import json
d = json.load(open("data/plugins.json", encoding="utf-8"))
top = sorted(d["plugins"], key=lambda p: p["stars"] or 0, reverse=True)[:10]
```

## 来源与许可

种子数据最初来自社区精选列表 [awesome-dsh-plugin/awesome-dsh-plugin](https://github.com/awesome-dsh-plugin/awesome-dsh-plugin)（CC0-1.0）。`stars` 字段现由 `scripts/probe-stars.mjs` 直接探测 GitHub 实时值更新。本仓库数据在此基础上整理，遵循其许可；如需再分发请保留其署名。
