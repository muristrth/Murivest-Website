// app/singapore/layout.tsx
import SingaporeHeader from './(components)/shared/SingaporeHeader'

export default function SingaporeLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SingaporeHeader />
      {children}
    </>
  )
}