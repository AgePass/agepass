"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Zap, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/motion/magnetic";
import { AnimationConfig } from "@/lib/animations/config";

/* ─── Animation helpers ───────────────────────────────────────────────── */

const ease   = AnimationConfig.entrance.ease;
const slower = AnimationConfig.entrance.duration * 1.1;

function item(delay: number) {
  return {
    hidden:  { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: slower, ease, delay } },
  };
}

/* ─── Benefit row ─────────────────────────────────────────────────────── */

const benefits = [
  { icon: ShieldCheck, text: "Conforme RGPD & eIDAS 2.0" },
  { icon: Zap,         text: "Réponse en moins de 500 ms" },
  { icon: Globe,       text: "Déployé dans 12 pays européens" },
] as const;

/* ─── HeroContent ─────────────────────────────────────────────────────── */

export function HeroContent() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col items-start gap-0"
    >
      {/* ── Badge ─────────────────────────────────────────────────────── */}
      <motion.div variants={item(0.1)} className="mb-8">
        <span className={[
          "inline-flex items-center gap-2",
          "px-3 py-1.5 rounded-full",
          "bg-[var(--color-brand-50)] border border-[var(--color-brand-200)]",
          "text-[11px] font-semibold tracking-wider uppercase",
          "text-[var(--color-brand-700)]",
        ].join(" ")}>
          {/* Dot animé */}
          <span className="relative flex h-1.5 w-1.5">
            <motion.span
              className="absolute inline-flex h-full w-full rounded-full bg-[var(--color-brand-400)] opacity-75"
              animate={{ scale: [1, 2, 1], opacity: [0.75, 0, 0.75] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            />
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[var(--color-brand-500)]" />
          </span>
          Conforme eIDAS 2.0 · Certifié ANSSI
        </span>
      </motion.div>

      {/* ── Headline ──────────────────────────────────────────────────── */}
      <motion.h1
        variants={item(0.2)}
        className={[
          "text-[2.6rem] leading-[1.08] font-bold tracking-[-0.04em]",
          "sm:text-[3.2rem]",
          "lg:text-[3.6rem]",
          "xl:text-[4.2rem]",
          "text-[var(--text-primary)]",
          "text-balance",
        ].join(" ")}
      >
        Vérifiez l&apos;âge.{" "}
        <br className="hidden sm:block" />
        <span
          className="inline-block"
          style={{
            background: "linear-gradient(135deg, var(--color-brand-700) 0%, var(--color-brand-500) 40%, #6366f1 70%, #8b5cf6 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Protégez tout
          <br className="hidden sm:block" />
          le reste.
        </span>
      </motion.h1>

      {/* ── Sous-titre ────────────────────────────────────────────────── */}
      <motion.p
        variants={item(0.35)}
        className={[
          "mt-6 text-lg leading-[1.65] text-[var(--text-secondary)]",
          "max-w-[480px]",
          "text-pretty",
        ].join(" ")}
      >
        AgePass vérifie l&apos;âge de vos utilisateurs en temps réel,{" "}
        sans jamais stocker, transmettre ni exposer leurs données personnelles.{" "}
        La première solution souveraine certifiée eIDAS&nbsp;2.0.
      </motion.p>

      {/* ── CTA ───────────────────────────────────────────────────────── */}
      <motion.div
        variants={item(0.48)}
        className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-3"
      >
        <Magnetic strength={0.25}>
          <Button
            variant="brand"
            size="lg"
            iconRight={<ArrowRight />}
            asChild
          >
            <Link href="/demo">
              Demander une démo
            </Link>
          </Button>
        </Magnetic>

        <Magnetic strength={0.2}>
          <Button
            variant="outline"
            size="lg"
            asChild
          >
            <Link href="/technologie">
              Voir la technologie
            </Link>
          </Button>
        </Magnetic>
      </motion.div>

      {/* ── Benefits ──────────────────────────────────────────────────── */}
      <motion.ul
        variants={item(0.62)}
        className="mt-10 flex flex-col gap-3 list-none"
        aria-label="Bénéfices clés"
      >
        {benefits.map(({ icon: Icon, text }) => (
          <li key={text} className="flex items-center gap-3">
            <span className="w-5 h-5 rounded-full bg-[var(--color-brand-50)] border border-[var(--color-brand-200)] flex items-center justify-center shrink-0">
              <Icon className="w-2.5 h-2.5 text-[var(--color-brand-600)]" strokeWidth={2.5} />
            </span>
            <span className="text-sm text-[var(--text-secondary)]">{text}</span>
          </li>
        ))}
      </motion.ul>

      {/* ── Social proof micro ────────────────────────────────────────── */}
      <motion.div
        variants={item(0.75)}
        className="mt-12 flex items-center gap-3"
      >
        {/* Avatars empilés */}
        <div className="flex -space-x-2" aria-hidden="true">
          {[
            { initials: "CA", bg: "bg-[var(--color-brand-500)]" },
            { initials: "MV", bg: "bg-indigo-500" },
            { initials: "JL", bg: "bg-violet-500" },
            { initials: "SB", bg: "bg-slate-600" },
          ].map(({ initials, bg }) => (
            <div
              key={initials}
              className={[
                "w-8 h-8 rounded-full flex items-center justify-center",
                "text-white text-[10px] font-semibold",
                "border-2 border-white",
                bg,
              ].join(" ")}
            >
              {initials}
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-0.5">
          <div className="flex items-center gap-0.5" aria-label="5 étoiles">
            {Array.from({ length: 5 }).map((_, i) => (
              <svg key={i} className="w-3 h-3 text-amber-400 fill-current" viewBox="0 0 20 20" aria-hidden="true">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
            ))}
          </div>
          <p className="text-xs text-[var(--text-tertiary)]">
            Déjà <strong className="text-[var(--text-primary)] font-semibold">+40 entreprises</strong> nous font confiance
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}
