# ORVIX Commerce — Marketing Website

A production-ready ecommerce growth platform marketing site built with modern Next.js tooling.

ture for Vercel deployment

## What visitors see

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/e07f8253-666a-45fe-99c7-922b7243fc28" />
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/fa67071c-9a87-458c-84b2-91df59890e5f" />
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/5d6f8e02-d693-430e-a496-4403c2b3edfd" />
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/62431a35-172a-43db-aec0-e868cfe2a2a5" />
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/6475034a-bc95-4df7-9c26-4ae7ad545487" />
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/d8ddecc8-eb67-40fd-a0eb-2e680645e7b7" />


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
