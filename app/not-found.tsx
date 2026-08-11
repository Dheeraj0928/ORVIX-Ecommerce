import Link from "next/link";
import { brand } from "@/config/brand";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[60vh] max-w-xl flex-col items-start justify-center px-5 py-24">
      <p className="text-sm font-semibold text-accent">404</p>
      <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-charcoal">
        This page isn&apos;t on the catalog.
      </h1>
      <p className="mt-4 text-lg text-muted">
        The link may be outdated — or we&apos;re still shipping that route. Let&apos;s
        get you back to growth.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link href="/" className={cn(buttonVariants())}>
          Back to home
        </Link>
        <Link
          href={brand.ctas.primary.href}
          className={cn(buttonVariants({ variant: "secondary" }))}
        >
          {brand.ctas.primary.label}
        </Link>
      </div>
    </main>
  );
}
