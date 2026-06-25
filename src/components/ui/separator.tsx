import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * Separator — upgraded Divider with gradient and label options.
 * Use `gradient` for decorative separators between major sections.
 * Use `labeled` for separators with text (e.g., "ou continuer avec").
 */
interface SeparatorProps extends React.HTMLAttributes<HTMLDivElement> {
  gradient?: boolean;
  label?: string;
  orientation?: "horizontal" | "vertical";
}

function Separator({
  className,
  gradient = false,
  label,
  orientation = "horizontal",
  ...props
}: SeparatorProps) {
  if (label) {
    return (
      <div className={cn("flex items-center gap-4", className)} {...props}>
        <span className="flex-1 h-px bg-[var(--border-default)]" />
        <span className="text-xs text-[var(--text-tertiary)] whitespace-nowrap">{label}</span>
        <span className="flex-1 h-px bg-[var(--border-default)]" />
      </div>
    );
  }

  if (orientation === "vertical") {
    return (
      <div
        className={cn(
          "w-px self-stretch",
          gradient
            ? "bg-gradient-to-b from-transparent via-[var(--border-default)] to-transparent"
            : "bg-[var(--border-default)]",
          className
        )}
        role="separator"
        aria-orientation="vertical"
        {...props}
      />
    );
  }

  return (
    <div
      className={cn(
        "h-px w-full",
        gradient
          ? "bg-gradient-to-r from-transparent via-[var(--border-default)] to-transparent"
          : "bg-[var(--border-default)]",
        className
      )}
      role="separator"
      aria-orientation="horizontal"
      {...props}
    />
  );
}

export { Separator };
