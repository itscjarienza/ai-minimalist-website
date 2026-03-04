# Claude Code — Build Prompt
# The AI Minimalist — Website & Launch Build
# Folder: ai-minimalist-website/

---

## CONTEXT

You are building the complete website for **The AI Minimalist** — an AI systems consulting brand for founders. All brand assets, visual references, and written specs are in the `ai-minimalist-website/` folder. Read every file before writing a single line of code.

**Read these files first, in this order:**
1. `ai-minimalist-brand-brief.docx` — the master written spec. Typography, colors, voice, copy lines, offer stack, ICP, and all style rules.
2. `ai-minimalist-brand-identity-v1.1.html` — open in browser. Master visual reference for logo, palette, type, and layout.
3. `ai-minimalist-icon-library.html` — open in browser. All 32 named icons.
4. `ai-minimalist-illustration-library.html` — open in browser. All 30 illustrations across 3 sizes and 2 colorways.
5. `ai-minimalist-icons-illustrations.html` — open in browser. Concept references with usage context.

Do not begin coding until you have read and understood all five files. The brand is locked. Do not interpret, improvise, or substitute any brand element.

---

## WHAT TO BUILD

A multi-page static website. The primary goal is **lead capture and trust-building** — not selling. Every page earns trust first, then moves the visitor toward a free resource or a conversation.

### Pages

| Page | Route | Primary Job |
|---|---|---|
| Landing Page | `/` or `index.html` | Pattern interrupt → build trust → capture email |
| About | `/about` | Story + credibility → makes the ICP feel understood |
| Methodology | `/methodology` | Teach the framework → build authority → lead magnet CTA |
| Philosophy | `/philosophy` | Worldview → belief shift → newsletter CTA |
| Work With Me | `/work-with-me` | Offer stack → qualifying → audit CTA |
| Newsletter | `/newsletter` | Newsletter sign-up page (standalone) |

---

## BRAND RULES — NON-NEGOTIABLE

Read the full spec in the brand brief. Key constraints summarized here:

### Colors
```
--warm-cream:   #ede2c7   Primary light background
--cream-yellow: #f0f8be   Accent only — use sparingly
--light-grey:   #ededed   Neutral backgrounds, cards
--mid-grey:     #5b5b5b   Secondary text, labels, captions
--dark:         #242424   Primary text / dark sections
```
Default: warm cream backgrounds, dark text. Dark sections use `#242424` background with `#ede2c7` text. Never mix outside this system.

### Typography
```
Heading font:  Fraunces — weight 400 ONLY. Never bold. Never italic in UI.
Body font:     Epilogue — weight 300 for body, 400 for support text
```
Load both from Google Fonts:
- `https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400&family=Epilogue:wght@300;400;500&display=swap`

Type scale:
```
Display:   Fraunces 400 · 48px · hero headlines only
Heading:   Fraunces 400 · 28–36px · section headers
Body:      Epilogue 300 · 15px · line-height 1.7
Support:   Epilogue 400 · 13px
Label:     Epilogue 300 · 11px · ALL CAPS · letter-spacing 0.15–0.2em
```

### Spacing
Base unit: 8px. All spacing must be multiples: 8, 16, 24, 32, 48, 64, 80, 96, 128.

### Borders & Lines
- Dividers: 1px only. Opacity 20–40% to soften.
- Border radius: zero. Square corners everywhere. No exceptions.
- No shadows. No gradients.

### Icons & Illustrations
All SVG inline from the icon and illustration library files. Do not use any external icon library (no Font Awesome, no Heroicons, no Lucide). Use only the brand icons.

Stroke weight: 1px for icons, 0.9–1.25px for illustrations.
Fills: nodes only (small filled circles). Never fill shapes.

### Voice
- Direct. Short sentences. No filler.
- Never use: "delve into", "dive deep", "in today's world", "unpack", "game-changer", "leverage" (as a verb), "seamlessly".
- Every headline is a statement. Not a question. Not a tease.
- The brand states — it doesn't sell.

---

## PAGE-BY-PAGE BUILD SPEC

---

### PAGE 1 — Landing Page (`index.html`)

**Background:** warm cream (`#ede2c7`)

#### Section 1 — Hero
Full viewport height. Convergence mark logomark top-left. Nav top-right (About · Methodology · Philosophy · Work With Me).

**Headline (Fraunces 400 · 48px):**
> Most founders use AI in the wrong places.

