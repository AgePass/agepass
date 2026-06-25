"use client";

import { motion } from "framer-motion";
import { AgePassPhone } from "@/components/ui/agepass-phone";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

const gradText: React.CSSProperties = {
  background: "var(--gradient-brand)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
};

const STEPS = [
  {
    num: 1,
    title: "COMMANDE PASSÉE",
    desc: "Le client passe sa commande sur le site ou l'application du commerçant.",
    svg: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4H6Z" stroke="white" strokeWidth="1.8"/>
        <path d="M3 6h18" stroke="white" strokeWidth="1.8"/>
        <path d="M16 10a4 4 0 01-8 0" stroke="white" strokeWidth="1.8"/>
      </svg>
    ),
  },
  {
    num: 2,
    title: "PRODUIT +18 DÉTECTÉ",
    desc: "Un produit réglementé est identifié dans le panier. AgePass se déclenche automatiquement.",
    svg: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3" y="8" width="18" height="14" rx="2" stroke="white" strokeWidth="1.8"/>
        <path d="M8 8V6a4 4 0 018 0v2" stroke="white" strokeWidth="1.8"/>
        <circle cx="18" cy="8" r="5" fill="white" opacity="0"/>
        <text x="14" y="23" fontSize="7" fill="white" fontWeight="bold">18+</text>
      </svg>
    ),
  },
  {
    num: 3,
    title: "VÉRIFICATION DU TITULAIRE",
    desc: "Contrôle d'âge et d'éligibilité : pièce d'identité + vérification du titulaire (biométrie).",
    svg: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="2" y="5" width="14" height="10" rx="1.5" stroke="white" strokeWidth="1.8"/>
        <circle cx="6" cy="9" r="2" stroke="white" strokeWidth="1.5"/>
        <path d="M9 11h5M9 13h3" stroke="white" strokeWidth="1.2" strokeLinecap="round"/>
        <circle cx="19" cy="10" r="4" stroke="white" strokeWidth="1.5"/>
        <path d="M19 8v2l1.2 1.2" stroke="white" strokeWidth="1.2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    num: 4,
    title: "VALIDATION",
    desc: "La vérification est validée en temps réel. La session est activée.",
    svg: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 2L4 6v7c0 5 3.6 9.4 8 11 4.4-1.6 8-6 8-11V6L12 2Z" stroke="white" strokeWidth="1.8"/>
        <path d="M8 12l3 3 5-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    num: 6,
    title: "RETRAIT AUTORISÉ",
    desc: "Le QR Code est scanné au casier ou au point relais. Le casier s'ouvre, la commande est retirée.",
    svg: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="4" y="3" width="16" height="18" rx="2" stroke="white" strokeWidth="1.8"/>
        <rect x="7" y="7" width="4" height="4" rx="1" stroke="white" strokeWidth="1.5"/>
        <rect x="13" y="7" width="4" height="4" rx="1" stroke="white" strokeWidth="1.5"/>
        <rect x="7" y="13" width="4" height="4" rx="1" stroke="white" strokeWidth="1.5"/>
        <path d="M15 16l1.5 1.5 3-3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    num: 7,
    title: "PREUVE DE CONFORMITÉ ARCHIVÉE",
    desc: "La preuve horodatée de la remise est archivée et consultable en cas de besoin.",
    svg: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="4" y="2" width="16" height="20" rx="2" stroke="white" strokeWidth="1.8"/>
        <path d="M8 7h8M8 11h8M8 15h5" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M15 16.5l1.5 1.5 3-3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

const FEATURES = [
  { icon: "🔒", title: "Sécurisé", desc: "Vérification forte du titulaire et données protégées." },
  { icon: "📋", title: "Traçable", desc: "Chaque étape est horodatée et infalsifiable." },
  { icon: "✓", title: "Conforme", desc: "Aligné avec la réglementation et prêt pour les audits." },
  { icon: "⚡", title: "Rapide", desc: "Parcours fluide, en quelques secondes pour l'utilisateur." },
];

export function ApHowItWorks() {
  return (
    <section id="comment" className="py-28 lg:py-36" style={{ background: "var(--bg-subtle)" }}>
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease }}
          >
            <h2 className="text-[2.2rem] sm:text-[2.8rem] font-bold leading-[1.1] tracking-[-0.035em] text-[var(--text-primary)] mb-4">
              COMMENT{" "}
              <span style={gradText}>ÇA MARCHE</span> ?
            </h2>
            <p className="text-[var(--text-secondary)] leading-relaxed text-[1.05rem]">
              Un parcours simple, sécurisé et automatisé de la commande à la remise.
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
              AgePass sécurise chaque remise grâce à une vérification forte et une preuve de conformité archivée.
            </p>
          </motion.div>
        </div>

        {/* 7 steps layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16 items-start">

          {/* Steps 1-4 */}
          <div className="flex flex-col gap-4">
            {STEPS.slice(0, 4).map((step, i) => (
              <div key={step.num}>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, ease, delay: i * 0.08 }}
                  className="rounded-xl border p-4 bg-white flex gap-4 items-start"
                  style={{ borderColor: "var(--border-default)" }}
                >
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{ background: "var(--gradient-brand)" }}>
                    {step.svg}
                  </div>
                  <div>
                    <p className="text-[0.75rem] font-bold uppercase tracking-wider mb-1" style={{ color: "var(--color-brand-600)" }}>
                      {step.num}. {step.title}
                    </p>
                    <p className="text-[0.82rem] text-[var(--text-secondary)] leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
                {i < 3 && (
                  <div className="flex justify-center my-1">
                    <span className="text-[var(--text-tertiary)]">↓</span>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Step 5 — central */}
          <div className="flex flex-col items-center gap-4">
            <div className="rounded-2xl border p-5 bg-white w-full text-center" style={{ borderColor: "var(--color-brand-200)", boxShadow: "0 0 0 4px rgba(26,71,245,0.04)" }}>
              <p className="text-[0.75rem] font-bold uppercase tracking-wider mb-3" style={{ color: "var(--color-brand-600)" }}>5. QR CODE SÉCURISÉ</p>
              <p className="text-[0.82rem] text-[var(--text-secondary)] mb-4">Un QR Code unique et temporaire est généré et lié à la session validée.</p>
            </div>
            <AgePassPhone size="md" />
          </div>

          {/* Steps 6-7 */}
          <div className="flex flex-col gap-4">
            {STEPS.slice(4).map((step, i) => (
              <div key={step.num}>
                {i === 0 && (
                  <div className="flex justify-center mb-4">
                    <span className="text-[var(--text-tertiary)] font-bold">←</span>
                  </div>
                )}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, ease, delay: i * 0.1 }}
                  className="rounded-xl border p-4 bg-white flex gap-4 items-start"
                  style={{ borderColor: "var(--border-default)" }}
                >
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{ background: "var(--gradient-brand)" }}>
                    {step.svg}
                  </div>
                  <div>
                    <p className="text-[0.75rem] font-bold uppercase tracking-wider mb-1" style={{ color: "var(--color-brand-600)" }}>
                      {step.num}. {step.title}
                    </p>
                    <p className="text-[0.82rem] text-[var(--text-secondary)] leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
                {i < STEPS.slice(4).length - 1 && (
                  <div className="flex justify-center my-1">
                    <span className="text-[var(--text-tertiary)]">↓</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom 4 features */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {FEATURES.map((f) => (
            <div key={f.title} className="rounded-xl border p-5 bg-white" style={{ borderColor: "var(--border-default)" }}>
              <span className="text-2xl mb-3 block">{f.icon}</span>
              <p className="text-[0.85rem] font-bold text-[var(--text-primary)] mb-1">{f.title}</p>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
