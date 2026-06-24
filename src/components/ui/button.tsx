import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * Button variants — CVA generates the class combinator.
 *
 * Architecture: `asChild` (Radix Slot) allows rendering the button as
 * any element (Link, a, div) while keeping all styles + a11y.
 * This avoids the anti-pattern of prop drilling `href` into Button.
 */
const buttonVariants = cva(
  // Base — toujours présent
  [
    "inline-flex items-center justify-center gap-2",
    "font-medium text-sm",
    "rounded-[var(--radius-md)]",
    "border border-transparent",
    "transition-all duration-[150ms] ease-[var(--ease-out-quart)]",
    "select-none cursor-pointer",
    "focus-visible:outline-2 focus-visible:outline-offset-2",
    "disabled:pointer-events-none disabled:opacity-40",
    "whitespace-nowrap",
  ],
  {
    variants: {
      variant: {
        // CTA principal — fond brand
        brand: [
          "bg-[var(--color-brand-500)] text-white",
          "hover:bg-[var(--color-brand-600)]",
          "active:bg-[var(--color-brand-700)] active:scale-[0.98]",
          "shadow-[var(--shadow-sm)]",
          "focus-visible:outline-[var(--color-brand-500)]",
        ],
        // Action secondaire — fond neutre
        default: [
          "bg-[var(--color-neutral-900)] text-white",
          "hover:bg-[var(--color-neutral-800)]",
          "active:bg-[var(--color-neutral-950)] active:scale-[0.98]",
          "shadow-[var(--shadow-sm)]",
          "focus-visible:outline-[var(--color-neutral-900)]",
        ],
        // Contour
        outline: [
          "bg-transparent text-[var(--text-primary)]",
          "border-[var(--border-default)]",
          "hover:bg-[var(--bg-muted)] hover:border-[var(--border-strong)]",
          "active:scale-[0.98]",
          "focus-visible:outline-[var(--color-brand-500)]",
        ],
        // Fantôme — navigation, actions secondaires
        ghost: [
          "bg-transparent text-[var(--text-secondary)]",
          "hover:bg-[var(--bg-muted)] hover:text-[var(--text-primary)]",
          "focus-visible:outline-[var(--color-brand-500)]",
        ],
        // Destructif
        destructive: [
          "bg-[var(--color-error-500)] text-white",
          "hover:bg-red-600",
          "active:scale-[0.98]",
          "focus-visible:outline-[var(--color-error-500)]",
        ],
      },
      size: {
        sm: "h-8 px-3 text-xs rounded-[var(--radius-sm)]",
        md: "h-10 px-4 text-sm",
        lg: "h-12 px-6 text-base",
        xl: "h-14 px-8 text-lg",
        icon: "h-10 w-10",
        "icon-sm": "h-8 w-8",
        "icon-lg": "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, size }), className)}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
