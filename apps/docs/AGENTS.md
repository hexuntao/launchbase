# Docs App Guidelines

## Responsibility

`apps/docs` is the LaunchBase documentation site. It owns Fumadocs configuration, MDX content, docs metadata, docs navigation, and documentation-specific UI composition.

## Allowed Changes

- Documentation content under `content/docs`.
- Docs app pages, layout, metadata, search, and shared layout options.
- Fumadocs and Next.js docs app config.
- Static docs assets under `public`.

## Forbidden Changes

- Do not document env keys that are not present in code.
- Do not remove upstream `stack-found/vazen` attribution from sync or license documentation.
- Do not put product app logic in the docs app.
- Do not duplicate shared UI components from `packages/ui`.

## Dependency Boundaries

- May import `@repo/ui` and docs-local components.
- Must not import `apps/web`.
- Shared documentation helpers should stay local unless another app needs them.

## Common Commands

- `pnpm docs:dev`
- `pnpm docs:build`
- `pnpm --filter docs typecheck`

## Validation

- Run `pnpm --filter docs typecheck` after MDX, source, or layout changes.
- Run `pnpm docs:build` for navigation, content, metadata, or Fumadocs changes.
- Run root `pnpm lint && pnpm typecheck && pnpm build` before merging code changes.

## Check Before Editing

- `apps/docs/source.config.ts`
- `apps/docs/src/app/layout.tsx`
- `apps/docs/src/lib/layout.shared.tsx`
- `apps/docs/content/docs/meta.json`
- Related files under `apps/docs/content/docs`.
