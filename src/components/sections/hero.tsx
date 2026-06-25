"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  BadgeCheck,
  FileCheck2,
  KeyRound,
  PackageCheck,
  Shield,
  ShieldCheck,
  UserRound,
} from "lucide-react";
import { AnimationConfig } from "@/lib/animations/config";

const ease = AnimationConfig.entrance.ease;

const proofItems = [
  { Icon: ShieldCheck, label: "Protection des mineurs" },
  { Icon: PackageCheck, label: "Retrait autonome" },
  { Icon: BadgeCheck, label: "Conformité vérifiable" },
  { Icon: FileCheck2, label: "DSA 2027" },
] as const;

const checkpoints = [
  { number: "01", label: "Pourquoi maintenant ?" },
  { number: "02", label: "Pourquoi AgePass ?" },
  { number: "03", label: "Comment ça marche ?" },
  { number: "04", label: "Où utiliser AgePass ?" },
  { number: "05", label: "Vérifier l'âge ne suffit pas ?" },
  { number: "06", label: "Pensé pour le déploiement" },
  { number: "07", label: "Pourquoi vos partenaires ont intérêt à l'adopter" },
  { number: "08", label: "Pilote gratuit 2 mois" },
] as const;

const verifications = [
  { Icon: UserRound, label: "Vérifier l'âge." },
  { Icon: ShieldCheck, label: "Vérifier la personne." },
  { Icon: FileCheck2, label: "Prouver la remise." },
] as const;

function fadeUp(delay: number) {
  return {
    initial: { opacity: 0, y: 28 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.75, ease, delay },
    },
  };
}

function BrandMark() {
  return (
    <motion.div
      {...fadeUp(0.08)}
      className="flex items-center justify-center gap-4 md:justify-start md:gap-5"
    >
      <span className="relative flex h-14 w-14 items-center justify-center sm:h-[4.35rem] sm:w-[4.35rem]">
        <Shield className="h-full w-full text-[#1f20ff]" strokeWidth={2.9} />
        <KeyRound className="absolute h-7 w-7 text-[#11104f] sm:h-8 sm:w-8" strokeWidth={2.6} />
      </span>
      <span
        className="text-[3rem] font-black leading-none tracking-normal sm:text-[4rem] lg:text-[4.35rem]"
        style={{
          background: "linear-gradient(90deg, #050841 0%, #0d0a62 44%, #2818ff 72%, #5438ff 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        AGEPASS
      </span>
    </motion.div>
  );
}

function VerificationList() {
  return (
    <motion.ul
      {...fadeUp(0.32)}
      className="mt-5 flex flex-col items-center gap-3 text-left md:items-start"
      aria-label="Points de vérification AgePass"
    >
      {verifications.map(({ Icon, label }) => (
        <li key={label} className="flex min-w-[236px] items-center gap-3.5 text-[1rem] font-semibold text-[#080834] sm:text-[1.12rem]">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[8px] bg-white/78 text-[#1910d8] shadow-[0_12px_30px_rgba(26,18,180,0.10)] ring-1 ring-[#eceaff]">
            <Icon className="h-5 w-5" strokeWidth={2.1} />
          </span>
          {label}
        </li>
      ))}
    </motion.ul>
  );
}

function HeroIllustration() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96, y: 24 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.95, ease, delay: 0.28 }}
      className="pointer-events-none relative mx-auto flex h-[340px] w-full max-w-[560px] items-center justify-center sm:h-[420px] lg:h-[470px]"
      aria-hidden="true"
    >
      <div className="absolute h-[72%] w-[72%] rounded-full border border-white/75 shadow-[0_0_42px_rgba(255,255,255,0.95),inset_0_0_32px_rgba(255,255,255,0.55)]" />
      <div className="absolute h-[88%] w-[88%] rounded-full border border-[#ece6ff]/70" />
      <div className="absolute inset-y-[19%] right-[2%] hidden w-[44%] opacity-30 lg:block">
        <div className="h-full w-full bg-[linear-gradient(90deg,rgba(36,24,180,0.12)_1px,transparent_1px),linear-gradient(180deg,rgba(36,24,180,0.10)_1px,transparent_1px)] bg-[length:42px_42px] [mask-image:linear-gradient(90deg,transparent,black_24%,transparent)]" />
      </div>

      <motion.div
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 5.4, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-10 flex h-[236px] w-[198px] items-center justify-center sm:h-[294px] sm:w-[246px] lg:h-[318px] lg:w-[264px]"
      >
        <div className="absolute inset-x-[-24%] bottom-[-20%] h-16 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(34,210,255,0.40)_0%,rgba(143,36,255,0.34)_32%,transparent_70%)] blur-lg" />
        <Shield
          className="h-full w-full drop-shadow-[0_38px_38px_rgba(41,21,190,0.22)]"
          strokeWidth={1.25}
          fill="rgba(255,255,255,0.64)"
          style={{ color: "#1b20f7", filter: "drop-shadow(18px 16px 0 rgba(66,38,220,0.42))" }}
        />
        <KeyRound
          className="absolute h-[38%] w-[38%] text-[#1829f5] drop-shadow-[10px_12px_0_rgba(180,40,255,0.45)]"
          strokeWidth={1.45}
          fill="rgba(24,77,255,0.22)"
        />
      </motion.div>

      <div className="absolute bottom-[8%] h-16 w-[62%] rounded-[50%] bg-white/80 shadow-[0_12px_44px_rgba(45,27,170,0.12)] ring-1 ring-[#ebe8ff]" />
      <div className="absolute bottom-[11%] h-8 w-[46%] rounded-[50%] border border-[#d8d2ff] shadow-[0_0_24px_rgba(109,67,255,0.24),inset_0_0_24px_rgba(64,220,255,0.18)]" />
    </motion.div>
  );
}

