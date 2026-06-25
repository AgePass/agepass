"use client";

import { motion } from "framer-motion";

const PRINCIPLES = [
  {
    title: "Données minimisées",
    desc: "AgePass certifie le droit à retirer. Elle ne stocke pas les pièces d'identité.",
  },
  {
    title: "Traçabilité complète",
    desc: "Chaque retrait génère un enregistrement horodaté, infalsifiable et consultable.",
  },
  {
    title: "Preuve permanente",
    desc: "En cas de contrôle réglementaire, chaque preuve est disponible immédiatement.",
  },
] as const;

export function ApInfrastructure() {
  return (
    <section
      className="py-28 lg:py-36"
      style={{ backgroundColor: "var(--bg-page)" }}
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          className="max-w-[640px] mb-20"
        >
          <span className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[var(--color-brand-600)] mb-5 block">
            L&apos;infrastructure
          </span>
          <h2 className="text-[2.4rem] sm:text-[3rem] font-bold leading-[1.08] tracking-[-0.035em] text-[var(--text-primary)]">
            AgePass n&apos;est pas un outil.{" "}
            <span
              style={{
                background: "linear-gradient(135deg, var(--color-brand-700) 0%, var(--color-brand-500) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              C&apos;est une infrastructure.
            </span>
          </h2>
        </motion.div>

        {/* Three editorial principles */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 lg:gap-16 border-t border-[var(--border-default)] pt-16 mb-20">
          {PRINCIPLES.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number], delay: i * 0.1 }}
              className="flex flex-col gap-4"
            >
              <p className="text-[1.4rem] font-bold tracking-[-0.02em] text-[var(--text-primary)] leading-snug">
                {p.title}
              </p>
              <p className="text-[var(--text-secondary)] leading-relaxed text-sm">
                {p.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Closing ambition line */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          className="text-center text-[1.1rem] sm:text-[1.35rem] font-medium text-[var(--text-secondary)] italic leading-snug"
        >
          &ldquo;L&apos;ambition : devenir le standard européen de la conformité commerciale.&rdquo;
        </motion.p>

      </div>
    </section>
  );
}
