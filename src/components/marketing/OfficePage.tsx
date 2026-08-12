import { MapPin, Mail, Phone, Clock } from 'lucide-react'

interface OfficePageProps {
  city: string
  country: string
  tag: string
  heading: string
  description: string
  address: string
  email: string
  phone: string
  hours: string
  focus: string[]
}

export default function OfficePage({
  city,
  country,
  tag,
  heading,
  description,
  address,
  email,
  phone,
  hours,
  focus,
}: OfficePageProps) {
  return (
    <div className="bg-[#FAF9F6]">
      <section className="bg-[#1B4332] text-white pt-36 pb-20 px-6 md:px-12 text-center">
        <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.25em] text-[#B8956B]">
          {tag}
        </span>
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight mt-6 max-w-3xl mx-auto text-balance">
          {heading}
        </h1>
        <p className="font-sans text-base md:text-lg text-white/70 leading-relaxed mt-6 max-w-2xl mx-auto text-pretty">
          {description}
        </p>
      </section>

      <section className="py-20 px-6 md:px-12 max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="font-serif text-2xl text-[#1B4332] mb-6">
            {city}, {country}
          </h2>
          <div className="space-y-5">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-[#B8956B] mt-0.5 shrink-0" aria-hidden="true" />
              <span className="font-sans text-sm text-[#1B4332]/80 leading-relaxed">{address}</span>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-[#B8956B] mt-0.5 shrink-0" aria-hidden="true" />
              <a href={`mailto:${email}`} className="font-sans text-sm text-[#1B4332]/80 hover:text-[#B8956B]">
                {email}
              </a>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-[#B8956B] mt-0.5 shrink-0" aria-hidden="true" />
              <span className="font-sans text-sm text-[#1B4332]/80">{phone}</span>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-[#B8956B] mt-0.5 shrink-0" aria-hidden="true" />
              <span className="font-sans text-sm text-[#1B4332]/80">{hours}</span>
            </div>
          </div>
        </div>

        <div>
          <h2 className="font-serif text-2xl text-[#1B4332] mb-6">Regional Focus</h2>
          <ul className="space-y-3">
            {focus.map((f) => (
              <li key={f} className="font-sans text-sm text-[#1B4332]/80 leading-relaxed border-l-2 border-[#B8956B] pl-4">
                {f}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  )
}
