# 02 — Brand Guidelines

## Name & lockup

| Token | Value |
|---|---|
| Legal / display name | ORVIX Commerce |
| Short name | ORVIX |
| Tagline | Your Complete Ecommerce Growth Partner |
| Product line (AI) | ORVIX AI |

Wordmark is the hero brand signal on marketing surfaces. Do not bury the name in nav-only treatment on the homepage hero.

## Voice & tone

| Do | Don't |
|---|---|
| Confident, precise, benefit-led | Hype, fluff, buzzword salad |
| Speak outcomes (revenue, health, speed) | Speak only activities (“we post listings”) |
| Sound like a platform team | Sound like a freelance agency |
| Short sentences. Clear verbs. | Corporate jargon walls |

### Messaging hierarchy

1. **Platform promise** — intelligent marketplace operations at scale  
2. **AI leverage** — faster listings, sharper pricing, cleaner catalogs  
3. **Human expertise** — specialists who know each marketplace’s rules  
4. **Proof** — stats, case studies, retention, certifications  

### Approved positioning phrases

- Ecommerce Growth Partner  
- Ecommerce Operations Company  
- AI-powered Marketplace Management  
- Commerce Growth Platform  
- Marketplace Success Partner  

### Banned framing

- “Just another agency”  
- “Full-service digital marketing agency”  
- Cheap urgency (“Act now!!!”)  
- Fake scarcity  

## Visual identity direction

**Inspiration:** warmth, editorial rhythm, large whitespace, craftsmanship from the referenced design system — **not** a visual clone of any existing brand.

**References for craft quality only:** Stripe, Linear, Vercel, Framer, Apple.

### Color system

| Role | Name | Hex | Usage |
|---|---|---|---|
| Primary | Deep Charcoal | `#141414` | Text, strong UI, headers |
| Secondary | Warm White | `#FAF8F5` | Surfaces, secondary bg |
| Accent | Electric Blue | `#2F6BFF` | CTAs, links, focus, key UI chrome |
| Success | Emerald | `#0F9F6E` | Positive metrics, health |
| Warning | Orange | `#E87B2A` | Caution states only |
| Background | Warm Off-White | `#F7F4EF` | Page canvas |
| Card | Pure White | `#FFFFFF` | Elevated surfaces |
| Muted text | Soft Charcoal | `#5C5C5C` | Body secondary |
| Border | Warm Line | `#E8E4DE` | Dividers, card edges |

Gradients: sparingly. Prefer soft charcoal→warm white atmosphere or a restrained blue wash — never purple-glow SaaS clichés.

### Typography

| Role | Family | Notes |
|---|---|---|
| Display / Hero | **Satoshi** (Fontshare) | 700, tight tracking, ~72px desktop hero |
| UI / Body | **Manrope** | 400–600, 18px body, 16px buttons |
| Mono / data | **JetBrains Mono** | Dashboard mock numbers only |

Avoid Inter, Roboto, Arial, and system-ui as brand faces.

| Token | Desktop | Mobile | Weight | Tracking |
|---|---|---|---|---|
| Hero | 72px | 40px | 700 | -0.03em |
| H1 | 48px | 32px | 700 | -0.02em |
| H2 | 36px | 28px | 600 | -0.02em |
| H3 | 24px | 20px | 600 | -0.01em |
| Subhead | 22px | 18px | 500 | -0.01em |
| Body | 18px | 16px | 400 | 0 |
| Small | 14px | 13px | 400 | 0 |
| Button | 16px | 15px | 600 | 0 |

### Shape & depth

- Radius: `12px` default cards/inputs; `999px` only for true pills if required (prefer `10–14px`)  
- Shadows: soft, single-layer, warm-tinted (`rgba(20,20,20,0.06)`)  
- Glass: rare — nav blur or modal only  
- Cards: allowed for interactive groupings (services, pricing, FAQ). **No cards in hero.**

### Imagery

- Realistic ORVIX dashboard mockups  
- AI workflow diagrams  
- Marketplace health visualizations  
- Professional ops / warehouse / catalog contexts  
- Avoid stock “handshake” and emoji decoration  

### Logo usage (until final asset)

Interim: wordmark “ORVIX” in Satoshi 700 + small “Commerce” in Manrope 500 muted. Replace via `config/brand.ts` when SVG arrives.

## Accessibility

WCAG AA contrast on text/UI. Focus rings use accent blue. Honor `prefers-reduced-motion`.
