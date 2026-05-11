# LaunchBase Web Design Guide

## Product Positioning

LaunchBase is a production-ready monorepo starter for teams building modern TypeScript products. The web experience should feel like a developer infrastructure surface: precise, fast, composed, and trustworthy.

## Visual Direction

- Clean, modern, developer-focused.
- Vercel-like clarity with Linear-like restraint.
- Dark mode friendly by default.
- Subtle glassmorphism only where it clarifies depth.
- Sharp typography, tight spacing, and disciplined contrast.
- Minimal gradients used as accents, not backgrounds.
- Visual metaphors should suggest monorepo, launch, base, stack, and infrastructure.

## Design Principles

- Lead with the product, not marketing decoration.
- Prefer useful interface density over oversized SaaS hero patterns.
- Keep surfaces calm; make hierarchy come from type, spacing, and contrast.
- Every decorative element must reinforce system, stack, launch, or infrastructure.
- Avoid generic dashboard templates and ornamental illustrations.

## Layout Rules

- Use full-width sections with constrained inner content.
- Keep cards for repeated items, modals, or genuinely framed tools only.
- Do not nest cards inside cards.
- Use stable dimensions for logos, buttons, icon controls, and status elements.
- Keep primary content visible without requiring a decorative hero.
- Maintain clear vertical rhythm with compact, readable groups.

## Color System

- Base neutrals: white, near-black, and neutral grays.
- Dark mode base: black or near-black with elevated neutral surfaces.
- Accent colors: restrained cyan, blue, or green for infrastructure/status cues.
- Gradients: limited to thin strokes, highlights, or logo details.
- Avoid one-note purple, beige, orange, or dark-blue palettes.
- Preserve accessible foreground/background contrast.

## Typography

- Use Geist for UI and body text.
- Use Asul only for restrained brand/display moments.
- Use Commit Mono for code, command snippets, and technical metadata.
- Do not scale font size directly with viewport width.
- Letter spacing should remain `0` unless a local component has a strong reason.

## Component Rules

- Buttons are compact, explicit commands.
- Use icons for familiar tool actions where available.
- Keep border radius at `8px` or lower unless an existing primitive defines it.
- Status indicators should be text plus a small visual cue, not color alone.
- Shared UI primitives belong in `packages/ui`; app-specific compositions stay in `apps/web`.

## Interaction Rules

- Motion should be subtle and purposeful: reveal, focus, or status changes only.
- Avoid long decorative animations.
- Hover states should not shift layout.
- Keyboard focus must remain visible.
- Loading actions should preserve the surrounding layout.

## Empty, Loading, and Error States

- Empty states should state what is missing and the next action.
- Loading states should reserve final dimensions.
- Error states should explain the failure and provide a retry or recovery path.
- Do not use playful copy for infrastructure or security failures.

## Responsive Rules

- Mobile screens should keep primary actions reachable and text readable.
- Use responsive grids that collapse predictably.
- Do not let long commands, package names, or environment keys overflow.
- Prefer wrapping or horizontal scroll for code blocks.
- Test at mobile, tablet, and desktop widths for overlap.

## Accessibility Baseline

- Meet WCAG AA contrast for text and interactive states.
- Provide alt text for meaningful images and empty alt text for decorative images.
- Preserve semantic headings.
- Ensure all controls are keyboard reachable.
- Do not rely on color alone to communicate success, warning, or failure.

## Do Examples

- Use a compact brand mark beside `LaunchBase`.
- Use neutral surfaces with one accent line for system status.
- Show code commands in mono type with copy affordances.
- Use crisp geometric motifs for stack and launch metaphors.

## Don't Examples

- Do not make LaunchBase look like a generic SaaS admin template.
- Do not fill pages with large decorative cards or bento blocks.
- Do not use external company logos as brand assets.
- Do not use oversized gradients, orbs, bokeh, or atmospheric stock imagery.
- Do not hide upstream `stack-found/vazen` attribution in docs or license notes.
