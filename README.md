# LaunchBase

[![LaunchBase](./github.svg)](https://github.com/hexuntao/launchbase)

LaunchBase is a production-grade TypeScript monorepo starter for building modern full-stack products with clear package boundaries, typed APIs, database foundations, deployment readiness, and AI coding rules.

- Demo: [launchbase-web.vercel.app](https://launchbase-web.vercel.app)
- Docs: `apps/docs/content/docs`
- Chinese README: [README.zh-CN.md](./README.zh-CN.md)

## Features

- Production-ready pnpm workspace with Turborepo orchestration.
- Next.js product app and Fumadocs documentation app.
- Shared packages for UI, auth, database, Redis, RPC, analytics, telemetry, security, and email.
- Type-safe API flow with oRPC and TanStack Query.
- PostgreSQL, Drizzle ORM, Better Auth, and Upstash Redis integration points.
- CI coverage for install, lint, typecheck, and build.
- Renovate and Dependabot configuration for dependency review.
- Root and package-local `AGENTS.md` files for AI-assisted coding.
- `DESIGN.md` guidance for keeping the product surface visually consistent.

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
  web/      Primary product app
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

## Quick Start

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
pnpm docker:up    # start local Postgres and Redis HTTP bridge
pnpm docker:down  # stop local services
```

Install the browser for e2e tests when needed:

```bash
pnpm --filter @e2e/web exec playwright install chromium
```

## AI Coding Workflow

LaunchBase is designed for Codex, Claude Code, and other coding agents that need explicit project rules before editing.

- Read the root `AGENTS.md` before changing shared behavior.
- Read app or package-local `AGENTS.md` files before editing that area.
- Keep package ownership intact; apps may consume `@repo/*`, shared packages must not import from apps.
- Use `apps/web/DESIGN.md` for homepage and product surface visual decisions.
- Validate changes with the same checks CI runs: lint, typecheck, and build.

## Deployment

Deploy `apps/web` as the primary app. Use Node.js 22 and pnpm. The app expects the environment variables listed below and uses `@repo/*` workspace packages at build time.

Recommended checks before deployment:

```bash
pnpm install --frozen-lockfile
pnpm lint
pnpm typecheck
pnpm build
```

## Environment Variables

All env keys below come from current code usage. Do not add undocumented keys unless the code reads them.

Required for local web and database development:

```env
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/launchbase_db"
UPSTASH_REDIS_REST_URL="http://localhost:8079"
UPSTASH_REDIS_REST_TOKEN="launchbase"
BETTER_AUTH_SECRET="replace-with-at-least-32-random-characters"
```

Optional Google OAuth integration:

```env
GOOGLE_CLIENT_ID=""
GOOGLE_CLIENT_SECRET=""
```

Optional asset and CSP origin:

```env
NEXT_PUBLIC_ASSET_ORIGIN=""
```

Optional analytics:

```env
NEXT_PUBLIC_POSTHOG_KEY=""
NEXT_PUBLIC_POSTHOG_HOST=""
```

Optional telemetry:

```env
NEXT_PUBLIC_SENTRY_DSN=""
NEXT_PUBLIC_SENTRY_CSP_REPORT_ENDPOINT=""
SENTRY_ORG=""
SENTRY_PROJECT=""
SENTRY_AUTH_TOKEN=""
```

Sentry is optional. If Sentry is not configured, keep values empty and do not set a real auth token.

## GitHub Automation

CI runs on pushes and pull requests to `main`:

```bash
pnpm install --frozen-lockfile
pnpm lint
pnpm typecheck
pnpm build
```

Dependency automation is configured through:

- Renovate: `renovate.json`
- Dependabot: `.github/dependabot.yml`

Patch updates may be automated after a cooldown. Minor, major, catalog, and security-sensitive updates require human review according to the repository automation config.

## Upstream Sync

LaunchBase is derived from [`stack-found/vazen`](https://github.com/stack-found/vazen). Keep that attribution visible in docs, license notes, and upstream sync workflows.

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

## License

LaunchBase is licensed under the MIT License. See [LICENSE](LICENSE).

This repository preserves upstream MIT license obligations from Vazen. See [NOTICE.md](NOTICE.md) for attribution details.

## Credits

- Upstream project: [`stack-found/vazen`](https://github.com/stack-found/vazen)
- LaunchBase productization: `hexuntao/launchbase`
