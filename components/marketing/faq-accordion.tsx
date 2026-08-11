"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { faqs } from "@/content/home";
import { Section } from "@/components/layout/section";
import { cn } from "@/lib/utils";
import { dur, ease } from "@/lib/motion";
import { Reveal } from "./reveal";

export function FaqAccordion() {
  const [open, setOpen] = useState(0);
  const reduce = useReducedMotion();

  return (
    <Section className="surface-mist">
      <Reveal className="max-w-2xl">
        <p className="t-caption">FAQ</p>
        <h2 className="t-display mt-4">Questions, answered clearly</h2>
        <p className="mt-5 t-body">
          Everything you need before booking a consultation.
        </p>
      </Reveal>
      <Reveal delay={0.06} className="panel mx-auto mt-12 max-w-3xl divide-y divide-[var(--line)] overflow-hidden">
        {faqs.map((item, i) => {
          const isOpen = open === i;
          return (
            <div key={item.q}>
              <h3>
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left text-[16px] font-semibold tracking-[-0.025em] text-[var(--ink)] transition-colors duration-[var(--dur-fast)] hover:bg-[var(--paper)]/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--signal)]"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? -1 : i)}
                >
                  {item.q}
                  <ChevronDown
                    strokeWidth={1.75}
                    className={cn(
                      "h-5 w-5 shrink-0 text-[var(--text-3)] transition-transform duration-[var(--dur-med)] ease-[var(--ease-out)]",
                      isOpen && "rotate-180 text-[var(--signal)]",
                    )}
                  />
                </button>
              </h3>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={reduce ? false : { height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={reduce ? undefined : { height: 0, opacity: 0 }}
                    transition={{ duration: dur.med, ease: ease.out }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-5 text-[15px] leading-relaxed tracking-[-0.015em] text-[var(--text-2)]">
                      {item.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </Reveal>
    </Section>
  );
}
