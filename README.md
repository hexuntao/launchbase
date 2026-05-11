# LaunchBase

[![LaunchBase](./github.svg)](https://github.com/hexuntao/launchbase)

> - Demo site :: [launchbase-web.vercel.app](https://launchbase-web.vercel.app)

LaunchBase is a production-ready monorepo starter built from Vazen and evolved for real-world product development. It includes CI, dependency automation, AI coding guidelines, Vercel deployment readiness, and a clean foundation for modern TypeScript full-stack applications.

中文说明：LaunchBase 保留 Vazen 的上游来源与 MIT 许可义务，并在此基础上强化产品化文档、CI、依赖更新、AI 编码规范和部署准备。

Full usage docs live in `apps/docs/content/docs`.

## Why LaunchBase

Modern product teams need more than a blank Next.js app. LaunchBase provides a small but production-oriented base that keeps the boring parts explicit: package boundaries, environment validation, CI checks, dependency review, Vercel readiness, security headers, auth, database access, and AI-friendly coding rules.

## Features

- Production-ready TypeScript monorepo structure.
- Next.js apps for product UI and documentation.
- Shared UI, auth, database, Redis, RPC, analytics, telemetry, security, and email packages.
- CI for install, lint, typecheck, and build.
- Renovate and Dependabot configuration for dependency automation.
- Vercel-ready app structure and environment variable documentation.
- Root and package-local `AGENTS.md` files for AI coding workflows.
- Upstream sync guidance for tracking `stack-found/vazen`.

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
  web/      Primary LaunchBase product app
  docs/     Documentation site
packages/
  analytics/  PostHog integration
  auth/       Better Auth setup
  db/         Drizzle schema and PostgreSQL client
  email/      React Email templates
  redis/      Upstash Redis client and rate limiting
  rpc/        oRPC context and router exports
  security/   Security headers and CSP
  telemetry/  Sentry and Evlog integrations
  ui/         Shared UI primitives, styles, and fonts
tooling/      Shared workspace tooling
e2e/          Playwright end-to-end tests
```

## Getting Started

```bash
pnpm install
cp .env.example .env
cp apps/web/.env.example apps/web/.env
openssl rand -base64 32 # use this value for BETTER_AUTH_SECRET
pnpm docker:up
pnpm web:dev
```

The web app uses portless and is configured for `web.launchbase.localhost`. The docs app is configured for `docs.launchbase.localhost`.

## Development Commands

```bash
pnpm dev          # run workspace dev tasks
pnpm web:dev      # run the web app
pnpm docs:dev     # run the docs app
pnpm lint         # run lint tasks
pnpm typecheck    # run TypeScript checks
pnpm build        # build all apps
pnpm web:e2e      # run web Playwright tests
pnpm --filter @e2e/web exec playwright install chromium # install the browser for e2e
pnpm docker:up    # start local Postgres and Redis HTTP bridge
pnpm docker:down  # stop local services
```

## Environment Variables

All env keys below come from the current codebase. Do not add undocumented keys unless the code reads them.

### Local Development

Required for the web app and database packages:

```env
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/launchbase_db"
UPSTASH_REDIS_REST_URL="http://localhost:8079"
UPSTASH_REDIS_REST_TOKEN="launchbase"
BETTER_AUTH_SECRET="replace-with-at-least-32-random-characters"
```

Optional Google OAuth integration, required only when enabling Google sign-in:

```env
GOOGLE_CLIENT_ID=""
GOOGLE_CLIENT_SECRET=""
```

Optional local analytics and telemetry integrations:

```env
NEXT_PUBLIC_ASSET_ORIGIN=""
NEXT_PUBLIC_POSTHOG_KEY=""
NEXT_PUBLIC_POSTHOG_HOST=""
NEXT_PUBLIC_SENTRY_DSN=""
NEXT_PUBLIC_SENTRY_CSP_REPORT_ENDPOINT=""
SENTRY_ORG=""
SENTRY_PROJECT=""
SENTRY_AUTH_TOKEN=""
```

### Vercel Deployment

Set these in Vercel project environment variables:

- `DATABASE_URL`
- `UPSTASH_REDIS_REST_URL`
- `UPSTASH_REDIS_REST_TOKEN`
- `BETTER_AUTH_SECRET`

Optional Google OAuth variables, required only when enabling Google sign-in:

- `GOOGLE_CLIENT_ID`
- `GOOGLE_CLIENT_SECRET`

Optional Vercel integrations:

- `NEXT_PUBLIC_ASSET_ORIGIN`
- `NEXT_PUBLIC_POSTHOG_KEY`
- `NEXT_PUBLIC_POSTHOG_HOST`
- `NEXT_PUBLIC_SENTRY_DSN`
- `NEXT_PUBLIC_SENTRY_CSP_REPORT_ENDPOINT`
- `SENTRY_ORG`
- `SENTRY_PROJECT`
- `SENTRY_AUTH_TOKEN`

Sentry is optional. If Sentry is not configured, keep its values empty and do not set a real auth token.

## GitHub Automation

CI runs on pushes and pull requests to `main`:

```bash
pnpm install --frozen-lockfile
pnpm lint
pnpm typecheck
pnpm build
```

Dependency automation is configured through Renovate and Dependabot:

- Renovate: `renovate.json`
- Dependabot: `.github/dependabot.yml`

Patch updates may be automated after a cooldown. Minor, major, catalog, and security-sensitive updates require human review according to the repository automation config.

## Vercel Deployment

Deploy `apps/web` as the primary app. Use Node.js 22 and pnpm. The app expects the env variables listed above and uses `@repo/*` workspace packages at build time.

Recommended checks before deploying:

```bash
pnpm install --frozen-lockfile
pnpm lint
pnpm typecheck
pnpm build
```

## Upstream Sync with Vazen

LaunchBase is derived from [`stack-found/vazen`](https://github.com/stack-found/vazen). The upstream source must remain visible and must not be hidden in docs, license notes, or sync workflows.

Use a dedicated `upstream-sync` branch for upstream updates:

```bash
git checkout -b upstream-sync
git fetch vazen
git merge vazen/main
pnpm install --frozen-lockfile
pnpm lint
pnpm typecheck
pnpm build
```

Resolve conflicts by preserving LaunchBase productization work while reviewing upstream Vazen changes explicitly.

## AI Coding with AGENTS.md

This repository includes AI coding instructions at the root and inside each app/package:

- `AGENTS.md`
- `apps/web/AGENTS.md`
- `apps/docs/AGENTS.md`
- `packages/*/AGENTS.md`

AI agents must read the relevant local file before editing code, preserve package boundaries, avoid secrets, keep upstream attribution, and validate changes with lint, typecheck, and build.

## License

LaunchBase is licensed under the MIT License. See [LICENSE](LICENSE).

This repository preserves upstream MIT license obligations from Vazen. See [NOTICE.md](NOTICE.md) for attribution details.

## Credits

- Upstream project: [`stack-found/vazen`](https://github.com/stack-found/vazen)
- LaunchBase productization: `hexuntao/launchbase`
