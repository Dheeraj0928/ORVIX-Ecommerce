"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { X } from "lucide-react";
import { brand } from "@/config/brand";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const KEY = "orvix-soft-cta-dismissed";

/**
 * Soft CRO prompt after deep scroll — not an exit-intent trap.
 */
export function SoftCtaPrompt() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (pathname?.startsWith("/contact")) return;
    if (sessionStorage.getItem(KEY)) return;

    const onScroll = () => {
      const doc = document.documentElement;
      const scrolled =
        (doc.scrollTop || document.body.scrollTop) /
        (doc.scrollHeight - doc.clientHeight || 1);
      if (scrolled > 0.55) {
        setOpen(true);
        window.removeEventListener("scroll", onScroll);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  if (!open || pathname?.startsWith("/contact")) return null;

  const dismiss = () => {
    sessionStorage.setItem(KEY, "1");
    setOpen(false);
  };

  return (
    <div
      className="panel-product fixed bottom-20 left-4 right-4 z-30 mx-auto max-w-md p-5 md:bottom-6 md:left-auto md:right-24"
      role="dialog"
      aria-label="Get a free ecommerce audit"
    >
      <button
        type="button"
        onClick={dismiss}
        className="absolute right-3 top-3 rounded-[8px] p-1 text-[var(--text-3)] transition-colors hover:bg-[var(--paper)] hover:text-[var(--ink)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--signal)]"
        aria-label="Dismiss"
      >
        <X strokeWidth={1.75} className="h-4 w-4" />
      </button>
      <p className="pr-8 text-[14px] font-semibold tracking-[-0.02em] text-[var(--ink)]">
        Still mapping your next move?
      </p>
      <p className="mt-1.5 text-[13px] leading-relaxed text-[var(--text-2)]">
        Get a free ecommerce audit — clear gaps, no obligation.
      </p>
      <Link
        href={brand.ctas.secondary.href}
        className={cn(buttonVariants({ size: "sm" }), "mt-3")}
        onClick={dismiss}
      >
        {brand.ctas.secondary.label}
      </Link>
    </div>
  );
}
