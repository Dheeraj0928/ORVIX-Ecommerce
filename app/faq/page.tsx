import type { Metadata } from "next";
import { FaqAccordion } from "@/components/marketing/faq-accordion";
import { FinalCta } from "@/components/marketing/final-cta";
import { PageHero } from "@/components/marketing/page-hero";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Answers about ORVIX Commerce consultations, audits, and marketplace ops.",
};

export default function FaqPage() {
  return (
    <main>
      <PageHero
        title="FAQ"
        description="Clear answers before you book a consultation."
      />
      <FaqAccordion />
      <FinalCta />
    </main>
  );
}
