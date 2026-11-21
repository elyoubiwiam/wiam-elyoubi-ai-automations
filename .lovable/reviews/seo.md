# SEO review

3 stored findings are failing. These older findings are from a stale review; the nine fresh foundation checks below all pass.

| Finding | Level | State |
| --- | --- | --- |
| Replace placeholder case studies | low | failing |
| Titles and descriptions are duplicated across all pages | mid | failing |
| Social previews are generic and missing images | low | failing |
| Content describes services and portfolio well | mid | passing |
| Structured data is correctly implemented | low | passing |
| Home page is reachable | low | passing |
| AI assistants can see your site as markdown | low | passing |
| Search engines see your fully-rendered pages | low | passing |
| Crawler rules look good | low | passing |
| Sitemap looks good | low | passing |
| Page basics are set | low | passing |
| Site icon is set up for search | low | passing |
| Home page search metadata is set | low | passing |
| Social preview basics are set | low | passing |

## Confirmed results

- The placeholder warning is outdated: all seven case studies now describe actual projects, use project screenshots, and link to their tools or source notebook. GiveBack is explicitly labelled a prototype. No client claims or measured outcomes have been invented.
- The Uniform case-study page still sends the homepage title, canonical address and shared-link address in its initial HTML. The other case studies share the same page setup.
- The current site uses one static HTML document. Reliable individual case-study titles, descriptions, canonical addresses and social previews require page-specific rendered HTML. Client-only changes would not fully resolve these findings.
- Lovable supplies the default social preview image. No replacement image has been added without a supplied absolute image URL.

## Remaining decision

Upgrade to Lovable's latest template to support page-specific rendered HTML, then set each case study's title, description, canonical address and shared-link metadata from its existing project information. This is a separate site upgrade, not a copy-only edit.