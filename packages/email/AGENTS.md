# Email Package Guidelines

## Responsibility

`packages/email` owns React Email templates, email component composition, and future email provider env validation.

## Allowed Changes

- Email templates under `src/emails`.
- Email-local components under `src/components`.
- Public exports from `src/index.ts`.
- Email provider env schema once a provider is actually integrated.

## Forbidden Changes

- Do not add provider env keys before code uses them.
- Do not send real email from build, typecheck, or tests.
- Do not import app routes, database clients, or auth internals unless an exported contract requires it.

## Dependency Boundaries

- May depend on React Email and React.
- Provider-specific runtime should remain isolated and explicitly exported.
- Apps should consume exported email functions or templates.

## Common Commands

- `pnpm --filter @repo/email dev`
- `pnpm --filter @repo/email typecheck`

## Validation

- Run `pnpm --filter @repo/email typecheck`.
- Preview templates with `pnpm --filter @repo/email dev` when changing rendered emails.

## Check Before Editing

- `packages/email/src/index.ts`
- `packages/email/env.ts`
- `packages/email/package.json`
- Files under `packages/email/src/emails`
- Files under `packages/email/src/components`