**Subheadline (Fraunces 400 · 32px · slightly lighter):**
> I show them where it actually belongs.

**Body (Epilogue 300 · 15px · max-width 520px):**
> You don't have an AI problem. You have a systems problem. The tools aren't the issue. The placement is.

**CTA — Primary button (dark background · warm cream text · square corners · 48px height · Epilogue 400 · 13px · ALL CAPS · letter-spacing 0.15em):**
> Get the Free Diagnostic →

**CTA — Secondary (text link · Epilogue 300 · 13px · mid-grey):**
> or join the newsletter ↓

Use the **Simplicity vs Complexity Large illustration** (light colorway) as a visual element in the hero — right side on desktop, below headline on mobile.

Thin 1px divider at the bottom of the hero section.

---

#### Section 2 — The Problem (dark background)
Background: `#242424`. Text: `#ede2c7`.

**Label (Epilogue 300 · 11px · ALL CAPS · letter-spacing 0.2em · opacity 0.5):**
> The Pattern

**Headline (Fraunces 400 · 36px):**
> Founders keep buying tools. The waste stays.

**Three-column layout. Each column:**
- Icon (from AI As A Component or Waste concept set) — warm cream colorway
- Short bold statement (Epilogue 400 · 13px · ALL CAPS)
- One sentence description (Epilogue 300 · 13px · opacity 0.7)

Column content:
1. **Icon: Stack** · "TOOL SPRAWL" · You have 3+ AI subscriptions and can't describe what each one specifically fixed.
2. **Icon: Dead End** · "NO SYSTEM" · AI was added to the process. The process was never mapped first.
3. **Icon: Misfit** · "WRONG PLACEMENT" · The tool isn't the problem. Where you put it is.

Thin 1px divider (warm cream · 20% opacity) separates columns.

---

#### Section 3 — The Reframe
Background: warm cream.

**Label:** THE SHIFT

**Headline (Fraunces 400 · 36px):**
> AI is a component. Not the answer.

**Body (Epilogue 300 · 15px · max-width 600px):**
> A prompt isn't a system. Dropping something into ChatGPT isn't fixing the process — it's putting a band-aid on it. The founders who get real results from AI don't start with tools. They start with a map.

Use the **AI As A Component Medium illustration** (light colorway — the "Placed Right" version showing AI as one node in the flow).

---

#### Section 4 — The Framework Preview
Background: light grey (`#ededed`).

**Label:** THE METHOD

**Headline (Fraunces 400 · 32px):**
> Map the system first. Then decide where AI belongs.

Five steps displayed as a horizontal flow on desktop, vertical on mobile. Each step:
- Step number (Epilogue 300 · 11px · ALL CAPS · label style)
- Icon from Process Mapping set (appropriate icon per step)
- Step name (Epilogue 400 · 13px · ALL CAPS)
- One line description (Epilogue 300 · 13px)

Steps:
1. **Entry icon** · MAP THE SYSTEM · Draw the process as it actually exists — not how you think it works.
2. **Lens icon** · FIND THE WASTE · Where is time being lost to repetitive, predictable, pattern-driven tasks?
3. **Target icon** · APPLY THE FILTER · "Could I train someone to handle this and hand me back exactly what I need?"
4. **Placed icon** · PLACE THE AI · Only where it passed the filter. One process. One fix. Not everywhere.
5. **Cleared icon** · VALIDATE · Did the system get cleaner or just different? If not simpler — remove it.

**CTA below the steps:**
> See the full methodology → (link to `/methodology`)

---

#### Section 5 — Lead Magnet (cream yellow background · `#f0f8be`)
**Label:** FREE RESOURCE

**Headline (Fraunces 400 · 32px):**
> Find out where your AI is being wasted.

**Body:**
> The AI Waste Audit Checklist — 10 signs you're using AI in the wrong places. Founders who go through it usually find at least 3. Most find 6 or more.

**Email capture form:**
- Single email input field · square corners · 1px border `#242424` · warm cream background · Epilogue 300 · 15px · placeholder: `your@email.com`
- Submit button · dark background · warm cream text · ALL CAPS · `GET THE FREE AUDIT`
- Sub-text below form (Epilogue 300 · 11px · mid-grey): `No pitch. No sequence. Just the checklist.`

Use the **Audit / Diagnostic Medium illustration** (light colorway — the diagnostic doc).

