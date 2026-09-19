import React, { forwardRef } from 'react';
import { Link } from 'react-router-dom';
import logoAsset from '@/assets/wiam-logo.png.asset.json';

const Header = forwardRef<HTMLElement>((_, ref) => {
  return (
    <header ref={ref} className="relative flex w-full items-center justify-between py-4 border-b border-muted">
      {/* Logo - left */}
      <Link to="/" className="w-[120px] md:w-[220px] flex-shrink-0 text-foreground hover:opacity-70 transition-opacity z-10">
        <span className="hidden md:inline text-[20px] lg:text-[24px] font-bold tracking-tight leading-none whitespace-nowrap">
          Wiam El Youbi
        </span>
        <span className="md:hidden text-[20px] font-bold tracking-tight leading-none">
          WIAM
        </span>
      </Link>
      
      {/* Centered text - absolutely positioned to always be centered */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="text-[10px] md:text-xs lg:text-sm font-semibold text-foreground text-center">
          AI Automations & Custom Tools
        </div>
      </div>
      
      {/* Right spacer for CMD+K button */}
      <div className="w-[40px] md:w-[68px] flex-shrink-0" />
    </header>
  );
});

Header.displayName = 'Header';

export default Header;
