# @repo/rpc

oRPC context, procedures, and router exports for LaunchBase.

## Purpose

This package connects web route handlers to shared backend contracts. It owns RPC context setup and shared procedure behavior.

## Public API

- `@repo/rpc`: default oRPC exports.
- `@repo/rpc/*`: source-level RPC module exports configured by package exports.

## Boundaries

- Do not implement UI or app route handlers here.
- Do not bypass auth or read request state outside the established context pattern.
- Do not import from `apps/*`.
- Keep validation close to RPC procedures when adding them.

## Validation

```bash
pnpm typecheck
pnpm web:build
```
