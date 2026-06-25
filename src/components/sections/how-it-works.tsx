"use client";

import { motion } from "framer-motion";
import { Code2, ShieldCheck, CheckCircle2, ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/text";
import { Label } from "@/components/ui/text";
import { RevealGroup, RevealItem, Reveal } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";

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
  brand:   { bg: "bg-[var(--color-brand-500)]",   ring: "ring-[var(--color-brand-200)]",   text: "text-[var(--color-brand-600)]",   iconBg: "bg-[var(--color-brand-50)]",  num: "text-[var(--color-brand-100)]" },
  indigo:  { bg: "bg-indigo-500",                  ring: "ring-indigo-200",                  text: "text-indigo-600",                  iconBg: "bg-indigo-50",                num: "text-indigo-100" },
  success: { bg: "bg-[var(--color-success-500)]",  ring: "ring-[var(--color-success-300)]",  text: "text-[var(--color-success-600)]",  iconBg: "bg-[var(--color-success-50)]",num: "text-[var(--color-success-100)]" },
};

function StepVisualCode() {
  return (
    <div className="w-full rounded-2xl bg-[#011627] p-5 font-mono text-[12px] leading-relaxed shadow-[0_8px_32px_rgba(0,0,0,0.15)] border border-white/5">
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
        <span className="text-[#546e7a]">{`// Installation npm / yarn / pnpm`}</span>
      </motion.div>
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }} className="mt-1">
        <span className="text-[#c3e88d]">npm</span>
        <span className="text-[#d6deeb]"> install </span>
        <span className="text-[#82aaff]">@agepass/sdk</span>
      </motion.div>
      <div className="my-3 border-t border-white/5" />
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.6 }}>
        <span className="text-[#c792ea]">import </span>
        <span className="text-[#d6deeb]">AgePass </span>
        <span className="text-[#c792ea]">from </span>
        <span className="text-[#c3e88d]">&apos;@agepass/sdk&apos;</span>
      </motion.div>
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.8 }} className="mt-1">
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
    <div className="w-full rounded-2xl border border-[var(--border-default)] bg-white overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.08)]">
      <div className="bg-gradient-to-r from-[var(--color-brand-600)] to-indigo-600 px-4 py-3 flex items-center gap-2.5">
        <ShieldCheck className="w-4 h-4 text-white" />
        <span className="text-[12px] font-semibold text-white tracking-tight">Vérification AgePass</span>
      </div>
      <div className="p-4 flex flex-col gap-3">
        <p className="text-[11px] text-[var(--text-secondary)]">Confirmez votre majorité via :</p>
        <motion.div
          className="flex items-center gap-2.5 p-3 rounded-xl bg-[var(--color-brand-50)] border border-[var(--color-brand-200)] cursor-pointer"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.15 }}
        >
          <div className="w-6 h-6 rounded-lg bg-[var(--color-brand-500)] flex items-center justify-center shrink-0">
            <span className="text-white text-[9px] font-bold">FC+</span>
          </div>
          <span className="text-[12px] font-semibold text-[var(--color-brand-700)]">FranceConnect+</span>
          <CheckCircle2 className="w-3.5 h-3.5 text-[var(--color-brand-400)] ml-auto" />
        </motion.div>
        <div className="flex items-center gap-2.5 p-3 rounded-xl border border-[var(--border-default)] opacity-60">
          <div className="w-6 h-6 rounded-lg bg-slate-700 flex items-center justify-center shrink-0">
            <span className="text-white text-[9px] font-bold">eI</span>
          </div>
          <span className="text-[12px] text-[var(--text-secondary)]">eID Européen</span>
        </div>
        <p className="text-[10px] text-[var(--text-tertiary)] text-center pt-0.5">Aucune donnée stockée · RGPD compliant</p>
      </div>
    </div>
  );
}

