"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/text";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";

export function CtaBannerSection() {
  return (
    <Section background="page" className="overflow-hidden py-0 pb-24 lg:pb-32">
      <Container size="xl">
        <Reveal>
          <div className={cn(
            "relative overflow-hidden rounded-3xl",
            "bg-[var(--color-neutral-950)]",
            "px-8 py-14 lg:px-16 lg:py-20",
          )}>
            {/* Background halos */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] pointer-events-none"
              style={{ background: "radial-gradient(circle, rgba(51,102,255,0.18) 0%, transparent 60%)", filter: "blur(60px)" }} />
            <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] pointer-events-none"
              style={{ background: "radial-gradient(circle, rgba(139,92,246,0.14) 0%, transparent 60%)", filter: "blur(60px)" }} />

            {/* Dot grid */}
            <div
              className="absolute inset-0 pointer-events-none opacity-[0.25]"
              style={{
                backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.18) 1px, transparent 1px)",
                backgroundSize: "24px 24px",
                maskImage: "radial-gradient(ellipse 90% 80% at 50% 50%, black 10%, transparent 80%)",
                WebkitMaskImage: "radial-gradient(ellipse 90% 80% at 50% 50%, black 10%, transparent 80%)",
              }}
            />
            {/* Grain texture */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.025]" aria-hidden="true">
              <filter id="noise-cta">
                <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
                <feColorMatrix type="saturate" values="0" />
              </filter>
              <rect width="100%" height="100%" filter="url(#noise-cta)" />
            </svg>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center gap-8 text-center max-w-3xl mx-auto">

              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.08] border border-white/[0.12] text-xs font-semibold text-[var(--color-neutral-300)]"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-success-400)] animate-pulse" />
                DSA Article 28 · En vigueur
              </motion.div>

              {/* Headline */}
              <Heading size="4xl" balance className="text-white leading-tight">
                Soyez conforme.{" "}
                <br className="hidden sm:block" />
                <span style={{
                  background: "linear-gradient(135deg, #82aaff 0%, #c792ea 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}>
                  En 30 minutes.
                </span>
              </Heading>

              <p className="text-[var(--color-neutral-400)] text-lg leading-relaxed max-w-lg">
                Rejoignez 40+ plateformes qui font confiance à AgePass pour leur conformité réglementaire.
                Premier mois gratuit, sans carte bancaire.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <Button size="lg" variant="gradient" iconRight={<ArrowRight />}>
                  Démarrer gratuitement
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  iconLeft={<Calendar />}
                  className="border-white/20 text-[var(--color-neutral-300)] hover:border-white/40 hover:text-white bg-white/[0.04] hover:bg-white/[0.08]"
                >
                  Planifier une démo
                </Button>
              </div>

              {/* Trust signals */}
              <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
                {["Sans carte bancaire", "Sandbox immédiat", "Support < 1h", "SLA 99,99%"].map((t) => (
                  <span key={t} className="text-xs text-[var(--color-neutral-600)] flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-[var(--color-neutral-700)]" />
                    {t}
                  </span>
                ))}
              </div>

            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
