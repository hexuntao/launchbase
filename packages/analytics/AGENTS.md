# Analytics Package Guidelines

## Responsibility

`packages/analytics` owns client analytics integration, currently PostHog setup and env validation.

## Allowed Changes

- PostHog initialization and exported analytics helpers.
- Analytics env schema in `env.ts`.
- Package README and package metadata.

## Forbidden Changes

- Do not add server-only telemetry or Sentry behavior here.
- Do not import app routes, auth, database, or RPC code.
- Do not require analytics env values for local development unless product requirements change.

## Dependency Boundaries

- May depend on analytics SDKs and `@t3-oss/env-nextjs`.
- Apps consume this package through exported entrypoints.
- Keep browser analytics separate from `packages/telemetry`.

## Common Commands

- `pnpm --filter @repo/analytics typecheck`

## Validation

- Run `pnpm --filter @repo/analytics typecheck`.
- Run app builds if exported analytics behavior changes.

## Check Before Editing

- `packages/analytics/env.ts`
- `packages/analytics/src/posthog.ts`
- `packages/analytics/package.json`
