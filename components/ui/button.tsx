import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex cursor-pointer items-center justify-center gap-2 font-medium tracking-[-0.018em] transition-[transform,background,box-shadow,border-color,color] duration-[var(--dur-med)] ease-[var(--ease-out)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--signal)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--paper)] disabled:pointer-events-none disabled:opacity-45 active:translate-y-px active:scale-[0.988]",
  {
    variants: {
      variant: {
        primary:
          "rounded-[10px] bg-[var(--signal)] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.22),0_1px_2px_rgba(0,97,255,0.18),0_6px_16px_var(--signal-glow)] hover:bg-[var(--signal-hover)] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.28),0_8px_20px_var(--signal-glow)] active:bg-[var(--signal-pressed)]",
        ink: "rounded-[10px] bg-[var(--ink)] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_6px_16px_rgba(9,9,11,0.16)] hover:bg-[var(--ink-soft)]",
        secondary:
          "rounded-[10px] border border-[var(--silver)] bg-[linear-gradient(180deg,#ffffff_0%,#f4f6f8_100%)] text-[var(--ink)] shadow-[inset_0_1px_0_rgba(255,255,255,0.95),0_1px_2px_rgba(15,23,42,0.04)] hover:border-[var(--platinum)] hover:shadow-[var(--elevate-1)]",
        ghost:
          "rounded-[10px] text-[var(--text-2)] hover:bg-[rgba(9,9,11,0.035)] hover:text-[var(--ink)]",
      },
      size: {
        default: "h-[48px] px-5 text-[14px]",
        sm: "h-9 px-3.5 text-[13px]",
        lg: "h-[52px] px-7 text-[15px]",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  ),
);
Button.displayName = "Button";

export { buttonVariants };
