"use client";

import { motion, useReducedMotion } from "framer-motion";
import { brand } from "@/config/brand";

export function WhatsAppButton() {
  const reduce = useReducedMotion();
  const href = `https://wa.me/${brand.contact.whatsapp}?text=${encodeURIComponent(
    `Hi ${brand.shortName}, I'd like to discuss marketplace growth.`,
  )}`;

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      initial={reduce ? false : { opacity: 0, y: 12, scale: 0.92 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 1.2, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      whileHover={reduce ? undefined : { scale: 1.04, y: -2 }}
      whileTap={{ scale: 0.97 }}
      className="fixed bottom-20 right-4 z-30 flex h-11 w-11 items-center justify-center rounded-[12px] border border-[rgba(15,159,110,0.25)] bg-[rgba(15,159,110,0.95)] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_8px_24px_rgba(15,159,110,0.28)] backdrop-blur-sm transition-colors hover:bg-[#0d8a60] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--signal)] md:bottom-6 md:right-6"
    >
      {!reduce ? (
        <span
          aria-hidden
          className="absolute inset-0 rounded-[12px] bg-[rgba(15,159,110,0.35)] animate-[orvix-pulse_2.8s_ease-out_infinite]"
        />
      ) : null}
      <svg viewBox="0 0 24 24" className="relative h-5 w-5 fill-current" aria-hidden>
        <path d="M20.5 3.5A11.8 11.8 0 0 0 12.06 0C5.5 0 .2 5.3.2 11.84c0 2.09.55 4.12 1.6 5.92L0 24l6.4-1.67a11.8 11.8 0 0 0 5.66 1.44h.01c6.55 0 11.86-5.3 11.86-11.84 0-3.16-1.24-6.14-3.43-8.43ZM12.07 21.5h-.01a9.7 9.7 0 0 1-4.94-1.35l-.35-.21-3.8 1 1.01-3.7-.23-.38a9.67 9.67 0 0 1-1.49-5.17c0-5.35 4.37-9.7 9.75-9.7 2.6 0 5.05 1.01 6.89 2.85a9.64 9.64 0 0 1 2.85 6.86c0 5.35-4.38 9.7-9.68 9.7Zm5.33-7.27c-.29-.15-1.72-.85-1.99-.94-.27-.1-.46-.15-.66.14-.19.29-.76.94-.93 1.13-.17.2-.34.22-.63.07-.29-.14-1.22-.45-2.33-1.43-.86-.77-1.44-1.72-1.61-2.01-.17-.29-.02-.45.13-.6.13-.13.29-.34.43-.51.14-.17.19-.29.29-.48.1-.2.05-.37-.02-.52-.08-.14-.66-1.59-.9-2.18-.24-.58-.48-.5-.66-.51h-.56c-.2 0-.51.07-.78.37-.27.29-1.02 1-1.02 2.43s1.05 2.82 1.19 3.01c.15.2 2.07 3.16 5.01 4.43.7.3 1.25.48 1.68.62.7.22 1.34.19 1.85.12.56-.08 1.72-.7 1.96-1.38.24-.68.24-1.26.17-1.38-.07-.11-.26-.18-.55-.33Z" />
      </svg>
    </motion.a>
  );
}
