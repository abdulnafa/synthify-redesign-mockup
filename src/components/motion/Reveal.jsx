import { motion, useReducedMotion } from 'motion/react'

const MOTION_ELEMENTS = {
  article: motion.article,
  aside: motion.aside,
  div: motion.div,
  figure: motion.figure,
  footer: motion.footer,
  h1: motion.h1,
  h2: motion.h2,
  h3: motion.h3,
  h4: motion.h4,
  header: motion.header,
  li: motion.li,
  main: motion.main,
  nav: motion.nav,
  ol: motion.ol,
  p: motion.p,
  section: motion.section,
  span: motion.span,
  ul: motion.ul,
}

const PREMIUM_EASE = [0.22, 1, 0.36, 1]

function getDirectionalOffset(direction, distance) {
  switch (direction) {
    case 'down':
      return { y: -distance }
    case 'left':
      return { x: distance }
    case 'right':
      return { x: -distance }
    case 'none':
      return {}
    case 'up':
    default:
      return { y: distance }
  }
}

/**
 * Reveals content when it enters the viewport. The wrapper element can be
 * selected with `as` so lists and document landmarks remain semantic.
 */
export default function Reveal({
  as = 'div',
  children,
  className = '',
  delay = 0,
  direction = 'up',
  distance = 34,
  duration = 0.72,
  once = true,
  amount = 0.2,
  margin = '0px 0px -8% 0px',
  ...props
}) {
  const shouldReduceMotion = useReducedMotion()
  const MotionElement = MOTION_ELEMENTS[as] || motion.div
  const hiddenOffset = getDirectionalOffset(direction, distance)
  const classes = ['reveal', className].filter(Boolean).join(' ')

  return (
    <MotionElement
      {...props}
      className={classes}
      initial={shouldReduceMotion ? false : { opacity: 0, ...hiddenOffset }}
      whileInView={
        shouldReduceMotion
          ? undefined
          : { opacity: 1, x: 0, y: 0 }
      }
      viewport={{ once, amount, margin }}
      transition={{ duration, delay, ease: PREMIUM_EASE }}
      data-motion-reduced={shouldReduceMotion ? 'true' : undefined}
    >
      {children}
    </MotionElement>
  )
}
