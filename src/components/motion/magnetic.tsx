"use client";

import * as React from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

interface MagneticProps {
  children: React.ReactNode;
  strength?: number;
  className?: string;
}

/**
 * Magnetic — pulls element toward cursor on hover.
 *
 * Inspired by Linear's navigation links.
 * `strength` controls how far the element travels (0.3 = 30% of cursor delta).
 * Spring physics: stiff enough to feel responsive, soft enough to feel organic.
 *
 * Architecture: uses Framer Motion springs (not CSS transitions) for
 * the physics-based feel that CSS cubic-bezier can't replicate.
 */
function Magnetic({ children, strength = 0.3, className }: MagneticProps) {
  const ref = React.useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 400, damping: 30 });
  const springY = useSpring(y, { stiffness: 400, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const centerX = rect.left + rect.width  / 2;
    const centerY = rect.top  + rect.height / 2;

    x.set((e.clientX - centerX) * strength);
    y.set((e.clientY - centerY) * strength);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn("inline-flex", className)}
    >
      {children}
    </motion.div>
  );
}

export { Magnetic };
