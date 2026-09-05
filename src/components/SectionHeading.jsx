import LineMotif from './LineMotif.jsx'

function SectionHeading({
  title,
  description,
  eyebrow,
  align = 'left',
  className = '',
  as: headingTagName = 'h2',
  id,
}) {
  const Heading = headingTagName
  const classes = ['section-heading', `section-heading--${align}`, className]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={classes}>
      <LineMotif compact className="section-heading__motif" />
      {eyebrow ? <p className="section-heading__eyebrow">{eyebrow}</p> : null}
      <Heading className="section-heading__title" id={id}>
        {title}
      </Heading>
      {description ? (
        <p className="section-heading__description">{description}</p>
      ) : null}
    </div>
  )
}

export default SectionHeading
