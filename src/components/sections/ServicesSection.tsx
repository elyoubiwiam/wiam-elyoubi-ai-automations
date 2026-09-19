import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Command } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';

interface Service {
  letter: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
}

interface ServiceItemProps {
  letter: string;
  title: string;
  shortDescription: string;
  index: number;
  isActive: boolean;
  onClick: () => void;
}

const ServiceItem: React.FC<ServiceItemProps> = ({ letter, title, shortDescription, index, isActive, onClick }) => (
  <motion.div 
    initial={{ opacity: 0, x: 20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
    className="flex items-start gap-6 mb-10 last:mb-0 cursor-pointer"
    onClick={onClick}
  >
  <div className={`text-body-sm md:text-body-md lg:text-body font-semibold transition-colors duration-300 ${isActive ? 'text-foreground' : 'text-muted-foreground'}`}>
      ({letter})
    </div>
    <div>
      <h3 className={`text-body-sm md:text-body-md lg:text-body font-semibold transition-colors duration-300 ${isActive ? 'text-foreground' : 'text-muted-foreground'}`}>
        {title}
      </h3>
      <p className={`text-sm font-medium transition-colors duration-300 ${isActive ? 'text-muted-foreground' : 'text-muted'}`}>
        {shortDescription}
      </p>
    </div>
  </motion.div>
);

interface ServicesSectionProps {
  onOpenCommandMenu?: () => void;
}

const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenCommandMenu }) => {
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

  const activeService = services[activeIndex];

  return (
    <section id="services" className="relative w-full py-24">
      {/* Background text */}
      <div className="absolute inset-x-0 top-0 overflow-hidden pointer-events-none">
        <motion.div 
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative text-center text-display-sm md:text-display-md lg:text-display font-semibold leading-none bg-gradient-to-b from-foreground/10 to-transparent bg-clip-text text-transparent"
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

        {/* Content row: Image left, Services right */}
        <div className="flex gap-16 items-start max-md:flex-col">
          {/* Image and description - left side */}
          <div className="flex-shrink-0 w-[380px] max-md:w-full">
            {/* Stacked images - all layered with transitions */}
            <div className="relative aspect-[4/5] overflow-hidden">
              {services.map((service, index) => (
                <div
                  key={service.letter}
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    index === activeIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                  }`}
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className={`w-full h-full object-cover grayscale hover:grayscale-0 hover:scale-105 transition-all duration-300 ease-out ${
                      index === activeIndex ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                </div>
              ))}
              {/* Film grain overlay */}
              <div 
                className="absolute inset-0 pointer-events-none opacity-[0.15] z-20"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                }}
              />
            </div>
            
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <p className="text-sm text-muted-foreground leading-relaxed mt-4">
                  {activeService.fullDescription}
                </p>
                
                {/* Small CMD+K button */}
                <button
                  onClick={onOpenCommandMenu}
                  className="flex items-center gap-1 mt-4 px-2 py-1.5 bg-foreground text-background text-xs font-medium rounded-[3px] hover:opacity-80 transition-opacity"
                >
                  {/* Mobile/Tablet: Show "Get started" text */}
                  <span className="lg:hidden">Get started</span>
                  {/* Desktop: Show CMD+K */}
                  <Command size={12} className="hidden lg:block" />
                  <span className="hidden lg:inline">+ K</span>
                </button>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex-1 pt-4 flex justify-end">
            <div>
            {services.map((service, index) => (
              <ServiceItem 
                key={service.letter} 
                letter={service.letter}
                title={service.title}
                shortDescription={service.shortDescription}
                index={index}
                isActive={activeIndex === index}
                onClick={() => setActiveIndex(index)}
              />
            ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;