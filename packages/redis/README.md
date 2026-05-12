# @repo/redis

Upstash Redis client, key prefixing, and rate limiting helpers for LaunchBase.

## Purpose

This package owns Redis env validation and shared Redis access. Apps and packages should consume its exports instead of creating Redis clients directly.

## Public API

- `@repo/redis`: shared Redis client exports.
- `@repo/redis/rate-limit`: rate limiting helpers.
- `@repo/redis/env`: Redis env validation.

## Environment

- `UPSTASH_REDIS_REST_URL` required.
- `UPSTASH_REDIS_REST_TOKEN` required.

## Boundaries

- Do not hard-code production Redis URLs or tokens.
- Do not create Redis clients in apps or unrelated packages.
- Review dependent packages before making Redis optional.

## Validation

```bash
pnpm --filter @repo/redis typecheck
```
