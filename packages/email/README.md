# @repo/email

React Email templates and rendering utilities for LaunchBase.

## Purpose

This package owns email template composition and future email provider integration boundaries.

## Public API

- `@repo/email`: exported templates and rendering utilities.

## Environment

No email provider variables are currently defined. Do not add provider env keys before provider code exists.

## Boundaries

- Do not send real email from build, typecheck, or tests.
- Do not import app routes, database clients, or auth internals unless an exported contract requires it.
- Keep provider-specific runtime behavior isolated behind explicit exports.

## Validation

```bash
pnpm --filter @repo/email typecheck
```
