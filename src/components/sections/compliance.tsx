"use client";

import { motion } from "framer-motion";
import { ShieldCheck, FileCheck2, Globe, Lock, AlertTriangle, CheckCircle2 } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/text";
import { Label } from "@/components/ui/text";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";

/* ─── Certifications ────────────────────────────────────────────────────── */

const CERTS = [
  { name: "eIDAS 2.0", desc: "Niveau de garantie élevé", color: "brand" },
  { name: "DSA Art. 28", desc: "Digital Services Act", color: "indigo" },
  { name: "RGPD", desc: "Privacy by design natif", color: "success" },
  { name: "PJMO", desc: "Loi Protéger les mineurs", color: "violet" },
  { name: "ISO 27001", desc: "Sécurité de l'information", color: "neutral" },
  { name: "SOC 2 Type II", desc: "En cours d'audit", color: "amber" },
] as const;

const certColors = {
  brand:   "border-[var(--color-brand-200)] bg-[var(--color-brand-50)] text-[var(--color-brand-700)]",
  indigo:  "border-indigo-200 bg-indigo-50 text-indigo-700",
  success: "border-[var(--color-success-200)] bg-[var(--color-success-50)] text-[var(--color-success-700)]",
  violet:  "border-violet-200 bg-violet-50 text-violet-700",
  neutral: "border-[var(--border-default)] bg-[var(--bg-muted)] text-[var(--text-secondary)]",
  amber:   "border-amber-200 bg-amber-50 text-amber-700",
};

/* ─── Security features ─────────────────────────────────────────────────── */

const SECURITY_ITEMS = [
  {
    icon: Lock,
    title: "Chiffrement de bout en bout",
    description: "TLS 1.3 obligatoire. Aucune donnée en clair ne transite entre l'utilisateur, AgePass et votre serveur.",
  },
  {
    icon: Globe,
    title: "Infrastructure européenne",
    description: "100% hébergé en Union Européenne. Pas de transfert de données hors UE. Conformité RGPD garantie par architecture.",
  },
  {
    icon: FileCheck2,
    title: "Audit trails complets",
    description: "Chaque vérification génère un log immuable signé. Exportable pour vos audits de conformité réglementaire.",
  },
  {
    icon: ShieldCheck,
    title: "Signature cryptographique",
    description: "Chaque token est signé par notre infrastructure. Impossible à falsifier. Vérifiable hors ligne avec notre clé publique.",
  },
] as const;

/* ─── Comparison table ──────────────────────────────────────────────────── */

const COMPARISON = [
  { feature: "Stockage données personnelles", agepass: false, competitor: true, selfbuild: true },
  { feature: "Conformité eIDAS 2.0 native", agepass: true, competitor: false, selfbuild: false },
  { feature: "Temps d'intégration", agepass: "30 min", competitor: "2-4 sem.", selfbuild: "3-6 mois" },
  { feature: "Maintenance réglementaire", agepass: true, competitor: false, selfbuild: false },
  { feature: "SLA contractuel 99,99%", agepass: true, competitor: false, selfbuild: false },
  { feature: "Support juridique inclus", agepass: true, competitor: false, selfbuild: false },
] as const;

/* ─── ComplianceSection ─────────────────────────────────────────────────── */

