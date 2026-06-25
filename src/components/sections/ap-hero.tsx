"use client";

import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

function ShieldIllustration() {
  return (
    <div className="relative flex items-center justify-center w-full h-full min-h-[400px]">
      <div
        className="absolute rounded-full"
        style={{
          width: 340,
          height: 340,
          background: "radial-gradient(circle, rgba(26,71,245,0.08) 0%, rgba(124,58,237,0.04) 60%, transparent 100%)",
        }}
      />
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        style={{ filter: "drop-shadow(0 24px 40px rgba(26,71,245,0.18))" }}
      >
        <svg width="220" height="260" viewBox="0 0 220 260" fill="none" aria-hidden="true">
          <defs>
            <linearGradient id="heroShieldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1a47f5" />
              <stop offset="100%" stopColor="#7C3AED" />
            </linearGradient>
          </defs>
          <path
            d="M110 10L20 46V120C20 175 62 222 110 238C158 222 200 175 200 120V46L110 10Z"
            fill="url(#heroShieldGrad)"
          />
          <rect x="90" y="118" width="40" height="32" rx="5" fill="white" opacity="0.95"/>
          <path d="M99 118V109C99 99 121 99 121 109V118" stroke="white" strokeWidth="6" strokeLinecap="round" fill="none" opacity="0.95"/>
          <circle cx="110" cy="133" r="5" fill="url(#heroShieldGrad)"/>
          <rect x="108" y="133" width="4" height="8" rx="2" fill="url(#heroShieldGrad)"/>
        </svg>
      </motion.div>
    </div>
  );
}

const PILLARS = [
  { icon: "🛡", label: "Protection des mineurs" },
  { icon: "📦", label: "Retrait autonome" },
  { icon: "✓", label: "Conformité vérifiable" },
  { icon: "⏱", label: "DSA 2027" },
];

export function ApHero() {
  return (
    <section className="relative min-h-screen flex flex-col" style={{ background: "var(--bg-page)" }}>
      <div className="flex-1 max-w-[1280px] mx-auto px-6 lg:px-12 w-full pt-28 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[70vh]">

          {/* LEFT COLUMN */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease }}
            className="flex flex-col gap-8"
          >
            <div className="flex items-center gap-3">
              <div className="h-[2px] w-8 rounded-full" style={{ background: "var(--gradient-brand)" }} />
              <span className="text-[11px] font-bold uppercase tracking-[0.12em]" style={{ color: "var(--color-brand-600)" }}>
                Infrastructure de conformité
              </span>
            </div>

            <h1 className="text-[2.6rem] sm:text-[3.2rem] lg:text-[3.6rem] font-bold leading-[1.07] tracking-[-0.04em] text-[var(--text-primary)]">
              La couche de conformité du{" "}
              <span
                style={{
                  background: "var(--gradient-brand)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                retrait autonome.
              </span>
            </h1>

            <ul className="flex flex-col gap-4 list-none p-0 m-0">
              {([
                { text: "Vérifier l'âge.", svg: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="8" r="4" stroke="white" strokeWidth="2"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke="white" strokeWidth="2" strokeLinecap="round"/></svg> },
                { text: "Vérifier la personne.", svg: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 2L4 6v7c0 5 3.6 9.4 8 11 4.4-1.6 8-6 8-11V6L12 2Z" stroke="white" strokeWidth="2"/><path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg> },
                { text: "Prouver la remise.", svg: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="3" y="4" width="18" height="16" rx="2" stroke="white" strokeWidth="2"/><rect x="7" y="8" width="5" height="5" rx="0.5" stroke="white" strokeWidth="1.5"/><path d="M14 9h3M14 12h3M7 16h10" stroke="white" strokeWidth="1.5" strokeLinecap="round"/></svg> },
              ] as { text: string; svg: React.ReactNode }[]).map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style={{ background: "var(--gradient-brand)" }}>
                    {item.svg}
                  </div>
                  <span className="text-[1.05rem] font-semibold text-[var(--text-primary)]">{item.text}</span>
                </li>
              ))}
            </ul>

            <div className="h-[3px] w-20 rounded-full" style={{ background: "var(--gradient-brand)" }} />

            <div className="flex flex-wrap gap-4">
              <a
                href="#pilote"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-[0.95rem] font-semibold text-white shadow-md transition-opacity hover:opacity-90"
                style={{ background: "var(--gradient-brand)" }}
              >
                Demander un pilote →
              </a>
              <a
                href="#comment"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-[0.95rem] font-semibold border transition-colors hover:bg-[var(--bg-subtle)]"
                style={{ borderColor: "var(--border-default)", color: "var(--text-secondary)" }}
              >
                Comment ça marche
              </a>
            </div>
          </motion.div>

          {/* RIGHT COLUMN */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease, delay: 0.15 }}
            className="flex items-center justify-center"
          >
            <ShieldIllustration />
          </motion.div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t w-full" style={{ borderColor: "var(--border-default)" }}>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 sm:grid-cols-4 divide-x" style={{ borderColor: "var(--border-default)" }}>
            {PILLARS.map((p) => (
              <div key={p.label} className="flex items-center gap-2.5 py-5 px-6">
                <span className="text-lg">{p.icon}</span>
                <span className="text-[0.8rem] font-semibold text-[var(--text-secondary)]">{p.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
