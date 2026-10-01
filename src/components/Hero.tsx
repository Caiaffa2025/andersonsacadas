import React from 'react';
import { Shield, CheckCircle2, ArrowRight, MessageCircle, Wrench, Sparkles, AlertTriangle } from 'lucide-react';
import { motion } from 'framer-motion';
import heroImage from '../assets/images/hero_balcony_glass_1790377105614.jpg';

interface HeroProps {
  onOpenQuoteModal: (serviceName?: string) => void;
  onScrollToSimulator: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuoteModal, onScrollToSimulator }) => {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-slate-800/80">
      {/* Subtle background glow */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-cyan-600/10 blur-[130px] pointer-events-none rounded-full"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Proposition and Copy */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="lg:col-span-7 space-y-6"
          >
            
            {/* Clean unboxed kicker with typographic separator (Anti-pill discipline) */}
            <div className="flex items-center gap-2 text-xs sm:text-sm font-medium tracking-wide text-cyan-400">
              <span>Especialista em Envidraçamento de Sacadas</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-slate-300">Atuando ininterruptamente desde 2014</span>
            </div>

            {/* Display Headline with balanced wrap */}
            <h1 className="font-display text-3xl sm:text-5xl lg:text-[54px] font-extrabold text-white leading-[1.12] tracking-tight" style={{ textWrap: 'balance' }}>
              Sua sacada suave ao deslizar, <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-300">segura contra quedas</span> e 100% vedada.
            </h1>

            {/* Core Value Proposition directly from user brief */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              Muitas instaladoras fecham as portas, trocam de razão social e abandonam garantias, deixando clientes sem assistência. 
              <strong className="text-white font-semibold"> Desde 2014</strong>, nós nos especializamos no que ninguém quer fazer: consertar qualquer sistema existente, com peças de reposição para todas as marcas e <strong className="text-cyan-300 font-semibold">fabricação própria sob medida de peças patenteadas ou antigas</strong>.
            </p>

            {/* Credibility checkpoints */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-sm text-slate-300">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Roldanas blindadas de aço inox 304</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Produção própria de peças descontinuadas</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Estanqueidade total contra chuva e ventos</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Inspeção técnica em conformidade com NBR 16259</span>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <button
                onClick={onScrollToSimulator}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-all shadow-lg shadow-cyan-500/20 active:scale-95 cursor-pointer whitespace-nowrap"
              >
                <span>Fazer Diagnóstico Online Grátis</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              
              <a
                href="https://wa.me/5511934493446?text=Ol%C3%A1%2C%20gostaria%20de%20um%20diagn%C3%B3stico%20e%20or%C3%A7amento%20para%20minha%20sacada"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-slate-800/90 hover:bg-slate-700/90 border border-slate-700/80 rounded-lg transition-all active:scale-95 whitespace-nowrap"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>Falar com Técnico no WhatsApp</span>
              </a>
            </div>

            {/* Trust metadata separator (Clean unboxed inline text) */}
            <div className="pt-2 flex flex-wrap items-center gap-y-1 gap-x-3 text-xs text-slate-400">
              <span>Atendimento em toda Grande SP e Litoral</span>
              <span aria-hidden="true">·</span>
              <span>Garantia de até 2 anos por escrito</span>
              <span aria-hidden="true">·</span>
              <span>Nota Fiscal e Termo Formal</span>
            </div>

          </motion.div>

          {/* Right Column: High-Impact Visual Carrier */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900/60 shadow-2xl group">
              {/* Media image */}
              <img
                src={heroImage}
                alt="Envidraçamento de sacada moderno com deslizamento perfeito e vista panorâmica"
                className="w-full h-[420px] sm:h-[480px] object-cover object-center transform group-hover:scale-[1.02] transition-transform duration-500"
                referrerPolicy="no-referrer"
              />

              {/* Scrim overlay for legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent pointer-events-none" />

              {/* Float info card at bottom */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-800 text-left">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">
                      Sem necessidade de troca total
                    </div>
                    <p className="text-sm font-medium text-white mt-0.5">
                      Recuperamos o sistema original por uma fração do preço de uma sacada nova.
                    </p>
                  </div>
                  <div className="shrink-0 w-9 h-9 rounded-lg bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-300">
                    <Wrench className="w-4 h-4" />
                  </div>
                </div>

                <div className="mt-3 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-300">
                  <span className="font-mono tabular-nums text-cyan-300 font-bold">100% de marcas atendidas</span>
                  <span className="text-slate-400">Peças sob medida</span>
                </div>
              </div>
            </div>

            {/* Decorative subtle corner accents */}
            <div className="absolute -top-3 -right-3 w-24 h-24 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

