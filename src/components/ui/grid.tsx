import * as React from "react";
import { cn } from "@/lib/utils";

/* ─── Types ─────────────────────────────────────────────────────────────── */

type Cols = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

type ColSpan =
  | Cols
  | { sm?: Cols; md?: Cols; lg?: Cols; xl?: Cols };

interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  cols?: ColSpan;
  gap?: "none" | "xs" | "sm" | "md" | "lg" | "xl";
  align?: "start" | "center" | "end" | "stretch";
  as?: React.ElementType;
}

interface GridItemProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Number of columns to span */
  span?: ColSpan;
  /** Column to start at (1-based) */
  start?: Cols;
  /** Row to start at */
  rowStart?: number;
  /** Number of rows to span */
  rowSpan?: number;
  as?: React.ElementType;
}

/* ─── Helpers ────────────────────────────────────────────────────────────── */

function resolveColsClass(cols: ColSpan | undefined, prefix = ""): string {
  if (!cols) return "";
  const p = prefix ? `${prefix}:` : "";

  if (typeof cols === "number") {
    return `${p}grid-cols-${cols}`;
  }

  return [
    cols.sm  && `sm:grid-cols-${cols.sm}`,
    cols.md  && `md:grid-cols-${cols.md}`,
    cols.lg  && `lg:grid-cols-${cols.lg}`,
    cols.xl  && `xl:grid-cols-${cols.xl}`,
  ]
    .filter(Boolean)
    .join(" ");
}

function resolveSpanClass(span: ColSpan | undefined): string {
  if (!span) return "";

  if (typeof span === "number") {
    return `col-span-${span}`;
  }

  return [
    span.sm  && `sm:col-span-${span.sm}`,
    span.md  && `md:col-span-${span.md}`,
    span.lg  && `lg:col-span-${span.lg}`,
    span.xl  && `xl:col-span-${span.xl}`,
  ]
    .filter(Boolean)
    .join(" ");
}

const gapClasses = {
  none: "gap-0",
  xs:   "gap-2",          // 8px
  sm:   "gap-4",          // 16px
  md:   "gap-6",          // 24px  ← défaut composants
  lg:   "gap-8 lg:gap-12",// 32px / 48px ← défaut sections
  xl:   "gap-12 lg:gap-16",
} as const;

const alignClasses = {
  start:   "items-start",
  center:  "items-center",
  end:     "items-end",
  stretch: "items-stretch",
} as const;

/* ─── Grid ───────────────────────────────────────────────────────────────── */

/**
 * Grid — 12-column layout primitive.
 *
 * Architecture: "mobile-first 4 → 8 → 12" column escalation.
 * Default: 4 cols on mobile, 12 on desktop.
 * Components that need fewer columns pass `cols` explicitly.
 *
 * Usage:
 *   <Grid cols={{ sm: 1, md: 2, lg: 3 }} gap="lg">
 *     <GridItem span={1}>…</GridItem>
 *   </Grid>
 */
function Grid({
  cols = { sm: 4, md: 8, lg: 12 },
  gap = "lg",
  align = "stretch",
  className,
  as: Comp = "div",
  ...props
}: GridProps) {
  return (
    <Comp
      className={cn(
        "grid",
        resolveColsClass(cols),
        gapClasses[gap],
        alignClasses[align],
        className
      )}
      {...props}
    />
  );
}

/* ─── GridItem ───────────────────────────────────────────────────────────── */

function GridItem({
  span,
  start,
  rowStart,
  rowSpan,
  className,
  as: Comp = "div",
  ...props
}: GridItemProps) {
  return (
    <Comp
      className={cn(
        resolveSpanClass(span),
        start    && `col-start-${start}`,
        rowStart && `row-start-${rowStart}`,
        rowSpan  && `row-span-${rowSpan}`,
        className
      )}
      {...props}
    />
  );
}

export { Grid, GridItem };
export type { GridProps, GridItemProps, Cols, ColSpan };
