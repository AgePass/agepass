"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  duration: number;
  delay: number;
  color: string;
}

// Positions déterministes — évite la désync SSR/hydration
const PARTICLES: Particle[] = [
  { id:  0, x:  4,  y:  8,  size: 2,   opacity: 0.35, duration: 6.2, delay: 0.0, color: "var(--color-brand-400)" },
  { id:  1, x: 12,  y: 31,  size: 1.5, opacity: 0.25, duration: 7.8, delay: 0.4, color: "var(--color-brand-300)" },
  { id:  2, x: 23,  y: 67,  size: 2,   opacity: 0.30, duration: 5.5, delay: 1.1, color: "#6366f1" },
  { id:  3, x: 35,  y: 15,  size: 1,   opacity: 0.20, duration: 8.1, delay: 0.7, color: "var(--color-brand-400)" },
  { id:  4, x: 45,  y: 82,  size: 2.5, opacity: 0.28, duration: 6.8, delay: 1.8, color: "#8b5cf6" },
  { id:  5, x: 56,  y: 44,  size: 1.5, opacity: 0.22, duration: 7.2, delay: 0.3, color: "var(--color-brand-300)" },
  { id:  6, x: 67,  y: 21,  size: 2,   opacity: 0.32, duration: 5.9, delay: 2.1, color: "#6366f1" },
  { id:  7, x: 78,  y: 58,  size: 1,   opacity: 0.18, duration: 8.4, delay: 0.9, color: "var(--color-brand-400)" },
  { id:  8, x: 88,  y: 90,  size: 2,   opacity: 0.26, duration: 6.5, delay: 1.5, color: "#8b5cf6" },
  { id:  9, x: 93,  y: 12,  size: 1.5, opacity: 0.22, duration: 7.0, delay: 0.2, color: "var(--color-brand-300)" },
  { id: 10, x:  8,  y: 52,  size: 1,   opacity: 0.20, duration: 9.1, delay: 3.2, color: "#6366f1" },
  { id: 11, x: 19,  y: 88,  size: 2.5, opacity: 0.28, duration: 5.8, delay: 1.3, color: "var(--color-brand-400)" },
  { id: 12, x: 31,  y: 42,  size: 1.5, opacity: 0.24, duration: 7.5, delay: 0.6, color: "#8b5cf6" },
  { id: 13, x: 42,  y: 28,  size: 2,   opacity: 0.30, duration: 6.3, delay: 2.4, color: "var(--color-brand-300)" },
  { id: 14, x: 53,  y: 73,  size: 1,   opacity: 0.18, duration: 8.7, delay: 1.0, color: "var(--color-brand-400)" },
  { id: 15, x: 64,  y:  6,  size: 2,   opacity: 0.26, duration: 6.9, delay: 0.5, color: "#6366f1" },
  { id: 16, x: 75,  y: 79,  size: 1.5, opacity: 0.22, duration: 7.3, delay: 1.7, color: "#8b5cf6" },
  { id: 17, x: 85,  y: 35,  size: 2.5, opacity: 0.32, duration: 5.6, delay: 2.8, color: "var(--color-brand-400)" },
  { id: 18, x: 96,  y: 61,  size: 1,   opacity: 0.20, duration: 8.2, delay: 0.8, color: "var(--color-brand-300)" },
  { id: 19, x: 16,  y: 18,  size: 2,   opacity: 0.28, duration: 6.6, delay: 1.9, color: "#6366f1" },
  { id: 20, x: 28,  y: 95,  size: 1.5, opacity: 0.24, duration: 7.1, delay: 0.1, color: "var(--color-brand-400)" },
  { id: 21, x: 39,  y: 56,  size: 1,   opacity: 0.18, duration: 9.3, delay: 3.5, color: "#8b5cf6" },
  { id: 22, x: 61,  y: 38,  size: 2,   opacity: 0.30, duration: 6.0, delay: 1.2, color: "var(--color-brand-300)" },
  { id: 23, x: 72,  y: 14,  size: 1.5, opacity: 0.22, duration: 7.6, delay: 2.2, color: "var(--color-brand-400)" },
  { id: 24, x: 83,  y: 70,  size: 2.5, opacity: 0.34, duration: 5.4, delay: 0.4, color: "#6366f1" },
];

export function ParticleField() {
  const ref = useRef<HTMLDivElement>(null);

  // Pause les animations si hors viewport — perf
  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (ref.current) {
          ref.current.style.animationPlayState = entry.isIntersecting ? "running" : "paused";
        }
      },
      { threshold: 0 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="absolute inset-0 pointer-events-none overflow-hidden"
    >
      {PARTICLES.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full will-change-transform"
          style={{
            left:    `${p.x}%`,
            top:     `${p.y}%`,
            width:   p.size,
            height:  p.size,
            backgroundColor: p.color,
            opacity: p.opacity,
          }}
          animate={{
            y: [0, -18, 0],
            x: [0, p.id % 2 === 0 ? 6 : -6, 0],
            opacity: [p.opacity, p.opacity * 1.6, p.opacity],
          }}
          transition={{
            duration:   p.duration,
            delay:      p.delay,
            ease:       "easeInOut",
            repeat:     Infinity,
            repeatType: "loop",
          }}
        />
      ))}
    </div>
  );
}
