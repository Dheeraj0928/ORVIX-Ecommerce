import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { FinalCta } from "@/components/marketing/final-cta";
import { PageHero } from "@/components/marketing/page-hero";
import { JsonLd } from "@/components/seo/json-ld";
import { buttonVariants } from "@/components/ui/button";
import { brand } from "@/config/brand";
import { pricingFactors, pricingFaqs, pricingTiers } from "@/content/pricing";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Custom ecommerce operations pricing from ORVIX Commerce — Launch, Scale, and Enterprise engagements scoped to your catalog and channels.",
  alternates: { canonical: "/pricing" },
};

export default function PricingPage() {
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: pricingFaqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <main>
      <JsonLd data={faqLd} />
      <PageHero
        eyebrow="Pricing"
        title="Scoped to your operating reality — not a generic retainer."
        description="Every engagement is custom. These tiers show how we typically structure work after discovery."
      />

      <Container className="py-16">
        <div className="grid gap-4 lg:grid-cols-3">
          {pricingTiers.map((tier) => (
            <article
              key={tier.name}
              className={cn(
                "flex h-full flex-col rounded-2xl border bg-card p-6 shadow-[0_8px_30px_rgba(20,20,20,0.04)]",
                tier.featured ? "border-accent ring-1 ring-accent" : "border-border",
              )}
            >
              {tier.featured ? (
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-accent">
                  Most chosen
                </p>
              ) : (
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted">
                  Engagement
                </p>
              )}
              <h2 className="mt-2 text-xl font-semibold text-charcoal">{tier.name}</h2>
              <p className="mt-2 font-display text-3xl font-bold text-charcoal">
                {tier.price}
              </p>
              <p className="mt-2 text-sm text-muted">{tier.blurb}</p>
              <ul className="mt-6 flex-1 space-y-2">
                {tier.features.map((f) => (
                  <li key={f} className="text-sm text-charcoal">
                    · {f}
                  </li>
                ))}
              </ul>
              <Link
                href={brand.ctas.primary.href}
                className={cn(
                  buttonVariants({
                    variant: tier.featured ? "primary" : "secondary",
                  }),
                  "mt-8",
                )}
              >
                {brand.ctas.primary.label}
              </Link>
            </article>
          ))}
        </div>

        <section className="mt-16 grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl font-bold text-charcoal">
              What shapes your quote
            </h2>
            <ul className="mt-4 space-y-3">
              {pricingFactors.map((f) => (
                <li key={f} className="text-muted">
                  · {f}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-border bg-warm-white p-6">
            <h2 className="font-display text-2xl font-bold text-charcoal">
              Prefer clarity first?
            </h2>
            <p className="mt-3 text-muted">
              Start with a free ecommerce audit. We’ll show gaps and whether a
              Launch, Scale, or Enterprise engagement fits — before you commit.
            </p>
            <Link
              href={brand.ctas.secondary.href}
              className={cn(buttonVariants({ variant: "ink" }), "mt-6")}
            >
              {brand.ctas.secondary.label}
            </Link>
          </div>
        </section>

        <section className="mt-16">
          <h2 className="font-display text-2xl font-bold text-charcoal">
            Pricing FAQs
          </h2>
          <div className="mt-6 divide-y divide-border rounded-2xl border border-border bg-card">
            {pricingFaqs.map((item) => (
              <div key={item.q} className="px-5 py-4">
                <h3 className="font-semibold text-charcoal">{item.q}</h3>
                <p className="mt-2 text-muted">{item.a}</p>
              </div>
            ))}
          </div>
        </section>
      </Container>

      <FinalCta />
    </main>
  );
}
