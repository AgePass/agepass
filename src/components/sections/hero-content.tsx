"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Zap, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/motion/magnetic";
import { AnimationConfig } from "@/lib/animations/config";

const ease = AnimationConfig.entrance.ease;

/* ─── Item animation factory ───────────────────────────────────────────── */
function item(delay: number) {
  return {
    initial:  { opacity: 0, y: 22 },
    animate:  { opacity: 1, y: 0, transition: { duration: 0.7, ease, delay } },
  };
}

/* ─── Benefits ─────────────────────────────────────────────────────────── */
const BENEFITS = [
  { Icon: ShieldCheck, text: "Conforme DSA, eIDAS 2.0 & loi Protéger les mineurs" },
  { Icon: Zap,         text: "Intégration en 48 h — Go-Live en moins d'une semaine" },
  { Icon: Lock,        text: "Zéro donnée personnelle collectée ou transmise" },
] as const;

/* ─── Avatars de social proof ───────────────────────────────────────────── */
const AVATARS = [
  { initials: "CA", gradient: "from-[var(--color-brand-500)] to-indigo-500" },
  { initials: "MV", gradient: "from-indigo-500 to-violet-500" },
  { initials: "JL", gradient: "from-violet-500 to-purple-600" },
  { initials: "SB", gradient: "from-slate-600 to-slate-700" },
];

/* ─── HeroContent ───────────────────────────────────────────────────────── */

export function HeroContent() {
  return (
    <div className="flex flex-col items-start">

      {/* ── Badge ────────────────────────────────────────────────────── */}
      <motion.div {...item(0.05)} className="mb-8">
        <span className={[
          "inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full",
          "bg-[var(--color-brand-50)] border border-[var(--color-brand-200)]",
          "text-[11px] font-semibold tracking-[0.06em] uppercase",
          "text-[var(--color-brand-700)]",
          "shadow-[0_0_0_4px_rgba(51,102,255,0.06)]",
        ].join(" ")}>
          <span className="relative flex h-1.5 w-1.5 shrink-0">
            <motion.span
              className="absolute inline-flex h-full w-full rounded-full bg-[var(--color-brand-500)] opacity-75"
              animate={{ scale: [1, 2.2, 1], opacity: [0.75, 0, 0.75] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut", repeatDelay: 0.5 }}
            />
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[var(--color-brand-500)]" />
          </span>
          Certifié ANSSI · Conforme eIDAS 2.0
        </span>
      </motion.div>

      {/* ── Headline ─────────────────────────────────────────────────── */}
      <motion.h1
        {...item(0.15)}
        className="text-[2.75rem] sm:text-[3.4rem] lg:text-[3.8rem] xl:text-[4.4rem] font-bold leading-[1.04] tracking-[-0.045em] text-[var(--text-primary)] text-balance"
      >
        L&apos;infrastructure
        <br />
        de conformité
        <br />
        <span
          style={{
            background: "linear-gradient(135deg, var(--color-brand-600) 0%, var(--color-brand-500) 30%, #6366f1 60%, #8b5cf6 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          pour le retrait{" "}
          <br className="hidden sm:block" />
          autonome.
        </span>
      </motion.h1>

      {/* ── Sous-titre ───────────────────────────────────────────────── */}
      <motion.p
        {...item(0.3)}
        className={[
          "mt-6 text-lg sm:text-xl leading-[1.65]",
          "text-[var(--text-secondary)]",
          "max-w-[500px] text-pretty",
        ].join(" ")}
      >
        DSA, eIDAS&nbsp;2.0, loi Protéger les&nbsp;mineurs — chaque texte impose
        de nouvelles obligations. AgePass les absorbe toutes, sans modifier
        votre produit, sans stocker un seul octet.
      </motion.p>

      {/* ── CTAs ─────────────────────────────────────────────────────── */}
      <motion.div
        {...item(0.45)}
        className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-3"
      >
        <Magnetic strength={0.22}>
          <Button variant="brand" size="lg" asChild>
            <Link href="/demo" className="group inline-flex items-center gap-2">
              Demander une démo
              <motion.span
                className="inline-flex"
                animate={{ x: [0, 3, 0] }}
                transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut", repeatDelay: 1 }}
              >
                <ArrowRight className="w-4 h-4" />
              </motion.span>
            </Link>
          </Button>
        </Magnetic>

        <Magnetic strength={0.18}>
          <Button variant="outline" size="lg" asChild>
            <Link href="/solution">Voir la solution</Link>
          </Button>
        </Magnetic>
      </motion.div>

      {/* ── Bénéfices ────────────────────────────────────────────────── */}
      <motion.ul
        {...item(0.58)}
        className="mt-10 flex flex-col gap-3.5 list-none"
        aria-label="Atouts clés d'AgePass"
      >
        {BENEFITS.map(({ Icon, text }) => (
          <li key={text} className="flex items-center gap-3">
            <span className="w-5 h-5 rounded-full bg-[var(--color-brand-50)] border border-[var(--color-brand-200)] flex items-center justify-center shrink-0">
              <Icon className="w-2.5 h-2.5 text-[var(--color-brand-600)]" strokeWidth={2.5} />
            </span>
            <span className="text-sm text-[var(--text-secondary)] leading-snug">{text}</span>
          </li>
        ))}
      </motion.ul>

      {/* ── Social proof ─────────────────────────────────────────────── */}
      <motion.div
        {...item(0.72)}
        className="mt-12 flex items-center gap-4"
      >
        {/* Avatars empilés */}
        <div className="flex -space-x-2" aria-hidden="true">
          {AVATARS.map(({ initials, gradient }) => (
            <div
              key={initials}
              className={[
                "w-8 h-8 rounded-full flex items-center justify-center",
                "text-white text-[10px] font-bold",
                "border-2 border-white",
                "bg-gradient-to-br",
                gradient,
              ].join(" ")}
            >
              {initials}
            </div>
          ))}
          {/* +N */}
          <div className="w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-bold bg-[var(--bg-muted)] border-2 border-white text-[var(--text-secondary)]">
            +36
          </div>
        </div>

        {/* Texte + étoiles */}
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-0.5" role="img" aria-label="Note 4,9 sur 5">
            {Array.from({ length: 5 }).map((_, i) => (
              <svg key={i} className="w-3 h-3 fill-amber-400" viewBox="0 0 20 20" aria-hidden="true">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
            ))}
            <span className="ml-1 text-[11px] font-semibold text-[var(--text-primary)]">4,9</span>
          </div>
          <p className="text-[12px] text-[var(--text-tertiary)]">
            <strong className="font-semibold text-[var(--text-primary)]">+40 plateformes</strong> conformes en Europe
          </p>
        </div>
      </motion.div>
    </div>
  );
}
