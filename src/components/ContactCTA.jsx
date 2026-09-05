import { useId } from 'react'
import ButtonLink from './ButtonLink.jsx'
import LineMotif from './LineMotif.jsx'

function ContactCTA({
  title = 'Ready to build what your team needs next?',
  description = 'Talk to a Synthify consultant about the next practical step for your people strategy.',
  primaryLabel = 'Book a consultation',
  primaryTo = '/contact',
  secondaryLabel,
  secondaryTo,
  className = '',
}) {
  const titleId = useId()
  const classes = ['contact-cta', className].filter(Boolean).join(' ')

  return (
    <section className={classes} aria-labelledby={titleId}>
      <div className="contact-cta__inner container">
        <LineMotif compact className="contact-cta__motif" />
        <div className="contact-cta__copy">
          <h2 id={titleId} className="contact-cta__title">
            {title}
          </h2>
          {description ? <p className="contact-cta__description">{description}</p> : null}
        </div>
        <div className="contact-cta__actions">
          <ButtonLink to={primaryTo}>{primaryLabel}</ButtonLink>
          {secondaryLabel && secondaryTo ? (
            <ButtonLink to={secondaryTo} variant="outline">
              {secondaryLabel}
            </ButtonLink>
          ) : null}
        </div>
      </div>
    </section>
  )
}

export default ContactCTA
