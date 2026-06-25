"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, Loader2, CheckCircle2, Lock } from "lucide-react";
import { cn } from "@/lib/utils";

/* ─── Screen states ────────────────────────────────────────────────────── */

type ScreenState = "idle" | "verifying" | "verified";

const CYCLE: ScreenState[] = ["idle", "verifying", "verified"];
const DURATIONS: Record<ScreenState, number> = {
  idle:      2800,
  verifying: 3200,
  verified:  4000,
};

/* ─── Screen content ───────────────────────────────────────────────────── */

function ScreenIdle() {
  return (
    <div className="flex flex-col items-center gap-5 px-6 py-2">
      {/* Logo AgePass */}
      <div className="flex flex-col items-center gap-2">
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[var(--color-brand-500)] to-indigo-600 flex items-center justify-center shadow-[0_4px_16px_rgba(51,102,255,0.4)]">
          <ShieldCheck className="w-6 h-6 text-white" strokeWidth={2} />
        </div>
        <span className="text-base font-bold tracking-tight text-[var(--color-neutral-900)]">
          AgePass
        </span>
      </div>

      {/* Titre */}
      <div className="flex flex-col items-center gap-1.5 text-center">
        <h3 className="text-sm font-semibold text-[var(--color-neutral-900)] leading-tight">
          Vérification d&apos;âge requise
        </h3>
        <p className="text-[11px] text-[var(--color-neutral-500)] leading-relaxed">
          Ce service est réservé aux majeurs.
          <br />Confirmez votre âge pour continuer.
        </p>
      </div>

      {/* Bouton principal */}
      <div className="w-full flex flex-col gap-2">
        <div className="w-full h-10 rounded-xl bg-gradient-to-r from-[var(--color-brand-500)] to-indigo-600 flex items-center justify-center gap-2 shadow-[0_4px_12px_rgba(51,102,255,0.35)]">
          <ShieldCheck className="w-4 h-4 text-white" strokeWidth={2.5} />
          <span className="text-[12px] font-semibold text-white">Vérifier via FranceConnect</span>
        </div>
        <div className="w-full h-8 rounded-xl border border-[var(--color-neutral-200)] flex items-center justify-center">
          <span className="text-[11px] font-medium text-[var(--color-neutral-500)]">Autres méthodes</span>
        </div>
      </div>

      {/* Mention RGPD */}
      <div className="flex items-start gap-1.5 px-1">
        <Lock className="w-3 h-3 text-[var(--color-neutral-400)] shrink-0 mt-0.5" />
        <p className="text-[10px] text-[var(--color-neutral-400)] leading-relaxed text-center">
          Aucune donnée personnelle n&apos;est collectée ni stockée.
        </p>
      </div>
    </div>
  );
}

function ScreenVerifying() {
  return (
    <div className="flex flex-col items-center justify-center gap-6 px-6 py-4 h-full">
      {/* Spinner animé */}
      <div className="relative flex items-center justify-center">
        <motion.div
          className="w-16 h-16 rounded-full border-2 border-[var(--color-brand-100)]"
          style={{ borderTopColor: "var(--color-brand-500)" }}
          animate={{ rotate: 360 }}
          transition={{ duration: 0.8, ease: "linear", repeat: Infinity }}
        />
        <div className="absolute w-10 h-10 rounded-full bg-[var(--color-brand-50)] flex items-center justify-center">
          <ShieldCheck className="w-5 h-5 text-[var(--color-brand-500)]" strokeWidth={2} />
        </div>
      </div>

      <div className="flex flex-col items-center gap-1.5 text-center">
        <p className="text-sm font-semibold text-[var(--color-neutral-900)]">
          Vérification en cours…
        </p>
        <p className="text-[11px] text-[var(--color-neutral-500)]">
          Communication sécurisée avec<br />FranceConnect+
        </p>
      </div>

      {/* Barre de progression */}
      <div className="w-full h-1 bg-[var(--color-neutral-100)] rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-[var(--color-brand-500)] to-indigo-500"
          initial={{ width: "0%" }}
          animate={{ width: "85%" }}
          transition={{ duration: 2.8, ease: "easeOut" }}
        />
      </div>

      <div className="flex items-center gap-1.5">
        <Loader2 className="w-3 h-3 text-[var(--color-brand-400)] animate-spin" />
        <span className="text-[10px] text-[var(--color-neutral-400)]">Connexion chiffrée TLS 1.3</span>
      </div>
    </div>
  );
}

