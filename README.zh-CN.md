# LaunchBase

LaunchBase 是一个生产可用的 monorepo 启动模板，基于 Vazen 构建，并针对真实产品开发进行了演进。它包含 CI、依赖自动化、AI 编码规范、Vercel 部署准备，以及为现代 TypeScript 全栈应用打造的整洁基础。

LaunchBase 保留了 Vazen 的上游来源与 MIT 许可义务，并在此基础上强化了产品化文档、CI、依赖更新、AI 编码规范和部署准备。

## Why LaunchBase

现代产品团队需要的不仅仅是一个空白的 Next.js 应用。LaunchBase 提供了一个小而精且面向生产的基础，让那些枯燥的部分变得明确：包边界、环境校验、CI 检查、依赖审查、Vercel 部署准备、安全响应头、auth、数据库访问以及对 AI 友好的编码规则。

## Features

- 生产可用的 TypeScript monorepo 结构。
- 用于产品 UI 和文档的 Next.js 应用。
- 共享的 UI、auth、database、Redis、RPC、analytics、telemetry、security 和 email 包。
- 用于 install、lint、typecheck 和 build 的 CI。
- 用于依赖自动化的 Renovate 和 Dependabot 配置。
- Vercel 就绪的应用结构和环境变量文档。
- 根目录和包级别的 `AGENTS.md` 文件，用于 AI 编码工作流。
- 用于追踪 `stack-found/vazen` 的上游同步指南。

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
- **Testing:** Playwright for e2e
- **Tooling:** oxlint, oxfmt, commitlint, lefthook

## Monorepo Structure

```txt
apps/
  web/      LaunchBase 主产品应用
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
  ui/         共享的 UI 原语、样式和字体
tooling/      共享的工作区工具
e2e/          Playwright 端到端测试
```

## Getting Started

```bash
pnpm install
cp .env.example .env
cp apps/web/.env.example apps/web/.env
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

## Environment Variables

以下所有环境变量均来自当前代码库。除非代码读取，否则不要添加未记录的键。

### Local Development

Web 应用和数据库包所需：

```env
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/launchbase_db"
UPSTASH_REDIS_REST_URL="http://localhost:8079"
UPSTASH_REDIS_REST_TOKEN="launchbase"
GOOGLE_CLIENT_ID=""
GOOGLE_CLIENT_SECRET=""
```

可选的本地集成：

```env
NEXT_PUBLIC_POSTHOG_KEY=""
NEXT_PUBLIC_POSTHOG_HOST=""
NEXT_PUBLIC_SENTRY_DSN=""
NEXT_PUBLIC_SENTRY_CSP_REPORT_ENDPOINT=""
SENTRY_ORG=""
SENTRY_PROJECT=""
SENTRY_AUTH_TOKEN=""
```

### Vercel Deployment

在 Vercel 项目环境变量中设置：

- `DATABASE_URL`
- `UPSTASH_REDIS_REST_URL`
- `UPSTASH_REDIS_REST_TOKEN`
- `GOOGLE_CLIENT_ID`
- `GOOGLE_CLIENT_SECRET`

可选的 Vercel 集成：

- `NEXT_PUBLIC_POSTHOG_KEY`
- `NEXT_PUBLIC_POSTHOG_HOST`
- `NEXT_PUBLIC_SENTRY_DSN`
- `NEXT_PUBLIC_SENTRY_CSP_REPORT_ENDPOINT`
- `SENTRY_ORG`
- `SENTRY_PROJECT`
- `SENTRY_AUTH_TOKEN`

Sentry 是可选的。如果未配置 Sentry，请将其值留空，不要设置真实的 auth token。

## GitHub Automation

CI 在向 `main` 分支的推送和 Pull Request 上运行：

```bash
pnpm install --frozen-lockfile
pnpm lint
pnpm typecheck
pnpm build
```

依赖自动化通过 Renovate 和 Dependabot 配置：

- Renovate: `renovate.json`
- Dependabot: `.github/dependabot.yml`

补丁更新可在冷却期后自动执行。次要版本、主要版本、目录和安全敏感更新根据仓库自动化配置需要人工审查。

## Vercel Deployment

将 `apps/web` 作为主应用部署。使用 Node.js 22 和 pnpm。应用需要上述列出的环境变量，并在构建时使用 `@repo/*` 工作区包。

部署前建议检查：

```bash
pnpm install --frozen-lockfile
pnpm lint
pnpm typecheck
pnpm build
```

## Upstream Sync with Vazen

LaunchBase 派生自 [`stack-found/vazen`](https://github.com/stack-found/vazen)。上游来源必须保持可见，不得在文档、许可说明或同步工作流中隐藏。

使用专用的 `upstream-sync` 分支进行上游更新：

```bash
git checkout -b upstream-sync
git fetch vazen
git merge vazen/main
pnpm install --frozen-lockfile
pnpm lint
pnpm typecheck
pnpm build
```

解决冲突时，保留 LaunchBase 的产品化工作，同时明确审查上游 Vazen 的变更。

## AI Coding with AGENTS.md

本仓库在根目录和每个 app/package 内部均包含 AI 编码说明：

- `AGENTS.md`
- `apps/web/AGENTS.md`
- `apps/docs/AGENTS.md`
- `packages/*/AGENTS.md`

AI agent 在编辑代码前必须阅读相关的本地文件，保留包边界，避免泄露 secrets，保留上游署名，并通过 lint、typecheck 和 build 验证更改。

## License

LaunchBase 采用 MIT License 授权。详见 [LICENSE](LICENSE)。

本仓库保留了来自 Vazen 的上游 MIT 许可义务。署名详情见 [NOTICE.md](NOTICE.md)。

## Credits

- 上游项目：[`stack-found/vazen`](https://github.com/stack-found/vazen)
- LaunchBase 产品化：`hexuntao/launchbase`
