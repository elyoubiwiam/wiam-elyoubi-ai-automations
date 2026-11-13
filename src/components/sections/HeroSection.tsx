import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { projects, projectsNewestFirst, Project } from '@/lib/projects';

// Projects shown under "Latest tool built", in display order. Change these
// slugs to feature different tools; each falls back to the newest project
// if its slug is missing.
const FEATURED_SLUG = 'social-media-wellbeing';
const SECONDARY_SLUG = 'give-back';

const ProjectBlock: React.FC<{ project: Project; maxWidth: string; delay: number }> = ({
  project,
  maxWidth,
  delay,
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, delay, ease: [0.25, 0.1, 0.25, 1] }}
    className={`mx-auto w-full ${maxWidth}`}
  >
    <Link to={`/project/${project.slug}`} className="group block w-full">
      <div className="w-full overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="mt-4 flex flex-wrap items-start justify-between gap-4">
        <div className="text-sm">
          <h3 className="font-semibold text-foreground">{project.title}</h3>
          <p className="font-medium text-muted-foreground">{project.location} • {project.year}</p>
        </div>
        <p className="text-xs font-medium text-muted-foreground text-left md:text-right max-w-[420px]">
          {project.description}
        </p>
        <span className="inline-flex items-center gap-2 text-sm font-semibold text-foreground">
          View project
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  </motion.div>
);

const HeroSection: React.FC = () => {
  const latestProject =
    projects.find(p => p.slug === FEATURED_SLUG) ?? projectsNewestFirst[0];
  const nextProject =
    projects.find(p => p.slug === SECONDARY_SLUG && p.slug !== latestProject.slug);

  return (
    <section id="hero" className="w-full pt-20 pb-16">
      <div className="flex flex-wrap items-start justify-between gap-10">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-hero-sm md:text-hero-md lg:text-hero font-semibold text-foreground"
        >
          Work Faster With AI
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-subheading-sm md:text-subheading-md lg:text-subheading font-medium text-foreground max-w-[468px]"
        >
          I build AI automations and custom tools that remove repetitive tasks, so your team can focus on work that requires human judgement.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="flex flex-wrap justify-between gap-10 mt-28 text-sm max-md:mt-10"
      >
        {[
          { label: "Focus", value: "AI Automation & Custom Tooling" },
          { label: "Clients", value: "Teams and businesses of any size" },
          { label: "Availability", value: "Open to new projects" }
        ].map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
          >
            <div className="font-bold text-foreground">{item.label}</div>
            <div className="font-medium text-muted-foreground">{item.value}</div>
          </motion.div>
        ))}
      </motion.div>

      <div className="mt-6">
        <div className="flex items-baseline justify-between gap-4 mb-4">
          <h2 className="text-sm font-bold text-foreground">Latest project</h2>
        </div>
        <ProjectBlock project={latestProject} maxWidth="max-w-[1040px]" delay={0.5} />
        {nextProject && (
          <div className="mt-12 border-t border-border pt-8">
            <ProjectBlock project={nextProject} maxWidth="max-w-[720px]" delay={0.7} />
          </div>
        )}
      </div>
    </section>
  );
};

export default HeroSection;
