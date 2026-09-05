# 🧠 上下文 / 记忆

> **上下文与记忆**：长期记忆、上下文压缩/审计/蒸馏、会话搜索、知识库、回退/撤销。返回 [目录](../README.md#分类目录)

## 记忆 / 知识

- [dsh-memory-evolve](https://github.com/csyangwen/dsh-memory-evolve) — 跨会话长期记忆 + 后台自我进化（五轨记忆/git 分支感知/技能进化） ⭐284
- [billion-context-dsh](https://github.com/Tyan66666/billion-context-dsh) — 模型驱动上下文压缩（ACP）：模型决定何时压缩（移植自 billion-context-pi） ⭐73
- [dsh-memory](https://github.com/Jesse-njx/dsh-memory) — 基于无损会话日志的引用式记忆（事实带 sessionId/eventRange 引用） ⭐2 · `dsh plugin add @dsh-memory/bundle`
- [dsh-memory](https://github.com/ben7am1n/dsh-memory) — 跨会话 SQLite 持久记忆 ⭐1 · `dsh plugin add dsh-memory`
- [dsh-mnemon](https://github.com/omdsh-dev/dsh-mnemon) — Mnemon 本地三层记忆（Runtime Memory/可检索文档/受监督 Memory Spaces） ⭐333 · `dsh plugin add dsh-mnemon`
- [nowledge-mem-deepseek-harness](https://github.com/nowledge-co/nowledge-mem-deepseek-harness) — 给所有 AI 工具共用的一层记忆（Context Bundle 注入 + MCP 工具 + 线程捕获） ⭐6 · `dsh plugin add nowledge-mem-deepseek-harness`
- [dsh-plugin-meta-memory](https://github.com/YYTbit/dsh-plugin-meta-memory) — 结构化长期记忆系统 ⭐4 · `dsh plugin add dsh-plugin-meta-memory`
- [dsh-kb-sieve](https://github.com/omdsh-dev/dsh-kb-sieve) — 从 md/txt/docx/pdf 构建可审计知识库包（SQLite FTS5） ⭐3 · `dsh plugin add @dsh-external/dsh-kb-sieve`
- [dsh-llm-wiki](https://github.com/detpecca/dsh-llm-wiki) — 从 agent 管理 LLM-Wiki 知识库（wiki_search/read/stats/ingest 等） ⭐4 · `dsh plugin add @detpecca/dsh-llm-wiki`
- [dsh-continual-evolve](https://github.com/ZK-Andy/dsh-continual-evolve) — 持续自进化：版本化、可审计、可回滚的 harness 状态（提示词/记忆/技能/子代理规格）沉淀自会话轨迹，带审查门禁与技能热加载 ⭐19 · `dsh plugin add dsh-continual-evolve`
- [dsh-meow-memory](https://github.com/Phant0Meow/dsh-meow-memory) — 跨会话项目记忆：SQLite 分层存储 + 关键词/语义检索，逐消息命中注入与窗口期整理 ⭐80 · `dsh plugin add github:Phant0Meow/dsh-meow-memory`

## 上下文审计 / 压缩 / 蒸馏

- [dsh-context-doctor](https://github.com/Zhenyu98/dsh-context-doctor) — 上下文注入审计：统计指令链/技能目录/工具 schema 的 token 成本，检测重复冲突 ⭐28 · `dsh plugin add dsh-context-doctor`
- [context-vista](https://github.com/GooodWei/context-vista) — `/context` 命令 + 环形图实时展示上下文 token 用量与费用 ⭐12 · `dsh plugin add context-vista`
- [distill](https://github.com/LoserFox/distill) — 自动对话蒸馏：后台 subagent 反省 + 技能 create/update ⭐24 · `dsh plugin add @loserfox/distill`
- [dsh-auto-compact](https://github.com/wangxiang0605qvq/dsh-auto-compact) — compact_now 工具，回合结束自动压缩上下文 ⭐1
- [dsh-context](https://github.com/bowenliang123/dsh-context) — 上下文洞察面板：展示模型上下文窗口的构成与演化 ⭐1295 · `dsh plugin add dsh-context`

## 会话控制 / 回退

- [dsh-turn-rewind](https://github.com/Anionex/dsh-turn-rewind) — 对话回退：基于持久 Change Ledger 回滚会话与工作区状态 ⭐112 · `dsh plugin add @dsh-external/turn-rewind`
- [dsh-undo](https://github.com/LingLambda/dsh-undo) — 上下文 undo/redo：回退到上一个已完成步骤并恢复 ⭐4 · `dsh plugin add dsh-undo`
- [dsh-recall](https://github.com/Mongfayi/dsh-recall) — 消息撤回：每条用户消息一个撤销按钮，删除该轮及其后内容（不改代码） ⭐3 · `dsh plugin add dsh-recall`
- [dsh-sidechain](https://github.com/omdsh-dev/dsh-sidechain) — `/side` 持续性侧会话与 `/btw` 一次性侧问，在临时 fork 中运行 ⭐14 · `dsh plugin add @dsh-external/dsh-sidechain`
- [dsh-message-edit](https://github.com/Moeblack/dsh-message-edit) — 基于分支的消息编辑、reroll、重试与版本时间线 ⭐49 · `dsh plugin add dsh-message-edit`
- [dsh-session-search](https://github.com/Tieboyh/dsh-session-search) — 跨 dsh/Codex/Claude/pi/OpenCode 会话的无索引全文搜索 ⭐2
- [dsh-chat-import](https://github.com/Nwflower/dsh-chat-import) — 13 源全保真导入（Claude Code/Codex/ChatGPT/Cursor/Gemini/Reasonix/opencode/ZCode/Grok Build/OpenClaw/Pi/Hermes/Kimi）历史会话为可续聊 DSH 会话 ⭐135 · `dsh plugin add dsh-chat-import`
- [dsh-claude-move](https://github.com/PerryLink/dsh-claude-move) — 迁移 Claude Code 会话/记忆/技能/CLAUDE.md 到 DSH ⭐15 · `dsh plugin add dsh-claude-move`

<!-- nav:start -->
---
← [上一类: 🤖 Agent 编排 / 多 Agent](agent-orchestration.md) · [返回目录](../README.md) · [下一类: 👁️ 多模态 / 视觉](multimodal.md) →
<!-- nav:end -->
