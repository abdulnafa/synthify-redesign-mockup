# Synthify redesign specification

## Working concept set

- `concepts/01-home-hero.png`: header, first viewport, dual audience CTAs
- `concepts/02-home-services.png`: editorial service rail and employer/candidate split
- `concepts/03-home-process-sectors.png`: process timeline, sector matrix, GCC trust statement
- `concepts/04-service-detail.png`: reusable service detail template
- `concepts/05-jobs.png`: filterable jobs list and candidate/employer split
- `concepts/06-about-team.png`: about narrative, values and team rail
- `concepts/07-contact-footer.png`: contact form, FAQ preview and global footer

These images are the implementation reference. The site must remain code-native; concept screenshots are not shipped as page UI.

## Brand and color lock

- Navy: `#0b1f33`
- Navy deep: `#06182b`
- Synthify blue: `#0f77b8`
- Bright blue: `#078bcb`
- Light blue: `#45b3e6`
- Teal: `#0fae98`
- Coral detail: `#f56b4a`
- Cool mist: `#eef5f7`
- Pale blue: `#f5f9fb`
- White: `#ffffff`
- Text: `#0b1f33`
- Muted text: `#526273`
- Hairline: `#d9e3e8`

White areas remain true white. Cool mist is used only in clearly tinted bands. Photography has no color overlay or tint.

## Typography

- Display/UI family: Manrope, with Arial/sans-serif fallback
- Body family: Inter, with Arial/sans-serif fallback
- Desktop H1: clamp from 64px to 84px, 0.95–1.02 line height, weight 700
- Interior H1: clamp from 54px to 72px
- H2: clamp from 38px to 56px, 1.02–1.12 line height
- H3: 24–32px
- Body: 17–18px, 1.6 line height
- UI/control text: 14–16px, weight 600

## Layout and container model

- Max content width: 1320px
- Desktop gutters: 48–64px; tablet: 28–36px; mobile: 20px
- Header: 88px desktop, 72px mobile, true-white sticky surface
- Open editorial bands and hairline-separated lists are preferred over card grids
- Media radii: 16px; controls: 10–12px; buttons: 8–10px
- Section spacing: 112–144px desktop, 72–88px tablet, 56–68px mobile
- One recurring connection-line motif: thin blue/teal line, a small coral origin dot, and directional arrow

## Component families

- Header with desktop nav, mobile drawer, active-page state and one primary consultation CTA
- Primary, outline and text-link buttons with production SVG arrows
- Editorial service rail with selected state and shared image panel
- Audience split band for employer and candidate routes
- Four-step connected process timeline
- Hairline sector matrix with small consistent outline icons
- Reusable page hero with split/full variants
- Service detail deliverable list, process line, audience list and CTA
- Filterable jobs table/list with local keyword, location and sector state
- Job detail layout and accessible application modal/form
- Team portrait rail using the client’s actual portraits
- Contact form with audience mode, validation and success state
- FAQ accordion
- Insight/post list and post detail
- Deep navy footer with real LinkedIn/Instagram links only

## Icon system

- Custom inline SVG or Lucide-style outline icons
- 1.7–2px rounded stroke, no filled icon containers by default
- 18–22px in controls; 28–34px in sector/process content
- Icons inherit navy or teal via `currentColor`

## Image inventory and treatment

- `public/assets/generated/hero-team.webp`: homepage/about hero; landscape; no overlay; `object-position: center`
- `public/assets/generated/workforce-planning.webp`: service rail and service pages; no overlay
- `public/assets/generated/gcc-expertise.webp`: sectors/GCC section; no overlay
- `public/assets/generated/career-conversation.webp`: jobs/careers hero; no overlay
- `public/assets/team/*`: actual Synthify team portraits; consistent 1:1 crops; identities must not be generated or altered
- Existing Reobiz demo imagery and insecure hot-linked theme assets are prohibited

## Information architecture

- Home
- About
- Team
- Services
  - Bulk Recruitment
  - Employee Training & Development
  - HR Consulting & OD Solutions
  - Payroll Solutions
  - Recruitment & Executive Search
- Sectors
- Jobs
- Careers
- Insights
- FAQ
- Contact
- Privacy
- Terms

WordPress demo portfolios, duplicate testimonials, template-builder routes, author/taxonomy archives and suspicious sitemap URLs are intentionally excluded.

## Homepage order and allowed first-viewport copy

1. Header
2. Hero
3. People strategy/service rail
4. Employer/candidate split
5. Recruitment process
6. Sector knowledge
7. GCC trust statement
8. About/team preview
9. Insight preview
10. Consultation CTA
11. Footer

Allowed above-the-fold copy:

- `SYNTHIFY`
- `THE PEOPLE · THE POWER · THE PASSION`
- `About`, `Services`, `Sectors`, `Jobs`, `Insights`
- `Book a consultation`
- `The right people move business forward.`
- `Strategic recruitment and people solutions shaped for the UAE and GCC.`
- `Build your team`
- `Find your next role`
- `Dubai, UAE`, `info@synthify.ae`, `+971 56 196 2029`
- next-section preview: `People strategy, built around your business.`

No hero eyebrow, kicker, badge, pill, fake metric, client logo, award or testimonial is allowed.

## Motion and accessibility

- 180–320ms transitions; subtle line draw and section reveal only
- Respect `prefers-reduced-motion`
- Visible focus rings, semantic headings, labeled inputs, keyboard-operable navigation/modal/accordion
- Minimum 44px interactive targets
- AA contrast for body and control text

## Responsive continuation

- Split heroes collapse to copy first, image second
- Navigation becomes a full-width drawer
- Services rail becomes stacked selectable rows above the image
- Timeline becomes a vertical line
- Job rows become labeled stacked rows without losing actions
- Team uses two columns on tablet and one/two columns on small mobile
- Footer collapses into grouped columns while retaining direct contact details
