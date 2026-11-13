# Project Rules

- Use `text-[clamp(3rem,14vw,13rem)]` for the large WORK, SERVICES, and ABOUT labels so they remain equal and viewport-safe.
- Show portfolio imagery in full colour by default, retain a subtle hover zoom, and pause carousel autoplay while its image is hovered.
- Write all visible website copy in a direct, professional tone, without AI-style phrasing, vague claims, filler, or em dashes.
- Keep `projects` in src/lib/projects.ts ordered oldest to newest; append new projects at the end. The Work carousel reads `projectsNewestFirst` so the newest project always shows first automatically. The hero "Latest projects" gallery in src/components/sections/HeroSection.tsx lists projects one at a time in the order given by `HERO_ORDER`, then every remaining project newest first, so a new project appears in the gallery without editing the hero.
- Prefer hosted media pointers, but bundle the screenshot when the asset-serving path fails to return an image in preview, so portfolio covers remain visible.