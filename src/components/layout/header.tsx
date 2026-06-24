"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/config/site";

/**
 * Header — sticky, avec effet blur au scroll.
 *
 * Architecture: "transparent → frosted glass" au scroll.
 * Pas de `position: fixed` avec margin-top sur le body — on utilise
 * `position: sticky top-0` pour que le header pousse le contenu correctement.
 * Le z-index suit l'échelle de tokens.
 */
export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-[var(--z-sticky)] w-full",
        "transition-all duration-[250ms] ease-[var(--ease-out-quart)]",
        scrolled
          ? "bg-white/80 backdrop-blur-xl border-b border-[var(--border-default)] shadow-[var(--shadow-xs)]"
          : "bg-transparent"
      )}
    >
      <Container size="2xl">
        <nav
          className="flex h-16 items-center justify-between gap-8"
          aria-label="Navigation principale"
        >
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 font-semibold text-[var(--text-primary)] text-lg tracking-tight"
          >
            <span className="w-7 h-7 rounded-[var(--radius-md)] bg-[var(--color-brand-500)] flex items-center justify-center text-white text-sm font-bold">
              A
            </span>
            {siteConfig.name}
          </Link>

          {/* Nav links — masqués sur mobile */}
          <ul className="hidden lg:flex items-center gap-1 list-none">
            {siteConfig.nav.links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "px-3 py-2 rounded-[var(--radius-md)] text-sm",
                    "text-[var(--text-secondary)] hover:text-[var(--text-primary)]",
                    "hover:bg-[var(--bg-muted)]",
                    "transition-colors duration-[150ms]"
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/connexion">Se connecter</Link>
            </Button>
            <Button variant="brand" size="sm" asChild>
              <Link href={siteConfig.nav.cta.href}>{siteConfig.nav.cta.label}</Link>
            </Button>
          </div>
        </nav>
      </Container>
    </header>
  );
}
