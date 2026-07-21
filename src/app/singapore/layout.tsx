// app/singapore/layout.tsx
import CountrySubnav from '@/components/CountrySubnav'

export default function SingaporeLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CountrySubnav country="singapore" />
      {children}
    </>
  )
}