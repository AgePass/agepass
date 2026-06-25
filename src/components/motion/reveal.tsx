"use client";

import * as React from "react";
import { motion, type HTMLMotionProps } from "framer-motion";
import { variants, AnimationConfig } from "@/lib/animations/config";
import { cn } from "@/lib/utils";

type RevealVariant = "fadeUp" | "fadeIn" | "scaleUp" | "slideLeft" | "slideRight";

interface RevealProps extends HTMLMotionProps<"div"> {
  variant?: RevealVariant;
  delay?:   number;
  as?: keyof HTMLElementTagNameMap;
}

/**
 * Reveal — single element entrance animation.
 *
 * Usage:
 *   <Reveal variant="fadeUp" delay={0.1}>
 *     <Card>…</Card>
 *   </Reveal>
 *
 * Architecture: wraps its child in a motion.div.
 * Using `as` prop to render semantic elements when needed (section, article…).
 */
function Reveal({
  variant = "fadeUp",
  delay = 0,
  className,
  children,
  ...props
}: RevealProps) {
  const baseVariant = variants[variant];

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const patchedVariant: any = delay > 0
    ? {
        ...baseVariant,
        visible: {
          ...baseVariant.visible,
          transition: {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            ...((baseVariant.visible as any).transition ?? {}),
            delay,
          },
        },
      }
    : baseVariant;

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={AnimationConfig.entrance.viewport}
      variants={patchedVariant}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}

/* ─── RevealGroup ─────────────────────────────────────────────────────── */

interface RevealGroupProps extends HTMLMotionProps<"div"> {
  stagger?: number;
  delay?:   number;
}

/**
 * RevealGroup — stagger container.
 * Children inside should be wrapped in <RevealItem>.
 *
 * Usage:
 *   <RevealGroup stagger={0.1}>
 *     <RevealItem><Card>…</Card></RevealItem>
 *     <RevealItem><Card>…</Card></RevealItem>
 *   </RevealGroup>
 */
function RevealGroup({
  stagger = AnimationConfig.entrance.stagger,
  delay = 0,
  className,
  children,
  ...props
}: RevealGroupProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={AnimationConfig.entrance.viewport}
      variants={variants.stagger(stagger, delay)}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}

/* ─── RevealItem ─────────────────────────────────────────────────────── */

function RevealItem({ className, children, ...props }: HTMLMotionProps<"div">) {
  return (
    <motion.div variants={variants.staggerItem} className={cn(className)} {...props}>
      {children}
    </motion.div>
  );
}

export { Reveal, RevealGroup, RevealItem };
