import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Send } from 'lucide-react';
import { z } from 'zod';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

interface ContactFormProps {
  onBack: () => void;
  onClose: () => void;
}

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, { message: 'Name is required' })
    .max(100, { message: 'Name must be less than 100 characters' }),
  email: z
    .string()
    .trim()
    .min(1, { message: 'Email is required' })
    .email({ message: 'Enter a valid email address' })
    .max(255, { message: 'Email must be less than 255 characters' }),
  message: z
    .string()
    .trim()
    .min(1, { message: 'Message is required' })
    .max(2000, { message: 'Message must be less than 2000 characters' }),
});

type FieldErrors = Partial<Record<'name' | 'email' | 'message', string>>;

const ContactForm: React.FC<ContactFormProps> = ({ onBack, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const parsed = contactSchema.safeParse(formData);
    if (!parsed.success) {
      const fieldErrors = parsed.error.flatten().fieldErrors;
      setErrors({
        name: fieldErrors.name?.[0],
        email: fieldErrors.email?.[0],
        message: fieldErrors.message?.[0],
      });
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.functions.invoke('submit-contact', {
        body: parsed.data,
      });

      if (error || !data?.success) {
        throw error ?? new Error('Request failed');
      }

      toast({
        title: 'Message sent',
        description: "I'll get back to you within 24 hours.",
      });
      onClose();
    } catch (err) {
      console.error('Contact submission failed', err);
      toast({
        title: "Couldn't send your message",
        description: 'Please try again in a moment.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass =
    'bg-foreground/5 border-foreground/20 text-foreground placeholder:text-muted-foreground focus:border-foreground/40';

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="p-4"
    >
      <button
        onClick={onBack}
        className="mb-6 flex items-center gap-2 rounded-md bg-highlight px-3 py-2 text-sm font-medium text-highlight-foreground transition-opacity hover:opacity-85"
      >
        <ArrowLeft size={16} />
        Back
      </button>

      <h2 className="text-lg font-semibold text-foreground mb-2">Get in touch</h2>
      <p className="text-sm text-muted-foreground mb-4">
        Tell me about your project and I'll respond within 24 hours.
      </p>

      <div className="mb-6 flex flex-col gap-2 text-sm">
        <a
          href="mailto:elyoubi.wia@gmail.com"
          className="flex items-center gap-2 text-foreground transition-opacity hover:opacity-75"
        >
          <Mail size={16} className="text-muted-foreground" />
          elyoubi.wia@gmail.com
        </a>
        <a
          href="https://www.linkedin.com/in/wiam-el-youbi-2694371b8/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-foreground transition-opacity hover:opacity-75"
        >
          <Linkedin size={16} className="text-muted-foreground" />
          LinkedIn profile
        </a>
      </div>

      <form onSubmit={handleSubmit} noValidate className="space-y-4">
        <div>
          <label htmlFor="contact-name" className="text-xs text-muted-foreground mb-1 block">Name</label>
          <Input
            id="contact-name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Your name"
            maxLength={100}
            aria-invalid={!!errors.name}
            className={inputClass}
          />
          {errors.name && <p className="text-xs text-destructive mt-1">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="contact-email" className="text-xs text-muted-foreground mb-1 block">Email</label>
          <Input
            id="contact-email"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="your@email.com"
            maxLength={255}
            aria-invalid={!!errors.email}
            className={inputClass}
          />
          {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="contact-message" className="text-xs text-muted-foreground mb-1 block">Message</label>
          <Textarea
            id="contact-message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            placeholder="Tell me about your project"
            rows={4}
            maxLength={2000}
            aria-invalid={!!errors.message}
            className={`${inputClass} resize-none`}
          />
          {errors.message && <p className="text-xs text-destructive mt-1">{errors.message}</p>}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="flex w-full items-center justify-center gap-2 rounded-md bg-highlight py-2.5 text-sm font-medium text-highlight-foreground transition-opacity hover:opacity-85 disabled:opacity-50"
        >
          {isSubmitting ? (
              'Sending'
          ) : (
            <>
              Send message
              <Send size={14} />
            </>
          )}
        </button>
      </form>
    </motion.div>
  );
};

export default ContactForm;
