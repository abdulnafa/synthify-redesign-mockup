import { ArrowLeft, ArrowRight } from 'lucide-react'

function LineMotif({ className = '', direction = 'right', compact = false }) {
  const Arrow = direction === 'left' ? ArrowLeft : ArrowRight
  const classes = [
    'line-motif',
    `line-motif--${direction}`,
    compact ? 'line-motif--compact' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={classes} aria-hidden="true">
      <span className="line-motif__dot" />
      <span className="line-motif__line" />
      <Arrow className="line-motif__arrow" strokeWidth={1.75} />
    </div>
  )
}

export default LineMotif
