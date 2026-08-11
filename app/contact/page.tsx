import type { Metadata } from "next";
import { ContactForm } from "@/components/forms/contact-form";
import { Container } from "@/components/layout/container";
import { PageHero } from "@/components/marketing/page-hero";
import { buttonVariants } from "@/components/ui/button";
import { brand } from "@/config/brand";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Contact",
  description: `Book a free consultation or request a free ecommerce audit with ${brand.name}.`,
  alternates: { canonical: "/contact" },
};

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ intent?: string }>;
}) {
  const params = await searchParams;
  const intent =
    params.intent === "audit" ? "audit" : ("consultation" as const);
  const calendly = brand.urls.calendly;
  const whatsapp = `https://wa.me/${brand.contact.whatsapp}`;
  const tel = brand.contact.phone.replace(/\s/g, "");

  return (
    <main>
      <PageHero
        eyebrow="Contact"
        title={
          intent === "audit"
            ? "Request your free ecommerce audit"
            : "Book a free consultation"
        }
        description={
          intent === "audit"
            ? "Get a clear view of listing, ads, and account-health gaps — no obligation."
            : "Tell us where you sell. We’ll map the fastest path to durable growth."
        }
      />
      <Container className="grid gap-10 py-16 lg:grid-cols-[1.1fr_0.9fr]">
        <ContactForm defaultIntent={intent} />
        <aside className="space-y-6">
          <div className="panel p-7">
            <h2 className="t-title text-[1.15rem]">Direct lines</h2>
            <dl className="mt-5 space-y-4 text-[14px]">
              <div>
                <dt className="t-caption !normal-case !tracking-[-0.01em]">Email</dt>
                <dd className="mt-1">
                  <a
                    className="font-medium text-[var(--ink)] hover:text-[var(--signal)]"
                    href={`mailto:${brand.contact.email}`}
                  >
                    {brand.contact.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="t-caption !normal-case !tracking-[-0.01em]">Phone / WhatsApp</dt>
                <dd className="mt-1">
                  <a
                    className="font-medium tabular text-[var(--ink)] hover:text-[var(--signal)]"
                    href={`tel:${tel}`}
                  >
                    {brand.contact.phone}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="t-caption !normal-case !tracking-[-0.01em]">Location</dt>
                <dd className="mt-1 text-[var(--text-2)]">
                  {brand.contact.address.city}, serving sellers across India.
                </dd>
              </div>
            </dl>
            <div className="mt-6 flex flex-col gap-2">
              <a
                href={whatsapp}
                target="_blank"
                rel="noreferrer"
                className={cn(buttonVariants({ variant: "secondary", size: "sm" }))}
              >
                Chat on WhatsApp
              </a>
              {calendly ? (
                <a
                  href={calendly}
                  target="_blank"
                  rel="noreferrer"
                  className={cn(buttonVariants({ size: "sm" }))}
                >
                  Schedule on Calendly
                </a>
              ) : null}
            </div>
          </div>
          <div className="panel p-7 bg-[var(--paper)]">
            <h2 className="t-title text-[1.15rem]">What to expect</h2>
            <ul className="mt-4 space-y-2.5 text-[14px] text-[var(--text-2)]">
              <li className="flex gap-2">
                <span className="text-[var(--signal)]">—</span>
                Response within one business day
              </li>
              <li className="flex gap-2">
                <span className="text-[var(--signal)]">—</span>
                Marketplace-specific recommendations
              </li>
              <li className="flex gap-2">
                <span className="text-[var(--signal)]">—</span>
                Clear next steps — consult or audit
              </li>
            </ul>
          </div>
        </aside>
      </Container>
    </main>
  );
}
