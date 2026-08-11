import { brand } from "./brand";

export const seoDefaults = {
  metadataBase: brand.urls.site,
  title: {
    default: `${brand.shortName} Commerce | AI-Powered Ecommerce Growth Partner`,
    template: `%s | ${brand.name}`,
  },
  description: brand.description,
  openGraph: {
    type: "website" as const,
    locale: "en_IN",
    siteName: brand.name,
    title: brand.name,
    description: brand.description,
  },
  twitter: {
    card: "summary_large_image" as const,
    title: brand.name,
    description: brand.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};
