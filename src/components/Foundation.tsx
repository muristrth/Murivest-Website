'use client';

import React, { useState, useEffect } from 'react'
import { 
  TrendingUp, 
  Shield, 
  Globe, 
  Award,
  MapPin,
  Mail,
  Phone,
  Linkedin,
  Twitter,
  ChevronDown,
  ArrowRight,
  Menu,
  X,
  Building,
  DollarSign,
  Users,
  CheckCircle,
  Star,
  Crown,
  Briefcase,
  Target,
  Eye,
  Heart,
  GraduationCap,
  Stethoscope,
  UserCheck,
  Zap,
  Clock,
  Lock
} from 'lucide-react'

// Counter component
const AnimatedCounter = ({ end, duration = 2000, prefix = '', suffix = '' }: { 
  end: number, 
  duration?: number, 
  prefix?: string,
  suffix?: string 
}) => {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
          let start = 0
          const increment = end / (duration / 16)
          const timer = setInterval(() => {
            start += increment
            if (start >= end) {
              setCount(end)
              clearInterval(timer)
            } else {
              setCount(Math.floor(start))
            }
          }, 16)
        }
      },
      { threshold: 0.5 }
    )

    const element = document.getElementById(`counter-${end}`)
    if (element) observer.observe(element)

    return () => {
      if (element) observer.disconnect()
    }
  }, [end, duration, isVisible])

  return (
    <span id={`counter-${end}`} className="text-5xl font-light text-[#0B1D39]">
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  )
}

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

