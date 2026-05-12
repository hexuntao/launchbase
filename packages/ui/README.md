# @repo/ui

Shared UI primitives, styles, hooks, utilities, and font exports for LaunchBase.

## Purpose

This package owns presentation-focused building blocks and shared design tokens. Product-specific page composition stays inside apps.

## Public API

- `@repo/ui/globals.css`: shared Tailwind and CSS variables.
- `@repo/ui/fonts`: shared font exports.
- `@repo/ui/*`: exported UI components from `src/components`.
- `@repo/ui/hooks`: shared hooks.
- `@repo/ui/lib/*`: shared UI utilities.

## Boundaries

- Do not import auth, db, rpc, telemetry, security, analytics, or app code.
- Do not put LaunchBase product page content in shared components.
- Do not add external brand assets or heavy visual assets.
- Do not rename font assets unless every import and public export is updated deliberately.

## Validation

```bash
pnpm --filter @repo/ui typecheck
```
