import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MarketplacePage } from "@/components/sections/marketplace-page";
import { getMarketplace, marketplaces } from "@/content/marketplaces";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return marketplaces.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const marketplace = getMarketplace(slug);
  if (!marketplace) return {};
  return {
    title: marketplace.seo.title,
    description: marketplace.seo.description,
    alternates: { canonical: `/marketplaces/${marketplace.slug}` },
    openGraph: {
      title: marketplace.seo.title,
      description: marketplace.seo.description,
    },
  };
}

export default async function MarketplaceDetailPage({ params }: Props) {
  const { slug } = await params;
  const marketplace = getMarketplace(slug);
  if (!marketplace) notFound();
  return <MarketplacePage marketplace={marketplace} />;
}
