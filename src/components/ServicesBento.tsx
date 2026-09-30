import React, { useState } from 'react';
import { SERVICES } from '../data/content';
import { 
  ArrowUpRight, 
  Check, 
  ShieldCheck, 
  Wrench, 
  Droplets, 
  Cog, 
  FileText, 
  Sparkles,
  ChevronDown,
  ChevronUp,
  MessageCircle,
  SlidersHorizontal
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { AnimatedSection } from './AnimatedSection';

interface ServicesBentoProps {
  onSelectService: (serviceTitle: string) => void;
}

export const ServicesBento: React.FC<ServicesBentoProps> = ({ onSelectService }) => {
  const [showAllServices, setShowAllServices] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>('todos');

  // 4 Core Main Service Pillars (Simplified for maximum user clarity)
  const corePillars = [
    {
      id: 'roldanas-mecanica',
      title: 'Troca de Roldanas & Mecânica',
      badge: 'Problema #1 das Sacadas',
      icon: <Wrench className="w-6 h-6 text-cyan-400" />,
      tagline: 'Vidro pesado, travando, raspando no trilho ou com ruído metálico.',
      desc: 'Substituímos o conjunto de roldanas gastas por kits com rolamentos blindados em aço inox 304 e revestimento em nylon de alta densidade.',
      features: [
        'Rolamentos duplos blindados em Aço Inox 304',
        'Alinhamento e nivelamento milimétrico de prumo',
        'Deslizamento suave ao toque de um dedo'
      ],
      recommended: 'Anual ou quando o vidro emperrar',
      ctaText: 'Solicitar Troca de Roldanas'
    },
    {
      id: 'vedacao-estanqueidade',
      title: 'Vedação & Estanqueidade de Chuva',
      badge: 'Proteção para Seus Móveis',
      icon: <Droplets className="w-6 h-6 text-cyan-400" />,
      tagline: 'Entrando água de chuva, vento forte e barulho externo.',
      desc: 'Troca completa das escovas de vedação náuticas ressecadas pelo sol e aplicação de silicone estrutural com proteção contra raios UV.',
      features: [
        'Escovas náuticas com lâmina de polipropileno',
        'Silicone estrutural de alta aderência perimetral',
        'Protege pisos laminados, vinílicos e móveis'
      ],
      recommended: 'A cada 2 anos (ação solar)',
      ctaText: 'Solicitar Vedação Total'
    },
    {
      id: 'usinagem-pecas',
      title: 'Usinagem Própria de Peças Exclusivas',
      badge: 'Especialidade Anderson',
      icon: <Cog className="w-6 h-6 text-cyan-400" />,
      tagline: 'Sistemas antigos, fora de linha ou de fabricantes falidos.',
      desc: 'Engenharia reversa e fabricação própria em nylon técnico e inox de tampas de saída, roldanas excêntricas e guias descontinuadas.',
      features: [
        'Usinagem de precisão em Nylon Tecnil e Inox',
        'Evita a troca cara do sistema de alumínio completo',
        'Atendemos 100% das marcas nacionais e importadas'
      ],
      recommended: 'Peças quebradas ou antigas',
      ctaText: 'Solicitar Peça Customizada'
    },
    {
      id: 'revisao-preventiva-seguranca',
      title: 'Revisão Preventiva & Inspeção Geral',
      badge: 'Segurança da Família',
      icon: <ShieldCheck className="w-6 h-6 text-cyan-400" />,
      tagline: 'Garantir a segurança da família e prolongar a vida útil do sistema.',
      desc: 'Inspeção rigorosa de 28 itens de segurança, reaperto com torquímetro dos parafusos estruturais e regulagem geral de prumo.',
      features: [
        'Inspeção detalhada dos parafusos e travas de sustentação',
        'Reaperto estrutural e calibração de abertura',
        'Aprovado em condomínios de toda Grande SP e Litoral'
      ],
      recommended: 'Anual (Prevenção de Quedas)',
      ctaText: 'Solicitar Revisão Preventiva'
    }
  ];

  const filteredServices = activeCategory === 'todos' 
    ? SERVICES 
    : SERVICES.filter((s) => s.category === activeCategory);

  return (
    <section id="servicos" className="py-16 sm:py-24 border-b border-slate-800/80 bg-[#0a0e17]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <AnimatedSection className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-extrabold uppercase tracking-wider mb-3">
            <Wrench className="w-3.5 h-3.5 text-cyan-400" />
            <span>Serviços Especializados</span>
          </div>
          <h2 className="font-display text-2xl sm:text-4xl font-bold text-white tracking-tight">
            O que está acontecendo com a sua sacada?
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
            Identifique o problema e entenda exatamente a solução oferecida. Trabalhamos com peças de reposição para todas as marcas e fabricação própria.
          </p>
        </AnimatedSection>

        {/* 4 CORE PRIMARY SERVICE PILLARS (Clean, Large, Uncluttered) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {corePillars.map((pillar, idx) => (
            <AnimatedSection key={pillar.id} delay={idx * 0.08}>
              <div className="h-full flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 transition-all shadow-xl hover:shadow-cyan-500/5 group">
                <div>
                  
                  {/* Top Badge & Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                      {pillar.badge}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center group-hover:border-cyan-400 group-hover:bg-cyan-500/10 transition-colors">
                      {pillar.icon}
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="font-display text-xl sm:text-2xl font-extrabold text-white group-hover:text-cyan-300 transition-colors">
                    {pillar.title}
                  </h3>
                  
                  <p className="text-xs sm:text-sm font-semibold text-cyan-400/90 mt-1">
                    Sintoma: {pillar.tagline}
                  </p>

                  <p className="text-xs sm:text-sm text-slate-300 mt-3 leading-relaxed">
                    {pillar.desc}
                  </p>

                  {/* Key checklist */}
                  <ul className="mt-5 space-y-2 pt-4 border-t border-slate-800/80">
                    {pillar.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                        <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                </div>

                {/* Footer Action */}
                <div className="mt-6 pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                  <span className="text-[11px] text-slate-400 font-medium">
                    Frequência: <strong className="text-slate-300">{pillar.recommended}</strong>
                  </span>

                  <button
                    onClick={() => onSelectService(pillar.title)}
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 text-xs font-extrabold shadow-md shadow-cyan-500/20 transition-all active:scale-95 cursor-pointer"
                  >
                    <span>{pillar.ctaText}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>

              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* EXPANDABLE CATALOG FOR ALL 15 SPECIFIC TECHNICAL SERVICES */}
        <div className="text-center pt-2">
          <button
            type="button"
            onClick={() => setShowAllServices(!showAllServices)}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/40 text-slate-300 hover:text-white text-xs sm:text-sm font-bold transition-all cursor-pointer shadow-md"
          >
            <SlidersHorizontal className="w-4 h-4 text-cyan-400" />
            <span>{showAllServices ? 'Ocultar Catálogo Completo (15 Serviços)' : 'Ver Catálogo Completo de Serviços Específicos (15 Opções)'}</span>
            {showAllServices ? <ChevronUp className="w-4 h-4 text-cyan-400" /> : <ChevronDown className="w-4 h-4 text-cyan-400" />}
          </button>
        </div>

        {showAllServices && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-10 pt-8 border-t border-slate-800"
          >
            <div className="text-center max-w-xl mx-auto mb-6">
              <h4 className="font-display text-lg font-bold text-white">
                Lista Completa de Serviços & Ajustes Técnicos
              </h4>
              <p className="text-xs text-slate-400 mt-1">
                Filtre por categoria caso esteja buscando uma intervenção pontual.
              </p>
            </div>

            {/* Filter Category Tabs */}
            <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
              {[
                { id: 'todos', label: 'Todos (15)' },
                { id: 'mecanica', label: 'Mecânica & Roldanas' },
                { id: 'vedacao', label: 'Vedação & Limpeza' },
                { id: 'vidros', label: 'Vidros & Colagem' },
                { id: 'modernizacao', label: 'Modernização' },
                { id: 'consultoria', label: 'Laudos & Orientação' },
              ].map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                    activeCategory === cat.id
                      ? 'bg-cyan-400 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                      : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Services Grid (15 Services) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredServices.map((service) => (
                <div
                  key={service.id}
                  className="p-5 rounded-xl bg-slate-900/60 border border-slate-800/90 flex flex-col justify-between hover:border-slate-700 transition-colors"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-mono text-xs font-bold text-cyan-400">
                        #{service.number}
                      </span>
                      <span className="text-[10px] text-slate-400 bg-slate-800 px-2 py-0.5 rounded">
                        {service.recommendedInterval}
                      </span>
                    </div>

                    <h4 className="font-display text-base font-bold text-white">
                      {service.title}
                    </h4>

                    <p className="mt-1.5 text-xs text-slate-300 leading-relaxed">
                      {service.shortDesc}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between">
                    <span className="text-[11px] text-slate-400">Atendimento sob medida</span>
                    <button
                      onClick={() => onSelectService(service.title)}
                      className="text-xs font-bold text-cyan-400 hover:text-cyan-300 cursor-pointer"
                    >
                      Solicitar →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

      </div>
    </section>
  );
};
