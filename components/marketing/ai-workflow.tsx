"use client";

import { useEffect, useState, useRef } from "react";
import {
  motion,
  useReducedMotion,
  AnimatePresence,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion";
import {
  Upload,
  Eraser,
  ImageIcon,
  Type,
  FileText,
  Search,
  Store,
  Rocket,
  Check,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { dur, ease, spring, stagger } from "@/lib/motion";

const steps = [
  {
    id: "upload",
    label: "Upload product",
    detail: "Raw packshot ingested",
    icon: Upload,
  },
  {
    id: "bg",
    label: "Remove background",
    detail: "Clean isolation · marketplace-ready",
    icon: Eraser,
  },
  {
    id: "images",
    label: "Create images",
    detail: "Lifestyle + detail frames generated",
    icon: ImageIcon,
  },
  {
    id: "title",
    label: "Generate title",
    detail: "Intent-led, channel-aware",
    icon: Type,
  },
  {
    id: "desc",
    label: "Write description",
    detail: "Bullets + claims validated",
    icon: FileText,
  },
  {
    id: "seo",
    label: "SEO optimize",
    detail: "Keywords mapped to search demand",
    icon: Search,
  },
  {
    id: "preview",
    label: "Marketplace preview",
    detail: "Amazon · Flipkart · Meesho",
    icon: Store,
  },
  {
    id: "publish",
    label: "Publish",
    detail: "Specialist gate → go live",
    icon: Rocket,
  },
] as const;

const channels = ["Amazon", "Flipkart", "Meesho"] as const;

export function AiWorkflow() {
  const reduce = useReducedMotion();
  const rootRef = useRef<HTMLDivElement>(null);
  const inView = useInView(rootRef, { amount: 0.35 });
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const { scrollYProgress } = useScroll({
    target: rootRef,
    offset: ["start 80%", "end 40%"],
  });
  const drawProgress = useTransform(scrollYProgress, [0, 1], [0, 1]);

  useEffect(() => {
    if (reduce || !inView || paused) return;
    const id = window.setInterval(() => {
      setActive((i) => (i + 1) % steps.length);
    }, 2100);
    return () => window.clearInterval(id);
  }, [reduce, inView, paused]);

  const StepIcon = steps[active].icon;
  const progress = ((active + 1) / steps.length) * 100;

  return (
    <div
      ref={rootRef}
      className="mt-14 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) {
          setPaused(false);
        }
      }}
    >
      {/* Step rail */}
      <div className="panel-dark relative overflow-hidden p-2 md:p-3">
        {/* Scroll-drawn progress rail */}
        <div
          aria-hidden
          className="absolute bottom-4 left-[30px] top-4 w-px bg-white/10 md:left-[34px]"
        >
          <motion.div
            className="origin-top w-full bg-[var(--signal)]"
            style={
              reduce
                ? { height: `${progress}%` }
                : { scaleY: drawProgress, height: "100%" }
            }
          />
        </div>

        <ol className="relative space-y-1">
          {steps.map((step, i) => {
            const Icon = step.icon;
            const state =
              i < active ? "done" : i === active ? "active" : "pending";
            return (
              <motion.li
                key={step.id}
                initial={reduce ? false : { opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-5%" }}
                transition={{
                  delay: i * stagger.fast,
                  duration: dur.med,
                  ease: ease.out,
                }}
              >
                <button
                  type="button"
                  onClick={() => setActive(i)}
                  className={cn(
                    "flex w-full items-center gap-3 rounded-[12px] px-3 py-3 text-left transition-[background,opacity,transform] duration-[var(--dur-med)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--signal)]",
                    state === "active" && "bg-white/[0.08]",
                    state === "done" && "opacity-80 hover:bg-white/[0.04]",
                    state === "pending" &&
                      "opacity-45 hover:bg-white/[0.03] hover:opacity-70",
                  )}
                >
                  <span
                    className={cn(
                      "relative z-[1] flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] border transition-[border-color,background,color] duration-[var(--dur-med)]",
                      state === "active" &&
                        "border-[var(--signal)]/40 bg-[var(--signal)]/15 text-[var(--signal)] shadow-[0_0_24px_rgba(0,97,255,0.25)]",
                      state === "done" &&
                        "border-white/10 bg-white/[0.06] text-[var(--go)]",
                      state === "pending" &&
                        "border-white/10 bg-[var(--ink)] text-white/50",
                    )}
                  >
                    {state === "done" ? (
                      <Check className="h-4 w-4" strokeWidth={1.75} />
                    ) : (
                      <Icon className="h-4 w-4" strokeWidth={1.75} />
                    )}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-[13px] font-semibold tracking-[-0.02em] text-white">
                      {step.label}
                    </span>
                    <span className="mt-0.5 block truncate text-[12px] text-white/40">
                      {step.detail}
                    </span>
                  </span>
                  <span className="font-mono text-[10px] text-white/25">
                    0{i + 1}
                  </span>
                </button>
              </motion.li>
            );
          })}
        </ol>
      </div>

      {/* Live stage */}
      <div className="panel-dark relative overflow-hidden p-6 md:p-8">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[var(--signal)]/20 blur-3xl"
        />

        <div className="relative flex items-center justify-between gap-3">
          <div>
            <p className="t-caption !text-white/35">Command AI</p>
            <p className="mt-2 text-[1.35rem] font-semibold tracking-[-0.035em] text-white">
              Watch a listing get built
            </p>
          </div>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[11px] font-medium text-white/70 backdrop-blur-sm">
            <span className="live-dot h-1.5 w-1.5 rounded-full bg-[var(--go)]" />
            {paused ? "Paused" : "Live demo"}
          </span>
        </div>

        {/* Progress bar */}
        <div className="relative mt-6 h-1 overflow-hidden rounded-full bg-white/10">
          <motion.div
            className="h-full rounded-full bg-[var(--signal)]"
            animate={{ width: `${progress}%` }}
            transition={spring.soft}
          />
        </div>

        <div className="relative mt-6 min-h-[280px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={steps[active].id}
              initial={
                reduce ? false : { opacity: 0, y: 12, filter: "blur(4px)" }
              }
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={
                reduce
                  ? undefined
                  : { opacity: 0, y: -8, filter: "blur(3px)" }
              }
              transition={{ duration: dur.med, ease: ease.out }}
              className="absolute inset-0"
            >
              <div className="flex h-full flex-col rounded-[16px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.02))] p-5 backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <motion.span
                    layout
                    className="flex h-11 w-11 items-center justify-center rounded-[12px] bg-[var(--signal)]/20 text-[var(--signal)]"
                    transition={spring.snappy}
                  >
                    <StepIcon className="h-5 w-5" strokeWidth={1.75} />
                  </motion.span>
                  <div>
                    <p className="text-[15px] font-semibold tracking-[-0.025em] text-white">
                      {steps[active].label}
                    </p>
                    <p className="text-[13px] text-white/45">
                      {steps[active].detail}
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex flex-1 flex-col justify-center">
                  {active < 3 ? (
                    <div className="grid grid-cols-3 gap-3">
                      {[0, 1, 2].map((i) => (
                        <motion.div
                          key={i}
                          initial={reduce ? false : { opacity: 0, scale: 0.96 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{
                            delay: i * stagger.med,
                            duration: dur.med,
                            ease: ease.out,
                          }}
                          className={cn(
                            "aspect-[4/5] rounded-[12px] border border-white/10",
                            i === 0
                              ? "bg-[linear-gradient(145deg,#2a2a32,#141418)]"
                              : "bg-white/[0.04]",
                          )}
                        >
                          <div className="flex h-full items-end p-2">
                            <div className="h-1 w-full rounded-full bg-white/10">
                              <motion.div
                                className="h-full rounded-full bg-[var(--signal)]"
                                initial={{ width: "15%" }}
                                animate={{
                                  width: i <= active ? "100%" : "35%",
                                }}
                                transition={{ duration: dur.draw, ease: ease.out }}
                              />
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  ) : active < 6 ? (
                    <motion.div
                      initial={reduce ? false : { opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="rounded-[12px] border border-white/10 bg-white/[0.04] p-4"
                    >
                      <p className="text-[11px] font-medium uppercase tracking-[0.08em] text-white/35">
                        Draft output
                      </p>
                      <p className="mt-2 text-[15px] font-semibold tracking-[-0.02em] text-white">
                        {active === 3 &&
                          "ORVIX Ceramic Pour-Over · 600ml · Matte Black"}
                        {active === 4 &&
                          "Precision pour spout. Heat-retaining body. Built for daily ritual."}
                        {active === 5 &&
                          "Keywords: pour over coffee · ceramic dripper · matte black"}
                      </p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {["SEO score 92", "Claims OK", "Brand voice"].map(
                          (t, i) => (
                            <motion.span
                              key={t}
                              initial={reduce ? false : { opacity: 0, y: 4 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.1 + i * stagger.fast }}
                              className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[11px] text-white/60"
                            >
                              {t}
                            </motion.span>
                          ),
                        )}
                      </div>
                    </motion.div>
                  ) : (
                    <div className="space-y-3">
                      <p className="text-[12px] text-white/45">
                        Ready to publish across
                      </p>
                      <div className="grid grid-cols-3 gap-2">
                        {channels.map((c, i) => (
                          <motion.div
                            key={c}
                            initial={reduce ? false : { opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                              delay: i * stagger.med,
                              ...spring.soft,
                            }}
                            className="rounded-[12px] border border-white/10 bg-white/[0.04] px-3 py-4 text-center backdrop-blur-sm"
                          >
                            <p className="text-[13px] font-semibold text-white">
                              {c}
                            </p>
                            <p className="mt-1 text-[11px] text-[var(--go)]">
                              {active === 7 ? "Published" : "Preview ready"}
                            </p>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4">
                  <p className="font-mono text-[11px] text-white/30">
                    step {active + 1} / {steps.length}
                  </p>
                  <div className="flex gap-1" role="tablist" aria-label="Workflow steps">
                    {steps.map((_, i) => (
                      <button
                        key={i}
                        type="button"
                        role="tab"
                        aria-selected={i === active}
                        aria-label={`Go to step ${i + 1}`}
                        onClick={() => setActive(i)}
                        className={cn(
                          "h-1 w-4 rounded-full transition-[background,width] duration-[var(--dur-med)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--signal)]",
                          i === active
                            ? "w-6 bg-[var(--signal)]"
                            : "bg-white/15 hover:bg-white/30",
                        )}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
