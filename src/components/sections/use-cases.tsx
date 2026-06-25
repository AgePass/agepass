"use client";

import { motion } from "framer-motion";
import { Wine, Gamepad2, Newspaper, ShoppingBag, Video, Pill, ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/text";
import { Label } from "@/components/ui/text";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";

const USE_CASES = [
  {
    icon: Wine,
    sector: "Alcool & Tabac",
    title: "Ventes en ligne conformes DSA",
    description: "Vérifiez la majorité avant l'ajout au panier ou au paiement. Intégration native Shopify, WooCommerce et Magento.",
    regulation: "DSA Art. 28 + loi PJMO",
    color: "brand",
    badge: "E-commerce",
  },
  {
    icon: Gamepad2,
    sector: "Gaming & Paris sportifs",
    title: "Accès sécurisé aux contenus 18+",
    description: "Protection à l'inscription et à la connexion. Conforme aux obligations des opérateurs de jeux en ligne (ARJEL).",
    regulation: "ARJEL + eIDAS 2.0",
    color: "indigo",
    badge: "Divertissement",
  },
  {
    icon: Newspaper,
    sector: "Presse & Médias",
    title: "Mur d'âge pour contenus adultes",
    description: "Déployez un age-gate sur vos rubriques sensibles sans friction pour vos lecteurs premium. Compatible paywall.",
    regulation: "DSA + Code de déontologie",
    color: "violet",
    badge: "Médias",
  },
  {
    icon: Video,
    sector: "Streaming & VOD",
    title: "Contrôle parental renforcé",
    description: "Au-delà du simple PIN. Vérification d'identité certifiée eIDAS pour les contenus classifiés X ou -18.",
    regulation: "eIDAS 2.0 + CSA",
    color: "neutral",
    badge: "Streaming",
  },
  {
    icon: Pill,
    sector: "Pharmacie en ligne",
    title: "Accès médicaments réglementés",
    description: "Certains médicaments nécessitent une vérification de majorité légale. Automatisez ce contrôle dans votre tunnel d'achat.",
    regulation: "Code de la santé publique",
    color: "success",
    badge: "Santé",
  },
  {
    icon: ShoppingBag,
    sector: "Vente flash & Enchères",
    title: "Protection des plateformes C2C",
    description: "Empêchez les mineurs d'accéder aux catégories sensibles de vos marketplaces. Conforme aux nouvelles obligations DSA.",
    regulation: "DSA Art. 28 + RGPD",
    color: "amber",
    badge: "Marketplace",
  },
] as const;

const colorMap = {
  brand:   { bg: "bg-[var(--color-brand-50)]",   text: "text-[var(--color-brand-600)]",   badge: "bg-[var(--color-brand-100)] text-[var(--color-brand-700)]",   border: "hover:border-[var(--color-brand-200)]" },
  indigo:  { bg: "bg-indigo-50",                  text: "text-indigo-600",                  badge: "bg-indigo-100 text-indigo-700",                                border: "hover:border-indigo-200" },
  violet:  { bg: "bg-violet-50",                  text: "text-violet-600",                  badge: "bg-violet-100 text-violet-700",                                border: "hover:border-violet-200" },
  neutral: { bg: "bg-[var(--bg-muted)]",          text: "text-[var(--text-secondary)]",     badge: "bg-[var(--border-default)] text-[var(--text-secondary)]",      border: "hover:border-[var(--border-strong)]" },
  success: { bg: "bg-[var(--color-success-50)]",  text: "text-[var(--color-success-600)]",  badge: "bg-[var(--color-success-100)] text-[var(--color-success-700)]", border: "hover:border-[var(--color-success-200)]" },
  amber:   { bg: "bg-amber-50",                   text: "text-amber-600",                   badge: "bg-amber-100 text-amber-700",                                  border: "hover:border-amber-200" },
};

export function UseCasesSection() {
  return (
    <Section background="page" className="overflow-hidden">
      <Container size="xl">

        {/* Header */}
        <Reveal className="flex flex-col items-center gap-4 text-center mb-16 lg:mb-20">
          <Label>Cas d&apos;usage</Label>
          <Heading size="3xl" balance className="max-w-2xl">
            Votre secteur est concerné.<br />
            <span className="text-gradient-brand">Votre solution est là.</span>
          </Heading>
          <p className="text-[var(--text-secondary)] text-lg max-w-lg text-pretty">
            De l&apos;e-commerce au streaming, AgePass s&apos;adapte à chaque contexte
            métier avec ses propres exigences réglementaires.
          </p>
        </Reveal>

        {/* Grid */}
        <RevealGroup stagger={0.08} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {USE_CASES.map((uc) => {
            const colors = colorMap[uc.color];
            const Icon = uc.icon;
            return (
              <RevealItem key={uc.title}>
                <motion.div
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className={cn(
                    "group relative flex flex-col gap-4 p-6 rounded-2xl cursor-pointer",
                    "border border-[var(--border-default)] bg-white",
                    "transition-all duration-300",
                    colors.border,
                  )}
                >
                  {/* Badge */}
                  <div className="flex items-center justify-between">
                    <span className={cn("text-[10px] font-semibold uppercase tracking-wider px-2 py-1 rounded-full", colors.badge)}>
                      {uc.badge}
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 text-[var(--text-tertiary)] opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1" />
                  </div>

                  {/* Icon + sector */}
                  <div className="flex items-center gap-3">
                    <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center shrink-0", colors.bg, colors.text)}>
                      <Icon className="w-5 h-5" strokeWidth={1.75} />
                    </div>
                    <span className="text-xs font-semibold text-[var(--text-tertiary)]">{uc.sector}</span>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col gap-2">
                    <h3 className="text-sm font-semibold text-[var(--text-primary)] leading-snug">{uc.title}</h3>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{uc.description}</p>
                  </div>

                  {/* Regulation tag */}
                  <div className="mt-auto pt-3 border-t border-[var(--border-default)]">
                    <span className="text-[10px] font-mono text-[var(--text-tertiary)]">{uc.regulation}</span>
                  </div>
                </motion.div>
              </RevealItem>
            );
          })}
        </RevealGroup>

        {/* Bottom CTA */}
        <Reveal delay={0.3} className="flex justify-center mt-12">
          <a
            href="/use-cases"
            className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-brand-600)] hover:text-[var(--color-brand-700)] transition-colors group"
          >
            Voir tous les cas d&apos;usage
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </Reveal>

      </Container>
    </Section>
  );
}
