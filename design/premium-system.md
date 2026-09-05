# Synthify premium design system

## Direction

Human, editorial and GCC-aware. The site should feel closer to a premium executive-search consultancy than a technology template: decisive typography, solid colour fields, architectural line work and real people at work.

## Visual tokens

- Ink: `#061827`
- Deep navy: `#08263a`
- Sky: `#42b9e8`
- Coral signal: `#f15b4f`
- Warm paper: `#f5f3ee`
- White: `#ffffff`
- Display sans: `Manrope`, bold and tightly tracked
- Editorial serif: `DM Serif Display`, used only for selected headline emphasis
- Maximum content width: `1440px`
- Primary grid: 12 columns on desktop, 6 on tablet, 4 on mobile

## Signature composition

- Full-viewport navy hero with a right-weighted leadership photograph.
- Large masked headline lines with one serif italic accent and a coral full stop.
- Fine cyan rules provide the recurring visual thread.
- Warm-white service chapter uses one shared media stage and a numbered rail instead of cards.
- Dark two-audience split expands subtly on hover/focus.
- Process is connected by a line that draws when the section enters the viewport.
- Sector names move as a restrained ticker, with a static reduced-motion fallback.

## Motion choreography

- Page transition: 420ms opacity/y, once per route.
- Hero headline: 80ms line stagger; image clip reveal: 900ms.
- Section reveal: 650ms opacity/y with one-time viewport trigger.
- Service change: 420ms crossfade and 20px directional movement.
- Hover response: 180–240ms.
- Parallax: no more than 5% of media height.
- Honour `prefers-reduced-motion`; remove transforms and looping motion when requested.

## Responsive rules

- Desktop: type-led 55/45 hero, image edge-to-edge on the right.
- Tablet: image becomes a lower-right layer; copy keeps priority.
- Mobile: single column, 44px minimum targets, both audience routes remain visible, service rail becomes an accordion, and all tickers become horizontally scrollable static lists under reduced motion.

## Content rules

- Keep verified Synthify services, sectors, team names, roles and contact details.
- Do not invent metrics, client logos, testimonials, awards or office locations.
- Use generated photographs as art direction assets only; keep interface text code-native.
