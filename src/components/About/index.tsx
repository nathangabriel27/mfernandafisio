import type { AboutCard } from '../../types/site'
import Section from '../Section'

type AboutProps = {
  intro: string
  highlights: string[]
  cards: AboutCard[]
}

const About = ({ intro, highlights, cards }: AboutProps) => {
  return (
    <Section
      id='sobre'
      variant='b'
      title='Sobre'
      subtitle='Presença, escuta e cuidado para o seu corpo se sentir seguro.'
    >
      <div className='about-intro'>
        <p>{intro}</p>
        <div className='about-tags'>
          {highlights.map((item) => (
            <span key={item} className='tag'>
              {item}
            </span>
          ))}
        </div>
      </div>
      <div className='about-cards'>
        {cards.map((card) => (
          <article key={card.title} className='card'>
            <span className='card__icon' aria-hidden='true'>
              {card.icon}
            </span>
            <h3 className='card__title'>{card.title}</h3>
            <p className='card__text'>{card.description}</p>
          </article>
        ))}
      </div>
    </Section>
  )
}

export default About
