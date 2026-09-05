import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import ContactCTA from '../components/ContactCTA.jsx'
import Reveal from '../components/motion/Reveal.jsx'
import { sectors } from '../data/siteData.js'

export default function SectorsPage() {
  return (
    <>
      <section className="page-hero page-hero--compact">
        <Reveal as="div" className="container page-hero__compact-grid" amount={0.35}>
          <h1>Sector knowledge that shortens the search.</h1>
          <div>
            <p>We understand that every industry has its own pace, roles, compliance needs and talent realities.</p>
            <Link className="button button--primary" to="/contact">Discuss your sector <ArrowRight aria-hidden="true" /></Link>
          </div>
        </Reveal>
      </section>
      <section className="sector-feature">
        <Reveal as="div" className="container sector-feature__grid" amount={0.18}>
          <div className="sector-feature__media"><img src="./assets/generated/gcc-expertise.webp" alt="A diverse GCC consulting team reviewing plans" /></div>
          <div className="sector-feature__copy">
            <h2>GCC context. Practical reach.</h2>
            <p>Our cross-sector perspective helps us ask sharper questions, reach relevant people and understand what a strong fit looks like in context.</p>
          </div>
        </Reveal>
      </section>
      <section className="section section--white">
        <Reveal as="div" className="container" amount={0.05}>
          <div className="sector-directory">
            {sectors.map((sector, index) => (
              <article className="sector-directory__item" key={sector.slug}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <div><h2>{sector.label}</h2><p>{sector.description}</p></div>
              </article>
            ))}
          </div>
        </Reveal>
      </section>
      <ContactCTA title="Your sector has its own hiring reality." description="Let’s build a search approach around it." />
    </>
  )
}
