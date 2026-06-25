import Link from "next/link";

function ShieldLogo() {
  return (
    <svg width="22" height="22" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <path
        d="M14 2L4 6.5V13.5C4 19.2 8.4 24.5 14 26C19.6 24.5 24 19.2 24 13.5V6.5L14 2Z"
        fill="var(--color-brand-600)"
      />
      <path
        d="M10 13.5L12.5 16L18 11"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-[var(--border-default)] bg-[var(--bg-page)]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12 py-16">

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">

          {/* Brand */}
          <div className="flex flex-col gap-3">
            <Link href="/" className="flex items-center gap-2">
              <ShieldLogo />
              <span className="text-[15px] font-semibold tracking-tight text-[var(--text-primary)]">AGEPASS</span>
            </Link>
            <p className="text-sm text-[var(--text-tertiary)] max-w-[280px] leading-relaxed">
              La couche de conformité qui s&apos;intègre partout.
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-12 text-sm">
            <div className="flex flex-col gap-3">
              <span className="text-[11px] font-semibold uppercase tracking-widest text-[var(--text-tertiary)]">Produit</span>
              <a href="#pourquoi" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">Pourquoi AgePass</a>
              <a href="#comment" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">Comment ça marche</a>
              <a href="#usage" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">Cas d&apos;usage</a>
              <a href="#pilote" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">Pilote gratuit</a>
            </div>
            <div className="flex flex-col gap-3">
              <span className="text-[11px] font-semibold uppercase tracking-widest text-[var(--text-tertiary)]">Légal</span>
              <Link href="/confidentialite" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">Confidentialité</Link>
              <Link href="/mentions-legales" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">Mentions légales</Link>
              <Link href="/cgv" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">CGV</Link>
            </div>
          </div>

        </div>

        <div className="mt-12 pt-8 border-t border-[var(--border-default)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-xs text-[var(--text-tertiary)]">
            © {new Date().getFullYear()} AgePass. Tous droits réservés.
          </p>
          <div className="flex items-center gap-4">
            <a href="https://linkedin.com/company/agepass" className="text-xs text-[var(--text-tertiary)] hover:text-[var(--text-secondary)] transition-colors">LinkedIn</a>
            <a href="mailto:contact@agepass.fr" className="text-xs text-[var(--text-tertiary)] hover:text-[var(--text-secondary)] transition-colors">contact@agepass.fr</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
