// app/united-arab-emirates/layout.tsx
import CountrySubnav from '@/components/CountrySubnav'

export default function UAELayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CountrySubnav country="united-arab-emirates" />
      {children}
    </>
  )
}