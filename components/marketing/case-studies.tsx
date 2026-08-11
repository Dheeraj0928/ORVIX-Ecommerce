"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useInView, useReducedMotion } from "framer-motion";
import { caseStudies } from "@/content/home";
import { Section } from "@/components/layout/section";
import { Reveal, Stagger, StaggerItem } from "./reveal";

function Metric({ value }: { value: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });
  const reduce = useReducedMotion();
  const numMatch = value.match(/[\d.]+/);
  const num = numMatch ? Number(numMatch[0]) : NaN;
  const prefix = value.slice(0, value.indexOf(numMatch?.[0] ?? ""));
  const suffix = numMatch
    ? value.slice((numMatch.index ?? 0) + numMatch[0].length)
    : value;
  // Never flash 0 — SSR/final number first, then ease up from ~55%
  const [n, setN] = useState(Number.isNaN(num) ? 0 : num);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (Number.isNaN(num)) return;
    if (!inView || reduce || started) {
      setN(num);
      return;
    }
    setStarted(true);
    let frame = 0;
    const total = 32;
    const from = num * 0.55;
    const id = window.setInterval(() => {
      frame += 1;
      const t = frame / total;
      setN(from + (num - from) * (1 - Math.pow(1 - t, 3)));
      if (frame >= total) window.clearInterval(id);
    }, 24);
    return () => window.clearInterval(id);
  }, [inView, num, reduce, started]);

  if (Number.isNaN(num)) {
    return (
      <p
        ref={ref}
        className="font-display text-[2.5rem] font-semibold tracking-[-0.05em] text-[var(--ink)]"
      >
        {value}
      </p>
    );
  }

  const display =
    Number.isInteger(num) && !String(num).includes(".")
      ? Math.round(n).toString()
      : n.toFixed(num % 1 === 0 ? 0 : 1);

  return (
    <p
      ref={ref}
      className="font-display text-[2.5rem] font-semibold tracking-[-0.05em] text-[var(--ink)]"
    >
      {prefix}
      {display}
      {suffix}
    </p>
  );
}

export function CaseStudies() {
  return (
    <Section className="surface-snow">
      <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div className="max-w-2xl">
          <p className="t-caption">Proof</p>
          <h2 className="t-display mt-4">Outcomes over activity</h2>
          <p className="mt-5 t-body">
            Before/after growth stories from brands we operate with.
          </p>
        </div>
        <Link
          href="/case-studies"
          className="text-[14px] font-semibold tracking-[-0.02em] text-[var(--signal)] hover:underline"
        >
          View all case studies
        </Link>
      </Reveal>
      <Stagger className="mt-14 grid gap-4 lg:grid-cols-3" staggerChildren={0.07}>
        {caseStudies.map((study, i) => (
          <StaggerItem key={study.slug}>
            <article className="panel-lift flex h-full flex-col overflow-hidden p-0">
              <div className="flex items-center justify-between border-b border-[var(--line)] bg-[var(--paper)]/90 px-8 py-3 backdrop-blur-sm">
                <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.08em] text-[var(--text-3)]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--go)]" />
                  Validated outcome
                </span>
                <span className="font-mono text-[11px] text-[var(--text-3)]">
                  CS-{String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-8">
                <Metric value={study.metric} />
                <p className="mt-2 text-[13px] text-[var(--text-3)]">
                  {study.detail}
                </p>
                <div className="mt-5 flex h-8 items-end gap-1">
                  {[32, 40, 36, 48, 44, 58, 52, 68, 62, 78, 72, 88].map(
                    (h, idx) => (
                      <span
                        key={idx}
                        className="flex-1 origin-bottom rounded-[2px] bg-[var(--signal)]/15 transition-transform duration-500"
                        style={{
                          height: `${h}%`,
                          opacity: 0.35 + (idx / 12) * 0.65,
                          transitionDelay: `${idx * 40}ms`,
                        }}
                      />
                    ),
                  )}
                </div>
                <h3 className="mt-7 text-[1.15rem] font-semibold tracking-[-0.03em] text-[var(--ink)]">
                  {study.title}
                </h3>
                <p className="mt-3 flex-1 text-[15px] leading-relaxed tracking-[-0.015em] text-[var(--text-2)]">
                  {study.summary}
                </p>
                <Link
                  href={`/case-studies/${study.slug}`}
                  className="mt-6 text-[14px] font-semibold text-[var(--signal)] hover:underline"
                >
                  Read story
                </Link>
              </div>
            </article>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
