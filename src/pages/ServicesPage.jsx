import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import ContactCTA from '../components/ContactCTA.jsx'
import { services } from '../data/siteData.js'

export default function ServicesPage() {
  return (
    <>
      <section className="page-hero page-hero--services">
        <div className="container page-hero__grid">
          <div className="page-hero__copy">
            <h1>People solutions that work in the real world.</h1>
            <p>Specialist recruitment and HR support, shaped around your team, market and growth plans.</p>
            <Link className="button button--primary" to="/contact">
              Tell us what you need <ArrowRight aria-hidden="true" />
            </Link>
          </div>
          <div className="page-hero__media">
            <img src="./assets/generated/workforce-planning.webp" alt="HR specialists reviewing a workforce plan" />
          </div>
        </div>
      </section>

      <section className="section section--white">
        <div className="container">
          <div className="section-heading section-heading--split">
            <h2>Five services. One clear people strategy.</h2>
            <p>Choose the support you need today, with room to bring services together as your organisation evolves.</p>
          </div>
          <div className="service-index">
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
          </div>
        </div>
      </section>

      <section className="section section--mist">
        <div className="container editorial-split">
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
        </div>
      </section>
      <ContactCTA title="Not sure where to start?" description="A short conversation can help define the right support." />
    </>
  )
}
