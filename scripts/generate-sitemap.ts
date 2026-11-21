// Runs before `vite dev` and `vite build`; writes public/sitemap.xml.

import { readFileSync, writeFileSync } from "fs";
import { resolve } from "path";

const BASE_URL = "https://wiam-elyoubi.com";

interface SitemapEntry {
  path: string;
  lastmod?: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: string;
}

const projectSource = readFileSync(resolve("src/lib/projects.ts"), "utf8");
const projectSlugs = Array.from(
  projectSource.matchAll(/^\s*slug:\s*"([^"]+)",\s*$/gm),
  (match) => match[1],
);

if (projectSlugs.length === 0) {
  throw new Error("No project slugs found in src/lib/projects.ts");
}

const entries: SitemapEntry[] = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  ...projectSlugs.map((slug) => ({
    path: `/project/${slug}`,
    changefreq: "monthly" as const,
    priority: "0.8",
  })),
];

function generateSitemap(entries: SitemapEntry[]) {
  const urls = entries.map((entry) =>
    [
      "  <url>",
      `    <loc>${BASE_URL}${entry.path}</loc>`,
      entry.lastmod ? `    <lastmod>${entry.lastmod}</lastmod>` : null,
      entry.changefreq ? `    <changefreq>${entry.changefreq}</changefreq>` : null,
      entry.priority ? `    <priority>${entry.priority}</priority>` : null,
      "  </url>",
    ]
      .filter(Boolean)
      .join("\n"),
  );

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...urls,
    "</urlset>",
    "",
  ].join("\n");
}

writeFileSync(resolve("public/sitemap.xml"), generateSitemap(entries));
console.log(`sitemap.xml written (${entries.length} entries)`);
