"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Zap, Lock, BarChart3, Globe, Code2 } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/text";
import { Label } from "@/components/ui/text";
import { RevealGroup, RevealItem, Reveal } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";

/* ─── Data ──────────────────────────────────────────────────────────────── */

const FEATURED = [
  {
    icon: ShieldCheck,
    color: "brand",
    title: "Conformité garantie",
    description: "Certifié eIDAS 2.0, DSA Article 28, et loi PJMO. Nos juristes maintiennent la conformité à chaque évolution réglementaire. Vous n'avez plus rien à suivre.",
    stat: "100%",
    statLabel: "couverture réglementaire",
    detail: "Mise à jour automatique à chaque évolution du cadre légal européen.",
  },
  {
    icon: Lock,
    color: "success",
    title: "Zéro donnée personnelle",
    description: "AgePass ne stocke, ne voit, ni ne transmet aucune donnée d'identité. Seul un token signé indiquant le statut de majorité transite. RGPD natif par architecture.",
    stat: "0",
    statLabel: "donnée stockée",
    detail: "Architecture privacy-by-design validée par nos juristes RGPD.",
  },
] as const;

const SECONDARY = [
  { icon: Zap,      color: "amber",   title: "< 30 min",   label: "Intégration",       description: "Une ligne de code dans votre tunnel existant." },
  { icon: BarChart3, color: "indigo", title: "99,99%",     label: "Disponibilité",      description: "SLA contractuel. Infrastructure multi-région EU." },
  { icon: Globe,    color: "violet",  title: "12 pays",    label: "Couverture UE",      description: "FranceConnect+, BankID, iDIN, SpID et tous eIDAS." },
  { icon: Code2,    color: "neutral", title: "8+",         label: "Langages supportés", description: "JS, TS, PHP, Python, Ruby + plugins Shopify." },
] as const;

const colorMap = {
  brand:   { icon: "bg-[var(--color-brand-50)] text-[var(--color-brand-600)]",    border: "group-hover:border-[var(--color-brand-200)]",  stat: "text-[var(--color-brand-600)]",  accent: "bg-[var(--color-brand-500)]",   ring: "group-hover:shadow-[0_0_0_4px_var(--color-brand-100)]" },
  success: { icon: "bg-[var(--color-success-50)] text-[var(--color-success-600)]",border: "group-hover:border-[var(--color-success-200)]",stat: "text-[var(--color-success-600)]",accent: "bg-[var(--color-success-500)]", ring: "group-hover:shadow-[0_0_0_4px_var(--color-success-50)]" },
  amber:   { icon: "bg-amber-50 text-amber-600",    border: "group-hover:border-amber-200",   stat: "text-amber-600",    accent: "bg-amber-500",   ring: "group-hover:shadow-[0_0_0_4px_rgba(251,191,36,0.12)]" },
  indigo:  { icon: "bg-indigo-50 text-indigo-600",  border: "group-hover:border-indigo-200",  stat: "text-indigo-600",   accent: "bg-indigo-500",  ring: "group-hover:shadow-[0_0_0_4px_rgba(99,102,241,0.12)]" },
  violet:  { icon: "bg-violet-50 text-violet-600",  border: "group-hover:border-violet-200",  stat: "text-violet-600",   accent: "bg-violet-500",  ring: "group-hover:shadow-[0_0_0_4px_rgba(139,92,246,0.12)]" },
  neutral: { icon: "bg-[var(--bg-muted)] text-[var(--text-secondary)]", border: "group-hover:border-[var(--border-strong)]", stat: "text-[var(--text-primary)]", accent: "bg-[var(--color-neutral-700)]", ring: "group-hover:shadow-[0_0_0_4px_var(--bg-muted)]" },
};

/* ─── BenefitsSection ───────────────────────────────────────────────────── */

export function BenefitsSection() {
  return (
    <Section background="page" size="md" className="overflow-hidden">
      <Container size="xl">

        <Reveal className="flex flex-col items-center gap-3 text-center mb-14 lg:mb-16">
          <Label>Pourquoi AgePass</Label>
          <Heading size="3xl" balance className="max-w-2xl">
            Tout ce dont vous avez besoin.{" "}
            <span className="text-gradient-brand">Rien de plus.</span>
          </Heading>
          <p className="text-[var(--text-secondary)] text-lg max-w-md text-balance mt-1">
            Conçu pour les équipes qui veulent être conformes aujourd&apos;hui sans hypothéquer leur roadmap de demain.
          </p>
        </Reveal>

        {/* Featured row — 2 large cards */}
        <RevealGroup stagger={0.1} className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6 mb-5">
          {FEATURED.map((b) => {
            const colors = colorMap[b.color];
            const Icon = b.icon;
            return (
              <RevealItem key={b.title}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  className={cn(
                    "group relative flex flex-col gap-5 p-7 rounded-2xl",
                    "border border-[var(--border-default)]",
                    "bg-white shadow-[0_2px_12px_rgba(0,0,0,0.05),0_1px_3px_rgba(0,0,0,0.04)]",
                    "transition-all duration-300",
                    colors.border, colors.ring,
                    "overflow-hidden",
                  )}
                >
                  {/* Decorative corner accent */}
                  <div className={cn("absolute top-0 right-0 w-24 h-24 rounded-full opacity-[0.06] blur-2xl -translate-y-8 translate-x-8", colors.accent)} />

                  <div className="flex items-start justify-between gap-4">
                    <div className={cn("w-11 h-11 rounded-xl flex items-center justify-center shrink-0", colors.icon)}>
                      <Icon className="w-5 h-5" strokeWidth={1.75} />
                    </div>
                    <div className="text-right">
                      <span className={cn("text-4xl font-black tabular-nums tracking-tight", colors.stat)}>{b.stat}</span>
                      <p className="text-[10px] text-[var(--text-tertiary)] uppercase tracking-wider mt-0.5">{b.statLabel}</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">{b.title}</h3>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{b.description}</p>
                  </div>

                  <div className="pt-4 border-t border-[var(--border-default)]">
                    <p className="text-xs text-[var(--text-tertiary)] italic">{b.detail}</p>
                  </div>
                </motion.div>
              </RevealItem>
            );
          })}
        </RevealGroup>

        {/* Secondary row — 4 compact cards */}
        <RevealGroup stagger={0.06} className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          {SECONDARY.map((b) => {
            const colors = colorMap[b.color];
            const Icon = b.icon;
            return (
              <RevealItem key={b.title}>
                <motion.div
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className={cn(
                    "group flex flex-col gap-3 p-5 rounded-2xl",
                    "border border-[var(--border-default)]",
                    "bg-white shadow-[0_1px_6px_rgba(0,0,0,0.04)]",
                    "transition-all duration-300",
                    colors.border, colors.ring,
                  )}
                >
                  <div className={cn("w-9 h-9 rounded-xl flex items-center justify-center", colors.icon)}>
                    <Icon className="w-4 h-4" strokeWidth={1.75} />
                  </div>
                  <div>
                    <span className={cn("text-2xl font-black tabular-nums tracking-tight", colors.stat)}>{b.title}</span>
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-[var(--text-tertiary)] mt-0.5">{b.label}</p>
                  </div>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{b.description}</p>
                </motion.div>
              </RevealItem>
            );
          })}
        </RevealGroup>

      </Container>
    </Section>
  );
}
