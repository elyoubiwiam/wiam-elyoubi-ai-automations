# Sharpen the "Latest tool built" hero image

## Problem
The hero's "Latest tool built" block shows the CV Sorter cover (`src/assets/cv-sorter-cover.png`). The file is only 1280×820 px but is rendered full-width (`w-full`), so on desktop and retina screens it is upscaled and looks blurry.

## Fix
1. Recapture the CV Sorter landing screen at high resolution: Playwright with `deviceScaleFactor: 2` and a 1440px viewport, producing a ~2880px-wide PNG.
2. Replace `src/assets/cv-sorter-cover.png` with the high-resolution capture. Since the same file is the project's `image`, the Work carousel card and the case-study page gallery also get the sharper version automatically.
3. Verify in the preview at desktop width that the hero image renders crisp, with no layout shift (aspect ratio kept the same).

## Notes
- No code changes needed; only the image file is swapped.
- If the live tool is unreachable, fall back to upscaling is not acceptable; instead recapture from a local snapshot of the CV Sorter project.
