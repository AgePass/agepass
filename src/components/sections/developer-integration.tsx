"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Terminal, Webhook, Key, BookOpen, ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/text";
import { Label } from "@/components/ui/text";
import { CodeBlock, type CodeLine } from "@/components/ui/code-block";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";

/* ─── Code examples ─────────────────────────────────────────────────────── */

const INSTALL_CODE: CodeLine[] = [
  [["comment", "# npm / yarn / pnpm"]],
  [["plain", "npm install "], ["function", "@agepass/sdk"]],
  [["plain", ""]],
  [["comment", "# ou via CDN"]],
  [["keyword", "<script "], ["property", "src"], ["operator", "="], ["string", '"https://cdn.agepass.fr/v2/sdk.min.js"'], ["keyword", ">"], ["keyword", "</script>"]],
];

const USAGE_CODE: CodeLine[] = [
  [["keyword", "import "], ["plain", "{ AgePass } "], ["keyword", "from "], ["string", "'@agepass/sdk'"]],
  [["plain", ""]],
  [["comment", "// Initialisation une seule fois"]],
  [["keyword", "const "], ["plain", "ap "], ["operator", "= "], ["keyword", "new "], ["function", "AgePass"], ["punctuation", "({"]],
  [["property", "  apiKey"], ["operator", ": "], ["string", "'ap_live_xxxxxxxxxxxxxxxx'"], ["punctuation", ","]],
  [["property", "  locale"], ["operator", ": "], ["string", "'fr'"], ["punctuation", ","]],
  [["property", "  onSuccess"], ["operator", ": "], ["punctuation", "("], ["plain", "token"], ["punctuation", ") => {"]],
  [["comment", "    // token.verified === true"]],
  [["comment", "    // token.ageGroup === '18+'"]],
  [["function", "    handleVerified"], ["punctuation", "("], ["plain", "token"], ["punctuation", ")"]],
  [["punctuation", "  },"]],
  [["punctuation", "})"]],
  [["plain", ""]],
  [["comment", "// Déclencher la vérification"]],
  [["plain", "ap."], ["function", "verify"], ["punctuation", "("], ["punctuation", ")"]],
];

const WEBHOOK_CODE: CodeLine[] = [
  [["comment", "// POST https://votre-app.fr/webhooks/agepass"]],
  [["punctuation", "{"]],
  [["property", "  \"event\""], ["operator", ": "], ["string", "\"age_verified\""], ["punctuation", ","]],
  [["property", "  \"verified\""], ["operator", ": "], ["keyword", "true"], ["punctuation", ","]],
  [["property", "  \"ageGroup\""], ["operator", ": "], ["string", "\"18+\""], ["punctuation", ","]],
  [["property", "  \"sessionId\""], ["operator", ": "], ["string", "\"ses_xxxxxxxxxxx\""], ["punctuation", ","]],
  [["property", "  \"timestamp\""], ["operator", ": "], ["number", "1719320412"], ["punctuation", ","]],
  [["property", "  \"signature\""], ["operator", ": "], ["string", "\"sha256=xxxxxxxxx\""]],
  [["punctuation", "}"]],
];

/* ─── Tab system ────────────────────────────────────────────────────────── */

const TABS = [
  { id: "install",  icon: Terminal, label: "Installation",   code: INSTALL_CODE,  filename: "terminal",      lang: "bash" },
  { id: "usage",    icon: Key,      label: "Intégration",    code: USAGE_CODE,    filename: "app.ts",        lang: "typescript" },
  { id: "webhook",  icon: Webhook,  label: "Webhook",        code: WEBHOOK_CODE,  filename: "webhook.json",  lang: "json" },
] as const;

type TabId = typeof TABS[number]["id"];

/* ─── Feature pills ─────────────────────────────────────────────────────── */

