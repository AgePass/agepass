"use client";

import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

const gradText: React.CSSProperties = {
  background: "var(--gradient-brand)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
};

const STATS = [
  {
    value: "81%",
    text: "Des adolescents de 16 ans déclarent que se procurer de l'alcool est « plutôt facile » ou « très facile ».",
    source: "Source : ESPAD 2019",
  },
  {
    value: "73%",
    text: "Ont déjà expérimenté l'alcool avant 16 ans.",
    source: "Source : ESPAD 2019",
  },
  {
    value: "15 ans",
    text: "Âge moyen des premières consommations d'alcool.",
    source: "Source : OFDT – ESCAPAD 2022",
  },
];

const GUARANTEES = [
  { icon: "🔍", label: "Âge vérifié" },
  { icon: "👤", label: "Titulaire vérifié" },
  { icon: "📱", label: "QR Code délivré après approbation" },
  { icon: "🔒", label: "Retrait sécurisé" },
];

export function ApAgeVerification() {
  return (
    <section className="py-28 lg:py-36" style={{ backgroundColor: "var(--bg-subtle)" }}>
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">

        {/* Header + badge */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease }}
          >
            <span className="text-[11px] font-bold uppercase tracking-[0.12em] mb-4 block" style={{ color: "var(--color-brand-600)" }}>
              Vérifier l&apos;âge ne suffit pas
            </span>
            <h2 className="text-[2.2rem] sm:text-[2.8rem] font-bold leading-[1.1] tracking-[-0.035em] text-[var(--text-primary)] mb-5">
              VÉRIFIER L&apos;ÂGE{" "}
              <span style={gradText}>NE SUFFIT PAS.</span>
            </h2>
            <p className="text-[var(--text-secondary)] leading-relaxed text-[1.05rem]">
              Le vrai enjeu : s&apos;assurer que la personne qui retire la commande est bien celle qui a été autorisée.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease, delay: 0.1 }}
            className="rounded-2xl border p-5 bg-white flex items-center gap-3"
            style={{ borderColor: "var(--border-default)" }}
          >
            <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: "var(--gradient-brand)" }}>
              <svg width="20" height="20" viewBox="0 0 28 28" fill="none" aria-hidden="true">
                <path d="M14 2L4 6.5V13.5C4 19.2 8.4 24.5 14 26C19.6 24.5 24 19.2 24 13.5V6.5L14 2Z" fill="white"/>
              </svg>
            </div>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
              Le retrait autonome sans vérification du titulaire ouvre la porte aux usages détournés et à l&apos;accès des mineurs.
            </p>
          </motion.div>
        </div>

        {/* Comparison cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-8 mb-20">

          {/* ID seule */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease }}
            className="rounded-2xl border p-8 bg-white"
            style={{ borderColor: "var(--border-default)" }}
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--text-tertiary)] mb-6">Pièce d&apos;identité seule</p>

            <div className="mb-6 p-4 rounded-xl border" style={{ background: "var(--bg-subtle)", borderColor: "var(--border-default)" }}>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center" style={{ background: "var(--bg-muted)" }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <circle cx="12" cy="8" r="4" stroke="var(--text-tertiary)" strokeWidth="1.5"/>
                    <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke="var(--text-tertiary)" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="h-2.5 rounded-full w-24 mb-2" style={{ background: "var(--bg-muted)" }} />
                  <div className="h-2 rounded-full w-16" style={{ background: "var(--bg-muted)" }} />
                </div>
                <div className="flex items-center gap-1 px-2 py-1 rounded-full border bg-white" style={{ borderColor: "var(--border-default)" }}>
                  <span className="text-[9px] font-bold text-[var(--text-secondary)]">FR</span>
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
            transition={{ duration: 0.6, ease, delay: 0.1 }}
            className="rounded-2xl border p-8 bg-white"
            style={{ borderColor: "var(--color-brand-200)", boxShadow: "0 0 0 4px rgba(26,71,245,0.04)" }}
          >
            <p className="text-xs font-semibold uppercase tracking-widest mb-6" style={{ color: "var(--color-brand-600)" }}>Pièce d&apos;identité + vérification du titulaire</p>

            <div className="mb-6 p-4 rounded-xl border" style={{ background: "var(--color-brand-50)", borderColor: "var(--color-brand-100)" }}>
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center" style={{ background: "var(--color-brand-100)" }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <circle cx="12" cy="8" r="4" stroke="var(--color-brand-600)" strokeWidth="1.5"/>
                    <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke="var(--color-brand-600)" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </div>
                <span className="text-sm font-medium" style={{ color: "var(--color-brand-700)" }}>+</span>
                <div className="w-14 h-14 rounded-xl border-2 flex items-center justify-center relative" style={{ borderColor: "var(--color-brand-400)", borderStyle: "dashed" }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <circle cx="12" cy="10" r="3" stroke="var(--color-brand-500)" strokeWidth="1.5"/>
                    <path d="M3 3h4M17 3h4M3 21h4M17 21h4" stroke="var(--color-brand-500)" strokeWidth="1.5" strokeLinecap="round"/>
                    <path d="M9 15c0 1.7 1.3 3 3 3s3-1.3 3-3" stroke="var(--color-brand-500)" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2.5">
              {["La bonne personne", "Le bon âge", "Le bon retrait"].map((check) => (
                <div key={check} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0" style={{ background: "var(--color-brand-50)", border: "1px solid var(--color-brand-200)" }}>
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                      <path d="M2 5l2 2 4-4" stroke="var(--color-brand-600)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-sm font-medium" style={{ color: "var(--color-brand-800)" }}>{check}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-12 mb-16">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.value}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease, delay: i * 0.1 }}
              className="flex flex-col gap-4"
            >
              <p className="text-[3.5rem] font-bold tracking-[-0.04em] leading-none" style={gradText}>
                {stat.value}
              </p>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{stat.text}</p>
              <p className="text-[10px] font-medium text-[var(--text-tertiary)] uppercase tracking-wider">{stat.source}</p>
            </motion.div>
          ))}
        </div>

        {/* 4 guarantees */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {GUARANTEES.map((g) => (
            <div key={g.label} className="flex items-center gap-2.5 rounded-xl border p-4 bg-white" style={{ borderColor: "var(--border-default)" }}>
              <span className="text-xl">{g.icon}</span>
              <span className="text-sm font-semibold text-[var(--text-secondary)]">{g.label}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
