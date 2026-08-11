# ORVIX Commerce — Marketing Website

AI-powered ecommerce growth platform marketing site.

## Source of truth

Read **every file** in [`/docs`](./docs) before writing or modifying code. Never violate those docs.

Key files:

- [`docs/project-status.md`](./docs/project-status.md) — progress
- [`docs/decision-log.md`](./docs/decision-log.md) — architectural decisions
- [`docs/08-development-rules.md`](./docs/08-development-rules.md) — workflow rules

## Current phase

**Phase 5 complete.** Production-ready marketing site (92 routes) with lead APIs, blog, and SEO.

## Stack

Next.js (App Router) · TypeScript · Tailwind · Framer Motion · RHF + Zod

## Scripts

```bash
npm install
cp .env.example .env.local   # fill site URL, WhatsApp, webhooks
npm run dev
npm run build
npm run check                # lead validation selfcheck
```

## Brand

Edit `config/brand.ts` to rebrand the site.
