import Link from "next/link";
import { FinalCta } from "@/components/marketing/final-cta";
import { PageHero } from "@/components/marketing/page-hero";
import { Container } from "@/components/layout/container";
import { JsonLd } from "@/components/seo/json-ld";
import { brand } from "@/config/brand";
import type { ServiceCategory } from "@/content/services";
import { marketplaces } from "@/content/marketplaces";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function ServicePage({ service }: { service: ServiceCategory }) {
  const related = marketplaces.filter((m) =>
    service.relatedMarketplaces.includes(m.slug),
  );

  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.summary,
    provider: {
      "@type": "Organization",
      name: brand.name,
      url: brand.urls.site,
    },
    areaServed: "IN",
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <main>
      <JsonLd data={serviceLd} />
      <JsonLd data={faqLd} />
      <PageHero
        eyebrow={service.eyebrow}
        title={service.title}
        description={service.summary}
      />

      <Container className="space-y-16 py-16">
        <section>
          <h2 className="font-display text-2xl font-bold text-charcoal">Overview</h2>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-muted">
            {service.overview}
          </p>
          <Link
            href={brand.ctas.primary.href}
            className={cn(buttonVariants(), "mt-6")}
          >
            {brand.ctas.primary.label}
          </Link>
        </section>

        <section className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl font-bold text-charcoal">Benefits</h2>
            <ul className="mt-4 space-y-3">
              {service.benefits.map((b) => (
                <li key={b} className="text-base text-muted">
                  · {b}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-display text-2xl font-bold text-charcoal">Features</h2>
            <ul className="mt-4 space-y-3">
              {service.features.map((f) => (
                <li key={f} className="text-base text-muted">
                  · {f}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section>
          <h2 className="font-display text-2xl font-bold text-charcoal">Process</h2>
          <ol className="mt-6 grid gap-4 md:grid-cols-4">
            {service.process.map((step, i) => (
              <li
                key={step.title}
                className="panel p-5"
              >
                <span className="font-mono text-[12px] font-medium text-[var(--signal)]">
                  0{i + 1}
                </span>
                <h3 className="mt-2 text-[15px] font-semibold tracking-[-0.02em] text-[var(--ink)]">
                  {step.title}
                </h3>
                <p className="mt-2 text-[13px] leading-relaxed text-[var(--text-2)]">
                  {step.body}
                </p>
              </li>
            ))}
          </ol>
        </section>

        <section>
          <h2 className="font-display text-2xl font-bold text-charcoal">
            Deliverables
          </h2>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {service.deliverables.map((d) => (
              <li
                key={d}
                className="rounded-[var(--radius-md)] border border-[var(--line)] bg-[var(--paper)] px-4 py-3 text-[13px] font-medium tracking-[-0.015em] text-[var(--ink)]"
              >
                {d}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="font-display text-2xl font-bold text-charcoal">FAQs</h2>
          <div className="panel mt-6 divide-y divide-[var(--line)] overflow-hidden">
            {service.faqs.map((item) => (
              <div key={item.q} className="px-6 py-5">
                <h3 className="text-[15px] font-semibold tracking-[-0.02em] text-[var(--ink)]">
                  {item.q}
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed text-[var(--text-2)]">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {related.length > 0 ? (
          <section>
            <h2 className="font-display text-2xl font-bold text-charcoal">
              Related marketplaces
            </h2>
            <div className="mt-4 flex flex-wrap gap-3">
              {related.map((m) => (
                <Link
                  key={m.slug}
                  href={`/marketplaces/${m.slug}`}
                  className="rounded-[var(--radius-md)] border border-[var(--line)] bg-[var(--snow)] px-4 py-2 text-[13px] font-semibold tracking-[-0.02em] text-[var(--ink)] shadow-[var(--elevate-1)] transition-colors hover:border-[var(--line-strong)]"
                >
                  {m.name}
                </Link>
              ))}
            </div>
          </section>
        ) : null}
      </Container>

      <FinalCta />
    </main>
  );
}
