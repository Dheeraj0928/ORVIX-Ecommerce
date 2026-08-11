# 09 — Animation Guidelines

## Philosophy

Motion clarifies hierarchy and presence. If it doesn’t help comprehension or conversion, cut it.

Performance > spectacle.

## Allowed library

**Framer Motion only** (see Decision Log).

## Approved patterns

| Pattern | Use |
|---|---|
| Scroll reveal | Sections enter once (opacity + slight Y) |
| Stagger children | Logo clouds, service cards, stats |
| Animated counters | Stats row (respect reduced motion → show final) |
| Hover lift / border | Cards, buttons (CSS preferred when enough) |
| Accordion height | FAQ |
| Page section transitions | Subtle, shared layout sparingly |
| Soft gradient shift | Hero atmosphere only, low CPU |

## Disallowed / deferred

- GSAP timelines as default  
- Lenis smooth scroll (hurts a11y/perf unless revisited)  
- Mouse parallax on scroll-heavy pages  
- Card tilt as default  
- Loading screen splash  
- Button ripple libraries  
- Continuous infinite animations that steal attention  

## Accessibility

```css
@media (prefers-reduced-motion: reduce) {
  /* disable non-essential motion */
}
```

Always provide a non-motion equivalent state.

## Performance rules

- Animate `transform` and `opacity` only  
- Avoid layout thrash  
- Don’t animate large blurs on scroll  
- Lazy-mount heavy dashboard mock animations  
- One ambient motion max in hero  

## Review checklist

- [ ] Does this motion teach or guide?  
- [ ] Does it work with keyboard / SR?  
- [ ] Does it survive reduced motion?  
- [ ] Does LCP stay healthy?  
