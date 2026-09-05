import { useDeferredValue, useState } from 'react'
import { ArrowRight, Search } from 'lucide-react'
import { Link } from 'react-router-dom'
import Reveal from '../components/motion/Reveal.jsx'
import { jobs } from '../data/siteData.js'

export default function JobsPage() {
  const [keyword, setKeyword] = useState('')
  const [location, setLocation] = useState('All locations')
  const [sector, setSector] = useState('All sectors')
  const deferredKeyword = useDeferredValue(keyword.trim().toLowerCase())
  const locations = ['All locations', ...new Set(jobs.map((job) => job.location))]
  const sectors = ['All sectors', ...new Set(jobs.map((job) => job.sector))]
  const filteredJobs = jobs.filter((job) => {
    const textMatch = !deferredKeyword || `${job.title} ${job.sector} ${job.location}`.toLowerCase().includes(deferredKeyword)
    return textMatch && (location === 'All locations' || job.location === location) && (sector === 'All sectors' || job.sector === sector)
  })

  return (
    <>
      <section className="page-hero page-hero--jobs">
        <div className="container page-hero__grid">
          <Reveal as="div" className="page-hero__copy" amount={0.35}><h1>Your next move starts here.</h1><p>Explore opportunities selected by recruiters who understand the role, the market and the person behind the CV.</p><a className="button button--primary" href="#open-roles">View open roles <ArrowRight aria-hidden="true" /></a></Reveal>
          <Reveal as="div" className="page-hero__media" direction="left" delay={0.12} amount={0.25}><img src="./assets/generated/career-conversation.webp" alt="A recruiter in a career conversation with a professional" /></Reveal>
        </div>
      </section>
      <section className="section section--white jobs-section" id="open-roles">
        <div className="container">
          <form className="job-filters" onSubmit={(event) => event.preventDefault()} role="search">
            <label className="search-field"><Search aria-hidden="true" /><span className="sr-only">Role or keyword</span><input value={keyword} onChange={(event) => setKeyword(event.target.value)} placeholder="Role or keyword" /></label>
            <label><span className="sr-only">Location</span><select value={location} onChange={(event) => setLocation(event.target.value)}>{locations.map((item) => <option key={item}>{item}</option>)}</select></label>
            <label><span className="sr-only">Sector</span><select value={sector} onChange={(event) => setSector(event.target.value)}>{sectors.map((item) => <option key={item}>{item}</option>)}</select></label>
          </form>
          <Reveal as="div" className="jobs-heading"><h2>Open roles</h2><p aria-live="polite">{filteredJobs.length} {filteredJobs.length === 1 ? 'role' : 'roles'}</p></Reveal>
          <Reveal as="div" className="job-list" amount={0.05}>
            {filteredJobs.map((job) => (
              <Link className="job-row" key={job.slug} to={`/jobs/${job.slug}`}>
                <strong>{job.title}</strong><span>{job.location}</span><span>{job.type}</span><span>{job.experience || 'Experience stated in role'}</span><span className="job-row__action">View role <ArrowRight aria-hidden="true" /></span>
              </Link>
            ))}
            {filteredJobs.length === 0 ? <div className="empty-state"><h3>No exact matches yet.</h3><p>Try a broader keyword or share your CV with our team.</p><Link className="text-link" to="/careers">Send your CV <ArrowRight aria-hidden="true" /></Link></div> : null}
          </Reveal>
        </div>
      </section>
      <section className="audience-band">
        <Reveal as="div" className="container audience-band__grid">
          <div><h2>More than a vacancy. A role that fits.</h2><p>Share your CV and let our recruiters understand where you want to go next.</p><Link className="button button--outline-light" to="/careers">Send your CV <ArrowRight aria-hidden="true" /></Link></div>
          <div><h2>Hiring instead?</h2><Link className="button button--primary" to="/contact">Talk to a consultant <ArrowRight aria-hidden="true" /></Link></div>
        </Reveal>
      </section>
    </>
  )
}
