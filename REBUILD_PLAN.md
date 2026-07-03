# REBUILD_PLAN.md — RaumDesign Rudek

## Phase 1 — Brand Extraction
RaumDesign Rudek is a Düsseldorf painter/interior-surface business focused on creative wall design, Kalkputz, Marmorputz, Lasuren, ecological materials and individual color concepts. The original site has real craft photos and substance, but the builder layout weakens the first impression.

## Phase 2 — SEO Audit
Target keywords:
- Malerfachbetrieb Düsseldorf
- Raumgestaltung Düsseldorf
- kreative Wandgestaltung Düsseldorf
- Kalkputz Düsseldorf
- Marmorputz Düsseldorf
- Maler Düsseldorf

SEO actions: unique titles/descriptions, LocalBusiness JSON-LD, semantic heading hierarchy, consistent NAP data, sitemap and robots.txt.

## Phase 3 — Design & UX Audit
Original issues: weak hero, builder artifacts, gallery not curated, contact not conversion-led. Improvement: full-bleed material hero, direct call CTA, clearer services, gallery as proof, visible-label contact form.

## Phase 4.5 — Pre-Code Design Commitment
Aesthetic direction: warm editorial craft / mineral interior atelier. Dark lime-plaster atmosphere, warm earth tones, large serif typography.

Homepage sections:
1. Hero: full-bleed photo, dark overlay, asymmetric text and material cards.
2. Trust strip: three benefit points.
3. About craft: split layout with overlapping image.
4. Services: bento layout.
5. Materials: dark full-bleed proof section.
6. Process: staggered steps.
7. Gallery teaser: original image collage.
8. CTA/contact: direct phone and form.

Wow moment: the hero should feel like an interior-design magazine, but remain local and handwerklich.

## Phase 4 — Image Plan
All images from the original website were downloaded into `original-site/assets/` and copied to `public/images/`.
- Hero: `Glittzerputz-mit-Lasuren-1920w.JPG`
- About: `P1010496-2880w.JPG`
- Services/materials: `IMG_0464-270ae91a-1920w.JPG`, `Stuhhi-mit-Lasuren-077aab10-1920w.JPG`, `IMG_4313-1920w.JPG`
- Gallery: all downloaded assets.

## Phase 5 — Build
Astro 5 + Tailwind v4, static pages: Home, Leistungen, Über uns, Galerie, Kontakt, Impressum, Datenschutz, 404.

## Phase 6 — Copy Optimization
Original facts retained, wording tightened for conversion and readability.

## Phase 7 — QA Plan
Run `npm run build`; preview locally; check images, links, labels, console, and basic responsive layout.

## Phase 8/9 — Deployment
GitHub target: `watchi666/raumdesign-rudek_webcreator`. Vercel preview deployment.
