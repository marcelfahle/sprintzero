# SprintZero — Landing Page

Statically-rendered Next.js landing page for [sprintzero.sh](https://sprintzero.sh).

## Stack

- **Runtime / package manager:** [Bun](https://bun.sh) 1.3+
- **Framework:** [Next.js 16](https://nextjs.org) (App Router, Turbopack, React Compiler)
- **UI:** [React 19](https://react.dev)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com) (CSS-first `@theme`, no config file)
- **Linting:** [oxlint](https://oxc.rs/docs/guide/usage/linter) — 50–100x faster than ESLint
- **Formatting:** [oxfmt](https://oxc.rs) — Rust-based formatter
- **Typography:** Geist + Geist Mono via `next/font`
- **Rendering:** 100% static (SSG) — every route prerendered at build time

## Develop

```bash
bun install
bun run dev          # http://localhost:3000
bun run build        # production build (static)
bun run lint         # oxlint
bun run format       # oxfmt
bun run typecheck    # tsc --noEmit
```

## Layout

```
src/
├── app/
│   ├── layout.tsx       # root layout, fonts, metadata
│   ├── page.tsx         # composes the landing page sections
│   ├── globals.css      # Tailwind v4 + design tokens
│   └── icon.svg         # favicon
├── components/
│   ├── nav.tsx
│   ├── hero.tsx
│   ├── proof-strip.tsx
│   ├── problem-section.tsx
│   ├── case-study.tsx        # dark section
│   ├── what-we-are.tsx
│   ├── how-it-works.tsx
│   ├── deliverables.tsx
│   ├── x-ray-offer.tsx       # pricing — Hormozi anchor
│   ├── for-not-for.tsx
│   ├── founder-trust.tsx
│   ├── faq.tsx               # client component (accordion)
│   ├── final-cta.tsx         # dark section
│   ├── site-footer.tsx
│   └── container.tsx, wordmark.tsx
└── lib/
    └── constants.ts          # BOOKING_URL, XRAY_PRICE
```

## Design tokens

Tokens live in `src/app/globals.css` under Tailwind v4's `@theme` block.
Light theme is primary; the Case Study and Final CTA sections render dark
inline. Accent color is teal (`#0d9488` / `#14b8a6`).
