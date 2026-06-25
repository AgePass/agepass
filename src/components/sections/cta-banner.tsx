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
              className="absolute inset-0 pointer-events-none opacity-30"
              style={{
                backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)",
                backgroundSize: "28px 28px",
                maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 20%, transparent 80%)",
                WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 20%, transparent 80%)",
              }}
            />

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
                Conformité DSA obligatoire au 17 février 2024
              </motion.div>

              {/* Headline */}
              <Heading size="4xl" balance className="text-white leading-tight">
                Votre mise en conformité<br />
                commence{" "}
                <span style={{
                  background: "linear-gradient(135deg, #82aaff 0%, #c792ea 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}>
                  aujourd&apos;hui.
                </span>
              </Heading>

              <p className="text-[var(--color-neutral-400)] text-lg leading-relaxed max-w-xl">
                Rejoignez plus de 40 plateformes qui ont choisi AgePass pour sécuriser
                leur accès aux contenus sensibles. Premier mois inclus.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <Button size="lg" variant="gradient" iconRight={<ArrowRight />}>
                  Commencer gratuitement
                </Button>
                <Button
                  size="lg"
                  variant="ghost"
                  iconLeft={<Calendar />}
                  className="text-[var(--color-neutral-300)] hover:text-white hover:bg-white/[0.06]"
                >
                  Planifier une démo
                </Button>
              </div>

              {/* Trust line */}
              <p className="text-xs text-[var(--color-neutral-600)]">
                Aucune carte bancaire · Sandbox immédiat · Support en 1h
              </p>

            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