function CheckpointRail() {
  return (
    <motion.ol
      {...fadeUp(0.56)}
      className="relative mx-auto mt-4 grid w-full max-w-[1290px] grid-cols-2 gap-x-4 gap-y-4 px-2 sm:grid-cols-4 lg:grid-cols-8"
      aria-label="Parcours de présentation AgePass"
    >
      <span className="absolute left-[7%] right-[7%] top-[21px] hidden h-px bg-[linear-gradient(90deg,#21b8ff,#2419ff,#bd35ff)] opacity-60 lg:block" aria-hidden="true" />
      {checkpoints.map((item) => (
        <li key={item.number} className="relative flex flex-col items-center text-center">
          <span className="z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[1.12rem] font-black leading-none text-[#1011c7] shadow-[0_10px_28px_rgba(27,20,170,0.12)] ring-1 ring-[#eeeaff]">
            {item.number}
          </span>
          <span className="mt-2 max-w-[150px] text-[0.72rem] font-semibold leading-snug text-[#080834] sm:text-[0.76rem]">
            {item.label}
          </span>
        </li>
      ))}
    </motion.ol>
  );
}

function ProofBar() {
  return (
    <motion.div
      {...fadeUp(0.68)}
      className="mx-auto mt-5 grid w-full max-w-[1088px] grid-cols-1 overflow-hidden rounded-[18px] bg-white/86 shadow-[0_22px_60px_rgba(29,20,134,0.11)] ring-1 ring-[#eeeaff] backdrop-blur-xl sm:grid-cols-2 lg:grid-cols-4"
    >
      {proofItems.map(({ Icon, label }, index) => (
        <div key={label} className="flex items-center justify-center gap-3 px-5 py-3 text-[#080834] lg:border-r lg:border-[#dedcf0] lg:last:border-r-0">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center text-[#2118df]">
            <Icon className="h-6 w-6" strokeWidth={2} />
          </span>
          <span className="text-sm font-semibold leading-tight">{label}</span>
          {index < proofItems.length - 1 && <span className="hidden" aria-hidden="true" />}
        </div>
      ))}
    </motion.div>
  );
}

export function HeroSection() {
  return (
    <section
      aria-label="AgePass — La couche de conformité du retrait autonome"
      className="relative isolate flex min-h-[calc(100dvh-4rem)] w-full items-center overflow-hidden bg-[#fbfbff] py-6"
    >
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(180deg,#ffffff_0%,#fbfaff_34%,#f7f7ff_72%,#ffffff_100%)]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_58%_38%,rgba(98,72,255,0.16),transparent_39%),radial-gradient(circle_at_62%_20%,rgba(82,212,255,0.12),transparent_26%),radial-gradient(circle_at_82%_7%,rgba(188,68,255,0.12),transparent_30%)]" />

      <div
        className="flex w-full max-w-[1380px] flex-col px-5 sm:px-8 lg:px-12"
        style={{ marginInline: "auto" }}
      >
        <div className="grid items-center gap-8 lg:grid-cols-[1fr_1fr] lg:gap-6">
          <div className="text-center md:text-left">
            <BrandMark />
            <motion.h1
              {...fadeUp(0.2)}
              className="mt-7 text-[2.35rem] font-black leading-[1.08] tracking-normal text-[#080834] sm:text-[3.6rem] lg:text-[4rem]"
            >
              La couche
              <br />
              de conformité
              <br />
              du{" "}
              <span
                style={{
                  background: "linear-gradient(90deg, #052bff 0%, #3b22ff 52%, #552cff 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                <span className="whitespace-nowrap">retrait autonome.</span>
              </span>
            </motion.h1>

            <VerificationList />

            <motion.div {...fadeUp(0.44)} className="mt-5 flex flex-col items-center gap-5 md:items-start">
              <span className="h-1.5 w-28 rounded-full bg-[linear-gradient(90deg,#20baf5,#2b1cff,#bd2cff)]" aria-hidden="true" />
              <Link
                href="#s2"
                className="inline-flex items-center justify-center rounded-[18px] bg-[linear-gradient(135deg,#5d4bff,#3723ff)] px-9 py-3.5 text-base font-bold text-white shadow-[0_15px_40px_rgba(93,75,255,0.25)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_22px_52px_rgba(93,75,255,0.30)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#5d4bff]"
                style={{ color: "#ffffff" }}
              >
                Découvrir
              </Link>
            </motion.div>
          </div>

          <div className="relative">
            <motion.p
              {...fadeUp(0.26)}
              className="mx-auto mb-[-16px] hidden max-w-[330px] border-l-2 border-[#2118df] pl-5 text-[1rem] font-semibold leading-relaxed text-[#080834] lg:block"
            >
              AGEPASS, la couche
              <br />
              de conformité qui s'intègre partout.
            </motion.p>
            <HeroIllustration />
          </div>
        </div>

        <CheckpointRail />
        <ProofBar />
      </div>
    </section>
  );
}
