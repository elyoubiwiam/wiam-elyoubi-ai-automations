import React, { useCallback, useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { projects, projectsNewestFirst, Project } from '@/lib/projects';

// Display order for the "Latest projects" gallery. Slugs listed here come
// first, in this order; every other project follows newest first. Add a slug
// here to move a project up, or remove it to let the newest-first order decide.
const HERO_ORDER = ['social-media-wellbeing', 'give-back'];

const heroProjects: Project[] = [
  ...HERO_ORDER
    .map(slug => projects.find(p => p.slug === slug))
    .filter((p): p is Project => Boolean(p)),
  ...projectsNewestFirst.filter(p => !HERO_ORDER.includes(p.slug)),
];

const ProjectSlide: React.FC<{
  project: Project;
  onImageHoverChange: (isHovered: boolean) => void;
}> = ({ project, onImageHoverChange }) => (
  <Link to={`/project/${project.slug}`} className="group block w-full">
    <div
      className="w-full overflow-hidden"
      onMouseEnter={() => onImageHoverChange(true)}
      onMouseLeave={() => onImageHoverChange(false)}
    >
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
);

const HeroSection: React.FC = () => {
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
    }, 9000);
    return () => window.clearInterval(timer);
  }, [api]);

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

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        className="mt-6 mx-auto w-full max-w-[1040px]"
      >
        <h2 className="text-sm font-bold text-foreground mb-4">Latest projects</h2>
        <Carousel
          setApi={setApi}
          opts={{ align: 'start', loop: true }}
          className="w-full"
          aria-label="Latest projects"
        >
          <CarouselContent>
            {heroProjects.map(project => (
              <CarouselItem key={project.slug} className="basis-full">
                <ProjectSlide
                  project={project}
                  onImageHoverChange={isHovered => {
                    isImageHovered.current = isHovered;
                  }}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="mt-7 flex items-center justify-end gap-3">
            <span className="mr-auto text-sm font-semibold text-muted-foreground" aria-live="polite">
              {String(activeIndex + 1).padStart(2, '0')} / {String(heroProjects.length).padStart(2, '0')}
            </span>
            <Button
              type="button"
              size="icon"
              onClick={() => api?.scrollPrev()}
              aria-label="Previous project"
              className="rounded-[3px]"
            >
              <ArrowLeft />
            </Button>
            <Button
              type="button"
              size="icon"
              onClick={() => api?.scrollNext()}
              aria-label="Next project"
              className="rounded-[3px]"
            >
              <ArrowRight />
            </Button>
          </div>
        </Carousel>
      </motion.div>
    </section>
  );
};

export default HeroSection;
