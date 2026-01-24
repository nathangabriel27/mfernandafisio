import type {
  AboutCard,
  ContactInfo,
  HeroContent,
  NavItem,
  ProfileInfo,
  ServiceItem,
  Testimonial,
} from '../types/site'
import imageOne from '../assets/1.jpeg'
import imageTwo from '../assets/2.jpeg'
import imageThree from '../assets/3.jpeg'
import imageFour from '../assets/4.jpeg'
import imageFive from '../assets/5.png'
import heroImageSrc from '../assets/mfisio.jpeg'
import logoImage from '../assets/iIcon-logo.jpeg'

export const profileInfo: ProfileInfo = {
  name: 'Maria Fernanda',
  title: 'Maria Fernanda | Fisioterapeuta',
  city: 'Belo Horizonte - MG',
  miniBio:
    'Fisioterapia humanizada com atendimento domiciliar em Belo Horizonte.',
}

export const navItems: NavItem[] = [
  { id: 'inicio', label: 'Início' },
  { id: 'sobre', label: 'Sobre' },
  { id: 'servicos', label: 'Serviços' },
  { id: 'depoimentos', label: 'Depoimentos' },
  { id: 'contato', label: 'Contato' },
]

export const heroContent: HeroContent = {
  eyebrow: 'Atendimento domiciliar em Belo Horizonte',
  title: 'Cuidado perto de você, com conforto e resultado funcional',
  description:
    'Sessões pensadas para aliviar dores, melhorar o movimento e trazer mais bem-estar no dia a dia.',
  ctaPrimary: 'Agendar avaliação',
  ctaSecondary: 'Conheça nossos serviços',
}

export const aboutIntro =
  'Maria Fernanda é fisioterapeuta e criadora de conteúdo digital, com foco em atendimento domiciliar humanizado.'

export const aboutHighlights: string[] = [
  'Atendimento domiciliar',
  'Fisioterapia',
  'Massagem Relaxante',
  'Liberação Miofascial',
  'Drenagem Linfática',
]

export const aboutCards: AboutCard[] = [
  {
    title: 'Missão',
    description:
      'Oferecer cuidado humano e resultados funcionais, com conforto e segurança no atendimento domiciliar.',
    icon: '💚',
  },
  {
    title: 'Visão',
    description:
      'Ser referência em atendimento domiciliar e educação em saúde na região de Belo Horizonte.',
    icon: '✨',
  },
  {
    title: 'Valores',
    description:
      'Acolhimento, ética, consistência e evolução do paciente em cada etapa do cuidado.',
    icon: '🤝',
  },
]

export const services: ServiceItem[] = [
  {
    title: 'Fisioterapia',
    description:
      'Plano personalizado para reduzir dor, recuperar movimentos e melhorar a funcionalidade.',
    imageSrc: imageFive,
  },
  {
    title: 'Massagem Relaxante',
    description:
      'Toques terapêuticos para aliviar tensões, melhorar o sono e promover bem-estar.',
    imageSrc: imageTwo,
  },
  {
    title: 'Liberação Miofascial',
    description:
      'Técnicas manuais para soltar pontos de tensão e devolver mobilidade.',
    imageSrc: imageThree,
  },
  {
    title: 'Drenagem Linfática',
    description:
      'Estimula a circulação e reduz inchaços com um toque suave e eficaz.',
    imageSrc: imageOne,
  },
  {
    title: 'Avaliação Postural',
    description:
      'Avaliação funcional para identificar padrões de movimento e orientar o tratamento.',
    imageSrc: imageFour,
  },
  {
    title: 'Reabilitação e Fortalecimento',
    description:
      'Exercícios orientados para recuperar força, estabilidade e confiança no corpo.',
    imageSrc: logoImage,
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
  'Oi, Maria Fernanda! Gostaria de agendar uma avaliação.'

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

export const siteVersion = 'Versão 1.0.2'
export const siteUpdatedAt = '01/01/2026 as 15:17'
