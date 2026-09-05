import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  BriefcaseBusiness,
  Building2,
  Factory,
  Flame,
  HeartPulse,
  Hotel,
  Landmark,
  Mail,
  MapPin,
  Monitor,
  Phone,
} from 'lucide-react'
import {
  contactInfo,
  insights,
  sectors,
  serviceDetails,
  services,
  teamMembers,
} from '../data/siteData.js'
import ButtonLink from '../components/ButtonLink.jsx'
import ContactCTA from '../components/ContactCTA.jsx'
import LineMotif from '../components/LineMotif.jsx'
import SectionHeading from '../components/SectionHeading.jsx'

const recruitmentSteps = [
  {
    title: 'Understand',
    description: 'We align on the role, culture and outcome.',
  },
  {
    title: 'Search',
    description: 'We reach the right local and global talent.',
  },
  {
    title: 'Assess',
    description: 'Every shortlist is considered, not automated.',
  },
  {
    title: 'Support',
    description: 'We stay close through offer and onboarding.',
  },
]

const sectorIconMap = {
  banking: Landmark,
  'banking-capital-markets': Landmark,
  building: Building2,
  construction: Building2,
  factory: Factory,
  finance: Landmark,
  healthcare: HeartPulse,
  hospitality: Hotel,
  manufacturing: Factory,
  'oil-gas': Flame,
  oil: Flame,
  'real-estate': Building2,
  technology: Monitor,
}

function resolveSectorIcon(sector) {
  const iconName = sector.icon?.toLowerCase?.().replaceAll(' ', '-')
  return sectorIconMap[iconName] || sectorIconMap[sector.slug] || BriefcaseBusiness
}

