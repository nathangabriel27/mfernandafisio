import { useEffect, useRef, useState } from 'react'
import type { NavItem, ProfileInfo } from '../../types/site'
import { useTheme } from '../../hooks/useTheme'
import Icon from '../Icon'

type HeaderProps = {
  items: NavItem[]
  profile: ProfileInfo
  ctaLabel: string
  ctaHref: string
}

const Header = ({ items, profile, ctaLabel, ctaHref }: HeaderProps) => {
  const { isDark, toggleTheme } = useTheme()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const themeLabel = isDark ? 'Ativar tema claro' : 'Ativar tema escuro'
  const menuLabel = isMenuOpen ? 'Fechar menu' : 'Abrir menu'
  const firstLinkRef = useRef<HTMLAnchorElement | null>(null)

  useEffect(() => {
    if (typeof document === 'undefined') return

    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
      window.setTimeout(() => {
        firstLinkRef.current?.focus()
      }, 0)
      return () => {
        document.body.style.overflow = ''
      }
    }

    document.body.style.overflow = ''
  }, [isMenuOpen])

  useEffect(() => {
    if (!isMenuOpen) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isMenuOpen])

  const handleCloseMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className='site-header'>
      <div className='container header__inner'>
        <a className='brand' href='#inicio'>
          <span className='brand__name'>{profile.name}</span>
          <span className='brand__detail'>{profile.profession}</span>
          <span className='brand__detail'>{profile.crefito}</span>
        </a>
        <nav className='nav' aria-label='Navegação principal'>
          {items.map((item) => (
            <a key={item.id} href={`#${item.id}`}>
              {item.label}
            </a>
          ))}
        </nav>
        <div className='header__actions'>
          <a
            className='button button--primary button--sm header__cta'
            href={ctaHref}
            target='_blank'
            rel='noreferrer'
          >
            {ctaLabel}
          </a>
          <button
            className='theme-toggle'
            type='button'
            onClick={toggleTheme}
            aria-label={themeLabel}
            title={themeLabel}
          >
            <Icon name={isDark ? 'sun' : 'moon'} size={18} />
          </button>
          <button
            className='menu-toggle'
            type='button'
            aria-label={menuLabel}
            aria-expanded={isMenuOpen}
            aria-controls='mobile-menu'
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            <span className='sr-only'>Menu</span>
            <Icon name={isMenuOpen ? 'x' : 'menu'} size={22} />
          </button>
        </div>
      </div>
      <div
        className={`mobile-menu ${
          isMenuOpen ? 'mobile-menu--open' : 'mobile-menu--closed'
        }`}
        aria-hidden={!isMenuOpen}
      >
        <button
          className='mobile-menu__backdrop'
          type='button'
          aria-label='Fechar menu'
          onClick={handleCloseMenu}
          tabIndex={isMenuOpen ? 0 : -1}
        />
        <div
          className='mobile-menu__panel'
          role='dialog'
          aria-modal='true'
          id='mobile-menu'
        >
          <div className='mobile-menu__header'>
            <span className='mobile-menu__title'>Menu</span>
            <button
              className='mobile-menu__close'
              type='button'
              onClick={handleCloseMenu}
              aria-label='Fechar menu'
              tabIndex={isMenuOpen ? 0 : -1}
            >
              <Icon name='x' size={20} />
            </button>
          </div>
          <nav className='mobile-menu__nav' aria-label='Navegação mobile'>
            {items.map((item, index) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                ref={index === 0 ? firstLinkRef : null}
                onClick={handleCloseMenu}
                tabIndex={isMenuOpen ? 0 : -1}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a
            className='button button--primary mobile-menu__cta'
            href={ctaHref}
            target='_blank'
            rel='noreferrer'
            onClick={handleCloseMenu}
            tabIndex={isMenuOpen ? 0 : -1}
          >
            {ctaLabel}
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header
