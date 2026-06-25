/**
 * Animation constants shared between Framer Motion and GSAP.
 * Single source of truth — change here, applies everywhere.
 */

/* ─── Easings ─────────────────────────────────────────────────────────── */

export const ease = {
  outExpo:  [0.16, 1, 0.3, 1] as [number, number, number, number],
  outQuart: [0.25, 1, 0.5, 1] as [number, number, number, number],
  inOut:    [0.45, 0, 0.55, 1] as [number, number, number, number],
  spring:   [0.34, 1.56, 0.64, 1] as [number, number, number, number],
} as const;

/* ─── Durations (seconds for Framer Motion) ─────────────────────────── */

export const duration = {
  instant: 0.1,
  fast:    0.15,
  normal:  0.25,
  slow:    0.4,
  slower:  0.6,
  slowest: 0.9,
} as const;

/* ─── Framer Motion variants ─────────────────────────────────────────── */

/** Fade in from below — the standard reveal animation */
export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: duration.slow, ease: ease.outExpo },
  },
};

/** Fade in — for elements that don't move */
export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: duration.slow, ease: ease.outQuart },
  },
};

/** Stagger container — wraps a list of fadeUp children */
export const staggerContainer = (staggerChildren = 0.08, delayChildren = 0) => ({
  hidden: {},
  visible: {
    transition: { staggerChildren, delayChildren },
  },
});

/** Scale in — for cards, modals */
export const scaleIn = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: duration.slow, ease: ease.outExpo },
  },
};

/** Slide in from left */
export const slideInLeft = {
  hidden: { opacity: 0, x: -32 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: duration.slow, ease: ease.outExpo },
  },
};

/** Slide in from right */
export const slideInRight = {
  hidden: { opacity: 0, x: 32 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: duration.slow, ease: ease.outExpo },
  },
};

/* ─── GSAP easing strings ───────────────────────────────────────────── */

export const gsapEase = {
  outExpo:  "power4.out",
  outQuart: "power3.out",
  inOut:    "power2.inOut",
  spring:   "back.out(1.7)",
  elastic:  "elastic.out(1, 0.3)",
} as const;
