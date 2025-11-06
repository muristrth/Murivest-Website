'use client';

import { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { Crown, Users, Globe, Building2, Shield, CheckCircle, MapPin, Phone, Mail, DollarSign, Target, Zap, Heart, Clock } from 'lucide-react';

// Define types outside the component for cleaner code organization
type FormErrors = {
  name?: string;
  email?: string;
  phone?: string;
  propertyType?: string;
};

interface FormData {
  propertyType: string;
  location: string;
  price: string;
  name: string;
  email: string;
  phone: string;
  description: string;
}

// Correctly define the functional component and place hooks inside it
const SellProperty = () => {

  // --- State Hooks (MUST be inside the component) ---
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | 'validation-error' | null>(null);
  const [errors, setErrors] = useState<FormErrors>({});
  const [formData, setFormData] = useState<FormData>({
    propertyType: '',
    location: '',
    price: '',
    name: '',
    email: '',
    phone: '',
    description: ''
  });

  // --- Effects ---
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // --- Data Arrays (Kept for completeness) ---
  const propertyCategories = [
    { id: 1, name: 'Grade A Office Buildings', icon: Building2, description: 'Premium office towers and corporate headquarters', avgPrice: '$5M - $50M', avgYield: '8-12%', features: ['International tenants', 'Modern amenities'] },
    { id: 2, name: 'Luxury Hotels & Hospitality', icon: Crown, description: 'Five-star hotels and premium hospitality assets', avgPrice: '$10M - $100M', avgYield: '12-18%', features: ['International brands', 'Conference facilities'] },
    { id: 3, name: 'Shopping Centers & Retail', icon: Target, description: 'Regional malls and premium retail destinations', avgPrice: '$3M - $30M', avgYield: '10-15%', features: ['Anchor tenants', 'High foot traffic'] },
    { id: 4, name: 'Industrial & Logistics', icon: Zap, description: 'Warehouses, distribution centers, and manufacturing', avgPrice: '$2M - $25M', avgYield: '12-20%', features: ['E-commerce growth', 'Strategic locations'] },
    { id: 5, name: 'Mixed-Use Developments', icon: Globe, description: 'Integrated commercial, residential, and retail spaces', avgPrice: '$15M - $150M', avgYield: '10-16%', features: ['Diversified income', 'Urban regeneration'] },
    { id: 6, name: 'Healthcare & Medical', icon: Heart, description: 'Private hospitals, medical centers, and clinics', avgPrice: '$5M - $40M', avgYield: '11-17%', features: ['Growing healthcare demand', 'Stable tenants'] }
  ];

  const whyChooseUs = [
    { icon: Globe, title: 'Global Investor Network', description: 'Access to over 1,000 qualified international investors actively seeking premium African assets.', stats: '45 countries represented' },
    { icon: DollarSign, title: 'Premium Valuations', description: 'Our sophisticated marketing achieves 8-15% higher sale prices than traditional agents.', stats: 'Average 12% price premium' },
    { icon: Clock, title: 'Accelerated Sales Process', description: 'Streamlined process with average sales completion in 90-120 days vs. 180+ industry standard.', stats: '60% faster sales' },
    { icon: Shield, title: 'Institutional Standards', description: 'RICS-regulated with full legal compliance, due diligence, and transaction security.', stats: '99.8% completion rate' }
  ];

  // --- Validation and Handlers ---

  const validateForm = () => {
    let newErrors: FormErrors = {};
    // Added .trim() for better validation
    if (!formData.name.trim()) newErrors.name = 'Name is required.';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email address is invalid.';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required.';
    if (!formData.propertyType) newErrors.propertyType = 'Property type is required.'; // Select default is empty string
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  // Use standard React ChangeEvent type for better compatibility
  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    // Use functional update for reliable state merging
    setFormData(prevFormData => ({ 
      ...prevFormData, 
      [name]: value 
    }));
    // Clear error for the current field as the user types
    setErrors(prevErrors => ({ 
      ...prevErrors, 
      [name as keyof FormErrors]: undefined 
    }));
  };

  interface PropertyInquiryPayload extends FormData {
    status: string;
    source: string;
  }
  
  // Use standard React FormEvent for semantic form submission
  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setSubmitStatus(null); // Clear previous status
    
    if (!validateForm()) {
      setSubmitStatus('validation-error');
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const payload: PropertyInquiryPayload = { ...formData, status: 'new', source: 'sell-property-page' };
      const response: Response = await fetch('/api/property-inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!response.ok) throw new Error('Failed to submit inquiry');
      setSubmitStatus('success');
      // Reset form data after successful submission
      setFormData({ propertyType: '', location: '', price: '', name: '', email: '', phone: '', description: '' });
      setErrors({});
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <section className="relative bg-[#0A1628] text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A1628] via-[#0F1E3A] to-[#0A1628]"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-5"></div>
        <div className="relative max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 py-22 lg:py-28">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-12">
              <Crown className="h-16 w-16 text-[#C9A052] mx-auto mb-8 opacity-90" />
            </div>
            <h1 className="text-5xl lg:text-7xl font-serif font-light text-white mb-10 tracking-tight leading-tight">
              Exceptional Properties
              <br />
              <span className="text-[#C9A052] font-light italic">Deserve Exceptional Service</span>
            </h1>
            <p className="text-xl text-slate-300 mb-16 font-light leading-loose max-w-2xl mx-auto">
              Connecting distinguished property owners with discerning international investors through bespoke advisory and unparalleled discretion.
            </p>
            <div className="inline-block border border-[#C9A052]/30 px-1 py-1">
              <div className="border border-[#C9A052]/30 px-12 py-8">
                <div className="grid grid-cols-3 gap-16 text-center">
                  <div>
                    <div className="text-3xl font-serif font-light text-[#C9A052] mb-3">$25M</div>
                    <div className="text-slate-400 text-xs uppercase tracking-widest">Transacted</div>
                  </div>
                  <div>
                    <div className="text-3xl font-serif font-light text-[#C9A052] mb-3">85</div>
                    <div className="text-slate-400 text-xs uppercase tracking-widest">Properties</div>
                  </div>
                  <div>
                    <div className="text-3xl font-serif font-light text-[#C9A052] mb-3">4</div>
                    <div className="text-slate-400 text-xs uppercase tracking-widest">Countries</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-22 bg-white">
        <div className="max-w-3xl mx-auto px-8 sm:px-12">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-serif font-light text-[#0A1628] mb-8 tracking-tight">Begin Your Journey</h2>
            <div className="w-24 h-px bg-[#C9A052] mx-auto mb-8"></div>
            <p className="text-lg text-slate-600 font-light leading-relaxed">Share your details for a confidential consultation with our senior advisors.</p>
          </div>
          {/* Changed to a semantic <form> element and applied onSubmit handler */}
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <label className="block text-sm text-slate-600 mb-3 uppercase tracking-widest" htmlFor="name">Full Name *</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} className={`w-full px-0 py-4 bg-transparent border-0 border-b-2 text-[#0A1628] placeholder-slate-400 focus:outline-none focus:border-[#C9A052] transition-colors ${errors.name ? 'border-red-400' : 'border-slate-200'}`} placeholder="Enter your name" />
                {errors.name && <p className="text-red-500 text-sm mt-2">{errors.name}</p>}
              </div>
              <div>
                <label className="block text-sm text-slate-600 mb-3 uppercase tracking-widest" htmlFor="email">Email Address *</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} className={`w-full px-0 py-4 bg-transparent border-0 border-b-2 text-[#0A1628] placeholder-slate-400 focus:outline-none focus:border-[#C9A052] transition-colors ${errors.email ? 'border-red-400' : 'border-slate-200'}`} placeholder="your@email.com" />
                {errors.email && <p className="text-red-500 text-sm mt-2">{errors.email}</p>}
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <label className="block text-sm text-slate-600 mb-3 uppercase tracking-widest" htmlFor="phone">Telephone *</label>
                <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleInputChange} className={`w-full px-0 py-4 bg-transparent border-0 border-b-2 text-[#0A1628] placeholder-slate-400 focus:outline-none focus:border-[#C9A052] transition-colors ${errors.phone ? 'border-red-400' : 'border-slate-200'}`} placeholder="+000 000 000 000" />
                {errors.phone && <p className="text-red-500 text-sm mt-2">{errors.phone}</p>}
              </div>
              <div>
                <label className="block text-sm text-slate-600 mb-3 uppercase tracking-widest" htmlFor="propertyType">Property Type *</label>
                <select id="propertyType" name="propertyType" value={formData.propertyType} onChange={handleInputChange} className={`w-full px-0 py-4 bg-transparent border-0 border-b-2 text-[#0A1628] focus:outline-none focus:border-[#C9A052] transition-colors appearance-none ${errors.propertyType ? 'border-red-400' : 'border-slate-200'}`}>
                  <option value="">Select type</option>
                  <option value="office">Office Building</option>
                  <option value="hotel">Hotel & Hospitality</option>
                  <option value="retail">Retail Complex</option>
                  <option value="industrial">Industrial & Logistics</option>
                  <option value="mixed">Mixed-Use Development</option>
                  <option value="healthcare">Healthcare Facility</option>
                </select>
                {errors.propertyType && <p className="text-red-500 text-sm mt-2">{errors.propertyType}</p>}
              </div>
            </div>
            <div>
              <label className="block text-sm text-slate-600 mb-3 uppercase tracking-widest" htmlFor="location">Property Location</label>
              <input type="text" id="location" name="location" value={formData.location} onChange={handleInputChange} className="w-full px-0 py-4 bg-transparent border-0 border-b-2 border-slate-200 text-[#0A1628] placeholder-slate-400 focus:outline-none focus:border-[#C9A052] transition-colors" placeholder="City, Country" />
            </div>
            <div>
              <label className="block text-sm text-slate-600 mb-3 uppercase tracking-widest" htmlFor="price">Expected Valuation (Optional)</label>
              <input type="text" id="price" name="price" value={formData.price} onChange={handleInputChange} className="w-full px-0 py-4 bg-transparent border-0 border-b-2 border-slate-200 text-[#0A1628] placeholder-slate-400 focus:outline-none focus:border-[#C9A052] transition-colors" placeholder="USD $" />
            </div>
            <div>
              <label className="block text-sm text-slate-600 mb-3 uppercase tracking-widest" htmlFor="description">Property Details</label>
              <textarea id="description" name="description" value={formData.description} onChange={handleInputChange} rows={4} className="w-full px-0 py-4 bg-transparent border-0 border-b-2 border-slate-200 text-[#0A1628] placeholder-slate-400 focus:outline-none focus:border-[#C9A052] transition-colors resize-none" placeholder="Key features, size, current tenancy..."></textarea>
            </div>
            <div className="pt-12 text-center">
              {/* Changed button type to submit and removed onClick for semantic form submission */}
              <button type="submit" disabled={isSubmitting} className="inline-block bg-[#0A1628] hover:bg-[#C9A052] text-white px-16 py-5 text-sm uppercase tracking-widest font-light transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed">{isSubmitting ? 'Submitting...' : 'Submit Inquiry'}</button>
              {submitStatus === 'success' && <p className="text-emerald-600 text-center mt-8 flex items-center justify-center"><CheckCircle className="h-5 w-5 mr-2" />Thank you. We will be in touch shortly.</p>}
              {submitStatus === 'error' && <p className="text-red-500 text-center mt-8">An error occurred. Please contact us directly.</p>}
              {submitStatus === 'validation-error' && <p className="text-red-500 text-center mt-8">Please complete all required fields.</p>}
              <p className="text-slate-500 text-sm mt-8 font-light">All inquiries are treated with the utmost confidentiality</p>
            </div>
          </form>
        </div>
      </section>

      <section className="py-32 bg-slate-50">
        <div className="max-w-6xl mx-auto px-8 sm:px-12">
          <div className="text-center mb-24">
            <h2 className="text-4xl lg:text-5xl font-serif font-light text-[#0A1628] mb-8 tracking-tight">The Difference</h2>
            <div className="w-24 h-px bg-[#C9A052] mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-24">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="text-center">
                <div className="mb-8"><item.icon className="h-12 w-12 text-[#C9A052] mx-auto opacity-80" /></div>
                <h3 className="text-xl font-serif font-light text-[#0A1628] mb-6">{item.title}</h3>
                <p className="text-slate-600 font-light leading-loose mb-6">{item.description}</p>
                <div className="text-[#C9A052] text-sm uppercase tracking-widest">{item.stats}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-white">
        <div className="max-w-6xl mx-auto px-8 sm:px-12">
          <div className="text-center mb-24">
            <h2 className="text-4xl lg:text-5xl font-serif font-light text-[#0A1628] mb-8 tracking-tight">Asset Classes</h2>
            <div className="w-24 h-px bg-[#C9A052] mx-auto mb-12"></div>
            <p className="text-lg text-slate-600 font-light leading-relaxed max-w-2xl mx-auto">Each property category receives specialized attention from advisors with deep sector expertise and established investor relationships.</p>
          </div>
          <div className="space-y-12">
            {propertyCategories.map((category) => (
              <div key={category.id} className="border-b border-slate-200 pb-12 last:border-0">
                <div className="grid md:grid-cols-3 gap-12 items-start">
                  <div>
                    <div className="flex items-center mb-4">
                      <category.icon className="h-8 w-8 text-[#C9A052] mr-4 opacity-80" />
                      <h3 className="text-xl font-serif font-light text-[#0A1628]">{category.name}</h3>
                    </div>
                    <p className="text-slate-600 font-light leading-relaxed">{category.description}</p>
                  </div>
                  <div className="space-y-3">
                    {category.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start text-slate-600 font-light"><span className="text-[#C9A052] mr-3 mt-1">•</span>{feature}</div>
                    ))}
                  </div>
                  <div className="text-right space-y-4">
                    <div>
                      <div className="text-sm text-slate-500 uppercase tracking-widest mb-2">Valuation Range</div>
                      <div className="text-lg font-serif text-[#0A1628]">{category.avgPrice}</div>
                    </div>
                    <div>
                      <div className="text-sm text-slate-500 uppercase tracking-widest mb-2">Expected Yield</div>
                      <div className="text-lg font-serif text-[#C9A052]">{category.avgYield}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-slate-50">
        <div className="max-w-5xl mx-auto px-8 sm:px-12">
          <div className="text-center mb-24">
            <h2 className="text-4xl lg:text-5xl font-serif font-light text-[#0A1628] mb-8 tracking-tight">Our Approach</h2>
            <div className="w-24 h-px bg-[#C9A052] mx-auto"></div>
          </div>
          <div className="space-y-20">
            {[
              { step: 'I', title: 'Private Consultation', description: 'A confidential discussion with our senior advisors to understand your objectives, timeline, and property particulars.' },
              { step: 'II', title: 'Bespoke Valuation', description: 'RICS-certified assessment with comprehensive market analysis and positioning strategy for optimal investor appeal.' },
              { step: 'III', title: 'Discreet Marketing', description: 'Selective presentation to pre-qualified international investors through our exclusive network and private channels.' },
              { step: 'IV', title: 'Expert Negotiation', description: 'Strategic guidance through offer evaluation, due diligence coordination, and transaction completion.' }
            ].map((process, index) => (
              <div key={index} className="grid md:grid-cols-12 gap-12 items-start">
                <div className="md:col-span-2 text-center md:text-right">
                  <div className="inline-block w-16 h-16 border-2 border-[#C9A052] flex items-center justify-center"><span className="text-2xl font-serif text-[#C9A052]">{process.step}</span></div>
                </div>
                <div className="md:col-span-10">
                  <h3 className="text-2xl font-serif font-light text-[#0A1628] mb-4">{process.title}</h3>
                  <p className="text-slate-600 font-light leading-loose text-lg">{process.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-white">
        <div className="max-w-6xl mx-auto px-8 sm:px-12">
          <div className="text-center mb-24">
            <h2 className="text-4xl lg:text-5xl font-serif font-light text-[#0A1628] mb-8 tracking-tight">Recent Transactions</h2>
            <div className="w-24 h-px bg-[#C9A052] mx-auto mb-12"></div>
            <p className="text-lg text-slate-600 font-light leading-relaxed max-w-2xl mx-auto">A selection of successfully completed transactions demonstrating our commitment to exceptional outcomes.</p>
          </div>
          <div className="space-y-16">
            {[
              { title: 'Premier CBD Office Tower', location: 'Nairobi', salePrice: '$45.2M', premium: '15% premium', timeframe: '75 days', buyer: 'European Institution' },
              { title: 'Coastal Luxury Resort', location: 'Mombasa', salePrice: '$28.7M', premium: '12% premium', timeframe: '90 days', buyer: 'Middle Eastern Fund' },
              { title: 'Regional Retail Complex', location: 'Kisumu', salePrice: '$18.5M', premium: '8% premium', timeframe: '105 days', buyer: 'South African REIT' }
            ].map((story, index) => (
              <div key={index} className="border-t border-slate-200 pt-12 first:border-0 first:pt-0">
                <div className="grid md:grid-cols-2 gap-12">
                  <div>
                    <h3 className="text-2xl font-serif font-light text-[#0A1628] mb-3">{story.title}</h3>
                    <div className="flex items-center text-slate-600 mb-8"><MapPin className="h-4 w-4 mr-2 text-[#C9A052]" /><span className="font-light">{story.location}</span></div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center border-b border-slate-100 pb-3"><span className="text-slate-600 font-light uppercase tracking-widest text-sm">Sale Price</span><span className="text-xl font-serif text-[#0A1628]">{story.salePrice}</span></div>
                    <div className="flex justify-between items-center border-b border-slate-100 pb-3"><span className="text-slate-600 font-light uppercase tracking-widest text-sm">Achievement</span><span className="text-[#C9A052] font-light">{story.premium}</span></div>
                    <div className="flex justify-between items-center border-b border-slate-100 pb-3"><span className="text-slate-600 font-light uppercase tracking-widest text-sm">Completion</span><span className="text-slate-600 font-light">{story.timeframe}</span></div>
                    <div className="flex justify-between items-center"><span className="text-slate-600 font-light uppercase tracking-widest text-sm">Acquired By</span><span className="text-slate-600 font-light">{story.buyer}</span></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0A1628] text-white py-32">
        <div className="max-w-4xl mx-auto px-8 sm:px-12 text-center">
          <Crown className="h-16 w-16 text-[#C9A052] mx-auto mb-12 opacity-90" />
          <h2 className="text-4xl lg:text-5xl font-serif font-light mb-8 tracking-tight leading-tight">Begin the Conversation</h2>
          <div className="w-24 h-px bg-[#C9A052] mx-auto mb-12"></div>
          <p className="text-xl text-slate-300 mb-16 font-light leading-loose max-w-2xl mx-auto">Distinguished properties deserve a distinguished approach. Contact our senior advisors for a private consultation.</p>
          <div className="space-y-6 mb-16">
            <div className="flex items-center justify-center text-slate-300 font-light"><Phone className="h-5 w-5 mr-3 text-[#C9A052]" /><span>+254 (729) 170 156</span></div>
            <div className="flex items-center justify-center text-slate-300 font-light"><Mail className="h-5 w-5 mr-3 text-[#C9A052]" /><span>investments@murivest.co.ke</span></div>
          </div>
          <div className="text-slate-500 text-sm uppercase tracking-widest">All consultations conducted in strict confidence</div>
        </div>
      </section>
    </div>
  );
};

export default SellProperty;