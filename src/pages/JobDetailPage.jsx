import { useState } from 'react'
import { ArrowLeft, Check, Clock, MapPin } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import ApplicationModal from '../components/ApplicationModal.jsx'
import { jobs } from '../data/siteData.js'
import NotFoundPage from './NotFoundPage.jsx'

export default function JobDetailPage() {
  const { jobSlug } = useParams()
  const job = jobs.find((item) => item.slug === jobSlug)
  const [applicationOpen, setApplicationOpen] = useState(false)
  if (!job) return <NotFoundPage />

  return (
    <>
      <section className="job-detail-hero">
        <div className="container">
          <Link className="back-link back-link--light" to="/jobs"><ArrowLeft aria-hidden="true" /> All open roles</Link>
          <h1>{job.title}</h1>
          <div className="job-meta"><span><MapPin aria-hidden="true" />{job.location}</span><span><Clock aria-hidden="true" />{job.type}</span>{job.experience ? <span>{job.experience}</span> : null}</div>
          <button className="button button--primary" type="button" onClick={() => setApplicationOpen(true)}>Apply for this role</button>
        </div>
      </section>
      <section className="section section--white">
        <div className="container job-detail-layout">
          <article className="rich-copy">
            <h2>About the opportunity</h2><p>{job.summary}</p>
            <h2>What you’ll do</h2><ul>{job.responsibilities.map((item) => <li key={item}>{item}</li>)}</ul>
            <h2>What you’ll bring</h2><ul>{job.qualifications.map((item) => <li key={item}>{item}</li>)}</ul>
            {job.education ? <><h2>Education</h2><p>{job.education}</p></> : null}
          </article>
          <aside className="job-sidebar">
            <h2>Role details</h2>
            <dl><div><dt>Location</dt><dd>{job.location}</dd></div><div><dt>Work type</dt><dd>{job.type}</dd></div>{job.level ? <div><dt>Level</dt><dd>{job.level}</dd></div> : null}{job.salary ? <div><dt>Salary</dt><dd>{job.salary}</dd></div> : null}</dl>
            <button className="button button--primary button--full" type="button" onClick={() => setApplicationOpen(true)}>Apply now</button>
            <p className="job-sidebar__note"><Check aria-hidden="true" /> PDF CV, maximum 2MB</p>
          </aside>
        </div>
      </section>
      <ApplicationModal open={applicationOpen} onClose={() => setApplicationOpen(false)} job={job} />
    </>
  )
}
