"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ChevronRight,
  ArrowRight,
  MapPin,
  Landmark,
  Compass,
  BarChart3,
  Users,
  Shield,
  Eye,
  FileCheck,
  Lock,
  Footprints,
  Globe,
  Building2,
  Briefcase,
  HardHat,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  REAL DATA — Sourced from About Murivest document                   */
/* ------------------------------------------------------------------ */

const services = [
  {
    title: "Acquisition Advisory",
    description:
      "Support for investors and principals evaluating commercial property acquisitions. We help define acquisition criteria, assess opportunities, interpret market conditions and progress suitable opportunities through a structured process.",
    icon: Compass,
  },
  {
    title: "Disposition Strategy",
    description:
      "Confidential advisory for owners considering the sale or strategic repositioning of a commercial asset. We help establish the appropriate disposition strategy, identify potential counterparties and coordinate the process around the owner's objectives.",
    icon: Landmark,
  },
  {
    title: "Capital Introductions",
    description:
      "Selected introductions between commercial property opportunities and relevant private or institutional capital. Introductions are mandate-led and subject to suitability, confidentiality and appropriate engagement.",
    icon: Users,
  },
  {
    title: "Commercial Property Research",
    description:
      "Market intelligence for owners, investors and professionals seeking a clearer understanding of commercial property markets. Our research examines markets, sectors, asset classes, capital conditions and themes relevant to property decisions.",
    icon: BarChart3,
  },
];

const markets = [
  {
    region: "East Africa",
    location: "Kenya",
    detail: "Nairobi headquarters · Commercial property advisory",
    icon: MapPin,
  },
  {
    region: "Gulf",
    location: "United Arab Emirates",
    detail: "Dubai and Abu Dhabi · Mandate-led market access",
    icon: Building2,
  },
  {
    region: "Western Europe",
    location: "United Kingdom",
    detail: "London and regional cities · Cross-border intelligence",
    icon: Landmark,
  },
  {
    region: "Southeast Asia",
    location: "Singapore",
    detail: "Institutional gateway · Research and advisory",
    icon: Globe,
  },
];

const principles = [
  {
    title: "Defined mandates",
    description:
      "Understanding the investment, ownership or occupancy objective before pursuing an opportunity.",
    icon: FileCheck,
  },
  {
    title: "Relevant intelligence",
    description:
      "Bringing together market context and property-level information relevant to the decision.",
    icon: Eye,
  },
  {
    title: "Counterparty discipline",
    description:
      "Understanding who is involved, what they are seeking and whether the proposed engagement is appropriate.",
    icon: Users,
  },
  {
    title: "Verification",
    description:
      "Treating property availability, information and representations as matters requiring appropriate verification.",
    icon: Shield,
  },
  {
    title: "Confidentiality",
    description:
      "Handling sensitive property and capital discussions discreetly and subject to appropriate engagement.",
    icon: Lock,
  },
  {
    title: "Clear next steps",
    description:
      "Reducing unnecessary complexity so that principals can make informed decisions.",
    icon: Footprints,
  },
];

const steps = [
  {
    num: "01",
    title: "Define",
    description:
      "We establish the mandate, objectives, parameters and decision criteria.",
  },
  {
    num: "02",
    title: "Understand",
    description:
      "We assess the relevant market, asset context and available information.",
  },
  {
    num: "03",
    title: "Identify",
    description:
      "We identify relevant opportunities, counterparties or market intelligence within the mandate.",
  },
  {
    num: "04",
    title: "Assess",
    description:
      "We examine the commercial considerations, assumptions and risks that matter to the decision.",
  },
  {
    num: "05",
    title: "Engage",
    description:
      "Where appropriate, we coordinate introductions, information exchange and further diligence.",
  },
  {
    num: "06",
    title: "Progress",
    description:
      "We support the mandate through the agreed process and toward its intended outcome.",
  },
];

