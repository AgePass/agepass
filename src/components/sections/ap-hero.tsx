"use client";

import { motion } from "framer-motion";
import { AgePassPhone } from "@/components/ui/agepass-phone";

function item(delay: number) {
  return {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number], delay } },
  };
}

const PILLARS = [
  "Protection des mineurs",
  "Retrait autonome",
  "Conformité vérifiable",
  "DSA 2027",
] as const;

export function ApHero() {
  return (
    <section
      className="relative min-h-[100dvh] flex flex-col justify-center overflow-hidden"
      style={{ backgroundColor: "var(--bg-page)" }}
      aria-label="AgePass — La couche de conformité du retrait autonome"
    >
      {/* Subtle radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background: "radial-gradient(ellipse 70% 50% at 65% 50%, rgba(26,71,245,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-[1280px] mx-auto w-full px-6 lg:px-12 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">

          {/* Left — content */}
          <div className="flex flex-col items-start">

            {/* Label */}
            <motion.div {...item(0.05)} className="mb-8">
              <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.1em] text-[var(--color-brand-600)]">
                <span className="w-4 h-px bg-[var(--color-brand-400)]" />
                Infrastructure de conformité
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              {...item(0.15)}
              className="text-[3.2rem] sm:text-[4rem] lg:text-[4.5rem] xl:text-[5rem] font-bold leading-[1.02] tracking-[-0.045em] text-[var(--text-primary)]"
            >
              La couche de{" "}
              <br className="hidden sm:block" />
              conformité du{" "}
              <br className="hidden sm:block" />
              <span
                style={{
                  background: "linear-gradient(135deg, var(--color-brand-700) 0%, var(--color-brand-500) 60%, #6366f1 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                retrait autonome.
              </span>
            </motion.h1>

            {/* Sub */}
            <motion.p
              {...item(0.3)}
              className="mt-7 text-lg text-[var(--text-secondary)] leading-relaxed max-w-[440px]"
            >
              Vérifier l&apos;âge. Vérifier la personne. Prouver la remise.
            </motion.p>

            {/* CTAs */}
            <motion.div {...item(0.45)} className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-3">
              <a
                href="#pilote"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-[15px] font-semibold bg-[var(--color-brand-600)] text-white hover:bg-[var(--color-brand-700)] transition-colors duration-150 shadow-sm"
              >
                Demander un pilote
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a
                href="#comment"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full text-[15px] font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-150"
              >
                Comment ça marche
              </a>
            </motion.div>

            {/* Pillars */}
            <motion.div
              {...item(0.6)}
              className="mt-12 flex flex-wrap gap-3"
            >
              {PILLARS.map((p) => (
                <span
                  key={p}
                  className="inline-flex items-center gap-2 text-[12px] font-medium text-[var(--text-tertiary)] px-3 py-1.5 rounded-full border border-[var(--border-default)] bg-white/60"
                >
                  <span className="w-1 h-1 rounded-full bg-[var(--color-brand-400)]" />
                  {p}
                </span>
              ))}
            </motion.div>

          </div>

          {/* Right — phone mockup */}
          <div className="flex justify-center lg:justify-end">
            <AgePassPhone size="lg" />
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <div className="w-5 h-8 rounded-full border border-[var(--border-strong)] flex items-start justify-center pt-1.5">
          <motion.div
            className="w-1 h-1.5 rounded-full bg-[var(--text-tertiary)]"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
