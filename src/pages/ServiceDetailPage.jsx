import { ArrowLeft, ArrowRight, Check } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import ContactCTA from '../components/ContactCTA.jsx'
import { serviceDetails, services } from '../data/siteData.js'
import NotFoundPage from './NotFoundPage.jsx'

export default function ServiceDetailPage() {
  const { serviceSlug } = useParams()
  const service = services.find((item) => item.slug === serviceSlug)
  const detail = serviceDetails[serviceSlug]

  if (!service || !detail) return <NotFoundPage />

  return (
    <>
      <section className="page-hero page-hero--service-detail">
        <div className="container page-hero__grid">
          <div className="page-hero__copy">
            <Link className="back-link" to="/services"><ArrowLeft aria-hidden="true" /> All services</Link>
            <h1>{detail.title}</h1>
            <p>{detail.lede}</p>
            <Link className="button button--primary" to="/contact">
              Discuss your needs <ArrowRight aria-hidden="true" />
            </Link>
          </div>
          <div className="page-hero__media">
            <img src={service.image || './assets/generated/workforce-planning.webp'} alt="Synthify consultants planning a people solution" />
          </div>
        </div>
      </section>

      <section className="section section--mist">
        <div className="container editorial-split">
          <h2>{detail.overview}</h2>
          <div className="deliverable-list" aria-label={`${service.title} deliverables`}>
            {detail.deliverables.map((item) => (
              <div className="deliverable-list__item" key={item}><Check aria-hidden="true" /><span>{item}</span></div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--white">
        <div className="container">
          <div className="section-heading section-heading--split">
            <h2>A clear route from brief to outcome.</h2>
            <p>Simple milestones, open communication and a process that stays accountable.</p>
          </div>
          <ol className="process-line process-line--light">
            {detail.process.map((step, index) => (
              <li key={step}>
                <span>{index + 1}</span>
                <strong>{step}</strong>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section--navy">
        <div className="container detail-columns">
          <div>
            <h2>What better support makes possible.</h2>
            <ul className="benefit-list">
              {detail.benefits.map((benefit) => <li key={benefit}>{benefit}</li>)}
            </ul>
          </div>
          <div>
            <h3>Designed for</h3>
            <ul className="audience-list">
              {detail.idealFor.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        </div>
      </section>
      <ContactCTA title={`Ready to discuss ${service.shortTitle || service.title}?`} description="Tell us the outcome you need and we’ll help shape the route." />
    </>
  )
}
