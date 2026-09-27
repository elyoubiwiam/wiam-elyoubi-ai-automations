import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Calculator } from 'lucide-react';
import { z } from 'zod';
import { Input } from '@/components/ui/input';
import { toast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

const emailSchema = z
  .string()
  .trim()
  .min(1, { message: 'Email is required' })
  .email({ message: 'Enter a valid email address' })
  .max(255, { message: 'Email must be less than 255 characters' });


interface CalculatorFormProps {
  onBack: () => void;
  onClose: () => void;
}

type ProjectType = 'workflow' | 'tool' | 'ai' | '';
type Engagement = 'build' | 'advise' | 'support' | '';

const CalculatorForm: React.FC<CalculatorFormProps> = ({ onBack, onClose }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    projectType: '' as ProjectType,
    systems: '',
    engagement: '' as Engagement,
    email: ''
  });
  const [estimate, setEstimate] = useState<number | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [emailError, setEmailError] = useState<string | undefined>(undefined);


  const projectTypes = [
    { value: 'workflow', label: 'Workflow Automation', description: 'Connect the tools you already use so work moves without manual steps' },
    { value: 'tool', label: 'Custom Tool', description: 'A new internal app or dashboard built around your process' },
    { value: 'ai', label: 'AI Integration', description: 'AI handling drafting, sorting, or summarizing inside your workflow' },
  ];

  const engagementLevels = [
    { value: 'build', label: 'Build Only', description: 'I build it and hand it over', multiplier: 60 },
    { value: 'advise', label: 'Build + Advise', description: 'Build plus onboarding and process advice', multiplier: 90 },
    { value: 'support', label: 'Build + Support', description: 'Build plus ongoing maintenance and improvements', multiplier: 120 },
  ];

  interface OptionButtonProps {
    selected: boolean;
    anySelected: boolean;
    onSelect: () => void;
    ariaLabel: string;
    children: React.ReactNode;
  }

  const OptionButton: React.FC<OptionButtonProps> = ({ selected, anySelected, onSelect, ariaLabel, children }) => (
    <button
      type="button"
      onClick={onSelect}
      aria-pressed={selected}
      aria-label={ariaLabel}
      className={`w-full text-left p-3 rounded-md border border-highlight bg-highlight text-highlight-foreground transition-all duration-200 ${
        selected
          ? 'scale-[1.02] opacity-100 shadow-md ring-2 ring-highlight-foreground/30'
          : anySelected
            ? 'opacity-40 hover:opacity-70'
            : 'hover:-translate-y-0.5 hover:shadow-md'
      }`}
    >
      {children}
    </button>
  );

  const calculateEstimate = () => {
    const systems = parseFloat(formData.systems) || 0;
    const engagementMultiplier = engagementLevels.find(s => s.value === formData.engagement)?.multiplier || 0;
    const typeMultiplier = formData.projectType === 'ai' ? 1.4 : formData.projectType === 'tool' ? 1.2 : 1;

    return Math.round((systems * engagementMultiplier * typeMultiplier) / 100) * 100;
  };

  const handleNext = () => {
    if (step === 3) {
      setEstimate(calculateEstimate());
    }
    setStep(step + 1);
  };

  const handleSubmit = async () => {
    const parsedEmail = emailSchema.safeParse(formData.email);
    if (!parsedEmail.success) {
      setEmailError(parsedEmail.error.issues[0].message);
      return;
    }

    setEmailError(undefined);
    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.functions.invoke('submit-estimate', {
        body: {
          email: parsedEmail.data,
          projectType: formData.projectType,
          systems: parseFloat(formData.systems),
          engagement: formData.engagement,
          estimate: estimate ?? calculateEstimate(),
        },
      });

      if (error || !data?.success) {
        throw error ?? new Error('Request failed');
      }

      toast({
        title: 'Estimate submitted',
        description: "I've received your project details.",
      });
      onClose();
    } catch (err) {
      console.error('Estimate submission failed', err);
      toast({
        title: "Couldn't send your estimate",
        description: 'Please try again in a moment.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };


  const canProceed = () => {
    switch (step) {
      case 1: return formData.projectType !== '';
      case 2: return formData.systems !== '' && parseFloat(formData.systems) > 0;
      case 3: return formData.engagement !== '';
      case 4: return formData.email.trim() !== '';
      default: return false;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="p-4"
    >
      <button
        onClick={step === 1 ? onBack : () => setStep(step - 1)}
        className="mb-6 flex items-center gap-2 rounded-md bg-highlight px-3 py-2 text-sm font-medium text-highlight-foreground transition-opacity hover:opacity-85"
      >
        <ArrowLeft size={16} />
        {step === 1 ? 'Back' : 'Previous'}
      </button>

      {/* Progress */}
      <div className="flex gap-1 mb-6">
        {[1, 2, 3, 4].map((s) => (
          <div 
            key={s}
            className={`h-1 flex-1 rounded-full transition-colors ${s <= step ? 'bg-foreground' : 'bg-foreground/20'}`}
          />
        ))}
      </div>

      {step === 1 && (
        <div>
          <h2 className="text-lg font-semibold text-foreground mb-2">Project type</h2>
          <p className="text-sm text-muted-foreground mb-4">What should I build for you?</p>
          
          <div className="space-y-2">
            {projectTypes.map((type) => (
              <OptionButton
                key={type.value}
                selected={formData.projectType === type.value}
                anySelected={formData.projectType !== ''}
                onSelect={() => setFormData({ ...formData, projectType: type.value as ProjectType })}
                ariaLabel={type.label}
              >
                <span className="text-sm font-medium text-highlight-foreground">{type.label}</span>
                <p className="text-xs text-highlight-foreground/75">{type.description}</p>
              </OptionButton>
            ))}
          </div>
        </div>
      )}

      {step === 2 && (
        <div>
          <h2 className="text-lg font-semibold text-foreground mb-2">Complexity</h2>
          <p className="text-sm text-muted-foreground mb-4">Roughly how many tools or systems are involved?</p>
          
          <div className="relative">
            <Input
              type="number"
              value={formData.systems}
              onChange={(e) => setFormData({ ...formData, systems: e.target.value })}
              placeholder="e.g. 3"
              className="bg-foreground/5 border-foreground/20 text-foreground placeholder:text-muted-foreground focus:border-foreground/40 pr-16"
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">systems</span>
          </div>
        </div>
      )}

      {step === 3 && (
        <div>
          <h2 className="text-lg font-semibold text-foreground mb-2">Involvement</h2>
          <p className="text-sm text-muted-foreground mb-4">How involved should I be after launch?</p>
          
          <div className="space-y-2">
            {engagementLevels.map((level) => (
              <OptionButton
                key={level.value}
                selected={formData.engagement === level.value}
                anySelected={formData.engagement !== ''}
                onSelect={() => setFormData({ ...formData, engagement: level.value as Engagement })}
                ariaLabel={level.label}
              >
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-highlight-foreground">{level.label}</span>
                  <span className="text-xs text-highlight-foreground/75">~€{level.multiplier}/system</span>
                </div>
                <p className="text-xs text-highlight-foreground/75">{level.description}</p>
              </OptionButton>
            ))}
          </div>
        </div>
      )}

      {step === 4 && (
        <div>
          <h2 className="text-lg font-semibold text-foreground mb-2">Your estimate</h2>
          
          <div className="bg-foreground/5 border border-foreground/20 rounded-lg p-4 mb-4">
            <div className="flex items-center gap-3 mb-3">
              <Calculator className="w-5 h-5 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Estimated project cost</span>
            </div>
            <div className="text-3xl font-semibold text-foreground">
              €{estimate?.toLocaleString()}
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              This is a rough estimate. Final pricing depends on the specifics of your process and timeline.
            </p>
          </div>

          <p className="text-sm text-muted-foreground mb-3">Enter your email to submit your estimate</p>
          <Input
            type="email"
            value={formData.email}
            onChange={(e) => {
              setFormData({ ...formData, email: e.target.value });
              if (emailError) setEmailError(undefined);
            }}
            placeholder="your@email.com"
            maxLength={255}
            aria-invalid={!!emailError}
            className="bg-foreground/5 border-foreground/20 text-foreground placeholder:text-muted-foreground focus:border-foreground/40"
          />
          {emailError && <p className="text-xs text-destructive mt-1">{emailError}</p>}

        </div>
      )}

      <button
        onClick={step === 4 ? handleSubmit : handleNext}
        disabled={!canProceed() || isSubmitting}
        className="mt-6 w-full rounded-md bg-highlight py-2.5 text-sm font-medium text-highlight-foreground transition-opacity hover:opacity-85 disabled:opacity-50"
      >
        {step === 4 ? (isSubmitting ? 'Submitting...' : 'Submit estimate') : 'Continue'}
      </button>
    </motion.div>
  );
};

export default CalculatorForm;
