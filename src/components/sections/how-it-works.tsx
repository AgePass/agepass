"use client";

import { motion } from "framer-motion";
import { Code2, ShieldCheck, CheckCircle2, ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/text";
import { Label } from "@/components/ui/text";
import { RevealGroup, RevealItem, Reveal } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";

/* ─── Step data ─────────────────────────────────────────────────────────── */

const STEPS = [
  {
    number: "01",
    icon: Code2,
    title: "Intégrez l'API",
    description: "Une ligne de code dans votre tunnel. Notre SDK JavaScript s'installe en quelques minutes et s'adapte à votre stack existante.",
    visual: <StepVisualCode />,
    color: "brand" as const,
  },
  {
    number: "02",
    icon: ShieldCheck,
    title: "Le widget se déclenche",
    description: "Au moment de l'accès sensible, AgePass prend le relais : vérification silencieuse, conforme, via FranceConnect+ ou eIDAS.",
    visual: <StepVisualWidget />,
    color: "indigo" as const,
  },
  {
    number: "03",
    icon: CheckCircle2,
    title: "Résultat instantané",
    description: "En moins de 500 ms, vous recevez un token signé indiquant le statut de majorité. Aucune donnée personnelle ne transite.",
    visual: <StepVisualResult />,
    color: "success" as const,
  },
] as const;

const colorMap = {
  brand:   { bg: "bg-[var(--color-brand-500)]",   ring: "ring-[var(--color-brand-200)]",   text: "text-[var(--color-brand-600)]",   light: "bg-[var(--color-brand-50)]" },
  indigo:  { bg: "bg-indigo-500",                  ring: "ring-indigo-200",                  text: "text-indigo-600",                  light: "bg-indigo-50" },
  success: { bg: "bg-[var(--color-success-500)]",  ring: "ring-[var(--color-success-500)]/30", text: "text-[var(--color-success-600)]", light: "bg-[var(--color-success-50)]" },
};

/* ─── Step visual components ────────────────────────────────────────────── */

function StepVisualCode() {
  return (
    <div className="w-full rounded-xl bg-[#011627] p-4 font-mono text-[11px] leading-relaxed shadow-lg">
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
        <span className="text-[#546e7a]">{`// Installation`}</span>
      </motion.div>
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }}>
        <span className="text-[#c3e88d]">npm</span>
        <span className="text-[#d6deeb]"> install </span>
        <span className="text-[#82aaff]">@agepass/sdk</span>
      </motion.div>
      <div className="mt-2" />
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.6 }}>
        <span className="text-[#c792ea]">import </span>
        <span className="text-[#d6deeb]">AgePass </span>
        <span className="text-[#c792ea]">from </span>
        <span className="text-[#c3e88d]">&apos;@agepass/sdk&apos;</span>
      </motion.div>
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.8 }}>
        <span className="text-[#d6deeb]">AgePass.</span>
        <span className="text-[#82aaff]">init</span>
        <span className="text-[#89ddff]">{"({ "}</span>
        <span className="text-[#f07178]">apiKey</span>
        <span className="text-[#89ddff]">: </span>
        <span className="text-[#c3e88d]">&apos;ap_live_***&apos;</span>
        <span className="text-[#89ddff]">{" })"}</span>
      </motion.div>
    </div>
  );
}

function StepVisualWidget() {
  return (
    <div className="w-full rounded-xl border border-[var(--border-default)] bg-white overflow-hidden shadow-lg">
      <div className="bg-gradient-to-r from-[var(--color-brand-500)] to-indigo-600 px-4 py-2 flex items-center gap-2">
        <ShieldCheck className="w-3.5 h-3.5 text-white" />
        <span className="text-[11px] font-semibold text-white">Vérification AgePass</span>
      </div>
      <div className="p-4 flex flex-col gap-3">
        <p className="text-[11px] text-[var(--text-secondary)]">Confirmez votre majorité via :</p>
        <motion.div
          className="flex items-center gap-2 p-2.5 rounded-lg bg-[var(--color-brand-50)] border border-[var(--color-brand-200)] cursor-pointer"
          whileHover={{ scale: 1.02 }}
        >
          <div className="w-5 h-5 rounded bg-[var(--color-brand-500)] flex items-center justify-center">
            <span className="text-white text-[8px] font-bold">FC</span>
          </div>
          <span className="text-[11px] font-medium text-[var(--color-brand-700)]">FranceConnect+</span>
        </motion.div>
        <div className="flex items-center gap-2 p-2.5 rounded-lg border border-[var(--border-default)]">
          <div className="w-5 h-5 rounded bg-slate-700 flex items-center justify-center">
            <span className="text-white text-[8px] font-bold">eI</span>
          </div>
          <span className="text-[11px] text-[var(--text-secondary)]">eID Européen</span>
        </div>
        <p className="text-[9px] text-[var(--text-tertiary)] text-center">Aucune donnée stockée · RGPD compliant</p>
      </div>
    </div>
  );
}

