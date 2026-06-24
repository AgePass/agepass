import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  [
    "inline-flex items-center gap-1.5",
    "font-medium text-xs",
    "rounded-[var(--radius-full)]",
    "border",
    "transition-colors duration-[150ms]",
  ],
  {
    variants: {
      variant: {
        default: [
          "bg-[var(--bg-muted)] text-[var(--text-secondary)]",
          "border-[var(--border-default)]",
        ],
        brand: [
          "bg-[var(--bg-brand-subtle)] text-[var(--text-brand)]",
          "border-[var(--color-brand-200)]",
        ],
        success: [
          "bg-[var(--color-success-50)] text-[var(--color-success-600)]",
          "border-[var(--color-success-500)]/20",
        ],
        warning: [
          "bg-[var(--color-warning-50)] text-[var(--color-warning-500)]",
          "border-[var(--color-warning-500)]/20",
        ],
        // Pill avec fond foncé — pour les tags hero
        dark: [
          "bg-[var(--color-neutral-900)] text-white",
          "border-[var(--color-neutral-800)]",
        ],
      },
      size: {
        sm: "px-2 py-0.5 text-[10px]",
        md: "px-2.5 py-1 text-xs",
        lg: "px-3 py-1.5 text-sm",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {
  dot?: boolean;
}

function Badge({ className, variant, size, dot = false, children, ...props }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant, size }), className)} {...props}>
      {dot && (
        <span
          className={cn(
            "w-1.5 h-1.5 rounded-full",
            variant === "brand" && "bg-[var(--color-brand-500)]",
            variant === "success" && "bg-[var(--color-success-500)]",
            variant === "warning" && "bg-[var(--color-warning-500)]",
            variant === "default" && "bg-[var(--color-neutral-400)]",
            variant === "dark" && "bg-white",
          )}
        />
      )}
      {children}
    </span>
  );
}

export { Badge, badgeVariants };
