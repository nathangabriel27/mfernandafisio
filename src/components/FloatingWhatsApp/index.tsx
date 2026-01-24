
import WhatsAppIcon from '../icons/WhatsAppIcon'

type FloatingWhatsAppProps = {
  href: string
}

const FloatingWhatsApp = ({ href }: FloatingWhatsAppProps) => {
  return (
    <a
      className='floating-whatsapp'
      href={href}
      target='_blank'
      rel='noreferrer'
      aria-label='Conversar no WhatsApp'
    >
      <WhatsAppIcon className='floating-whatsapp__icon' size={40} />
    </a>
  )
}

export default FloatingWhatsApp
