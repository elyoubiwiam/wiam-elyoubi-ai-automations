# Wiam El Youbi: AI Automation & Custom Tooling

**Work faster with AI.**

This is the source of my personal portfolio. I build AI automations and custom tools that remove repetitive tasks, so teams can focus on work that requires human judgement.

**Live site:** https://wiam-elyoubi.com

---

## About

I'm Wiam El Youbi. My background spans marketing, web development and cyberpsychology. I build AI automations and custom tools that help businesses of any size work faster and more efficiently.

## Services

| Service | What it means |
|---|---|
| **Workflow Automation** | Connect your tools so data moves without manual steps: quotes, onboarding, reporting and follow-ups. The result is fewer errors and less copying between tools. |
| **Custom Internal Tools** | Dashboards, trackers and admin panels built around the way your team actually works, instead of a fixed template. |
| **AI Integrations** | Language models inside your existing tools to draft documents, sort requests, summarise conversations and answer routine questions, with your team reviewing the work and staying in control. |
| **Automation Consulting** | A review of how your team works, where automation will save time or reduce errors, and a prioritised plan you can use with or without me. |

## Projects

Each project has its own case study page on the site and its own repository.

| Project | Type | Live app | Code |
|---|---|---|---|
| **Uniform**: batch CV formatting for recruiters | Recruitment Tool | [uniform-cv.lovable.app](https://uniform-cv.lovable.app) | [uniform-cv](https://github.com/elyoubiwiam/uniform-cv) |
| **Hiro**: recruitment workspace with outreach tracking and explainable CV matching | Recruitment Workspace | [hiro-recruitment.lovable.app](https://hiro-recruitment.lovable.app) | [hiro-recruitment](https://github.com/elyoubiwiam/hiro-recruitment) |
| **UX Audit**: plain-language breakdown of the persuasion techniques on any landing page | Public Web Tool | [audit-the-ux.lovable.app](https://audit-the-ux.lovable.app) | [audit-the-ux](https://github.com/elyoubiwiam/audit-the-ux) |
| **SEO Insight Hub**: Search Console audits with AI insights and a 90-day plan | Organic Search Tool | [organic-seo-auditor.lovable.app](https://organic-seo-auditor.lovable.app) | [organic-seo-auditor](https://github.com/elyoubiwiam/organic-seo-auditor) |
| **DoctAssist**: structured clinical intake with AI decision support, in English and French | Clinical Intake Tool | [doct-assist.lovable.app](https://doct-assist.lovable.app) | [doct-assist](https://github.com/elyoubiwiam/doct-assist) |

## Site structure

- **Home:** hero with the latest tool built, services, projects grouped by audience (recruiter tools and marketing tools), about, and a contact section
- **Project pages** (`/project/:slug`): a case study for each tool
- **Contact form:** submissions handled by a backend function

## Tech stack

- React, TypeScript, Vite, React Router
- Tailwind CSS with shadcn/ui components and Framer Motion
- Light and dark themes
- Lovable Cloud (Supabase) for the contact form
- Built and hosted with [Lovable](https://lovable.dev), with two-way GitHub sync

## Running locally

```sh
git clone https://github.com/elyoubiwiam/wiam-elyoubi-ai-automations.git
cd wiam-elyoubi-ai-automations
npm i
npm run dev
```

## Adding a project

Projects are defined in `src/lib/projects.ts`. Add an entry there and it appears on the homepage and gets its own case study page. To change the project featured under "Latest tool built", update `FEATURED_SLUG` in `src/components/sections/HeroSection.tsx`.
