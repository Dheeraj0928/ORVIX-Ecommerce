export type CaseStudy = {
  slug: string;
  title: string;
  metric: string;
  detail: string;
  summary: string;
  industry: string;
  marketplaces: string[];
  challenge: string;
  approach: string[];
  results: { label: string; value: string }[];
  timeline: { month: string; note: string }[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "home-essentials-brand",
    title: "Home essentials brand",
    metric: "+162% revenue",
    detail: "Amazon + Flipkart · 9 months",
    summary:
      "Listing rebuild, A+ content, and disciplined PPC cut ACoS while scaling.",
    industry: "home-living",
    marketplaces: ["amazon", "flipkart"],
    challenge:
      "Strong products, weak discovery. Listings under-indexed for search intent, A+ was thin, and ads were propping up a broken catalog.",
    approach: [
      "Rebuilt titles, bullets, and backend keywords from search-term evidence",
      "Shipped A+ modules and imagery standards across hero SKUs",
      "Restructured PPC around profitable ASIN clusters",
      "Installed weekly ops cadence for health, inventory, and creative refresh",
    ],
    results: [
      { label: "Revenue", value: "+162%" },
      { label: "ACoS", value: "−28 pts" },
      { label: "Session CVR", value: "+41%" },
      { label: "Return rate", value: "−19%" },
    ],
    timeline: [
      { month: "M1–2", note: "Audit + listing foundation on top 40 SKUs" },
      { month: "M3–5", note: "A+ rollout + PPC restructure" },
      { month: "M6–9", note: "Scale winners + Flipkart expansion" },
    ],
  },
  {
    slug: "beauty-d2c",
    title: "Beauty D2C label",
    metric: "3.1× orders",
    detail: "Meesho + Myntra · 6 months",
    summary:
      "Catalog automation and creative system unlocked multi-marketplace volume.",
    industry: "beauty",
    marketplaces: ["meesho", "myntra"],
    challenge:
      "D2C brand expanding onto marketplaces with a small team — catalog velocity and fashion-grade creative were the bottleneck.",
    approach: [
      "ORVIX AI drafts for Meesho bulk listings with specialist QA gates",
      "Myntra-ready imagery and brand content system",
      "Shared creative guidelines across channels",
      "Growth experiments sequenced after listing quality thresholds",
    ],
    results: [
      { label: "Orders", value: "3.1×" },
      { label: "SKU live", value: "4× faster" },
      { label: "Myntra CVR", value: "+36%" },
      { label: "Content cycle", value: "−60% time" },
    ],
    timeline: [
      { month: "M1", note: "Creative system + Meesho catalog sprint" },
      { month: "M2–3", note: "Myntra launch pack + QA gates" },
      { month: "M4–6", note: "Scale assortment + paid tests" },
    ],
  },
  {
    slug: "fmcg-importer",
    title: "FMCG importer",
    metric: "41% fewer returns",
    detail: "Amazon · 4 months",
    summary:
      "Content accuracy + ops playbooks reduced return leakage and tickets.",
    industry: "fmcg",
    marketplaces: ["amazon"],
    challenge:
      "Imported assortment with incomplete attributes and unclear PDPs — returns and negative feedback were eroding rank.",
    approach: [
      "Attribute and claims cleanup against product truth",
      "Imagery that set accurate expectations",
      "Returns root-cause taxonomy + weekly review",
      "Support macros and escalation paths for repeat issues",
    ],
    results: [
      { label: "Returns", value: "−41%" },
      { label: "Negative feedback", value: "−33%" },
      { label: "Ticket volume", value: "−27%" },
      { label: "Organic rank", value: "Recovered" },
    ],
    timeline: [
      { month: "M1", note: "Data hygiene + top-return SKU rewrite" },
      { month: "M2–3", note: "Ops playbooks + support QA" },
      { month: "M4", note: "Stabilize and handoff cadence" },
    ],
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
}
