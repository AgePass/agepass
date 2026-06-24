import * as React from "react";
import { cn } from "@/lib/utils";

interface GridBackgroundProps {
  variant?: "dots" | "lines";
  fade?: boolean;
  className?: string;
}

/**
 * GridBackground — decorative dot or line grid overlay.
 *
 * Usage: place as first child of a `relative` container.
 * The fade mask creates a soft vignette so the grid doesn't
 * compete with the content at the edges.
 */
function GridBackground({
  variant = "dots",
  fade = true,
  className,
}: GridBackgroundProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "absolute inset-0 pointer-events-none",
        variant === "dots"  && "grid-dots",
        variant === "lines" && "grid-lines",
        fade && "grid-dots-fade",
        className
      )}
    />
  );
}

export { GridBackground };
