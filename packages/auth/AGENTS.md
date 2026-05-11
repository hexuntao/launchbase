# Auth Package Guidelines

## Responsibility

`packages/auth` owns Better Auth client/server setup, auth providers, session storage, cookie settings, and auth-related integration with database and Redis.

## Allowed Changes

- Better Auth configuration in `src/server.ts`.
- Auth client exports in `src/client.ts`.
- Secondary storage behavior in `src/secondary-storage.ts`.
- Auth env validation in `env.ts`.

## Forbidden Changes

- Do not bypass auth checks or weaken secure cookie behavior.
- Do not add providers without corresponding env validation and `.env.example` updates.
- Do not create app routes in this package.
- Do not change database schema here; use `packages/db`.

## Dependency Boundaries

- May depend on `@repo/db` and `@repo/redis`.
- Apps should consume only exported auth entrypoints.
- Must not import from `apps/*`.

## Common Commands

- No package-local typecheck script is currently defined.
- Use `pnpm typecheck` after auth changes.
- Use `pnpm web:build` when auth server behavior affects the web app.

## Validation

- Run `pnpm typecheck`.
- Run `pnpm web:build` for server, cookie, provider, or route-facing auth changes.

## Check Before Editing

- `packages/auth/src/server.ts`
- `packages/auth/src/client.ts`
- `packages/auth/src/secondary-storage.ts`
- `packages/auth/env.ts`
- `packages/db/src/schema/auth.ts`
- `apps/web/src/proxy.ts`
