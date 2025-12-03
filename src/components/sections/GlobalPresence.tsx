'use client';

import React from 'react';

import { MapPin, Users, Building, Award } from 'lucide-react';

const GlobalPresence = () => {
  const expansionPhases = [
    {
      phase: "Phase 1 (Now)",
      region: "Africa",
      cities: "Nairobi 🇰🇪, Kigali 🇷🇼, Lagos 🇳🇬, Johannesburg 🇿🇦",
      objective: "Build continental authority",
      strategy: "Publish Africa Yield Reports & co-investment notes",
      partners: "Local law firms, property valuers, pension funds",
      status: "Active",
      image: "https://images.pexels.com/photos/5490778/pexels-photo-5490778.jpeg?auto=compress&cs=tinysrgb&w=600",
      link: "/africa"
    },
    {
      phase: "Phase 2 (Year 2-3)",
      region: "Middle East",
      cities: "Dubai 🇦🇪, Riyadh 🇸🇦, Doha 🇶🇦",
      objective: "Tap Gulf investment inflows into Africa",
      strategy: "Murivest Capital Desk – Dubai",
      partners: "Family offices, private banks",
      status: "Planning",
      image: "https://images.pexels.com/photos/2462015/pexels-photo-2462015.jpeg?auto=compress&cs=tinysrgb&w=600",
      link: "/middle-east"
    },
    {
      phase: "Phase 3 (Year 3-5)",
      region: "Europe",
      cities: "London 🇬🇧, Monaco 🇲🇨, Zurich 🇨🇭",
      objective: "Partner with institutional wealth firms investing in Africa",
      strategy: '"Africa Yield Delegation" events',
      partners: "Private wealth managers, asset managers",
      status: "Planning",
      image: "https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg?auto=compress&cs=tinysrgb&w=600",
      link: "/europe"
    },
    {
      phase: "Phase 4 (Year 5-7)",
      region: "Asia Pacific",
      cities: "Singapore 🇸🇬, Hong Kong 🇭🇰, Tokyo 🇯🇵",
      objective: "Structure JV funds targeting African CRE",
      strategy: "Murivest Asia Fund",
      partners: "REITs, institutional investors",
      status: "Planning",
      image: "https://images.pexels.com/photos/3889855/pexels-photo-3889855.jpeg?auto=compress&cs=tinysrgb&w=600",
      link: "/asia-pacific"
    },
    {
      phase: "Phase 5 (Long-term)",
      region: "Americas",
      cities: "New York 🇺🇸, Toronto 🇨🇦, Caribbean",
      objective: "Capture diaspora & institutional mandates",
      strategy: "Murivest North America Office",
      partners: "PE funds, diaspora syndicates",
      status: "Planning",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&h=1080&fit=crop",
      link: "/americas"
    }
  ];

  const achievements = [
    {
      icon: Building,
      title: "Market Leadership",
      description: "Recognized as East Africa's premier luxury real estate investment firm"
    },
    {
      icon: Users,
      title: "Global Network",
      description: "Serving high-net-worth individuals across 47 countries"
    },
    {
      icon: Award,
      title: "Industry Recognition",
      description: "Winner of 'International Real Estate Investment Firm of the Year'"
    }
  ];

  return (
    <section className="py-24 bg-navy-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
            Murivest Global Expansion Vision
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto font-light leading-relaxed">
            Phase-based expansion framework: Start from Africa, build credibility through institutional-grade assets, and connect with foreign capital hubs in the Middle East, Europe, and Asia Pacific.
          </p>
        </div>

        {/* Expansion Phases */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-20">
          {expansionPhases.map((phase, index) => (
            <div
              key={index}
              className="bg-navy-900 rounded-2xl overflow-hidden hover:bg-navy-800 transition-colors cursor-pointer"
              onClick={() => window.location.href = phase.link}
            >
              <div className="relative h-40">
                <img
                  src={phase.image}
                  alt={phase.region}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-navy-950/60" />
                <div className="absolute top-4 left-4">
                  <div className="text-gold-400 text-sm font-medium">{phase.phase}</div>
                </div>
                <div className="absolute bottom-4 left-4">
                  <div className="flex items-center text-white">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span className="font-medium">{phase.region}</span>
                  </div>
                  <div className="text-slate-300 text-sm mt-1">{phase.cities}</div>
                </div>
                <div className="absolute top-4 right-4">
                  <span className={`px-2 py-1 text-xs font-medium rounded ${
                    phase.status === 'Active'
                      ? 'bg-emerald-500 text-white'
                      : 'bg-slate-600 text-slate-300'
                  }`}>
                    {phase.status}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-white font-medium mb-2">{phase.objective}</h3>
                <div className="text-slate-400 text-sm mb-3">{phase.strategy}</div>
                <div className="space-y-2">
                  <div>
                    <span className="text-slate-300 text-sm">Partners:</span>
                    <div className="text-slate-400 text-sm">{phase.partners}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Priority Global Gateways */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center bg-navy-900 p-6 rounded-2xl">
            <div className="text-3xl mb-3">🇰🇪</div>
            <h4 className="text-white font-medium mb-2">Nairobi</h4>
            <p className="text-slate-400 text-sm">Regional HQ, stability, strong CRE demand</p>
          </div>

          <div className="text-center bg-navy-900 p-6 rounded-2xl">
            <div className="text-3xl mb-3">🇦🇪</div>
            <h4 className="text-white font-medium mb-2">Dubai</h4>
            <p className="text-slate-400 text-sm">Gulf private wealth + Africa investment flows</p>
          </div>

          <div className="text-center bg-navy-900 p-6 rounded-2xl">
            <div className="text-3xl mb-3">🇬🇧</div>
            <h4 className="text-white font-medium mb-2">London</h4>
            <p className="text-slate-400 text-sm">Global investors, old-money networks</p>
          </div>

          <div className="text-center bg-navy-900 p-6 rounded-2xl">
            <div className="text-3xl mb-3">🇸🇬</div>
            <h4 className="text-white font-medium mb-2">Singapore</h4>
            <p className="text-slate-400 text-sm">Asia-Africa trade & institutional funds</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalPresence;
