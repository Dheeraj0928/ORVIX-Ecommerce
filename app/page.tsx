import dynamic from "next/dynamic";
import { AiPlatform } from "@/components/marketing/ai-platform";
import { CaseStudies } from "@/components/marketing/case-studies";
import { DashboardPreview } from "@/components/marketing/dashboard-preview";
import { FinalCta } from "@/components/marketing/final-cta";
import { Hero } from "@/components/marketing/hero";
import { LogoCloud } from "@/components/marketing/logo-cloud";
import { PricingTeaser } from "@/components/marketing/pricing-teaser";
import { ProcessTimeline } from "@/components/marketing/process-timeline";
import { ServicesGrid } from "@/components/marketing/services-grid";
import {
  ProblemBand,
  SolutionBand,
  StruggleGrid,
} from "@/components/marketing/story-band";
import { Testimonials } from "@/components/marketing/testimonials";
import { ScrollScene } from "@/components/marketing/reveal";
import { JsonLd } from "@/components/seo/json-ld";
import { faqs } from "@/content/home";
import { brand } from "@/config/brand";
import type { Metadata } from "next";

const StatsRow = dynamic(
  () =>
    import("@/components/marketing/stats-row").then((m) => m.StatsRow),
  { ssr: true },
);

const FaqAccordion = dynamic(
  () =>
    import("@/components/marketing/faq-accordion").then((m) => m.FaqAccordion),
  { ssr: true },
);

export const metadata: Metadata = {
  title: {
    absolute: `${brand.shortName} Commerce | AI-Powered Ecommerce Growth Partner`,
  },
  description: brand.description,
  alternates: { canonical: "/" },
};

export default function HomePage() {
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <main>
      <JsonLd data={faqLd} />
      <Hero />
      <ScrollScene>
        <LogoCloud />
      </ScrollScene>
      <ScrollScene>
        <StatsRow />
      </ScrollScene>
      <ScrollScene>
        <ProblemBand />
      </ScrollScene>
      <ScrollScene>
        <StruggleGrid />
      </ScrollScene>
      <ScrollScene>
        <SolutionBand />
      </ScrollScene>
      <ScrollScene>
        <AiPlatform />
      </ScrollScene>
      <ScrollScene>
        <DashboardPreview />
      </ScrollScene>
      <ScrollScene>
        <ServicesGrid />
      </ScrollScene>
      <ScrollScene>
        <ProcessTimeline />
      </ScrollScene>
      <ScrollScene>
        <CaseStudies />
      </ScrollScene>
      <ScrollScene>
        <Testimonials />
      </ScrollScene>
      <ScrollScene>
        <PricingTeaser />
      </ScrollScene>
      <ScrollScene>
        <FaqAccordion />
      </ScrollScene>
      <ScrollScene>
        <FinalCta />
      </ScrollScene>
    </main>
  );
}
