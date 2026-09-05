import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { insights, jobs, services } from '../data/siteData.js'

const pageTitles = {
  '/': 'Recruitment & HR Solutions in Dubai',
  '/about': 'About',
  '/team': 'Our Team',
  '/services': 'HR & Recruitment Services',
  '/sectors': 'Sectors',
  '/jobs': 'Open Jobs',
  '/careers': 'Careers',
  '/insights': 'Insights',
  '/faq': 'Frequently Asked Questions',
  '/contact': 'Contact',
  '/privacy': 'Privacy Policy',
  '/terms': 'Terms & Conditions',
}

function resolveTitle(pathname) {
  if (pageTitles[pathname]) return pageTitles[pathname]

  if (pathname.startsWith('/services/')) {
    return services.find((service) => `/services/${service.slug}` === pathname)?.title
  }

  if (pathname.startsWith('/jobs/')) {
    return jobs.find((job) => `/jobs/${job.slug}` === pathname)?.title
  }

  if (pathname.startsWith('/insights/')) {
    return insights.find((insight) => `/insights/${insight.slug}` === pathname)?.title
  }

  return 'Page not found'
}

export default function PageMeta() {
  const { pathname } = useLocation()

  useEffect(() => {
    const title = resolveTitle(pathname)
    document.title = `${title} | Synthify HR Solutions`
  }, [pathname])

  return null
}
