/**
 * Animation Configuration — AgePass Design System
 *
 * Single source of truth for ALL animation decisions.
 * Framer Motion + GSAP both read from here.
 *
 * Philosophy (Stripe/Linear-level):
 *   - Entrance: purposeful, directional, never bouncy
 *   - Interaction: instant feel (< 200ms), never sluggish
 *   - Continuous: barely noticeable, ambient
 *   - Scroll: smooth, not jarring — Lenis handles the base
 */

export const AnimationConfig = {
  /* ─── Entrance animations ──────────────────────────────────────────────
   * Elements enter from below, slightly (24px = subtle, not dramatic).
   * Duration: 0.6s with expo ease — fast start, smooth landing.
   * Stagger: 80ms between siblings — readable, not overwhelming.
   */
  entrance: {
    duration:      0.6,
    ease:          [0.16, 1, 0.3, 1] as const,   // expo out
    y:             24,                            // pixels from below
    stagger:       0.08,
    delayBase:     0,
    viewport:      { once: true, margin: "-80px 0px" },
  },

  /* ─── Interaction animations ───────────────────────────────────────────
   * Hover/press must feel immediate. Spring for lift, linear for press.
   */
  interaction: {
    hover: {
      duration: 0.2,
      ease:     [0.25, 1, 0.5, 1] as const,      // quart out
    },
    press: {
      scale:    0.97,
      duration: 0.1,
      ease:     "linear" as const,
    },
    focus: {
      duration: 0.15,
    },
  },

  /* ─── Continuous animations ────────────────────────────────────────────
   * Ambient loops for decorative elements.
   * Never distracting — barely perceptible.
   */
  continuous: {
    float: {
      y:        [-8, 8],
      duration: 4,
      ease:     "easeInOut" as const,
    },
    pulse: {
      scale:    [1, 1.06, 1],
      duration: 2.5,
      ease:     "easeInOut" as const,
    },
    shimmer: {
      x:        ["-100%", "100%"],
      duration: 1.8,
      ease:     "linear" as const,
    },
    rotate: {
      rotate:   360,
      duration: 20,
      ease:     "linear" as const,
    },
  },

  /* ─── Scroll-linked ────────────────────────────────────────────────────
   * Parallax ratios and scroll progress for GSAP ScrollTrigger.
   * Keep parallax < 0.3 — beyond that it looks unstable.
   */
  scroll: {
    parallaxSlow:   0.15,
    parallaxMedium: 0.25,
    parallaxFast:   0.4,
    pinDuration:    "200%",
  },

  /* ─── Page transitions ─────────────────────────────────────────────────
   * Between pages: fade only, no slide — sliding pages feel dated.
   */
  page: {
    duration: 0.35,
    ease:     [0.16, 1, 0.3, 1] as const,
  },
} as const;

/* ─── Framer Motion variant presets ──────────────────────────────────── */

const { entrance } = AnimationConfig;

export const variants = {
  /** Standard fade-up with viewport trigger */
  fadeUp: {
    hidden:  { opacity: 0, y: entrance.y },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: entrance.duration, ease: entrance.ease },
    },
  },

  /** Fade in only — for elements that shouldn't move */
  fadeIn: {
    hidden:  { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: entrance.duration, ease: entrance.ease },
    },
  },

  /** Scale from slightly smaller — for cards, modals */
  scaleUp: {
    hidden:  { opacity: 0, scale: 0.94, y: 16 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: entrance.duration, ease: entrance.ease },
    },
  },

  /** Slide from left — for left-side content */
  slideLeft: {
    hidden:  { opacity: 0, x: -32 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: entrance.duration, ease: entrance.ease },
    },
  },

  /** Slide from right — for right-side content */
  slideRight: {
    hidden:  { opacity: 0, x: 32 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: entrance.duration, ease: entrance.ease },
    },
  },

  /** Stagger container — wraps children with stagger */
  stagger: (stagger: number = entrance.stagger, delay: number = 0) => ({
    hidden:  {},
    visible: {
      transition: { staggerChildren: stagger, delayChildren: delay },
    },
  }),

  /** Individual item inside a stagger container */
  staggerItem: {
    hidden:  { opacity: 0, y: entrance.y },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: entrance.duration, ease: entrance.ease },
    },
  },
} as const;

/* ─── GSAP preset configs ─────────────────────────────────────────────── */

export const gsapPresets = {
  fromBelow: {
    opacity: 0,
    y: entrance.y,
    duration: entrance.duration,
    ease: "power4.out",
  },
  fromLeft: {
    opacity: 0,
    x: -32,
    duration: entrance.duration,
    ease: "power4.out",
  },
  fromRight: {
    opacity: 0,
    x: 32,
    duration: entrance.duration,
    ease: "power4.out",
  },
  scaleIn: {
    opacity: 0,
    scale: 0.94,
    duration: entrance.duration,
    ease: "power4.out",
  },
} as const;
