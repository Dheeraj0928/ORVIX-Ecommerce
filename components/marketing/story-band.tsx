import { comparisonRows, struggles } from "@/content/home";
import { Section } from "@/components/layout/section";
import { brand } from "@/config/brand";
import { Reveal, Stagger, StaggerItem } from "./reveal";

export function ProblemBand() {
  return (
    <Section className="surface-mist">
      <Reveal variant="blur" className="mx-auto max-w-3xl text-center">
        <h2 className="t-display">
          Selling across marketplaces shouldn&apos;t feel like chaos.
        </h2>
        <p className="mx-auto mt-7 max-w-2xl t-body">
          Twenty tabs. Broken listings. Surprise account-health hits. Growth
          stalls when operations can&apos;t keep up with demand.
        </p>
      </Reveal>
    </Section>
  );
}

export function StruggleGrid() {
  return (
    <Section className="surface-mist !pt-0">
      <Reveal variant="blur">
        <h2 className="t-display">Why sellers struggle</h2>
        <p className="mt-4 max-w-2xl t-body">
          The problem isn&apos;t effort. It&apos;s fragmented systems and slow feedback.
        </p>
      </Reveal>
      <Stagger className="mt-14 grid gap-5 md:grid-cols-2" staggerChildren={0.1}>
        {struggles.map((item, i) => (
          <StaggerItem key={item.title} variant="scale">
            <article className="panel-lift h-full p-8">
              <div className="flex items-center gap-2">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-[7px] border border-[var(--silver-soft)] bg-[var(--paper)] font-mono text-[11px] font-medium text-[var(--text-3)]">
                  {i + 1}
                </span>
                <span className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[var(--warn)]">
                  Friction
                </span>
              </div>
              <h3 className="t-title mt-5 text-[1.25rem]">{item.title}</h3>
              <p className="mt-3 t-body text-[1rem]">{item.body}</p>
            </article>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}

export function SolutionBand() {
  return (
    <Section className="surface-snow">
      <div className="grid items-start gap-14 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <p className="t-caption">Operating model</p>
          <h2 className="t-display mt-4">How we solve it</h2>
          <p className="mt-5 t-body">
            One operating system for catalog, ads, inventory, compliance, and
            growth — powered by {brand.productLine}, executed by experts.
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="panel overflow-hidden">
            <table className="w-full text-left text-[13.5px]">
              <thead className="border-b border-[var(--line)] bg-[var(--paper)]/90">
                <tr>
                  <th className="px-5 py-3.5 text-[12px] font-semibold tracking-[-0.015em] text-[var(--ink)]">
                    Capability
                  </th>
                  <th className="px-5 py-3.5 text-[12px] font-medium text-[var(--text-3)]">
                    Typical agency
                  </th>
                  <th className="px-5 py-3.5 text-[12px] font-semibold text-[var(--signal)]">
                    {brand.shortName}
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr
                    key={row.label}
                    className="border-b border-[var(--line)] transition-colors last:border-0 hover:bg-[var(--paper)]/50"
                  >
                    <td className="px-5 py-3.5 font-medium tracking-[-0.015em] text-[var(--ink)]">
                      {row.label}
                    </td>
                    <td className="px-5 py-3.5 text-[var(--text-3)]">{row.agency}</td>
                    <td className="px-5 py-3.5 tracking-[-0.015em] text-[var(--ink)]">
                      {row.orvix}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
