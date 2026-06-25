export const siteConfig = {
  name: "AgePass",
  tagline: "La couche de conformité qui s'intègre partout",
  description:
    "AgePass est une infrastructure de confiance permettant aux plateformes d'intégrer des mécanismes de preuve d'âge conformes, traçables et archivés.",
  url: "https://agepass.fr",
  ogImage: "https://agepass.fr/og.jpg",

  // Navigation
  nav: {
    links: [
      { label: "Pourquoi", href: "#pourquoi" },
      { label: "Comment", href: "#comment" },
      { label: "Cas d'usage", href: "#usage" },
    ],
    cta: {
      label: "Demander un pilote",
      href: "#pilote",
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
