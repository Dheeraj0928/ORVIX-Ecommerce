import { cn } from "@/lib/utils";

export function Badge({
  children,
  tone = "neutral",
  className,
}: {
  children: React.ReactNode;
  tone?: "neutral" | "signal" | "go" | "warn";
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-[6px] px-1.5 py-0.5 text-[10.5px] font-medium tracking-[-0.01em] ring-1 ring-inset",
        tone === "neutral" &&
          "bg-[var(--paper-deep)] text-[var(--text-2)] ring-[var(--line)]",
        tone === "signal" &&
          "bg-[var(--signal-soft)] text-[var(--signal)] ring-[rgba(0,97,255,0.12)]",
        tone === "go" &&
          "bg-[var(--go-soft)] text-[var(--go)] ring-[rgba(15,159,110,0.14)]",
        tone === "warn" &&
          "bg-[var(--warn-soft)] text-[var(--warn)] ring-[rgba(232,137,12,0.14)]",
        className,
      )}
    >
      {children}
    </span>
  );
}
