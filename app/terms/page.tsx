import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { PageHero } from "@/components/marketing/page-hero";
import { brand } from "@/config/brand";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms governing use of the ${brand.name} website.`,
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <main>
      <PageHero
        title="Terms of Service"
        description="The rules for using this website and requesting our services."
      />
      <Container className="max-w-3xl space-y-6 py-16 text-base leading-relaxed text-muted">
        <p>Last updated: August 7, 2026</p>
        <p>
          By using {brand.urls.site}, you agree to these terms. If you do not agree,
          please do not use the site.
        </p>
        <h2 className="font-display text-2xl font-bold text-charcoal">Website use</h2>
        <p>
          Content on this site is for general information. Service engagements are
          governed by a separate agreement executed with {brand.name}.
        </p>
        <h2 className="font-display text-2xl font-bold text-charcoal">No guarantees from marketing claims</h2>
        <p>
          Case studies and metrics illustrate possible outcomes. Results vary by
          category, seasonality, budget, and execution.
        </p>
        <h2 className="font-display text-2xl font-bold text-charcoal">Contact</h2>
        <p>
          <a className="text-accent hover:underline" href={`mailto:${brand.contact.email}`}>
            {brand.contact.email}
          </a>
        </p>
      </Container>
    </main>
  );
}