---

#### Section 6 — About Teaser
Background: warm cream.

**Label:** THE PERSON BEHIND IT

**Headline (Fraunces 400 · 32px):**
> I spent years inside Amazon's operations. I still watched the waste pile up.

**Body (Epilogue 300 · 15px · max-width 580px):**
> I'm an industrial engineer by training. 70+ direct reports. 14-hour shifts. Surrounded by automation — and still watching the same wastes repeat every day. The answer was always "add more people." Nobody stopped to ask if the system was the problem.
>
> I did. That lens followed me into AI.

**Link:** Read the full story → (to `/about`)

---

#### Section 7 — Newsletter CTA (dark background)
Background: `#242424`.

**Label (warm cream · 50% opacity):** STAY IN THE SYSTEM

**Headline (Fraunces 400 · 36px · warm cream):**
> One idea. Every two weeks. No noise.

**Body (Epilogue 300 · 13px · warm cream · 70% opacity · max-width 480px):**
> The AI Minimalist newsletter. Framework teaching and real stories from the field. Not a content digest — one focused insight per send. The kind of email that makes you think, not scroll.

**Email capture (same form style as Section 5 but inverted — warm cream input on dark background):**
- Input: dark background · 1px warm cream border · warm cream text
- Button: warm cream background · dark text · `JOIN THE NEWSLETTER`
- Sub-text: `Bi-weekly. Unsubscribe anytime.`

---

#### Section 8 — Offer Stack
Background: light grey.

**Label:** WORK TOGETHER

**Headline (Fraunces 400 · 32px):**
> There's a right place to start.

Three offer cards in a row. Each card: white background (or light-grey offset) · square corners · 1px divider top · no box shadow.

Card 1 — Free:
- Label: `FREE`
- Name (Fraunces 400 · 24px): AI Minimalist Diagnostic
- Description: 5-step framework for mapping your operation and finding where AI actually belongs.
- CTA: `Get the Diagnostic →`

Card 2 — $2,500:
- Label: `DONE WITH YOU`
- Name (Fraunces 400 · 24px): The AI Minimalist Audit
- Description: Two to three sessions. We map your operation, find the waste, and build the prescription together.
- CTA: `Apply for the Audit →`

Card 3 — $5,000+:
- Label: `DONE FOR YOU`
- Name (Fraunces 400 · 24px): Implementation Consulting
- Description: Audit required first. We don't just find where AI goes — we build it in.
- CTA: `Learn More →`

---

#### Footer
Background: `#242424`. Warm cream text.

Left: Convergence mark + wordmark "The AI Minimalist"
Center: Nav links (About · Methodology · Philosophy · Work With Me · Newsletter)
Right: Epilogue 300 · 11px · `© 2026 The AI Minimalist`

Thin 1px warm cream divider (30% opacity) above footer.

---

### PAGE 2 — About (`/about`)

Background: warm cream throughout.

#### Hero
**Label:** ABOUT

**Headline (Fraunces 400 · 48px):**
> I spent years watching smart people throw more bodies at broken systems.

No subheadline. Let the headline breathe.

#### Story Section — Four blocks with thin 1px dividers between them

**Block 1 — The Origin**
Label: THE BACKGROUND
> I'm an industrial engineer by training. I ran fast-paced, high-intensity operations at Amazon with 70+ direct reports and 14-hour shifts. Though surrounded by automation, I still watched the same wastes pile up every day. Time waste. Labor waste. Processes running volume they were never built to handle.
>
> The answer was always the same: add more people. Nobody stopped to ask if the system itself was the problem.
>
> I did.

**Block 2 — The Shift**
Label: THE TURNING POINT
> That lens followed me into the AI space. I joined TurboClaim, an AI startup solving a real operational problem for insurance adjusters.
>
> That's where it clicked.
>
> The question was never *can AI do this?* It was always *can we break the process down simply enough for AI to handle it?*
>
> Then we lost an investor. I got cut. And instead of going back to corporate, I built something.

**Block 3 — The Pattern**
Label: WHAT I SEE NOW
> Here's what founders do instead: they buy a tool. They try it for two weeks. It helps a little. They buy another. Then another. Six months later they have five subscriptions, a vague sense that AI is useful, and no idea where any of it actually fits in their operation.
>
> That's not an AI problem. That's a systems problem.