const audiences = [
  {
    title: "Investors",
    description:
      "Principals and investment groups seeking commercial property opportunities aligned with defined acquisition criteria.",
    icon: Briefcase,
  },
  {
    title: "Property owners",
    description:
      "Owners considering a confidential disposition, strategic property decision or introduction to potential capital.",
    icon: Building2,
  },
  {
    title: "Occupiers",
    description:
      "Businesses evaluating commercial property requirements and location decisions.",
    icon: HardHat,
  },
  {
    title: "Capital partners",
    description:
      "Relevant private and institutional capital seeking selected commercial property opportunities and market intelligence.",
    icon: Landmark,
  },
];

const standards = [
  {
    title: "Discretion",
    description:
      "Sensitive property and capital discussions should be handled appropriately.",
  },
  {
    title: "Accuracy",
    description:
      "Information should be treated critically and verified where necessary.",
  },
  {
    title: "Clarity",
    description:
      "Clients should understand the basis for decisions and the next step in the process.",
  },
  {
    title: "Discipline",
    description:
      "Opportunities should be assessed against the mandate rather than pursued simply because they are available.",
  },
  {
    title: "Integrity",
    description:
      "We do not represent certainty where uncertainty exists.",
  },
];

/* ------------------------------------------------------------------ */
/*  COMPONENT                                                         */
/* ------------------------------------------------------------------ */

