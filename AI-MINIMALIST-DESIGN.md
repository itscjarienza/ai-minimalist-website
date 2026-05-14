---
version: "2.0"
name: The AI Minimalist
description: Design system for The AI Minimalist — CJ Arienza's personal brand. Warm, grounded, diagnostic. Built on the principle that clarity is more valuable than decoration. v2.0 formalizes the dark-primary direction and the icon/illustration asset system.

colors:
  # Dark-primary palette (v2.0 default — website and digital)
  bg: "#0C0C0A"
  surface: "#141412"
  surface-hi: "#1C1C19"
  border: "rgba(237,226,199,0.07)"
  border-hi: "rgba(237,226,199,0.13)"
  cream: "#EDE2C7"
  accent: "#F0F8BE"
  text: "rgba(237,226,199,0.80)"
  muted: "rgba(237,226,199,0.38)"
  dim: "rgba(237,226,199,0.18)"
  # Light-primary palette (print, light-mode contexts)
  light-bg: "#EDE2C7"
  light-surface: "#EDEDED"
  light-primary: "#242424"
  light-muted: "#5B5B5B"

typography:
  display:
    fontFamily: Fraunces
    fontSize: clamp(52px, 7.5vw, 108px)
    fontWeight: 400
    lineHeight: 0.98
    letterSpacing: -0.02em
  h2:
    fontFamily: Fraunces
    fontSize: clamp(28px, 3.2vw, 46px)
    fontWeight: 400
    lineHeight: 1.12
    letterSpacing: -0.01em
  h3:
    fontFamily: Fraunces
    fontSize: 22px
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: 0em
  body:
    fontFamily: Epilogue
    fontSize: 15px
    fontWeight: 300
    lineHeight: 1.65
    letterSpacing: 0em
  support:
    fontFamily: Epilogue
    fontSize: 13px
    fontWeight: 300
    lineHeight: 1.7
    letterSpacing: 0em
  mono:
    fontFamily: JetBrains Mono
    fontSize: 10px
    fontWeight: 300
    lineHeight: 1.4
    letterSpacing: 0.16em
  label:
    fontFamily: JetBrains Mono
    fontSize: 9px
    fontWeight: 300
    lineHeight: 1.4
    letterSpacing: 0.22em

rounded:
  none: 0px

spacing:
  xs: 8px
  sm: 16px
  md: 24px
  lg: 32px
  xl: 48px
  2xl: 64px
  3xl: 80px

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.bg}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "12px 24px"
  button-primary-hover:
    backgroundColor: "{colors.muted}"
    textColor: "{colors.bg}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.primary}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "12px 24px"
  nav-link:
    textColor: "{colors.muted}"
    typography: "{typography.label}"
  nav-link-active:
    textColor: "{colors.primary}"
  card:
    backgroundColor: "{colors.neutral}"
    rounded: "{rounded.none}"
    padding: "{spacing.lg}"
  divider:
    backgroundColor: "{colors.primary}"
    height: 1px
  highlight:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.primary}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "2px 8px"
---

## Overview

The AI Minimalist is a thought leadership brand built around one idea: AI should be used intentionally, not reflexively. The visual system reflects that principle — warm and human, but stripped of decoration. Nothing is here by accident.

The brand speaks to founders and operators who are overwhelmed by AI noise and want clarity. The design must feel like a trusted advisor's workspace — ordered, confident, without performance.

## Colors

The palette is built on warm cream (`#EDE2C7`) as the primary background — not white, not cold. It reads as considered, not clinical. The primary text is near-black (`#242424`), never pure black, which would feel harsh against the warm background.

The accent (`#F0F8BE`) is cream-yellow — used sparingly, once per section at most. It functions as a highlight, not a theme color. The neutral grey (`#EDEDED`) handles secondary surfaces. Muted grey (`#5B5B5B`) handles supporting text and inactive states.

Three colors maximum in any single composition. Cream yellow earns its appearance — don't use it just to fill space.

## Typography

**Fraunces** is the display typeface — editorial, slightly quirky, with optical character. It is used exclusively for display text: H1, H2, hero headlines. Never in body copy, never in UI elements, never bold. Its weight 400 is deliberate — Fraunces at 400 has enough authority without needing to shout.

**Epilogue** handles everything else: navigation, body copy, labels, captions, supporting text. It is geometric and clean, which provides contrast against Fraunces's warmth. Body copy runs at 15px/300 — lighter than default, which creates openness on the page. Labels are tracked at +0.12em for legibility at small sizes.

