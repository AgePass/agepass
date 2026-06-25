"use client";

import * as React from "react";
import { motion, useInView } from "framer-motion";
import { AnimationConfig } from "@/lib/animations/config";
import { cn } from "@/lib/utils";

interface TextRevealProps {
  children: string;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
  by?: "word" | "char";
  delay?: number;
  stagger?: number;
  className?: string;
}

/**
 * TextReveal — animates text word-by-word or char-by-char on viewport entry.
 *
 * Architecture: splits text into tokens, wraps each in a motion span.
 * The outer span has `overflow: hidden` to clip the y-translate.
 * Used sparingly — only for hero headings and key statements.
 *
 * `by="word"` is the default — character animation looks impressive
 * but takes too long on long sentences and feels gimmicky.
 */
function TextReveal({
  children,
  as: Comp = "p",
  by = "word",
  delay = 0,
  stagger = 0.04,
  className,
}: TextRevealProps) {
  const ref = React.useRef<HTMLElement>(null);
  const isInView = useInView(ref as React.RefObject<Element>, {
    once: true,
    margin: AnimationConfig.entrance.viewport.margin,
  });

  const tokens = by === "word"
    ? children.split(" ")
    : children.split("");

  const separator = by === "word" ? " " : "";

  return (
    // @ts-expect-error motion components are typed loosely
    <Comp ref={ref} className={cn("overflow-hidden", className)} aria-label={children}>
      {tokens.map((token, i) => (
        <React.Fragment key={i}>
          <span className="inline-block overflow-hidden">
            <motion.span
              className="inline-block will-change-transform"
              initial={{ y: "110%", opacity: 0 }}
              animate={isInView ? { y: "0%", opacity: 1 } : { y: "110%", opacity: 0 }}
              transition={{
                duration: AnimationConfig.entrance.duration,
                ease: AnimationConfig.entrance.ease,
                delay: delay + i * stagger,
              }}
              aria-hidden="true"
            >
              {token}
            </motion.span>
          </span>
          {i < tokens.length - 1 && separator && (
            <span aria-hidden="true">{separator}</span>
          )}
        </React.Fragment>
      ))}
    </Comp>
  );
}

export { TextReveal };
