# Database Package Guidelines

## Responsibility

`packages/db` owns Drizzle configuration, schema exports, database client setup, and database env validation.

## Allowed Changes

- Drizzle schema files under `src/schema`.
- Database client exports in `src/index.ts`.
- `drizzle.config.ts`, `SCHEMA.md`, and database env validation.
- Migration-related scripts only with explicit approval.

## Forbidden Changes

- Do not run migrations without explicit approval.
- Do not invent env keys; derive them from `env.ts`.
- Do not put app feature logic in database schema files.
- Do not create alternate database clients in apps or other packages.

## Dependency Boundaries

- May depend on `@repo/redis` for env extension.
- Auth schema belongs here; auth runtime config belongs in `packages/auth`.
- Apps and packages should consume database exports instead of reaching into internals.

## Common Commands

- `pnpm --filter @repo/db typecheck`
- `pnpm --filter @repo/db db:generate`
- `pnpm --filter @repo/db db:migrate`
- `pnpm --filter @repo/db db:studio`

## Validation

- Run `pnpm --filter @repo/db typecheck`.
- Run root `pnpm typecheck && pnpm build` when schema exports affect apps.
- Migration commands require explicit user approval.

## Check Before Editing

- `packages/db/env.ts`
- `packages/db/drizzle.config.ts`
- `packages/db/src/schema/index.ts`
- `packages/db/src/schema/auth.ts`
- `packages/db/SCHEMA.md`
- `packages/db/.env.example`
