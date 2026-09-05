import { forwardRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const joinClasses = (...classes) => classes.filter(Boolean).join(' ')

const ButtonLink = forwardRef(function ButtonLink(
  {
    to,
    href,
    variant = 'primary',
    children,
    className = '',
    showArrow = true,
    target,
    rel,
    ...props
  },
  ref,
) {
  const classes = joinClasses(
    'button',
    `button--${variant}`,
    'button-link',
    `button-link--${variant}`,
    className,
  )
  const content = (
    <>
      <span className="button-link__label">{children}</span>
      {showArrow ? (
        <ArrowRight className="button-link__icon" aria-hidden="true" />
      ) : null}
    </>
  )

  if (to) {
    return (
      <Link ref={ref} to={to} className={classes} {...props}>
        {content}
      </Link>
    )
  }

  if (href) {
    const safeRel = target === '_blank' ? rel || 'noreferrer noopener' : rel

    return (
      <a
        ref={ref}
        href={href}
        className={classes}
        target={target}
        rel={safeRel}
        {...props}
      >
        {content}
      </a>
    )
  }

  return (
    <button ref={ref} type="button" className={classes} {...props}>
      {content}
    </button>
  )
})

export default ButtonLink
