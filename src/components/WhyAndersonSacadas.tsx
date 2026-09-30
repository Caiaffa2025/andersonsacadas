import React from 'react';
import { 
  ShieldCheck, 
  BadgeCheck, 
  CircleDollarSign, 
  CreditCard, 
  UserCheck, 
  ThumbsUp, 
  Award, 
  Clock, 
  Building,
  CheckCircle2,
  HeartHandshake
} from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';

export const WhyAndersonSacadas: React.FC = () => {
  const categories = [
    {
      title: 'Transparência & Custo Zero',
      icon: <CircleDollarSign className="w-6 h-6 text-cyan-400" />,
      items: [
        {
          title: 'Zero Taxa de Visita Técnica',
          desc: 'Avaliação presencial ou por WhatsApp totalmente gratuita e sem nenhum compromisso.',
        },
        {
          title: 'Pagamento Somente Pós-Aprovação',
          desc: 'Você só realiza o pagamento após testar, aprovar e constatar o deslizar macio.',
        },
        {
          title: 'Parcelamento sem Juros',
          desc: 'Pagamento facilitado em até 12x no cartão de crédito ou desconto no Pix.',
        },
      ]
    },
    {
      title: 'Atendimento & Respeito ao Seu Tempo',
      icon: <Clock className="w-6 h-6 text-emerald-400" />,
      items: [
        {
          title: 'Atendimento Pessoal Direto',
          desc: 'A mesma pessoa que fala com você no WhatsApp é quem executa o serviço técnico.',
        },
        {
          title: 'Pontualidade Britânica',
          desc: 'Respeito aos horários agendados e às regras de silêncio e barulho do condomínio.',
        },
        {
          title: 'Manual & Vídeo Tutorial Exclusivo',
          desc: 'Entregamos um guia prático para você manter os trilhos limpos sem esforço.',
        },
      ]
    },
    {
      title: 'Segurança, Normas & Reputação',
      icon: <ShieldCheck className="w-6 h-6 text-purple-400" />,
      items: [
        {
          title: 'Garantia Formal de até 2 Anos',
          desc: 'Termo de garantia por escrito cobrindo peças e mão de obra de manutenção.',
        },
        {
          title: 'Zero Queixas no Reclame Aqui',
          desc: 'Reputação ilibada e nota máxima de satisfação com mais de uma década de história.',
        },
        {
          title: '+240 Condomínios Atendidos',
          desc: 'Aprovados em assembleias e dezenas de edifícios na Grande SP e Litoral.',
        },
      ]
    }
  ];

  return (
    <section id="por-que-anderson" className="py-16 sm:py-24 border-b border-slate-800/80 bg-[#0d131f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-extrabold uppercase tracking-wider mb-3">
            <HeartHandshake className="w-3.5 h-3.5 text-cyan-400" />
            <span>Por Que Fazer Comigo</span>
          </div>
          <h2 className="font-display text-2xl sm:text-4xl font-bold text-white tracking-tight">
            Garantia de segurança, honestidade e custo justo
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
            Diferenciais concretos construídos desde 2014, garantindo que você não precise gastar fortuna trocando o que pode ser perfeitamente restaurado.
          </p>
        </AnimatedSection>

        {/* 3 Streamlined Column Pillar Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {categories.map((cat, idx) => (
            <AnimatedSection key={idx} delay={idx * 0.1}>
              <div className="h-full p-6 sm:p-8 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-cyan-500/30 transition-all flex flex-col justify-between shadow-xl">
                <div>
                  
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-800">
                    <div className="p-2.5 rounded-xl bg-slate-800 border border-slate-700">
                      {cat.icon}
                    </div>
                    <h3 className="font-display text-lg sm:text-xl font-extrabold text-white">
                      {cat.title}
                    </h3>
                  </div>

                  {/* Bullet points */}
                  <div className="space-y-5">
                    {cat.items.map((item, itemIdx) => (
                      <div key={itemIdx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-display text-sm font-bold text-white">
                            {item.title}
                          </h4>
                          <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                </div>

                <div className="mt-6 pt-4 border-t border-slate-800 text-[11px] font-semibold text-cyan-300">
                  ✓ Padrão Anderson Sacadas Desde 2014
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Highlight Callout Box */}
        <AnimatedSection delay={0.3} className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-cyan-950/40 via-slate-900 to-emerald-950/30 border border-cyan-500/30 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-display text-base sm:text-lg font-bold text-white">
              Sua sacada travou ou está vazando água?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              Solicite uma avaliação sem custo e receba o valor prévio do conserto no mesmo dia.
            </p>
          </div>

          <a
            href="https://wa.me/5511999999999?text=Ol%C3%A1%20Anderson!%20Gostaria%20de%20agendar%20uma%20visita%20t%C3%A9cnica%20gratuita%20para%20minha%20sacada"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3.5 text-xs sm:text-sm font-extrabold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-xl transition-all shadow-md shadow-cyan-500/20 whitespace-nowrap cursor-pointer active:scale-95"
          >
            Agendar Visita Sem Custo
          </a>
        </AnimatedSection>

      </div>
    </section>
  );
};
