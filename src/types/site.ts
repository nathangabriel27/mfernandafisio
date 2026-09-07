export type SectionId =
  | 'inicio'
  | 'sobre'
  | 'servicos'
  | 'depoimentos'
  | 'contato'

export type SectionVariant = 'a' | 'b' | 'c'

export type NavItem = {
  id: SectionId
  label: string
}

export type ProfileInfo = {
  name: string
  title: string
  profession: string
  crefito: string
  miniBio: string
}

export type HeroContent = {
  eyebrow: string
  title: string
  description: string
  ctaPrimary: string
  ctaSecondary: string
}

export type AboutCard = {
  title: string
  description: string
  icon: string
}

export type ServiceItem = {
  title: string
  description: string
  imageSrc: string
}

export type Testimonial = {
  quote: string
  name: string
  detail: string
}

export type ContactInfo = {
  whatsappNumber: string
  whatsappDisplay: string
  whatsappLink: string
  instagramUrl: string
  instagramHandle: string
  city: string
  hoursWeekday: string
  hoursSaturday: string
  homeCareLabel: string
}
