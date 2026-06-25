"use client";

import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

const gradText: React.CSSProperties = {
  background: "var(--gradient-brand)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
};

const CITIES = [
  { name: "Paris", x: 52, y: 28 },
  { name: "Lille", x: 50, y: 12 },
  { name: "Strasbourg", x: 74, y: 26 },
  { name: "Lyon", x: 60, y: 58 },
  { name: "Marseille", x: 58, y: 78 },
  { name: "Bordeaux", x: 28, y: 66 },
  { name: "Toulouse", x: 40, y: 74 },
  { name: "Nantes", x: 24, y: 44 },
  { name: "Rennes", x: 20, y: 32 },
  { name: "Nice", x: 70, y: 75 },
];

function FranceMapSVG() {
  const cx = 50;
  const cy = 48;
  return (
    <svg viewBox="0 0 100 100" className="w-full max-w-[320px]" aria-hidden="true">
      <defs>
        <linearGradient id="mapLineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1a47f5" />
          <stop offset="100%" stopColor="#7C3AED" />
        </linearGradient>
      </defs>
      {/* France outline (simplified hexagon) */}
      <path
        d="M25 10 L72 8 L88 30 L82 72 L58 90 L28 88 L8 65 L10 35 Z"
        fill="#F0F4FF"
        stroke="#C7D2FE"
        strokeWidth="0.8"
      />
      {/* Lines from center to cities */}
      {CITIES.map((c) => (
        <line
          key={c.name}
          x1={cx}
          y1={cy}
          x2={c.x}
          y2={c.y}
          stroke="url(#mapLineGrad)"
          strokeWidth="0.5"
          strokeDasharray="2 1"
          opacity="0.6"
        />
      ))}
      {/* City dots */}
      {CITIES.map((c) => (
        <circle key={c.name} cx={c.x} cy={c.y} r="1.8" fill="#1a47f5" opacity="0.8" />
      ))}
      {/* Central AgePass node */}
      <circle cx={cx} cy={cy} r="7" fill="url(#mapLineGrad)" opacity="0.15" />
      <circle cx={cx} cy={cy} r="4" fill="url(#mapLineGrad)" />
      {/* Shield icon at center */}
      <path
        d={`M${cx} ${cy - 2.5}L${cx - 2.5} ${cy - 1}v2.5c0 1.2 1 2.2 2.5 2.8c1.5-.6 2.5-1.6 2.5-2.8v-2.5Z`}
        fill="white"
        opacity="0.9"
      />
    </svg>
  );
}

const CHECKLIST = [
  { title: "Aucune refonte du SI", desc: "Intégration simple via API." },
  { title: "Aucun nouveau matériel", desc: "Compatible avec vos casiers existants." },
  { title: "Aucun changement du parcours client", desc: "Expérience utilisateur inchangée." },
  { title: "Accompagnement au déploiement", desc: "Une équipe à vos côtés à chaque étape." },
];

const SCALE_LEVELS = [
  { icon: "🏪", title: "1 POINT DE RETRAIT", desc: "Votre premier point de retrait conforme." },
  { icon: "🏪", title: "RÉSEAU LOCAL", desc: "Déployez facilement sur plusieurs sites." },
  { icon: "🏢", title: "RÉSEAU RÉGIONAL", desc: "Un déploiement structuré et maîtrisé." },
  { icon: "🌐", title: "RÉSEAU NATIONAL", desc: "Passez à l'échelle en toute simplicité." },
  { icon: "🏬", title: "MULTI-ENSEIGNES", desc: "Une solution adaptée à tous vos formats." },
];

const PROGRESSION = [
  "1 point de retrait",
  "Quelques points de retrait",
  "Un réseau régional",
  "Un déploiement national",
];

const FEATURES = [
  { icon: "⚡", title: "Déploiement rapide", desc: "Quelques jours à quelques semaines." },
  { icon: "🔧", title: "Compatible avec l'existant", desc: "S'intègre avec vos outils et partenaires actuels." },
  { icon: "🔒", title: "Sécurisé & conforme", desc: "Données protégées. Conformité assurée." },
  { icon: "👥", title: "Accompagnement dédié", desc: "Une équipe à vos côtés à chaque étape." },
];

export function ApDeployment() {
  return (
    <section className="py-28 lg:py-36" style={{ background: "var(--bg-page)" }}>
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease }}
          className="mb-16"
        >
          <h2 className="text-[2.2rem] sm:text-[2.8rem] font-bold leading-[1.1] tracking-[-0.035em] text-[var(--text-primary)] mb-4">
            PENSÉ POUR LE{" "}
            <span style={gradText}>DÉPLOIEMENT.</span>
          </h2>
          <p className="text-[var(--text-secondary)] leading-relaxed text-[1.05rem] max-w-[540px]">
            Une seule intégration, du commerce indépendant aux réseaux nationaux.
          </p>
        </motion.div>

        {/* 3-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">

          {/* LEFT: checklist */}
          <div className="flex flex-col gap-5">
            {CHECKLIST.map((item) => (
              <div key={item.title} className="flex items-start gap-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: "var(--gradient-brand)" }}
                >
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                    <path d="M3 9l4 4 8-8" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-[var(--text-primary)] text-sm">{item.title}</p>
                  <p className="text-sm text-[var(--text-secondary)] mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CENTER: France map */}
          <div className="flex flex-col items-center gap-4">
            <FranceMapSVG />
            <div className="text-center">
              <p className="text-[0.85rem] font-bold" style={gradText}>AGEPASS</p>
              <p className="text-[0.78rem] text-[var(--text-tertiary)]">La couche de conformité qui s&apos;intègre partout.</p>
            </div>
          </div>

          {/* RIGHT: scale levels */}
          <div className="flex flex-col gap-3">
            {SCALE_LEVELS.map((s) => (
              <div key={s.title} className="rounded-xl border p-4 flex items-center gap-3 bg-white" style={{ borderColor: "var(--border-default)" }}>
                <span className="text-xl">{s.icon}</span>
                <div>
                  <p className="text-[0.78rem] font-bold uppercase tracking-wider" style={{ color: "var(--color-brand-600)" }}>{s.title}</p>
                  <p className="text-[0.8rem] text-[var(--text-secondary)]">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom progression */}
        <div className="rounded-2xl border p-6 lg:p-8 mb-10" style={{ background: "var(--bg-subtle)", borderColor: "var(--border-default)" }}>
          <p className="text-[0.85rem] font-bold uppercase tracking-wider text-[var(--text-primary)] mb-6 text-center">UNE SOLUTION QUI GRANDIT AVEC VOUS</p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {PROGRESSION.map((p, i) => (
              <div key={p} className="flex items-center gap-3">
                <div className="px-4 py-2 rounded-full text-sm font-semibold" style={{ background: "var(--gradient-brand)", color: "white" }}>
                  {p}
                </div>
                {i < PROGRESSION.length - 1 && <span className="text-[var(--text-tertiary)] font-bold">→</span>}
              </div>
            ))}
          </div>
        </div>

        {/* 4 features */}
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
