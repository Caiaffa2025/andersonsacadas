import React from 'react';
import { 
  ShieldCheck, 
  BadgeCheck, 
  CircleDollarSign, 
  CreditCard, 
  UserCheck, 
  ThumbsUp, 
  Award, 
  BookOpenCheck, 
  Clock, 
  Building,
  Check
} from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';

export const WhyAndersonSacadas: React.FC = () => {
  const guarantees = [
    {
      icon: <CircleDollarSign className="w-5 h-5 text-cyan-400" />,
      title: 'Sem Taxa de Visita ou Orçamento',
      desc: 'Não cobramos taxas de visita técnica ou orçamento. Avaliação sem compromisso.',
      highlight: '100% Gratuito',
    },
    {
      icon: <BadgeCheck className="w-5 h-5 text-emerald-400" />,
      title: 'Pagamento Pós-Aprovação',
      desc: 'Você só realiza o pagamento após testar, aprovar e comprovar a qualidade do serviço executado.',
      highlight: 'Satisfação Garantida',
    },
    {
      icon: <CreditCard className="w-5 h-5 text-cyan-400" />,
      title: 'Facilidade no Pagamento',
      desc: 'Condições facilitadas com parcelamento sem juros no cartão de crédito e desconto no Pix.',
      highlight: 'Até 12x no cartão',
    },
    {
      icon: <UserCheck className="w-5 h-5 text-cyan-400" />,
      title: 'Atendimento Sempre Pela Mesma Pessoa',
      desc: 'Atendimento 100% personalizado e humanizado. A mesma pessoa que te atende no WhatsApp faz a visita técnica.',
      highlight: 'Contato Direto',
    },
    {
      icon: <ThumbsUp className="w-5 h-5 text-cyan-400" />,
      title: 'Alto Índice de Aprovação',
      desc: 'Reconhecimento máximo por parte dos moradores e aprovação em assembleias de condomínio.',
      highlight: '99.8% de Satisfação',
    },
    {
      icon: <Award className="w-5 h-5 text-cyan-400" />,
      title: 'Garantia Formal em Todo Serviço',
      desc: 'Garantia total por escrito em todas as peças e serviços de manutenção em envidraçamento.',
      highlight: 'Até 2 anos por escrito',
    },
    {
      icon: <BookOpenCheck className="w-5 h-5 text-cyan-400" />,
      title: 'Manual & Tutorial Exclusivo de Conservação',
      desc: 'Entregamos um manual prático e tutorial em vídeo de uso e conservação para prolongar a vida útil dos trilhos.',
      highlight: 'Exclusividade Anderson',
    },
    {
      icon: <Clock className="w-5 h-5 text-cyan-400" />,
      title: 'Pontualidade & Cordialidade Rara',
      desc: 'Pontualidade britânica no horário agendado, respeito rigoroso às normas e silêncio predial.',
      highlight: 'Respeito ao seu Tempo',
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-emerald-400" />,
      title: 'Zero Registros em Sites de Reclamação',
      desc: 'Reputação intacta e nota máxima. Nenhum registro em portais de queixas (Reclame Aqui/Procon).',
      highlight: 'Reputação Ilibada',
    },
    {
      icon: <Building className="w-5 h-5 text-cyan-400" />,
      title: 'Mais de 240 Condomínios Atendidos',
      desc: 'Mais de 90 condomínios atendidos frequentemente com contrato e mais de 150 atendidos esporadicamente.',
      highlight: '+240 Edifícios',
    },
  ];

  return (
    <section id="por-que-anderson" className="py-16 sm:py-24 border-b border-slate-800/80 bg-[#0d131f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-14">
          <div className="text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-2">
            Compromisso de Transparência & Qualidade
          </div>
          <h2 className="font-display text-2xl sm:text-4xl font-bold text-white tracking-tight">
            Por que escolher a <span className="text-cyan-300 dark:text-cyan-300 font-black drop-shadow-[0_1px_8px_rgba(6,182,212,0.8)]">Anderson Sacadas</span>?
          </h2>
          <p className="mt-3 text-base text-slate-300">
            Diferenciais concretos construídos ao longo de anos de trabalho sério, onde a sua segurança e a sua economia vêm sempre em primeiro lugar.
          </p>
        </AnimatedSection>

        {/* 10 Guarantees Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {guarantees.map((item, index) => (
            <AnimatedSection
              key={index}
              delay={index * 0.05}
              className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700/80 flex items-center justify-center group-hover:border-cyan-500/50 transition-colors">
                    {item.icon}
                  </div>
                  <span className="text-[11px] font-bold px-2.5 py-1 rounded-md bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                    {item.highlight}
                  </span>
                </div>

                <h3 className="font-display text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {item.title}
                </h3>

                <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center gap-1.5 text-[11px] text-cyan-400">
                <Check className="w-3.5 h-3.5" />
                <span>Garantia de Padrão Técnico</span>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Highlight Callout Box */}
        <AnimatedSection delay={0.3} className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-cyan-950/40 via-slate-900 to-emerald-950/30 border border-cyan-500/30 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-display text-lg font-bold text-white">
              Quer a certeza de que sua sacada ficará 100% segura e macia de operar?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              Chame o Anderson no WhatsApp. Visita técnica e avaliação totalmente sem custo.
            </p>
          </div>

          <a
            href="https://wa.me/5511999999999?text=Ol%C3%A1%20Anderson!%20Gostaria%20de%20agendar%20uma%20visita%20t%C3%A9cnica%20gratuita%20para%20minha%20sacada"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 text-xs sm:text-sm font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-xl transition-all shadow-md shadow-cyan-500/20 whitespace-nowrap cursor-pointer active:scale-95"
          >
            Agendar Visita Sem Custo
          </a>
        </AnimatedSection>

      </div>
    </section>
  );
};
