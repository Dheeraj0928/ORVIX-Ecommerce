import { serviceCategories as serviceSource } from "./services";
import { caseStudies as caseStudySource } from "./case-studies";
import { pricingTiers as pricingSource } from "./pricing";

export const marketplaces = [
  "Amazon",
  "Flipkart",
  "Meesho",
  "Myntra",
  "Ajio",
  "JioMart",
  "Blinkit",
  "Zepto",
  "ONDC",
] as const;

export const struggles = [
  {
    title: "Fragmented operations",
    body: "Different dashboards, policies, and reporting for every marketplace — nothing compounds.",
  },
  {
    title: "Listings that don’t convert",
    body: "Weak titles, thin content, and inconsistent imagery quietly kill buy-box and CTR.",
  },
  {
    title: "Ads without learning loops",
    body: "Spend climbs while catalog quality and pricing stay misaligned with demand.",
  },
  {
    title: "Margin leaks",
    body: "Inventory gaps, returns, and account-health surprises erase growth overnight.",
  },
] as const;

export const aiCapabilities = [
  { title: "Title & description generation", body: "Marketplace-ready copy with SEO intent built in." },
  { title: "Keyword optimization", body: "Find the phrases shoppers actually search." },
  { title: "Image generation & cleanup", body: "Create, enhance, remove backgrounds, resize at scale." },
  { title: "A+ / brand content drafts", body: "Structured brand stories ready for specialist polish." },
  { title: "Competitor & pricing signals", body: "See gaps, suggest price moves, protect margin." },
  { title: "Bulk catalog automation", body: "Draft, monitor inventory, and manage listings in volume." },
] as const;

export const serviceCategories = serviceSource.map((s) => ({
  slug: s.slug,
  title: s.title,
  body: s.summary,
}));

export const processSteps = [
  { title: "Discovery", body: "Audit accounts, catalog, ads, and ops constraints." },
  { title: "Strategy", body: "Prioritize marketplaces, SKUs, and growth levers." },
  { title: "Optimization", body: "Fix listings, structure, pricing, and account health." },
  { title: "Growth", body: "Scale ads and content with measured feedback loops." },
  { title: "Scale", body: "Expand marketplaces and automate with ORVIX AI." },
] as const;

export const caseStudies = caseStudySource.map((c) => ({
  slug: c.slug,
  title: c.title,
  metric: c.metric,
  detail: c.detail,
  summary: c.summary,
}));

export const testimonials = [
  {
    quote:
      "ORVIX feels like a product team plugged into our marketplaces — not another vendor chasing retainers.",
    name: "Ananya Mehta",
    role: "Founder, D2C skincare brand",
  },
  {
    quote:
      "Account health stopped being a fire drill. We finally see one operating picture across Amazon and Flipkart.",
    name: "Rohit Malhotra",
    role: "Head of Ecommerce, manufacturing brand",
  },
  {
    quote:
      "The AI drafts cut catalog time dramatically. Our specialists spend time on judgment, not busywork.",
    name: "Sneha Iyer",
    role: "Growth lead, lifestyle startup",
  },
] as const;

export const pricingTiers = pricingSource;

export const faqs = [
  {
    q: "Is ORVIX an agency or a software platform?",
    a: "Both, by design. ORVIX AI and operating dashboards power the work; specialist teams execute with marketplace depth. You get platform leverage with expert ownership.",
  },
  {
    q: "Which marketplaces do you support?",
    a: "Amazon, Flipkart, Meesho, Myntra, Ajio, JioMart, Blinkit, Zepto, ONDC, and expanding coverage based on your category.",
  },
  {
    q: "What happens in the free consultation?",
    a: "We map where you sell today, where growth is leaking, and whether ORVIX is the right operating partner. Clear next steps — no pressure.",
  },
  {
    q: "What’s included in the free ecommerce audit?",
    a: "A structured look at listings, visibility, ads posture, and account-health risks — with prioritized recommendations you can act on.",
  },
  {
    q: "How fast can we see results?",
    a: "Foundation fixes (listings, structure, health) often show within weeks. Compounding revenue gains depend on category, seasonality, and ad readiness.",
  },
  {
    q: "Do you replace our internal team?",
    a: "We can run end-to-end or augment your team. Most clients use ORVIX as the marketplace operating system with clear ownership.",
  },
] as const;

export const comparisonRows = [
  { label: "Operating model", agency: "People + spreadsheets", orvix: "Platform + specialists" },
  { label: "Catalog velocity", agency: "Manual, slow", orvix: "ORVIX AI drafts at scale" },
  { label: "Multi-marketplace view", agency: "Fragmented reports", orvix: "Unified health & growth view" },
  { label: "Accountability", agency: "Activity updates", orvix: "Outcome-led operating cadence" },
  { label: "Account health", agency: "Reactive firefighting", orvix: "Preventive monitoring" },
] as const;
