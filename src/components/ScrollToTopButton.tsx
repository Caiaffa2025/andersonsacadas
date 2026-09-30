import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) return null;

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className="fixed bottom-16 sm:bottom-6 left-3 sm:left-6 z-40 p-2.5 sm:p-3 rounded-2xl bg-slate-900/90 text-cyan-400 hover:text-white border border-cyan-500/40 shadow-xl shadow-black/60 backdrop-blur-md transition-all duration-300 hover:bg-cyan-500/20 hover:border-cyan-400 cursor-pointer group active:scale-90 flex items-center gap-1.5"
      aria-label="Voltar ao topo da página"
      title="Voltar ao topo"
    >
      <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:-translate-y-0.5" />
      <span className="text-[11px] font-bold hidden xs:inline sm:inline text-slate-300 group-hover:text-cyan-300">
        Topo
      </span>
    </button>
  );
};
