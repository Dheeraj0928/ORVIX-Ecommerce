# 05 — Component Library

## Inventory (build once, reuse everywhere)

### `components/ui/` (shadcn primitives)
Button, Input, Textarea, Label, Checkbox, Select, Dialog, Sheet, Accordion, Tabs, Badge, Card, Separator, Tooltip, Toast, Skeleton

### `components/layout/`
`SiteHeader`, `SiteFooter`, `Container`, `Section`, `PageHeader`, `Breadcrumbs`, `StickyCta`, `WhatsAppButton`, `MobileNav`

### `components/marketing/`
`Hero`, `LogoCloud`, `ProblemBand`, `StruggleGrid`, `SolutionBand`, `StatsRow`, `FeatureTour`, `ProcessTimeline`, `ComparisonTable`, `TestimonialCarousel`, `CaseStudyCard`, `PricingTeaser`, `FaqAccordion`, `FinalCta`, `TrustBar`, `NewsletterForm`

### `components/dashboard/` (marketing mocks only)
`DashboardShell`, `MetricCard`, `RevenueChart`, `HealthGauge`, `ListingPreview`, `AiWorkflowDiagram`, `InventorySparkline`, `MarketplaceSwitcher`

### `components/sections/`
Page-level compositions that assemble marketing blocks (home sections, service sections)

### `components/forms/`
`ConsultationForm`, `AuditForm`, `ContactForm`, `NewsletterForm` — React Hook Form + Zod

## Rules

- Prefer composition over new one-off sections  
- No duplicated markup across pages — extract after second use  
- Dashboard pieces are **presentational mocks** with static/demo data  
- All user-facing strings that are brand-level come from `config/` or `content/`  

## Priority build order

1. Layout shell (header/footer/container/section)  
2. Buttons + forms primitives  
3. Home marketing blocks in story order  
4. Dashboard mocks for AI + preview sections  
5. Shared page headers, breadcrumbs, FAQ, CTA  
6. Blog/MDX components later  