Fraunces and Epilogue should never feel like they're competing. Fraunces anchors; Epilogue explains.

## Layout

Spacing is built on an 8px base unit. All spacing decisions should land on values in the defined scale: 8, 16, 24, 32, 48, 64, 80. Nothing in between.

White space is not wasted space — it is a brand signal. The AI Minimalist does not crowd content.

## Shapes

Zero border radius throughout. Every corner is sharp. This is not an accident or an oversight — it is a commitment to precision. Rounded corners suggest softness and approachability that would undercut the brand's diagnostic confidence.

No drop shadows. Elevation is not part of the visual vocabulary. Surfaces sit flat.

Dividing lines are 1px only, at 20–40% opacity. They separate, not decorate.

## Components

**CTA Button:** Near-black background, cream text, all-caps Epilogue label, 12px vertical / 24px horizontal padding. On hover, background shifts to muted grey. Sharp corners always.

**Nav Link:** Epilogue label, muted grey at rest, near-black on active/hover. No underlines, no backgrounds — the state change is enough.

**Card:** Neutral grey background, no shadow, no border, sharp corners, 32px padding. Content inside a card should breathe.

## Icon Library

All icons live at `ai-minimalist/branding/svg-library/icons/`. Each icon exists in `-dark` and `-light` variants. All are 24×24px, 1px strokes, no fills except the placed dot.

**Set 01 — Concepts** (abstract system states)
- `01-baseline` — a horizontal line with faint vertical axis. Use for: ground state, starting point, reference.
- `01-convergence` — three lines merging to a ringed node. The brand logomark reduced to an icon. Use for: the AI Minimalist framework itself, convergence of signals.
- `01-layers` — three horizontal lines at descending opacity. Use for: stacked complexity, depth.
- `01-noise` — irregular marks. Use for: signal-to-noise ratio, chaos, input overload.
- `01-reduction` — converging lines without the node. Use for: simplification in progress.
- `01-shift` — diagonal offset lines. Use for: change, before/after states.
- `01-signal` — a line ending in a filled dot. Use for: clear output, signal found, insight delivered.
- `01-subtract` — lines with one removed. Use for: elimination, cutting waste.

**Set 02 — Process** (flow and system states)
- `02-alert` — exclamation circle. Use for: warning, friction point, attention needed.
- `02-dead-end` — path with closed terminus. Use for: broken process, no exit.
- `02-entry` — line entering a circle. Use for: start of process, input node.
- `02-exit` — line exiting a circle. Use for: end of process, output node.
- `02-fork` — branching path. Use for: decision point, branching logic.
- `02-loop` — partial arc with L-corner. Use for: stuck cycle, repetition without exit, broken loop.
- `02-pipeline` — line with two inline circles. Use for: sequential process, pipeline view.
- `02-step` — simple segment. Use for: single process step, discrete action.

**Set 03 — Analysis** (audit and diagnostic tools)
- `03-brief` — document-like rectangle. Use for: brief, document, scope definition.
- `03-cleared` — circle with checkmark. Use for: validated, passed filter, confirmed.
- `03-lens` — search circle with diagonal handle. Use for: map the system, discovery, looking deeper.
- `03-mark` — target with center dot. Use for: marked finding, flagged item.
- `03-measure` — baseline with rising bars. Use for: find the waste, measurement, gap analysis.
- `03-probe` — circle with exclamation dot. Use for: apply the filter, the diagnostic question.
- `03-rank` — ordered list marks. Use for: prioritization, ranking output.
- `03-target` — concentric rings with center. Use for: objective, goal, outcome.

**Set 04 — Implementation** (AI placement and delivery)
- `04-bridge` — arc connecting two points. Use for: connection between process and AI.
- `04-center` — node with cardinal spokes. Use for: central integration, hub placement.
- `04-link` — chain segment. Use for: connection, integration between tools.
- `04-misfit` — dim circle with X. Use for: wrong placement, mismatch, tool that doesn't fit.
- `04-node` — circle with cardinal spokes and gaps. Use for: AI node, integration point.
- `04-placed` — `line · ring · filled dot · line`. The core brand metaphor. Use for: AI correctly placed, place the AI step, successful implementation.
- `04-plug` — plug shape. Use for: connection, plugin, integration.
- `04-stack` — four squares (last at 30% opacity). Use for: tool sprawl, redundant subscriptions, excess.

