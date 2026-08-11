"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { brand } from "@/config/brand";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function StickyCta() {
  const reduce = useReducedMotion();

  return (
    <motion.div
      initial={reduce ? false : { y: 24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.8, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 bottom-0 z-30 border-t border-[var(--silver-soft)] bg-[rgba(247,248,250,0.92)] p-3 backdrop-blur-xl md:hidden"
    >
      <Link
        href={brand.ctas.primary.href}
        className={cn(buttonVariants(), "w-full")}
      >
        {brand.ctas.primary.label}
      </Link>
    </motion.div>
  );
}
