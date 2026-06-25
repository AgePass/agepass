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
    description: "Vérifiez la majorité avant l'ajout au panier. Intégration native Shopify, WooCommerce et Magento.",
    regulation: "DSA Art. 28 + PJMO",
    color: "brand",
    badge: "E-commerce",
    highlight: false,
  },
  {
    icon: Gamepad2,
    sector: "Gaming & Paris sportifs",
    title: "Accès sécurisé aux contenus 18+",
    description: "Protection à l'inscription et à la connexion. Conforme aux obligations ARJEL.",
    regulation: "ARJEL + eIDAS 2.0",
    color: "indigo",
    badge: "Divertissement",
    highlight: true,
  },
  {
    icon: Newspaper,
    sector: "Presse & Médias",
    title: "Mur d'âge pour contenus adultes",
    description: "Déployez un age-gate sur vos rubriques sensibles sans friction pour vos lecteurs premium.",
    regulation: "DSA + Code de déontologie",
    color: "violet",
    badge: "Médias",
    highlight: false,
  },
  {
    icon: Video,
    sector: "Streaming & VOD",
    title: "Contrôle parental certifié",
    description: "Au-delà du simple PIN. Vérification eIDAS pour les contenus classifiés X ou -18.",
    regulation: "eIDAS 2.0 + CSA",
    color: "neutral",
    badge: "Streaming",
    highlight: false,
  },
  {
    icon: Pill,
    sector: "Pharmacie en ligne",
    title: "Accès médicaments réglementés",
    description: "Automatisez le contrôle de majorité légale dans votre tunnel d'achat pharmaceutique.",
    regulation: "Code de la santé publique",
    color: "success",
    badge: "Santé",
    highlight: false,
  },
  {
    icon: ShoppingBag,
    sector: "Vente flash & Enchères",
    title: "Protection des plateformes C2C",
    description: "Empêchez l'accès mineur aux catégories sensibles de vos marketplaces.",
    regulation: "DSA Art. 28 + RGPD",
    color: "amber",
    badge: "Marketplace",
    highlight: false,
  },
] as const;

const colorMap = {
  brand:   { bg: "bg-[var(--color-brand-50)]",   text: "text-[var(--color-brand-600)]",   badge: "bg-[var(--color-brand-100)] text-[var(--color-brand-700)]",   border: "border-[var(--color-brand-200)]",   hoverShadow: "hover:shadow-[0_6px_24px_rgba(51,102,255,0.1)]" },
  indigo:  { bg: "bg-indigo-50",                  text: "text-indigo-600",                  badge: "bg-indigo-100 text-indigo-700",                                border: "border-indigo-200",                   hoverShadow: "hover:shadow-[0_6px_24px_rgba(99,102,241,0.15)]" },
  violet:  { bg: "bg-violet-50",                  text: "text-violet-600",                  badge: "bg-violet-100 text-violet-700",                                border: "border-violet-200",                   hoverShadow: "hover:shadow-[0_6px_24px_rgba(139,92,246,0.1)]" },
  neutral: { bg: "bg-[var(--bg-muted)]",          text: "text-[var(--text-secondary)]",     badge: "bg-[var(--border-default)] text-[var(--text-secondary)]",      border: "border-[var(--border-default)]",      hoverShadow: "hover:shadow-[0_6px_24px_rgba(0,0,0,0.07)]" },
  success: { bg: "bg-[var(--color-success-50)]",  text: "text-[var(--color-success-600)]",  badge: "bg-[var(--color-success-100)] text-[var(--color-success-700)]", border: "border-[var(--color-success-200)]",   hoverShadow: "hover:shadow-[0_6px_24px_rgba(34,197,94,0.1)]" },
  amber:   { bg: "bg-amber-50",                   text: "text-amber-600",                   badge: "bg-amber-100 text-amber-700",                                  border: "border-amber-200",                    hoverShadow: "hover:shadow-[0_6px_24px_rgba(245,158,11,0.1)]" },
};

export function UseCasesSection() {
  return (
    <Section background="page" size="md" className="overflow-hidden">
      <Container size="xl">

        {/* Header */}
        <Reveal className="flex flex-col items-center gap-4 text-center mb-14 lg:mb-18">
          <Label>Cas d&apos;usage</Label>
          <Heading size="3xl" balance className="max-w-2xl">
            Votre secteur est concerné.{" "}
            <span className="text-gradient-brand">Votre solution est là.</span>
          </Heading>
          <p className="text-[var(--text-secondary)] text-lg max-w-md text-balance mt-1">
            De l&apos;e-commerce au streaming, AgePass s&apos;adapte à chaque contexte
            métier avec ses propres exigences réglementaires.
          </p>
        </Reveal>

        {/* Sector strip — quick scannable overview */}
        <Reveal className="mb-10">
          <div className="flex flex-wrap justify-center gap-2">
            {USE_CASES.map((uc) => {
              const colors = colorMap[uc.color];
              const Icon = uc.icon;
              return (
                <span
                  key={uc.badge}
                  className={cn(
                    "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold",
                    "border",
                    colors.badge,
                    colors.border,
                  )}
                >
                  <Icon className="w-3 h-3" strokeWidth={2} />
                  {uc.sector}
                </span>
              );
            })}
          </div>
        </Reveal>

        {/* Grid */}
        <RevealGroup stagger={0.07} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {USE_CASES.map((uc) => {
            const colors = colorMap[uc.color];
            const Icon = uc.icon;
            return (
              <RevealItem key={uc.title}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className={cn(
                    "group relative flex flex-col gap-4 p-6 rounded-2xl cursor-pointer",
                    "border border-[var(--border-default)] bg-white",
                    "shadow-[0_1px_4px_rgba(0,0,0,0.04)]",
                    "transition-all duration-300",
                    colors.hoverShadow,
                  )}
                >
                  {/* Icon + sector header */}
                  <div className="flex items-start justify-between gap-3">
                    <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center shrink-0", colors.bg, colors.text)}>
                      <Icon className="w-5 h-5" strokeWidth={1.75} />
                    </div>
                    <span className={cn("text-[10px] font-semibold uppercase tracking-wider px-2 py-1 rounded-full border", colors.badge, colors.border)}>
                      {uc.badge}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col gap-1.5">
                    <h3 className="text-sm font-semibold text-[var(--text-primary)] leading-snug">{uc.title}</h3>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{uc.description}</p>
                  </div>

                  {/* Bottom: regulation + arrow */}
                  <div className="mt-auto pt-3 border-t border-[var(--border-default)] flex items-center justify-between">
                    <span className="text-[10px] font-mono text-[var(--text-tertiary)]">{uc.regulation}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[var(--text-tertiary)] opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1 shrink-0" />
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
