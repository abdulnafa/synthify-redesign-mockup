import { useState } from 'react'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function CareersPage() {
  const [sent, setSent] = useState(false)
  return (
    <>
      <section className="page-hero page-hero--careers">
        <div className="container page-hero__grid">
          <div className="page-hero__copy"><h1>Let’s understand where you want to go next.</h1><p>Share your experience and ambitions with recruiters who know the UAE market.</p><Link className="button button--primary" to="/jobs">Browse open roles <ArrowRight aria-hidden="true" /></Link></div>
          <div className="page-hero__media"><img src="./assets/generated/career-conversation.webp" alt="A professional discussing their next career move" /></div>
        </div>
      </section>
      <section className="section section--mist">
        <div className="container form-layout">
          <div><h2>Share your CV.</h2><p>If a current role is not the right match, your profile can still help our recruiters understand what to look for.</p></div>
          {sent ? <div className="success-panel" role="status"><CheckCircle2 aria-hidden="true" /><h3>Thank you — your profile is ready for review.</h3><p>This prototype does not send files yet. The final WordPress form will connect to the client’s recruitment workflow.</p><button className="text-link" type="button" onClick={() => setSent(false)}>Send another profile</button></div> : (
            <form className="form-card" onSubmit={(event) => { event.preventDefault(); setSent(true) }}>
              <div className="form-grid"><label>Full name<input name="name" autoComplete="name" required /></label><label>Email address<input name="email" type="email" autoComplete="email" required /></label><label>Phone number<input name="phone" type="tel" autoComplete="tel" required /></label><label>Area of expertise<input name="expertise" required /></label></div>
              <label>LinkedIn profile<input name="linkedin" type="url" placeholder="https://linkedin.com/in/..." /></label>
              <label>CV (PDF, up to 2MB)<input name="cv" type="file" accept="application/pdf" required /></label>
              <label className="checkbox-field"><input name="consent" type="checkbox" required /><span>I agree to the privacy policy and consent to Synthify reviewing my profile.</span></label>
              <button className="button button--primary" type="submit">Submit profile <ArrowRight aria-hidden="true" /></button>
            </form>
          )}
        </div>
      </section>
    </>
  )
}
