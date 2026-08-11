import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/layout/container";
import { FinalCta } from "@/components/marketing/final-cta";
import { PageHero } from "@/components/marketing/page-hero";
import { JsonLd } from "@/components/seo/json-ld";
import { buttonVariants } from "@/components/ui/button";
import { brand } from "@/config/brand";
import { getCaseStudy } from "@/content/case-studies";
import { getIndustry, industries } from "@/content/industries";
import { getService } from "@/content/services";
import { cn } from "@/lib/utils";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) return {};
  return {
    title: industry.seo.title,
    description: industry.seo.description,
    alternates: { canonical: `/industries/${industry.slug}` },
  };
}

export default async function IndustryDetailPage({ params }: Props) {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) notFound();

  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${industry.title} Marketplace Management`,
    description: industry.summary,
    provider: { "@type": "Organization", name: brand.name },
    areaServed: "IN",
  };

  return (
    <main>
      <JsonLd data={serviceLd} />
      <Container className="pt-6">
        <nav aria-label="Breadcrumb" className="text-sm text-muted">
          <Link href="/" className="hover:text-charcoal">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link href="/industries" className="hover:text-charcoal">
            Industries
          </Link>
          <span className="mx-2">/</span>
          <span className="text-charcoal">{industry.title}</span>
        </nav>
      </Container>
      <PageHero
        eyebrow={industry.title}
        title={industry.headline}
        description={industry.summary}
      />

      <Container className="space-y-16 py-16">
        <section className="max-w-3xl">
          <h2 className="font-display text-2xl font-bold text-charcoal">
            Overview
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            {industry.overview}
          </p>
          <Link
            href={brand.ctas.primary.href}
            className={cn(buttonVariants(), "mt-6")}
          >
            {brand.ctas.primary.label}
          </Link>
        </section>

        <section className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-6">
            <h2 className="font-display text-xl font-bold text-charcoal">
              Category challenges
            </h2>
            <ul className="mt-4 space-y-3">
              {industry.challenges.map((c) => (
                <li key={c} className="text-muted">
                  · {c}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6">
            <h2 className="font-display text-xl font-bold text-charcoal">
              How ORVIX helps
            </h2>
            <ul className="mt-4 space-y-3">
              {industry.howWeHelp.map((h) => (
                <li key={h} className="text-muted">
                  · {h}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section>
          <h2 className="font-display text-2xl font-bold text-charcoal">
            Related services
          </h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {industry.relatedServices.map((s) => {
              const service = getService(s);
              if (!service) return null;
              return (
                <Link
                  key={s}
                  href={`/services/${s}`}
                  className="rounded-2xl border border-border bg-warm-white p-5 hover:border-accent"
                >
                  <h3 className="font-semibold text-charcoal">{service.title}</h3>
                  <p className="mt-2 text-sm text-muted">{service.summary}</p>
                </Link>
              );
            })}
          </div>
        </section>

        {industry.relatedCaseStudies.length > 0 ? (
          <section>
            <h2 className="font-display text-2xl font-bold text-charcoal">
              Related case studies
            </h2>
            <div className="mt-4 flex flex-wrap gap-3">
              {industry.relatedCaseStudies.map((slug) => {
                const study = getCaseStudy(slug);
                if (!study) return null;
                return (
                  <Link
                    key={slug}
                    href={`/case-studies/${slug}`}
                    className="rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold text-charcoal hover:border-accent"
                  >
                    {study.title} · {study.metric}
                  </Link>
                );
              })}
            </div>
          </section>
        ) : null}
      </Container>
      <FinalCta />
    </main>
  );
}
