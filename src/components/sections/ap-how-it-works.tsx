"use client";

import { motion } from "framer-motion";
import { AgePassPhone } from "@/components/ui/agepass-phone";

const STEPS = [
  {
    n: 1,
    title: "Commande passée",
    desc: "La commande est passée. Parmi les articles : un produit soumis à restriction d'âge.",
  },
  {
    n: 2,
    title: "Détection automatique",
    desc: "AgePass le détecte automatiquement. Le parcours de conformité s'enclenche.",
  },
  {
    n: 3,
    title: "Vérification du titulaire",
    desc: "L'identité du client est vérifiée. Majorité confirmée, titulaire authentifié.",
  },
  {
    n: 4,
    title: "Autorisation émise",
    desc: "L'autorisation est émise. La commande devient éligible au retrait.",
  },
  {
    n: 5,
    title: "QR Code sécurisé",
    desc: "Un QR Code sécurisé, horodaté, à usage unique est généré.",
    phone: true,
  },
  {
    n: 6,
    title: "Retrait autorisé",
    desc: "Le client scanne son QR Code au point de retrait. Accès accordé.",
  },
  {
    n: 7,
    title: "Preuve archivée",
    desc: "La preuve est archivée : identité, heure, lieu, commande. Infalsifiable.",
  },
] satisfies { n: number; title: string; desc: string; phone?: boolean }[];

export function ApHowItWorks() {
  return (
    <section
      id="comment"
      className="py-28 lg:py-36"
      style={{ backgroundColor: "var(--bg-page)" }}
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          className="max-w-[560px] mb-20"
        >
          <span className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[var(--color-brand-600)] mb-5 block">
            Comment ça marche
          </span>
          <h2 className="text-[2.4rem] sm:text-[3rem] font-bold leading-[1.08] tracking-[-0.035em] text-[var(--text-primary)]">
            De la commande à la{" "}
            <span
              style={{
                background: "linear-gradient(135deg, var(--color-brand-700) 0%, var(--color-brand-500) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              preuve de conformité.
            </span>
          </h2>
          <p className="mt-5 text-[var(--text-secondary)] leading-relaxed">
            Sept étapes. Zéro friction pour le client final. Une traçabilité complète pour l&apos;enseigne.
          </p>
        </motion.div>

        {/* Steps layout */}
        <div className="relative">

          {/* Desktop: left column steps 1–4, center phone, right column steps 5–7 */}
          <div className="hidden lg:grid lg:grid-cols-[1fr_auto_1fr] lg:gap-16 items-center">

            {/* Left steps 1–4 */}
            <div className="flex flex-col gap-10">
              {STEPS.slice(0, 4).map((step, i) => (
                <motion.div
                  key={step.n}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] as [number, number, number, number], delay: i * 0.08 }}
                  className="relative flex gap-4 items-start"
                >
                  {/* Ghost step number */}
                  <span
                    className="absolute -left-2 -top-4 select-none pointer-events-none font-bold leading-none text-[var(--color-cream-300)]"
                    style={{ fontSize: "7rem" }}
                    aria-hidden="true"
                  >
                    {`0${step.n}`}
                  </span>
                  <div className="relative z-10 shrink-0 w-8 h-8 rounded-full bg-[var(--color-brand-50)] border border-[var(--color-brand-200)] flex items-center justify-center">
                    <span className="text-[11px] font-bold text-[var(--color-brand-600)]">{step.n}</span>
                  </div>
                  <div className="relative z-10 pt-0.5">
                    <p className="text-sm font-semibold text-[var(--text-primary)] mb-1">{step.title}</p>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Center phone */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number], delay: 0.2 }}
              className="flex flex-col items-center gap-4"
            >
              <div className="relative flex justify-center">
                <div
                  className="absolute pointer-events-none"
                  aria-hidden="true"
                  style={{
                    width: "120%", height: "120%",
                    top: "-10%", left: "-10%",
                    background: "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(26,71,245,0.10) 0%, transparent 70%)",
                    filter: "blur(40px)",
                  }}
                />
                <AgePassPhone size="md" />
              </div>
              <div className="px-3 py-1.5 rounded-full bg-[var(--color-brand-50)] border border-[var(--color-brand-200)]">
                <span className="text-[11px] font-semibold text-[var(--color-brand-700)]">Étape 5 — QR Code sécurisé</span>
              </div>
            </motion.div>

            {/* Right steps 5–7 */}
            <div className="flex flex-col gap-10">
              {STEPS.slice(4).map((step, i) => (
                <motion.div
                  key={step.n}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] as [number, number, number, number], delay: 0.3 + i * 0.08 }}
                  className="relative flex gap-4 items-start"
                >
                  {/* Ghost step number */}
                  <span
                    className="absolute -left-2 -top-4 select-none pointer-events-none font-bold leading-none text-[var(--color-cream-300)]"
                    style={{ fontSize: "7rem" }}
                    aria-hidden="true"
                  >
                    {`0${step.n}`}
                  </span>
                  <div className="relative z-10 shrink-0 w-8 h-8 rounded-full bg-[var(--color-brand-50)] border border-[var(--color-brand-200)] flex items-center justify-center">
                    <span className="text-[11px] font-bold text-[var(--color-brand-600)]">{step.n}</span>
                  </div>
                  <div className="relative z-10 pt-0.5">
                    <p className="text-sm font-semibold text-[var(--text-primary)] mb-1">{step.title}</p>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>

          {/* Mobile: vertical list */}
          <div className="flex flex-col gap-0 lg:hidden">
            {STEPS.map((step, i) => (
              <motion.div
                key={step.n}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] as [number, number, number, number], delay: i * 0.06 }}
                className="flex gap-4"
              >
                {/* Line + number */}
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-[var(--color-brand-50)] border border-[var(--color-brand-200)] flex items-center justify-center shrink-0">
                    <span className="text-[11px] font-bold text-[var(--color-brand-600)]">{step.n}</span>
                  </div>
                  {i < STEPS.length - 1 && (
                    <div className="w-px flex-1 bg-[var(--border-default)] my-2 min-h-[24px]" />
                  )}
                </div>

                <div className={`pb-8 ${i === STEPS.length - 1 ? "pb-0" : ""}`}>
                  <p className="text-sm font-semibold text-[var(--text-primary)] mb-1 mt-1">{step.title}</p>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{step.desc}</p>
                  {step.phone && (
                    <div className="mt-6 flex flex-col items-center gap-3">
                      <AgePassPhone size="sm" />
                      <div className="px-3 py-1.5 rounded-full bg-[var(--color-brand-50)] border border-[var(--color-brand-200)]">
                        <span className="text-[11px] font-semibold text-[var(--color-brand-700)]">QR Code sécurisé</span>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
