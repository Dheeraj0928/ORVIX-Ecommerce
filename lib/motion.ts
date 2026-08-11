/**
 * ORVIX motion system — richer scroll reveals, still one vocabulary.
 */

export const ease = {
  out: [0.22, 1, 0.36, 1] as const,
  soft: [0.33, 1, 0.68, 1] as const,
  spring: [0.34, 1.3, 0.64, 1] as const,
};

export const spring = {
  soft: { type: "spring" as const, stiffness: 260, damping: 26, mass: 0.85 },
  snappy: { type: "spring" as const, stiffness: 400, damping: 30, mass: 0.7 },
  gentle: { type: "spring" as const, stiffness: 160, damping: 22, mass: 0.95 },
};

export const dur = {
  instant: 0.1,
  fast: 0.2,
  med: 0.4,
  slow: 0.7,
  reveal: 0.7,
  draw: 0.9,
};

export const stagger = {
  fast: 0.05,
  med: 0.08,
  slow: 0.11,
};

export const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  show: { opacity: 1, y: 0 },
};

export const fadeBlur = {
  hidden: { opacity: 0, y: 28, filter: "blur(10px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)" },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.94, y: 20 },
  show: { opacity: 1, scale: 1, y: 0 },
};

export const slideLeft = {
  hidden: { opacity: 0, x: -40 },
  show: { opacity: 1, x: 0 },
};

export const slideRight = {
  hidden: { opacity: 0, x: 40 },
  show: { opacity: 1, x: 0 },
};

export const revealTransition = (delay = 0) => ({
  duration: dur.reveal,
  ease: ease.out,
  delay,
});

export const viewportOnce = {
  once: true,
  margin: "-8% 0px" as const,
  amount: 0.15 as const,
};