**Icon usage rules:**
- Always use the correct variant for the background (dark icons on light, light icons on dark).
- Default opacity in context: 25–30%. On hover: 55–65% with `filter: drop-shadow(0 0 6px rgba(237,226,199,0.32))`.
- The filled dot in `04-placed` and `01-signal` may be animated (see Animation Patterns).
- Never scale below 16px. Minimum touch target: 32px.

## Illustration Library

All illustrations live at `ai-minimalist/branding/svg-library/illustrations/`. Each exists in `-dark` and `-light` variants, and in size variants (L = 400px wide, M = medium, S = small).

**01 — Complexity / Simplicity**
- `01-complexity` — many crossing lines with node points at intersections. Represents: a messy, unmapped operation. Use behind problem sections at opacity 0.04–0.06.
- `01-simplicity` — three lines converging to a ringed node with filled dot. The brand logomark at illustration scale. Use as a hero watermark or philosophy accent at opacity 0.04–0.06.

**02 — Flow**
- `02-flow` — vertical flowchart: circle → rect → diamond → rect → placed-node. Represents: a mapped process with a clear outcome. Use in methodology sections.

**03 — Audit**
- `03-audit` — horizontal pipeline with dashed analysis circle overhead and measurement flags. Represents: the audit in action — process mapped and examined. Use in audit offer card or audit section headers.
- `03-doc` — document shape. Use for: brief, written output, scope document.

**04 — Placement**
- `04-ai-node` — small AI node symbol. Use inline.
- `04-placed` — full pipeline: circle → rect → AI-circle → rect → placed-node. The complete AI placement process. Use in hero dashboard area, implementation section, or offer card.
- `04-overreach` — chaotic lines. Represents: AI placed everywhere, overcomplicated. Use as a contrast element near problem statements.

**05 — Waste**
- `05-waste` — horizontal baseline with branches that drop away at descending opacity. Represents: processes losing value, time draining. Use behind waste identification sections at opacity 0.04.
- `05-waste-map` — annotated waste baseline. Use in audit deliverable contexts.

**Illustration usage rules:**
- At decorative/watermark scale: opacity 0.04–0.06. Never above 0.08 as a background element.
- At featured scale (section accent): opacity 0.5–0.8, sized to complement content.
- Maintain aspect ratio. Never crop the placed dot — it is semantically the point.
- On dark backgrounds use `-dark` variants; on light backgrounds use `-light` variants.

## Animation Patterns

**draw-in** — stroke-dashoffset animation. Used when the brand's visual language should feel like it's being drawn in real time. Apply to pipeline illustrations and the convergence mark on first load.
```css
@keyframes draw-in { to { stroke-dashoffset: 0; } }
/* Usage: set stroke-dasharray equal to path length, stroke-dashoffset to same, animate to 0 */
```

**dot-breathe** — the placed dot (filled circle in `04-placed`) breathes continuously after settling. Represents: AI correctly placed and running.
```css
@keyframes dot-breathe { 0%,100%{opacity:.9} 50%{opacity:.28} }
```

**dot-settle** — placed dot fades and scales in before beginning to breathe. Plays once, then hands off to dot-breathe.
```css
@keyframes dot-settle { from{opacity:0;transform:scale(0)} to{opacity:1;transform:scale(1)} }
```

**Icon hover glow** — not a keyframe. A CSS filter applied on hover to add subtle luminance to stroke and fill elements.
```css
filter: drop-shadow(0 0 6px rgba(237,226,199,0.32));
```

**Rules:**
- The placed dot is the only element that breathes continuously — nothing else pulses indefinitely.
- draw-in plays once on page load for the nav logomark and any featured pipeline illustration.
- Never apply glow to background/watermark illustration elements — only interactive icon contexts.

## Do's and Don'ts

Do: use warm cream (`#EDE2C7`) as text on the dark background — it's the brand's voice in dark contexts.
Do: let Fraunces carry headlines alone at weight 400.
Do: leave space. Density reads as noise.
Do: use brand icons semantically — the icon should mean what the section says.
Do: let the placed dot breathe wherever AI is correctly placed.

Don't: use exclamation points anywhere — in copy or in design decisions.
Don't: add decorative elements that don't carry meaning.
Don't: use cream yellow (`#F0F8BE`) as a large background area — it is an accent only.
Don't: mix more than three colors in a single layout section.
Don't: use the placed icon (`04-placed`) for anything other than correct AI placement — its meaning is specific.
Don't: animate icons that are used as watermarks or background elements.
