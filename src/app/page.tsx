/**
 * Homepage — shell architecture
 *
 * Les sections seront développées dans des commits dédiés.
 * Chaque section est un Server Component séparé dans src/components/sections/.
 */
export default function HomePage() {
  return (
    <>
      {/* Sections à venir: Hero, SocialProof, Features, HowItWorks, Compliance, CTA */}
      <div className="flex items-center justify-center min-h-[80vh]">
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--bg-brand-subtle)] border border-[var(--color-brand-200)] text-xs font-medium text-[var(--text-brand)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand-500)]" />
            Architecture initialisée
          </div>
          <h1 className="text-4xl font-semibold text-[var(--text-primary)] tracking-tight">
            AgePass
          </h1>
          <p className="text-[var(--text-secondary)] max-w-sm mx-auto">
            Design system configuré. Prêt à développer les sections métier.
          </p>
        </div>
      </div>
    </>
  );
}
