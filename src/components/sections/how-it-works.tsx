"use client";

import Image from "next/image";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  CalendarDays,
  CircleUserRound,
  CreditCard,
  Landmark,
  Package,
  Shield,
  UsersRound,
  XCircle,
} from "lucide-react";

const assetPath = "/why-now-assets/";

function AgePassWordmark({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <span className="relative flex h-7 w-7 items-center justify-center text-[#5f0ec9]">
        <Shield className="h-full w-full" strokeWidth={2.4} />
        <BadgeCheck className="absolute h-3.5 w-3.5 text-[#151a68]" strokeWidth={2.3} />
      </span>
      <span className="text-[1.72rem] font-black leading-none tracking-normal text-[#070735]">
        AGE<span className="text-[#6d13d7]">PASS</span>
      </span>
    </div>
  );
}

function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`rounded-[14px] border border-[#dedee9] bg-white ${className}`}>
      {children}
    </div>
  );
}

function SectionDivider({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-6">
      <span className="h-px flex-1 bg-[#d8d8e4]" aria-hidden="true" />
      <span className="whitespace-nowrap text-center text-[1rem] font-black uppercase leading-none tracking-normal text-[#090936]">
        {label}
      </span>
      <span className="h-px flex-1 bg-[#d8d8e4]" aria-hidden="true" />
    </div>
  );
}

function RegulationCard() {
  return (
    <Card className="flex min-h-[164px] items-start justify-between gap-8 px-6 py-5 shadow-[0_14px_34px_rgba(10,14,45,0.04)] md:px-7">
      <div className="flex gap-6">
        <div className="flex h-[58px] w-[58px] shrink-0 items-center justify-center rounded-[8px] bg-[#0757e8] text-white shadow-[0_8px_18px_rgba(7,87,232,0.22)]">
          <CalendarDays className="h-9 w-9" strokeWidth={2.1} />
        </div>
        <div>
          <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
            <p className="text-[2rem] font-black leading-none text-[#0651db]">2027</p>
            <p className="text-[0.96rem] font-black uppercase leading-tight text-[#172077]">
              &Eacute;volutions r&eacute;glementaires europ&eacute;ennes
            </p>
          </div>
          <p className="mt-3 max-w-[440px] text-[0.98rem] font-semibold leading-[1.5] tracking-normal text-[#090936]">
            Le Digital Services Act (DSA) renforce les obligations de protection des mineurs
            et de contr&ocirc;le d&apos;&acirc;ge pour les services en ligne.
          </p>
        </div>
      </div>
      <div className="relative hidden h-[104px] w-[104px] shrink-0 md:block" aria-hidden="true">
        {Array.from({ length: 12 }, (_, index) => {
          const angle = (index / 12) * Math.PI * 2 - Math.PI / 2;
          const x = 54 + Math.cos(angle) * 43;
          const y = 54 + Math.sin(angle) * 43;
          return (
            <span
              key={index}
              className="absolute text-[1.3rem] font-black leading-none text-[#0751d8]"
              style={{ left: x, top: y, transform: "translate(-50%, -50%)" }}
            >
              &#9733;
            </span>
          );
        })}
      </div>
    </Card>
  );
}

