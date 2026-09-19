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
}

// Placeholder projects — replace the entries below with real case studies.
export const projects: Project[] = [
  {
    slug: "lead-to-crm-automation",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80",
    title: "Lead-to-CRM Automation",
    location: "B2B Sales Team",
    year: "2026",
    description: "New leads reach the CRM enriched and assigned — without anyone touching a spreadsheet.",
    category: "Automation / Workflow",
    stack: "n8n, HubSpot API, Clearbit, Slack",
    duration: "3 weeks",
    services: ["Process Mapping", "Workflow Automation", "CRM Integration"],
    challenge: "A B2B sales team was copying every inbound lead from web forms and inboxes into their CRM by hand. Leads sat unworked for hours, enrichment never happened, and follow-up depended on whoever noticed the new entry first.",
    approach: "I mapped the lead journey end to end, then automated it: form and inbox submissions flow straight into the CRM, each lead is enriched with company data, scored, and assigned to the right rep, and Slack notifications fire the moment a high-value lead lands. Nothing is copied by hand anymore.",
    outcome: "Response time to new leads dropped from hours to minutes. No lead is lost between tools, and the team stopped spending their mornings on data entry. The workflow has run without maintenance since launch.",
    gallery: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80",
      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80"
    ]
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