function HomePage() {
  const [activeServiceSlug, setActiveServiceSlug] = useState(services[0]?.slug ?? '')

  const activeService = useMemo(
    () => services.find((service) => service.slug === activeServiceSlug) ?? services[0],
    [activeServiceSlug],
  )
  const activeServiceDetail = activeService ? serviceDetails[activeService.slug] : null
  const featuredSectors = sectors.slice(0, 8)
  const featuredTeam = teamMembers.slice(0, 4)
  const featuredInsights = insights.slice(0, 3)

  return (
    <div className="home-page">
      <section className="home-hero" aria-labelledby="home-hero-title">
        <div className="home-hero__content">
          <div className="home-hero__copy">
            <h1 id="home-hero-title">The right people move business forward.</h1>
            <p>Strategic recruitment and people solutions shaped for the UAE and GCC.</p>

            <div className="home-hero__actions" aria-label="Choose how Synthify can help">
              <ButtonLink to="/contact">Build your team</ButtonLink>
              <ButtonLink to="/jobs" variant="outline">
                Find your next role
              </ButtonLink>
            </div>
          </div>

          <div className="home-hero__utility">
            <LineMotif className="home-hero__line" />
            <address className="home-hero__contact">
              <a href={contactInfo.mapUrl} target="_blank" rel="noreferrer">
                <MapPin aria-hidden="true" />
                <span>{contactInfo.location}</span>
              </a>
              <span className="home-hero__contact-separator" aria-hidden="true">
                {'\u00b7'}
              </span>
              <a href={`mailto:${contactInfo.email}`}>
                <Mail aria-hidden="true" />
                <span>{contactInfo.email}</span>
              </a>
              <span className="home-hero__contact-separator" aria-hidden="true">
                {'\u00b7'}
              </span>
              <a href={contactInfo.phoneHref}>
                <Phone aria-hidden="true" />
                <span>{contactInfo.phone}</span>
              </a>
            </address>
          </div>
        </div>

        <figure className="home-hero__media">
          <img
            src="./assets/generated/hero-team.webp"
            alt="A diverse professional team collaborating in a Dubai office"
          />
        </figure>
      </section>

      <section className="services-showcase section section--mist" aria-labelledby="services-heading">
        <div className="container section-shell">
          <SectionHeading
            id="services-heading"
            title="People strategy, built around your business."
            description="From critical hires to stronger systems, our specialists help you build teams that perform."
            className="services-showcase__heading"
          />
          <LineMotif className="services-showcase__line" />

          <div className="services-showcase__layout">
            <ol className="service-rail" aria-label="Synthify services">
              {services.map((service, index) => {
                const isActive = activeService?.slug === service.slug

                return (
                  <li key={service.slug}>
                    <button
                      className={`service-rail__item${isActive ? ' is-active' : ''}`}
                      type="button"
                      aria-pressed={isActive}
                      onClick={() => setActiveServiceSlug(service.slug)}
                      onFocus={() => setActiveServiceSlug(service.slug)}
                    >
                      <span className="service-rail__number" aria-hidden="true">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span className="service-rail__content">
                        <strong>{service.shortTitle || service.title}</strong>
                        <span>{service.summary}</span>
                      </span>
                    </button>
                  </li>
                )
              })}
            </ol>

            {activeService ? (
              <article className="service-feature" aria-live="polite">
                <figure className="service-feature__media">
                  <img
                    src={activeService.image || './assets/generated/workforce-planning.webp'}
                    alt="Recruitment specialists planning a workforce solution together"
                  />
                </figure>
                <div className="service-feature__content">
                  <h3>{activeService.title}</h3>
                  <p>
                    {activeServiceDetail?.overview ||
                      activeServiceDetail?.lede ||
                      activeService.summary}
                  </p>
                  <ButtonLink to="/services">Explore all services</ButtonLink>
                </div>
              </article>
            ) : null}
          </div>
        </div>
      </section>

      <section className="audience-split" aria-label="Employer and candidate routes">
        <div className="audience-split__panel audience-split__panel--employer">
          <div className="audience-split__inner">
            <LineMotif compact />
            <h2>Hiring for your business?</h2>
            <ButtonLink to="/contact">Talk to a consultant</ButtonLink>
          </div>
        </div>
        <div className="audience-split__panel audience-split__panel--candidate">
          <div className="audience-split__inner">
            <h2>Planning your next move?</h2>
            <ButtonLink to="/jobs" variant="outline">
              Browse open roles
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="recruitment-process section section--navy" aria-labelledby="process-heading">
        <div className="container section-shell">
          <SectionHeading
            id="process-heading"
            title="Clear process. Better hiring decisions."
            className="recruitment-process__heading"
          />

          <ol className="process-line">
            {recruitmentSteps.map((step, index) => (
              <li className="process-line__step" key={step.title}>
                <span className="process-line__number" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="process-line__marker" aria-hidden="true" />
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="sector-showcase section" aria-labelledby="sectors-heading">
        <div className="container sector-showcase__content section-shell">
          <div className="sector-showcase__copy">
            <SectionHeading
              id="sectors-heading"
              title="Sector knowledge that shortens the search."
              className="sector-showcase__heading"
            />

            <ul className="sector-matrix" aria-label="Featured sectors">
              {featuredSectors.map((sector) => {
                const SectorIcon = resolveSectorIcon(sector)

                return (
                  <li className="sector-matrix__item" key={sector.slug}>
                    <SectorIcon aria-hidden="true" />
                    <span>{sector.label}</span>
                  </li>
                )
              })}
            </ul>
          </div>

          <figure className="sector-showcase__media">
            <img
              src="./assets/generated/gcc-expertise.webp"
              alt="GCC business leaders reviewing plans in a modern city district"
            />
          </figure>
        </div>

        <div className="gcc-trust-band">
          <div className="container section-shell gcc-trust-band__inner">
            <LineMotif className="gcc-trust-band__line" />
            <div className="gcc-trust-band__content">
              <h2>GCC insight. Human judgement.</h2>
              <p>
                Deep regional context, cultural sensitivity and up-to-date people practices shape every
                recommendation.
              </p>
              <ButtonLink to="/sectors">See the sectors we serve</ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <section className="about-preview section" aria-labelledby="about-preview-heading">
        <div className="container section-shell">
          <div className="about-preview__intro">
            <SectionHeading
              id="about-preview-heading"
              title="Built to bridge talent and opportunity."
              description="Our CIPD-certified HR professionals bring more than a decade of cross-sector experience across the GCC. We help organisations find, develop and support the people behind sustainable performance."
              className="about-preview__heading"
            />
            <ButtonLink to="/about" variant="text">
              More about Synthify
            </ButtonLink>
          </div>

          <div className="team-preview">
            <div className="team-preview__header">
              <h3>Meet the people behind Synthify.</h3>
              <ButtonLink to="/team" variant="text">
                Meet the team
              </ButtonLink>
            </div>

            <div className="team-preview__grid">
              {featuredTeam.map((member) => (
                <article className="team-card" key={member.name}>
                  <img src={member.image} alt={`${member.name}, ${member.title}`} />
                  <div className="team-card__content">
                    <h4>{member.name}</h4>
                    <p>{member.title}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {featuredInsights.length > 0 ? (
        <section className="insights-preview section section--mist" aria-labelledby="insights-heading">
          <div className="container section-shell">
            <div className="insights-preview__header">
              <SectionHeading
                id="insights-heading"
                title="Practical thinking for better people decisions."
                description="Perspectives on talent, workplaces and building stronger organisations across the region."
                className="insights-preview__heading"
              />
              <ButtonLink to="/insights" variant="text">
                View all insights
              </ButtonLink>
            </div>

            <div className="insight-list">
              {featuredInsights.map((insight, index) => (
                <article className="insight-list__item" key={insight.slug}>
                  {insight.image ? (
                    <Link
                      className="insight-list__media"
                      to={`/insights/${insight.slug}`}
                      aria-label={`Read ${insight.title}`}
                    >
                      <img src={insight.image} alt="" />
                    </Link>
                  ) : null}
                  <div className="insight-list__content">
                    <div className="insight-list__meta">
                      <span aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
                      <time dateTime={insight.date}>{insight.date}</time>
                    </div>
                    <h3>
                      <Link to={`/insights/${insight.slug}`}>{insight.title}</Link>
                    </h3>
                    <p>{insight.excerpt}</p>
                    <ButtonLink to={`/insights/${insight.slug}`} variant="text">
                      Read insight
                    </ButtonLink>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <ContactCTA
        title="Let's build what your team needs next."
        description="Tell us where you are today. A Synthify consultant will help you define the next practical step."
        primaryLabel="Book a consultation"
        primaryTo="/contact"
        secondaryLabel="Browse open roles"
        secondaryTo="/jobs"
        className="home-consultation-cta"
      />
    </div>
  )
}

export default HomePage
