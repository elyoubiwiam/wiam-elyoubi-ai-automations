import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme, Theme } from '@/hooks/useTheme';

const modes: { id: Theme; label: string; Icon: typeof Sun }[] = [
  { id: 'light', label: 'Light mode', Icon: Sun },
  { id: 'dark', label: 'Dark mode', Icon: Moon },
];

const ThemeSwitcher: React.FC = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div
      role="group"
      aria-label="Colour mode"
      className="fixed left-4 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-1 p-1 rounded-full bg-card/90 backdrop-blur-sm border border-border shadow-sm"
    >
      {modes.map(({ id, label, Icon }) => {
        const active = theme === id;
        return (
          <button
            key={id}
            onClick={() => setTheme(id)}
            aria-label={label}
            aria-pressed={active}
            title={label}
            className={`flex h-11 w-11 items-center justify-center rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
              active
                ? 'bg-primary text-primary-foreground'
                : 'text-foreground hover:bg-secondary'
            }`}
          >
            <Icon className="h-4 w-4" />
          </button>
        );
      })}
    </div>
  );
};

export default ThemeSwitcher;
