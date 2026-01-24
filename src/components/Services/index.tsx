import type { ServiceItem } from '../../types/site'
import Section from '../Section'

type ServicesProps = {
  services: ServiceItem[]
}

const Services = ({ services }: ServicesProps) => {
  return (
    <Section
      id='servicos'
      variant='a'
      title='Nossos Serviços'
      subtitle='Técnicas que unem cuidado, bem-estar e resultados reais.'
    >
      <div className='services-grid'>
        {services.map((service) => (
          <article key={service.title} className='service-card'>
            <img
              src={service.imageSrc}
              alt={service.title}
              className='service-card__image'
            />
            <div className='service-card__content'>
              <h3 className='card__title'>{service.title}</h3>
              <p className='card__text'>{service.description}</p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}

export default Services
