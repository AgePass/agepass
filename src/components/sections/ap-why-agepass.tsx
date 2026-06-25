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

const TODAY_STEPS = [
  { text: "Je certifie avoir plus de 18 ans (case à cocher)", icon: "☐" },
  { text: "Commande préparée", icon: "↓" },
  { text: "Retrait autonome (Drive, casier, point relais...)", icon: "↓" },
];

const TODAY_RISKS = [
  "Aucun contrôle au moment de la remise",
  "Aucun personnel sur place",
  "Un mineur peut récupérer la commande",
  "Risque réglementaire pour l'enseigne",
];

const AGEPASS_STEPS = [
  { text: "Commande validée" },
  { text: "Contrôle d'âge et d'éligibilité" },
  { text: "QR Code sécurisé (Généré uniquement après approbation)" },
  { text: "Validité limitée dans le temps" },
  { text: "Retrait autorisé" },
  { text: "Preuve de conformité archivée (Horodatée et consultable)" },
];

const ATTRIBUTES = [
  { title: "LA BONNE PERSONNE", desc: "Seule la personne autorisée peut retirer la commande." },
  { title: "LA BONNE COMMANDE", desc: "Le QR Code est lié à une commande validée et contrôlée." },
  { title: "AU BON MOMENT", desc: "Un QR Code à durée limitée pour empêcher tout usage abusif." },
  { title: "AVEC UNE PREUVE", desc: "Chaque remise est tracée et archivée pour vos audits." },
];

const PILLARS = [
  { icon: "🛡", title: "SÉCURISÉE", desc: "Données et accès protégés" },
  { icon: "📄", title: "TRAÇABLE", desc: "Historique complet et infalsifiable" },
  { icon: "🏛", title: "CONFORME", desc: "Alignée avec la réglementation et prête pour les audits" },
];

export function ApWhyAgepass() {
  return (
    <section className="py-28 lg:py-36" style={{ background: "var(--bg-page)" }}>
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease }}
          className="mb-6"
        >
          <h2 className="text-[2.2rem] sm:text-[2.8rem] font-bold leading-[1.1] tracking-[-0.035em] text-[var(--text-primary)] mb-6">
            POURQUOI{" "}
            <span style={gradText}>AGEPASS</span> ?
          </h2>
          <p className="text-[var(--text-secondary)] leading-relaxed text-[1.05rem] max-w-[640px]">
            Une simple déclaration ne permet pas de vérifier qui récupère réellement un produit réglementé. AgePass transforme cette déclaration en une autorisation vérifiée, traçable et prouvable.
          </p>
        </motion.div>

        {/* 3 Pillars strip */}
        <div className="grid grid-cols-3 gap-4 mb-14">
          {PILLARS.map((p) => (
            <div key={p.title} className="rounded-xl border p-4 flex flex-col gap-2 bg-white" style={{ borderColor: "var(--border-default)" }}>
              <div className="flex items-center gap-2">
                <span className="text-lg">{p.icon}</span>
                <span className="text-[0.8rem] font-bold uppercase tracking-wider" style={{ color: "var(--color-brand-600)" }}>{p.title}</span>
              </div>
              <p className="text-sm text-[var(--text-secondary)]">{p.desc}</p>
            </div>
          ))}
        </div>

        {/* Main 3-column comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">

          {/* TODAY */}
          <div className="rounded-2xl border p-6 bg-red-50" style={{ borderColor: "#FCA5A5" }}>
            <div className="flex items-center gap-2 mb-5">
              <span className="text-xl">❌</span>
              <p className="text-[0.85rem] font-bold text-red-700">AUJOURD&apos;HUI — Une déclaration, aucun contrôle.</p>
            </div>
            <div className="flex flex-col gap-3 mb-5">
              {TODAY_STEPS.map((s) => (
                <div key={s.text} className="flex items-start gap-2">
                  <span className="text-[var(--text-tertiary)] font-bold mt-0.5">{s.icon}</span>
                  <span className="text-sm text-[var(--text-secondary)]">{s.text}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-2.5">
              {TODAY_RISKS.map((r) => (
                <div key={r} className="flex items-start gap-2 px-3 py-2 rounded-lg bg-red-100 border border-red-200">
                  <span className="text-amber-600 text-sm shrink-0">⚠</span>
                  <span className="text-[0.82rem] text-red-800">{r}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Center — VS + Phone */}
          <div className="flex flex-col items-center justify-center gap-6">
            <span className="text-[2.5rem] font-black text-[var(--text-tertiary)]">VS</span>
            <AgePassPhone size="md" />
          </div>

          {/* AVEC AGEPASS */}
          <div className="rounded-2xl border p-6" style={{ borderColor: "var(--color-brand-200)", background: "var(--color-brand-50)" }}>
            <div className="flex items-center gap-2 mb-5">
              <span className="text-xl">✓</span>
              <p className="text-[0.85rem] font-bold" style={{ color: "var(--color-brand-700)" }}>AVEC AGEPASS — Une autorisation vérifiée, traçable et limitée dans le temps.</p>
            </div>
            <div className="flex flex-col gap-2.5">
              {AGEPASS_STEPS.map((s) => (
                <div key={s.text} className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5" style={{ background: "var(--gradient-brand)" }}>
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                      <path d="M2 5l2 2 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-sm text-[var(--text-secondary)]">{s.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom 4 attributes */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {ATTRIBUTES.map((a) => (
            <div key={a.title} className="rounded-xl border p-5 bg-white" style={{ borderColor: "var(--border-default)" }}>
              <p className="text-[0.75rem] font-bold uppercase tracking-wider mb-2" style={{ color: "var(--color-brand-600)" }}>{a.title}</p>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{a.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
