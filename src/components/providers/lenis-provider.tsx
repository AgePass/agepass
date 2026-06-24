"use client";

import { useEffect } from "react";

/**
 * Initializes Lenis smooth scrolling globally.
 *
 * Architecture decision: Lenis is initialized at the root layout level
 * so all pages benefit from smooth scroll automatically.
 * The instance is exposed on `window.lenis` for programmatic access via useLenis().
 *
 * We use `lerp: 0.1` — a lower value = smoother but more "laggy" feel.
 * 0.1 hits the premium sweet spot (Linear/Stripe-level).
 */
export function LenisProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    let lenis: import("lenis").default | null = null;
    let rafId: number;

    const init = async () => {
      const { default: Lenis } = await import("lenis");

      lenis = new Lenis({
        lerp: 0.1,
        smoothWheel: true,
        syncTouch: false, // native scroll on touch — better mobile UX
      });

      // Expose globally for useLenis() hook
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (window as any).lenis = lenis;

      const raf = (time: number) => {
        lenis?.raf(time);
        rafId = requestAnimationFrame(raf);
      };
      rafId = requestAnimationFrame(raf);
    };

    init();

    return () => {
      cancelAnimationFrame(rafId);
      lenis?.destroy();
    };
  }, []);

  return <>{children}</>;
}
