import Reveal from '../components/motion/Reveal.jsx'

export default function LegalPage({ title, intro, sections }) {
  return (
    <>
      <section className="page-hero page-hero--legal"><Reveal as="div" className="container" amount={0.35}><h1>{title}</h1><p>{intro}</p></Reveal></section>
      <section className="section section--white"><div className="container legal-layout"><aside><p>Last reviewed for this redesign: September 2026</p><a href="mailto:info@synthify.ae">Questions about this policy?</a></aside><Reveal as="article" className="legal-copy" amount={0.03}>{sections.map((section) => <section key={section.title}><h2>{section.title}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph.slice(0, 48)}>{paragraph}</p>)}</section>)}</Reveal></div></section>
    </>
  )
}
