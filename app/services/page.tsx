import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/layout/container";
import { FinalCta } from "@/components/marketing/final-cta";
import { PageHero } from "@/components/marketing/page-hero";
import { serviceCategories } from "@/content/services";
import { brand } from "@/config/brand";

export const metadata: Metadata = {
  title: "Services",
  description: `Ecommerce services from ${brand.name}: marketplace management, listings, growth, operations, compliance, and logistics.`,
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Services"
        title="Six pillars. One operating system."
        description="Services extend the ORVIX platform — grouped the way operators think, not as a forty-item dump."
      />
      <Container className="grid gap-4 py-16 md:grid-cols-2 lg:grid-cols-3">
        {serviceCategories.map((service) => (
          <Link
            key={service.slug}
            href={`/services/${service.slug}`}
            className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-[0_8px_30px_rgba(20,20,20,0.04)] transition-all hover:-translate-y-0.5 hover:border-accent/40"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-accent">
                  {service.eyebrow}
                </p>
                <h2 className="mt-2 text-xl font-semibold text-charcoal">
                  {service.title}
                </h2>
              </div>
              <ArrowUpRight className="h-5 w-5 text-muted group-hover:text-accent" />
            </div>
            <p className="mt-3 flex-1 text-base text-muted">{service.summary}</p>
          </Link>
        ))}
      </Container>
      <FinalCta />
    </main>
  );
}
