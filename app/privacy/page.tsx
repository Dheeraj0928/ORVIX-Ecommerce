import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { PageHero } from "@/components/marketing/page-hero";
import { brand } from "@/config/brand";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${brand.name} collects, uses, and protects your information.`,
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <main>
      <PageHero
        title="Privacy Policy"
        description="We take care of marketplace businesses — and the data you trust us with."
      />
      <Container className="prose-orvix max-w-3xl space-y-6 py-16 text-base leading-relaxed text-muted">
        <p>Last updated: August 7, 2026</p>
        <p>
          {brand.name} (&quot;we&quot;, &quot;us&quot;) operates {brand.urls.site}. This
          policy explains what we collect when you use our website and submit lead
          forms, and how we use it.
        </p>
        <h2 className="font-display text-2xl font-bold text-charcoal">Information we collect</h2>
        <p>
          Contact details you submit (name, email, phone, company, marketplace
          context, and message), plus standard technical logs such as IP address,
          browser type, and pages visited.
        </p>
        <h2 className="font-display text-2xl font-bold text-charcoal">How we use information</h2>
        <p>
          To respond to consultation and audit requests, improve the website, and
          communicate about services you asked for. We do not sell personal data.
        </p>
        <h2 className="font-display text-2xl font-bold text-charcoal">Contact</h2>
        <p>
          Questions:{" "}
          <a className="text-accent hover:underline" href={`mailto:${brand.contact.email}`}>
            {brand.contact.email}
          </a>
        </p>
      </Container>
    </main>
  );
}
