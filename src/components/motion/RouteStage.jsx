import { motion as Motion, useReducedMotion } from 'motion/react'

const ROUTE_VARIANTS = {
  initial: { opacity: 0, y: 22 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -12 },
}

const ROUTE_TRANSITION = {
  duration: 0.5,
  ease: [0.22, 1, 0.36, 1],
}

export default function RouteStage({ children, className = '', routeKey }) {
  const shouldReduceMotion = useReducedMotion()
  const classes = ['route-stage', className].filter(Boolean).join(' ')

  return (
    <Motion.div
      className={classes}
      data-route={routeKey}
      data-motion-reduced={shouldReduceMotion ? 'true' : undefined}
      variants={ROUTE_VARIANTS}
      initial={shouldReduceMotion ? false : 'initial'}
      animate="animate"
      exit={shouldReduceMotion ? undefined : 'exit'}
      transition={shouldReduceMotion ? { duration: 0 } : ROUTE_TRANSITION}
    >
      {children}
    </Motion.div>
  )
}
