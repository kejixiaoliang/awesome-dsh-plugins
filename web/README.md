# web/ — 插件目录展示页

> 一个**纯静态、零构建**的 DeepSeek Harness（`dsh`）插件目录展示页。
> 把本仓库的 14 类插件清单做成能搜索、能筛选、能一键复制安装命令的网页。

## 快速预览

三种方式任选其一：

1. **直接双击 `web/index.html`**（最简单）
   数据已经内联进 `web/data.js`，不依赖服务器、不受 `file://` 的 CORS 限制，双击即可打开。

2. **本地静态服务器**（推荐，体验和线上一致）
   ```bash
   # 任选其一
   npx serve web
   python -m http.server 8899 --directory web
   # 然后浏览器打开 http://127.0.0.1:8899/
   ```

3. **部署到 GitHub Pages**（可选）
   纯静态无需构建，把 `web/` 推上去配 Pages 即可（见下文「部署」）。

## 文件结构

```
web/
  index.html   页面结构（头部统计 / 搜索 / 分类 chips / 卡片网格 / 详情弹窗）
  styles.css   样式（简洁现代浅色）
  app.js       交互逻辑（搜索 / 筛选 / 排序 / 复制 / 详情弹窗）
  data.js      数据（由脚本生成，内联 window.__DSH_DATA__）
  README.md    本文档
```

## 功能

- **实时搜索**：匹配名称 / 描述 / 仓库 / 安装命令 / 分类（`Ctrl+K` 快速聚焦搜索框）
- **14 类筛选**：顶部 chips 点选分类，显示每类插件数
- **排序**：⭐ 最多 / ⭐ 最少 / 名称 A→Z
- **详情弹窗**：点卡片看完整描述、GitHub 仓库、安装命令
- **一键复制**：安装命令一键复制（Clipboard API + 降级方案）

## 数据从哪来、如何更新

网页数据由 `scripts/gen-web-data.mjs` 生成，**单一命令重新生成**：

```bash
node scripts/gen-web-data.mjs
```

它会产出 `web/data.js`。**插件数据更新后，跑一次这条命令，刷新页面即可看到最新数据。**

生成脚本的数据来源（只用 14 类清单）：

| 来源 | 提供什么 | 备注 |
|---|---|---|
| `data/taxonomy.json` | 14 类权威分类（id / 中英文名 / 描述） | 分类的唯一真源 |
| `plugins/*.md` | 每个插件的 14 类归属、中文描述、⭐、安装命令 | **网页分类口径与 README 完全一致** |

## 日常数据更新机制（了解即可）

本仓库的 CI（`.github/workflows/sync.yml`）每 3 小时自动：

1. `scripts/probe-stars.mjs` — 用 GitHub API 探测每个插件的实时 star（需要 `GITHUB_TOKEN`）
2. `scripts/gen-index.mjs` — 重生成 INDEX.md
3. `scripts/gen-readme.mjs` — 重生成 README.md / README.zh.md

网页数据**不会**被这套 CI 自动重新生成；`data.js` 只在手动跑 `node scripts/gen-web-data.mjs` 时更新。如需让网页也自动同步，可在 `sync.yml` 里追加 `node scripts/gen-web-data.mjs` 一步。

## 部署（GitHub Pages，可选）

纯静态站点，两种常见方式：

1. **分支方式**：把 `web/` 内容推到 `gh-pages` 分支，Pages 源设为该分支根目录。
2. **Action 方式**：用 `actions/upload-pages-artifact` 上传 `web/` 目录再发布。

> 注意：页面里 footer 有指向 `../plugins/` 的相对链接，本地从 `web/` 根访问没问题；部署时若只发布 `web/` 单独目录，这个链接会 404，可改成指向本仓库 GitHub 页面的绝对 URL。
