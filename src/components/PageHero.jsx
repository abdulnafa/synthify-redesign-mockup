import { isValidElement } from 'react'
import ButtonLink from './ButtonLink.jsx'
import LineMotif from './LineMotif.jsx'

function HeroAction({ action, defaultVariant }) {
  if (!action) return null
  if (isValidElement(action)) return action

  const config = typeof action === 'string' ? { label: action } : action
  const { label, children, variant = defaultVariant, ...linkProps } = config

  return (
    <ButtonLink variant={variant} {...linkProps}>
      {label || children}
    </ButtonLink>
  )
}

function PageHero({
  title,
  description,
  image,
  imageAlt = '',
  primary,
  secondary,
  variant = 'split',
  children,
  className = '',
}) {
  const imageSource = typeof image === 'object' ? image?.src : image
  const resolvedImageAlt = typeof image === 'object' ? image?.alt || imageAlt : imageAlt
  const classes = ['page-hero', `page-hero--${variant}`, className]
    .filter(Boolean)
    .join(' ')

  return (
    <section className={classes}>
      <div className="page-hero__inner container">
        <div className="page-hero__content">
          <h1 className="page-hero__title">{title}</h1>
          {description ? <p className="page-hero__description">{description}</p> : null}
          {children ? <div className="page-hero__extra">{children}</div> : null}
          {primary || secondary ? (
            <div className="page-hero__actions">
              <HeroAction action={primary} defaultVariant="primary" />
              <HeroAction action={secondary} defaultVariant="outline" />
            </div>
          ) : null}
          <LineMotif className="page-hero__motif" />
        </div>
        {imageSource ? (
          <figure className="page-hero__media">
            <img
              className="page-hero__image"
              src={imageSource}
              alt={resolvedImageAlt}
              loading="eager"
              fetchPriority="high"
            />
          </figure>
        ) : null}
      </div>
    </section>
  )
}

export default PageHero
