"use client";

import { motion } from "framer-motion";

const STATS = [
  {
    value: "81%",
    text: "des adolescents de 16 ans déclarent que se procurer de l'alcool est « plutôt facile » ou « très facile ».",
    source: "Source : ESPAD 2019",
  },
  {
    value: "73%",
    text: "ont déjà consommé de l'alcool avant l'âge de 16 ans.",
    source: "Source : ESPAD 2019",
  },
  {
    value: "15 ans",
    text: "est l'âge moyen des premières consommations d'alcool en France.",
    source: "Source : OFDT – ESCAPAD 2022",
  },
] as const;

export function ApAgeVerification() {
  return (
    <section
      className="py-28 lg:py-36"
      style={{ backgroundColor: "var(--bg-subtle)" }}
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          className="max-w-[600px] mb-16 lg:mb-20"
        >
          <span className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[var(--color-brand-600)] mb-5 block">
            Le maillon manquant
          </span>
          <h2 className="text-[2.4rem] sm:text-[3rem] font-bold leading-[1.08] tracking-[-0.035em] text-[var(--text-primary)]">
            Une pièce d&apos;identité peut être prêtée.{" "}
            <span
              style={{
                background: "linear-gradient(135deg, var(--color-brand-700) 0%, var(--color-brand-500) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Un visage, non.
            </span>
          </h2>
          <p className="mt-5 text-[var(--text-secondary)] leading-relaxed">
            Vérifier l&apos;âge n&apos;a de valeur que si la personne qui présente la pièce est réellement son titulaire. AgePass vérifie les deux.
          </p>
        </motion.div>

        {/* Comparison visuelle */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-8 mb-20">

          {/* ID seule */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            className="rounded-2xl border border-[var(--border-default)] bg-white p-8"
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--text-tertiary)] mb-6">Pièce d&apos;identité seule</p>

            {/* ID card mockup */}
            <div className="mb-6 p-4 rounded-xl bg-[var(--bg-subtle)] border border-[var(--border-default)]">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-[var(--color-cream-300)] flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <circle cx="12" cy="8" r="4" stroke="var(--color-warm-500)" strokeWidth="1.5"/>
                    <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke="var(--color-warm-500)" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="h-2.5 bg-[var(--color-cream-300)] rounded-full w-24 mb-2" />
                  <div className="h-2 bg-[var(--color-cream-300)] rounded-full w-16" />
                </div>
                <div className="flex items-center gap-1 px-2 py-1 rounded-full border border-[var(--border-default)] bg-white">
                  <span className="text-[9px] font-bold text-[var(--color-warm-700)]">FR</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2.5">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-green-50 border border-green-200 flex items-center justify-center shrink-0">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                    <path d="M2 5l2 2 4-4" stroke="#16a34a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="text-sm text-[var(--text-secondary)]">Âge vérifié</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-red-50 border border-red-200 flex items-center justify-center shrink-0">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                    <path d="M2 2l6 6M8 2l-6 6" stroke="#ef4444" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </div>
                <span className="text-sm text-[var(--text-secondary)]">Titulaire non vérifié</span>
              </div>
            </div>
          </motion.div>

          {/* ID + biométrie */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number], delay: 0.1 }}
            className="rounded-2xl border border-[var(--color-brand-200)] bg-white p-8"
            style={{ boxShadow: "0 0 0 4px rgba(26,71,245,0.04)" }}
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-brand-600)] mb-6">Pièce d&apos;identité + vérification du titulaire</p>

            {/* ID + face mockup */}
            <div className="mb-6 p-4 rounded-xl bg-[var(--color-brand-50)] border border-[var(--color-brand-100)]">
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 rounded-xl bg-[var(--color-brand-100)] flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <circle cx="12" cy="8" r="4" stroke="var(--color-brand-600)" strokeWidth="1.5"/>
                    <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke="var(--color-brand-600)" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </div>
                <span className="text-sm font-medium text-[var(--color-brand-700)]">+</span>
                {/* Face scan */}
                <div className="w-14 h-14 rounded-xl border-2 border-[var(--color-brand-400)] border-dashed flex items-center justify-center relative">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <circle cx="12" cy="10" r="3" stroke="var(--color-brand-500)" strokeWidth="1.5"/>
                    <path d="M3 3h4M17 3h4M3 21h4M17 21h4" stroke="var(--color-brand-500)" strokeWidth="1.5" strokeLinecap="round"/>
                    <path d="M9 15c0 1.7 1.3 3 3 3s3-1.3 3-3" stroke="var(--color-brand-500)" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                  <motion.div
                    className="absolute inset-0 rounded-xl border-2 border-[var(--color-brand-400)]"
                    animate={{ opacity: [0.4, 1, 0.4] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2.5">
              {["La bonne personne", "Le bon âge", "Le bon retrait"].map((check) => (
                <div key={check} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[var(--color-brand-50)] border border-[var(--color-brand-200)] flex items-center justify-center shrink-0">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                      <path d="M2 5l2 2 4-4" stroke="var(--color-brand-600)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-[var(--color-brand-800)]">{check}</span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>

        {/* Stats éditoriales */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-12">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.value}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number], delay: i * 0.1 }}
              className="flex flex-col gap-4"
            >
              <p
                className="text-[3.5rem] font-bold tracking-[-0.04em] leading-none"
                style={{
                  background: "linear-gradient(135deg, var(--color-brand-700) 0%, var(--color-brand-500) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {stat.value}
              </p>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{stat.text}</p>
              <p className="text-[10px] font-medium text-[var(--text-tertiary)] uppercase tracking-wider">{stat.source}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
