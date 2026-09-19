# Rebrand: RAUM Studio → Wiam El Youbi — AI Automation Portfolio

Turn the interior-design studio site into a personal portfolio for **Wiam El Youbi**, positioning the work as AI automations and custom tools that help businesses work faster. Tone: direct, professional, no fluff. Structure stays ready for real skills/projects to be added later.

## Copy direction

- First person ("I build…") instead of studio voice ("we design…").
- No interior-design language anywhere. Short sentences, concrete claims, no marketing filler.
- Hero angle: business efficiency (user's choice) — e.g. headline "Work faster with AI automations" under the name, subline about building tools that remove repetitive work.
- Cities row (Berlin/Zurich/Copenhagen greetings) replaced with a plain availability/location line (e.g. "Based in Paris — available for remote projects worldwide") — placeholder text, easy to change.

## Files to change

**index.html** — title "Wiam El Youbi — AI Automations & Custom Tools", new description, matching og/twitter tags, canonical to `https://wiam-elyoubi-ai-automations.lovable.app/`, JSON-LD Person schema.

**src/components/layout/Header.tsx** — replace RAUM wordmark with "WIAM EL YOUBI" (or "WIAM" on small screens); center tagline becomes "AI Automations & Custom Tools".

**src/components/layout/Footer.tsx** — link text → WIAM EL YOUBI, copyright "© 2026 Wiam El Youbi".

**src/components/sections/HeroSection.tsx** — headline: name + business-efficiency tagline; subline: direct one-liner about building AI automations and internal tools that cut repetitive work; replace city/greeting row with the availability line.

**src/components/sections/ProjectSection.tsx** — heading rewritten for AI/tooling work ("Selected projects showing how automation removes manual work…"). Grid/list toggle and filters kept.

**src/lib/projects.ts** — keep the `Project` interface, but extend fields to fit automation case studies: replace `area` → `stack` (tools/tech used), `category` values → e.g. "Automation / Workflow", "Custom Tool", "AI Integration". Fill with **3 placeholder projects** (user's choice), clearly labeled as examples, e.g.:
1. "Lead-to-CRM Automation" — automated lead intake and enrichment for a sales team.
2. "Internal Ops Dashboard" — custom tool consolidating reports that were previously assembled by hand.
3. "AI Document Assistant" — LLM-powered drafting/classification for back-office teams.
Each with short direct challenge/approach/outcome copy and neutral placeholder images.

**src/pages/ProjectDetail.tsx** — relabel info grid: "Area" → "Stack"; "Services Provided" → "What I built"; "Our Approach" → "The Approach"; keep layout.

**src/components/sections/ServicesSection.tsx** — four services rewritten as AI automation offerings (A) Workflow Automation, B) Custom Internal Tools, C) AI Integrations, D) Automation Consulting), each with a direct short + full description; section intro rewritten. Images swapped to neutral/abstract placeholders (Unsplash tech/abstract). CMD+K button kept.

**src/components/sections/AboutSection.tsx** — background word "ABOUT" stays; paragraph rewritten: who Wiam is, what he builds, who it's for — direct, no fluff.

**src/components/sections/CTASection.tsx** — "Ready to get started?" kept; subline rewritten to automation angle ("Tell me what slows your team down…").

**src/components/forms/CalculatorForm.tsx** — reworked as a **project-scope estimator** (user's choice): steps become 1) automation type (Workflow automation / Custom tool / AI integration), 2) complexity (number of systems/processes involved instead of m²), 3) involvement level (Build only / Build + advise / Ongoing support), 4) estimate + email. Estimate logic and saved fields updated to match; backend `submit-estimate` function updated for the new field meanings.

**src/components/forms/ContactForm.tsx** — copy switched to first person ("Tell me about your project…"), placeholder text updated; validation and backend call unchanged.

**src/components/ui/CommandMenu.tsx** — suggestion labels rewritten ("Calculate a project estimate", "Contact me", "Learn more about me", "Explore my services"); remove RAUM reference; "Contact us"/"Get started" → "Contact me"/"Get started" everywhere.

**src/components/ui/StickyCommandButton.tsx** — rotating texts adjusted if they say "us".

**README.md** — rewritten as a one-paragraph description of Wiam's AI-automation portfolio.

## Kept as-is

- CMD+K command palette (site's signature interaction), theme switcher, animations, layout, all backend submission flow (contact + estimate still save to the database).
- Design tokens, colors, typography — pure copy/content rebrand, no visual redesign.

## Notes

- Placeholder project images: neutral Unsplash tech/abstract photos so the layout reads correctly until real screenshots exist.
- All copy concentrated in the files above so future skill/project additions are single-file edits (`projects.ts`, `ServicesSection.tsx`).