**Block 4 — The Work**
Label: WHAT I DO
> I help founders think like systems people. Find where the waste is. Place AI exactly where it belongs.
>
> Not everywhere. Not as the answer. As a component — in exactly the right part of the system.

Use the **Process Mapping Vertical Flow Large illustration** (light colorway) as a sidebar element on desktop.

#### Philosophy teaser
Thin divider. Link: Read the philosophy → `/philosophy`

#### CTA
Dark background section. Same newsletter sign-up as landing page Section 7.

---

### PAGE 3 — Methodology (`/methodology`)

Background: warm cream.

#### Hero
**Label:** THE FRAMEWORK

**Headline (Fraunces 400 · 48px):**
> Find where AI belongs. Remove what doesn't.

**Body:**
> The AI Minimalist Framework is a 5-step diagnostic process built on industrial engineering principles. It doesn't start with tools. It starts with the system.

---

#### The 5 Steps — Full detail
Each step gets its own full-width section with alternating backgrounds (warm cream / light grey).

For each step:
- Large step number (Fraunces 400 · 96px · 8% opacity — decorative)
- Label: `STEP 01` etc.
- Step name (Fraunces 400 · 36px)
- Body copy (Epilogue 300 · 15px · 2–3 short paragraphs)
- Relevant illustration — use Medium or Large size, appropriate colorway

**Step 1 — Map the System** (warm cream bg)
Illustration: Process Mapping Full Flow Medium · light
> Draw the process as it actually exists. Not how you think it works — how it actually works. What goes in, what comes out, and every step in between.
>
> Most founders have never done this. They operate from a mental model of their business — not the actual one. The map shows you what's really there.

**Step 2 — Find the Waste** (light grey bg)
Illustration: Waste Map Medium · light
> Where is time being lost? Where are people doing repetitive, manual, predictable tasks that follow the same pattern every single time?
>
> That's your target zone. Not where AI sounds exciting. Where waste actually lives.

**Step 3 — Apply the Filter** (warm cream bg)
Illustration: The Audit Medium · light
> Ask this about every wasteful step: "Is this something I could train an employee to look at, think through, and compile — so that I, the decision maker, have the best possible data to make the final call without doing the busy work myself?"
>
> If yes — AI belongs there. If no — it doesn't. The filter removes opinion from the decision.

**Step 4 — Place the AI** (light grey bg)
Illustration: AI Placed Right Medium · light
> Not everywhere. Not as a band-aid over a broken process. Exactly where it passed the filter. Quietly. Systematically. One spot at a time.
>
> This is the step most founders skip — they go from "AI could help here" to "let's implement everything." One process. One fix. Prove it works before expanding.

**Step 5 — Validate and Simplify** (warm cream bg)
Illustration: Simplicity Signal Medium · light
> Does the system run cleaner? Is it actually simpler or did you just add complexity?
>
> If it's not simpler — remove it and look again. The test isn't "does it work?" It's "is the system cleaner than before?" If not, you placed it wrong.

---

#### Lead Magnet — Primary CTA
Cream yellow background (`#f0f8be`). Same form style as landing page.

**Headline:** Start with the free diagnostic.
**Body:** Five questions. Apply them to one real workflow in your business. Find out where AI belongs — and where it doesn't.
**CTA:** `Get the Free Diagnostic →`

---

#### The Audit CTA
Dark background.

**Headline (Fraunces 400 · 36px · warm cream):**
> Want someone to run it with you?

**Body:** The AI Minimalist Audit is a done-with-you engagement. Two to three sessions. We map your operation together, find the waste, and build the prescription.

**CTA button:** `Apply for the Audit → ` (links to `/work-with-me`)

---

### PAGE 4 — Philosophy (`/philosophy`)

Background: dark (`#242424`). Warm cream text throughout. Occasional warm cream sections for contrast.

#### Hero
**Label (warm cream · 40% opacity):** THE WORLDVIEW

**Headline (Fraunces 400 · 48px · warm cream):**
> AI isn't the answer. It's a component.

---

#### Three belief sections, each with a thin warm cream divider

**Belief 1 — On AI**
Label: ON AI
Headline (Fraunces 400 · 32px): A prompt is not a system.
Body: Dropping something into ChatGPT isn't building a process. It's improvising one. Improvised processes don't compound. They create technical debt, inconsistent outputs, and the illusion of progress while the real problem sits untouched.

