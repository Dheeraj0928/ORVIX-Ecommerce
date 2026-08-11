import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { SiteShell } from "@/components/layout/site-shell";
import { JsonLd } from "@/components/seo/json-ld";
import { brand } from "@/config/brand";
import { seoDefaults } from "@/config/seo";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(seoDefaults.metadataBase),
  title: seoDefaults.title,
  description: seoDefaults.description,
  openGraph: {
    ...seoDefaults.openGraph,
    url: brand.urls.site,
  },
  twitter: seoDefaults.twitter,
  robots: seoDefaults.robots,
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const orgLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: brand.name,
    url: brand.urls.site,
    description: brand.description,
    email: brand.contact.email,
    sameAs: Object.values(brand.social),
  };

  const localLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: brand.name,
    url: brand.urls.site,
    email: brand.contact.email,
    telephone: brand.contact.phone,
    description: brand.description,
    areaServed: "IN",
    address: {
      "@type": "PostalAddress",
      addressLocality: brand.contact.address.city,
      addressRegion: brand.contact.address.region,
      addressCountry: brand.contact.address.country,
      ...(brand.contact.address.street
        ? { streetAddress: brand.contact.address.street }
        : {}),
      ...(brand.contact.address.postalCode
        ? { postalCode: brand.contact.address.postalCode }
        : {}),
    },
  };

  return (
    <html
      lang="en-IN"
      className={`${GeistSans.variable} ${GeistMono.variable} h-full antialiased`}
    >
      <body className={`${GeistSans.className} flex min-h-full flex-col`}>
        <JsonLd data={orgLd} />
        <JsonLd data={localLd} />
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
