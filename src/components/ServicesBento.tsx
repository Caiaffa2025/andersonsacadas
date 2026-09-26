import React, { useState } from 'react';
import { SERVICES, ServiceItem } from '../data/content';
import { 
  ArrowUpRight, 
  Check, 
  ShieldCheck, 
  Wrench, 
  Droplets, 
  Compass, 
  Lock, 
  FileText, 
  SlidersHorizontal,
  Sparkles,
  Layers,
  Settings,
  Maximize2,
  Brush,
  BookOpen
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { AnimatedSection } from './AnimatedSection';

interface ServicesBentoProps {
  onSelectService: (serviceTitle: string) => void;
}

export const ServicesBento: React.FC<ServicesBentoProps> = ({ onSelectService }) => {
  const [activeCategory, setActiveCategory] = useState<string>('todos');

  const getIcon = (id: string) => {
    switch (id) {
      case 'manutencao-sacadas':
        return <ShieldCheck className="w-5 h-5 text-cyan-400" />;
      case 'substituicao-roldanas':
        return <Wrench className="w-5 h-5 text-cyan-400" />;
      case 'alinhamento-sistema':
        return <SlidersHorizontal className="w-5 h-5 text-cyan-400" />;
      case 'substituicao-vidros':
        return <Maximize2 className="w-5 h-5 text-cyan-400" />;
      case 'eliminacao-vazamentos':
        return <Droplets className="w-5 h-5 text-cyan-400" />;
      case 'adaptacao-maquinas':
        return <Settings className="w-5 h-5 text-cyan-400" />;
      case 'colagem-perfis':
        return <Layers className="w-5 h-5 text-cyan-400" />;
      case 'substituicao-borrachas':
        return <Droplets className="w-5 h-5 text-cyan-400" />;
      case 'destravamento-vidros':
        return <Lock className="w-5 h-5 text-cyan-400" />;
      case 'troca-componentes':
        return <Compass className="w-5 h-5 text-cyan-400" />;
      case 'reforma-modernizacao':
        return <Sparkles className="w-5 h-5 text-cyan-400" />;
      case 'modernizacao-abertura':
        return <Compass className="w-5 h-5 text-cyan-400" />;
      case 'orientacao-tecnica':
        return <BookOpen className="w-5 h-5 text-cyan-400" />;
      case 'laudos-seguranca':
        return <FileText className="w-5 h-5 text-cyan-400" />;
      case 'limpeza-pos-obra':
        return <Brush className="w-5 h-5 text-cyan-400" />;
      default:
        return <Wrench className="w-5 h-5 text-cyan-400" />;
    }
  };

  const filteredServices = activeCategory === 'todos' 
    ? SERVICES 
    : SERVICES.filter((s) => s.category === activeCategory);

  return (
    <section id="servicos" className="py-16 sm:py-24 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <AnimatedSection className="max-w-3xl mb-10">
          <div className="text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-2">
            Nossos Serviços de Engenharia
          </div>
          <h2 className="font-display text-2xl sm:text-4xl font-bold text-white tracking-tight">
            Serviços de alta qualidade, projetados para atender às suas necessidades específicas
          </h2>
          <p className="mt-3 text-base text-slate-300">
            Mais de uma década oferecendo soluções completas para envidraçamento de sacadas com padrão técnico rigoroso, peças sob medida e garantia por escrito.
          </p>
        </AnimatedSection>

        {/* Filter Category Tabs */}
        <AnimatedSection delay={0.1} className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {[
            { id: 'todos', label: 'Todos os Serviços (15)' },
            { id: 'mecanica', label: 'Mecânica & Roldanas' },
            { id: 'vedacao', label: 'Vedação & Limpeza' },
            { id: 'vidros', label: 'Vidros & Colagem' },
            { id: 'modernizacao', label: 'Modernização' },
            { id: 'consultoria', label: 'Laudos & Orientação' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-cyan-400 text-slate-950 shadow-md shadow-cyan-500/20'
                  : 'bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </AnimatedSection>

        {/* Services Grid (15 Services) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service, index) => {
              return (
                <motion.div
                  key={service.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35, delay: (index % 6) * 0.05 }}
                  className="relative flex flex-col justify-between p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/50 transition-all group"
                >
                  <div>
                    {/* Top metadata line */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-xs font-semibold tracking-wider text-cyan-400">
                        {service.number}.
                      </span>
                      <div className="w-9 h-9 rounded-lg bg-slate-800/80 border border-slate-700/80 flex items-center justify-center group-hover:border-cyan-500/40 transition-colors">
                        {getIcon(service.id)}
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="font-display text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {service.title}
                    </h3>

                    {/* Short & Full Description */}
                    <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {service.shortDesc}
                    </p>
                    <p className="mt-2 text-[11px] text-slate-400 leading-normal">
                      {service.fullDesc}
                    </p>

                    {/* Feature checklist */}
                    <ul className="mt-4 pt-3.5 border-t border-slate-800/80 space-y-1.5">
                      {service.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-center gap-2 text-xs text-slate-300">
                          <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Footer with action button */}
                  <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between gap-2">
                    <span className="text-[11px] text-slate-400 font-medium truncate">
                      {service.recommendedInterval}
                    </span>
                    <button
                      onClick={() => onSelectService(service.title)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer group/btn shrink-0"
                    >
                      <span>Solicitar</span>
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};


