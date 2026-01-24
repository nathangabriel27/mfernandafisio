import type { ReactNode } from 'react'
import type { SectionId, SectionVariant } from '../../types/site'

type SectionProps = {
  id: SectionId
  variant?: SectionVariant
  eyebrow?: string
  title?: string
  subtitle?: string
  titleAs?: 'h1' | 'h2'
  align?: 'center' | 'left'
  className?: string
  children: ReactNode
}

const Section = ({
  id,
  variant = 'a',
  eyebrow,
  title,
  subtitle,
  titleAs = 'h2',
  align = 'center',
  className,
  children,
}: SectionProps) => {
  const TitleTag = titleAs
  const classes = ['section', `section--${variant}`, className]
    .filter(Boolean)
    .join(' ')
  const headerClass = [
    'section__header',
    align === 'left' ? 'section__header--left' : null,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <section id={id} className={classes}>
      <div className='container'>
        {(eyebrow || title || subtitle) && (
          <div className={headerClass}>
            {eyebrow ? <span className='eyebrow'>{eyebrow}</span> : null}
            {title ? <TitleTag className='section__title'>{title}</TitleTag> : null}
            {subtitle ? <p className='section__subtitle'>{subtitle}</p> : null}
          </div>
        )}
        {children}
      </div>
    </section>
  )
}

export default Section