**Belief 2 — On Complexity**
Label: ON COMPLEXITY
Headline: Complexity is a sign something was never mapped.
Body: The businesses with the most AI tools are usually the most operationally confused. Every new tool adds a layer of complexity the system wasn't designed for. Simplicity is the goal — and simplicity requires a map, not more tools.

**Belief 3 — On the founder**
Label: ON THE FOUNDER
Headline: You don't have an AI problem. You have a systems problem.
Body: The founders who get real results from AI aren't more technical. They're more systematic. They mapped what they had before they touched a tool. That's the lens I teach. It's the lens industrial engineering gave me. It's the only one that works.

Use **Simplicity vs Complexity Large illustration — dark colorway** between belief sections as a visual break.

---

#### Newsletter CTA — Inline
Warm cream background section (break from dark).

**Headline (Fraunces 400 · 32px):** This is what the newsletter is about.
**Body:** One idea, bi-weekly. Framework teaching and real stories. No content roundups. No tool lists. Just the thinking that helps founders see their systems more clearly.
**Form:** Email capture. CTA: `Join the Newsletter`

---

### PAGE 5 — Work With Me (`/work-with-me`)

Background: warm cream.

#### Hero
**Label:** WORK TOGETHER

**Headline (Fraunces 400 · 48px):**
> There's a right place to start. Most people skip it.

**Body:**
> The audit is the product. Everything else flows from knowing exactly where the waste is and where AI belongs. That clarity is what we build together.

---

#### Offer sections — stacked, full-width, 1px dividers between

**Offer 1 — Free**
Label: FREE · START HERE
Name (Fraunces 400 · 36px): The AI Minimalist Diagnostic
Body: A 5-step framework doc. Apply it to one real workflow in your business. Find out where AI belongs — and where it doesn't. No sign-up required for the methodology. Just a name and email to receive it.
Use: **Diagnostic Doc Medium illustration** · light
CTA: `Get the Diagnostic → `

**Offer 2 — Free**
Label: FREE · SELF-ASSESSMENT
Name (Fraunces 400 · 36px): The AI Waste Audit Checklist
Body: 10 signs you're using AI in the wrong places. If you check more than 3, the Diagnostic is your next step. If you check more than 6, we should talk.
CTA: `Get the Checklist →`

**Offer 3 — $2,500** (dark background · warm cream text)
Label: DONE WITH YOU · $2,500
Name (Fraunces 400 · 36px · warm cream): The AI Minimalist Audit
Body: Two to three sessions. Session 1 is discovery and operation mapping. Between sessions, I analyze and build the prescription. Session 2 is diagnosis and delivery. Optional Session 3 is implementation planning.
One format. One price. A qualifying form required — not to filter you out, but to make sure the sessions are useful before we start.
CTA (warm cream button · dark text): `Apply for the Audit →`
Sub-text: Qualifying form takes 5 minutes. If it's not a fit, I'll tell you.

**Offer 4 — $5,000+**
Label: DONE FOR YOU · $5,000+
Name (Fraunces 400 · 36px): Implementation Consulting
Body: Audit required first. We don't just find where AI goes — we build it in. Using n8n, Make, Zapier, and native AI features in your existing tools. Not custom software. Not app development. Operational AI — in the right places.
Custom scope and pricing. Audit is the prerequisite.
CTA: `Start with the Audit →`

---

#### Qualifying CTA section
Cream yellow background.

**Headline:** Not sure where to start?
**Body:** Answer three questions. I'll tell you which step makes the most sense for where you are right now.
**CTA:** `Take the 3-question qualifier →` (links to a simple form — build as a separate section or modal with 3 questions: What's your biggest AI frustration right now? Have you mapped your core workflows? What's your timeline for getting this right?)

---

### PAGE 6 — Newsletter (`/newsletter`)

Clean, focused. Single purpose: subscribe.

Background: dark.

**Convergence mark** centered at top.

**Headline (Fraunces 400 · 48px · warm cream):**
> One idea. Every two weeks.

**Body (Epilogue 300 · 15px · warm cream · 70% opacity · max-width 480px · centered):**
> The AI Minimalist newsletter. Framework teaching and real stories from the field. Not a content digest — one focused insight per send. The kind of email that makes you think, not scroll.
>
> If you checked more than 3 items on the waste audit, this is where you start.

**What you'll get:**
Three items in a clean list (use Check icon from Audit set — warm cream):
- One core AI systems idea per email
- Real examples from the field — not theory
- Occasional early access to new resources and the audit

