import type { ReactNode, CSSProperties } from "react";

/** Props communes à tous les composants UI */
export interface BaseProps {
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
}

/** Variantes de taille unifiées */
export type Size = "xs" | "sm" | "md" | "lg" | "xl";

/** Variantes sémantiques unifiées */
export type Variant = "default" | "brand" | "subtle" | "outline" | "ghost" | "destructive";

/** Orientation */
export type Orientation = "horizontal" | "vertical";

/** Breakpoints */
export type Breakpoint = "sm" | "md" | "lg" | "xl" | "2xl";
