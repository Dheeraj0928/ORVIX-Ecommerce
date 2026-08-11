# ORVIX Commerce — Marketing Website

A production-ready ecommerce growth platform marketing site built with modern Next.js tooling.

ture for Vercel deployment

## What visitors see
<img width="1085" height="16384" alt="orvix-commerce vercel app_ (1)" src="https://github.com/user-attachments/assets/eccf4a1d-918f-4d33-8fdf-8fd28b0b5f4d" />




This repository is designed to give any reviewer a clear overview of the product:

- Hero and service pages
- Case study showcase
- Marketplace and operations positioning
- Contact form and payment-ready landing page flow
- SEO and blog content support

## Live preview

Visit the deployed site to see the live experience:

https://orvix-commerce.vercel.app

## Quick start

```bash
npm install
cp .env.example .env.local
npm run dev
```

### Build and validate

```bash
npm run build
npm run check
```

## Stack

Next.js (App Router) · TypeScript · Tailwind CSS · Framer Motion · React Hook Form · Zod

## Key files

- `app/layout.tsx` — root layout and metadata
- `app/page.tsx` — homepage
- `app/api/lead/route.ts` — lead form API
- `app/api/newsletter/route.ts` — newsletter API
- `config/brand.ts` — brand configuration
- `config/navigation.ts` — site navigation keys
- `docs` — project status, architecture, and rules

## Rebranding

The site is easily rebranded by editing `config/brand.ts` and swapping any marketing copy in `/content`.

## Notes

Read **every file** in [`/docs`](./docs) before modifying code. The docs are the source of truth for project decisions and workflows.