function ScreenVerified() {
  return (
    <div className="flex flex-col items-center gap-4 px-6 py-2">
      {/* Icône succès */}
      <div className="relative mt-1">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="w-16 h-16 rounded-full bg-gradient-to-br from-[var(--color-success-500)] to-emerald-400 flex items-center justify-center shadow-[0_4px_20px_rgba(34,197,94,0.4)]"
        >
          <CheckCircle2 className="w-8 h-8 text-white" strokeWidth={2} />
        </motion.div>
        {/* Ping */}
        <motion.div
          className="absolute inset-0 rounded-full bg-[var(--color-success-500)]"
          initial={{ scale: 1, opacity: 0.4 }}
          animate={{ scale: 1.7, opacity: 0 }}
          transition={{ duration: 1.0, ease: "easeOut", repeat: Infinity, repeatDelay: 1 }}
        />
      </div>

      {/* Résultat */}
      <div className="flex flex-col items-center gap-1 text-center">
        <p className="text-base font-bold text-[var(--color-neutral-900)]">Âge confirmé</p>
        <p className="text-[11px] text-[var(--color-neutral-500)]">Identité vérifiée via FranceConnect+</p>
      </div>

      {/* Badge conformité */}
      <div className="w-full rounded-xl bg-[var(--color-brand-50)] border border-[var(--color-brand-100)] p-3 flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-[var(--color-brand-500)] flex items-center justify-center shrink-0">
          <ShieldCheck className="w-4 h-4 text-white" strokeWidth={2.5} />
        </div>
        <div className="flex flex-col min-w-0">
          <span className="text-[11px] font-semibold text-[var(--color-brand-800)]">
            Conforme eIDAS 2.0
          </span>
          <span className="text-[10px] text-[var(--color-brand-600)]">
            Certifié ANSSI · RGPD compliant
          </span>
        </div>
      </div>

      {/* Stats */}
      <div className="flex items-center gap-3 w-full">
        <div className="flex-1 rounded-xl bg-[var(--color-neutral-50)] border border-[var(--color-neutral-100)] p-2.5 flex flex-col gap-0.5">
          <span className="text-[13px] font-bold text-[var(--color-neutral-900)] tabular-nums">487ms</span>
          <span className="text-[9px] text-[var(--color-neutral-400)] uppercase tracking-wider">Durée</span>
        </div>
        <div className="flex-1 rounded-xl bg-[var(--color-neutral-50)] border border-[var(--color-neutral-100)] p-2.5 flex flex-col gap-0.5">
          <span className="text-[13px] font-bold text-[var(--color-neutral-900)]">0</span>
          <span className="text-[9px] text-[var(--color-neutral-400)] uppercase tracking-wider">Données</span>
        </div>
      </div>
    </div>
  );
}

/* ─── FloatingPhone ────────────────────────────────────────────────────── */

interface FloatingPhoneProps {
  className?: string;
}

export function FloatingPhone({ className }: FloatingPhoneProps) {
  const [state, setState] = React.useState<ScreenState>("idle");

  React.useEffect(() => {
    let idx = 0;
    const tick = () => {
      idx = (idx + 1) % CYCLE.length;
      setState(CYCLE[idx]);
    };
    const id = setInterval(tick, DURATIONS[state]);
    return () => clearInterval(id);
  }, [state]);

  return (
    <div className={cn("relative flex items-center justify-center", className)}>
      {/* Glow derrière le téléphone */}
      <div
        aria-hidden="true"
        className="absolute inset-[-20%] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 70% 70% at 50% 55%, rgba(51,102,255,0.18) 0%, rgba(99,102,241,0.10) 40%, transparent 70%)",
          filter: "blur(24px)",
        }}
      />

      {/* Châssis du téléphone */}
      <div
        className="relative"
        style={{
          width: 220,
          height: 440,
          borderRadius: 44,
          background: "linear-gradient(145deg, #1a1a2e 0%, #0f0f1a 60%, #161628 100%)",
          boxShadow: [
            "0 40px 80px rgba(0,0,0,0.45)",
            "0 0 0 1px rgba(255,255,255,0.08)",
            "inset 0 1px 0 rgba(255,255,255,0.12)",
            "0 0 60px rgba(51,102,255,0.20)",
          ].join(", "),
        }}
      >
        {/* Bouton latéral droit */}
        <div
          aria-hidden="true"
          className="absolute right-[-3px] top-[100px] rounded-r-sm"
          style={{ width: 3, height: 48, background: "rgba(255,255,255,0.1)", borderRadius: "0 2px 2px 0" }}
        />

        {/* Boutons latéraux gauche */}
        {[64, 108].map((top) => (
          <div
            key={top}
            aria-hidden="true"
            className="absolute left-[-3px]"
            style={{
              width: 3, height: 32, top,
              background: "rgba(255,255,255,0.1)",
              borderRadius: "2px 0 0 2px",
            }}
          />
        ))}

        {/* Écran — inset avec bords */}
        <div
          className="absolute overflow-hidden bg-white"
          style={{
            inset: 5,
            borderRadius: 40,
          }}
        >
          {/* Dynamic Island */}
          <div
            aria-hidden="true"
            className="absolute top-3 left-1/2 -translate-x-1/2 z-10 rounded-full bg-black"
            style={{ width: 80, height: 22 }}
          />

          {/* Barre de statut */}
          <div className="absolute top-0 left-0 right-0 h-10 flex items-end justify-between px-5 pb-1 z-10">
            <span className="text-[9px] font-semibold text-[var(--color-neutral-900)]">9:41</span>
            <div className="flex items-center gap-1">
              {/* Signal */}
              <div className="flex items-end gap-px h-2.5">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-[3px] rounded-sm bg-[var(--color-neutral-900)]"
                    style={{ height: `${(i / 4) * 100}%`, opacity: i <= 3 ? 1 : 0.3 }}
                  />
                ))}
              </div>
              {/* Batterie */}
              <div className="flex items-center gap-0.5">
                <div className="w-5 h-2.5 rounded-[3px] border border-[var(--color-neutral-400)] relative flex items-center pl-0.5 pr-1">
                  <div className="h-1.5 rounded-[2px] bg-[var(--color-success-500)]" style={{ width: "70%" }} />
                </div>
              </div>
            </div>
          </div>

          {/* Reflet de l'écran */}
          <div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none z-20"
            style={{
              background: "linear-gradient(135deg, rgba(255,255,255,0.12) 0%, transparent 45%)",
            }}
          />

          {/* Contenu principal de l'écran */}
          <div className="absolute inset-0 flex flex-col pt-10 pb-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={state}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="flex-1 flex flex-col justify-center"
              >
                {state === "idle"      && <ScreenIdle />}
                {state === "verifying" && <ScreenVerifying />}
                {state === "verified"  && <ScreenVerified />}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
