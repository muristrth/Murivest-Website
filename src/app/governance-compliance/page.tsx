import { Metadata } from 'next';
import React from 'react';
import { 
  ShieldCheck, 
  Scale, 
  Lock, 
  FileCheck, 
  Globe, 
  AlertCircle,
  CheckCircle2,
  Briefcase
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Governance, Compliance & Fiduciary Standards | Murivest',
  description: 'Our commitment to institutional-grade governance, regulatory compliance, and fiduciary duty in the East African real estate market.',
  keywords: 'real estate governance Kenya, CMA compliance real estate, AML KYC procedures Nairobi, fiduciary duty Murivest, data protection real estate',
};

export default function GovernanceCompliancePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white font-light selection:bg-amber-500/30">
      
      {/* Hero */}
      <section className="relative pt-40 pb-24 px-8 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-600/5 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px w-8 bg-amber-500" />
            <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-amber-500">
              Governance & Integrity
            </span>
          </div>

          <h1 className="text-5xl lg:text-7xl font-serif italic mb-8 leading-tight">
            Institutional <br />
            <span className="text-amber-200/90 font-serif">Fiduciary Standards</span>
          </h1>
          <p className="max-w-2xl text-slate-400 text-lg leading-relaxed font-light italic border-l border-amber-500/30 pl-8">
            Murivest operates under a rigorous governance framework designed to align 
            with global institutional standards and local regulatory requirements.
          </p>
        </div>
      </section>

      {/* Regulatory Positioning Section */}
      <section className="py-24 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div>
              <h2 className="text-[10px] tracking-[0.4em] uppercase text-amber-500 font-bold mb-8">Regulatory Positioning</h2>
              <h3 className="text-4xl font-serif italic mb-8">Independent Advisory vs. Fund Management</h3>
              <p className="text-slate-400 leading-relaxed mb-6">
                Murivest Realty Group is primarily an **Independent Real Estate Investment Advisory and Transaction Origination firm**. 
                We do not operate as a collective investment scheme or pool public capital unless under a specific, 
                regulated mandate approved by the relevant authorities.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-6 bg-white/[0.02] border border-white/5">
                  <Briefcase className="text-amber-500 shrink-0" size={20} />
                  <div>
                    <h4 className="text-white font-medium mb-1">Mandate-Based Execution</h4>
                    <p className="text-slate-500 text-xs">Our role is strictly defined by bilateral mandates with professional and institutional investors.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-6 bg-white/[0.02] border border-white/5">
                  <Scale className="text-amber-500 shrink-0" size={20} />
                  <div>
                    <h4 className="text-white font-medium mb-1">CMA & RICS Alignment</h4>
                    <p className="text-slate-500 text-xs">We align our valuation and reporting standards with the Capital Markets Authority (CMA) guidelines and RICS global standards.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-amber-500/10 to-transparent border border-white/10 p-12 flex items-center justify-center">
                <ShieldCheck size={200} className="text-amber-500/20" strokeWidth={0.5} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IC Structure Section */}
      <section className="py-24 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-24 items-start">
            <div>
              <h2 className="text-[10px] tracking-[0.4em] uppercase text-amber-500 font-bold mb-8">Investment Mechanics</h2>
              <h3 className="text-4xl font-serif italic mb-8">Investment Committee Structure</h3>
              <p className="text-slate-400 leading-relaxed mb-8">
                Every advisory mandate and transaction origination undergoes a multi-stage review process by our Investment Committee (IC). 
                The IC ensures that all opportunities align with the client's risk-return parameters and our internal fiduciary standards.
              </p>
              
              <div className="space-y-6">
                {[
                  { stage: "Stage 01", title: "Technical Underwriting", desc: "Rigorous analysis of asset fundamentals, NOI stability, and technical due diligence." },
                  { stage: "Stage 02", title: "Risk Sensitivity Analysis", desc: "Stress-testing against currency, interest rate, and macro-political scenarios." },
                  { stage: "Stage 03", title: "Fiduciary Review", desc: "Final oversight to ensure mandate alignment and structural integrity." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6">
                    <span className="text-[10px] font-bold text-amber-500/40 uppercase tracking-widest mt-1">{item.stage}</span>
                    <div>
                      <h4 className="text-white font-medium mb-1">{item.title}</h4>
                      <p className="text-slate-500 text-xs">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/[0.02] border border-white/10 p-12">
              <h3 className="text-2xl font-serif italic mb-8 text-amber-200">Professional Partners</h3>
              <p className="text-slate-500 text-sm mb-12 leading-relaxed">
                We collaborate with a tier-1 ecosystem of professional service providers to ensure transaction transparency and legal rigour.
              </p>
              
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h4 className="text-[9px] uppercase tracking-widest text-amber-500 font-bold mb-4">Legal & Conveyancing</h4>
                  <ul className="text-xs text-slate-400 space-y-2">
                    <li>• Leading Nairobi Firms</li>
                    <li>• International Counsel</li>
                    <li>• Specialist Land Lawyers</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-[9px] uppercase tracking-widest text-amber-500 font-bold mb-4">Audit & Tax</h4>
                  <ul className="text-xs text-slate-400 space-y-2">
                    <li>• Big 4 Affiliates</li>
                    <li>• KRA Compliant</li>
                    <li>• Tax Structuring Advisors</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-[9px] uppercase tracking-widest text-amber-500 font-bold mb-4">Valuation</h4>
                  <ul className="text-xs text-slate-400 space-y-2">
                    <li>• In-house Appraisers</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-[9px] uppercase tracking-widest text-amber-500 font-bold mb-4">Banking</h4>
                  <ul className="text-xs text-slate-400 space-y-2">
                    <li>• Tier 1 Regional Banks</li>
                    <li>• Custodial Services</li>
                    <li>• Escrow Management</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Pillars */}
      <section className="py-32 bg-white/[0.01] border-y border-white/10">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-24">
            <h2 className="text-[10px] tracking-[0.4em] uppercase text-amber-500 font-bold mb-4">Compliance Pillars</h2>
            <h3 className="text-4xl font-serif italic">Operational Integrity</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: "AML / KYC Protocols",
                desc: "Rigorous Anti-Money Laundering and Know Your Customer procedures for all institutional partners, aligned with the Proceeds of Crime and Anti-Money Laundering Act.",
                icon: FileCheck
              },
              {
                title: "Risk Management",
                desc: "Bespoke risk assessment frameworks for every transaction, covering currency, liquidity, geopolitical, and asset-specific risk factors.",
                icon: AlertCircle
              },
              {
                title: "Data Protection",
                desc: "Full compliance with the Kenya Data Protection Act (2019) and GDPR principles, ensuring absolute confidentiality of institutional data and deal flow.",
                icon: Lock
              }
            ].map((pillar, i) => (
              <div key={i} className="space-y-6">
                <pillar.icon className="text-amber-500" size={32} />
                <h4 className="text-xl font-serif italic">{pillar.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fiduciary Duty Section */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-8">
          <div className="bg-slate-900 border border-white/10 p-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-16 opacity-5">
              <Globe size={300} />
            </div>
            <div className="max-w-3xl relative z-10">
              <h2 className="text-3xl font-serif italic mb-8">Our Fiduciary Philosophy</h2>
              <p className="text-slate-400 text-lg leading-relaxed mb-12 italic">
                "We act as the eyes and ears of our institutional clients in a market where 
                transparency is often at a premium. Our commitment is to unvarnished truth, 
                rigorous diligence, and the absolute protection of our clients' capital."
              </p>
              
              <div className="grid sm:grid-cols-2 gap-8">
                <div className="flex items-center gap-3 text-white font-medium">
                  <CheckCircle2 className="text-amber-500" size={18} />
                  <span>Conflict of Interest Disclosure</span>
                </div>
                <div className="flex items-center gap-3 text-white font-medium">
                  <CheckCircle2 className="text-amber-500" size={18} />
                  <span>Transparent Fee Structures</span>
                </div>
                <div className="flex items-center gap-3 text-white font-medium">
                  <CheckCircle2 className="text-amber-500" size={18} />
                  <span>Third-Party Valuation Oversight</span>
                </div>
                <div className="flex items-center gap-3 text-white font-medium">
                  <CheckCircle2 className="text-amber-500" size={18} />
                  <span>Strict Confidentiality (NDA)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Disclaimer */}
      <section className="py-24 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-[10px] text-slate-500 font-mono uppercase tracking-widest leading-relaxed">
            <p className="mb-4 font-bold text-slate-400">Institutional Disclaimer:</p>
            <p>
              Murivest Realty Group is not a licensed bank, deposit-taking institution, or investment fund manager. 
              Our advisory services are intended for professional, sophisticated, and institutional investors as defined 
              under the relevant securities laws. Real estate investments involve a high degree of risk, and 
              past performance is not indicative of future results. All engagements are subject to a formal 
              advisory mandate and rigorous KYC verification.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
