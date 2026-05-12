# @repo/telemetry

Sentry and Evlog integration for LaunchBase.

## Purpose

This package owns observability wiring for Next.js instrumentation and runtime logging.

## Public API

- `@repo/telemetry/sentry/with-sentry`: Next.js Sentry config wrapper.
- `@repo/telemetry/sentry/client`: client Sentry config.
- `@repo/telemetry/sentry/server`: server Sentry config.
- `@repo/telemetry/sentry/edge`: edge Sentry config.
- `@repo/telemetry/evlog`: Evlog exports.
- `@repo/telemetry/evlog/next`: Next.js Evlog helpers.

## Environment

- `NEXT_PUBLIC_SENTRY_DSN` optional.
- `SENTRY_ORG` optional.
- `SENTRY_PROJECT` optional.
- `SENTRY_AUTH_TOKEN` optional.

Sentry upload integration requires all three server-side Sentry values.

## Boundaries

- Do not add analytics tracking here; use `@repo/analytics`.
- Do not log secrets, tokens, cookies, auth headers, or sensitive data.
- Do not make optional Sentry values required without deployment changes.

## Validation

```bash
pnpm --filter @repo/telemetry typecheck
```
