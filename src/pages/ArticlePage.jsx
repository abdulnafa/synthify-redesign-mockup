import { ArrowLeft } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import ContactCTA from '../components/ContactCTA.jsx'
import { insights } from '../data/siteData.js'
import NotFoundPage from './NotFoundPage.jsx'

export default function ArticlePage() {
  const { articleSlug } = useParams()
  const article = insights.find((item) => item.slug === articleSlug)
  if (!article) return <NotFoundPage />
  return (
    <>
      <article>
        <header className="article-hero"><div className="container article-hero__inner"><Link className="back-link back-link--light" to="/insights"><ArrowLeft aria-hidden="true" /> All insights</Link><h1>{article.title}</h1><p>{article.excerpt}</p><div className="article-meta"><span>{article.date}</span><span>{article.author}</span></div></div></header>
        <div className="section section--white"><div className="container article-body">{article.content.map((paragraph) => <p key={paragraph.slice(0, 48)}>{paragraph}</p>)}</div></div>
      </article>
      <ContactCTA title="Need help turning people policy into practice?" />
    </>
  )
}
