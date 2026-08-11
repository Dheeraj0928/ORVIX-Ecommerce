# 03 — Design System

## Principles

1. **One composition per viewport** — especially the hero  
2. **Whitespace is structure** — editorial, not empty  
3. **Platform UI language** — marketing borrows product chrome  
4. **Motion serves comprehension** — never decoration  
5. **Tokens over magic numbers** — everything from the system  

## Spacing scale (4px base)

`0 1 2 3 4 5 6 8 10 12 16 20 24 32` → `0–128px`

Section vertical rhythm: `96–128px` desktop, `64–80px` mobile.

Content max width: `1120px` (prose/blog `720px`). Full-bleed for hero media and logo rails.

## Layout grid

- Mobile: 4 col, 16px gutter, 20px margin  
- Tablet: 8 col, 24px gutter  
- Desktop: 12 col, 24px gutter, 1200px container  
- Ultra-wide: same container; don’t stretch copy  

## Color tokens (CSS variables)

```css
--color-charcoal: #141414;
--color-warm-white: #FAF8F5;
--color-accent: #2F6BFF;
--color-success: #0F9F6E;
--color-warning: #E87B2A;
--color-bg: #F7F4EF;
--color-card: #FFFFFF;
--color-muted: #5C5C5C;
--color-border: #E8E4DE;
--color-focus: #2F6BFF;
```

Light theme is primary. Dark mode is a later extension — do not block Phase 1.

## Component recipes (high level)

| Component | Notes |
|---|---|
| Button primary | Charcoal fill OR accent fill for conversion CTAs; 16px Manrope 600; radius 12 |
| Button secondary | White / warm surface + border; same radius |
| Button ghost | Text + subtle hover wash |
| Input | White card surface, warm border, clear focus ring |
| Card | White, soft shadow, 12–16 radius; hover lift 2–4px max |
| Badge | Soft tint backgrounds (blue/emerald/warm) |
| Logo cloud | Grayscale → color on hover; infinite optional, prefer static for perf |
| Stat | Big number (display) + quiet label |
| Accordion FAQ | One open; smooth height; keyboardable |
| Pricing card | Featured plan uses accent ring, not loud gradient |
| Testimonial | Photo + quote + role; optional star row |
| Timeline / process | Horizontal desktop, vertical mobile |
| Table compare | Agency vs ORVIX — sparse, scannable |
| Dashboard mock | Framed product chrome; believable data; no fake “AI glow” overload |
| Sticky CTA | Mobile bottom bar; desktop optional corner chip — never block content |

## Iconography

Lucide (via shadcn). 1.5–2px stroke. Consistent size steps: 16 / 20 / 24.

## States

Default · Hover · Active · Focus-visible · Disabled · Loading · Error · Success

## Z-index scale

`base 0` · `dropdown 20` · `sticky 30` · `overlay 40` · `modal 50` · `toast 60`

## Breakpoints

`sm 640` · `md 768` · `lg 1024` · `xl 1280` · `2xl 1536`

## Wireframe notes (homepage)

See `04-information-architecture.md` for section order. Low-fi layout intent:

```
[ Nav: wordmark · links · Book Consultation ]
[ Hero: brand + H1 + sub + 2 CTAs | full-bleed dashboard plane ]
[ Logo rail: marketplaces ]
[ Problem → Struggle → Solution (3-beat story) ]
[ ORVIX AI feature tour ]
[ Dashboard preview / metrics ]
[ Services groups (6 cards) ]
[ Process timeline (5) ]
[ Case study strip ]
[ Testimonials ]
[ Pricing teaser ]
[ FAQ ]
[ Final CTA band ]
[ Footer ]
```
