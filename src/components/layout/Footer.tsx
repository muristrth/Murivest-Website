'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, Globe, Award, Shield, TrendingUp, Users, ArrowUp, ExternalLink } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-b from-slate-900 to-slate-900 text-stone-100 overflow-hidden" style={{ fontFamily: 'Playfair Display, serif' }}>
      {/* Elegant Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=1926&q=80')`
          }}
        />
      </div>
      
      {/* Subtle Accent Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-32 left-20 w-1 h-32 bg-gradient-to-b from-amber-600/20 to-transparent"></div>
        <div className="absolute top-20 right-32 w-px h-48 bg-gradient-to-b from-amber-600/10 to-transparent"></div>
        <div className="absolute bottom-32 left-1/3 w-24 h-px bg-gradient-to-r from-transparent via-amber-600/20 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          
          {/* Company Heritage Section */}
          <div className="lg:col-span-4">
            <div className="mb-8">
              <Image 
                src="/image.png" 
                alt="Murivest Realty Group" 
                width={200} // Add appropriate width
                height={64} // Add appropriate height
                className="h-16 w-auto mb-6 opacity-90"
              />
              <div className="w-16 h-px bg-amber-600 mb-6"></div>
            </div>
            
            <h3 className="text-2xl font-light text-stone-100 mb-4">
              Murivest Realty Group
            </h3>
            <p className="text-stone-400 font-light leading-relaxed mb-6 text-sm">
              Established 2025. Four generations of distinguished service to international families, 
              sovereign wealth funds, and institutional investors seeking superior returns through 
              Kenya's premier commercial real estate opportunities.
            </p>
            
            {/* Credentials */}
            <div className="space-y-3 mb-8">
              <div className="flex items-center text-stone-300 text-sm">
                <Award className="h-4 w-4 mr-3 text-amber-600" />
                <span>Capital Markets Authority Licensed</span>
              </div>
              <div className="flex items-center text-stone-300 text-sm">
                <Shield className="h-4 w-4 mr-3 text-amber-600" />
                <span>International Arbitration Member</span>
              </div>
              <div className="flex items-center text-stone-300 text-sm">
                <TrendingUp className="h-4 w-4 mr-3 text-amber-600" />
                <span>$50M+ Assets Under Management</span>
              </div>
              <div className="flex items-center text-stone-300 text-sm">
                <Users className="h-4 w-4 mr-3 text-amber-600" />
                <span>50+ Distinguished Clients Worldwide</span>
              </div>
            </div>

            {/* Global Offices */}
            <div>
              <h4 className="text-lg font-medium text-stone-200 mb-4">Global Presence</h4>
              <div className="space-y-2 text-sm text-stone-400">
                <div>🇰🇪 Nairobi • Westlands Business District</div>
                <div>🇬🇧 London • Mayfair</div>
                <div>🇨🇭 Geneva • Private Banking Quarter</div>
                <div>🇭🇰 Hong Kong • Central Financial District</div>
              </div>
            </div>
          </div>

          {/* Investment Services */}
          <div className="lg:col-span-2">
            <h4 className="text-xl font-light text-amber-400 mb-8 border-b border-amber-600/30 pb-3">
              Investment Services
            </h4>
            <ul className="space-y-4">
              {[
                { to: "/properties", label: "Commercial Real Estate" },
                { to: "/properties", label: "Office Developments" },
                { to: "/properties", label: "Retail & Mixed-Use" },
                { to: "/properties", label: "Industrial Properties" },
                { to: "/properties", label: "Strategic Land Banking" },
                { to: "/properties", label: "REIT Opportunities" },
                { to: "/properties", label: "Private Equity Real Estate" },
                { to: "/properties", label: "Wealth Management" }
              ].map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.to} 
                    className="text-stone-300 hover:text-amber-400 transition-all duration-300 text-sm font-light group flex items-center"
                  >
                    <span className="mr-2 w-1 h-1 bg-amber-600 rounded-full opacity-60 group-hover:opacity-100 transition-opacity"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Market Intelligence */}
          <div className="lg:col-span-2">
            <h4 className="text-xl font-light text-amber-400 mb-8 border-b border-amber-600/30 pb-3">
              Market Intelligence
            </h4>
            <ul className="space-y-4">
              {[
                { to: "/market-reports", label: "Quarterly Market Reports" },
                { to: "/economic-outlook", label: "Kenya Economic Outlook" },
                { to: "/investment-analysis", label: "Investment Analysis" },
                { to: "/regulatory-updates", label: "Regulatory Updates" },
                { to: "/currency-insights", label: "Currency Risk Analysis" },
                { to: "/sector-performance", label: "Sector Performance" },
                { to: "/due-diligence", label: "Due Diligence Reports" },
                { to: "/exit-strategies", label: "Exit Strategy Planning" }
              ].map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.to} 
                    className="text-stone-300 hover:text-amber-400 transition-all duration-300 text-sm font-light group flex items-center"
                  >
                    <span className="mr-2 w-1 h-1 bg-amber-600 rounded-full opacity-60 group-hover:opacity-100 transition-opacity"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Client Resources */}
          <div className="lg:col-span-2">
            <h4 className="text-xl font-light text-amber-400 mb-8 border-b border-amber-600/30 pb-3">
              Client Resources
            </h4>
            <ul className="space-y-4">
              {[
                { to: "/investor-portal", label: "Private Investor Portal" },
                { to: "/tax-optimization", label: "Tax Optimization Guide" },
                { to: "/legal-framework", label: "Legal Framework" },
                { to: "/immigration-services", label: "Investment Immigration" },
                { to: "/banking-partners", label: "Banking Partners" },
                { to: "/property-management", label: "Property Management" },
                { to: "/concierge-services", label: "Concierge Services" },
                { to: "/family-office", label: "Family Office Services" }
              ].map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.to} 
                    className="text-stone-300 hover:text-amber-400 transition-all duration-300 text-sm font-light group flex items-center"
                  >
                    <span className="mr-2 w-1 h-1 bg-amber-600 rounded-full opacity-60 group-hover:opacity-100 transition-opacity"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Connect */}
          <div className="lg:col-span-2">
            <h4 className="text-xl font-light text-amber-400 mb-8 border-b border-amber-600/30 pb-3">
              Private Contact
            </h4>
            
            <div className="space-y-6 mb-8">
              <div className="group">
                <div className="flex items-start">
                  <Phone className="h-4 w-4 mt-1 mr-3 text-amber-600" />
                  <div>
                    <div className="text-stone-300 text-sm font-light">Private Line</div>
                    <a href="tel:+254115277610" className="text-stone-200 text-sm hover:text-amber-400 transition-colors">
                      +254 115 277 610
                    </a>
                  </div>
                </div>
              </div>

              <div className="group">
                <div className="flex items-start">
                  <Mail className="h-4 w-4 mt-1 mr-3 text-amber-600" />
                  <div>
                    <div className="text-stone-300 text-sm font-light">Investment Desk</div>
                    <a href="mailto:investments@murivest.co.ke" className="text-stone-200 text-sm hover:text-amber-400 transition-colors">
                      investments@murivest.co.ke
                    </a>
                  </div>
                </div>
              </div>

              <div className="group">
                <div className="flex items-start">
                  <MapPin className="h-4 w-4 mt-1 mr-3 text-amber-600" />
                  <div>
                    <div className="text-stone-300 text-sm font-light">Nairobi Office</div>
                    <div className="text-stone-200 text-sm">
                      Murivest Tower<br />
                      Westlands Business District<br />
                      Nairobi, Kenya
                    </div>
                  </div>
                </div>
              </div>

              <div className="group">
                <div className="flex items-start">
                  <Globe className="h-4 w-4 mt-1 mr-3 text-amber-600" />
                  <div>
                    <div className="text-stone-300 text-sm font-light">Investment Hours</div>
                    <div className="text-stone-200 text-sm">
                      Mon-Fri: 8:00 - 18:00 EAT<br />
                      24/7 Client Support
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-stone-800/50 p-4 border border-amber-600/20">
              <div className="text-sm text-stone-300 mb-3">Minimum Investment: $1M+</div>
              <Link 
                href="/consultation" 
                className="inline-flex items-center text-amber-400 text-sm font-medium hover:text-amber-300 transition-colors"
              >
                Schedule Private Consultation
                <ExternalLink className="ml-2 h-3 w-3" />
              </Link>
            </div>
          </div>
        </div>

        {/* SEO Backlink Section */}
        <div className="border-t border-stone-700 pt-12 mb-12">
          <div className="text-center mb-8">
            <h4 className="text-lg font-light text-stone-300 mb-6">Strategic Partners & Market Intelligence</h4>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: "Kenya Association of Real Estate Agents", url: "https://www.karea.co.ke", category: "Industry" },
              { name: "Capital Markets Authority Kenya", url: "https://www.cma.or.ke", category: "Regulatory" },
              { name: "Nairobi Securities Exchange", url: "https://www.nse.co.ke", category: "Markets" },
              { name: "Central Bank of Kenya", url: "https://www.centralbank.go.ke", category: "Banking" },
              { name: "Kenya National Bureau Statistics", url: "https://www.knbs.or.ke", category: "Data" },
              { name: "Kenya Investment Authority", url: "https://www.invest.go.ke", category: "Investment" },
              { name: "World Bank Kenya", url: "https://www.worldbank.org/en/country/kenya", category: "Development" },
              { name: "IMF Kenya Reports", url: "https://www.imf.org/en/Countries/KEN", category: "Economic" },
              { name: "Kenya Private Sector Alliance", url: "https://kepsa.or.ke", category: "Business" },
              { name: "East African Business Council", url: "https://www.eabc.info", category: "Regional" },
              { name: "Kenya Real Estate Exchange", url: "https://www.kenyanrealestate.com", category: "Property" },
              { name: "African Development Bank", url: "https://www.afdb.org", category: "Finance" }
            ].map((partner, index) => (
              <div key={index} className="text-center">
                <a 
                  href={partner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-stone-400 hover:text-amber-400 transition-colors text-xs font-light"
                >
                  <div className="text-stone-500 text-xs mb-1">{partner.category}</div>
                  {partner.name}
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Additional SEO Links */}
        <div className="border-t border-stone-700 pt-8 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Kenya Investment Topics */}
            <div>
              <h5 className="text-sm font-medium text-stone-300 mb-4">Kenya Investment Opportunities</h5>
              <div className="space-y-2">
                {[
                  "Commercial Real Estate Nairobi",
                  "Kenya REIT Investment Guide",
                  "Westlands Property Investment",
                  "Karen Commercial Developments",
                  "Industrial Area Land Banking",
                  "Kilimani Mixed-Use Projects"
                ].map((topic, index) => (
                  <Link 
                    key={index}
                    href={`/${topic.toLowerCase().replace(/\s+/g, '-')}`}
                    className="block text-stone-400 hover:text-amber-400 transition-colors text-xs"
                  >
                    {topic}
                  </Link>
                ))}
              </div>
            </div>

            {/* International Investor Resources */}
            <div>
              <h5 className="text-sm font-medium text-stone-300 mb-4">International Investor Resources</h5>
              <div className="space-y-2">
                {[
                  "USD to KES Investment Calculator",
                  "European Investor Tax Guide",
                  "UK Pension Fund Opportunities",
                  "Swiss Family Office Services",
                  "Canadian RRSP Kenya Investments",
                  "Australian Superannuation Guide"
                ].map((resource, index) => (
                  <Link 
                    key={index}
                    href={`/${resource.toLowerCase().replace(/\s+/g, '-')}`}
                    className="block text-stone-400 hover:text-amber-400 transition-colors text-xs"
                  >
                    {resource}
                  </Link>
                ))}
              </div>
            </div>

            {/* Market Analysis */}
            <div>
              <h5 className="text-sm font-medium text-stone-300 mb-4">Market Analysis & Reports</h5>
              <div className="space-y-2">
                {[
                  "Kenya GDP Growth Impact Analysis",
                  "East Africa Commercial Property Trends",
                  "Nairobi Office Space Demand Study",
                  "Currency Risk Mitigation Strategies",
                  "Infrastructure Development ROI",
                  "Sovereign Credit Rating Updates"
                ].map((analysis, index) => (
                  <Link 
                    key={index}
                    href={`/${analysis.toLowerCase().replace(/\s+/g, '-')}`}
                    className="block text-stone-400 hover:text-amber-400 transition-colors text-xs"
                  >
                    {analysis}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Scroll to Top */}
        <div className="flex justify-center mb-8">
          <button
            onClick={scrollToTop}
            className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 p-3 rounded-full transition-all duration-300 hover:scale-110 group"
          >
            <ArrowUp className="h-4 w-4 text-white group-hover:scale-110 transition-transform" />
          </button>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-stone-700 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="text-stone-400 text-sm font-light">
              © 2025 Murivest Realty Group Ltd. All rights reserved. Regulated by the Capital Markets Authority of Kenya.
            </div>
            <div className="flex flex-wrap justify-center lg:justify-end space-x-8 text-xs">
               {[
                 { label: "Privacy Policy", href: "/privacy-policy" },
                 { label: "Investment Terms", href: "/investment-terms" },
                 { label: "Risk Disclosures", href: "/risk-disclosures" },
                 { label: "Regulatory Compliance", href: "/regulatory-compliance" },
                 { label: "Anti-Money Laundering", href: "/anti-money-laundering" },
                 { label: "Data Protection", href: "/data-protection" },
                 { label: "Sitemap", href: "/sitemap" }
               ].map((item, index) => (
                 <Link
                   key={index}
                   href={item.href}
                   className="text-stone-400 hover:text-amber-400 transition-colors"
                 >
                   {item.label}
                 </Link>
               ))}
             </div>
          </div>
          
          <div className="mt-6 pt-6 border-t border-stone-800 text-center">
            <p className="text-stone-500 text-xs font-light leading-relaxed max-w-4xl mx-auto">
              Murivest Realty Group is a licensed investment management firm specializing in East African commercial real estate. 
              Past performance does not guarantee future results. All investments carry risk of loss. 
              International investors should consult with qualified tax and legal advisors regarding their specific situations.
            </p>
          </div>
        </div>
      </div>
      {/* Elegant Border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-600/50 to-transparent"></div>
    </footer>
  );
};

export default Footer;