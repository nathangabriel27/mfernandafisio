import { useState } from 'react'
import type { ChangeEvent, FormEvent } from 'react'
import type { ContactInfo, ServiceItem } from '../../types/site'
import Section from '../Section'
import { buildWhatsAppUrl } from './whatsapp'

type ContactProps = {
  contact: ContactInfo
  services: ServiceItem[]
}

type FormState = {
  name: string
  address: string
  service: string
  message: string
}

const initialState: FormState = {
  name: '',
  address: '',
  service: '',
  message: '',
}

const Contact = ({ contact, services }: ContactProps) => {
  const [formState, setFormState] = useState<FormState>(initialState)

  const handleChange = (
    event:
      | ChangeEvent<HTMLInputElement>
      | ChangeEvent<HTMLSelectElement>
      | ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const whatsappUrl = buildWhatsAppUrl(contact.whatsappNumber, formState)
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
  }

  return (
    <Section
      id='contato'
      variant='a'
      title='Contato'
      subtitle='Agende sua avaliação e tire dúvidas sobre o melhor cuidado para você.'
      align='left'
    >
      <div className='contact-grid'>
        <div className='contact-info'>
          <div>
            <h3 className='card__title'>Fale comigo</h3>
            <p className='card__text'>Atendimento domiciliar em Belo Horizonte e região.</p>
          </div>
          <div className='contact-list'>
            <div>
              <span className='contact-label'>WhatsApp</span>
              <a href={contact.whatsappLink} target='_blank' rel='noreferrer'>
                {contact.whatsappDisplay}
              </a>
            </div>
            <div>
              <span className='contact-label'>Instagram</span>
              <a href={contact.instagramUrl} target='_blank' rel='noreferrer'>
                {contact.instagramHandle}
              </a>
            </div>
            <div>
              <span className='contact-label'>Cidade</span>
              <span>{contact.city}</span>
            </div>
            <div>
              <span className='contact-label'>Formato</span>
              <span>{contact.homeCareLabel}</span>
            </div>
          </div>
        </div>
        <form className='contact-form' onSubmit={handleSubmit}>
          <div className='form-grid'>
            <label className='form-field'>
              <span>Nome completo</span>
              <input
                type='text'
                name='name'
                value={formState.name}
                onChange={handleChange}
                placeholder='Seu nome'
                required
              />
            </label>
            <label className='form-field'>
              <span>Serviço de interesse</span>
              <select
                name='service'
                value={formState.service}
                onChange={handleChange}
                required
              >
                <option value='' disabled>
                  Selecione
                </option>
                {services.map((service) => (
                  <option key={service.title} value={service.title}>
                    {service.title}
                  </option>
                ))}
              </select>
            </label>
            <label className='form-field'>
              <span>Endereço</span>
              <input
                type='text'
                name='address'
                value={formState.address}
                onChange={handleChange}
                placeholder='Rua, número, bairro'
              />
            </label>
            <label className='form-field form-field--full'>
              <span>Mensagem</span>
              <textarea
                name='message'
                value={formState.message}
                onChange={handleChange}
                placeholder='Como posso ajudar?'
                rows={4}
              />
            </label>
          </div>
          <button className='button button--primary' type='submit'>
            Enviar mensagem
          </button>
        </form>
      </div>
    </Section>
  )
}

export default Contact
