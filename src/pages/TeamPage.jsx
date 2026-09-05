import { Mail } from 'lucide-react'
import ContactCTA from '../components/ContactCTA.jsx'
import { teamMembers } from '../data/siteData.js'

export default function TeamPage() {
  return (
    <>
      <section className="page-hero page-hero--compact">
        <div className="container page-hero__compact-grid">
          <h1>Recruiters who stay close to the work.</h1>
          <p>Our team combines practical HR experience with a genuine interest in the people and businesses behind every brief.</p>
        </div>
      </section>
      <section className="section section--white">
        <div className="container team-directory">
          {teamMembers.map((member) => (
            <article className="team-profile" key={member.name}>
              <img src={member.image} alt={member.name} />
              <div><h2>{member.name}</h2><p>{member.title}</p>{member.email ? <a href={`mailto:${member.email}`}><Mail aria-hidden="true" /> Email {member.name.split(' ')[0]}</a> : null}</div>
            </article>
          ))}
        </div>
      </section>
      <ContactCTA title="A better people conversation starts here." />
    </>
  )
}
