# Security Package Guidelines

## Responsibility

`packages/security` owns HTTP security headers and Content Security Policy configuration shared by apps.

## Allowed Changes

- Nosecone security header options.
- CSP remote origins when required by actual product integrations.
- Security env schema for CSP reporting.

## Forbidden Changes

- Do not weaken CSP, frame, cookie, or cross-origin policies without explicit security rationale.
- Do not add broad wildcard origins unless narrowly justified.
- Do not import app code or feature modules.

## Dependency Boundaries

- Apps consume exported middleware and options.
- This package may depend on Nosecone and env validation only.
- Observability destinations should be configured through env where possible.

## Common Commands

- `pnpm --filter @repo/security typecheck`

## Validation

- Run `pnpm --filter @repo/security typecheck`.
- Run `pnpm web:build` when middleware options change.

## Check Before Editing

- `packages/security/src/security-headers.ts`
- `packages/security/env.ts`
- `apps/web/src/proxy.ts`
