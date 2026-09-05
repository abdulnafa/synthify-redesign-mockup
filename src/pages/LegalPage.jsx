export default function LegalPage({ title, intro, sections }) {
  return (
    <>
      <section className="page-hero page-hero--legal"><div className="container"><h1>{title}</h1><p>{intro}</p></div></section>
      <section className="section section--white"><div className="container legal-layout"><aside><p>Last reviewed for this redesign: September 2026</p><a href="mailto:info@synthify.ae">Questions about this policy?</a></aside><article className="legal-copy">{sections.map((section) => <section key={section.title}><h2>{section.title}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph.slice(0, 48)}>{paragraph}</p>)}</section>)}</article></div></section>
    </>
  )
}