function StepVisualResult() {
  return (
    <div className="w-full rounded-xl border border-[var(--color-success-500)]/20 bg-[var(--color-success-50)] p-4 shadow-lg">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-10 h-10 rounded-full bg-[var(--color-success-500)] flex items-center justify-center shadow-[0_4px_12px_rgba(34,197,94,0.35)]">
          <CheckCircle2 className="w-5 h-5 text-white" strokeWidth={2.5} />
        </div>
        <div>
          <p className="text-[12px] font-bold text-[var(--color-neutral-900)]">Majorité confirmée</p>
          <p className="text-[10px] text-[var(--color-success-600)]">Temps de réponse : 312 ms</p>
        </div>
      </div>
      <div className="rounded-lg bg-white/70 border border-[var(--color-success-500)]/10 p-3 font-mono text-[10px]">
        <span className="text-[#546e7a]">{"{"}</span>
        <br />
        <span className="text-[#f07178] ml-3">verified</span>
        <span className="text-[#89ddff]">: </span>
        <span className="text-[#c792ea]">true</span>
        <span className="text-[#546e7a]">,</span>
        <br />
        <span className="text-[#f07178] ml-3">ageGroup</span>
        <span className="text-[#89ddff]">: </span>
        <span className="text-[#c3e88d]">&quot;18+&quot;</span>
        <br />
        <span className="text-[#546e7a]">{"}"}</span>
      </div>
    </div>
  );
}

/* ─── HowItWorksSection ──────────────────────────────────────────────────── */

export function HowItWorksSection() {
  return (
    <Section background="subtle" className="overflow-visible">
      <Container size="xl">

        {/* Header */}
        <Reveal className="flex flex-col items-center gap-4 text-center mb-16 lg:mb-20">
          <Label>Comment ça fonctionne</Label>
          <Heading size="3xl" balance className="max-w-xl">
            Trois étapes.<br />
            <span className="text-gradient-brand">Une intégration.</span>
          </Heading>
          <p className="text-[var(--text-secondary)] text-lg max-w-lg text-pretty">
            Pas de middleware complexe, pas de refonte de votre architecture.
            AgePass s&apos;insère dans votre produit existant.
          </p>
        </Reveal>

        {/* Steps */}
        <RevealGroup stagger={0.12} className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 relative">

          {/* Ligne de connexion desktop */}
          <div
            aria-hidden="true"
            className="hidden lg:block absolute top-[52px] left-[calc(16.666%+24px)] right-[calc(16.666%+24px)] h-px"
            style={{
              background: "linear-gradient(90deg, var(--color-brand-200) 0%, var(--color-brand-300) 50%, var(--color-brand-200) 100%)",
            }}
          >
            {/* Points animés sur la ligne */}
            {[0, 0.33, 0.66].map((pos, i) => (
              <motion.div
                key={i}
                className="absolute top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[var(--color-brand-400)]"
                style={{ left: `${pos * 100}%` }}
                animate={{ x: ["0%", "100%"] }}
                transition={{ duration: 2, delay: i * 0.3, repeat: Infinity, ease: "linear" }}
              />
            ))}
          </div>

          {STEPS.map((step) => {
            const colors = colorMap[step.color];
            const Icon = step.icon;
            return (
              <RevealItem key={step.number}>
                <div className="flex flex-col gap-5">
                  {/* Step header */}
                  <div className="flex items-center gap-4">
                    <div className={cn(
                      "relative w-12 h-12 rounded-2xl flex items-center justify-center ring-4 shadow-lg",
                      colors.bg, colors.ring
                    )}>
                      <Icon className="w-5 h-5 text-white" strokeWidth={2} />
                      <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-white border border-[var(--border-default)] text-[10px] font-bold text-[var(--text-secondary)] flex items-center justify-center shadow-sm">
                        {step.number.replace("0", "")}
                      </span>
                    </div>
                    <div>
                      <span className="text-[10px] font-semibold text-[var(--text-tertiary)] uppercase tracking-wider">Étape {step.number}</span>
                      <h3 className="text-base font-semibold text-[var(--text-primary)] mt-0.5">{step.title}</h3>
                    </div>
                  </div>

                  {/* Visual */}
                  <div className="w-full">{step.visual}</div>

                  {/* Description */}
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{step.description}</p>
                </div>
              </RevealItem>
            );
          })}
        </RevealGroup>

        {/* Bottom CTA */}
        <Reveal delay={0.4} className="flex justify-center mt-12">
          <a href="/demo" className={cn(
            "inline-flex items-center gap-2",
            "text-sm font-medium text-[var(--color-brand-600)]",
            "hover:text-[var(--color-brand-700)]",
            "transition-colors group",
          )}>
            Voir la documentation technique
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </Reveal>
      </Container>
    </Section>
  );
}
