import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import ContactCTA from '../components/ContactCTA.jsx'
import Reveal from '../components/motion/Reveal.jsx'
import { services } from '../data/siteData.js'

export default function ServicesPage() {
  return (
    <>
      <section className="page-hero page-hero--services">
        <div className="container page-hero__grid">
          <Reveal as="div" className="page-hero__copy" amount={0.35}>
            <h1>People solutions that work in the real world.</h1>
            <p>Specialist recruitment and HR support, shaped around your team, market and growth plans.</p>
            <Link className="button button--primary" to="/contact">
              Tell us what you need <ArrowRight aria-hidden="true" />
            </Link>
          </Reveal>
          <Reveal as="div" className="page-hero__media" direction="left" delay={0.12} amount={0.25}>
            <img src="./assets/generated/workforce-planning.webp" alt="HR specialists reviewing a workforce plan" />
          </Reveal>
        </div>
      </section>

      <section className="section section--white">
        <div className="container">
          <Reveal as="div" className="section-heading section-heading--split">
            <h2>Five services. One clear people strategy.</h2>
            <p>Choose the support you need today, with room to bring services together as your organisation evolves.</p>
          </Reveal>
          <Reveal as="div" className="service-index" delay={0.08} amount={0.1}>
            {services.map((service, index) => (
              <Link className="service-index__row" key={service.slug} to={`/services/${service.slug}`}>
                <span className="service-index__number">{String(index + 1).padStart(2, '0')}</span>
                <span className="service-index__body">
                  <strong>{service.title}</strong>
                  <span>{service.summary}</span>
                </span>
                <ArrowRight aria-hidden="true" />
              </Link>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section section--mist">
        <Reveal as="div" className="container editorial-split">
          <div>
            <h2>Advice first. Delivery that follows through.</h2>
          </div>
          <div className="editorial-copy">
            <p>Every engagement starts with context: the role, the team, the market and the result you need. From there, we shape a practical route forward and stay close through delivery.</p>
            <ul className="check-list">
              <li>GCC market understanding</li>
              <li>Culturally aware communication</li>
              <li>Clear ownership and coordination</li>
              <li>Human judgement at every step</li>
            </ul>
          </div>
        </Reveal>
      </section>
      <ContactCTA title="Not sure where to start?" description="A short conversation can help define the right support." />
    </>
  )
}
