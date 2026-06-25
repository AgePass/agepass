import { ApHero } from "@/components/sections/ap-hero";
import { ApWhyNow } from "@/components/sections/ap-why-now";
import { ApWhyAgepass } from "@/components/sections/ap-why-agepass";
import { ApHowItWorks } from "@/components/sections/ap-how-it-works";
import { ApContexts } from "@/components/sections/ap-contexts";
import { ApAgeVerification } from "@/components/sections/ap-age-verification";
import { ApDeployment } from "@/components/sections/ap-deployment";
import { ApPartners } from "@/components/sections/ap-partners";
import { ApPilot } from "@/components/sections/ap-pilot";

export default function HomePage() {
  return (
    <>
      <ApHero />
      <ApWhyNow />
      <ApWhyAgepass />
      <ApHowItWorks />
      <ApContexts />
      <ApAgeVerification />
      <ApDeployment />
      <ApPartners />
      <ApPilot />
    </>
  );
}
