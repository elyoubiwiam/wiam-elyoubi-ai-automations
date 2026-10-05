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
       }} className="relative w-full whitespace-nowrap text-center text-[clamp(3rem,14vw,13rem)] font-semibold leading-none" style={{
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
       }} className="grid grid-cols-[minmax(96px,0.38fr)_minmax(0,1fr)] items-start gap-4 sm:grid-cols-[minmax(130px,0.32fr)_minmax(0,1fr)] sm:gap-6 md:grid-cols-[minmax(180px,0.3fr)_minmax(0,1fr)] md:gap-10 lg:grid-cols-[minmax(220px,0.28fr)_minmax(0,1fr)] lg:gap-14">
          <div className="group aspect-[4/5] w-full max-w-[280px] overflow-hidden">
            <img src={wiamAboutImage} alt="Wiam El Youbi" className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105" />
          </div>

          <div>
            <p className="text-sm font-semibold leading-relaxed text-foreground sm:text-base md:text-xl lg:text-2xl">
              I'm Wiam El Youbi. My background spans marketing, web development and cyberpsychology. I build AI automations and custom tools that help businesses work faster and more efficiently.
            </p>
            <a
              href="https://www.linkedin.com/in/wiam-el-youbi-2694371b8/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-foreground transition-opacity hover:opacity-75 md:text-base"
            >
              <Linkedin size={16} className="text-muted-foreground" />
              Connect with me on LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </section>;
};
export default AboutSection;
