// ============= Full file contents =============

import React, { useCallback, useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { projectsNewestFirst, Project } from '@/lib/projects';

const WORK_CATEGORIES = [
  {
    name: 'Recruiter tools',
    description: 'Tools that speed up screening, formatting and client submissions.',
  },
  {
    name: 'Marketing tools',
    description: 'Tools that turn marketing data into clear next steps.',
  },
];

interface ProjectCardProps {
  slug: string;
  image: string;
  title: string;
  location: string;
  year: string;
  description: string;
  index: number;
  onImageHoverChange: (isHovered: boolean) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ slug, image, title, location, year, description, index, onImageHoverChange }) => (
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
        onMouseEnter={() => onImageHoverChange(true)}
        onMouseLeave={() => onImageHoverChange(false)}
      >
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 ease-out"
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

interface CategoryCardProps {
  name: string;
  description: string;
  projects: Project[];
}

const CategoryCard: React.FC<CategoryCardProps> = ({ name, description, projects }) => {
  const [api, setApi] = useState<CarouselApi>();
  const [activeIndex, setActiveIndex] = useState(0);
  const isImageHovered = useRef(false);

  const updateSelectedSlide = useCallback((carouselApi: CarouselApi) => {
    if (!carouselApi) return;
    setActiveIndex(carouselApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!api) return;
    updateSelectedSlide(api);
    api.on('select', updateSelectedSlide);
    api.on('reInit', updateSelectedSlide);

    return () => {
      api.off('select', updateSelectedSlide);
      api.off('reInit', updateSelectedSlide);
    };
  }, [api, updateSelectedSlide]);

  useEffect(() => {
    if (!api || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const timer = window.setInterval(() => {
      if (!isImageHovered.current) api.scrollNext();
    }, 5000);
    return () => window.clearInterval(timer);
  }, [api]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      className="flex h-full flex-col rounded-lg border border-border bg-card p-6 md:p-8"
    >
      <div className="flex items-baseline justify-between gap-4">
        <div>
          <h3 className="text-heading-sm font-semibold text-foreground">{name}</h3>
          <p className="mt-1 text-sm text-muted-foreground">{description}</p>
        </div>
        <span className="shrink-0 text-xs font-semibold text-muted-foreground">
          {projects.length === 1 ? '1 case study' : `${projects.length} case studies`}
        </span>
      </div>

      <Carousel setApi={setApi} opts={{ align: 'start', loop: true }} className="mt-6 flex-1" aria-label={`${name} projects`}>
        <CarouselContent>
          {projects.map((project, index) => (
            <CarouselItem key={project.slug}>
              <ProjectCard
                slug={project.slug}
                image={project.image}
                title={project.title}
                location={project.location}
                year={project.year}
                description={project.description}
                index={index}
                onImageHoverChange={(isHovered) => {
                  isImageHovered.current = isHovered;
                }}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="mt-7 flex items-center justify-end gap-3">
          <span className="mr-auto text-sm font-semibold text-muted-foreground" aria-live="polite">
            {String(activeIndex + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
          </span>
          <Button type="button" size="icon" onClick={() => api?.scrollPrev()} aria-label={`Previous ${name} project`} className="rounded-[3px]">
            <ArrowLeft />
          </Button>
          <Button type="button" size="icon" onClick={() => api?.scrollNext()} aria-label={`Next ${name} project`} className="rounded-[3px]">
            <ArrowRight />
          </Button>
        </div>
      </Carousel>
    </motion.div>
  );
};

const ProjectSection: React.FC = () => {
  const categories = WORK_CATEGORIES.map((category) => ({
    ...category,
    projects: projectsNewestFirst.filter((project) => project.workCategory === category.name),
  })).filter((group) => group.projects.length > 0);

  return (
    <section id="projects" className="relative w-full py-16">
      {/* Background text */}
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

        <div className="mt-11 grid gap-6 lg:grid-cols-2">
          {categories.map((category) => (
            <CategoryCard
              key={category.name}
              name={category.name}
              description={category.description}
              projects={category.projects}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
