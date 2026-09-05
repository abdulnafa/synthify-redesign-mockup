# Synthify live-site audit

Audit date: 5 September 2026  
Source: `https://synthify.ae`

## Genuine public information architecture

- Home
- About Us
- Our Team
- Services
  - Bulk Recruitment
  - Employee Training & Development
  - HR Consulting & OD Solutions
  - Payroll Solutions
  - Recruitment & Executive Search
- Sectors
- Jobs
- Careers
- Blog
- Contact Us
- FAQ
- Privacy Policy
- Terms & Conditions

An additional finance-job application page was present on the live site. Its useful application requirements were folded into the new job flow instead of preserving a disconnected page.

## Verified content carried into the mockup

- Five genuine service families
- Eleven published sectors
- Four published team members and their existing portraits
- Four substantive vacancies: Senior Underwriter, Senior Manager – Credit Risk, Purchasing Officer and Executive Assistant
- One substantive insight about Abu Dhabi HR reforms
- Public Dubai contact details, office hours and approved social profiles

## Content deliberately excluded

- Nine demo/lorem portfolio items
- Duplicate or empty testimonial records
- Template-builder pages and author/taxonomy archives
- Service cards unrelated to Synthify's HR offer
- Lorem service-detail copy and fake “John Doe” contact material
- Exposed form shortcodes
- Unsupported counters, awards, client logos or performance claims
- Insecure or hot-linked Reobiz theme imagery

## Technical findings for the WordPress phase

- The public `robots.txt` advertised a large set of dead or suspicious sitemap URLs while the legitimate WordPress sitemap was not declared.
- Search visibility should use one clean sitemap index containing only approved public content.
- Careers and application forms need real WordPress form/ATS integration, upload validation, consent logging, spam protection and a confirmed retention policy.
- Jobs should be implemented as a structured content type with archive filters and one reusable single-job template.
- Service, sector, team and insight content should use reusable fields rather than page-builder duplication.
- Redirects should be agreed before old/demo URLs are removed from the production site.

