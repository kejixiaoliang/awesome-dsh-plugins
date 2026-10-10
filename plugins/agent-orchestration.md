# 🤖 Agent 编排 / 多 Agent

> **多 Agent 与编排**：Agent 团队、plan/execute 路由、A2A、meta-orchestrator、跨会话消息。返回 [目录](../README.md#分类目录)

- [dsh-agent-teams](https://github.com/NanmiCoder/dsh-agent-teams) — AgentTeams 多智能体团队协作 ⭐2006 · `dsh plugin add dsh-agent-teams`
- [dsh_workflow](https://github.com/icetomoyo/dsh_workflow) — 把 UltraCode 式多 Agent 调度带给 DSH：可生成/保存/治理/观察/恢复的 Workflow 层 ⭐141 · `dsh plugin add @dsh-external/workflow`
- [dsh-meta-orchestrator](https://github.com/jiruidai/dsh-meta-orchestrator) — 模型原生 meta-agent：运行时合成任务专属工作流并协调工具/子代理 ⭐6 · `dsh plugin add dsh-meta-orchestrator`
- [dsh-crosstalk](https://github.com/Jesse-njx/dsh-crosstalk) — 跨会话消息互发：本机任意会话像 Claude Code 一样互发消息 ⭐4 · `dsh plugin add @dsh-crosstalk/bundle`
- [dsh-agent-messaging](https://github.com/happyren/dsh-agent-messaging) — 跨会话 agent-to-agent 消息投递（按会话名寻址） ⭐7 · `dsh plugin add dsh-agent-messaging`
- [dsh-interconnect](https://github.com/Chinesezjc/dsh-interconnect) — 跨实例消息/事件交接（interconnect 服务 + 工具） ⭐35 · `dsh plugin add dsh-interconnect`
- [dsh-session-hub](https://github.com/Asaiuta/dsh-session-hub) — 多服务器 DSH 会话聚合与原生操控（hub 网关 + 官方 UI 桥） ⭐5 · `dsh plugin add dsh-session-hub`
- [dsh-plugin-yet-another-subagent](https://github.com/HuanLinOTO/dsh-plugin-yet-another-subagent) — 可配置子代理 profiles + 实时工具调用/token 显示 + 子会话跳转 ⭐18 · `dsh plugin add @huanlin/dsh-plugin-yet-another-subagent`
- [dsh-a2a](https://github.com/dpskh/dsh-a2a) — Agent2Agent 网状互联 ⚠️ dsh-external，公开性待核实 ⭐11
- [dsh-devices](https://github.com/polaris-smart/dsh-devices) — 去中心化多设备舰队：mDNS 同网发现 + 密钥配对 + SSH 跨网直连 + SFTP 文件传输，dsh 会话内自动注册 6 个 fleet 工具（零 npm 依赖） ⭐7 · `dsh plugin add dsh-devices`

- [dsh-wait-guard](https://github.com/dn4hjtcr9s-del/dsh-wait-guard) — 主 Agent 的出口闸门：后代子代理还有 running 就不允许 turn 结束；消息到达立刻完全退场，超时才注入一条提醒后同样退场 · `dsh plugin add github:dn4hjtcr9s-del/dsh-wait-guard`
- [lunheng-article-pipeline-dsh](https://github.com/zuoyunlai/lunheng-article-pipeline-dsh) — 论衡：主控调度 + 9 个独立角色（文献/数据/案例检索、分析、写作、批判、审计、终检、同行评审）的深度长文写作流水线，跨 6 阶段，含 4 个人在环节点、三角验证、M 门 23 项机械终检、G0-G14 独立审计与审稿评分/期刊匹配 ⭐13 · `dsh plugin add lunheng-article-pipeline`
- [dsh-product-subagent-console](https://github.com/Jokasa7/dsh-product-subagent-console) — DSH 对话级多 Agent 工作台：可编辑任务方案、观察真实子会话树、对照计划与实际运行，并生成基于证据的恢复预览 · [v0.9.0 安装说明](https://github.com/Jokasa7/dsh-product-subagent-console#install) ⭐2
- [dsh-smart-title](https://github.com/weibaohui/dsh-smart-title) — 会话智能标题：每轮对话结束后用一次独立的辅助 LLM 调用对「用户消息+助手回答」完整转写做总结，标题跟随会话真实主题而不是复述第一句话；首条消息即时生成标题、内置标题失败在后续轮次自动重试、用户手动改名绝不被覆盖、自动跳过子代理与 fork 会话 ⭐6 · `dsh plugin add @weibaohui/dsh-smart-title`

- [experts-management](https://github.com/weibaohui/experts-management) — 专家管理：管理 ntd 格式的专家与专家团队（plugin.json + Agent MD + 技能集），内置 50+ 专家市场，`/expert-名称` 以专家身份执行任务，不占模型目录 token ⭐3 · `dsh plugin add @weibaohui/experts-management`

<!-- nav:start -->
---
← [上一类: 🖥️ 桌面端 / TUI / 移动端](desktop-tui-mobile.md) · [返回目录](../README.md) · [下一类: 🧠 上下文 / 记忆](context-memory.md) →
<!-- nav:end -->
