import { AnimatePresence, MotionConfig } from 'motion/react'
import { Route, Routes, useLocation } from 'react-router-dom'
import SiteHeader from './components/SiteHeader.jsx'
import SiteFooter from './components/SiteFooter.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import PageMeta from './components/PageMeta.jsx'
import RouteStage from './components/motion/RouteStage.jsx'
import ScrollProgress from './components/motion/ScrollProgress.jsx'
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

const DEFAULT_MOTION_TRANSITION = {
  duration: 0.65,
  ease: [0.22, 1, 0.36, 1],
}

export default function App() {
  const location = useLocation()

  return (
    <MotionConfig reducedMotion="user" transition={DEFAULT_MOTION_TRANSITION}>
      <div className="site-shell">
        <a className="skip-link" href="#main-content">Skip to content</a>
        <PageMeta />
        <ScrollToTop />
        <ScrollProgress />
        <SiteHeader />
        <main id="main-content">
          <AnimatePresence initial={false} mode="wait">
            <RouteStage key={location.pathname} routeKey={location.pathname}>
              <Routes location={location}>
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
            </RouteStage>
          </AnimatePresence>
        </main>
        <SiteFooter />
      </div>
    </MotionConfig>
  )
}
