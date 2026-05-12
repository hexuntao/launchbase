# @repo/db

Database schema, PostgreSQL client, and Drizzle configuration for LaunchBase.

## Purpose

This package owns database access and schema exports. It is the only package that should create the PostgreSQL client.

## Public API

- `@repo/db`: database client and shared database exports.
- `@repo/db/schema`: Drizzle schema exports.

## Environment

- `DATABASE_URL` required.
- `UPSTASH_REDIS_REST_URL` required through `@repo/redis`.
- `UPSTASH_REDIS_REST_TOKEN` required through `@repo/redis`.

## References

- Domain schema reference: [SCHEMA.md](./SCHEMA.md)

## Boundaries

- Do not put app feature logic in schema files.
- Do not create alternate database clients in apps or other packages.
- Run migration commands only with explicit approval.

## Validation

```bash
pnpm --filter @repo/db typecheck
```
