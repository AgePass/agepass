"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

const gradText: React.CSSProperties = {
  background: "var(--gradient-brand)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
};

function LockerSVG() {
  return (
    <div className="relative flex items-center justify-center">
      <svg width="200" height="260" viewBox="0 0 200 260" fill="none" aria-hidden="true">
        <defs>
          <linearGradient id="pilotGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1a47f5"/>
            <stop offset="100%" stopColor="#7C3AED"/>
          </linearGradient>
        </defs>
        {/* Cabinet body */}
        <rect x="30" y="20" width="140" height="220" rx="10" fill="#F0F4FF" stroke="#C7D2FE" strokeWidth="2"/>
        {/* Locker grid: 4 rows x 3 cols */}
        {[0, 1, 2, 3].map((row) =>
          [0, 1, 2].map((col) => (
            <rect
              key={`${row}-${col}`}
              x={36 + col * 44}
              y={26 + row * 52}
              width={40}
              height={48}
              rx="4"
              fill="white"
              stroke="#C7D2FE"
              strokeWidth="1.2"
            />
          ))
        )}
        {/* Screen panel */}
        <rect x="50" y="230" width="100" height="6" rx="3" fill="#C7D2FE"/>
        {/* Badge circle */}
        <circle cx="155" cy="55" r="36" fill="url(#pilotGrad)" opacity="0.15"/>
        <circle cx="155" cy="55" r="30" fill="url(#pilotGrad)"/>
        <text x="155" y="50" textAnchor="middle" fill="white" fontSize="9" fontWeight="800">PILOTE</text>
        <text x="155" y="62" textAnchor="middle" fill="white" fontSize="9" fontWeight="800">GRATUIT</text>
        <text x="155" y="74" textAnchor="middle" fill="white/70" fontSize="7.5">2 MOIS</text>
      </svg>
    </div>
  );
}

const BOTTOM_FEATURES = [
  { icon: "🛡", title: "Conformité assurée", desc: "Respectez la réglementation et protégez les mineurs." },
  { icon: "📊", title: "Résultats mesurables", desc: "On analyse l'impact réel sur vos retraits." },
  { icon: "🚀", title: "Déploiement simple et rapide", desc: "Aucune refonte, aucun matériel." },
  { icon: "👥", title: "Accompagnement dédié", desc: "Une équipe à vos côtés à chaque étape." },
];

