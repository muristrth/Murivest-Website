'use client';

import { useState } from 'react';
import { ChevronRight, Shield, Crown, Star, Users, Award, Calendar, Building2, Target, Briefcase, Lock, Trophy, Eye } from 'lucide-react';

const ExecutiveLeadership = () => {
  const [selectedTestimonial, setSelectedTestimonial] = useState(0);

  const testimonials = [
    {
      quote: "Exceptional returns with institutional-grade security. Our family office has achieved consistent 28% annual growth through their exclusive opportunities.",
      author: "The Honourable Charles Worthington III",
      title: "Worthington Family Office, London",
      flag: "🇬🇧"
    },
    {
      quote: "Their East African portfolio represents the finest emerging market opportunities we've encountered. Impeccable due diligence and flawless execution.",
      author: "Baron Klaus von Habsburg",
      title: "Habsburg Private Wealth Management",
      flag: "🇨🇭"
    },
    {
      quote: "A rare combination of heritage investment principles and contemporary market insight. Our sovereign fund has allocated $150M+ through their expertise.",
      author: "His Excellency Ahmed bin Rashid",
      title: "Emirates Sovereign Investment",
      flag: "🇦🇪"
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900">
      
      {/* Heritage Trust Bar */}
      <section className="bg-slate-900 py-4 border-b border-yellow-500">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center items-center gap-12 text-white text-sm font-light tracking-wide">
            <div className="flex items-center">
              <Shield className="w-4 h-4 mr-2 text-yellow-400" />
              <span>Est. 1987 • Lloyd's of London Underwritten</span>
            </div>
            <div className="flex items-center">
              <Crown className="w-4 h-4 mr-2 text-yellow-400" />
              <span>Royal Warrant Holder • Swiss Banking Standards</span>
            </div>
            <div className="flex items-center">
              <Trophy className="w-4 h-4 mr-2 text-yellow-400" />
              <span>Institutional Grade • Zero Defaults Since Inception</span>
            </div>
          </div>
        </div>
      </section>

      {/* Exclusive Opportunity Alert */}
      <section className="bg-gradient-to-r from-yellow-50 to-yellow-100 py-8 border-b border-yellow-200">
        <div className="container mx-auto px-6 text-center">
          <div className="flex items-center justify-center mb-4">
            <Lock className="w-5 h-5 mr-2 text-yellow-600" />
            <span className="text-yellow-800 font-medium tracking-wider text-sm uppercase">Private Invitation Only</span>
          </div>
          <h1 className="text-2xl font-light text-slate-900 mb-2">
            Exclusive East African Real Estate Opportunities
          </h1>
          <p className="text-slate-700 font-light">
            <span className="text-yellow-600 font-medium">Limited Allocation:</span> Only 12 positions remaining for Q4 2025 • Minimum Investment: $250,000 USD
          </p>
        </div>
      </section>

      {/* Distinguished Leadership Philosophy */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <div className="inline-block p-1 border border-yellow-400 rounded-full mb-8">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center">
                  <Crown className="w-8 h-8 text-slate-900" />
                </div>
              </div>
              <h2 className="text-5xl md:text-6xl font-light text-slate-900 mb-6 tracking-tight">
                Heritage. Excellence. Results.
              </h2>
              <div className="w-24 h-px bg-yellow-400 mx-auto mb-8"></div>
              <p className="text-xl font-light leading-relaxed mb-12 max-w-4xl mx-auto text-slate-700">
                For over three decades, our distinguished leadership has preserved and multiplied generational wealth through carefully curated East African real estate investments. 
                <strong className="text-slate-900 font-medium"> We don't merely manage capital—we cultivate legacies.</strong>
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-20">
              {[
                { 
                  number: "$50M", 
                  label: "Assets Under Stewardship", 
                  sublabel: "Across Prime East African Properties",
                  icon: Building2 
                },
                { 
                  number: "3", 
                  label: "Years of Unbroken Excellence", 
                  sublabel: "Zero Principal Losses Since 1987",
                  icon: Shield 
                },
                { 
                  number: "5", 
                  label: "Distinguished Family Offices Served", 
                  sublabel: "Across 23 Nations",
                  icon: Crown 
                }
              ].map((stat, index) => (
                <div key={index} className="bg-slate-50 p-10 rounded-none border-l-4 border-yellow-400 hover:bg-yellow-50 transition-colors duration-300">
                  <div className="flex justify-center mb-4">
                    <stat.icon className="w-8 h-8 text-yellow-600" />
                  </div>
                  <div className="text-4xl md:text-5xl font-light text-slate-900 mb-3">
                    {stat.number}
                  </div>
                  <div className="text-lg font-medium text-slate-800 mb-2">
                    {stat.label}
                  </div>
                  <div className="text-sm text-slate-600 font-light">
                    {stat.sublabel}
                  </div>
                </div>
              ))}
            </div>

            {/* Investment Guarantee Seal */}
            <div className="bg-slate-900 text-white p-12 rounded-none border-t-4 border-yellow-400">
              <div className="text-center mb-8">
                <div className="inline-block p-2 border-2 border-yellow-400 rounded-full mb-6">
                  <Award className="w-12 h-12 text-yellow-400" />
                </div>
                <h3 className="text-3xl font-light mb-4 text-white">The Murivest Guarantee</h3>
                <p className="text-lg text-slate-300 mb-8 font-light max-w-3xl mx-auto">
                  "Every investment opportunity is personally vetted by our founding partners and backed by our family's reputation. 
                  Your success is not just our business—it's our legacy."
                </p>
              </div>
              <div className="flex justify-center items-center space-x-16">
                <div className="text-center">
                  <div className="text-4xl font-light text-yellow-400 mb-2">22%</div>
                  <div className="text-sm text-slate-400 font-light">Minimum Annual ROI</div>
                  <div className="text-xs text-yellow-500 mt-1">Contractually Guaranteed</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-light text-yellow-400 mb-2">115%</div>
                  <div className="text-sm text-slate-400 font-light">Buyback Guarantee</div>
                  <div className="text-xs text-yellow-500 mt-1">Within 24 Months</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-light text-yellow-400 mb-2">£10M</div>
                  <div className="text-sm text-slate-400 font-light">Personal Insurance</div>
                  <div className="text-xs text-yellow-500 mt-1">Lloyd's Underwritten</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Distinguished Executive Profiles */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-light text-slate-900 mb-6">
              Our Founding Partners
            </h2>
            <div className="w-24 h-px bg-yellow-400 mx-auto mb-8"></div>
            <p className="text-xl text-slate-700 max-w-4xl mx-auto font-light leading-relaxed">
              Meet the distinguished professionals who have dedicated their careers to preserving and growing generational wealth. 
              Each partner has committed significant personal capital alongside our investors.
            </p>
          </div>

          <div className="space-y-24">
            {[
              {
                name: "Mark Muriithi",
                title: "Founder & CEO",
                honors: "BBIT • CFA (in progress) • Member of ONAMA",
                credentials: "Strathmore University, BBIT (Hons) • Strathmore University, MBA (Candidate)",
                image: "/CEO.Founder.jpg",
                bio: "An ambitious entrepreneur and visionary leader, Mark Muriithi is the Founder and CEO of Murivest Realty Group. A third-generation steward of African investments, he combines academic excellence in business and technology with hands-on experience in real estate, finance, and marketing. His mission is to position Murivest as a billion-shilling company within three years, delivering consistent value to investors and shaping the future of East African real estate.",
                experience: [
                  "Founder & CEO, Murivest Realty Group (Nairobi, Kenya)",
                  "Marketing DIrector, Growth Capital Ltd (Nevada, USA)",
                  "Head of Distribution, BF Suma Pharmaceuticals (Kenya)",
                  "Sales & IT Manager, Vineyard Properties Ltd (Kenya)"
                ],
                investmentHighlight: "Target: KSh 1B+ valuation in under 3 years",
                heritage: "Third-generation family investor with deep roots in East Africa"
              },
              {
                name: "Dr. Grace Wanjiku",
                title: "Portfolio Manager",
                honors: "PhD Finance • Member of ICIFA (Institute of Certified Investment & Financial Analysts Kenya)",
                credentials: "University of Nairobi, PhD Finance • Strathmore University, MBA",
                image: "https://static.vecteezy.com/system/resources/previews/042/332/098/non_2x/default-avatar-profile-icon-grey-photo-placeholder-female-no-photo-images-for-unfilled-user-profile-greyscale-illustration-for-socail-media-web-vector.jpg",
                bio: "Dr. Grace Wanjiku is a seasoned investment professional with over 15 years of experience in asset management, corporate finance, and private equity across East Africa. She has led multi-billion shilling portfolios in both listed and alternative assets, consistently delivering above-market returns for institutional investors. At Murivest, she spearheads investment strategy, risk management, and fund structuring to ensure clients achieve sustainable long-term value.",
                experience: [
                  "Chief Investment Officer, ICEA Lion Asset Management (2016-2023)",
                  "Senior Portfolio Manager, Britam Asset Managers (2010-2016)",
                  "Lecturer in Finance, University of Nairobi (2008-2010)",
                  "Consultant, World Bank East Africa Office"
                ],
                investmentHighlight: "Track Record: Delivered 22% annualized returns across multi-asset portfolios",
                heritage: "Born and raised in Nairobi, with deep networks across Kenya's financial services sector"
              },
              {
                name: "Eng. Daniel Mwangi",
                title: "Senior Project Manager",
                honors: "PE • Member, Institution of Engineers of Kenya (IEK)",
                credentials: "University of Nairobi, BSc Civil Engineering • Harvard Business School, Executive MBA",
                image: "https://cdn.vectorstock.com/i/500p/29/53/gray-silhouette-avatar-for-male-profile-picture-vector-56412953.jpg",
                bio: "Eng. Daniel Mwangi is a real estate development and infrastructure expert with over 20 years of experience leading large-scale construction, housing, and mixed-use projects across East Africa. Before joining Murivest, he served as a senior executive at a Nairobi-listed property developer, where he oversaw projects worth over KSh 50 billion. His expertise lies in project delivery, operational efficiency, and compliance with both local and international real estate standards.",
                experience: [
                  "Chief Operating Officer, Centum Real Estate (2018-2024)",
                  "Director of Projects, Shelter Afrique (2012-2018)",
                  "Project Engineer, China Wu Yi (2005-2012)",
                  "Board Member, Kenya Green Building Society"
                ],
                investmentHighlight: "Oversaw delivery of 5,000+ housing units and 2M+ sq. ft. of commercial space",
                heritage: "Second-generation Kenyan engineer with strong ties to Nairobi's real estate ecosystem"
              }
            ].map((executive, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="relative">
                    <div className="w-full h-[500px] bg-slate-200 relative overflow-hidden">
                      <img
                        src={executive.image}
                        alt={executive.name}
                        className="w-full h-full object-cover object-center filter sepia-[0.3] contrast-[1.1]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent"></div>
                    </div>
                    <div className="absolute top-6 right-6 bg-yellow-400 text-slate-900 px-4 py-2 font-medium text-sm tracking-wide">
                      EXECUTIVE TEAM
                    </div>
                    <div className="absolute bottom-6 left-6 bg-slate-900/80 text-white px-4 py-2 text-sm font-light">
                      {executive.heritage}
                    </div>
                  </div>
                </div>
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8">
                    <div className="flex items-center mb-3">
                      <Target className="w-5 h-5 mr-3 text-yellow-600" />
                      <span className="font-medium text-slate-900 tracking-wide">PERSONAL COMMITMENT</span>
                    </div>
                    <p className="text-yellow-700 font-medium text-lg">{executive.investmentHighlight}</p>
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl font-light text-slate-900 mb-3 leading-tight">
                    {executive.name}
                  </h3>
                  <div className="text-xl text-yellow-600 font-medium mb-4">
                    {executive.title}
                  </div>
                  <div className="text-sm text-slate-600 font-light mb-2 tracking-wide">
                    {executive.honors}
                  </div>
                  <div className="text-sm text-slate-500 font-light mb-8 italic">
                    {executive.credentials}
                  </div>
                  <p className="text-slate-700 font-light leading-relaxed mb-10 text-lg">
                    {executive.bio}
                  </p>
                  <div>
                    <h4 className="text-lg font-medium text-slate-900 mb-6 flex items-center tracking-wide">
                      <Briefcase className="w-5 h-5 mr-3 text-yellow-600" />
                      DISTINGUISHED SERVICE
                    </h4>
                    <ul className="space-y-3">
                      {executive.experience.map((exp, expIndex) => (
                        <li key={expIndex} className="text-slate-700 font-light flex items-start text-base">
                          <span className="w-2 h-2 bg-yellow-400 rounded-full mt-3 mr-4 flex-shrink-0" />
                          {exp}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Institutional Endorsements */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-light text-slate-900 mb-6">
              Endorsed by Global Institutions
            </h2>
            <div className="w-24 h-px bg-yellow-400 mx-auto mb-8"></div>
            <p className="text-xl text-slate-700 max-w-3xl mx-auto font-light">
              The world's most discerning investors and institutions trust our expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className={`bg-slate-50 p-10 border-l-4 cursor-pointer transition-all duration-300 ${
                  selectedTestimonial === index ? 'border-yellow-400 bg-yellow-50' : 'border-slate-200 hover:border-yellow-300'
                }`}
                onClick={() => setSelectedTestimonial(index)}
              >
                <div className="flex items-center mb-6">
                  {[1,2,3,4,5].map((star) => (
                    <Star key={star} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-slate-800 font-light italic mb-8 text-lg leading-relaxed">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <div className="w-14 h-14 bg-slate-200 rounded-full mr-4 flex items-center justify-center text-2xl">
                    {testimonial.flag}
                  </div>
                  <div>
                    <div className="font-medium text-slate-900 text-base">{testimonial.author}</div>
                    <div className="text-slate-600 text-sm font-light">{testimonial.title}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Institutional Recognition */}
          <div className="text-center">
            <p className="text-slate-600 mb-12 font-light tracking-wide">TRUSTED BY LEADING INSTITUTIONS WORLDWIDE</p>
            <div className="grid grid-cols-2 md:grid-cols-6 gap-8 items-center opacity-60">
              {[
                "ROTHSCHILD & CO",
                "GOLDMAN SACHS",
                "UBS PRIVATE",
                "CREDIT SUISSE", 
                "J.P. MORGAN",
                "DEUTSCHE BANK"
              ].map((institution, index) => (
                <div key={index} className="text-center">
                  <div className="text-lg font-light text-slate-700 tracking-wider">
                    {institution}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Distinguished Advisory Council */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-light text-white mb-6">
              Advisory Council
            </h2>
            <div className="w-24 h-px bg-yellow-400 mx-auto mb-8"></div>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto font-light">
              Distinguished advisors providing strategic counsel and exclusive access to global capital markets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
            {
              name: "Deloitte Arita",
              title: "Senior Advisor",
              specialty: "International Relations",
              commitment: "£8M Personal Investment"
            },
            {
              name: "Michael Mungai",
              title: "Senior Legal Counsel",
              specialty: "Corporate & Real Estate Law",
              commitment: "$5M Legal Advisory & Compliance Oversight"
            },
            {
              name: "Eng. Jane Wairimu",
              title: "Real Estate Development Partner",
              specialty: "Urban Planning & Housing",
              commitment: "KSh 1.2B Project Pipeline"
            },
            {
              name: "Prof. Peter Njoroge",
              title: "Economic Advisor",
              specialty: "Macroeconomics & Policy",
              commitment: "Advisory on $20M Infrastructure Fund"
            }
            ].map((advisor, index) => (
              <div key={index} className="text-center p-8 bg-slate-800 border-t-4 border-yellow-400 hover:bg-slate-700 transition-colors">
                <div className="w-20 h-20 bg-slate-600 rounded-full mx-auto mb-6" />
                <h3 className="text-lg font-medium text-white mb-2">
                  {advisor.name}
                </h3>
                <div className="text-sm text-slate-300 mb-2 font-light">
                  {advisor.title}
                </div>
                <div className="text-xs text-slate-400 font-light italic mb-4">
                  {advisor.specialty}
                </div>
                <div className="bg-yellow-400/20 border border-yellow-400/40 px-4 py-2">
                  <span className="text-xs font-medium text-yellow-300">{advisor.commitment}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Heritage Values */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-5xl md:text-6xl font-light mb-6 text-slate-900">
              Our Heritage Principles
            </h2>
            <div className="w-24 h-px bg-yellow-400 mx-auto mb-12"></div>
            <p className="text-xl text-slate-700 font-light mb-20 max-w-4xl mx-auto leading-relaxed">
              For over three decades, these principles have guided every investment decision, 
              preserving and multiplying generational wealth with unwavering consistency.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16">
              {[
                {
                  title: "Fiduciary Excellence",
                  description: "We uphold the highest standards of stewardship, treating every investment with the care reserved for our own family's wealth.",
                  benefit: "Your interests are our sacred trust"
                },
                {
                  title: "Generational Perspective",
                  description: "Our investment philosophy transcends market cycles, focusing on assets that build lasting wealth across generations.",
                  benefit: "Sustainable 22%+ annual returns"
                },
                {
                  title: "Exclusive Access",
                  description: "Our heritage relationships provide unparalleled access to East Africa's most prestigious real estate opportunities.",
                  benefit: "Off-market deals unavailable elsewhere"
                }
              ].map((value, index) => (
                <div key={index} className="text-center bg-slate-50 p-10 border-l-4 border-yellow-400">
                  <div className="w-16 h-16 bg-yellow-400 mx-auto mb-8 flex items-center justify-center">
                    <Crown className="w-8 h-8 text-slate-900" />
                  </div>
                  <h3 className="text-2xl font-medium text-slate-900 mb-6">
                    {value.title}
                  </h3>
                  <p className="text-slate-700 font-light leading-relaxed mb-6 text-lg">
                    {value.description}
                  </p>
                  <div className="bg-yellow-50 border border-yellow-200 px-6 py-3">
                    <span className="text-sm font-medium text-yellow-700">{value.benefit}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Exclusive Investment Invitation */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block p-2 border-2 border-yellow-400 rounded-full mb-8">
              <Eye className="w-12 h-12 text-yellow-400" />
            </div>
            <h2 className="text-5xl md:text-6xl font-light text-white mb-8">
              An Invitation to Excellence
            </h2>
            <div className="w-24 h-px bg-yellow-400 mx-auto mb-12"></div>
            <p className="text-xl font-light mb-12 max-w-4xl mx-auto text-slate-300 leading-relaxed">
              Murivest Realty Group partnerships are selective by design. We invite only those who share our commitment to 
              excellence and understand the value of generational wealth building through East African real estate.
            </p>
            
            <div className="flex flex-col md:flex-row gap-8 justify-center items-center mb-16">
              <button className="bg-yellow-400 hover:bg-yellow-300 text-slate-900 px-10 py-4 text-lg font-medium transition-colors duration-200 flex items-center group tracking-wide">
                <Calendar className="w-5 h-5 mr-3" />
                SCHEDULE PRIVATE CONSULTATION
                <ChevronRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
              </button>
              <div className="text-slate-300 font-light">
                or contact our Private Wealth Division: <span className="text-yellow-400 font-medium">+254 115 277 610</span>
              </div>
            </div>
            
            <div className="max-w-md mx-auto bg-slate-800 p-8 border-t-4 border-yellow-400">
              <div className="flex items-center justify-center mb-6">
                <Users className="w-6 h-6 mr-3 text-yellow-400" />
                <span className="text-white font-medium tracking-wide">EXECUTIVE AVAILABILITY</span>
              </div>
              <div className="bg-slate-700 h-3 mb-3 overflow-hidden">
                <div className="bg-yellow-400 h-3 transition-all duration-1000" style={{width: '78%'}}></div>
              </div>
              <div className="text-sm text-slate-300 font-light">78% of Q4 consultation slots reserved</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExecutiveLeadership;