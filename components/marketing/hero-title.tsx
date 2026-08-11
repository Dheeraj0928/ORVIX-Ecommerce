"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion, LayoutGroup } from "framer-motion";

const LINES = [
  ["Run", "every"],
  ["marketplace"],
  ["as", "one", "system."],
] as const;

const FLAT_COUNT = LINES.reduce((n, line) => n + line.length, 0);

/**
 * One smooth continuous float — no per-line wave (that felt like vibration).
 */
export function HeroTitle() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (reduce) {
      setReady(true);
      return;
    }
    const t = window.setTimeout(() => setReady(true), 1000);
    return () => window.clearTimeout(t);
  }, [reduce]);

  useEffect(() => {
    if (reduce || !ready) return;
    const id = window.setInterval(() => {
      setActive((i) => (i + 1) % FLAT_COUNT);
    }, 1400);
    return () => window.clearInterval(id);
  }, [reduce, ready]);

  let wordCursor = -1;

  return (
    <LayoutGroup>
      <motion.h1
        className="t-hero mt-6 will-change-transform"
        aria-label="Run every marketplace as one system."
        initial={reduce ? false : { opacity: 0, y: 16 }}
        animate={
          reduce
            ? { opacity: 1, y: 0 }
            : {
                opacity: 1,
                y: [0, -6, 0],
              }
        }
        transition={
          reduce
            ? { duration: 0.55, ease: [0.22, 1, 0.36, 1] }
            : {
                opacity: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
                y: {
                  duration: 5.5,
                  delay: 1,
                  repeat: Infinity,
                  ease: [0.45, 0, 0.55, 1],
                },
              }
        }
      >
        {LINES.map((line, lineIndex) => (
          <span key={lineIndex} className="flex flex-wrap gap-x-[0.28em]">
            {line.map((text) => {
              wordCursor += 1;
              const index = wordCursor;
              const isActive = !reduce && ready && active === index;
              const muted = lineIndex === 2;

              return (
                <motion.span
                  key={text}
                  className="relative inline-block"
                  initial={reduce ? false : { opacity: 0 }}
                  animate={{
                    opacity: 1,
                    color: isActive
                      ? "var(--signal)"
                      : muted
                        ? "var(--text-2)"
                        : "var(--ink)",
                  }}
                  transition={{
                    opacity: {
                      duration: 0.6,
                      delay: 0.08 + index * 0.07,
                      ease: [0.22, 1, 0.36, 1],
                    },
                    color: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
                  }}
                >
                  {text}

                  {isActive ? (
                    <motion.span
                      layoutId="hero-spotlight"
                      className="pointer-events-none absolute -inset-x-2 -inset-y-1 -z-10 rounded-[12px]"
                      transition={{
                        type: "spring",
                        stiffness: 280,
                        damping: 36,
                        mass: 0.9,
                      }}
                      style={{
                        background:
                          "radial-gradient(ellipse at 50% 50%, rgba(0,97,255,0.14), transparent 72%)",
                      }}
                    />
                  ) : null}

                  <motion.span
                    aria-hidden
                    className="absolute -bottom-[0.06em] left-0 h-[0.055em] w-full origin-left rounded-full bg-[var(--signal)]"
                    initial={false}
                    animate={{
                      scaleX: isActive ? 1 : 0,
                      opacity: isActive ? 0.8 : 0,
                    }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  />
                </motion.span>
              );
            })}
          </span>
        ))}
      </motion.h1>
    </LayoutGroup>
  );
}
