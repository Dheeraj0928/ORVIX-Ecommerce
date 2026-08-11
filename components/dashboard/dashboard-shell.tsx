"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import {
  motion,
  useInView,
  useReducedMotion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { brand } from "@/config/brand";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { dur, ease, spring, stagger } from "@/lib/motion";
import { RefreshCw, Info } from "lucide-react";

const nav = [
  { id: "overview", label: "Overview" },
  { id: "catalog", label: "Catalog" },
  { id: "ads", label: "Advertising" },
  { id: "inventory", label: "Inventory" },
  { id: "ai", label: "ORVIX AI", badge: "12" },
  { id: "health", label: "Account health" },
  { id: "reports", label: "Reports" },
];

const ranges = [
  { id: "7D", mult: 0.82 },
  { id: "30D", mult: 1 },
  { id: "90D", mult: 1.18 },
] as const;

const kpisBase = [
  { label: "Net revenue", value: 48.2, prefix: "₹", suffix: "L", delta: "+18.4%", tip: "Net after returns & fees" },
  { label: "Orders", value: 12480, prefix: "", suffix: "", delta: "+9.1%", format: "int" as const, tip: "All channels · last period" },
  { label: "Contribution", value: 11.6, prefix: "₹", suffix: "L", delta: "+14.2%", tip: "After ad spend" },
  { label: "Return rate", value: 3.1, prefix: "", suffix: "%", delta: "−0.8 pts", tip: "Trailing 30 days" },
];

const revenueBase = [32, 38, 36, 44, 42, 51, 48, 58, 55, 67, 72, 84];
const adsBase = [22, 28, 25, 34, 31, 40, 38, 48];

const marketplaces = [
  { name: "Amazon", score: 98, status: "Healthy" as const, sales: "₹22.4L" },
  { name: "Flipkart", score: 94, status: "Healthy" as const, sales: "₹12.1L" },
  { name: "Meesho", score: 91, status: "Watch" as const, sales: "₹8.6L" },
  { name: "Blinkit", score: 89, status: "Healthy" as const, sales: "₹5.1L" },
];

const feed = [
  { t: "14:02", text: "Sync OK · AMZ · FK · MSH", tone: "go" as const },
  { t: "13:58", text: "AI drafted 24 titles · Home", tone: "signal" as const },
  { t: "13:41", text: "Price gap · SKU-4821 (+₹40)", tone: "warn" as const },
  { t: "12:19", text: "Listing quality 92 → 94", tone: "go" as const },
  { t: "11:05", text: "Restock cleared · 6 SKUs", tone: "go" as const },
];

const weekLabels = ["W1", "W2", "W3", "W4", "W5", "W6", "W7", "W8", "W9", "W10", "W11", "W12"];

const aiCards = [
  {
    tone: "signal" as const,
    title: "Listing opportunity",
    body: "Refresh A+ on top 12 SKUs — projected +6–9% CVR",
  },
  {
    tone: "warn" as const,
    title: "Pricing",
    body: "7 SKUs underpriced vs competitive set",
  },
  {
    tone: "go" as const,
    title: "Restock",
    body: "Reorder window opens in 4 days for Hero pack",
  },
];

function formatKpi(value: number, format?: "int") {
  if (format === "int") return Math.round(value).toLocaleString("en-IN");
  return value.toFixed(1);
}

function Meter({
  value,
  tone = "signal",
  animate,
  delay = 0,
}: {
  value: number;
  tone?: "signal" | "go" | "warn";
  animate?: boolean;
  delay?: number;
}) {
  const color =
    tone === "go"
      ? "bg-[var(--go)]"
      : tone === "warn"
        ? "bg-[var(--warn)]"
        : "bg-[var(--signal)]";
  return (
    <div className="h-1 w-full overflow-hidden rounded-full bg-[var(--mist)]">
      <motion.div
        className={cn("h-full rounded-full", color)}
        initial={animate ? { width: 0 } : false}
        animate={{ width: `${value}%` }}
        transition={{ duration: dur.draw, ease: ease.out, delay }}
      />
    </div>
  );
}

