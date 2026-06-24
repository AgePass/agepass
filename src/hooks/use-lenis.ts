"use client";

import { useEffect, useRef } from "react";
import type Lenis from "lenis";

/**
 * Returns the global Lenis instance (attached to window by LenisProvider).
 * Use this to programmatically scroll or listen to scroll events.
 */
export function useLenis() {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // LenisProvider attaches the instance to window for easy access
    if (typeof window !== "undefined") {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      lenisRef.current = (window as any).lenis ?? null;
    }
  }, []);

  return lenisRef;
}
