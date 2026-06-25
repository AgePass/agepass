"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";

function ShieldLogo() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
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

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50",
        "transition-all duration-300",
        scrolled
          ? "bg-[#F8F7F4]/90 backdrop-blur-md border-b border-[var(--border-default)]"
          : "bg-transparent"
      )}
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        <nav className="flex h-16 items-center justify-between" aria-label="Navigation principale">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <ShieldLogo />
            <span className="text-[15px] font-semibold tracking-tight text-[var(--text-primary)]">
              AGEPASS
            </span>
          </Link>

          {/* Ancres centrales — desktop uniquement */}
          <ul className="hidden md:flex items-center gap-1 list-none absolute left-1/2 -translate-x-1/2">
            {siteConfig.nav.links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="px-3.5 py-2 text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-150 rounded-lg hover:bg-black/[0.04]"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA unique */}
          <a
            href={siteConfig.nav.cta.href}
            className={cn(
              "hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium",
              "bg-[var(--color-brand-600)] text-white",
              "hover:bg-[var(--color-brand-700)] transition-colors duration-150",
              "shadow-sm"
            )}
          >
            {siteConfig.nav.cta.label}
          </a>

        </nav>
      </div>
    </header>
  );
}
