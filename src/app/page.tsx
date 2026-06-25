import { HeroSection } from "@/components/sections/hero";
import { HowItWorksSection } from "@/components/sections/how-it-works";
import { BenefitsSection } from "@/components/sections/benefits";
import { DeveloperIntegrationSection } from "@/components/sections/developer-integration";
import { ComplianceSection } from "@/components/sections/compliance";
import { UseCasesSection } from "@/components/sections/use-cases";
import { SocialProofSection } from "@/components/sections/social-proof";
import { FaqSection } from "@/components/sections/faq";
import { CtaBannerSection } from "@/components/sections/cta-banner";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <HowItWorksSection />
      <BenefitsSection />
      <DeveloperIntegrationSection />
      <ComplianceSection />
      <UseCasesSection />
      <SocialProofSection />
      <FaqSection />
      <CtaBannerSection />
    </>
  );
}
