import { ApHero } from "@/components/sections/ap-hero";
import { ApWhyNow } from "@/components/sections/ap-why-now";
import { ApWhyAgepass } from "@/components/sections/ap-why-agepass";
import { ApAgeVerification } from "@/components/sections/ap-age-verification";
import { ApHowItWorks } from "@/components/sections/ap-how-it-works";
import { ApContexts } from "@/components/sections/ap-contexts";
import { ApInfrastructure } from "@/components/sections/ap-infrastructure";
import { ApPilot } from "@/components/sections/ap-pilot";

export default function HomePage() {
  return (
    <>
      <ApHero />
      <ApWhyNow />
      <ApWhyAgepass />
      <ApAgeVerification />
      <ApHowItWorks />
      <ApContexts />
      <ApInfrastructure />
      <ApPilot />
    </>
  );
}
