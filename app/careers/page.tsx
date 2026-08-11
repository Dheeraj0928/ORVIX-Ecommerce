import type { Metadata } from "next";
import { ComingSoonPage } from "@/components/marketing/coming-soon";

export const metadata: Metadata = {
  title: "Careers",
  description: "Join ORVIX Commerce — build the operating system for marketplace growth.",
};

export default function CareersPage() {
  return (
    <ComingSoonPage
      title="Careers"
      description="We're building a specialist team. Roles listing comes soon — reach out via contact."
    />
  );
}
