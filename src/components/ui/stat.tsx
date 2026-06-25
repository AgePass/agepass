import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * Stat — a KPI/metric display block.
 * Used in social proof sections, hero sections.
 *
 * Architecture: purely presentational. The animated number
 * ticker is handled by a separate <NumberTicker> component
 * that wraps <Stat> — separation of concerns.
 */
interface StatProps extends React.HTMLAttributes<HTMLDivElement> {
  value:    React.ReactNode;
  label:    string;
  sublabel?: string;
  trend?:   "up" | "down" | "neutral";
  size?:    "sm" | "md" | "lg";
}

const sizeMap = {
  sm: { value: "text-3xl", label: "text-sm" },
  md: { value: "text-4xl", label: "text-sm" },
  lg: { value: "text-5xl", label: "text-base" },
};

function Stat({
  value,
  label,
  sublabel,
  trend,
  size = "md",
  className,
  ...props
}: StatProps) {
  const sizes = sizeMap[size];

  return (
    <div className={cn("flex flex-col gap-1", className)} {...props}>
      <div
        className={cn(
          sizes.value,
          "font-bold tracking-tight text-[var(--text-primary)] leading-none tabular-nums"
        )}
      >
        {value}
      </div>

      <div className="flex items-center gap-2">
        <span className={cn(sizes.label, "text-[var(--text-secondary)]")}>
          {label}
        </span>

        {trend && (
          <span
            className={cn(
              "text-xs font-medium px-1.5 py-0.5 rounded-full",
              trend === "up"      && "bg-[var(--color-success-50)] text-[var(--color-success-600)]",
              trend === "down"    && "bg-[var(--color-error-50)] text-[var(--color-error-500)]",
              trend === "neutral" && "bg-[var(--bg-muted)] text-[var(--text-tertiary)]"
            )}
          >
            {trend === "up" ? "↑" : trend === "down" ? "↓" : "→"}
          </span>
        )}
      </div>

      {sublabel && (
        <span className="text-xs text-[var(--text-tertiary)]">{sublabel}</span>
      )}
    </div>
  );
}

export { Stat };
export type { StatProps };
