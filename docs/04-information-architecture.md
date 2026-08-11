# 04 — Information Architecture

## Site map

```
/
├── about
├── services
│   ├── marketplace-management
│   ├── listings-content
│   ├── growth
│   ├── operations
│   ├── compliance
│   └── warehouse-logistics
├── marketplaces
│   ├── amazon
│   ├── flipkart
│   ├── meesho
│   ├── myntra
│   ├── ajio
│   ├── jiomart
│   ├── blinkit
│   ├── zepto
│   └── ondc
├── pricing
├── case-studies
│   └── [slug]
├── industries
│   └── [slug]
├── blog
│   ├── [slug]
│   ├── category/[slug]
│   ├── tag/[slug]
│   └── author/[slug]
├── resources
├── faq
├── contact
├── privacy
├── terms
└── (404)
```

## Primary navigation

| Label | Href |
|---|---|
| Platform | `/#orvix-ai` (home anchor) + later `/platform` if spun out |
| Services | `/services` |
| Marketplaces | `/marketplaces` |
| Case Studies | `/case-studies` |
| Pricing | `/pricing` |
| Blog | `/blog` |
| Contact | `/contact` |

CTA in nav: **Book Free Consultation** → `/contact?intent=consultation`

Secondary paths: Audit → `/contact?intent=audit`

## Homepage story flow (required order)

1. Hero  
2. Marketplace logos  
3. Problem  
4. Why sellers struggle  
5. How we solve it  
6. AI platform (ORVIX AI)  
7. Dashboard preview  
8. Services  
9. Process  
10. Case studies  
11. Testimonials  
12. Pricing  
13. FAQ  
14. Final CTA  

## Service grouping (never flat-dump)

### Marketplace Management
Amazon, Flipkart, Meesho, Myntra, Ajio, JioMart, Blinkit, Zepto, ONDC

### Listings & Content
Catalog creation, SEO, images, A+ / EBC, videos, brand content

### Growth
Advertising, PPC, pricing, analytics, marketplace expansion

### Operations
Inventory, orders, returns, customer support

### Compliance
GST, trademark, brand registry, account health / reinstatement

### Warehouse & Logistics
Warehouse consulting, logistics support

Each service/category page includes: Overview · Benefits · Features · Process · Deliverables · FAQs · CTA

## Marketplace pages (programmatic SEO)

Shared template + marketplace-specific copy, FAQs, proof, and internal links to related services + blog.

## Conversion architecture

| Element | Placement |
|---|---|
| Sticky CTA | Global (mobile emphasis) |
| WhatsApp float | Global |
| Contact / audit forms | Contact + inline sections |
| Newsletter | Blog + footer |
| Exit intent | Later polish — optional, performance-aware |

## Footer IA

Company · Services · Marketplaces · Resources · Blog · Careers (link ready) · Privacy · Terms · Contact · Newsletter · Social

## Internal linking rules

- Marketplace pages ↔ related service categories  
- Blog posts → relevant marketplace + consultation CTA  
- Case studies → industry + marketplace  
- Every leaf page → Contact with intent param  
