import { useMemo, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion as Motion, useReducedMotion, useScroll } from 'motion/react'
import { ArrowRight } from 'lucide-react'
import {
  insights,
  sectors,
  serviceDetails,
  services,
  teamMembers,
} from '../data/siteData.js'
import ButtonLink from '../components/ButtonLink.jsx'

const recruitmentSteps = [
  { title: 'Understand', description: 'We align on the brief, culture and outcome.' },
  { title: 'Search', description: 'We reach relevant local and global talent.' },
  { title: 'Assess', description: 'Every shortlist is considered with human judgement.' },
  { title: 'Support', description: 'We stay close through offer and onboarding.' },
]

const easeOut = [0.16, 1, 0.3, 1]

function ChapterLabel({ number, children, light = false }) {
  return (
    <div className={`chapter-label${light ? ' chapter-label--light' : ''}`}>
      <span>{number}</span>
      <span className="chapter-label__rule" aria-hidden="true" />
      <span>{children}</span>
    </div>
  )
}

function HeroHeadline({ reducedMotion }) {
  const lines = [
    <span key="one">The right people</span>,
    <span key="two">move business</span>,
    <span key="three" className="premium-hero__accent">
      forward<span className="premium-hero__stop">.</span>
    </span>,
  ]

  return (
    <h1 className="premium-hero__title" id="home-hero-title" aria-label="The right people move business forward.">
      {lines.map((line, index) => (
        <span className="premium-hero__title-mask" aria-hidden="true" key={line.key}>
          <Motion.span
            className="premium-hero__title-line"
            initial={reducedMotion ? false : { y: '110%' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.82, delay: 0.18 + index * 0.09, ease: easeOut }}
          >
            {line}{index < lines.length - 1 ? ' ' : null}
          </Motion.span>
        </span>
      ))}
    </h1>
  )
}

