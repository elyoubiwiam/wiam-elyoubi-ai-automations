import React, { useCallback, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';

interface Service {
  letter: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
}

interface ServicesSectionProps {
  onOpenCommandMenu?: () => void;
}

const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenCommandMenu }) => {
  const [api, setApi] = useState<CarouselApi>();
  const [activeIndex, setActiveIndex] = useState(0);

  const services: Service[] = [
    { 
      letter: "A", 
      title: "Workflow Automation", 
      shortDescription: "Connect your tools so data moves without manual steps.",
      fullDescription: "I map how information moves through your business, then automate the handoffs. Quotes, onboarding, reporting, follow-ups — anything that gets copied from one tool to another is a candidate. The result is fewer errors and hours back every week.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80"
    },
    { 
      letter: "B", 
      title: "Custom Internal Tools", 
      shortDescription: "Software built around how your team actually works.",
      fullDescription: "Off-the-shelf software forces your process into someone else's template. I build lean internal tools that match your workflow exactly — dashboards, trackers, admin panels — without the features nobody uses.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
    },
    { 
      letter: "C", 
      title: "AI Integrations", 
      shortDescription: "Put AI models to work on real operational tasks.",
      fullDescription: "AI is only useful when it's wired into your actual process. I integrate language models into the tools you already use to draft documents, sort incoming requests, summarize threads, and answer routine questions — with humans still in control.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80"
    },
    { 
      letter: "D", 
      title: "Automation Consulting", 
      shortDescription: "Know what's worth automating before you spend on it.",
      fullDescription: "Not every process should be automated. I review how your team works, identify where automation will actually pay off, and give you a prioritized plan you can act on — with or without me.",
      image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&q=80"
    }
  ];

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
    const timer = window.setInterval(() => api.scrollNext(), 5000);
    return () => window.clearInterval(timer);
  }, [api]);

  return (
    <section id="services" className="relative w-full py-24">
      {/* Background text */}
      <div className="absolute inset-x-0 top-0 overflow-hidden pointer-events-none">
        <motion.div 
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative whitespace-nowrap text-center text-5xl font-semibold leading-none bg-gradient-to-b from-foreground/10 to-transparent bg-clip-text text-transparent sm:text-6xl md:text-display-md lg:text-display"
        >
          SERVICES
        </motion.div>
      </div>
      
      <div className="relative z-10">
        {/* Title - top left */}
        <AnimatedSection className="max-w-[420px] mb-12">
          <h2 className="text-subheading-sm md:text-subheading-md lg:text-subheading font-medium text-foreground">
            From first audit to a working system. Automations and tools built to cut repetitive work.
          </h2>
        </AnimatedSection>

        <Carousel setApi={setApi} opts={{ align: 'start', loop: true }} aria-label="Services">
          <CarouselContent className="-ml-0">
            {services.map((service, index) => (
              <CarouselItem key={service.letter} className="pl-0">
                <div className="grid grid-cols-1 items-stretch gap-8 md:grid-cols-[minmax(280px,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
                  <div className="aspect-[4/5] overflow-hidden md:aspect-[4/5]">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="h-full w-full object-cover grayscale transition-all duration-500 hover:scale-105 hover:grayscale-0"
                    />
                  </div>

                  <div className="flex min-h-[280px] flex-col justify-between py-1 md:py-6">
                    <div>
                      <p className="mb-5 text-sm font-semibold text-muted-foreground">
                        ({service.letter}) / 0{index + 1}
                      </p>
                      <h3 className="text-heading-sm font-semibold text-foreground md:text-heading-md lg:text-heading">
                        {service.title}
                      </h3>
                      <p className="mt-3 text-subheading-sm font-medium text-foreground md:text-subheading-md">
                        {service.shortDescription}
                      </p>
                      <p className="mt-6 max-w-[640px] text-sm leading-relaxed text-muted-foreground">
                        {service.fullDescription}
                      </p>
                    </div>

                    <Button
                      type="button"
                      onClick={onOpenCommandMenu}
                      className="mt-8 w-fit rounded-[3px]"
                    >
                      Get started
                    </Button>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="mt-6 flex items-center justify-end gap-3">
            <span className="mr-auto text-sm font-semibold text-muted-foreground" aria-live="polite">
              {String(activeIndex + 1).padStart(2, '0')} / {String(services.length).padStart(2, '0')}
            </span>
            <Button
              type="button"
              size="icon"
              onClick={() => api?.scrollPrev()}
              aria-label="Previous service"
              className="rounded-[3px]"
            >
              <ArrowLeft />
            </Button>
            <Button
              type="button"
              size="icon"
              onClick={() => api?.scrollNext()}
              aria-label="Next service"
              className="rounded-[3px]"
            >
              <ArrowRight />
            </Button>
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default ServicesSection;