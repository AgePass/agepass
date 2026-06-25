"use client";

import { motion } from "framer-motion";

function fade(delay: number) {
  return {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number], delay },
  };
}

const STEPS = [
  { label: "COMMANDE", done: true },
  { label: "PAIEMENT", done: true },
  { label: "RETRAIT", done: true },
  { label: "CONFORMITÉ", done: false },
] satisfies { label: string; done: boolean }[];

export function ApRupture() {
  return (
    <section
      className="py-28 lg:py-36"
      style={{ backgroundColor: "var(--bg-subtle)" }}
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Act 1 — editorial statement */}
          <motion.div {...fade(0)}>
            {/* DSA badge */}
            <div className="mb-8 inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[var(--color-brand-200)] bg-white text-[11px] font-semibold text-[var(--color-brand-700)]">
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
                <rect x="1" y="2" width="11" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.3"/>
                <path d="M1 5h11" stroke="currentColor" strokeWidth="1.3"/>
                <path d="M4 1v2M9 1v2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
              </svg>
              DSA 2027
            </div>

            <h2 className="text-[2.6rem] sm:text-[3.2rem] lg:text-[3.8rem] font-bold leading-[1.04] tracking-[-0.04em] text-[var(--text-primary)]">
              Le commerce<br />s&apos;est digitalisé.<br />
              <span
                style={{
                  background: "linear-gradient(135deg, var(--color-brand-700) 0%, var(--color-brand-500) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                La conformité, non.
              </span>
            </h2>

            <p className="mt-8 text-[var(--text-secondary)] leading-relaxed max-w-[420px] text-base">
              En 2027, le Digital Services Act (DSA) imposera un contrôle d&apos;âge vérifiable pour tout retrait autonome de produits réglementés. La plupart des enseignes ne sont pas prêtes.
            </p>
          </motion.div>

          {/* Act 2 — typographic steps */}
          <motion.div {...fade(0.15)} className="flex flex-col gap-0">
            {STEPS.map((step, i) => (
              <div
                key={step.label}
                className={`flex items-center justify-between py-5 ${
                  i < STEPS.length - 1 ? "border-b border-[var(--border-default)]" : ""
                }`}
              >
                <span
                  className={`text-[1.4rem] sm:text-[1.7rem] font-bold tracking-[0.04em] ${
                    step.done
                      ? "text-[var(--text-tertiary)]"
                      : "text-[var(--text-primary)]"
                  }`}
                >
                  {step.label}
                </span>

                {step.done ? (
                  /* Large muted check */
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
                    <circle cx="14" cy="14" r="12" stroke="var(--color-cream-400)" strokeWidth="1.5"/>
                    <path d="M8 14l4 4 8-8" stroke="var(--color-cream-500)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ) : (
                  /* Brand-colored arrow — the gap AgePass fills */
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-semibold text-[var(--color-brand-600)] uppercase tracking-wider hidden sm:block">→ AgePass</span>
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: "var(--color-brand-600)" }}
                    >
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                        <path d="M3 7h8M7 3l4 4-4 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </motion.div>

        </div>

        {/* Full-width closing sentence */}
        <motion.p
          {...fade(0.3)}
          className="mt-20 text-center text-[1.2rem] sm:text-[1.5rem] font-medium text-[var(--text-secondary)] leading-snug italic"
        >
          &ldquo;AgePass est l&apos;infrastructure qui comble ce vide.&rdquo;
        </motion.p>

      </div>
    </section>
  );
}
