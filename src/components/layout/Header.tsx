import React, { forwardRef } from 'react';
import { Link } from 'react-router-dom';
import logoUrl from '@/assets/wiam-logo.png';

const Header = forwardRef<HTMLElement>((_, ref) => {
  return (
    <header ref={ref} className="relative flex w-full items-center justify-between py-4 border-b border-muted">
      {/* Logo - left */}
      <Link to="/" className="w-[120px] md:w-[220px] flex-shrink-0 hover:opacity-70 transition-opacity z-10">
        <img
          src={logoUrl}
          alt="Wiam El Youbi"
          className="h-8 md:h-10 w-auto dark:invert"
        />
      </Link>
      
      {/* Centered text - absolutely positioned to always be centered */}
      <div className="absolute inset-0 hidden items-center justify-center pointer-events-none md:flex">
        <div className="text-[10px] md:text-xs lg:text-sm font-semibold text-foreground text-center">
          AI Automations & Custom Tools
        </div>
      </div>
      
      {/* Right spacer for the fixed top controls */}
      <div className="w-[168px] flex-shrink-0" />
    </header>
  );
});

Header.displayName = 'Header';

export default Header;
