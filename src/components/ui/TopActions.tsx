import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme, Theme } from '@/hooks/useTheme';
import { Button } from '@/components/ui/button';

interface TopActionsProps {
  onOpenCommandMenu: () => void;
}

const modes: { id: Theme; label: string; Icon: typeof Sun }[] = [
  { id: 'light', label: 'Light mode', Icon: Sun },
  { id: 'dark', label: 'Dark mode', Icon: Moon },
];

const TopActions: React.FC<TopActionsProps> = ({ onOpenCommandMenu }) => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="absolute right-6 top-4 z-50 flex items-center gap-1.5">
      <div
        role="group"
        aria-label="Colour mode"
        className="flex items-center gap-1 border border-border bg-card/90 p-1 shadow-sm backdrop-blur-sm"
      >
        {modes.map(({ id, label, Icon }) => {
          const active = theme === id;

          return (
            <Button
              key={id}
              type="button"
              variant={active ? 'default' : 'ghost'}
              size="icon"
              onClick={() => setTheme(id)}
              aria-label={label}
              aria-pressed={active}
              title={label}
              className="h-8 w-8 rounded-[3px]"
            >
              <Icon className="h-4 w-4" />
            </Button>
          );
        })}
      </div>

      <Button
        type="button"
        onClick={onOpenCommandMenu}
        className="h-[42px] rounded-[3px] px-3"
      >
        Get started
      </Button>
    </div>
  );
};

export default TopActions;