"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { fadeUp, staggerContainer, duration, ease } from "@/lib/animations";
import { cn } from "@/lib/utils";

/**
 * FadeUp — wraps children in a reveal animation triggered when in viewport.
 *
 * Architecture: using `whileInView` rather than scroll-based JS listeners
 * keeps the component self-contained and performant (IntersectionObserver under the hood).
 * `once: true` prevents re-animating on scroll back — matches Linear/Vercel behavior.
 */
interface FadeUpProps extends HTMLMotionProps<"div"> {
  delay?: number;
  as?: keyof HTMLElementTagNameMap;
}

function FadeUp({ className, delay = 0, children, as = "div", ...props }: FadeUpProps) {
  const Comp = motion[as as keyof typeof motion] as typeof motion.div;

  return (
    <Comp
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={{
        hidden: { opacity: 0, y: 24 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: duration.slow,
            ease: ease.outExpo,
            delay,
          },
        },
      }}
      className={cn(className)}
      {...props}
    >
      {children}
    </Comp>
  );
}

/**
 * FadeUpGroup — stagger container for a list of FadeUp children.
 *
 * Usage:
 *   <FadeUpGroup>
 *     <FadeUpItem>…</FadeUpItem>
 *     <FadeUpItem>…</FadeUpItem>
 *   </FadeUpGroup>
 */
interface FadeUpGroupProps extends HTMLMotionProps<"div"> {
  stagger?: number;
}

function FadeUpGroup({ className, stagger = 0.08, children, ...props }: FadeUpGroupProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={staggerContainer(stagger)}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}

function FadeUpItem({ className, children, ...props }: HTMLMotionProps<"div">) {
  return (
    <motion.div variants={fadeUp} className={cn(className)} {...props}>
      {children}
    </motion.div>
  );
}

export { FadeUp, FadeUpGroup, FadeUpItem };
