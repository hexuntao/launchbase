# @repo/auth

Better Auth integration for LaunchBase.

## Purpose

This package owns server and client auth setup, provider configuration, session behavior, and auth integration with the database and Redis.

## Public API

- `@repo/auth/server`: Better Auth server configuration.
- `@repo/auth/client`: client-side auth helpers.

## Environment

- `BETTER_AUTH_SECRET` required, minimum 32 characters.
- `GOOGLE_CLIENT_ID` optional.
- `GOOGLE_CLIENT_SECRET` optional.

Google sign-in is enabled only when both Google values are present.

## Boundaries

- Do not create app routes in this package.
- Do not change database schema here; use `@repo/db`.
- Do not bypass auth checks or weaken secure cookie behavior.
- Apps should consume exported auth entrypoints only.

## Validation

```bash
pnpm typecheck
pnpm web:build
```
