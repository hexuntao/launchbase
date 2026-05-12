# LaunchBase

[![LaunchBase](./github.svg)](https://github.com/hexuntao/launchbase)

LaunchBase 是一个生产级 TypeScript monorepo 启动模板，用于构建现代全栈产品。它提供清晰的包边界、类型安全 API、数据库基础、部署准备和 AI 编码规则。

- Demo: [launchbase-web.vercel.app](https://launchbase-web.vercel.app)
- 文档：[`apps/docs/content/docs`](./apps/docs/content/docs) 和 [`apps/docs/README.md`](./apps/docs/README.md)
- 英文 README：[README.md](./README.md)

## Features

- 基于 pnpm workspace 和 Turborepo 的生产可用 monorepo。
- Next.js 产品应用和 Fumadocs 文档应用。
- 用于 UI、auth、database、Redis、RPC、analytics、telemetry、security 和 email 的共享包。
- 基于 oRPC 和 TanStack Query 的类型安全 API 流程。
- PostgreSQL、Drizzle ORM、Better Auth 和 Upstash Redis 集成点。
- 覆盖 install、lint、typecheck 和 build 的 CI。
- 用于依赖审查的 Renovate 和 Dependabot 配置。
- 根目录与包级 `AGENTS.md`，用于 AI 辅助编码。
- `DESIGN.md` 指导产品界面保持一致的视觉风格。

## Tech Stack

- **Runtime:** Node.js 22+
- **Package manager:** pnpm 10
- **Build system:** Turborepo
- **Framework:** Next.js 16, React 19
- **Styling:** Tailwind CSS 4, shared `@repo/ui`
- **API:** oRPC, TanStack Query
- **Auth:** Better Auth
- **Database:** PostgreSQL, Drizzle ORM
- **Cache:** Upstash Redis
- **Email:** React Email
- **Analytics:** PostHog
- **Telemetry:** Sentry, Evlog
- **Testing:** Playwright
- **Tooling:** oxlint, oxfmt, commitlint, lefthook

## Project Structure

```txt
apps/
  web/      主产品应用
  docs/     文档站点
packages/
  analytics/  PostHog 集成
  auth/       Better Auth 设置
  db/         Drizzle schema 和 PostgreSQL 客户端
  email/      React Email 模板
  redis/      Upstash Redis 客户端和限流
  rpc/        oRPC 上下文和路由导出
  security/   安全响应头和 CSP
  telemetry/  Sentry 和 Evlog 集成
  ui/         共享 UI 原语、样式和字体
tooling/      共享工作区工具
e2e/          Playwright 端到端测试
```

## Quick Start

```bash
pnpm install
cp .env.example .env
cp apps/web/.env.example apps/web/.env
openssl rand -base64 32 # 将生成值用于 BETTER_AUTH_SECRET
pnpm docker:up
pnpm web:dev
```

Web 应用使用 portless，并配置为 `web.launchbase.localhost`。Docs 应用配置为 `docs.launchbase.localhost`。

## Development Commands

```bash
pnpm dev          # 运行工作区开发任务
pnpm web:dev      # 运行 web 应用
pnpm docs:dev     # 运行 docs 应用
pnpm lint         # 运行 lint 任务
pnpm typecheck    # 运行 TypeScript 检查
pnpm build        # 构建所有应用
pnpm web:e2e      # 运行 web Playwright 测试
pnpm docker:up    # 启动本地 Postgres 和 Redis HTTP 桥接
pnpm docker:down  # 停止本地服务
```

按需安装 e2e 浏览器：

```bash
pnpm --filter @e2e/web exec playwright install chromium
```

## AI Coding Workflow

LaunchBase 面向 Codex、Claude Code 和其他需要在编辑前读取明确项目规则的 coding agent。

- 修改共享行为前先读根目录 `AGENTS.md`。
- 编辑某个 app 或 package 前先读对应目录下的 `AGENTS.md`。
- 保持包所有权边界；apps 可以消费 `@repo/*`，shared packages 不允许从 apps 导入。
- 首页和产品界面视觉决策遵循 `apps/web/DESIGN.md`。
- 使用与 CI 一致的检查验证改动：lint、typecheck、build。

## Deployment

将 `apps/web` 作为主应用部署。使用 Node.js 22 和 pnpm。应用需要下方环境变量，并在构建时使用 `@repo/*` workspace 包。

部署前建议检查：

```bash
pnpm install --frozen-lockfile
pnpm lint
pnpm typecheck
pnpm build
```

## Environment Variables

以下 env key 均来自当前代码用法。除非代码读取，否则不要添加未记录的键。

本地 web 和 database 开发所需：

```env
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/launchbase_db"
UPSTASH_REDIS_REST_URL="http://localhost:8079"
UPSTASH_REDIS_REST_TOKEN="launchbase"
BETTER_AUTH_SECRET="replace-with-at-least-32-random-characters"
```

可选 Google OAuth 集成：

```env
GOOGLE_CLIENT_ID=""
GOOGLE_CLIENT_SECRET=""
```

可选资源和 CSP origin：

```env
NEXT_PUBLIC_ASSET_ORIGIN=""
```

可选 analytics：

```env
NEXT_PUBLIC_POSTHOG_KEY=""
NEXT_PUBLIC_POSTHOG_HOST=""
```

可选 telemetry：

```env
NEXT_PUBLIC_SENTRY_DSN=""
NEXT_PUBLIC_SENTRY_CSP_REPORT_ENDPOINT=""
SENTRY_ORG=""
SENTRY_PROJECT=""
SENTRY_AUTH_TOKEN=""
```

Sentry 是可选项。未配置 Sentry 时保持空值，不要设置真实 auth token。

## GitHub Automation

CI 在推送到 `main` 和创建 Pull Request 时运行：

```bash
pnpm install --frozen-lockfile
pnpm lint
pnpm typecheck
pnpm build
```

依赖自动化配置：

- Renovate: `renovate.json`
- Dependabot: `.github/dependabot.yml`

补丁更新可在冷却期后自动执行。次要版本、主要版本、catalog 和安全敏感更新需要根据仓库自动化配置进行人工审查。

## Upstream Sync

LaunchBase 派生自 [`stack-found/vazen`](https://github.com/stack-found/vazen)。请在文档、许可说明和上游同步流程中保留该署名。

使用专用 `upstream-sync` 分支进行上游更新：

```bash
git checkout -b upstream-sync
git fetch vazen
git merge vazen/main
pnpm install --frozen-lockfile
pnpm lint
pnpm typecheck
pnpm build
```

解决冲突时，保留 LaunchBase 的产品化工作，并明确审查上游 Vazen 变更。

## License

LaunchBase 采用 MIT License。详见 [LICENSE](LICENSE)。

本仓库保留来自 Vazen 的上游 MIT 许可义务。署名详情见 [NOTICE.md](NOTICE.md)。

## Credits

- 上游项目：[`stack-found/vazen`](https://github.com/stack-found/vazen)
- LaunchBase 产品化：`hexuntao/launchbase`
