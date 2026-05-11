# Redis Package Guidelines

## Responsibility

`packages/redis` owns Upstash Redis env validation, Redis client creation, key prefixing, and rate limiting utilities.

## Allowed Changes

- Redis client setup.
- Rate limit helpers.
- Key prefix logic.
- Redis env schema and `.env.example`.

## Forbidden Changes

- Do not hard-code production Redis URLs or tokens.
- Do not create Redis clients in apps or unrelated packages.
- Do not make Redis optional for code paths that currently require it without reviewing dependent packages.

## Dependency Boundaries

- May depend on Upstash Redis, Upstash Rate Limit, and env validation packages.
- `packages/auth` and `packages/db` may depend on this package.
- Must not import from apps.

## Common Commands

- `pnpm --filter @repo/redis typecheck`

## Validation

- Run `pnpm --filter @repo/redis typecheck`.
- Run root `pnpm typecheck` when exports or env shape changes.

## Check Before Editing

- `packages/redis/env.ts`
- `packages/redis/src/client.ts`
- `packages/redis/src/prefix.ts`
- `packages/redis/src/rate-limit.ts`
- `packages/redis/.env.example`
