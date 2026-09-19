import React, { useState, useEffect } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CommandMenu from '@/components/ui/CommandMenu';
import TopActions from '@/components/ui/TopActions';
import PageTransition from '@/components/ui/PageTransition';

interface PageLayoutProps {
  children: React.ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  const [commandOpen, setCommandOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setCommandOpen((prev) => !prev);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <TopActions onOpenCommandMenu={() => setCommandOpen(true)} />
        <CommandMenu open={commandOpen} onOpenChange={setCommandOpen} />
        
        <div className="max-w-[1380px] mx-auto px-6">
          <Header />
          <main>
            {children}
          </main>
          <Footer />
        </div>
      </div>
    </PageTransition>
  );
};

export default PageLayout;
