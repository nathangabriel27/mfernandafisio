import { describe, expect, it } from 'vitest'
import { buildWhatsAppUrl } from './whatsapp'

describe('buildWhatsAppUrl', () => {
  it('monta o link com todos os dados informados no formulário', () => {
    const url = buildWhatsAppUrl('5531999228607', {
      name: 'Ana Souza',
      address: 'Rua das Flores, 123, Centro',
      service: 'Fisioterapia Ortopédica',
      message: 'Estou com dor no joelho.',
    })

    expect(url).toBe(
      'https://wa.me/5531999228607?text=Ol%C3%A1%2C%20Dra.%20Maria%20Fernanda!%20Gostaria%20de%20solicitar%20um%20atendimento.%0A%0ANome%3A%20Ana%20Souza%0AServi%C3%A7o%20de%20interesse%3A%20Fisioterapia%20Ortop%C3%A9dica%0AEndere%C3%A7o%3A%20Rua%20das%20Flores%2C%20123%2C%20Centro%0AComo%20posso%20ajudar%3F%20Estou%20com%20dor%20no%20joelho.',
    )
  })

  it('identifica endereço e mensagem vazios como não informados', () => {
    const url = buildWhatsAppUrl('5531999228607', {
      name: 'Ana Souza',
      address: '',
      service: 'Massagem Relaxante',
      message: '   ',
    })

    expect(new URL(url).searchParams.get('text')).toBe(
        'Olá, Dra. Maria Fernanda! Gostaria de solicitar um atendimento.\n\n' +
        'Nome: Ana Souza\n' +
        'Serviço de interesse: Massagem Relaxante\n' +
        'Endereço: Não informado\n' +
        'Como posso ajudar? Não informada',
    )
  })
})
