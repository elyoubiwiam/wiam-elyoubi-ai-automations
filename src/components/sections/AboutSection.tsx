import React from 'react';
import { motion } from 'framer-motion';
const AboutSection: React.FC = () => {
  return <section id="about" className="relative w-full pt-24 pb-16">
      {/* Background text */}
      <div className="absolute inset-x-0 top-0 overflow-hidden pointer-events-none">
      <motion.div initial={{
        opacity: 0,
        x: -100
      }} whileInView={{
        opacity: 1,
        x: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 1,
        ease: [0.25, 0.1, 0.25, 1]
      }} className="relative text-center text-display-sm md:text-display-md lg:text-display font-semibold leading-none whitespace-nowrap" style={{
        background: 'linear-gradient(to bottom, hsl(var(--foreground) / 0.1), transparent)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text'
      }}>
          ABOUT
        </motion.div>
      </div>
      
      <div className="relative z-10">
        <motion.div initial={{
        opacity: 0
      }} whileInView={{
        opacity: 1
      }} viewport={{
        once: true,
        margin: "-100px"
      }} transition={{
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1]
      }} className="flex flex-col">
          {/* Image wrapper - responsive height */}
          <div className="h-[412px] md:h-[515px] lg:h-[618px]">
            <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80" alt="Wiam at work" className="absolute left-0 top-[40px] w-full md:w-[343px] lg:w-[412px] h-[412px] md:h-[515px] lg:h-[618px] object-cover max-md:relative max-md:top-0" />
          </div>
          
          {/* Mobile text - visible only on mobile */}
          <p className="block md:hidden pt-6 text-heading-sm font-semibold text-foreground">
            I'm Wiam El Youbi. With a background in Marketing, Web Development and Cyberpsychology, I build AI automations and custom tools that help businesses work faster, and more efficiently.
          </p>
          
          {/* Tablet text - visible only on tablet */}
          <p className="hidden md:block lg:hidden pt-6 text-heading-md font-semibold text-foreground py-0">I'm Wiam El Youbi. With a background in Marketing, Web Development and Cyberpsychology, I build AI automations and custom tools that help businesses work faster, and more efficiently.</p>
          
          {/* Desktop text with CSS float spacer */}
          <p className="hidden lg:block pt-0 text-heading font-semibold text-foreground">I'm Wiam El Youbi. With a background in Marketing, Web Development and Cyberpsychology, I build AI automations and custom tools that help businesses work faster, and more efficiently.</p>
        </motion.div>
      </div>
    </section>;
};
export default AboutSection;
