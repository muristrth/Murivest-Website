import type { Metadata } from 'next';
import { SEO_TEMPLATES } from '../(components)/data/singapore-market-data';
import ContactForm from '../(components)/shared/ContactForm';
import ScrollReveal from '../(components)/shared/ScrollReveal';
import NewsletterSignup from '../(components)/sections/NewsletterSignup';
import { BreadcrumbSchema } from '../(components)/shared/SchemaMarkup';

export const metadata: Metadata = {
  title: SEO_TEMPLATES.contact.title,
  description: SEO_TEMPLATES.contact.description,
  keywords: SEO_TEMPLATES.contact.keywords,
};

export default function ContactPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://murivest.com' },
        { name: 'Singapore', url: 'https://murivest.com/singapore' },
        { name: 'Contact', url: 'https://murivest.com/singapore/contact' },
      ]} />

      <main>
        {/* Hero */}
        <section className="pt-32 pb-12 bg-[#1B4332]">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
            <ScrollReveal>
              <p className="text-[10px] tracking-[0.3em] uppercase text-[#B8956B] mb-4 font-medium">Contact</p>
              <h1 className="font-serif text-4xl md:text-5xl text-white leading-[1.05] mb-4">
                Speak to an <span className="italic text-[#B8956B] font-light">Advisor</span>
              </h1>
              <p className="text-base text-white/60 max-w-2xl leading-relaxed font-light">
                Schedule a private consultation with our Singapore investment advisory team. 
                Discreet service for UHNWI, family offices, and institutional investors.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-16 bg-[#F8F7F4]">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
            <ContactForm variant="full" />
          </div>
        </section>

        <NewsletterSignup />
      </main>
    </>
  );
}
