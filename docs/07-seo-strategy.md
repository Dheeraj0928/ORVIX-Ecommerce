# 07 — SEO Strategy

## Goals

- Rank for high-intent marketplace management queries in India  
- Programmatic coverage of marketplace landing pages  
- Blog as compounding topical authority + lead nurture  
- Technical SEO + schema on every indexable page  

## Defaults (override per page via `config/seo.ts` + page metadata)

- Title pattern: `{Page} | ORVIX Commerce`  
- Home title: `ORVIX Commerce | AI-Powered Ecommerce Growth Partner`  
- Description length: 150–160 chars, benefit + CTA hint  
- Canonical: absolute production URL  
- OG + Twitter cards on all key pages  

## On-page requirements (every page)

- Semantic HTML (`main`, headings in order, landmarks)  
- Unique title + meta description  
- Canonical  
- OG / Twitter  
- Breadcrumbs (UI + schema where nested)  
- Image alt text  
- Internal links to services / marketplaces / contact  
- JSON-LD as applicable  

## Schema plan

| Schema | Where |
|---|---|
| Organization | Global |
| LocalBusiness | Contact / global (when address set) |
| Service | Service + marketplace pages |
| FAQPage | Pages with FAQ blocks |
| Review / AggregateRating | When real reviews available |
| Article + Author | Blog posts |
| BreadcrumbList | Nested routes |
| Speakable | Select articles (optional, later) |

Do not emit empty or fake review schema. Only real data.

## Programmatic SEO

Marketplace template fields: name, slug, hero, pain points, services offered, FAQs, related posts, CTAs.

Target examples:  
`Amazon account management India`, `Flipkart seller management`, `Meesho catalog management`, etc.

## Content strategy (blog)

Categories: Amazon · Flipkart · Meesho · Advertising · Inventory · GST & Compliance · Creative · AI Automation · Growth  

Initial article set (real, lead-oriented):

1. Amazon SEO: Title & Backend Keywords That Convert  
2. Flipkart Listing Optimization Checklist  
3. Meesho Selling Guide for New Brands  
4. Marketplace Advertising: ACoS vs Profit  
5. Inventory Discipline Across Multi-Marketplace Ops  
6. GST Essentials for Online Sellers  
7. Product Photography That Lifts Conversion  
8. How AI Speeds Catalog Creation (Without Junk Listings)  
9. Reducing Returns with Better Content & Ops  
10. Account Health: Prevent Suspension Before It Starts  

Each article: clear H1, scannable H2s, FAQ, CTA to audit/consult, related posts.

## Technical

- `next-sitemap` → sitemap.xml  
- `robots.txt` allow public; disallow preview/api as needed  
- App Router metadata API  
- Lazy load below-fold media  
- Preload display font  
- Prefer static/SSG for marketing pages  

## Measurement (later)

Search Console + analytics events: `cta_consultation`, `cta_audit`, `whatsapp_click`, `form_submit`
