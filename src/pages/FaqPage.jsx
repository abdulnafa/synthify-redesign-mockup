import Accordion from '../components/Accordion.jsx'
import ContactCTA from '../components/ContactCTA.jsx'
import Reveal from '../components/motion/Reveal.jsx'
import { faqs } from '../data/siteData.js'

export default function FaqPage() {
  return (
    <>
      <section className="page-hero page-hero--compact"><Reveal as="div" className="container page-hero__compact-grid" amount={0.35}><h1>Answers, without the jargon.</h1><p>A practical introduction to working with Synthify as an employer or candidate.</p></Reveal></section>
      <section className="section section--white"><Reveal as="div" className="container faq-page" amount={0.1}><Accordion items={faqs} /></Reveal></section>
      <ContactCTA title="Still have a question?" description="Speak directly with a member of the Synthify team." />
    </>
  )
}
