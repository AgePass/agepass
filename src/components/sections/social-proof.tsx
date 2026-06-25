"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/text";
import { Label } from "@/components/ui/text";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";

/* ─── Logos ─────────────────────────────────────────────────────────────── */

const LOGOS = [
  { name: "Carrefour", abbr: "CA" },
  { name: "Fnac Darty", abbr: "FD" },
  { name: "Cdiscount", abbr: "CD" },
  { name: "Rakuten", abbr: "RK" },
  { name: "ManoMano", abbr: "MM" },
  { name: "Vente-Privée", abbr: "VP" },
  { name: "Showroomprivé", abbr: "SR" },
  { name: "La Redoute", abbr: "LR" },
] as const;

/* ─── Testimonials ──────────────────────────────────────────────────────── */

const TESTIMONIALS = [
  {
    quote: "On avait 3 semaines pour être conformes au DSA. AgePass nous a sauvé la mise. Intégration en une après-midi, zéro régression en production.",
    author: "Thomas Mercier",
    role: "CTO",
    company: "VinSupérieur.fr",
    sector: "E-commerce Alcool",
    stars: 5,
    avatar: "TM",
    color: "brand",
  },
  {
    quote: "Notre DPO était sceptique au départ. Après avoir vu l'architecture zéro-donnée, elle a validé en 10 minutes. AgePass a clairement pensé la conformité RGPD de façon native.",
    author: "Sarah Fontaine",
    role: "Product Lead",
    company: "SportBet Pro",
    sector: "Paris sportifs",
    stars: 5,
    avatar: "SF",
    color: "indigo",
  },
  {
    quote: "Notre équipe dév a adoré le SDK TypeScript. La doc est claire, le sandbox fonctionnel, et le support répond en moins d'une heure. C'est rare.",
    author: "Alexandre Dumont",
    role: "Lead Developer",
    company: "StreamMax",
    sector: "Streaming VOD",
    stars: 5,
    avatar: "AD",
    color: "success",
  },
] as const;

const avatarColors = {
  brand:   "bg-[var(--color-brand-100)] text-[var(--color-brand-700)]",
  indigo:  "bg-indigo-100 text-indigo-700",
  success: "bg-[var(--color-success-100)] text-[var(--color-success-700)]",
};

/* ─── Stats ─────────────────────────────────────────────────────────────── */

const STATS = [
  { value: "40+",    label: "plateformes intégrées" },
  { value: "2,1M",   label: "vérifications / mois" },
  { value: "99,97%", label: "taux de succès" },
  { value: "< 500ms", label: "temps de réponse p99" },
] as const;

/* ─── SocialProofSection ────────────────────────────────────────────────── */

export function SocialProofSection() {
  return (
    <Section background="subtle" className="overflow-hidden">
      <Container size="xl">

        {/* Header */}
        <Reveal className="flex flex-col items-center gap-4 text-center mb-16">
          <Label>Ils nous font confiance</Label>
          <Heading size="3xl" balance className="max-w-xl">
            Des équipes qui dorment<br />
            <span className="text-gradient-brand">mieux la nuit.</span>
          </Heading>
        </Reveal>

        {/* Logo band */}
        <Reveal className="mb-16">
          <div className="overflow-hidden relative">
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
              style={{ background: "linear-gradient(to right, var(--bg-subtle), transparent)" }} />
            <div className="absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
              style={{ background: "linear-gradient(to left, var(--bg-subtle), transparent)" }} />

            <motion.div
              className="flex gap-6 items-center"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 24, ease: "linear", repeat: Infinity }}
              style={{ width: "max-content" }}
            >
              {[...LOGOS, ...LOGOS].map((logo, i) => (
                <div
                  key={i}
                  className={cn(
                    "flex items-center gap-3 px-5 py-3 rounded-2xl",
                    "bg-white/80 border border-[var(--border-default)]",
                    "shadow-[0_1px_4px_rgba(0,0,0,0.06)]",
                    "whitespace-nowrap shrink-0",
                  )}
                >
                  <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-[var(--color-neutral-200)] to-[var(--color-neutral-300)] flex items-center justify-center text-[9px] font-bold text-[var(--color-neutral-600)] tracking-tight">
                    {logo.abbr}
                  </div>
                  <span className="text-[13px] font-semibold text-[var(--color-neutral-500)]">{logo.name}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </Reveal>

        {/* Stats — large editorial numbers */}
        <Reveal className="mb-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-[var(--border-default)] border border-[var(--border-default)] rounded-2xl overflow-hidden bg-white shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col items-center justify-center gap-1.5 py-8 px-4 text-center"
              >
                <span className="text-4xl lg:text-5xl font-black tabular-nums tracking-tight text-[var(--color-brand-600)]">{stat.value}</span>
                <span className="text-xs text-[var(--text-tertiary)] uppercase tracking-wider font-medium">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </Reveal>

        {/* Testimonials */}
        <RevealGroup stagger={0.12} className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
          {TESTIMONIALS.map((t) => (
            <RevealItem key={t.author}>
              <motion.div
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col gap-5 p-6 rounded-2xl bg-white border border-[var(--border-default)] h-full shadow-[0_1px_6px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-shadow duration-300"
              >
                {/* Stars */}
                <div className="flex gap-0.5">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Quote — no icon, editorial style */}
                <p className="text-[15px] text-[var(--text-primary)] leading-relaxed flex-1 font-medium">
                  &ldquo;{t.quote}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-[var(--border-default)]">
                  <div className={cn("w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold shrink-0", avatarColors[t.color])}>
                    {t.avatar}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">{t.author}</p>
                    <p className="text-xs text-[var(--text-tertiary)]">{t.role} · {t.company}</p>
                  </div>
                  <span className="ml-auto text-[10px] font-medium text-[var(--text-tertiary)] bg-[var(--bg-muted)] px-2 py-1 rounded-full shrink-0">
                    {t.sector}
                  </span>
                </div>
              </motion.div>
            </RevealItem>
          ))}
        </RevealGroup>

      </Container>
    </Section>
  );
}
