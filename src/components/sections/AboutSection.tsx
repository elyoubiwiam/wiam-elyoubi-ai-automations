import React from 'react';
import { motion } from 'framer-motion';
import wiamAboutImage from '@/assets/wiam-about.jpg';

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
      
      <div className="relative z-10 pt-8 md:pt-16">
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
      }} className="grid grid-cols-1 items-start gap-8 md:grid-cols-[minmax(260px,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
          <div className="aspect-[4/5] w-full overflow-hidden">
            <img src={wiamAboutImage} alt="Wiam El Youbi" className="h-full w-full object-cover object-center" />
          </div>

          <p className="text-heading-sm font-semibold text-foreground md:text-heading-md lg:text-heading">
            I'm Wiam El Youbi. With a background in Marketing, Web Development and Cyberpsychology, I build AI automations and custom tools that help businesses work faster, and more efficiently.
          </p>
        </motion.div>
      </div>
    </section>;
};
export default AboutSection;
