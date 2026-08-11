"use client";

import { processSteps } from "@/content/home";
import { Section } from "@/components/layout/section";
import { Reveal, Stagger, StaggerItem } from "./reveal";

export function ProcessTimeline() {
  return (
    <Section className="surface-mist">
      <Reveal className="max-w-2xl">
        <p className="t-caption">Cadence</p>
        <h2 className="t-display mt-4">A clear operating cadence</h2>
        <p className="mt-5 t-body">
          From discovery to scale — measurable stages, not vague retainers.
        </p>
      </Reveal>
      <Stagger
        className="mt-14 grid gap-3 md:grid-cols-5 md:gap-0"
        staggerChildren={0.07}
      >
        {processSteps.map((step, i) => (
          <StaggerItem key={step.title}>
            <article className="panel relative flex h-full flex-col p-6 md:rounded-none md:first:rounded-l-[var(--radius-lg)] md:last:rounded-r-[var(--radius-lg)] md:[&:not(:last-child)]:border-r-0">
              <div className="flex items-center justify-between gap-2">
                <span className="font-mono text-[12px] font-medium text-[var(--signal)]">
                  0{i + 1}
                </span>
                {i < processSteps.length - 1 ? (
                  <span
                    aria-hidden
                    className="hidden h-px flex-1 overflow-hidden bg-[var(--line)] md:block"
                  >
                    <span className="block h-px w-full origin-left scale-x-0 bg-[var(--signal)]/45 [animation:orvix-draw_0.9s_var(--ease-out)_forwards] [animation-delay:0.4s]" />
                  </span>
                ) : (
                  <span className="rounded-[6px] bg-[var(--signal-soft)] px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.06em] text-[var(--signal)]">
                    Live
                  </span>
                )}
              </div>
              <h3 className="mt-4 text-[16px] font-semibold tracking-[-0.03em] text-[var(--ink)]">
                {step.title}
              </h3>
              <p className="mt-2 text-[13px] leading-relaxed tracking-[-0.012em] text-[var(--text-2)]">
                {step.body}
              </p>
            </article>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
