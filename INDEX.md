# 插件总索引

> 全部插件单文件扁平清单（按分类分组），方便在仓库里 `Ctrl+F` 全局搜索。共 **299** 条。
>
> 返回：[README](README.md) · [中文](README.zh.md)

## 🛠️ 工具类 Tools

| 插件 | 描述 | ⭐ | 安装命令 |
|---|---|---|---|
| [dsh-toolkit](https://github.com/omdsh-dev/dsh-toolkit) | 零依赖工具十件套（time/encoding/json/calculator/csv/regex/markdown/diff/stat/schema）一键安装 | 23 | `dsh plugin add @deepseek-ai/dsh-toolkit` |
| [dsh-tool-calculator](https://github.com/omdsh-dev/dsh-tool-calculator) | 安全的数学表达式求值器，零依赖递归下降解析器 | 7 | `dsh plugin add @deepseek-ai/dsh-tool-calculator` |
| [dsh-tool-csv](https://github.com/omdsh-dev/dsh-tool-csv) | CSV 解析/查询/统计/转换（RFC 4180） | 4 | `dsh plugin add @deepseek-ai/dsh-tool-csv` |
| [dsh-tool-diff](https://github.com/omdsh-dev/dsh-tool-diff) | 文本/JSON/CSV/Markdown 结构化比较与 unified diff | 4 | `dsh plugin add @deepseek-ai/dsh-tool-diff` |
| [dsh-tool-encoding](https://github.com/omdsh-dev/dsh-tool-encoding) | base64/url/hex 编解码、常用哈希、UUID 生成 | 3 | `dsh plugin add @deepseek-ai/dsh-tool-encoding` |
| [dsh-tool-json](https://github.com/omdsh-dev/dsh-tool-json) | JMESPath 子集 JSON 查询 | 3 | `dsh plugin add @deepseek-ai/dsh-tool-json` |
| [dsh-tool-markdown](https://github.com/omdsh-dev/dsh-tool-markdown) | HTML↔Markdown 转换、GFM 表格规范化、目录生成 | 4 | `dsh plugin add @deepseek-ai/dsh-tool-markdown` |
| [dsh-tool-regex](https://github.com/omdsh-dev/dsh-tool-regex) | 正则测试/提取/安全替换/静态解释（不执行代码） | 3 | `dsh plugin add @deepseek-ai/dsh-tool-regex` |
| [dsh-tool-schema](https://github.com/omdsh-dev/dsh-tool-schema) | JSON Schema 验证：validate/paths/explain/normalize | 3 | `dsh plugin add @deepseek-ai/dsh-tool-schema` |
| [dsh-tool-stat](https://github.com/omdsh-dev/dsh-tool-stat) | 描述统计/百分位数/频数分布/相关性 | 6 | `dsh plugin add @deepseek-ai/dsh-tool-stat` |
| [dsh-tool-time](https://github.com/omdsh-dev/dsh-tool-time) | 严格 ISO 8601 解析、IANA 时区、UTC 日历运算 | 4 | `dsh plugin add @deepseek-ai/dsh-tool-time` |
| [dsh-tool-git](https://github.com/lxj808624/dsh-tool-git) | 结构化 Git 工具（status/diff/log/branch/stage/commit/stash/show）+ 危险命令守卫 | 4 | `dsh plugin add dsh-tool-git` |
| [dsh-test-runner](https://github.com/suimi8/dsh-test-runner) | 结构化 test_run：自动探测 vitest/jest/pytest/node:test 并解析失败摘要 | 2 | `dsh plugin add dsh-test-runner` |
| [dsh-security-scan](https://github.com/ben7am1n/dsh-security-scan) | 密钥/危险模式扫描（API key/token/私钥脱敏，零依赖） | 1 | `dsh plugin add dsh-security-scan` |
| [dsh-tool-search](https://github.com/vibeinging/dsh-tool-search) | 按 agent 的按需工具发现 + 渐进式 schema 披露 | 2 | `dsh plugin add @deepseek-ai/dsh-tool-search` |
| [dsh-custom-tool](https://github.com/omdsh-dev/dsh-custom-tool) | 用 Monaco 编辑器创建/管理沙箱化自定义 JS 工具 | 24 | `dsh plugin add dsh-custom-tool` |
| [dsh-bash-encoding](https://github.com/lhh010/dsh-bash-encoding) | 自动识别并解码 Bash 输出编码（UTF-16LE/UTF-8/GBK），修中文乱码 | 7 |  |
| [dsh-at-file](https://github.com/omdsh-dev/dsh-at-file) | Codex 风格 `@file` 文件引用，输入框里直接搜索并引用工作区文件 | 438 | `dsh plugin add dsh-at-file` |
| [dsh-wikilink](https://github.com/zhaoscsc/dsh-wikilink) | Obsidian 风格 `[[wikilink]]` 提及：模糊搜索笔记标题并附加内容 | 3 | `dsh plugin add dsh-wikilink` |
| [dsh-safe-delete](https://github.com/Qintsg/dsh-safe-delete) | 安全删除：移入回收站/暂存区而非永久删除，支持恢复 | 3 |  |
| [dsh-bisect-debug](https://github.com/PangYiMing/dsh-bisect-debug) | 二分法定位 bug 根因（代码/边界/commit） | 1 | `dsh plugin add dsh-bisect-debug` |
| [dsh-payload-capture](https://github.com/Moeblack/dsh-payload-capture) | 捕捉每次上行模型 API payload 落盘 JSON（调试/可观测） | 1 | `dsh plugin add dsh-payload-capture` |
| [dsh-data-agent](https://github.com/omdsh-dev/dsh-data-agent) | 让 AI 帮你连数据库、写 SQL | 101 | `dsh plugin add @deepseek-ai/dsh-data-agent` |
| [dsh-openapi](https://github.com/Degurechaff57/dsh-openapi) | Safe OpenAPI 3.x 发现与 API 调用工具 | 4 | `dsh plugin add dsh-openapi` |
| [dsh-plugin-interpreters](https://github.com/HuanLinOTO/dsh-plugin-interpreters) | 暴露 run_python / run_node 工具，可配置解释器路径 | 9 | `dsh plugin add @huanlin/dsh-plugin-interpreters` |
| [dsh-cowork](https://github.com/Jesse-njx/dsh-cowork) | doc_read/doc_write：以有界、单元格寻址方式读写 xlsx/pdf/docx/pptx/ipynb | 6 |  |
| [dsh-plugin-mineru](https://github.com/HuanLinOTO/dsh-plugin-mineru) | 向模型暴露 MineRU 文档解析工具 | 38 | `dsh plugin add @huanlin/dsh-plugin-mineru` |
| [dsh-plugin-sleep](https://github.com/HuanLinOTO/dsh-plugin-sleep) | 暴露单个 `sleep` 工具，让模型按需暂停（支持取消） | 9 | `dsh plugin add @huanlin/dsh-plugin-sleep` |
| [dsh-port-guard](https://github.com/PangYiMing/dsh-port-guard) | 端口占用处置（复用/切换/精确 kill） | 1 | `dsh plugin add dsh-port-guard` |
| [dsh-scout](https://github.com/omdsh-dev/dsh-scout) | 只读环境探测：运行环境/版本/资源/端口/服务/硬件/工作区 | 2 | `dsh plugin add @deepseek-ai/dsh-tool-scout` |

[↩ 回到 🛠️ 工具类 Tools 分类页](plugins/tools.md)

## 🧩 技能类 Skills

| 插件 | 描述 | ⭐ | 安装命令 |
|---|---|---|---|
| [dsh-review-skills](https://github.com/ben7am1n/dsh-review-skills) | 工程纪律技能包：code-review/simplify/plan-then-execute/test-first/resolve-conflict | 2 | `dsh plugin add dsh-review-skills` |
| [dsh-skillport](https://github.com/Jesse-njx/dsh-skillport) | 把已有 Agent Skills（Claude/Codex/Cursor/Gemini 的 SKILL.md）带进 DSH，渐进式索引 + 按需加载 | 2 | `dsh plugin add @dsh-skillport/bundle` |
| [dsh-find-skill](https://github.com/Moximxxx/dsh-find-skill) | 桥接 vercel-labs/skills 生态：LLM 驱动技能搜索/安装/生命周期管理 | 2 | `dsh plugin add dsh-find-skill` |
| [dsh-plugin-skills](https://github.com/omdsh-dev/dsh-plugin-skills) | 构建与测试 DSH 插件的 Agent 技能（脚手架到测试分层） | 11 |  |
| [dsh-book2skill](https://github.com/omdsh-dev/dsh-book2skill) | 五阶段「书→技能」长任务（抓取→解析→理解→生成→安装）+ 3 个人工关卡 | 4 | `dsh plugin add dsh-book2skill` |
| [dsh-superpowers](https://github.com/codeAnqiang-ma/dsh-superpowers) | Superpowers（obra/superpowers）作为 DSH 插件：方法论技能 + 会话引导 | 3 | `dsh plugin add dsh-superpowers` |
| [dsh-plugin-code-review](https://github.com/YYTbit/dsh-plugin-code-review) | 结构化代码审查技能（YYTbit 系列） | 1 | `dsh plugin add dsh-plugin-code-review` |
| [dsh-review-loop](https://github.com/wuxiangru915/dsh-review-loop) | 增量 diff 审查：checkpoint 队列 + Web 面板 + 审查意见注入 agent | 2 | `dsh plugin add @dsh-plugin/dsh-review-loop` |
| [dsh-plugin-claude-bridge](https://github.com/YYTbit/dsh-plugin-claude-bridge) | 把 Claude Code 记忆/技能/配置桥接进 DSH | 9 | `dsh plugin add dsh-plugin-claude-bridge` |
| [dsh-plugin-codex-bridge](https://github.com/YYTbit/dsh-plugin-codex-bridge) | 把 Codex skills/config 桥接进 DSH | 2 | `dsh plugin add dsh-plugin-codex-bridge` |
| [dsh-plugin-opencode-bridge](https://github.com/YYTbit/dsh-plugin-opencode-bridge) | 把 OpenCode skills/config 桥接进 DSH | 4 | `dsh plugin add dsh-plugin-opencode-bridge` |
| [dsh-plugin-pi-bridge](https://github.com/YYTbit/dsh-plugin-pi-bridge) | 把 pi skills/config 桥接进 DSH | 2 | `dsh plugin add dsh-plugin-pi-bridge` |
| [Code2Skill](https://github.com/leechen298/Code2Skill) | 从现有代码生成 Function、MCP、Agent Skill 和离线测试包，并作为可安装的 DSH Bundle 分发 | 7 | `dsh plugin add github:leechen298/Code2Skill#v1.1.3` |
| [dsh-reverse-skill](https://github.com/dhicoc/dsh-reverse-skill) | 逆向工程、授权渗透测试与安全研究技能路由包（85 个 SKILL.md，仅限授权测试） | 53 | `dsh plugin add github:dhicoc/dsh-reverse-skill` |
| [dsh-find-plugins](https://github.com/Nagi-ovo/dsh-find-plugins) | 帮 DSH 搜索、安装并验证 GitHub 插件的 Skill | 159 | `dsh plugin add github:Nagi-ovo/dsh-find-plugins` |
| [forkprobe](https://github.com/Jayden-X-L/forkprobe) | 同一任务对比多个 skill 并选出最优 | 69 | `dsh plugin add github:Jayden-X-L/forkprobe` |

[↩ 回到 🧩 技能类 Skills 分类页](plugins/skills.md)

## 🔌 MCP 接入

| 插件 | 描述 | ⭐ | 安装命令 |
|---|---|---|---|
| [dsh-mcp-proxy](https://github.com/ben7am1n/dsh-mcp-proxy) | 省上下文的惰性 MCP 访问 | 1 | `dsh plugin add dsh-mcp-proxy` |
| [deepseek-harness-plugin-mcp](https://github.com/bobleer/deepseek-harness-plugin-mcp) | 让任意 agent 发现/安装/运行 DSH 插件的 MCP server | 3 | `dsh plugin add deepseek-harness-plugin-mcp` |
| [dsh-webfetch](https://github.com/withlovehub/dsh-webfetch) | 零依赖 webfetch MCP server（干净文本/markdown/HTML/JSON，robots.txt 合规，SSRF 防护） | 3 |  |
| [dsh-search-mcp](https://github.com/gxpppp/dsh-search-mcp) | 用搜索 MCP（Tavily/Brave/Exa/Perplexity/DuckDuckGo）替换内置搜索 | 11 | `dsh plugin add dsh-search-mcp` |
| [dsh-oauth-mcp-client](https://github.com/springbrand-lab/dsh-oauth-mcp-client) | 连接支持 OAuth 2.1 的 Streamable HTTP MCP 服务 | 8 |  |
| [shadow-vision](https://github.com/WardLu/shadow-vision) | 开源 MCP 视觉 server，给纯文本 LLM 图片理解/OCR/UI 检查 | 2 |  |
| [mcp-bridge](https://github.com/WongJingGitt/mcp-bridge) | MCP 浏览器桥接，让网页端 AI 调用 MCP 工具 | 33 |  |
| [dsh-acp-for-bitfun](https://github.com/bobleer/dsh-acp-for-bitfun) | BitFun 与 DSH 的 ACP 交互对接 | 10 | `dsh plugin add dsh-acp-for-bitfun` |

[↩ 回到 🔌 MCP 接入 分类页](plugins/mcp.md)

## 🎨 Web UI / 皮肤 / 主题

| 插件 | 描述 | ⭐ | 安装命令 |
|---|---|---|---|
| [dsh-skins](https://github.com/Moeblack/dsh-skins) | Web UI 皮肤合集（含 harbor 夕港黄昏皮肤） | 3 | `dsh plugin add @dsh-external/dsh-web-skins` |
| [dsh-deep-whale](https://github.com/Small-tailqwq/dsh-deep-whale) | DSH Web 鲸鱼娘皮肤系列（深海女仆工坊） | 1505 |  |
| [dsh-qq2006](https://github.com/LaplaceYoung/dsh-qq2006) | QQ2006 复古皮肤 | 19 |  |
| [dsh-miku-skin](https://github.com/stushansusu/dsh-miku-skin) | 初音未来主题（蓝紫渐变/毛玻璃/亮暗双主题） | 2 | `dsh plugin add @deepseek-ai/dsh-client-ui-skin-miku` |
| [dsh-deepcel](https://github.com/Small-tailqwq/dsh-deepcel) | 模仿 Excel 的皮肤 | 12 |  |
| [dsh-tonghuashun](https://github.com/AdamPlatin123/dsh-tonghuashun) | 同花顺行情终端风格皮肤 + 代码量 K 线面板 | 3 |  |
| [dsh-plugin-colorscheme](https://github.com/Civitasv/dsh-plugin-colorscheme) | 配色方案插件 | 2 |  |
| [dsh-custom-css](https://github.com/AnacondaKC/dsh-custom-css) | 自定义 CSS | 3 | `dsh plugin add dsh-custom-css` |
| [dsh-web-background](https://github.com/BruceWu1126/dsh-web-background) | Web UI 背景自定义 | 2 |  |
| [dsh-plugin-background](https://github.com/gameswu/dsh-plugin-background) | Web UI 壁纸自定义 | 11 |  |
| [dsh-chat-width](https://github.com/chen-001/dsh-chat-width) | 调整回复宽度（终端宽度感知） | 5 |  |
| [deepseek-harness-skin](https://github.com/HeiGeAi/deepseek-harness-skin) | 换肤系统：21 套内置皮肤 + 一图生成整套配色 | 49 |  |
| [dsh-homepage-skin](https://github.com/yushi-xxh/dsh-homepage-skin) | 给 dsh web 铺上 DeepSeek Harness 首页同款背景：WebGL 流体、点线网格与数字鲸鱼，深浅双主题 · `dsh plugin --profile web add dsh-homepage-skin` | 1 |  |
| [DSH-better-sidebar](https://github.com/omdsh-dev/DSH-better-sidebar) | 侧边栏完整工作台：文件渲染编辑/终端/Git/子代理，支持三方注册 Tab | 2446 | `dsh plugin add dsh-better-sidebar` |
| [dsh-side-panel](https://github.com/ccq1/dsh-side-panel) | 侧边栏集成文件浏览器、终端和 Git 审查 | 16 | `dsh plugin add @dsh-external/dsh-side-panel` |
| [dsh-focus-chat](https://github.com/dingyi222666/dsh-focus-chat) | 「聚焦会话」精简视图，只关注最终产出结果 | 21 | `dsh plugin add @dingyi222666/dsh-focus-chat` |
| [ui-status-label](https://github.com/alingalingling/ui-status-label) | 把鲸鱼娘思考时的 "deep diving" 状态文案自定义 | 38 | `dsh plugin add dsh-ui-status-label` |
| [dsh-navbar](https://github.com/vlln/dsh-navbar) | 对话节点导航条，右缘节点串快速跳转 user 消息 | 50 | `dsh plugin add @dsh-external/dsh-navbar` |
| [dsh-task-status](https://github.com/vlln/dsh-task-status) | 后台任务状态条：对话页任务进度 + 实时输出 tail | 9 | `dsh plugin add @dsh-external/dsh-task-status` |
| [dsh-web-archive](https://github.com/renat3u/dsh-web-archive) | 折叠对话中的 Think、Bash 等「无用消息」 | 7 | `dsh plugin add dsh-web-archive` |
| [dsh-milestone](https://github.com/SnowCrescenter-tech/dsh-milestone) | 会话里程碑导航条：像 Git 提交图定位每条提问 | 17 | `dsh plugin add dsh-milestone` |
| [dsh-spotlight](https://github.com/0xsline/dsh-spotlight) | 键盘优先的命令面板（command palette） | 10 | `dsh plugin add @dsh-external/dsh-spotlight` |
| [dsh-deeplink](https://github.com/qyw233/dsh-deeplink) | `?session=` / `?workspace=` 深链直达指定项目对话 | 4 | `dsh plugin add @dsh-community/dsh-deeplink` |
| [dsh-diff-viewer](https://github.com/lehhair/dsh-diff-viewer) | PiUI 风格 diff 查看器，替换 write/edit 的默认 DiffBlock | 23 | `dsh plugin add @dsh-external/dsh-diff-viewer` |
| [dsh-drag-and-drop](https://github.com/bill9109/dsh-drag-and-drop) | 跨平台文件拖拽与原始路径插入，无需复制文件 | 19 | `dsh plugin add @bill9109/dsh-drag-and-drop` |
| [ex-setting](https://github.com/omdsh-dev/ex-setting) | DSH 的设置扩展 | 2 | `dsh plugin add @deepseek-ai/dsh-ex-setting` |
| [dsh-annotation](https://github.com/omdsh-dev/dsh-annotation) | 选中文字→批注→回车随消息发送，回复按批注逐条对照 | 81 | `dsh plugin add @omdsh-dev/dsh-annotation` |
| [dsh-prompt-studio](https://github.com/Moeblack/dsh-prompt-studio) | 带实时预览的用户/内置 system prompt 分节编辑器 | 3 | `dsh plugin add dsh-prompt-studio` |
| [dsh-prompt-persona](https://github.com/Xilin3/dsh-prompt-persona) | 从设置页编辑系统提示词（deployment persona），带实时预览 | 11 | `dsh plugin add @xilin3/dsh-prompt-persona` |
| [dsh-local-filetree](https://github.com/Mongfayi/dsh-local-filetree) | 右侧详情列显示当前会话工作区文件树（懒加载、只读） | 1 | `dsh plugin add dsh-local-filetree` |
| [dsh-sticky-disclosure](https://github.com/Han-1413141/dsh-sticky-disclosure) | 把滚出屏幕的折叠标签（Think/工具卡）钉在视口顶部 | 3 | `dsh plugin add dsh-sticky-disclosure` |
| [dsh-token-usage](https://github.com/hashdiana/dsh-token-usage) | 更美观的 Token 用量条：上下文占用/输入输出/缓存分解/首字延迟 | 3 | `dsh plugin add dsh-token-usage` |
| [TokenLedger](https://github.com/zh667/TokenLedger) | 按中转站点、项目和模型统计本地 DSH Token 用量，并显示账户余额与订阅额度周期 · `dsh plugin --profile web add github:zh667/TokenLedger` | 118 |  |
| [dsh-web-billing](https://github.com/bpc-oss/dsh-web-billing) | RMB/USD token 计费：官方峰谷价自动计价、按 provider/来源分组统计、预算与余额可视、CSV/JSON 导出 · `dsh plugin --profile web add github:bpc-oss/dsh-web-billing` | 11 |  |
| [dsh-model-config-sync](https://github.com/LiangYin233/dsh-provider-model-configurator) | 高级模型配置器：把 pi-ai 预设一键应用到自定义提供商 | 11 | `dsh plugin add dsh-model-config-sync` |
| [dsh-web-ui](https://github.com/zhu1090093659/dsh-web-ui) | DSH Web UI 插件与皮肤集合：任务看板、Git 图谱、右侧面板、移动端远程、皮肤中心 | 5126 | `dsh plugin add dsh-web-ui` |
| [dsh-plugin-open-app](https://github.com/2nd1st/dsh-plugin-open-app) | 把 open-mcp-apps 带进 DSH：每个 MCP app 一个侧边栏容器（独立 workspace + 会话 + App mode），带 agent 状态条、聊天内行内渲染与 App Store · `dsh plugin --profile web add @2nd1st/dsh-plugin-open-app` | 4 |  |
| [dsh-ui-hub](https://github.com/Han-1413141/dsh-ui-hub) | UI 管家：官方/插件 UI 分区折叠、逐条开关，拖拽移动/改大小，碰撞避让与一键自动排布 · `dsh plugin --profile web add github:Han-1413141/dsh-ui-hub` | 3 |  |
| [dsh-what-changed](https://github.com/sjh9714/dsh-what-changed) | 会话顶栏一屏看完整会话改动，列出 Agent 写过的每个文件与逐处改动，被权限拒绝的写入单独计数不算改动 · `dsh plugin --profile web add dsh-what-changed` | 2 |  |
| [dsh-visualize](https://github.com/Nagi-ovo/dsh-visualize) | 对话内生成式 UI：模型把交互式 HTML 卡片直接画进会话流，带流式预览 | 190 | `dsh plugin add @dsh-external/dsh-visualize` |
| [dsh-genui](https://github.com/omdsh-dev/dsh-genui) | 助手回复内渲染交互式 UI 组件：布局、图表、表单、测验、mermaid、3D 场景 | 263 | `dsh plugin add @omdsh-dev/dsh-genui` |
| [web-components](https://github.com/omdsh-dev/web-components) | Web Components 支持 | 2 | `dsh plugin add @deepseek-ai/dsh-client-web-component` |
| [dsh-openpencil](https://github.com/ZSeven-W/dsh-openpencil) | OpenPencil 设计预览与编辑（Agent 操作真实设计画布） | 128 | `dsh plugin add @zseven-w/dsh-openpencil` |

[↩ 回到 🎨 Web UI / 皮肤 / 主题 分类页](plugins/ui-themes.md)

## 🖥️ 桌面端 / TUI / 移动端

| 插件 | 描述 | ⭐ | 安装命令 |
|---|---|---|---|
| [dsh-TUI](https://github.com/ccch1mneyyy/dsh-TUI) | Claude Code 风格全屏交互终端：像素鲸鱼顶栏、流式思考展开、双击 Esc 回滚、上下文/TPS 仪表 | 2172 | `dsh plugin add dsh-cc-tui` |
| [dsh-tianshu-tui](https://github.com/huiliyi37/dsh-tianshu-tui) | DSH 终端 TUI（天枢） | 224 | `dsh plugin add @huiliyi37/dsh-tianshu-tui` |
| [dsh-pi-tui](https://github.com/lqhl/dsh-pi-tui) | Pi TUI 前端：流式 markdown、思考折叠、工具卡、斜杠命令 | 2 |  |
| [deepseek-harness-tui](https://github.com/gxinxing/deepseek-harness-tui) | Ink/React 终端原生 TUI | 7 | `dsh plugin add deepseek-harness-tui` |
| [dsh-tui](https://github.com/orriduck/dsh-tui) | 轻量、会话感知的终端 UI | 3 | `dsh plugin add dsh-tui` |
| [dsh-tui](https://github.com/dsh-tui/dsh-tui) | Claude Code 风格终端 UI（out-of-tree bundle） | 23 | `dsh plugin add @dsh-tui/dsh-tui` |
| [oh-dsh](https://github.com/hust-open-atom-club/oh-dsh) | 一站式社区发行版：TUI、桌面端与 Web UI 三种形态统一体验 | 255 | `dsh plugin add @oh-dsh/desktop` |
| [deepseek-harness-desktop](https://github.com/chyra-moon/deepseek-harness-desktop) | Windows 原生桌面壳：1:1 官方 Web UI + 内置服务器托管 + 托盘驻留 | 11 |  |
| [deepseek-harness-desktop](https://github.com/Easyhoov/deepseek-harness-desktop-windows) | 非官方进程内 Windows 桌面应用（托盘 + 原生通知 + IPC） | 3 |  |
| [dsh-desktop](https://github.com/bruc3van/dsh-desktop) | 社区维护的非官方桌面客户端（复用官方实例或内置运行时） | 65 |  |
| [dsh-desktop](https://github.com/zsyu9779/dsh-desktop) | Wails(Go) 桌面壳，Codex 风格原生应用 | 7 |  |
| [dsh-desktop](https://github.com/mrbbbaixue/dsh-desktop) | .NET 10 WPF + WebView2 桌面启动器 | 2 |  |
| [dsh-desktop](https://github.com/dataelement/dsh-desktop) | 跨平台桌面应用 | 1305 |  |
| [dsh-desktop-electron](https://github.com/Void0312Aurora/dsh-desktop-electron) | 跨平台 Electron 桌面壳（托盘驻留、无内置 Node） | 5 |  |
| [dsh-desktop-window](https://github.com/fengzhiyushui/dsh-desktop-window) | 以独立应用窗口打开 Web UI（自动开窗 + 设置开关） | 1 | `dsh plugin add dsh-desktop-window` |
| [deepseek-harness-desktop](https://github.com/anywhere-labs/deepseek-harness-desktop) | 现代化 DeepSeek Harness 桌面端体验 | 16317 |  |
| [Deepseek-Harness-Desktop](https://github.com/ChisaAlter/Deepseek-Harness-Desktop) | Electron 桌面壳：主题/背景图/托盘，对话仍走官方 dsh web | 127 | `dsh plugin add deepseek-harness-desktop` |
| [dsh-launcher](https://github.com/Ruler4396/dsh-launcher) | Windows 轻量启动器：开机自启 + 独立小窗口 | 161 |  |
| [dsh-work](https://github.com/vibeinging/deepseek-harness-desktop-app) | 本地 AI 工作桌面：Session/文件/数据分析/MCP/Office 一体化 | 606 |  |
| [dsh-companion](https://github.com/william-jin-cmu/dsh-companion) | 常驻桌面助手：全局唤起、定时自动化、快捷回复、插件市场 | 5 |  |
| [dsh-mobile](https://github.com/lehhair/dsh-mobile) | 移动端客户端（⚠️ dsh-external，公开性待核实） | 20 |  |
| [deepseek-harness-tui](https://github.com/openma-ai/deepseek-harness-tui) | Rust/ratatui 编写的 DSH 终端 TUI | 45 | `dsh plugin add github:openma-ai/deepseek-harness-tui` |

[↩ 回到 🖥️ 桌面端 / TUI / 移动端 分类页](plugins/desktop-tui-mobile.md)

## 🤖 Agent 编排 / 多 Agent

| 插件 | 描述 | ⭐ | 安装命令 |
|---|---|---|---|
| [dsh-agent-teams](https://github.com/NanmiCoder/dsh-agent-teams) | AgentTeams 多智能体团队协作 | 679 | `dsh plugin add dsh-agent-teams` |
| [dsh_workflow](https://github.com/icetomoyo/dsh_workflow) | 把 UltraCode 式多 Agent 调度带给 DSH：可生成/保存/治理/观察/恢复的 Workflow 层 | 90 | `dsh plugin add @dsh-external/workflow` |
| [dsh-meta-orchestrator](https://github.com/jiruidai/dsh-meta-orchestrator) | 模型原生 meta-agent：运行时合成任务专属工作流并协调工具/子代理 | 3 | `dsh plugin add dsh-meta-orchestrator` |
| [dsh-crosstalk](https://github.com/Jesse-njx/dsh-crosstalk) | 跨会话消息互发：本机任意会话像 Claude Code 一样互发消息 | 2 | `dsh plugin add @dsh-crosstalk/bundle` |
| [dsh-agent-messaging](https://github.com/happyren/dsh-agent-messaging) | 跨会话 agent-to-agent 消息投递（按会话名寻址） | 4 | `dsh plugin add dsh-agent-messaging` |
| [dsh-interconnect](https://github.com/Chinesezjc/dsh-interconnect) | 跨实例消息/事件交接（interconnect 服务 + 工具） | 34 | `dsh plugin add dsh-interconnect` |
| [dsh-session-hub](https://github.com/Asaiuta/dsh-session-hub) | 多服务器 DSH 会话聚合与原生操控（hub 网关 + 官方 UI 桥） | 4 | `dsh plugin add dsh-session-hub` |
| [dsh-plugin-yet-another-subagent](https://github.com/HuanLinOTO/dsh-plugin-yet-another-subagent) | 可配置子代理 profiles + 实时工具调用/token 显示 + 子会话跳转 | 11 | `dsh plugin add @huanlin/dsh-plugin-yet-another-subagent` |
| [dsh-a2a](https://github.com/dpskh/dsh-a2a) | Agent2Agent 网状互联 ⚠️ dsh-external，公开性待核实 | 5 |  |
| [dph-fleet](https://github.com/polaris-smart/dph-fleet) | 去中心化多设备舰队：mDNS 同网发现 + 密钥配对 + SSH 跨网直连，任意设备可派单/接单（零 npm 依赖） | 4 | `dsh plugin add dph-fleet-0.2.4.tgz` |

[↩ 回到 🤖 Agent 编排 / 多 Agent 分类页](plugins/agent-orchestration.md)

## 🧠 上下文 / 记忆

| 插件 | 描述 | ⭐ | 安装命令 |
|---|---|---|---|
| [dsh-memory-evolve](https://github.com/csyangwen/dsh-memory-evolve) | 跨会话长期记忆 + 后台自我进化（五轨记忆/git 分支感知/技能进化） | 205 |  |
| [billion-context-dsh](https://github.com/Tyan66666/billion-context-dsh) | 模型驱动上下文压缩（ACP）：模型决定何时压缩（移植自 billion-context-pi） | 31 |  |
| [dsh-memory](https://github.com/Jesse-njx/dsh-memory) | 基于无损会话日志的引用式记忆（事实带 sessionId/eventRange 引用） | 2 | `dsh plugin add @dsh-memory/bundle` |
| [dsh-memory](https://github.com/ben7am1n/dsh-memory) | 跨会话 SQLite 持久记忆 | 1 | `dsh plugin add dsh-memory` |
| [dsh-mnemon](https://github.com/omdsh-dev/dsh-mnemon) | Mnemon 本地三层记忆（Runtime Memory/可检索文档/受监督 Memory Spaces） | 135 | `dsh plugin add dsh-mnemon` |
| [nowledge-mem-deepseek-harness](https://github.com/nowledge-co/nowledge-mem-deepseek-harness) | 给所有 AI 工具共用的一层记忆（Context Bundle 注入 + MCP 工具 + 线程捕获） | 5 | `dsh plugin add nowledge-mem-deepseek-harness` |
| [dsh-plugin-meta-memory](https://github.com/YYTbit/dsh-plugin-meta-memory) | 结构化长期记忆系统 | 3 | `dsh plugin add dsh-plugin-meta-memory` |
| [dsh-kb-sieve](https://github.com/omdsh-dev/dsh-kb-sieve) | 从 md/txt/docx/pdf 构建可审计知识库包（SQLite FTS5） | 2 | `dsh plugin add @dsh-external/dsh-kb-sieve` |
| [dsh-llm-wiki](https://github.com/detpecca/dsh-llm-wiki) | 从 agent 管理 LLM-Wiki 知识库（wiki_search/read/stats/ingest 等） | 4 | `dsh plugin add @detpecca/dsh-llm-wiki` |
| [dsh-continual-evolve](https://github.com/ZK-Andy/dsh-continual-evolve) | 持续自进化：版本化、可审计、可回滚的 harness 状态（提示词/记忆/技能/子代理规格）沉淀自会话轨迹，带审查门禁与技能热加载 | 15 | `dsh plugin add dsh-continual-evolve` |
| [dsh-meow-memory](https://github.com/Phant0Meow/dsh-meow-memory) | 跨会话项目记忆：SQLite 分层存储 + 关键词/语义检索，逐消息命中注入与窗口期整理 | 27 | `dsh plugin add github:Phant0Meow/dsh-meow-memory` |
| [dsh-context-doctor](https://github.com/Zhenyu98/dsh-context-doctor) | 上下文注入审计：统计指令链/技能目录/工具 schema 的 token 成本，检测重复冲突 | 16 | `dsh plugin add dsh-context-doctor` |
| [context-vista](https://github.com/GooodWei/context-vista) | `/context` 命令 + 环形图实时展示上下文 token 用量与费用 | 10 | `dsh plugin add context-vista` |
| [distill](https://github.com/LoserFox/distill) | 自动对话蒸馏：后台 subagent 反省 + 技能 create/update | 20 | `dsh plugin add @loserfox/distill` |
| [dsh-auto-compact](https://github.com/wangxiang0605qvq/dsh-auto-compact) | compact_now 工具，回合结束自动压缩上下文 |  |  |
| [dsh-context](https://github.com/bowenliang123/dsh-context) | 上下文洞察面板：展示模型上下文窗口的构成与演化 | 599 | `dsh plugin add dsh-context` |
| [dsh-turn-rewind](https://github.com/Anionex/dsh-turn-rewind) | 对话回退：基于持久 Change Ledger 回滚会话与工作区状态 | 91 | `dsh plugin add @dsh-external/turn-rewind` |
| [dsh-undo](https://github.com/LingLambda/dsh-undo) | 上下文 undo/redo：回退到上一个已完成步骤并恢复 | 4 | `dsh plugin add dsh-undo` |
| [dsh-recall](https://github.com/Mongfayi/dsh-recall) | 消息撤回：每条用户消息一个撤销按钮，删除该轮及其后内容（不改代码） | 3 | `dsh plugin add dsh-recall` |
| [dsh-sidechain](https://github.com/omdsh-dev/dsh-sidechain) | `/side` 持续性侧会话与 `/btw` 一次性侧问，在临时 fork 中运行 | 10 | `dsh plugin add @dsh-external/dsh-sidechain` |
| [dsh-message-edit](https://github.com/Moeblack/dsh-message-edit) | 基于分支的消息编辑、reroll、重试与版本时间线 | 35 | `dsh plugin add dsh-message-edit` |
| [dsh-session-search](https://github.com/Tieboyh/dsh-session-search) | 跨 dsh/Codex/Claude/pi/OpenCode 会话的无索引全文搜索 | 2 |  |
| [dsh-chat-import](https://github.com/Nwflower/dsh-chat-import) | 13 源全保真导入（Claude Code/Codex/ChatGPT/Cursor/Gemini/Reasonix/opencode/ZCode/Grok Build/OpenClaw/Pi/Hermes/Kimi）历史会话为可续聊 DSH 会话 | 85 | `dsh plugin add dsh-chat-import` |
| [dsh-claude-move](https://github.com/PerryLink/dsh-claude-move) | 迁移 Claude Code 会话/记忆/技能/CLAUDE.md 到 DSH | 6 | `dsh plugin add dsh-claude-move` |

[↩ 回到 🧠 上下文 / 记忆 分类页](plugins/context-memory.md)

## 👁️ 多模态 / 视觉

| 插件 | 描述 | ⭐ | 安装命令 |
|---|---|---|---|
| [modlens](https://github.com/liustack/modlens) | DSH 首个视觉插件：粘贴图片返回结构化 JSON 证据（OCR/布局/语义） | 3386 | `dsh plugin add @liustack/modlens` |
| [dsh-vision-toolkit](https://github.com/Anionex/dsh-vision-toolkit) | 纯文本模型的视觉工具箱：图片问答、长截图 OCR、UI 还原、定位、像素对比、Artifacts | 783 | `dsh plugin add @dsh-external/dsh-vision-toolkit` |
| [agent-vision-toolkit](https://github.com/Anionex/agent-vision-toolkit) | 同上，agent 通用视觉工具箱与技能（多图理解/GUI 自动化） | 1082 |  |
| [dsh-vision](https://github.com/william-jin-cmu/dsh-vision) | view_image 工具桥接任意 OpenAI 兼容 VLM（默认智谱免费档） | 36 |  |
| [dsh-vision-LMstudio](https://github.com/TiankunDai/dsh-vision-LMstudio) | 通过 LM Studio 调用本地视觉模型 | 1 |  |
| [dsh-vision-proxy](https://github.com/Flyvhidbwo/dsh-vision-proxy) | DeepSeek 大脑 + 自动识图（图片经 Qwen VLM 转文字后作答） | 11 | `dsh plugin add dsh-vision-proxy` |
| [dsh-plugin-deepeye](https://github.com/Favio8/dsh-plugin-deepeye) | DeepEye 视觉插件：图片描述/OCR/VQA/UI 布局/剪贴板分析 | 4 | `dsh plugin add dsh-plugin-deepeye` |
| [deepseek-omnimodal](https://github.com/good-boy4069/Deepseek-omnimodal) | 开源多模态 MCP 插件：经 Qwen/DashScope 识别/生成图像、视频、音频（兼容 Codex/Claude Code/DSH） | 5 |  |
| [sidesight](https://github.com/ZhuXinAI/sidesight) | CLI 优先的视觉 sidecar：分析截图/图表/UI diff/视频（OpenAI 兼容多模态模型） | 1 | `dsh plugin add sidesight` |
| [dsh-paddle-ocr](https://github.com/omdsh-dev/dsh-paddle-ocr) | 百度 PaddleOCR-VL 文档布局解析（OCR 工具 + 设置卡 + 任务面板） | 3 | `dsh plugin add dsh-paddle-ocr` |
| [dsh-screenshot-diff](https://github.com/PangYiMing/dsh-screenshot-diff) | 两截图像素对比生成 diff.png + 三联图（pixelmatch） | 1 | `dsh plugin add dsh-screenshot-diff` |
| [Qwen-MM-Plugins](https://github.com/omdsh-dev/Qwen-MM-Plugins) | Qwen 多模态插件支持 | 5 | `dsh plugin add @deepseek-ai/dsh-qwen-mm` |
| [dsh-computer-use](https://github.com/Anionex/dsh-computer-use) | macOS 电脑控制：Accessibility 观测、过期状态拒绝、作用域权限、安全输入 | 26 | `dsh plugin add @dsh-external/dsh-computer-use` |
| [dsh-mobile-control](https://github.com/PangYiMing/dsh-mobile-control) | 操控手机（ADB/iOS） | 3 | `dsh plugin add dsh-mobile-control` |
| [dsh-hdc-bridge](https://github.com/1na-ko/dsh-hdc-bridge) | 原生鸿蒙设备桥：hdc 截图-看图-装包-验证闭环调试 | 11 | `dsh plugin add dsh-hdc-bridge` |
| [dsh-plugin-aigc-canvas](https://github.com/HuanLinOTO/dsh-plugin-aigc-canvas) | provider 无关的 AIGC HTTP 桥 + 自由画布 + ffmpeg 后处理 | 13 | `dsh plugin add @huanlin/dsh-plugin-aigc-canvas` |
| [dsh-vision-router](https://github.com/ysr666/dsh-vision-router) | 纯文本模型的视觉路由：免费视觉链 + 像素级视觉工具（问答/定位/裁剪/OCR） | 893 | `dsh plugin add dsh-vision-router` |

[↩ 回到 👁️ 多模态 / 视觉 分类页](plugins/multimodal.md)

## 🔁 工作流 / 自动化

| 插件 | 描述 | ⭐ | 安装命令 |
|---|---|---|---|
| [dsh-deep-research](https://github.com/omdsh-dev/dsh-deep-research) | 自适应深度研究编排器（基于官方 workflow 引擎） | 17 | `dsh plugin add @dsh-external/dsh-deep-research` |
| [dsh-deepresearch](https://github.com/havingautism/dsh-deepresearch) | 证据优先的独立研究工作流（持久状态 + 独立 Web 视图） | 9 | `dsh plugin add @deepseek-ai/dsh-deepresearch` |
| [dsh-loop](https://github.com/vlln/dsh-loop) | 定时循环：`/loop` 命令 + loop 工具 + 活动状态条 | 4 | `dsh plugin add @dsh-external/dsh-loop` |
| [dsh-sentinel](https://github.com/fuhefei/dsh-sentinel) | 条件驱动唤醒：file/command/http/process/webhook 持久监视触发 agent | 11 | `dsh plugin add @dsh-external/dsh-sentinel` |
| [dsh-automation](https://github.com/titanwings/dsh-automation) | 定时任务：Coding 任务按计划在全新 Agent Session 中运行 | 69 | `dsh plugin add @dsh-external/dsh-automation` |
| [dsh-routines](https://github.com/Jesse-njx/dsh-routines) | cron 定时 Agent：按计划跑 prompt 并把摘要送到你所在处 | 1 | `dsh plugin add @dsh-routines/bundle` |
| [dsh-plannotator](https://github.com/titanwings/dsh-plannotator) | 计划批注：选中计划原文逐条批注并回送结构化反馈 | 7 | `dsh plugin add @dsh-external/dsh-plannotator` |
| [dsh-inspect](https://github.com/omdsh-dev/dsh-inspect) | 发现问题→修复→复查的对抗式闭环（基于官方 workflow 引擎） | 6 | `dsh plugin add @dsh-external/dsh-inspect` |
| [dsh-advisor](https://github.com/omdsh-dev/dsh-advisor) | 副模型每轮被动审查并注入见解 | 15 | `dsh plugin add dsh-advisor` |
| [mstar-harness](https://github.com/btspoony/mstar-harness) | Skill 驱动的 Harness/Loop 工程工作流 Agent 插件 | 52 |  |
| [dsh-llm-fallbacks](https://github.com/omdsh-dev/dsh-llm-fallbacks) | 基于角色的模型重试/备用策略 | 11 | `dsh plugin add dsh-llm-fallbacks` |
| [dsh-polyglot](https://github.com/Jesse-njx/dsh-polyglot) | 模型切换器：任意 OpenAI 兼容端点 + 免费/低价 DeepSeek 预设 + 限流自动回退 | 3 | `dsh plugin add @dsh-polyglot/bundle` |
| [dsh-track](https://github.com/fakechris/dsh-track) | 嵌入式任务管理引擎：决策点协议、念头捕获墙、Linear 形 issue 存储 | 6 | `dsh plugin add @deepseek-ai/dsh-track` |
| [dsh-record-replay](https://github.com/humblebanana/dsh-record-replay) | 录制 macOS 桌面工作流演示并转成 agent 技能（orr_* 工具） | 11 | `dsh plugin add dsh-record-replay` |
| [dsh-daily-progress](https://github.com/omdsh-dev/dsh-daily-progress) | 每日进度：今晚定明日计划 + 今日清单 + 完成度温度计 | 3 | `dsh plugin add dsh-daily-progress` |
| [dsh-goal-mode](https://github.com/KarlOfLaw/dsh-goal-mode-enhance) | 可视化 goal 模式：Goal 栏/设置页/多会话总览/goal_overview 工具 | 2 | `dsh plugin add dsh-goal-mode` |
| [dsh-ramify](https://github.com/yanglongyun/dsh-ramify) | 创意分支画布：树状工作区生成、对比、迭代多个方案 | 11 | `dsh plugin add @ramify/dsh-ramify` |
| [dsh-tool-approval](https://github.com/ilharp/dsh-tool-approval) | 手动审批模式（Manual/Ask Mode） | 1 | `dsh plugin add dsh-tool-approval` |
| [dsh-tiered-approval](https://github.com/Elaina-real/dsh-tiered-approval) | 分层自动审查：静态规则 + LLM 审查 + 人工兜底 | 2 | `dsh plugin add dsh-tiered-approval` |
| [dsh-event-auditor](https://github.com/qing3a/dsh-event-auditor) | 事件流审计面板：观察事件类型/分发模式/计数，帮插件作者理解内部 | 1 | `dsh plugin add @dsh-external/dsh-event-auditor` |
| [dsh-auto-continue](https://github.com/HsiangNianian/dsh-auto-continue) | 自动续传：网络中断后自动发「继续」恢复请求 | 32 | `dsh plugin add github:HsiangNianian/dsh-auto-continue` |

[↩ 回到 🔁 工作流 / 自动化 分类页](plugins/workflow-automation.md)

## 📡 通知 / 渠道 / 远程

| 插件 | 描述 | ⭐ | 安装命令 |
|---|---|---|---|
| [telegram](https://github.com/LoserFox/telegram) | Telegram Bot API 桥接：长轮询、per-chat 会话、HTML 格式化 | 7 | `dsh plugin add @loserfox/telegram` |
| [dsh-telegram](https://github.com/ben7am1n/dsh-telegram) | Telegram 运行时适配器（per-chat 会话、allowlist 认证） | 1 | `dsh plugin add dsh-telegram` |
| [DSH-Telegram-Relay](https://github.com/congchuanling-dot/DSH-Telegram-Relay) | 通过 Telegram 远程对话并接收通知 | 6 | `dsh plugin add dsh-telegram-relay` |
| [dsh-chatnode-wechat](https://github.com/Jesse-njx/dsh-chatnode-wechat) | 通过 iLink 网关在微信里与 DSH agent 聊天/监控/审批 | 6 | `dsh plugin add @dsh-cowork/chatnode-wechat` |
| [dsh-lark-bridge](https://github.com/imetn/dsh-lark-bridge) | 双向飞书控制器 | 7 | `dsh plugin add dsh-lark-bridge` |
| [dsh-onlyne](https://github.com/dbydd/dsh-onlyne) | IM 网关：从 dsh 会话收发 QQ/微信/飞书/Telegram 消息 | 2 |  |
| [dsh-im](https://github.com/xmanrui/dsh-im) | 一个设置入口统一接入飞书/微信/钉钉/企业微信/QQ/Slack/Telegram/Discord/WhatsApp 机器人，支持扫码、Manifest 或凭据绑定 · `npx -y github:xmanrui/dsh-im install` | 85 |  |
| [dsh-notification](https://github.com/omdsh-dev/dsh-notification) | 回合完成桌面通知，按结果分控 + 关键词过滤 | 69 | `dsh plugin add dsh-notification` |
| [dsh-notify-windows](https://github.com/SeverusZh/dsh-notify-windows) | Windows 通知（零依赖） | 5 |  |
| [dsh-win-notify](https://github.com/MuziIsabel/dsh-win-notify) | Windows toast 通知（任务完成带声音） | 4 | `dsh plugin add dsh-win-notify` |
| [dsh-web-ui-notify](https://github.com/bill9109/dsh-web-ui-notify) | 桌面通知提醒 | 19 | `dsh plugin add @bill9109/dsh-web-ui-notify` |
| [dsh-session-notification](https://github.com/dingyi222666/dsh-session-notification) | 会话完成等四种状态通知，支持浏览器提示 | 15 | `dsh plugin add @dingyi222666/dsh-session-notification` |
| [dsh-bell-notify](https://github.com/Laplace-bit/dsh-bell-notify) | 生命周期事件铃声 + 右下角呼吸状态点（Web Audio 合成，零音频文件，可上传自定义音） | 2 | `dsh plugin add github:Laplace-bit/dsh-bell-notify` |
| [dsh-ssh](https://github.com/UynajGI/dsh-ssh) | SSH 远程执行（ProxyJump 链、SFTP 文件系统、PTY） | 7 |  |
| [dsh-webhook-bridge](https://github.com/ben7am1n/dsh-webhook-bridge) | 通用 webhook 接收器：POST /hook/:channel 唤醒 per-channel agent | 1 | `dsh plugin add dsh-webhook-bridge` |
| [dsh-open-in-vscode](https://github.com/omdsh-dev/dsh-open-in-vscode) | 从 Web GUI 一键在 VS Code 中打开工作区目录 | 53 | `dsh plugin add dsh-open-in-vscode` |
| [dsh-share](https://github.com/hellodigua/dsh-share) | 一键分享你的对话 | 29 | `dsh plugin add @dsh-external/dsh-share` |
| [dsh-conversation-share](https://github.com/bill9109/dsh-conversation-share) | 分享任意段落的对话 | 3 | `dsh plugin add @bill9109/dsh-conversation-share` |

[↩ 回到 📡 通知 / 渠道 / 远程 分类页](plugins/notifications-channels.md)

## 🌐 浏览器 / 搜索

| 插件 | 描述 | ⭐ | 安装命令 |
|---|---|---|---|
| [dsh-browser](https://github.com/Lum1104/dsh-browser) | Chrome 侧边栏扩展，让 DSH 直接操作你的浏览器（无需视觉能力） | 346 |  |
| [dsh-browser-control](https://github.com/PangYiMing/dsh-browser-control) | CDP/Playwright 操控浏览器 | 1 | `dsh plugin add dsh-browser-control` |
| [ego-browser](https://github.com/Fisfzy/ego-browser) | 把 ego-lite（给 AI Agent 的 Chromium）接入 DSH，13 个结构化 ego_* 工具 | 26 |  |
| [dsh-better-browser](https://github.com/titanwings/dsh-better-browser) | 通过 Kimi WebBridge 让 Agent 操作用户已登录浏览器（13 个工具） | 10 | `dsh plugin add @dsh-external/dsh-better-browser` |
| [dsh-webbridge](https://github.com/bill9109/dsh-webbridge) | DSH 结合 Kimi WebBridge | 3 | `dsh plugin add @bill9109/dsh-webbridge` |
| [dsh-browser](https://github.com/ben7am1n/dsh-browser) | Playwright 驱动的浏览器自动化 | 3 | `dsh plugin add dsh-browser` |
| [DSH-Chrome-devtools](https://github.com/yuzi-ska/DSH-Chrome-devtools) | 基于 Chrome DevTools MCP 的真实 Chrome 控制 | 1 | `dsh plugin add dsh-chrome-devtools` |
| [dsh-playwright-cli](https://github.com/mitao-su/dsh-playwright-cli) | 包装 Playwright CLI：装浏览器、跑测试、从 agent 循环打开 HTML 报告 | 2 | `dsh plugin add dsh-playwright-cli` |
| [deepseek-pp](https://github.com/zhu1090093659/deepseek-pp) | 浏览器扩展 AI Agent 工作区，内置 MCP 与记忆 | 1641 |  |
| [dsh-web-search-firecrawl](https://github.com/yangzhe1003/dsh-web-search-firecrawl) | Firecrawl 搜索提供方接入内置 web_search | 2 | `dsh plugin add @yangzhe1003/dsh-web-search-firecrawl` |
| [dsh-web-search-tavily](https://github.com/crayonlu/dsh-web-search-tavily) | Tavily 搜索提供方（免 DeepSeek key） | 3 |  |
| [dsh-tavily-search](https://github.com/zhouzhencheng07/dsh-tavily-search) | 免 key Tavily 搜索工具 | 4 | `dsh plugin add dsh-tavily-search` |
| [dsh-web-search-pro](https://github.com/anweat/dsh-web-search-pro) | 增强持久搜索（多引擎 + SQLite/LRU 缓存 + Playwright 渲染） | 28 | `dsh plugin add dsh-web-search-pro` |
| [dsh-all-search](https://github.com/RealAlexandreAI/dsh-all-search) | AnySearch 网页搜索提供方（ctx.web） | 1 | `dsh plugin add dsh-all-search` |
| [modsearch](https://github.com/liustack/modsearch) | CLI 搜索工具：把搜索查询转结构化 web 证据 JSON | 189 | `dsh plugin add @liustack/modsearch` |
| [argo](https://github.com/taxueseek/argo) | 为 agent 打造的多语言搜索工具（中文/英文/学术/代码/购物/金融/新闻/百科） | 104 | `dsh plugin add github:taxueseek/argo` |

[↩ 回到 🌐 浏览器 / 搜索 分类页](plugins/browser-search.md)

## 🏗️ 基础设施 / 插件管理 / 开发工具

| 插件 | 描述 | ⭐ | 安装命令 |
|---|---|---|---|
| [plugin-registry](https://github.com/vlln/plugin-registry) | 插件管理控制台：浏览器面板管理官方 repository 插件 + 开发引导 | 57 |  |
| [dsh-plugin-manager-registry](https://github.com/Jesse-njx/dsh-plugin-manager-registry) | 离线容忍的注册表：从 awesome 列表/GitHub topics/npm 发现并去重 DSH 插件 | 1 |  |
| [dsh-hub](https://github.com/omdsh-dev/dsh-hub) | OMDSH 社区扩展 hub（基于官方 contracts） | 4 | `dsh plugin add @omdsh/dsh-hub` |
| [DSH-plugin-switch](https://github.com/Nexus-Aethra/DSH-plugin-switch) | 插件市场：浏览/搜索/安装 GitHub 项目，自动识别 plugin/skill | 2 | `dsh plugin add dsh-plugin-switch` |
| [dsh-plugin-installer](https://github.com/Toukaiteio/dsh-plugin-installer) | 把 DSH 快速接入 GitHub 插件生态的市场插件 | 6 | `dsh plugin add dsh-plugin-installer` |
| [dsh-super-injector](https://github.com/yjh051108/dsh-super-injector) | 超级模组注入器：运行时注入本地插件包（junction + loader.create，热重载） | 126 | `dsh plugin add @dsh-external/dsh-super-injector` |
| [oh-my-dsh](https://github.com/LaplaceYoung/oh-my-dsh) | 面向 DSH 的插件生态：700+ 插件，扩展接缝注册不改 agent-loop | 51 |  |
| [dsh-plugin-check](https://github.com/omdsh-dev/dsh-plugin-check) | 插件健康检查：扫描清单协议/patch 格式/构建陷阱/hub 状态 | 24 | `dsh plugin add @deepseek-ai/dsh-plugin-check` |
| [dsh-plugin-doctor](https://github.com/lin-cheng-lab/dsh-plugin-doctor) | 插件体检：安装前检查 peer 版本兼容性 | 1 | `dsh plugin add dsh-plugin-doctor` |
| [dsh-doctor](https://github.com/asdf17128/dsh-doctor) | profile 健康检查：找 patch 静默破坏的配置/死 patch/工具名冲突 | 1 |  |
| [dsh-capability-inspector](https://github.com/tree201/dsh-capability-inspector) | DSH Doctor + 运行时诊断（工具/模型/技能/工作区/会话/插件/MCP 排障） | 2 | `dsh plugin add dsh-capability-inspector` |
| [dsh-security-audit](https://github.com/omdsh-dev/dsh-security-audit) | 本机安全审计：配置/插件来源/会话/网络暴露面，只读脱敏报告 | 13 | `dsh plugin add @deepseek-ai/dsh-security-audit` |
| [dsh-session-health](https://github.com/omdsh-dev/dsh-session-health) | 会话文件帧级扫描诊断（torn/损坏/空会话检测） | 8 | `dsh plugin add @deepseek-ai/dsh-session-health` |
| [dsh-passwords](https://github.com/slywalker2006/dsh-passwords) | dsh 登录网关（密码门）：远程访问鉴权 + 多用户账号管理，HTTPS/防爆破/审计日志 | 15 | `dsh plugin add github:slywalker2006/dsh-passwords` |
| [dsh-evolve](https://github.com/william-jin-cmu/dsh-evolve) | 自进化：agent 会话内给自己热挂载/卸载持久化插件 | 10 | `dsh plugin add @dsh-external/dsh-evolve` |
| [dsh-trace](https://github.com/vibeinging/dsh-trace) | 遥测后端：导出 turns/model steps/tool calls 到 yiTrace | 2 | `dsh plugin add @deepseek-ai/dsh-trace` |
| [fabric](https://github.com/omdsh-dev/fabric) | 类似 MC Fabric 的 hook 处理器 | 15 | `dsh plugin add cordis-fabric-bundle` |
| [sandbox-micro](https://github.com/omdsh-dev/sandbox-micro) | microsandbox 沙箱支持 | 3 | `dsh plugin add @deepseek-ai/dsh-sandbox-microsandbox` |
| [sandbox-mxc](https://github.com/omdsh-dev/sandbox-mxc) | 微软跨平台沙盒支持 | 2 | `dsh plugin add @deepseek-ai/dsh-sandbox-mxc` |
| [sandbox-nono](https://github.com/omdsh-dev/sandbox-nono) | nono 沙盒支持 | 3 | `dsh plugin add @deepseek-ai/dsh-sandbox-nono` |
| [dsh-stream-rules](https://github.com/jiesou/dsh-stream-rules) | 按需注入规则、不浪费上下文 | 4 | `dsh plugin add dsh-stream-rules` |
| [dsh-git-identity](https://github.com/LoserFox/dsh-git-identity) | git 提交固定使用环境自身作者身份 | 7 | `dsh plugin add @loserfox/git-identity` |
| [dsh-plugin-graph](https://github.com/erduotong/dsh-plugin-graph) | 插件关系图谱可视化 | 2 | `dsh plugin add dsh-plugin-graph` |
| [dsh-dev-actions](https://github.com/skitse/dsh-dev-actions) | Agent 提议的可复用开发命令，转为侧栏动作 | 1 | `dsh plugin add dsh-dev-actions` |
| [dsh-tool-policy](https://github.com/Drifter-yh/dsh-tool-policy) | 声明式默认拒绝的工具策略 | 3 | `dsh plugin add dsh-tool-policy` |
| [dsh-openai-codex-auth](https://github.com/yoke233/dsh-openai-codex-auth) | OpenAI Codex OAuth 登录与用量卡 | 9 | `dsh plugin add dsh-openai-codex-auth` |
| [deepseek-harness-docker](https://github.com/runzhliu/deepseek-harness-docker) | 社区 Docker/K8s 打包（加固镜像 + Compose + Helm） | 25 |  |
| [dsh-harness-ops](https://github.com/fakechris/dsh-harness-ops) | 运维工具箱：A/B 双槽快照升级、自动恢复、回滚、诊断自愈 | 11 |  |
| [dsh-multica-runtime](https://github.com/multica-ai/dsh-multica-runtime) | Multica 的 DSH runtime 桥接（stdio JSONL 协议） | 53 | `dsh plugin add @multica-ai/dsh-runtime` |
| [session-teleport](https://github.com/omdsh-dev/session-teleport) | PostgreSQL 单写者会话交接服务 | 2 | `dsh plugin add @mattheliu/session-teleport` |
| [session-persistence-rdb](https://github.com/morlay/session-persistence-rdb) | session 关系型数据库持久化 | 4 | `dsh plugin add @morlay/session-persistence-rdb` |
| [dsh-market](https://github.com/dsh-market/dsh-market) | DSH 可视化插件市场：浏览/搜索/一键安装 | 1417 | `dsh plugin add github:dsh-market/dsh-market` |
| [dsh-webui-market-plugin](https://github.com/Sanqi-normal/dsh-webui-market-plugin) | dsh Web GUI 社区插件市场：浏览 awesome-dsh-plugin 目录/安装/卸载 | 94 | `dsh plugin add github:Sanqi-normal/dsh-webui-market-plugin` |

[↩ 回到 🏗️ 基础设施 / 插件管理 / 开发工具 分类页](plugins/infrastructure-dev.md)

## 🎮 娱乐 / 其他

| 插件 | 描述 | ⭐ | 安装命令 |
|---|---|---|---|
| [dsh-gomoku](https://github.com/omdsh-dev/dsh-gomoku) | 与 AI 下五子棋，也可双 AI 对弈比棋力 | 14 | `dsh plugin add @deepseek-ai/dsh-gomoku` |
| [dsh-minigames](https://github.com/lhh010/dsh-minigames) | 右侧 18 款离线小游戏面板（恐龙跳一跳/俄罗斯方块/扫雷/2048…） | 24 | `dsh plugin add @dsh-external/dsh-minigames` |
| [dsh-auto-chess](https://github.com/omdsh-dev/dsh-auto-chess) | 自走棋：人机对战或双 AI 对弈 | 3 | `dsh plugin add @deepseek-ai/dsh-auto-chess` |
| [dsh-plugin-d399](https://github.com/HuanLinOTO/dsh-plugin-d399) | 模型生成时弹出小游戏菜单（wordle/消消乐，可扩展） | 8 | `dsh plugin add @huanlin/dsh-plugin-d399` |
| [dsh-ui-whale](https://github.com/lhh010/dsh-ui-whale) | 全手绘像素鲸鱼伙伴（眨眼/摆尾/喷水/爱心） | 29 |  |
| [whale-girl](https://github.com/vlln/whale-girl) | 桌面宠物鲸鱼娘（QQ 宠物形态，可拖拽/投喂/玩耍） | 252 | `dsh plugin add whale-girl` |
| [dsh-pixel-whale](https://github.com/yoke233/dsh-pixel-whale) | 活泼像素鲸鱼运行状态伴侣 | 1 | `dsh plugin add dsh-pixel-whale` |
| [dsh-blue-whale-maid](https://github.com/yuxino/dsh-blue-whale-maid) | 蓝鲸女仆桌面像素宠物 | 5 | `dsh plugin add dsh-blue-whale-maid` |
| [deepseek-pet](https://github.com/keleus/deepseek-pet) | 在 DSH 上养一只大蓝鲸 | 34 | `dsh plugin add deepseek-pet` |
| [dsh-stickers](https://github.com/william-jin-cmu/dsh-stickers) | 用户与 agent 双向表情贴纸互动 | 21 | `dsh plugin add @dsh-external/dsh-stickers` |
| [dsh-emoji](https://github.com/hellodigua/dsh-emoji) | 为 AI 回复自动添加表情 | 31 | `dsh plugin add @dsh-external/dsh-emoji` |
| [dsh-ads](https://github.com/Nagi-ovo/dsh-ads) | 2005 中文站点风格整活广告（侧栏/信息流/弹窗，素材全虚构） | 519 | `dsh plugin add @dsh-external/dsh-ads` |
| [dsh-stock-market](https://github.com/AnacondaKC/dsh-stock-market) | 股票行情数据插件（整活向） | 16 | `dsh plugin add dsh-stock-market` |
| [dsh-douyin](https://github.com/AnacondaKC/dsh-douyin) | 侧栏短视频：原生播放器、系列导航、历史回放 | 6 | `dsh plugin add dsh-douyin` |
| [deepseek-manners](https://github.com/Moeblack/deepseek-manners) | 每次消息后注入感谢语，做个有礼貌的人 | 15 | `dsh plugin add deepseek-manners` |
| [dsh-sound-effects-plugin](https://github.com/JasonJin2006/dsh-sound-effects-plugin) | Reasonix 风格音效（生成式五声音阶环境音 + 提示音） | 2 | `dsh plugin add dsh-sound-effects-plugin` |
| [dsh-fun-typewriter](https://github.com/omdsh-dev/dsh-fun-typewriter) | WebAudio 打字机氛围音效（零音频资源） | 3 | `dsh plugin add @deepseek-ai/dsh-fun-typewriter` |
| [dsh-daily-fortune](https://github.com/omdsh-dev/dsh-daily-fortune) | 每日运势：观音签、塔罗、每日一句 | 3 | `dsh plugin add @deepseek-ai/dsh-daily-fortune` |
| [dsh-plugin-spur](https://github.com/HuanLinOTO/dsh-plugin-spur) | 挂在聊天流里的辫子，抓住甩一甩给 agent 发「去干活」 | 6 | `dsh plugin add @huanlin/dsh-plugin-spur` |
| [dsh-toy](https://github.com/c3ll256/dsh-toy) | 连接小型玩具到 DSH（Toy Control Protocol） | 58 | `dsh plugin add dsh-toy` |
| [dsh-learn-everything](https://github.com/cendaifeng/dsh-learn-everything) | 费曼学习模式：教→讲回→判→再解释，渲染为富 HTML 课程卡 | 5 | `dsh plugin add dsh-learn-everything` |
| [dsh-openmaic](https://github.com/THU-MAIC/dsh-openmaic) | OpenMAIC 教学：课堂、幻灯片、交互组件、苏格拉底式教学 | 19 | `dsh plugin add @openmaic/dsh-openmaic` |
| [dsh-scholar](https://github.com/lzszq/dsh-scholar) | 学术助手插件 | 24 | `dsh plugin add @dsh-scholar/research-plugin` |
| [dsh-101](https://github.com/bill9109/dsh-101) | DSH 文档阅读模式 | 5 | `dsh plugin add @dsh-external/dsh-101` |
| [dsh-reasoning-translator](https://github.com/pinkllo/dsh-reasoning-translator) | 让模型的思维链用你的语言输出 | 2 | `dsh plugin add dsh-reasoning-translator` |
| [dsh-director-toolkit](https://github.com/lhmd/dsh-director-toolkit) | 3D 艺术家/技术美术方向包：Blender/Three.js/Houdini/C4D 方向指引 | 7 | `dsh plugin add @lhmd/dsh-director-toolkit` |
| [dsh-apple-mode](https://github.com/jihongboo/dsh-apple-mode) | Xcode AI 集成：26 个 Xcode MCP 工具 + Apple 平台技能 | 1 | `dsh plugin add dsh-apple-mode` |
| [notes](https://github.com/zhaoolee/notes) | 开源版锤子便签：导出 DSH 会话为便签图片，支持 skill 调用 ⚠️ 无 license 文件 | 148 |  |
| [dsh-cost-meter](https://github.com/Han-1413141/dsh-cost-meter) | DSH 会话费用统计（本会话/当日/历史 + 官方价格同步） | 131 | `dsh plugin add github:Han-1413141/dsh-cost-meter` |
| [dsh-user-experience](https://github.com/DietCokewithSugar/dsh-user-experience) | persona 驱动的 UX 走查：扫描 React/TS 源码找 UX 问题 | 19 | `dsh plugin add github:DietCokewithSugar/dsh-user-experience` |
| [dsh-balance-meter](https://github.com/Ghost011118/dsh-balance-meter) | DeepSeek 账户余额与会话成本显示 | 18 | `dsh plugin add github:Ghost011118/dsh-balance-meter` |

[↩ 回到 🎮 娱乐 / 其他 分类页](plugins/fun-other.md)

## 🏛️ 官方核心与元项目

| 插件 | 描述 | ⭐ | 安装命令 |
|---|---|---|---|
| [deepseek-ai/deepseek-harness](https://github.com/deepseek-ai/deepseek-harness) | 官方核心仓库：「一切皆插件」，Cordis 驱动 | 172439 |  |
| [deepseek-ai/awesome-deepseek-agent](https://github.com/deepseek-ai/awesome-deepseek-agent) | 官方 Agent 精选列表 | 5958 |  |
| [awesome-dsh-plugin/awesome-dsh-plugin](https://github.com/awesome-dsh-plugin/awesome-dsh-plugin) | 社区精选列表（105 插件 + 站点 + 徽章） | 10555 |  |
| [bruc3van/awesome-dsh-plugin](https://github.com/bruc3van/awesome-dsh-plugin) | 「30 秒找到适合你的插件」，带场景说明 + 505 全量快照 | 257 |  |
| [0xsline/awesome-deepseek-harness](https://github.com/0xsline/awesome-deepseek-harness) | DSH 生态精选：插件/工具/基础设施 | 766 |  |
| [AdamPlatin123/awesome-dsh-plugins](https://github.com/AdamPlatin123/awesome-dsh-plugins) | 目录 + **每日兼容性雷达**（四维检查 + 运行实测） | 1279 |  |
| [Alex-Yanggg/awesome-DSH-plugin](https://github.com/Alex-Yanggg/awesome-DSH-plugin) | 覆盖生产力/扩展/调试/自定义开发的分类 catalog | 76 |  |
| [HenryZ838978/deepseek-harness](https://github.com/HenryZ838978/deepseek-harness) | 第三方 Harness：Python 库 + dsh CLI + MCP server + SKILL.md | 45 |  |
| [vvlife/whalehub-dsh](https://github.com/vvlife/whalehub-dsh) | 第三方插件商店/中心 | 6 |  |
| [plugin-template](https://github.com/omdsh-dev/plugin-template) | 插件模板仓库（基于 turtle-ui） | 11 | `dsh plugin add @your-scope/dsh-plugin-template` |

[↩ 回到 🏛️ 官方核心与元项目 分类页](plugins/official-meta.md)
