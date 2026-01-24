import type { Testimonial } from '../../types/site'
import Section from '../Section'

type TestimonialsProps = {
  testimonials: Testimonial[]
}

const Testimonials = ({ testimonials }: TestimonialsProps) => {
  return (
    <Section
      id='depoimentos'
      variant='b'
      title='O que dizem nossos pacientes'
      subtitle='Cuidado que deixa marcas positivas e resultados percebidos no dia a dia.'
    >
      <div className='testimonials-grid'>
        {testimonials.map((item) => (
          <article key={item.name} className='card testimonial-card'>
            <div className='testimonial-stars' aria-hidden='true'>
              {'★★★★★'}
            </div>
            <p className='card__text'>“{item.quote}”</p>
            <div className='testimonial-meta'>
              <strong>{item.name}</strong>
              <span>{item.detail}</span>
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}

export default Testimonials