**Email form — large and centered:**
- Email input · full-width · max 480px · square corners · 1px warm cream border
- Submit button · warm cream background · dark text · full-width · `JOIN THE NEWSLETTER`
- Sub-text: `Bi-weekly. Unsubscribe anytime. No pitch sequences.`

**Social proof (once available):** Add a subtle line below the form for subscriber count or a real testimonial.

---

## TECHNICAL REQUIREMENTS

### Stack
- **Pure HTML, CSS, JavaScript.** No frameworks. No build tools. No React. Static files only — the folder needs to open directly in a browser.
- Each page is a standalone `.html` file in the root of `ai-minimalist-website/`.
- One shared `styles.css` file for global brand styles.
- One shared `components.js` for nav, footer, and form behavior.

### File Structure
```
ai-minimalist-website/
├── index.html
├── about.html
├── methodology.html
├── philosophy.html
├── work-with-me.html
├── newsletter.html
├── styles.css
├── components.js
└── assets/
    └── [any exported SVG assets if needed]
```

### Nav
Fixed top navigation. Background: warm cream with 1px bottom border (`#242424` · 20% opacity). Logo left (Convergence mark SVG + wordmark). Links right. On mobile: hamburger → full-screen overlay menu. Active page indicator: 1px underline in `#242424`.

### Forms
No backend required. On submit: hide the form, show a warm confirmation message. Use JavaScript. No redirect. Copy to clipboard for the email if needed for manual CRM entry.

### Responsive
Mobile-first. Breakpoints: 768px (tablet) and 1200px (desktop). All multi-column layouts collapse to single column on mobile. All illustrations scale proportionally.

### Performance
Inline all SVG illustrations and icons directly in HTML — no external image files. Load Google Fonts with `display=swap`. No JavaScript libraries except your own `components.js`.

### Accessibility
All SVG icons include `aria-hidden="true"` since they're decorative. All interactive elements are keyboard-navigable. Color contrast meets WCAG AA minimum.

---

## COPY LINES — LOCKED

These are word-for-word. Do not rewrite or paraphrase:

```
Positioning statement:
"Most founders use AI in the wrong places. I show them where it actually belongs."

Pattern interrupt:
"You don't have an AI problem. You have a systems problem."

Core belief:
"AI is a component — not the answer."

Methodology statement:
"Map the system first. Then decide where AI belongs."

Brand descriptor:
"The AI Minimalist System — a framework for founders who are done guessing where AI belongs."

Filter question (Step 3):
"Is this something I could train an employee to look at, think through, and compile — so that I, the decision maker, have the best possible data to make the final call without doing the busy work myself?"

Key contrarian lines (use in appropriate sections):
"A prompt is not a system."
"Adding AI to a broken process doesn't fix the process. It just breaks it faster."
"You don't need 12 AI subscriptions. You need one clear map of where the waste actually is."
```

---

## WHAT NOT TO DO

- Do not use any color outside the 5-color palette.
- Do not use Fraunces bold or italic.
- Do not round any corners. Not even 1px.
- Do not add box shadows.
- Do not add gradients.
- Do not use any icon library other than the brand icons in the HTML files.
- Do not write salesy copy. The brand states — it does not pitch.
- Do not add animations beyond a simple 200ms opacity fade on hover states and form transitions.
- Do not use stock photography or any imagery. Illustrations only.
- Do not build a blog section (not in scope for launch).
- Do not add social media links until explicitly instructed.
- Do not add a pricing page — the offer stack lives on Work With Me only.

---

## FINAL CHECK BEFORE DELIVERING

Before handing back:
1. Open every page in a browser and verify fonts loaded correctly (Fraunces for headings, Epilogue for body).
2. Confirm zero rounded corners anywhere in the layout.
3. Confirm all SVG icons and illustrations render correctly at their sizes.
4. Confirm mobile layout at 375px width — all text readable, no overflow.
5. Confirm both email forms submit and show a confirmation message.
6. Confirm nav is consistent across all pages.
7. Confirm no colors outside the 5-color brand palette appear anywhere.

---

*All brand assets and specs are in the `ai-minimalist-website/` folder. If there is a conflict between this prompt and the brand brief document, the brand brief takes precedence. If there is a conflict between the brand brief and the HTML visual references, the HTML visual references take precedence — they are the ground truth for the visual system.*
