# Design Brainstorm — Law Offices of Jeffrey "Zeke" Zyjeski

The website must convey *elite government relations counsel* combined with *unassailable legal authority*. The visual language should feel weightier and more sophisticated than competitors like Gaffney Bennett (dated burgundy/dark hero), Sullivan & LeShane, and Capitol Strategies Group — most of whom rely on stock Capitol photography, generic sans-serifs, and centered hero CTAs. Below are three distinct directions, each committing fully to a single design philosophy.

---

<response>
<text>

## Idea 1 — "The Capitol Dossier" (Editorial Statecraft)

**Design Movement**: Editorial statecraft — a fusion of *The Economist*-style editorial typography, *Hoefler & Co.* specimen pages, and the restrained chrome of a modern law firm like Wachtell or Sullivan & Cromwell. Inspired by classified government dossiers and Senate hearing-room signage.

**Core Principles**:
1. **Authority through restraint** — silence, generous margins, and a single accent color do more work than animation.
2. **Document-grade typography** — every heading reads like an opening line in a brief.
3. **Asymmetric editorial grid** — one wide column for argument, a thin column for marginalia (credentials, quotes, dates).
4. **Monochrome with one signature accent** — never decorative color, only emphasis.

**Color Philosophy**:
- Background: deep ink navy `oklch(0.18 0.025 255)` — the color of a leather-bound Connecticut General Statutes volume.
- Foreground: warm parchment `oklch(0.94 0.012 80)` — slightly cream, never pure white, evoking aged document stock.
- Accent: brushed brass `oklch(0.74 0.10 80)` — used sparingly for rules, drop caps, and the CTA.
- Secondary surfaces: a muted slate `oklch(0.24 0.018 255)` for cards.

**Layout Paradigm**: A 12-column editorial grid where the left 8 columns carry argument (hero headline, body, services) and the right 4 columns carry "marginalia" — pull quotes, year-stamps ("Est. 1998 — CT Capitol"), and small attestations ("Admitted, U.S. Supreme Court"). Hero is left-aligned, full-bleed background, with a vertical brass rule bisecting the screen. Sections are separated by hairline rules with small Roman-numeral section numbers (I., II., III.).

**Signature Elements**:
1. **Vertical brass rule** that runs the full height of the page on the left edge — like the binding of a legal volume.
2. **Roman-numeral section markers** ("§ I — Counsel") to evoke statutory drafting.
3. **Drop-cap opening paragraph** on the introduction with a brass illuminated initial.

**Interaction Philosophy**: Almost no animation on hover — instead, the brass rule under links draws itself in 220ms ease-out (think: a fountain pen underlining a passage). Section transitions on scroll fade in with a 40px upward translate, no parallax, no scale. Restraint signals confidence.

**Animation**:
- Hero headline: characters fade in with 30ms stagger, no scale, only opacity + 8px Y.
- Brass rule under nav links: scaleX from 0 to 1 (transform-origin left), 220ms cubic-bezier(0.23, 1, 0.32, 1).
- Card hover: hairline border shifts from slate to brass, no lift, no shadow.
- Reduced motion: zero animation, all states static.

**Typography System**:
- Display: **Canela Deck** or **GT Sectra** (high-contrast serif with editorial feel). Fallback: **Playfair Display** via Google Fonts at weights 500/700.
- Body: **Inter Tight** at 400/500 — clean, neutral, legal-document feel; or **Söhne** if available, fallback **Manrope**.
- Marginalia: **JetBrains Mono** at 11–12px uppercase letterspaced for credentials and timestamps.
- Hierarchy: H1 80–120px tight leading (1.02), H2 36px, body 17px/1.7, marginalia 12px tracked +120.

**Probability**: 0.06

</text>
<probability>0.06</probability>
</response>

---

<response>
<text>

## Idea 2 — "Hartford After Dark" (Cinematic Power)

**Design Movement**: Cinematic political-thriller aesthetic — think *House of Cards* title sequence, the visual language of HBO's political documentaries, and the dark editorial mode of high-end financial advisory sites (Brunswick Group, Teneo). Heavy on photographic atmosphere, low-key lighting, and gold-on-charcoal typography.

**Core Principles**:
1. **Atmospheric darkness** — the entire site lives in a near-black palette, photographs lit like film stills.
2. **Architectural photography as narrative** — Connecticut Capitol dome at dusk, marble corridors, brass details.
3. **Confident gold accent** — a warm, slightly desaturated gold (not yellow) used for emphasis and CTAs.
4. **Cinematic motion** — slow Ken Burns pans on hero imagery, deliberate fades.

**Color Philosophy**:
- Background: charcoal-black `oklch(0.12 0.008 250)` — never pure black; always with a hint of cool blue.
- Foreground: warm white `oklch(0.96 0.008 80)`.
- Accent (gold): `oklch(0.78 0.12 75)` — burnished, Roman, never neon.
- Secondary surfaces: `oklch(0.16 0.010 250)` cards, `oklch(0.22 0.012 250)` borders/dividers.
- Image treatment: all photography graded with a slight teal-orange split tone, vignetted.

**Layout Paradigm**: Cinematic widescreen aspect ratio for hero — 21:9 image of CT Capitol dome at twilight, with headline overlaid bottom-left in cinematic lower-third style. Content sections alternate between full-bleed photography and dark editorial panels. Service cards arranged in a 3-up asymmetric layout where the middle card sits 40px lower than the outer two, creating a subtle "dais" formation.

**Signature Elements**:
1. **Lower-third title bar** on hero — a thin gold rule with kicker text above the headline ("Government Relations & Administrative Law").
2. **Capitol dome silhouette motif** — a hand-traced SVG outline used as a watermark behind the About section.
3. **Numbered service cards** with oversized gold serif numerals (01, 02, 03) anchoring each.

