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

// Placeholder projects — replace the entries below with real case studies.
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
    challenge: "Founders and marketers can see that a page converts, but not why. Understanding the psychology behind a landing page normally means paying for a specialist review, waiting days for it, and reading a report full of jargon. Most teams skip it and guess instead.",
    approach: "I built a tool that does the read in about a minute. You paste a URL and a line about the business, the tool checks the site's scanning rules, reads the copy, buttons and signals a visitor actually sees, then explains the persuasion techniques in use across thirteen categories — urgency, social proof, authority, risk reversal, pricing psychology, friction and more. Every finding is written in plain language with a note on how well it lands. No account, no plugin, no setup.",
    outcome: "A free, public tool that turns a specialist audit into a one-minute answer. It is used to check your own page, study a competitor's, and learn conversion patterns from real pages rather than textbooks — and it names the techniques honestly instead of pushing dark patterns.",
    gallery: [uxAuditHow, uxAuditForm, uxAuditCases],
    exampleImage: uxAuditExample,
    exampleTitle: "A real example",
    exampleText: "This is the tool's read of a real e-commerce search-results page. It opens with a plain-language summary, then breaks down each persuasion technique it found — social proof, herd behaviour and more — quoting the exact copy on the page that triggers it, with a note on how well each one lands."
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
    challenge: "An operations team spent hours every week pulling numbers from five different sources into a single report. By the time it was ready, the data was already stale — and any question outside the report meant starting over.",
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
    approach: "I integrated a language model into their existing workspace setup. Incoming requests are classified and routed automatically, and first drafts of routine documents are generated from templates and past cases — every draft lands with a human for review before anything is sent.",
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
