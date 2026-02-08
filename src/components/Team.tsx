'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Linkedin, ArrowUpRight, ChevronDown, ChevronUp } from 'lucide-react';

const team = [
  {
    id: 1,
    name: "Mark Muriithi",
    title: "Chief Executive Officer & Founder",
    image: "/CEO.Founder.jpg",
    credentials: ["MBA, University of Nairobi", "RICS Registered Valuer", "CMA Certified Investment Advisor", "20+ Years Experience"],
    bio: "Mark Muriithi brings over two decades of experience in commercial real estate investment and advisory. Prior to founding Murivest, he served as Managing Director at a leading East African property consultancy, where he executed over $500 million in transactions across the commercial, industrial, and retail sectors. His expertise spans asset valuation, investment structuring, and portfolio management for institutional clients.",
    expertise: ["Investment Strategy", "Portfolio Management", "Transaction Advisory", "Market Analysis"],
    linkedin: "https://linkedin.com/in/markmuriithi",
  },
  {
    id: 2,
    name: "Dr. Samuel Ochieng",
    title: "Chief Investment Officer",
    image: "/p2/profile-placeholder.jpg",
    credentials: ["PhD, Finance, London School of Economics", "CFA Charterholder", "KRA Tax Practitioner", "15+ Years Experience"],
    bio: "Dr. Ochieng leads investment strategy and due diligence for all Murivest mandates. His academic background in finance, combined with extensive experience in African capital markets, enables sophisticated structuring of cross-border investments. He previously served as Head of Research at a major Kenyan commercial bank, where he developed proprietary models for real estate valuation and risk assessment.",
    expertise: ["Investment Structuring", "Risk Analysis", "Due Diligence", "Capital Markets"],
    linkedin: "https://linkedin.com/in/samuelochieng",
  },
  {
    id: 3,
    name: "Michael Chang",
    title: "Head of Asset Management",
    image: "/p2/profile-placeholder.jpg",
    credentials: ["MSc, Real Estate, University of Reading", "RICS Member", "Certified Property Manager (CPM)", "12+ Years Experience"],
    bio: "Michael oversees Murivest's property management and asset optimization portfolio. His institutional approach to asset care ensures that investments maintain and enhance their value through proactive management. He has managed portfolios exceeding $200 million across office, retail, and industrial assets in Kenya and East Africa.",
    expertise: ["Asset Optimization", "Property Management", "Tenant Relations", "Financial Reporting"],
    linkedin: "https://linkedin.com/in/michaelchang",
  },
  {
    id: 4,
    name: "Grace Wahu",
    title: "Head of Investor Relations",
    image: "/p2/profile-placeholder.jpg",
    credentials: ["BSc, Finance, USIU Africa", "CMA Licensed Representative", "Certified Financial Planner", "10+ Years Experience"],
    bio: "Grace manages relationships with Murivest's international investor base, including family offices, sovereign funds, and institutional investors. Her role encompasses investor onboarding, reporting, and communication. She previously worked in wealth management at a leading Kenyan bank, serving UHNWI clients with complex investment requirements.",
    expertise: ["Investor Relations", "Client Servicing", "Wealth Management", "Compliance"],
    linkedin: "https://linkedin.com/in/gracewahu",
  },
  {
    id: 5,
    name: "Eng. Patricia Odhiambo",
    title: "Head of Development & Projects",
    image: "/p2/profile-placeholder.jpg",
    credentials: ["BSc, Civil Engineering, University of Nairobi", "Registered Engineer (ERB)", "Project Management Professional (PMP)", "18+ Years Experience"],
    bio: "Patricia leads Murivest's development projects and capital improvement initiatives. With experience spanning commercial developments, industrial facilities, and mixed-use projects, she ensures that construction and renovation projects meet institutional standards. Her project management expertise includes delivery of developments valued at over $150 million.",
    expertise: ["Project Management", "Construction Oversight", "Sustainability", "Cost Management"],
    linkedin: "https://linkedin.com/in/patriciaodhiambo",
  },
  {
    id: 6,
    name: "James Njoroge",
    title: "Head of Research & Market Intelligence",
    image: "/p2/profile-placeholder.jpg",
    credentials: ["MSc, Urban Planning, MIT", "Certified Research Analyst", "KPI Assessment Certified", "8+ Years Experience"],
    bio: "James directs Murivest's research initiatives, providing market intelligence that informs investment decisions. His analytical approach combines quantitative modeling with on-the-ground market insights. He previously served as a research analyst at an international property consultancy, covering East African markets.",
    expertise: ["Market Research", "Data Analysis", "Feasibility Studies", "Urban Planning"],
    linkedin: "https://linkedin.com/in/jamesnjoro",
  },
];

