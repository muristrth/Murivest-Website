import type { Metadata } from 'next'
import Contact from '@/components/Contact'

export const metadata: Metadata = {
  title: 'Contact | Murivest Advisory',
  description: 'Get in touch with Murivest Realty Group for general enquiries and institutional advisory mandates.',
}

export default function ContactPage() {
  return (
    <div className="bg-[#FAF9F6] pt-24">
      <Contact />
    </div>
  )
}
