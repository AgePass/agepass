"use client";

import { motion } from "framer-motion";
import { HeroContent } from "./hero-content";
import { HeroVisual }  from "./hero-visual";

/**
 * HeroSection — 100vh, fond clair premium.
 *
 * Layout:
 * - Mobile/tablet : colonne — contenu puis visuel
 * - Desktop (lg+)  : grille 5/7 — contenu à gauche, visuel à droite
 *
 * Background layers (de bas en haut) :
 * 1. Blanc pur  — la fondation
 * 2. Mesh gradient bleu/violet discret
 * 3. Grille de points (via HeroVisual)
 * 4. Particules (via HeroVisual)
 * 5. Contenu
 */
export function HeroSection() {
  return (
    <section
      aria-label="AgePass — L'infrastructure de conformité pour le retrait autonome"
      className="relative w-full min-h-[100dvh] overflow-hidden flex flex-col"
    >
      {/* ── Background ─────────────────────────────────────────────── */}

      {/* Fond de base — blanc pur */}
      <div className="absolute inset-0 bg-white" aria-hidden="true" />

      {/* Mesh gradient — chaleur lumineuse très subtile */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background: [
            "radial-gradient(ellipse 80% 60% at 15% 5%,  rgba(51,102,255,0.07) 0%, transparent 55%)",
            "radial-gradient(ellipse 60% 50% at 85% 10%,  rgba(99,102,241,0.05) 0%, transparent 55%)",
            "radial-gradient(ellipse 50% 60% at 60% 95%,  rgba(139,92,246,0.05) 0%, transparent 55%)",
          ].join(", "),
        }}
      />

      {/* Ligne de séparation subtile en bas */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 inset-x-0 h-px"
        style={{
          background: "linear-gradient(90deg, transparent 0%, var(--color-neutral-200) 30%, var(--color-neutral-200) 70%, transparent 100%)",
        }}
      />

      {/* ── Layout principal ────────────────────────────────────────── */}
      <div className="relative z-10 flex-1 flex items-center w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 py-24 lg:py-0">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 xl:gap-16 items-center">

          {/* Colonne gauche — contenu */}
          <div className="lg:col-span-5 xl:col-span-5 flex flex-col justify-center">
            <HeroContent />
          </div>

          {/* Colonne droite — composition visuelle */}
          <div className="lg:col-span-7 xl:col-span-7 relative">
            {/* Hauteur adaptative */}
            <div className="relative w-full h-[480px] sm:h-[540px] lg:h-[calc(100dvh-8rem)] max-h-[700px]">
              <HeroVisual />
            </div>
          </div>

        </div>
      </div>

      {/* ── Scroll indicator ─────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <span className="text-[10px] uppercase tracking-[0.15em] text-[var(--text-tertiary)] font-medium">
          Découvrir
        </span>
        <div className="w-5 h-8 rounded-full border border-[var(--color-neutral-300)] flex items-start justify-center pt-1.5">
          <motion.div
            className="w-1 h-1.5 rounded-full bg-[var(--color-neutral-400)]"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
