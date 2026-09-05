import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import ContactCTA from '../components/ContactCTA.jsx'
import { sectors } from '../data/siteData.js'

export default function SectorsPage() {
  return (
    <>
      <section className="page-hero page-hero--compact">
        <div className="container page-hero__compact-grid">
          <h1>Sector knowledge that shortens the search.</h1>
          <div>
            <p>We understand that every industry has its own pace, roles, compliance needs and talent realities.</p>
            <Link className="button button--primary" to="/contact">Discuss your sector <ArrowRight aria-hidden="true" /></Link>
          </div>
        </div>
      </section>
      <section className="sector-feature">
        <div className="container sector-feature__grid">
          <div className="sector-feature__media"><img src="./assets/generated/gcc-expertise.webp" alt="A diverse GCC consulting team reviewing plans" /></div>
          <div className="sector-feature__copy">
            <h2>GCC context. Practical reach.</h2>
            <p>Our cross-sector perspective helps us ask sharper questions, reach relevant people and understand what a strong fit looks like in context.</p>
          </div>
        </div>
      </section>
      <section className="section section--white">
        <div className="container">
          <div className="sector-directory">
            {sectors.map((sector, index) => (
              <article className="sector-directory__item" key={sector.slug}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <div><h2>{sector.label}</h2><p>{sector.description}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <ContactCTA title="Your sector has its own hiring reality." description="Let’s build a search approach around it." />
    </>
  )
}