const FEATURES = [
  "TypeScript natif",
  "React / Vue / Svelte",
  "Next.js App Router",
  "PHP / Python / Ruby",
  "REST & GraphQL API",
  "SDK mobile iOS & Android",
  "Plugins Shopify & WooCommerce",
  "Webhooks signés HMAC",
];

/* ─── DeveloperIntegrationSection ──────────────────────────────────────── */

export function DeveloperIntegrationSection() {
  const [activeTab, setActiveTab] = React.useState<TabId>("install");
  const current = TABS.find((t) => t.id === activeTab)!;

  return (
    <Section background="inverse" className="overflow-hidden relative">
      {/* Halos */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(51,102,255,0.12) 0%, transparent 60%)", filter: "blur(60px)" }} />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(139,92,246,0.10) 0%, transparent 60%)", filter: "blur(50px)" }} />

      <Container size="xl" className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left — text */}
          <Reveal className="flex flex-col gap-6">
            <Label className="text-[var(--color-brand-300)]">Documentation développeurs</Label>
            <Heading size="3xl" balance className="text-white">
              Une API que vos devs<br />
              <span style={{
                background: "linear-gradient(135deg, #82aaff 0%, #c792ea 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                vont adorer.
              </span>
            </Heading>
            <p className="text-[var(--color-neutral-400)] text-lg leading-relaxed">
              SDK JavaScript avec TypeScript natif, documentation interactive,
              sandbox de test et exemples pour tous les frameworks.
              Pas de surprise en production.
            </p>

            {/* Feature pills */}
            <div className="flex flex-wrap gap-2">
              {FEATURES.map((f) => (
                <span
                  key={f}
                  className={cn(
                    "px-3 py-1 rounded-full text-xs font-medium",
                    "bg-white/[0.06] text-[var(--color-neutral-300)]",
                    "border border-white/[0.08]",
                  )}
                >
                  {f}
                </span>
              ))}
            </div>

            {/* CTA */}
            <div className="flex items-center gap-6 pt-2">
              <a
                href="/docs"
                className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-[var(--color-brand-300)] transition-colors group"
              >
                <BookOpen className="w-4 h-4" />
                Documentation complète
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="/sandbox"
                className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-neutral-400)] hover:text-[var(--color-neutral-200)] transition-colors"
              >
                Sandbox gratuit →
              </a>
            </div>
          </Reveal>

          {/* Right — code block */}
          <RevealGroup stagger={0.1} className="flex flex-col gap-4">
            {/* Tabs */}
            <RevealItem>
              <div className="flex gap-1 p-1 rounded-xl bg-white/[0.04] border border-white/[0.08] w-fit">
                {TABS.map((tab) => {
                  const Icon = tab.icon;
                  const isActive = tab.id === activeTab;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={cn(
                        "flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200",
                        isActive
                          ? "bg-[var(--color-brand-500)] text-white shadow-sm"
                          : "text-[var(--color-neutral-400)] hover:text-[var(--color-neutral-200)]",
                      )}
                    >
                      <Icon className="w-3.5 h-3.5" />
                      {tab.label}
                    </button>
                  );
                })}
              </div>
            </RevealItem>

            {/* Code */}
            <RevealItem>
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              >
                <CodeBlock
                  lines={current.code as unknown as CodeLine[]}
                  filename={current.filename}
                  lang={current.lang}
                  animate
                />
              </motion.div>
            </RevealItem>

            {/* Trust badge */}
            <RevealItem>
              <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.06]">
                <div className="w-8 h-8 rounded-full bg-[var(--color-success-500)]/20 flex items-center justify-center shrink-0">
                  <div className="w-2 h-2 rounded-full bg-[var(--color-success-400)] animate-pulse" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-[var(--color-neutral-200)]">Sandbox toujours disponible</p>
                  <p className="text-[11px] text-[var(--color-neutral-500)]">Testez sans carte bancaire · Clé de test incluse</p>
                </div>
              </div>
            </RevealItem>
          </RevealGroup>

        </div>
      </Container>
    </Section>
  );
}
