"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface BorderBeamProps {
  duration?: number;
  delay?:    number;
  colorFrom?: string;
  colorTo?:   string;
  className?: string;
}

/**
 * BorderBeam — animated beam of light traveling around a border.
 *
 * The "magic UI" signature effect — a glowing particle orbiting a card.
 * Implemented with a conic-gradient rotating inside a masked container,
 * not a traditional SVG animation.
 *
 * Use sparingly — one per viewport maximum.
 * Best on the primary CTA card or the hero feature preview.
 */
function BorderBeam({
  duration = 15,
  delay    = 0,
  colorFrom = "var(--color-brand-400)",
  colorTo   = "#a855f7",
  className,
}: BorderBeamProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "absolute inset-0 rounded-[inherit] overflow-hidden pointer-events-none",
        "[mask:linear-gradient(white,white)_content-box,linear-gradient(white,white)]",
        "[mask-composite:exclude]",
        "p-px",
        className
      )}
    >
      <motion.div
        className="absolute inset-0"
        style={{
          background: `conic-gradient(from 0deg, transparent 0deg, ${colorFrom} 90deg, ${colorTo} 180deg, transparent 270deg)`,
          borderRadius: "inherit",
        }}
        animate={{ rotate: 360 }}
        transition={{
          duration,
          delay,
          ease: "linear",
          repeat: Infinity,
        }}
      />
    </div>
  );
}

export { BorderBeam };
