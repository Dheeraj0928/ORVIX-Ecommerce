import Link from "next/link";
import { brand } from "@/config/brand";
import { PageHero } from "@/components/marketing/page-hero";
import { FinalCta } from "@/components/marketing/final-cta";
import { Container } from "@/components/layout/container";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/** Thin Phase-1 stub so nav never dead-ends before deeper pages ship. */
export function ComingSoonPage({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <main>
      <PageHero title={title} description={description} />
      <Container className="py-16">
        <p className="max-w-2xl text-lg text-muted">
          This page is next in our build sequence. Meanwhile, the homepage and
          consultation flow are live — tell us what you need and we&apos;ll route
          you to the right operating plan.
        </p>
        <Link
          href={brand.ctas.primary.href}
          className={cn(buttonVariants({ size: "lg" }), "mt-8")}
        >
          {brand.ctas.primary.label}
        </Link>
      </Container>
      <FinalCta />
    </main>
  );
}
