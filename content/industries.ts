export type Industry = {
  slug: string;
  title: string;
  headline: string;
  summary: string;
  overview: string;
  challenges: string[];
  howWeHelp: string[];
  relatedServices: string[];
  relatedCaseStudies: string[];
  seo: { title: string; description: string };
};

export const industries: Industry[] = [
  {
    slug: "d2c-brands",
    title: "D2C Brands",
    headline: "Marketplace expansion without losing brand control.",
    summary:
      "Take D2C brands onto Amazon, Flipkart, fashion, and quick commerce with content systems that protect positioning.",
    overview:
      "D2C teams are strong on brand and weak on marketplace ops. ORVIX becomes the operating layer — catalogs, ads, and health — while your brand stays intentional.",
    challenges: [
      "Marketplace content that dilutes brand voice",
      "Small teams drowning in catalog work",
      "Channel conflict and pricing confusion",
    ],
    howWeHelp: [
      "Brand-safe listing and A+/EBC systems",
      "ORVIX AI velocity with specialist polish",
      "Growth sequenced after catalog quality gates",
    ],
    relatedServices: ["listings-content", "growth", "marketplace-management"],
    relatedCaseStudies: ["beauty-d2c"],
    seo: {
      title: "Ecommerce Management for D2C Brands",
      description:
        "ORVIX helps D2C brands expand onto Indian marketplaces with AI-powered catalogs and specialist ops.",
    },
  },
  {
    slug: "manufacturers",
    title: "Manufacturers",
    headline: "Digitize catalogs. Sell with operational discipline.",
    summary:
      "Manufacturers and factories need clean product data, marketplace readiness, and ops that scale beyond a few hero SKUs.",
    overview:
      "We turn manufacturing assortments into marketplace-ready catalogs and install the rhythms that keep accounts healthy as volume grows.",
    challenges: [
      "Incomplete product data",
      "Slow listing cycles",
      "Account health surprises as volume rises",
    ],
    howWeHelp: [
      "Catalog enrichment programs",
      "Multi-marketplace launch plans",
      "Compliance and health monitoring",
    ],
    relatedServices: ["listings-content", "compliance", "marketplace-management"],
    relatedCaseStudies: ["home-essentials-brand"],
    seo: {
      title: "Marketplace Management for Manufacturers",
      description:
        "Help manufacturers sell on Amazon, Flipkart, and more with ORVIX catalog systems and account operations.",
    },
  },
  {
    slug: "importers",
    title: "Importers",
    headline: "Imported assortments that convert — and stay compliant.",
    summary:
      "Importers need accurate PDPs, documentation readiness, and returns control before ads make sense.",
    overview:
      "ORVIX tightens product truth, content accuracy, and account hygiene so imported catalogs earn trust instead of returns.",
    challenges: [
      "Attribute gaps and unclear claims",
      "High return rates",
      "Documentation and Brand Registry friction",
    ],
    howWeHelp: [
      "Content accuracy programs",
      "Returns reduction playbooks",
      "Brand Registry and health support",
    ],
    relatedServices: ["listings-content", "operations", "compliance"],
    relatedCaseStudies: ["fmcg-importer"],
    seo: {
      title: "Ecommerce Ops for Importers",
      description:
        "ORVIX helps importers launch and scale on Indian marketplaces with accurate listings and compliance support.",
    },
  },
  {
    slug: "fmcg",
    title: "FMCG",
    headline: "High-velocity categories need sharper ops.",
    summary:
      "FMCG on marketplaces lives or dies on availability, content clarity, and promo discipline.",
    overview:
      "We align listings, inventory signals, and growth loops for FMCG brands competing in crowded categories.",
    challenges: [
      "Availability vs ad waste",
      "Thin content in competitive search",
      "Promo pressure without margin floors",
    ],
    howWeHelp: [
      "Listing + keyword systems for category intent",
      "Inventory-aware operating cadence",
      "Growth with contribution-margin focus",
    ],
    relatedServices: ["growth", "operations", "marketplace-management"],
    relatedCaseStudies: ["fmcg-importer"],
    seo: {
      title: "FMCG Marketplace Management",
      description:
        "FMCG ecommerce management by ORVIX — listings, inventory cadence, and profitable growth on Indian marketplaces.",
    },
  },
  {
    slug: "home-living",
    title: "Home & Living",
    headline: "Home categories win on content and trust.",
    summary:
      "Size, material, and use-case clarity drive conversion — and reduce costly returns.",
    overview:
      "ORVIX rebuilds home & living catalogs for discovery and confidence, then scales with disciplined PPC.",
    challenges: [
      "Weak visual storytelling",
      "Spec confusion driving returns",
      "Ads propping up weak listings",
    ],
    howWeHelp: [
      "A+ and imagery systems",
      "Spec-accurate listing rewrites",
      "PPC after foundation fixes",
    ],
    relatedServices: ["listings-content", "growth", "operations"],
    relatedCaseStudies: ["home-essentials-brand"],
    seo: {
      title: "Home & Living Ecommerce Management",
      description:
        "Grow home and living brands on Amazon and Flipkart with ORVIX content systems and marketplace ops.",
    },
  },
  {
    slug: "beauty",
    title: "Beauty & Personal Care",
    headline: "Beauty brands need creative systems that scale.",
    summary:
      "From Meesho volume to Myntra presentation — beauty needs velocity and polish.",
    overview:
      "We install creative and catalog systems that keep beauty brands consistent across marketplaces while ORVIX AI accelerates drafts.",
    challenges: [
      "Creative bottlenecks",
      "Inconsistent shade/variant data",
      "Multi-channel brand drift",
    ],
    howWeHelp: [
      "AI-assisted catalog + creative workflows",
      "Fashion/lifestyle marketplace packs",
      "Unified brand standards",
    ],
    relatedServices: ["listings-content", "marketplace-management", "growth"],
    relatedCaseStudies: ["beauty-d2c"],
    seo: {
      title: "Beauty Brand Marketplace Management",
      description:
        "ORVIX helps beauty and personal care brands scale on Meesho, Myntra, Amazon, and more.",
    },
  },
];

export function getIndustry(slug: string) {
  return industries.find((i) => i.slug === slug);
}
