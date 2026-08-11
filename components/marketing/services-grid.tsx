"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { serviceCategories } from "@/content/home";
import { Section } from "@/components/layout/section";
import { Reveal, Stagger, StaggerItem } from "./reveal";

export function ServicesGrid() {
  return (
    <Section className="surface-snow">
      <Reveal className="max-w-2xl">
        <p className="t-caption">Capabilities</p>
        <h2 className="t-display mt-4">
          Services as an extension of the platform
        </h2>
        <p className="mt-5 t-body">
          Six operating pillars — not a dump of forty disconnected offerings.
        </p>
      </Reveal>
      <Stagger
        className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3"
        staggerChildren={0.05}
      >
        {serviceCategories.map((service, i) => (
          <StaggerItem key={service.slug}>
            <Link
              href={`/services/${service.slug}`}
              className="panel-lift group flex h-full flex-col p-8"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="font-mono text-[11px] font-medium tracking-wide text-[var(--text-3)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="rounded-[6px] border border-[var(--line)] bg-[var(--paper)] px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.08em] text-[var(--text-3)]">
                  Pillar
                </span>
              </div>
              <div className="mt-5 flex items-start justify-between gap-3">
                <h3 className="t-title text-[1.2rem]">{service.title}</h3>
                <ArrowUpRight
                  strokeWidth={1.75}
                  className="mt-0.5 h-[18px] w-[18px] shrink-0 text-[var(--text-3)] transition-[color,transform] duration-[var(--dur-med)] ease-[var(--ease-out)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[var(--signal)]"
                />
              </div>
              <p className="mt-4 flex-1 text-[15px] leading-relaxed tracking-[-0.015em] text-[var(--text-2)]">
                {service.body}
              </p>
              <span className="mt-6 text-[13px] font-semibold tracking-[-0.02em] text-[var(--signal)] opacity-0 transition-opacity duration-[var(--dur-med)] group-hover:opacity-100 group-focus-visible:opacity-100">
                Explore capability
              </span>
            </Link>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
