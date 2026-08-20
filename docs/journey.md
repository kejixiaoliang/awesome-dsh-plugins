# 项目演进记录

> 本文记录 awesome-dsh-plugins 从「初始审核 PR」到「数据全链路自洽」的完整演进过程，含关键决策、架构变化与踩过的坑。供后续维护者了解来龙去脉。

## 一、项目定位

社区维护的 DeepSeek Harness（`dsh`）插件索引目录。核心约定：

- **源文件** = `plugins/*.md`（14 个分类，一行一个插件条目，人工维护的权威数据）
- **生成物** = `README.md` / `README.zh.md` / `INDEX.md`（由脚本从源文件自动生成，禁止手改）
- **机器可读数据** = `web/data.js`（由 `gen-web-data.mjs` 从源文件生成）
- **分类权威** = `docs/taxonomy.md`（14 类边界）

---

## 二、演进时间线

### 阶段 0：审核外部 PR（3 个）

审核了 3 个开放 PR，确立了「源文件 vs 生成物」的核心认知：

- **PR #1** Code2Skill → 正确修改源文件 `plugins/skills.md`，审批通过并合并。
- **PR #2**（dsh-chat-import 描述更新）→ 直接改 README（错误），改为改源文件 `plugins/context-memory.md` 后合入。
- **PR #3**（dsh-reverse-skill）→ 误入「Hot Plugins」板块，归入 `plugins/skills.md` 分类后合入。

**关键发现**：`README.md` 的折叠区由 `gen-readme.mjs` 从 `plugins/*.md` 生成，直接改 README 会在下次生成时被覆盖——这是本仓库最重要的架构约束。

### 阶段 1：修复 CRLF 行尾 bug

生成脚本时发现 `skills.md` 条目数异常（应为 15 条却解析出 0 条）。根因：该文件行尾是 **CRLF**，而生成脚本的正则 `.*$` 在 `\r` 结尾的行上匹配失败，导致整类条目被丢弃。

**修复**：新增 `.gitattributes` 强制 `*.md` / `*.json` 用 LF。

### 阶段 2：修复 sync-data（上游数据源迁移）

`sync-data` CI 连续失败。根因：上游 `awesome-dsh-plugin` 把 `data/plugins.json` 迁移为 `docs/plugins.json`（Public registry API），字段结构大变（`fullName` 拆成 `owner`/`name`、`description` 变双语、`category` 换 11 类、移除 `license`）。

**修复**（PR #4）：新增 `convert-registry.mjs` 做字段映射 + 改造 `sync.yml`。

### 阶段 3：enrich 保守策略

发现上游 registry 对部分插件的 `npm` 探测为 `null`，旧 `enrich.mjs` 会无条件清掉目录里已有的 install 命令，误清了 106 条。

**修复**（PR #5）：npm 为 null 时回退到目录已有 install 命令，并从 git 历史恢复被误清的 106 条。

### 阶段 4：表格化 + Hot Plugins 自动生成

用户反馈 README 里 `Hot Plugins` 板块的 star 是过时的旧快照（modlens 显示 ⭐696 而实际 1200+）。根因：该板块是**手动维护的静态快照**，不在自动生成范围内。

**修复**（PR #6）：
- `Hot Plugins` 改为按 star 自动生成 top 10 表格
- 折叠区 / INDEX 全部改为表格形式（插件 / 描述 / ⭐ / 安装命令）

### 阶段 5：sync 周期调整

`sync-data` 触发周期 12h → 3h（PR #7）。

### 阶段 6：放弃「自动发现」方案

曾尝试「自动扫描 GitHub topic:dsh-plugin 生成候选清单」（PR #8），后用户决定**不采用自动扫描**，改为「定期由 agent 手动搜集整理」——更可控，避免自动收录垃圾/恶意仓库。

### 阶段 7：搜集 + 收录新插件

按人工搜集 → 去重 → 逐个审查 → 收录的流程，收录了 12 个新插件（dsh-web-ui、dsh-passwords 等），并修正了 `dsh-cc-tui → dsh-TUI` 改名、`dsh-multica-runtime` 仓库迁移（PR #9、#11，issue #10）。

