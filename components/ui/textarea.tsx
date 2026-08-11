import * as React from "react";
import { cn } from "@/lib/utils";

export const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => (
  <textarea
    className={cn(
      "flex min-h-36 w-full rounded-[10px] border border-[var(--line)] bg-[var(--snow)] px-4 py-3 text-[15px] tracking-[-0.015em] text-[var(--ink)] shadow-[var(--elevate-1)] placeholder:text-[var(--text-3)] transition-[border-color,box-shadow] duration-200 focus-visible:border-[var(--signal)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[var(--signal-soft)]",
      className,
    )}
    ref={ref}
    {...props}
  />
));
Textarea.displayName = "Textarea";
