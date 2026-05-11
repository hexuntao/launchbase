# LaunchBase Agent Guidelines

## Project Identity

LaunchBase is a production-ready monorepo starter for modern TypeScript full-stack products. It is derived from upstream [`stack-found/vazen`](https://github.com/stack-found/vazen); keep that attribution visible in docs, license notes, and upstream sync workflows.

## Tech Stack

- Package manager: `pnpm` with workspace catalogs in `pnpm-workspace.yaml`.
- Build orchestration: Turborepo via `turbo.json`.
- Apps: Next.js 16, React 19, Tailwind CSS 4.
- API: oRPC, TanStack Query, Better Auth.
- Data: PostgreSQL, Drizzle ORM, Upstash Redis.
- Observability: Sentry, PostHog, Evlog.
- Tooling: oxlint, oxfmt, commitlint, lefthook, Playwright.

## Monorepo Structure

- `apps/web`: primary product app.
- `apps/docs`: public documentation site powered by Fumadocs.
- `packages/ui`: shared UI primitives, styles, and fonts.
- `packages/auth`: Better Auth server/client setup.
- `packages/db`: Drizzle schema, database client, and migrations config.
- `packages/redis`: Upstash Redis client and rate limiting.
- `packages/rpc`: oRPC context and router exports.
- `packages/security`: security headers and CSP configuration.
- `packages/analytics`: PostHog browser analytics.
- `packages/telemetry`: Sentry and Evlog instrumentation.
- `packages/email`: React Email templates and exports.
- `tooling/*` and `e2e/*`: shared tooling and Playwright tests.

## Coding Rules

- Make the smallest change that solves the task.
- Preserve existing architecture and package boundaries unless the task explicitly changes them.
- Do not alter product/business behavior for branding, docs, env, logo, or CI changes.
- Use TypeScript types explicitly at public package boundaries.
- Prefer existing utilities and workspace packages over new abstractions.
- Add comments only for non-obvious behavior.

## Package Boundaries

- Apps may depend on `@repo/*` packages.
- Shared packages must not import from `apps/*`.
- `packages/ui` must stay presentation-focused and must not import auth, db, rpc, telemetry, or app code.
- `packages/db` owns schema and database access; do not duplicate database clients elsewhere.
- `packages/auth` may depend on `@repo/db` and `@repo/redis`; apps consume it through exported entrypoints.
- `packages/security`, `packages/analytics`, and `packages/telemetry` should remain integration packages, not app feature modules.

## Git Workflow

- `main` is the stable branch and must stay deployable.
- Use `upstream-sync` for synchronizing changes from `stack-found/vazen`.
- Keep commits small and logical.
- Use Conventional Commits, for example `fix(auth): handle expired token`.
- Do not push directly to `main`.
- Do not rewrite git history without explicit approval.

## CI Requirements

- Any code change must pass:
  - `pnpm lint`
  - `pnpm typecheck`
  - `pnpm build`
- CI is defined in `.github/workflows/ci.yml` and must not be bypassed.
- Dependency automation is configured in `renovate.json` and `.github/dependabot.yml`; major and risky updates require human review.
- Do not weaken CI checks to make a PR pass.

## Env Rules

- Never commit `.env` files.
- Keep examples in `.env.example` files only.
- Env keys must come from actual code usage, usually `env.ts` files.
- Use empty strings or placeholders only; never commit real tokens, secrets, DSNs, API keys, or database URLs.
- Sentry env values are optional unless a deployment explicitly enables Sentry.

## Security Rules

- Never expose credentials in source, docs, test output, screenshots, or commits.
- Do not disable security headers, auth checks, CSP rules, or secure cookie behavior without a security review.
- Do not add third-party scripts or remote origins casually; update `packages/security` deliberately.
- Treat auth, database schema, and CI/CD changes as high-risk.

## AI Coding Rules

- Read the relevant files before editing.
- Check local `AGENTS.md` files before modifying an app or package.
- Follow existing patterns for exports, env validation, config, styling, and tests.
- Do not invent env keys, package names, routes, or deployment assumptions.
- Preserve upstream Vazen attribution while making LaunchBase the current project identity.
- If a request conflicts with this file or local package rules, raise the conflict before editing.

## Forbidden Actions

- Do not commit `.env`, tokens, secrets, or real production values.
- Do not bypass, remove, or weaken CI.
- Do not casually rewrite architecture or move package ownership.
- Do not hide that LaunchBase is derived from `stack-found/vazen`.
- Do not delete MIT license obligations or upstream copyright attribution.
- Do not run migrations, push, rebase, reset, or delete files without explicit approval.

## Validation Checklist

Before handing off a code change:

1. Relevant files and local `AGENTS.md` were read.
2. Package boundaries were respected.
3. Env examples contain only real keys from code and no secrets.
4. Upstream attribution remains visible where relevant.
5. `pnpm lint` passed.
6. `pnpm typecheck` passed.
7. `pnpm build` passed.
