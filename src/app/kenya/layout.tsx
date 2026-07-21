// app/kenya/layout.tsx
import CountrySubnav from '@/components/CountrySubnav'

export default function KenyaLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CountrySubnav country="kenya" />
      {children}
    </>
  )
}