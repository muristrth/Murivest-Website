"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const STYLE_BLOCK = `
  :root {
    --charcoal: #2C2C2C;
    --ivory: #F8F7F4;
    --brass: #8B7355;
    --grey: #5A5A5A;
    --hairline: #E5E2DC;
  }
  .font-serif {
    font-family: 'Playfair Display', 'Cormorant Garamond', 'Libre Baskerville', Georgia, serif;
  }
  .font-sans {
    font-family: 'Montserrat', 'Inter', 'Helvetica Neue', Arial, sans-serif;
  }
  .eyebrow {
    font-family: 'Montserrat', 'Inter', 'Helvetica Neue', Arial, sans-serif;
    font-size: 0.7rem;
    font-weight: 500;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: var(--brass);
    margin-bottom: 1.25rem;
    display: block;
  }
  .hover-lift {
    transition: box-shadow 0.5s ease, transform 0.5s ease, border-color 0.4s ease;
  }
  .hover-lift:hover {
    box-shadow: 0 20px 56px rgba(44, 44, 44, 0.05);
    transform: translateY(-3px);
    border-color: var(--brass);
  }
  .link-hover { transition: color 0.3s ease; }
  .link-hover:hover { color: var(--brass); }
  .footer-link {
    color: rgba(248, 247, 244, 0.55);
    transition: color 0.3s ease;
    text-decoration: none;
    font-size: 0.78rem;
  }
  .footer-link:hover { color: var(--ivory); }
