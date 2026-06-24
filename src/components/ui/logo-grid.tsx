import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * LogoGrid — social proof logo strip.
 *
 * Architecture: the logos are rendered as children slots, not hardcoded.
 * The parent section provides the logos — LogoGrid handles the layout only.
 * Uses opacity + grayscale filter to create the "monochrome" look
 * that Stripe uses for their partner logos.
 */
interface LogoGridProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: string;
  cols?: 3 | 4 | 5 | 6;
}

function LogoGrid({ label, cols = 5, className, children, ...props }: LogoGridProps) {
  const gridCols = {
    3: "grid-cols-3",
    4: "grid-cols-2 sm:grid-cols-4",
    5: "grid-cols-2 sm:grid-cols-3 lg:grid-cols-5",
    6: "grid-cols-2 sm:grid-cols-3 lg:grid-cols-6",
  }[cols];

  return (
    <div className={cn("flex flex-col gap-8 items-center", className)} {...props}>
      {label && (
        <p className="text-sm text-[var(--text-tertiary)] font-medium tracking-wide uppercase text-center">
          {label}
        </p>
      )}
      <div className={cn("grid w-full gap-8 items-center", gridCols)}>
        {children}
      </div>
    </div>
  );
}

interface LogoItemProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
}

function LogoItem({ name, children, className, ...props }: LogoItemProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-center",
        "opacity-40 grayscale hover:opacity-70 hover:grayscale-0",
        "transition-all duration-[300ms] ease-[var(--ease-out-expo)]",
        "h-8",
        className
      )}
      aria-label={name}
      {...props}
    >
      {children}
    </div>
  );
}

export { LogoGrid, LogoItem };
