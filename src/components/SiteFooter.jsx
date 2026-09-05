import { Link } from 'react-router-dom'
import { Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react'
import * as siteData from '../data/siteData.js'

const FALLBACK_FOOTER_GROUPS = [
  {
    title: 'Company',
    links: [
      { label: 'About', to: '/about' },
      { label: 'Team', to: '/team' },
      { label: 'Contact', to: '/contact' },
    ],
  },
  {
    title: 'Solutions',
    links: [
      { label: 'Services', to: '/services' },
      { label: 'Sectors', to: '/sectors' },
      { label: 'Jobs', to: '/jobs' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Insights', to: '/insights' },
      { label: 'FAQs', to: '/faq' },
      { label: 'Privacy', to: '/privacy' },
      { label: 'Terms', to: '/terms' },
    ],
  },
]

const FALLBACK_CONTACT = {
  location: 'Dubai, UAE',
  email: 'info@synthify.ae',
  phone: '+971 56 196 2029',
}

const FALLBACK_SOCIALS = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/synthify-hr/' },
  { label: 'Instagram', href: 'https://www.instagram.com/synthify.ae/' },
]

function normalizeFooterGroups(groups) {
  if (Array.isArray(groups)) return groups

  if (groups && typeof groups === 'object') {
    return Object.entries(groups).map(([title, links]) => ({ title, links }))
  }

  return FALLBACK_FOOTER_GROUPS
}

function FooterLink({ link }) {
  if (typeof link === 'string') return <span>{link}</span>

  const label = link.label || link.name || link.title
  const destination = link.to || link.path || link.href || '/'
  const isExternal = /^(?:https?:|mailto:|tel:)/i.test(destination)

  if (isExternal) {
    const opensNewTab = /^https?:/i.test(destination)

    return (
      <a
        href={destination}
        target={opensNewTab ? '_blank' : undefined}
        rel={opensNewTab ? 'noreferrer noopener' : undefined}
      >
        {label}
      </a>
    )
  }

  return <Link to={destination}>{label}</Link>
}

function SocialIcon({ label }) {
  if (/instagram/i.test(label)) return <Instagram aria-hidden="true" />
  return <Linkedin aria-hidden="true" />
}

function SiteFooter() {
  const contact = { ...FALLBACK_CONTACT, ...(siteData.contactInfo || {}) }
  const groups = normalizeFooterGroups(siteData.footerGroups)
  const socials = Array.isArray(siteData.socialLinks)
    ? siteData.socialLinks
    : FALLBACK_SOCIALS
  const brand = siteData.brand || {}
  const email = contact.email || FALLBACK_CONTACT.email
  const phone = contact.phone || FALLBACK_CONTACT.phone
  const phoneHref = contact.phoneHref || `tel:${phone.replace(/[^+\d]/g, '')}`
  const logo = brand.logoDark || brand.footerLogo || './assets/brand/synthify-logo.png'
  const year = siteData.copyrightYear || new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="site-footer__inner container">
        <div className="site-footer__brand-column">
          <Link className="site-footer__brand" to="/" aria-label="Synthify home">
            <img className="site-footer__logo" src={logo} alt="Synthify" loading="lazy" />
          </Link>

          <address className="site-footer__contact">
            {contact.location ? (
              <span className="site-footer__contact-item">
                <MapPin aria-hidden="true" />
                <span>{contact.location}</span>
              </span>
            ) : null}
            <a
              className="site-footer__contact-item"
              href={contact.emailHref || `mailto:${email}`}
            >
              <Mail aria-hidden="true" />
              <span>{email}</span>
            </a>
            <a className="site-footer__contact-item" href={phoneHref}>
              <Phone aria-hidden="true" />
              <span>{phone}</span>
            </a>
          </address>

          <ul className="site-footer__socials" aria-label="Social media">
            {socials.map((social) => (
              <li key={social.label || social.name}>
                <a
                  className="site-footer__social-link"
                  href={social.href || social.url}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <SocialIcon label={social.label || social.name || ''} />
                  <span>{social.label || social.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <nav className="site-footer__navigation" aria-label="Footer navigation">
          {groups.map((group) => (
            <div className="site-footer__group" key={group.title}>
              <h2 className="site-footer__group-title">{group.title}</h2>
              <ul className="site-footer__links">
                {(group.links || []).map((link, index) => (
                  <li key={link.label || link.name || `${group.title}-${index}`}>
                    <FooterLink link={link} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>

      <div className="site-footer__bottom container">
        <p>&copy; {year} Synthify HR Solutions.</p>
      </div>
    </footer>
  )
}

export default SiteFooter
