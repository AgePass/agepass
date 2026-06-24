"use client";

import { useEffect, useLayoutEffect } from "react";
import type { gsap as GSAPType } from "gsap";

/**
 * Tiny wrapper that runs a GSAP setup function inside useLayoutEffect
 * (which avoids the SSR warning) and automatically reverts on cleanup.
 *
 * Usage:
 *   const ref = useRef<HTMLDivElement>(null)
 *   useGSAP((gsap) => {
 *     gsap.from(ref.current, { opacity: 0, y: 32 })
 *   }, [])
 */
export function useGSAP(
  callback: (gsap: typeof GSAPType) => (() => void) | void,
  deps: React.DependencyList = []
) {
  const useIsomorphicLayoutEffect =
    typeof window !== "undefined" ? useLayoutEffect : useEffect;

  useIsomorphicLayoutEffect(() => {
    let cleanup: (() => void) | void;

    import("gsap").then(({ gsap }) => {
      cleanup = callback(gsap);
    });

    return () => {
      cleanup?.();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
