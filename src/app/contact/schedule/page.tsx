import type { Metadata } from 'next'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Schedule a Call | Murivest Advisory',
  description: 'Book a session with a Murivest advisor.',
}

export default function ContactSchedulePage() {
  redirect('/booking-call')
}
