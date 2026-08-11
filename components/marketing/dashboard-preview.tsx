import { Section } from "@/components/layout/section";
import { DashboardShell } from "@/components/dashboard/dashboard-shell";
import { Reveal } from "./reveal";

export function DashboardPreview() {
  return (
    <Section className="bg-[var(--ink-soft)] text-white">
      <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
        <Reveal variant="left">
          <p className="t-caption !text-white/40">Product</p>
          <h2 className="t-display mt-4 !text-white">
            One operating picture for every marketplace you sell on.
          </h2>
          <p className="mt-6 text-[1.125rem] leading-relaxed text-white/55">
            Revenue, listing quality, account health, and inventory signals —
            designed like product software, not a spreadsheet dump.
          </p>
        </Reveal>
        <Reveal delay={0.12} variant="right">
          <div className="lg:scale-[1.03]">
            <DashboardShell compact />
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
