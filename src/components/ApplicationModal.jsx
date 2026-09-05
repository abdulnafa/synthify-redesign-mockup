import { useEffect, useId, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2, Upload, X } from 'lucide-react'

const FOCUSABLE_SELECTOR = [
  'a[href]',
  'button:not([disabled]):not([tabindex="-1"])',
  'input:not([disabled])',
  'select:not([disabled])',
  'textarea:not([disabled])',
  '[tabindex]:not([tabindex="-1"])',
].join(',')

function lockPageScroll() {
  const body = document.body
  const count = Number(body.dataset.scrollLockCount || 0) + 1
  body.dataset.scrollLockCount = String(count)
  body.classList.add('is-scroll-locked')
}

function unlockPageScroll() {
  const body = document.body
  const count = Math.max(0, Number(body.dataset.scrollLockCount || 1) - 1)

  if (count === 0) {
    delete body.dataset.scrollLockCount
    body.classList.remove('is-scroll-locked')
  } else {
    body.dataset.scrollLockCount = String(count)
  }
}

function ApplicationModalContent({ onClose, job, onSubmit }) {
  const titleId = useId()
  const descriptionId = useId()
  const dialogRef = useRef(null)
  const formRef = useRef(null)
  const onCloseRef = useRef(onClose)
  const [submission, setSubmission] = useState({ state: 'idle', message: '' })

  useEffect(() => {
    onCloseRef.current = onClose
  }, [onClose])

  useEffect(() => {
    const previouslyFocused = document.activeElement
    const dialog = dialogRef.current
    const frame = window.requestAnimationFrame(() => {
      dialog?.querySelector(FOCUSABLE_SELECTOR)?.focus()
    })

    lockPageScroll()

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        onCloseRef.current?.()
        return
      }

      if (event.key !== 'Tab' || !dialog) return

      const focusable = [...dialog.querySelectorAll(FOCUSABLE_SELECTOR)].filter(
        (element) => !element.hasAttribute('hidden'),
      )

      if (focusable.length === 0) {
        event.preventDefault()
        dialog.focus()
        return
      }

      const first = focusable[0]
      const last = focusable[focusable.length - 1]

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      window.cancelAnimationFrame(frame)
      document.removeEventListener('keydown', handleKeyDown)
      unlockPageScroll()

      if (previouslyFocused instanceof HTMLElement) {
        previouslyFocused.focus()
      }
    }
  }, [])

  const requestClose = () => onCloseRef.current?.()
  const jobTitle = job?.title || 'this role'
  const jobCompany = job?.company || 'Synthify client'
  const jobLocation = job?.location

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (submission.state === 'submitting') return

    const form = event.currentTarget
    const formData = new FormData(form)
    const resume = formData.get('resume')

    if (resume instanceof File && resume.size > 2 * 1024 * 1024) {
      setSubmission({
        state: 'error',
        message: 'Please choose a CV that is no larger than 2MB.',
      })
      return
    }

    setSubmission({ state: 'submitting', message: '' })

    try {
      if (onSubmit) {
        await onSubmit(formData, job)
      }

      form.reset()
      setSubmission({
        state: 'success',
        message: 'Your application has been prepared successfully.',
      })
    } catch (error) {
      setSubmission({
        state: 'error',
        message: error?.message || 'We could not send your application. Please try again.',
      })
    }
  }

  return (
    <div
      className="application-modal"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) requestClose()
      }}
    >
      <div
        ref={dialogRef}
        className="application-modal__dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={descriptionId}
        tabIndex={-1}
      >
        <button
          className="application-modal__close"
          type="button"
          aria-label="Close application form"
          onClick={requestClose}
        >
          <X aria-hidden="true" />
        </button>

        <header className="application-modal__header">
          <p className="application-modal__eyebrow">Career opportunity</p>
          <h2 className="application-modal__title" id={titleId}>
            Apply for {jobTitle}
          </h2>
          <p className="application-modal__meta" id={descriptionId}>
            <span>{jobCompany}</span>
            {jobLocation ? (
              <>
                <span aria-hidden="true"> &middot; </span>
                <span>{jobLocation}</span>
              </>
            ) : null}
          </p>
        </header>

        {submission.state === 'success' ? (
          <div className="application-modal__success" role="status">
            <CheckCircle2 aria-hidden="true" />
            <h3>Application ready</h3>
            <p>{submission.message}</p>
            <p>
              This is a preview experience. In the final WordPress build, the form will connect
              to Synthify&apos;s recruitment workflow.
            </p>
            <button
              className="button button--primary button-link button-link--primary"
              type="button"
              onClick={requestClose}
            >
              <span className="button-link__label">Close</span>
            </button>
          </div>
        ) : (
          <form
            ref={formRef}
            className="application-modal__form"
            encType="multipart/form-data"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="jobTitle" value={jobTitle} />
            {job?.id ? <input type="hidden" name="jobId" value={job.id} /> : null}

            <div className="application-modal__field application-modal__field--wide">
              <label htmlFor={`${titleId}-name`}>Full name</label>
              <input
                id={`${titleId}-name`}
                name="name"
                type="text"
                autoComplete="name"
                placeholder="Your full name"
                required
              />
            </div>

            <div className="application-modal__field">
              <label htmlFor={`${titleId}-email`}>Email address</label>
              <input
                id={`${titleId}-email`}
                name="email"
                type="email"
                autoComplete="email"
                placeholder="name@email.com"
                required
              />
            </div>

            <div className="application-modal__field">
              <label htmlFor={`${titleId}-phone`}>Phone number</label>
              <input
                id={`${titleId}-phone`}
                name="phone"
                type="tel"
                autoComplete="tel"
                placeholder="+971 XX XXX XXXX"
                required
              />
            </div>

            <div className="application-modal__field application-modal__field--wide">
              <label htmlFor={`${titleId}-linkedin`}>LinkedIn profile</label>
              <input
                id={`${titleId}-linkedin`}
                name="linkedin"
                type="url"
                autoComplete="url"
                placeholder="https://linkedin.com/in/your-profile"
              />
            </div>

            <div className="application-modal__field application-modal__field--wide">
              <label className="application-modal__upload" htmlFor={`${titleId}-resume`}>
                <Upload aria-hidden="true" />
                <span>
                  <strong>Upload your CV</strong>
                  <small>PDF, up to 2MB</small>
                </span>
              </label>
              <input
                id={`${titleId}-resume`}
                className="application-modal__file-input"
                name="resume"
                type="file"
                accept=".pdf,application/pdf"
                required
              />
            </div>

            <div className="application-modal__field application-modal__field--wide">
              <label htmlFor={`${titleId}-message`}>A short note</label>
              <textarea
                id={`${titleId}-message`}
                name="message"
                rows="4"
                placeholder="Tell us briefly why this opportunity interests you."
              />
            </div>

            <label className="application-modal__consent">
              <input name="consent" type="checkbox" required />
              <span>
                I agree to Synthify processing my details in line with the{' '}
                <Link to="/privacy" onClick={requestClose}>
                  privacy policy
                </Link>
                .
              </span>
            </label>

            {submission.state === 'error' ? (
              <p className="application-modal__error" role="alert">
                {submission.message}
              </p>
            ) : null}

            <button
              className="button button--primary button-link button-link--primary application-modal__submit"
              type="submit"
              disabled={submission.state === 'submitting'}
            >
              <span className="button-link__label">
                {submission.state === 'submitting' ? 'Sending...' : 'Submit application'}
              </span>
              <ArrowRight className="button-link__icon" aria-hidden="true" />
            </button>
          </form>
        )}
      </div>
    </div>
  )
}

function ApplicationModal({ open, onClose, job, onSubmit }) {
  if (!open || typeof document === 'undefined') return null

  return createPortal(
    <ApplicationModalContent onClose={onClose} job={job} onSubmit={onSubmit} />,
    document.body,
  )
}

export default ApplicationModal
