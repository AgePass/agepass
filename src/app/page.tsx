import { ApHero } from "@/components/sections/ap-hero";
import { ApRupture } from "@/components/sections/ap-rupture";
import { ApHowItWorks } from "@/components/sections/ap-how-it-works";
import { ApAgeVerification } from "@/components/sections/ap-age-verification";
import { ApInfrastructure } from "@/components/sections/ap-infrastructure";
import { ApPilot } from "@/components/sections/ap-pilot";

export default function HomePage() {
  return (
    <>
      <ApHero />
      <ApRupture />
      <ApHowItWorks />
      <ApAgeVerification />
      <ApInfrastructure />
      <ApPilot />
    </>
  );
}
