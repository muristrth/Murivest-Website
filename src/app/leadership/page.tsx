import type { Metadata } from 'next'
import Team from '@/components/Team'

export const metadata: Metadata = {
  title: 'Leadership | Murivest Advisory',
  description: 'Meet the executive leadership directing Murivest Realty Group.',
}

const executiveLeadership = [
  {
    id: '1',
    name: 'Mark Muriithi',
    title: 'Chief Executive Officer & Founder',
    bio: 'Over two decades of experience in East African commercial real estate. Former Managing Director at a leading property consultancy, with $500M+ in executed transactions.',
    image: '/CEO.Founder.webp',
    linkedin: 'https://www.linkedin.com/in/mark-muriithi-343365215/',
    email: 'mark.muriithi@murivest.com',
  },
  {
    id: '2',
    name: 'Dr. Samuel Ochieng',
    title: 'Chief Investment Officer',
    bio: 'PhD Finance, London School of Economics. CFA Charterholder with 15+ years in African capital markets and real estate investment structuring.',
    image: '/p2/profile-placeholder.webp',
    linkedin: '#',
    email: 'samuel@murivest.com',
  },
  {
    id: '3',
    name: 'Michael Chang',
    title: 'Head of Asset Management',
    bio: 'MSc Real Estate, University of Reading. RICS Member with 12+ years managing institutional portfolios exceeding $200M across East Africa.',
    image: '/p2/profile-placeholder.webp',
    linkedin: '#',
    email: 'michael@murivest.com',
  },
]

export default function LeadershipPage() {
  return (
    <div className="bg-[#FAF9F6]">
      <section className="bg-[#1B4332] text-white pt-36 pb-20 px-6 md:px-12 text-center">
        <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.25em] text-[#B8956B]">
          About — Leadership
        </span>
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight mt-6 max-w-3xl mx-auto text-balance">
          Executive Leadership
        </h1>
        <p className="font-sans text-base md:text-lg text-white/70 leading-relaxed mt-6 max-w-2xl mx-auto text-pretty">
          The executives directing Murivest&apos;s mandate strategy, underwriting discipline, and market coverage. For the full advisory team, see our People page.
        </p>
      </section>
      <Team members={executiveLeadership} />
    </div>
  )
}
