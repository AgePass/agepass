"use client";

import React from "react";
import { motion } from "framer-motion";

const FLOW = [
  {
    id: "order",
    label: "Commande",
    sublabel: "Plateforme e-commerce",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
        <rect x="2" y="3" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M5 7h8M5 10h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: "agepass",
    label: "AgePass",
    sublabel: "Infrastructure de confiance",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
        <path d="M9 1.5L2.5 4.5v5c0 3.5 2.8 6.7 6.5 7.5 3.7-.8 6.5-4 6.5-7.5v-5L9 1.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M6 9l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    highlight: true,
  },
  {
    id: "qr",
    label: "QR Code",
    sublabel: "Horodaté, unique",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
        <rect x="2" y="2" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="10" y="2" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="2" y="10" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M10 13h2M12 10v2M14 13v3M14 10h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: "pickup",
    label: "Retrait",
    sublabel: "Point de retrait",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
        <path d="M9 2l2 4h4l-3 3 1 4-4-2-4 2 1-4L3 6h4L9 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    id: "proof",
    label: "Preuve archivée",
    sublabel: "Infalsifiable, consultable",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
        <path d="M4 3h7l3 3v9a1 1 0 01-1 1H4a1 1 0 01-1-1V4a1 1 0 011-1Z" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M11 3v3h3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M6 10l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
] satisfies { id: string; label: string; sublabel: string; icon: React.ReactNode; highlight?: boolean }[];

const GUARANTEES = [
  {
    title: "Données minimisées",
    desc: "AgePass ne stocke pas les pièces d'identité. Seule la preuve de majorité est conservée.",
  },
  {
    title: "Traçabilité complète",
    desc: "Chaque retrait génère un enregistrement horodaté : identité vérifiée, commande, lieu, heure.",
  },
  {
    title: "Preuve consultable",
    desc: "En cas de contrôle réglementaire, l'enseigne peut produire la preuve de chaque retrait.",
  },
] as const;

export function ApInfrastructure() {
  return (
    <section
      className="py-28 lg:py-36"
      style={{ backgroundColor: "var(--bg-page)" }}
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
            L&apos;infrastructure
          </span>
          <h2 className="text-[2.4rem] sm:text-[3rem] font-bold leading-[1.08] tracking-[-0.035em] text-[var(--text-primary)]">
            Comment circule{" "}
            <span
              style={{
                background: "linear-gradient(135deg, var(--color-brand-700) 0%, var(--color-brand-500) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              la preuve.
            </span>
          </h2>
          <p className="mt-5 text-[var(--text-secondary)] leading-relaxed">
            AgePass est le maillon entre la commande et le retrait. Elle vérifie, autorise, et archive — sans stocker les données d&apos;identité.
          </p>
        </motion.div>

        {/* Flow diagram */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          {/* Desktop: horizontal flow */}
          <div className="hidden md:flex items-center gap-0">
            {FLOW.map((node, i) => (
              <div key={node.id} className="flex items-center flex-1 min-w-0">
                <div
                  className={`flex-1 flex flex-col items-center gap-3 p-5 rounded-2xl border ${
                    node.highlight
                      ? "border-[var(--color-brand-200)] bg-[var(--color-brand-50)]"
                      : "border-[var(--border-default)] bg-white"
                  }`}
                  style={node.highlight ? { boxShadow: "0 0 0 4px rgba(26,71,245,0.06)" } : undefined}
                >
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                      node.highlight
                        ? "bg-[var(--color-brand-600)] text-white"
                        : "bg-[var(--bg-subtle)] text-[var(--text-secondary)]"
                    }`}
                  >
                    {node.icon}
                  </div>
                  <div className="text-center">
                    <p className={`text-sm font-semibold ${node.highlight ? "text-[var(--color-brand-800)]" : "text-[var(--text-primary)]"}`}>
                      {node.label}
                    </p>
                    <p className={`text-[11px] mt-0.5 ${node.highlight ? "text-[var(--color-brand-600)]" : "text-[var(--text-tertiary)]"}`}>
                      {node.sublabel}
                    </p>
                  </div>
                </div>
                {i < FLOW.length - 1 && (
                  <div className="flex items-center px-2 shrink-0">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path d="M4 8h8M8 4l4 4-4 4" stroke="var(--color-brand-400)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile: vertical flow */}
          <div className="flex flex-col gap-2 md:hidden">
            {FLOW.map((node, i) => (
              <div key={node.id} className="flex flex-col items-center">
                <div
                  className={`w-full flex items-center gap-4 px-5 py-4 rounded-2xl border ${
                    node.highlight
                      ? "border-[var(--color-brand-200)] bg-[var(--color-brand-50)]"
                      : "border-[var(--border-default)] bg-white"
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                      node.highlight
                        ? "bg-[var(--color-brand-600)] text-white"
                        : "bg-[var(--bg-subtle)] text-[var(--text-secondary)]"
                    }`}
                  >
                    {node.icon}
                  </div>
                  <div>
                    <p className={`text-sm font-semibold ${node.highlight ? "text-[var(--color-brand-800)]" : "text-[var(--text-primary)]"}`}>
                      {node.label}
                    </p>
                    <p className={`text-xs ${node.highlight ? "text-[var(--color-brand-600)]" : "text-[var(--text-tertiary)]"}`}>
                      {node.sublabel}
                    </p>
                  </div>
                </div>
                {i < FLOW.length - 1 && (
                  <div className="py-1.5">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path d="M8 4v8M4 8l4 4 4-4" stroke="var(--color-brand-400)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Guarantees */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-12 border-t border-[var(--border-default)] pt-16">
          {GUARANTEES.map((g, i) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: i * 0.08 }}
              className="flex flex-col gap-2"
            >
              <p className="text-sm font-semibold text-[var(--text-primary)]">{g.title}</p>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{g.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
