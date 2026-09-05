import Accordion from '../components/Accordion.jsx'
import ContactCTA from '../components/ContactCTA.jsx'
import { faqs } from '../data/siteData.js'

export default function FaqPage() {
  return (
    <>
      <section className="page-hero page-hero--compact"><div className="container page-hero__compact-grid"><h1>Answers, without the jargon.</h1><p>A practical introduction to working with Synthify as an employer or candidate.</p></div></section>
      <section className="section section--white"><div className="container faq-page"><Accordion items={faqs} /></div></section>
      <ContactCTA title="Still have a question?" description="Speak directly with a member of the Synthify team." />
    </>
  )
}
