import React, { useState } from 'react';
import { Check, X, ShieldAlert, ShieldCheck, Sparkles, Sliders } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';
import balconyFinishedImg from '../assets/images/before_after_balcony_1790377142538.jpg';

export const InteractiveComparison: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'depois' | 'antes'>('depois');

  return (
    <section className="py-16 sm:py-24 border-b border-slate-800/80 bg-[#090d15]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <AnimatedSection className="max-w-3xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-2">
            Resultado Comprovado
          </div>
          <h2 className="font-display text-2xl sm:text-4xl font-bold text-white tracking-tight">
            A transformação que a sua sacada precisa
          </h2>
          <p className="mt-3 text-base text-slate-300">
            Veja a diferença entre conviver com um envidraçamento com desgaste crítico e desfrutar de uma varanda totalmente segura e macia de operar.
          </p>
        </AnimatedSection>

        {/* Interactive Segmented Control Tabs */}
        <AnimatedSection delay={0.1} className="flex items-center justify-center mb-8 w-full max-w-full">
          <div className="p-1 bg-slate-900 border border-slate-800 rounded-xl flex flex-col sm:flex-row w-full sm:w-auto gap-1">
            <button
              type="button"
              onClick={() => setActiveTab('depois')}
              className={`px-4 sm:px-5 py-2.5 text-xs sm:text-sm font-semibold rounded-lg transition-all cursor-pointer text-center ${
                activeTab === 'depois'
                  ? 'bg-cyan-400 text-slate-950 shadow-md shadow-cyan-500/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Depois da Anderson Sacadas (Restaurada)
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('antes')}
              className={`px-4 sm:px-5 py-2.5 text-xs sm:text-sm font-semibold rounded-lg transition-all cursor-pointer text-center ${
                activeTab === 'antes'
                  ? 'bg-rose-500 text-white shadow-md shadow-rose-500/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Antes (Riscos & Desgaste Diário)
            </button>
          </div>
        </AnimatedSection>

        {/* Content Box */}
        <AnimatedSection delay={0.15} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-900/50 rounded-2xl border border-slate-800 p-6 sm:p-8">
          
          {/* Visual Showcase */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-xl overflow-hidden border border-slate-700/80 shadow-2xl">
              <img
                src={balconyFinishedImg}
                alt="Sacada com vidros perfeitos, alinhados e estanqueidade comprovada"
                className={`w-full h-[360px] sm:h-[420px] object-cover transition-all duration-500 ${
                  activeTab === 'antes' ? 'brightness-75 contrast-125 sepia-[0.3]' : 'brightness-100'
                }`}
                referrerPolicy="no-referrer"
              />

              <div className="absolute top-4 left-4">
                <span className={`px-3 py-1 rounded-md text-xs font-bold tracking-wide ${
                  activeTab === 'depois' 
                    ? 'bg-cyan-400 text-slate-950' 
                    : 'bg-rose-600 text-white'
                }`}>
                  {activeTab === 'depois' ? 'PADRÃO ANDERSON SACADAS' : 'ESTADO DE RISCO CRÍTICO'}
                </span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 p-3 rounded-lg bg-slate-950/80 backdrop-blur-sm border border-slate-800 text-xs text-slate-200">
                {activeTab === 'depois' ? (
                  <span>Lâminas correndo com leveza de um toque, vedação estanque contra chuvas fortes.</span>
                ) : (
                  <span>Vidros raspando no piso, frestas de vento e perigo iminente de desprendimento.</span>
                )}
              </div>
            </div>
          </div>

          {/* Checklist Comparison */}
          <div className="lg:col-span-6">
            {activeTab === 'depois' ? (
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-cyan-400 font-bold text-sm">
                  <ShieldCheck className="w-5 h-5 text-cyan-400" />
                  <span>Segurança Máxima & Conforto Acústico</span>
                </div>

                <ul className="space-y-3.5 text-sm text-slate-200">
                  <li className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-cyan-400 mt-1 shrink-0" />
                    <div>
                      <strong className="text-white">Deslizamento sem esforço:</strong>
                      <p className="text-xs text-slate-400 mt-0.5">Qualquer membro da família abre e fecha a sacada com apenas uma mão.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-cyan-400 mt-1 shrink-0" />
                    <div>
                      <strong className="text-white">Estanqueidade testada com água:</strong>
                      <p className="text-xs text-slate-400 mt-0.5">Sem mais panos no chão em dias de chuva torrencial de verão.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-cyan-400 mt-1 shrink-0" />
                    <div>
                      <strong className="text-white">Fixação estrutural conferida:</strong>
                      <p className="text-xs text-slate-400 mt-0.5">Parafusos reapertados e travas anti-vento que suportam rajadas de tempestade.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-cyan-400 mt-1 shrink-0" />
                    <div>
                      <strong className="text-white">Tranquilidade no condomínio:</strong>
                      <p className="text-xs text-slate-400 mt-0.5">Laudo técnico de vistoria emitido para resguardar sua responsabilidade civil.</p>
                    </div>
                  </li>
                </ul>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-rose-400 font-bold text-sm">
                  <ShieldAlert className="w-5 h-5 text-rose-400" />
                  <span>Sinais de Alerta no seu Envidraçamento</span>
                </div>

                <ul className="space-y-3.5 text-sm text-slate-300">
                  <li className="flex items-start gap-3">
                    <X className="w-4 h-4 text-rose-400 mt-1 shrink-0" />
                    <div>
                      <strong className="text-white">Vidro que emperra e enrosca:</strong>
                      <p className="text-xs text-slate-400 mt-0.5">Forçar a lâmina emperrada pode quebrar o suporte do vidro temperado.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <X className="w-4 h-4 text-rose-400 mt-1 shrink-0" />
                    <div>
                      <strong className="text-white">Infiltração silenciosa:</strong>
                      <p className="text-xs text-slate-400 mt-0.5">Água que passa pela vedação estufa pisos de madeira, mofa cortinas e danifica o gesso do vizinho de baixo.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <X className="w-4 h-4 text-rose-400 mt-1 shrink-0" />
                    <div>
                      <strong className="text-white">Vidros balançando no vento:</strong>
                      <p className="text-xs text-slate-400 mt-0.5">Folga nas roldanas de saída provoca barulho ensurdecedor de trepidação nas noites de ventania.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <X className="w-4 h-4 text-rose-400 mt-1 shrink-0" />
                    <div>
                      <strong className="text-white">Risco de responsabilidade civil:</strong>
                      <p className="text-xs text-slate-400 mt-0.5">Queda de vidro para fora do edifício gera graves consequências jurídicas e perigo fatal a pedestres.</p>
                    </div>
                  </li>
                </ul>
              </div>
            )}
          </div>

        </AnimatedSection>

      </div>
    </section>
  );
};

