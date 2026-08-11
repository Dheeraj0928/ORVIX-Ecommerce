"use client";

import Link from "next/link";
import { brand } from "@/config/brand";
import { Section } from "@/components/layout/section";
import { buttonVariants } from "@/components/ui/button";
import { Magnetic } from "@/components/motion/magnetic";
import { cn } from "@/lib/utils";
import { Reveal } from "./reveal";

export function FinalCta() {
  return (
    <Section className="surface-ink" fullBleed>
      <div className="mx-auto w-full max-w-[1400px] px-6 py-10 md:px-10 xl:px-14">
        <Reveal variant="blur">
          <div className="mx-auto max-w-3xl py-10 text-center md:py-16">
            <h2 className="t-display !text-white">
              Ready to run ecommerce with an operating system?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-[1.125rem] leading-relaxed text-white/55">
              Book a free consultation — or request an audit and see exactly where
              growth is leaking.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Magnetic strength={0.16}>
                <Link
                  href={brand.ctas.primary.href}
                  className={cn(buttonVariants({ size: "lg" }))}
                >
                  {brand.ctas.primary.label}
                </Link>
              </Magnetic>
              <Link
                href={brand.ctas.secondary.href}
                className={cn(
                  buttonVariants({ variant: "secondary", size: "lg" }),
                  "border-white/15 bg-white/5 text-white hover:bg-white/10 hover:border-white/25",
                )}
              >
                {brand.ctas.secondary.label}
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
