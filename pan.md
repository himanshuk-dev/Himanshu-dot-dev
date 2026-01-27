# V1 Implementation Plan

## Goals
- Deliver a smooth, scroll-driven narrative that feels like a guided resume.
- Present who I am, what I do, and why it matters with clear, progressive disclosure.
- Go beyond conventional portfolio layouts with deliberate UX, tasteful animations, and effects.

## Narrative Flow (Single Scroll)
1. Hero: Identity, role, and primary CTA.
2. Origin: Short story of the pivot and motivation.
3. Credibility: Timeline highlights and core skills.
4. Work: Featured case studies with impact and outcomes.
5. Proof: Testimonials, metrics, or awards (if available).
6. Services: Clear offerings and ideal engagement.
7. Contact: Strong closing CTA and easy contact links.

## Route Strategy
- Primary v1 experience under `/v1`.
- Version switcher to jump between `/v0` and `/v1`.
- Anchor navigation for smooth section jumps.

## Visual Direction
- Distinctive typographic system (headline + body pairing).
- Rich background treatment (gradients, shapes, or subtle patterns).
- Motion language: section reveals, staggered cards, and scroll-linked transitions.
- Color system tuned for clarity and emphasis, not default palettes.

## Sections to Build (V1)
- Hero narrative block with CTA.
- Story/Origin section with short, readable copy.
- Timeline or milestones, visually guided.
- Featured case study blocks with outcomes and tech stack.
- Services summary with conversion-focused CTA.
- Contact and social proof footer.

## Content Tasks
- Rewrite hero and story copy for a narrative tone.
- Curate 3-5 featured projects with outcomes.
- Define proof points (metrics, awards, testimonials).
- Align service descriptions with target clients.

## Implementation Steps
1. Add `/v1` route and scaffold v1 page container.
2. Build base layout and section components.
3. Implement visual system (type, color, background).
4. Add motion and transitions in key sections.
5. Polish responsiveness and accessibility.

## Success Criteria
- Clear, smooth story flow without dead-ends.
- CTA visible at top and bottom.
- Distinct visual identity vs. v0.
- Responsive and performant on mobile and desktop.