**Interaction Philosophy**: Every interaction feels deliberate and weighty — like a heavy mahogany door closing. Hovers reveal additional layers (a card gains a faint gold border-glow, an image desaturates slightly to surface text). Cursor follows a subtle gold dot on interactive zones.

**Animation**:
- Hero photo: slow Ken Burns scale from 1.0 → 1.06 over 12s linear, infinite alternate.
- Hero headline: 60ms-staggered word reveal, 600ms each, opacity + 16px Y, ease-out.
- Card hover: gold border fades in over 200ms, image inside scales 1.03 over 400ms ease-out.
- Section divider: a 1px gold line draws across the viewport on intersection, 800ms.
- Reduced motion: Ken Burns stops, all entrances become instant fades only.

**Typography System**:
- Display: **Editorial New** or **Tiempos Headline** (high-contrast Didone-adjacent serif). Google fallback: **Cormorant Garamond** at 500/700 — narrow, cinematic, authoritative.
- Body: **Söhne** or fallback **Inter** at 400/500, generous 1.65 line-height.
- Eyebrow/kicker: **Söhne Mono** or **JetBrains Mono** at 11px, uppercase, +200 tracking, gold color.
- Hierarchy: H1 96px (clamp 56–112), H2 44px, eyebrow 11px tracked, body 18px.

**Probability**: 0.07

</text>
<probability>0.07</probability>
</response>

---

<response>
<text>

## Idea 3 — "Marble & Memo" (Neoclassical Modernism)

**Design Movement**: Neoclassical modernism — the marriage of marble-and-bronze classical architecture with Swiss modernist information design. Inspired by the National Gallery's identity, the typographic discipline of Massimo Vignelli, and the contemporary luxury of brand work for Hermès or Loro Piana.

**Core Principles**:
1. **Light, not dark** — confidence through brightness, like sunlit marble corridors.
2. **Classical proportion** — golden-ratio columns, high baselines, generous leading.
3. **Material honesty** — actual marble texture (subtle), bronze hairlines, off-white paper.
4. **Information clarity** — Swiss-style data tables for credentials, timeline of career.

**Color Philosophy**:
- Background: warm marble white `oklch(0.97 0.006 80)` with a faint paper grain texture overlay.
- Foreground: deep oxblood `oklch(0.28 0.06 25)` — the color of a Connecticut Bar Association seal, used for body text and headlines.
- Accent (bronze): `oklch(0.55 0.08 55)` — antique bronze, used for rules and CTAs.
- Secondary: a soft bone `oklch(0.93 0.008 80)` for alternating sections.
- A single deep navy `oklch(0.22 0.04 255)` reserved for the footer only.

**Layout Paradigm**: A two-column classical layout with golden-ratio proportions (1:1.618). The left column anchors imagery and large display type; the right column carries body copy in a narrower measure (60ch max). Hero uses an oversized serif headline that breaks across two lines with a bronze rule between them. Services are presented as a vertical timeline with bronze nodes — each service flows down the page rather than sitting in a card grid.

**Signature Elements**:
1. **Bronze hairline framing** — a 1px bronze border insets 24px from the viewport edge on desktop, evoking a framed document.
2. **Numbered timeline** for the career story (1998 → present) with bronze date markers.
3. **Embossed monogram "JZ"** — a custom mark used as favicon, footer, and section breaks.

**Interaction Philosophy**: Tactile and paper-like. Cards lift with a soft warm shadow on hover (think: a document being slightly raised off a desk). Links underline with a bronze rule that grows from left to right. The cursor on CTAs gains a subtle bronze ring.

**Animation**:
- Hero serif headline: split into two lines, each line slides up 24px and fades in over 700ms, 100ms apart, ease-out.
- Bronze rule between lines: scaleX 0→1 from center, 500ms after headline lands.
- Timeline nodes: stagger in on intersection, each scale 0.9→1, opacity 0→1, 60ms apart.
- Card hover: lift -4px, warm shadow expands, 220ms ease-out.
- Reduced motion: hover lifts disabled, entrances become opacity-only.

**Typography System**:
- Display: **GT Super Display** or fallback **Cormorant Garamond** / **Playfair Display** at 600 — high-contrast, classical serif with elegant ball terminals.
- Body: **Sohne** or fallback **Source Serif 4** at 400 — yes, a serif body, to commit fully to the editorial/legal-document feel.
- Captions/labels: **Söhne Breit** or fallback **Inter** at 500, small caps where supported.
- Numerals: oldstyle figures throughout for a refined editorial look.
- Hierarchy: H1 88px (clamp 48–104), H2 40px, body 18px/1.75 serif, caption 13px small-caps tracked.

**Probability**: 0.05

</text>
<probability>0.05</probability>
</response>

---

## Selection

I'm choosing **Idea 2 — "Hartford After Dark"**.

Rationale: A government relations attorney needs to convey power, gravitas, and an insider's command of the Capitol — qualities best expressed through cinematic darkness, restrained gold, and atmospheric Capitol imagery. It will visually separate Zeke's site from the dated burgundy aesthetic of Gaffney Bennett (his former firm) and the generic blue/white templates used by most CT lobbying firms, signaling a modern, premium independent practice. The cinematic gold-on-charcoal approach also reinforces the "elite" and "unassailable" language in the copy.

Every CSS file, component, and page in this build must reinforce: dark charcoal base, burnished gold accent, high-contrast Didone-adjacent serif display + clean grotesque body, lower-third title treatment, numbered services, deliberate cinematic motion.
