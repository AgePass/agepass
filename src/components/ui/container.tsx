import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * Container — max-width centré avec padding responsive.
 * `size` contrôle le max-width : utilisé pour les sections narrow (prose)
 * ou wide (pleine largeur).
 *
 * Architecture: pas de Tailwind `max-w-*` inline dans chaque composant —
 * Container est LA primitive de mise en page.
 */
export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg" | "xl" | "2xl" | "full";
  as?: React.ElementType;
}

function Container({
  className,
  size = "xl",
  as: Comp = "div",
  ...props
}: ContainerProps) {
  const maxWidths = {
    sm:   "max-w-[640px]",
    md:   "max-w-[768px]",
    lg:   "max-w-[1024px]",
    xl:   "max-w-[1280px]",
    "2xl": "max-w-[1440px]",
    full:  "max-w-full",
  };

  return (
    <Comp
      className={cn(
        "w-full mx-auto",
        "px-4 sm:px-6 lg:px-8 xl:px-12",
        maxWidths[size],
        className
      )}
      {...props}
    />
  );
}

export { Container };
