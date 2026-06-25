"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Zap, Lock, Globe } from "lucide-react";
import { cn } from "@/lib/utils";
import { FloatingPhone } from "@/components/ui/floating-phone";
import { ParticleField } from "@/components/ui/particle-field";
import { AnimationConfig } from "@/lib/animations/config";

const ease = AnimationConfig.entrance.ease;

/* ─── Floating micro-card ──────────────────────────────────────────────── */

interface FloatingCardProps {
  icon:       React.ReactNode;
  label:      string;
  value:      string;
  accent:     "brand" | "success" | "neutral" | "violet";
  delay?:     number;
  floatAmp?:  number;
  className?: string;
}

const accentMap = {
  brand:   { icon: "bg-[var(--color-brand-50)] text-[var(--color-brand-600)]",   value: "text-[var(--color-brand-700)]" },
  success: { icon: "bg-[var(--color-success-50)] text-[var(--color-success-600)]", value: "text-[var(--color-success-600)]" },
  neutral: { icon: "bg-[var(--bg-muted)] text-[var(--text-secondary)]",           value: "text-[var(--text-primary)]" },
  violet:  { icon: "bg-violet-50 text-violet-600",                                value: "text-violet-700" },
};

function FloatingCard({ icon, label, value, accent, delay = 0, floatAmp = 6, className }: FloatingCardProps) {
  const colors = accentMap[accent];
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 16 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.7, ease, delay }}
      className={cn("absolute z-30", className)}
    >
      <motion.div
        animate={{ y: [-floatAmp / 2, floatAmp / 2] }}
        transition={{ duration: 2.8 + delay * 0.4, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
      >
        {/* Halo derrière */}
        <div className="absolute -inset-2 rounded-2xl bg-[var(--color-brand-200)] opacity-20 blur-xl pointer-events-none" />
        {/* Card */}
        <div className={cn(
          "relative flex items-center gap-3 pl-3 pr-4 py-2.5 rounded-2xl",
          "bg-white/90 backdrop-blur-md",
          "border border-white/60",
          "shadow-[0_8px_32px_rgba(0,0,0,0.10),0_2px_8px_rgba(0,0,0,0.06),0_0_0_1px_rgba(0,0,0,0.04)]",
        )}>
          <div className={cn("w-7 h-7 rounded-xl flex items-center justify-center shrink-0", colors.icon)}>
            {icon}
          </div>
          <div className="flex flex-col">
            <span className="text-[9px] font-semibold uppercase tracking-[0.08em] text-[var(--text-tertiary)] leading-none mb-0.5">
              {label}
            </span>
            <span className={cn("text-[12px] font-bold leading-none", colors.value)}>
              {value}
            </span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ─── Dashboard card — tableau de bord B2B en arrière-plan ──────────────── */

function DashboardCard() {
  const metrics = [
    { label: "Vérifications aujourd'hui", value: "24 891", delta: "+12%", color: "text-[var(--color-success-600)]" },
    { label: "Taux de conformité",         value: "99.97%",  delta: "SLA",  color: "text-[var(--color-brand-600)]" },
    { label: "Temps de réponse moy.",      value: "312 ms",  delta: "p95",  color: "text-[var(--text-primary)]" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 24, y: -16 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 0.9, ease, delay: 1.0 }}
      className="absolute -top-6 -right-4 w-[220px] z-20"
    >
      <motion.div
        animate={{ y: [-4, 4] }}
        transition={{ duration: 5, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
      >
        <div className={cn(
          "rounded-2xl overflow-hidden",
          "bg-[var(--color-neutral-900)]/95 backdrop-blur-xl",
          "border border-white/10",
          "shadow-[0_16px_48px_rgba(0,0,0,0.3),0_0_0_1px_rgba(255,255,255,0.06)]",
          "p-4 flex flex-col gap-3",
        )}>
          {/* Header */}
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-semibold text-[var(--color-neutral-400)] uppercase tracking-wider">
              Dashboard Conformité
            </span>
            <span className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-success-500)] animate-pulse" />
              <span className="text-[9px] text-[var(--color-success-400)]">Live</span>
            </span>
          </div>
          {/* Metrics */}
          <div className="flex flex-col gap-2.5">
            {metrics.map((m) => (
              <div key={m.label} className="flex items-center justify-between gap-2">
                <span className="text-[10px] text-[var(--color-neutral-500)] leading-tight">{m.label}</span>
                <div className="flex items-center gap-1.5 shrink-0">
                  <span className={cn("text-[11px] font-bold tabular-nums", m.color)}>{m.value}</span>
                  <span className="text-[9px] text-[var(--color-neutral-600)] bg-[var(--color-neutral-800)] px-1 py-0.5 rounded">{m.delta}</span>
                </div>
              </div>
            ))}
          </div>
          {/* Sparkline */}
          <div className="h-8 flex items-end gap-0.5">
            {[3,5,4,7,6,8,7,9,8,11,9,12,10,13,11,14,12,16,14,18].map((v, i) => (
              <motion.div
                key={i}
                className="flex-1 rounded-sm bg-[var(--color-brand-500)]"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                style={{ height: `${(v / 18) * 100}%`, opacity: 0.4 + (i / 20) * 0.6, transformOrigin: "bottom" }}
                transition={{ duration: 0.4, delay: 1.2 + i * 0.03, ease: "easeOut" }}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ─── HeroVisual ───────────────────────────────────────────────────────── */

export function HeroVisual() {
  return (
    <div
      className="relative w-full h-full flex items-center justify-center"
      aria-hidden="true"
    >
      {/* ── Particules ambiantes ─────────────────────────────────────── */}
      <ParticleField />

      {/* ── Halos de lumière ─────────────────────────────────────────── */}
      {/* Halo principal bleu — en haut à droite */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "-15%", right: "-10%",
          width: 560, height: 560,
          background: "radial-gradient(circle, rgba(51,102,255,0.20) 0%, rgba(99,102,241,0.12) 40%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />
      {/* Halo violet — en bas à gauche */}
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: "0%", left: "-5%",
          width: 400, height: 400,
          background: "radial-gradient(circle, rgba(139,92,246,0.16) 0%, transparent 65%)",
          filter: "blur(50px)",
        }}
      />
      {/* Halo subtil central */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "30%", left: "30%",
          width: 300, height: 300,
          background: "radial-gradient(circle, rgba(51,102,255,0.08) 0%, transparent 60%)",
          filter: "blur(30px)",
        }}
      />

      {/* ── Grille de fond ───────────────────────────────────────────── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(51,102,255,0.12) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          maskImage: "radial-gradient(ellipse 85% 85% at 50% 50%, black 20%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(ellipse 85% 85% at 50% 50%, black 20%, transparent 80%)",
        }}
      />

      {/* ── Zone de composition ──────────────────────────────────────── */}
      <div className="relative flex items-center justify-center w-full max-w-[480px] mx-auto">

        {/* Dashboard B2B — arrière-plan top right */}
        <DashboardCard />

        {/* Téléphone principal — centre */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.0, ease, delay: 0.4 }}
          className="relative z-10"
        >
          <motion.div
            animate={{ y: [-6, 6] }}
            transition={{ duration: 4.5, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
          >
            <FloatingPhone />
          </motion.div>
        </motion.div>

        {/* ── Micro-cards flottantes ────────────────────────────────── */}

        <FloatingCard
          icon={<ShieldCheck className="w-3.5 h-3.5" />}
          label="Conformité"
          value="eIDAS 2.0 ✓"
          accent="brand"
          delay={1.1}
          floatAmp={5}
          className="-left-8 top-[22%] lg:-left-12"
        />

        <FloatingCard
          icon={<Zap className="w-3.5 h-3.5" />}
          label="Temps de réponse"
          value="< 500 ms"
          accent="neutral"
          delay={1.3}
          floatAmp={7}
          className="-left-6 bottom-[24%] lg:-left-10"
        />

        <FloatingCard
          icon={<Lock className="w-3.5 h-3.5" />}
          label="Données stockées"
          value="Zéro octet"
          accent="success"
          delay={1.5}
          floatAmp={6}
          className="-right-8 bottom-[18%] lg:-right-12"
        />

        <FloatingCard
          icon={<Globe className="w-3.5 h-3.5" />}
          label="Couverture"
          value="12 pays UE"
          accent="violet"
          delay={1.7}
          floatAmp={8}
          className="-right-4 top-[55%] lg:-right-8"
        />
      </div>
    </div>
  );
}
