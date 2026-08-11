"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { brand } from "@/config/brand";
import { Section } from "@/components/layout/section";
import { dur, ease, stagger } from "@/lib/motion";

function parseStat(value: string) {
  const numeric = value.replace(/[^\d.]/g, "");
  const suffix = value.replace(numeric, "");
  return {
    num: Number(numeric) || 0,
    suffix,
    prefix: value.startsWith("₹") ? "₹" : "",
  };
}

function Counter({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });
  const reduce = useReducedMotion();
  const { num, suffix, prefix } = parseStat(value);
  // Never flash 0 — start at final value, optionally count from ~60%
  const [display, setDisplay] = useState(num);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!inView || reduce || started) {
      setDisplay(num);
      return;
    }
    setStarted(true);
    let frame = 0;
    const total = 28;
    const from = Math.max(0, Math.round(num * 0.55));
    const id = window.setInterval(() => {
      frame += 1;
      const t = frame / total;
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplay(Math.round(from + (num - from) * eased));
      if (frame >= total) window.clearInterval(id);
    }, 28);
    return () => window.clearInterval(id);
  }, [inView, num, reduce, started]);

  return (
    <span ref={ref} className="tabular">
      {prefix}
      {display}
      {suffix.replace("₹", "")}
    </span>
  );
}

export function StatsRow() {
  const reduce = useReducedMotion();

  return (
    <Section className="surface-snow !py-16 md:!py-20">
      <div className="grid grid-cols-2 gap-10 md:grid-cols-4 md:gap-8">
        {brand.stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={reduce ? false : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-8%" }}
            transition={{
              delay: i * stagger.med,
              duration: dur.reveal,
              ease: ease.out,
            }}
            className={i > 0 ? "md:border-l md:border-[var(--line)] md:pl-8" : ""}
          >
            <p className="font-display text-[clamp(2.35rem,3.8vw,3.25rem)] font-semibold tracking-[-0.045em] tabular text-[var(--ink)]">
              <Counter value={stat.value} />
            </p>
            <p className="mt-2 text-[13.5px] tracking-[-0.01em] text-[var(--text-2)]">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
