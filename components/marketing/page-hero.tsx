"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/layout/container";
import { dur, ease } from "@/lib/motion";

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description: string;
}) {
  const reduce = useReducedMotion();

  return (
    <div className="relative overflow-hidden border-b border-[var(--line)] surface-mist">
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -right-20 top-0 h-56 w-56 rounded-full bg-[var(--signal)]/8 blur-3xl"
        animate={
          reduce ? undefined : { opacity: [0.4, 0.75, 0.4], x: [0, 12, 0] }
        }
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <Container className="relative py-16 md:py-24">
        {eyebrow ? (
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: dur.reveal, ease: ease.out }}
            className="t-caption"
          >
            {eyebrow}
          </motion.p>
        ) : null}
        <motion.h1
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: dur.slow, delay: 0.05, ease: ease.out }}
          className="t-display mt-4 max-w-4xl"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: dur.slow, delay: 0.14, ease: ease.out }}
          className="mt-5 max-w-2xl t-body"
        >
          {description}
        </motion.p>
      </Container>
    </div>
  );
}
