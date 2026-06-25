"use client";

import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

const gradText: React.CSSProperties = {
  background: "var(--gradient-brand)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
};

function EuStars() {
  const stars = Array.from({ length: 12 });
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" aria-hidden="true">
      {stars.map((_, i) => {
        const angle = (i * 30 - 90) * (Math.PI / 180);
        const x = 18 + 14 * Math.cos(angle);
        const y = 18 + 14 * Math.sin(angle);
        return <circle key={i} cx={x} cy={y} r="2.2" fill="#FFD700" />;
      })}
    </svg>
  );
}

export function ApWhyNow() {
  return (
    <section id="pourquoi" className="py-28 lg:py-36" style={{ background: "var(--bg-subtle)" }}>
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease }}
          >
            <span className="text-[11px] font-bold uppercase tracking-[0.12em] mb-4 block" style={{ color: "var(--color-brand-600)" }}>
              Pourquoi maintenant
            </span>
            <h2 className="text-[2.2rem] sm:text-[2.8rem] font-bold leading-[1.1] tracking-[-0.035em] text-[var(--text-primary)] mb-4">
              POURQUOI{" "}
              <span style={gradText}>MAINTENANT</span> ?
            </h2>
            <p className="text-[var(--text-secondary)] leading-relaxed text-[1.05rem]">
              Le retrait autonome change d&apos;échelle. La conformité doit suivre.
            </p>
          </motion.div>

          {/* DSA 2027 Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease, delay: 0.1 }}
            className="rounded-2xl border p-6 bg-white"
            style={{ borderColor: "var(--border-default)", boxShadow: "var(--shadow-md)" }}
          >
            <div className="flex items-start gap-4">
              <div className="shrink-0">
                <EuStars />
              </div>
              <div>
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-[2.2rem] font-bold" style={gradText}>2027</span>
                  <span className="text-[0.7rem] font-bold uppercase tracking-wider text-[var(--text-tertiary)]">ÉVOLUTIONS RÉGLEMENTAIRES EUROPÉENNES</span>
                </div>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  Le Digital Services Act (DSA) renforce les obligations de protection des mineurs et de contrôle d&apos;âge pour les services en ligne.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Main grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">

          {/* Left: Company cards */}
          <div className="flex flex-col gap-4">
            {[
              {
                name: "pickup",
                nameStyle: { color: "#F97316", fontWeight: 800 } as React.CSSProperties,
                text: "+6 000 consignes en France déployées par Pickup¹ et la croissance continue.",
                footnote: "¹ Pickup / Geopost – Communiqué de presse – mai 2024",
              },
              {
                name: "ouidrop",
                nameStyle: { color: "var(--color-brand-600)", fontWeight: 800 } as React.CSSProperties,
                text: "7 M€ levés en 2024². Pour industrialiser et accélérer le déploiement de ses solutions de retrait autonome.",
                footnote: "² Ouidrop – Communiqué de presse – avril 2024",
              },
              {
                name: "pickup Fresh",
                nameStyle: { color: "#0EA5E9", fontWeight: 800 } as React.CSSProperties,
                text: "Des consignes réfrigérées lancées pour l'alimentaire et le click & collect.",
                footnote: null,
              },
            ].map((card) => (
              <div key={card.name} className="rounded-xl border p-5 bg-white" style={{ borderColor: "var(--border-default)" }}>
                <span className="text-[1rem]" style={card.nameStyle}>{card.name}</span>
                <p className="text-sm text-[var(--text-secondary)] mt-2 leading-relaxed">{card.text}</p>
                {card.footnote && <p className="text-[10px] text-[var(--text-tertiary)] mt-2">{card.footnote}</p>}
              </div>
            ))}
          </div>

          {/* Center: 2 stat boxes */}
          <div className="flex flex-col gap-4">
            <div className="rounded-xl border p-5 bg-white flex-1" style={{ borderColor: "var(--border-default)" }}>
              <p className="text-[10px] font-bold uppercase tracking-wider text-[var(--text-tertiary)] mb-2">LE CASIER FRANÇAIS EN FORTE CROISSANCE</p>
              <p className="text-[3.5rem] font-bold leading-none tracking-[-0.04em] mb-2" style={gradText}>+45%</p>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">de croissance du nombre de casiers en France entre 2023 et 2024²</p>
            </div>
            <div className="rounded-xl border p-5 bg-white flex-1" style={{ borderColor: "var(--border-default)" }}>
              <p className="text-[10px] font-bold uppercase tracking-wider text-[var(--text-tertiary)] mb-2">LE MARCHÉ EUROPÉEN ACCÉLÈRE</p>
              <p className="text-[3rem] font-bold leading-none tracking-[-0.04em] mb-2" style={gradText}>155 000+</p>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">consignes automatiques en Europe fin 2024, soit +29% sur un an³</p>
              <p className="text-[10px] text-[var(--text-tertiary)] mt-2">³ EIA – European Parcel Market Report 2024</p>
            </div>
          </div>

          {/* Right: 2 more stat boxes */}
          <div className="flex flex-col gap-4">
            <div className="rounded-xl border p-5 bg-white flex-1" style={{ borderColor: "var(--border-default)" }}>
              <p className="text-[0.75rem] font-bold text-[var(--text-tertiary)] mb-1">E.Leclerc — FORCE ACCÉLÉRATION</p>
              <p className="text-[3.5rem] font-bold leading-none tracking-[-0.04em] mb-2" style={gradText}>+35%</p>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">d&apos;augmentation du nombre de magasins autonomes en centre-ville entre 2023 et 2024´</p>
              <p className="text-[10px] text-[var(--text-tertiary)] mt-2">´ E.Leclerc – Rapport d&apos;activité 2024</p>
            </div>
            <div className="rounded-xl border p-5 bg-white flex-1" style={{ borderColor: "var(--border-default)" }}>
              <p className="text-[0.75rem] font-bold text-[var(--text-secondary)] mb-1">Shopic — LES CADDIES SHOPIC ARRIVENT EN 2027</p>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed mt-2">Des caddies autonomes pour des courses sans caisse ni personnel.</p>
            </div>
          </div>
        </div>

        {/* Flow diagram */}
        <div className="rounded-2xl border p-6 lg:p-8 bg-white mb-12" style={{ borderColor: "var(--border-default)" }}>
          <div className="flex flex-wrap items-center gap-3 justify-center">
            {[
              { icon: "✓", label: "Commande digitalisée", color: "var(--color-brand-600)" },
              { icon: "✓", label: "Paiement digitalisé", color: "var(--color-brand-600)" },
              { icon: "✓", label: "Retrait automatisé", color: "var(--color-brand-600)" },
              { icon: "⚠", label: "Contrôle d'âge souvent limité à une simple déclaration", color: "#F59E0B", warn: true },
            ].map((step, i) => (
              <div key={i} className="flex items-center gap-3">
                <div
                  className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold"
                  style={{
                    background: step.warn ? "#FFF7ED" : "var(--color-brand-50)",
                    color: step.warn ? "#B45309" : "var(--color-brand-700)",
                    border: `1px solid ${step.warn ? "#FDE68A" : "var(--color-brand-200)"}`,
                  }}
                >
                  <span>{step.icon}</span>
                  <span>{step.label}</span>
                </div>
                {i < 3 && <span className="text-[var(--text-tertiary)] font-bold">→</span>}
              </div>
            ))}
            <span className="text-[var(--text-tertiary)] font-bold mx-2">→</span>
            <div
              className="flex items-center gap-3 px-5 py-3 rounded-xl text-sm font-bold text-white"
              style={{ background: "var(--gradient-brand)" }}
            >
              <svg width="18" height="18" viewBox="0 0 28 28" fill="none" aria-hidden="true">
                <path d="M14 2L4 6.5V13.5C4 19.2 8.4 24.5 14 26C19.6 24.5 24 19.2 24 13.5V6.5L14 2Z" fill="white" opacity="0.9"/>
                <path d="M10 13.5l2.5 2.5 5-5" stroke="#1a47f5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>AGEPASS COMBLE CE VIDE</span>
            </div>
          </div>
          <p className="text-center text-[0.85rem] text-[var(--text-secondary)] mt-4 leading-relaxed">
            La conformité devient aussi automatisable que la commande ou le paiement.
          </p>
        </div>

        {/* Bottom 2 columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="rounded-2xl border p-6 bg-white" style={{ borderColor: "var(--border-default)" }}>
            <p className="text-[0.75rem] font-bold uppercase tracking-wider text-[var(--color-brand-600)] mb-3">2 DÉPUTÉS ENGAGÉS</p>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
              ont fait remonter AgePass au Ministre de l&apos;Économie et au Ministre de la Santé en faveur de la conformité du retrait.
            </p>
            <div className="flex gap-3">
              {["Ministère de l'Économie", "Ministère de la Santé"].map((m) => (
                <div key={m} className="px-3 py-1.5 rounded-lg text-[11px] font-semibold" style={{ background: "var(--bg-subtle)", color: "var(--text-secondary)" }}>{m}</div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl p-6 flex items-center" style={{ background: "var(--bg-subtle)" }}>
            <blockquote className="text-[1.15rem] font-semibold italic leading-relaxed text-[var(--text-primary)]">
              &laquo; Les enseignes ont automatisé la commande. Elles n&apos;ont pas encore automatisé la conformité de la remise. &raquo;
            </blockquote>
          </div>
        </div>

        {/* Footnotes */}
        <div className="mt-12 pt-6 border-t" style={{ borderColor: "var(--border-default)" }}>
          <p className="text-[10px] text-[var(--text-tertiary)] leading-relaxed">
            ¹ Pickup / Geopost – Communiqué de presse – mai 2024 &nbsp;|&nbsp; ² Ouidrop – Communiqué de presse – avril 2024 &nbsp;|&nbsp; ³ EIA – European Parcel Market Report 2024 &nbsp;|&nbsp; ´ E.Leclerc – Rapport d&apos;activité 2024
          </p>
        </div>

      </div>
    </section>
  );
}