function KpiValue({
  target,
  prefix,
  suffix,
  format,
  active,
}: {
  target: number;
  prefix: string;
  suffix: string;
  format?: "int";
  active: boolean;
}) {
  const reduce = useReducedMotion();
  const [n, setN] = useState(target);

  useEffect(() => {
    if (!active || reduce) {
      setN(target);
      return;
    }
    let frame = 0;
    const total = 36;
    const from = target * 0.55;
    const id = window.setInterval(() => {
      frame += 1;
      const t = frame / total;
      const eased = 1 - Math.pow(1 - t, 3);
      setN(from + (target - from) * eased);
      if (frame >= total) window.clearInterval(id);
    }, 22);
    return () => window.clearInterval(id);
  }, [active, reduce, target]);

  return (
    <span>
      {prefix}
      {formatKpi(n, format)}
      {suffix}
    </span>
  );
}

function SkeletonBlock({ className }: { className?: string }) {
  return <div className={cn("skeleton rounded-[var(--radius-md)]", className)} />;
}

export function DashboardShell({ compact = false }: { compact?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8%" });
  const alive = useInView(ref, { amount: 0.25 });
  const reduce = useReducedMotion();

  const [ready, setReady] = useState(reduce ?? false);
  const [toast, setToast] = useState<string | null>(null);
  const [feedIndex, setFeedIndex] = useState(0);
  const [range, setRange] = useState<(typeof ranges)[number]["id"]>("30D");
  const [activeNav, setActiveNav] = useState("overview");
  const [tip, setTip] = useState<string | null>(null);
  const [aiVisible, setAiVisible] = useState(0);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const px = useSpring(mx, spring.gentle);
  const py = useSpring(my, spring.gentle);
  const rotateX = useTransform(py, [-0.5, 0.5], [0.9, -0.9]);
  const rotateY = useTransform(px, [-0.5, 0.5], [-1.2, 1.2]);
  const glowX = useTransform(px, [-0.5, 0.5], ["30%", "56%"]);
  const glowY = useTransform(py, [-0.5, 0.5], ["24%", "46%"]);

  const rangeMult = ranges.find((r) => r.id === range)?.mult ?? 1;
  const revenue = revenueBase.map((h) => Math.min(100, Math.round(h * rangeMult)));
  const ads = adsBase.map((h) => Math.min(100, Math.round(h * rangeMult)));

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      setReady(true);
      return;
    }
    const t = window.setTimeout(() => setReady(true), 380);
    return () => window.clearTimeout(t);
  }, [inView, reduce]);

  useEffect(() => {
    if (!ready || !alive || reduce) return;
    setToast("Marketplace sync complete");
    const hide = window.setTimeout(() => setToast(null), 3400);
    return () => window.clearTimeout(hide);
  }, [ready, alive, reduce]);

  useEffect(() => {
    if (!ready || !alive || reduce) return;
    const id = window.setInterval(() => {
      setFeedIndex((i) => (i + 1) % feed.length);
    }, 3600);
    return () => window.clearInterval(id);
  }, [ready, alive, reduce]);

  useEffect(() => {
    if (!ready || reduce) {
      setAiVisible(aiCards.length);
      return;
    }
    setAiVisible(0);
    const timers = aiCards.map((_, i) =>
      window.setTimeout(() => setAiVisible(i + 1), 520 + i * 420),
    );
    return () => timers.forEach(clearTimeout);
  }, [ready, reduce, range]);

  const onPointerMove = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      if (reduce || !ref.current) return;
      const r = ref.current.getBoundingClientRect();
      mx.set((e.clientX - r.left) / r.width - 0.5);
      my.set((e.clientY - r.top) / r.height - 0.5);
    },
    [mx, my, reduce],
  );

  const onPointerLeave = useCallback(() => {
    mx.set(0);
    my.set(0);
    setTip(null);
  }, [mx, my]);

  return (
    <motion.div
      ref={ref}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
      style={
        reduce
          ? undefined
          : {
              rotateX,
              rotateY,
              transformPerspective: 1200,
              transformStyle: "preserve-3d",
            }
      }
      className={cn(
        "panel-product relative overflow-hidden will-change-transform",
        compact ? "" : "min-h-[560px] lg:min-h-[680px] xl:min-h-[740px]",
      )}
      aria-hidden={!compact}
    >
      {/* Ambient light that follows cursor */}
      {!reduce ? (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute z-0 h-[55%] w-[55%] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-80 blur-3xl"
          style={{
            left: glowX,
            top: glowY,
            background:
              "radial-gradient(circle, rgba(0,97,255,0.1), transparent 70%)",
          }}
        />
      ) : null}

      <AnimatePresence>
        {toast && ready && !reduce ? (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, filter: "blur(2px)" }}
            transition={spring.soft}
            className="absolute right-3 top-14 z-30 flex items-center gap-2 rounded-[10px] border border-[var(--line)] bg-[rgba(255,255,255,0.92)] px-3 py-2 shadow-[var(--elevate-2)] backdrop-blur-md md:right-4"
          >
            <span className="live-dot h-1.5 w-1.5 rounded-full bg-[var(--go)]" />
            <span className="text-[11px] font-medium tracking-[-0.01em] text-[var(--ink)]">
              {toast}
            </span>
          </motion.div>
        ) : null}
      </AnimatePresence>

      {/* Tooltip */}
      <AnimatePresence>
        {tip ? (
          <motion.div
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: dur.fast, ease: ease.out }}
            className="pointer-events-none absolute bottom-4 left-1/2 z-30 -translate-x-1/2 rounded-[8px] border border-[var(--line)] bg-[var(--ink)] px-3 py-1.5 text-[11px] text-white shadow-[var(--elevate-2)]"
            role="tooltip"
          >
            {tip}
          </motion.div>
        ) : null}
      </AnimatePresence>

      <div className="chrome-bar relative z-10 flex items-center justify-between px-4 py-2.5 backdrop-blur-md md:px-5">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <span className="h-2 w-2 rounded-full bg-[var(--mist)]" />
            <span className="h-2 w-2 rounded-full bg-[var(--mist)]" />
            <span className="h-2 w-2 rounded-full bg-[var(--mist)]" />
          </div>
          <div className="hidden h-3.5 w-px bg-[var(--line)] sm:block" />
          <div>
            <p className="text-[12px] font-semibold tracking-[-0.02em] text-[var(--ink)]">
              {brand.shortName} Command
            </p>
            <p className="font-mono text-[10px] tabular text-[var(--text-3)]">
              ops.orvix.app · synced 14:02 IST
            </p>
          </div>
        </div>
        <div className="flex items-center gap-1.5">
          <Badge tone="go">
            <RefreshCw
              className={cn(
                "h-3 w-3",
                ready && alive && !reduce && "animate-[orvix-sync_2.8s_linear_infinite]",
              )}
              strokeWidth={1.75}
            />
            Live
          </Badge>
          <Badge tone="signal">AI</Badge>
        </div>
      </div>

      {!ready ? (
        <div className="grid gap-3 p-4 md:grid-cols-[210px_minmax(0,1fr)]">
          <div className="hidden space-y-2 md:block">
            <SkeletonBlock className="h-8 w-24" />
            {Array.from({ length: 6 }).map((_, i) => (
              <SkeletonBlock key={i} className="h-9 w-full" />
            ))}
          </div>
          <div className="space-y-3">
            <SkeletonBlock className="h-10 w-48" />
            <div className="grid grid-cols-2 gap-2 lg:grid-cols-4">
              {Array.from({ length: 4 }).map((_, i) => (
                <SkeletonBlock key={i} className="h-20" />
              ))}
            </div>
            <SkeletonBlock className="h-40 w-full" />
          </div>
        </div>
      ) : (
        <div className="grid md:grid-cols-[210px_minmax(0,1fr)]">
          <aside className="hidden border-r border-[var(--line)] bg-[var(--paper-deep)]/90 backdrop-blur-sm md:block">
            <div className="p-3">
              <p className="px-2.5 pb-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--text-3)]">
                Navigate
              </p>
              <ul className="space-y-0.5">
                {nav.map((item, i) => (
                  <motion.li
                    key={item.id}
                    initial={reduce ? false : { opacity: 0, x: -6 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * stagger.fast, duration: dur.med, ease: ease.out }}
                  >
                    <button
                      type="button"
                      onClick={() => setActiveNav(item.id)}
                      className={cn(
                        "flex w-full items-center justify-between rounded-[8px] px-2.5 py-2 text-left text-[12px] tracking-[-0.015em] transition-[background,box-shadow,color] duration-[var(--dur-fast)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--signal)]",
                        activeNav === item.id
                          ? "bg-[var(--snow)] font-semibold text-[var(--ink)] shadow-[var(--elevate-1)] ring-1 ring-[var(--line)]"
                          : "text-[var(--text-2)] hover:bg-white/70 hover:text-[var(--ink)]",
                      )}
                    >
                      {item.label}
                      {item.badge ? (
                        <span className="rounded-full bg-[var(--signal-soft)] px-1.5 py-0.5 text-[10px] font-semibold text-[var(--signal)]">
                          {item.badge}
                        </span>
                      ) : null}
                    </button>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="mx-3 mb-3 rounded-[12px] border border-[var(--line)] bg-[rgba(255,255,255,0.85)] p-3 backdrop-blur-sm">
              <div className="flex items-center justify-between">
                <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[var(--text-3)]">
                  Live activity
                </p>
                <span className="live-dot h-1.5 w-1.5 rounded-full bg-[var(--go)]" />
              </div>
              <div className="relative mt-2.5 h-[92px] overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={feedIndex}
                    initial={reduce ? false : { opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={reduce ? undefined : { opacity: 0, y: -8 }}
                    transition={{ duration: dur.med, ease: ease.out }}
                    className="absolute inset-0"
                  >
                    {[0, 1, 2].map((offset) => {
                      const item = feed[(feedIndex + offset) % feed.length];
                      return (
                        <div
                          key={`${item.text}-${offset}`}
                          className="mb-2.5 flex gap-2"
                        >
                          <span
                            className={cn(
                              "mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full",
                              item.tone === "signal" && "bg-[var(--signal)]",
                              item.tone === "go" && "bg-[var(--go)]",
                              item.tone === "warn" && "bg-[var(--warn)]",
                            )}
                          />
                          <div>
                            <p className="text-[11px] leading-snug text-[var(--ink)]">
                              {item.text}
                            </p>
                            <p className="mt-0.5 font-mono text-[10px] text-[var(--text-3)]">
                              {item.t}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </aside>

          <div className="min-w-0 space-y-3 p-3 md:p-4">
            <div className="flex flex-wrap items-end justify-between gap-3 px-0.5">
              <div>
                <p className="text-[11px] font-medium text-[var(--text-3)]">
                  Today · All marketplaces
                </p>
                <p className="mt-0.5 text-[18px] font-semibold tracking-[-0.03em] text-[var(--ink)]">
                  {activeNav === "overview"
                    ? "Operating overview"
                    : nav.find((n) => n.id === activeNav)?.label}
                </p>
              </div>
              <div
                className="flex gap-1 rounded-[9px] bg-[var(--paper-deep)] p-0.5"
                role="tablist"
                aria-label="Date range"
              >
                {ranges.map((r) => (
                  <button
                    key={r.id}
                    type="button"
                    role="tab"
                    aria-selected={range === r.id}
                    onClick={() => setRange(r.id)}
                    className={cn(
                      "rounded-[7px] px-2.5 py-1 text-[11px] font-medium transition-[background,color,box-shadow] duration-[var(--dur-fast)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--signal)]",
                      range === r.id
                        ? "bg-[var(--ink)] text-white shadow-[var(--elevate-1)]"
                        : "text-[var(--text-2)] hover:text-[var(--ink)]",
                    )}
                  >
                    {r.id}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 lg:grid-cols-4">
              {kpisBase.map((k, i) => (
                <motion.button
                  key={k.label}
                  type="button"
                  initial={reduce ? false : { opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.05 + i * stagger.med,
                    duration: dur.med,
                    ease: ease.out,
                  }}
                  whileHover={reduce ? undefined : { y: -2 }}
                  onFocus={() => setTip(k.tip)}
                  onBlur={() => setTip(null)}
                  onMouseEnter={() => setTip(k.tip)}
                  onMouseLeave={() => setTip(null)}
                  className="panel-stat group relative p-3 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--signal)]"
                >
                  <div className="flex items-center justify-between gap-1">
                    <p className="text-[11px] text-[var(--text-3)]">{k.label}</p>
                    <Info
                      strokeWidth={1.75}
                      className="h-3 w-3 text-[var(--text-3)] opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100"
                    />
                  </div>
                  <p className="mt-1.5 text-[19px] font-semibold tracking-[-0.035em] tabular text-[var(--ink)]">
                    <KpiValue
                      target={
                        k.format === "int"
                          ? Math.round(k.value * rangeMult)
                          : Number((k.value * (k.label === "Return rate" ? 1 : rangeMult)).toFixed(1))
                      }
                      prefix={k.prefix}
                      suffix={k.suffix}
                      format={k.format}
                      active={ready}
                    />
                  </p>
                  <p className="mt-1 text-[11px] font-medium tabular text-[var(--go)]">
                    {k.delta}
                  </p>
                </motion.button>
              ))}
            </div>

            <div className="grid gap-3 lg:grid-cols-[1.4fr_1fr]">
              <div className="space-y-3">
                <motion.div
                  initial={reduce ? false : { opacity: 0, scale: 0.99 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2, duration: dur.slow, ease: ease.out }}
                  className="rounded-[14px] border border-[var(--line)] bg-[rgba(255,255,255,0.9)] p-3.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] backdrop-blur-sm"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[13px] font-semibold tracking-[-0.02em] text-[var(--ink)]">
                        Revenue trajectory
                      </p>
                      <p className="text-[11px] text-[var(--text-3)]">
                        Weekly · INR · {range}
                      </p>
                    </div>
                    <Badge tone="go">Above plan</Badge>
                  </div>
                  <div className="mt-5 flex h-[120px] items-end gap-[2px] sm:h-[132px]">
                    {revenue.map((h, i) => (
                      <motion.button
                        type="button"
                        key={`${range}-${i}`}
                        className="flex-1 origin-bottom rounded-t-[2px] bg-[var(--signal)] opacity-40 transition-opacity hover:opacity-90 focus-visible:opacity-100 focus-visible:outline-none"
                        initial={reduce ? false : { scaleY: 0, opacity: 0.15 }}
                        animate={{ scaleY: 1, opacity: 0.32 + i * 0.05 }}
                        transition={{
                          duration: dur.draw,
                          delay: 0.06 + i * 0.03,
                          ease: ease.out,
                        }}
                        style={{ height: `${h}%` }}
                        aria-label={`${weekLabels[i]} revenue`}
                        onMouseEnter={() =>
                          setTip(`${weekLabels[i]} · index ${h}`)
                        }
                        onMouseLeave={() => setTip(null)}
                        onFocus={() => setTip(`${weekLabels[i]} · index ${h}`)}
                        onBlur={() => setTip(null)}
                      />
                    ))}
                  </div>
                </motion.div>

                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-[14px] border border-[var(--line)] bg-[rgba(255,255,255,0.9)] p-3.5 backdrop-blur-sm">
                    <div className="flex items-center justify-between">
                      <p className="text-[13px] font-semibold text-[var(--ink)]">
                        Advertising
                      </p>
                      <span className="font-mono text-[10px] text-[var(--text-3)]">
                        ACoS 22%
                      </span>
                    </div>
                    <div className="mt-4 flex h-14 items-end gap-1">
                      {ads.map((h, i) => (
                        <motion.div
                          key={`${range}-ad-${i}`}
                          className="flex-1 origin-bottom rounded-t-[2px] bg-[var(--ink)]"
                          initial={reduce ? false : { scaleY: 0 }}
                          animate={{ scaleY: 1, opacity: 0.25 + i * 0.08 }}
                          transition={{
                            duration: dur.slow,
                            delay: 0.28 + i * 0.04,
                            ease: ease.out,
                          }}
                          style={{ height: `${h}%` }}
                        />
                      ))}
                    </div>
                    <p className="mt-3 text-[11px] text-[var(--text-2)]">
                      ROAS{" "}
                      <span className="font-semibold text-[var(--ink)]">4.1×</span>{" "}
                      · Spend ₹2.8L
                    </p>
                  </div>

                  <div className="rounded-[14px] border border-[var(--line)] bg-[rgba(255,255,255,0.9)] p-3.5 backdrop-blur-sm">
                    <p className="text-[13px] font-semibold text-[var(--ink)]">
                      Inventory
                    </p>
                    <div className="mt-4 space-y-3">
                      {[
                        { label: "Cover healthy", val: 86, tone: "go" as const },
                        { label: "At risk (<14d)", val: 11, tone: "warn" as const },
                        { label: "Oversell risk", val: 3, tone: "signal" as const },
                      ].map((row, i) => (
                        <div key={row.label}>
                          <div className="mb-1 flex justify-between text-[11px]">
                            <span className="text-[var(--text-3)]">{row.label}</span>
                            <span className="font-medium tabular text-[var(--ink)]">
                              {row.val}%
                            </span>
                          </div>
                          <Meter
                            value={row.val}
                            tone={row.tone}
                            animate={!reduce}
                            delay={0.35 + i * 0.1}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="rounded-[14px] border border-[var(--line)] bg-[rgba(255,255,255,0.9)] p-3.5 backdrop-blur-sm">
                  <div className="flex items-center justify-between">
                    <p className="text-[13px] font-semibold text-[var(--ink)]">
                      Marketplace health
                    </p>
                    <Badge tone="go">4 live</Badge>
                  </div>
                  <div className="mt-3 space-y-2">
                    {marketplaces.map((m, i) => (
                      <motion.div
                        key={m.name}
                        initial={reduce ? false : { opacity: 0, x: 8 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          delay: 0.25 + i * stagger.slow,
                          duration: dur.med,
                          ease: ease.out,
                        }}
                        whileHover={reduce ? undefined : { scale: 1.01 }}
                        className="rounded-[10px] bg-[var(--paper)]/90 px-2.5 py-2 transition-shadow hover:shadow-[var(--elevate-1)]"
                      >
                        <div className="flex items-center justify-between gap-2">
                          <p className="text-[12px] font-semibold text-[var(--ink)]">
                            {m.name}
                          </p>
                          <Badge tone={m.status === "Watch" ? "warn" : "go"}>
                            {m.status}
                          </Badge>
                        </div>
                        <div className="mt-1.5 flex items-center justify-between text-[11px] text-[var(--text-3)]">
                          <span>{m.sales}</span>
                          <span className="font-medium tabular text-[var(--ink)]">
                            {m.score}%
                          </span>
                        </div>
                        <div className="mt-1.5">
                          <Meter
                            value={m.score}
                            tone={m.status === "Watch" ? "warn" : "go"}
                            animate={!reduce}
                            delay={0.3 + i * 0.08}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="rounded-[14px] border border-[var(--line)] bg-[linear-gradient(180deg,rgba(247,249,255,0.95)_0%,rgba(255,255,255,0.92)_55%)] p-3.5 backdrop-blur-sm">
                  <div className="flex items-center justify-between">
                    <p className="text-[13px] font-semibold text-[var(--ink)]">
                      ORVIX AI
                    </p>
                    <Badge tone="signal">{aiVisible} ready</Badge>
                  </div>
                  <div className="mt-3 space-y-2">
                    {aiCards.map((card, i) =>
                      i < aiVisible ? (
                        <motion.div
                          key={card.title}
                          initial={reduce ? false : { opacity: 0, y: 8, filter: "blur(3px)" }}
                          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                          transition={{ duration: dur.med, ease: ease.out }}
                          className="rounded-[10px] border border-[var(--line)] bg-[var(--snow)] p-2.5"
                        >
                          <p
                            className={cn(
                              "text-[11px] font-semibold",
                              card.tone === "signal" && "text-[var(--signal)]",
                              card.tone === "warn" && "text-[var(--warn)]",
                              card.tone === "go" && "text-[var(--go)]",
                            )}
                          >
                            {card.title}
                          </p>
                          <p className="mt-1 text-[12px] leading-snug text-[var(--ink)]">
                            {card.body}
                          </p>
                        </motion.div>
                      ) : (
                        <SkeletonBlock key={card.title} className="h-[52px]" />
                      ),
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
}
