import React from 'react';
import { MessageCircle } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <aside aria-label="Atendimento rápido" className="fixed bottom-5 right-5 z-40">
      <a
        href="https://wa.me/5511934493446?text=Ol%C3%A1%2C%20gostaria%20de%20um%20or%C3%A7amento%20para%20manuten%C3%A7%C3%A3o%20da%20minha%20sacada"
        target="_blank"
        rel="noreferrer"
        className="flex items-center gap-2.5 px-4 py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs sm:text-sm rounded-full shadow-lg shadow-emerald-500/30 transition-all hover:scale-105 active:scale-95 group"
        aria-label="Falar pelo WhatsApp"
      >
        <MessageCircle className="w-5 h-5 text-slate-950 fill-slate-950/20 shrink-0" />
        <span className="hidden sm:inline">Orçamento no WhatsApp</span>
        <span className="sm:hidden">WhatsApp</span>
      </a>
    </aside>
  );
};
