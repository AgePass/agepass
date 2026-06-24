import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * Tag — category/metadata label.
 * Distinct from Badge: Tag is for content classification (blog categories, feature tags).
 * Badge is for status/state indicators.
 */
interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "brand" | "success" | "warning" | "error";
}

const tagStyles = {
  default: "bg-[var(--bg-muted)] text-[var(--text-secondary)] border-[var(--border-default)]",
  brand:   "bg-[var(--color-brand-50)] text-[var(--color-brand-700)] border-[var(--color-brand-200)]",
  success: "bg-[var(--color-success-50)] text-[var(--color-success-600)] border-[var(--color-success-500)]/20",
  warning: "bg-[var(--color-warning-50)] text-[var(--color-warning-500)] border-[var(--color-warning-500)]/20",
  error:   "bg-[var(--color-error-50)] text-[var(--color-error-500)] border-[var(--color-error-500)]/20",
};

function Tag({ className, variant = "default", ...props }: TagProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1",
        "px-2.5 py-1 rounded-[var(--radius-md)]",
        "text-xs font-medium border",
        "transition-colors duration-[150ms]",
        tagStyles[variant],
        className
      )}
      {...props}
    />
  );
}

export { Tag };