### 阶段 8：star 改为直接探测实时值

用户发现 star 数据再次停止更新。根因：上游**又重构**，删除了 `docs/plugins.json` 和 `stars.json`，本仓库 sync 拉不到数据（一直「优雅跳过」）。

**修复**（PR #12）：彻底切断对上游 star 快照的依赖——
- 新增 `probe-stars.mjs`：直接调 GitHub API 探测目录里每个插件的实时 `stargazers_count`，更新 `data/plugins.json` 与 `plugins/*.md`
- `sync.yml` 改为 `probe-stars → gen → commit`

### 阶段 9：全面体检与完善

做了一次完整体检，发现并修复（PR #13）：
- README 顶部数字（280+ / 334 / 505 等）手写硬编码且过时 → 改为 `gen-readme.mjs` 动态生成
- CHANGELOG 未更新 → 补齐
- 本地残留分支、未关闭 issue → 清理
- 孤儿脚本 `convert-registry.mjs` → 删除，`enrich.mjs` → 标注废弃

### 阶段 10：废除上游 registry 快照

确认项目已完全脱离上游 awesome-dsh-plugin（star 自己探测、收录人工维护），遂删除脱节的历史快照 `data/plugins.json` 及其配套：

- 删除 `data/plugins.json` / `data/README.md` / `scripts/reconcile.mjs` / `scripts/enrich.mjs` / `docs/reconcile.md`
- `probe-stars.mjs` 不再读写 data，只更新 `plugins/*.md` 的 ⭐
- `validate.mjs` 只校验目录格式与重复；`gen-readme.mjs` 去掉「种子数据」统计
- 机器可读数据统一由 `gen-web-data.mjs` 从 14 类清单生成 `web/data.js`
- 自此 `plugins/*.md` 成为**唯一真源**

---

## 三、数据流架构演变

本仓库的 star 数据来源经历了三个阶段：

| 阶段 | star 来源 | 问题 |
|---|---|---|
| 1. 依赖上游 `data/plugins.json` | 上游快照 | 上游迁移后 404 |
| 2. 依赖上游 `docs/plugins.json`（registry） | 上游快照 | 上游又删除，再次 404 |
| 3. **自己探测 GitHub 实时值** | `probe-stars.mjs` 直接调 GitHub API | ✅ 彻底自主，上游怎么折腾都不影响 |

**当前数据流**：

```
sync-data（每 3 小时）
  → probe-stars.mjs 调 GitHub API 拿每个插件的实时 star
  → 更新 plugins/*.md 的 ⭐
  → gen-index.mjs / gen-readme.mjs 重新生成 INDEX / README（含 Hot Plugins 排序）
  → 提交
```

---

## 四、关键教训

1. **源文件 vs 生成物要分清**：只改 `plugins/*.md`，README/INDEX 交给脚本生成，否则改动会被覆盖。
2. **行尾要统一**：Windows 的 CRLF 会让正则 `.*$` 漏匹配，`.gitattributes` 强制 LF 一劳永逸。
3. **不要依赖外部数据源的稳定性**：上游 `awesome-dsh-plugin` 两次改数据结构，导致本仓库 star 链路两次断裂。最终改为自己直接探测 GitHub 才是正解。
4. **自动生成 + 表格呈现**：300+ 条数据靠脚本生成表格，比手工维护可靠得多；Hot Plugins 这种「排行榜」必须自动生成，否则必然过时。
5. **手写数字必过时**：README 顶部的「280+ plugins」这类数字，要么动态生成，要么接受它过时。

---

## 五、当前状态快照

| 项 | 值 |
|---|---|
| 插件条目 | 299 条（299 个唯一仓库） |
| 分类 | 14 类 |
| star | 实时（probe-stars 每 3 小时探测） |
| 生成脚本 | `gen-readme.mjs` / `gen-index.mjs` / `gen-web-data.mjs` / `probe-stars.mjs` |
| CI | `validate`（校验）· `sync-data`（3h star 同步）· `linkcheck`（死链） |
| 呈现 | 全表格 + Hot Plugins 自动排序 |
