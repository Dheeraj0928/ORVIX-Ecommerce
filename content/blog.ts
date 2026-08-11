export type Author = {
  slug: string;
  name: string;
  role: string;
  bio: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  category: string;
  tags: string[];
  relatedMarketplaces?: string[];
  sections: { heading: string; body: string[] }[];
  takeaways: string[];
};

export const authors: Author[] = [
  {
    slug: "orvix-editorial",
    name: "ORVIX Editorial",
    role: "Marketplace operations team",
    bio: "Operators and strategists who run multi-marketplace programs with ORVIX AI.",
  },
  {
    slug: "priya-nair",
    name: "Priya Nair",
    role: "Catalog & content lead",
    bio: "Specializes in listing systems, A+ content, and conversion-focused creative.",
  },
];

export const categories = [
  { slug: "amazon", title: "Amazon", description: "Amazon SEO, ads, and account health." },
  { slug: "flipkart", title: "Flipkart", description: "Flipkart listing and growth playbooks." },
  { slug: "meesho", title: "Meesho", description: "High-volume Meesho selling guides." },
  { slug: "advertising", title: "Advertising", description: "PPC, ACoS, and profitable growth." },
  { slug: "operations", title: "Operations", description: "Inventory, returns, and support." },
  { slug: "compliance", title: "GST & Compliance", description: "GST, Brand Registry, and health." },
  { slug: "creative", title: "Creative", description: "Photography and brand content." },
  { slug: "ai", title: "AI Automation", description: "AI for catalogs and marketplace ops." },
] as const;

