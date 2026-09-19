import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { projects } from '@/lib/projects';

interface ProjectCardProps {
  slug: string;
  image: string;
  title: string;
  location: string;
  year: string;
  description: string;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ slug, image, title, location, year, description, index }) => (
  <Link to={`/project/${slug}`}>
    <motion.article 
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ 
        duration: 0.4, 
        delay: index * 0.05, 
        ease: [0.25, 0.1, 0.25, 1],
        layout: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }
      }}
      className="w-full cursor-pointer"
    >
      <motion.div
        layout
        className="group aspect-[1.59] w-full overflow-hidden"
      >
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-300 ease-out"
        />
      </motion.div>
      <motion.div layout className="mt-4 flex justify-between gap-4">
        <div className="text-sm">
          <h3 className="font-semibold text-foreground">{title}</h3>
          <p className="font-medium text-muted-foreground">{location} • {year}</p>
        </div>
        <p className="text-xs font-medium text-muted-foreground text-right max-w-[200px]">{description}</p>
      </motion.div>
    </motion.article>
  </Link>
);

const ProjectSection: React.FC = () => {
  return (
    <section id="projects" className="relative w-full py-16">
      {/* Background text */}
      <div className="absolute inset-x-0 top-0 overflow-hidden pointer-events-none">
        <motion.div 
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative text-center text-display-sm md:text-display-md lg:text-display font-semibold leading-none bg-gradient-to-b from-foreground/10 to-transparent bg-clip-text text-transparent"
        >
          WORK
        </motion.div>
      </div>
      
      <div className="relative z-10">
        <AnimatedSection>
          <h2 className="text-heading-sm md:text-heading-md lg:text-heading font-semibold text-foreground">
            Selected projects showing how automation removes manual work
            and speeds up day-to-day operations.
          </h2>
        </AnimatedSection>

        <h3 className="mb-6 mt-11 text-sm font-semibold text-foreground">Projects</h3>

        <div className="grid grid-cols-1 gap-x-16 gap-y-8 md:grid-cols-2">
              {projects.map((project, index) => (
                <ProjectCard 
                  key={project.slug} 
                  slug={project.slug}
                  image={project.image}
                  title={project.title}
                  location={project.location}
                  year={project.year}
                  description={project.description}
                  index={index} 
                />
              ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;