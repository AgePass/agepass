"use client";

import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

const gradText: React.CSSProperties = {
  background: "var(--gradient-brand)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
};

const ENSEIGNE_BENEFITS = [
  { icon: "📅", title: "Anticipez les exigences DSA 2027", desc: "Le contrôle d'âge devient une obligation pour les parcours de retrait autonomes." },
  { icon: "🛡", title: "Protection renforcée des mineurs", desc: "Vérification de l'âge et du titulaire avant chaque remise." },
  { icon: "📄", title: "Conformité démontrable", desc: "Chaque remise est vérifiée, horodatée et archivée." },
  { icon: "⚡", title: "Développez vos parcours autonomes sereinement", desc: "Sans dépendre d'une présence humaine permanente." },
];

const OPERATOR_BENEFITS = [
  { title: "Aucun coût d'intégration pour l'opérateur", desc: "La relation commerciale AgePass est directement établie avec l'enseigne utilisatrice." },
  { title: "Un nouvel argument commercial", desc: "Proposez des points de retrait conformes dès leur déploiement." },
  { title: "De nouveaux marchés adressables", desc: "Accédez à des enseignes qui ne pouvaient jusqu'ici pas envisager le retrait autonome." },
  { title: "Plus de valeur par installation", desc: "Vous ne livrez plus seulement un casier. Vous livrez un point de retrait conforme." },
];

const DESTINATION_TYPES = [
  { icon: "💊", label: "PHARMACIES" },
  { icon: "🌿", label: "CBD SHOPS" },
  { icon: "🍷", label: "CAVISTES & PRODUCTEURS" },
  { icon: "🏪", label: "AUTRES ACTIVITÉS SOUMISES À RESTRICTION D'ÂGE" },
];

function LockerIllustration() {
  return (
    <svg width="160" height="200" viewBox="0 0 160 200" fill="none" aria-hidden="true">
      {/* Cabinet */}
      <rect x="20" y="30" width="120" height="155" rx="6" fill="#F0F4FF" stroke="#C7D2FE" strokeWidth="1.5"/>
      {/* Rows of lockers */}
      {[0, 1, 2, 3].map((row) => (
        [0, 1, 2].map((col) => (
          <rect
            key={`${row}-${col}`}
            x={24 + col * 38}
            y={34 + row * 37}
            width={34}
            height={33}
            rx="3"
            fill="white"
            stroke="#C7D2FE"
            strokeWidth="1"
          />
        ))
      ))}
      {/* Screen panel on front */}
      <rect x="45" y="158" width="70" height="22" rx="4" fill="white" stroke="#A5B4FC" strokeWidth="1"/>
      {/* AgePass shield on screen */}
      <path d="M77 161.5L72 163.5v3.5c0 2.2 2 4.2 5 5.2 3-1 5-3 5-5.2v-3.5Z" fill="url(#lockerGrad)"/>
      <defs>
        <linearGradient id="lockerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1a47f5"/>
          <stop offset="100%" stopColor="#7C3AED"/>
        </linearGradient>
      </defs>
      {/* Badge overlay */}
      <circle cx="80" cy="50" r="24" fill="url(#lockerGrad)"/>
      <text x="80" y="47" textAnchor="middle" fill="white" fontSize="7" fontWeight="bold">PILOTE</text>
      <text x="80" y="56" textAnchor="middle" fill="white" fontSize="7" fontWeight="bold">GRATUIT</text>
    </svg>
  );
}

export function ApPartners() {
  return (
    <section className="py-28 lg:py-36" style={{ background: "var(--bg-subtle)" }}>
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease }}
          className="mb-16"
        >
          <h2 className="text-[2.2rem] sm:text-[2.8rem] font-bold leading-[1.1] tracking-[-0.035em] text-[var(--text-primary)]">
            POURQUOI VOS{" "}
            <span style={gradText}>PARTENAIRES</span>{" "}
            ONT INTÉRÊT À L&apos;ADOPTER
          </h2>
        </motion.div>

        {/* 2-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">

          {/* LEFT: Pour les enseignes */}
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.12em] mb-2" style={{ color: "var(--color-brand-600)" }}>POUR LES ENSEIGNES</p>
            <p className="text-[var(--text-secondary)] text-sm mb-6">Préparez vos parcours autonomes aux exigences de demain.</p>

            <div className="flex flex-col gap-5 mb-8">
              {ENSEIGNE_BENEFITS.map((b) => (
                <div key={b.title} className="flex items-start gap-4">
                  <span className="text-2xl shrink-0">{b.icon}</span>
                  <div>
                    <p className="font-bold text-sm text-[var(--text-primary)]">{b.title}</p>
                    <p className="text-sm text-[var(--text-secondary)] mt-0.5">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* DSA badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 text-sm font-semibold text-white" style={{ background: "var(--gradient-brand)" }}>
              📅 DSA 2027 — ENTRÉE EN VIGUEUR 2027
            </div>

            <div className="flex items-center gap-4 mb-8">
              <LockerIllustration />
              <blockquote className="text-[1.05rem] font-semibold italic leading-relaxed text-[var(--text-primary)]">
                &laquo; La commande est automatisée. La conformité doit l&apos;être aussi. &raquo;
              </blockquote>
            </div>
          </div>

          {/* Vertical separator */}
          <div className="relative">
            <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-px" style={{ background: "var(--border-default)" }} />
            <div className="lg:pl-12">
              <p className="text-[11px] font-bold uppercase tracking-[0.12em] mb-2" style={{ color: "var(--color-brand-600)" }}>POUR LES OPÉRATEURS DE CASIERS</p>
              <p className="text-[var(--text-secondary)] text-sm mb-6">Déployez vos casiers là où ce n&apos;était pas encore possible.</p>

              {/* 4 destination types 2x2 */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                {DESTINATION_TYPES.map((d) => (
                  <div key={d.label} className="rounded-xl border p-4 bg-white flex items-center gap-2" style={{ borderColor: "var(--border-default)" }}>
                    <span className="text-xl">{d.icon}</span>
                    <span className="text-[0.75rem] font-bold text-[var(--text-secondary)]">{d.label}</span>
                  </div>
                ))}
              </div>

              <div className="rounded-xl p-4 mb-6 text-center font-bold text-sm" style={{ background: "var(--gradient-brand)", color: "white" }}>
                DÉPLOYEZ VOS CASIERS LÀ OÙ CE N&apos;ÉTAIT PAS ENCORE POSSIBLE
              </div>

              <div className="flex flex-col gap-4">
                {OPERATOR_BENEFITS.map((b) => (
                  <div key={b.title} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5" style={{ background: "var(--gradient-brand)" }}>
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                        <path d="M2 5l2 2 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div>
                      <p className="font-bold text-sm text-[var(--text-primary)]">{b.title}</p>
                      <p className="text-sm text-[var(--text-secondary)] mt-0.5 leading-relaxed">{b.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom full-width bar */}
        <div className="rounded-2xl p-6 lg:p-8 text-center" style={{ background: "var(--gradient-brand)" }}>
          <p className="text-white font-bold text-[1.1rem] mb-4">UNE MÊME TECHNOLOGIE. DEUX ACCÉLÉRATEURS DE CROISSANCE.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
            <span className="text-white/80 text-sm">Conformité et déploiement pour les enseignes</span>
            <span className="text-white/40 hidden sm:block">|</span>
            <span className="text-white/80 text-sm">Nouveaux marchés et nouveaux revenus pour les opérateurs de casiers</span>
          </div>
        </div>

      </div>
    </section>
  );
}
