# 插件总索引

> 全部插件单文件扁平清单（按分类分组），方便在仓库里 `Ctrl+F` 全局搜索。共 **353** 条。
>
> 返回：[README](README.md) · [中文](README.zh.md)

## 🛠️ 工具类 Tools

| 插件 | 描述 | ⭐ | 安装命令 |
|---|---|---|---|
| [dsh-toolkit](https://github.com/omdsh-dev/dsh-toolkit) | 零依赖工具十件套（time/encoding/json/calculator/csv/regex/markdown/diff/stat/schema）一键安装 | 28 | `dsh plugin add @deepseek-ai/dsh-toolkit` |
| [dsh-tool-calculator](https://github.com/omdsh-dev/dsh-tool-calculator) | 安全的数学表达式求值器，零依赖递归下降解析器 | 8 | `dsh plugin add @deepseek-ai/dsh-tool-calculator` |
| [dsh-tool-csv](https://github.com/omdsh-dev/dsh-tool-csv) | CSV 解析/查询/统计/转换（RFC 4180） | 4 | `dsh plugin add @deepseek-ai/dsh-tool-csv` |
| [dsh-tool-diff](https://github.com/omdsh-dev/dsh-tool-diff) | 文本/JSON/CSV/Markdown 结构化比较与 unified diff | 3 | `dsh plugin add @deepseek-ai/dsh-tool-diff` |
| [dsh-tool-encoding](https://github.com/omdsh-dev/dsh-tool-encoding) | base64/url/hex 编解码、常用哈希、UUID 生成 | 4 | `dsh plugin add @deepseek-ai/dsh-tool-encoding` |
| [dsh-tool-json](https://github.com/omdsh-dev/dsh-tool-json) | JMESPath 子集 JSON 查询 | 3 | `dsh plugin add @deepseek-ai/dsh-tool-json` |
| [dsh-tool-markdown](https://github.com/omdsh-dev/dsh-tool-markdown) | HTML↔Markdown 转换、GFM 表格规范化、目录生成 | 4 | `dsh plugin add @deepseek-ai/dsh-tool-markdown` |
| [dsh-tool-regex](https://github.com/omdsh-dev/dsh-tool-regex) | 正则测试/提取/安全替换/静态解释（不执行代码） | 3 | `dsh plugin add @deepseek-ai/dsh-tool-regex` |
| [dsh-tool-schema](https://github.com/omdsh-dev/dsh-tool-schema) | JSON Schema 验证：validate/paths/explain/normalize | 3 | `dsh plugin add @deepseek-ai/dsh-tool-schema` |
| [dsh-tool-stat](https://github.com/omdsh-dev/dsh-tool-stat) | 描述统计/百分位数/频数分布/相关性 | 5 | `dsh plugin add @deepseek-ai/dsh-tool-stat` |
| [dsh-tool-time](https://github.com/omdsh-dev/dsh-tool-time) | 严格 ISO 8601 解析、IANA 时区、UTC 日历运算 | 3 | `dsh plugin add @deepseek-ai/dsh-tool-time` |
| [dsh-tool-git](https://github.com/lxj808624/dsh-tool-git) | 结构化 Git 工具（status/diff/log/branch/stage/commit/stash/show）+ 危险命令守卫 | 3 | `dsh plugin add dsh-tool-git` |
| [dsh-test-runner](https://github.com/suimi8/dsh-test-runner) | 结构化 test_run：自动探测 vitest/jest/pytest/node:test 并解析失败摘要 | 2 | `dsh plugin add dsh-test-runner` |
| [dsh-security-scan](https://github.com/ben7am1n/dsh-security-scan) | 密钥/危险模式扫描（API key/token/私钥脱敏，零依赖） |  | `dsh plugin add dsh-security-scan` |
| [dsh-tool-search](https://github.com/vibeinging/dsh-tool-search) | 按 agent 的按需工具发现 + 渐进式 schema 披露 | 1 | `dsh plugin add @deepseek-ai/dsh-tool-search` |
| [dsh-custom-tool](https://github.com/omdsh-dev/dsh-custom-tool) | 用 Monaco 编辑器创建/管理沙箱化自定义 JS 工具 | 23 | `dsh plugin add dsh-custom-tool` |
| [dsh-bash-encoding](https://github.com/lhh010/dsh-bash-encoding) | 自动识别并解码 Bash 输出编码（UTF-16LE/UTF-8/GBK），修中文乱码 | 8 |  |
| [dsh-at-file](https://github.com/omdsh-dev/dsh-at-file) | Codex 风格 `@file` 文件引用，输入框里直接搜索并引用工作区文件 | 519 | `dsh plugin add dsh-at-file` |
| [dsh-wikilink](https://github.com/zhaoscsc/dsh-wikilink) | Obsidian 风格 `[[wikilink]]` 提及：模糊搜索笔记标题并附加内容 | 2 | `dsh plugin add dsh-wikilink` |
| [dsh-safe-delete](https://github.com/Qintsg/dsh-safe-delete) | 安全删除：移入回收站/暂存区而非永久删除，支持恢复 | 1 |  |
| [dsh-bisect-debug](https://github.com/PangYiMing/dsh-bisect-debug) | 二分法定位 bug 根因（代码/边界/commit） |  | `dsh plugin add dsh-bisect-debug` |
| [dsh-payload-capture](https://github.com/Moeblack/dsh-payload-capture) | 捕捉每次上行模型 API payload 落盘 JSON（调试/可观测） |  | `dsh plugin add dsh-payload-capture` |
| [dsh-data-agent](https://github.com/omdsh-dev/dsh-data-agent) | 让 AI 帮你连数据库、写 SQL | 204 | `dsh plugin add @deepseek-ai/dsh-data-agent` |
| [dsh-openapi](https://github.com/Degurechaff57/dsh-openapi) | Safe OpenAPI 3.x 发现与 API 调用工具 | 3 | `dsh plugin add dsh-openapi` |
| [dsh-plugin-interpreters](https://github.com/HuanLinOTO/dsh-plugin-interpreters) | 暴露 run_python / run_node 工具，可配置解释器路径 | 9 | `dsh plugin add @huanlin/dsh-plugin-interpreters` |
| [dsh-cowork](https://github.com/Jesse-njx/dsh-cowork) | doc_read/doc_write：以有界、单元格寻址方式读写 xlsx/pdf/docx/pptx/ipynb | 4 |  |
| [dsh-plugin-mineru](https://github.com/HuanLinOTO/dsh-plugin-mineru) | 向模型暴露 MineRU 文档解析工具 | 46 | `dsh plugin add @huanlin/dsh-plugin-mineru` |
| [dsh-plugin-sleep](https://github.com/HuanLinOTO/dsh-plugin-sleep) | 暴露单个 `sleep` 工具，让模型按需暂停（支持取消） | 9 | `dsh plugin add @huanlin/dsh-plugin-sleep` |
| [dsh-port-guard](https://github.com/PangYiMing/dsh-port-guard) | 端口占用处置（复用/切换/精确 kill） |  | `dsh plugin add dsh-port-guard` |
| [dsh-scout](https://github.com/omdsh-dev/dsh-scout) | 只读环境探测：运行环境/版本/资源/端口/服务/硬件/工作区 | 1 | `dsh plugin add @deepseek-ai/dsh-tool-scout` |
| [dsh-nuke-plugin](https://github.com/beijingwahw/dsh-nuke-plugin) | 事务化强力卸载引擎：每个破坏性动作走 validate/preview/execute/undo 四段式 + Saga 回滚，WAL 崩溃自恢复、hash chain 审计链、硬链接去重、贝叶斯先知推演成功率；回收区代替物理删除（可恢复） | 2 | `dsh plugin add github:beijingwahw/dsh-nuke-plugin` |
| [dsh-qingagent](https://github.com/void2anything/dsh-qingagent) | 把开源 AI 写作客户端青简（QingAgent）接进 DSH：对话里起草改稿，右侧宣纸面板排版渲染（mermaid/drawio/表格/KaTeX），每处修改先摆在纸上供审阅、提交才落稿，10 个工具；需本机运行青简桌面客户端 | 2 | `dsh plugin add dsh-qingagent` |
| [dsh-webdav-server](https://github.com/weibaohui/dsh-webdav-server) | WebDAV 服务器：把一个共享目录变成 Windows/macOS/Linux 都能挂载成本地磁盘的 WebDAV 服务，令牌认证、可选只读、目录/端口/令牌全可配，设置页自带三平台挂载指南 | 1 | `dsh plugin add @weibaohui/dsh-webdav-server` |
| [dsh-file-share](https://github.com/weibaohui/dsh-file-share) | 会话工作区文件管理：在对话区加「文件」tab，浏览当前会话工作区的目录树并就地管理（上传/下载/新建文件夹/改名/删除/搜索），文件可 @ 进对话框给 agent 处理 | 1 | `dsh plugin add @weibaohui/dsh-file-share` |
| [dsh-dashboard](https://github.com/weibaohui/dsh-dashboard) | 使用量仪表盘：离线扫描会话日志，统计每日/每周/每月 token、估算费用、模型/工具/技能/命令榜、输出速度、工作时段与质量指标；gridstack+ECharts 卡片可拖拽编排，支持自定义公式与 AI 编排（提示词往返导入） | 1 | `dsh plugin add @weibaohui/dsh-dashboard` |

[↩ 回到 🛠️ 工具类 Tools 分类页](plugins/tools.md)

## 🧩 技能类 Skills

| 插件 | 描述 | ⭐ | 安装命令 |
|---|---|---|---|
| [dsh-review-skills](https://github.com/ben7am1n/dsh-review-skills) | 工程纪律技能包：code-review/simplify/plan-then-execute/test-first/resolve-conflict | 1 | `dsh plugin add dsh-review-skills` |
| [dsh-skillport](https://github.com/Jesse-njx/dsh-skillport) | 把已有 Agent Skills（Claude/Codex/Cursor/Gemini 的 SKILL.md）带进 DSH，渐进式索引 + 按需加载 | 7 | `dsh plugin add @dsh-skillport/bundle` |
| [dsh-find-skill](https://github.com/Moximxxx/dsh-find-skill) | 桥接 vercel-labs/skills 生态：LLM 驱动技能搜索/安装/生命周期管理 | 3 | `dsh plugin add dsh-find-skill` |
| [dsh-plugin-skills](https://github.com/omdsh-dev/dsh-plugin-skills) | 构建与测试 DSH 插件的 Agent 技能（脚手架到测试分层） | 13 |  |
| [dsh-book2skill](https://github.com/omdsh-dev/dsh-book2skill) | 五阶段「书→技能」长任务（抓取→解析→理解→生成→安装）+ 3 个人工关卡 | 3 | `dsh plugin add dsh-book2skill` |
| [dsh-superpowers](https://github.com/codeAnqiang-ma/dsh-superpowers) | Superpowers（obra/superpowers）作为 DSH 插件：方法论技能 + 会话引导 | 8 | `dsh plugin add dsh-superpowers` |
| [dsh-plugin-code-review](https://github.com/YYTbit/dsh-plugin-code-review) | 结构化代码审查技能（YYTbit 系列） | 1 | `dsh plugin add dsh-plugin-code-review` |
| [dsh-review-loop](https://github.com/wuxiangru915/dsh-review-loop) | 增量 diff 审查：checkpoint 队列 + Web 面板 + 审查意见注入 agent | 1 | `dsh plugin add @dsh-plugin/dsh-review-loop` |
| [dsh-plugin-claude-bridge](https://github.com/YYTbit/dsh-plugin-claude-bridge) | 把 Claude Code 记忆/技能/配置桥接进 DSH | 8 | `dsh plugin add dsh-plugin-claude-bridge` |
| [dsh-plugin-codex-bridge](https://github.com/YYTbit/dsh-plugin-codex-bridge) | 把 Codex skills/config 桥接进 DSH | 2 | `dsh plugin add dsh-plugin-codex-bridge` |
| [dsh-plugin-opencode-bridge](https://github.com/YYTbit/dsh-plugin-opencode-bridge) | 把 OpenCode skills/config 桥接进 DSH | 4 | `dsh plugin add dsh-plugin-opencode-bridge` |
| [dsh-plugin-pi-bridge](https://github.com/YYTbit/dsh-plugin-pi-bridge) | 把 pi skills/config 桥接进 DSH | 2 | `dsh plugin add dsh-plugin-pi-bridge` |
| [Code2Skill](https://github.com/leechen298/Code2Skill) | 从现有代码生成 Function、MCP、Agent Skill 和离线测试包，并作为可安装的 DSH Bundle 分发 | 8 | `dsh plugin add github:leechen298/Code2Skill#v1.1.3` |
| [dsh-reverse-skill](https://github.com/dhicoc/dsh-reverse-skill) | 逆向工程、授权渗透测试与安全研究技能路由包（85 个 SKILL.md，仅限授权测试） | 235 | `dsh plugin add github:dhicoc/dsh-reverse-skill` |
| [dsh-find-plugins](https://github.com/Nagi-ovo/dsh-find-plugins) | 帮 DSH 搜索、安装并验证 GitHub 插件的 Skill | 178 | `dsh plugin add github:Nagi-ovo/dsh-find-plugins` |
| [forkprobe](https://github.com/Jayden-X-L/forkprobe) | 同一任务对比多个 skill 并选出最优 | 74 | `dsh plugin add github:Jayden-X-L/forkprobe` |
| [dsh-amphoreus](https://github.com/xi-kari/dsh-amphoreus) | 把 δ-me13（翁法罗斯）13 张角色技能卡变成席位工作区：逐席主题与壁纸、首轮注入技能卡、对话表情、每席记忆与预设、Alt+数字切席、派发与移交总览画布；技能套件从本地目录读取，不随插件打包 | 4 | `dsh plugin add dsh-amphoreus` |
| [skills-management](https://github.com/weibaohui/skills-management) | 技能市场：一个页面管理本机所有 coding agent 的技能，一键收编进 DSH 用户库；内置 6600+ 技能市场，支持注入开销（≈token）统计与模型可见性治理 | 30 | `dsh plugin add @weibaohui/skills-management` |

[↩ 回到 🧩 技能类 Skills 分类页](plugins/skills.md)

## 🔌 MCP 接入

| 插件 | 描述 | ⭐ | 安装命令 |
|---|---|---|---|
| [dsh-mcp-proxy](https://github.com/ben7am1n/dsh-mcp-proxy) | 省上下文的惰性 MCP 访问 |  | `dsh plugin add dsh-mcp-proxy` |
| [deepseek-harness-plugin-mcp](https://github.com/bobleer/deepseek-harness-plugin-mcp) | 让任意 agent 发现/安装/运行 DSH 插件的 MCP server | 2 | `dsh plugin add deepseek-harness-plugin-mcp` |
| [dsh-webfetch](https://github.com/withlovehub/dsh-webfetch) | 零依赖 webfetch MCP server（干净文本/markdown/HTML/JSON，robots.txt 合规，SSRF 防护） | 2 |  |
| [dsh-search-mcp](https://github.com/gxpppp/dsh-search-mcp) | 用搜索 MCP（Tavily/Brave/Exa/Perplexity/DuckDuckGo）替换内置搜索 | 10 | `dsh plugin add dsh-search-mcp` |
| [dsh-oauth-mcp-client](https://github.com/springbrand-lab/dsh-oauth-mcp-client) | 连接支持 OAuth 2.1 的 Streamable HTTP MCP 服务 | 8 |  |
| [shadow-vision](https://github.com/WardLu/shadow-vision) | 开源 MCP 视觉 server，给纯文本 LLM 图片理解/OCR/UI 检查 | 1 |  |
| [mcp-bridge](https://github.com/WongJingGitt/mcp-bridge) | MCP 浏览器桥接，让网页端 AI 调用 MCP 工具 | 42 |  |
| [dsh-acp-for-bitfun](https://github.com/bobleer/dsh-acp-for-bitfun) | BitFun 与 DSH 的 ACP 交互对接 | 11 | `dsh plugin add dsh-acp-for-bitfun` |

[↩ 回到 🔌 MCP 接入 分类页](plugins/mcp.md)

## 🎨 Web UI / 皮肤 / 主题

| 插件 | 描述 | ⭐ | 安装命令 |
|---|---|---|---|
| [dsh-skins](https://github.com/Moeblack/dsh-skins) | Web UI 皮肤合集（含 harbor 夕港黄昏皮肤） | 2 | `dsh plugin add @dsh-external/dsh-web-skins` |
| [dsh-deep-whale](https://github.com/Small-tailqwq/dsh-deep-whale) | DSH Web 鲸鱼娘皮肤系列（深海女仆工坊） | 2516 |  |
| [dsh-qq2006](https://github.com/LaplaceYoung/dsh-qq2006) | QQ2006 复古皮肤 | 30 |  |
| [dsh-deepcel](https://github.com/Small-tailqwq/dsh-deepcel) | 模仿 Excel 的皮肤 | 14 |  |
| [dsh-tonghuashun](https://github.com/AdamPlatin123/dsh-tonghuashun) | 同花顺行情终端风格皮肤 + 代码量 K 线面板 | 2 |  |
| [dsh-plugin-colorscheme](https://github.com/Civitasv/dsh-plugin-colorscheme) | 配色方案插件 | 1 |  |
| [dsh-custom-css](https://github.com/AnacondaKC/dsh-custom-css) | 自定义 CSS | 2 | `dsh plugin add dsh-custom-css` |
| [dsh-web-background](https://github.com/BruceWu1126/dsh-web-background) | Web UI 背景自定义 | 1 |  |
| [dsh-plugin-background](https://github.com/gameswu/dsh-plugin-background) | Web UI 壁纸自定义 | 10 |  |
| [dsh-chat-width](https://github.com/chen-001/dsh-chat-width) | 调整回复宽度（终端宽度感知） | 6 |  |
| [deepseek-harness-skin](https://github.com/HeiGeAi/deepseek-harness-skin) | 换肤系统：21 套内置皮肤 + 一图生成整套配色 | 53 |  |
| [dsh-homepage-skin](https://github.com/yushi-xxh/dsh-homepage-skin) | 给 dsh web 铺上 DeepSeek Harness 首页同款背景：WebGL 流体、点线网格与数字鲸鱼，深浅双主题 · `dsh plugin --profile web add dsh-homepage-skin` | 3 |  |
| [DSH-better-sidebar](https://github.com/omdsh-dev/DSH-better-sidebar) | 侧边栏完整工作台：文件渲染编辑/终端/Git/子代理，支持三方注册 Tab | 4098 | `dsh plugin add dsh-better-sidebar` |
| [dsh-side-panel](https://github.com/ccq1/dsh-side-panel) | 侧边栏集成文件浏览器、终端和 Git 审查 | 15 | `dsh plugin add @dsh-external/dsh-side-panel` |
| [dsh-focus-chat](https://github.com/dingyi222666/dsh-focus-chat) | 「聚焦会话」精简视图，只关注最终产出结果 | 21 | `dsh plugin add @dingyi222666/dsh-focus-chat` |
| [ui-status-label](https://github.com/alingalingling/ui-status-label) | 把鲸鱼娘思考时的 "deep diving" 状态文案自定义 | 51 | `dsh plugin add dsh-ui-status-label` |
| [dsh-navbar](https://github.com/vlln/dsh-navbar) | 对话节点导航条，右缘节点串快速跳转 user 消息 | 51 | `dsh plugin add @dsh-external/dsh-navbar` |
| [dsh-task-status](https://github.com/vlln/dsh-task-status) | 后台任务状态条：对话页任务进度 + 实时输出 tail | 8 | `dsh plugin add @dsh-external/dsh-task-status` |
| [dsh-web-archive](https://github.com/renat3u/dsh-web-archive) | 折叠对话中的 Think、Bash 等「无用消息」 | 7 | `dsh plugin add dsh-web-archive` |
| [dsh-milestone](https://github.com/SnowCrescenter-tech/dsh-milestone) | 会话里程碑导航条：像 Git 提交图定位每条提问 | 23 | `dsh plugin add dsh-milestone` |
| [dsh-spotlight](https://github.com/0xsline/dsh-spotlight) | 键盘优先的命令面板（command palette） | 22 | `dsh plugin add @dsh-external/dsh-spotlight` |
| [dsh-deeplink](https://github.com/qyw233/dsh-deeplink) | `?session=` / `?workspace=` 深链直达指定项目对话 | 3 | `dsh plugin add @dsh-community/dsh-deeplink` |
| [dsh-diff-viewer](https://github.com/lehhair/dsh-diff-viewer) | PiUI 风格 diff 查看器，替换 write/edit 的默认 DiffBlock | 26 | `dsh plugin add @dsh-external/dsh-diff-viewer` |
| [dsh-drag-and-drop](https://github.com/bill9109/dsh-drag-and-drop) | 跨平台文件拖拽与原始路径插入，无需复制文件 | 21 | `dsh plugin add @bill9109/dsh-drag-and-drop` |
| [ex-setting](https://github.com/omdsh-dev/ex-setting) | DSH 的设置扩展 | 1 | `dsh plugin add @deepseek-ai/dsh-ex-setting` |
| [dsh-annotation](https://github.com/omdsh-dev/dsh-annotation) | 选中文字→批注→回车随消息发送，回复按批注逐条对照 | 138 | `dsh plugin add @omdsh-dev/dsh-annotation` |
| [dsh-prompt-studio](https://github.com/Moeblack/dsh-prompt-studio) | 带实时预览的用户/内置 system prompt 分节编辑器 | 2 | `dsh plugin add dsh-prompt-studio` |
| [dsh-prompt-persona](https://github.com/Xilin3/dsh-prompt-persona) | 从设置页编辑系统提示词（deployment persona），带实时预览 | 14 | `dsh plugin add @xilin3/dsh-prompt-persona` |
| [dsh-local-filetree](https://github.com/Mongfayi/dsh-local-filetree) | 右侧详情列显示当前会话工作区文件树（懒加载、只读） |  | `dsh plugin add dsh-local-filetree` |
| [dsh-sticky-disclosure](https://github.com/Han-1413141/dsh-sticky-disclosure) | 把滚出屏幕的折叠标签（Think/工具卡）钉在视口顶部 | 2 | `dsh plugin add dsh-sticky-disclosure` |
| [dsh-token-usage](https://github.com/hashdiana/dsh-token-usage) | 更美观的 Token 用量条：上下文占用/输入输出/缓存分解/首字延迟 | 2 | `dsh plugin add dsh-token-usage` |
| [TokenLedger](https://github.com/zh667/TokenLedger) | 按中转站点、项目和模型统计本地 DSH Token 用量，并显示账户余额与订阅额度周期 · `dsh plugin --profile web add github:zh667/TokenLedger` | 202 |  |
| [dsh-web-billing](https://github.com/bpc-oss/dsh-web-billing) | RMB/USD token 计费：官方峰谷价自动计价、按 provider/来源分组统计、预算与余额可视、CSV/JSON 导出 · `dsh plugin --profile web add github:bpc-oss/dsh-web-billing` | 12 |  |
| [dsh-plugin-usage-meter](https://github.com/fancr-code/dsh-plugin-usage-meter) | API 用量/费用/余额仪表：按钮式用量条（峰/谷时段标签）、当日/近 7 天按模型堆叠柱状图、模型分布、预算提醒与跨会话账本 | 5 | `dsh plugin add dsh-plugin-usage-meter` |
| [dsh-model-config-sync](https://github.com/LiangYin233/dsh-provider-model-configurator) | 高级模型配置器：把 pi-ai 预设一键应用到自定义提供商 | 18 | `dsh plugin add dsh-model-config-sync` |
| [dsh-web-ui](https://github.com/zhu1090093659/dsh-web-ui) | DSH Web UI 插件与皮肤集合：任务看板、Git 图谱、右侧面板、移动端远程、皮肤中心 | 8597 | `dsh plugin add dsh-web-ui` |
| [dsh-plugin-open-app](https://github.com/2nd1st/dsh-plugin-open-app) | 把 open-mcp-apps 带进 DSH：每个 MCP app 一个侧边栏容器（独立 workspace + 会话 + App mode），带 agent 状态条、聊天内行内渲染与 App Store · `dsh plugin --profile web add @2nd1st/dsh-plugin-open-app` | 8 |  |
| [dsh-ui-hub](https://github.com/Han-1413141/dsh-ui-hub) | UI 管家：官方/插件 UI 分区折叠、逐条开关，拖拽移动/改大小，碰撞避让与一键自动排布 · `dsh plugin --profile web add github:Han-1413141/dsh-ui-hub` | 4 |  |
| [dsh-easyrewrite](https://github.com/Renzic-Stone/DSH-EasyRewrite) | DSH Web 用户消息气泡内联编辑与撤回：惰性提交、无痕替换、版本翻页器、草稿自动备份、三语 i18n | 126 | `dsh plugin add dsh-easyrewrite` |
| [dsh-meow-smooth](https://github.com/Phant0Meow/dsh-meow-smooth) | 手机优先的 DSH 前端体验优化：输入框失焦自动折叠、手机回车换行、侧边栏/顶部栏压缩、设置页适配、禁缩放回弹，外加长任务完成/权限申请/提问通知（Web Push/Bark webhook） | 60 | `dsh plugin add meow-smooth` |
| [dsh-visualize](https://github.com/Nagi-ovo/dsh-visualize) | 对话内生成式 UI：模型把交互式 HTML 卡片直接画进会话流，带流式预览 | 297 | `dsh plugin add @dsh-external/dsh-visualize` |
| [dsh-genui](https://github.com/omdsh-dev/dsh-genui) | 助手回复内渲染交互式 UI 组件：布局、图表、表单、测验、mermaid、3D 场景 | 542 | `dsh plugin add @omdsh-dev/dsh-genui` |
| [web-components](https://github.com/omdsh-dev/web-components) | Web Components 支持 | 1 | `dsh plugin add @deepseek-ai/dsh-client-web-component` |
| [dsh-openpencil](https://github.com/ZSeven-W/dsh-openpencil) | OpenPencil 设计预览与编辑（Agent 操作真实设计画布） | 186 | `dsh plugin add @zseven-w/dsh-openpencil` |
| [dsh-approval-hotkeys](https://github.com/SiriLee/dsh-approval-hotkeys) | 审批面板键盘快捷键：Enter 批准一次、Esc 拒绝、Esc 暂停键盘驱动审阅 | 2 | `dsh plugin add dsh-approval-hotkeys` |
| [dsh-billing-badge](https://github.com/devacc8/dsh-billing-badge) | 输入框统计行里、原生 Cache hit 之后的小胶囊：高峰/非高峰圆点与切换倒计时，点击展开余额面板（总额、赠送、充值的拆分与 API 可用性），货币取自接口返回值 |  | `dsh plugin --profile web add dsh-billing-badge` |
| [dsh-round-rightclick](https://github.com/hmr-BH/dsh-round-rightclick) | 在 DSH Web GUI 的对话轮次上提供径向右键菜单：从指定轮次分叉新会话、中断正在运行的生成、复制工作目录路径、复制会话 ID、在文件管理器中打开工作目录、导出会话日志为 ZIP |  | `dsh plugin add dsh-round-rightclick` |
| [dsh-worktree](https://github.com/alpacachen/dsh-worktree) | 极简 Git worktree 管理：一个按钮和一个对话框创建任务分支 worktree，并直接打开为 DSH Workspace · `dsh plugin --profile web add @alpacachen/dsh-simple-worktree` | 2 |  |
| [dsh-settings-ui](https://github.com/weibaohui/dsh-settings-ui) | 设置界面自定义：调整原生设置窗口大小（全屏/预置/自定义宽高）、背景透明度与背景（主题/颜色/图片），悬浮球即开即调 | 1 | `dsh plugin add @weibaohui/dsh-settings-ui` |
| [dsh-park-notes](https://github.com/kevin-zx/dsh-park-notes) | 等待 AI 输出时随手记录想聊的话题：输入框上方常驻「稍后说」便签条，零打断、随会话保存，稍后一键带入草稿 |  | `dsh plugin --profile web add github:kevin-zx/dsh-park-notes` |

[↩ 回到 🎨 Web UI / 皮肤 / 主题 分类页](plugins/ui-themes.md)

## 🖥️ 桌面端 / TUI / 移动端

| 插件 | 描述 | ⭐ | 安装命令 |
|---|---|---|---|
| [dsh-TUI](https://github.com/ccch1mneyyy/dsh-TUI) | Claude Code 风格全屏交互终端：像素鲸鱼顶栏、流式思考展开、双击 Esc 回滚、上下文/TPS 仪表 | 4268 | `dsh plugin add dsh-cc-tui` |
| [dsh-tianshu-tui](https://github.com/huiliyi37/dsh-tianshu-tui) | DSH 终端 TUI（天枢） | 287 | `dsh plugin add @huiliyi37/dsh-tianshu-tui` |
| [dsh-pi-tui](https://github.com/lqhl/dsh-pi-tui) | Pi TUI 前端：流式 markdown、思考折叠、工具卡、斜杠命令 | 2 |  |
| [deepseek-harness-tui](https://github.com/gxinxing/deepseek-harness-tui) | Ink/React 终端原生 TUI | 11 | `dsh plugin add deepseek-harness-tui` |
| [dsh-tui](https://github.com/dsh-tui/dsh-tui) | Claude Code 风格终端 UI（out-of-tree bundle） | 37 | `dsh plugin add @dsh-tui/dsh-tui` |
| [oh-dsh](https://github.com/hust-open-atom-club/oh-dsh) | 一站式社区发行版：TUI、桌面端与 Web UI 三种形态统一体验 | 322 | `dsh plugin add @oh-dsh/desktop` |
| [deepseek-harness-desktop](https://github.com/chyra-moon/deepseek-harness-desktop) | Windows 原生桌面壳：1:1 官方 Web UI + 内置服务器托管 + 托盘驻留 | 20 |  |
| [deepseek-harness-desktop](https://github.com/Easyhoov/deepseek-harness-desktop-windows) | 非官方进程内 Windows 桌面应用（托盘 + 原生通知 + IPC） | 3 |  |
| [dsh-desktop](https://github.com/bruc3van/dsh-desktop) | 社区维护的非官方桌面客户端（复用官方实例或内置运行时） | 93 |  |
| [dsh-desktop](https://github.com/zsyu9779/dsh-desktop) | Wails(Go) 桌面壳，Codex 风格原生应用 | 10 |  |
| [dsh-desktop](https://github.com/mrbbbaixue/dsh-desktop) | .NET 10 WPF + WebView2 桌面启动器 | 6 |  |
| [dsh-desktop](https://github.com/dataelement/dsh-desktop) | 跨平台桌面应用 | 13023 |  |
| [dsh-desktop-electron](https://github.com/Void0312Aurora/dsh-desktop-electron) | 跨平台 Electron 桌面壳（托盘驻留、无内置 Node） | 4 |  |
| [dsh-desktop-window](https://github.com/fengzhiyushui/dsh-desktop-window) | 以独立应用窗口打开 Web UI（自动开窗 + 设置开关） |  | `dsh plugin add dsh-desktop-window` |
| [deepseek-harness-desktop](https://github.com/anywhere-labs/deepseek-harness-desktop) | 现代化 DeepSeek Harness 桌面端体验 | 30368 |  |
| [Deepseek-Harness-Desktop](https://github.com/ChisaAlter/Deepseek-Harness-Desktop) | Electron 桌面壳：主题/背景图/托盘，对话仍走官方 dsh web | 173 | `dsh plugin add deepseek-harness-desktop` |
| [dsh-launcher](https://github.com/Ruler4396/dsh-launcher) | Windows 轻量启动器：开机自启 + 独立小窗口 | 202 |  |
| [dsh-tray-launcher](https://github.com/fancr-code/dsh-tray-launcher) | Windows 桌面托盘启动器：无窗口运行 dsh web，托盘右键切换图标（梁祖/鲸鱼娘/DeepSeek/自定义），退出即全退 · `npm i -g dsh-tray-launcher && dsh-tray-install` | 5 |  |
| [dsh-work](https://github.com/vibeinging/deepseek-harness-desktop-app) | 本地 AI 工作桌面：Session/文件/数据分析/MCP/Office 一体化 | 593 |  |
| [dsh-companion](https://github.com/william-jin-cmu/dsh-companion) | 常驻桌面助手：全局唤起、定时自动化、快捷回复、插件市场 | 4 |  |
| [dsh-mobile](https://github.com/lehhair/dsh-mobile) | 移动端客户端（⚠️ dsh-external，公开性待核实） | 25 |  |
| [deepseek-harness-tui](https://github.com/openma-ai/deepseek-harness-tui) | Rust/ratatui 编写的 DSH 终端 TUI | 79 | `dsh plugin add github:openma-ai/deepseek-harness-tui` |
| [dsh-ssh-tui](https://github.com/cyjyyd/dsh-ssh-tui) | 跳板机/高延迟 SSH 上的 DSH 终端：纯 ANSI、增量重绘；SSH 掉线后会话不丢，`--resume` 接回 · `dsh plugin --profile tui add dsh-ssh-tui` | 3 |  |

[↩ 回到 🖥️ 桌面端 / TUI / 移动端 分类页](plugins/desktop-tui-mobile.md)

## 🤖 Agent 编排 / 多 Agent

| 插件 | 描述 | ⭐ | 安装命令 |
|---|---|---|---|
| [dsh-agent-teams](https://github.com/NanmiCoder/dsh-agent-teams) | AgentTeams 多智能体团队协作 | 2010 | `dsh plugin add dsh-agent-teams` |
| [dsh_workflow](https://github.com/icetomoyo/dsh_workflow) | 把 UltraCode 式多 Agent 调度带给 DSH：可生成/保存/治理/观察/恢复的 Workflow 层 | 141 | `dsh plugin add @dsh-external/workflow` |
| [dsh-meta-orchestrator](https://github.com/jiruidai/dsh-meta-orchestrator) | 模型原生 meta-agent：运行时合成任务专属工作流并协调工具/子代理 | 6 | `dsh plugin add dsh-meta-orchestrator` |
| [dsh-crosstalk](https://github.com/Jesse-njx/dsh-crosstalk) | 跨会话消息互发：本机任意会话像 Claude Code 一样互发消息 | 4 | `dsh plugin add @dsh-crosstalk/bundle` |
| [dsh-agent-messaging](https://github.com/happyren/dsh-agent-messaging) | 跨会话 agent-to-agent 消息投递（按会话名寻址） | 7 | `dsh plugin add dsh-agent-messaging` |
| [dsh-interconnect](https://github.com/Chinesezjc/dsh-interconnect) | 跨实例消息/事件交接（interconnect 服务 + 工具） | 35 | `dsh plugin add dsh-interconnect` |
| [dsh-session-hub](https://github.com/Asaiuta/dsh-session-hub) | 多服务器 DSH 会话聚合与原生操控（hub 网关 + 官方 UI 桥） | 5 | `dsh plugin add dsh-session-hub` |
| [dsh-plugin-yet-another-subagent](https://github.com/HuanLinOTO/dsh-plugin-yet-another-subagent) | 可配置子代理 profiles + 实时工具调用/token 显示 + 子会话跳转 | 18 | `dsh plugin add @huanlin/dsh-plugin-yet-another-subagent` |
| [dsh-a2a](https://github.com/dpskh/dsh-a2a) | Agent2Agent 网状互联 ⚠️ dsh-external，公开性待核实 | 11 |  |
| [dsh-devices](https://github.com/polaris-smart/dsh-devices) | 去中心化多设备舰队：mDNS 同网发现 + 密钥配对 + SSH 跨网直连 + SFTP 文件传输，dsh 会话内自动注册 6 个 fleet 工具（零 npm 依赖） | 7 | `dsh plugin add dsh-devices` |
| [dsh-wait-guard](https://github.com/dn4hjtcr9s-del/dsh-wait-guard) | 主 Agent 的出口闸门：后代子代理还有 running 就不允许 turn 结束；消息到达立刻完全退场，超时才注入一条提醒后同样退场 |  | `dsh plugin add github:dn4hjtcr9s-del/dsh-wait-guard` |
| [lunheng-article-pipeline-dsh](https://github.com/zuoyunlai/lunheng-article-pipeline-dsh) | 论衡：主控调度 + 9 个独立角色（文献/数据/案例检索、分析、写作、批判、审计、终检、同行评审）的深度长文写作流水线，跨 6 阶段，含 4 个人在环节点、三角验证、M 门 23 项机械终检、G0-G14 独立审计与审稿评分/期刊匹配 | 13 | `dsh plugin add lunheng-article-pipeline` |
| [dsh-product-subagent-console](https://github.com/Jokasa7/dsh-product-subagent-console) | DSH 对话级多 Agent 工作台：可编辑任务方案、观察真实子会话树、对照计划与实际运行，并生成基于证据的恢复预览 · [v0.9.0 安装说明](https://github.com/Jokasa7/dsh-product-subagent-console#install) | 2 |  |
| [dsh-smart-title](https://github.com/weibaohui/dsh-smart-title) | 会话智能标题：每轮对话结束后用一次独立的辅助 LLM 调用对「用户消息+助手回答」完整转写做总结，标题跟随会话真实主题而不是复述第一句话；首条消息即时生成标题、内置标题失败在后续轮次自动重试、用户手动改名绝不被覆盖、自动跳过子代理与 fork 会话 | 6 | `dsh plugin add @weibaohui/dsh-smart-title` |
| [experts-management](https://github.com/weibaohui/experts-management) | 专家管理：管理 ntd 格式的专家与专家团队（plugin.json + Agent MD + 技能集），内置 50+ 专家市场，`/expert-名称` 以专家身份执行任务，不占模型目录 token | 3 | `dsh plugin add @weibaohui/experts-management` |

[↩ 回到 🤖 Agent 编排 / 多 Agent 分类页](plugins/agent-orchestration.md)

## 🧠 上下文 / 记忆

| 插件 | 描述 | ⭐ | 安装命令 |
|---|---|---|---|
| [dsh-memory-evolve](https://github.com/csyangwen/dsh-memory-evolve) | 跨会话长期记忆 + 后台自我进化（五轨记忆/git 分支感知/技能进化） | 375 |  |
| [billion-context-dsh](https://github.com/Tyan66666/billion-context-dsh) | 模型驱动上下文压缩（ACP）：模型决定何时压缩（移植自 billion-context-pi） | 139 |  |
| [dsh-memory](https://github.com/Jesse-njx/dsh-memory) | 基于无损会话日志的引用式记忆（事实带 sessionId/eventRange 引用） | 1 | `dsh plugin add @dsh-memory/bundle` |
| [dsh-memory](https://github.com/ben7am1n/dsh-memory) | 跨会话 SQLite 持久记忆 |  | `dsh plugin add dsh-memory` |
| [dsh-mnemon](https://github.com/omdsh-dev/dsh-mnemon) | Mnemon 本地三层记忆（Runtime Memory/可检索文档/受监督 Memory Spaces） | 488 | `dsh plugin add dsh-mnemon` |
| [nowledge-mem-deepseek-harness](https://github.com/nowledge-co/nowledge-mem-deepseek-harness) | 给所有 AI 工具共用的一层记忆（Context Bundle 注入 + MCP 工具 + 线程捕获） | 7 | `dsh plugin add nowledge-mem-deepseek-harness` |
| [dsh-plugin-meta-memory](https://github.com/YYTbit/dsh-plugin-meta-memory) | 结构化长期记忆系统 | 5 | `dsh plugin add dsh-plugin-meta-memory` |
| [dsh-kb-sieve](https://github.com/omdsh-dev/dsh-kb-sieve) | 从 md/txt/docx/pdf 构建可审计知识库包（SQLite FTS5） | 2 | `dsh plugin add @dsh-external/dsh-kb-sieve` |
| [dsh-llm-wiki](https://github.com/detpecca/dsh-llm-wiki) | 从 agent 管理 LLM-Wiki 知识库（wiki_search/read/stats/ingest 等） | 3 | `dsh plugin add @detpecca/dsh-llm-wiki` |
| [dsh-continual-evolve](https://github.com/ZK-Andy/dsh-continual-evolve) | 持续自进化：版本化、可审计、可回滚的 harness 状态（提示词/记忆/技能/子代理规格）沉淀自会话轨迹，带审查门禁与技能热加载 | 20 | `dsh plugin add dsh-continual-evolve` |
| [dsh-meow-memory](https://github.com/Phant0Meow/dsh-meow-memory) | 跨会话项目记忆：SQLite 分层存储 + 关键词/语义检索，逐消息命中注入与窗口期整理 | 175 | `dsh plugin add github:Phant0Meow/dsh-meow-memory` |
| [dsh-context-doctor](https://github.com/Zhenyu98/dsh-context-doctor) | 上下文注入审计：统计指令链/技能目录/工具 schema 的 token 成本，检测重复冲突 | 36 | `dsh plugin add dsh-context-doctor` |
| [context-vista](https://github.com/GooodWei/context-vista) | `/context` 命令 + 环形图实时展示上下文 token 用量与费用 | 11 | `dsh plugin add context-vista` |
| [distill](https://github.com/LoserFox/distill) | 自动对话蒸馏：后台 subagent 反省 + 技能 create/update | 28 | `dsh plugin add @loserfox/distill` |
| [dsh-auto-compact](https://github.com/wangxiang0605qvq/dsh-auto-compact) | compact_now 工具，回合结束自动压缩上下文 |  |  |
| [dsh-context](https://github.com/bowenliang123/dsh-context) | 上下文洞察面板：展示模型上下文窗口的构成与演化 | 1969 | `dsh plugin add dsh-context` |
| [dsh-turn-rewind](https://github.com/Anionex/dsh-turn-rewind) | 对话回退：基于持久 Change Ledger 回滚会话与工作区状态 | 131 | `dsh plugin add @dsh-external/turn-rewind` |
| [dsh-undo](https://github.com/LingLambda/dsh-undo) | 上下文 undo/redo：回退到上一个已完成步骤并恢复 | 4 | `dsh plugin add dsh-undo` |
| [dsh-recall](https://github.com/Mongfayi/dsh-recall) | 消息撤回：每条用户消息一个撤销按钮，删除该轮及其后内容（不改代码） | 2 | `dsh plugin add dsh-recall` |
| [dsh-sidechain](https://github.com/omdsh-dev/dsh-sidechain) | `/side` 持续性侧会话与 `/btw` 一次性侧问，在临时 fork 中运行 | 15 | `dsh plugin add @dsh-external/dsh-sidechain` |
| [dsh-message-edit](https://github.com/Moeblack/dsh-message-edit) | 基于分支的消息编辑、reroll、重试与版本时间线 | 50 | `dsh plugin add dsh-message-edit` |
| [dsh-session-search](https://github.com/Tieboyh/dsh-session-search) | 跨 dsh/Codex/Claude/pi/OpenCode 会话的无索引全文搜索 | 1 |  |
| [dsh-chat-import](https://github.com/Nwflower/dsh-chat-import) | 13 源全保真导入（Claude Code/Codex/ChatGPT/Cursor/Gemini/Reasonix/opencode/ZCode/Grok Build/OpenClaw/Pi/Hermes/Kimi）历史会话为可续聊 DSH 会话 | 223 | `dsh plugin add dsh-chat-import` |
| [dsh-claude-move](https://github.com/PerryLink/dsh-claude-move) | 迁移 Claude Code 会话/记忆/技能/CLAUDE.md 到 DSH | 27 | `dsh plugin add dsh-claude-move` |
| [taskfold](https://github.com/yindf/taskfold) | 把已完成的 agent 工作折叠成一条带标题的摘要，长会话保持可读、请求更省；每次折叠的原始内容可随时原样读回 | 7 | `dsh plugin add dsh-taskfold` |
| [dsh-rewind](https://github.com/SiriLee/dsh-rewind) | 同窗口原地回退（Claude Code /rewind 语义）：每条用户消息旁 ↶ 按钮把模型上下文截断回任意一条消息，可选 Claude Code 风格文件回滚 | 123 | `dsh plugin add dsh-rewind-plugin` |
| [dsh-memory_rollout](https://github.com/Bionic-forest/dsh-memory_rollout) | Codex 风格的 DSH 会话持久记忆：一会话一草稿、分层披露、克制被动、幂等整合，跨会话记住事实/偏好/决策并带可核验引用 | 2 | `dsh plugin add dsh-memory_rollout` |
| [dsh-squeeze-command](https://github.com/hardes11/dsh-squeeze-command) | 手动、面向预算的上下文压缩：对话模型圈定要总结的范围，廉价 flash 级路由生成检查点摘要 | 1 | `dsh plugin add dsh-squeeze-command` |
| [dsh-kb](https://github.com/weibaohui/dsh-kb) | 团队知识库：离线知识共享（FDE 盒子场景），浏览/全文检索/加工入口；raw 入料自动入队、bot 会话串行蒸馏成文（Karpathy LLM Wiki 模式：raw 不可变 / 两步加工 / log 流水 / 月度 lint） | 4 | `dsh plugin add @weibaohui/dsh-kb` |
| [dsh-memento](https://github.com/PerryLink/dsh-memento) | 有界、分层、审批门、可审计的跨会话记忆：`ctx.memory` 服务 + 零依赖 SQLite + memory 工具 + 冻结快照注入 | 141 | `dsh plugin add dsh-memento` |
| [hermes-loop](https://github.com/weibaohui/hermes-loop) | 自动复盘：对话收尾后自动把有价值的经验蒸馏成可复用技能存入技能库，支持审批模式与技能库治理（归档/恢复，永不直接删除） | 9 | `dsh plugin add @weibaohui/hermes-loop` |
| [dsh-session-manager](https://github.com/SunshineR04/dsh-session-manager) | 已归档会话管理：设置页列出/恢复/彻底删除（直接物理删除，无备份层），会话菜单红色删除项；已打开的会话也能立即删除（墓碑隐藏，重启后自动清理） | 1 | `dsh plugin add github:SunshineR04/dsh-session-manager` |
| [context-razor](https://github.com/weibaohui/context-razor) | 上下文剃刀：把当前会话上下文逐条列出（角色/预览/≈token 估算），超阈值标红，勾选后不经 LLM 精确裁剪，删了什么一目了然 | 1 | `dsh plugin add @weibaohui/context-razor` |

[↩ 回到 🧠 上下文 / 记忆 分类页](plugins/context-memory.md)

## 👁️ 多模态 / 视觉

| 插件 | 描述 | ⭐ | 安装命令 |
|---|---|---|---|
| [modlens](https://github.com/liustack/modlens) | DSH 首个视觉插件：粘贴图片返回结构化 JSON 证据（OCR/布局/语义） | 4192 | `dsh plugin add @liustack/modlens` |
| [dsh-vision-toolkit](https://github.com/Anionex/dsh-vision-toolkit) | 纯文本模型的视觉工具箱：图片问答、长截图 OCR、UI 还原、定位、像素对比、Artifacts | 887 | `dsh plugin add @dsh-external/dsh-vision-toolkit` |
| [agent-vision-toolkit](https://github.com/Anionex/agent-vision-toolkit) | 同上，agent 通用视觉工具箱与技能（多图理解/GUI 自动化） | 1223 |  |
| [dsh-vision](https://github.com/william-jin-cmu/dsh-vision) | view_image 工具桥接任意 OpenAI 兼容 VLM（默认智谱免费档） | 30 |  |
| [dsh-vision-LMstudio](https://github.com/TiankunDai/dsh-vision-LMstudio) | 通过 LM Studio 调用本地视觉模型 | 1 |  |
| [dsh-vision-proxy](https://github.com/Flyvhidbwo/dsh-vision-proxy) | DeepSeek 大脑 + 自动识图（图片经 Qwen VLM 转文字后作答） | 16 | `dsh plugin add dsh-vision-proxy` |
| [dsh-plugin-deepeye](https://github.com/Favio8/dsh-plugin-deepeye) | DeepEye 视觉插件：图片描述/OCR/VQA/UI 布局/剪贴板分析 | 3 | `dsh plugin add dsh-plugin-deepeye` |
| [deepseek-omnimodal](https://github.com/good-boy4069/Deepseek-omnimodal) | 开源多模态 MCP 插件：经 Qwen/DashScope 识别/生成图像、视频、音频（兼容 Codex/Claude Code/DSH） | 4 |  |
| [sidesight](https://github.com/ZhuXinAI/sidesight) | CLI 优先的视觉 sidecar：分析截图/图表/UI diff/视频（OpenAI 兼容多模态模型） | 2 | `dsh plugin add sidesight` |
| [dsh-paddle-ocr](https://github.com/omdsh-dev/dsh-paddle-ocr) | 百度 PaddleOCR-VL 文档布局解析（OCR 工具 + 设置卡 + 任务面板） | 3 | `dsh plugin add dsh-paddle-ocr` |
| [dsh-screenshot-diff](https://github.com/PangYiMing/dsh-screenshot-diff) | 两截图像素对比生成 diff.png + 三联图（pixelmatch） |  | `dsh plugin add dsh-screenshot-diff` |
| [Qwen-MM-Plugins](https://github.com/omdsh-dev/Qwen-MM-Plugins) | Qwen 多模态插件支持 |  | `dsh plugin add @deepseek-ai/dsh-qwen-mm` |
| [dsh-computer-use](https://github.com/Anionex/dsh-computer-use) | macOS 电脑控制：Accessibility 观测、过期状态拒绝、作用域权限、安全输入 | 54 | `dsh plugin add @dsh-external/dsh-computer-use` |
| [dsh-mobile-control](https://github.com/PangYiMing/dsh-mobile-control) | 操控手机（ADB/iOS） | 3 | `dsh plugin add dsh-mobile-control` |
| [dsh-hdc-bridge](https://github.com/1na-ko/dsh-hdc-bridge) | 原生鸿蒙设备桥：hdc 截图-看图-装包-验证闭环调试 | 19 | `dsh plugin add dsh-hdc-bridge` |
| [dsh-plugin-aigc-canvas](https://github.com/HuanLinOTO/dsh-plugin-aigc-canvas) | provider 无关的 AIGC HTTP 桥 + 自由画布 + ffmpeg 后处理 | 19 | `dsh plugin add @huanlin/dsh-plugin-aigc-canvas` |
| [dsh-vision-router](https://github.com/ysr666/dsh-vision-router) | 纯文本模型的视觉路由：免费视觉链 + 像素级视觉工具（问答/定位/裁剪/OCR） | 1141 | `dsh plugin add dsh-vision-router` |
| [dsh-labnana](https://github.com/exoticknight/dsh-labnana) | Labnana 图片生成插件：文生图/图生图/精准编辑，支持 NanoBanana Pro、GPT-Image-2、Wan2.7、Seedream，对话内图片卡片 + 积分预估 | 2 | `dsh plugin add github:exoticknight/dsh-labnana` |

[↩ 回到 👁️ 多模态 / 视觉 分类页](plugins/multimodal.md)

## 🔁 工作流 / 自动化

| 插件 | 描述 | ⭐ | 安装命令 |
|---|---|---|---|
| [dsh-deep-research](https://github.com/omdsh-dev/dsh-deep-research) | 自适应深度研究编排器（基于官方 workflow 引擎） | 27 | `dsh plugin add @dsh-external/dsh-deep-research` |
| [dsh-deepresearch](https://github.com/havingautism/dsh-deepresearch) | 证据优先的独立研究工作流（持久状态 + 独立 Web 视图） | 13 | `dsh plugin add @deepseek-ai/dsh-deepresearch` |
| [dsh-loop](https://github.com/vlln/dsh-loop) | 定时循环：`/loop` 命令 + loop 工具 + 活动状态条 | 7 | `dsh plugin add @dsh-external/dsh-loop` |
| [dsh-sentinel](https://github.com/fuhefei/dsh-sentinel) | 条件驱动唤醒：file/command/http/process/webhook 持久监视触发 agent | 18 | `dsh plugin add @dsh-external/dsh-sentinel` |
| [dsh-automation](https://github.com/titanwings/dsh-automation) | 定时任务：Coding 任务按计划在全新 Agent Session 中运行 | 100 | `dsh plugin add @dsh-external/dsh-automation` |
| [dsh-routines](https://github.com/Jesse-njx/dsh-routines) | cron 定时 Agent：按计划跑 prompt 并把摘要送到你所在处 |  | `dsh plugin add @dsh-routines/bundle` |
| [dsh-plannotator](https://github.com/titanwings/dsh-plannotator) | 计划批注：选中计划原文逐条批注并回送结构化反馈 | 11 | `dsh plugin add @dsh-external/dsh-plannotator` |
| [dsh-inspect](https://github.com/omdsh-dev/dsh-inspect) | 发现问题→修复→复查的对抗式闭环（基于官方 workflow 引擎） | 6 | `dsh plugin add @dsh-external/dsh-inspect` |
| [dsh-advisor](https://github.com/omdsh-dev/dsh-advisor) | 副模型每轮被动审查并注入见解 | 26 | `dsh plugin add dsh-advisor` |
| [mstar-harness](https://github.com/btspoony/mstar-harness) | Skill 驱动的 Harness/Loop 工程工作流 Agent 插件 | 63 |  |
| [dsh-llm-fallbacks](https://github.com/omdsh-dev/dsh-llm-fallbacks) | 基于角色的模型重试/备用策略 | 21 | `dsh plugin add dsh-llm-fallbacks` |
| [dsh-polyglot](https://github.com/Jesse-njx/dsh-polyglot) | 模型切换器：任意 OpenAI 兼容端点 + 免费/低价 DeepSeek 预设 + 限流自动回退 | 3 | `dsh plugin add @dsh-polyglot/bundle` |
| [dsh-track](https://github.com/fakechris/dsh-track) | 嵌入式任务管理引擎：决策点协议、念头捕获墙、Linear 形 issue 存储 | 4 | `dsh plugin add @deepseek-ai/dsh-track` |
| [dsh-record-replay](https://github.com/humblebanana/dsh-record-replay) | 录制 macOS 桌面工作流演示并转成 agent 技能（orr_* 工具） | 13 | `dsh plugin add dsh-record-replay` |
| [dsh-daily-progress](https://github.com/omdsh-dev/dsh-daily-progress) | 每日进度：今晚定明日计划 + 今日清单 + 完成度温度计 | 2 | `dsh plugin add dsh-daily-progress` |
| [dsh-goal-mode](https://github.com/KarlOfLaw/dsh-goal-mode-enhance) | 可视化 goal 模式：Goal 栏/设置页/多会话总览/goal_overview 工具 | 3 | `dsh plugin add dsh-goal-mode` |
| [dsh-ramify](https://github.com/yanglongyun/dsh-ramify) | 创意分支画布：树状工作区生成、对比、迭代多个方案 | 18 | `dsh plugin add @ramify/dsh-ramify` |
| [dsh-tool-approval](https://github.com/ilharp/dsh-tool-approval) | 手动审批模式（Manual/Ask Mode） |  | `dsh plugin add dsh-tool-approval` |
| [dsh-tiered-approval](https://github.com/Elaina-real/dsh-tiered-approval) | 分层自动审查：静态规则 + LLM 审查 + 人工兜底 | 1 | `dsh plugin add dsh-tiered-approval` |
| [dsh-event-auditor](https://github.com/qing3a/dsh-event-auditor) | 事件流审计面板：观察事件类型/分发模式/计数，帮插件作者理解内部 |  | `dsh plugin add @dsh-external/dsh-event-auditor` |
| [dsh-auto-continue](https://github.com/HsiangNianian/dsh-auto-continue) | 自动续传：网络中断后自动发「继续」恢复请求 | 143 | `dsh plugin add github:HsiangNianian/dsh-auto-continue` |
| [dsh-oh-my-claude](https://github.com/lcestou/dsh-oh-my-claude) | 把本机已登录的 Claude Code CLI 接成 dsh 的模型提供方：在 dsh 的模型选择器里直接选 Claude 模型，不需要 API Key；带会话恢复、权限模式和用量面板，中英双语 | 10 | `dsh plugin add dsh-oh-my-claude` |
| [dsh-edit-approval](https://github.com/SiriLee/dsh-edit-approval) | 写文件/工具调用前的逐处审批门：write/edit/stream 操作显示红绿行级 diff 后再放行，bash 命令审批（默认关） | 3 | `dsh plugin add dsh-edit-approval` |
| [dsh-process](https://github.com/weibaohui/dsh-process) | 工艺管理：把 ntd 的「工艺」（多阶段·多环节 agent 工作流模板）接进 dsh web——浏览/编辑/校验/导入导出/AI 生成工艺，内置库只读、我的库可写，文件改动实时同步；agent 可通过 process_* 工具读工艺库、按工艺分阶段推进 | 1 | `dsh plugin add @weibaohui/dsh-process` |
| [dsh-flow](https://github.com/weibaohui/dsh-flow) | 执行流程图：把会话执行过程画成纵向节点流（回合/用户/助手/工具/审批/重试/压缩），SSE 实时追加、自动跟随滚动 |  | `dsh plugin add @weibaohui/dsh-flow` |
| [dsh-auto-review](https://github.com/PerryLink/dsh-auto-review) | 审批链上的第二模型自动审查：只读审查子代理给出带理由的 allow/deny 裁决，默认失败即拒绝、全程可审计 | 235 | `dsh plugin add dsh-auto-review` |
| [dsh-continue](https://github.com/weibaohui/dsh-continue) | 自动续跑：agent 会话中断后自动续上，按失败类型（限流/额度/鉴权/上下文超限/崩溃孤儿）路由到退避重试、换模型、压缩上下文后继续或止损通知，规则可视化编辑 | 5 | `dsh plugin add @weibaohui/dsh-continue` |
| [dsh-tasks](https://github.com/weibaohui/dsh-tasks) | 定时任务：用 cron 表达式定时执行提示词，到点自动开一个新 agent 会话替你干活，支持绑定工作区、手动立即执行与会话自动命名 | 9 | `dsh plugin add @weibaohui/dsh-tasks` |

[↩ 回到 🔁 工作流 / 自动化 分类页](plugins/workflow-automation.md)

## 📡 通知 / 渠道 / 远程

| 插件 | 描述 | ⭐ | 安装命令 |
|---|---|---|---|
| [telegram](https://github.com/LoserFox/telegram) | Telegram Bot API 桥接：长轮询、per-chat 会话、HTML 格式化 | 6 | `dsh plugin add @loserfox/telegram` |
| [dsh-telegram](https://github.com/ben7am1n/dsh-telegram) | Telegram 运行时适配器（per-chat 会话、allowlist 认证） | 3 | `dsh plugin add dsh-telegram` |
| [DSH-Telegram-Relay](https://github.com/congchuanling-dot/DSH-Telegram-Relay) | 通过 Telegram 远程对话并接收通知 | 4 | `dsh plugin add dsh-telegram-relay` |
| [dsh-chatnode-wechat](https://github.com/Jesse-njx/dsh-chatnode-wechat) | 通过 iLink 网关在微信里与 DSH agent 聊天/监控/审批 | 6 | `dsh plugin add @dsh-cowork/chatnode-wechat` |
| [dsh-lark-bridge](https://github.com/imetn/dsh-lark-bridge) | 双向飞书控制器 | 6 | `dsh plugin add dsh-lark-bridge` |
| [dsh-onlyne](https://github.com/dbydd/dsh-onlyne) | IM 网关：从 dsh 会话收发 QQ/微信/飞书/Telegram 消息 | 1 |  |
| [dsh-im](https://github.com/xmanrui/dsh-im) | 一个设置入口统一接入飞书/微信/钉钉/企业微信/QQ/Slack/Telegram/Discord/WhatsApp 机器人，支持扫码、Manifest 或凭据绑定 · `npx -y github:xmanrui/dsh-im install` | 1779 |  |
| [dsh-notification](https://github.com/omdsh-dev/dsh-notification) | 回合完成桌面通知，按结果分控 + 关键词过滤 | 88 | `dsh plugin add dsh-notification` |
| [dsh-notify-windows](https://github.com/SeverusZh/dsh-notify-windows) | Windows 通知（零依赖） | 11 |  |
| [dsh-win-notify](https://github.com/MuziIsabel/dsh-win-notify) | Windows toast 通知（任务完成带声音） | 3 | `dsh plugin add dsh-win-notify` |
| [dsh-web-ui-notify](https://github.com/bill9109/dsh-web-ui-notify) | 桌面通知提醒 | 33 | `dsh plugin add @bill9109/dsh-web-ui-notify` |
| [dsh-session-notification](https://github.com/dingyi222666/dsh-session-notification) | 会话完成等四种状态通知，支持浏览器提示 | 27 | `dsh plugin add @dingyi222666/dsh-session-notification` |
| [dsh-bell-notify](https://github.com/Laplace-bit/dsh-bell-notify) | 生命周期事件铃声 + 右下角呼吸状态点（Web Audio 合成，零音频文件，可上传自定义音） | 5 | `dsh plugin add github:Laplace-bit/dsh-bell-notify` |
| [task-chime](https://github.com/Abel-86/task-chime) | 审批/权限请求与任务完成提示音，GUI 设置中可自定义声音、音量与冷却 |  | `dsh plugin add task-chime` |
| [dsh-ssh](https://github.com/UynajGI/dsh-ssh) | SSH 远程执行（ProxyJump 链、SFTP 文件系统、PTY） | 13 |  |
| [dsh-webhook-bridge](https://github.com/ben7am1n/dsh-webhook-bridge) | 通用 webhook 接收器：POST /hook/:channel 唤醒 per-channel agent |  | `dsh plugin add dsh-webhook-bridge` |
| [dsh-open-in-vscode](https://github.com/omdsh-dev/dsh-open-in-vscode) | 从 Web GUI 一键在 VS Code 中打开工作区目录 | 52 | `dsh plugin add dsh-open-in-vscode` |
| [dsh-share](https://github.com/hellodigua/dsh-share) | 一键分享你的对话 | 37 | `dsh plugin add @dsh-external/dsh-share` |
| [dsh-conversation-share](https://github.com/bill9109/dsh-conversation-share) | 分享任意段落的对话 | 2 | `dsh plugin add @bill9109/dsh-conversation-share` |
| [dsh-remote-dsh](https://github.com/hutao562/dsh-remote-dsh) | 在侧边栏顶部加一行，点击后整页切换成另一台 DSH 主机的 Web GUI（通过回环端口访问），并在该行显示那台主机的会话状态（运行中、有新活动、正等你回答） |  | `dsh plugin --profile web add dsh-remote-dsh` |

[↩ 回到 📡 通知 / 渠道 / 远程 分类页](plugins/notifications-channels.md)

## 🌐 浏览器 / 搜索

| 插件 | 描述 | ⭐ | 安装命令 |
|---|---|---|---|
| [dsh-browser](https://github.com/Lum1104/dsh-browser) | Chrome 侧边栏扩展，让 DSH 直接操作你的浏览器（无需视觉能力） | 791 |  |
| [dsh-browser-control](https://github.com/PangYiMing/dsh-browser-control) | CDP/Playwright 操控浏览器 |  | `dsh plugin add dsh-browser-control` |
| [ego-browser](https://github.com/Fisfzy/ego-browser) | 把 ego-lite（给 AI Agent 的 Chromium）接入 DSH，13 个结构化 ego_* 工具 | 221 |  |
| [dsh-better-browser](https://github.com/titanwings/dsh-better-browser) | 通过 Kimi WebBridge 让 Agent 操作用户已登录浏览器（13 个工具） | 10 | `dsh plugin add @dsh-external/dsh-better-browser` |
| [dsh-webbridge](https://github.com/bill9109/dsh-webbridge) | DSH 结合 Kimi WebBridge | 3 | `dsh plugin add @bill9109/dsh-webbridge` |
| [dsh-browser](https://github.com/ben7am1n/dsh-browser) | Playwright 驱动的浏览器自动化 | 7 | `dsh plugin add dsh-browser` |
| [DSH-Chrome-devtools](https://github.com/yuzi-ska/DSH-Chrome-devtools) | 基于 Chrome DevTools MCP 的真实 Chrome 控制 | 7 | `dsh plugin add dsh-chrome-devtools` |
| [dsh-playwright-cli](https://github.com/mitao-su/dsh-playwright-cli) | 包装 Playwright CLI：装浏览器、跑测试、从 agent 循环打开 HTML 报告 | 2 | `dsh plugin add dsh-playwright-cli` |
| [deepseek-pp](https://github.com/zhu1090093659/deepseek-pp) | 浏览器扩展 AI Agent 工作区，内置 MCP 与记忆 | 1862 |  |
| [dsh-web-search-firecrawl](https://github.com/yangzhe1003/dsh-web-search-firecrawl) | Firecrawl 搜索提供方接入内置 web_search | 1 | `dsh plugin add @yangzhe1003/dsh-web-search-firecrawl` |
| [dsh-web-search-tavily](https://github.com/crayonlu/dsh-web-search-tavily) | Tavily 搜索提供方（免 DeepSeek key） | 3 |  |
| [dsh-tavily-search](https://github.com/zhouzhencheng07/dsh-tavily-search) | 免 key Tavily 搜索工具 | 5 | `dsh plugin add dsh-tavily-search` |
| [dsh-web-search-pro](https://github.com/anweat/dsh-web-search-pro) | 增强持久搜索（多引擎 + SQLite/LRU 缓存 + Playwright 渲染） | 76 | `dsh plugin add dsh-web-search-pro` |
| [dsh-all-search](https://github.com/RealAlexandreAI/dsh-all-search) | AnySearch 网页搜索提供方（ctx.web） |  | `dsh plugin add dsh-all-search` |
| [modsearch](https://github.com/liustack/modsearch) | CLI 搜索工具：把搜索查询转结构化 web 证据 JSON | 620 | `dsh plugin add @liustack/modsearch` |
| [argo](https://github.com/taxueseek/argo) | 为 agent 打造的多语言搜索工具（中文/英文/学术/代码/购物/金融/新闻/百科） | 188 | `dsh plugin add github:taxueseek/argo` |

[↩ 回到 🌐 浏览器 / 搜索 分类页](plugins/browser-search.md)

## 🏗️ 基础设施 / 插件管理 / 开发工具

| 插件 | 描述 | ⭐ | 安装命令 |
|---|---|---|---|
| [plugin-registry](https://github.com/vlln/plugin-registry) | 插件管理控制台：浏览器面板管理官方 repository 插件 + 开发引导 | 58 |  |
| [dsh-plugin-manager-registry](https://github.com/Jesse-njx/dsh-plugin-manager-registry) | 离线容忍的注册表：从 awesome 列表/GitHub topics/npm 发现并去重 DSH 插件 |  |  |
| [dsh-hub](https://github.com/omdsh-dev/dsh-hub) | OMDSH 社区扩展 hub（基于官方 contracts） | 3 | `dsh plugin add @omdsh/dsh-hub` |
| [dsh-plugin-installer](https://github.com/Toukaiteio/dsh-plugin-installer) | 把 DSH 快速接入 GitHub 插件生态的市场插件 | 5 | `dsh plugin add dsh-plugin-installer` |
| [dsh-super-injector](https://github.com/yjh051108/dsh-super-injector) | 超级模组注入器：运行时注入本地插件包（junction + loader.create，热重载） | 164 | `dsh plugin add @dsh-external/dsh-super-injector` |
| [oh-my-dsh](https://github.com/LaplaceYoung/oh-my-dsh) | 面向 DSH 的插件生态：700+ 插件，扩展接缝注册不改 agent-loop | 57 |  |
| [dsh-plugin-hub](https://github.com/Noob-stupid/dsh-plugin-hub) | 插件管理面板 + 多源市场：一键启停（HMR 生效）、GitHub/Gitee/自定义源并行搜索、静态索引市场（500+ 插件 / 300 技能）、技能安装/停用/删除、套装一键装配、框架一键升级 | 99 | `dsh plugin add dsh-plugin-hub` |
| [dsh-plugin-check](https://github.com/omdsh-dev/dsh-plugin-check) | 插件健康检查：扫描清单协议/patch 格式/构建陷阱/hub 状态 | 25 | `dsh plugin add @deepseek-ai/dsh-plugin-check` |
| [dsh-plugin-doctor](https://github.com/lin-cheng-lab/dsh-plugin-doctor) | 插件体检：安装前检查 peer 版本兼容性 |  | `dsh plugin add dsh-plugin-doctor` |
| [dsh-doctor](https://github.com/asdf17128/dsh-doctor) | profile 健康检查：找 patch 静默破坏的配置/死 patch/工具名冲突 | 1 |  |
| [dsh-capability-inspector](https://github.com/tree201/dsh-capability-inspector) | DSH Doctor + 运行时诊断（工具/模型/技能/工作区/会话/插件/MCP 排障） | 1 | `dsh plugin add dsh-capability-inspector` |
| [dsh-security-audit](https://github.com/omdsh-dev/dsh-security-audit) | 本机安全审计：配置/插件来源/会话/网络暴露面，只读脱敏报告 | 14 | `dsh plugin add @deepseek-ai/dsh-security-audit` |
| [dsh-session-health](https://github.com/omdsh-dev/dsh-session-health) | 会话文件帧级扫描诊断（torn/损坏/空会话检测） | 8 | `dsh plugin add @deepseek-ai/dsh-session-health` |
| [dsh-passwords](https://github.com/slywalker2006/dsh-passwords) | dsh 登录网关（密码门）：远程访问鉴权 + 多用户账号管理，HTTPS/防爆破/审计日志 | 69 | `dsh plugin add github:slywalker2006/dsh-passwords` |
| [dsh-evolve](https://github.com/william-jin-cmu/dsh-evolve) | 自进化：agent 会话内给自己热挂载/卸载持久化插件 | 12 | `dsh plugin add @dsh-external/dsh-evolve` |
| [dsh-trace](https://github.com/vibeinging/dsh-trace) | 遥测后端：导出 turns/model steps/tool calls 到 yiTrace | 1 | `dsh plugin add @deepseek-ai/dsh-trace` |
| [fabric](https://github.com/omdsh-dev/fabric) | 类似 MC Fabric 的 hook 处理器 | 18 | `dsh plugin add cordis-fabric-bundle` |
| [sandbox-micro](https://github.com/omdsh-dev/sandbox-micro) | microsandbox 沙箱支持 | 3 | `dsh plugin add @deepseek-ai/dsh-sandbox-microsandbox` |
| [sandbox-mxc](https://github.com/omdsh-dev/sandbox-mxc) | 微软跨平台沙盒支持 | 1 | `dsh plugin add @deepseek-ai/dsh-sandbox-mxc` |
| [sandbox-nono](https://github.com/omdsh-dev/sandbox-nono) | nono 沙盒支持 | 2 | `dsh plugin add @deepseek-ai/dsh-sandbox-nono` |
| [dsh-stream-rules](https://github.com/jiesou/dsh-stream-rules) | 按需注入规则、不浪费上下文 | 4 | `dsh plugin add dsh-stream-rules` |
| [dsh-git-identity](https://github.com/LoserFox/dsh-git-identity) | git 提交固定使用环境自身作者身份 | 6 | `dsh plugin add @loserfox/git-identity` |
| [dsh-plugin-graph](https://github.com/erduotong/dsh-plugin-graph) | 插件关系图谱可视化 | 2 | `dsh plugin add dsh-plugin-graph` |
| [dsh-dev-actions](https://github.com/skitse/dsh-dev-actions) | Agent 提议的可复用开发命令，转为侧栏动作 | 1 | `dsh plugin add dsh-dev-actions` |
| [dsh-tool-policy](https://github.com/Drifter-yh/dsh-tool-policy) | 声明式默认拒绝的工具策略 | 3 | `dsh plugin add dsh-tool-policy` |
| [dsh-openai-codex-auth](https://github.com/yoke233/dsh-openai-codex-auth) | OpenAI Codex OAuth 登录与用量卡 | 12 | `dsh plugin add dsh-openai-codex-auth` |
| [deepseek-harness-docker](https://github.com/runzhliu/deepseek-harness-docker) | 社区 Docker/K8s 打包（加固镜像 + Compose + Helm） | 110 |  |
| [dsh-harness-ops](https://github.com/fakechris/dsh-harness-ops) | 运维工具箱：A/B 双槽快照升级、自动恢复、回滚、诊断自愈 | 15 |  |
| [dsh-multica-runtime](https://github.com/multica-ai/dsh-multica-runtime) | Multica 的 DSH runtime 桥接（stdio JSONL 协议） | 68 | `dsh plugin add @multica-ai/dsh-runtime` |
| [session-teleport](https://github.com/omdsh-dev/session-teleport) | PostgreSQL 单写者会话交接服务 | 2 | `dsh plugin add @mattheliu/session-teleport` |
| [session-persistence-rdb](https://github.com/morlay/session-persistence-rdb) | session 关系型数据库持久化 | 3 | `dsh plugin add @morlay/session-persistence-rdb` |
| [dsh-market](https://github.com/dsh-market/dsh-market) | DSH 可视化插件市场：浏览/搜索/一键安装 | 6085 | `dsh plugin add github:dsh-market/dsh-market` |
| [dsh-webui-market-plugin](https://github.com/Sanqi-normal/dsh-webui-market-plugin) | dsh Web GUI 社区插件市场：浏览 awesome-dsh-plugin 目录/安装/卸载 | 104 | `dsh plugin add github:Sanqi-normal/dsh-webui-market-plugin` |
| [dsh-config-manager](https://github.com/xiajiajun516/dsh-config-manager) | DSH 配置备份 / 恢复 / 导出 / 导入 / 迁移与同步：dry-run 预览、冲突逐项决策、失败自动回滚、跨机路径重映射、可选加密凭据载荷 | 176 | `dsh plugin add dsh-config-manager` |
| [sofagent](https://github.com/KongFangXun/sofagent) | 开源 FDE Harness 约束层：24 条 git diff 审计规则 + 80 个 MCP 工具 + 9 款 cordis-plugin 深度集成，Agent 违规当场拦截 | 52 |  |
| [dsh-backup](https://github.com/xiaoyuyu6420/dsh-backup) | 备份/恢复 DSH 用户数据：定时备份与分级保留、sha256 校验、升级前自动快照与迁移预检（预测哪些会话升完打不开）、会话日志体检（doctor）与定点修复、宿主起不来也能用的救援控制台 | 27 | `dsh plugin add @xiaoyuyu6420/dsh-backup` |
| [dsh-git-server](https://github.com/weibaohui/dsh-git-server) | Git 服务器：内嵌 ts-gogs（Gogs 的 TypeScript 平替），独立端口跑完整 Git 服务（HTTP clone/push、网页端、issue/PR/wiki），可复用 user-management 的用户名密码，设置页一键启停 | 1 | `dsh plugin add @weibaohui/dsh-git-server` |
| [dsh-fde-tools](https://github.com/weibaohui/dsh-fde-tools) | FDE 工具箱全家桶：安装一个插件带上一批常用 dsh 插件（代码仓库 / 挂载盘 / 知识库 / 定时任务 / 自动续跑 / 界面微调 / 自动复盘 / 文件管理 / 智能标题 / 任务看板 / 插件市场 / 上下文 / IM 接入 / 侧栏增强），面板看状态、一键补装 | 2 | `dsh plugin add @weibaohui/dsh-fde-tools` |
| [dsh-sync](https://github.com/weibaohui/dsh-sync) | 多机同步：让多台机器上的 dsh 通过一个私有 GitCode 仓库保持一致——技能、会话、设置、插件清单四类内容各有独立开关；变更走分支 → PR → 合并，推送前自动回填远端新增防误删，支持 AI 智能对齐（语义合并双方改动）与一键解决冲突；强制私有仓库，pull 不覆盖本地改动 | 7 | `dsh plugin add @weibaohui/dsh-sync` |
| [dsh-permission-rules](https://github.com/PerryLink/dsh-permission-rules) | Claude Code 风格声明式权限规则：按序 allow/deny/ask YAML 规则在 tools/pre-execute 瀑布匹配工具名/参数/工作区路径/agent 身份，会话日志审计 + 干跑 + 热重载 | 120 | `dsh plugin add dsh-permission-rules` |
| [user-management](https://github.com/weibaohui/user-management) | 用户管理：给 dsh web 加登录门禁，未登录访问弹登录/注册页，首个注册者自动成为管理员；管理员可管理用户/角色，带登录与访问审计 | 1 | `dsh plugin add @weibaohui/user-management` |
| [dsh-privacy-guard](https://github.com/amwangfan/dsh-privacy-guard) | 隐私保护：本地网关凭据脱敏与流式还原、豁免白名单、加密密钥管理、凭据保护模型入口，内置 Qwen2.5-0.5B 本地模型探针与泄密探测沙箱及部署控制 |  | `dsh plugin add github:amwangfan/dsh-privacy-guard` |

[↩ 回到 🏗️ 基础设施 / 插件管理 / 开发工具 分类页](plugins/infrastructure-dev.md)

## 🎮 娱乐 / 其他

| 插件 | 描述 | ⭐ | 安装命令 |
|---|---|---|---|
| [dsh-gomoku](https://github.com/omdsh-dev/dsh-gomoku) | 与 AI 下五子棋，也可双 AI 对弈比棋力 | 31 | `dsh plugin add @deepseek-ai/dsh-gomoku` |
| [dsh-minigames](https://github.com/lhh010/dsh-minigames) | 右侧 18 款离线小游戏面板（恐龙跳一跳/俄罗斯方块/扫雷/2048…） | 34 | `dsh plugin add @dsh-external/dsh-minigames` |
| [dsh-auto-chess](https://github.com/omdsh-dev/dsh-auto-chess) | 自走棋：人机对战或双 AI 对弈 | 2 | `dsh plugin add @deepseek-ai/dsh-auto-chess` |
| [dsh-plugin-d399](https://github.com/HuanLinOTO/dsh-plugin-d399) | 模型生成时弹出小游戏菜单（wordle/消消乐，可扩展） | 9 | `dsh plugin add @huanlin/dsh-plugin-d399` |
| [dsh-ui-whale](https://github.com/lhh010/dsh-ui-whale) | 全手绘像素鲸鱼伙伴（眨眼/摆尾/喷水/爱心） | 41 |  |
| [whale-girl](https://github.com/vlln/whale-girl) | 桌面宠物鲸鱼娘（QQ 宠物形态，可拖拽/投喂/玩耍） | 356 | `dsh plugin add whale-girl` |
| [dsh-pixel-whale](https://github.com/yoke233/dsh-pixel-whale) | 活泼像素鲸鱼运行状态伴侣 |  | `dsh plugin add dsh-pixel-whale` |
| [dsh-blue-whale-maid](https://github.com/yuxino/dsh-blue-whale-maid) | 蓝鲸女仆桌面像素宠物 | 5 | `dsh plugin add dsh-blue-whale-maid` |
| [deepseek-pet](https://github.com/keleus/deepseek-pet) | 在 DSH 上养一只大蓝鲸 | 50 | `dsh plugin add deepseek-pet` |
| [dsh-stickers](https://github.com/william-jin-cmu/dsh-stickers) | 用户与 agent 双向表情贴纸互动 | 24 | `dsh plugin add @dsh-external/dsh-stickers` |
| [dsh-emoji](https://github.com/hellodigua/dsh-emoji) | 为 AI 回复自动添加表情 | 47 | `dsh plugin add @dsh-external/dsh-emoji` |
| [dsh-ads](https://github.com/Nagi-ovo/dsh-ads) | 2005 中文站点风格整活广告（侧栏/信息流/弹窗，素材全虚构） | 656 | `dsh plugin add @dsh-external/dsh-ads` |
| [dsh-stock-market](https://github.com/AnacondaKC/dsh-stock-market) | 股票行情数据插件（整活向） | 19 | `dsh plugin add dsh-stock-market` |
| [dsh-douyin](https://github.com/AnacondaKC/dsh-douyin) | 侧栏短视频：原生播放器、系列导航、历史回放 | 5 | `dsh plugin add dsh-douyin` |
| [deepseek-manners](https://github.com/Moeblack/deepseek-manners) | 每次消息后注入感谢语，做个有礼貌的人 | 14 | `dsh plugin add deepseek-manners` |
| [dsh-sound-effects-plugin](https://github.com/JasonJin2006/dsh-sound-effects-plugin) | Reasonix 风格音效（生成式五声音阶环境音 + 提示音） | 2 | `dsh plugin add dsh-sound-effects-plugin` |
| [dsh-fun-typewriter](https://github.com/omdsh-dev/dsh-fun-typewriter) | WebAudio 打字机氛围音效（零音频资源） | 2 | `dsh plugin add @deepseek-ai/dsh-fun-typewriter` |
| [dsh-daily-fortune](https://github.com/omdsh-dev/dsh-daily-fortune) | 每日运势：观音签、塔罗、每日一句 | 3 | `dsh plugin add @deepseek-ai/dsh-daily-fortune` |
| [dsh-plugin-spur](https://github.com/HuanLinOTO/dsh-plugin-spur) | 挂在聊天流里的辫子，抓住甩一甩给 agent 发「去干活」 | 5 | `dsh plugin add @huanlin/dsh-plugin-spur` |
| [dsh-toy](https://github.com/c3ll256/dsh-toy) | 连接小型玩具到 DSH（Toy Control Protocol） | 69 | `dsh plugin add dsh-toy` |
| [dsh-learn-everything](https://github.com/cendaifeng/dsh-learn-everything) | 费曼学习模式：教→讲回→判→再解释，渲染为富 HTML 课程卡 | 8 | `dsh plugin add dsh-learn-everything` |
| [dsh-openmaic](https://github.com/THU-MAIC/dsh-openmaic) | OpenMAIC 教学：课堂、幻灯片、交互组件、苏格拉底式教学 | 90 | `dsh plugin add @openmaic/dsh-openmaic` |
| [dsh-scholar](https://github.com/lzszq/dsh-scholar) | 学术助手插件 | 49 | `dsh plugin add @dsh-scholar/research-plugin` |
| [dsh-101](https://github.com/bill9109/dsh-101) | DSH 文档阅读模式 | 6 | `dsh plugin add @dsh-external/dsh-101` |
| [dsh-reasoning-translator](https://github.com/pinkllo/dsh-reasoning-translator) | 让模型的思维链用你的语言输出 | 1 | `dsh plugin add dsh-reasoning-translator` |
| [dsh-director-toolkit](https://github.com/lhmd/dsh-director-toolkit) | 3D 艺术家/技术美术方向包：Blender/Three.js/Houdini/C4D 方向指引 | 8 | `dsh plugin add @lhmd/dsh-director-toolkit` |
| [dsh-apple-mode](https://github.com/jihongboo/dsh-apple-mode) | Xcode AI 集成：26 个 Xcode MCP 工具 + Apple 平台技能 |  | `dsh plugin add dsh-apple-mode` |
| [notes](https://github.com/zhaoolee/notes) | 开源版锤子便签：导出 DSH 会话为便签图片，支持 skill 调用 ⚠️ 无 license 文件 | 275 |  |
| [dsh-cost-meter](https://github.com/Han-1413141/dsh-cost-meter) | DSH 会话费用统计（本会话/当日/历史 + 官方价格同步） | 388 | `dsh plugin add github:Han-1413141/dsh-cost-meter` |
| [dsh-user-experience](https://github.com/DietCokewithSugar/dsh-user-experience) | persona 驱动的 UX 走查：扫描 React/TS 源码找 UX 问题 | 21 | `dsh plugin add github:DietCokewithSugar/dsh-user-experience` |
| [dsh-balance-meter](https://github.com/Ghost011118/dsh-balance-meter) | DeepSeek 账户余额与会话成本显示 | 19 | `dsh plugin add github:Ghost011118/dsh-balance-meter` |
| [dsh-novel-writer](https://github.com/siweina/dsh-novel-writer) | 中文小说写作助手：句式/情感/意象分析、文笔六维基线带（μ±σ 对照）、12 轴氛围光谱、风格画像报告、本地语义检索（0 token）+ 伏笔设定管理，15 个工具 | 22 | `dsh plugin add dsh-novel-writer` |
| [dsh-gaokao](https://github.com/weibaohui/dsh-gaokao) | 梦回高三：桌面小黑板高考倒计时（双击收成竖条），AI 干活时随机抽背知识点卡；Markdown 开放知识卡框架 | 2 | `dsh plugin add @weibaohui/dsh-gaokao` |
| [dsh-fireworks](https://github.com/weibaohui/dsh-fireworks) | 烟花庆祝引擎：agent 编程时漂浮对话窗口上空放烟花，开场/回合/工具/里程碑/收工/失败各一类事件卡组随机抽取，token 用量决定大小与绚烂程度 | 1 | `dsh plugin add @weibaohui/dsh-fireworks` |
| [dsh-matrix](https://github.com/weibaohui/dsh-matrix) | 黑客帝国数字雨：对话窗口铺上经典的绿色字符雨背景——雨柱倾泻而下、白炽雨头绿身拖尾，agent 正在生成的 token 原文实时掺进雨里；透明度/速度/密度/字号/配色全部可调，雨势跟随 agent 活跃度起伏 |  | `dsh plugin add @weibaohui/dsh-matrix` |
| [dsh-kite](https://github.com/weibaohui/dsh-kite) | 放风筝引擎：agent 编程时屏幕上放一只动画风筝——token 越多事件越密风筝飞得越高，随风漂移摆动，一根线牵在窗口底边；潍坊系框架卡组（沙燕/金鱼/蝴蝶/八卦/龙头等，硬翅软翅板式立体），形状×图案×配色全是可替换数据配置，支持把用户图片糊上风筝面、贴图随风筝姿态实时仿射变换 |  | `dsh plugin add @weibaohui/dsh-kite` |
| [dsh-whale-musume](https://github.com/Sutera-Diffusus/dsh-whale-musume) | 元气鲸鱼娘桌宠：摸头养成 / 工作姿态联动 / 90+ 立绘 / 39 成就 / 自带设置面板，桌面端（DSH 0.2.0-rc.2）与旧版 Web 双端支持 | 119 | `dsh plugin add github:Sutera-Diffusus/dsh-whale-musume` |

[↩ 回到 🎮 娱乐 / 其他 分类页](plugins/fun-other.md)

## 🏛️ 官方核心与元项目

| 插件 | 描述 | ⭐ | 安装命令 |
|---|---|---|---|
| [deepseek-ai/deepseek-harness](https://github.com/deepseek-ai/deepseek-harness) | 官方核心仓库：「一切皆插件」，Cordis 驱动 | 247055 |  |
| [deepseek-ai/awesome-deepseek-agent](https://github.com/deepseek-ai/awesome-deepseek-agent) | 官方 Agent 精选列表 | 6191 |  |
| [awesome-dsh-plugin/awesome-dsh-plugin](https://github.com/awesome-dsh-plugin/awesome-dsh-plugin) | 社区精选列表（105 插件 + 站点 + 徽章） | 18314 |  |
| [bruc3van/awesome-dsh-plugin](https://github.com/bruc3van/awesome-dsh-plugin) | 「30 秒找到适合你的插件」，带场景说明 + 505 全量快照 | 402 |  |
| [0xsline/awesome-deepseek-harness](https://github.com/0xsline/awesome-deepseek-harness) | DSH 生态精选：插件/工具/基础设施 | 1160 |  |
| [AdamPlatin123/awesome-dsh-plugins](https://github.com/AdamPlatin123/awesome-dsh-plugins) | 目录 + **每日兼容性雷达**（四维检查 + 运行实测） | 1463 |  |
| [Alex-Yanggg/awesome-DSH-plugin](https://github.com/Alex-Yanggg/awesome-DSH-plugin) | 覆盖生产力/扩展/调试/自定义开发的分类 catalog | 101 |  |
| [HenryZ838978/deepseek-harness](https://github.com/HenryZ838978/deepseek-harness) | 第三方 Harness：Python 库 + dsh CLI + MCP server + SKILL.md | 48 |  |
| [vvlife/whalehub-dsh](https://github.com/vvlife/whalehub-dsh) | 第三方插件商店/中心 | 6 |  |
| [plugin-template](https://github.com/omdsh-dev/plugin-template) | 插件模板仓库（基于 turtle-ui） | 13 | `dsh plugin add @your-scope/dsh-plugin-template` |

[↩ 回到 🏛️ 官方核心与元项目 分类页](plugins/official-meta.md)
