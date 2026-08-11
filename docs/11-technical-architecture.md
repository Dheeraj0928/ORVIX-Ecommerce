# Technical Architecture

## Overview

Marketing website for ORVIX Commerce — Next.js App Router, content-driven marketplace/service pages, MDX blog, centralized config.

```
Browser
  → Next.js App Router (RSC)
      → Layout (header/footer/CTA chrome)
      → Page (composes sections)
          → config/* (brand, nav, seo)
          → content/* (MDX, case studies, marketplace data)
          → components/* (ui, layout, marketing, dashboard, forms)
```

## Data flow

| Data | Source | Consumed by |
|---|---|---|
| Brand strings/colors/contact | `config/brand.ts` | Layout, SEO, CTAs |
| Nav | `config/navigation.ts` | Header, footer |
| SEO defaults | `config/seo.ts` | Root metadata |
| Marketplaces | `content/marketplaces/*.ts` | Hub + detail pages |
| Services | `content/services/*.ts` | Services IA |
| Blog | `content/blog/*.mdx` | Blog routes |
| Case studies | `content/case-studies/*.ts` | Case study pages |

## Routing strategy

- Static generation for marketing pages  
- Dynamic `[slug]` for marketplaces, industries, case studies, blog  
- `contact?intent=consultation|audit` for CTA routing  

## Forms

Client components with RHF + Zod.  
Phase 1: POST to Route Handler / mailto-style stub with validation.  
Later: CRM / email provider — log decision when chosen.

## SEO pipeline

- Per-route `metadata` / `generateMetadata`  
- JSON-LD components fed by real content only  
- `next-sitemap` postbuild  
- `app/robots.ts`  

## Performance budget

- LCP < 2s on mid-fi mobile target  
- Minimal client JS: motion + forms only where needed  
- Images via `next/image`; fonts via `next/font` or documented loader for Satoshi  

## Environment

```
NEXT_PUBLIC_SITE_URL=
NEXT_PUBLIC_WHATSAPP_NUMBER=
NEXT_PUBLIC_CALENDLY_URL=   # optional later
```

Secrets never committed.
