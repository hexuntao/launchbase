# LaunchBase Docs

Fumadocs documentation site for LaunchBase.

## Scope

This app owns:

- English and Simplified Chinese MDX documentation under `content/docs`.
- Docs navigation through `meta.json` files.
- Docs metadata, search, OG routes, and layout configuration.
- Documentation-specific UI composition.

## Local development

```bash
pnpm docs:dev
pnpm --filter docs typecheck
pnpm docs:build
```

## Content rules

- English is the default public documentation entry.
- Simplified Chinese mirrors the same structure for local developer documentation.
- Do not document env keys before code reads them.
- Preserve upstream `stack-found/vazen` attribution only in license, NOTICE, and upstream sync contexts.
- Keep visual language aligned with the main LaunchBase site: neutral, precise, documentation-first, and developer-focused.
