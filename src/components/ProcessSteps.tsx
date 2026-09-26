import React from 'react';
import { Camera, FileCheck2, CalendarCheck, Sparkles, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import { AnimatedSection } from './AnimatedSection';

export const ProcessSteps: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Envie uma foto ou vídeo',
      desc: 'Mostre o trilho ou o vidro emperrado pelo WhatsApp. Nossos especialistas identificam o sistema na hora.',
      icon: <Camera className="w-5 h-5 text-cyan-400" />,
    },
    {
      num: '02',
      title: 'Orçamento prévio transparente',
      desc: 'Sem taxas ocultas ou surpresas na hora de pagar. Valor detalhado com peças e mão de obra inclusas.',
      icon: <FileCheck2 className="w-5 h-5 text-cyan-400" />,
    },
    {
      num: '03',
      title: 'Visita pontual com peças a bordo',
      desc: 'Nossa van técnica já leva roldanas, escovas, silicones e componentes para resolver no mesmo dia.',
      icon: <CalendarCheck className="w-5 h-5 text-cyan-400" />,
    },
    {
      num: '04',
      title: 'Execução limpa e teste prático',
      desc: 'Alinhamos e lubrificamos. Você testa folha por folha com a ponta dos dedos antes da liberação.',
      icon: <Sparkles className="w-5 h-5 text-cyan-400" />,
    },
    {
      num: '05',
      title: 'Garantia por escrito e Laudo',
      desc: 'Emissão de termo de garantia formal de até 2 anos e laudo técnico para o condomínio caso solicitado.',
      icon: <ShieldCheck className="w-5 h-5 text-cyan-400" />,
    },
  ];

  return (
    <section className="py-16 sm:py-24 border-b border-slate-800/80 bg-[#090d15]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-14">
          <div className="text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-2">
            Metodologia Ágil e Segura
          </div>
          <h2 className="font-display text-2xl sm:text-4xl font-bold text-white tracking-tight">
            Como funciona o atendimento da Anderson Sacadas
          </h2>
          <p className="mt-3 text-base text-slate-300">
            Do primeiro contato até o pós-atendimento, tudo pensado para respeitar o seu tempo e as regras do seu edifício.
          </p>
        </AnimatedSection>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {steps.map((st, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="relative p-6 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-sm font-bold text-cyan-400">
                    {st.num}.
                  </span>
                  <div className="w-9 h-9 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center">
                    {st.icon}
                  </div>
                </div>

                <h3 className="font-display text-base font-bold text-white">
                  {st.title}
                </h3>
                <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                  {st.desc}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-800/80 text-[11px] text-slate-400">
                {i === 0 ? 'Resposta em minutos' : i === 2 ? 'Respeito aos horários prediais' : 'Padrão premium'}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

