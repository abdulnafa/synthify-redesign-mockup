# Synthify website redesign mockup

A production-style React/Vite redesign for Synthify HR Solutions, created as a client-review prototype before WordPress implementation.

## Run locally

```bash
npm install
npm run dev
```

Production check:

```bash
npm run lint
npm run build
npm run preview
```

The app uses `HashRouter`, relative asset paths and a relative Vite base so the same build can be hosted safely from a GitHub Pages project subdirectory.

## Included routes

- Home, About and Team
- Services index and five service detail pages
- Sectors
- Jobs index, four audited job detail pages and an application modal
- Careers
- Insights and article detail
- FAQ and Contact
- Privacy Policy and Terms & Conditions

## Content and asset boundaries

- Content is based on the genuine public pages and records audited on `synthify.ae` on 5 September 2026.
- Demo portfolios, duplicate placeholder testimonials, builder templates, suspicious sitemap paths and clearly fabricated metrics were deliberately excluded.
- Synthify's existing logo and published team portraits are retained.
- Hero and supporting editorial photography was generated specifically for this redesign and is stored as optimized WebP under `public/assets/generated`.
- Fonts are self-hosted under `public/assets/fonts`; the public demo has no Google Fonts runtime dependency.
- Enquiry, CV and job-application forms demonstrate validation and success states but intentionally do not transmit personal data. Their WordPress endpoints should be connected only after the client approves the workflow.

## WordPress handoff

The reusable React sections map directly to WordPress blocks/templates: global header/footer, page hero, services rail, sector directory, jobs archive/single, team directory, FAQ accordion, contact forms and legal content. Keep the approved design tokens in `design/design-system.md` and the audited content boundaries in `design/site-audit.md` during migration.
