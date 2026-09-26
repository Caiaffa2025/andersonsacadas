import React from 'react';
import { TESTIMONIALS } from '../data/content';
import { Star, Quote, Building2, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { AnimatedSection } from './AnimatedSection';

export const Testimonials: React.FC = () => {
  return (
    <section id="depoimentos" className="py-16 sm:py-24 border-b border-slate-800/80 bg-[#0d121c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <AnimatedSection className="max-w-3xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-2">
            Histórias Reais de Sucesso
          </div>
          <h2 className="font-display text-2xl sm:text-4xl font-bold text-white tracking-tight">
            Quem confiou e economizou com a SacadaPrime
          </h2>
          <p className="mt-3 text-base text-slate-300">
            Casos de clientes que quase foram induzidos a gastar dezenas de milhares de reais trocando todo o sistema por conta de instaladoras desonestas.
          </p>
        </AnimatedSection>

        {/* Testimonials 3-Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, index) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="p-6 sm:p-7 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-col justify-between"
            >
              <div>
                {/* Rating stars */}
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Problem description */}
                <div className="mb-4 pb-4 border-b border-slate-800/80">
                  <div className="text-[11px] font-semibold text-rose-400 uppercase tracking-wider mb-1">
                    Situação Anterior:
                  </div>
                  <p className="text-xs text-slate-300 italic leading-relaxed">
                    "{t.problem}"
                  </p>
                </div>

                {/* Solution outcome */}
                <div>
                  <div className="text-[11px] font-semibold text-cyan-400 uppercase tracking-wider mb-1">
                    Solução SacadaPrime:
                  </div>
                  <p className="text-xs text-slate-200 leading-relaxed font-normal">
                    {t.solution}
                  </p>
                </div>
              </div>

              {/* Author and Condo metadata (Clean unboxed inline text) */}
              <div className="mt-6 pt-4 border-t border-slate-800/80">
                <div className="font-display text-sm font-bold text-white">
                  {t.author}
                </div>
                <div className="text-xs text-slate-400 mt-0.5">
                  {t.role}
                </div>
                <div className="flex items-center gap-1.5 text-[11px] text-cyan-400/90 mt-1">
                  <Building2 className="w-3.5 h-3.5 shrink-0" />
                  <span className="truncate">{t.condo}</span>
                  <span aria-hidden="true" className="text-slate-600">·</span>
                  <span className="truncate text-slate-400">{t.location}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

