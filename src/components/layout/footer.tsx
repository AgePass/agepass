import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Divider } from "@/components/ui/divider";
import { siteConfig } from "@/config/site";

const footerLinks = {
  Produit: [
    { label: "Solution", href: "/solution" },
    { label: "Technologie", href: "/technologie" },
    { label: "Conformité", href: "/conformite" },
    { label: "Tarifs", href: "/tarifs" },
  ],
  Entreprise: [
    { label: "À propos", href: "/a-propos" },
    { label: "Blog", href: "/blog" },
    { label: "Presse", href: "/presse" },
    { label: "Partenaires", href: "/partenaires" },
  ],
  Légal: [
    { label: "Politique de confidentialité", href: "/confidentialite" },
    { label: "Conditions générales", href: "/cgv" },
    { label: "Mentions légales", href: "/mentions-legales" },
    { label: "Cookies", href: "/cookies" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-[var(--bg-page)] border-t border-[var(--border-default)]">
      <Container size="2xl" className="py-16">
        {/* Top: Logo + Links */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand block */}
          <div className="col-span-2 lg:col-span-2 flex flex-col gap-4">
            <Link
              href="/"
              className="flex items-center gap-2 font-semibold text-[var(--text-primary)] text-lg tracking-tight w-fit"
            >
              <span className="w-7 h-7 rounded-[var(--radius-md)] bg-[var(--color-brand-500)] flex items-center justify-center text-white text-sm font-bold">
                A
              </span>
              {siteConfig.name}
            </Link>
            <p className="text-sm text-[var(--text-secondary)] max-w-xs leading-relaxed">
              {siteConfig.description}
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="flex flex-col gap-4">
              <h3 className="text-xs font-semibold text-[var(--text-primary)] tracking-widest uppercase">
                {category}
              </h3>
              <ul className="flex flex-col gap-3 list-none">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-[150ms]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Divider className="my-10" />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-xs text-[var(--text-tertiary)]">
            © {new Date().getFullYear()} {siteConfig.name}. Tous droits réservés.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href={siteConfig.social.linkedin}
              className="text-xs text-[var(--text-tertiary)] hover:text-[var(--text-secondary)] transition-colors"
              aria-label="LinkedIn"
            >
              LinkedIn
            </Link>
            <Link
              href={siteConfig.social.twitter}
              className="text-xs text-[var(--text-tertiary)] hover:text-[var(--text-secondary)] transition-colors"
              aria-label="Twitter / X"
            >
              Twitter
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
