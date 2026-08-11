export const mainNav = [
  { label: "Platform", href: "/#orvix-ai" },
  { label: "Services", href: "/services" },
  { label: "Marketplaces", href: "/marketplaces" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;

export const footerNav = {
  company: [
    { label: "About", href: "/about" },
    { label: "Industries", href: "/industries" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
  ],
  services: [
    { label: "Marketplace Management", href: "/services/marketplace-management" },
    { label: "Listings & Content", href: "/services/listings-content" },
    { label: "Growth", href: "/services/growth" },
    { label: "Operations", href: "/services/operations" },
    { label: "Compliance", href: "/services/compliance" },
    { label: "Warehouse & Logistics", href: "/services/warehouse-logistics" },
  ],
  marketplaces: [
    { label: "Amazon", href: "/marketplaces/amazon" },
    { label: "Flipkart", href: "/marketplaces/flipkart" },
    { label: "Meesho", href: "/marketplaces/meesho" },
    { label: "Myntra", href: "/marketplaces/myntra" },
    { label: "Ajio", href: "/marketplaces/ajio" },
    { label: "Blinkit", href: "/marketplaces/blinkit" },
    { label: "Zepto", href: "/marketplaces/zepto" },
    { label: "JioMart", href: "/marketplaces/jiomart" },
    { label: "ONDC", href: "/marketplaces/ondc" },
  ],
  resources: [
    { label: "Blog", href: "/blog" },
    { label: "Resources", href: "/resources" },
    { label: "FAQ", href: "/faq" },
    { label: "Case Studies", href: "/case-studies" },
  ],
  legal: [
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
  ],
} as const;
