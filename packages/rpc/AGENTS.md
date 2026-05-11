# RPC Package Guidelines

## Responsibility

`packages/rpc` owns oRPC context and router exports that connect app route handlers to backend capabilities.

## Allowed Changes

- oRPC context setup.
- Router composition and exported RPC entrypoints.
- Package exports and README documentation.

## Forbidden Changes

- Do not implement UI or app route handlers here.
- Do not bypass auth or directly read request state outside the established context pattern.
- Do not import from `apps/*`.

## Dependency Boundaries

- May depend on `@repo/auth` and `@repo/db`.
- Apps expose RPC through route handlers; this package owns shared RPC logic.
- Keep validation close to RPC procedures when adding them.

## Common Commands

- No package-local typecheck script is currently defined.
- Use `pnpm typecheck` after RPC changes.
- Use `pnpm web:build` when web route handlers consume changed RPC exports.

## Validation

- Run `pnpm typecheck`.
- Run `pnpm web:build` for router or context changes.

## Check Before Editing

- `packages/rpc/src/context.ts`
- `packages/rpc/src/orpc.ts`
- `packages/rpc/package.json`
- Relevant auth and database exports used by RPC.