function LockerSignalCard() {
  return (
    <Card className="flex h-full flex-col overflow-hidden px-6 py-5">
      <div className="grid min-h-[170px] grid-cols-[1fr_150px] items-center gap-4 pb-5">
        <div>
          <div className="flex items-center gap-2">
            <Package className="h-8 w-8 text-[#7315d3]" strokeWidth={2.1} />
            <span className="text-[1.55rem] font-black leading-none text-[#6511c8]">
              pickup
            </span>
          </div>
          <p className="mt-3 text-[2.35rem] font-black leading-none tracking-normal text-[#6413d4]">
            +6 000
          </p>
          <p className="mt-2 max-w-[250px] text-[0.96rem] font-semibold leading-[1.5] tracking-normal text-[#06062b]">
            consignes en France d&eacute;ploy&eacute;es par Pickup et la croissance continue.
          </p>
        </div>
        <Image
          unoptimized
          src={`${assetPath}pickup-lockers.jpg`}
          alt="Consignes Pickup"
          width={190}
          height={170}
          className="h-auto w-full object-contain"
        />
      </div>

      <div className="grid min-h-[170px] grid-cols-[1fr_150px] items-center gap-4 border-t border-[#e5e5ee] py-5">
        <div>
          <div className="flex items-center gap-2">
            <CircleUserRound className="h-8 w-8 text-[#7315d3]" strokeWidth={2.1} />
            <span className="text-[1.55rem] font-black leading-none text-[#6511c8]">
              ouidrop
            </span>
          </div>
          <p className="mt-3 text-[2.35rem] font-black leading-none tracking-normal text-[#6413d4]">
            7 M&euro;
          </p>
          <p className="mt-2 max-w-[250px] text-[0.96rem] font-semibold leading-[1.5] tracking-normal text-[#06062b]">
            lev&eacute;s en 2024 Pour industrialiser et acc&eacute;l&eacute;rer le d&eacute;ploiement de ses solutions de retrait autonome.
          </p>
        </div>
        <Image
          unoptimized
          src={`${assetPath}ouidrop-lockers.jpg`}
          alt="Consignes Ouidrop"
          width={190}
          height={170}
          className="h-auto w-full object-contain"
        />
      </div>

      <div className="grid min-h-[170px] grid-cols-[1fr_150px] items-center gap-4 border-t border-[#e5e5ee] pt-5">
        <div>
          <div className="flex items-center gap-2">
            <Package className="h-8 w-8 text-[#7315d3]" strokeWidth={2.1} />
            <span className="text-[1.55rem] font-black leading-none text-[#6511c8]">
              pickup
            </span>
            <span className="rounded-[4px] bg-[#14aa42] px-1.5 py-0.5 text-[0.78rem] font-black leading-none text-white">
              FRESH
            </span>
          </div>
          <p className="mt-2 max-w-[250px] text-[0.96rem] font-semibold leading-[1.5] tracking-normal text-[#06062b]">
            Des consignes r&eacute;frig&eacute;r&eacute;es lanc&eacute;es pour le alimentaire et le click &amp; collect.
          </p>
        </div>
        <Image
          unoptimized
          src={`${assetPath}fresh-lockers.jpg`}
          alt="Consignes Pickup Fresh"
          width={190}
          height={170}
          className="h-auto w-full object-contain"
        />
      </div>
    </Card>
  );
}

function GrowthCard() {
  return (
    <Card className="flex h-full min-h-[374px] flex-col px-7 pb-6 pt-7 text-left">
      <p className="mx-auto max-w-[240px] text-center text-[1.1rem] font-black uppercase leading-[1.35] text-[#090936]">
        Le casier fran&ccedil;ais
        <br />
        en forte croissance
      </p>
      <p className="mt-7 text-[3rem] font-black leading-none tracking-normal text-[#0758e8]">
        +45%
      </p>
      <p className="mt-3 max-w-[250px] text-[0.96rem] font-semibold leading-[1.55] text-[#06062b]">
        de croissance du nombre
        <br />
        de casiers en France entre
        <br />
        2023 et 2024<sup className="text-[0.58em]">(2)</sup>
      </p>
      <Image
        unoptimized
        src={`${assetPath}growth-chart.jpg`}
        alt="Courbe de croissance"
        width={230}
        height={180}
        className="mx-auto mt-auto h-auto w-[86%] max-w-[230px] pt-4"
      />
    </Card>
  );
}

function EuropeCard() {
  return (
    <Card className="flex h-full min-h-[374px] flex-col px-7 pb-6 pt-7 text-left">
      <p className="mx-auto max-w-[230px] text-center text-[1.1rem] font-black uppercase leading-[1.35] text-[#090936]">
        Le march&eacute; europ&eacute;en
        <br />
        acc&eacute;l&egrave;re
      </p>
      <p className="mt-7 text-[2.95rem] font-black leading-none tracking-normal text-[#6413d4]">
        155 000+
      </p>
      <p className="mt-3 max-w-[250px] text-[0.96rem] font-semibold leading-[1.55] text-[#06062b]">
        consignes automatiques en Europe
        <br />
        fin 2024, soit +29% sur un an<sup className="text-[0.58em]">(3)</sup>
      </p>
      <Image
        unoptimized
        src={`${assetPath}europe-map.jpg`}
        alt="Carte Europe"
        width={230}
        height={190}
        className="mx-auto mt-auto h-auto w-[82%] max-w-[230px] pt-4"
      />
    </Card>
  );
}

function LeclercCard() {
  return (
    <Card className="flex h-full flex-col px-6 py-6">
      <div className="flex items-center gap-2">
        <span className="text-[1.75rem] font-black leading-none text-[#08115b]">E.Leclerc</span>
        <span className="flex h-8 w-8 items-center justify-center rounded-full border-[3px] border-[#0759df] text-[1.15rem] font-black leading-none text-[#0759df]">
          L
        </span>
      </div>
      <p className="mt-5 text-[0.98rem] font-black uppercase leading-tight text-[#090936]">
        Forte acc&eacute;l&eacute;ration
      </p>
      <p className="mt-3 text-[2.75rem] font-black leading-none tracking-normal text-[#0758e8]">
        +35%
      </p>
      <p className="mt-2 max-w-[250px] text-[0.93rem] font-semibold leading-[1.55] text-[#06062b]">
        d&apos;augmentation du nombre de magasins automatiques en centre-ville entre 2023 et 2024
      </p>
      <Image
          unoptimized
        src={`${assetPath}leclerc-store.jpg`}
        alt="Magasin automatique E.Leclerc"
        width={235}
        height={160}
        className="mx-auto mt-auto h-auto w-full max-w-[235px] pt-4"
      />
    </Card>
  );
}

