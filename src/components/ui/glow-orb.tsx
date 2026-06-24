import * as React from "react";
import { cn } from "@/lib/utils";

type OrbColor = "brand" | "indigo" | "violet";
type OrbSize  = "sm" | "md" | "lg" | "xl";

interface GlowOrbProps {
  color?: OrbColor;
  size?:  OrbSize;
  x?: string;
  y?: string;
  opacity?: number;
  animate?: boolean;
  className?: string;
}

const colorMap: Record<OrbColor, string> = {
  brand:  "orb-brand",
  indigo: "orb-indigo",
  violet: "orb-violet",
};

const sizeMap: Record<OrbSize, string> = {
  sm: "orb-sm",
  md: "orb-md",
  lg: "orb-lg",
  xl: "orb-xl",
};

/**
 * GlowOrb — ambient light spot, purely decorative.
 *
 * Architecture: positioned absolute inside a `relative overflow-hidden` parent.
 * Never affects layout (pointer-events: none via .orb class).
 * `animate` adds a slow float loop for hero sections.
 */
function GlowOrb({
  color = "brand",
  size  = "lg",
  x     = "50%",
  y     = "50%",
  opacity = 1,
  animate = false,
  className,
}: GlowOrbProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "orb",
        colorMap[color],
        sizeMap[size],
        animate && "animate-pulse-glow",
        className
      )}
      style={{
        left: x,
        top: y,
        transform: "translate(-50%, -50%)",
        opacity,
      }}
    />
  );
}

export { GlowOrb };
export type { GlowOrbProps };
