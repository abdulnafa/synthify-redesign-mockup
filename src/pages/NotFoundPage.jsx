import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import Reveal from '../components/motion/Reveal.jsx'

export default function NotFoundPage() {
  return <Reveal as="section" className="not-found" amount={0.3}><div className="container"><span>404</span><h1>This page has moved on.</h1><p>Let’s get you back to the people and opportunities that matter.</p><Link className="button button--primary" to="/">Return home <ArrowRight aria-hidden="true" /></Link></div></Reveal>
}
