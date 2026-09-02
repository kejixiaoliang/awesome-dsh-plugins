# 🏗️ 基础设施 / 插件管理 / 开发工具

> **基建与开发**：插件管理器/注册表、健康检查、沙箱、遥测、hook、Docker、运维、自进化。返回 [目录](../README.md#分类目录)

## 插件管理 / 注册表 / 市场

- [plugin-registry](https://github.com/vlln/plugin-registry) — 插件管理控制台：浏览器面板管理官方 repository 插件 + 开发引导 ⭐59
- [dsh-plugin-manager-registry](https://github.com/Jesse-njx/dsh-plugin-manager-registry) — 离线容忍的注册表：从 awesome 列表/GitHub topics/npm 发现并去重 DSH 插件 ⭐1
- [dsh-hub](https://github.com/omdsh-dev/dsh-hub) — OMDSH 社区扩展 hub（基于官方 contracts） ⭐3 · `dsh plugin add @omdsh/dsh-hub`
- [dsh-plugin-installer](https://github.com/Toukaiteio/dsh-plugin-installer) — 把 DSH 快速接入 GitHub 插件生态的市场插件 ⭐6 · `dsh plugin add dsh-plugin-installer`
- [dsh-super-injector](https://github.com/yjh051108/dsh-super-injector) — 超级模组注入器：运行时注入本地插件包（junction + loader.create，热重载） ⭐155 · `dsh plugin add @dsh-external/dsh-super-injector`
- [oh-my-dsh](https://github.com/LaplaceYoung/oh-my-dsh) — 面向 DSH 的插件生态：700+ 插件，扩展接缝注册不改 agent-loop ⭐54
- [dsh-plugin-hub](https://github.com/Noob-stupid/dsh-plugin-hub) — 插件管理面板 + 多源市场：一键启停（HMR 生效）、GitHub/Gitee/自定义源并行搜索、静态索引市场（500+ 插件 / 300 技能）、技能安装/停用/删除、套装一键装配、框架一键升级 ⭐75 · `dsh plugin add dsh-plugin-hub`

## 健康检查 / 诊断 / 审计

- [dsh-plugin-check](https://github.com/omdsh-dev/dsh-plugin-check) — 插件健康检查：扫描清单协议/patch 格式/构建陷阱/hub 状态 ⭐27 · `dsh plugin add @deepseek-ai/dsh-plugin-check`
- [dsh-plugin-doctor](https://github.com/lin-cheng-lab/dsh-plugin-doctor) — 插件体检：安装前检查 peer 版本兼容性 ⭐1 · `dsh plugin add dsh-plugin-doctor`
- [dsh-doctor](https://github.com/asdf17128/dsh-doctor) — profile 健康检查：找 patch 静默破坏的配置/死 patch/工具名冲突 ⭐1
- [dsh-capability-inspector](https://github.com/tree201/dsh-capability-inspector) — DSH Doctor + 运行时诊断（工具/模型/技能/工作区/会话/插件/MCP 排障） ⭐2 · `dsh plugin add dsh-capability-inspector`
- [dsh-security-audit](https://github.com/omdsh-dev/dsh-security-audit) — 本机安全审计：配置/插件来源/会话/网络暴露面，只读脱敏报告 ⭐14 · `dsh plugin add @deepseek-ai/dsh-security-audit`
- [sofagent](https://github.com/KongFangXun/sofagent) — 开源 FDE Harness 约束层：24 条 git diff 审计规则 + 80 个 MCP 工具 + 9 款 cordis-plugin 深度集成，Agent 违规当场拦截 ⭐42
- [dsh-session-health](https://github.com/omdsh-dev/dsh-session-health) — 会话文件帧级扫描诊断（torn/损坏/空会话检测） ⭐9 · `dsh plugin add @deepseek-ai/dsh-session-health`
- [dsh-passwords](https://github.com/slywalker2006/dsh-passwords) — dsh 登录网关（密码门）：远程访问鉴权 + 多用户账号管理，HTTPS/防爆破/审计日志 ⭐40 · `dsh plugin add github:slywalker2006/dsh-passwords`

## 运行时 / 沙箱 / 遥测 / hook

- [dsh-evolve](https://github.com/william-jin-cmu/dsh-evolve) — 自进化：agent 会话内给自己热挂载/卸载持久化插件 ⭐12 · `dsh plugin add @dsh-external/dsh-evolve`
- [dsh-trace](https://github.com/vibeinging/dsh-trace) — 遥测后端：导出 turns/model steps/tool calls 到 yiTrace ⭐2 · `dsh plugin add @deepseek-ai/dsh-trace`
- [fabric](https://github.com/omdsh-dev/fabric) — 类似 MC Fabric 的 hook 处理器 ⭐18 · `dsh plugin add cordis-fabric-bundle`
- [sandbox-micro](https://github.com/omdsh-dev/sandbox-micro) — microsandbox 沙箱支持 ⭐4 · `dsh plugin add @deepseek-ai/dsh-sandbox-microsandbox`
- [sandbox-mxc](https://github.com/omdsh-dev/sandbox-mxc) — 微软跨平台沙盒支持 ⭐2 · `dsh plugin add @deepseek-ai/dsh-sandbox-mxc`
- [sandbox-nono](https://github.com/omdsh-dev/sandbox-nono) — nono 沙盒支持 ⭐3 · `dsh plugin add @deepseek-ai/dsh-sandbox-nono`
- [dsh-stream-rules](https://github.com/jiesou/dsh-stream-rules) — 按需注入规则、不浪费上下文 ⭐5 · `dsh plugin add dsh-stream-rules`
- [dsh-git-identity](https://github.com/LoserFox/dsh-git-identity) — git 提交固定使用环境自身作者身份 ⭐7 · `dsh plugin add @loserfox/git-identity`
- [dsh-plugin-graph](https://github.com/erduotong/dsh-plugin-graph) — 插件关系图谱可视化 ⭐2 · `dsh plugin add dsh-plugin-graph`
- [dsh-dev-actions](https://github.com/skitse/dsh-dev-actions) — Agent 提议的可复用开发命令，转为侧栏动作 ⭐2 · `dsh plugin add dsh-dev-actions`
- [dsh-tool-policy](https://github.com/Drifter-yh/dsh-tool-policy) — 声明式默认拒绝的工具策略 ⭐4 · `dsh plugin add dsh-tool-policy`
- [dsh-openai-codex-auth](https://github.com/yoke233/dsh-openai-codex-auth) — OpenAI Codex OAuth 登录与用量卡 ⭐12 · `dsh plugin add dsh-openai-codex-auth`

## 分发 / 运维 / 迁移

- [deepseek-harness-docker](https://github.com/runzhliu/deepseek-harness-docker) — 社区 Docker/K8s 打包（加固镜像 + Compose + Helm） ⭐57
- [dsh-harness-ops](https://github.com/fakechris/dsh-harness-ops) — 运维工具箱：A/B 双槽快照升级、自动恢复、回滚、诊断自愈 ⭐14
- [dsh-multica-runtime](https://github.com/multica-ai/dsh-multica-runtime) — Multica 的 DSH runtime 桥接（stdio JSONL 协议） ⭐60 · `dsh plugin add @multica-ai/dsh-runtime`
- [session-teleport](https://github.com/omdsh-dev/session-teleport) — PostgreSQL 单写者会话交接服务 ⭐2 · `dsh plugin add @mattheliu/session-teleport`
- [session-persistence-rdb](https://github.com/morlay/session-persistence-rdb) — session 关系型数据库持久化 ⭐4 · `dsh plugin add @morlay/session-persistence-rdb`
- [dsh-market](https://github.com/dsh-market/dsh-market) — DSH 可视化插件市场：浏览/搜索/一键安装 ⭐3045 · `dsh plugin add github:dsh-market/dsh-market`
- [dsh-webui-market-plugin](https://github.com/Sanqi-normal/dsh-webui-market-plugin) — dsh Web GUI 社区插件市场：浏览 awesome-dsh-plugin 目录/安装/卸载 ⭐103 · `dsh plugin add github:Sanqi-normal/dsh-webui-market-plugin`

<!-- nav:start -->
---
← [上一类: 🌐 浏览器 / 搜索](browser-search.md) · [返回目录](../README.md) · [下一类: 🎮 娱乐 / 其他](fun-other.md) →
<!-- nav:end -->
