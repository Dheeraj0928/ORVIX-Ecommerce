# 08 — Development Rules

## Source of truth

1. Read **every file** in `/docs` before writing or modifying code.  
2. Never violate `/docs`. If reality must change, update the doc + `decision-log.md` first.  
3. Update `project-status.md` after every major milestone.  
4. Record architectural choices in `decision-log.md`.

## Before creating any page

1. Think  
2. Research best practices (briefly)  
3. Reason about layout & conversion  
4. Design the layout against the design system  
5. Build / reuse components  
6. Assemble the page  
7. Optimize performance  
8. Optimize accessibility  
9. Optimize SEO  
10. Review against modern SaaS marketing standards  

## Brand configuration

Never hardcode company name, tagline, colors, contact, or social links in components.

Single source: `config/brand.ts` (+ `navigation.ts`, `seo.ts`).

## Stack (locked)

- Next.js (App Router) + TypeScript  
- Tailwind CSS + shadcn/ui  
- React Hook Form + Zod  
- Framer Motion only for motion  
- MDX for blog content  
- next-sitemap  

No GSAP / Lenis / Lottie unless a future decision explicitly adds them.

## Folder structure

```
app/
components/
  ui/
  layout/
  sections/
  dashboard/
  marketing/
  forms/
lib/
hooks/
types/
config/
  brand.ts
  navigation.ts
  seo.ts
content/
  blog/
  case-studies/
public/
styles/
docs/
```

## Phased delivery (automatic)

| Phase | Scope | Bar |
|---|---|---|
| 0 | Docs + architecture + scaffold | Foundation approved |
| 1 | Design tokens, shell, homepage story, contact, legal, 404 | Launch-ready home |
| 2 | Services + marketplace hub + detail pages | Programmatic SEO live |
| 3 | Pricing, case studies, industries, FAQ, about | Proof & offer complete |
| 4 | Blog/resources + full schema/sitemap | Content engine |
| 5 | CRO widgets polish + perf/a11y pass | Award-level finish |

Later phases extend; they do not redesign Phase 1 without a logged decision.

## Quality gates

- No dead-end pages  
- WCAG AA  
- Prefer Lighthouse 95+  
- Mobile-first  
- Diffs stay minimal and intentional (lazy senior ladder)  
