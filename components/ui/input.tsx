import * as React from "react";
import { cn } from "@/lib/utils";

export const Input = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className, type, ...props }, ref) => (
  <input
    type={type}
    className={cn(
      "flex h-[52px] w-full rounded-[10px] border border-[var(--line)] bg-[var(--snow)] px-4 text-[15px] tracking-[-0.015em] text-[var(--ink)] shadow-[inset_0_1px_0_rgba(255,255,255,0.85),0_1px_2px_rgba(9,9,11,0.03)] placeholder:text-[var(--text-3)] transition-[border-color,box-shadow,background] duration-[var(--dur-med)] ease-[var(--ease-out)] hover:border-[var(--line-strong)] focus-visible:border-[var(--signal)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[var(--signal-soft)]",
      className,
    )}
    ref={ref}
    {...props}
  />
));
Input.displayName = "Input";
