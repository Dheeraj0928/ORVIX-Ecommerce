import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/layout/container";
import { FinalCta } from "@/components/marketing/final-cta";
import { PageHero } from "@/components/marketing/page-hero";
import { JsonLd } from "@/components/seo/json-ld";
import { buttonVariants } from "@/components/ui/button";
import { brand } from "@/config/brand";
import { caseStudies, getCaseStudy } from "@/content/case-studies";
import { cn } from "@/lib/utils";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return {};
  return {
    title: study.title,
    description: study.summary,
    alternates: { canonical: `/case-studies/${study.slug}` },
  };
}

export default async function CaseStudyDetailPage({ params }: Props) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: study.title,
    description: study.summary,
    author: { "@type": "Organization", name: brand.name },
    publisher: { "@type": "Organization", name: brand.name },
  };

  return (
    <main>
      <JsonLd data={articleLd} />
      <Container className="pt-6">
        <nav aria-label="Breadcrumb" className="text-sm text-muted">
          <Link href="/" className="hover:text-charcoal">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link href="/case-studies" className="hover:text-charcoal">
            Case Studies
          </Link>
          <span className="mx-2">/</span>
          <span className="text-charcoal">{study.title}</span>
        </nav>
      </Container>
      <PageHero
        eyebrow={study.detail}
        title={`${study.title}: ${study.metric}`}
        description={study.summary}
      />

      <Container className="space-y-16 py-16">
        <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {study.results.map((r) => (
            <div
              key={r.label}
              className="rounded-2xl border border-border bg-card p-5"
            >
              <p className="font-display text-2xl font-bold text-charcoal">
                {r.value}
              </p>
              <p className="mt-1 text-sm text-muted">{r.label}</p>
            </div>
          ))}
        </section>

        <section className="max-w-3xl">
          <h2 className="font-display text-2xl font-bold text-charcoal">
            The challenge
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            {study.challenge}
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-bold text-charcoal">
            Approach
          </h2>
          <ol className="mt-6 grid gap-4 md:grid-cols-2">
            {study.approach.map((step, i) => (
              <li
                key={step}
                className="rounded-2xl border border-border bg-card p-5"
              >
                <span className="text-sm font-bold text-accent">0{i + 1}</span>
                <p className="mt-2 text-charcoal">{step}</p>
              </li>
            ))}
          </ol>
        </section>

        <section>
          <h2 className="font-display text-2xl font-bold text-charcoal">
            Growth timeline
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {study.timeline.map((t) => (
              <div
                key={t.month}
                className="rounded-2xl border border-border bg-warm-white p-5"
              >
                <p className="text-sm font-bold text-accent">{t.month}</p>
                <p className="mt-2 text-sm text-charcoal">{t.note}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="flex flex-col gap-3 sm:flex-row">
          <Link href={brand.ctas.primary.href} className={cn(buttonVariants())}>
            Get similar results
          </Link>
          <Link
            href={`/industries/${study.industry}`}
            className={cn(buttonVariants({ variant: "secondary" }))}
          >
            Related industry
          </Link>
        </div>
      </Container>
      <FinalCta />
    </main>
  );
}
