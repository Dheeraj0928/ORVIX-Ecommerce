import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { FinalCta } from "@/components/marketing/final-cta";
import { PageHero } from "@/components/marketing/page-hero";
import { brand } from "@/config/brand";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "About",
  description: `${brand.name} is an AI-powered ecommerce growth partner for Indian marketplace brands.`,
  alternates: { canonical: "/about" },
};

const principles = [
  {
    title: "Platform first",
    body: "ORVIX AI and operating dashboards are the wedge — specialists amplify the system, not replace it with spreadsheets.",
  },
  {
    title: "Outcomes over activity",
    body: "We measure listing quality, health, contribution margin, and growth — not vanity busywork.",
  },
  {
    title: "Honesty over hype",
    body: "Custom pricing, real constraints, and no guaranteed ACoS fairy tales.",
  },
] as const;

export default function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="About"
        title={`${brand.shortName} is the operating system for marketplace growth.`}
        description={brand.tagline}
      />
      <Container className="space-y-16 py-16">
        <section className="max-w-3xl">
          <h2 className="font-display text-2xl font-bold text-charcoal">
            Why we exist
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            Brands don&apos;t fail on marketplaces because they lack effort. They
            fail because operations are fragmented, catalogs are slow, and
            &quot;agencies&quot; sell activity instead of systems. {brand.name}{" "}
            was built as a technology-first growth partner — AI for velocity,
            specialists for judgment.
          </p>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          {principles.map((p) => (
            <article
              key={p.title}
              className="rounded-2xl border border-border bg-card p-6"
            >
              <h3 className="text-lg font-semibold text-charcoal">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{p.body}</p>
            </article>
          ))}
        </section>

        <section className="grid gap-8 rounded-2xl border border-border bg-warm-white p-8 md:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl font-bold text-charcoal">
              How we work
            </h2>
            <p className="mt-4 text-muted">
              Discovery → strategy → optimization → growth → scale. Every
              engagement gets a clear cadence, reporting, and ownership — whether
              we run end-to-end or augment your team.
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl font-bold text-charcoal">
              Who we serve
            </h2>
            <p className="mt-4 text-muted">
              New sellers, D2C brands, manufacturers, importers, and enterprises
              selling across Amazon, Flipkart, Meesho, fashion, quick commerce,
              and ONDC.
            </p>
            <Link
              href="/industries"
              className="mt-4 inline-block text-sm font-semibold text-accent hover:underline"
            >
              Explore industries
            </Link>
          </div>
        </section>

        <section className="text-center">
          <h2 className="font-display text-3xl font-bold text-charcoal">
            Let’s map your operating plan
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted">
            Book a free consultation — or request an audit and see where growth
            is leaking.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
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
      </Container>
      <FinalCta />
    </main>
  );
}
