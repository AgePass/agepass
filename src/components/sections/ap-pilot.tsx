"use client";

import { motion } from "framer-motion";

export function ApPilot() {
  return (
    <section
      id="pilote"
      className="py-28 lg:py-36"
      style={{ backgroundColor: "var(--bg-subtle)" }}
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left — editorial */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          >
            <span className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[var(--color-brand-600)] mb-5 block">
              Programme pilote
            </span>
            <h2 className="text-[2.4rem] sm:text-[3rem] font-bold leading-[1.08] tracking-[-0.035em] text-[var(--text-primary)]">
              Rejoignez les premières enseignes qui bâtissent{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, var(--color-brand-700) 0%, var(--color-brand-500) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                la conformité de demain.
              </span>
            </h2>
            <p className="mt-6 text-[var(--text-secondary)] leading-relaxed max-w-[400px]">
              Nous sélectionnons un nombre limité de partenaires pilotes. Chaque pilote est accompagné directement par l&apos;équipe fondatrice d&apos;AgePass.
            </p>

            <div className="mt-10 flex flex-col gap-4">
              {[
                "Accès complet à l'infrastructure pendant 2 mois",
                "Accompagnement direct par l'équipe fondatrice",
                "Aucun engagement, réponse sous 48 heures",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="mt-0.5 w-4 h-4 rounded-full bg-[var(--color-brand-50)] border border-[var(--color-brand-200)] flex items-center justify-center shrink-0">
                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none" aria-hidden="true">
                      <path d="M1.5 4l1.5 1.5L6.5 2" stroke="var(--color-brand-600)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-sm text-[var(--text-secondary)] leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number], delay: 0.1 }}
            className="rounded-2xl bg-white border border-[var(--border-default)] p-8 lg:p-10"
            style={{ boxShadow: "0 4px 24px -4px rgba(12,11,9,0.06)" }}
          >
            <p className="text-base font-semibold text-[var(--text-primary)] mb-6">Demander mon accès pilote</p>

            <form
              className="flex flex-col gap-4"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="flex flex-col gap-1.5">
                <label htmlFor="pilot-name" className="text-xs font-medium text-[var(--text-secondary)]">
                  Nom &amp; prénom
                </label>
                <input
                  id="pilot-name"
                  type="text"
                  autoComplete="name"
                  placeholder="Jean Dupont"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[var(--border-default)] bg-[var(--bg-subtle)] text-sm text-[var(--text-primary)] placeholder:text-[var(--text-tertiary)] focus:outline-none focus:border-[var(--color-brand-400)] focus:ring-2 focus:ring-[rgba(26,71,245,0.08)] transition"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="pilot-email" className="text-xs font-medium text-[var(--text-secondary)]">
                  E-mail professionnel
                </label>
                <input
                  id="pilot-email"
                  type="email"
                  autoComplete="email"
                  placeholder="jean@acme.fr"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[var(--border-default)] bg-[var(--bg-subtle)] text-sm text-[var(--text-primary)] placeholder:text-[var(--text-tertiary)] focus:outline-none focus:border-[var(--color-brand-400)] focus:ring-2 focus:ring-[rgba(26,71,245,0.08)] transition"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="pilot-message" className="text-xs font-medium text-[var(--text-secondary)]">
                  Contexte
                </label>
                <textarea
                  id="pilot-message"
                  rows={4}
                  placeholder="Décrivez votre cas d'usage en quelques lignes…"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[var(--border-default)] bg-[var(--bg-subtle)] text-sm text-[var(--text-primary)] placeholder:text-[var(--text-tertiary)] focus:outline-none focus:border-[var(--color-brand-400)] focus:ring-2 focus:ring-[rgba(26,71,245,0.08)] transition resize-none"
                />
              </div>

              <button
                type="submit"
                className="mt-2 w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-[15px] font-semibold bg-[var(--color-brand-600)] text-white hover:bg-[var(--color-brand-700)] transition-colors duration-150 shadow-sm"
              >
                Demander mon pilote
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              <p className="text-center text-[11px] text-[var(--text-tertiary)]">
                Réponse sous 48h · Aucun engagement
              </p>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
