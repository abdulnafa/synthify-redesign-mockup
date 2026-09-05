import { motion, useReducedMotion } from 'motion/react'

const MOTION_TEXT_ELEMENTS = {
  div: motion.div,
  h1: motion.h1,
  h2: motion.h2,
  h3: motion.h3,
  h4: motion.h4,
  p: motion.p,
  span: motion.span,
}

const PREMIUM_EASE = [0.22, 1, 0.36, 1]
const MASK_STYLE = { display: 'block', overflow: 'hidden' }
const LINE_STYLE = { display: 'block' }

function normalizeLines(lines, children) {
  const content = lines ?? children

  if (Array.isArray(content)) return content
  if (typeof content === 'string') return content.split('\n')
  return [content]
}

/**
 * Renders each supplied line through an overflow mask. Pass an array to
 * `lines` when exact editorial line breaks are important.
 */
export default function KineticText({
  as = 'span',
  children,
  lines,
  className = '',
  lineClassName = '',
  delay = 0,
  stagger = 0.1,
  duration = 0.82,
  once = true,
  amount = 0.45,
  ...props
}) {
  const shouldReduceMotion = useReducedMotion()
  const MotionElement = MOTION_TEXT_ELEMENTS[as] || motion.span
  const resolvedLines = normalizeLines(lines, children)
  const classes = ['kinetic-text', className].filter(Boolean).join(' ')
  const maskClasses = ['kinetic-line', lineClassName].filter(Boolean).join(' ')

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        delayChildren: delay,
        staggerChildren: stagger,
      },
    },
  }
  const lineVariants = {
    hidden: { opacity: 0, y: '112%', rotate: 1.5 },
    visible: {
      opacity: 1,
      y: '0%',
      rotate: 0,
      transition: { duration, ease: PREMIUM_EASE },
    },
  }

  return (
    <MotionElement
      {...props}
      className={classes}
      variants={containerVariants}
      initial={shouldReduceMotion ? false : 'hidden'}
      whileInView={shouldReduceMotion ? undefined : 'visible'}
      viewport={{ once, amount }}
      data-motion-reduced={shouldReduceMotion ? 'true' : undefined}
    >
      {resolvedLines.map((line, index) => (
        <span className={maskClasses} style={MASK_STYLE} key={index}>
          <motion.span
            className="kinetic-line__inner"
            style={LINE_STYLE}
            variants={lineVariants}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </MotionElement>
  )
}

export const MaskedLines = KineticText

