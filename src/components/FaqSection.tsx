import React, { useState } from 'react';
import { FAQ_ITEMS } from '../data/content';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { AnimatedSection } from './AnimatedSection';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 border-b border-slate-800/80 bg-[#090d15]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <AnimatedSection className="text-center mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-2">
            Tire Suas Dúvidas
          </div>
          <h2 className="font-display text-2xl sm:text-4xl font-bold text-white tracking-tight">
            Perguntas Frequentes sobre Manutenção de Sacadas
          </h2>
          <p className="mt-3 text-base text-slate-300">
            Transparência total para você tomar a decisão mais segura e econômica.
          </p>
        </AnimatedSection>

        {/* Accordion list */}
        <AnimatedSection delay={0.1} className="space-y-3">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-xl border border-slate-800 bg-slate-900/60 overflow-hidden transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-800/40 transition-colors"
                >
                  <span className="font-display text-sm sm:text-base font-bold text-white">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-cyan-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/50">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </AnimatedSection>

        {/* WhatsApp direct help */}
        <AnimatedSection delay={0.2} className="mt-10 text-center text-xs text-slate-400">
          <span>Ainda tem dúvidas técnicas sobre a sua marca de sacada? </span>
          <a
            href="https://wa.me/5511999999999?text=Ol%C3%A1%2C%20tenho%20uma%20d%C3%BAvida%20espec%C3%ADfica%20sobre%20minha%20sacada"
            target="_blank"
            rel="noreferrer"
            className="text-cyan-400 hover:text-cyan-300 font-semibold underline underline-offset-4"
          >
            Fale diretamente com nosso engenheiro no WhatsApp
          </a>
        </AnimatedSection>

      </div>
    </section>
  );
};

