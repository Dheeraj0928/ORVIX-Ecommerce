import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { FinalCta } from "@/components/marketing/final-cta";
import { PageHero } from "@/components/marketing/page-hero";
import { caseStudies } from "@/content/case-studies";
import { brand } from "@/config/brand";

export const metadata: Metadata = {
  title: "Case Studies",
  description: `Marketplace growth outcomes from brands operated with ${brand.name}.`,
  alternates: { canonical: "/case-studies" },
};

export default function CaseStudiesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Case Studies"
        title="Outcomes over activity theater."
        description="Before/after stories from brands where ORVIX installed systems — not just busywork."
      />
      <Container className="grid gap-4 py-16 lg:grid-cols-3">
        {caseStudies.map((study) => (
          <Link
            key={study.slug}
            href={`/case-studies/${study.slug}`}
            className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-0.5 hover:border-accent/40"
          >
            <p className="font-display text-3xl font-bold tracking-tight text-charcoal">
              {study.metric}
            </p>
            <p className="mt-2 text-sm text-muted">{study.detail}</p>
            <h2 className="mt-5 text-lg font-semibold text-charcoal">
              {study.title}
            </h2>
            <p className="mt-2 flex-1 text-base text-muted">{study.summary}</p>
            <span className="mt-5 text-sm font-semibold text-accent">
              Read story →
            </span>
          </Link>
        ))}
      </Container>
      <FinalCta />
    </main>
  );
}
