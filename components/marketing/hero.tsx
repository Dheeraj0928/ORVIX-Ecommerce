"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { brand } from "@/config/brand";
import { buttonVariants } from "@/components/ui/button";
import { DashboardShell } from "@/components/dashboard/dashboard-shell";
import { Magnetic } from "@/components/motion/magnetic";
import { HeroTitle } from "@/components/marketing/hero-title";
import { dur, ease } from "@/lib/motion";
import { cn } from "@/lib/utils";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(70% 55% at 12% 0%, rgba(0,97,255,0.07), transparent 55%), radial-gradient(45% 40% at 88% 8%, rgba(168,176,188,0.18), transparent 55%), linear-gradient(180deg, #F7F8FA 0%, #EEF0F3 55%, #E8EBF0 100%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--line-strong)] to-transparent"
      />

      <div className="relative mx-auto grid min-h-[calc(100svh-4.75rem)] w-full max-w-[1500px] items-center gap-10 px-6 py-12 md:px-10 lg:grid-cols-[minmax(0,0.46fr)_minmax(0,0.54fr)] lg:gap-12 lg:py-10 xl:gap-16 xl:px-14">
        <div className="relative z-10 max-w-[640px] lg:pb-4">
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: dur.reveal, ease: ease.out }}
            className="t-caption"
          >
            {brand.shortName} Commerce
          </motion.p>

          <HeroTitle />

          <motion.p
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: dur.slow, delay: 0.2, ease: ease.out }}
            className="mt-7 max-w-[30rem] t-body"
          >
            AI-powered operations with specialist teams — grow across Amazon,
            Flipkart, Meesho, and beyond without the chaos.
          </motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: dur.slow, delay: 0.28, ease: ease.out }}
            className="mt-9 flex flex-col gap-2.5 sm:flex-row sm:items-center"
          >
            <Magnetic strength={0.14}>
              <Link
                href={brand.ctas.primary.href}
                className={cn(buttonVariants({ size: "lg" }), "min-w-[210px]")}
              >
                {brand.ctas.primary.label}
              </Link>
            </Magnetic>
            <Link
              href={brand.ctas.secondary.href}
              className={cn(buttonVariants({ variant: "secondary", size: "lg" }))}
            >
              {brand.ctas.secondary.label}
            </Link>
          </motion.div>

          <motion.div
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.38, duration: dur.med, ease: ease.out }}
            className="mt-7 flex flex-wrap items-center gap-x-4 gap-y-2 text-[12px] tracking-[-0.01em] text-[var(--text-3)]"
          >
            <span className="inline-flex items-center gap-1.5">
              <span className="live-dot h-1.5 w-1.5 rounded-full bg-[var(--go)]" />
              Live ops across 10+ marketplaces
            </span>
            <span className="hidden h-3 w-px bg-[var(--line-strong)] sm:block" />
            <span>98% client retention</span>
          </motion.div>
        </div>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 28, scale: 0.988 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.85, delay: 0.12, ease: ease.out }}
          className="relative lg:-mr-4 xl:-mr-8"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute -inset-12 rounded-[48px] opacity-80 blur-3xl"
            style={{
              background:
                "radial-gradient(circle at 50% 42%, rgba(0,97,255,0.14), transparent 60%)",
            }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-5 left-[10%] right-[10%] h-8 rounded-[100%] bg-[var(--ink)]/8 blur-2xl"
          />
          {/* Compact frame on mobile so product stays in first viewport */}
          <div className="relative origin-center max-h-[42vh] overflow-hidden rounded-[var(--radius-xl)] shadow-[var(--elevate-product)] ring-1 ring-[var(--line)] sm:max-h-none sm:overflow-visible sm:rounded-none sm:shadow-none sm:ring-0 lg:scale-[1.04] xl:scale-[1.08]">
            <div className="origin-top scale-[0.92] sm:scale-100">
              <DashboardShell />
            </div>
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[var(--paper)] to-transparent sm:hidden"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
