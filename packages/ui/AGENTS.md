# UI Package Guidelines

## Responsibility

`packages/ui` owns shared UI primitives, global styles, font exports, hooks, and low-level UI utilities used by apps.

## Allowed Changes

- Reusable components under `src/components`.
- Shared styles under `src/styles`.
- Font exports under `src/fonts`.
- Utility functions under `src/lib`.
- UI package exports in `package.json`.

## Forbidden Changes

- Do not import auth, db, rpc, telemetry, security, analytics, or app code.
- Do not put product-specific page content in shared components.
- Do not add heavy visual assets or external brand logos.
- Do not rename font assets unless every import and public export is updated deliberately.

## Dependency Boundaries

- May depend on UI and styling libraries only.
- Apps import UI primitives from `@repo/ui`.
- This package should remain framework-compatible with the declared peer dependencies.

## Common Commands

- `pnpm --filter @repo/ui typecheck`

## Validation

- Run `pnpm --filter @repo/ui typecheck`.
- Run affected app builds for shared component, CSS, font, or export changes.

## Check Before Editing

- `packages/ui/package.json`
- `packages/ui/src/components`
- `packages/ui/src/styles/globals.css`
- `packages/ui/src/fonts/index.ts`
- `packages/ui/src/lib/utils.ts`
