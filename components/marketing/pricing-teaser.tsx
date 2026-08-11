"use client";

import Link from "next/link";
import { pricingTiers } from "@/content/home";
import { brand } from "@/config/brand";
import { Section } from "@/components/layout/section";
import { buttonVariants } from "@/components/ui/button";
import { Magnetic } from "@/components/motion/magnetic";
import { cn } from "@/lib/utils";
import { Reveal, Stagger, StaggerItem } from "./reveal";

export function PricingTeaser() {
  return (
    <Section className="surface-snow">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="t-caption">Engagements</p>
        <h2 className="t-display mt-4">
          Pricing built around your operating reality
        </h2>
        <p className="mt-5 t-body">
          Custom engagements — scoped after we understand catalog size, channels,
          and goals.
        </p>
      </Reveal>
      <Stagger className="mt-14 grid gap-4 lg:grid-cols-3" staggerChildren={0.08}>
        {pricingTiers.map((tier) => (
          <StaggerItem key={tier.name} variant="scale">
            <article
              className={cn(
                "flex h-full flex-col p-7 md:p-8 transition-[transform,box-shadow,border-color] duration-[var(--dur-med)] ease-[var(--ease-out)]",
                tier.featured ? "panel-featured" : "panel",
                !tier.featured && "hover:-translate-y-px hover:shadow-[var(--elevate-2)]",
              )}
            >
              <p className="t-caption">
                {tier.featured ? "Most chosen" : "Engagement"}
              </p>
              <h3 className="mt-3 text-[1.25rem] font-semibold tracking-[-0.028em] text-[var(--ink)]">
                {tier.name}
              </h3>
              <p className="mt-2 font-display text-[2.1rem] font-semibold tracking-[-0.04em] tabular text-[var(--ink)]">
                {tier.price}
              </p>
              <p className="mt-2 text-[14px] text-[var(--text-2)]">{tier.blurb}</p>
              <ul className="mt-7 flex-1 space-y-2.5">
                {tier.features.map((f) => (
                  <li
                    key={f}
                    className="text-[14px] tracking-[-0.015em] text-[var(--ink)]"
                  >
                    <span className="mr-2 text-[var(--signal)]">—</span>
                    {f}
                  </li>
                ))}
              </ul>
              {tier.featured ? (
                <Magnetic className="mt-8 w-full" strength={0.12}>
                  <Link
                    href={brand.ctas.primary.href}
                    className={cn(buttonVariants({ variant: "primary" }), "w-full")}
                  >
                    {brand.ctas.primary.label}
                  </Link>
                </Magnetic>
              ) : (
                <Link
                  href={brand.ctas.primary.href}
                  className={cn(
                    buttonVariants({ variant: "secondary" }),
                    "mt-8",
                  )}
                >
                  {brand.ctas.primary.label}
                </Link>
              )}
            </article>
          </StaggerItem>
        ))}
      </Stagger>
      <p className="mt-8 text-center text-[14px] text-[var(--text-3)]">
        Prefer details first?{" "}
        <Link
          href="/pricing"
          className="font-semibold text-[var(--signal)] hover:underline"
        >
          See pricing approach
        </Link>
      </p>
    </Section>
  );
}
