import Link from "next/link";
import { FinalCta } from "@/components/marketing/final-cta";
import { PageHero } from "@/components/marketing/page-hero";
import { Container } from "@/components/layout/container";
import { JsonLd } from "@/components/seo/json-ld";
import { brand } from "@/config/brand";
import type { Marketplace } from "@/content/marketplaces";
import { getService } from "@/content/services";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function MarketplacePage({ marketplace }: { marketplace: Marketplace }) {
  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${marketplace.name} Account Management`,
    description: marketplace.summary,
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
    mainEntity: marketplace.faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: brand.urls.site,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Marketplaces",
        item: `${brand.urls.site}/marketplaces`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: marketplace.name,
        item: `${brand.urls.site}/marketplaces/${marketplace.slug}`,
      },
    ],
  };

  return (
    <main>
      <JsonLd data={serviceLd} />
      <JsonLd data={faqLd} />
      <JsonLd data={breadcrumbLd} />
      <Container className="pt-6">
        <nav
          aria-label="Breadcrumb"
          className="text-[13px] tracking-[-0.01em] text-[var(--text-3)]"
        >
          <Link href="/" className="hover:text-[var(--ink)]">
            Home
          </Link>
          <span className="mx-2 text-[var(--line-strong)]">/</span>
          <Link href="/marketplaces" className="hover:text-[var(--ink)]">
            Marketplaces
          </Link>
          <span className="mx-2 text-[var(--line-strong)]">/</span>
          <span className="text-[var(--ink)]">{marketplace.name}</span>
        </nav>
      </Container>
      <PageHero
        eyebrow={`${marketplace.name} · Marketplace ops`}
        title={marketplace.headline}
        description={marketplace.summary}
      />

      <Container className="space-y-16 py-16">
        <section>
          <h2 className="t-display text-[clamp(1.75rem,3vw,2.25rem)]">Overview</h2>
          <p className="mt-4 max-w-3xl t-body text-[1.0625rem]">
            {marketplace.overview}
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link href={brand.ctas.primary.href} className={cn(buttonVariants())}>
              {brand.ctas.primary.label}
            </Link>
            <Link
              href={brand.ctas.secondary.href}
              className={cn(buttonVariants({ variant: "secondary" }))}
            >
              {brand.ctas.secondary.label}
            </Link>
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-2">
          <div className="panel p-7">
            <h2 className="t-title text-[1.2rem]">Where sellers get stuck</h2>
            <ul className="mt-4 space-y-3">
              {marketplace.pains.map((p) => (
                <li
                  key={p}
                  className="text-[15px] leading-relaxed text-[var(--text-2)]"
                >
                  <span className="mr-2 text-[var(--warn)]">—</span>
                  {p}
                </li>
              ))}
            </ul>
          </div>
          <div className="panel p-7">
            <h2 className="t-title text-[1.2rem]">How ORVIX helps</h2>
            <ul className="mt-4 space-y-3">
              {marketplace.solutions.map((s) => (
                <li
                  key={s}
                  className="text-[15px] leading-relaxed text-[var(--text-2)]"
                >
                  <span className="mr-2 text-[var(--signal)]">—</span>
                  {s}
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
            {marketplace.services.map((slug) => {
              const service = getService(slug);
              if (!service) return null;
              return (
                <Link
                  key={slug}
                  href={`/services/${slug}`}
                  className="panel-lift block p-5"
                >
                  <h3 className="text-[15px] font-semibold tracking-[-0.02em] text-[var(--ink)]">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-[var(--text-2)]">
                    {service.summary}
                  </p>
                </Link>
              );
            })}
          </div>
        </section>

        <section>
          <h2 className="font-display text-2xl font-bold text-charcoal">FAQs</h2>
          <div className="panel mt-6 divide-y divide-[var(--line)] overflow-hidden">
            {marketplace.faqs.map((item) => (
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
      </Container>

      <FinalCta />
    </main>
  );
}
