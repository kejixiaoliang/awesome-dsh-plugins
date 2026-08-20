<div align="center">

# 🐋 Awesome DeepSeek Harness Plugins

**A curated directory of 299+ [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness) (`dsh`) plugins across 14 categories — every entry with ⭐ stars and a `dsh plugin add` command. Bilingual (EN + 中文), machine-readable data, auto-sync CI.**

![plugins](https://img.shields.io/badge/plugins-299-blue) ![categories](https://img.shields.io/badge/categories-14-blue) ![license](https://img.shields.io/badge/license-MIT-green) ![PRs](https://img.shields.io/badge/PRs-welcome-brightgreen)

**English** · [中文版](README.zh.md)

[Quick Start](#quick-start) · [Hot Plugins](#hot-plugins) · [Categories](#categories) · [Browse All](#browse-all-plugins) · [Full Index](INDEX.md) · [Contributing](CONTRIBUTING.md)

</div>

---

## 🧭 What is this

[DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness) is DeepSeek's open-source agent harness — a ready-to-run coding agent whose core is an "**everything is a plugin**" framework: models, tools, sandboxes, session storage, the UI, and even the agent loop itself are plugins.

This repository is a **community-maintained plugin index**: it organizes DSH plugins scattered across GitHub into browsable categories. No website, no runtime — just a readable, clickable, contributable directory.

- ✅ Official install: `dsh plugin --profile <name> add <pkg>` (forwards to pnpm; npm / git / tarball)
- ✅ Official discovery: npm + the GitHub [`dsh-plugin`](https://github.com/topics/dsh-plugin) topic (**no built-in marketplace**)

## ✨ Why this directory

Several `awesome-dsh-*` lists already exist. This one is different:

- **14 hand-curated categories** with clear boundaries ([taxonomy](docs/taxonomy.md)) — not a flat name dump
- **Star counts + install commands** on every entry — judge popularity and install in one glance
- **Bilingual** (English primary + 中文) with a one-click toggle
- **Inline collapsible browsing** — expand every category right here in the README
- **Machine-readable data** ([web/data.js](web/data.js)) + generation scripts + auto-sync CI

## ⚡ Quick Start

Three ways to use this directory:

1. **Browse** — expand any category below (or jump into a category file); each entry links straight to its GitHub repo.
2. **Search** — press `t` (or `Ctrl+F`) on the repo page and search keywords like `mcp`, `memory`, `TUI`, `multi-agent`.
3. **Consume programmatically** — read [`web/data.js`](web/data.js) (generated from the category files; see [web/README.md](web/README.md)).

## 🔥 Hot Plugins

Top community plugins by GitHub stars:

<!-- hot:start -->

| # | Plugin | Description | ⭐ |
|---|---|---|---|
| 🥇 | [deepseek-ai/deepseek-harness](https://github.com/deepseek-ai/deepseek-harness) | Official core repo: "everything is a plugin", driven by Cordis. | 172439 |
| 🥈 | [deepseek-harness-desktop](https://github.com/anywhere-labs/deepseek-harness-desktop) | Modern DeepSeek Harness desktop experience | 16317 |
| 🥉 | [awesome-dsh-plugin/awesome-dsh-plugin](https://github.com/awesome-dsh-plugin/awesome-dsh-plugin) | Community curated list (105 plugins + sites + badges). | 10555 |
| 4 | [deepseek-ai/awesome-deepseek-agent](https://github.com/deepseek-ai/awesome-deepseek-agent) | Official curated list of DeepSeek agents. | 5958 |
| 5 | [dsh-web-ui](https://github.com/zhu1090093659/dsh-web-ui) | DSH Web UI plugin and skin collection: task board, Git graph, right panel, mobile remote, skin center | 5126 |
| 6 | [modlens](https://github.com/liustack/modlens) | Vision bridge for text-only models: paste an image, get structured JSON evidence (OCR, layout, semantics). | 3386 |
| 7 | [DSH-better-sidebar](https://github.com/omdsh-dev/DSH-better-sidebar) | Full sidebar workbench with file rendering and editing, terminal, Git, and subagents; third-party plugins can register new tabs. | 2446 |
| 8 | [dsh-TUI](https://github.com/ccch1mneyyy/dsh-TUI) | Claude Code-style full-screen terminal UI: pixel-whale header, live status line, and streaming thought expansion. | 2172 |
| 9 | [deepseek-pp](https://github.com/zhu1090093659/deepseek-pp) | Browser-extension AI agent workspace with built-in MCP and memory | 1641 |
| 10 | [dsh-deep-whale](https://github.com/Small-tailqwq/dsh-deep-whale) | Whale-girl skin series for the DSH Web UI (maid-atelier). | 1505 |

<!-- hot:end -->

## 📊 Stats

| Metric | Value |
|---|---|
| Plugins listed | **299** entries (299 unique) |
| Categories | **14** top-level |
| Ecosystem reference | `dsh-plugin` topic ~3300+ repos · compat radar 286+ |

## 🗂 Categories

<!-- catindex:start -->

| # | Category | Plugins | Description |
|---|---|---|---|
| 1 | [🛠️ Tools](plugins/tools.md) | 30 | deterministic tools, git, test runners, safe delete |
| 2 | [🧩 Skills](plugins/skills.md) | 16 | engineering discipline, skill migration, book-to-skill |
| 3 | [🔌 MCP](plugins/mcp.md) | 8 | MCP server management, webfetch, vision MCP |
| 4 | [🎨 UI / Skins / Themes](plugins/ui-themes.md) | 43 | skins, themes, generative UI, input enhancements |
| 5 | [🖥️ Desktop / TUI / Mobile](plugins/desktop-tui-mobile.md) | 22 | desktop shells, terminal TUI, mobile, companions |
| 6 | [🤖 Agent Orchestration](plugins/agent-orchestration.md) | 10 | agent teams, plan/execute, A2A, cross-session messaging |
| 7 | [🧠 Context / Memory](plugins/context-memory.md) | 24 | long-term memory, context compression/audit, session control |
| 8 | [👁️ Multimodal / Vision](plugins/multimodal.md) | 17 | image Q&A, OCR, screenshots, computer use |
| 9 | [🔁 Workflow / Automation](plugins/workflow-automation.md) | 21 | deep research, cron, condition wakeup, review loops |
| 10 | [📡 Notifications / Channels](plugins/notifications-channels.md) | 18 | Telegram/WeChat/Feishu bots, SSH, desktop notify |
| 11 | [🌐 Browser / Search](plugins/browser-search.md) | 16 | browser control, scraping, search providers |
| 12 | [🏗️ Infra / Plugin Mgmt](plugins/infrastructure-dev.md) | 33 | plugin managers, health checks, sandboxes, telemetry |
| 13 | [🎮 Fun / Other](plugins/fun-other.md) | 31 | games, pets, stickers, learning, design |
| 14 | [🏛️ Official & Meta](plugins/official-meta.md) | 10 | core repo, awesome lists, compat radar, community hub |

<!-- catindex:end -->

## 📚 Browse All Plugins

Expand any category to browse all plugins inline — no need to leave this page.

<!-- categories:start -->

<details>
<summary>🛠️ Tools · 30</summary>

| Plugin | ⭐ | Description | Install |
|---|---|---|---|
| [dsh-toolkit](https://github.com/omdsh-dev/dsh-toolkit) | 23 | Zero-dependency toolkit: time / encoding / json / calculator / csv / regex / markdown / diff / stat / schema — ten deterministic tools in one install. | `dsh plugin add @deepseek-ai/dsh-toolkit` |
| [dsh-tool-calculator](https://github.com/omdsh-dev/dsh-tool-calculator) | 7 | Safe math expression evaluator, zero-dependency recursive-descent parser. | `dsh plugin add @deepseek-ai/dsh-tool-calculator` |
| [dsh-tool-csv](https://github.com/omdsh-dev/dsh-tool-csv) | 4 | Parse/query/aggregate/convert CSV (RFC 4180) with a zero-dependency state-machine parser. | `dsh plugin add @deepseek-ai/dsh-tool-csv` |
| [dsh-tool-diff](https://github.com/omdsh-dev/dsh-tool-diff) | 4 | Structured comparison and unified diffs for text/JSON/CSV/Markdown. | `dsh plugin add @deepseek-ai/dsh-tool-diff` |
| [dsh-tool-encoding](https://github.com/omdsh-dev/dsh-tool-encoding) | 3 | base64/url/hex encoding, common hashes, and UUID generation. | `dsh plugin add @deepseek-ai/dsh-tool-encoding` |
| [dsh-tool-json](https://github.com/omdsh-dev/dsh-tool-json) | 3 | JSON queries with a JMESPath subset. | `dsh plugin add @deepseek-ai/dsh-tool-json` |
| [dsh-tool-markdown](https://github.com/omdsh-dev/dsh-tool-markdown) | 4 | HTML↔Markdown conversion, GFM table normalization, and TOC generation. | `dsh plugin add @deepseek-ai/dsh-tool-markdown` |
| [dsh-tool-regex](https://github.com/omdsh-dev/dsh-tool-regex) | 3 | Test/extract/safe-replace/statically explain regexes without executing code. | `dsh plugin add @deepseek-ai/dsh-tool-regex` |
| [dsh-tool-schema](https://github.com/omdsh-dev/dsh-tool-schema) | 3 | JSON Schema validation: validate/paths/explain/normalize. | `dsh plugin add @deepseek-ai/dsh-tool-schema` |
| [dsh-tool-stat](https://github.com/omdsh-dev/dsh-tool-stat) | 6 | Descriptive statistics, percentiles, frequency distributions, and correlation. | `dsh plugin add @deepseek-ai/dsh-tool-stat` |
| [dsh-tool-time](https://github.com/omdsh-dev/dsh-tool-time) | 4 | Strict ISO 8601 parsing, IANA timezone conversion, and UTC calendar arithmetic. | `dsh plugin add @deepseek-ai/dsh-tool-time` |
| [dsh-tool-git](https://github.com/lxj808624/dsh-tool-git) | 4 | Structured Git tools (status/diff/log/branch/stage/commit/stash/show) with dangerous-command guards | `dsh plugin add dsh-tool-git` |
| [dsh-test-runner](https://github.com/suimi8/dsh-test-runner) | 2 | Structured test_run that auto-detects vitest/jest/pytest/node:test and parses failure summaries | `dsh plugin add dsh-test-runner` |
| [dsh-security-scan](https://github.com/ben7am1n/dsh-security-scan) | 1 | Scans for secrets and dangerous patterns (API keys/tokens/private keys), zero dependencies | `dsh plugin add dsh-security-scan` |
| [dsh-tool-search](https://github.com/vibeinging/dsh-tool-search) | 2 | Per-agent on-demand tool discovery and progressive schema disclosure. | `dsh plugin add @deepseek-ai/dsh-tool-search` |
| [dsh-custom-tool](https://github.com/omdsh-dev/dsh-custom-tool) | 24 | Create and manage sandboxed JavaScript tools with a Monaco editor and model-driven tool lifecycle. | `dsh plugin add dsh-custom-tool` |
| [dsh-bash-encoding](https://github.com/lhh010/dsh-bash-encoding) | 7 | Auto-detects and decodes Bash output encoding (UTF-16LE/UTF-8/GBK), fixing Chinese mojibake |  |
| [dsh-at-file](https://github.com/omdsh-dev/dsh-at-file) | 438 | Codex-style `@file` mentions: search workspace files in the composer and attach their contents to prompts. | `dsh plugin add dsh-at-file` |
| [dsh-wikilink](https://github.com/zhaoscsc/dsh-wikilink) | 3 | Obsidian-style `[[wikilink]]` mentions: fuzzy-search note titles and attach content | `dsh plugin add dsh-wikilink` |
| [dsh-safe-delete](https://github.com/Qintsg/dsh-safe-delete) | 3 | Safe deletion: moves files to trash/staging instead of permanent deletion, supports recovery |  |
| [dsh-bisect-debug](https://github.com/PangYiMing/dsh-bisect-debug) | 1 | Bisects to locate bug root causes (code/boundary/commit) | `dsh plugin add dsh-bisect-debug` |
| [dsh-payload-capture](https://github.com/Moeblack/dsh-payload-capture) | 1 | Captures every upstream model API payload to disk as JSON (debug/observability) | `dsh plugin add dsh-payload-capture` |
| [dsh-data-agent](https://github.com/omdsh-dev/dsh-data-agent) | 101 | Let the AI connect to databases and write SQL for you. | `dsh plugin add @deepseek-ai/dsh-data-agent` |
| [dsh-openapi](https://github.com/Degurechaff57/dsh-openapi) | 4 | Safe OpenAPI 3.x discovery and API invocation tool | `dsh plugin add dsh-openapi` |
| [dsh-plugin-interpreters](https://github.com/HuanLinOTO/dsh-plugin-interpreters) | 9 | Exposes run_python / run_node tools with configurable interpreter paths | `dsh plugin add @huanlin/dsh-plugin-interpreters` |
| [dsh-cowork](https://github.com/Jesse-njx/dsh-cowork) | 6 | Bounded, cell-addressed `doc_read`/`doc_write` for xlsx / pdf / docx / pptx / ipynb, plus an MCP server and CLI. |  |
| [dsh-plugin-mineru](https://github.com/HuanLinOTO/dsh-plugin-mineru) | 38 | Expose MineRU document parsing tools to the model. | `dsh plugin add @huanlin/dsh-plugin-mineru` |
| [dsh-plugin-sleep](https://github.com/HuanLinOTO/dsh-plugin-sleep) | 9 | Exposes a single `sleep` tool for on-demand pauses (cancelable) | `dsh plugin add @huanlin/dsh-plugin-sleep` |
| [dsh-port-guard](https://github.com/PangYiMing/dsh-port-guard) | 1 | Port conflict handling (reuse/switch/precise kill) | `dsh plugin add dsh-port-guard` |
| [dsh-scout](https://github.com/omdsh-dev/dsh-scout) | 2 | Read-only environment probing: runtime/versions/resources/ports/services/hardware/workspace | `dsh plugin add @deepseek-ai/dsh-tool-scout` |

</details>

<details>
<summary>🧩 Skills · 16</summary>

| Plugin | ⭐ | Description | Install |
|---|---|---|---|
| [dsh-review-skills](https://github.com/ben7am1n/dsh-review-skills) | 2 | Engineering discipline skill pack: code-review/simplify/plan-then-execute/test-first/resolve-conflict | `dsh plugin add dsh-review-skills` |
| [dsh-skillport](https://github.com/Jesse-njx/dsh-skillport) | 2 | Bring your existing Agent Skills (SKILL.md) library to DSH: discover skills across Claude/Codex/Cursor/Gemini paths, inject a progressive-disclosure index, and load bodies on demand. | `dsh plugin add @dsh-skillport/bundle` |
| [dsh-find-skill](https://github.com/Moximxxx/dsh-find-skill) | 2 | Bridges vercel-labs/skills ecosystem: LLM-driven skill search/install/lifecycle management | `dsh plugin add dsh-find-skill` |
| [dsh-plugin-skills](https://github.com/omdsh-dev/dsh-plugin-skills) | 11 | Agent skills for building and testing DSH plugins (scaffolding to layered testing) |  |
| [dsh-book2skill](https://github.com/omdsh-dev/dsh-book2skill) | 4 | Five-stage book-to-skill pipeline (scrape→parse→understand→generate→install) with 3 human checkpoints | `dsh plugin add dsh-book2skill` |
| [dsh-superpowers](https://github.com/codeAnqiang-ma/dsh-superpowers) | 3 | Superpowers (obra/superpowers) as DSH plugin: methodology skills + session guidance | `dsh plugin add dsh-superpowers` |
| [dsh-plugin-code-review](https://github.com/YYTbit/dsh-plugin-code-review) | 1 | Structured code review skills (YYTbit series) | `dsh plugin add dsh-plugin-code-review` |
| [dsh-review-loop](https://github.com/wuxiangru915/dsh-review-loop) | 2 | Incremental diff review: checkpoint queue + web panel + review-feedback injection agent | `dsh plugin add @dsh-plugin/dsh-review-loop` |
| [dsh-plugin-claude-bridge](https://github.com/YYTbit/dsh-plugin-claude-bridge) | 9 | Bridges Claude Code memory/skills/config into DSH | `dsh plugin add dsh-plugin-claude-bridge` |
| [dsh-plugin-codex-bridge](https://github.com/YYTbit/dsh-plugin-codex-bridge) | 2 | Bridges Codex skills/config into DSH | `dsh plugin add dsh-plugin-codex-bridge` |
| [dsh-plugin-opencode-bridge](https://github.com/YYTbit/dsh-plugin-opencode-bridge) | 4 | Bridges OpenCode skills/config into DSH | `dsh plugin add dsh-plugin-opencode-bridge` |
| [dsh-plugin-pi-bridge](https://github.com/YYTbit/dsh-plugin-pi-bridge) | 2 | Bridges pi skills/config into DSH | `dsh plugin add dsh-plugin-pi-bridge` |
| [Code2Skill](https://github.com/leechen298/Code2Skill) | 7 | Generate Functions, MCP tools, workflow Skills, and offline test packages from user-authorized source code. | `dsh plugin add github:leechen298/Code2Skill#v1.1.3` |
| [dsh-reverse-skill](https://github.com/dhicoc/dsh-reverse-skill) | 53 | Complete reverse-skill pack (85 SKILL.md) as a DeepSeek Harness Cordis plugin: reverse engineering, authorized pentesting and security-research skill router. | `dsh plugin add github:dhicoc/dsh-reverse-skill` |
| [dsh-find-plugins](https://github.com/Nagi-ovo/dsh-find-plugins) | 159 | Skill that searches, installs, and verifies GitHub plugins for DSH | `dsh plugin add github:Nagi-ovo/dsh-find-plugins` |
| [forkprobe](https://github.com/Jayden-X-L/forkprobe) | 69 | Compare multiple skills on the same task and pick the winner. | `dsh plugin add github:Jayden-X-L/forkprobe` |

</details>

<details>
<summary>🔌 MCP · 8</summary>

| Plugin | ⭐ | Description | Install |
|---|---|---|---|
| [dsh-mcp-proxy](https://github.com/ben7am1n/dsh-mcp-proxy) | 1 | Context-saving lazy MCP access | `dsh plugin add dsh-mcp-proxy` |
| [deepseek-harness-plugin-mcp](https://github.com/bobleer/deepseek-harness-plugin-mcp) | 3 | MCP server letting any agent discover/install/run DSH plugins | `dsh plugin add deepseek-harness-plugin-mcp` |
| [dsh-webfetch](https://github.com/withlovehub/dsh-webfetch) | 3 | Zero-dependency webfetch MCP server (clean text/markdown/HTML/JSON, robots.txt compliant, SSRF protection) |  |
| [dsh-search-mcp](https://github.com/gxpppp/dsh-search-mcp) | 11 | Replaces built-in search with search MCP (Tavily/Brave/Exa/Perplexity/DuckDuckGo) | `dsh plugin add dsh-search-mcp` |
| [dsh-oauth-mcp-client](https://github.com/springbrand-lab/dsh-oauth-mcp-client) | 8 | Connects to OAuth 2.1 Streamable HTTP MCP services |  |
| [shadow-vision](https://github.com/WardLu/shadow-vision) | 2 | Open-source MCP vision server giving text-only LLMs image understanding/OCR/UI inspection |  |
| [mcp-bridge](https://github.com/WongJingGitt/mcp-bridge) | 33 | MCP browser bridge enabling web AI to call MCP tools |  |
| [dsh-acp-for-bitfun](https://github.com/bobleer/dsh-acp-for-bitfun) | 10 | ACP bridge between BitFun and DSH. | `dsh plugin add dsh-acp-for-bitfun` |

</details>

<details>
<summary>🎨 UI / Skins / Themes · 43</summary>

| Plugin | ⭐ | Description | Install |
|---|---|---|---|
| [dsh-skins](https://github.com/Moeblack/dsh-skins) | 3 | Web UI skin collection (including the harbor sunset skin) | `dsh plugin add @dsh-external/dsh-web-skins` |
| [dsh-deep-whale](https://github.com/Small-tailqwq/dsh-deep-whale) | 1505 | Whale-girl skin series for the DSH Web UI (maid-atelier). |  |
| [dsh-qq2006](https://github.com/LaplaceYoung/dsh-qq2006) | 19 | QQ2006 retro skin |  |
| [dsh-miku-skin](https://github.com/stushansusu/dsh-miku-skin) | 2 | Hatsune Miku theme (blue-purple gradient/frosted glass/light-dark dual theme) | `dsh plugin add @deepseek-ai/dsh-client-ui-skin-miku` |
| [dsh-deepcel](https://github.com/Small-tailqwq/dsh-deepcel) | 12 | An Excel-style skin |  |
| [dsh-tonghuashun](https://github.com/AdamPlatin123/dsh-tonghuashun) | 3 | Tonghuashun market-terminal style skin + code-volume K-line panel |  |
| [dsh-plugin-colorscheme](https://github.com/Civitasv/dsh-plugin-colorscheme) | 2 | Color scheme plugin |  |
| [dsh-custom-css](https://github.com/AnacondaKC/dsh-custom-css) | 3 | Custom CSS | `dsh plugin add dsh-custom-css` |
| [dsh-web-background](https://github.com/BruceWu1126/dsh-web-background) | 2 | Web UI background customization |  |
| [dsh-plugin-background](https://github.com/gameswu/dsh-plugin-background) | 11 | Web UI wallpaper customization |  |
| [dsh-chat-width](https://github.com/chen-001/dsh-chat-width) | 5 | Adjusts reply width (terminal-width aware) |  |
| [deepseek-harness-skin](https://github.com/HeiGeAi/deepseek-harness-skin) | 49 | Skinning system with 21 built-in skins plus one-image color scheme generation |  |
| [dsh-homepage-skin](https://github.com/yushi-xxh/dsh-homepage-skin) | 1 | Puts the DeepSeek Harness homepage-style background on dsh web: WebGL fluid, dot grid and digital whale, in dark and light themes. |  |
| [DSH-better-sidebar](https://github.com/omdsh-dev/DSH-better-sidebar) | 2446 | Full sidebar workbench with file rendering and editing, terminal, Git, and subagents; third-party plugins can register new tabs. | `dsh plugin add dsh-better-sidebar` |
| [dsh-side-panel](https://github.com/ccq1/dsh-side-panel) | 16 | Side panel with file browser, terminal, and Git review for quick file previews. | `dsh plugin add @dsh-external/dsh-side-panel` |
| [dsh-focus-chat](https://github.com/dingyi222666/dsh-focus-chat) | 21 | A "focus chat" minimal view that shows only final outputs. | `dsh plugin add @dingyi222666/dsh-focus-chat` |
| [ui-status-label](https://github.com/alingalingling/ui-status-label) | 38 | Customize the "deep diving" thinking status label to anything you like. | `dsh plugin add dsh-ui-status-label` |
| [dsh-navbar](https://github.com/vlln/dsh-navbar) | 50 | Conversation node navigation bar for quick jumps between user messages. | `dsh plugin add @dsh-external/dsh-navbar` |
| [dsh-task-status](https://github.com/vlln/dsh-task-status) | 9 | Background task status bar: progress plus live output tail on the chat page. | `dsh plugin add @dsh-external/dsh-task-status` |
| [dsh-web-archive](https://github.com/renat3u/dsh-web-archive) | 7 | Collapse noisy messages (Think, Bash, etc.) in conversations. | `dsh plugin add dsh-web-archive` |
| [dsh-milestone](https://github.com/SnowCrescenter-tech/dsh-milestone) | 17 | Right-side dot-timeline rail: jump between user messages. | `dsh plugin add dsh-milestone` |
| [dsh-spotlight](https://github.com/0xsline/dsh-spotlight) | 10 | Keyboard-first command palette for the DSH Web UI. | `dsh plugin add @dsh-external/dsh-spotlight` |
| [dsh-deeplink](https://github.com/qyw233/dsh-deeplink) | 4 | Deep links: open a specific session or workspace via `?session=` / `?workspace=`. | `dsh plugin add @dsh-community/dsh-deeplink` |
| [dsh-diff-viewer](https://github.com/lehhair/dsh-diff-viewer) | 23 | PiUI-style diff viewer replacing the stock DiffBlock for write/edit tool calls. | `dsh plugin add @dsh-external/dsh-diff-viewer` |
| [dsh-drag-and-drop](https://github.com/bill9109/dsh-drag-and-drop) | 19 | Cross-platform file drag-and-drop with raw path insertion, no file copying. | `dsh plugin add @bill9109/dsh-drag-and-drop` |
| [ex-setting](https://github.com/omdsh-dev/ex-setting) | 2 | Settings extensions for DSH. | `dsh plugin add @deepseek-ai/dsh-ex-setting` |
| [dsh-annotation](https://github.com/omdsh-dev/dsh-annotation) | 81 | Select text → annotate → send with your message; replies map back to each annotation. | `dsh plugin add @omdsh-dev/dsh-annotation` |
| [dsh-prompt-studio](https://github.com/Moeblack/dsh-prompt-studio) | 3 | Edit user and built-in system-prompt sections with live preview. | `dsh plugin add dsh-prompt-studio` |
| [dsh-prompt-persona](https://github.com/Xilin3/dsh-prompt-persona) | 11 | Edit the system prompt (deployment persona) from settings with live preview | `dsh plugin add @xilin3/dsh-prompt-persona` |
| [dsh-local-filetree](https://github.com/Mongfayi/dsh-local-filetree) | 1 | Show the current session workspace file tree in the right detail column (lazy-loaded, read-only) | `dsh plugin add dsh-local-filetree` |
| [dsh-sticky-disclosure](https://github.com/Han-1413141/dsh-sticky-disclosure) | 3 | One-click collapse of every expanded section (Think rows, tool cards) with a live-count pill and a customizable hotkey. | `dsh plugin add dsh-sticky-disclosure` |
| [dsh-token-usage](https://github.com/hashdiana/dsh-token-usage) | 3 | Prettier token usage bar: context, input/output, cache breakdown, time-to-first-token | `dsh plugin add dsh-token-usage` |
| [TokenLedger](https://github.com/zh667/TokenLedger) | 118 | Track local DSH token usage by relay site, project and model, and show account balance and subscription quota cycles. |  |
| [dsh-web-billing](https://github.com/bpc-oss/dsh-web-billing) | 11 | RMB/USD token billing: official peak/off-peak auto pricing, per-provider/source cost grouping, budget and balance views, CSV/JSON export. |  |
| [dsh-model-config-sync](https://github.com/LiangYin233/dsh-provider-model-configurator) | 11 | Advanced model configurator applying pi-ai presets to custom providers in one click | `dsh plugin add dsh-model-config-sync` |
| [dsh-web-ui](https://github.com/zhu1090093659/dsh-web-ui) | 5126 | DSH Web UI plugin and skin collection: task board, Git graph, right panel, mobile remote, skin center | `dsh plugin add dsh-web-ui` |
| [dsh-plugin-open-app](https://github.com/2nd1st/dsh-plugin-open-app) | 4 | Brings open-mcp-apps into DSH: one sidebar container per MCP app (own workspace, session and App mode), an agent status strip, inline chat rendering and an App Store. |  |
| [dsh-ui-hub](https://github.com/Han-1413141/dsh-ui-hub) | 3 | UI butler: fold and toggle official/plugin UI by section, drag to move and resize, with collision avoidance and one-click auto layout. |  |
| [dsh-what-changed](https://github.com/sjh9714/dsh-what-changed) | 2 | Session top bar summarizing the whole session's changes: every file the agent wrote and each edit, with permission-denied writes counted separately. |  |
| [dsh-visualize](https://github.com/Nagi-ovo/dsh-visualize) | 190 | In-conversation generative UI: the model renders interactive HTML cards into the chat stream, with streaming preview and sandboxed rendering. | `dsh plugin add @dsh-external/dsh-visualize` |
| [dsh-genui](https://github.com/omdsh-dev/dsh-genui) | 263 | Interactive UI components rendered inline in replies: layout, charts, forms, quizzes, mermaid, 3D scenes, and an action event loop back to the model. | `dsh plugin add @omdsh-dev/dsh-genui` |
| [web-components](https://github.com/omdsh-dev/web-components) | 2 | Web Components support. | `dsh plugin add @deepseek-ai/dsh-client-web-component` |
| [dsh-openpencil](https://github.com/ZSeven-W/dsh-openpencil) | 128 | OpenPencil design preview and editing plugin. | `dsh plugin add @zseven-w/dsh-openpencil` |

</details>

<details>
<summary>🖥️ Desktop / TUI / Mobile · 22</summary>

| Plugin | ⭐ | Description | Install |
|---|---|---|---|
| [dsh-TUI](https://github.com/ccch1mneyyy/dsh-TUI) | 2172 | Claude Code-style full-screen terminal UI: pixel-whale header, live status line, and streaming thought expansion. | `dsh plugin add dsh-cc-tui` |
| [dsh-tianshu-tui](https://github.com/huiliyi37/dsh-tianshu-tui) | 224 | A terminal UI (TUI) for DeepSeek Harness. | `dsh plugin add @huiliyi37/dsh-tianshu-tui` |
| [dsh-pi-tui](https://github.com/lqhl/dsh-pi-tui) | 2 | Pi TUI frontend: streaming markdown, thinking collapse, tool cards, slash commands |  |
| [deepseek-harness-tui](https://github.com/gxinxing/deepseek-harness-tui) | 7 | Native terminal TUI built with Ink/React | `dsh plugin add deepseek-harness-tui` |
| [dsh-tui](https://github.com/orriduck/dsh-tui) | 3 | Lightweight, session-aware terminal UI | `dsh plugin add dsh-tui` |
| [dsh-tui](https://github.com/dsh-tui/dsh-tui) | 23 | Claude Code-style terminal UI (out-of-tree bundle) | `dsh plugin add @dsh-tui/dsh-tui` |
| [oh-dsh](https://github.com/hust-open-atom-club/oh-dsh) | 255 | Community distribution: TUI, desktop, and Web UI as one bundle with layered installation. | `dsh plugin add @oh-dsh/desktop` |
| [deepseek-harness-desktop](https://github.com/chyra-moon/deepseek-harness-desktop) | 11 | Native Windows desktop shell: 1:1 official Web UI, built-in server hosting, tray residency |  |
| [deepseek-harness-desktop](https://github.com/Easyhoov/deepseek-harness-desktop-windows) | 3 | Unofficial in-process Windows desktop app (tray, native notifications, IPC) |  |
| [dsh-desktop](https://github.com/bruc3van/dsh-desktop) | 65 | Community-maintained unofficial desktop client (reuse official instance or built-in runtime) |  |
| [dsh-desktop](https://github.com/zsyu9779/dsh-desktop) | 7 | Wails (Go) desktop shell, Codex-style native app |  |
| [dsh-desktop](https://github.com/mrbbbaixue/dsh-desktop) | 2 | .NET 10 WPF + WebView2 desktop launcher |  |
| [dsh-desktop](https://github.com/dataelement/dsh-desktop) | 1305 | Cross-platform desktop app |  |
| [dsh-desktop-electron](https://github.com/Void0312Aurora/dsh-desktop-electron) | 5 | Cross-platform Electron desktop shell (tray resident, no bundled Node) |  |
| [dsh-desktop-window](https://github.com/fengzhiyushui/dsh-desktop-window) | 1 | Open the Web UI in a standalone app window (auto-launch + settings toggle) | `dsh plugin add dsh-desktop-window` |
| [deepseek-harness-desktop](https://github.com/anywhere-labs/deepseek-harness-desktop) | 16317 | Modern DeepSeek Harness desktop experience |  |
| [Deepseek-Harness-Desktop](https://github.com/ChisaAlter/Deepseek-Harness-Desktop) | 127 | Electron desktop shell with themes, wallpapers, and tray; chat stays on official dsh web | `dsh plugin add deepseek-harness-desktop` |
| [dsh-launcher](https://github.com/Ruler4396/dsh-launcher) | 161 | Lightweight Windows launcher: auto-start on boot + standalone small window |  |
| [dsh-work](https://github.com/vibeinging/deepseek-harness-desktop-app) | 606 | Local AI workspace: unified Session, files, data analysis, MCP, and Office |  |
| [dsh-companion](https://github.com/william-jin-cmu/dsh-companion) | 5 | Resident desktop assistant: global summon, scheduled automation, quick replies, plugin marketplace |  |
| [dsh-mobile](https://github.com/lehhair/dsh-mobile) | 20 | Mobile client (⚠️ dsh-external, public availability unverified) |  |
| [deepseek-harness-tui](https://github.com/openma-ai/deepseek-harness-tui) | 45 | A Rust/ratatui terminal client that speaks the DSH SDK JSON-RPC protocol directly and runs standalone or as a profile bundle. | `dsh plugin add github:openma-ai/deepseek-harness-tui` |

</details>

<details>
<summary>🤖 Agent Orchestration · 10</summary>

| Plugin | ⭐ | Description | Install |
|---|---|---|---|
| [dsh-agent-teams](https://github.com/NanmiCoder/dsh-agent-teams) | 679 | AgentTeams multi-agent teams. | `dsh plugin add dsh-agent-teams` |
| [dsh_workflow](https://github.com/icetomoyo/dsh_workflow) | 90 | UltraCode-style multi-agent orchestration: a generatable, savable, governable, observable, resumable workflow layer. | `dsh plugin add @dsh-external/workflow` |
| [dsh-meta-orchestrator](https://github.com/jiruidai/dsh-meta-orchestrator) | 3 | Model-native meta-agent synthesizing task-specific workflows at runtime and coordinating tools/subagents | `dsh plugin add dsh-meta-orchestrator` |
| [dsh-crosstalk](https://github.com/Jesse-njx/dsh-crosstalk) | 2 | Cross-session messaging for DSH: any session on the machine can list and message any other, Claude Code-style, via a local heartbeat registry and inbox. | `dsh plugin add @dsh-crosstalk/bundle` |
| [dsh-agent-messaging](https://github.com/happyren/dsh-agent-messaging) | 4 | Cross-session agent-to-agent message delivery (addressed by session name) | `dsh plugin add dsh-agent-messaging` |
| [dsh-interconnect](https://github.com/Chinesezjc/dsh-interconnect) | 34 | Cross-instance message and event handoff between DSH instances via an interconnect server. | `dsh plugin add dsh-interconnect` |
| [dsh-session-hub](https://github.com/Asaiuta/dsh-session-hub) | 4 | Aggregate and natively control DSH sessions across servers (hub gateway + official UI bridge) | `dsh plugin add dsh-session-hub` |
| [dsh-plugin-yet-another-subagent](https://github.com/HuanLinOTO/dsh-plugin-yet-another-subagent) | 11 | Configurable subagent profiles plus live tool-call/token display and sub-session jump | `dsh plugin add @huanlin/dsh-plugin-yet-another-subagent` |
| [dsh-a2a](https://github.com/dpskh/dsh-a2a) | 5 | Agent2Agent mesh interconnection ⚠️ dsh-external, public availability unverified |  |
| [dph-fleet](https://github.com/polaris-smart/dph-fleet) | 4 | Decentralized multi-device fleet: mDNS discovery + key pairing + SSH cross-network control; any device can dispatch or accept tasks (zero npm dependencies). | `dsh plugin add dph-fleet-0.2.4.tgz` |

</details>

<details>
<summary>🧠 Context / Memory · 24</summary>

| Plugin | ⭐ | Description | Install |
|---|---|---|---|
| [dsh-memory-evolve](https://github.com/csyangwen/dsh-memory-evolve) | 205 | Cross-session long-term memory plus background self-evolution (five-track memory, git branch awareness, skill evolution) |  |
| [billion-context-dsh](https://github.com/Tyan66666/billion-context-dsh) | 31 | Model-driven context compression (ACP) where the model decides when to compress (ported from billion-context-pi) |  |
| [dsh-memory](https://github.com/Jesse-njx/dsh-memory) | 2 | Cited memory over DSH's lossless session log: distilled facts carry `(sessionId, eventRange)` citations that expand back to the exact original log excerpt. | `dsh plugin add @dsh-memory/bundle` |
| [dsh-memory](https://github.com/ben7am1n/dsh-memory) | 1 | Cross-session SQLite persistent memory | `dsh plugin add dsh-memory` |
| [dsh-mnemon](https://github.com/omdsh-dev/dsh-mnemon) | 135 | Deep Mnemon integration: local three-tier memory (Runtime Memory, retrievable Documents, supervised Memory Spaces). | `dsh plugin add dsh-mnemon` |
| [nowledge-mem-deepseek-harness](https://github.com/nowledge-co/nowledge-mem-deepseek-harness) | 5 | One memory layer for every AI tool and agent: Context Bundle injection, prompt-time recall, MCP tools, and turn-end DSH thread capture. | `dsh plugin add nowledge-mem-deepseek-harness` |
| [dsh-plugin-meta-memory](https://github.com/YYTbit/dsh-plugin-meta-memory) | 3 | Structured long-term memory system | `dsh plugin add dsh-plugin-meta-memory` |
| [dsh-kb-sieve](https://github.com/omdsh-dev/dsh-kb-sieve) | 2 | Build auditable KB packs (SQLite FTS5) from md/txt/docx/pdf with deterministic retrieval and original-text reading. | `dsh plugin add @dsh-external/dsh-kb-sieve` |
| [dsh-llm-wiki](https://github.com/detpecca/dsh-llm-wiki) | 4 | Manage the LLM-Wiki knowledge base from an agent (wiki_search/read/stats/ingest, etc.) | `dsh plugin add @detpecca/dsh-llm-wiki` |
| [dsh-continual-evolve](https://github.com/ZK-Andy/dsh-continual-evolve) | 15 | Continual self-evolution: versioned, auditable, rollback-safe harness state (prompts, memory, skills, subagent specs) refined from session trajectories, with review gates and hot-reloaded skills. | `dsh plugin add dsh-continual-evolve` |
| [dsh-meow-memory](https://github.com/Phant0Meow/dsh-meow-memory) | 27 | Cross-session project memory: layered SQLite storage with keyword/semantic retrieval, per-message hit injection and windowed consolidation. | `dsh plugin add github:Phant0Meow/dsh-meow-memory` |
| [dsh-context-doctor](https://github.com/Zhenyu98/dsh-context-doctor) | 16 | Context injection audit: token costs of instruction chains / skill catalogs / tool schemas, duplicate and conflict detection. | `dsh plugin add dsh-context-doctor` |
| [context-vista](https://github.com/GooodWei/context-vista) | 10 | A right-side floating panel and /context command for DeepSeek Harness — a live donut chart of context token usage, allocation, and estimated cost. | `dsh plugin add context-vista` |
| [distill](https://github.com/LoserFox/distill) | 20 | Automatic conversation distillation: background subagent reflection + skill create/update. | `dsh plugin add @loserfox/distill` |
| [dsh-auto-compact](https://github.com/wangxiang0605qvq/dsh-auto-compact) |  | compact_now tool that auto-compacts context at turn end |  |
| [dsh-context](https://github.com/bowenliang123/dsh-context) | 599 | Context insight panel: see what the model's context window is made of and how it evolves — composition vs. window size, per-request history, compression/injection events, and per-message token stats. | `dsh plugin add dsh-context` |
| [dsh-turn-rewind](https://github.com/Anionex/dsh-turn-rewind) | 91 | Rewind conversation and workspace state, powered by a persistent Change Ledger. | `dsh plugin add @dsh-external/turn-rewind` |
| [dsh-undo](https://github.com/LingLambda/dsh-undo) | 4 | Context undo/redo: roll back to the previous completed step and restore | `dsh plugin add dsh-undo` |
| [dsh-recall](https://github.com/Mongfayi/dsh-recall) | 3 | Message recall: an undo button per user message deleting that turn and everything after (no code changes) | `dsh plugin add dsh-recall` |
| [dsh-sidechain](https://github.com/omdsh-dev/dsh-sidechain) | 10 | `/side` persistent side sessions and `/btw` one-off side questions running in temporary forks | `dsh plugin add @dsh-external/dsh-sidechain` |
| [dsh-message-edit](https://github.com/Moeblack/dsh-message-edit) | 35 | Branch-based message editing, reroll, retry, and a version timeline. | `dsh plugin add dsh-message-edit` |
| [dsh-session-search](https://github.com/Tieboyh/dsh-session-search) | 2 | Index-free full-text search across dsh/Codex/Claude/pi/OpenCode sessions |  |
| [dsh-chat-import](https://github.com/Nwflower/dsh-chat-import) | 85 | Import full-fidelity chat histories from 13 coding agents (Claude Code, Codex, ChatGPT, Cursor, Gemini, opencode, and more) as resumable DeepSeek Harness sessions, with reverse export back to Claude Code. | `dsh plugin add dsh-chat-import` |
| [dsh-claude-move](https://github.com/PerryLink/dsh-claude-move) | 6 | Migrate Claude Code sessions/memory/skills/CLAUDE.md to DSH | `dsh plugin add dsh-claude-move` |

</details>

<details>
<summary>👁️ Multimodal / Vision · 17</summary>

| Plugin | ⭐ | Description | Install |
|---|---|---|---|
| [modlens](https://github.com/liustack/modlens) | 3386 | Vision bridge for text-only models: paste an image, get structured JSON evidence (OCR, layout, semantics). | `dsh plugin add @liustack/modlens` |
| [dsh-vision-toolkit](https://github.com/Anionex/dsh-vision-toolkit) | 783 | Vision tasks for text-only models: intent-aware image Q&A, long-screenshot OCR, UI reproduction, grounding, and pixel diff. | `dsh plugin add @dsh-external/dsh-vision-toolkit` |
| [agent-vision-toolkit](https://github.com/Anionex/agent-vision-toolkit) | 1082 | General agent vision toolkit and skills (multi-image understanding and GUI automation) |  |
| [dsh-vision](https://github.com/william-jin-cmu/dsh-vision) | 36 | view_image tool bridging any OpenAI-compatible VLM (defaults to Zhipu's free tier) |  |
| [dsh-vision-LMstudio](https://github.com/TiankunDai/dsh-vision-LMstudio) | 1 | Call local vision models via LM Studio |  |
| [dsh-vision-proxy](https://github.com/Flyvhidbwo/dsh-vision-proxy) | 11 | DeepSeek brain + automatic image transcription: attach images in the GUI and each one is transcribed to text via any OpenAI-compatible VLM before reaching the text-only DeepSeek — a keyed fast path (default qwen3.7-flash; DashScope/Zhipu/OpenRouter or any OpenAI-compatible endpoint) with your own key, or local Ollama auto-detected with zero config. | `dsh plugin add dsh-vision-proxy` |
| [dsh-plugin-deepeye](https://github.com/Favio8/dsh-plugin-deepeye) | 4 | DeepEye vision plugin: image description, OCR, VQA, UI layout, and clipboard analysis | `dsh plugin add dsh-plugin-deepeye` |
| [deepseek-omnimodal](https://github.com/good-boy4069/Deepseek-omnimodal) | 5 | Open-source multimodal MCP plugin recognizing/generating images, video, and audio via Qwen/DashScope (compatible with Codex/Claude Code/DSH) |  |
| [sidesight](https://github.com/ZhuXinAI/sidesight) | 1 | CLI-first vision sidecar analyzing screenshots, charts, UI diffs, and video (OpenAI-compatible multimodal models) | `dsh plugin add sidesight` |
| [dsh-paddle-ocr](https://github.com/omdsh-dev/dsh-paddle-ocr) | 3 | Baidu PaddleOCR-VL document layout parsing (OCR tool plus settings card and task panel) | `dsh plugin add dsh-paddle-ocr` |
| [dsh-screenshot-diff](https://github.com/PangYiMing/dsh-screenshot-diff) | 1 | Pixel-compare two screenshots to generate diff.png plus a three-panel image (pixelmatch) | `dsh plugin add dsh-screenshot-diff` |
| [Qwen-MM-Plugins](https://github.com/omdsh-dev/Qwen-MM-Plugins) | 5 | Qwen multi-modal plugin support. | `dsh plugin add @deepseek-ai/dsh-qwen-mm` |
| [dsh-computer-use](https://github.com/Anionex/dsh-computer-use) | 26 | Accessibility-first macOS computer use: fresh observations, stale-state rejection, scoped permissions, and safe input. | `dsh plugin add @dsh-external/dsh-computer-use` |
| [dsh-mobile-control](https://github.com/PangYiMing/dsh-mobile-control) | 3 | Control phones (ADB/iOS) | `dsh plugin add dsh-mobile-control` |
| [dsh-hdc-bridge](https://github.com/1na-ko/dsh-hdc-bridge) | 11 | HarmonyOS device bridge: hdc screenshot/install/log/crash/UI automation loop with read_image, official-first versioned API knowledge (SDK .d.ts + offline bundled docs), and a DevEco CLI build/sign/lint lane. | `dsh plugin add dsh-hdc-bridge` |
| [dsh-plugin-aigc-canvas](https://github.com/HuanLinOTO/dsh-plugin-aigc-canvas) | 13 | Provider-agnostic AIGC HTTP bridge plus freeform canvas and ffmpeg post-processing | `dsh plugin add @huanlin/dsh-plugin-aigc-canvas` |
| [dsh-vision-router](https://github.com/ysr666/dsh-vision-router) | 893 | Free vision for text-only agents: built-in keyless vision chain plus pixel tools (Q&A, grounding, crop, pixel diff, colors, OCR, SVG trace, cutout, screenshots); paste an image to use it. | `dsh plugin add dsh-vision-router` |

</details>

<details>
<summary>🔁 Workflow / Automation · 21</summary>

| Plugin | ⭐ | Description | Install |
|---|---|---|---|
| [dsh-deep-research](https://github.com/omdsh-dev/dsh-deep-research) | 17 | Adaptive deep-research orchestrator built on the official workflow engine. | `dsh plugin add @dsh-external/dsh-deep-research` |
| [dsh-deepresearch](https://github.com/havingautism/dsh-deepresearch) | 9 | Evidence-first autonomous research workflow (persistent state plus standalone web view) | `dsh plugin add @deepseek-ai/dsh-deepresearch` |
| [dsh-loop](https://github.com/vlln/dsh-loop) | 4 | Recurring loops: `/loop` command + loop tool + activity status bar. | `dsh plugin add @dsh-external/dsh-loop` |
| [dsh-sentinel](https://github.com/fuhefei/dsh-sentinel) | 11 | Condition-driven wakeup: durable file/command/http/process/webhook watches that wake the agent. | `dsh plugin add @dsh-external/dsh-sentinel` |
| [dsh-automation](https://github.com/titanwings/dsh-automation) | 69 | Scheduled coding runs in fresh agent sessions with auditable history. | `dsh plugin add @dsh-external/dsh-automation` |
| [dsh-routines](https://github.com/Jesse-njx/dsh-routines) | 1 | Scheduled agents on a cron: run a prompt on a schedule and get the digest where you already are, with overlap/missed-run/timeout safety defaults. | `dsh plugin add @dsh-routines/bundle` |
| [dsh-plannotator](https://github.com/titanwings/dsh-plannotator) | 7 | Plan review with anchored annotations and structured feedback back to the agent. | `dsh plugin add @dsh-external/dsh-plannotator` |
| [dsh-inspect](https://github.com/omdsh-dev/dsh-inspect) | 6 | Adversarial checkup → fix → review loop toolset. | `dsh plugin add @dsh-external/dsh-inspect` |
| [dsh-advisor](https://github.com/omdsh-dev/dsh-advisor) | 15 | A secondary model passively reviews each turn and injects insights | `dsh plugin add dsh-advisor` |
| [mstar-harness](https://github.com/btspoony/mstar-harness) | 52 | Skill-driven harness/loop engineering workflow agent plugin. |  |
| [dsh-llm-fallbacks](https://github.com/omdsh-dev/dsh-llm-fallbacks) | 11 | Role-based model retry/fallback strategies | `dsh plugin add dsh-llm-fallbacks` |
| [dsh-polyglot](https://github.com/Jesse-njx/dsh-polyglot) | 3 | The model switch for DSH: point it at any OpenAI-compatible endpoint, with curated free/cheap DeepSeek provider presets and automatic fallback when a free tier rate-limits you. | `dsh plugin add @dsh-polyglot/bundle` |
| [dsh-track](https://github.com/fakechris/dsh-track) | 6 | Embedded task management engine: decision-point protocol, idea capture wall, Linear-style issue store. | `dsh plugin add @deepseek-ai/dsh-track` |
| [dsh-record-replay](https://github.com/humblebanana/dsh-record-replay) | 11 | Record macOS desktop workflow demos and convert them into agent skills (orr_* tools) | `dsh plugin add dsh-record-replay` |
| [dsh-daily-progress](https://github.com/omdsh-dev/dsh-daily-progress) | 3 | Daily progress: tonight's plan for tomorrow plus today's checklist and completion thermometer | `dsh plugin add dsh-daily-progress` |
| [dsh-goal-mode](https://github.com/KarlOfLaw/dsh-goal-mode-enhance) | 2 | Visualize goal mode: goal bar, settings page, multi-session overview, and goal_overview tool | `dsh plugin add dsh-goal-mode` |
| [dsh-ramify](https://github.com/yanglongyun/dsh-ramify) | 11 | Creative branching canvas: generate, compare, and iterate multiple approaches in a tree workspace | `dsh plugin add @ramify/dsh-ramify` |
| [dsh-tool-approval](https://github.com/ilharp/dsh-tool-approval) | 1 | Manual approval mode ("Manual Mode" / "Ask Mode"). | `dsh plugin add dsh-tool-approval` |
| [dsh-tiered-approval](https://github.com/Elaina-real/dsh-tiered-approval) | 2 | Tiered auto-review: static rules plus LLM review plus human fallback | `dsh plugin add dsh-tiered-approval` |
| [dsh-event-auditor](https://github.com/qing3a/dsh-event-auditor) | 1 | Event-stream audit panel observing event types, dispatch patterns, and counts, helping plugin authors understand internals | `dsh plugin add @dsh-external/dsh-event-auditor` |
| [dsh-auto-continue](https://github.com/HsiangNianian/dsh-auto-continue) | 32 | Auto-resumes interrupted DSH Web requests: sends a queued 「Continue」 after network, timeout or host-crash failures, with error classification, adaptive backoff, templated continue text and browser notifications. | `dsh plugin add github:HsiangNianian/dsh-auto-continue` |

</details>

<details>
<summary>📡 Notifications / Channels · 18</summary>

| Plugin | ⭐ | Description | Install |
|---|---|---|---|
| [telegram](https://github.com/LoserFox/telegram) | 7 | Bridge to the Telegram Bot API: long polling, per-chat sessions, HTML formatting. | `dsh plugin add @loserfox/telegram` |
| [dsh-telegram](https://github.com/ben7am1n/dsh-telegram) | 1 | Telegram runtime adapter (per-chat sessions, allowlist authentication) | `dsh plugin add dsh-telegram` |
| [DSH-Telegram-Relay](https://github.com/congchuanling-dot/DSH-Telegram-Relay) | 6 | Chat remotely and receive notifications via Telegram | `dsh plugin add dsh-telegram-relay` |
| [dsh-chatnode-wechat](https://github.com/Jesse-njx/dsh-chatnode-wechat) | 6 | Chat with, monitor, and approve your DSH agents from WeChat via the iLink gateway: text both ways, session targeting, digest heartbeats, and numbered approval prompts. | `dsh plugin add @dsh-cowork/chatnode-wechat` |
| [dsh-lark-bridge](https://github.com/imetn/dsh-lark-bridge) | 7 | Bidirectional Lark/Feishu controller for DeepSeek Harness with project and session routing, interactive cards, approvals, attachments, and task controls. | `dsh plugin add dsh-lark-bridge` |
| [dsh-onlyne](https://github.com/dbydd/dsh-onlyne) | 2 | IM gateway sending/receiving QQ, WeChat, Feishu, and Telegram messages from dsh sessions |  |
| [dsh-im](https://github.com/xmanrui/dsh-im) | 85 | One settings entry to connect Feishu/WeChat/DingTalk/WeCom/QQ/Slack/Telegram/Discord/WhatsApp bots via QR scan, App Manifest or credentials. |  |
| [dsh-notification](https://github.com/omdsh-dev/dsh-notification) | 69 | Desktop notifications for turn completions, with per-outcome controls and keyword rules. | `dsh plugin add dsh-notification` |
| [dsh-notify-windows](https://github.com/SeverusZh/dsh-notify-windows) | 5 | Windows notifications (zero dependencies) |  |
| [dsh-win-notify](https://github.com/MuziIsabel/dsh-win-notify) | 4 | Windows toast notifications (sound on task completion) | `dsh plugin add dsh-win-notify` |
| [dsh-web-ui-notify](https://github.com/bill9109/dsh-web-ui-notify) | 19 | Desktop notification reminders. | `dsh plugin add @bill9109/dsh-web-ui-notify` |
| [dsh-session-notification](https://github.com/dingyi222666/dsh-session-notification) | 15 | Notifications for four session states, with browser alerts and prompts. | `dsh plugin add @dingyi222666/dsh-session-notification` |
| [dsh-bell-notify](https://github.com/Laplace-bit/dsh-bell-notify) | 2 | Rings bells and shows a breathing status dot for Agent lifecycle events; Web Audio synthesized (zero audio files), custom sounds uploadable per event. | `dsh plugin add github:Laplace-bit/dsh-bell-notify` |
| [dsh-ssh](https://github.com/UynajGI/dsh-ssh) | 7 | SSH remote execution (ProxyJump chains, SFTP filesystem, PTY) |  |
| [dsh-webhook-bridge](https://github.com/ben7am1n/dsh-webhook-bridge) | 1 | Generic webhook receiver: POST /hook/:channel wakes per-channel agents | `dsh plugin add dsh-webhook-bridge` |
| [dsh-open-in-vscode](https://github.com/omdsh-dev/dsh-open-in-vscode) | 53 | Open DSH workspace directories in VS Code directly from the web GUI. | `dsh plugin add dsh-open-in-vscode` |
| [dsh-share](https://github.com/hellodigua/dsh-share) | 29 | Share your conversations with one click. | `dsh plugin add @dsh-external/dsh-share` |
| [dsh-conversation-share](https://github.com/bill9109/dsh-conversation-share) | 3 | Share any excerpt of a conversation. | `dsh plugin add @bill9109/dsh-conversation-share` |

</details>

<details>
<summary>🌐 Browser / Search · 16</summary>

| Plugin | ⭐ | Description | Install |
|---|---|---|---|
| [dsh-browser](https://github.com/Lum1104/dsh-browser) | 346 | Chrome sidebar extension that lets DSH operate your browser directly, no vision capabilities required. |  |
| [dsh-browser-control](https://github.com/PangYiMing/dsh-browser-control) | 1 | Control browsers via CDP/Playwright | `dsh plugin add dsh-browser-control` |
| [ego-browser](https://github.com/Fisfzy/ego-browser) | 26 | Connect ego-lite (Chromium for AI agents) to DSH with 13 structured ego_* tools |  |
| [dsh-better-browser](https://github.com/titanwings/dsh-better-browser) | 10 | Let agents control the user's logged-in browser via Kimi WebBridge (13 tools) | `dsh plugin add @dsh-external/dsh-better-browser` |
| [dsh-webbridge](https://github.com/bill9109/dsh-webbridge) | 3 | DSH meets Kimi WebBridge. | `dsh plugin add @bill9109/dsh-webbridge` |
| [dsh-browser](https://github.com/ben7am1n/dsh-browser) | 3 | Playwright-driven browser automation | `dsh plugin add dsh-browser` |
| [DSH-Chrome-devtools](https://github.com/yuzi-ska/DSH-Chrome-devtools) | 1 | Real Chrome control via Chrome DevTools MCP | `dsh plugin add dsh-chrome-devtools` |
| [dsh-playwright-cli](https://github.com/mitao-su/dsh-playwright-cli) | 2 | Wrap Playwright CLI: install browsers, run tests, and open HTML reports from the agent loop | `dsh plugin add dsh-playwright-cli` |
| [deepseek-pp](https://github.com/zhu1090093659/deepseek-pp) | 1641 | Browser-extension AI agent workspace with built-in MCP and memory |  |
| [dsh-web-search-firecrawl](https://github.com/yangzhe1003/dsh-web-search-firecrawl) | 2 | Firecrawl search provider for built-in web_search | `dsh plugin add @yangzhe1003/dsh-web-search-firecrawl` |
| [dsh-web-search-tavily](https://github.com/crayonlu/dsh-web-search-tavily) | 3 | Tavily search provider (no DeepSeek key needed) |  |
| [dsh-tavily-search](https://github.com/zhouzhencheng07/dsh-tavily-search) | 4 | Key-free Tavily search tool | `dsh plugin add dsh-tavily-search` |
| [dsh-web-search-pro](https://github.com/anweat/dsh-web-search-pro) | 28 | Persistent enhanced web search: multi-engine routing (DeepSeek/Exa/DDG/Bing/Jina + GitHub/Bilibili/YouTube/V2EX/Xiaohongshu/Twitter/Reddit/RSS), SQLite+LRU cache, userscript-style extraction, Playwright rendering. | `dsh plugin add dsh-web-search-pro` |
| [dsh-all-search](https://github.com/RealAlexandreAI/dsh-all-search) | 1 | AnySearch web search provider (ctx.web) | `dsh plugin add dsh-all-search` |
| [modsearch](https://github.com/liustack/modsearch) | 189 | Web search bridge for text-only agents: ask the web or X, get structured JSON evidence (search, fetch, citations). | `dsh plugin add @liustack/modsearch` |
| [argo](https://github.com/taxueseek/argo) | 104 | Search built for agents: multilingual coverage across web, academic, code, shopping, finance, news, and encyclopedias. | `dsh plugin add github:taxueseek/argo` |

</details>

<details>
<summary>🏗️ Infra / Plugin Mgmt · 33</summary>

| Plugin | ⭐ | Description | Install |
|---|---|---|---|
| [plugin-registry](https://github.com/vlln/plugin-registry) | 57 | Ecosystem infrastructure: a thin browser console for managing official repository plugins (zero patches) plus a make-dsh-plugin skill for guided plugin development. |  |
| [dsh-plugin-manager-registry](https://github.com/Jesse-njx/dsh-plugin-manager-registry) | 1 | Offline-tolerant registry discovering and deduplicating DSH plugins from awesome lists, GitHub topics, and npm |  |
| [dsh-hub](https://github.com/omdsh-dev/dsh-hub) | 4 | OMDSH community extension hub (built on official contracts) | `dsh plugin add @omdsh/dsh-hub` |
| [DSH-plugin-switch](https://github.com/Nexus-Aethra/DSH-plugin-switch) | 2 | Plugin marketplace: browse, search, and install GitHub projects, auto-detecting plugins/skills. | `dsh plugin add dsh-plugin-switch` |
| [dsh-plugin-installer](https://github.com/Toukaiteio/dsh-plugin-installer) | 6 | Marketplace plugin connecting DSH to the GitHub plugin ecosystem. | `dsh plugin add dsh-plugin-installer` |
| [dsh-super-injector](https://github.com/yjh051108/dsh-super-injector) | 126 | Super module injector: inject local plugin packages at runtime (junction + loader.create, hot reload). | `dsh plugin add @dsh-external/dsh-super-injector` |
| [oh-my-dsh](https://github.com/LaplaceYoung/oh-my-dsh) | 51 | Plugin ecosystem for DSH: 700+ plugins with extension seams registered without touching the agent loop. |  |
| [dsh-plugin-check](https://github.com/omdsh-dev/dsh-plugin-check) | 24 | Plugin health checks: manifest protocol / patch format / build traps, zero-dependency and read-only. | `dsh plugin add @deepseek-ai/dsh-plugin-check` |
| [dsh-plugin-doctor](https://github.com/lin-cheng-lab/dsh-plugin-doctor) | 1 | Plugin health check: verify peer version compatibility before install. | `dsh plugin add dsh-plugin-doctor` |
| [dsh-doctor](https://github.com/asdf17128/dsh-doctor) | 1 | Profile health check: find configs broken by patches, dead patches, and tool name conflicts. |  |
| [dsh-capability-inspector](https://github.com/tree201/dsh-capability-inspector) | 2 | DSH Doctor plus runtime diagnostics (tools/models/skills/workspace/session/plugins/MCP troubleshooting). | `dsh plugin add dsh-capability-inspector` |
| [dsh-security-audit](https://github.com/omdsh-dev/dsh-security-audit) | 13 | Local security audit: config, plugin origins, sessions, network exposure — read-only redacted risk report. | `dsh plugin add @deepseek-ai/dsh-security-audit` |
| [dsh-session-health](https://github.com/omdsh-dev/dsh-session-health) | 8 | Frame-level scan diagnostics for session files (torn/corrupt/empty detection). | `dsh plugin add @deepseek-ai/dsh-session-health` |
| [dsh-passwords](https://github.com/slywalker2006/dsh-passwords) | 15 | Login gateway for the DSH web UI: password door with first-run setup, bcrypt + at-rest encryption (AES-256-GCM/HMAC), brute-force lockout, audit log, TLS 1.2+ with 80→443 redirect, CSRF, anti-framing. | `dsh plugin add github:slywalker2006/dsh-passwords` |
| [dsh-evolve](https://github.com/william-jin-cmu/dsh-evolve) | 10 | Self-evolution: the agent hot-mounts/removes persistent plugins on itself mid-session. | `dsh plugin add @dsh-external/dsh-evolve` |
| [dsh-trace](https://github.com/vibeinging/dsh-trace) | 2 | Telemetry backend exporting turns, model steps, and tool calls to yiTrace. | `dsh plugin add @deepseek-ai/dsh-trace` |
| [fabric](https://github.com/omdsh-dev/fabric) | 15 | An MC-Fabric-style hook processor. | `dsh plugin add cordis-fabric-bundle` |
| [sandbox-micro](https://github.com/omdsh-dev/sandbox-micro) | 3 | Support for the microsandbox backend. | `dsh plugin add @deepseek-ai/dsh-sandbox-microsandbox` |
| [sandbox-mxc](https://github.com/omdsh-dev/sandbox-mxc) | 2 | Microsoft cross-platform sandbox support. | `dsh plugin add @deepseek-ai/dsh-sandbox-mxc` |
| [sandbox-nono](https://github.com/omdsh-dev/sandbox-nono) | 3 | Support for the nono sandbox backend. | `dsh plugin add @deepseek-ai/dsh-sandbox-nono` |
| [dsh-stream-rules](https://github.com/jiesou/dsh-stream-rules) | 4 | Inject rules on demand without wasting context. | `dsh plugin add dsh-stream-rules` |
| [dsh-git-identity](https://github.com/LoserFox/dsh-git-identity) | 7 | Pin Git commits to the environment's own author identity; env-var injection overrides all `git config` settings. | `dsh plugin add @loserfox/git-identity` |
| [dsh-plugin-graph](https://github.com/erduotong/dsh-plugin-graph) | 2 | Visualize plugin relationship graphs. | `dsh plugin add dsh-plugin-graph` |
| [dsh-dev-actions](https://github.com/skitse/dsh-dev-actions) | 1 | Turn reusable dev commands proposed by the agent into sidebar actions. | `dsh plugin add dsh-dev-actions` |
| [dsh-tool-policy](https://github.com/Drifter-yh/dsh-tool-policy) | 3 | Declarative default-deny tool policy. | `dsh plugin add dsh-tool-policy` |
| [dsh-openai-codex-auth](https://github.com/yoke233/dsh-openai-codex-auth) | 9 | OpenAI Codex OAuth login and usage card. | `dsh plugin add dsh-openai-codex-auth` |
| [deepseek-harness-docker](https://github.com/runzhliu/deepseek-harness-docker) | 25 | Community Docker/K8s packaging (hardened image + Compose + Helm). |  |
| [dsh-harness-ops](https://github.com/fakechris/dsh-harness-ops) | 11 | Ops toolkit: A/B dual-slot snapshot upgrades, auto-recovery, rollback, and self-healing diagnostics. |  |
| [dsh-multica-runtime](https://github.com/multica-ai/dsh-multica-runtime) | 53 | Multica DSH runtime bridge (stdio JSONL protocol). | `dsh plugin add @multica-ai/dsh-runtime` |
| [session-teleport](https://github.com/omdsh-dev/session-teleport) | 2 | PostgreSQL single-writer session handoff service. | `dsh plugin add @mattheliu/session-teleport` |
| [session-persistence-rdb](https://github.com/morlay/session-persistence-rdb) | 4 | Relational database persistence for sessions. | `dsh plugin add @morlay/session-persistence-rdb` |
| [dsh-market](https://github.com/dsh-market/dsh-market) | 1417 | The plugin market inside DSH: a Settings page to browse and search the full community catalog by category, with confirmed one-click installs and an installed-plugins view. | `dsh plugin add github:dsh-market/dsh-market` |
| [dsh-webui-market-plugin](https://github.com/Sanqi-normal/dsh-webui-market-plugin) | 94 | In-harness plugin market for the dsh web GUI: browse the awesome-dsh-plugin.com catalog and install/uninstall plugins into a profile from Settings → Plugins → Plugin Market. | `dsh plugin add github:Sanqi-normal/dsh-webui-market-plugin` |

</details>

<details>
<summary>🎮 Fun / Other · 31</summary>

| Plugin | ⭐ | Description | Install |
|---|---|---|---|
| [dsh-gomoku](https://github.com/omdsh-dev/dsh-gomoku) | 14 | Play Gomoku against the AI, or let two AIs battle it out. | `dsh plugin add @deepseek-ai/dsh-gomoku` |
| [dsh-minigames](https://github.com/lhh010/dsh-minigames) | 24 | Side-panel arcade: 18 offline mini-games to play while the model thinks. | `dsh plugin add @dsh-external/dsh-minigames` |
| [dsh-auto-chess](https://github.com/omdsh-dev/dsh-auto-chess) | 3 | Auto chess: human vs AI, or AI vs AI. | `dsh plugin add @deepseek-ai/dsh-auto-chess` |
| [dsh-plugin-d399](https://github.com/HuanLinOTO/dsh-plugin-d399) | 8 | Pops up a mini-game menu (wordle, match-3, extensible) while the model generates. | `dsh plugin add @huanlin/dsh-plugin-d399` |
| [dsh-ui-whale](https://github.com/lhh010/dsh-ui-whale) | 29 | Fully hand-drawn pixel whale companion (blinking, tail-wagging, water-spouting, hearts). |  |
| [whale-girl](https://github.com/vlln/whale-girl) | 252 | Desktop pet (QQ-pet style): floats in the corner, draggable, feedable, playable. | `dsh plugin add whale-girl` |
| [dsh-pixel-whale](https://github.com/yoke233/dsh-pixel-whale) | 1 | Lively pixel whale runtime status companion. | `dsh plugin add dsh-pixel-whale` |
| [dsh-blue-whale-maid](https://github.com/yuxino/dsh-blue-whale-maid) | 5 | Blue whale maid desktop pixel pet. | `dsh plugin add dsh-blue-whale-maid` |
| [deepseek-pet](https://github.com/keleus/deepseek-pet) | 34 | Keep a big blue whale pet in DSH. | `dsh plugin add deepseek-pet` |
| [dsh-stickers](https://github.com/william-jin-cmu/dsh-stickers) | 21 | Bidirectional sticker reactions between user and agent. | `dsh plugin add @dsh-external/dsh-stickers` |
| [dsh-emoji](https://github.com/hellodigua/dsh-emoji) | 31 | Automatically add emojis to AI replies. | `dsh plugin add @dsh-external/dsh-emoji` |
| [dsh-ads](https://github.com/Nagi-ovo/dsh-ads) | 519 | Parody ads in 2005-Chinese-web style: sidebar banners, in-chat feeds, corner popups, and a close button whose hit area is smaller than it looks. All fictional. | `dsh plugin add @dsh-external/dsh-ads` |
| [dsh-stock-market](https://github.com/AnacondaKC/dsh-stock-market) | 16 | Fixes the bug where your account can't lose money while you code. | `dsh plugin add dsh-stock-market` |
| [dsh-douyin](https://github.com/AnacondaKC/dsh-douyin) | 6 | Short-video sidebar: native player, series navigation, precise history replay. | `dsh plugin add dsh-douyin` |
| [deepseek-manners](https://github.com/Moeblack/deepseek-manners) | 15 | Append a thank-you note after every message. Mind your manners. | `dsh plugin add deepseek-manners` |
| [dsh-sound-effects-plugin](https://github.com/JasonJin2006/dsh-sound-effects-plugin) | 2 | Reasonix-style sound effects (generative pentatonic ambience + alert tones). | `dsh plugin add dsh-sound-effects-plugin` |
| [dsh-fun-typewriter](https://github.com/omdsh-dev/dsh-fun-typewriter) | 3 | WebAudio typewriter ambience with zero audio assets. | `dsh plugin add @deepseek-ai/dsh-fun-typewriter` |
| [dsh-daily-fortune](https://github.com/omdsh-dev/dsh-daily-fortune) | 3 | Daily fortune: Guanyin lots, tarot, and a daily quote. | `dsh plugin add @deepseek-ai/dsh-daily-fortune` |
| [dsh-plugin-spur](https://github.com/HuanLinOTO/dsh-plugin-spur) | 6 | A braid in the chat stream; tug it to send the agent "get to work". | `dsh plugin add @huanlin/dsh-plugin-spur` |
| [dsh-toy](https://github.com/c3ll256/dsh-toy) | 58 | Connect small toys to DSH (Toy Control Protocol). | `dsh plugin add dsh-toy` |
| [dsh-learn-everything](https://github.com/cendaifeng/dsh-learn-everything) | 5 | Feynman learning loop: teach, explain back, judge, re-explain, rendered as rich HTML course cards. | `dsh plugin add dsh-learn-everything` |
| [dsh-openmaic](https://github.com/THU-MAIC/dsh-openmaic) | 19 | OpenMAIC: classrooms, slides, interactive widgets, and Socratic teaching. | `dsh plugin add @openmaic/dsh-openmaic` |
| [dsh-scholar](https://github.com/lzszq/dsh-scholar) | 24 | Academic assistant plugin. | `dsh plugin add @dsh-scholar/research-plugin` |
| [dsh-101](https://github.com/bill9109/dsh-101) | 5 | Document reading mode for DSH. | `dsh plugin add @dsh-external/dsh-101` |
| [dsh-reasoning-translator](https://github.com/pinkllo/dsh-reasoning-translator) | 2 | Make the model's chain-of-thought output in your language. | `dsh plugin add dsh-reasoning-translator` |
| [dsh-director-toolkit](https://github.com/lhmd/dsh-director-toolkit) | 7 | Direction pack for 3D/technical artists: Blender, Three.js, Houdini, and C4D guidance. | `dsh plugin add @lhmd/dsh-director-toolkit` |
| [dsh-apple-mode](https://github.com/jihongboo/dsh-apple-mode) | 1 | Xcode AI integration for DSH: 26 Xcode MCP tools (mcpbridge) + Apple platform skills + Xcode Intelligence-style persona (agent preset or global bundle). | `dsh plugin add dsh-apple-mode` |
| [notes](https://github.com/zhaoolee/notes) | 148 | Export DSH conversations as Smartisan Notes-style PNGs, or create and update Markdown notes in a configured account-scoped workspace. |  |
| [dsh-cost-meter](https://github.com/Han-1413141/dsh-cost-meter) | 131 | Per-session and daily API cost, budget with usage %, official balance, history dashboard, and one-click official price sync with peak/off-peak pricing. | `dsh plugin add github:Han-1413141/dsh-cost-meter` |
| [dsh-user-experience](https://github.com/DietCokewithSugar/dsh-user-experience) | 19 | Finds potential UX issues in your project: automatically reviews React/TypeScript code, pinpoints each problem, and gives concrete suggestions. | `dsh plugin add github:DietCokewithSugar/dsh-user-experience` |
| [dsh-balance-meter](https://github.com/Ghost011118/dsh-balance-meter) | 18 | DeepSeek account balance and session cost in the composer dock, with auto-fetched official pricing and peak/off-peak support. | `dsh plugin add github:Ghost011118/dsh-balance-meter` |

</details>

<details>
<summary>🏛️ Official & Meta · 10</summary>

| Plugin | ⭐ | Description | Install |
|---|---|---|---|
| [deepseek-ai/deepseek-harness](https://github.com/deepseek-ai/deepseek-harness) | 172439 | Official core repo: "everything is a plugin", driven by Cordis. |  |
| [deepseek-ai/awesome-deepseek-agent](https://github.com/deepseek-ai/awesome-deepseek-agent) | 5958 | Official curated list of DeepSeek agents. |  |
| [awesome-dsh-plugin/awesome-dsh-plugin](https://github.com/awesome-dsh-plugin/awesome-dsh-plugin) | 10555 | Community curated list (105 plugins + sites + badges). |  |
| [bruc3van/awesome-dsh-plugin](https://github.com/bruc3van/awesome-dsh-plugin) | 257 | "Find your plugin in 30 seconds", with scenario descriptions and a 505-plugin snapshot. |  |
| [0xsline/awesome-deepseek-harness](https://github.com/0xsline/awesome-deepseek-harness) | 766 | Curated DSH ecosystem: plugins, tools, and infrastructure. |  |
| [AdamPlatin123/awesome-dsh-plugins](https://github.com/AdamPlatin123/awesome-dsh-plugins) | 1279 | Catalog plus a daily compatibility radar (four-dimension checks + live tests). |  |
| [Alex-Yanggg/awesome-DSH-plugin](https://github.com/Alex-Yanggg/awesome-DSH-plugin) | 76 | Categorized catalog covering productivity, extensions, debugging, and custom development. |  |
| [HenryZ838978/deepseek-harness](https://github.com/HenryZ838978/deepseek-harness) | 45 | Third-party harness: Python library + dsh CLI + MCP server + SKILL.md. |  |
| [vvlife/whalehub-dsh](https://github.com/vvlife/whalehub-dsh) | 6 | Third-party plugin store/hub. |  |
| [plugin-template](https://github.com/omdsh-dev/plugin-template) | 11 | Plugin template repo (based on the official turtle-ui repo). | `dsh plugin add @your-scope/dsh-plugin-template` |

</details>

<!-- categories:end -->

## 📦 Install a Plugin

```bash
# Install a plugin (forwards to pnpm; npm / git / tarball all supported)
dsh plugin --profile <name> add <pkg>

# Example
dsh plugin add dsh-cc-tui
```

Each enriched entry above shows its install command, e.g. `` `dsh plugin add <npm-package>` ``.

## 🛠️ For plugin developers

Want to build your own plugin? A minimal DSH plugin is just a module exporting `name` + `apply`:

```ts
import type { Context } from '@deepseek-ai/cordis'
export const name = 'hello-plugin'
export function apply(ctx: Context) {
  // register a tool, a command, a UI node, ...
}
```

- 📖 Official docs: [first plugin](https://github.com/deepseek-ai/deepseek-harness/blob/master/docs/user/develop/basic/index.zh.md) · [Cordis primer](https://github.com/deepseek-ai/deepseek-harness/blob/master/docs/cordis-primer.zh.md)
- 📦 Publish: declare `dsh.bundle` in `package.json`, then `dsh plugin add <your-package>`
- 🔍 Get discovered: add the [`dsh-plugin`](https://github.com/topics/dsh-plugin) topic, then submit it here (see [CONTRIBUTING](CONTRIBUTING.md))

## 💾 Data

Machine-readable data lives in [`web/data.js`](web/data.js) (generated by `scripts/gen-web-data.mjs` from the 14 category files). Category definitions in [`docs/taxonomy.md`](docs/taxonomy.md). For AI agents / LLMs, see [llms.txt](llms.txt).

## 🤝 Contributing

Contributions welcome — add your plugin, fix a category or a description. See [CONTRIBUTING.md](CONTRIBUTING.md).

Please add the [`dsh-plugin`](https://github.com/topics/dsh-plugin) topic to your plugin repo so others can find it.

## ⚠️ Disclaimer

This is a community-maintained index. **Listing does not imply safety, quality, or compatibility endorsement.** Plugins are developed and maintained by their authors; installing a plugin means running third-party code on your machine — review the source and proceed at your own risk. This repository is not affiliated with DeepSeek.

## 📄 License

Code [MIT](LICENSE) · Content [CC-BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/)

---

<div align="center">
<sub>Made with 💙 for the DSH community · Not affiliated with DeepSeek</sub>
</div>
