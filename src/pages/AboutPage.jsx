import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import ContactCTA from '../components/ContactCTA.jsx'
import Reveal from '../components/motion/Reveal.jsx'
import { teamMembers } from '../data/siteData.js'

const values = [
  ['Expertise', 'Current market knowledge and sound HR practice.'],
  ['Cultural sensitivity', 'A respectful approach shaped for diverse GCC workplaces.'],
  ['Partnership', 'Solutions built around your goals, not a generic playbook.'],
]

export default function AboutPage() {
  return (
    <>
      <section className="page-hero page-hero--about">
        <div className="container page-hero__grid">
          <Reveal as="div" className="page-hero__copy" amount={0.35}>
            <h1>People are the strategy.</h1>
            <p>Synthify brings practical GCC market knowledge, human judgement and disciplined people solutions to every partnership.</p>
            <Link className="button button--primary" to="/contact">Start a conversation <ArrowRight aria-hidden="true" /></Link>
          </Reveal>
          <Reveal as="div" className="page-hero__media" direction="left" delay={0.12} amount={0.25}><img src="./assets/generated/hero-team.webp" alt="A diverse leadership team collaborating in Dubai" /></Reveal>
        </div>
      </section>
      <section className="section section--white">
        <Reveal as="div" className="container editorial-split editorial-split--story">
          <h2>Built to bridge talent and opportunity.</h2>
          <div className="editorial-copy"><p>Our CIPD-certified HR professionals bring more than a decade of cross-sector experience across the GCC. We help organisations find, develop and support the people behind sustainable performance.</p></div>
        </Reveal>
        <Reveal as="div" className="container values-grid" delay={0.08} amount={0.1}>
          {values.map(([title, copy]) => <article key={title}><h3>{title}</h3><p>{copy}</p></article>)}
        </Reveal>
      </section>
      <section className="section section--mist">
        <div className="container">
          <Reveal as="div" className="section-heading section-heading--split"><h2>Meet the people behind Synthify.</h2><Link className="text-link" to="/team">Meet the full team <ArrowRight aria-hidden="true" /></Link></Reveal>
          <Reveal as="div" className="team-rail" delay={0.08} amount={0.1}>
            {teamMembers.map((member) => <article key={member.name}><img src={member.image} alt={member.name} /><h3>{member.name}</h3><p>{member.title}</p></article>)}
          </Reveal>
        </div>
      </section>
      <ContactCTA title="Let’s build what’s next. Together." />
    </>
  )
}
