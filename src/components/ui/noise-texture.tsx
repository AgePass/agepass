import * as React from "react";
import { cn } from "@/lib/utils";

interface NoiseTextureProps {
  opacity?: number;
  className?: string;
}

/**
 * NoiseTexture — adds film-grain texture to surfaces.
 *
 * Inline SVG avoids an extra HTTP request.
 * Keep opacity low (0.02–0.04) — just enough to add depth,
 * never enough to be consciously noticed.
 */
function NoiseTexture({ opacity = 0.025, className }: NoiseTextureProps) {
  return (
    <svg
      aria-hidden="true"
      className={cn("absolute inset-0 w-full h-full pointer-events-none", className)}
      xmlns="http://www.w3.org/2000/svg"
      style={{ opacity }}
    >
      <filter id="noise-filter">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.85"
          numOctaves="4"
          stitchTiles="stitch"
        />
      </filter>
      <rect width="100%" height="100%" filter="url(#noise-filter)" />
    </svg>
  );
}

export { NoiseTexture };
