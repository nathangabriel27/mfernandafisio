type WhatsAppFormData = {
  name: string
  address: string
  service: string
  message: string
}

export const buildWhatsAppUrl = (
  whatsappNumber: string,
  formData: WhatsAppFormData,
) => {
  const address = formData.address.trim() || 'Não informado'
  const message = formData.message.trim() || 'Não informada'
  const whatsappMessage = [
    'Olá, Dra. Maria Fernanda! Gostaria de solicitar um atendimento.',
    '',
    `Nome: ${formData.name}`,
    `Serviço de interesse: ${formData.service}`,
    `Endereço: ${address}`,
    `Como posso ajudar? ${message}`,
  ].join('\n')

  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`
}
