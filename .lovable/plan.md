# Simplify projects and improve responsive sections

## What will change

### Projects
- Remove both dropdown filters and the grid/list controls.
- Replace that control row with a simple **Projects** heading.
- Keep every project image, title, client/year, and description underneath in the current responsive project grid.

### Top controls
- Move the light and dark mode buttons from the middle-left edge to the top-right area.
- Place them immediately to the left of the **Get started** button.
- Keep both controls fixed and usable without covering the logo or centered header text on phone, tablet, and desktop.
- Apply the same placement on project detail pages for consistency.

### Services carousel
- Convert the services section into a real four-slide carousel using the carousel support already installed in the project.
- Each slide will show its image on the left and service title, short description, and full description on the right.
- Add clear previous/next arrow buttons and a slide position indicator so visitors can discover the other services.
- On smaller screens, stack the image above the text while retaining swipe and arrow navigation.
- Keep the existing **Get started** action in the service content.

### About
- Remove the absolute image positioning that currently lets the photo collide with the copy.
- Use a stable responsive grid: photo and text side by side on larger screens, stacked on smaller screens.
- Preserve the existing About wording and entrance animation.

## Technical details
- Update `ProjectSection`, `ServicesSection`, `AboutSection`, and the shared top controls used by the home and project pages.
- Reuse the existing semantic colour tokens and shared button/carousel components.
- Validate the homepage and a project detail page at phone, tablet, and desktop sizes, including carousel navigation and theme switching.
