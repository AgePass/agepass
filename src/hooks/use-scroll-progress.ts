"use client";

import { useState, useEffect, useRef } from "react";
import { clamp } from "@/lib/utils";

/**
 * Returns the scroll progress (0–1) of a given element within the viewport.
 * Useful for parallax, progress bars, and scroll-triggered reveals.
 */
export function useScrollProgress(
  ref: React.RefObject<HTMLElement | null>,
  options: { offset?: number } = {}
) {
  const [progress, setProgress] = useState(0);
  const { offset = 0 } = options;
  const rafId = useRef<number>(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onScroll = () => {
      cancelAnimationFrame(rafId.current);
      rafId.current = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        const windowH = window.innerHeight;
        const total = windowH + rect.height;
        const traveled = windowH - rect.top + offset;
        setProgress(clamp(traveled / total, 0, 1));
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafId.current);
    };
  }, [ref, offset]);

  return progress;
}
