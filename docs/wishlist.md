# 愿望清单（Wishlist）

> DeepSeek Harness 插件生态的**缺口与待补方向**。欢迎按此方向贡献新插件，或提 PR 补充新的愿望。

## 🔴 明确空白（几乎无人做）

### 数据库 / SQL
- **现状**：DSH 专属的数据库插件只有 [dsh-data-agent](https://github.com/omdsh-dev/dsh-data-agent) 一个孤例。
- **需求**：连 MySQL / Postgres / SQLite、写 SQL、结果可视化、schema 探查、安全的读写权限控制。
- **可参考**：Claude Code 生态里的 MCP 数据库服务器（如 sqlite/postgres MCP server）。

### 翻译 / 本地化
- **现状**：几乎没有 DSH 专属翻译插件（检索到的多为通用 DeepSeek 集成，非 DSH 插件）。
- **需求**：会话内中英互译、代码注释翻译、术语表、i18n 本地化辅助。

## 🟡 待强化（有雏形，但不成气候）

### 插件市场 / 安装器
- **现状**：仅 [DSH-plugin-switch](https://github.com/Nexus-Aethra/DSH-plugin-switch)、[dsh-plugin-installer](https://github.com/Toukaiteio/dsh-plugin-installer) 等雏形。
- **需求**：图形化浏览 / 安装 / 评分 / 更新 / 一键卸载。

### 测试与质量
- **需求**：插件单测脚手架、lint 规则、CI 模板、兼容性自检（当前社区靠 [awesome-dsh-plugins](https://github.com/AdamPlatin123/awesome-dsh-plugins) 的每日雷达手工兜底）。

### 监控与可观测
- **需求**：token 用量告警、成本仪表盘、会话分析、异常诊断。

## 🟢 生态级诉求

- **统一插件格式**：官方静态 `.dsh-plugin/package.json` 与社区动态 `dsh.plugin.json` 两代协议并存、互转有损——缺一个「格式桥接/迁移工具」。
- **官方 hub 收录机制**：当前无官方市场，只有 npm + `dsh-plugin` topic，缺一个中心化的收录/审核/评分入口。

## 如何认领

1. 从上面或 [reconcile.md](reconcile.md) 选一个方向；
2. 开 Issue 声明认领（避免重复造轮子）；
3. 做出插件后，按 [CONTRIBUTING.md](../CONTRIBUTING.md) 提交收录。
