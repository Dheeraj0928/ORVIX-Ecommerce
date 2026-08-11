import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/layout/container";
import { FinalCta } from "@/components/marketing/final-cta";
import { PageHero } from "@/components/marketing/page-hero";
import { industries } from "@/content/industries";
import { brand } from "@/config/brand";

export const metadata: Metadata = {
  title: "Industries",
  description: `Industry-specific marketplace operations from ${brand.name} for D2C, manufacturers, importers, FMCG, home, and beauty.`,
  alternates: { canonical: "/industries" },
};

export default function IndustriesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Industries"
        title="Playbooks shaped by category reality."
        description="Same platform. Different constraints. We adapt operating systems to how your category actually sells."
      />
      <Container className="grid gap-4 py-16 md:grid-cols-2 lg:grid-cols-3">
        {industries.map((industry) => (
          <Link
            key={industry.slug}
            href={`/industries/${industry.slug}`}
            className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-0.5 hover:border-accent/40"
          >
            <div className="flex items-start justify-between gap-3">
              <h2 className="text-xl font-semibold text-charcoal">
                {industry.title}
              </h2>
              <ArrowUpRight className="h-5 w-5 text-muted group-hover:text-accent" />
            </div>
            <p className="mt-3 flex-1 text-base text-muted">{industry.summary}</p>
          </Link>
        ))}
      </Container>
      <FinalCta />
    </main>
  );
}
