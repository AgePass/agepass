"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Zap, Lock, BarChart3, Globe, Code2 } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/text";
import { Label } from "@/components/ui/text";
import { RevealGroup, RevealItem, Reveal } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";

const BENEFITS = [
  {
    icon: ShieldCheck,
    color: "brand",
    title: "Conformité garantie",
    description: "Certifié eIDAS 2.0, DSA Article 28, et loi PJMO. Nos juristes maintiennent la conformité à chaque évolution réglementaire. Vous ne gérez plus rien.",
    stat: "100%",
    statLabel: "couverture réglementaire",
  },
  {
    icon: Zap,
    color: "amber",
    title: "Intégration en 30 minutes",
    description: "Une ligne de code. Pas de webhook à configurer, pas de back-end à modifier. Notre SDK JavaScript s'installe comme n'importe quel package npm.",
    stat: "< 30 min",
    statLabel: "temps d'intégration",
  },
  {
    icon: Lock,
    color: "success",
    title: "Zéro donnée personnelle",
    description: "AgePass ne stocke, ne voit, ni ne transmet aucune donnée d'identité. Seul un token signé indiquant le statut de majorité transite. RGPD natif.",
    stat: "0",
    statLabel: "donnée personnelle stockée",
  },
  {
    icon: BarChart3,
    color: "indigo",
    title: "99,99% de disponibilité",
    description: "Infrastructure multi-région en Europe. SLA contractuel garanti. Monitoring en temps réel avec alerting automatique inclus dans tous les plans.",
    stat: "99,99%",
    statLabel: "uptime garanti",
  },
  {
    icon: Globe,
    color: "violet",
    title: "12 pays européens",
    description: "Compatible FranceConnect+, BankID, iDIN, SpID et tous les fournisseurs d'identité eIDAS. Une seule intégration couvre toute l'Union Européenne.",
    stat: "12",
    statLabel: "pays de l'UE couverts",
  },
  {
    icon: Code2,
    color: "neutral",
    title: "SDK pour tous les stacks",
    description: "JavaScript, TypeScript, React, Vue, PHP, Python, Ruby. Plugins Shopify et WooCommerce disponibles. Webhooks REST et GraphQL API documentés.",
    stat: "8+",
    statLabel: "langages supportés",
  },
] as const;

const colorMap = {
  brand:   { icon: "bg-[var(--color-brand-50)] text-[var(--color-brand-600)]",   border: "group-hover:border-[var(--color-brand-200)]",   stat: "text-[var(--color-brand-600)]",   ring: "group-hover:shadow-[0_0_0_4px_var(--color-brand-100)]" },
  amber:   { icon: "bg-amber-50 text-amber-600",                                   border: "group-hover:border-amber-200",                   stat: "text-amber-600",                   ring: "group-hover:shadow-[0_0_0_4px_rgba(251,191,36,0.12)]" },
  success: { icon: "bg-[var(--color-success-50)] text-[var(--color-success-600)]", border: "group-hover:border-[var(--color-success-200)]",  stat: "text-[var(--color-success-600)]",  ring: "group-hover:shadow-[0_0_0_4px_var(--color-success-50)]" },
  indigo:  { icon: "bg-indigo-50 text-indigo-600",                                 border: "group-hover:border-indigo-200",                  stat: "text-indigo-600",                  ring: "group-hover:shadow-[0_0_0_4px_rgba(99,102,241,0.12)]" },
  violet:  { icon: "bg-violet-50 text-violet-600",                                 border: "group-hover:border-violet-200",                  stat: "text-violet-600",                  ring: "group-hover:shadow-[0_0_0_4px_rgba(139,92,246,0.12)]" },
  neutral: { icon: "bg-[var(--bg-muted)] text-[var(--text-secondary)]",            border: "group-hover:border-[var(--border-strong)]",      stat: "text-[var(--text-primary)]",       ring: "group-hover:shadow-[0_0_0_4px_var(--bg-muted)]" },
};

export function BenefitsSection() {
  return (
    <Section background="page" className="overflow-hidden">
      <Container size="xl">

        {/* Header */}
        <Reveal className="flex flex-col items-center gap-4 text-center mb-16 lg:mb-20">
          <Label>Pourquoi AgePass</Label>
          <Heading size="3xl" balance className="max-w-2xl">
            Tout ce dont vous avez besoin.<br />
            <span className="text-gradient-brand">Rien de plus.</span>
          </Heading>
          <p className="text-[var(--text-secondary)] text-lg max-w-lg text-pretty">
            Conçu pour les équipes qui veulent être conformes aujourd&apos;hui
            sans hypothéquer leur roadmap technique de demain.
          </p>
        </Reveal>

        {/* Grid */}
        <RevealGroup stagger={0.08} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {BENEFITS.map((b) => {
            const colors = colorMap[b.color];
            const Icon = b.icon;
            return (
              <RevealItem key={b.title}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  className={cn(
                    "group relative flex flex-col gap-4 p-6 rounded-2xl",
                    "border border-[var(--border-default)]",
                    "bg-white transition-all duration-300",
                    colors.border, colors.ring,
                  )}
                >
                  {/* Icon */}
                  <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center", colors.icon)}>
                    <Icon className="w-5 h-5" strokeWidth={1.75} />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col gap-1.5">
                    <h3 className="text-base font-semibold text-[var(--text-primary)]">{b.title}</h3>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{b.description}</p>
                  </div>

                  {/* Stat */}
                  <div className="mt-auto pt-4 border-t border-[var(--border-default)] flex items-baseline gap-2">
                    <span className={cn("text-2xl font-bold tabular-nums tracking-tight", colors.stat)}>{b.stat}</span>
                    <span className="text-xs text-[var(--text-tertiary)]">{b.statLabel}</span>
                  </div>
                </motion.div>
              </RevealItem>
            );
          })}
        </RevealGroup>

      </Container>
    </Section>
  );
}