export function ApPilot() {
  const [role, setRole] = useState("");

  return (
    <section id="pilote" className="py-28 lg:py-36" style={{ background: "var(--bg-page)" }}>
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">

        {/* 3-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-16">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease }}
            className="flex flex-col gap-7"
          >
            <div>
              <span className="text-[11px] font-bold uppercase tracking-[0.12em] mb-3 block" style={{ color: "var(--color-brand-600)" }}>
                PILOTE GRATUIT
              </span>
              <h2 className="text-[2rem] sm:text-[2.4rem] font-bold leading-[1.1] tracking-[-0.035em] text-[var(--text-primary)]">
                Testez AgePass{" "}
                <span style={gradText} className="text-[3rem] sm:text-[3.5rem]">
                  2 mois, sans engagement.
                </span>
              </h2>
            </div>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              On configure AgePass sur un point de retrait existant et on mesure les résultats ensemble.
            </p>

            <div className="flex flex-col gap-4">
              {[
                { icon: "🛡", title: "100% gratuit pendant 2 mois", desc: "Sans engagement, sans frais cachés." },
                { icon: "🚀", title: "Déploiement rapide", desc: "On s'occupe de tout, vous gardez vos outils." },
                { icon: "📊", title: "Résultats mesurables", desc: "Impact réel sur vos retraits et votre conformité." },
              ].map((f) => (
                <div key={f.title} className="flex items-start gap-3">
                  <span className="text-xl shrink-0">{f.icon}</span>
                  <div>
                    <p className="font-bold text-sm text-[var(--text-primary)]">{f.title}</p>
                    <p className="text-sm text-[var(--text-secondary)]">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* CENTER */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease, delay: 0.1 }}
            className="flex items-center justify-center"
          >
            <LockerSVG />
          </motion.div>

          {/* RIGHT — Form card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease, delay: 0.15 }}
            className="rounded-2xl border p-7 bg-white"
            style={{ borderColor: "var(--border-default)", boxShadow: "var(--shadow-xl)" }}
          >
            <h3 className="text-[1.2rem] font-bold text-[var(--text-primary)] mb-1">Rejoignez la liste d&apos;attente.</h3>
            <p className="text-sm text-[var(--text-secondary)] mb-6">Soyez parmi les premiers à tester AgePass.</p>

            <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
              {[
                { type: "text", placeholder: "Votre prénom et nom", icon: "👤" },
                { type: "text", placeholder: "Enseigne / Entreprise", icon: "🏢" },
                { type: "email", placeholder: "Email professionnel", icon: "✉️" },
              ].map((field) => (
                <div key={field.placeholder} className="flex items-center gap-2.5 rounded-xl border px-4 py-3" style={{ borderColor: "var(--border-default)" }}>
                  <span className="text-base shrink-0">{field.icon}</span>
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    className="flex-1 text-sm outline-none bg-transparent placeholder:text-[var(--text-tertiary)] text-[var(--text-primary)]"
                  />
                </div>
              ))}

              <div className="flex items-center gap-2.5 rounded-xl border px-4 py-3" style={{ borderColor: "var(--border-default)" }}>
                <span className="text-base shrink-0">👁</span>
                <select
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="flex-1 text-sm outline-none bg-transparent text-[var(--text-secondary)]"
                >
                  <option value="">Vous êtes...</option>
                  <option value="enseigne">Enseigne / Retailer</option>
                  <option value="operateur">Opérateur de casiers</option>
                  <option value="editeur">Éditeur / Intégrateur</option>
                  <option value="autre">Autre</option>
                </select>
              </div>

              <div className="flex items-start gap-2.5 rounded-xl border px-4 py-3" style={{ borderColor: "var(--border-default)" }}>
                <span className="text-base shrink-0 mt-0.5">💬</span>
                <textarea
                  placeholder="Un mot sur votre projet ou réseau (optionnel)"
                  rows={3}
                  className="flex-1 text-sm outline-none bg-transparent placeholder:text-[var(--text-tertiary)] text-[var(--text-primary)] resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-full text-sm font-bold text-white transition-opacity hover:opacity-90"
                style={{ background: "var(--gradient-brand)" }}
              >
                Demander mon pilote →
              </button>
            </form>

            <p className="text-center text-[11px] text-[var(--text-tertiary)] mt-3">
              ⏱ Réponse sous 48h • Aucun engagement
            </p>
          </motion.div>
        </div>

        {/* Bottom 4 features */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {BOTTOM_FEATURES.map((f) => (
            <div key={f.title} className="rounded-xl border p-5 bg-white" style={{ borderColor: "var(--border-default)" }}>
              <span className="text-2xl mb-3 block">{f.icon}</span>
              <p className="text-[0.85rem] font-bold text-[var(--text-primary)] mb-1">{f.title}</p>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Footer line */}
        <div className="flex items-center justify-center gap-3 pt-6 border-t" style={{ borderColor: "var(--border-default)" }}>
          <svg width="20" height="20" viewBox="0 0 28 28" fill="none" aria-hidden="true">
            <defs>
              <linearGradient id="footerShieldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#1a47f5"/>
                <stop offset="100%" stopColor="#7C3AED"/>
              </linearGradient>
            </defs>
            <path d="M14 2L4 6.5V13.5C4 19.2 8.4 24.5 14 26C19.6 24.5 24 19.2 24 13.5V6.5L14 2Z" fill="url(#footerShieldGrad)"/>
            <path d="M10 13.5l2.5 2.5 5-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <p className="text-sm font-semibold text-[var(--text-secondary)]">
            AgePass, la couche de conformité qui s&apos;intègre partout.
          </p>
        </div>

      </div>
    </section>
  );
}
