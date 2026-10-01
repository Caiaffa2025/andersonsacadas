import React from 'react';
import { ShieldAlert, Cpu, Check } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';
import technicianImg from '../assets/images/technician_glass_repair_1790377120566.jpg';
import customPartsImg from '../assets/images/custom_machined_parts_1790377130407.jpg';
import { STATS } from '../data/content';

export const OriginStory: React.FC = () => {
  return (
    <section id="por-que-anderson" className="py-16 sm:py-24 border-b border-slate-800/80 bg-[#0d121c]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <AnimatedSection className="max-w-3xl mb-14">
          <div className="text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-2">
            Nossa Trajetória e Compromisso
          </div>
          <h2 className="font-display text-2xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
            Por que criamos a Anderson Sacadas em 2014? A verdade sobre o mercado de sacadas.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Ao longo dos anos, testemunhamos o mesmo drama em milhares de condomínios: dezenas de empresas de instalação abrem, vendem sacadas caras e, após 2 ou 3 anos, 
            <strong className="text-white font-medium"> fecham as portas ou mudam a razão social</strong> para fugir das garantias contratuais.
          </p>
        </AnimatedSection>

        {/* The 2-side contrast comparison: Market Drama vs Our Solution */}
        <AnimatedSection delay={0.1} className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          
          {/* Box 1: The Problem in the Market */}
          <div className="p-6 sm:p-8 rounded-2xl bg-rose-950/20 border border-rose-800/40 relative">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-400">
                <ShieldAlert className="w-5 h-5" />
              </div>
              <h3 className="font-display text-lg font-bold text-white">
                O que as instaladoras tradicionais fazem:
              </h3>
            </div>
            
            <ul className="space-y-3.5 text-sm text-slate-300">
              <li className="flex items-start gap-2.5">
                <span className="text-rose-400 font-bold">✕</span>
                <span>Focam apenas na venda de novos envidraçamentos e ignoram chamados de pós-venda.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-rose-400 font-bold">✕</span>
                <span>Encerram o CNPJ quando começam os vencimentos de garantias, deixando o cliente sem peças.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-rose-400 font-bold">✕</span>
                <span>Afirmam que o modelo saiu de linha e condenam toda a sua sacada para cobrar R$ 15.000 a R$ 30.000 por um novo sistema.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-rose-400 font-bold">✕</span>
                <span>Usam roldanas plásticas genéricas que ressecam e quebram em menos de 18 meses com sol e peso.</span>
              </li>
            </ul>
          </div>

          {/* Box 2: Our Commitment and In-House Fabrication */}
          <div className="p-6 sm:p-8 rounded-2xl bg-cyan-950/20 border border-cyan-500/40 relative">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="font-display text-lg font-bold text-white">
                A visão e especialização da Anderson Sacadas:
              </h3>
            </div>

            <ul className="space-y-3.5 text-sm text-slate-300">
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                <span><strong className="text-white">Foco 100% em manutenção:</strong> Não tentamos te empurrar um sistema novo quando o seu pode ser consertado com perfeição.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                <span><strong className="text-white">Fabricação própria sob medida:</strong> Quando a fabricante faliu ou a patente expirou e a peça não existe mais, nós usinamos o componente para você.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                <span><strong className="text-white">Aprendizado de campo intensivo:</strong> Mais de 10 anos conhecendo os defeitos crônicos de cada marca e perfil de alumínio.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                <span><strong className="text-white">Melhor custo-benefício comprovado:</strong> Restauramos a segurança total do envidraçamento com garantia por escrito.</span>
              </li>
            </ul>
          </div>

        </AnimatedSection>

        {/* Visual Proof: Technician and Precision Parts Milled in-house */}
        <AnimatedSection delay={0.15} className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center pt-4">
          
          <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 group">
            <img 
              src={technicianImg} 
              alt="Técnico da Anderson Sacadas regulando trilho de sacada com precisão milimétrica" 
              className="w-full h-[320px] object-cover group-hover:scale-105 transition-transform duration-500"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wide">Mão de Obra Própria & Especializada</span>
              <h4 className="text-base font-bold text-white mt-1">
                Técnicos treinados para diagnosticar prumo, folgas e desgaste oculto
              </h4>
              <p className="text-xs text-slate-300 mt-1">
                Ferramentas de alta precisão e calibração milimétrica por folha de vidro.
              </p>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 group">
            <img 
              src={customPartsImg} 
              alt="Peças usinadas sob medida e roldanas blindadas de aço inox para envidraçamento" 
              className="w-full h-[320px] object-cover group-hover:scale-105 transition-transform duration-500"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wide">Usinagem e Peças Raras</span>
              <h4 className="text-base font-bold text-white mt-1">
                Nós mesmos produzimos as peças para solucionar o seu problema
              </h4>
              <p className="text-xs text-slate-300 mt-1">
                Nylon de engenharia náutica e eixos em inox 304 que duram até 5x mais.
              </p>
            </div>
          </div>

        </AnimatedSection>

        {/* Quantified Rigor Grid (Strict tabular numerals, no pill boxes) */}
        <AnimatedSection delay={0.2} className="mt-14 pt-10 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {STATS.map((stat, idx) => (
            <div key={idx} className="space-y-1">
              <div className="font-display font-extrabold text-3xl sm:text-4xl text-white font-mono tabular-nums tracking-tight">
                {stat.value}
              </div>
              <div className="text-sm font-semibold text-cyan-400">
                {stat.label}
              </div>
              <p className="text-xs text-slate-400">
                {stat.detail}
              </p>
            </div>
          ))}
        </AnimatedSection>

      </div>
    </section>
  );
};
