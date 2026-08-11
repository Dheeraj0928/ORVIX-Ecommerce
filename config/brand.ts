/**
 * Single source of truth for brand identity.
 * Changing this file should rebrand the entire website.
 */

export const brand = {
  name: "ORVIX Commerce",
  shortName: "ORVIX",
  tagline: "Your Complete Ecommerce Growth Partner",
  productLine: "ORVIX AI",
  description:
    "AI-powered ecommerce growth platform with expert marketplace operations across Amazon, Flipkart, Meesho, and more.",

  urls: {
    site: process.env.NEXT_PUBLIC_SITE_URL ?? "https://orvix.commerce",
    calendly: process.env.NEXT_PUBLIC_CALENDLY_URL ?? "",
  },

  contact: {
    email: "dheeraj1098yadav@gmail.com",
    phone: "+91 92192 28115",
    /** Digits only for wa.me — override with NEXT_PUBLIC_WHATSAPP_NUMBER if needed */
    whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "919219228115",
    address: {
      street: "",
      city: "Bengaluru",
      region: "KA",
      postalCode: "",
      country: "IN",
    },
  },

  social: {
    linkedin: "https://www.linkedin.com/",
    instagram: "https://www.instagram.com/",
    youtube: "https://www.youtube.com/",
    x: "https://x.com/",
  },

  colors: {
    charcoal: "#09090B",
    warmWhite: "#EEF0F3",
    accent: "#0061FF",
    success: "#0F9F6E",
    warning: "#E8890C",
    background: "#F7F8FA",
    card: "#FFFFFF",
    muted: "#52525B",
    border: "#C7CCD4",
  },

  // ponytail: positioning placeholders until finance confirms → swap real metrics here
  stats: [
    { value: "500+", label: "Brands Managed" },
    { value: "₹100M+", label: "Revenue Managed" },
    { value: "98%", label: "Client Retention" },
    { value: "10+", label: "Marketplaces" },
  ],

  ctas: {
    primary: { label: "Book Free Consultation", href: "/contact?intent=consultation" },
    secondary: { label: "Request Free Ecommerce Audit", href: "/contact?intent=audit" },
  },
} as const;

export type Brand = typeof brand;
