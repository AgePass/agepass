"use client";

import { motion } from "framer-motion";

const STEPS = [
  { label: "Commande", sublabel: "digitalisée", checked: true },
  { label: "Paiement", sublabel: "digitalisé", checked: true },
  { label: "Retrait", sublabel: "automatisé", checked: true },
  { label: "Contrôle d'âge", sublabel: "non automatisé", checked: false },
] as const;

export function ApWhyNow() {
  return (
    <section
      id="pourquoi"
      className="py-28 lg:py-36"
      style={{ backgroundColor: "var(--bg-subtle)" }}
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">

        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-2 mb-10"
        >
          <span className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[var(--color-brand-600)]">
            Pourquoi maintenant
          </span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left — headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-[2.4rem] sm:text-[3rem] font-bold leading-[1.08] tracking-[-0.035em] text-[var(--text-primary)]">
              Les enseignes ont automatisé la commande.
              <br />
              <span
                style={{
                  background: "linear-gradient(135deg, var(--color-brand-700) 0%, var(--color-brand-500) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Pas encore la conformité.
              </span>
            </h2>

            <p className="mt-6 text-[var(--text-secondary)] leading-relaxed max-w-[380px]">
              Le Digital Services Act (DSA) entre en vigueur en 2027. Il impose un contrôle d&apos;âge pour les parcours de retrait autonome. AgePass comble ce vide.
            </p>

            <div className="mt-8 inline-flex items-center gap-3 px-4 py-2.5 rounded-xl border border-[var(--color-brand-200)] bg-[var(--color-brand-50)]">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <rect x="1" y="3" width="14" height="11" rx="2" stroke="var(--color-brand-600)" strokeWidth="1.5"/>
                <path d="M1 7h14" stroke="var(--color-brand-600)" strokeWidth="1.5"/>
                <path d="M5 1v4M11 1v4" stroke="var(--color-brand-600)" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              <span className="text-sm font-semibold text-[var(--color-brand-700)]">DSA 2027 — Entrée en vigueur</span>
            </div>
          </motion.div>

          {/* Right — progression visuelle */}
          <div className="flex flex-col gap-4">
            {STEPS.map((step, i) => (
              <motion.div
                key={step.label}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: i * 0.08 }}
                className={`flex items-center gap-4 px-5 py-4 rounded-xl border ${
                  step.checked
                    ? "bg-white border-[var(--border-default)]"
                    : "bg-amber-50 border-amber-200"
                }`}
              >
                {/* Icon */}
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                    step.checked
                      ? "bg-[var(--color-brand-50)]"
                      : "bg-amber-100"
                  }`}
                >
                  {step.checked ? (
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                      <path d="M2 7l3.5 3.5L12 3" stroke="var(--color-brand-600)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  ) : (
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                      <circle cx="7" cy="7" r="6" stroke="#D97706" strokeWidth="1.5"/>
                      <path d="M7 4v4M7 9.5v.5" stroke="#D97706" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  )}
                </div>

                {/* Text */}
                <div className="flex-1 min-w-0">
                  <p className={`text-sm font-semibold ${step.checked ? "text-[var(--text-primary)]" : "text-amber-800"}`}>
                    {step.label}
                  </p>
                  <p className={`text-xs ${step.checked ? "text-[var(--text-tertiary)]" : "text-amber-600"}`}>
                    {step.sublabel}
                  </p>
                </div>

                {/* Badge */}
                {!step.checked && (
                  <span className="shrink-0 text-[10px] font-semibold bg-amber-200 text-amber-800 px-2 py-0.5 rounded-full">
                    AgePass
                  </span>
                )}
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
