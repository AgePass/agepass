"use client";

import { motion } from "framer-motion";

const USE_CASES = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <rect x="2" y="4" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M6 8h8M6 12h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    label: "E-commerce alimentaire",
    desc: "Vins, spiritueux, produits +18 livrés ou retirés en point relais.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M10 2L3 6v5c0 3.9 3 7.4 7 8.4 4-1 7-4.5 7-8.4V6L10 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      </svg>
    ),
    label: "Grande distribution",
    desc: "Casiers autonomes, click & collect, retrait sans caissier pour produits réglementés.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M10 6v4l3 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    label: "Tabac & nicotine",
    desc: "Distributeurs automatiques, automates de retrait, vente en ligne de produits du tabac.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M4 4h12v9a2 2 0 01-2 2H6a2 2 0 01-2-2V4Z" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M8 15v3M12 15v3M6 18h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    label: "Pharmacie & parapharmacie",
    desc: "Médicaments sans ordonnance soumis à restriction d'âge, automates de délivrance.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <rect x="3" y="3" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="11" y="3" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="3" y="11" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M11 14h6M14 11v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    label: "Marketplace & place de marché",
    desc: "Plateformes multi-vendeurs intégrant des produits soumis à une vérification d'âge obligatoire.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M10 2l2.4 4.8 5.4.8-3.9 3.8.9 5.3L10 14.3l-4.8 2.4.9-5.3L2.2 7.6l5.4-.8L10 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      </svg>
    ),
    label: "Jeux & Paris sportifs",
    desc: "Retrait de gains, activation de compte, validation de l'âge légal pour les jeux d'argent.",
  },
] as const;

const AUDIENCES = [
  {
    title: "Plateformes e-commerce",
    points: [
      "Intégration via API dans le tunnel de retrait",
      "Gestion des preuves côté back-office",
      "Support multi-marchands et multi-entrepôts",
    ],
  },
  {
    title: "Enseignes physiques & réseaux",
    points: [
      "Compatible bornes de retrait et automates",
      "Formation équipes réduite au minimum",
      "Conformité centralisée, audit simplifié",
    ],
  },
] as const;

export function ApContexts() {
  return (
    <section
      id="usage"
      className="py-28 lg:py-36"
      style={{ backgroundColor: "var(--bg-subtle)" }}
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
            Où et pour qui
          </span>
          <h2 className="text-[2.4rem] sm:text-[3rem] font-bold leading-[1.08] tracking-[-0.035em] text-[var(--text-primary)]">
            Partout où un produit{" "}
            <span
              style={{
                background: "linear-gradient(135deg, var(--color-brand-700) 0%, var(--color-brand-500) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              exige une preuve.
            </span>
          </h2>
          <p className="mt-5 text-[var(--text-secondary)] leading-relaxed">
            AgePass s&apos;intègre dans les parcours de retrait de toute enseigne distribuant des produits réglementés.
          </p>
        </motion.div>

        {/* Use cases grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5 mb-16">
          {USE_CASES.map((uc, i) => (
            <motion.div
              key={uc.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: i * 0.07 }}
              className="flex gap-4 p-6 rounded-2xl bg-white border border-[var(--border-default)]"
            >
              <div className="shrink-0 w-10 h-10 rounded-xl bg-[var(--color-brand-50)] text-[var(--color-brand-600)] flex items-center justify-center">
                {uc.icon}
              </div>
              <div>
                <p className="text-sm font-semibold text-[var(--text-primary)] mb-1">{uc.label}</p>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{uc.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Audiences */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {AUDIENCES.map((aud, i) => (
            <motion.div
              key={aud.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }}
              className="p-7 rounded-2xl border border-[var(--color-brand-200)] bg-white"
              style={{ boxShadow: "0 0 0 4px rgba(26,71,245,0.04)" }}
            >
              <p className="text-base font-semibold text-[var(--text-primary)] mb-4">{aud.title}</p>
              <ul className="flex flex-col gap-2.5">
                {aud.points.map((pt) => (
                  <li key={pt} className="flex items-start gap-3">
                    <div className="mt-0.5 w-4 h-4 rounded-full bg-[var(--color-brand-50)] border border-[var(--color-brand-200)] flex items-center justify-center shrink-0">
                      <svg width="8" height="8" viewBox="0 0 8 8" fill="none" aria-hidden="true">
                        <path d="M1.5 4l1.5 1.5L6.5 2" stroke="var(--color-brand-600)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span className="text-sm text-[var(--text-secondary)] leading-relaxed">{pt}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
