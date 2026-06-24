import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/* ─── Heading ─────────────────────────────────────────────────────────── */

const headingVariants = cva(
  ["font-semibold tracking-tight text-[var(--text-primary)]"],
  {
    variants: {
      size: {
        xs:    "text-base   leading-snug",
        sm:    "text-lg     leading-snug",
        md:    "text-2xl    leading-snug",
        lg:    "text-3xl    leading-tight",
        xl:    "text-4xl    leading-tight  tracking-[-0.03em]",
        "2xl": "text-5xl   leading-tight  tracking-[-0.035em]",
        "3xl": "text-6xl   leading-[1.1]  tracking-[-0.04em]",
        "4xl": "text-7xl   leading-[1.05] tracking-[-0.045em]",
        "5xl": "text-8xl   leading-[1]    tracking-[-0.05em]",
      },
      weight: {
        medium:    "font-medium",
        semibold:  "font-semibold",
        bold:      "font-bold",
        extrabold: "font-extrabold",
      },
    },
    defaultVariants: {
      size:   "xl",
      weight: "semibold",
    },
  }
);

interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  balance?: boolean;
  gradient?: boolean;
}

function Heading({
  className,
  size,
  weight,
  as: Comp = "h2",
  balance = false,
  gradient = false,
  ...props
}: HeadingProps) {
  return (
    <Comp
      className={cn(
        headingVariants({ size, weight }),
        balance  && "text-balance",
        gradient && "text-gradient-brand",
        className
      )}
      {...props}
    />
  );
}

/* ─── Text ─────────────────────────────────────────────────────────────── */

const textSizeVariants = cva("", {
  variants: {
    size: {
      xs: "text-xs  leading-normal",
      sm: "text-sm  leading-relaxed",
      md: "text-base leading-relaxed",
      lg: "text-lg  leading-relaxed",
      xl: "text-xl  leading-relaxed",
    },
  },
  defaultVariants: { size: "md" },
});

type TextColor = "primary" | "secondary" | "tertiary" | "brand" | "inverse";

const textColorMap: Record<TextColor, string> = {
  primary:   "text-[var(--text-primary)]",
  secondary: "text-[var(--text-secondary)]",
  tertiary:  "text-[var(--text-tertiary)]",
  brand:     "text-[var(--text-brand)]",
  inverse:   "text-[var(--text-inverse)]",
};

interface TextProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof textSizeVariants> {
  as?: "p" | "span" | "div";
  textColor?: TextColor;
  balance?: boolean;
}

function Text({
  className,
  size,
  textColor = "secondary",
  as: Comp = "p",
  balance = false,
  ...props
}: TextProps) {
  return (
    <Comp
      className={cn(
        "text-[var(--text-secondary)]",
        textSizeVariants({ size }),
        textColorMap[textColor],
        balance && "text-balance",
        className
      )}
      {...props}
    />
  );
}

/* ─── Label — section eyebrow ────────────────────────────────────────── */

function Label({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5",
        "text-xs font-semibold uppercase tracking-[0.1em]",
        "text-[var(--text-brand)]",
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}

/* ─── GradientText ───────────────────────────────────────────────────── */

function GradientText({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span className={cn("text-gradient-brand", className)} {...props}>
      {children}
    </span>
  );
}

/* ─── Highlight ──────────────────────────────────────────────────────── */

function Highlight({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <mark
      className={cn(
        "bg-[var(--color-brand-100)] text-[var(--color-brand-800)]",
        "rounded-[2px] px-1 py-0.5 not-italic",
        className
      )}
      {...props}
    >
      {children}
    </mark>
  );
}

export { Heading, Text, Label, GradientText, Highlight };
export type { HeadingProps, TextProps };