function StepVisualResult() {
  return (
    <div className="w-full rounded-2xl border border-[var(--color-success-200)] bg-gradient-to-b from-[var(--color-success-50)] to-white p-5 shadow-[0_8px_32px_rgba(34,197,94,0.1)]">
      <div className="flex items-center gap-3 mb-4">
        <div className="relative">
          <div className="w-12 h-12 rounded-full bg-[var(--color-success-500)] flex items-center justify-center shadow-[0_4px_16px_rgba(34,197,94,0.4)]">
            <CheckCircle2 className="w-6 h-6 text-white" strokeWidth={2.5} />
          </div>
          <motion.div
            className="absolute inset-0 rounded-full bg-[var(--color-success-400)]"
            animate={{ scale: [1, 1.5], opacity: [0.3, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut" }}
          />
        </div>
        <div>
          <p className="text-[13px] font-bold text-[var(--color-neutral-900)]">Majorité confirmée</p>
          <p className="text-[11px] text-[var(--color-success-600)] font-medium">Temps de réponse : 312 ms</p>
        </div>
      </div>
      <div className="rounded-xl bg-[var(--color-neutral-950)] p-3 font-mono text-[11px] border border-white/5">
        <span className="text-[#546e7a]">{"{ "}</span>
        <span className="text-[#f07178]">verified</span>
        <span className="text-[#89ddff]">: </span>
        <span className="text-[#c792ea]">true</span>
        <span className="text-[#546e7a]">, </span>
        <span className="text-[#f07178]">ageGroup</span>
        <span className="text-[#89ddff]">: </span>
        <span className="text-[#c3e88d]">&quot;18+&quot;</span>
        <span className="text-[#546e7a]">{" }"}</span>
      </div>
    </div>
  );
}

export function HowItWorksSection() {
  return (
    <Section background="subtle" className="overflow-visible">
      <Container size="xl">

        <Reveal className="flex flex-col items-center gap-3 text-center mb-16 lg:mb-24">
          <Label>Comment ça fonctionne</Label>
          <Heading size="3xl" balance className="max-w-xl">
            Trois étapes.{" "}
            <span className="text-gradient-brand">Une intégration.</span>
          </Heading>
          <p className="text-[var(--text-secondary)] text-lg max-w-md text-balance mt-1">
            Pas de middleware complexe. AgePass s&apos;insère dans votre produit sans refonte de votre architecture.
          </p>
        </Reveal>

        <RevealGroup stagger={0.12} className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 relative">

          {/* Desktop connector line */}
          <div
            aria-hidden="true"
            className="hidden lg:block absolute top-[52px] left-[calc(16.666%+28px)] right-[calc(16.666%+28px)] h-px overflow-hidden"
            style={{ background: "linear-gradient(90deg, var(--color-brand-200) 0%, var(--color-brand-300) 50%, var(--color-brand-200) 100%)" }}
          >
            {[0, 0.8, 1.6].map((delay, i) => (
              <motion.div
                key={i}
                className="absolute top-0 h-full w-8"
                style={{ background: "linear-gradient(90deg, transparent, var(--color-brand-500), transparent)", left: "-8%" }}
                animate={{ left: ["-8%", "108%"] }}
                transition={{ duration: 2.2, delay, repeat: Infinity, ease: "linear" }}
              />
            ))}
          </div>

          {STEPS.map((step) => {
            const colors = colorMap[step.color];
            const Icon = step.icon;
            return (
              <RevealItem key={step.number}>
                <div className="relative flex flex-col gap-5">
                  {/* Large decorative number — watermark */}
                  <span
                    aria-hidden="true"
                    className={cn(
                      "absolute -top-4 -right-2 text-[120px] font-black leading-none select-none pointer-events-none",
                      "opacity-[0.07]",
                      colors.num.replace("text-", "text-[var(--color-brand-400)]"),
                    )}
                    style={{ color: step.color === "brand" ? "var(--color-brand-400)" : step.color === "indigo" ? "#6366f1" : "var(--color-success-400)" }}
                  >
                    {step.number}
                  </span>

                  {/* Step header */}
                  <div className="flex items-center gap-4 relative z-10">
                    <div className={cn(
                      "relative w-12 h-12 rounded-2xl flex items-center justify-center ring-4 shadow-lg",
                      colors.bg, colors.ring
                    )}>
                      <Icon className="w-5 h-5 text-white" strokeWidth={2} />
                      <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-white border border-[var(--border-default)] text-[10px] font-bold text-[var(--text-secondary)] flex items-center justify-center shadow-sm">
                        {parseInt(step.number, 10)}
                      </span>
                    </div>
                    <div>
                      <span className="text-[10px] font-semibold text-[var(--text-tertiary)] uppercase tracking-wider">Étape {step.number}</span>
                      <h3 className="text-base font-semibold text-[var(--text-primary)] mt-0.5">{step.title}</h3>
                    </div>
                  </div>

                  <div className="w-full relative z-10">{step.visual}</div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{step.description}</p>
                </div>
              </RevealItem>
            );
          })}
        </RevealGroup>

        <Reveal delay={0.4} className="flex justify-center mt-14">
          <a href="/docs" className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-brand-600)] hover:text-[var(--color-brand-700)] transition-colors group">
            Voir la documentation technique
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </Reveal>
      </Container>
    </Section>
  );
}
