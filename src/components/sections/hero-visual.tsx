"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Zap, Lock, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { BorderBeam } from "@/components/motion/border-beam";
import { variants, AnimationConfig } from "@/lib/animations/config";

/* ─── Floating micro-card ─────────────────────────────────────────────── */

interface FloatingCardProps {
  icon:    React.ReactNode;
  label:   string;
  value:   string;
  color:   "brand" | "success" | "neutral";
  delay?:  number;
  floatY?: [number, number];
  className?: string;
}

const colorTokens = {
  brand: {
    bg:   "bg-white border-[var(--border-default)]",
    icon: "bg-[var(--color-brand-50)] text-[var(--color-brand-600)]",
    text: "text-[var(--color-brand-700)]",
  },
  success: {
    bg:   "bg-white border-[var(--border-default)]",
    icon: "bg-[var(--color-success-50)] text-[var(--color-success-600)]",
    text: "text-[var(--color-success-600)]",
  },
  neutral: {
    bg:   "bg-white border-[var(--border-default)]",
    icon: "bg-[var(--bg-muted)] text-[var(--text-secondary)]",
    text: "text-[var(--text-primary)]",
  },
};

function FloatingCard({ icon, label, value, color, delay = 0, floatY = [-6, 6], className }: FloatingCardProps) {
  const tokens = colorTokens[color];

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden:  { opacity: 0, scale: 0.85, y: 12 },
        visible: {
          opacity: 1,
          scale: 1,
          y: 0,
          transition: { duration: 0.7, ease: AnimationConfig.entrance.ease, delay },
        },
      }}
      className={cn("absolute z-20", className)}
    >
      <motion.div
        animate={{ y: floatY }}
        transition={{
          duration: 3.5 + delay,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        {/* Halo derrière la card */}
        <div className="absolute inset-0 rounded-2xl blur-xl opacity-20 bg-[var(--color-brand-300)] scale-110 pointer-events-none" />

        <div
          className={cn(
            "relative flex items-center gap-3",
            "px-4 py-3 rounded-2xl border",
            "shadow-[var(--shadow-lg)]",
            "backdrop-blur-sm",
            tokens.bg
          )}
        >
          <div className={cn("w-8 h-8 rounded-xl flex items-center justify-center shrink-0", tokens.icon)}>
            {icon}
          </div>
          <div className="flex flex-col min-w-0">
            <span className="text-[10px] font-medium text-[var(--text-tertiary)] uppercase tracking-wider leading-none mb-0.5">
              {label}
            </span>
            <span className={cn("text-sm font-semibold leading-none", tokens.text)}>
              {value}
            </span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ─── Verification orb — le coeur de la composition ──────────────────── */

function VerificationOrb() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">

      {/* Anneau externe — rotation lente */}
      <motion.div
        className="absolute w-[340px] h-[340px] rounded-full border border-dashed border-[var(--color-brand-200)]"
        animate={{ rotate: 360 }}
        transition={{ duration: 40, ease: "linear", repeat: Infinity }}
        aria-hidden="true"
      >
        {/* Marqueur sur l'anneau */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[var(--color-brand-400)]" />
      </motion.div>

      {/* Anneau moyen — rotation inverse */}
      <motion.div
        className="absolute w-[260px] h-[260px] rounded-full border border-[var(--color-brand-100)]"
        animate={{ rotate: -360 }}
        transition={{ duration: 25, ease: "linear", repeat: Infinity }}
        aria-hidden="true"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-indigo-400" />
      </motion.div>

      {/* Disque intérieur — le glow central */}
      <motion.div
        className="absolute w-[180px] h-[180px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(51,102,255,0.15) 0%, rgba(99,102,241,0.08) 50%, transparent 70%)",
        }}
        animate={{ scale: [1, 1.08, 1], opacity: [0.8, 1, 0.8] }}
        transition={{ duration: 3, ease: "easeInOut", repeat: Infinity }}
        aria-hidden="true"
      />

      {/* Badge central */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1], delay: 0.6 }}
        className="relative z-10 w-24 h-24 rounded-[28px] bg-white border border-[var(--border-default)] shadow-[var(--shadow-xl)] flex items-center justify-center"
      >
        {/* Glow derrière le badge */}
        <div className="absolute inset-0 rounded-[28px] bg-[var(--color-brand-500)] opacity-10 blur-xl scale-150" />

        <div className="relative w-10 h-10 rounded-2xl bg-gradient-to-br from-[var(--color-brand-500)] to-indigo-500 flex items-center justify-center shadow-[0_4px_12px_rgba(51,102,255,0.4)]">
          <ShieldCheck className="w-5 h-5 text-white" strokeWidth={2.5} />
        </div>
      </motion.div>

      {/* Tick d'approbation animé */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.34, 1.56, 0.64, 1], delay: 1.1 }}
        className="absolute top-[18%] right-[18%] w-7 h-7 rounded-full bg-[var(--color-success-500)] flex items-center justify-center shadow-lg z-20"
      >
        <CheckCircle2 className="w-4 h-4 text-white" strokeWidth={2.5} />
      </motion.div>
    </div>
  );
}

