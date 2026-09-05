import { useState } from 'react'
import { CheckCircle2, Clock, Mail, MapPin, Phone } from 'lucide-react'
import Accordion from '../components/Accordion.jsx'
import { contactInfo, faqs } from '../data/siteData.js'

export default function ContactPage() {
  const [sent, setSent] = useState(false)
  const [audience, setAudience] = useState('Recruitment support')
  return (
    <>
      <section className="contact-hero">
        <div className="container contact-hero__grid">
          <div className="contact-hero__copy"><h1>Let’s build what your team needs next.</h1><p>Tell us where you are today. A Synthify consultant will help you define the next practical step.</p><ul><li><MapPin aria-hidden="true" />{contactInfo.location}</li><li><Phone aria-hidden="true" /><a href={contactInfo.phoneHref}>{contactInfo.phone}</a></li><li><Mail aria-hidden="true" /><a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a></li><li><Clock aria-hidden="true" />{contactInfo.hours}</li></ul></div>
          {sent ? <div className="contact-form-card success-panel" role="status"><CheckCircle2 aria-hidden="true" /><h2>Thanks — your enquiry is ready.</h2><p>This is a client-facing prototype, so it has not sent data. The final WordPress version will connect to the approved mailbox and CRM workflow.</p><button className="button button--secondary" type="button" onClick={() => setSent(false)}>Send another enquiry</button></div> : (
            <form className="contact-form-card" onSubmit={(event) => { event.preventDefault(); setSent(true) }}>
              <fieldset><legend>I’m looking for</legend><div className="choice-grid">{['Recruitment support', 'Career opportunities'].map((choice) => <label key={choice} className={audience === choice ? 'choice-field is-selected' : 'choice-field'}><input type="radio" name="audience" value={choice} checked={audience === choice} onChange={(event) => setAudience(event.target.value)} /><span>{choice}</span></label>)}</div></fieldset>
              <div className="form-grid"><label>Name<input name="name" autoComplete="name" required /></label><label>Work email<input name="email" type="email" autoComplete="email" required /></label><label>Phone<input name="phone" type="tel" autoComplete="tel" /></label><label>Company<input name="company" autoComplete="organization" /></label></div>
              <label>How can we help?<textarea name="message" rows="5" required /></label>
              <label className="checkbox-field"><input name="consent" type="checkbox" required /><span>I agree to the privacy policy.</span></label>
              <button className="button button--primary" type="submit">Send enquiry</button>
            </form>
          )}
        </div>
      </section>
      <section className="section section--white"><div className="container faq-preview"><div><h2>A few useful answers.</h2><p>Quick context before we speak.</p></div><Accordion items={faqs.slice(0, 3)} /></div></section>
    </>
  )
}