export default function AboutClient() {
  return (
    <main className="relative bg-[#F8F7F4] text-[#2C2C2C] overflow-hidden">
      {/* Top hairline */}
      <div className="absolute top-0 left-0 w-full h-px bg-[#E5E2DC]" />

      {/* BREADCRUMB */}
      <nav
        aria-label="Breadcrumb"
        className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 pt-8 pb-0"
      >
        <ol className="flex items-center gap-2 text-[12px] tracking-[0.1em] text-[#8B7355]">
          <li>
            <Link href="/" className="hover:text-[#2C2C2C] transition-colors">
              Home
            </Link>
          </li>
          <li aria-hidden="true">
            <ChevronRight className="w-3 h-3" />
          </li>
          <li className="text-[#2C2C2C] font-medium">About</li>
        </ol>
      </nav>

      {/* HERO */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 pt-16 md:pt-24 pb-16 md:pb-24">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-[1px] bg-[#8B7355]" />
              <p className="text-[11px] tracking-[0.4em] uppercase text-[#8B7355] font-medium">
                About Murivest
              </p>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif leading-[1.1] mb-8 text-[#2C2C2C]">
              Independent Commercial
              <br />
              <span className="italic text-[#8B7355] font-light">
                Real Estate Advisory
              </span>
            </h1>

            <div className="w-16 h-[1px] bg-[#E5E2DC] mb-8" />

            <p className="text-[15px] leading-[1.8] text-[#5A5A5A] font-light mb-10 max-w-2xl">
              Murivest is an independent, Nairobi-founded commercial real estate
              advisory practice helping owners, investors and occupiers navigate
              commercial property mandates across selected gateway markets.
            </p>

            <p className="text-[24px] md:text-[28px] font-serif italic text-[#1B4332] leading-[1.3] mb-12">
              Local intelligence. Institutional discipline.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#1B4332] text-[#FAF9F6] text-[12px] tracking-[0.2em] uppercase font-medium hover:bg-[#2C2C2C] transition-colors duration-500"
              >
                Begin a private enquiry
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 lg:pt-16"
          >
            <div className="border border-[#E5E2DC] bg-white/40 backdrop-blur-sm p-8 md:p-10">
              <p className="text-[12px] tracking-[0.15em] uppercase text-[#5A5A5A] mb-4">
                Founded
              </p>
              <p className="text-[14px] leading-[1.8] text-[#2C2C2C] font-light mb-6">
                Founded in 2025, Murivest was established around a simple
                principle: commercial property decisions deserve the same
                discipline applied to other forms of institutional capital.
              </p>
              <p className="text-[14px] leading-[1.8] text-[#2C2C2C] font-light">
                We combine local market intelligence with a structured,
                mandate-led approach to acquisitions, dispositions, capital
                introductions and commercial property research.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* BUILT AROUND THE MANDATE */}
      <section className="relative border-t border-[#E5E2DC]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-20 md:py-28">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl mb-16"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-[1px] bg-[#8B7355]" />
              <p className="text-[11px] tracking-[0.4em] uppercase text-[#8B7355] font-medium">
                Our Approach
              </p>
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif leading-[1.15] mb-6 text-[#2C2C2C]">
              Built around the mandate
            </h2>
            <p className="text-[24px] md:text-[28px] font-serif italic text-[#1B4332] leading-[1.3] mb-8">
              We start with the decision, not the transaction.
            </p>
            <p className="text-[15px] leading-[1.8] text-[#5A5A5A] font-light">
              Commercial property is rarely just a question of finding an asset.
              An acquisition may begin with a defined investment thesis. A
              disposition may begin with a strategic decision about capital. An
              occupier may need to balance location, cost and long-term
              operational requirements. Our role is to understand the mandate
              first.
            </p>
          </motion.div>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact?type=acquisition"
              className="inline-flex items-center gap-2 px-6 py-3 border border-[#1B4332] text-[#1B4332] text-[11px] tracking-[0.2em] uppercase font-medium hover:bg-[#1B4332] hover:text-[#FAF9F6] transition-colors duration-500"
            >
              Define an acquisition mandate
            </Link>
            <Link
              href="/contact?type=disposition"
              className="inline-flex items-center gap-2 px-6 py-3 border border-[#1B4332] text-[#1B4332] text-[11px] tracking-[0.2em] uppercase font-medium hover:bg-[#1B4332] hover:text-[#FAF9F6] transition-colors duration-500"
            >
              Discuss a disposition
            </Link>
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="relative border-t border-[#E5E2DC]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-20 md:py-28">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-16 md:mb-20"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-[1px] bg-[#8B7355]" />
              <p className="text-[11px] tracking-[0.4em] uppercase text-[#8B7355] font-medium">
                Services
              </p>
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif leading-[1.15] text-[#2C2C2C]">
              What we do
            </h2>
            <p className="text-[15px] leading-[1.8] text-[#5A5A5A] font-light mt-4 max-w-2xl">
              Advisory for commercial property decisions. Murivest works across
              selected commercial real estate mandates, connecting market context
              with practical execution.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.7,
                    delay: i * 0.1,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="border border-[#E5E2DC] bg-white/50 p-8 md:p-10"
                >
                  <Icon className="w-5 h-5 text-[#8B7355] mb-6" />
                  <h3 className="text-[18px] md:text-[20px] font-serif leading-[1.3] mb-4 text-[#2C2C2C]">
                    {service.title}
                  </h3>
                  <p className="text-[14px] leading-[1.7] text-[#5A5A5A] font-light">
                    {service.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-12"
          >
            <Link
              href="/research"
              className="inline-flex items-center gap-2 text-[12px] tracking-[0.15em] uppercase text-[#8B7355] font-medium hover:text-[#1B4332] transition-colors"
            >
              Explore our research
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* MARKET PERSPECTIVE */}
      <section className="relative border-t border-[#E5E2DC]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-20 md:py-28">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-16 md:mb-20"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-[1px] bg-[#8B7355]" />
              <p className="text-[11px] tracking-[0.4em] uppercase text-[#8B7355] font-medium">
                Markets
              </p>
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif leading-[1.15] mb-6 text-[#2C2C2C]">
              Our market perspective
            </h2>
            <p className="text-[15px] leading-[1.8] text-[#5A5A5A] font-light max-w-3xl">
              Commercial real estate is inherently local. Occupier demand,
              financing conditions, planning environments, construction costs,
              liquidity and investor preferences can differ substantially between
              markets. At the same time, capital increasingly crosses borders.
              Murivest&apos;s model connects these two realities: local market
              understanding and cross-border perspective.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {markets.map((market, i) => {
              const Icon = market.icon;
              return (
                <motion.div
                  key={market.region}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.7,
                    delay: i * 0.08,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="border border-[#E5E2DC] bg-white/50 p-8"
                >
                  <Icon className="w-4 h-4 text-[#8B7355] mb-6" />
                  <p className="text-[10px] tracking-[0.2em] uppercase text-[#8B7355] font-medium mb-2">
                    {market.region}
                  </p>
                  <h3 className="text-[16px] font-serif text-[#2C2C2C] mb-2">
                    {market.location}
                  </h3>
                  <p className="text-[13px] leading-[1.6] text-[#5A5A5A] font-light">
                    {market.detail}
                  </p>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-12"
          >
            <Link
              href="/markets"
              className="inline-flex items-center gap-2 text-[12px] tracking-[0.15em] uppercase text-[#8B7355] font-medium hover:text-[#1B4332] transition-colors"
            >
              Explore all markets
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* A MEASURED MODEL */}
      <section className="relative border-t border-[#E5E2DC]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-20 md:py-28">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-16 md:mb-20"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-[1px] bg-[#8B7355]" />
              <p className="text-[11px] tracking-[0.4em] uppercase text-[#8B7355] font-medium">
                Principles
              </p>
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif leading-[1.15] mb-6 text-[#2C2C2C]">
              A measured model
            </h2>
            <p className="text-[24px] md:text-[28px] font-serif italic text-[#1B4332] leading-[1.3] max-w-3xl">
              We do not manufacture certainty. We make the next decision clearer.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {principles.map((p, i) => {
              const Icon = p.icon;
              return (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.7,
                    delay: i * 0.08,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="border border-[#E5E2DC] bg-white/50 p-8 md:p-10"
                >
                  <Icon className="w-4 h-4 text-[#8B7355] mb-5" />
                  <h3 className="text-[16px] font-serif text-[#2C2C2C] mb-3">
                    {p.title}
                  </h3>
                  <p className="text-[14px] leading-[1.7] text-[#5A5A5A] font-light">
                    {p.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="relative border-t border-[#E5E2DC]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-20 md:py-28">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-16 md:mb-20"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-[1px] bg-[#8B7355]" />
              <p className="text-[11px] tracking-[0.4em] uppercase text-[#8B7355] font-medium">
                Process
              </p>
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif leading-[1.15] text-[#2C2C2C]">
              How we work
            </h2>
            <p className="text-[15px] leading-[1.8] text-[#5A5A5A] font-light mt-4">
              From mandate to decision.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.7,
                  delay: i * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="relative"
              >
                <span className="text-[48px] font-serif text-[#E5E2DC] leading-none block mb-4">
                  {step.num}
                </span>
                <h3 className="text-[18px] font-serif text-[#2C2C2C] mb-3">
                  {step.title}
                </h3>
                <p className="text-[14px] leading-[1.7] text-[#5A5A5A] font-light">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO WE WORK WITH */}
      <section className="relative border-t border-[#E5E2DC]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-20 md:py-28">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-16 md:mb-20"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-[1px] bg-[#8B7355]" />
              <p className="text-[11px] tracking-[0.4em] uppercase text-[#8B7355] font-medium">
                Clients
              </p>
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif leading-[1.15] text-[#2C2C2C]">
              Who we work with
            </h2>
            <p className="text-[15px] leading-[1.8] text-[#5A5A5A] font-light mt-4 max-w-2xl">
              Principals, owners and capital. Our engagements are determined by
              mandate, suitability and the nature of the assignment.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {audiences.map((aud, i) => {
              const Icon = aud.icon;
              return (
                <motion.div
                  key={aud.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.7,
                    delay: i * 0.08,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="border border-[#E5E2DC] bg-white/50 p-8"
                >
                  <Icon className="w-4 h-4 text-[#8B7355] mb-5" />
                  <h3 className="text-[16px] font-serif text-[#2C2C2C] mb-3">
                    {aud.title}
                  </h3>
                  <p className="text-[13px] leading-[1.6] text-[#5A5A5A] font-light">
                    {aud.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FOUNDED IN NAIROBI / LEADERSHIP / INDEPENDENCE / STANDARDS */}
      <section className="relative border-t border-[#E5E2DC]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-20 md:py-28">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-[1px] bg-[#8B7355]" />
                <p className="text-[11px] tracking-[0.4em] uppercase text-[#8B7355] font-medium">
                  Origins
                </p>
              </div>

              <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif leading-[1.15] mb-8 text-[#2C2C2C]">
                Founded in 2025
              </h2>

              <p className="text-[15px] leading-[1.8] text-[#5A5A5A] font-light mb-8">
                Murivest was founded in 2025. Nairobi provides the
                firm&apos;s principal market perspective and serves as the
                foundation for its East African commercial property advisory
                activity.
              </p>

              <p className="text-[15px] leading-[1.8] text-[#5A5A5A] font-light mb-8">
                From this base, Murivest has developed a market architecture
                connecting selected commercial property markets across East
                Africa, the Gulf, Western Europe and Southeast Asia. The
                objective is not to appear everywhere. It is to build meaningful
                market connections where there is a clear reason for the mandate
                to exist.
              </p>

              <div className="border border-[#E5E2DC] bg-white/50 p-8 md:p-10 mt-12">
                <p className="text-[10px] tracking-[0.2em] uppercase text-[#8B7355] font-medium mb-4">
                  Leadership
                </p>
                <h3 className="text-[18px] font-serif text-[#2C2C2C] mb-4">
                  Mark Muriithi
                </h3>
                <p className="text-[12px] tracking-[0.15em] uppercase text-[#5A5A5A] mb-4">
                  Founder & Principal
                </p>
                <p className="text-[14px] leading-[1.8] text-[#5A5A5A] font-light">
                  Murivest was founded by Mark Muriithi in Nairobi in 2025. The
                  firm was established to create an independent advisory platform
                  focused on commercial property mandates, market intelligence and
                  carefully considered cross-border opportunities.
                </p>
                <p className="text-[14px] leading-[1.8] text-[#5A5A5A] font-light mt-4">
                  The firm&apos;s approach is deliberately measured: understand
                  the mandate, establish the relevant facts, identify the
                  appropriate counterparties and make the next decision clearer.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.8,
                delay: 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="lg:col-span-5"
            >
              <div className="border border-[#E5E2DC] bg-white/40 backdrop-blur-sm p-8 md:p-10 mb-8">
                <p className="text-[12px] tracking-[0.15em] uppercase text-[#5A5A5A] mb-4">
                  Independence
                </p>
                <p className="text-[14px] leading-[1.8] text-[#2C2C2C] font-light mb-6">
                  Murivest operates as an independent advisory practice. We are
                  not structured around a large institutional brokerage network,
                  and our role is not to manufacture transactions simply to
                  create activity.
                </p>
                <p className="text-[14px] leading-[1.8] text-[#2C2C2C] font-light">
                  Our approach is to work from a defined mandate and determine
                  where our involvement can add value. That independence allows us
                  to maintain a measured perspective across acquisition,
                  disposition, research and selected capital introductions.
                </p>
              </div>

              <div className="border border-[#E5E2DC] bg-white/40 backdrop-blur-sm p-8 md:p-10">
                <p className="text-[12px] tracking-[0.15em] uppercase text-[#5A5A5A] mb-4">
                  Our standards
                </p>
                <p className="text-[14px] leading-[1.8] text-[#2C2C2C] font-light mb-6">
                  Discretion. Verification. Discipline.
                </p>
                <div className="space-y-5">
                  {standards.map((s) => (
                    <div key={s.title}>
                      <p className="text-[13px] font-medium text-[#2C2C2C] mb-1">
                        {s.title}
                      </p>
                      <p className="text-[13px] leading-[1.6] text-[#5A5A5A] font-light">
                        {s.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WHAT MURIVEST IS NOT */}
      <section className="relative border-t border-[#E5E2DC]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-20 md:py-28">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-[1px] bg-[#8B7355]" />
              <p className="text-[11px] tracking-[0.4em] uppercase text-[#8B7355] font-medium">
                Boundaries
              </p>
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif leading-[1.15] mb-6 text-[#2C2C2C]">
              What Murivest is not
            </h2>
            <p className="text-[15px] leading-[1.8] text-[#5A5A5A] font-light mb-6">
              A clear boundary matters. Murivest provides commercial real estate
              advisory and related market intelligence.
            </p>
            <p className="text-[15px] leading-[1.8] text-[#5A5A5A] font-light mb-6">
              Murivest does not operate collective investment schemes, pool
              investor capital, or offer regulated financial products. Property
              availability, valuations, financial information and market
              information are subject to appropriate verification and formal
              engagement.
            </p>
            <p className="text-[15px] leading-[1.8] text-[#5A5A5A] font-light">
              Where opportunities involve another jurisdiction or regulated
              activity, the relevant local requirements and counterparties apply.
            </p>
          </motion.div>
        </div>
      </section>

      {/* THE MURIVEST PRINCIPLE */}
      <section className="relative border-t border-[#E5E2DC] bg-[#1B4332] text-[#FAF9F6]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-20 md:py-28">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-[1px] bg-[#B8956B]" />
              <p className="text-[11px] tracking-[0.4em] uppercase text-[#B8956B] font-medium">
                Principle
              </p>
            </div>

            <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif leading-[1.15] mb-8">
              The next decision should be clearer than the last.
            </h2>

            <p className="text-[15px] leading-[1.8] text-[#D4CFC7] font-light mb-10">
              Commercial property decisions can involve significant capital,
              long time horizons and multiple counterparties. Our purpose is
              therefore straightforward: bring the relevant intelligence
              together, apply discipline to the mandate, and make the next
              decision clearer. That is the standard we are building Murivest
              around.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#B8956B] text-[#1B4332] text-[12px] tracking-[0.2em] uppercase font-medium hover:bg-[#FAF9F6] transition-colors duration-500"
              >
                Begin a private enquiry
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/markets"
                className="inline-flex items-center gap-2 px-8 py-4 border border-[#B8956B] text-[#B8956B] text-[12px] tracking-[0.2em] uppercase font-medium hover:bg-[#B8956B] hover:text-[#1B4332] transition-colors duration-500"
              >
                Explore our markets
              </Link>
              <Link
                href="/research"
                className="inline-flex items-center gap-2 px-8 py-4 border border-[#B8956B] text-[#B8956B] text-[12px] tracking-[0.2em] uppercase font-medium hover:bg-[#B8956B] hover:text-[#1B4332] transition-colors duration-500"
              >
                Read our research
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FOOTER DISCLOSURE */}
      <section className="relative border-t border-[#E5E2DC]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-12 md:py-16">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <p className="text-[12px] tracking-[0.15em] uppercase text-[#5A5A5A] mb-2">
                Murivest Group Ltd Ltd
              </p>
              <p className="text-[13px] text-[#5A5A5A] font-light">
                Westlands · Nairobi · Kenya · Founded 2025
              </p>
            </div>
            <p className="text-[12px] text-[#8B7355] font-light max-w-md md:text-right">
              Independent commercial real estate advisory across selected
              gateway markets.
            </p>
          </div>
          <div className="mt-8 pt-6 border-t border-[#E5E2DC]">
            <p className="text-[11px] leading-[1.7] text-[#8B7355] font-light">
              Murivest does not operate collective investment schemes, pool
              investor capital, or offer regulated financial products. Property
              availability and market information are subject to verification and
              formal engagement.
            </p>
          </div>
        </div>
      </section>

      <div className="absolute bottom-0 left-0 w-full h-px bg-[#E5E2DC]" />
    </main>
  );
}