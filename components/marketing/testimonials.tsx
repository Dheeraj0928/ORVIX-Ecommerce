"use client";

import { Star } from "lucide-react";
import { testimonials } from "@/content/home";
import { Section } from "@/components/layout/section";
import { Reveal, Stagger, StaggerItem } from "./reveal";

export function Testimonials() {
  return (
    <Section className="surface-mist">
      <Reveal className="max-w-2xl">
        <p className="t-caption">Trust</p>
        <h2 className="t-display mt-4">
          Operators brands trust with the P&L
        </h2>
        <p className="mt-5 t-body">
          Confidence comes from clarity, cadence, and compounding results.
        </p>
      </Reveal>
      <Stagger className="mt-14 grid gap-4 lg:grid-cols-3" staggerChildren={0.07}>
        {testimonials.map((item) => (
          <StaggerItem key={item.name}>
            <figure className="panel-quote flex h-full flex-col p-8 pl-9 transition-[transform,box-shadow] duration-[var(--dur-med)] ease-[var(--ease-out)] hover:-translate-y-0.5 hover:shadow-[var(--elevate-2)]">
              <div
                className="flex gap-0.5 text-[var(--signal)]"
                aria-label="5 star rating"
              >
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star
                    key={idx}
                    strokeWidth={1.75}
                    className="h-3.5 w-3.5 fill-[var(--signal)] animate-[orvix-pulse_2.8s_ease-out_infinite]"
                    style={{ animationDelay: `${idx * 120}ms` }}
                  />
                ))}
              </div>
              <blockquote className="mt-5 flex-1 text-[15.5px] leading-relaxed tracking-[-0.018em] text-[var(--ink)]">
                “{item.quote}”
              </blockquote>
              <figcaption className="mt-8 border-t border-[var(--line)] pt-5">
                <p className="text-[14px] font-semibold tracking-[-0.02em] text-[var(--ink)]">
                  {item.name}
                </p>
                <p className="mt-1 text-[13px] text-[var(--text-3)]">{item.role}</p>
              </figcaption>
            </figure>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
