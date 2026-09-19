import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

interface CTASectionProps {
  onOpenCommandMenu?: () => void;
}

const CTASection: React.FC<CTASectionProps> = ({ onOpenCommandMenu }) => {
  return (
    <section id="cta" className="w-full py-16 border-t border-b border-muted">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        className="flex flex-col items-center text-center"
      >
        <h2 className="text-[32px] font-semibold text-foreground">
          Ready to get started?
        </h2>
        <p className="text-sm text-muted-foreground leading-[21px] max-w-[280px] mt-2">
          Tell me what slows your team down, and I'll show you what automation can take off your plate.
        </p>
        
        <Button
          asChild
          className="mt-8 rounded-[4px]"
        >
          <motion.button 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          onClick={onOpenCommandMenu}
          >
            Get in touch
          </motion.button>
        </Button>
      </motion.div>
    </section>
  );
};

export default CTASection;