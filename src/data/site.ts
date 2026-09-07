import type {
  AboutCard,
  ContactInfo,
  HeroContent,
  NavItem,
  ProfileInfo,
  ServiceItem,
  Testimonial,
} from '../types/site'
import imageFour from '../assets/4.jpeg'
import imageSix from '../assets/6.jpg'
import imageSeven from '../assets/7.jpg'
import imageEight from '../assets/8.png'
import heroImageSrc from '../assets/SRAH1127.jpg'
import packageJson from '../../package.json'

export const profileInfo: ProfileInfo = {
  name: 'Dra. Maria Fernanda',
  title: 'Dra. Maria Fernanda | Fisioterapeuta',
  profession: 'Fisioterapeuta',
  crefito: 'CREFITO 459506-F',
  miniBio: 'Atendimento domiciliar em Belo Horizonte e região.\nA clínica vai até você!',
}

export const navItems: NavItem[] = [
  { id: 'inicio', label: 'Início' },
  { id: 'sobre', label: 'Sobre' },
  { id: 'servicos', label: 'Serviços' },
/*   { id: 'depoimentos', label: 'Depoimentos' }, */
  { id: 'contato', label: 'Contato' },
]

export const heroContent: HeroContent = {
  eyebrow: 'Atendimento domiciliar em Belo Horizonte e região',
  title: 'Cuidado que vai até você.',
  description: 'Atendimentos personalizados para cada paciente, garantindo cuidado humanizado e resultados eficazes.',
  ctaPrimary: 'Agendar avaliação',
  ctaSecondary: 'Conheça nossos serviços',
}

export const aboutIntro =
  'Mais do que tratar uma dor ou limitação, meu objetivo é ajudar você ou o seu familiar a recuperar movimentos, autonomia, segurança e confiança para realizar as atividades do dia a dia.'

export const aboutHighlights: string[] = [
  'Atendimento domiciliar',
  'Fisioterapia ortopédica',
  'Fisioterapia geriátrica',
  'Liberação Miofascial',
  'Massagem Relaxante',
]

export const aboutCards: AboutCard[] = [
  {
    title: 'Missão',
    description:
      'Promover saúde, movimento e autonomia por meio de um atendimento fisioterapêutico, respeitando as necessidades e objetivos de cada paciente.',
    icon: '💚',
  },
  {
    title: 'Visão',
    description:
      'Ser referência em fisioterapia domiciliar em Belo Horizonte, reconhecida pela qualidade do atendimento, cuidado humanizado e compromisso com a evolução de cada paciente.',
    icon: '✨',
  },
  {
    title: 'Valores',
    description:
      'Humanização • Ética • Individualidade • Segurança • Acolhimento • Evolução',
    icon: '🤝',
  },
]

export const services: ServiceItem[] = [
  {
    title: 'Fisioterapia Ortopédica',
    description:
      'Cuidado especializado na prevenção de lesões, redução de dores e recuperação dos movimentos',
    imageSrc: imageSeven,
  },
  {
    title: 'Fisioterapia Geriátrica',
    description:
      'Tratamento individualizado para promover força, equilíbrio, mobilidade e independência, contribuindo para um envelhecimento mais ativo, seguro e com qualidade de vida.',
    imageSrc: imageSix,
  },
  {
    title: 'Massagem Relaxante',
    description:
      'Técnicas manuais para o alívio de tensões musculares, redução do estresse e promoção de uma sensação de relaxamento e bem-estar.',
    imageSrc: imageEight,
  },
  {
    title: 'Liberação Miofascial',
    description:
      'Técnicas manuais direcionadas para reduzir tensões musculares, melhorar a mobilidade e favorecer movimentos mais livres.',
    imageSrc: imageFour,
  },
]

export const testimonials: Testimonial[] = [
  {
    quote:
      'Senti alívio já nas primeiras sessões. O atendimento em casa tornou tudo mais fácil e confortável.',
    name: 'Paciente A',
    detail: 'Atendimento domiciliar',
  },
  {
    quote:
      'Profissional atenciosa, explicou cada etapa do tratamento e me deixou muito segura.',
    name: 'Paciente B',
    detail: 'Fisioterapia funcional',
  },
  {
    quote:
      'A massagem relaxante ajudou demais com minhas tensões. Recomendo de olhos fechados.',
    name: 'Paciente C',
    detail: 'Massagem terapêutica',
  },
]

const whatsappMessage =
  'Oi, Dra. Maria Fernanda! Gostaria de agendar uma avaliação.'

export const contactInfo: ContactInfo = {
  whatsappNumber: '5531999228607',
  whatsappDisplay: '31 99922-8607',
  whatsappLink: `https://wa.me/5531999228607?text=${encodeURIComponent(whatsappMessage)}`,
  instagramUrl: 'https://www.instagram.com/mfernanda.fisio/',
  instagramHandle: '@mfernanda.fisio',
  city: 'Belo Horizonte - MG',
  hoursWeekday: 'Seg a Sex: 8h às 19h',
  hoursSaturday: 'Sáb: 8h às 12h',
  homeCareLabel: 'Atendimento domiciliar',
}

export const heroImage = heroImageSrc

const envVersion = import.meta.env.VITE_SITE_VERSION
const envUpdatedAt = import.meta.env.VITE_SITE_UPDATED_AT

export const siteVersion = envVersion || packageJson.version
export const siteUpdatedAt = envUpdatedAt || '—'