function ShopicCard() {
  return (
    <Card className="flex h-full flex-col px-6 py-6">
      <div className="text-[2.05rem] font-black leading-none text-[#6413d4]">shopic</div>
      <p className="mt-6 text-[0.98rem] font-black uppercase leading-[1.5] text-[#090936]">
        Les caddies Shopic arrivent en 2027
      </p>
      <p className="mt-3 max-w-[250px] text-[0.98rem] font-semibold leading-[1.55] text-[#06062b]">
        Des caddies autonomes pour des courses sans caisse ni personnel.
      </p>
      <Image
          unoptimized
        src={`${assetPath}shopic-cart.jpg`}
        alt="Caddie autonome Shopic"
        width={220}
        height={170}
        className="mx-auto mt-auto h-auto w-full max-w-[235px] pt-4"
      />
    </Card>
  );
}

function AutomationFlow() {
  const steps = [
    { label: "Commande\ndigitalis\u00e9e", Icon: Package, color: "#6b12d6" },
    { label: "Paiement\ndigitalis\u00e9", Icon: CreditCard, color: "#6b12d6" },
    { label: "Retrait\nautomatis\u00e9", Icon: Package, color: "#6b12d6" },
    { label: "Contr\u00f4le d'\u00e2ge souvent\nlimit\u00e9 \u00e0 une simple d\u00e9claration", Icon: XCircle, color: "#df174f" },
  ];

  return (
    <Card className="grid min-h-[126px] grid-cols-1 items-center gap-4 px-6 py-4 md:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1.35fr]">
      {steps.map(({ label, Icon, color }, index) => (
        <div key={label} className="contents">
          <div className="flex flex-col items-center text-center">
            <Icon className="h-11 w-11" color={color} strokeWidth={1.85} />
            <p
              className={`mt-2 whitespace-pre-line text-[0.82rem] font-semibold leading-[1.25] ${
                color === "#df174f" ? "text-[#df174f]" : "text-[#070735]"
              }`}
            >
              {label}
            </p>
          </div>
          {index < steps.length - 1 && (
            <ArrowRight
              className="mx-auto hidden h-7 w-7 text-[#777890] md:block"
              strokeWidth={2.3}
              aria-hidden="true"
            />
          )}
        </div>
      ))}
    </Card>
  );
}

function PublicAffairsCard() {
  return (
    <Card className="grid min-h-[180px] grid-cols-1 items-center gap-5 px-6 py-5 md:grid-cols-[72px_1fr_118px_24px_128px]">
      <div className="flex h-[68px] w-[68px] items-center justify-center rounded-full bg-[#0758e8] text-white">
        <UsersRound className="h-10 w-10" strokeWidth={2.3} />
      </div>
      <div>
        <p className="text-[1.15rem] font-black uppercase leading-tight text-[#0758e8]">
          2 d&eacute;put&eacute;s engag&eacute;s
        </p>
        <p className="mt-3 max-w-[300px] text-[0.86rem] font-semibold leading-[1.55] text-[#06062b]">
          ont fait remonter AgePass au Ministre de l&apos;&Eacute;conomie et au Ministre de la Sant&eacute; en faveur de la conformit&eacute; du retrait.
        </p>
      </div>
      <div className="flex flex-col items-center">
        <div className="mb-2 flex gap-2">
          <span className="h-5 w-1.5 bg-[#183ea7]" />
          <span className="h-5 w-1.5 bg-white shadow-[inset_0_0_0_1px_#d9d9e4]" />
          <span className="h-5 w-1.5 bg-[#ef283c]" />
        </div>
        <Landmark className="h-[74px] w-[92px] text-[#6078bd]" strokeWidth={1.3} />
      </div>
      <ArrowRight className="hidden h-8 w-8 text-[#7c7d92] md:block" strokeWidth={2.3} />
      <div className="flex flex-col items-center text-center">
        <div className="mb-2 flex h-[70px] w-[70px] items-center justify-center rounded-full border-[3px] border-[#0758e8] text-[#6c17d5]">
          <Building2 className="h-9 w-9" strokeWidth={1.6} />
        </div>
        <ul className="space-y-1 text-left text-[0.76rem] font-semibold leading-tight text-[#06062b]">
          <li>&bull; Ministre de l&apos;&Eacute;conomie</li>
          <li>&bull; Ministre de la Sant&eacute;</li>
        </ul>
      </div>
    </Card>
  );
}

