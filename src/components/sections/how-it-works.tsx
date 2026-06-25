import Image from "next/image";
import whyNowReference from "../../../images/02-pourquoi-maintenant.jpg";

export function HowItWorksSection() {
  return (
    <section
      id="s2"
      aria-label="Pourquoi maintenant ?"
      className="relative z-[var(--z-overlay)] min-h-screen w-screen scroll-mt-0 overflow-hidden bg-white"
    >
      <Image
        src={whyNowReference}
        alt="Pourquoi maintenant ? Le retrait autonome change d'échelle. La conformité doit suivre."
        priority
        unoptimized
        sizes="(min-width: 1536px) 1536px, 100vw"
        className="block h-auto w-screen max-w-none"
      />
    </section>
  );
}
