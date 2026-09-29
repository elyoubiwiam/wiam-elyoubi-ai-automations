import uxAuditHome from "@/assets/ux-audit-home.jpg";
import uxAuditHow from "@/assets/ux-audit-how.jpg";
import uxAuditCases from "@/assets/ux-audit-cases.jpg";
import uxAuditForm from "@/assets/ux-audit-form.jpg";
import uxAuditExample from "@/assets/ux-audit-example.png";
import recruitDashboard from "@/assets/recruit-dashboard.png";
import hiroCover from "@/assets/hiro-cover.png";
import recruitCandidates from "@/assets/recruit-candidates.png";
import recruitScorecard from "@/assets/recruit-scorecard.png";
import seoInsightHubCover from "@/assets/seo-insight-hub-cover.png";
import seoInsightsOverview from "@/assets/seo-insights-overview.png";
import seoInsightsIssues from "@/assets/seo-insights-issues.png";
import seoInsightsBenchmarks from "@/assets/seo-insights-benchmarks.png";
import seoInsightsStrategy from "@/assets/seo-insights-strategy.png";

export interface Project {
  slug: string;
  image: string;
  title: string;
  location: string;
  year: string;
  description: string;
  category: string;
  stack: string;
  duration: string;
  services: string[];
  challenge: string;
  approach: string;
  outcome: string;
  gallery: string[];
  liveUrl?: string;
  liveCta?: string;
  exampleImage?: string;
  exampleTitle?: string;
  exampleText?: string;
}

export const projects: Project[] = [
  {
    slug: "ux-audit-tool",
    image: uxAuditHome,
    title: "UX Audit",
    location: "Public Web Tool",
    year: "2026",
    description: "Paste any landing page URL and see the persuasion techniques it uses, in plain language.",
    category: "Custom Tool / AI",
    stack: "React, TanStack Start, TypeScript, Tailwind, AI analysis",
    duration: "2 weeks",
    services: ["Product Design", "Full-Stack Development", "AI Integration", "Behavioural Analysis"],
    liveUrl: "https://audit-the-ux.lovable.app",
    liveCta: "Test the tool with your own page",
    challenge: "Founders and marketers often know that a page converts without knowing which elements influence visitors. A specialist review can be expensive, slow and difficult to understand, so many teams rely on guesswork.",
    approach: "I built a tool that analyses a page in about a minute. The user enters a URL and a short business description. The tool checks whether the site allows scanning, then reviews the visible copy, buttons and trust signals. It explains the persuasion techniques it finds across thirteen categories, including urgency, social proof, authority, risk reversal, pricing psychology and friction. Each finding uses plain language and includes an assessment of how effectively the page applies it. No account or plugin is required.",
    outcome: "The result is a free public tool for reviewing your own page, comparing a competitor's page and studying conversion techniques used on live websites. It also identifies manipulative patterns instead of recommending them.",
    gallery: [uxAuditHow, uxAuditForm, uxAuditCases],
    exampleImage: uxAuditExample,
    exampleTitle: "A real example",
    exampleText: "This example shows an analysis of an e-commerce search results page. It starts with a clear summary, then explains each persuasion technique it found, including social proof and herd behaviour. It quotes the relevant page copy and assesses how effectively each technique is used."
  },
  {
    slug: "hiro",
    image: hiroCover,
    title: "Hiro",
    location: "Recruitment Workspace",
    year: "2026",
    description: "A recruitment workspace for screening candidates, managing outreach and keeping every role on track.",
    category: "Custom Tool / AI",
    stack: "React, TanStack Start, TypeScript, Tailwind, AI analysis",
    duration: "Product build",
    liveUrl: "https://hiro-recruitment.lovable.app",
    liveCta: "Open Hiro",
    services: ["Product Design", "Full-Stack Development", "AI Integration", "Workflow Design"],
    challenge: "Recruiters often manage clients, roles, candidate evidence and follow-ups across separate tools. That makes it difficult to compare applicants consistently, prepare tailored outreach and see which tasks need attention next.",
    approach: "I built Hiro as one working recruitment system. The command centre shows open roles, screening progress, response rates and outreach due. Recruiters can upload a CV, review a structured candidate profile and compare it with a role using an evidence-based scorecard. The tool identifies strengths, gaps and interview questions, then prepares personalised outreach and client submission notes from the same candidate record.",
    outcome: "Recruiters can move from candidate intake to screening, outreach and client submission without rebuilding the same information in different tools. The workspace keeps evidence beside each recommendation and gives the team one clear action queue for follow-ups.",
    gallery: [recruitCandidates, recruitScorecard, recruitDashboard]
  },
  {
    slug: "seo-insight-hub",
    image: seoInsightHubCover,
    title: "SEO Insight Hub",
    location: "Organic Search Tool",
    year: "2026",
    description: "A Search Console audit tool that turns search data into clear priorities and a 90-day action plan.",
    category: "Custom Tool / AI",
    stack: "React, TanStack Start, TypeScript, Tailwind, AI analysis",
    duration: "Product build",
    liveUrl: "https://organic-seo-auditor.lovable.app",
    liveCta: "Run an audit on your own data",
    services: ["Product Design", "Full-Stack Development", "AI Integration", "SEO Analysis"],
    challenge: "Search Console contains useful performance data, but finding the pages and queries that need attention takes time. Marketers must compare periods, judge click-through rates against rankings and turn large exports into a practical plan.",
    approach: "I built SEO Insight Hub to analyse a Search Console CSV and organise the findings by impact. It identifies pages with strong visibility but low click-through rates, searches losing traffic and keywords close to page one. The report estimates missed clicks, compares performance with industry benchmarks and highlights content gaps. It then turns the findings into prioritised recommendations and a structured 90-day plan.",
    outcome: "Marketers and site owners can move from a raw Search Console export to a clear list of actions in one workflow. They can see where traffic is being lost, which changes offer the strongest return and what to work on first without sorting the data manually.",
    gallery: [seoInsightsOverview, seoInsightsIssues, seoInsightsBenchmarks, seoInsightsStrategy]
  }
];

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find(p => p.slug === slug);
};
