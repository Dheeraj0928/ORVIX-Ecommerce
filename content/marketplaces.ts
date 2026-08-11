export type Marketplace = {
  slug: string;
  name: string;
  headline: string;
  summary: string;
  overview: string;
  pains: string[];
  solutions: string[];
  services: string[];
  faqs: { q: string; a: string }[];
  seo: {
    title: string;
    description: string;
  };
};

export const marketplaces: Marketplace[] = [
  {
    slug: "amazon",
    name: "Amazon",
    headline: "Amazon account management built like product software.",
    summary:
      "Listings, Brand Registry, PPC, and account health — operated with ORVIX AI and specialist ownership.",
    overview:
      "Amazon rewards operational excellence. ORVIX runs catalog quality, advertising discipline, and health monitoring as one system so ranking and profit move together.",
    pains: [
      "Listing content that underperforms search and conversion",
      "ACoS creep without catalog fixes",
      "Account health and IP risks",
      "Slow catalog velocity for large assortments",
    ],
    solutions: [
      "SEO + A+ systems tied to search term data",
      "PPC structured around profitable SKUs",
      "Brand Registry and health monitoring",
      "ORVIX AI drafts for titles, bullets, and creative",
    ],
    services: [
      "marketplace-management",
      "listings-content",
      "growth",
      "compliance",
    ],
    faqs: [
      {
        q: "Do you manage Amazon Seller and Vendor accounts?",
        a: "We primarily operate Seller Central accounts and can advise Vendor relationships case by case.",
      },
      {
        q: "Can you help after a suspension?",
        a: "Yes — reinstatement support with structured plans of action, plus preventive health systems afterward.",
      },
    ],
    seo: {
      title: "Amazon Account Management India",
      description:
        "ORVIX Commerce manages Amazon seller accounts with AI-powered listings, PPC, and account health — book a free consultation.",
    },
  },
  {
    slug: "flipkart",
    name: "Flipkart",
    headline: "Flipkart growth with listing discipline and ops clarity.",
    summary:
      "Win Flipkart search and conversion with sharper catalogs, ads, and fulfillment-aware operations.",
    overview:
      "Flipkart has its own discovery and ops realities. We adapt content, pricing, and campaign structure to the platform — not a copy-paste of Amazon tactics.",
    pains: [
      "Thin listings losing category visibility",
      "Pricing pressure without margin control",
      "Returns and quality complaints",
      "Fragmented reporting vs Amazon",
    ],
    solutions: [
      "Flipkart-specific listing SEO and imagery",
      "Growth campaigns aligned to contribution margin",
      "Returns reduction via content + ops",
      "Unified reporting inside ORVIX cadence",
    ],
    services: ["marketplace-management", "listings-content", "growth", "operations"],
    faqs: [
      {
        q: "Do you handle Flipkart ads?",
        a: "Yes — campaign structure, creative testing, and weekly optimization loops.",
      },
    ],
    seo: {
      title: "Flipkart Account Management",
      description:
        "Flipkart seller management by ORVIX — listings, ads, and operations for Indian brands. Request a free ecommerce audit.",
    },
  },
  {
    slug: "meesho",
    name: "Meesho",
    headline: "Meesho catalog velocity without losing quality control.",
    summary:
      "Scale Meesho assortments with AI-assisted catalogs, pricing discipline, and ops that keep pace.",
    overview:
      "Meesho rewards assortment and speed. ORVIX AI accelerates drafts while specialists protect quality, claims accuracy, and margin.",
    pains: [
      "Huge catalog ops burden",
      "Inconsistent content quality",
      "Price races that erase profit",
      "Returns from unclear product truth",
    ],
    solutions: [
      "Bulk listing workflows with human QA",
      "Creative systems for trust and clarity",
      "Pricing suggestions tied to margin floors",
      "Ops playbooks for high-volume SKUs",
    ],
    services: ["marketplace-management", "listings-content", "growth", "operations"],
    faqs: [
      {
        q: "Can you onboard hundreds of SKUs?",
        a: "Yes — phased catalog programs with AI drafts and specialist review gates.",
      },
    ],
    seo: {
      title: "Meesho Account Management & Catalog Ops",
      description:
        "Grow on Meesho with ORVIX — AI catalog creation, pricing discipline, and marketplace operations for high-volume sellers.",
    },
  },
  {
    slug: "myntra",
    name: "Myntra",
    headline: "Myntra-ready brand content and fashion marketplace ops.",
    summary:
      "Fashion discovery is visual. We build content, brand storytelling, and ops that fit Myntra’s standards.",
    overview:
      "On Myntra, imagery and brand presentation are decisive. ORVIX pairs creative systems with marketplace operations so your brand feels premium and sellable.",
    pains: [
      "Inconsistent fashion imagery",
      "Weak brand story modules",
      "Size/fit returns",
      "Seasonal catalog pressure",
    ],
    solutions: [
      "Image and video systems for fashion PDPs",
      "Brand content aligned to Myntra norms",
      "Return-reduction content patterns",
      "Seasonal launch operating plans",
    ],
    services: ["listings-content", "marketplace-management", "growth"],
    faqs: [
      {
        q: "Do you help with fashion photography direction?",
        a: "Yes — briefs, AI-assisted concepts, and editing workflows; shoots can be coordinated as needed.",
      },
    ],
    seo: {
      title: "Myntra Account Management",
      description:
        "Myntra marketplace management by ORVIX — brand content, listings, and growth ops for fashion and lifestyle brands.",
    },
  },
  {
    slug: "ajio",
    name: "Ajio",
    headline: "Ajio marketplace operations for lifestyle brands.",
    summary:
      "Stand out on Ajio with sharper catalogs, content systems, and disciplined growth loops.",
    overview:
      "Ajio rewards brands that look intentional. We build listing quality, content cadence, and ops support tailored to lifestyle categories.",
    pains: [
      "Catalogs that feel generic",
      "Slow seasonal updates",
      "Weak cross-marketplace consistency",
    ],
    solutions: [
      "Lifestyle-focused content systems",
      "Assortment refresh workflows",
      "Unified brand standards across fashion channels",
    ],
    services: ["listings-content", "marketplace-management", "growth"],
    faqs: [
      {
        q: "Can Ajio be managed with Myntra together?",
        a: "Yes — shared creative systems with channel-specific adaptations.",
      },
    ],
    seo: {
      title: "Ajio Account Management",
      description:
        "Ajio seller and brand operations by ORVIX Commerce — listings, content, and growth for lifestyle brands in India.",
    },
  },
  {
    slug: "jiomart",
    name: "JioMart",
    headline: "JioMart readiness for grocery and general merchandise brands.",
    summary:
      "Get catalog, pricing, and fulfillment-aware ops right for JioMart’s shopper expectations.",
    overview:
      "JioMart blends convenience and value. We help brands operationalize listings and supply signals so availability and content stay aligned.",
    pains: [
      "Availability mismatches",
      "Thin product data",
      "Regional demand complexity",
    ],
    solutions: [
      "Catalog enrichment for discovery",
      "Inventory-aware operating cadence",
      "Pricing and promo discipline",
    ],
    services: ["marketplace-management", "operations", "warehouse-logistics"],
    faqs: [
      {
        q: "Do you support grocery categories?",
        a: "Yes — with compliance and freshness/ops constraints handled carefully.",
      },
    ],
    seo: {
      title: "JioMart Account Management",
      description:
        "JioMart marketplace management from ORVIX — catalog, ops, and logistics alignment for Indian brands.",
    },
  },
  {
    slug: "blinkit",
    name: "Blinkit",
    headline: "Quick commerce ops for Blinkit — speed without chaos.",
    summary:
      "Win Blinkit with assortment readiness, content clarity, and dark-store aware operations.",
    overview:
      "Quick commerce is a different game: availability windows, city density, and ruthless PDP clarity. ORVIX installs the operating habits that keep you in stock and visible.",
    pains: [
      "City-level stockouts",
      "PDPs that fail the 10-minute shopper",
      "Promo pressure without margin floors",
    ],
    solutions: [
      "Assortment and content for q-comm discovery",
      "Inventory signal routines",
      "Growth experiments with tight feedback loops",
    ],
    services: ["marketplace-management", "operations", "warehouse-logistics", "growth"],
    faqs: [
      {
        q: "Do you help with dark store availability?",
        a: "We align catalog and inventory planning with partner realities — critical for Blinkit success.",
      },
    ],
    seo: {
      title: "Blinkit Account Management",
      description:
        "Blinkit quick commerce management by ORVIX — assortment, content, and ops for high-speed retail.",
    },
  },
  {
    slug: "zepto",
    name: "Zepto",
    headline: "Zepto marketplace management for rapid-delivery brands.",
    summary:
      "Build Zepto presence with precise catalogs, availability discipline, and growth experiments.",
    overview:
      "On Zepto, speed and trust decide the cart. We help brands operationalize content and supply so performance isn’t left to chance.",
    pains: [
      "Inconsistent city performance",
      "Weak product content for impulse buys",
      "Ops noise across q-comm apps",
    ],
    solutions: [
      "High-clarity listing systems",
      "Multi-city ops cadence",
      "Unified q-comm reporting with Blinkit/others",
    ],
    services: ["marketplace-management", "operations", "growth"],
    faqs: [
      {
        q: "Can you manage Blinkit and Zepto together?",
        a: "Yes — shared q-comm playbooks with platform-specific execution.",
      },
    ],
    seo: {
      title: "Zepto Account Management",
      description:
        "Zepto seller operations by ORVIX Commerce — quick commerce listings, inventory cadence, and growth support.",
    },
  },
  {
    slug: "ondc",
    name: "ONDC",
    headline: "ONDC readiness for brands expanding beyond walled gardens.",
    summary:
      "Enter ONDC with clean catalogs, ops clarity, and a realistic growth path.",
    overview:
      "ONDC opens distribution — but only if product data and fulfillment posture are ready. ORVIX helps you enter with structure, not experiments that burn trust.",
    pains: [
      "Unclear onboarding path",
      "Catalog standards confusion",
      "Fulfillment complexity across network sellers",
    ],
    solutions: [
      "ONDC entry assessment",
      "Catalog structuring for network discovery",
      "Ops and logistics alignment guidance",
    ],
    services: ["marketplace-management", "listings-content", "warehouse-logistics"],
    faqs: [
      {
        q: "Is ONDC right for every brand?",
        a: "Not always. We assess fit before recommending investment — honesty over hype.",
      },
    ],
    seo: {
      title: "ONDC Seller Management & Onboarding",
      description:
        "ONDC ecommerce support from ORVIX — catalog readiness, ops guidance, and growth planning for Indian brands.",
    },
  },
];

export function getMarketplace(slug: string) {
  return marketplaces.find((m) => m.slug === slug);
}
