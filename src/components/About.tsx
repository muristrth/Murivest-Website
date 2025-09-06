'use client';

import React from 'react';
import { Target, Eye, Award, Users, Briefcase, Home, Shield, Crown, Globe, TrendingUp, Building2, Landmark } from 'lucide-react';

const About = () => {
  const institutionalValues = [
    {
      icon: Crown,
      title: "Heritage & Legacy",
      description: "Built on centuries-old investment principles, creating generational wealth through time-tested strategies and unwavering commitment to excellence."
    },
    {
      icon: Shield,
      title: "Fiduciary Excellence", 
      description: "Operating under the highest institutional standards with complete transparency, regulatory compliance, and unwavering protection of client interests."
    },
    {
      icon: Landmark,
      title: "Institutional Grade",
      description: "Exclusively curated portfolio of trophy assets and prime commercial properties, vetted through rigorous institutional due diligence processes."
    },
    {
      icon: Globe,
      title: "Global Perspective",
      description: "International expertise with deep local intelligence, serving sophisticated investors from major financial centers worldwide."
    },
    {
      icon: TrendingUp,
      title: "Performance Driven",
      description: "Consistent track record of superior risk-adjusted returns, outperforming traditional investment vehicles through strategic market positioning."
    }
  ];

  return (
    <section id="about" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Authoritative Header */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center mb-6">
            <Building2 className="h-6 w-6 text-amber-500 mr-3" />
            <span className="text-amber-500 font-serif text-sm tracking-widest uppercase">
              Murivest Realty Group • Established 2018 • Trusted Worldwide
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-light text-white mb-6 leading-tight">
            About Murivest Realty Group:
            <span className="text-amber-400 block font-medium">East Africa's Investment Authority</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto font-serif leading-relaxed">
            Murivest Realty Group stands as Kenya's premier exclusive investment house, serving discerning 
            international clients through institutional-grade real estate opportunities in East Africa's most coveted markets.
          </p>
        </div>

        {/* Credibility & Social Proof */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          <div>
            <h3 className="text-2xl font-serif font-light text-white mb-8">
              The Murivest Realty Group Legacy
            </h3>
            <div className="space-y-6">
              <p className="text-gray-300 leading-relaxed font-serif">
                Founded by former investment bankers with combined experience of over <span className="text-amber-400 font-medium">40 years</span> 
                in international markets, Murivest Realty Group represents the convergence of traditional wealth management 
                principles with emerging market opportunities in Kenya's dynamic real estate sector.
              </p>
              <p className="text-gray-300 leading-relaxed font-serif">
                Our exclusive Murivest Realty Group clientele includes family offices, sovereign wealth funds, and ultra-high-net-worth individuals 
                from <span className="text-amber-400 font-medium">45+ countries</span> who have entrusted Murivest Realty Group with over 
                <span className="text-amber-400 font-medium"> $50 million</span> in premium Kenyan assets under management.
              </p>
              <p className="text-gray-300 leading-relaxed font-serif">
                At Murivest Realty Group, we don't simply sell property—we architect generational wealth through strategic positioning 
                in Kenya and East Africa's most promising real estate markets, delivering unparalleled investment opportunities.
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="mt-8 pt-8 border-t border-gray-700">
              <h4 className="text-lg font-serif text-amber-400 mb-4">Murivest Realty Group Performance Metrics</h4>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-2xl font-serif text-amber-400 mb-1">$50M+</div>
                  <div className="text-gray-400 font-serif text-sm uppercase tracking-wide">Assets Under Management</div>
                </div>
                <div>
                  <div className="text-2xl font-serif text-amber-400 mb-1">22%</div>
                  <div className="text-gray-400 font-serif text-sm uppercase tracking-wide">Average Annual IRR</div>
                </div>
                <div>
                  <div className="text-2xl font-serif text-amber-400 mb-1">45+</div>
                  <div className="text-gray-400 font-serif text-sm uppercase tracking-wide">Countries Served</div>
                </div>
                <div>
                  <div className="text-2xl font-serif text-amber-400 mb-1">100%</div>
                  <div className="text-gray-400 font-serif text-sm uppercase tracking-wide">Client Retention Rate</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8">
            <img 
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop" 
              alt="Murivest Realty Group - Nairobi Financial District Investment Properties" 
              className="w-full h-64 object-cover mb-6"
            />
            <div className="text-center">
              <p className="text-gray-300 font-serif italic text-lg mb-4">
                "Murivest Realty Group: Africa's most sophisticated real estate investment platform"
              </p>
              <div className="flex items-center justify-center text-amber-400">
                <Award className="h-4 w-4 mr-2" />
                <span className="font-serif text-sm">Financial Times Recognition, 2023</span>
              </div>
            </div>
          </div>
        </div>

        {/* Vision & Mission - Corporate Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8">
            <div className="flex items-center mb-6">
              <Eye className="h-6 w-6 text-amber-400 mr-4" />
              <h3 className="text-xl font-serif font-light text-white">Murivest Realty Group Vision</h3>
            </div>
            <p className="text-gray-300 leading-relaxed font-serif">
              To establish Murivest Realty Group as East Africa's premier destination for institutional-grade real estate investment, 
              creating unprecedented opportunities for generational wealth creation while setting the gold standard 
              for fiduciary excellence and market intelligence across Kenya's luxury property sector.
            </p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8">
            <div className="flex items-center mb-6">
              <Target className="h-6 w-6 text-amber-400 mr-4" />
              <h3 className="text-xl font-serif font-light text-white">Murivest Realty Group Mission</h3>
            </div>
            <p className="text-gray-300 leading-relaxed font-serif">
              Through Murivest Realty Group's expertise, we deliver superior risk-adjusted returns via exclusive access to Kenya's most coveted real estate 
              opportunities, supported by world-class advisory services and institutional-grade asset management 
              that preserves and multiplies our clients' generational wealth.
            </p>
          </div>
        </div>

        {/* Why International Investors Choose Us */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-serif font-light text-white mb-4">
              Why International Investors Choose Murivest Realty Group
            </h3>
            <p className="text-gray-400 font-serif">
              The institutional advantage that distinguishes Murivest Realty Group in Kenya's emerging markets
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {institutionalValues.map((value, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 hover:bg-white/10 transition-all duration-300 group">
                <div className="flex items-center mb-4">
                  <value.icon className="h-6 w-6 text-amber-400 mr-3 group-hover:scale-110 transition-transform" />
                  <h4 className="text-lg font-serif font-medium text-white">{value.title}</h4>
                </div>
                <p className="text-gray-300 leading-relaxed font-serif text-sm group-hover:text-gray-200 transition-colors">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Client Benefits Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          <div className="text-center p-6 bg-gradient-to-b from-amber-900/10 to-transparent border border-amber-500/20">
            <div className="w-16 h-16 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="h-8 w-8 text-amber-400" />
            </div>
            <h4 className="text-lg font-serif text-white mb-3">Risk Mitigation</h4>
            <p className="text-gray-300 font-serif text-sm">
              Murivest Realty Group's comprehensive due diligence and local market expertise minimize investment risks 
              while maximizing potential returns in Kenya's dynamic property market.
            </p>
          </div>
          
          <div className="text-center p-6 bg-gradient-to-b from-amber-900/10 to-transparent border border-amber-500/20">
            <div className="w-16 h-16 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-amber-400" />
            </div>
            <h4 className="text-lg font-serif text-white mb-3">Dedicated Support</h4>
            <p className="text-gray-300 font-serif text-sm">
              Each Murivest Realty Group client receives personalized attention from our team of investment specialists, 
              ensuring seamless property acquisition and ongoing portfolio management.
            </p>
          </div>
          
          <div className="text-center p-6 bg-gradient-to-b from-amber-900/10 to-transparent border border-amber-500/20">
            <div className="w-16 h-16 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="h-8 w-8 text-amber-400" />
            </div>
            <h4 className="text-lg font-serif text-white mb-3">Market Intelligence</h4>
            <p className="text-gray-300 font-serif text-sm">
              Access exclusive Murivest Realty Group market research and investment insights, 
              keeping clients ahead of Kenya's rapidly evolving real estate landscape.
            </p>
          </div>
        </div>

        {/* Market Authority */}
        <div className="bg-gradient-to-r from-amber-900/20 to-amber-800/20 border border-amber-500/20 p-12 text-center">
          <h3 className="text-2xl font-serif font-light text-white mb-4">
            Market Authority Since 2018
          </h3>
          <p className="text-gray-300 font-serif leading-relaxed max-w-3xl mx-auto mb-8">
            While others chase trends, we create them. Our deep market intelligence and institutional relationships 
            have consistently positioned our clients ahead of major market movements, securing prime assets before 
            they reach the public market.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-serif text-amber-400 mb-2">First</div>
              <div className="text-gray-400 font-serif text-sm uppercase tracking-wide">
                To identify Nairobi's premium commercial districts
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-serif text-amber-400 mb-2">Exclusive</div>
              <div className="text-gray-400 font-serif text-sm uppercase tracking-wide">
                Access to off-market trophy properties
              </div>
            </div>
            <div className="text-3xl font-serif text-amber-400 mb-2">Proven</div>
              <div className="text-gray-400 font-serif text-sm uppercase tracking-wide">
                Track record of outperforming market benchmarks
              </div>
            </div>
          </div>
        </div>
    </section>
  );
};

export default About;