export function ComplianceSection() {
  return (
    <Section background="subtle" className="overflow-hidden">
      <Container size="xl">

        {/* Header */}
        <Reveal className="flex flex-col items-center gap-4 text-center mb-16 lg:mb-20">
          <Label>Conformité & Sécurité</Label>
          <Heading size="3xl" balance className="max-w-2xl">
            La réglementation évolue.<br />
            <span className="text-gradient-brand">Nous nous en occupons.</span>
          </Heading>
          <p className="text-[var(--text-secondary)] text-lg max-w-lg text-pretty">
            Votre équipe juridique dort tranquille. Nos experts suivent chaque
            évolution du cadre réglementaire européen pour vous.
          </p>
        </Reveal>

        {/* Certifications */}
        <RevealGroup stagger={0.06} className="flex flex-wrap justify-center gap-3 mb-16">
          {CERTS.map((cert) => (
            <RevealItem key={cert.name}>
              <div className={cn(
                "flex items-center gap-2.5 px-4 py-2.5 rounded-xl border text-sm font-medium",
                certColors[cert.color],
              )}>
                <CheckCircle2 className="w-4 h-4 shrink-0" strokeWidth={2} />
                <div>
                  <span className="font-semibold">{cert.name}</span>
                  <span className="ml-1.5 text-xs opacity-70">{cert.desc}</span>
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>

        {/* Two columns: security features + comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">

          {/* Security features */}
          <RevealGroup stagger={0.1} className="flex flex-col gap-5">
            <RevealItem>
              <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-2">Architecture de sécurité</h3>
            </RevealItem>
            {SECURITY_ITEMS.map((item) => {
              const Icon = item.icon;
              return (
                <RevealItem key={item.title}>
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-[var(--border-default)]">
                    <div className="w-9 h-9 rounded-xl bg-[var(--color-brand-50)] text-[var(--color-brand-600)] flex items-center justify-center shrink-0">
                      <Icon className="w-4.5 h-4.5" strokeWidth={1.75} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[var(--text-primary)] mb-1">{item.title}</p>
                      <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </RevealItem>
              );
            })}
          </RevealGroup>

          {/* Comparison table */}
          <Reveal>
            <div className="flex flex-col gap-4">
              <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-2">AgePass vs alternatives</h3>
              <div className="rounded-2xl border border-[var(--border-default)] overflow-hidden bg-white">
                {/* Header */}
                <div className="grid grid-cols-4 bg-[var(--bg-muted)] border-b border-[var(--border-default)] px-4 py-3">
                  <span className="text-xs font-semibold text-[var(--text-tertiary)] uppercase tracking-wider col-span-1">Fonctionnalité</span>
                  <span className="text-xs font-semibold text-[var(--color-brand-600)] uppercase tracking-wider text-center">AgePass</span>
                  <span className="text-xs font-semibold text-[var(--text-tertiary)] uppercase tracking-wider text-center">Concurrent</span>
                  <span className="text-xs font-semibold text-[var(--text-tertiary)] uppercase tracking-wider text-center">In-house</span>
                </div>
                {COMPARISON.map((row, i) => (
                  <motion.div
                    key={row.feature}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                    className="grid grid-cols-4 px-4 py-3 border-b border-[var(--border-default)] last:border-b-0 items-center"
                  >
                    <span className="text-xs text-[var(--text-secondary)] col-span-1 pr-2">{row.feature}</span>
                    <Cell value={row.agepass} highlight />
                    <Cell value={row.competitor} />
                    <Cell value={row.selfbuild} />
                  </motion.div>
                ))}
              </div>

              {/* Warning note */}
              <div className="flex items-start gap-3 px-4 py-3 rounded-xl bg-amber-50 border border-amber-200">
                <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" strokeWidth={2} />
                <p className="text-xs text-amber-700 leading-relaxed">
                  <strong>Amende DSA jusqu&apos;à 6% du CA mondial</strong> pour non-conformité à l&apos;Article 28.
                  Ne laissez pas ce risque peser sur votre entreprise.
                </p>
              </div>
            </div>
          </Reveal>

        </div>
      </Container>
    </Section>
  );
}

function Cell({ value, highlight }: { value: boolean | string; highlight?: boolean }) {
  if (typeof value === "string") {
    return (
      <span className={cn(
        "text-xs font-semibold text-center",
        highlight ? "text-[var(--color-brand-600)]" : "text-[var(--text-secondary)]",
      )}>
        {value}
      </span>
    );
  }
  return (
    <div className="flex justify-center">
      {value
        ? <CheckCircle2 className={cn("w-4 h-4", highlight ? "text-[var(--color-success-500)]" : "text-[var(--color-neutral-400)]")} strokeWidth={2.5} />
        : <span className="w-4 h-4 flex items-center justify-center text-[var(--color-neutral-300)] text-lg leading-none">×</span>
      }
    </div>
  );
}