function QuoteCard() {
  return (
    <Card className="flex min-h-[180px] items-center gap-8 px-8 py-7">
      <span className="text-[5.3rem] font-black leading-none text-[#0758e8]">&ldquo;</span>
      <p className="text-[1.38rem] font-black leading-[1.45] text-[#08082f]">
        Les enseignes ont automatis&eacute;
        <br />
        la commande.
        <br />
        <span className="text-[#0758e8]">Elles n&apos;ont pas encore automatis&eacute;</span>
        <br />
        <span className="text-[#0758e8]">la conformit&eacute; de la remise.</span>
      </p>
    </Card>
  );
}

function AgePassGapCard() {
  return (
    <Card className="flex h-full min-h-[180px] flex-col items-center overflow-hidden border-[#a9bbdf] px-5 pb-0 pt-3 text-center">
      <AgePassWordmark className="justify-center" />
      <p className="mt-2 text-[1.25rem] font-black uppercase leading-tight text-[#0758e8]">
        Comble ce vide.
      </p>
      <p className="mt-2 max-w-[230px] text-[0.82rem] font-semibold leading-[1.35] text-[#06062b]">
        La conformit&eacute; devient aussi automatisable que la commande ou le paiement.
      </p>
      <Image
          unoptimized
        src={`${assetPath}agepass-lock.jpg`}
        alt="Cadenas AgePass"
        width={230}
        height={170}
        className="mt-auto h-auto w-full max-w-[165px]"
      />
    </Card>
  );
}

export function HowItWorksSection() {
  return (
    <section
      id="s2"
      aria-label="Pourquoi maintenant ?"
      className="relative z-[var(--z-overlay)] overflow-hidden bg-white px-4 py-5 text-[#06062b] sm:px-6 lg:px-7"
    >
      <div className="mx-auto w-full max-w-[1480px]">
        <div className="grid gap-5 lg:grid-cols-[1.22fr_1fr] lg:items-start">
          <div>
            <AgePassWordmark />
            <h2 className="mt-4 whitespace-normal text-[3rem] font-black uppercase leading-[0.98] tracking-normal text-[#050635] sm:text-[3.8rem] lg:whitespace-nowrap lg:text-[3.55rem] xl:text-[3.75rem]">
              Pourquoi <span className="text-[#6814d3]">maintenant&nbsp;?</span>
            </h2>
            <p className="mt-3 text-[1.35rem] font-black uppercase leading-[1.18] tracking-normal text-[#070735] sm:text-[1.52rem]">
              Le retrait autonome change d&apos;&eacute;chelle.
              <br />
              La conformit&eacute; <span className="text-[#0758e8]">doit suivre.</span>
            </p>
          </div>
          <RegulationCard />
        </div>

        <div className="mt-5 grid gap-x-3 gap-y-4 lg:grid-cols-[1.05fr_1.62fr_1.38fr]">
          <div className="hidden lg:block" />
          <SectionDivider label="Le retrait autonome explose" />
          <SectionDivider label={"Les enseignes acc\u00e9l\u00e8rent"} />

          <div className="lg:row-span-2">
            <LockerSignalCard />
          </div>

          <div className="grid gap-0 md:grid-cols-2">
            <GrowthCard />
            <EuropeCard />
          </div>

          <div className="grid gap-0 md:grid-cols-2">
            <LeclercCard />
            <ShopicCard />
          </div>

          <div className="lg:col-span-2">
            <AutomationFlow />
          </div>

          <div className="grid gap-4 lg:col-span-3 lg:grid-cols-[1.1fr_0.9fr_0.48fr]">
            <PublicAffairsCard />
            <QuoteCard />
            <AgePassGapCard />
          </div>
        </div>

        <div className="mt-4 grid gap-2 text-[0.68rem] font-medium leading-tight text-[#292943] sm:grid-cols-2 lg:grid-cols-4">
          <p>(1) Source : Pickup / Geopost - Communiqu&eacute; de presse - mai 2024</p>
          <p>(2) Source : Ouidrop - Communiqu&eacute; de presse - avril 2024</p>
          <p>(3) Source : EIA - European Parcel Locker Market Report 2024</p>
          <p>(4) Source : E.Leclerc - Rapport d&apos;activit&eacute; 2024</p>
        </div>
      </div>
    </section>
  );
}
