import type { Metadata } from 'next'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Media Contact | Murivest Advisory',
  description: 'Press and media contact information for Murivest Realty Group.',
}

export default function ContactMediaPage() {
  redirect('/press')
}
