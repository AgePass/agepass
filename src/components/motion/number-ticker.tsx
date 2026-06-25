"use client";

import * as React from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

interface NumberTickerProps {
  value:     number;
  prefix?:   string;
  suffix?:   string;
  decimals?: number;
  duration?: number;
  className?: string;
}

/**
 * NumberTicker — animates a number from 0 to `value` when it enters the viewport.
 *
 * Uses Framer Motion's useSpring for the count-up — smoother than
 * a requestAnimationFrame loop because it has momentum (overshoots slightly).
 * `duration` controls the spring stiffness, not a fixed time.
 */
function NumberTicker({
  value,
  prefix = "",
  suffix = "",
  decimals = 0,
  duration = 2,
  className,
}: NumberTickerProps) {
  const ref = React.useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);

  // Stiffness: lower = slower/smoother
  const stiffness = 80 / duration;
  const springValue = useSpring(motionValue, {
    stiffness,
    damping: 20,
    restDelta: 0.001,
  });

  const isInView = useInView(ref, { once: true, margin: "-80px" });

  React.useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  React.useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent =
          prefix +
          new Intl.NumberFormat("fr-FR", {
            minimumFractionDigits: decimals,
            maximumFractionDigits: decimals,
          }).format(Number(latest.toFixed(decimals))) +
          suffix;
      }
    });
  }, [springValue, prefix, suffix, decimals]);

  return (
    <span
      ref={ref}
      className={className}
      aria-label={`${prefix}${value}${suffix}`}
    >
      {prefix}0{suffix}
    </span>
  );
}

export { NumberTicker };
