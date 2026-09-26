import React from 'react';
import { SUPPORTED_SYSTEMS } from '../data/content';
import { CheckCircle2, Shield, Wrench } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';

export const SupportedBrands: React.FC = () => {
  return (
    <section id="marcas" className="py-16 sm:py-24 border-b border-slate-800/80 bg-[#0d121c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-14">
          <div className="text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-2">
            Compatibilidade Universal
          </div>
          <h2 className="font-display text-2xl sm:text-4xl font-bold text-white tracking-tight">
            Especialistas em todas as marcas e sistemas do mercado
          </h2>
          <p className="mt-3 text-base text-slate-300">
            Mais de uma década acumulando conhecimento técnico sobre os perfis, trilhos e encaixes de cada fabricante nacional e importado.
          </p>
        </AnimatedSection>

        {/* Brands Grid */}
        <AnimatedSection delay={0.1} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {SUPPORTED_SYSTEMS.map((sys, idx) => (
            <div 
              key={idx}
              className="p-5 rounded-xl bg-slate-900/60 border border-slate-800/90 hover:border-cyan-500/40 transition-colors"
            >
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <h4 className="text-sm font-bold text-white">{sys.name}</h4>
              </div>
              <p className="text-xs text-slate-400 mt-2 pl-6">
                {sys.note}
              </p>
            </div>
          ))}
        </AnimatedSection>

        {/* Reassurance Banner */}
        <AnimatedSection delay={0.15} className="mt-10 p-6 rounded-2xl bg-cyan-950/20 border border-cyan-500/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-300 shrink-0 hidden sm:flex">
              <Wrench className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-bold text-white">
                Não sabe qual é a marca da sua sacada ou não tem nota fiscal antiga?
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 mt-0.5">
                Sem problemas. Nossos técnicos identificam o modelo apenas por uma foto do trilho e das roldanas enviada no WhatsApp.
              </p>
            </div>
          </div>

          <a
            href="https://wa.me/5511999999999?text=Ol%C3%A1%2C%20tenho%20uma%20foto%20da%20minha%20sacada%20para%20voc%C3%AAs%20identificarem%20a%20marca%20e%20o%20sistema"
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2.5 text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors whitespace-nowrap shadow-sm shadow-cyan-500/20 cursor-pointer"
          >
            Identificar Minha Marca via WhatsApp
          </a>
        </AnimatedSection>

      </div>
    </section>
  );
};

