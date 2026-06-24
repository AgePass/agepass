import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/* ─── Variants ────────────────────────────────────────────────────────── */

const cardVariants = cva(
  // Base — every card has this
  ["relative rounded-[var(--radius-xl)] overflow-hidden", "transition-all duration-[300ms] ease-[var(--ease-out-expo)]"],
  {
    variants: {
      variant: {
        /**
         * Default — clean white card, subtle border and shadow.
         * Use for content cards that need to breathe.
         */
        default: [
          "bg-[var(--bg-page)]",
          "border border-[var(--border-default)]",
          "shadow-[var(--shadow-sm)]",
        ],

        /**
         * Feature — the premium interactive card.
         * Gradient border on hover (via ::before pseudo-element).
         * Use for feature grids, USP blocks.
         */
        feature: [
          "bg-[var(--bg-page)]",
          "border border-[var(--border-default)]",
          "shadow-[var(--shadow-sm)]",
          "hover:shadow-[var(--shadow-lg)]",
          "hover:border-transparent",
          "hover:-translate-y-1",
          "group", // enables child group-hover utilities
          "border-gradient",
        ],

        /**
         * Glass — frosted glass surface.
         * Use over gradient/image backgrounds (hero, CTA sections).
         */
        glass: [
          "glass",
          "shadow-[var(--shadow-md)]",
        ],

        /**
         * Subtle — light background, no strong shadow.
         * Use for secondary info, metadata blocks.
         */
        subtle: [
          "bg-[var(--bg-subtle)]",
          "border border-[var(--border-default)]",
        ],

        /**
         * Inverse — dark card on light background.
         * Use sparingly for high contrast emphasis.
         */
        inverse: [
          "bg-[var(--color-neutral-900)]",
          "border border-[var(--color-neutral-800)]",
          "shadow-[var(--shadow-xl)]",
        ],

        /**
         * Outlined — border only, transparent bg.
         * Use for "ghost" cards in comparison tables.
         */
        outlined: [
          "bg-transparent",
          "border border-[var(--border-strong)]",
        ],
      },

      padding: {
        none: "",
        sm:   "p-4",
        md:   "p-6",
        lg:   "p-8",
        xl:   "p-10",
      },

      interactive: {
        true:  "cursor-pointer select-none",
        false: "",
      },
    },
    defaultVariants: {
      variant:     "default",
      padding:     "lg",
      interactive: false,
    },
  }
);

/* ─── Card ────────────────────────────────────────────────────────────── */

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
  as?: React.ElementType;
}

function Card({
  className,
  variant,
  padding,
  interactive,
  as: Comp = "div",
  ...props
}: CardProps) {
  return (
    <Comp
      className={cn(cardVariants({ variant, padding, interactive }), className)}
      {...props}
    />
  );
}

/* ─── Sub-components ──────────────────────────────────────────────────── */

function CardHeader({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("flex flex-col gap-2 mb-6", className)} {...props} />
  );
}

function CardTitle({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn(
        "text-lg font-semibold leading-tight tracking-tight text-[var(--text-primary)]",
        className
      )}
      {...props}
    />
  );
}

function CardDescription({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn("text-sm text-[var(--text-secondary)] leading-relaxed", className)}
      {...props}
    />
  );
}

function CardContent({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("", className)} {...props} />;
}

function CardFooter({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("flex items-center justify-between mt-6 pt-6 border-t border-[var(--border-default)]", className)}
      {...props}
    />
  );
}

/* ─── Icon Card — card with an icon slot ────────────────────────────── */

interface CardIconProps extends CardProps {
  icon: React.ReactNode;
  iconColor?: "brand" | "neutral" | "success" | "warning";
}

const iconColorMap = {
  brand:   "bg-[var(--bg-brand-subtle)] text-[var(--color-brand-600)]",
  neutral: "bg-[var(--bg-muted)] text-[var(--text-secondary)]",
  success: "bg-[var(--color-success-50)] text-[var(--color-success-600)]",
  warning: "bg-[var(--color-warning-50)] text-[var(--color-warning-500)]",
};

function CardIcon({ icon, iconColor = "brand", children, className, ...props }: CardIconProps) {
  return (
    <Card variant="feature" className={cn(className)} {...props}>
      <div
        className={cn(
          "w-10 h-10 rounded-[var(--radius-lg)] flex items-center justify-center mb-5",
          iconColorMap[iconColor]
        )}
      >
        {icon}
      </div>
      {children}
    </Card>
  );
}

export {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  CardIcon,
  cardVariants,
};