const Team = () => {
  const [expandedMember, setExpandedMember] = useState<number | null>(null);

  return (
    <section className="py-32 bg-slate-900 relative overflow-hidden">
      {/* Background ambiance */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-amber-600/3 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        {/* Section header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-8 bg-amber-500" />
            <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-amber-500">
              Leadership
            </span>
            <div className="h-px w-8 bg-amber-500" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-serif italic text-white mb-6">
            Meet the <span className="text-amber-200/80">Investment Authority</span>
          </h2>
          <p className="max-w-2xl mx-auto text-slate-400 font-light">
            A team of seasoned professionals with deep expertise in East African real estate and international investment advisory.
          </p>
        </motion.div>

        {/* Team grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, i) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              {/* Card */}
              <div className="bg-white/[0.02] border border-white/10 overflow-hidden transition-all duration-500 hover:border-amber-500/30">
                {/* Image */}
                <div className="aspect-[4/3] relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent z-10" />
                  <div 
                    className="w-full h-full bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-700"
                    style={{ backgroundImage: `url(${member.image})` }}
                  />
                  
                  {/* Name overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                    <h3 className="text-2xl font-serif italic text-white mb-1">{member.name}</h3>
                    <p className="text-xs uppercase tracking-[0.2em] text-amber-500">{member.title}</p>
                  </div>
                </div>

                {/* Credentials */}
                <div className="p-8">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {member.credentials.map((cred, j) => (
                      <span 
                        key={j}
                        className="px-3 py-1 bg-amber-500/5 border border-amber-500/20 text-amber-200/70 text-[10px] uppercase tracking-wider"
                      >
                        {cred}
                      </span>
                    ))}
                  </div>

                  {/* Expandable bio */}
                  <div className={`overflow-hidden transition-all duration-500 ${
                    expandedMember === member.id ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <p className="text-slate-400 font-light text-sm leading-relaxed mb-6">
                      {member.bio}
                    </p>
                    <div className="space-y-3 mb-6">
                      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-600">Core Expertise</p>
                      <div className="flex flex-wrap gap-2">
                        {member.expertise.map((exp, j) => (
                          <span 
                            key={j}
                            className="px-3 py-1 bg-white/[0.02] border border-white/10 text-slate-400 text-xs"
                          >
                            {exp}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center justify-between pt-6 border-t border-white/10">
                    <button
                      onClick={() => setExpandedMember(expandedMember === member.id ? null : member.id)}
                      className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-slate-500 hover:text-white transition-colors"
                    >
                      {expandedMember === member.id ? (
                        <>
                          <ChevronUp size={14} /> Less
                        </>
                      ) : (
                        <>
                          <ChevronDown size={14} /> More
                        </>
                      )}
                    </button>
                    
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-amber-500 hover:text-amber-400 transition-colors"
                    >
                      <Linkedin size={14} />
                      <span>Profile</span>
                      <ArrowUpRight size={12} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional team CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center gap-3 px-8 py-4 border border-white/10 bg-white/[0.02]">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
              25+ Professionals Across Advisory, Asset Management & Transactions
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
