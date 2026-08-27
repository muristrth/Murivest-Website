'use client';

import { useState } from 'react';

export default function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <section className="bg-[#1B4332] py-16 md:py-24">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <p className="font-serif text-xl md:text-2xl text-white mb-4">Thank you</p>
          <p className="text-[#B8956B] text-sm tracking-wide">
            You are now subscribed to the Murivest Journal.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-[#1B4332] py-16 md:py-24">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <p className="text-[10px] tracking-[0.3em] uppercase text-[#B8956B] mb-4 font-medium">
          Murivest Journal
        </p>
        <h2 className="font-serif text-3xl md:text-4xl text-white leading-tight mb-4">
          Institutional Global Property Trends &amp; Market Analysis
        </h2>
        <p className="text-white/60 text-sm md:text-base font-light mb-10 leading-relaxed">
          Stay informed with our weekly insights on the latest trends and market analysis 
          in global commercial real estate.
        </p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (email.includes('@')) setSubmitted(true);
          }}
          className="flex flex-col sm:flex-row gap-3"
        >
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            className="flex-1 min-w-[240px] bg-white/10 border border-white/20 text-white placeholder:text-white/40 px-5 py-3.5 text-sm outline-none focus:border-[#B8956B] transition-colors"
          />
          <button
            type="submit"
            className="bg-[#B8956B] hover:bg-[#A07D4F] text-white px-10 py-3.5 text-[11px] tracking-[0.15em] uppercase font-medium transition-colors duration-300 whitespace-nowrap"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
