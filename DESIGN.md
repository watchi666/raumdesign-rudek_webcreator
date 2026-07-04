# DESIGN.md — RaumDesign Rudek Redesign

## 1. Visual Theme
**Aesthetic direction:** warm editorial craft with dark lime-plaster atmosphere. The website should feel like a refined Düsseldorf interior surface studio, not like a generic painter website. Dominant impression: mineral textures, calm confidence, premium handwork.

**Wow moment:** full-bleed real plaster/detail photograph, warm dark overlay, oversized editorial typography, and a small material-card stack for Kalkputz, Lasuren, Edeltechniken and Farbkonzepte.

## 2. Color Palette
- `--ink`: #1c1713 — warm near-black.
- `--soil`: #2f261f — dark plaster background.
- `--clay`: #8c6a4f — earthy support.
- `--lime`: #d8c7a6 — mineral lime accent.
- `--paper`: #f6f0e6 — warm off-white.
- `--sand`: #e6d8c3 — muted section background.
- `--gold`: #b88a42 — CTA/highlight accent.

Image text always receives a full overlay.

## 3. Typography
- Display: Fraunces Variable — warme, handschmiedete Display-Serife mit optischer Größenachse (`font-optical-sizing: auto`), mehr Charakter als ein reines Buch-Serif.
- Body/UI: Schibsted Grotesk Variable — zeitgemäßer Grotesk mit Persönlichkeit statt neutralem Standard-Sans.
- Hero: clamp(2.6rem, 6.4vw, 6rem) — bewusst unter 96px gedeckelt, damit die Headline gestaltet statt geschrien wirkt.
- Section headings: clamp(2rem, 4vw, 3.6rem).

## 4. Component Styling
Header: dark translucent bar. Hero: real full-bleed image. Services: offset editorial cards. Gallery: masonry-like responsive grid using all original website images. Contact: visible labels, direct phone priority.

## 5. Layout Principles
No two consecutive sections repeat the same structure. Use asymmetry, overlap, vertical offsets and full-bleed bands. Preserve original business logic: home, gallery, about, services, contact, legal.

## 6. Depth / Elevation
Grain/noise feel via CSS overlays, warm tinted shadows, layered image cards with thin lime borders.

## 7. Do / Don't
**Do:** real images, visible material texture, clear local contact, human German copy, artisan credibility.
**Don't:** AI purple gradients, generic corporate blue, placeholder-only forms, glassmorphism, fake stock people, agency meta language.

## 8. Responsive Behavior
Mobile stacks content in single-column order. Touch targets >= 44px. Gallery uses responsive columns.

## 9. Agent Prompt Guide
Build a premium but grounded German local-business website for RaumDesign Rudek. Use original images only. Preserve facts: Daniel Rudek, Kirchstraße 37, 40227 Düsseldorf, Telefon 0162/9353172, raumdesign-rudek@t-online.de. Emphasize kreative Raum- und Wandgestaltung, Kalk-/Marmorputze, ökologische Materialien, sauberes Arbeiten and Beratung.


## Typography Revision — 2026-07-03
Playfair Display + DM Sans wurde entfernt. Neue Paarung: Newsreader + Source Sans 3. Grund: Playfair/DM wirkt in diesem Kontext zu glatt und zu nah am generischen AI-Premium-Look; Newsreader wirkt editorialer und materialnäher, Source Sans 3 bleibt klar ohne Poppins/Inter/Montserrat-Slop.

## Typography Revision — 2026-07-04
Zwei parallele Pipelines haben unabhängig voneinander dieselbe Playfair/DM-Sans-Ablösung vorgenommen: diese (Newsreader + Source Sans 3) und eine zweite mit Fraunces + Schibsted Grotesk. Nach visuellem Vergleich beider Varianten im Browser hat sich der Kunde für **Fraunces + Schibsted Grotesk** entschieden (siehe Abschnitt 3, aktueller Stand). Newsreader + Source Sans 3 bleibt hier als dokumentierte Alternative festgehalten, ist aber nicht mehr im Code aktiv.
