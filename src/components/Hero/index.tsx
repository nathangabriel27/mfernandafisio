import type { HeroContent } from '../../types/site'
import Section from '../Section'

type HeroProps = {
  content: HeroContent
  ctaHref: string
  secondaryHref: string
  imageSrc: string
}

const Hero = ({ content, ctaHref, secondaryHref, imageSrc }: HeroProps) => {
  return (
    <Section id='inicio' variant='a' className='hero'>
      <div className='hero-grid'>
        <div className='hero-content'>
          <span className='eyebrow eyebrow--pill'>{content.eyebrow}</span>
          <h1 className='hero-title'>{content.title}</h1>
          <p className='hero-text'>{content.description}</p>
          <div className='hero-actions'>
            <a
              className='button button--primary'
              href={ctaHref}
              target='_blank'
              rel='noreferrer'
            >
              {content.ctaPrimary}
            </a>
            <a className='button button--ghost' href={secondaryHref}>
              {content.ctaSecondary}
            </a>
          </div>
        </div>
        <div className='hero-media'>
          <div className='hero-image-card'>
            <img
              src={imageSrc}
              alt='Maria Fernanda em atendimento de fisioterapia'
              className='hero-image'
            />
          </div>
        </div>
      </div>
    </Section>
  )
}

export default Hero
