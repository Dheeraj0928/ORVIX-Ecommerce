"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { brand } from "@/config/brand";
import { mainNav } from "@/config/navigation";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Container } from "./container";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 transition-[background,box-shadow,border-color,backdrop-filter] duration-[var(--dur-slow)] ease-[var(--ease-out)]",
        scrolled
          ? "border-b border-[var(--silver-soft)] bg-[rgba(247,248,250,0.82)] shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_8px_24px_rgba(15,23,42,0.04)] backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <Container className="flex h-[4.5rem] items-center justify-between gap-8 md:h-[4.75rem]">
        <Link
          href="/"
          className="group flex items-center gap-2.5"
          onClick={() => setOpen(false)}
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-[8px] bg-[var(--ink)] text-[12px] font-semibold tracking-tight text-white transition-transform duration-[var(--dur-med)] ease-[var(--ease-out)] group-hover:scale-[1.02]">
            O
          </span>
          <span className="text-[15px] font-semibold tracking-[-0.035em] text-[var(--ink)]">
            {brand.shortName}
          </span>
        </Link>

        <nav
          className="hidden items-center gap-8 lg:flex"
          aria-label="Primary"
        >
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[13.5px] font-medium tracking-[-0.015em] text-[var(--text-2)] transition-colors duration-[var(--dur-fast)] hover:text-[var(--ink)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2.5">
          <Link
            href={brand.ctas.primary.href}
            className={cn(
              buttonVariants({ size: "sm" }),
              "hidden sm:inline-flex",
            )}
          >
            {brand.ctas.primary.label}
          </Link>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-[9px] border border-[var(--line)] bg-[var(--snow)] text-[var(--ink)] transition-colors hover:border-[var(--line-strong)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--signal)] lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? (
              <X className="h-[18px] w-[18px]" strokeWidth={1.75} />
            ) : (
              <Menu className="h-[18px] w-[18px]" strokeWidth={1.75} />
            )}
          </button>
        </div>
      </Container>

      <div
        id="mobile-nav"
        className={cn(
          "border-t border-[var(--line)] bg-[var(--paper)]/95 backdrop-blur-xl lg:hidden",
          open ? "block" : "hidden",
        )}
      >
        <Container className="flex flex-col gap-0.5 py-4">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-[9px] px-3 py-2.5 text-[15px] font-medium tracking-[-0.015em] text-[var(--ink)] transition-colors hover:bg-[var(--snow)]"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href={brand.ctas.primary.href}
            className={cn(buttonVariants(), "mt-3")}
            onClick={() => setOpen(false)}
          >
            {brand.ctas.primary.label}
          </Link>
        </Container>
      </div>
    </header>
  );
}
