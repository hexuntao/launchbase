# Web App Guidelines

## Responsibility

`apps/web` is the primary LaunchBase product app. It owns user-facing routes, app metadata, auth route mounting, RPC route mounting, Sentry instrumentation, and the browser entrypoints that compose shared packages.

## Allowed Changes

- App Router pages, layouts, metadata, loading/error UI, and route handlers in `src/app`.
- Web-only middleware/proxy behavior in `src/proxy.ts`.
- Web app env examples in `.env.example`.
- App-level Next.js and Sentry config when required by the task.

## Forbidden Changes

- Do not define shared UI primitives here; use `packages/ui`.
- Do not create database clients here; use `@repo/db`.
- Do not duplicate auth, telemetry, security, analytics, or RPC package logic.
- Do not hard-code production secrets or real deployment URLs.

## Dependency Boundaries

- May import from `@repo/auth`, `@repo/rpc`, `@repo/security`, `@repo/telemetry`, `@repo/analytics`, and `@repo/ui`.
- Must not be imported by any `packages/*` package.
- Keep route handlers thin; shared behavior belongs in packages.

## Common Commands

- `pnpm web:dev`
- `pnpm web:build`
- `pnpm --filter web typecheck`

## Validation

- Run `pnpm --filter web typecheck` for web-only TypeScript changes.
- Run `pnpm web:build` for route, metadata, env, or Next.js config changes.
- Run root `pnpm lint && pnpm typecheck && pnpm build` before merging code changes.

## Check Before Editing

- `apps/web/package.json`
- `apps/web/next.config.ts`
- `apps/web/src/app/layout.tsx`
- `apps/web/src/proxy.ts`
- `apps/web/.env.example`
- Relevant `@repo/*` package files for imported behavior.
