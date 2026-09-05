import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import * as siteData from '../data/siteData.js'
import ButtonLink from './ButtonLink.jsx'

const FALLBACK_NAVIGATION = [
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Sectors', to: '/sectors' },
  { label: 'Jobs', to: '/jobs' },
  { label: 'Insights', to: '/insights' },
]

const FOCUSABLE_SELECTOR = [
  'a[href]',
  'button:not([disabled]):not([tabindex="-1"])',
  'input:not([disabled])',
  'select:not([disabled])',
  'textarea:not([disabled])',
  '[tabindex]:not([tabindex="-1"])',
].join(',')

const HEADER_SCROLL_THRESHOLD = 24

function lockPageScroll() {
  const body = document.body
  const count = Number(body.dataset.scrollLockCount || 0) + 1
  body.dataset.scrollLockCount = String(count)
  body.classList.add('is-scroll-locked')
}

function unlockPageScroll() {
  const body = document.body
  const count = Math.max(0, Number(body.dataset.scrollLockCount || 1) - 1)

  if (count === 0) {
    delete body.dataset.scrollLockCount
    body.classList.remove('is-scroll-locked')
  } else {
    body.dataset.scrollLockCount = String(count)
  }
}

function NavigationItem({ item, mobile = false, onNavigate }) {
  const label = item.label || item.name || item.title
  const destination = item.to || item.path || item.href || '/'
  const classes = mobile ? 'mobile-menu__link' : 'site-nav__link'
  const isExternal = /^(?:https?:|mailto:|tel:)/i.test(destination)

  if (isExternal) {
    return (
      <a className={classes} href={destination} onClick={onNavigate}>
        {label}
      </a>
    )
  }

  return (
    <NavLink
      className={({ isActive }) =>
        `${classes}${isActive ? ` ${classes}--active` : ''}`
      }
      to={destination}
      end={destination === '/'}
      onClick={onNavigate}
    >
      {label}
    </NavLink>
  )
}

function SiteHeader() {
  const navigation = Array.isArray(siteData.navigation)
    ? siteData.navigation
    : FALLBACK_NAVIGATION
  const brand = siteData.brand || {}
  const headerCta = siteData.headerCta || {}
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const menuButtonRef = useRef(null)
  const drawerRef = useRef(null)
  const scrollFrameRef = useRef(null)
  const previousPathRef = useRef(location.pathname)

  const closeMenu = () => setMenuOpen(false)

  useEffect(() => {
    if (previousPathRef.current !== location.pathname) {
      previousPathRef.current = location.pathname
      setMenuOpen(false)
    }
  }, [location.pathname])

  useEffect(() => {
    const updateScrolledState = () => {
      scrollFrameRef.current = null
      setIsScrolled(window.scrollY > HEADER_SCROLL_THRESHOLD)
    }

    const handleScroll = () => {
      if (scrollFrameRef.current !== null) return
      scrollFrameRef.current = window.requestAnimationFrame(updateScrolledState)
    }

    updateScrolledState()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)

      if (scrollFrameRef.current !== null) {
        window.cancelAnimationFrame(scrollFrameRef.current)
      }
    }
  }, [])

  useEffect(() => {
    if (!menuOpen) return undefined

    const previouslyFocused = document.activeElement
    const drawer = drawerRef.current
    const frame = window.requestAnimationFrame(() => {
      drawer?.querySelector('.mobile-menu__close')?.focus()
    })

    lockPageScroll()

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        setMenuOpen(false)
        return
      }

      if (event.key !== 'Tab' || !drawer) return

      const focusable = [...drawer.querySelectorAll(FOCUSABLE_SELECTOR)].filter(
        (element) => !element.hasAttribute('hidden'),
      )

      if (focusable.length === 0) {
        event.preventDefault()
        return
      }

      const first = focusable[0]
      const last = focusable[focusable.length - 1]

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      window.cancelAnimationFrame(frame)
      document.removeEventListener('keydown', handleKeyDown)
      unlockPageScroll()

      if (previouslyFocused instanceof HTMLElement) {
        previouslyFocused.focus()
      }
    }
  }, [menuOpen])

  const ctaLabel = headerCta.label || 'Book a consultation'
  const ctaTo = headerCta.to || headerCta.path || '/contact'
  const isHome = location.pathname === '/'
  const logo = isHome
    ? brand.logoDark || './assets/brand/synthify-logo.png'
    : brand.logo || './assets/brand/synthify-logo-dark.png'
  const headerClasses = [
    'site-header',
    isHome ? 'site-header--home' : 'site-header--interior',
    isScrolled ? 'site-header--scrolled' : 'site-header--at-top',
    menuOpen ? 'site-header--menu-open' : '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <>
      <header
        className={headerClasses}
        data-home={isHome ? 'true' : 'false'}
        data-scrolled={isScrolled ? 'true' : 'false'}
      >
        <div className="site-header__inner container">
        <Link className="site-header__brand" to="/" aria-label="Synthify home">
          <img className="site-header__logo" src={logo} alt="Synthify" />
        </Link>

        <nav className="site-nav" aria-label="Primary navigation">
          <ul className="site-nav__list">
            {navigation.map((item) => (
              <li className="site-nav__item" key={item.label || item.name || item.to}>
                <NavigationItem item={item} />
              </li>
            ))}
          </ul>
        </nav>

        <div className="site-header__actions">
          <ButtonLink className="site-header__cta" to={ctaTo}>
            {ctaLabel}
          </ButtonLink>
          <button
            ref={menuButtonRef}
            className="site-header__menu-toggle"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            onClick={() => setMenuOpen((current) => !current)}
          >
            {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
        </div>
      </header>

      {menuOpen
        ? createPortal(
          <div ref={drawerRef} id="mobile-navigation" className="mobile-menu">
            <button
              className="mobile-menu__backdrop"
              type="button"
              tabIndex={-1}
              aria-label="Close navigation menu"
              onClick={closeMenu}
            />
            <div className="mobile-menu__panel">
              <div className="mobile-menu__topbar">
                <span className="mobile-menu__label">Menu</span>
                <button
                  className="mobile-menu__close"
                  type="button"
                  aria-label="Close navigation menu"
                  onClick={closeMenu}
                >
                  <X aria-hidden="true" />
                </button>
              </div>
              <nav aria-label="Mobile navigation">
                <ul className="mobile-menu__list">
                  {navigation.map((item) => (
                    <li className="mobile-menu__item" key={item.label || item.name || item.to}>
                      <NavigationItem item={item} mobile onNavigate={closeMenu} />
                    </li>
                  ))}
                </ul>
              </nav>
              <ButtonLink className="mobile-menu__cta" to={ctaTo} onClick={closeMenu}>
                {ctaLabel}
              </ButtonLink>
            </div>
          </div>,
          document.body,
        )
        : null}
    </>
  )
}

export default SiteHeader
