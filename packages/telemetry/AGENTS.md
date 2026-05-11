# Telemetry Package Guidelines

## Responsibility

`packages/telemetry` owns Sentry and Evlog integration, including Next.js Sentry wrapping and runtime instrumentation exports.

## Allowed Changes

- Sentry client, edge, server, and Next.js wrapper code.
- Evlog exports and helpers.
- Optional telemetry env schema.

## Forbidden Changes

- Do not make optional Sentry env values required without deployment changes.
- Do not log secrets, tokens, cookies, auth headers, or personally sensitive data.
- Do not add analytics tracking here; use `packages/analytics`.

## Dependency Boundaries

- Apps consume Sentry and Evlog through package exports.
- This package should not import app pages, routes, database clients, or auth internals.
- Keep telemetry wrappers framework-specific only where exports make that explicit.

## Common Commands

- `pnpm --filter @repo/telemetry typecheck`

## Validation

- Run `pnpm --filter @repo/telemetry typecheck`.
- Run app builds when Next.js wrapper or instrumentation exports change.

## Check Before Editing

- `packages/telemetry/env.ts`
- `packages/telemetry/src/sentry/with-sentry.ts`
- `packages/telemetry/src/sentry/client.ts`
- `packages/telemetry/src/sentry/server.config.ts`
- `packages/telemetry/src/sentry/edge.config.ts`
- `packages/telemetry/src/evlog`
