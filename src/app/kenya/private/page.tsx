// app/asset-brief/page.tsx
'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const qualifications = {
  titles: [
    'Chief Executive Officer (CEO)',
    'Managing Director',
    'Director / Board Member',
    'Chief Investment Officer (CIO)',
    'Chief Financial Officer (CFO)',
    'Asset Manager',
    'Fund / Portfolio Manager',
    'Property Acquisitions Lead',
    'Investment Director',
    'Head of Real Estate',
    'Family Office Principal',
    'Private Investor',
    'Trustee / Foundation Officer',
    'Senior Executive – Other'
  ],
  networth: [
    { value: 'below_100m', label: 'Below KES 100M', qualified: false },
    { value: '100m_500m', label: 'KES 100M – 500M', qualified: false },
    { value: '500m_1b', label: 'KES 500M – 1B', qualified: true },
    { value: '1b_5b', label: 'KES 1B – 5B', qualified: true },
    { value: '5b_plus', label: 'KES 5B+', qualified: true },
    { value: 'institutional', label: 'Institutional Mandate (Pension / Insurance / DFI)', qualified: true }
  ]
};

export default function AssetBriefPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    organization: '',
    title: '',
    networth: '',
    interest: '',
    consentMarketing: false,
    consentTerms: false
  });
  
  const [status, setStatus] = useState<'idle' | 'submitting' | 'qualified' | 'pending'>('idle');
  const [error, setError] = useState('');
  const [showPreview, setShowPreview] = useState(false);
  const downloadRef = useRef<HTMLAnchorElement>(null);

  const checkQualification = () => {
    const selectedNetworth = qualifications.networth.find(n => n.value === formData.networth);
    const isQualifiedNetworth = selectedNetworth?.qualified ?? false;
    const lowIntentTitles = ['Private Investor', 'Senior Executive – Other'];
    const isLowIntentTitle = lowIntentTitles.includes(formData.title);
    
    if (!isQualifiedNetworth && isLowIntentTitle) {
      return false;
    }
    if (isQualifiedNetworth) {
      return true;
    }
    return 'pending';
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.consentTerms) {
      setError('You must accept the Terms and Policies to proceed.');
      return;
    }
    
    setStatus('submitting');
    setError('');

    try {
      const qualification = checkQualification();
      
      const response = await fetch('/api/asset-brief-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          qualificationStatus: qualification === true ? 'qualified' : qualification === 'pending' ? 'pending' : 'declined',
          submittedAt: new Date().toISOString()
        })
      });

      if (!response.ok) throw new Error('Submission failed');

      if (qualification === true) {
        setStatus('qualified');
        setTimeout(() => {
          downloadRef.current?.click();
        }, 1500);
      } else {
        setStatus('pending');
      }
    } catch (err) {
      setError('An error occurred. Please try again or contact our advisory team directly.');
      setStatus('idle');
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({ 
      ...prev, 
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value 
    }));
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#FAF9F6] font-sans selection:bg-[#B8956B] selection:text-[#0a0a0a]">
      <a ref={downloadRef} href="/assetbrief.pdf" download="Murivest_2026_Asset_Brief.pdf" className="hidden" />
      
      <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.03] bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 256 256%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22/%3E%3C/svg%3E')] mix-blend-overlay" />

      <nav className="fixed top-0 left-0 right-0 z-40 bg-gradient-to-b from-[#0a0a0a]/95 to-transparent backdrop-blur-md border-b border-[#B8956B]/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 border border-[#B8956B]/30 flex items-center justify-center">
              <span className="font-serif text-[#B8956B] text-xl">M</span>
            </div>
            <div>
              <span className="font-serif text-[#FAF9F6] tracking-[0.3em] text-sm uppercase">Murivest</span>
              <span className="block text-[0.6rem] tracking-[0.2em] text-[#B8956B]/60 uppercase">Private Asset Division</span>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <span className="text-[0.65rem] tracking-[0.25em] text-[#FAF9F6]/40 uppercase border border-[#B8956B]/20 px-4 py-2">
              Restricted Circulation
            </span>
          </div>
        </div>
      </nav>

      <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#1B4332]/20 to-[#0a0a0a]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#B8956B]/10 via-transparent to-transparent" />
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `repeating-linear-gradient(-45deg, transparent, transparent 100px, rgba(184,149,107,0.1) 100px, rgba(184,149,107,0.1) 101px)`
        }} />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="order-2 lg:order-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-12 bg-[#B8956B]" />
                <span className="text-[#B8956B] text-[0.65rem] tracking-[0.4em] uppercase font-serif">2026 Kenya Commercial Real Estate Outlook</span>
              </div>
              
              <h1 className="font-serif text-5xl lg:text-7xl font-light leading-[0.95] mb-6 text-[#FAF9F6]">
                Access <span className="text-[#B8956B]">Off-Market</span><br />
                Institutional<br />
                <span className="text-[#FAF9F6]/60">Grade A Assets</span>
              </h1>

              <p className="text-lg text-[#FAF9F6]/70 leading-relaxed mb-8 max-w-xl font-light border-l-2 border-[#B8956B]/30 pl-6">
                An exclusive briefing on Grade A commercial opportunities across Nairobi, Mombasa, and key East African corridors. Reserved for institutional capital and verified UHNW principals.
              </p>

              <div className="flex flex-wrap gap-8 mb-12">
                <div>
                  <span className="block font-serif text-3xl text-[#B8956B] font-light">8–15%</span>
                  <span className="text-[0.65rem] tracking-[0.2em] text-[#FAF9F6]/40 uppercase">Net Yields p.a.</span>
                </div>
                <div>
                  <span className="block font-serif text-3xl text-[#B8956B] font-light">KES 500M+</span>
                  <span className="text-[0.65rem] tracking-[0.2em] text-[#FAF9F6]/40 uppercase">Entry Threshold</span>
                </div>
                <div>
                  <span className="block font-serif text-3xl text-[#B8956B] font-light">Grade A</span>
                  <span className="text-[0.65rem] tracking-[0.2em] text-[#FAF9F6]/40 uppercase">Asset Class Only</span>
                </div>
              </div>

              {/* Animated Institutional Button */}
              <motion.button
                onClick={() => document.getElementById('access-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="group relative overflow-hidden bg-transparent border border-[#B8956B] text-[#B8956B] px-10 py-4 text-[0.7rem] tracking-[0.3em] uppercase font-serif mb-12"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10 group-hover:text-[#0a0a0a] transition-colors duration-300">Access Private Brief</span>
                <motion.div 
                  className="absolute inset-0 bg-[#B8956B]"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                />
              </motion.button>

              <div className="flex items-center gap-6 opacity-40">
                <span className="text-[0.6rem] tracking-[0.2em] uppercase">Featured In:</span>
                <div className="flex gap-6 text-[0.7rem] tracking-widest font-serif">
                  <span>Business Daily</span>
                  <span>•</span>
                  <span>East African</span>
                  <span>•</span>
                  <span>CNBC Africa</span>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="order-1 lg:order-2">

              <div id="access-form" className="relative bg-[#111] border border-[#B8956B]/20 p-8 lg:p-10 shadow-2xl shadow-black/50">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#B8956B] to-transparent" />
                
                <AnimatePresence mode="wait">
                  {status === 'qualified' ? (
                    <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-12">
                      <div className="w-16 h-16 mx-auto mb-6 border border-[#B8956B] rounded-full flex items-center justify-center">
                        <span className="text-2xl text-[#B8956B]">&#10003;</span>
                      </div>
                      <h3 className="font-serif text-2xl text-[#B8956B] mb-4">Access Granted</h3>
                      <p className="text-[#FAF9F6]/70 text-sm leading-relaxed mb-6">
                        Your profile meets our criteria. The 2026 Asset Brief has been sent to your email and is downloading now. Our advisory team will contact you within 24 hours.
                      </p>
                      <button onClick={() => downloadRef.current?.click()} className="text-[#B8956B] text-sm border-b border-[#B8956B] pb-1 hover:text-[#FAF9F6] transition-colors">
                        Download Again
                      </button>
                    </motion.div>
                  ) : status === 'pending' ? (
                    <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-12">
                      <div className="w-16 h-16 mx-auto mb-6 border border-[#FAF9F6]/30 rounded-full flex items-center justify-center">
                        <span className="text-2xl text-[#FAF9F6]/50">&#9671;</span>
                      </div>
                      <h3 className="font-serif text-2xl text-[#FAF9F6] mb-4">Under Review</h3>
                      <p className="text-[#FAF9F6]/60 text-sm leading-relaxed">
                        We have received your enquiry. Given current allocation constraints, priority access is reserved for institutional mandates. Our team will assess fit and respond accordingly.
                      </p>
                    </motion.div>
                  ) : (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                      <div className="mb-8">
                        <span className="text-[#B8956B] text-[0.65rem] tracking-[0.3em] uppercase block mb-2">Request Private Access</span>
                        <h2 className="font-serif text-2xl text-[#FAF9F6] mb-2">The Murivest Asset Brief</h2>
                        <p className="text-[0.8rem] text-[#FAF9F6]/50 leading-relaxed">
                          Complete your advisory profile below. Access is granted at our discretion following alignment verification.
                        </p>
                      </div>

                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-[0.6rem] tracking-[0.2em] text-[#B8956B]/60 uppercase mb-2">First Name</label>
                            <input type="text" name="firstName" required value={formData.firstName} onChange={handleInputChange} className="w-full bg-[#0a0a0a] border border-[#B8956B]/20 px-4 py-3 text-sm text-[#FAF9F6] focus:border-[#B8956B] focus:outline-none transition-colors placeholder:text-[#FAF9F6]/20" placeholder="James" />
                          </div>
                          <div>
                            <label className="block text-[0.6rem] tracking-[0.2em] text-[#B8956B]/60 uppercase mb-2">Surname</label>
                            <input type="text" name="lastName" required value={formData.lastName} onChange={handleInputChange} className="w-full bg-[#0a0a0a] border border-[#B8956B]/20 px-4 py-3 text-sm text-[#FAF9F6] focus:border-[#B8956B] focus:outline-none transition-colors placeholder:text-[#FAF9F6]/20" placeholder="Kariuki" />
                          </div>
                        </div>

                        <div>
                          <label className="block text-[0.6rem] tracking-[0.2em] text-[#B8956B]/60 uppercase mb-2">Institutional Email</label>
                          <input type="email" name="email" required value={formData.email} onChange={handleInputChange} className="w-full bg-[#0a0a0a] border border-[#B8956B]/20 px-4 py-3 text-sm text-[#FAF9F6] focus:border-[#B8956B] focus:outline-none transition-colors placeholder:text-[#FAF9F6]/20" placeholder="j.kariuki@institution.co.ke" />
                        </div>

                        <div>
                          <label className="block text-[0.6rem] tracking-[0.2em] text-[#B8956B]/60 uppercase mb-2">Direct Line / WhatsApp</label>
                          <input type="tel" name="phone" required value={formData.phone} onChange={handleInputChange} className="w-full bg-[#0a0a0a] border border-[#B8956B]/20 px-4 py-3 text-sm text-[#FAF9F6] focus:border-[#B8956B] focus:outline-none transition-colors placeholder:text-[#FAF9F6]/20" placeholder="+254 722 XXX XXX" />
                        </div>

                        <div>
                          <label className="block text-[0.6rem] tracking-[0.2em] text-[#B8956B]/60 uppercase mb-2">Organisation / Fund</label>
                          <input type="text" name="organization" required value={formData.organization} onChange={handleInputChange} className="w-full bg-[#0a0a0a] border border-[#B8956B]/20 px-4 py-3 text-sm text-[#FAF9F6] focus:border-[#B8956B] focus:outline-none transition-colors placeholder:text-[#FAF9F6]/20" placeholder="Insurance Co ./ Pension Fund / Family Office" />
                        </div>

                        <div>
                          <label className="block text-[0.6rem] tracking-[0.2em] text-[#B8956B]/60 uppercase mb-2">Designation</label>
                          <select name="title" required value={formData.title} onChange={handleInputChange} className="w-full bg-[#0a0a0a] border border-[#B8956B]/20 px-4 py-3 text-sm text-[#FAF9F6] focus:border-[#B8956B] focus:outline-none transition-colors appearance-none cursor-pointer" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%23B8956B' stroke-width='1.5' fill='none'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center' }}>
                            <option value="" disabled>Select your title</option>
                            {qualifications.titles.map(title => <option key={title} value={title}>{title}</option>)}
                          </select>
                        </div>

                        <div>
                          <label className="block text-[0.6rem] tracking-[0.2em] text-[#B8956B]/60 uppercase mb-2">Investable Capital</label>
                          <select name="networth" required value={formData.networth} onChange={handleInputChange} className="w-full bg-[#0a0a0a] border border-[#B8956B]/20 px-4 py-3 text-sm text-[#FAF9F6] focus:border-[#B8956B] focus:outline-none transition-colors appearance-none cursor-pointer" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%23B8956B' stroke-width='1.5' fill='none'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center' }}>
                            <option value="" disabled>Select capital bracket</option>
                            {qualifications.networth.map(nw => <option key={nw.value} value={nw.value}>{nw.label}</option>)}
                          </select>
                        </div>

                        <div>
                          <label className="block text-[0.6rem] tracking-[0.2em] text-[#B8956B]/60 uppercase mb-2">Primary Interest</label>
                          <select name="interest" required value={formData.interest} onChange={handleInputChange} className="w-full bg-[#0a0a0a] border border-[#B8956B]/20 px-4 py-3 text-sm text-[#FAF9F6] focus:border-[#B8956B] focus:outline-none transition-colors appearance-none cursor-pointer" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%23B8956B' stroke-width='1.5' fill='none'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center' }}>
                            <option value="" disabled>Select sector focus</option>
                            <option value="commercial_office">Commercial Office</option>
                            <option value="retail_mixed">Retail & Mixed-Use</option>
                            <option value="industrial">Industrial / Logistics</option>
                            <option value="hospitality">Hospitality & Leisure</option>
                            <option value="diversified">Diversified Portfolio</option>
                          </select>
                        </div>

                        {/* Consent Checkboxes */}
                        <div className="space-y-3 pt-4 border-t border-[#B8956B]/10">
                          <label className="flex items-start gap-3 cursor-pointer group">
                            <input 
                              type="checkbox" 
                              name="consentMarketing" 
                              checked={formData.consentMarketing}
                              onChange={handleInputChange}
                              className="mt-1 w-4 h-4 border border-[#B8956B]/40 bg-[#0a0a0a] rounded-none checked:bg-[#B8956B] checked:border-[#B8956B] appearance-none cursor-pointer relative after:content-['✓'] after:absolute after:text-[10px] after:text-[#0a0a0a] after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:opacity-0 checked:after:opacity-100"
                            />
                            <span className="text-[0.7rem] text-[#FAF9F6]/60 leading-relaxed group-hover:text-[#FAF9F6]/80 transition-colors">
                              I consent to receiving future Asset Briefs, market reports, and investment opportunities via email and phone from Murivest Realty.
                            </span>
                          </label>

                          <label className="flex items-start gap-3 cursor-pointer group">
                            <input 
                              type="checkbox" 
                              name="consentTerms" 
                              checked={formData.consentTerms}
                              onChange={handleInputChange}
                              className="mt-1 w-4 h-4 border border-[#B8956B]/40 bg-[#0a0a0a] rounded-none checked:bg-[#B8956B] checked:border-[#B8956B] appearance-none cursor-pointer relative after:content-['✓'] after:absolute after:text-[10px] after:text-[#0a0a0a] after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:opacity-0 checked:after:opacity-100"
                            />
                            <span className="text-[0.7rem] text-[#FAF9F6]/60 leading-relaxed group-hover:text-[#FAF9F6]/80 transition-colors">
                              I accept the <a href="/terms" className="text-[#B8956B] underline hover:text-[#FAF9F6]">Terms of Service</a> and <a href="/privacy" className="text-[#B8956B] underline hover:text-[#FAF9F6]">Privacy Policy</a>. I understand this is a restricted document for qualified investors only.
                            </span>
                          </label>
                        </div>

                        {error && <p className="text-red-400 text-xs py-2">{error}</p>}

                        <button type="submit" disabled={status === 'submitting'} className="w-full bg-[#B8956B] text-[#0a0a0a] py-4 mt-6 text-[0.7rem] tracking-[0.3em] uppercase font-serif hover:bg-[#FAF9F6] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group">
                          <span className="relative z-10">{status === 'submitting' ? 'Processing...' : 'Request Access →'}</span>
                        </button>

                        <p className="text-[0.6rem] text-[#FAF9F6]/30 text-center leading-relaxed pt-4">
                          Access is reviewed and granted at Murivest's sole discretion. Submission does not guarantee access to the brief.
                        </p>
                      </form>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#0f0f0f] border-t border-[#B8956B]/10">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px w-12 bg-[#B8956B]" />
            <span className="text-[#B8956B] text-[0.65rem] tracking-[0.4em] uppercase font-serif">Inside The Brief</span>
          </div>
          
          <h2 className="font-serif text-4xl lg:text-5xl font-light mb-16 max-w-3xl">
            Institutional-grade intelligence.<br />
            <span className="text-[#B8956B]">Structured for decision-makers.</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-px bg-[#B8956B]/10">
            {[
              { title: 'Grade A Commercial Assets', desc: 'Office, retail, and industrial assets in prime Nairobi corridors. Pre-screened for income quality, tenancy stability, and capital structure.' },
              { title: 'Verified Financial Metrics', desc: 'Net yields, cap rates, passing rents, and acquisition entry points. Every asset presented with full investment-grade disclosure.' },
              { title: 'East African Outlook', desc: 'Macroeconomic positioning across Kenya, Tanzania, and Uganda. Currency hedging strategies and regulatory environment analysis.' },
              { title: 'Due Diligence Frameworks', desc: 'Legal structure templates, lease analysis protocols, and capital expenditure requirement assessments.' },
              { title: 'Strategic Market Commentary', desc: 'Sector insights and deal thesis — why each asset has been selected and why timing is relevant to institutional mandates.' },
              { title: 'Direct Advisory Channel', desc: 'Brief recipients receive dedicated advisory contact for deal queries, site visits, and co-investment discussions.' }
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }} className="bg-[#0f0f0f] p-8 lg:p-10 border-b border-[#B8956B]/10 group hover:bg-[#111] transition-colors">
                <div className="w-8 h-8 border border-[#B8956B]/30 flex items-center justify-center mb-4 group-hover:border-[#B8956B] transition-colors">
                  <span className="text-[#B8956B] text-xs font-serif">{String(i + 1).padStart(2, '0')}</span>
                </div>
                <h3 className="font-serif text-xl text-[#FAF9F6] mb-3 group-hover:text-[#B8956B] transition-colors">{item.title}</h3>
                <p className="text-sm text-[#FAF9F6]/50 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Secretary Background Section */}
      <section className="py-24 bg-[#1B4332]/10 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/murivest_secretary.webp" alt="" fill className="object-cover opacity-20 grayscale" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent" />
        </div>
        
        <div className="max-w-6xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-[4/5] relative overflow-hidden border border-[#B8956B]/20">
                <Image src="/murivest_ceo_office.webp" alt="Murivest Advisory" fill className="object-cover grayscale-[20%] contrast-[1.05]" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/80 to-transparent" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 border border-[#B8956B]/20 -z-10" />
              <div className="absolute -top-6 -left-6 w-48 h-48 bg-[#1B4332]/20 -z-10" />
              
              <div className="absolute bottom-8 left-8 right-8">
                <p className="font-serif text-[#B8956B] text-sm tracking-widest uppercase">Murivest Private Capital</p>
                <p className="text-[#FAF9F6]/60 text-xs mt-1">Nairobi | London | Dubai</p>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="h-px w-12 bg-[#B8956B]" />
                <span className="text-[#B8956B] text-[0.65rem] tracking-[0.4em] uppercase font-serif">Our Position</span>
              </div>

              <h2 className="font-serif text-4xl lg:text-5xl font-light mb-8 leading-tight">
                We operate at the <span className="text-[#B8956B]">intersection</span> of private capital and institutional assets.
              </h2>

              <div className="space-y-6 text-[#FAF9F6]/70 leading-relaxed font-light">
                <p>Murivest Realty is a specialist real estate advisory and acquisition firm focused on institutional-grade commercial assets across Kenya and select global markets.</p>
                <p>We do not list properties publicly. We advise on capital deployment into real estate that is structured to perform — with verified income, institutional tenancy, and defensible valuation.</p>
                <p>Our clients include pension funds, insurance companies, DFIs, and family offices managing aggregate capital in excess of KES 50B.</p>
              </div>

              <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-[#B8956B]/10">
                <div className="text-center">
                  <span className="block font-serif text-2xl text-[#B8956B] mb-1">KES 12B+</span>
                  <span className="text-[0.6rem] tracking-[0.2em] text-[#FAF9F6]/40 uppercase">Assets Advised</span>
                </div>
                <div className="text-center border-x border-[#B8956B]/10">
                  <span className="block font-serif text-2xl text-[#B8956B] mb-1">98%</span>
                  <span className="text-[0.6rem] tracking-[0.2em] text-[#FAF9F6]/40 uppercase">Client Retention</span>
                </div>
                <div className="text-center">
                  <span className="block font-serif text-2xl text-[#B8956B] mb-1">15+</span>
                  <span className="text-[0.6rem] tracking-[0.2em] text-[#FAF9F6]/40 uppercase">Years Active</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#0a0a0a] border-t border-[#B8956B]/10">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <div className="w-px h-16 bg-[#B8956B]/30 mx-auto mb-8" />
          <blockquote className="font-serif text-3xl lg:text-4xl font-light italic text-[#FAF9F6]/90 leading-snug mb-8">
            "Select assets featured in past briefs achieved full occupancy prior to close and delivered consistent cashflow within year one of acquisition."
          </blockquote>
          <cite className="text-[0.7rem] tracking-[0.3em] text-[#B8956B] uppercase not-italic">
            — Murivest Private Client Intelligence, Q4 2025
          </cite>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-[#0a0a0a] via-[#1B4332]/20 to-[#0a0a0a] border-t border-[#B8956B]/10">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="font-serif text-4xl lg:text-5xl font-light mb-6">
            Secure your competitive <span className="text-[#B8956B]">advantage</span>.
          </h2>
          <p className="text-[#FAF9F6]/60 mb-12 max-w-2xl mx-auto leading-relaxed">
            The most productive real estate intelligence is never published. Join the closed network of institutional investors who act before the market moves.
          </p>
          
          <motion.button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="group relative overflow-hidden bg-[#B8956B] text-[#0a0a0a] px-12 py-5 text-[0.7rem] tracking-[0.3em] uppercase font-serif"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10 group-hover:text-[#B8956B] transition-colors duration-300">Request Access Now</span>
            <motion.div className="absolute inset-0 bg-[#FAF9F6]" initial={{ x: '-100%' }} whileHover={{ x: 0 }} transition={{ duration: 0.3 }} />
          </motion.button>

          <p className="mt-8 text-[0.6rem] text-[#FAF9F6]/30 tracking-widest uppercase">
            Limited circulation • Quarterly release • Strictly confidential
          </p>
        </div>
      </section>

      <footer className="bg-[#0a0a0a] border-t border-[#B8956B]/10 py-12">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 border border-[#B8956B]/30 flex items-center justify-center">
              <span className="font-serif text-[#B8956B] text-sm">M</span>
            </div>
            <span className="font-serif text-[#FAF9F6]/40 tracking-[0.3em] text-xs uppercase">Murivest Realty Ltd</span>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-[0.6rem] text-[#FAF9F6]/30 leading-relaxed max-w-xl">
              <strong className="text-[#B8956B]/50">Disclaimer:</strong> This is not a public offering. The Private Asset Brief is a restricted document. 
              Access is granted at Murivest's sole discretion to verified, qualified investors only. 
              Nothing herein constitutes financial advice. Past performance of featured assets does not guarantee future returns.
            </p>
          </div>

          <div className="text-[0.55rem] tracking-[0.2em] text-[#FAF9F6]/20 uppercase text-right">
            <p>Private</p>
            <p>Circulation</p>
            <p>Only</p>
          </div>
        </div>
      </footer>
    </div>
  );
}