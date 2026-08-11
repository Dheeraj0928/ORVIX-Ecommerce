export type ServiceCategory = {
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  overview: string;
  benefits: string[];
  features: string[];
  process: { title: string; body: string }[];
  deliverables: string[];
  faqs: { q: string; a: string }[];
  relatedMarketplaces: string[];
};

export const serviceCategories: ServiceCategory[] = [
  {
    slug: "marketplace-management",
    title: "Marketplace Management",
    eyebrow: "Account operations",
    summary:
      "End-to-end account ops across Amazon, Flipkart, Meesho, fashion, and quick commerce.",
    overview:
      "ORVIX runs your seller accounts as an operating system — listings, orders, health, and growth loops — so you stop firefighting tabs and start compounding revenue.",
    benefits: [
      "Single operating cadence across marketplaces",
      "Proactive account-health monitoring",
      "Faster catalog and campaign execution via ORVIX AI",
      "Clear weekly reporting tied to outcomes",
    ],
    features: [
      "Amazon, Flipkart, Meesho, Myntra, Ajio, JioMart, Blinkit, Zepto, ONDC",
      "Account setup, optimization, and day-to-day management",
      "Order & return exception handling",
      "Brand Registry and policy alignment support",
    ],
    process: [
      { title: "Audit", body: "Map account health, catalog gaps, and ops bottlenecks." },
      { title: "Operate", body: "Stand up rhythms for listings, tickets, and inventory signals." },
      { title: "Optimize", body: "Tighten conversion, fees leakage, and policy risk." },
      { title: "Scale", body: "Expand SKUs and marketplaces with controlled playbooks." },
    ],
    deliverables: [
      "Marketplace operating plan",
      "Weekly performance + health report",
      "Listing and ticket SLAs",
      "Expansion roadmap",
    ],
    faqs: [
      {
        q: "Can you manage multiple marketplaces together?",
        a: "Yes. Multi-marketplace ops is the default — with channel-specific playbooks under one cadence.",
      },
      {
        q: "Do you need admin access?",
        a: "We operate with the least privilege required and document access clearly in onboarding.",
      },
    ],
    relatedMarketplaces: ["amazon", "flipkart", "meesho"],
  },
  {
    slug: "listings-content",
    title: "Listings & Content",
    eyebrow: "Catalog systems",
    summary:
      "Catalogs, SEO, imagery, A+/EBC, and video that convert browsers into buyers.",
    overview:
      "Conversion starts on the listing. ORVIX AI drafts titles, copy, keywords, and creative — specialists refine for marketplace rules and brand voice.",
    benefits: [
      "Higher CTR and conversion from sharper content",
      "Consistent brand story across channels",
      "Faster catalog velocity without junk listings",
      "Fewer returns from clearer product truth",
    ],
    features: [
      "Catalog creation & enrichment",
      "Marketplace SEO / keyword systems",
      "Image editing, AI images, background removal",
      "A+ / Enhanced Brand Content & video",
    ],
    process: [
      { title: "Brief", body: "Capture product truth, differentiators, and compliance needs." },
      { title: "Generate", body: "ORVIX AI drafts titles, bullets, keywords, and creative directions." },
      { title: "Polish", body: "Specialists validate claims, style, and marketplace constraints." },
      { title: "Publish", body: "Ship, measure CTR/CVR, and iterate winners." },
    ],
    deliverables: [
      "Optimized listing pack per SKU/family",
      "Keyword map",
      "Creative assets / A+ modules",
      "Refresh backlog prioritized by impact",
    ],
    faqs: [
      {
        q: "Do you rewrite existing catalogs?",
        a: "Yes — we prioritize high-traffic and high-margin SKUs first for maximum lift.",
      },
      {
        q: "Can AI publish without review?",
        a: "No. AI accelerates drafts; specialists approve before publish.",
      },
    ],
    relatedMarketplaces: ["amazon", "myntra", "ajio"],
  },
  {
    slug: "growth",
    title: "Growth",
    eyebrow: "Demand generation",
    summary:
      "PPC, pricing, analytics, and expansion into the next marketplace with intent.",
    overview:
      "Ads and pricing only work when the catalog and ops underneath are sound. We connect spend to listing quality, margin, and expansion timing.",
    benefits: [
      "Efficient acquisition with healthier ACoS/ROAS",
      "Pricing that protects margin while staying competitive",
      "Clear analytics that drive decisions",
      "Sequenced marketplace expansion",
    ],
    features: [
      "Sponsored ads / PPC management",
      "Pricing automation recommendations",
      "Performance analytics dashboards",
      "Marketplace expansion playbooks",
    ],
    process: [
      { title: "Baseline", body: "Audit structure, search terms, and contribution margin." },
      { title: "Restructure", body: "Rebuild campaigns around winners and intent clusters." },
      { title: "Learn", body: "Weekly loops connecting ads → listing → inventory." },
      { title: "Expand", body: "Open new marketplaces when unit economics are ready." },
    ],
    deliverables: [
      "Campaign architecture",
      "Weekly growth report",
      "Pricing recommendations",
      "Expansion scorecard",
    ],
    faqs: [
      {
        q: "Do you guarantee ACoS?",
        a: "No honest partner does. We optimize toward profitable growth targets defined with you.",
      },
    ],
    relatedMarketplaces: ["amazon", "flipkart", "meesho"],
  },
  {
    slug: "operations",
    title: "Operations",
    eyebrow: "Fulfillment & support",
    summary:
      "Inventory, orders, returns, and customer support run as a single system.",
    overview:
      "Ops is where margin quietly disappears. We install rhythms for inventory signals, order exceptions, returns reduction, and customer response quality.",
    benefits: [
      "Fewer stockouts and oversells",
      "Lower return rates through root-cause fixes",
      "Faster ticket resolution",
      "Cleaner buyer experience that protects rankings",
    ],
    features: [
      "Inventory monitoring & forecasting support",
      "Order management workflows",
      "Return reduction programs",
      "Customer support playbooks",
    ],
    process: [
      { title: "Map", body: "Trace order, return, and inventory failure points." },
      { title: "Install", body: "Define SLAs, owners, and escalation paths." },
      { title: "Reduce", body: "Attack return drivers in content and ops." },
      { title: "Automate", body: "Use ORVIX signals to catch issues earlier." },
    ],
    deliverables: [
      "Ops SOP pack",
      "Inventory alert framework",
      "Returns dashboard",
      "Support macros / QA checklist",
    ],
    faqs: [
      {
        q: "Do you warehouse products?",
        a: "We consult and coordinate logistics partners; physical warehousing is scoped separately.",
      },
    ],
    relatedMarketplaces: ["blinkit", "zepto", "jiomart"],
  },
  {
    slug: "compliance",
    title: "Compliance",
    eyebrow: "Trust & continuity",
    summary:
      "GST, trademark, Brand Registry, and account health — before issues escalate.",
    overview:
      "Suspensions and policy strikes destroy momentum. We harden Brand Registry, documentation, and health monitoring so growth isn’t one ticket away from stopping.",
    benefits: [
      "Lower suspension risk",
      "Faster reinstatement pathways when issues arise",
      "Cleaner brand protection",
      "GST and registration guidance with specialists",
    ],
    features: [
      "Account health monitoring",
      "Suspension reinstatement support",
      "Brand Registry & trademark assistance",
      "GST / business registration guidance",
    ],
    process: [
      { title: "Diagnose", body: "Review health dashboards, IP, and documentation gaps." },
      { title: "Secure", body: "Complete Brand Registry and policy hygiene." },
      { title: "Monitor", body: "Watch leading indicators, not just suspensions." },
      { title: "Respond", body: "Structured POAs and reinstatement support when needed." },
    ],
    deliverables: [
      "Health risk report",
      "Brand Registry checklist",
      "Documentation vault guidance",
      "Incident response playbook",
    ],
    faqs: [
      {
        q: "Can you guarantee reinstatement?",
        a: "No. We build the strongest possible case and process — outcomes depend on marketplace review.",
      },
    ],
    relatedMarketplaces: ["amazon", "flipkart"],
  },
  {
    slug: "warehouse-logistics",
    title: "Warehouse & Logistics",
    eyebrow: "Supply chain",
    summary: "Consulting and logistics support so fulfillment matches demand.",
    overview:
      "Marketplace growth fails when supply can’t keep up. We help you design warehouse posture, 3PL fit, and SLA alignment for the channels you sell on.",
    benefits: [
      "Fulfillment matched to marketplace SLAs",
      "Better regional coverage decisions",
      "Reduced stockout-driven ad waste",
      "Clearer delivery promise to shoppers",
    ],
    features: [
      "Warehouse consulting",
      "Logistics partner evaluation support",
      "SLA & capacity planning",
      "Quick-commerce readiness guidance",
    ],
    process: [
      { title: "Assess", body: "Demand patterns, regions, and current node constraints." },
      { title: "Design", body: "Recommend network posture and partner criteria." },
      { title: "Align", body: "Connect inventory planning to marketplace ops." },
      { title: "Review", body: "Quarterly capacity and SLA reviews." },
    ],
    deliverables: [
      "Network recommendation memo",
      "Partner scorecard",
      "Inventory-policy alignment notes",
      "Quarterly review pack",
    ],
    faqs: [
      {
        q: "Do you replace our 3PL?",
        a: "We help you choose and manage the right setup — not force a single warehouse vendor.",
      },
    ],
    relatedMarketplaces: ["blinkit", "zepto", "amazon"],
  },
];

export function getService(slug: string) {
  return serviceCategories.find((s) => s.slug === slug);
}