export const posts: BlogPost[] = [
  {
    slug: "amazon-seo-titles-backend-keywords",
    title: "Amazon SEO: Titles & Backend Keywords That Convert",
    description:
      "A practical Amazon SEO system for titles and backend keywords — built for conversion, not keyword stuffing.",
    date: "2026-07-14",
    author: "priya-nair",
    category: "amazon",
    tags: ["amazon-seo", "listings", "keywords"],
    relatedMarketplaces: ["amazon"],
    takeaways: [
      "Lead with primary shopper intent — not every synonym.",
      "Backend keywords catch residual search without wrecking the title.",
      "Measure CTR and CVR together; SEO without conversion is vanity.",
    ],
    sections: [
      {
        heading: "What Amazon SEO actually optimizes for",
        body: [
          "Amazon is a product search engine. Rank follows relevance, performance, and availability — not blog-style backlinks.",
          "Your title and backend fields are the fastest levers you control. Treat them as a system: intent → proof → conversion.",
        ],
      },
      {
        heading: "Title structure that works",
        body: [
          "Lead with brand + primary keyword + defining attribute (size, material, count). Keep scannable on mobile.",
          "Avoid stuffing. If a phrase doesn’t help a shopper decide in two seconds, cut it.",
        ],
      },
      {
        heading: "Backend keywords without waste",
        body: [
          "Use backend search terms for synonyms, spelling variants, and secondary intents you didn’t fit in the title.",
          "Don’t repeat title words. Don’t use competitor brands. Keep the field dense and relevant.",
        ],
      },
      {
        heading: "Close the loop",
        body: [
          "Pair keyword work with main image and price competitiveness. Rank without conversion decays.",
          "Review search-term reports monthly and refresh the top 20% of SKUs that drive revenue.",
        ],
      },
    ],
  },
  {
    slug: "flipkart-listing-optimization-checklist",
    title: "Flipkart Listing Optimization Checklist",
    description:
      "A Flipkart-ready checklist for titles, images, attributes, and pricing signals that improve discovery and conversion.",
    date: "2026-07-18",
    author: "orvix-editorial",
    category: "flipkart",
    tags: ["flipkart", "listings", "checklist"],
    relatedMarketplaces: ["flipkart"],
    takeaways: [
      "Complete attributes beat clever copy alone.",
      "Image order should answer doubt, not decorate.",
      "Pricing and listing quality must be reviewed together.",
    ],
    sections: [
      {
        heading: "Start with completeness",
        body: [
          "Flipkart discovery leans hard on structured attributes. Incomplete specs hide good products.",
          "Audit category-required fields before rewriting marketing copy.",
        ],
      },
      {
        heading: "Title and imagery",
        body: [
          "Write titles for shopper clarity: brand, product type, key differentiator.",
          "Image 1 sells; images 2–6 explain size, texture, inclusions, and use. Remove lifestyle fluff that hides the product.",
        ],
      },
      {
        heading: "Weekly maintenance",
        body: [
          "Track verticals where you lose Buy Box / visibility and fix root causes — stock, price, or content.",
          "Don’t run ads on broken listings. Fix the PDP first.",
        ],
      },
    ],
  },
  {
    slug: "meesho-selling-guide-new-brands",
    title: "Meesho Selling Guide for New Brands",
    description:
      "How new brands should launch on Meesho: assortment, catalog velocity, pricing floors, and quality control.",
    date: "2026-07-22",
    author: "orvix-editorial",
    category: "meesho",
    tags: ["meesho", "launch", "catalog"],
    relatedMarketplaces: ["meesho"],
    takeaways: [
      "Velocity matters — but junk listings destroy trust.",
      "Set margin floors before you chase price wars.",
      "Use AI for drafts, humans for claims and QA.",
    ],
    sections: [
      {
        heading: "Launch with a controlled assortment",
        body: [
          "Don’t upload everything on day one. Start with SKUs that have clear photos, known margins, and reliable supply.",
          "Define a weekly catalog sprint: brief → AI draft → QA → publish.",
        ],
      },
      {
        heading: "Price with a floor",
        body: [
          "Meesho can get competitive fast. Decide your minimum contribution margin before promotions.",
          "Track returns by SKU — cheap listings that return heavily aren’t growth.",
        ],
      },
      {
        heading: "Scale what works",
        body: [
          "Double down on winners with better imagery and variant completeness.",
          "Expand adjacent SKUs only after ops can fulfill consistently.",
        ],
      },
    ],
  },
  {
    slug: "marketplace-advertising-acos-vs-profit",
    title: "Marketplace Advertising: ACoS vs Profit",
    description:
      "Stop optimizing ads for ACoS alone. A practical framework for profitable marketplace advertising.",
    date: "2026-07-26",
    author: "orvix-editorial",
    category: "advertising",
    tags: ["ppc", "acos", "profit"],
    relatedMarketplaces: ["amazon", "flipkart"],
    takeaways: [
      "ACoS without margin context is misleading.",
      "Fix listings before scaling spend.",
      "Separate launch, harvest, and defend campaign jobs.",
    ],
    sections: [
      {
        heading: "The ACoS trap",
        body: [
          "A low ACoS on an unprofitable SKU still loses money. A higher ACoS on a hero SKU can be rational during launch.",
          "Define target ACoS from contribution margin — not from a competitor’s screenshot.",
        ],
      },
      {
        heading: "Structure by job",
        body: [
          "Launch: learn search terms. Harvest: scale converters. Defend: protect brand queries.",
          "When everything sits in one campaign, you can’t see which job is failing.",
        ],
      },
      {
        heading: "Weekly loop",
        body: [
          "Negate waste, push budget to converters, and send listing fixes back to the catalog team.",
          "Ads are a feedback system for content — not a separate department.",
        ],
      },
    ],
  },
  {
    slug: "inventory-discipline-multi-marketplace",
    title: "Inventory Discipline Across Multi-Marketplace Ops",
    description:
      "How to keep inventory signals clean when you sell on Amazon, Flipkart, Meesho, and quick commerce.",
    date: "2026-07-30",
    author: "orvix-editorial",
    category: "operations",
    tags: ["inventory", "operations", "stockouts"],
    takeaways: [
      "Stockouts waste ad spend and rank.",
      "Each channel needs explicit buffer rules.",
      "Inventory is a growth constraint — treat it like one.",
    ],
    sections: [
      {
        heading: "Why multi-marketplace inventory breaks",
        body: [
          "Shared stock pools + channel-specific SLAs = oversell risk. Quick commerce makes the problem sharper.",
          "Without a single source of truth, every marketplace team invents its own buffer.",
        ],
      },
      {
        heading: "Operating rules that help",
        body: [
          "Define safety stock by velocity tier. Pause ads when cover days drop below threshold.",
          "Review stranded / unfulfillable inventory weekly — silent killers of cash.",
        ],
      },
    ],
  },
  {
    slug: "gst-essentials-online-sellers",
    title: "GST Essentials for Online Sellers",
    description:
      "A plain-English GST primer for marketplace sellers in India — what to get right before you scale ads.",
    date: "2026-08-01",
    author: "orvix-editorial",
    category: "compliance",
    tags: ["gst", "compliance", "india"],
    takeaways: [
      "Registration and invoice hygiene are non-negotiable.",
      "Marketplace reports must reconcile with your books.",
      "Compliance gaps become growth blockers at scale.",
    ],
    sections: [
      {
        heading: "Get the foundation right",
        body: [
          "Confirm GSTIN, business details, and category tax treatment before heavy catalog expansion.",
          "Wrong tax setup creates invoice and payout friction that ops teams feel every week.",
        ],
      },
      {
        heading: "Operate cleanly",
        body: [
          "Reconcile marketplace settlements with GST filings on a fixed calendar.",
          "When in doubt, involve a qualified tax professional — ORVIX guides process; we don’t replace your CA.",
        ],
      },
    ],
  },
  {
    slug: "product-photography-lifts-conversion",
    title: "Product Photography That Lifts Conversion",
    description:
      "What marketplace images must communicate — and how to build a creative system that scales.",
    date: "2026-08-02",
    author: "priya-nair",
    category: "creative",
    tags: ["photography", "conversion", "creative"],
    takeaways: [
      "Image 1 earns the click; the gallery earns the buy.",
      "Show scale, inclusions, and texture — not just lifestyle.",
      "Standards beat one-off hero shoots.",
    ],
    sections: [
      {
        heading: "Design for doubt removal",
        body: [
          "Shoppers buy when doubts die: size, material, what’s in the box, how it looks in context.",
          "Build a shot list per category and reuse it across SKUs.",
        ],
      },
      {
        heading: "AI can accelerate — not invent truth",
        body: [
          "Background removal and resize are safe automation. Fake attributes are not.",
          "Specialist review remains the gate before publish.",
        ],
      },
    ],
  },
  {
    slug: "ai-speeds-catalog-creation",
    title: "How AI Speeds Catalog Creation (Without Junk Listings)",
    description:
      "Use ORVIX-style AI workflows for titles, descriptions, and drafts — with QA gates that protect quality.",
    date: "2026-08-03",
    author: "orvix-editorial",
    category: "ai",
    tags: ["ai", "catalog", "automation"],
    relatedMarketplaces: ["meesho", "amazon"],
    takeaways: [
      "AI is a draft engine, not an autopilot publisher.",
      "Brief quality determines output quality.",
      "Measure cycle time and error rate, not just volume.",
    ],
    sections: [
      {
        heading: "The right workflow",
        body: [
          "Brief → AI draft → specialist review → publish → learn. Skip review and you scale mistakes.",
          "Store approved patterns (title formulas, bullet structures) so models stay on-brand.",
        ],
      },
      {
        heading: "Where AI helps most",
        body: [
          "First-pass titles, descriptions, keyword clusters, background removal, and bulk variants.",
          "Humans still own claims accuracy, compliance, and brand voice.",
        ],
      },
    ],
  },
  {
    slug: "reducing-returns-content-ops",
    title: "Reducing Returns with Better Content & Ops",
    description:
      "Returns are a content and operations problem. Here’s how to cut them without guessing.",
    date: "2026-08-04",
    author: "orvix-editorial",
    category: "operations",
    tags: ["returns", "content", "ops"],
    takeaways: [
      "Tag return reasons — anecdotes aren’t a strategy.",
      "Fix expectation gaps in images and bullets first.",
      "Support macros should feed catalog improvements.",
    ],
    sections: [
      {
        heading: "Find the real drivers",
        body: [
          "Group returns: size/fit, quality, ‘not as described’, damage, changed mind.",
          "Each cluster has a different fix — content, packaging, or product.",
        ],
      },
      {
        heading: "Close the loop to listings",
        body: [
          "If ‘not as described’ spikes, rewrite the PDP and imagery before boosting ads.",
          "Weekly returns review should include catalog owners, not only support.",
        ],
      },
    ],
  },
  {
    slug: "account-health-prevent-suspension",
    title: "Account Health: Prevent Suspension Before It Starts",
    description:
      "A preventive account-health system for marketplace sellers — metrics, documentation, and response habits.",
    date: "2026-08-05",
    author: "orvix-editorial",
    category: "compliance",
    tags: ["account-health", "suspension", "compliance"],
    relatedMarketplaces: ["amazon", "flipkart"],
    takeaways: [
      "Watch leading indicators weekly.",
      "Documentation readiness beats panic POAs.",
      "Prevention is cheaper than reinstatement.",
    ],
    sections: [
      {
        heading: "Monitor what matters",
        body: [
          "Order defect, cancellation, late shipment, policy compliance — know your thresholds.",
          "Don’t wait for a suspension email to discover a metric drift.",
        ],
      },
      {
        heading: "Be reinstatement-ready (hoping you never need it)",
        body: [
          "Keep invoices, IP docs, and process evidence organized.",
          "If an issue hits, respond with root cause, correction, and prevention — not emotion.",
        ],
      },
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}

export function getAuthor(slug: string) {
  return authors.find((a) => a.slug === slug);
}

export function getCategory(slug: string) {
  return categories.find((c) => c.slug === slug);
}

export function postsByCategory(slug: string) {
  return posts.filter((p) => p.category === slug);
}

export function postsByTag(tag: string) {
  return posts.filter((p) => p.tags.includes(tag));
}

export function postsByAuthor(slug: string) {
  return posts.filter((p) => p.author === slug);
}

export function allTags() {
  return [...new Set(posts.flatMap((p) => p.tags))].sort();
}

export function relatedPosts(post: BlogPost, limit = 3) {
  return posts
    .filter(
      (p) =>
        p.slug !== post.slug &&
        (p.category === post.category ||
          p.tags.some((t) => post.tags.includes(t))),
    )
    .slice(0, limit);
}
