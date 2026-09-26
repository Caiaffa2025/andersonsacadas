import React from 'react';
import { Cog, CheckCircle2, XCircle, ArrowRight, ShieldCheck, Cpu } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';
import partsImg from '../assets/images/custom_machined_parts_1790377130407.jpg';

interface CustomPartsShowcaseProps {
  onOpenQuoteModal: (topic?: string) => void;
}

export const CustomPartsShowcase: React.FC<CustomPartsShowcaseProps> = ({ onOpenQuoteModal }) => {
  return (
    <section id="pecas-exclusivas" className="py-16 sm:py-24 border-b border-slate-800/80 bg-[#0d121b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <AnimatedSection className="max-w-3xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-2">
            Engenharia Reversa & Usinagem Própria
          </div>
          <h2 className="font-display text-2xl sm:text-4xl font-bold text-white tracking-tight">
            Produzimos nós mesmos as peças que o mercado não tem mais
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Se uma vidraçaria tradicional olhou para a sua sacada e disse que <em className="text-rose-400 not-italic">"essa marca não existe mais e precisa trocar tudo"</em>, você acaba de encontrar a solução. Usinamos peças com precisão cirúrgica para reviver sistemas antigos e patenteados.
          </p>
        </AnimatedSection>

        {/* 2-Column Showcase */}
        <AnimatedSection delay={0.1} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Image & Technical Callout (6 cols) */}
          <div className="lg:col-span-6 relative">
            <div className="rounded-2xl overflow-hidden border border-slate-800 shadow-2xl relative group bg-slate-900">
              <img
                src={partsImg}
                alt="Peças usinadas em aço inox e nylon técnico para sacadas de todas as marcas"
                className="w-full h-[380px] sm:h-[440px] object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
              
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-700/80">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-300 shrink-0">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">
                      Materiais Industriais de Alta Performance
                    </h4>
                    <p className="text-xs text-slate-300 mt-0.5">
                      Nylon de engenharia (Tecnil/Poliamida 6) + Eixos retificados em Aço Inox AISI 304.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Benefits & Comparison (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800">
                <h4 className="text-sm font-bold text-cyan-300 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  Peças para Sistemas Fora de Linha e Patenteados
                </h4>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  Reproduzimos com precisão milimétrica tampas de saída, roldanas excêntricas, freios de parada e guias de recolhimento mesmo que a fábrica original tenha sido extinta há mais de 10 anos.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800">
                <h4 className="text-sm font-bold text-cyan-300 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  Rolamentos Náuticos 100% Blindados
                </h4>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  Diferente das roldanas genéricas do mercado que usam rolamentos abertos de ferro doce que travam com a primeira maresia, nossas peças recebem vedação blindada dupla de borracha nitrílica.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800">
                <h4 className="text-sm font-bold text-cyan-300 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  Economia Real de até 70%
                </h4>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  Substituir apenas os componentes mecânicos e manter seus vidros e perfis originais intactos economiza milhares de reais sem gerar entulho ou dores de cabeça com reformas longas.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={() => onOpenQuoteModal('Fabricação de Peça Específica')}
                className="inline-flex items-center gap-2 px-5 py-3 text-xs sm:text-sm font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-all shadow-md shadow-cyan-500/20 active:scale-95 cursor-pointer"
              >
                <span>Tem uma peça quebrada? Fale com nosso torneiro técnico</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </AnimatedSection>

        {/* Side-by-side Technical Specs comparison */}
        <AnimatedSection delay={0.2} className="mt-14 pt-10 border-t border-slate-800 grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <div className="p-5 rounded-xl bg-slate-900/40 border border-slate-800">
            <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
              Roldana Comum do Mercado
            </div>
            <ul className="space-y-2 text-xs text-slate-400">
              <li className="flex items-center gap-2">
                <span className="text-rose-400">✕</span>
                <span>Plástico reciclado que deforma com o calor do sol</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-rose-400">✕</span>
                <span>Rolamento comum sem vedação (oxida com maresia)</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-rose-400">✕</span>
                <span>Duração média: 12 a 18 meses</span>
              </li>
            </ul>
          </div>

          <div className="p-5 rounded-xl bg-cyan-950/20 border border-cyan-500/30">
            <div className="text-xs font-semibold text-cyan-400 uppercase tracking-wider mb-2">
              Roldana Blindada SacadaPrime
            </div>
            <ul className="space-y-2 text-xs text-slate-200">
              <li className="flex items-center gap-2">
                <span className="text-cyan-400">✓</span>
                <span>Nylon de engenharia aditivado anti-UV de alta fluidez</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-cyan-400">✓</span>
                <span>Rolamento blindado 2RS com lubrificante náutico sintético</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-cyan-400">✓</span>
                <span>Duração comprovada de 5 a 10 anos</span>
              </li>
            </ul>
          </div>

        </AnimatedSection>

      </div>
    </section>
  );
};