/* ─── HeroVisual ──────────────────────────────────────────────────────── */

export function HeroVisual() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants.fadeIn}
      className="relative w-full h-full flex items-center justify-center"
      aria-hidden="true"
    >
      {/* ── Halos d'ambiance ──────────────────────────────────────────── */}
      <div
        className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(99,102,241,0.18) 0%, transparent 65%)",
          filter: "blur(40px)",
        }}
      />
      <div
        className="absolute bottom-[5%] left-[-10%] w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(51,102,255,0.14) 0%, transparent 65%)",
          filter: "blur(50px)",
        }}
      />

      {/* ── Conteneur principal ───────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 24 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.9, ease: AnimationConfig.entrance.ease, delay: 0.3 }}
        className={cn(
          "relative w-full max-w-[520px] aspect-[4/4.2] lg:aspect-[4/4.5]",
          "rounded-[var(--radius-3xl)] overflow-visible",
        )}
      >
        {/* Surface principale — glass panel */}
        <div className={cn(
          "relative w-full h-full rounded-[var(--radius-3xl)] overflow-hidden",
          "bg-gradient-to-br from-white via-[var(--bg-subtle)] to-[var(--color-brand-50)]",
          "border border-[var(--border-default)]",
          "shadow-[0_32px_64px_-12px_rgba(0,0,0,0.12),0_0_0_1px_rgba(0,0,0,0.04)]",
        )}>
          {/* Grille de fond */}
          <div
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage: "radial-gradient(circle, var(--color-neutral-300) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
              maskImage: "radial-gradient(ellipse 90% 90% at 50% 50%, black 30%, transparent 100%)",
              WebkitMaskImage: "radial-gradient(ellipse 90% 90% at 50% 50%, black 30%, transparent 100%)",
            }}
            aria-hidden="true"
          />

          {/* Gradient subtil en haut */}
          <div
            className="absolute inset-x-0 top-0 h-48 pointer-events-none"
            style={{
              background: "linear-gradient(180deg, rgba(51,102,255,0.06) 0%, transparent 100%)",
            }}
          />

          {/* Orb central avec les anneaux */}
          <VerificationOrb />

          {/* Border beam — visible sur le panel principal */}
          <BorderBeam
            duration={12}
            colorFrom="rgba(51,102,255,0.6)"
            colorTo="rgba(139,92,246,0.4)"
          />
        </div>

        {/* ── Floating cards — positionnées en dehors du panel ──────── */}

        {/* Card 1 — Vérification confirmée (haut gauche) */}
        <FloatingCard
          icon={<CheckCircle2 className="w-4 h-4" />}
          label="Statut"
          value="Âge vérifié"
          color="success"
          delay={0.8}
          floatY={[-5, 5]}
          className="-left-12 top-[12%] xl:-left-16"
        />

        {/* Card 2 — Conformité (bas gauche) */}
        <FloatingCard
          icon={<ShieldCheck className="w-4 h-4" />}
          label="Conformité"
          value="eIDAS 2.0"
          color="brand"
          delay={1.0}
          floatY={[-7, 4]}
          className="-left-10 bottom-[18%] xl:-left-14"
        />

        {/* Card 3 — Vitesse (haut droit) */}
        <FloatingCard
          icon={<Zap className="w-4 h-4" />}
          label="Temps de réponse"
          value="< 500 ms"
          color="neutral"
          delay={1.2}
          floatY={[-4, 8]}
          className="-right-10 top-[22%] xl:-right-14"
        />

        {/* Card 4 — Zéro donnée (bas droit) */}
        <FloatingCard
          icon={<Lock className="w-4 h-4" />}
          label="Données stockées"
          value="Aucune"
          color="neutral"
          delay={1.4}
          floatY={[-6, 6]}
          className="-right-10 bottom-[14%] xl:-right-14"
        />
      </motion.div>
    </motion.div>
  );
}