`;

const SPACE_TYPES = [
  {
    title: "Office Space",
    desc: "Grade A towers, boutique floors, and corporate headquarters. From solopreneur suites to multi-floor institutional fit-outs.",
    tag: "Work",
  },
  {
    title: "Retail Space",
    desc: "High-street frontage, mall anchors, neighbourhood convenience, and flagship showrooms in premium trade areas.",
    tag: "Trade",
  },
  {
    title: "Industrial & Logistics",
    desc: "Warehousing, last-mile distribution, cold storage, and trade-counter facilities with loading, power, and access.",
    tag: "Operations",
  },
  {
    title: "Shop Space",
    desc: "Street-level commercial units, arcade positions, and market-adjacent retail with high pedestrian capture.",
    tag: "Commerce",
  },
  {
    title: "Mixed-Use Commercial",
    desc: "Live-work-play environments where commercial ground floors support residential or hospitality above.",
    tag: "Hybrid",
  },
  {
    title: "Specialist Commercial",
    desc: "Medical suites, co-working conversions, R&D labs, and hospitality-adjacent commercial accommodation.",
    tag: "Niche",
  },
];

const TENANT_SERVICES = [
  {
    title: "Lease Architecture",
    desc: "We negotiate rent, escalations, break options, rent-free periods, and dilapidation caps before you sign.",
  },
  {
    title: "Fit-Out Coordination",
    desc: "From landlord works to tenant improvements. We manage contractors, budgets, and timelines so you open on schedule.",
  },
  {
    title: "Relocation Management",
    desc: "End-to-end move project management. IT infrastructure, furniture, signage, parking, and staff communications.",
  },
  {
    title: "Service Charge Audit",
    desc: "We scrutinise service charge budgets and reconciliations. You pay what is fair. Nothing more.",
  },
  {
    title: "Expansion & Contraction Rights",
    desc: "First refusal on adjacent space, surrender options, and subletting rights built into your lease from day one.",
  },
  {
    title: "Compliance & Regulatory",
    desc: "Fire safety, accessibility, zoning, signage permits, and occupational health compliance handled in-house.",
  },
];

const WHO_WE_SERVE = [
  {
    title: "Entrepreneurs",
    desc: "You need a space that signals credibility to investors and clients without draining runway. We find it.",
  },
  {
    title: "CEOs & Executives",
    desc: "Your office is an extension of your leadership. Discreet, premium, and precisely located.",
  },
  {
    title: "Corporates",
    desc: "Multi-market rollouts, regional headquarters, and consolidation projects managed with institutional discipline.",
  },
  {
    title: "Family Offices",
    desc: "Private commercial holdings, generational assets, and long-term occupancy strategies.",
  },
];

const PROCESS = [
  { step: "01", title: "The Brief", desc: "We learn your business model, culture, growth trajectory, and non-negotiables before we search." },
  { step: "02", title: "The Search", desc: "Murivest Lettings surfaces off-market and on-market inventory matched to your criteria." },
  { step: "03", title: "The Shortlist", desc: "You view only spaces that make commercial sense. No time wasted on irrelevant options." },
  { step: "04", title: "The Negotiation", desc: "We structure terms that protect your capital, preserve flexibility, and minimise future liability." },
  { step: "05", title: "The Occupation", desc: "Handover, fit-out, compliance, and launch. You move in. We remain on call." },
];

export default function TenantAdvisoryPage() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    industry: "",
    spaceType: "",
    location: "",
    size: "",
    budget: "",
    timeline: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    try {
      const res = await fetch("/api/tenant-enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) setStatus("success");
      else setStatus("error");
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      <style>{STYLE_BLOCK}</style>
      <main className="bg-[#F8F7F4]">
        {/* HERO */}
        <section className="relative bg-[#2C2C2C] overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/hero-commercial-tenant.jpg"
              alt="Premium commercial office interior"
              fill
              priority
              className="object-cover opacity-[0.1]"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-[#2C2C2C]/90" />
          </div>
          <div className="relative z-10 max-w-[1280px] mx-auto px-8 py-32 md:py-48">
            <div className="max-w-[780px]">
              <span className="eyebrow">Murivest Lettings</span>
              <h1 className="font-serif text-[clamp(2.5rem,5.5vw,4.5rem)] font-normal leading-[1.06] text-[#F8F7F4] mb-8 tracking-tight">
                Your Next Headquarters<br />
                Starts With a <em className="text-[#8B7355] not-italic">Conversation.</em>
              </h1>
              <p className="font-sans text-lg leading-[1.7] text-[rgba(248,247,244,0.75)] font-light max-w-[600px] mb-12">
                We do not show space. We place businesses. Murivest Lettings is the institutional leasing platform for entrepreneurs, CEOs, and corporates who refuse to compromise on where they work.
              </p>
              <div className="flex flex-wrap gap-5">
                <a href="#enquire" className="inline-block bg-[#8B7355] text-[#F8F7F4] font-sans text-xs font-semibold tracking-[0.15em] uppercase px-8 py-4 hover:bg-[#7a6549] transition-colors">
                  Submit Your Brief
                </a>
                <a href="#spaces" className="inline-block border border-[rgba(248,247,244,0.3)] text-[#F8F7F4] font-sans text-xs font-semibold tracking-[0.15em] uppercase px-8 py-4 hover:border-[#8B7355] hover:text-[#8B7355] transition-colors">
                  Explore Space Types
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* POSITIONING */}
        <section className="bg-white py-24 md:py-32 border-b border-[#E5E2DC]">
          <div className="max-w-[960px] mx-auto px-8 text-center">
            <span className="eyebrow">The Difference</span>
            <h2 className="font-serif text-[clamp(1.5rem,3vw,2.25rem)] font-normal text-[#2C2C2C] mb-10 leading-snug">
              Most agents show you what is available.<br />
              We show you what your business actually needs.
            </h2>
            <p className="font-sans text-base leading-[1.8] text-[#5A5A5A] font-light max-w-[720px] mx-auto">
              Before we search, we audit. Your industry, your client journey, your staff density, your brand posture, your five-year growth model. Then we find the space that amplifies all of it. This is not residential lettings. This is commercial placement.
            </p>
          </div>
        </section>

        {/* SPACE TYPES */}
        <section id="spaces" className="bg-[#F8F7F4] py-24 md:py-32">
          <div className="max-w-[1280px] mx-auto px-8">
            <div className="text-center mb-16">
              <span className="eyebrow">Inventory</span>
              <h2 className="font-serif text-[clamp(1.75rem,3.5vw,2.5rem)] font-normal text-[#2C2C2C] leading-snug">
                Commercial Space. Nothing Else.
              </h2>
              <p className="font-sans text-base leading-[1.7] font-light text-[#5A5A5A] max-w-[560px] mx-auto mt-5">
                Murivest Lettings lists and sources only income-producing commercial real estate. We do not handle residential lettings.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-[#E5E2DC]">
              {SPACE_TYPES.map((s) => (
                <div key={s.title} className="hover-lift bg-white p-10 md:p-12 cursor-pointer">
                  <span className="inline-block font-sans text-[0.65rem] font-semibold tracking-[0.15em] uppercase text-[#8B7355] border border-[#8B7355] px-3 py-1 mb-6">
                    {s.tag}
                  </span>
                  <h3 className="font-serif text-[1.25rem] font-normal text-[#2C2C2C] mb-4">{s.title}</h3>
                  <p className="font-sans text-[0.9rem] leading-[1.7] text-[#5A5A5A] font-light">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHO WE SERVE */}
        <section className="bg-white py-24 md:py-32 border-y border-[#E5E2DC]">
          <div className="max-w-[1280px] mx-auto px-8">
            <div className="text-center mb-16">
              <span className="eyebrow">Clients</span>
              <h2 className="font-serif text-[clamp(1.75rem,3.5vw,2.5rem)] font-normal text-[#2C2C2C] leading-snug">
                Built for Operators, Not Occupants
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {WHO_WE_SERVE.map((c) => (
                <div key={c.title} className="p-8 border-l-2 border-[#8B7355]">
                  <h3 className="font-serif text-[1.15rem] font-normal text-[#2C2C2C] mb-4">{c.title}</h3>
                  <p className="font-sans text-[0.9rem] leading-[1.7] text-[#5A5A5A] font-light">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="bg-[#F8F7F4] py-24 md:py-32">
          <div className="max-w-[1280px] mx-auto px-8">
            <div className="mb-14">
              <span className="eyebrow">Tenant Services</span>
              <h2 className="font-serif text-[clamp(1.75rem,3.5vw,2.5rem)] font-normal text-[#2C2C2C] mb-5 leading-snug">
                Standard & Extended Provisions
              </h2>
              <p className="font-sans text-base leading-[1.7] font-light text-[#5A5A5A] max-w-[640px]">
                We represent your interests, not the landlord's. Every service is designed to reduce your occupancy cost, increase your operational efficiency, and protect your downside.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-[#E5E2DC]">
              {TENANT_SERVICES.map((s) => (
                <div key={s.title} className="bg-white p-10 md:p-12">
                  <h3 className="font-serif text-[1.15rem] font-normal text-[#2C2C2C] mb-4">{s.title}</h3>
                  <p className="font-sans text-[0.9rem] leading-[1.7] text-[#5A5A5A] font-light">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="bg-[#2C2C2C] text-[#F8F7F4] py-24 md:py-32">
          <div className="max-w-[1280px] mx-auto px-8">
            <div className="text-center mb-16">
              <span className="eyebrow">Process</span>
              <h2 className="font-serif text-[clamp(1.75rem,3.5vw,2.5rem)] font-normal text-[#F8F7F4] leading-snug">
                From Brief to Front Door
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {PROCESS.map((p, idx) => (
                <div key={p.step} className="relative">
                  {idx < PROCESS.length - 1 && <div className="hidden md:block absolute top-6 left-full w-full h-[1px] bg-[rgba(248,247,244,0.1)]" />}
                  <p className="font-serif text-[2.25rem] font-normal text-[#8B7355] leading-none mb-5">{p.step}</p>
                  <h3 className="font-serif text-[1.1rem] font-normal text-[#F8F7F4] mb-3">{p.title}</h3>
                  <p className="font-sans text-[0.85rem] leading-[1.7] text-[rgba(248,247,244,0.65)] font-light">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PLATFORM */}
        <section className="bg-white py-24 md:py-32 border-y border-[#E5E2DC]">
          <div className="max-w-[960px] mx-auto px-8 text-center">
            <span className="eyebrow">Technology</span>
            <h2 className="font-serif text-[clamp(1.5rem,3vw,2.25rem)] font-normal text-[#2C2C2C] mb-8 leading-snug">
              Murivest Lettings
            </h2>
            <p className="font-sans text-base leading-[1.8] text-[#5A5A5A] font-light max-w-[720px] mx-auto mb-10">
              Our proprietary leasing platform connects qualified tenants with institutional landlords in real time. Off-market inventory, verified specifications, and direct advisory access. No noise. Only relevance.
            </p>
            <div className="flex flex-wrap justify-center gap-8 opacity-60">
              <div className="text-center">
                <p className="font-serif text-2xl text-[#2C2C2C] mb-1">Live Inventory</p>
                <p className="font-sans text-[0.75rem] tracking-[0.1em] uppercase text-[#5A5A5A]">Real-time availability</p>
              </div>
              <div className="text-center">
                <p className="font-serif text-2xl text-[#2C2C2C] mb-1">Verified Specs</p>
                <p className="font-sans text-[0.75rem] tracking-[0.1em] uppercase text-[#5A5A5A]">No misrepresentation</p>
              </div>
              <div className="text-center">
                <p className="font-serif text-2xl text-[#2C2C2C] mb-1">Direct Access</p>
                <p className="font-sans text-[0.75rem] tracking-[0.1em] uppercase text-[#5A5A5A]">Advisor-led viewings</p>
              </div>
            </div>
          </div>
        </section>

        {/* FORM */}
        <section id="enquire" className="bg-[#F8F7F4] py-24 md:py-32">
          <div className="max-w-[800px] mx-auto px-8">
            <div className="text-center mb-16">
              <span className="eyebrow">Enquiry</span>
              <h2 className="font-serif text-[clamp(1.75rem,3.5vw,2.5rem)] font-normal text-[#2C2C2C] leading-snug">
                Submit Your Brief
              </h2>
              <p className="font-sans text-base leading-[1.7] font-light text-[#5A5A5A] mt-5">
                Tell us what your business needs. We will respond within one business day.
              </p>
            </div>

            {status === "success" ? (
              <div className="border border-[#8B7355] p-12 text-center bg-white">
                <p className="font-serif text-2xl text-[#2C2C2C] mb-4">Brief Received</p>
                <p className="font-sans text-[0.9rem] text-[#5A5A5A] font-light">
                  Our leasing team will review your requirements and contact you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white border border-[#E5E2DC] p-10 md:p-14 space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label className="block font-sans text-[0.7rem] font-semibold tracking-[0.15em] uppercase text-[#5A5A5A] mb-3">Full Name *</label>
                    <input required name="fullName" value={form.fullName} onChange={handleChange} className="w-full bg-transparent border-b border-[#E5E2DC] py-3 font-sans text-[0.95rem] text-[#2C2C2C] focus:border-[#8B7355] focus:outline-none transition-colors" placeholder="Your name" />
                  </div>
                  <div>
                    <label className="block font-sans text-[0.7rem] font-semibold tracking-[0.15em] uppercase text-[#5A5A5A] mb-3">Email *</label>
                    <input required type="email" name="email" value={form.email} onChange={handleChange} className="w-full bg-transparent border-b border-[#E5E2DC] py-3 font-sans text-[0.95rem] text-[#2C2C2C] focus:border-[#8B7355] focus:outline-none transition-colors" placeholder="you@company.com" />
                  </div>
                  <div>
                    <label className="block font-sans text-[0.7rem] font-semibold tracking-[0.15em] uppercase text-[#5A5A5A] mb-3">Phone</label>
                    <input name="phone" value={form.phone} onChange={handleChange} className="w-full bg-transparent border-b border-[#E5E2DC] py-3 font-sans text-[0.95rem] text-[#2C2C2C] focus:border-[#8B7355] focus:outline-none transition-colors" placeholder="+254 ..." />
                  </div>
                  <div>
                    <label className="block font-sans text-[0.7rem] font-semibold tracking-[0.15em] uppercase text-[#5A5A5A] mb-3">Company *</label>
                    <input required name="company" value={form.company} onChange={handleChange} className="w-full bg-transparent border-b border-[#E5E2DC] py-3 font-sans text-[0.95rem] text-[#2C2C2C] focus:border-[#8B7355] focus:outline-none transition-colors" placeholder="Company name" />
                  </div>
                  <div>
                    <label className="block font-sans text-[0.7rem] font-semibold tracking-[0.15em] uppercase text-[#5A5A5A] mb-3">Industry *</label>
                    <input required name="industry" value={form.industry} onChange={handleChange} className="w-full bg-transparent border-b border-[#E5E2DC] py-3 font-sans text-[0.95rem] text-[#2C2C2C] focus:border-[#8B7355] focus:outline-none transition-colors" placeholder="e.g. Fintech, Law, Logistics" />
                  </div>
                  <div>
                    <label className="block font-sans text-[0.7rem] font-semibold tracking-[0.15em] uppercase text-[#5A5A5A] mb-3">Space Type *</label>
                    <select required name="spaceType" value={form.spaceType} onChange={handleChange} className="w-full bg-transparent border-b border-[#E5E2DC] py-3 font-sans text-[0.95rem] text-[#2C2C2C] focus:border-[#8B7355] focus:outline-none transition-colors">
                      <option value="">Select space type</option>
                      <option value="Office">Office</option>
                      <option value="Retail">Retail</option>
                      <option value="Industrial">Industrial & Logistics</option>
                      <option value="Shop">Shop</option>
                      <option value="Mixed-Use">Mixed-Use Commercial</option>
                      <option value="Specialist">Specialist Commercial</option>
                    </select>
                  </div>
                  <div>
                    <label className="block font-sans text-[0.7rem] font-semibold tracking-[0.15em] uppercase text-[#5A5A5A] mb-3">Preferred Location *</label>
                    <input required name="location" value={form.location} onChange={handleChange} className="w-full bg-transparent border-b border-[#E5E2DC] py-3 font-sans text-[0.95rem] text-[#2C2C2C] focus:border-[#8B7355] focus:outline-none transition-colors" placeholder="e.g. Westlands, Kilimani, CBD" />
                  </div>
                  <div>
                    <label className="block font-sans text-[0.7rem] font-semibold tracking-[0.15em] uppercase text-[#5A5A5A] mb-3">Size Requirement (sq ft / sq m)</label>
                    <input name="size" value={form.size} onChange={handleChange} className="w-full bg-transparent border-b border-[#E5E2DC] py-3 font-sans text-[0.95rem] text-[#2C2C2C] focus:border-[#8B7355] focus:outline-none transition-colors" placeholder="Approximate size" />
                  </div>
                  <div>
                    <label className="block font-sans text-[0.7rem] font-semibold tracking-[0.15em] uppercase text-[#5A5A5A] mb-3">Monthly Budget (KSh / USD)</label>
                    <input name="budget" value={form.budget} onChange={handleChange} className="w-full bg-transparent border-b border-[#E5E2DC] py-3 font-sans text-[0.95rem] text-[#2C2C2C] focus:border-[#8B7355] focus:outline-none transition-colors" placeholder="e.g. KSh 500,000" />
                  </div>
                  <div>
                    <label className="block font-sans text-[0.7rem] font-semibold tracking-[0.15em] uppercase text-[#5A5A5A] mb-3">Move-in Timeline *</label>
                    <select required name="timeline" value={form.timeline} onChange={handleChange} className="w-full bg-transparent border-b border-[#E5E2DC] py-3 font-sans text-[0.95rem] text-[#2C2C2C] focus:border-[#8B7355] focus:outline-none transition-colors">
                      <option value="">Select timeline</option>
                      <option value="Immediate">Immediate</option>
                      <option value="1-3 months">1–3 months</option>
                      <option value="3-6 months">3–6 months</option>
                      <option value="6+ months">6+ months</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block font-sans text-[0.7rem] font-semibold tracking-[0.15em] uppercase text-[#5A5A5A] mb-3">Additional Requirements</label>
                  <textarea name="message" value={form.message} onChange={handleChange} rows={4} className="w-full bg-transparent border-b border-[#E5E2DC] py-3 font-sans text-[0.95rem] text-[#2C2C2C] focus:border-[#8B7355] focus:outline-none transition-colors resize-none" placeholder="Parking, security, signage, fit-out, expansion needs..." />
                </div>
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="bg-[#2C2C2C] text-[#F8F7F4] font-sans text-xs font-semibold tracking-[0.15em] uppercase px-10 py-4 hover:bg-[#8B7355] transition-colors disabled:opacity-50"
                  >
                    {status === "submitting" ? "Submitting..." : "Submit Brief"}
                  </button>
                  <p className="font-sans text-[0.75rem] text-[#5A5A5A] font-light mt-4">
                    All enquiries are treated in strict confidence. We do not share your brief with third parties.
                  </p>
                </div>
                {status === "error" && (
                  <p className="font-sans text-sm text-red-700">Something went wrong. Please try again or email us directly.</p>
                )}
              </form>
            )}
          </div>
        </section>

        {/* FOOTER */}
        <footer className="bg-[#2C2C2C] text-[rgba(248,247,244,0.55)] py-20 pb-10">
          <div className="max-w-[1280px] mx-auto px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
              <div className="col-span-2 md:col-span-1">
                <p className="font-serif text-[1.25rem] text-[#F8F7F4] mb-4 tracking-[0.15em] uppercase">Murivest</p>
                <p className="font-sans text-[0.8rem] leading-[1.7] font-light">
                  Institutional commercial real estate advisory, capital markets, and asset management.
                </p>
              </div>
              <div>
                <p className="font-sans text-[0.7rem] font-semibold tracking-[0.15em] uppercase text-[#8B7355] mb-5">Lettings</p>
                <ul className="list-none p-0 m-0">
                  {["Office Space", "Retail Space", "Industrial", "Shop Space", "Submit Brief"].map((item) => (
                    <li key={item} className="mb-2.5"><span className="footer-link cursor-pointer">{item}</span></li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="font-sans text-[0.7rem] font-semibold tracking-[0.15em] uppercase text-[#8B7355] mb-5">Management</p>
                <ul className="list-none p-0 m-0">
                  {["Asset Performance", "Tenant Curation", "NOI Optimisation", "Institutional Reporting"].map((item) => (
                    <li key={item} className="mb-2.5"><span className="footer-link cursor-pointer">{item}</span></li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="font-sans text-[0.7rem] font-semibold tracking-[0.15em] uppercase text-[#8B7355] mb-5">Legal</p>
                <ul className="list-none p-0 m-0">
                  {["Privacy Policy", "Terms of Use", "Website Disclaimer"].map((item) => (
                    <li key={item} className="mb-2.5"><span className="footer-link cursor-pointer">{item}</span></li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="border-t border-[rgba(248,247,244,0.08)] pt-8 flex flex-wrap justify-between items-center gap-4">
              <p className="font-sans text-[0.7rem] font-light">© {new Date().getFullYear()} Murivest. All rights reserved.</p>
              <p className="font-sans text-[0.7rem] font-light text-[rgba(248,247,244,0.4)]">Murivest Lettings — Commercial Only</p>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}