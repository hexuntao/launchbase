# @repo/analytics

Browser analytics integration for LaunchBase.

## Purpose

This package owns PostHog browser analytics initialization and the client-side env schema that enables it.

## Public API

- `@repo/analytics/posthog`: initializes PostHog when `NEXT_PUBLIC_POSTHOG_KEY` and `NEXT_PUBLIC_POSTHOG_HOST` are set.

## Environment

- `NEXT_PUBLIC_POSTHOG_KEY` optional, must start with `phc_` when set.
- `NEXT_PUBLIC_POSTHOG_HOST` optional, required only when PostHog is enabled.

## Boundaries

- Do not add server telemetry here; use `@repo/telemetry`.
- Do not make analytics env required for local development unless the product requirement changes.
- Do not import app routes, auth, database, or RPC code.

## Validation

```bash
pnpm --filter @repo/analytics typecheck
```
