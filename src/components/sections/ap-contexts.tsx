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

const LEFT_CASES = [
  {
    title: "CASIERS AUTONOMES",
    sub: "Retrait 24/7 sans personnel",
    bullets: [
      "Pickup, Ouidrop et consignes privées",
      "Retrait de commandes à toute heure sans file d'attente",
      "Retrait de courses à toute heure en toute conformité",
      "Idéal pour les zones à forte affluence",
    ],
  },
  {
    title: "DRIVE AUTONOME 24/7",
    sub: "Retrait sans personnel",
    bullets: [
      "Consignes alimentaires et nouvelle génération",
      "Retrait de courses à toute heure en toute conformité",
      "Parcours client 100% autonome",
    ],
  },
  {
    title: "CAVISTES & PRODUCTEURS",
    sub: "Click & Collect autonome",
    bullets: [
      "Consignes pour boissons alcoolisées",
      "Cavistes, producteurs, distributeurs",
      "Retrait après validation d'âge",
      "Conformité assurée à chaque retrait",
    ],
  },
];

const RIGHT_CASES = [
  {
    title: "CBD SHOP",
    sub: "Produits réservés aux majeurs",
    bullets: [
      "Produits soumis à restriction d'âge",
      "Vente en ligne",
      "Retrait autonome en consigne",
      "Contrôle d'âge avant remise",
    ],
  },
  {
    title: "MAGASINS AUTONOMES",
    sub: "Concepts sans personnel",
    bullets: [
      "Shopic, Leclerc Express et autres magasins autonomes",
      "Accès et achat sans caisse",
      "Conformité intégrée au parcours",
    ],
  },
  {
    title: "PHARMACIES & PARAPHARMACIES",
    sub: "Retrait autonome de produits réglementés",
    bullets: [
      "Développement de casiers de retrait",
      "Retrait sans personnel",
      "Contrôle d'âge et d'éligibilité avant remise",
      "Conformité intégrée au parcours",
    ],
  },
];

const FEATURES = [
  { icon: "🔒", title: "Sécurisé" },
  { icon: "📋", title: "Traçable" },
  { icon: "✓", title: "Conforme" },
  { icon: "⚡", title: "Rapide" },
];

function UseCaseCard({ title, sub, bullets }: { title: string; sub: string; bullets: string[] }) {
  return (
    <div className="rounded-xl border p-5 bg-white" style={{ borderColor: "var(--border-default)" }}>
      <p className="text-[0.85rem] font-bold mb-0.5" style={gradText}>{title}</p>
      <p className="text-[0.78rem] text-[var(--text-tertiary)] mb-3">{sub}</p>
      <ul className="flex flex-col gap-1.5 list-none p-0 m-0">
        {bullets.map((b) => (
          <li key={b} className="flex items-start gap-2 text-[0.82rem] text-[var(--text-secondary)]">
            <span className="shrink-0" style={{ color: "var(--color-brand-600)" }}>•</span>
            {b}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function ApContexts() {
  return (
    <section id="usage" className="py-28 lg:py-36" style={{ background: "var(--bg-page)" }}>
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
              OÙ UTILISER{" "}
              <span style={gradText}>AGEPASS</span> ?
            </h2>
            <p className="text-[var(--text-secondary)] leading-relaxed text-[1.05rem]">
              AgePass s&apos;intègre partout où la vérification d&apos;âge et d&apos;éligibilité doit être réalisée sans intervention humaine.
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
              Une seule infrastructure, pour sécuriser tous vos retraits sans contrôle humain.
            </p>
          </motion.div>
        </div>

        {/* 3-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16 items-start">

          {/* Left use cases */}
          <div className="flex flex-col gap-4">
            {LEFT_CASES.map((c) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, ease }}
              >
                <UseCaseCard {...c} />
              </motion.div>
            ))}
          </div>

          {/* Center — phone */}
          <div className="flex flex-col items-center gap-6">
            <p className="text-center font-bold text-[1.05rem]" style={gradText}>
              Une seule infrastructure. Tous les retraits sans contrôle humain.
            </p>
            <AgePassPhone size="md" />
          </div>

          {/* Right use cases */}
          <div className="flex flex-col gap-4">
            {RIGHT_CASES.map((c) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, ease }}
              >
                <UseCaseCard {...c} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom 4 features */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {FEATURES.map((f) => (
            <div key={f.title} className="flex items-center gap-2.5 rounded-xl border p-4 bg-white" style={{ borderColor: "var(--border-default)" }}>
              <span className="text-xl">{f.icon}</span>
              <span className="font-semibold text-sm text-[var(--text-secondary)]">{f.title}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
