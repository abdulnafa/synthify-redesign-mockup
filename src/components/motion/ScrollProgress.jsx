import {
  motion as Motion,
  useReducedMotion,
  useScroll,
  useSpring,
} from 'motion/react'

const SPRING = {
  stiffness: 150,
  damping: 28,
  mass: 0.25,
}

export default function ScrollProgress({ className = '' }) {
  const shouldReduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll()
  const smoothProgress = useSpring(scrollYProgress, SPRING)
  const classes = ['scroll-progress', className].filter(Boolean).join(' ')

  return (
    <Motion.div
      className={classes}
      aria-hidden="true"
      data-motion-reduced={shouldReduceMotion ? 'true' : undefined}
      style={{
        opacity: shouldReduceMotion ? 0 : 1,
        scaleX: shouldReduceMotion ? 1 : smoothProgress,
        transformOrigin: '0% 50%',
      }}
    />
  )
}
