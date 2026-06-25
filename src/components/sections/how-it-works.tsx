import Image from "next/image";
import whyNowReference from "../../../images/02-pourquoi-maintenant.jpg";

export function HowItWorksSection() {
  return (
    <section
      id="s2"
      aria-label="Pourquoi maintenant ?"
      className="relative z-10 flex min-h-screen w-full scroll-mt-16 items-center justify-center bg-white px-4 py-10 sm:px-6 lg:px-10"
    >
      <Image
        src={whyNowReference}
        alt="Pourquoi maintenant ? Le retrait autonome change d'échelle. La conformité doit suivre."
        priority
        sizes="(min-width: 1536px) 1536px, 100vw"
        className="h-auto w-full max-w-[1536px]"
      />
    </section>
  );
}
