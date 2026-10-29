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
import cvSorterCover from "@/assets/cv-sorter-cover.png";
import cvSorterReview from "@/assets/cv-sorter-review.png";
import cvSorterTemplate from "@/assets/cv-sorter-template.png";
import doctAssistSpecialty from "@/assets/doct-assist-specialty.png";
import doctAssistSymptoms from "@/assets/doct-assist-symptoms.png";
import doctAssistIntake from "@/assets/doct-assist-intake.png";
import doctAssistDocument from "@/assets/doct-assist-document.png";
import giveBackCover from "@/assets/give-back-cover.png";
import giveBackTasks from "@/assets/give-back-tasks.png";
import giveBackMap from "@/assets/give-back-map.png";
import giveBackDonate from "@/assets/give-back-donate.png";

export interface Project {
  slug: string;
  image: string;
  title: string;
  location: string;
  year: string;
  description: string;
  category: string;
  workCategory: string;
  stack: string;
  duration: string;
  services: string[];
  challenge: string;
  approach: string;
  outcome: string;
  gallery: string[];
  liveUrl?: string;
  liveCta?: string;
  status?: string;
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
    workCategory: "Marketing tools",
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
    workCategory: "Recruiter tools",
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
    workCategory: "Marketing tools",
    stack: "React, TanStack Start, TypeScript, Tailwind, AI analysis",
    duration: "Product build",
    liveUrl: "https://organic-seo-auditor.lovable.app",
    liveCta: "Run an audit on your own data",
    services: ["Product Design", "Full-Stack Development", "AI Integration", "SEO Analysis"],
    challenge: "Search Console contains useful performance data, but finding the pages and queries that need attention takes time. Marketers must compare periods, judge click-through rates against rankings and turn large exports into a practical plan.",
    approach: "I built SEO Insight Hub to analyse a Search Console CSV and organise the findings by impact. It identifies pages with strong visibility but low click-through rates, searches losing traffic and keywords close to page one. The report estimates missed clicks, compares performance with industry benchmarks and highlights content gaps. It then turns the findings into prioritised recommendations and a structured 90-day plan.",
    outcome: "Marketers and site owners can move from a raw Search Console export to a clear list of actions in one workflow. They can see where traffic is being lost, which changes offer the strongest return and what to work on first without sorting the data manually.",
    gallery: [seoInsightsOverview, seoInsightsIssues, seoInsightsBenchmarks, seoInsightsStrategy]
  },
  {
    slug: "cv-sorter",
    image: cvSorterCover,
    title: "Uniform",
    location: "Recruitment Tool",
    year: "2026",
    description: "A batch CV formatting tool that turns a stack of candidate files into one consistent, branded, client-ready format.",
    category: "Custom Tool / AI",
    workCategory: "Recruiter tools",
    stack: "React, TanStack Start, TypeScript, Tailwind, Claude API",
    duration: "Product build",
    liveUrl: "https://uniform-cv.lovable.app",
    liveCta: "Format your CVs",
    services: ["Product Design", "Full-Stack Development", "AI Integration", "Document Export"],
    challenge: "Recruiters receive CVs in different layouts, file types and levels of detail. Reformatting every document for a client takes time, creates inconsistencies and slows down candidate submissions.",
    approach: "I built Uniform to process PDFs, Word files and scanned CVs in batches, five at a time. The recruiter picks a template, adds their branding and uploads the CVs. Claude extracts each one into a consistent structure while keeping the candidate's own words, and the recruiter reviews it side by side with the original. They can edit the text, add notice period, salary and relocation details, keep private notes, shorten the CV or anonymise it for a blind submission.",
    outcome: "Recruiters can turn a mixed batch of CVs into consistent, client-ready documents without rebuilding them one by one. Each CV gets a spelling check before download and can be exported as PDF or Word, with an optional recruiter cover page.",
    gallery: [cvSorterReview, cvSorterTemplate, cvSorterCover]
  },
  {
    slug: "doct-assist",
    image: doctAssistSpecialty,
    title: "DoctAssist",
    location: "Clinical Intake Tool",
    year: "2026",
    description: "A guided clinical intake tool that turns symptoms into a structured patient document clinicians can review and sign.",
    category: "Custom Tool / AI",
    workCategory: "Clinical tools",
    stack: "React, TanStack Start, TypeScript, Tailwind, AI suggestions",
    duration: "Product build",
    liveUrl: "https://doct-assist.lovable.app",
    liveCta: "Run a patient intake",
    services: ["Product Design", "Full-Stack Development", "AI Integration", "Clinical Workflow Design"],
    challenge: "Clinicians spend a large part of a consultation writing notes instead of focusing on the patient. Intake quality varies between specialties, and AI output in healthcare needs guardrails, clear data protection and review by a human before anything becomes part of a record.",
    approach: "I built DoctAssist as a guided five-step workflow: a data protection notice, a specialty selector, symptom entry, a specialty-specific intake form and a final clinical document. Twenty outpatient specialties each load a reusable, editable template. The clinician enters symptoms without patient identifiers, and the tool suggests follow-up questions, possible assessments, next steps and red flags for the clinician to review. It works in English and French, and the finished record can be downloaded or printed as a PDF.",
    outcome: "Clinicians get a structured, consistent intake record for every patient without building forms by hand. Every AI suggestion is framed as decision support for review, not a diagnosis, and the tool keeps patient identifiers out of the workflow by design.",
    gallery: [doctAssistSymptoms, doctAssistIntake, doctAssistDocument]
  },
  {
    slug: "give-back",
    image: giveBackCover,
    title: "GiveBack",
    location: "Volunteering Platform",
    year: "2026",
    description: "A prototype micro-volunteering platform that matches people with small charity tasks that fit into their day. A project I plan to build into a real product.",
    category: "Community Platform",
    workCategory: "Community tools",
    stack: "React, TanStack Start, TypeScript, Tailwind, Lovable Cloud backend",
    duration: "Prototype",
    status: "Prototype",
    services: ["Product Design", "Full-Stack Development", "Task Booking Flow", "Rewards Design"],
    challenge: "Small local charities rarely need a full day of help, but they always need an extra pair of hands for short jobs. People who want to help often assume volunteering takes a regular weekly commitment, so good intentions never turn into actual hours given.",
    approach: "I built GiveBack as a working prototype to test the idea. Volunteers pick their city, set the causes they care about and the time they have, then book tasks such as packing winter coats or reading with pupils. Each task earns points that unlock rewards at partner cafés and shops. Charities post and manage their own tasks through their own space, and a UK map shows where hands are needed across the country. People with no time that week can donate to a charity instead.",
    outcome: "This is a prototype for now. The full flow works, from finding a task to booking it, earning points and unlocking rewards. It is a project I believe in and I plan to develop it into a real product with UK charities and local reward partners.",
    gallery: [giveBackTasks, giveBackMap, giveBackDonate]
  }
];

// Newest-first display order. Add new projects at the end of `projects`
// (oldest to newest); they appear at the top of Work automatically.
export const projectsNewestFirst: Project[] = [...projects].slice().reverse();

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find(p => p.slug === slug);
};
