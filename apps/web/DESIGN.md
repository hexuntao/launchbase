# LaunchBase Web Design Guide

## Design Direction

LaunchBase uses an OpenAI Developers-inspired engineering minimalism, combined with Vercel's developer product clarity and Linear's refined workflow detail.

The web app should feel like a developer infrastructure product: precise, calm, technical, production-ready, minimal but not empty, and built for engineers who will fork, deploy, and extend the repository.

## Visual Principles

- Lead with engineering substance: monorepo structure, typed contracts, deployment flow, and AI coding boundaries.
- Use white and neutral gray surfaces as the default; hierarchy comes from type, spacing, borders, and density.
- Keep product UI text short and practical. Avoid marketing-heavy phrases such as "ultimate", "revolutionary", "next generation", or "best".
- Use subtle depth only where it clarifies panel grouping. Avoid heavy shadows, saturated colors, colorful gradients, or decorative background effects.
- Do not copy OpenAI, Vercel, Linear, or any external logo, asset, slogan, or proprietary layout.

## Color Tokens

Use shared tokens from `packages/ui/src/styles/globals.css`.

```css
--background: #ffffff;
--foreground: #0d0d0d;
--muted: #f6f6f6;
--muted-foreground: #666666;
--card: #ffffff;
--card-subtle: #f9f9f9;
--border: #e5e5e5;
--border-subtle: #eeeeee;
--primary: #0d0d0d;
--primary-foreground: #ffffff;
--secondary: #f3f3f3;
--secondary-foreground: #171717;
--accent: #ededed;
--accent-foreground: #111111;
--code-bg: #0d0d0d;
--code-fg: #f5f5f5;
```

Use semantic Tailwind classes first (`bg-background`, `text-foreground`, `border-border`). Use CSS-variable arbitrary values only for non-standard tokens such as `var(--border-subtle)` or `var(--code-bg)`.

## Typography

- UI and body: Geist, Inter, system-ui fallback.
- Code, commands, paths, package names: Geist Mono / Commit Mono / ui-monospace.
- Chinese copy should stay direct and engineering-oriented. Avoid mixed-language sentences unless the term is a package, command, or product name.
- Use compact but readable type. Do not scale font size directly with viewport width. Letter spacing should remain `0` except for carefully tuned large headings.

## Spacing, Radius, Shadows

- Page gutters: `px-5` mobile, `sm:px-8` desktop, constrained to `max-w-7xl`.
- Section rhythm: `py-16` mobile, `lg:py-20` or `lg:py-24` for major sections.
- Radius: 8px for compact controls, 10px for small panels, 16px for large preview frames, full radius only for pill buttons/status chips.
- Shadows: use `var(--shadow-subtle)` for individual cards and `var(--shadow-soft)` for the main product preview.
- Do not nest cards inside cards. Use one strong frame for complex previews, then rows or panels inside it.

## Components

- Header: white, sticky optional, thin bottom border, compact logo, four nav items, GitHub and Deploy actions.
- Hero: direct product headline, one supporting paragraph, two CTAs, and a code-native product preview.
- Preview panels: file tree, terminal, deploy status, or architecture flow. These must be native HTML/CSS, not screenshots.
- Feature grid: repeated cards only, one concise title and one explanatory sentence per card.
- Architecture section: show package/app boundaries through compact panels using mono names.
- AI workflow section: show read, edit, review flow with explicit validation and agent boundary language.

## Layout Rules

- First viewport must show LaunchBase as the main signal, not only nav text.
- Keep the next section slightly visible on common laptop viewports when possible.
- Use full-width sections with constrained inner content.
- Use neutral bands to separate major ideas; avoid large colored backgrounds.
- Long commands, paths, and env keys must wrap or scroll horizontally instead of overflowing.
- Mobile layouts should preserve CTA reachability and readable preview panels.

## Do / Don't

Do:

- Show monorepo files, terminal commands, package boundaries, deployment checks, and AI coding rules.
- Use compact panels, thin borders, precise spacing, and practical copy.
- Keep README, `github.svg`, logo, homepage, and docs banner visually aligned.
- Preserve upstream `stack-found/vazen` attribution in license, NOTICE, docs, and sync workflow sections.

Don't:

- Do not use blue-purple SaaS gradients, orbs, bokeh, cartoons, stock imagery, or 3D objects.
- Do not copy OpenAI, Vercel, or Linear brand marks, UI assets, or wording.
- Do not hide required upstream attribution.
- Do not add new dependencies for purely visual changes.
- Do not put product-specific LaunchBase sections into `packages/ui`.

## SVG And Screenshot Asset Rules

- `github.svg` should use English text by default for GitHub and social compatibility.
- SVGs must spell `LaunchBase` exactly. Never use `Lauch`, `Lunch`, or old product names in visible brand assets.
- Keep SVG colors neutral: white, near-black, and light gray. Avoid high-saturation accent fills.
- Prefer abstract module, foundation, grid, or package-system marks. Avoid near-copies of OpenAI swirl, Vercel triangle, or Linear logo geometry.
- SVG text should use broad fallbacks: `Geist, Inter, ui-sans-serif, system-ui`.

## AI Coding Instructions

- Before changing the homepage, read this file, `apps/web/AGENTS.md`, and the current homepage/i18n files.
- Keep English and Simplified Chinese copy parallel. If a section is added in English, add the Chinese mirror in `apps/web/src/lib/i18n.ts`.
- Use existing shared tokens and `@repo/ui` primitives before adding app-local styles.
- Validate visual changes with desktop and mobile browser screenshots, then run `pnpm lint`, `pnpm typecheck`, and `pnpm build` before handoff.
