import * as React from "react";
import { cn } from "@/lib/utils";

export interface DividerProps extends React.HTMLAttributes<HTMLHRElement> {
  orientation?: "horizontal" | "vertical";
  decorative?: boolean;
}

function Divider({
  className,
  orientation = "horizontal",
  decorative = true,
  ...props
}: DividerProps) {
  return (
    <hr
      role={decorative ? "none" : "separator"}
      aria-orientation={orientation}
      className={cn(
        "border-0",
        orientation === "horizontal"
          ? "w-full h-px bg-[var(--border-default)]"
          : "h-full w-px bg-[var(--border-default)]",
        className
      )}
      {...props}
    />
  );
}

export { Divider };
