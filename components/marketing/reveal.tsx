"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  dur,
  ease,
  fadeBlur,
  fadeIn,
  fadeUp,
  scaleIn,
  slideLeft,
  slideRight,
  spring,
  viewportOnce,
} from "@/lib/motion";
import { cn } from "@/lib/utils";

type Variant = "up" | "fade" | "scale" | "blur" | "left" | "right";

const variants = {
  up: fadeUp,
  fade: fadeIn,
  scale: scaleIn,
  blur: fadeBlur,
  left: slideLeft,
  right: slideRight,
} as const;

export function Reveal({
  children,
  className,
  delay = 0,
  variant = "blur",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  variant?: Variant;
}) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={cn(className)}
      variants={variants[variant]}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      transition={{ duration: dur.reveal, ease: ease.out, delay }}
    >
      {children}
    </motion.div>
  );
}

export function Stagger({
  children,
  className,
  delay = 0,
  staggerChildren = 0.09,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  staggerChildren?: number;
}) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={cn(className)}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      variants={{
        hidden: {},
        show: {
          transition: { staggerChildren, delayChildren: delay },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
  variant = "blur",
}: {
  children: React.ReactNode;
  className?: string;
  variant?: Variant;
}) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={cn(className)}
      variants={variants[variant]}
      transition={{ duration: dur.reveal, ease: ease.out }}
    >
      {children}
    </motion.div>
  );
}

/** Full-section cinematic enter on scroll */
export function ScrollScene({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0, y: 48, scale: 0.985 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-12% 0px", amount: 0.12 }}
      transition={{ ...spring.gentle, opacity: { duration: 0.65, ease: ease.out } }}
    >
      {children}
    </motion.div>
  );
}
