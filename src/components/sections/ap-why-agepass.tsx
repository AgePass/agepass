"use client";

import { motion } from "framer-motion";

const TODAY: { icon: string; text: string; risk?: boolean }[] = [
  { icon: "□", text: "Déclaration sur l'honneur" },
  { icon: "→", text: "Commande préparée" },
  { icon: "→", text: "Retrait autonome" },
  { icon: "⚠", text: "Risque réglementaire", risk: true },
];

const WITH_AGEPASS = [
  { icon: "✓", text: "Commande validée" },
  { icon: "✓", text: "Contrôle âge + titulaire" },
  { icon: "✓", text: "QR Code sécurisé généré" },
  { icon: "✓", text: "Preuve archivée et consultable" },
] as const;

const PILLARS = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M10 2L3 5.5V10.5C3 14.8 6.2 18.5 10 19.5C13.8 18.5 17 14.8 17 10.5V5.5L10 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Sécurisée",
    desc: "Données et accès protégés",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <rect x="3" y="3" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M7 10l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Traçable",
    desc: "Historique complet et infalsifiable",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M4 10h12M10 4l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Conforme",
    desc: "Alignée avec la réglementation",
  },
] as const;

export function ApWhyAgepass() {
  return (
    <section
      className="py-28 lg:py-36"
      style={{ backgroundColor: "var(--bg-page)" }}
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-[560px] mb-16 lg:mb-20"
        >
          <span className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[var(--color-brand-600)] mb-5 block">
            Pourquoi AgePass
          </span>
          <h2 className="text-[2.4rem] sm:text-[3rem] font-bold leading-[1.08] tracking-[-0.035em] text-[var(--text-primary)]">
            Une déclaration ne suffit pas.
            <br />
            <span
              style={{
                background: "linear-gradient(135deg, var(--color-brand-700) 0%, var(--color-brand-500) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Une preuve vérifiée, oui.
            </span>
          </h2>
          <p className="mt-5 text-[var(--text-secondary)] leading-relaxed">
            AgePass transforme une déclaration en une autorisation vérifiée, traçable et prouvée.
          </p>
        </motion.div>

        {/* Comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6 mb-16">

          {/* Today */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-2xl border border-[var(--border-default)] bg-white p-7"
          >
            <div className="flex items-center gap-2.5 mb-6">
              <div className="w-6 h-6 rounded-full bg-red-50 border border-red-200 flex items-center justify-center">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                  <path d="M2 2l6 6M8 2l-6 6" stroke="#EF4444" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
              <p className="text-sm font-semibold text-[var(--text-primary)]">Aujourd&apos;hui</p>
              <span className="ml-auto text-[10px] font-medium text-red-600 bg-red-50 border border-red-200 px-2 py-0.5 rounded-full">
                Aucun contrôle
              </span>
            </div>
            <div className="flex flex-col gap-3">
              {TODAY.map((step, i) => (
                <div
                  key={i}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl ${
                    step.risk
                      ? "bg-red-50 border border-red-200"
                      : "bg-[var(--bg-subtle)]"
                  }`}
                >
                  <span className={`text-sm w-4 text-center ${step.risk ? "text-red-500" : "text-[var(--text-tertiary)]"}`}>
                    {step.icon}
                  </span>
                  <span className={`text-sm ${step.risk ? "font-semibold text-red-700" : "text-[var(--text-secondary)]"}`}>
                    {step.text}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* With AgePass */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="rounded-2xl border border-[var(--color-brand-200)] bg-white p-7"
            style={{ boxShadow: "0 0 0 4px rgba(26,71,245,0.04)" }}
          >
            <div className="flex items-center gap-2.5 mb-6">
              <div className="w-6 h-6 rounded-full bg-[var(--color-brand-50)] border border-[var(--color-brand-200)] flex items-center justify-center">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                  <path d="M1.5 5l2.5 2.5L8.5 2" stroke="var(--color-brand-600)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <p className="text-sm font-semibold text-[var(--text-primary)]">Avec AgePass</p>
              <span className="ml-auto text-[10px] font-medium text-[var(--color-brand-700)] bg-[var(--color-brand-50)] border border-[var(--color-brand-200)] px-2 py-0.5 rounded-full">
                Preuve archivée
              </span>
            </div>
            <div className="flex flex-col gap-3">
              {WITH_AGEPASS.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.07 }}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl bg-[var(--color-brand-50)]"
                >
                  <span className="text-sm text-[var(--color-brand-500)] font-bold w-4 text-center">✓</span>
                  <span className="text-sm text-[var(--color-brand-800)] font-medium">{step.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>

        {/* Pillars */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-[var(--border-default)] border border-[var(--border-default)] rounded-2xl bg-white overflow-hidden"
        >
          {PILLARS.map((p) => (
            <div key={p.title} className="flex items-center gap-4 px-7 py-6">
              <div className="w-10 h-10 rounded-xl bg-[var(--color-brand-50)] text-[var(--color-brand-600)] flex items-center justify-center shrink-0">
                {p.icon}
              </div>
              <div>
                <p className="text-sm font-semibold text-[var(--text-primary)]">{p.title}</p>
                <p className="text-xs text-[var(--text-tertiary)] mt-0.5">{p.desc}</p>
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
