import { Route, Routes } from 'react-router-dom'
import SiteHeader from './components/SiteHeader.jsx'
import SiteFooter from './components/SiteFooter.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import PageMeta from './components/PageMeta.jsx'
import HomePage from './pages/HomePage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import TeamPage from './pages/TeamPage.jsx'
import ServicesPage from './pages/ServicesPage.jsx'
import ServiceDetailPage from './pages/ServiceDetailPage.jsx'
import SectorsPage from './pages/SectorsPage.jsx'
import JobsPage from './pages/JobsPage.jsx'
import JobDetailPage from './pages/JobDetailPage.jsx'
import CareersPage from './pages/CareersPage.jsx'
import InsightsPage from './pages/InsightsPage.jsx'
import ArticlePage from './pages/ArticlePage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import FaqPage from './pages/FaqPage.jsx'
import LegalPage from './pages/LegalPage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'
import { privacySections, termsSections } from './data/siteData.js'

export default function App() {
  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <PageMeta />
      <ScrollToTop />
      <SiteHeader />
      <main id="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/:serviceSlug" element={<ServiceDetailPage />} />
          <Route path="/sectors" element={<SectorsPage />} />
          <Route path="/jobs" element={<JobsPage />} />
          <Route path="/jobs/:jobSlug" element={<JobDetailPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/insights" element={<InsightsPage />} />
          <Route path="/insights/:articleSlug" element={<ArticlePage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route
            path="/privacy"
            element={<LegalPage title="Privacy Policy" intro="How Synthify handles and protects information shared with us." sections={privacySections} />}
          />
          <Route
            path="/terms"
            element={<LegalPage title="Terms & Conditions" intro="The terms that apply when you use this website and our published content." sections={termsSections} />}
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <SiteFooter />
    </div>
  )
}
