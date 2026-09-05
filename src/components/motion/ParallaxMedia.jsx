import { createElement, useRef } from 'react'
import {
  motion as Motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from 'motion/react'

const SPRING = {
  stiffness: 110,
  damping: 28,
  mass: 0.35,
}

/**
 * Adds restrained, scroll-linked vertical movement to existing media.
 * The effect is removed automatically for reduced-motion users.
 */
export default function ParallaxMedia({
  as: Element = 'figure',
  children,
  className = '',
  distance = 44,
  ...props
}) {
  const containerRef = useRef(null)
  const shouldReduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })
  const offsetY = useTransform(scrollYProgress, [0, 1], [distance, -distance])
  const smoothOffsetY = useSpring(offsetY, SPRING)
  const classes = ['parallax-media', className].filter(Boolean).join(' ')

  return createElement(
    Element,
    {
      ...props,
      ref: containerRef,
      className: classes,
      'data-motion-reduced': shouldReduceMotion ? 'true' : undefined,
    },
    (
      <Motion.div
        className="parallax-media__inner"
        style={{ y: shouldReduceMotion ? 0 : smoothOffsetY }}
      >
        {children}
      </Motion.div>
    ),
  )
}
