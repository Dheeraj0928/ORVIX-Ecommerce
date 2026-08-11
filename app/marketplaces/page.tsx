import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/layout/container";
import { FinalCta } from "@/components/marketing/final-cta";
import { PageHero } from "@/components/marketing/page-hero";
import { marketplaces } from "@/content/marketplaces";
import { brand } from "@/config/brand";

export const metadata: Metadata = {
  title: "Marketplaces",
  description: `Manage Amazon, Flipkart, Meesho, Myntra, Ajio, quick commerce, and ONDC with ${brand.name}.`,
  alternates: { canonical: "/marketplaces" },
};

export default function MarketplacesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Marketplaces"
        title="Every channel. One operating cadence."
        description="Dedicated marketplace pages built for SEO and conversion — depth without fragmented agency chaos."
      />
      <Container className="grid gap-4 py-16 md:grid-cols-2 lg:grid-cols-3">
        {marketplaces.map((m) => (
          <Link
            key={m.slug}
            href={`/marketplaces/${m.slug}`}
            className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-0.5 hover:border-accent/40"
          >
            <div className="flex items-start justify-between">
              <h2 className="text-xl font-semibold text-charcoal">{m.name}</h2>
              <ArrowUpRight className="h-5 w-5 text-muted group-hover:text-accent" />
            </div>
            <p className="mt-3 flex-1 text-base text-muted">{m.summary}</p>
          </Link>
        ))}
      </Container>
      <FinalCta />
    </main>
  );
}
