"use client";

import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/text";
import { Label } from "@/components/ui/text";
import { Accordion } from "@/components/ui/accordion";
import { Reveal } from "@/components/motion/reveal";
import { ArrowRight, MessageCircle } from "lucide-react";

const FAQ_ITEMS = [
  {
    question: "Quelles données personnelles AgePass collecte-t-il ?",
    answer: "Aucune. AgePass n'a jamais accès aux données personnelles de vos utilisateurs. La vérification se fait directement entre l'utilisateur et son fournisseur d'identité (FranceConnect+, eID européen...). Seul un token signé cryptographiquement, indiquant le statut de majorité (oui/non), transite vers votre serveur. Zéro nom, zéro date de naissance, zéro numéro de carte.",
  },
  {
    question: "Combien de temps dure l'intégration ?",
    answer: "La plupart de nos clients sont en production en moins de 30 minutes. L'intégration se résume à : installer le SDK npm, initialiser avec votre clé API, et appeler ap.verify() au bon moment dans votre tunnel. Notre documentation inclut des exemples pour React, Vue, Next.js, PHP, Python et Ruby.",
  },
  {
    question: "Est-ce compatible avec notre stack technique ?",
    answer: "Très probablement oui. AgePass fonctionne côté client (widget JavaScript) + côté serveur (validation du token via notre API REST ou webhook). Nous avons des SDK officiels pour JavaScript/TypeScript, PHP, Python et Ruby. Des plugins clé en main existent pour Shopify et WooCommerce. Pour d'autres stacks, notre API REST fonctionne avec n'importe quel back-end.",
  },
  {
    question: "Que se passe-t-il si FranceConnect+ est indisponible ?",
    answer: "AgePass inclut plusieurs fournisseurs d'identité en redondance. Si FranceConnect+ est temporairement indisponible, la vérification bascule automatiquement sur un eID européen compatible eIDAS. Votre SLA de 99,99% est maintenu. Vous pouvez également configurer un mode de fallback avec pièce d'identité manuelle (délai supplémentaire, mais conformité garantie).",
  },
  {
    question: "Comment fonctionne la tarification ?",
    answer: "Notre modèle est simple : vous payez uniquement pour les vérifications réussies. Pas de frais fixes excessifs, pas de surprise. Le plan Starter inclut 1 000 vérifications/mois gratuites pour tester en production. Au-delà, le prix décroît avec le volume. Consultez notre page Pricing pour les grilles tarifaires détaillées.",
  },
  {
    question: "Sommes-nous couverts en cas de contrôle réglementaire ?",
    answer: "Oui. Chaque vérification génère un log immuable signé cryptographiquement, exportable pour vos audits. Notre certificat de conformité eIDAS 2.0 est valable comme preuve de diligence raisonnable auprès de la CNIL, de l'ARJEL et des autorités DSA. Notre équipe juridique peut vous accompagner lors d'un contrôle.",
  },
  {
    question: "L'expérience utilisateur est-elle fluide ?",
    answer: "La vérification prend moins de 500 ms dans 95% des cas. Le widget est entièrement personnalisable (couleurs, langue, textes) pour s'intégrer parfaitement dans votre design. L'expérience FranceConnect+ est connue de 40M+ de Français. Notre taux d'abandon lors de la vérification est inférieur à 3%.",
  },
  {
    question: "Peut-on tester gratuitement avant de s'engager ?",
    answer: "Oui. Notre sandbox est disponible sans carte bancaire. Il simule l'ensemble des scénarios (majorité confirmée, minorité, erreur réseau, timeout...). La clé de test est disponible immédiatement après inscription. Votre premier mois inclut 1 000 vérifications gratuites en production réelle.",
  },
] as const;

export function FaqSection() {
  return (
    <Section background="page" className="overflow-hidden">
      <Container size="lg">

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-16 items-start">

          {/* Left sticky */}
          <Reveal className="lg:sticky lg:top-24 flex flex-col gap-6">
            <Label>FAQ</Label>
            <Heading size="2xl" balance>
              Les questions<br />
              <span className="text-gradient-brand">que vous vous posez.</span>
            </Heading>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              Pas de réponse à votre question ? Notre équipe est disponible en moins d&apos;une heure.
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-brand-600)] hover:text-[var(--color-brand-700)] transition-colors group"
              >
                <MessageCircle className="w-4 h-4" />
                Parler à un expert
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="/docs"
                className="inline-flex items-center gap-2 text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
              >
                Documentation complète →
              </a>
            </div>
          </Reveal>

          {/* Right accordion */}
          <Reveal delay={0.1}>
            <Accordion items={FAQ_ITEMS as unknown as { question: string; answer: string }[]} />
          </Reveal>

        </div>

      </Container>
    </Section>
  );
}
