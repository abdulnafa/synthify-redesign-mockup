import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import Reveal from '../components/motion/Reveal.jsx'
import { insights } from '../data/siteData.js'

export default function InsightsPage() {
  return (
    <>
      <section className="page-hero page-hero--compact"><Reveal as="div" className="container page-hero__compact-grid" amount={0.35}><h1>Useful thinking for better people decisions.</h1><p>Regional updates and practical perspectives from the Synthify team.</p></Reveal></section>
      <section className="section section--white">
        <Reveal as="div" className="container insight-list" amount={0.08}>
          {insights.map((article) => <article className="insight-row" key={article.slug}><div className="insight-row__meta"><span>{article.date}</span><span>{article.author}</span></div><div><h2>{article.title}</h2><p>{article.excerpt}</p><Link className="text-link" to={`/insights/${article.slug}`}>Read article <ArrowRight aria-hidden="true" /></Link></div></article>)}
          <div className="insight-empty"><p>More practical insight is coming soon. For a question about hiring or HR in the GCC, speak directly with our team.</p><Link className="button button--secondary" to="/contact">Ask a question <ArrowRight aria-hidden="true" /></Link></div>
        </Reveal>
      </section>
    </>
  )
}
