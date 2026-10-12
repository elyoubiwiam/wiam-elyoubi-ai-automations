# Project Rules

- Use `text-[clamp(3rem,14vw,13rem)]` for the large WORK, SERVICES, and ABOUT labels so they remain equal and viewport-safe.
- Show portfolio imagery in full colour by default, retain a subtle hover zoom, and pause carousel autoplay while its image is hovered.
- Write all visible website copy in a direct, professional tone, without AI-style phrasing, vague claims, filler, or em dashes.
- Keep `projects` in src/lib/projects.ts ordered oldest to newest; append new projects at the end. The Work carousel reads `projectsNewestFirst` so the newest project always shows first automatically. The hero "Latest tool built" block shows the project named by `FEATURED_SLUG` in src/components/sections/HeroSection.tsx, falling back to the newest project when that slug is absent.
- Prefer hosted media pointers, but bundle the screenshot when the asset-serving path fails to return an image in preview, so portfolio covers remain visible.