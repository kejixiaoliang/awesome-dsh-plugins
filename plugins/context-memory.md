# 🧠 上下文 / 记忆

> **上下文与记忆**：长期记忆、上下文压缩/审计/蒸馏、会话搜索、知识库、回退/撤销。返回 [目录](../README.md#分类目录)

## 记忆 / 知识

- [dsh-memory-evolve](https://github.com/csyangwen/dsh-memory-evolve) — 跨会话长期记忆 + 后台自我进化（五轨记忆/git 分支感知/技能进化） ⭐375
- [billion-context-dsh](https://github.com/Tyan66666/billion-context-dsh) — 模型驱动上下文压缩（ACP）：模型决定何时压缩（移植自 billion-context-pi） ⭐139
- [dsh-memory](https://github.com/Jesse-njx/dsh-memory) — 基于无损会话日志的引用式记忆（事实带 sessionId/eventRange 引用） ⭐1 · `dsh plugin add @dsh-memory/bundle`
- [dsh-memory](https://github.com/ben7am1n/dsh-memory) — 跨会话 SQLite 持久记忆 · `dsh plugin add dsh-memory`
- [dsh-mnemon](https://github.com/omdsh-dev/dsh-mnemon) — Mnemon 本地三层记忆（Runtime Memory/可检索文档/受监督 Memory Spaces） ⭐488 · `dsh plugin add dsh-mnemon`
- [nowledge-mem-deepseek-harness](https://github.com/nowledge-co/nowledge-mem-deepseek-harness) — 给所有 AI 工具共用的一层记忆（Context Bundle 注入 + MCP 工具 + 线程捕获） ⭐7 · `dsh plugin add nowledge-mem-deepseek-harness`
- [dsh-plugin-meta-memory](https://github.com/YYTbit/dsh-plugin-meta-memory) — 结构化长期记忆系统 ⭐5 · `dsh plugin add dsh-plugin-meta-memory`
- [dsh-kb-sieve](https://github.com/omdsh-dev/dsh-kb-sieve) — 从 md/txt/docx/pdf 构建可审计知识库包（SQLite FTS5） ⭐2 · `dsh plugin add @dsh-external/dsh-kb-sieve`
- [dsh-llm-wiki](https://github.com/detpecca/dsh-llm-wiki) — 从 agent 管理 LLM-Wiki 知识库（wiki_search/read/stats/ingest 等） ⭐3 · `dsh plugin add @detpecca/dsh-llm-wiki`
- [dsh-continual-evolve](https://github.com/ZK-Andy/dsh-continual-evolve) — 持续自进化：版本化、可审计、可回滚的 harness 状态（提示词/记忆/技能/子代理规格）沉淀自会话轨迹，带审查门禁与技能热加载 ⭐20 · `dsh plugin add dsh-continual-evolve`
- [dsh-meow-memory](https://github.com/Phant0Meow/dsh-meow-memory) — 跨会话项目记忆：SQLite 分层存储 + 关键词/语义检索，逐消息命中注入与窗口期整理 ⭐175 · `dsh plugin add github:Phant0Meow/dsh-meow-memory`

## 上下文审计 / 压缩 / 蒸馏

- [dsh-context-doctor](https://github.com/Zhenyu98/dsh-context-doctor) — 上下文注入审计：统计指令链/技能目录/工具 schema 的 token 成本，检测重复冲突 ⭐36 · `dsh plugin add dsh-context-doctor`
- [context-vista](https://github.com/GooodWei/context-vista) — `/context` 命令 + 环形图实时展示上下文 token 用量与费用 ⭐11 · `dsh plugin add context-vista`
- [distill](https://github.com/LoserFox/distill) — 自动对话蒸馏：后台 subagent 反省 + 技能 create/update ⭐28 · `dsh plugin add @loserfox/distill`
- [dsh-auto-compact](https://github.com/wangxiang0605qvq/dsh-auto-compact) — compact_now 工具，回合结束自动压缩上下文
- [dsh-context](https://github.com/bowenliang123/dsh-context) — 上下文洞察面板：展示模型上下文窗口的构成与演化 ⭐1969 · `dsh plugin add dsh-context`

## 会话控制 / 回退

- [dsh-turn-rewind](https://github.com/Anionex/dsh-turn-rewind) — 对话回退：基于持久 Change Ledger 回滚会话与工作区状态 ⭐131 · `dsh plugin add @dsh-external/turn-rewind`
- [dsh-undo](https://github.com/LingLambda/dsh-undo) — 上下文 undo/redo：回退到上一个已完成步骤并恢复 ⭐4 · `dsh plugin add dsh-undo`
- [dsh-recall](https://github.com/Mongfayi/dsh-recall) — 消息撤回：每条用户消息一个撤销按钮，删除该轮及其后内容（不改代码） ⭐2 · `dsh plugin add dsh-recall`
- [dsh-sidechain](https://github.com/omdsh-dev/dsh-sidechain) — `/side` 持续性侧会话与 `/btw` 一次性侧问，在临时 fork 中运行 ⭐15 · `dsh plugin add @dsh-external/dsh-sidechain`
- [dsh-message-edit](https://github.com/Moeblack/dsh-message-edit) — 基于分支的消息编辑、reroll、重试与版本时间线 ⭐50 · `dsh plugin add dsh-message-edit`
- [dsh-session-search](https://github.com/Tieboyh/dsh-session-search) — 跨 dsh/Codex/Claude/pi/OpenCode 会话的无索引全文搜索 ⭐1
- [dsh-chat-import](https://github.com/Nwflower/dsh-chat-import) — 13 源全保真导入（Claude Code/Codex/ChatGPT/Cursor/Gemini/Reasonix/opencode/ZCode/Grok Build/OpenClaw/Pi/Hermes/Kimi）历史会话为可续聊 DSH 会话 ⭐223 · `dsh plugin add dsh-chat-import`
- [dsh-claude-move](https://github.com/PerryLink/dsh-claude-move) — 迁移 Claude Code 会话/记忆/技能/CLAUDE.md 到 DSH ⭐27 · `dsh plugin add dsh-claude-move`

- [taskfold](https://github.com/yindf/taskfold) — 把已完成的 agent 工作折叠成一条带标题的摘要，长会话保持可读、请求更省；每次折叠的原始内容可随时原样读回 ⭐7 · `dsh plugin add dsh-taskfold`
- [dsh-rewind](https://github.com/SiriLee/dsh-rewind) — 同窗口原地回退（Claude Code /rewind 语义）：每条用户消息旁 ↶ 按钮把模型上下文截断回任意一条消息，可选 Claude Code 风格文件回滚 ⭐123 · `dsh plugin add dsh-rewind-plugin`
- [dsh-memory_rollout](https://github.com/Bionic-forest/dsh-memory_rollout) — Codex 风格的 DSH 会话持久记忆：一会话一草稿、分层披露、克制被动、幂等整合，跨会话记住事实/偏好/决策并带可核验引用 ⭐2 · `dsh plugin add dsh-memory_rollout`
- [dsh-squeeze-command](https://github.com/hardes11/dsh-squeeze-command) — 手动、面向预算的上下文压缩：对话模型圈定要总结的范围，廉价 flash 级路由生成检查点摘要 ⭐1 · `dsh plugin add dsh-squeeze-command`
- [dsh-kb](https://github.com/weibaohui/dsh-kb) — 团队知识库：离线知识共享（FDE 盒子场景），浏览/全文检索/加工入口；raw 入料自动入队、bot 会话串行蒸馏成文（Karpathy LLM Wiki 模式：raw 不可变 / 两步加工 / log 流水 / 月度 lint） ⭐4 · `dsh plugin add @weibaohui/dsh-kb`
- [dsh-memento](https://github.com/PerryLink/dsh-memento) — 有界、分层、审批门、可审计的跨会话记忆：`ctx.memory` 服务 + 零依赖 SQLite + memory 工具 + 冻结快照注入 ⭐141 · `dsh plugin add dsh-memento`

- [hermes-loop](https://github.com/weibaohui/hermes-loop) — 自动复盘：对话收尾后自动把有价值的经验蒸馏成可复用技能存入技能库，支持审批模式与技能库治理（归档/恢复，永不直接删除） ⭐9 · `dsh plugin add @weibaohui/hermes-loop`
- [dsh-session-manager](https://github.com/SunshineR04/dsh-session-manager) — 已归档会话管理：设置页列出/恢复/彻底删除（直接物理删除，无备份层），会话菜单红色删除项；已打开的会话也能立即删除（墓碑隐藏，重启后自动清理） ⭐1 · `dsh plugin add github:SunshineR04/dsh-session-manager`
- [context-razor](https://github.com/weibaohui/context-razor) — 上下文剃刀：把当前会话上下文逐条列出（角色/预览/≈token 估算），超阈值标红，勾选后不经 LLM 精确裁剪，删了什么一目了然 ⭐1 · `dsh plugin add @weibaohui/context-razor`

- [dsh-sieve](https://github.com/Sev7eEn7/sieve) — 为 DSH 0.2.1-alpha.1 过滤工具输出、裁剪陈旧上下文并按需披露技能。

<!-- nav:start -->
---
← [上一类: 🤖 Agent 编排 / 多 Agent](agent-orchestration.md) · [返回目录](../README.md) · [下一类: 👁️ 多模态 / 视觉](multimodal.md) →
<!-- nav:end -->
