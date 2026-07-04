import type { Metadata } from 'next';
import { BreadcrumbSchema } from '../(components)/shared/SchemaMarkup';
import ScrollReveal from '../(components)/shared/ScrollReveal';

export const metadata: Metadata = {
  title: 'Privacy Policy | Murivest Singapore',
  description: 'Murivest Singapore privacy policy. How we collect, use, and protect your personal data under the Singapore Personal Data Protection Act (PDPA).',
};

export default function PrivacyPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://murivest.com' },
        { name: 'Singapore', url: 'https://murivest.com/singapore' },
        { name: 'Privacy Policy', url: 'https://murivest.com/singapore/privacy' },
      ]} />

      <main>
        {/* Hero */}
        <section className="pt-32 pb-12 bg-[#1B4332]">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
            <ScrollReveal>
              <p className="text-[10px] tracking-[0.3em] uppercase text-[#B8956B] mb-4 font-medium">Legal</p>
              <h1 className="font-serif text-4xl md:text-5xl text-white leading-[1.05]">
                Privacy Policy
              </h1>
            </ScrollReveal>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 md:py-24 bg-[#F8F7F4]">
          <div className="max-w-[800px] mx-auto px-6 md:px-12">
            <ScrollReveal>
              <div className="bg-white border border-[#E8E6E1] p-8 md:p-12 space-y-8">
                <div>
                  <p className="text-[10px] tracking-[0.2em] uppercase text-[#B8956B] mb-3 font-medium">Effective Date</p>
                  <p className="text-sm text-[#5A5A5A] font-light">This Privacy Policy is effective as of 1 January 2026 and applies to all services provided by Murivest Realty Pte Ltd in Singapore.</p>
                </div>

                <div className="h-px bg-[#E8E6E1]" />

                <div>
                  <h2 className="font-serif text-xl text-[#2C2C2C] mb-3">1. Introduction</h2>
                  <p className="text-sm text-[#5A5A5A] font-light leading-relaxed">
                    Murivest Realty Pte Ltd ("Murivest", "we", "us", or "our") respects your privacy and is committed to protecting your personal data. 
                    This Privacy Policy explains how we collect, use, disclose, and safeguard your personal data when you visit our website, 
                    use our services, or engage with our Singapore advisory team. We operate in compliance with the Singapore Personal Data Protection Act 2012 (PDPA).
                  </p>
                </div>

                <div>
                  <h2 className="font-serif text-xl text-[#2C2C2C] mb-3">2. Personal Data We Collect</h2>
                  <p className="text-sm text-[#5A5A5A] font-light leading-relaxed mb-3">
                    We may collect the following categories of personal data:
                  </p>
                  <ul className="space-y-2">
                    {[
                      'Identity Data: Name, title, date of birth, nationality, identification documents',
                      'Contact Data: Email address, telephone number, postal address',
                      'Professional Data: Company name, job title, investment mandate, AUM',
                      'Financial Data: Bank details, investment preferences, transaction history',
                      'Technical Data: IP address, browser type, device information, cookies',
                      'Usage Data: Pages visited, time spent, documents downloaded, search queries',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-[#5A5A5A] font-light">
                        <div className="w-1 h-1 rounded-full bg-[#B8956B] mt-2 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h2 className="font-serif text-xl text-[#2C2C2C] mb-3">3. How We Use Your Personal Data</h2>
                  <p className="text-sm text-[#5A5A5A] font-light leading-relaxed mb-3">
                    We use your personal data for the following purposes:
                  </p>
                  <ul className="space-y-2">
                    {[
                      'To provide our real estate advisory services and respond to inquiries',
                      'To process transactions and manage our business relationship with you',
                      'To send market reports, insights, and investment opportunities (with consent)',
                      'To comply with legal obligations, including AML/KYC requirements',
                      'To improve our website, services, and user experience',
                      'To protect our rights, property, and safety, and that of our clients',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-[#5A5A5A] font-light">
                        <div className="w-1 h-1 rounded-full bg-[#B8956B] mt-2 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h2 className="font-serif text-xl text-[#2C2C2C] mb-3">4. Disclosure of Personal Data</h2>
                  <p className="text-sm text-[#5A5A5A] font-light leading-relaxed mb-3">
                    We may disclose your personal data to:
                  </p>
                  <ul className="space-y-2">
                    {[
                      'Professional advisers including lawyers, bankers, auditors, and insurers',
                      'Regulatory authorities, government agencies, and law enforcement (where required by law)',
                      'Third-party service providers who perform services on our behalf',
                      'Counterparties and their representatives in connection with transactions',
                      'Partners in our research network (on an anonymised basis)',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-[#5A5A5A] font-light">
                        <div className="w-1 h-1 rounded-full bg-[#B8956B] mt-2 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h2 className="font-serif text-xl text-[#2C2C2C] mb-3">5. Data Security</h2>
                  <p className="text-sm text-[#5A5A5A] font-light leading-relaxed">
                    We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, 
                    alteration, disclosure, or destruction. This includes encryption, access controls, secure servers, and regular security assessments. 
                    All document downloads are watermarked and tracked to prevent unauthorised distribution.
                  </p>
                </div>

                <div>
                  <h2 className="font-serif text-xl text-[#2C2C2C] mb-3">6. Data Retention</h2>
                  <p className="text-sm text-[#5A5A5A] font-light leading-relaxed">
                    We retain your personal data for as long as necessary to fulfil the purposes for which it was collected, 
                    including for the purposes of satisfying any legal, accounting, or reporting requirements. 
                    Generally, we retain client data for 7 years after the end of our business relationship, 
                    in accordance with Singapore regulatory requirements.
                  </p>
                </div>

                <div>
                  <h2 className="font-serif text-xl text-[#2C2C2C] mb-3">7. Your Rights Under PDPA</h2>
                  <p className="text-sm text-[#5A5A5A] font-light leading-relaxed mb-3">
                    Under the Singapore PDPA, you have the right to:
                  </p>
                  <ul className="space-y-2">
                    {[
                      'Access your personal data held by us',
                      'Correct any inaccuracies in your personal data',
                      'Withdraw consent for the collection, use, or disclosure of your personal data',
                      'Request deletion of your personal data (subject to legal obligations)',
                      'Lodge a complaint with the Personal Data Protection Commission (PDPC)',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-[#5A5A5A] font-light">
                        <div className="w-1 h-1 rounded-full bg-[#B8956B] mt-2 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h2 className="font-serif text-xl text-[#2C2C2C] mb-3">8. Contact Us</h2>
                  <p className="text-sm text-[#5A5A5A] font-light leading-relaxed">
                    If you have any questions about this Privacy Policy or wish to exercise your rights, please contact our Data Protection Officer:
                  </p>
                  <div className="mt-4 space-y-2 text-sm">
                    <p className="text-[#2C2C2C]"><span className="text-[#8B8680]">Email:</span> dpo@murivest.com</p>
                    <p className="text-[#2C2C2C]"><span className="text-[#8B8680]">Address:</span> 1 Raffles Place, #24-01, Singapore 048616</p>
                    <p className="text-[#2C2C2C]"><span className="text-[#8B8680]">Phone:</span> +65 6123 4567</p>
                  </div>
                </div>

                <div className="pt-6 border-t border-[#E8E6E1]">
                  <p className="text-[11px] text-[#8B8680] font-light">
                    This Privacy Policy was last updated on 1 January 2026. We may update this policy from time to time. 
                    Any changes will be posted on this page with an updated effective date.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
    </>
  );
}