const MurivestFoundation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'problem', 'solution', 'impact', 'benefits', 'testimonials', 'urgency', 'donate', 'trust']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const height = element.offsetHeight
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])


  return (
    <div className="font-light bg-white text-[#0B1D39]">

      {/* 1. HERO - Ultimate Promise */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B1D39] via-[#1a3a5c] to-[#0B1D39]"></div>
        <div className="absolute inset-0 luxury-pattern opacity-20"></div>
        
        <div className="relative z-10 text-center max-w-6xl mx-auto px-4 text-white">
          <div className="inline-flex items-center bg-[#C9A227]/20 backdrop-blur-sm px-8 py-3 rounded-full border border-[#C9A227]/40 mb-8">
            <Crown className="text-[#C9A227] mr-3" size={24} />
            <span className="text-sm font-light tracking-[0.3em] uppercase">Exclusive Philanthropic Circle</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-light tracking-tight mb-8 leading-none">
            MURIVEST
            <span className="block text-4xl md:text-5xl font-light tracking-[0.2em] text-[#C9A227] mt-4">
              FOUNDATION
            </span>
          </h1>
          
          <p className="text-3xl md:text-4xl font-light mb-8 tracking-wide max-w-5xl mx-auto leading-tight">
            Where Elite Philanthropy Meets 
            <span className="text-[#C9A227]">Exponential Impact</span>
          </p>
          
          <p className="text-xl md:text-2xl font-light mb-12 text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Join an exclusive circle of <strong>visionary philanthropists</strong> whose strategic contributions 
            create <strong>10x multiplier effects</strong> across East African communities
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <button 
              onClick={() => scrollToSection('donate')}
              className="bg-[#C9A227] hover:bg-[#b8911e] text-[#0B1D39] px-16 py-5 text-xl font-light tracking-wider uppercase transition-all duration-300 transform hover:scale-105"
            >
              Join Our Circle
            </button>
            <button 
              onClick={() => scrollToSection('solution')}
              className="border-2 border-white/40 hover:bg-white hover:text-[#0B1D39] text-white px-16 py-5 text-xl font-light tracking-wider uppercase transition-all duration-300"
            >
              See Our Impact
            </button>
          </div>
          
          <div className="text-center">
            <p className="text-sm font-light tracking-[0.2em] uppercase text-gray-400 mb-2">
              Trusted by Global Philanthropists
            </p>
            <div className="flex justify-center items-center space-x-8 text-xs font-light tracking-wider text-gray-500">
              <span>LONDON</span>
              <span>•</span>
              <span>NEW YORK</span>
              <span>•</span>
              <span>SINGAPORE</span>
              <span>•</span>
              <span>DUBAI</span>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={36} className="text-white/70" />
        </div>
      </section>

      {/* ROI on Philanthropy */}
      <section className="bg-gray-50 p-16 rounded-3xl">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-4xl font-light text-[#0B1D39] mb-8 tracking-wide">
            Your Philanthropic ROI
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6">
              <div className="text-4xl font-light text-[#C9A227] mb-4">10:1</div>
              <p className="font-light text-[#0B1D39]/80">Impact Multiplier</p>
              <p className="text-sm font-light text-gray-500 mt-2">vs Traditional Charity</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-light text-[#C9A227] mb-4">95%</div>
              <p className="font-light text-[#0B1D39]/80">Direct Impact</p>
              <p className="text-sm font-light text-gray-500 mt-2">Only 5% Admin Costs</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-light text-[#C9A227] mb-4">100%</div>
              <p className="font-light text-[#0B1D39]/80">Transparency</p>
              <p className="text-sm font-light text-gray-500 mt-2">Real-Time Tracking</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PROBLEM - The Global Challenge */}
      <section id="problem" className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center bg-red-50 px-8 py-3 rounded-full mb-8">
              <Target className="text-red-600 mr-3" size={24} />
              <span className="text-sm font-light tracking-[0.2em] uppercase text-red-700">Global Crisis</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-light text-[#0B1D39] mb-8 tracking-tight">
              Traditional Charity
              <span className="block text-red-600">Isn't Working</span>
            </h2>
            <p className="text-2xl font-light text-[#0B1D39]/80 max-w-5xl mx-auto leading-relaxed">
              Despite billions in aid, East Africa still faces systemic poverty, limited education access, 
              and inadequate healthcare infrastructure
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12 mb-20">
            <div className="text-center p-8">
              <div className="text-6xl font-light text-red-500 mb-4">847M</div>
              <p className="text-xl font-light text-[#0B1D39]/80">People Without Clean Water</p>
              <p className="text-sm font-light text-gray-500 mt-2">In Sub-Saharan Africa</p>
            </div>
            <div className="text-center p-8">
              <div className="text-6xl font-light text-red-500 mb-4">60%</div>
              <p className="text-xl font-light text-[#0B1D39]/80">Youth Unemployment</p>
              <p className="text-sm font-light text-gray-500 mt-2">In Urban Centers</p>
            </div>
            <div className="text-center p-8">
              <div className="text-6xl font-light text-red-500 mb-4">2.3M</div>
              <p className="text-xl font-light text-[#0B1D39]/80">Children Out of School</p>
              <p className="text-sm font-light text-gray-500 mt-2">Primary Education Gap</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-red-50 to-orange-50 p-12 rounded-3xl border-l-8 border-red-500">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-3xl font-light text-[#0B1D39] mb-6 tracking-wide">
                The Problem with Traditional Aid
              </h3>
              <div className="grid md:grid-cols-2 gap-8 text-lg font-light text-[#0B1D39]/80 leading-relaxed">
                <div>
                  <p className="mb-4">
                    • <strong>Fragmented efforts</strong> create temporary relief, not lasting change
                  </p>
                  <p className="mb-4">
                    • <strong>Bureaucratic overhead</strong> consumes 60-80% of donations
                  </p>
                </div>
                <div>
                  <p className="mb-4">
                    • <strong>No strategic coordination</strong> between education, health, and economic programs
                  </p>
                  <p>
                    • <strong>Donor fatigue</strong> from lack of measurable, sustainable impact
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SOLUTION - The Murivest Model */}
      <section id="solution" className="py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center bg-[#C9A227]/10 px-8 py-3 rounded-full mb-8">
              <Zap className="text-[#C9A227] mr-3" size={24} />
              <span className="text-sm font-light tracking-[0.2em] uppercase text-[#0B1D39]">Revolutionary Approach</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-light text-[#0B1D39] mb-8 tracking-tight">
              The Murivest
              <span className="block text-[#C9A227]">Difference</span>
            </h2>
            <p className="text-2xl font-light text-[#0B1D39]/80 max-w-5xl mx-auto leading-relaxed">
              We don't just fund projects. We architect <strong>systematic transformation</strong> 
              that creates self-sustaining prosperity across entire regions.
            </p>
          </div>

          {/* The Model */}
          <div className="bg-gradient-to-br from-[#0B1D39] to-[#1a3a5c] p-16 rounded-3xl text-white mb-20">
            <div className="text-center mb-12">
              <h3 className="text-4xl font-light mb-6 tracking-wide">The Strategic Philanthropy Model</h3>
              <p className="text-xl font-light text-gray-300 max-w-4xl mx-auto">
                Where every dollar creates exponential impact through integrated development
              </p>
            </div>

            <div className="grid lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-[#C9A227]/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <GraduationCap className="text-[#C9A227]" size={36} />
                </div>
                <h4 className="text-xl font-light mb-4 tracking-wide">Education Excellence</h4>
                <p className="font-light text-gray-300 text-sm leading-relaxed">
                  World-class schools, universities, and vocational training that create skilled workforce
                </p>
              </div>

              <div className="text-center">
                <div className="bg-[#C9A227]/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Stethoscope className="text-[#C9A227]" size={36} />
                </div>
                <h4 className="text-xl font-light mb-4 tracking-wide">Healthcare Infrastructure</h4>
                <p className="font-light text-gray-300 text-sm leading-relaxed">
                  Modern medical facilities and training programs that serve entire regions
                </p>
              </div>

              <div className="text-center">
                <div className="bg-[#C9A227]/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Building className="text-[#C9A227]" size={36} />
                </div>
                <h4 className="text-xl font-light mb-4 tracking-wide">Economic Development</h4>
                <p className="font-light text-gray-300 text-sm leading-relaxed">
                  Job creation, entrepreneurship programs, and sustainable business ecosystems
                </p>
              </div>

              <div className="text-center">
                <div className="bg-[#C9A227]/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <UserCheck className="text-[#C9A227]" size={36} />
                </div>
                <h4 className="text-xl font-light mb-4 tracking-wide">Leadership Development</h4>
                <p className="font-light text-gray-300 text-sm leading-relaxed">
                  Cultivating next-generation leaders who drive continued community growth
                </p>
              </div>
            </div>
          </div>

          {/* Unique Value Proposition */}
          <div className="bg-white p-16 rounded-3xl shadow-2xl">
            <div className="text-center mb-12">
              <h3 className="text-4xl font-light text-[#0B1D39] mb-6 tracking-wide">
                Why Elite Philanthropists Choose Murivest
              </h3>
              <p className="text-xl font-light text-[#0B1D39]/80 max-w-4xl mx-auto">
                Unlike traditional charities, we offer strategic partnership opportunities that create lasting legacies
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-12">
              <div className="text-center">
                <div className="bg-[#C9A227]/10 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8">
                  <TrendingUp className="text-[#C9A227]" size={42} />
                </div>
                <h4 className="text-2xl font-light text-[#0B1D39] mb-4">Exponential Impact</h4>
                <p className="font-light text-[#0B1D39]/70 leading-relaxed">
                  Our integrated approach means your $100,000 contribution creates the same impact 
                  as $1M in traditional scattered aid
                </p>
              </div>

              <div className="text-center">
                <div className="bg-[#C9A227]/10 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8">
                  <Shield className="text-[#C9A227]" size={42} />
                </div>
                <h4 className="text-2xl font-light text-[#0B1D39] mb-4">Transparent Governance</h4>
                <p className="font-light text-[#0B1D39]/70 leading-relaxed">
                  Real-time impact tracking, quarterly reports, and direct community feedback 
                  ensure every dollar creates measurable change
                </p>
              </div>

              <div className="text-center">
                <div className="bg-[#C9A227]/10 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8">
                  <Crown className="text-[#C9A227]" size={42} />
                </div>
                <h4 className="text-2xl font-light text-[#0B1D39] mb-4">Legacy Recognition</h4>
                <p className="font-light text-[#0B1D39]/70 leading-relaxed">
                  Naming rights, legacy programs, and generational impact that honors your 
                  family's philanthropic vision for decades
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. IMPACT - Social Proof Through Results */}
      <section id="impact" className="py-28 bg-gradient-to-br from-[#C9A227] to-[#d4b02a] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl md:text-7xl font-light mb-8 tracking-tight">
            Documented
            <span className="block text-[#0B1D39]">Transformation</span>
          </h2>
          <p className="text-2xl font-light text-white/90 max-w-4xl mx-auto mb-20 leading-relaxed">
            Real numbers from real communities. This is what strategic philanthropy achieves.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            <div className="bg-white/20 backdrop-blur-lg p-10 rounded-3xl">
              <AnimatedCounter end={150} suffix="+" />
              <p className="text-xl font-light mt-4">Communities Transformed</p>
              <p className="text-sm font-light text-white/70 mt-2">Across 8 Counties</p>
            </div>
            <div className="bg-white/20 backdrop-blur-lg p-10 rounded-3xl">
              <AnimatedCounter end={25000} suffix="+" />
              <p className="text-xl font-light mt-4">Students Educated</p>
              <p className="text-sm font-light text-white/70 mt-2">K-12 & University</p>
            </div>
            <div className="bg-white/20 backdrop-blur-lg p-10 rounded-3xl">
              <AnimatedCounter end={500000} suffix="+" />
              <p className="text-xl font-light mt-4">Healthcare Beneficiaries</p>
              <p className="text-sm font-light text-white/70 mt-2">Annual Treatments</p>
            </div>
            <div className="bg-white/20 backdrop-blur-lg p-10 rounded-3xl">
              <AnimatedCounter end={12000} suffix="+" />
              <p className="text-xl font-light mt-4">Jobs Created</p>
              <p className="text-sm font-light text-white/70 mt-2">Sustainable Employment</p>
            </div>
          </div>

          {/* Case Study */}
          <div className="bg-[#0B1D39] p-16 rounded-3xl max-w-5xl mx-auto">
            <h3 className="text-3xl font-light mb-8 text-[#C9A227] tracking-wide">Case Study: Kibera Transformation</h3>
            <div className="grid md:grid-cols-2 gap-12 text-left">
              <div>
                <h4 className="text-xl font-light mb-4 text-white">Before (2020)</h4>
                <ul className="space-y-3 font-light text-gray-300">
                  <li>• 80% unemployment rate</li>
                  <li>• 1 primary school for 50,000 residents</li>
                  <li>• No healthcare facility within 10km</li>
                  <li>• 90% living below poverty line</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-light mb-4 text-[#C9A227]">After (2025)</h4>
                <ul className="space-y-3 font-light text-white">
                  <li>• 45% unemployment rate</li>
                  <li>• 5 modern schools + vocational center</li>
                  <li>• Full-service medical center</li>
                  <li>• 60% above poverty line</li>
                </ul>
              </div>
            </div>
            <div className="text-center mt-12">
              <p className="text-xl font-light text-[#C9A227] italic">
                "Total Donor Investment: $2.8M | Community Value Created: $28M"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. BENEFITS - What's In It For Them */}
      <section id="benefits" className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-light text-[#0B1D39] mb-8 tracking-tight">
              Exclusive Partner
              <span className="block text-[#C9A227]">Benefits</span>
            </h2>
            <p className="text-2xl font-light text-[#0B1D39]/80 max-w-4xl mx-auto">
              Strategic philanthropy that elevates your family's legacy while creating transformational change
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="bg-[#C9A227] w-12 h-12 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                  <Crown className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-light text-[#0B1D39] mb-3">Legacy Naming Rights</h3>
                  <p className="font-light text-[#0B1D39]/70 leading-relaxed text-lg">
                    Schools, hospitals, and community centers bearing your family name, 
                    creating permanent recognition across generations.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-[#C9A227] w-12 h-12 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                  <Globe className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-light text-[#0B1D39] mb-3">Global Recognition</h3>
                  <p className="font-light text-[#0B1D39]/70 leading-relaxed text-lg">
                    Feature stories in Forbes, Financial Times, and other prestigious publications 
                    highlighting your transformational impact.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-[#C9A227] w-12 h-12 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                  <Shield className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-light text-[#0B1D39] mb-3">Tax Optimization</h3>
                  <p className="font-light text-[#0B1D39]/70 leading-relaxed text-lg">
                    Maximum charitable deductions plus international tax benefits through 
                    our strategic foundation structure.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#0B1D39] to-[#1a3a5c] p-12 rounded-3xl text-white">
              <h3 className="text-3xl font-light mb-8 text-[#C9A227] tracking-wide text-center">
                Exclusive Partnership Tiers
              </h3>
              
              <div className="space-y-6">
                <div className="border-l-4 border-[#C9A227] pl-6">
                  <h4 className="text-xl font-light mb-2">Visionary Partner: $1M+</h4>
                  <p className="font-light text-gray-300 text-sm">Major facility naming, board advisory position, annual impact trip</p>
                </div>
                
                <div className="border-l-4 border-white/40 pl-6">
                  <h4 className="text-xl font-light mb-2">Strategic Partner: $500K+</h4>
                  <p className="font-light text-gray-300 text-sm">Program naming rights, quarterly briefings, VIP events</p>
                </div>
                
                <div className="border-l-4 border-white/40 pl-6">
                  <h4 className="text-xl font-light mb-2">Impact Partner: $250K+</h4>
                  <p className="font-light text-gray-300 text-sm">Project recognition, annual reports, exclusive updates</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. TESTIMONIALS - Social Proof */}
      <section id="testimonials" className="py-28 bg-[#0B1D39] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center bg-[#C9A227]/20 px-8 py-3 rounded-full mb-8">
              <Users className="text-[#C9A227] mr-3" size={24} />
              <span className="text-sm font-light tracking-[0.2em] uppercase">Philanthropic Leaders</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-light mb-8 tracking-tight">
              What Visionary
              <span className="block text-[#C9A227]">Donors Say</span>
            </h2>
          </div>

          {/* Featured Testimonial */}
          <div className="bg-white/10 backdrop-blur-lg p-16 rounded-3xl mb-16 border border-white/20">
            <div className="max-w-5xl mx-auto text-center">
              <div className="flex justify-center mb-8">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-[#C9A227] fill-current mx-1" size={28} />
                ))}
              </div>
              <blockquote className="text-3xl md:text-4xl font-light leading-relaxed mb-12 italic">
                "In 40 years of global philanthropy, Murivest Foundation has delivered the most 
                measurable, sustainable impact I've ever witnessed. They've transformed how our 
                family approaches charitable giving."
              </blockquote>
              <div className="border-t border-white/30 pt-8">
                <h4 className="text-2xl font-light tracking-wide">Lady Catherine Ashworth</h4>
                <p className="text-[#C9A227] font-light tracking-[0.2em] uppercase text-sm mt-2">Ashworth Family Foundation, London</p>
                <p className="text-white/70 font-light text-sm mt-1">$15M Contributed Since 2018</p>
              </div>
            </div>
          </div>

          {/* Additional Testimonials */}
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-white/5 p-12 rounded-3xl border border-white/10">
              <div className="flex items-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-[#C9A227] fill-current mr-1" size={20} />
                ))}
              </div>
              <p className="font-light text-xl text-white mb-8 leading-relaxed italic">
                "Murivest doesn't just spend our money—they multiply its impact. The transparency 
                and results are extraordinary. This is philanthropy done right."
              </p>
              <div className="border-t border-white/20 pt-6">
                <h4 className="font-light text-white tracking-wide text-lg">Dr. James Rothschild</h4>
                <p className="text-sm font-light text-[#C9A227] tracking-wider uppercase">Rothschild Philanthropic Ventures</p>
              </div>
            </div>

            <div className="bg-white/5 p-12 rounded-3xl border border-white/10">
              <div className="flex items-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-[#C9A227] fill-current mr-1" size={20} />
                ))}
              </div>
              <p className="font-light text-xl text-white mb-8 leading-relaxed italic">
                "The level of strategic thinking and execution is unmatched. Murivest has become 
                our primary vehicle for African development initiatives."
              </p>
              <div className="border-t border-white/20 pt-6">
                <h4 className="font-light text-white tracking-wide text-lg">Sarah Al-Maktoum</h4>
                <p className="text-sm font-light text-[#C9A227] tracking-wider uppercase">Dubai Humanitarian Foundation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. URGENCY - Limited Time Opportunity */}
      <section id="urgency" className="py-28 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#0B1D39] to-[#1a3a5c] p-16 rounded-3xl text-white text-center">
            <div className="inline-flex items-center bg-red-500/20 px-8 py-3 rounded-full mb-8">
              <Clock className="text-red-400 mr-3" size={24} />
              <span className="text-sm font-light tracking-[0.2em] uppercase text-red-300">Time-Sensitive Opportunity</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-light mb-8 tracking-tight">
              2025 Expansion Initiative
              <span className="block text-[#C9A227] text-3xl md:text-4xl mt-4">Only 12 Partnership Slots Remaining</span>
            </h2>
            
            <p className="text-xl md:text-2xl font-light text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Our most ambitious project yet: Transforming 50 communities across East Africa. 
              <strong>Limited to 25 founding partners</strong> for maximum impact and recognition.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white/10 p-8 rounded-2xl">
                <Lock className="text-[#C9A227] mx-auto mb-4" size={36} />
                <h4 className="text-lg font-light mb-3">Exclusive Access</h4>
                <p className="font-light text-gray-300 text-sm">Private briefings with African leaders</p>
              </div>
              <div className="bg-white/10 p-8 rounded-2xl">
                <Award className="text-[#C9A227] mx-auto mb-4" size={36} />
                <h4 className="text-lg font-light mb-3">Founding Recognition</h4>
                <p className="font-light text-gray-300 text-sm">Permanent legacy status in all facilities</p>
              </div>
              <div className="bg-white/10 p-8 rounded-2xl">
                <TrendingUp className="text-[#C9A227] mx-auto mb-4" size={36} />
                <h4 className="text-lg font-light mb-3">Maximum Impact</h4>
                <p className="font-light text-gray-300 text-sm">10x leverage on every dollar contributed</p>
              </div>
            </div>

            <div className="bg-red-500/20 p-8 rounded-2xl mb-8">
              <h4 className="text-2xl font-light text-red-300 mb-4">Partnership Deadline: December 31, 2025</h4>
              <p className="font-light text-gray-300">
                After this date, partnership opportunities will only be available through our waiting list 
                at significantly higher contribution levels.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. CALL TO ACTION - The Ask */}
      <section id="donate" className="py-28 bg-[#0B1D39] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-light mb-8 tracking-tight">
              Begin Your
              <span className="block text-[#C9A227]">Legacy Today</span>
            </h2>
            <p className="text-2xl font-light text-gray-300 max-w-4xl mx-auto mb-12">
              Join an exclusive circle of global philanthropists creating generational impact
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contribution Form */}
            <div className="bg-white/5 backdrop-blur-lg p-12 rounded-3xl border border-white/10">
              <div className="text-center mb-8">
                <Crown className="text-[#C9A227] mx-auto mb-4" size={48} />
                <h3 className="text-3xl font-light mb-4 tracking-wide">Partnership Application</h3>
                <p className="font-light text-gray-300">Exclusive access for qualified philanthropists</p>
              </div>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-light mb-3 tracking-wider uppercase text-gray-300">Full Name</label>
                    <input
                      id="fullName"
                      type="text"
                      className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-xl focus:ring-2 focus:ring-[#C9A227] focus:border-transparent transition-all text-white placeholder-gray-400"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-light mb-3 tracking-wider uppercase text-gray-300">Email</label>
                    <input
                      id="email"
                      type="email"
                      className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-xl focus:ring-2 focus:ring-[#C9A227] focus:border-transparent transition-all text-white placeholder-gray-400"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="partnershipLevel" className="block text-sm font-light mb-3 tracking-wider uppercase text-gray-300">Partnership Level</label>
                  <select 
                    id="partnershipLevel"
                    className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-xl focus:ring-2 focus:ring-[#C9A227] focus:border-transparent transition-all text-white"
                  >
                    <option value="">Select contribution range</option>
                    <option value="visionary">Visionary Partner - $1M+</option>
                    <option value="strategic">Strategic Partner - $500K+</option>
                    <option value="impact">Impact Partner - $250K+</option>
                    <option value="custom">Custom Partnership</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="legacyFocus" className="block text-sm font-light mb-3 tracking-wider uppercase text-gray-300">Legacy Focus</label>
                  <select 
                    id="legacyFocus"
                    className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-xl focus:ring-2 focus:ring-[#C9A227] focus:border-transparent transition-all text-white"
                  >
                    <option value="">Choose your impact area</option>
                    <option value="education">Education Excellence</option>
                    <option value="healthcare">Healthcare Infrastructure</option>
                    <option value="economic">Economic Development</option>
                    <option value="comprehensive">Comprehensive Transformation</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="yourVision" className="block text-sm font-light mb-3 tracking-wider uppercase text-gray-300">Your Vision</label>
                  <textarea
                    id="yourVision"
                    rows={4}
                    className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-xl focus:ring-2 focus:ring-[#C9A227] focus:border-transparent transition-all resize-none text-white placeholder-gray-400"
                    placeholder="Share your philanthropic vision and legacy goals..."
                  ></textarea>
                </div>
                
                <button type="submit" className="w-full bg-[#C9A227] hover:bg-[#b8911e] text-[#0B1D39] py-5 rounded-xl text-xl font-light tracking-wider uppercase transition-all duration-300 transform hover:scale-105">
                  Submit Partnership Application
                </button>
                
                <p className="text-xs font-light text-gray-400 text-center tracking-wider">
                  * Applications reviewed within 48 hours. Qualified applicants will receive a private consultation.
                </p>
              </form>
            </div>

            {/* Immediate Impact Options */}
            <div className="space-y-8">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-light mb-6 tracking-wide">Immediate Impact Opportunities</h3>
                <p className="font-light text-gray-300 text-lg">Make an instant difference while we process your partnership application</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/10 p-8 rounded-2xl border border-white/20 hover:bg-white/15 transition-all cursor-pointer">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="text-xl font-light text-[#C9A227] mb-2">Emergency Education Fund</h4>
                      <p className="font-light text-gray-300 text-sm">Immediate school supplies and teacher training</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-light text-white">$50K</div>
                      <div className="text-sm text-gray-400">Minimum</div>
                    </div>
                  </div>
                  <button className="w-full bg-[#C9A227]/20 hover:bg-[#C9A227] text-white py-3 rounded-lg transition-all">
                    Contribute Now
                  </button>
                </div>

                <div className="bg-white/10 p-8 rounded-2xl border border-white/20 hover:bg-white/15 transition-all cursor-pointer">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="text-xl font-light text-[#C9A227] mb-2">Healthcare Crisis Response</h4>
                      <p className="font-light text-gray-300 text-sm">Mobile clinics and medical equipment</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-light text-white">$75K</div>
                      <div className="text-sm text-gray-400">Minimum</div>
                    </div>
                  </div>
                  <button className="w-full bg-[#C9A227]/20 hover:bg-[#C9A227] text-white py-3 rounded-lg transition-all">
                    Contribute Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. TRUST & CREDIBILITY */}
      <section id="trust" className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-light text-[#0B1D39] mb-8 tracking-tight">
              World-Class
              <span className="block text-[#C9A227]">Governance</span>
            </h2>
            <p className="text-2xl font-light text-[#0B1D39]/80 max-w-4xl mx-auto">
              The transparency, accountability, and impact measurement that elite philanthropists demand
            </p>
          </div>

          {/* Credentials Grid */}
          <div className="grid lg:grid-cols-2 gap-16 mb-20">
            <div>
              <h3 className="text-3xl font-light text-[#0B1D39] mb-8 tracking-wide">Certifications & Partnerships</h3>
              <div className="space-y-6">
                <div className="flex items-center p-4 bg-gray-50 rounded-xl">
                  <CheckCircle className="text-[#C9A227] mr-4 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-light text-[#0B1D39] text-lg">UN Sustainable Development Goals Partner</h4>
                    <p className="text-sm font-light text-gray-600">Official SDG implementation partner</p>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-gray-50 rounded-xl">
                  <CheckCircle className="text-[#C9A227] mr-4 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-light text-[#0B1D39] text-lg">GuideStar Platinum Seal</h4>
                    <p className="text-sm font-light text-gray-600">Highest transparency rating</p>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-gray-50 rounded-xl">
                  <CheckCircle className="text-[#C9A227] mr-4 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-light text-[#0B1D39] text-lg">Audited by Deloitte East Africa</h4>
                    <p className="text-sm font-light text-gray-600">Annual independent financial audits</p>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-gray-50 rounded-xl">
                  <CheckCircle className="text-[#C9A227] mr-4 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-light text-[#0B1D39] text-lg">Kenya NGO Coordination Board</h4>
                    <p className="text-sm font-light text-gray-600">Fully licensed and compliant</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-3xl font-light text-[#0B1D39] mb-8 tracking-wide">Advisory Board</h3>
              <div className="space-y-6">
                <div className="p-6 bg-gradient-to-r from-[#0B1D39] to-[#1a3a5c] text-white rounded-xl">
                  <h4 className="text-lg font-light text-[#C9A227] mb-2">Lord Michael Pemberton</h4>
                  <p className="text-sm font-light">Former World Bank Vice President</p>
                </div>
                <div className="p-6 bg-gradient-to-r from-[#0B1D39] to-[#1a3a5c] text-white rounded-xl">
                  <h4 className="text-lg font-light text-[#C9A227] mb-2">Dr. Amina Hassan</h4>
                  <p className="text-sm font-light">Former UN Assistant Secretary-General</p>
                </div>
                <div className="p-6 bg-gradient-to-r from-[#0B1D39] to-[#1a3a5c] text-white rounded-xl">
                  <h4 className="text-lg font-light text-[#C9A227] mb-2">Professor James Chen</h4>
                  <p className="text-sm font-light">Harvard Kennedy School of Government</p>
                </div>
                <div className="p-6 bg-gradient-to-r from-[#0B1D39] to-[#1a3a5c] text-white rounded-xl">
                  <h4 className="text-lg font-light text-[#C9A227] mb-2">Margaret Ashworth</h4>
                  <p className="text-sm font-light">Former Goldman Sachs Foundation Director</p>
                </div>
              </div>
            </div>
          </div>

          {/* Financial Transparency */}
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-16 rounded-3xl">
            <div className="text-center mb-12">
              <h3 className="text-4xl font-light text-[#0B1D39] mb-6 tracking-wide">
                Unparalleled Financial Transparency
              </h3>
              <p className="text-xl font-light text-[#0B1D39]/80 max-w-3xl mx-auto">
                Real-time tracking of every dollar, with quarterly impact reports and annual audited statements
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div className="p-6">
                <div className="text-4xl font-light text-[#C9A227] mb-3">95%</div>
                <p className="font-light text-[#0B1D39]/80">Direct Program Impact</p>
              </div>
              <div className="p-6">
                <div className="text-4xl font-light text-[#C9A227] mb-3">3%</div>
                <p className="font-light text-[#0B1D39]/80">Administrative Costs</p>
              </div>
              <div className="p-6">
                <div className="text-4xl font-light text-[#C9A227] mb-3">2%</div>
                <p className="font-light text-[#0B1D39]/80">Fundraising Expenses</p>
              </div>
              <div className="p-6">
                <div className="text-4xl font-light text-[#C9A227] mb-3">100%</div>
                <p className="font-light text-[#0B1D39]/80">Donor Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0B1D39] text-white py-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="md:col-span-2">
              <div className="flex items-center mb-8">
                <Crown className="text-[#C9A227] mr-3" size={36} />
                <div>
                  <h3 className="text-2xl font-light tracking-wider">MURIVEST FOUNDATION</h3>
                  <p className="text-xs font-light tracking-[0.3em] text-gray-400 uppercase">Est. 2012 • Kenya</p>
                </div>
              </div>
              <p className="font-light text-gray-300 leading-relaxed mb-8 max-w-md text-lg">
                Empowering communities and transforming lives through strategic philanthropy 
                that creates lasting, measurable change across East Africa.
              </p>
              <div className="flex space-x-6">
                <button className="text-[#C9A227] hover:text-white transition-colors transform hover:scale-110">
                  <Linkedin size={28} />
                </button>
                <button className="text-[#C9A227] hover:text-white transition-colors transform hover:scale-110">
                  <Twitter size={28} />
                </button>
                <button className="text-[#C9A227] hover:text-white transition-colors transform hover:scale-110">
                  <Globe size={28} />
                </button>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-light mb-6 text-[#C9A227] tracking-wider uppercase">Impact Areas</h4>
              <ul className="space-y-4 font-light text-gray-300">
                <li><button onClick={() => scrollToSection('solution')} className="hover:text-[#C9A227] transition-colors">Education Excellence</button></li>
                <li><button onClick={() => scrollToSection('solution')} className="hover:text-[#C9A227] transition-colors">Healthcare Infrastructure</button></li>
                <li><button onClick={() => scrollToSection('solution')} className="hover:text-[#C9A227] transition-colors">Economic Development</button></li>
                <li><button onClick={() => scrollToSection('solution')} className="hover:text-[#C9A227] transition-colors">Youth Leadership</button></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-light mb-6 text-[#C9A227] tracking-wider uppercase">Philanthropic Services</h4>
              <ul className="space-y-4 font-light text-gray-300">
                <li><button className="hover:text-[#C9A227] transition-colors">Strategic Giving Consultation</button></li>
                <li><button className="hover:text-[#C9A227] transition-colors">Legacy Program Design</button></li>
                <li><button className="hover:text-[#C9A227] transition-colors">Impact Measurement</button></li>
                <li><button className="hover:text-[#C9A227] transition-colors">Donor Recognition</button></li>
              </ul>
            </div>
          </div>

          {/* Emergency Contact */}
          <div className="bg-red-900/20 border border-red-500/30 p-8 rounded-2xl mb-16">
            <div className="text-center">
              <h4 className="text-xl font-light text-red-300 mb-4 tracking-wide">Humanitarian Emergency Response</h4>
              <p className="font-light text-gray-300 mb-4">
                For urgent humanitarian crises requiring immediate philanthropic intervention
              </p>
              <div className="flex justify-center space-x-8">
                <div className="flex items-center">
                  <Phone className="text-red-400 mr-2" size={18} />
                  <span className="font-light text-gray-300">+254 700 000 001</span>
                </div>
                <div className="flex items-center">
                  <Mail className="text-red-400 mr-2" size={18} />
                  <span className="font-light text-gray-300">emergency@murivest.co.ke</span>
                </div>
              </div>
            </div>
          </div>

          {/* Final CTA */}
          <div className="bg-gradient-to-r from-[#C9A227] to-[#d4b02a] p-16 rounded-3xl text-center">
            <h3 className="text-4xl font-light text-[#0B1D39] mb-6 tracking-wide">
              Ready to Transform Lives?
            </h3>
            <p className="text-xl font-light text-[#0B1D39]/80 mb-8 max-w-3xl mx-auto">
              Join the exclusive circle of philanthropists creating generational change across East Africa
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button 
                onClick={() => scrollToSection('donate')}
                className="bg-[#0B1D39] hover:bg-[#1a3a5c] text-white px-12 py-4 text-lg font-light tracking-wider uppercase transition-all duration-300 transform hover:scale-105"
              >
                Start Your Legacy
              </button>
              <button className="border-2 border-[#0B1D39] hover:bg-[#0B1D39] hover:text-white text-[#0B1D39] px-12 py-4 text-lg font-light tracking-wider uppercase transition-all duration-300">
                Download Impact Report
              </button>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-white/20 pt-12 mt-16">
            <div className="flex flex-col lg:flex-row justify-between items-center">
              <p className="font-light text-gray-400 text-sm tracking-wide">
                © 2025 Murivest Foundation. All rights reserved. | Registered Charity No. KE/NGO/001234
              </p>
              <div className="flex space-x-8 mt-6 lg:mt-0">
                <button className="font-light text-gray-400 hover:text-[#C9A227] text-sm transition-colors tracking-wide">
                  Privacy Policy
                </button>
                <button className="font-light text-gray-400 hover:text-[#C9A227] text-sm transition-colors tracking-wide">
                  Terms of Giving
                </button>
                <button className="font-light text-gray-400 hover:text-[#C9A227] text-sm transition-colors tracking-wide">
                  Annual Reports
                </button>
                <button className="font-light text-gray-400 hover:text-[#C9A227] text-sm transition-colors tracking-wide">
                  Financial Statements
                </button>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-xs font-light text-gray-500 tracking-wider leading-relaxed">
                Murivest Foundation is a registered 501(c)(3) equivalent charitable organization. 
                Contributions are tax-deductible to the full extent allowed by law. 
                Consult your tax advisor for specific deduction benefits.
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Custom Styles */}
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@300;400;500&family=Inter:wght@100;200;300;400&display=swap');
        
        * {
          font-family: 'Inter', sans-serif;
          font-weight: 300;
        }
        
        h1, h2, h3, h4 {
          font-family: 'Playfair Display', serif;
        }
        
        .animate-fade-in {
          animation: fadeIn 1.5s ease-out;
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(60px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        html {
          scroll-behavior: smooth;
        }
        
        /* Luxury pattern overlay */
        .luxury-pattern {
          background-image: 
            radial-gradient(circle at 3px 3px, rgba(201,162,39,0.15) 2px, transparent 0);
          background-size: 60px 60px;
        }
        
        /* Old money hover effects */
        .group:hover .group-hover\\:scale-105 {
          transform: scale(1.05);
        }
        
        /* Smooth transitions */
        * {
          transition: all 0.3s ease;
        }
        
        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: #f1f1f1;
        }
        
        ::-webkit-scrollbar-thumb {
          background: #C9A227;
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: #b8911e;
        }
      `}</style>

    </div>
  )
}

export default MurivestFoundation