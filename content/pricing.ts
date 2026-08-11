export const pricingTiers = [
  {
    name: "Launch",
    price: "Custom",
    blurb: "For new sellers establishing a clean foundation.",
    features: [
      "1–2 marketplaces",
      "Listing foundation program",
      "Account health baseline",
      "Monthly growth review",
      "Shared Slack / WhatsApp cadence",
    ],
    featured: false,
  },
  {
    name: "Scale",
    price: "Custom",
    blurb: "For brands ready to compound across channels.",
    features: [
      "Multi-marketplace operations",
      "ORVIX AI workflows",
      "Ads + content system",
      "Weekly operating reviews",
      "Expansion roadmap",
    ],
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    blurb: "For complex catalogs and governance needs.",
    features: [
      "Dedicated specialist pod",
      "Custom reporting & SLAs",
      "Warehouse & compliance support",
      "Multi-brand / multi-entity ops",
      "Quarterly business reviews",
    ],
    featured: false,
  },
] as const;

export const pricingFaqs = [
  {
    q: "Why is pricing custom?",
    a: "Catalog size, marketplaces, ad spend, and compliance needs change the work. We scope after a short discovery — not a one-size PDF.",
  },
  {
    q: "Is there a minimum engagement?",
    a: "Most engagements run quarterly so systems can compound. Launch pilots can be scoped tighter when fit is clear.",
  },
  {
    q: "What’s included in every plan?",
    a: "A named operating cadence, reporting, and access to ORVIX AI workflows appropriate to the tier — plus a path to consultation for changes in scope.",
  },
  {
    q: "Can we start with an audit only?",
    a: "Yes. Request a free ecommerce audit first. Many brands use it to decide whether a full operating engagement makes sense.",
  },
] as const;

export const pricingFactors = [
  "Number of marketplaces",
  "Active SKU count / catalog complexity",
  "Ads management scope",
  "Content & creative volume",
  "Compliance / reinstatement needs",
  "Warehouse & logistics consulting",
] as const;