function HomePage() {
  const [activeServiceSlug, setActiveServiceSlug] = useState(services[0]?.slug ?? '')
  const reducedMotion = useReducedMotion()
  const processRef = useRef(null)
  const { scrollYProgress: processProgress } = useScroll({
    target: processRef,
    offset: ['start 78%', 'end 58%'],
  })

  const activeService = useMemo(
    () => services.find((service) => service.slug === activeServiceSlug) ?? services[0],
    [activeServiceSlug],
  )
  const activeServiceIndex = services.findIndex((service) => service.slug === activeService?.slug)
  const activeServiceDetail = activeService ? serviceDetails[activeService.slug] : null
  const featuredTeam = teamMembers.slice(0, 4)
  const featuredInsight = insights[0]
  const serviceImage =
    activeServiceIndex === 0
      ? './assets/generated/premium-services.webp'
      : activeService?.image || './assets/generated/premium-services.webp'

  return (
    <div className="premium-home">
      <section className="premium-hero" aria-labelledby="home-hero-title">
        <Motion.figure
          className="premium-hero__media"
          initial={reducedMotion ? false : { clipPath: 'inset(0 0 0 100%)', scale: 1.035 }}
          animate={{ clipPath: 'inset(0 0 0 0%)', scale: 1 }}
          transition={{ duration: 1.15, delay: 0.08, ease: easeOut }}
        >
          <img
            src="./assets/generated/premium-hero.webp"
            alt="A diverse group of business leaders in a Dubai office"
            fetchPriority="high"
          />
        </Motion.figure>

        <div className="premium-hero__trace" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>

        <div className="container premium-hero__grid">
          <div className="premium-hero__copy">
            <Motion.div
              initial={reducedMotion ? false : { opacity: 0, x: -22 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.65, delay: 0.12, ease: easeOut }}
            >
              <ChapterLabel number="01" light>People &amp; performance</ChapterLabel>
            </Motion.div>

            <HeroHeadline reducedMotion={reducedMotion} />

            <Motion.p
              className="premium-hero__lede"
              initial={reducedMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.58, ease: easeOut }}
            >
              Synthify helps organizations across the GCC find exceptional talent, build
              high-performing teams and appoint the leaders who move their business forward.
            </Motion.p>

            <Motion.div
              className="premium-hero__actions"
              initial={reducedMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.68, ease: easeOut }}
            >
              <ButtonLink to="/contact">Hire Talent</ButtonLink>
              <ButtonLink to="/jobs" variant="outline-light">Find your next role</ButtonLink>
            </Motion.div>
          </div>

        </div>
      </section>

      <section className="premium-services" id="services" aria-labelledby="services-heading">
        <div className="container premium-section-shell">
          <div className="premium-section-head premium-section-head--services">
            <ChapterLabel number="02">Services</ChapterLabel>
            <h2 id="services-heading">Five ways<br />we help.</h2>
            <p>
              From workforce scale to leadership excellence, we deliver focused people solutions for
              organisations across the GCC.
            </p>
          </div>

          <div className="premium-services__layout">
            <ol className="premium-service-rail" aria-label="Synthify services">
              {services.map((service, index) => {
                const isActive = activeService?.slug === service.slug
                return (
                  <li key={service.slug}>
                    <button
                      className={`premium-service-rail__item${isActive ? ' is-active' : ''}`}
                      type="button"
                      aria-pressed={isActive}
                      onClick={() => setActiveServiceSlug(service.slug)}
                      onPointerEnter={() => setActiveServiceSlug(service.slug)}
                      onFocus={() => setActiveServiceSlug(service.slug)}
                    >
                      <span className="premium-service-rail__number">{String(index + 1).padStart(2, '0')}</span>
                      <span className="premium-service-rail__title">{service.shortTitle || service.title}</span>
                      <span className="premium-service-rail__marker" aria-hidden="true" />
                    </button>
                  </li>
                )
              })}
            </ol>

            <div className="premium-service-stage">
              <AnimatePresence mode="wait" initial={false}>
                <Motion.article
                  className="premium-service-stage__article"
                  key={activeService.slug}
                  initial={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reducedMotion ? { opacity: 0 } : { opacity: 0, y: -16 }}
                  transition={{ duration: 0.42, ease: easeOut }}
                  aria-live="polite"
                >
                  <div className="premium-service-stage__index" aria-hidden="true">
                    {String(activeServiceIndex + 1).padStart(2, '0')}
                  </div>
                  <figure className="premium-service-stage__media">
                    <img src={serviceImage} alt="Professionals discussing a workforce plan in a Dubai office" />
                  </figure>
                  <div className="premium-service-stage__copy">
                    <h3>{activeService.title}</h3>
                    <p>{activeServiceDetail?.overview || activeServiceDetail?.lede || activeService.summary}</p>
                    <ButtonLink to={`/services/${activeService.slug}`} variant="text">Explore this service</ButtonLink>
                  </div>
                </Motion.article>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      <section className="premium-audiences" aria-label="Employer and candidate routes">
        <Link className="premium-audience premium-audience--organisation" to="/contact">
          <span className="premium-audience__index">03 / For organisations</span>
          <div>
            <h2>Build the team<br />behind your ambition.</h2>
            <p>Strategic people solutions for hiring, capability, performance and growth.</p>
          </div>
          <span className="premium-audience__action">Talk to a consultant <ArrowRight aria-hidden="true" /></span>
        </Link>
        <Link className="premium-audience premium-audience--professional" to="/jobs">
          <span className="premium-audience__index">04 / For professionals</span>
          <div>
            <h2>Make your next<br />move count.</h2>
            <p>Meaningful opportunities with organisations across the UAE and GCC.</p>
          </div>
          <span className="premium-audience__action">Browse open roles <ArrowRight aria-hidden="true" /></span>
        </Link>
      </section>

      <section className="premium-process" ref={processRef} aria-labelledby="process-heading">
        <div className="container premium-section-shell">
          <div className="premium-section-head premium-section-head--process">
            <ChapterLabel number="05">Our process</ChapterLabel>
            <h2 id="process-heading">A clear path from<br />brief to <em>placement.</em></h2>
            <p>A considered, consultative process from the first conversation through onboarding.</p>
          </div>

          <ol className="premium-process__steps">
            <Motion.span
              className="premium-process__progress"
              aria-hidden="true"
              style={{ scaleX: reducedMotion ? 1 : processProgress }}
            />
            {recruitmentSteps.map((step, index) => (
              <Motion.li
                className="premium-process__step"
                key={step.title}
                initial={reducedMotion ? false : { opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, delay: index * 0.08, ease: easeOut }}
              >
                <span className="premium-process__number">{String(index + 1).padStart(2, '0')}</span>
                <span className="premium-process__dot" aria-hidden="true" />
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </Motion.li>
            ))}
          </ol>
        </div>
      </section>

      <section className="premium-sectors" aria-labelledby="sectors-heading">
        <div className="container premium-section-shell">
          <div className="premium-section-head premium-section-head--sectors">
            <ChapterLabel number="06" light>Sectors</ChapterLabel>
            <h2 id="sectors-heading">Regional context.<br />Sector depth.</h2>
          </div>
        </div>

        <div className="premium-sectors__ticker" aria-label="Sectors we serve">
          <div className="premium-sectors__track">
            {[0, 1].map((copyIndex) => (
              <div className="premium-sectors__set" key={copyIndex} aria-hidden={copyIndex === 1}>
                {sectors.map((sector) => (
                  <span key={`${copyIndex}-${sector.slug}`}>{sector.label}<i aria-hidden="true">/</i></span>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="container premium-sectors__feature">
          <Motion.figure
            className="premium-sectors__media"
            initial={reducedMotion ? false : { clipPath: 'inset(0 0 100% 0)' }}
            whileInView={{ clipPath: 'inset(0 0 0% 0)' }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9, ease: easeOut }}
          >
            <img src="./assets/generated/premium-sectors.webp" alt="Business and engineering leaders reviewing Dubai infrastructure" />
          </Motion.figure>
          <div className="premium-sectors__statement">
            <h3>GCC insight.<br />Human judgement.</h3>
            <p>Regional context, cultural sensitivity and practical people expertise shape every recommendation.</p>
            <ButtonLink to="/sectors" variant="text-light">Explore all sectors</ButtonLink>
          </div>
        </div>
      </section>

      <section className="premium-about" aria-labelledby="about-heading">
        <div className="container premium-section-shell">
          <div className="premium-about__intro">
            <ChapterLabel number="07">Our people</ChapterLabel>
            <div className="premium-about__headline">
              <h2 id="about-heading">People who understand<br />people and business.</h2>
              <div>
                <p>Our CIPD-certified HR professionals bring more than a decade of cross-sector experience across the GCC.</p>
                <ButtonLink to="/team" variant="text">Meet the team</ButtonLink>
              </div>
            </div>
          </div>

          <div className="premium-team-rail">
            {featuredTeam.map((member, index) => (
              <Motion.article
                className="premium-team-card"
                key={member.name}
                initial={reducedMotion ? false : { opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.65, delay: index * 0.07, ease: easeOut }}
              >
                <Link to="/team" aria-label={`Meet ${member.name}`}>
                  <figure>
                    <img src={member.image} alt="" />
                    <span className="premium-team-card__index">{String(index + 1).padStart(2, '0')}</span>
                  </figure>
                  <div>
                    <h3>{member.name}</h3>
                    <p>{member.title}</p>
                    <ArrowRight aria-hidden="true" />
                  </div>
                </Link>
              </Motion.article>
            ))}
          </div>
        </div>
      </section>

      {featuredInsight ? (
        <section className="premium-insight" aria-labelledby="insight-heading">
          <div className="container premium-insight__grid">
            <div className="premium-insight__label">
              <ChapterLabel number="08" light>Latest thinking</ChapterLabel>
              <ButtonLink to="/insights" variant="text-light">View all insights</ButtonLink>
            </div>
            <article className="premium-insight__article">
              <div className="premium-insight__meta">
                <time>{featuredInsight.date}</time>
                <span>{featuredInsight.author}</span>
              </div>
              <h2 id="insight-heading"><Link to={`/insights/${featuredInsight.slug}`}>{featuredInsight.title}</Link></h2>
              <p>{featuredInsight.excerpt}</p>
              <ButtonLink to={`/insights/${featuredInsight.slug}`}>Read the insight</ButtonLink>
            </article>
          </div>
        </section>
      ) : null}

      <section className="premium-closing" aria-labelledby="closing-heading">
        <div className="premium-closing__lines" aria-hidden="true"><span /><span /><span /><span /></div>
        <div className="container premium-closing__grid">
          <ChapterLabel number="09" light>Start a conversation</ChapterLabel>
          <div>
            <h2 id="closing-heading">Let&apos;s build what<br />comes next.</h2>
            <p>Tell us where you are today. We&apos;ll help you define the next practical step.</p>
          </div>
          <div className="premium-closing__actions">
            <ButtonLink to="/contact">Book a consultation</ButtonLink>
            <ButtonLink to="/jobs" variant="outline-light">Browse open roles</ButtonLink>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
