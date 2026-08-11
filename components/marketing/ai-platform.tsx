import Link from "next/link";
import { brand } from "@/config/brand";
import { Section } from "@/components/layout/section";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Reveal } from "./reveal";
import { AiWorkflow } from "./ai-workflow";

export function AiPlatform() {
  return (
    <Section id="orvix-ai" className="surface-ink">
      <Reveal className="max-w-3xl">
        <p className="t-caption !text-[var(--signal)]">{brand.productLine}</p>
        <h2 className="t-display mt-5 !text-white">
          The intelligence layer behind every listing, bid, and restock.
        </h2>
        <p className="mt-6 text-[1.0625rem] leading-relaxed text-[var(--text-inv-2)] max-w-[62ch]">
          Don&apos;t take our word for it — watch Command AI build a marketplace-ready
          listing from a raw product brief to publish.
        </p>
      </Reveal>

      <Reveal delay={0.08}>
        <AiWorkflow />
      </Reveal>

      <Reveal className="mt-10">
        <Link
          href={brand.ctas.secondary.href}
          className={cn(buttonVariants({ size: "lg" }))}
        >
          See what an audit finds
        </Link>
      </Reveal>
    </Section>
  );
}
