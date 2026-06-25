import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * Section — wrapper sémantique avec padding vertical cohérent.
 *
 * Architecture: toutes les sections de page utilisent ce composant.
 * Le padding vertical est tokenisé via CSS custom properties.
 * `background` permet d'alterner les fonds sans copier-coller de classes.
 */
export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
  background?: "page" | "subtle" | "muted" | "inverse";
  size?: "sm" | "md" | "lg" | "xl";
}

function Section({
  className,
  as: Comp = "section",
  background = "page",
  size = "lg",
  ...props
}: SectionProps) {
  const backgrounds = {
    page:    "bg-[var(--bg-page)]",
    subtle:  "bg-[var(--bg-subtle)]",
    muted:   "bg-[var(--bg-muted)]",
    inverse: "bg-[var(--bg-inverse)]",
  };

  const paddings = {
    sm: "py-16",
    md: "py-24",
    lg: "py-32",
    xl: "py-40",
  };

  return (
    <Comp
      className={cn(
        "relative w-full overflow-hidden",
        backgrounds[background],
        paddings[size],
        className
      )}
      {...props}
    />
  );
}

export { Section };
