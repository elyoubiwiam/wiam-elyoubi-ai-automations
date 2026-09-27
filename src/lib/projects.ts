import uxAuditHome from "@/assets/ux-audit-home.jpg";
import uxAuditHow from "@/assets/ux-audit-how.jpg";
import uxAuditCases from "@/assets/ux-audit-cases.jpg";
import uxAuditForm from "@/assets/ux-audit-form.jpg";
import uxAuditExample from "@/assets/ux-audit-example.png";

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
  exampleImage?: string;
  exampleTitle?: string;
  exampleText?: string;
}

// Placeholder projects. Replace the entries below with real case studies.
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
    challenge: "Founders and marketers often know that a page converts without knowing which elements influence visitors. A specialist review can be expensive, slow and difficult to understand, so many teams rely on guesswork.",
    approach: "I built a tool that analyses a page in about a minute. The user enters a URL and a short business description. The tool checks whether the site allows scanning, then reviews the visible copy, buttons and trust signals. It explains the persuasion techniques it finds across thirteen categories, including urgency, social proof, authority, risk reversal, pricing psychology and friction. Each finding uses plain language and includes an assessment of how effectively the page applies it. No account or plugin is required.",
    outcome: "The result is a free public tool for reviewing your own page, comparing a competitor's page and studying conversion techniques used on live websites. It also identifies manipulative patterns instead of recommending them.",
    gallery: [uxAuditHow, uxAuditForm, uxAuditCases],
    exampleImage: uxAuditExample,
    exampleTitle: "A real example",
    exampleText: "This example shows an analysis of an e-commerce search results page. It starts with a clear summary, then explains each persuasion technique it found, including social proof and herd behaviour. It quotes the relevant page copy and assesses how effectively each technique is used."
  },
  {
    slug: "internal-ops-dashboard",
    image: "https://images.unsplash.com/photo-1543286386-713bdd548da4?w=800&q=80",
    title: "Internal Ops Dashboard",
    location: "Operations Team",
    year: "2026",
    description: "One live dashboard instead of five reports assembled by hand every week.",
    category: "Custom Tool",
    stack: "React, Supabase, PostgreSQL",
    duration: "5 weeks",
    services: ["Requirements Workshops", "Full-Stack Development", "Data Modeling"],
    challenge: "An operations team spent hours each week pulling numbers from five sources into one report. The data was often out of date by the time the report was ready, and new questions required more manual work.",
    approach: "I consolidated the sources into a single database and built a dashboard that updates in real time. Every metric from the weekly report became a live view, with filters for the questions the team actually asks. The manual report was retired entirely.",
    outcome: "The weekly report went from half a day of manual work to zero. The team now answers data questions live instead of scheduling them for next week's report.",
    gallery: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80",
      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80"
    ]
  },
  {
    slug: "ai-document-assistant",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&q=80",
    title: "AI Document Assistant",
    location: "Back-Office Team",
    year: "2026",
    description: "Drafting and sorting routine documents now takes minutes, not afternoons.",
    category: "AI Integration",
    stack: "OpenAI API, Python, Google Workspace",
    duration: "4 weeks",
    services: ["AI Integration", "Prompt Design", "Process Automation"],
    challenge: "A back-office team spent most of its day drafting routine documents from templates and sorting incoming requests into the right categories. The work was repetitive but required just enough judgment that nobody trusted a simple script with it.",
    approach: "I integrated a language model into the team's existing workspace. It classifies and routes incoming requests, then prepares first drafts of routine documents from approved templates and past cases. A team member reviews every draft before it is sent.",
    outcome: "Document drafting time dropped by more than half, and misrouted requests are nearly gone. The team reviews instead of writes, and the review step keeps quality under control.",
    gallery: [
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
      "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&q=80",
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80"
    ]
  }
];

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find(p => p.slug === slug);
};
