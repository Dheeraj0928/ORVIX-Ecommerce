"use client";

import { motion, useReducedMotion } from "framer-motion";
import { marketplaces } from "@/content/home";
import { Section } from "@/components/layout/section";
import { dur, ease, stagger, viewportOnce } from "@/lib/motion";
import { Reveal } from "./reveal";

export function LogoCloud() {
  const reduce = useReducedMotion();

  return (
    <Section className="!py-14 md:!py-16 surface-mist border-y border-[var(--line)]">
      <Reveal>
        <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4">
          <p className="t-caption text-center">
            Operating across India&apos;s leading marketplaces
          </p>
          <span className="inline-flex items-center gap-1.5 rounded-[6px] border border-[var(--line)] bg-[var(--snow)]/85 px-2 py-0.5 text-[11px] font-medium tracking-[-0.01em] text-[var(--text-2)] shadow-[var(--elevate-1)] backdrop-blur-sm">
            <span className="live-dot h-1.5 w-1.5 rounded-full bg-[var(--go)]" />
            All systems connected
          </span>
        </div>
      </Reveal>
      <motion.ul
        className="mt-8 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3"
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        variants={{
          hidden: {},
          show: {
            transition: { staggerChildren: stagger.fast, delayChildren: 0.05 },
          },
        }}
      >
        {marketplaces.map((name, i) => (
          <motion.li
            key={name}
            variants={
              reduce
                ? undefined
                : {
                    hidden: { opacity: 0, y: 8, scale: 0.96 },
                    show: { opacity: 1, y: 0, scale: 1 },
                  }
            }
            transition={{ duration: dur.med, ease: ease.out }}
            whileHover={reduce ? undefined : { y: -3, scale: 1.03 }}
            className="rounded-[10px] border border-[var(--line)] bg-[var(--snow)] px-3.5 py-2 text-[13px] font-semibold tracking-[-0.025em] text-[var(--ink)] shadow-[var(--elevate-1)]"
            style={
              reduce
                ? undefined
                : {
                    animation: `orvix-float ${4.8 + (i % 4) * 0.35}s ease-in-out ${i * 0.1}s infinite`,
                  }
            }
          >
            {name}
          </motion.li>
        ))}
      </motion.ul>
    </Section>
  );
}
