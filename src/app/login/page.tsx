import type { Metadata } from 'next'
import Login from '../../components/Login'

export const metadata: Metadata = {
  title: 'Admin Login - Murivest Realty Group',
  description: 'Secure admin login portal for Murivest Realty Group staff and administrators.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function LoginPage() {
  return <Login />
}