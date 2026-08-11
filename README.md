# ORVIX Commerce — Marketing Website

A production-ready ecommerce growth platform marketing site built with modern Next.js tooling.

ture for Vercel deployment

## What visitors see
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/b8cd7423-b58e-457a-ad2c-1c896391f899" />
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/41303f85-5fae-4e06-8b69-acff48cf8783" />
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/a80cd8c1-bb0b-411a-894f-119ade259f82" />
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/e7675b16-defd-4f5c-93ba-0f3d8fd9ce4f" />
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/88fa8c47-10ba-4663-a8a8-efc125ba33e0" />
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/a46bb061-3fb4-471f-ad07-2a20811cce91" />
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/db24106c-7ca2-4c03-b289-59112c40efe9" />
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/ae85315d-2f8d-47c9-be0f-c01a2980d0da" />
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/b9161d4b-1373-4e73-a2b8-59c2a94c1be0" />




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
