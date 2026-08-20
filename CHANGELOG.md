# Changelog

本项目的更新记录。格式参考 [Keep a Changelog](https://keepachangelog.com/zh-CN/1.0.0/)。

## [Unreleased]

### Added
- 新增 [docs/reconcile.md](docs/reconcile.md)：数据 vs 目录的自动对账报告（`scripts/reconcile.mjs`）
- 新增 [data/taxonomy.json](data/taxonomy.json)：14 类分类的单一真源，脚本统一读取
- 新增 [scripts/probe-stars.mjs](scripts/probe-stars.mjs)：直接探测 GitHub 实时 star，不再依赖上游快照
- README 折叠区与 INDEX 改为表格呈现；Hot Plugins 排行榜按 star 自动生成
- 收录 dsh-web-ui、dsh-passwords 等 12 个新插件

### Changed
- star 数据改为自己探测 GitHub 实时值（脱离对上游 awesome-dsh-plugin 的依赖）
- `sync-data` 触发周期 12 小时 → 3 小时
- `enrich.mjs` 改为保守策略：上游 npm 为 null 时保留目录已有 install 命令
- README 顶部数字（插件数/种子数据数）改为 `gen-readme.mjs` 动态生成

### Fixed
- 修复 sync-data 因上游数据源迁移（`docs/plugins.json` / `stars.json` 移除）导致的同步失效
- 修复 CRLF 行尾导致生成脚本漏解析条目（新增 `.gitattributes` 强制 LF）
- 修复 INDEX.md「返回分类页」链接缺 `plugins/` 前缀导致的死链（`scripts/gen-index.mjs`）

### Removed
- 移除 `hyqhyq3/dsh-mcp-manager`（安全原因）：从 `plugins/mcp.md` 及英文描述、README/INDEX/web 数据中删除，并清理 `_research/` 上游快照中的残留引用
- 移除 16 个已删除/私有仓库条目（死链，404）：`bitterSmilezzz/*` ×3、`dsh-external/*` ×12、`Roy-oss1/dsh-lark`，从各 `plugins/*.md`、英文描述及 README/INDEX/web 数据中删除
- 废除上游 registry 历史快照：删除 `data/plugins.json` / `data/README.md` / `scripts/reconcile.mjs` / `scripts/enrich.mjs` / `docs/reconcile.md`，`plugins/*.md` 成为唯一真源，机器可读数据由 `gen-web-data.mjs` 生成 `web/data.js`

## [0.1.0] - 2026-08-14

### Added
- 初始目录：**14 个分类、280+ 条插件**，覆盖 MCP / Skill / TUI / 多 Agent / 记忆 / 皮肤 / 浏览器等
- 双语 README：英文主展示 `README.md` + 中文 `README.zh.md`，顶部点击切换
- README 内联折叠浏览全部插件（`<details>/<summary>`），保留分类目录表
- 每条插件附 GitHub star 数与安装命令 `dsh plugin add <pkg>`
- 全量单文件索引 [INDEX.md](INDEX.md)（287 条，便于 `Ctrl+F` 全局搜索）
- 机器可读数据 [data/plugins.json](data/plugins.json)（334 条种子数据）+ 字段说明 [data/README.md](data/README.md)
- 生成脚本：`enrich.mjs`（补 star/安装命令/导航）、`gen-index.mjs`（总索引）、`gen-readme.mjs`（折叠区）
- CI：[validate.yml](.github/workflows/validate.yml)（数据校验）、[sync.yml](.github/workflows/sync.yml)（定时同步上游数据）
- 贡献指南 [CONTRIBUTING.md](CONTRIBUTING.md)、行为准则 [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md)、PR/Issue 模板
- 分类定义与归档标记约定 [docs/taxonomy.md](docs/taxonomy.md)
