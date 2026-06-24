export const siteConfig = {
  name: "AgePass",
  tagline: "La vérification d'âge souveraine",
  description:
    "AgePass est la solution de vérification d'âge conforme eIDAS 2.0 qui protège vos utilisateurs sans compromis sur la vie privée.",
  url: "https://agepass.fr",
  ogImage: "https://agepass.fr/og.jpg",

  // Navigation
  nav: {
    links: [
      { label: "Solution", href: "/solution" },
      { label: "Technologie", href: "/technologie" },
      { label: "Conformité", href: "/conformite" },
      { label: "Partenaires", href: "/partenaires" },
      { label: "Blog", href: "/blog" },
    ],
    cta: {
      label: "Demander une démo",
      href: "/demo",
    },
  },

  // Réseaux sociaux
  social: {
    twitter: "https://twitter.com/agepass_fr",
    linkedin: "https://linkedin.com/company/agepass",
  },

  // Contacts
  contact: {
    email: "contact@agepass.fr",
    sales: "sales@agepass.fr",
  },
} as const;

export type SiteConfig = typeof siteConfig;
