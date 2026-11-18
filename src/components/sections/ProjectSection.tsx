import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { projectsNewestFirst, Project } from '@/lib/projects';

const WORK_CATEGORIES = [
  { name: 'Recruiter tools', description: 'Screening, formatting and client submissions.' },
  { name: 'Marketing tools', description: 'Marketing data turned into clear next steps.' },
  { name: 'Clinical tools', description: 'Structured clinical work with the clinician in control.' },
  { name: 'Community tools', description: 'Connecting people with causes.' },
  { name: 'Data analysis', description: 'Data that answers questions about people and behaviour.' },
];

const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay: index * 0.05, ease: [0.25, 0.1, 0.25, 1] }}
  >
    <Link to={`/project/${project.slug}`} className="group block">
      <div className="aspect-[16/10] w-full overflow-hidden rounded-md border border-border bg-muted">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="h-full w-full object-cover object-top transition-transform duration-300 ease-out group-hover:scale-105"
        />
      </div>
      <div className="mt-3 flex items-start justify-between gap-2">
        <div className="min-w-0">
          <h4 className="truncate text-sm font-semibold text-foreground">{project.title}</h4>
          <p className="text-xs font-medium text-muted-foreground">{project.location} • {project.year}</p>
        </div>
        <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
      </div>
      <p className="mt-1 line-clamp-2 text-xs text-muted-foreground">{project.description}</p>
    </Link>
  </motion.div>
);

const ProjectSection: React.FC = () => {
  const categories = WORK_CATEGORIES.map((category) => ({
    ...category,
    projects: projectsNewestFirst.filter((project) => project.workCategory === category.name),
  })).filter((group) => group.projects.length > 0);

  return (
    <section id="projects" className="relative w-full py-16">
      <div className="absolute inset-x-0 top-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative w-full whitespace-nowrap text-center text-[clamp(3rem,14vw,13rem)] font-semibold leading-none bg-gradient-to-b from-foreground/10 to-transparent bg-clip-text text-transparent"
        >
          WORK
        </motion.div>
      </div>

      <div className="relative z-10">
        <AnimatedSection>
          <h2 className="text-heading-sm md:text-heading-md lg:text-heading font-semibold text-foreground">
            Selected projects that reduce manual work and improve day-to-day operations.
          </h2>
        </AnimatedSection>

        <nav aria-label="Project categories" className="mt-8 flex flex-wrap gap-2">
          {categories.map((c) => (
            <a
              key={c.name}
              href={`#work-${c.name.replace(/\s+/g, '-').toLowerCase()}`}
              className="rounded-full border border-border px-3 py-1 text-xs font-semibold text-muted-foreground transition-colors hover:border-foreground hover:text-foreground"
            >
              {c.name} <span className="opacity-60">{c.projects.length}</span>
            </a>
          ))}
        </nav>

        <div className="mt-10 space-y-12">
          {categories.map((category) => (
            <div
              key={category.name}
              id={`work-${category.name.replace(/\s+/g, '-').toLowerCase()}`}
              className="scroll-mt-24 grid gap-6 border-t border-border pt-6 md:grid-cols-[220px_1fr]"
            >
              <div>
                <h3 className="text-base font-semibold text-foreground">{category.name}</h3>
                <p className="mt-1 text-xs text-muted-foreground">{category.description}</p>
              </div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {category.projects.map((project, i) => (
                  <ProjectCard key={project.slug} project={project} index={i} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
