import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * Button — Design System primitive.
 *
 * Architecture:
 * - CVA for variant/size combination matrix
 * - `asChild` (Radix Slot) for polymorphic rendering (Link, a, etc.)
 * - `loading` state with spinner (never disable-only — user needs feedback)
 * - `iconLeft` / `iconRight` slots for icons without layout coupling
 *
 * Design decisions:
 * - No border-radius > 8px on buttons — pill buttons feel toy-like at this level
 * - Active scale 0.97 — tactile without being exaggerated
 * - Brand buttons have a subtle glow on hover — signature Premium feel
 * - All transitions use the same ease token for coherence
 */
const buttonVariants = cva(
  [
    "inline-flex items-center justify-center gap-2",
    "font-medium leading-none",
    "rounded-[var(--radius-md)]",
    "border border-transparent",
    "transition-all duration-[200ms] ease-[var(--ease-out-quart)]",
    "select-none cursor-pointer",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-brand-500)]",
    "disabled:pointer-events-none disabled:opacity-40",
    "whitespace-nowrap",
    "relative overflow-hidden", // for shine effect
  ],
  {
    variants: {
      variant: {
        brand: [
          "bg-[var(--color-brand-500)] text-white",
          "hover:bg-[var(--color-brand-600)]",
          "hover:shadow-[0_0_0_4px_rgba(51,102,255,0.15),var(--shadow-md)]",
          "active:scale-[0.97] active:bg-[var(--color-brand-700)]",
          "shadow-[var(--shadow-sm)]",
        ],
        default: [
          "bg-[var(--color-neutral-900)] text-white",
          "hover:bg-[var(--color-neutral-800)]",
          "hover:shadow-[var(--shadow-md)]",
          "active:scale-[0.97] active:bg-[var(--color-neutral-950)]",
          "shadow-[var(--shadow-sm)]",
        ],
        outline: [
          "bg-transparent text-[var(--text-primary)]",
          "border-[var(--border-default)]",
          "hover:bg-[var(--bg-muted)] hover:border-[var(--border-strong)]",
          "active:scale-[0.97]",
        ],
        ghost: [
          "bg-transparent text-[var(--text-secondary)]",
          "hover:bg-[var(--bg-muted)] hover:text-[var(--text-primary)]",
          "active:scale-[0.97]",
        ],
        // Gradient — hero section CTA only
        gradient: [
          "text-white",
          "bg-gradient-to-r from-[var(--color-brand-600)] to-indigo-500",
          "hover:from-[var(--color-brand-700)] hover:to-indigo-600",
          "hover:shadow-[0_0_0_4px_rgba(51,102,255,0.2),var(--shadow-lg)]",
          "active:scale-[0.97]",
          "shadow-[var(--shadow-md)]",
        ],
        destructive: [
          "bg-[var(--color-error-500)] text-white",
          "hover:bg-red-600",
          "active:scale-[0.97]",
        ],
      },
      size: {
        xs:      "h-7  px-2.5 text-xs   gap-1.5",
        sm:      "h-9  px-3.5 text-sm   gap-1.5",
        md:      "h-10 px-4   text-sm",
        lg:      "h-12 px-6   text-base",
        xl:      "h-14 px-8   text-lg",
        icon:    "h-10 w-10   text-sm   p-0",
        "icon-sm": "h-8 w-8  text-xs   p-0",
        "icon-lg": "h-12 w-12 text-base p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size:    "md",
    },
  }
);

/* ─── Spinner ─────────────────────────────────────────────────────────── */

function Spinner({ className }: { className?: string }) {
  return (
    <svg
      className={cn("animate-spin", className)}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
      />
    </svg>
  );
}

/* ─── Button ──────────────────────────────────────────────────────────── */

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?:   boolean;
  loading?:   boolean;
  iconLeft?:  React.ReactNode;
  iconRight?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild  = false,
      loading  = false,
      iconLeft,
      iconRight,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";

    const iconSize =
      size === "xs" || size === "sm" ? "w-3.5 h-3.5" :
      size === "lg" || size === "xl" ? "w-5 h-5" : "w-4 h-4";

    // Slot requires a single React element child — skip icon wrappers when asChild
    if (asChild) {
      return (
        <Comp
          ref={ref}
          className={cn(buttonVariants({ variant, size }), className)}
          {...props}
        >
          {children}
        </Comp>
      );
    }

    return (
      <button
        ref={ref}
        disabled={disabled || loading}
        aria-busy={loading}
        className={cn(buttonVariants({ variant, size }), className)}
        {...props}
      >
        {loading ? (
          <Spinner className={iconSize} />
        ) : (
          iconLeft && (
            <span className={cn("shrink-0", iconSize)} aria-hidden="true">
              {iconLeft}
            </span>
          )
        )}
        {children}
        {!loading && iconRight && (
          <span className={cn("shrink-0", iconSize)} aria-hidden="true">
            {iconRight}
          </span>
        )}
      </button>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
