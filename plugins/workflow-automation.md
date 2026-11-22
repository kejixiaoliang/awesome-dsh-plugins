# 🔁 工作流 / 自动化

> **流程编排**：深度研究、定时任务/cron、条件唤醒、计划批注、审查闭环、模型路由、审批。返回 [目录](../README.md#分类目录)

- [dsh-deep-research](https://github.com/omdsh-dev/dsh-deep-research) — 自适应深度研究编排器（基于官方 workflow 引擎） ⭐32 · `dsh plugin add @dsh-external/dsh-deep-research`
- [dsh-deepresearch](https://github.com/havingautism/dsh-deepresearch) — 证据优先的独立研究工作流（持久状态 + 独立 Web 视图） ⭐16 · `dsh plugin add @deepseek-ai/dsh-deepresearch`
- [dsh-loop](https://github.com/vlln/dsh-loop) — 定时循环：`/loop` 命令 + loop 工具 + 活动状态条 ⭐8 · `dsh plugin add @dsh-external/dsh-loop`
- [dsh-sentinel](https://github.com/fuhefei/dsh-sentinel) — 条件驱动唤醒：file/command/http/process/webhook 持久监视触发 agent ⭐25 · `dsh plugin add @dsh-external/dsh-sentinel`
- [dsh-automation](https://github.com/titanwings/dsh-automation) — 定时任务：Coding 任务按计划在全新 Agent Session 中运行 ⭐103 · `dsh plugin add @dsh-external/dsh-automation`
- [dsh-routines](https://github.com/Jesse-njx/dsh-routines) — cron 定时 Agent：按计划跑 prompt 并把摘要送到你所在处 · `dsh plugin add @dsh-routines/bundle`
- [dsh-plannotator](https://github.com/titanwings/dsh-plannotator) — 计划批注：选中计划原文逐条批注并回送结构化反馈 ⭐13 · `dsh plugin add @dsh-external/dsh-plannotator`
- [dsh-inspect](https://github.com/omdsh-dev/dsh-inspect) — 发现问题→修复→复查的对抗式闭环（基于官方 workflow 引擎） ⭐7 · `dsh plugin add @dsh-external/dsh-inspect`
- [dsh-advisor](https://github.com/omdsh-dev/dsh-advisor) — 副模型每轮被动审查并注入见解 ⭐35 · `dsh plugin add dsh-advisor`
- [mstar-harness](https://github.com/btspoony/mstar-harness) — Skill 驱动的 Harness/Loop 工程工作流 Agent 插件 ⭐72
- [dsh-llm-fallbacks](https://github.com/omdsh-dev/dsh-llm-fallbacks) — 基于角色的模型重试/备用策略 ⭐28 · `dsh plugin add dsh-llm-fallbacks`
- [dsh-polyglot](https://github.com/Jesse-njx/dsh-polyglot) — 模型切换器：任意 OpenAI 兼容端点 + 免费/低价 DeepSeek 预设 + 限流自动回退 ⭐3 · `dsh plugin add @dsh-polyglot/bundle`
- [dsh-track](https://github.com/fakechris/dsh-track) — 嵌入式任务管理引擎：决策点协议、念头捕获墙、Linear 形 issue 存储 ⭐5 · `dsh plugin add @deepseek-ai/dsh-track`
- [dsh-record-replay](https://github.com/humblebanana/dsh-record-replay) — 录制 macOS 桌面工作流演示并转成 agent 技能（orr_* 工具） ⭐13 · `dsh plugin add dsh-record-replay`
- [dsh-daily-progress](https://github.com/omdsh-dev/dsh-daily-progress) — 每日进度：今晚定明日计划 + 今日清单 + 完成度温度计 ⭐2 · `dsh plugin add dsh-daily-progress`
- [dsh-goal-mode](https://github.com/KarlOfLaw/dsh-goal-mode-enhance) — 可视化 goal 模式：Goal 栏/设置页/多会话总览/goal_overview 工具 ⭐4 · `dsh plugin add dsh-goal-mode`
- [dsh-ramify](https://github.com/yanglongyun/dsh-ramify) — 创意分支画布：树状工作区生成、对比、迭代多个方案 ⭐21 · `dsh plugin add @ramify/dsh-ramify`
- [dsh-tool-approval](https://github.com/ilharp/dsh-tool-approval) — 手动审批模式（Manual/Ask Mode） ⭐1 · `dsh plugin add dsh-tool-approval`
- [dsh-tiered-approval](https://github.com/Elaina-real/dsh-tiered-approval) — 分层自动审查：静态规则 + LLM 审查 + 人工兜底 · `dsh plugin add dsh-tiered-approval`
- [dsh-event-auditor](https://github.com/qing3a/dsh-event-auditor) — 事件流审计面板：观察事件类型/分发模式/计数，帮插件作者理解内部 · `dsh plugin add @dsh-external/dsh-event-auditor`
- [dsh-auto-continue](https://github.com/HsiangNianian/dsh-auto-continue) — 自动续传：网络中断后自动发「继续」恢复请求 ⭐207 · `dsh plugin add github:HsiangNianian/dsh-auto-continue`

- [dsh-oh-my-claude](https://github.com/lcestou/dsh-oh-my-claude) — 把本机已登录的 Claude Code CLI 接成 dsh 的模型提供方：在 dsh 的模型选择器里直接选 Claude 模型，不需要 API Key；带会话恢复、权限模式和用量面板，中英双语 ⭐45 · `dsh plugin add dsh-oh-my-claude`
- [dsh-edit-approval](https://github.com/SiriLee/dsh-edit-approval) — 写文件/工具调用前的逐处审批门：write/edit/stream 操作显示红绿行级 diff 后再放行，bash 命令审批（默认关） ⭐7 · `dsh plugin add dsh-edit-approval`
- [dsh-process](https://github.com/weibaohui/dsh-process) — 工艺管理：把 ntd 的「工艺」（多阶段·多环节 agent 工作流模板）接进 dsh web——浏览/编辑/校验/导入导出/AI 生成工艺，内置库只读、我的库可写，文件改动实时同步；agent 可通过 process_* 工具读工艺库、按工艺分阶段推进 ⭐2 · `dsh plugin add @weibaohui/dsh-process`
- [dsh-flow](https://github.com/weibaohui/dsh-flow) — 执行流程图：把会话执行过程画成纵向节点流（回合/用户/助手/工具/审批/重试/压缩），SSE 实时追加、自动跟随滚动 ⭐1 · `dsh plugin add @weibaohui/dsh-flow`
- [dsh-auto-review](https://github.com/PerryLink/dsh-auto-review) — 审批链上的第二模型自动审查：只读审查子代理给出带理由的 allow/deny 裁决，默认失败即拒绝、全程可审计 ⭐255 · `dsh plugin add dsh-auto-review`

- [dsh-continue](https://github.com/weibaohui/dsh-continue) — 自动续跑：agent 会话中断后自动续上，按失败类型（限流/额度/鉴权/上下文超限/崩溃孤儿）路由到退避重试、换模型、压缩上下文后继续或止损通知，规则可视化编辑 ⭐8 · `dsh plugin add @weibaohui/dsh-continue`
- [dsh-tasks](https://github.com/weibaohui/dsh-tasks) — 定时任务：用 cron 表达式定时执行提示词，到点自动开一个新 agent 会话替你干活，支持绑定工作区、手动立即执行与会话自动命名 ⭐11 · `dsh plugin add @weibaohui/dsh-tasks`
- [dsh-industry-research](https://github.com/PerryLink/dsh-industry-research) — 行业/公司研究领域包：产业链结构图 → 公开源政策与要闻跟踪 → 公司速览卡 → 可核查报告；每个指标带 sourceRef、缺口显式声明，只读公开源 ⭐226 · `dsh plugin add dsh-industry-research`
- [dsh-research-report](https://github.com/PerryLink/dsh-research-report) — 可核查研究报告引擎：每条 claim 绑定不可变证据快照并逐字节核对数字与引文，产出 report.md + manifest.json 封存报告（封印哈希为 manifest 的 SHA-256），可离线复核 ⭐220 · `dsh plugin add dsh-research-report`
- [dsh-doublecheck](https://github.com/PerryLink/dsh-doublecheck) — 交付质量门禁：需求拷问落成 spec、测试先红后绿、改动与 spec 维度对齐、评审结论，一次 /gate run 折叠成四阶段清单并给出可交付/返工裁决与 gate 报告 ⭐61 · `dsh plugin add dsh-doublecheck`
- [dsh-fund-research](https://github.com/PerryLink/dsh-fund-research) — 中国公募基金确定性研究报告：采集天天基金/东方财富公开数据，纯函数计算业绩拆解、持仓穿透、风格归因与经理画像，输出带逐数字可溯源快照附录的版本化报告；指标由代码计算，不交给模型 ⭐72 · `dsh plugin add dsh-fund-research`
- [dsh-lit-watch](https://github.com/PerryLink/dsh-lit-watch) — 文献追踪：保存带时间窗的命名 Crossref 检索式，用有界客户端对 Crossref 执行检索，已见 DOI 库记录使重复运行只返回真正新增的条目，输出 Markdown 摘要与 SARIF；只报告检索窗口内新增的 DOI，不判断相关性或质量。 ⭐3 · `dsh plugin add dsh-lit-watch`
- [dsh-legal-clause](https://github.com/PerryLink/dsh-legal-clause) — 合同条款处理：构建条款树、按 12 项 playbook 映射、登记 playbook 并导出未决清单——5 个 `legal.*` 工具。 ⭐3 · `dsh plugin add dsh-legal-clause`
- [dsh-nsfc-form-check](https://github.com/PerryLink/dsh-nsfc-form-check) — 国自然申请书形式审查与匿名化核对。 ⭐3 · `dsh plugin add dsh-nsfc-form-check`
- [dsh-contract-stance](https://github.com/PerryLink/dsh-contract-stance) — 合同条款立场台账核对：读取「合同表头 + 每条款一行」的立场台账，按逐字引用的规则库列出缺项与自相矛盾（哪一行、哪一栏、差什么），不改原件、不判定合规。 ⭐3 · `dsh plugin add dsh-contract-stance`
- [dsh-grant-cn](https://github.com/PerryLink/dsh-grant-cn) — 中国基金申请书核对：19 项结构/属性/声明起步清单、预算算式与结构校验、申请材料包扫描（面向国自然等）；只做关键词清单式核对，不代替评审结论。 ⭐3 · `dsh plugin add dsh-grant-cn`
- [dsh-pipeline-check](https://github.com/PerryLink/dsh-pipeline-check) — 项目全流程文件链条核对：环节顺序、文件齐备与金额可解析。 ⭐2 · `dsh plugin add dsh-pipeline-check`
- [dsh-power-ticket-check](https://github.com/PerryLink/dsh-power-ticket-check) — 依据现行电力安全工作规程，核对电力工作票应载明的要素，以及签发与许可的先后顺序。只报告发现的差异，不判定作业是否安全、许可是否有效。 ⭐2 · `dsh plugin add dsh-power-ticket-check`
- [dsh-legal-intake](https://github.com/PerryLink/dsh-legal-intake) — 法务需求收件：从 EML 读取需求、按线程去重并导出收件台账——2 个 `legal.*` 工具。 ⭐2 · `dsh plugin add dsh-legal-intake`
- [dsh-einvoice](https://github.com/PerryLink/dsh-einvoice) — 中文电子发票（OFD/XML）收件箱：导入、解析、去重、进入复核队列、登记回执并本地归档——10 个 `invoice.*` 工具，数据不出本机。 ⭐2 · `dsh plugin add dsh-einvoice`
- [dsh-ap-three-way](https://github.com/PerryLink/dsh-ap-three-way) — 应付三单匹配：导入发票、采购订单与收货单，按容差策略匹配并导出异常底稿——4 个 `ap.*` 工具。 ⭐2 · `dsh plugin add dsh-ap-three-way`
- [dsh-bankrec](https://github.com/PerryLink/dsh-bankrec) — 银行对账单核对：导入 CAMT.053 与 MT940，与账簿条目匹配并导出工作底稿——6 个 `bankrec.*` 工具。 ⭐2 · `dsh plugin add dsh-bankrec`
- [dsh-ota-review-check](https://github.com/PerryLink/dsh-ota-review-check) — OTA 点评回复台账核对：点评内容与评分、回复时限、回复人、问题分类与编号重复。 ⭐2 · `dsh plugin add dsh-ota-review-check`

<!-- nav:start -->
---
← [上一类: 👁️ 多模态 / 视觉](multimodal.md) · [返回目录](../README.md) · [下一类: 📡 通知 / 渠道 / 远程](notifications-channels.md) →
<!-- nav:end -->
