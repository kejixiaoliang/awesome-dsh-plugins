# 分类体系（Taxonomy）

本目录把 DeepSeek Harness 插件分为 **14 个一级分类**。每个分类有唯一 id、中英文名、收录边界和归属示例。新增插件时，请按此边界归类（一个插件可属多个分类，取最贴切的一个为主分类）。

| id | 分类 | 收录边界 |
|---|---|---|
| `tools` | 🛠️ 工具类 Tools | 面向模型的**确定性工具**：计算、编码、JSON/CSV/正则、git、测试运行、安全删除、payload 捕获等 |
| `skills` | 🧩 技能类 Skills | **SKILL.md 技能包**：工程纪律、代码审查、技能迁移（Claude/Codex/Cursor/Gemini）、书转技能、插件开发技能 |
| `mcp` | 🔌 MCP 接入 | **MCP 协议相关**：MCP 服务器管理、MCP 代理、webfetch、OAuth MCP 客户端、视觉 MCP server |
| `ui-themes` | 🎨 Web UI / 皮肤 / 主题 | **界面与视觉**：皮肤、主题、配色、背景、生成式 UI、输入增强、消息显示、状态栏 |
| `desktop-tui-mobile` | 🖥️ 桌面端 / TUI / 移动端 | **运行外壳**：桌面壳（Electron/WPF/Wails/Tauri）、终端 TUI、移动端、常驻桌面助手 |
| `agent-orchestration` | 🤖 Agent 编排 / 多 Agent | **多 Agent 与编排**：Agent 团队、plan/execute 路由、A2A、meta-orchestrator、跨会话消息 |
| `context-memory` | 🧠 上下文 / 记忆 | **上下文与记忆**：长期记忆、上下文压缩/审计/蒸馏、会话搜索、知识库、自进化 |
| `multimodal` | 👁️ 多模态 / 视觉 | **视觉与多模态**：图片问答、OCR、UI 还原、截图对比、VLM 桥接、电脑控制（GUI） |
| `workflow-automation` | 🔁 工作流 / 自动化 | **流程编排**：深度研究、定时任务/cron、条件唤醒、计划批注、审查闭环、模型路由 |
| `notifications-channels` | 📡 通知 / 渠道 / 远程 | **对外通讯**：Telegram/微信/QQ/飞书机器人、桌面通知、webhook、SSH 远程 |
| `browser-search` | 🌐 浏览器 / 搜索 | **浏览器与搜索**：浏览器操控（CDP/Playwright/WebBridge）、网页抓取、搜索提供方（Tavily/Firecrawl 等） |
| `infrastructure-dev` | 🏗️ 基础设施 / 插件管理 / 开发工具 | **基建与开发**：插件管理器/注册表、健康检查、沙箱、遥测、hook、Docker、运维 |
| `fun-other` | 🎮 娱乐 / 其他 | **趣味与未归类**：小游戏、桌宠、表情、股票、短视频、教学、设计画布、费曼学习 |
| `official-meta` | 🏛️ 官方核心与元项目 | **官方与目录本身**：核心仓库、官方精选、awesome 列表、兼容雷达、社区 hub/registry |

## 每个插件条目的字段

```
- [插件名](https://github.com/owner/repo) — 一句话描述
```

可选附加信息（星标 ⭐、安装命令 `` `dsh plugin add <pkg>` ``、状态标记 `⚠️ 公开性待核实` / `（已归档）` / `（弃用）`、打包形态 `plugin/bundle/profile/skill/mcp/channel/infra/desktop/tui/skin`、两代协议 `static(.dsh-plugin)/dynamic(dsh.plugin.json)`）。

## 与机器可读数据的关系

机器可读数据由 `scripts/gen-web-data.mjs` 从 `plugins/*.md`（14 类清单）生成，产物为 `web/data.js`。本目录的 14 类分类是**人类可读的权威分类**。
