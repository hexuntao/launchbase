# @repo/security

Security headers and Content Security Policy configuration for LaunchBase.

## Purpose

This package owns shared HTTP security options consumed by apps.

## Public API

- `@repo/security/security-headers`: security header configuration and helpers.

## Environment

- `NEXT_PUBLIC_ASSET_ORIGIN` optional, HTTP(S) URL added to CSP asset sources.
- `NEXT_PUBLIC_SENTRY_CSP_REPORT_ENDPOINT` optional, CSP reporting endpoint.

## Boundaries

- Do not weaken CSP, frame, cookie, or cross-origin policies without explicit rationale.
- Do not add broad wildcard origins casually.
- Do not import app code or feature modules.

## Validation

```bash
pnpm --filter @repo/security typecheck
```
