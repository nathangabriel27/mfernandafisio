import type { NavItem, ContactInfo, ProfileInfo, ServiceItem } from '../../types/site'
import InstagramIcon from '../icons/InstagramIcon'
import WhatsAppIcon from '../icons/WhatsAppIcon'
import { siteUpdatedAt, siteVersion } from '../../data/site'

type FooterProps = {
  profile: ProfileInfo
  items: NavItem[]
  services: ServiceItem[]
  contact: ContactInfo
}

const Footer = ({ profile, items, services, contact }: FooterProps) => {
  return (
    <footer className='site-footer'>
      <div className='container'>
        <div className='footer-grid'>
          <div className='footer-col'>
            <h3 className='footer-title'>{profile.name}</h3>
            <p className='footer-text'>{profile.miniBio}</p>
          </div>
          <div className='footer-col'>
            <h4 className='footer-heading'>Navegação</h4>
            <ul>
              {items.map((item) => (
                <li key={item.id}>
                  <a href={`#${item.id}`}>{item.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className='footer-col'>
            <h4 className='footer-heading'>Serviços</h4>
            <ul>
              {services.map((service) => (
                <li key={service.title}>{service.title}</li>
              ))}
            </ul>
          </div>
          <div className='footer-col'>
            <h4 className='footer-heading'>Contato</h4>
            <ul>
              <li>
                <a href={contact.whatsappLink} target='_blank' rel='noreferrer'>
                  {contact.whatsappDisplay}
                </a>
              </li>
              <li>
                <a href={contact.instagramUrl} target='_blank' rel='noreferrer'>
                  {contact.instagramHandle}
                </a>
              </li>
              <li>{contact.city}</li>
            </ul>
            <div className='footer-social'>
              <a href={contact.instagramUrl} target='_blank' rel='noreferrer' aria-label='Instagram'>
                <InstagramIcon className='footer-social__icon' size={18} />
              </a>
              <a
                href={contact.whatsappLink}
                target='_blank'
                rel='noreferrer'
                aria-label='WhatsApp'
              >
                <WhatsAppIcon className='footer-social__icon' size={26} />
              </a>
            </div>
          </div>
        </div>
        <div className='footer-bottom'>
          <span>
            © 2026 {profile.name}. Todos os direitos reservados.
            <span className='footer-version'>
              Versão: {siteVersion} • Atualizado em {siteUpdatedAt}
            </span>
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
