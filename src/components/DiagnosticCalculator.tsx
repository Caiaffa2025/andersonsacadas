import React, { useState } from 'react';
import { AnimatedSection } from './AnimatedSection';
import { 
  Sparkles, 
  CheckCircle2, 
  Clock, 
  Send,
  Calculator,
  Tag,
  BadgeCheck,
  ShieldCheck
} from 'lucide-react';

interface DiagnosticCalculatorProps {
  onOpenQuoteModal: (details?: string) => void;
}

const PROBLEMS = [
  {
    id: 'emperrado',
    title: 'Vidro pesado ou travando',
    desc: 'Exige muita força para puxar ou emperra nas curvas e saídas.',
    likelyIssue: 'Roldanas com rolamentos estourados, ressecados ou enferrujados.',
    solution: 'Troca pelo kit de roldanas blindadas em aço inox 304 e alinhamento de trilho.',
    urgency: 'Média - pode danificar o perfil de alumínio',
    basePerPanelMin: 85,
    basePerPanelMax: 110,
  },
  {
    id: 'agua-vento',
    title: 'Infiltração de água ou vento',
    desc: 'Água entra no chão ou móveis em dias de chuva com vento forte.',
    likelyIssue: 'Escovas desgastadas e silicone ressecado pela ação do sol.',
    solution: 'Substituição das escovas náuticas e vedação perimetral com silicone estrutural UV.',
    urgency: 'Alta - risco de estufar pisos laminados e móveis',
    basePerPanelMin: 65,
    basePerPanelMax: 90,
  },
  {
    id: 'folga-desalinhamento',
    title: 'Lâmina desnivelada ou com folga',
    desc: 'Vidro fica balançando, torto ou batendo nas lâminas vizinhas.',
    likelyIssue: 'Folga no perfil leito e parafusos de sustentação frouxos por vibração.',
    solution: 'Reaperto estrutural com torquímetro, regulagem milimétrica de prumo e travas.',
    urgency: 'Crítica - risco de queda do vidro temperado',
    basePerPanelMin: 55,
    basePerPanelMax: 75,
  },
  {
    id: 'peca-quebrada',
    title: 'Peça plástica ou guia quebrada',
    desc: 'A fabricante faliu e nenhuma vidraçaria tem a peça para reposição.',
    likelyIssue: 'Componente descontinuado ou sistema com patente antiga.',
    solution: 'Fabricação própria e usinagem sob medida do componente em nylon de engenharia.',
    urgency: 'Alta - impede o uso correto e seguro da sacada',
    basePerPanelMin: 95,
    basePerPanelMax: 130,
  },
  {
    id: 'preventiva',
    title: 'Revisão preventiva e Inspeção Geral',
    desc: 'A sacada está há mais de 1 ou 2 anos sem revisão e lubrificação técnica.',
    likelyIssue: 'Desgaste natural por intempéries e falta de calibração periódica.',
    solution: 'Inspeção de 28 itens de segurança, reaperto geral com torquímetro e lubrificação técnica.',
    urgency: 'Preventiva - previne quedas, vazamentos e valoriza o imóvel',
    basePerPanelMin: 45,
    basePerPanelMax: 65,
  },
];

export const DiagnosticCalculator: React.FC<DiagnosticCalculatorProps> = ({ onOpenQuoteModal }) => {
  const [selectedProblem, setSelectedProblem] = useState(PROBLEMS[0].id);
  const [shape, setShape] = useState<'reta' | 'l' | 'curva'>('reta');
  const [panelsCount, setPanelsCount] = useState<number>(8);
  const [systemAge, setSystemAge] = useState<string>('3-7');

  const currentProblem = PROBLEMS.find((p) => p.id === selectedProblem) || PROBLEMS[0];

  // Price estimation calculation
  const getEstimatedCostRange = () => {
    let shapeMultiplier = 1.0;
    if (shape === 'l') shapeMultiplier = 1.15;
    if (shape === 'curva') shapeMultiplier = 1.30;

    let ageMultiplier = 1.0;
    if (systemAge === '3-7') ageMultiplier = 1.05;
    if (systemAge === 'mais-7') ageMultiplier = 1.15;

    let minCalculated = currentProblem.basePerPanelMin * panelsCount * shapeMultiplier * ageMultiplier;
    let maxCalculated = currentProblem.basePerPanelMax * panelsCount * shapeMultiplier * ageMultiplier;

    // Minimum service visit floor
    const minFloor = 280;
    if (minCalculated < minFloor) minCalculated = minFloor;
    if (maxCalculated < minFloor + 100) maxCalculated = minFloor + 100;

    // Rounding to clean 10s
    const roundedMin = Math.round(minCalculated / 10) * 10;
    const roundedMax = Math.round(maxCalculated / 10) * 10;

    return {
      min: roundedMin.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 }),
      max: roundedMax.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 }),
      rawMin: roundedMin,
      rawMax: roundedMax,
    };
  };

  const estimatedCost = getEstimatedCostRange();

  const getEstimatedDuration = () => {
    if (panelsCount <= 6) return '1h30 a 2h30';
    if (panelsCount <= 12) return '2h30 a 4h00';
    return '4h00 a 6h00';
  };

  const generateWhatsAppMessage = () => {
    const shapeLabel = shape === 'reta' ? 'Reta' : shape === 'l' ? 'Em L (2 cantos)' : 'Curva / Articulada';
    const text = `Olá Anderson! Fiz o diagnóstico e estimativa de custo no site:%0A%0A` +
      `• Problema: ${currentProblem.title}%0A` +
      `• Formato da Sacada: ${shapeLabel}%0A` +
      `• Quantidade de Folhas: ${panelsCount} vidros%0A` +
      `• Idade aproximada: ${systemAge === 'menos-3' ? 'Menos de 3 anos' : systemAge === '3-7' ? '3 a 7 anos' : 'Mais de 7 anos (Marca antiga/extinta)'}%0A` +
      `• Estimativa de Custo: ${estimatedCost.min} a ${estimatedCost.max}%0A%0A` +
      `Gostaria de agendar a visita técnica sem custo para confirmar a avaliação e o orçamento final.`;
    return `https://wa.me/5511999999999?text=${text}`;
  };

  return (
    <section id="simulador" className="py-12 sm:py-20 border-b border-slate-800/80 bg-[#090d15] overflow-hidden">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 max-w-full">
        
        {/* Section Header */}
        <AnimatedSection className="max-w-3xl mb-8 sm:mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-2 flex items-center gap-2">
            <Calculator className="w-4 h-4 text-cyan-400 shrink-0" />
            <span>Ferramenta Interativa de Diagnóstico & Custo</span>
          </div>
          <h2 className="font-display text-2xl sm:text-4xl font-bold text-white tracking-tight">
            Simulador de Diagnóstico & Calculadora de Custo Estimado
          </h2>
          <p className="mt-2 text-xs sm:text-base text-slate-300 leading-relaxed">
            Descubra em segundos a provável causa do problema da sua sacada e tenha uma estimativa prévia de custo sem taxa de visita técnica.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1} className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          
          {/* Controls: Left Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6 bg-slate-900/60 p-4 sm:p-7 rounded-2xl border border-slate-800">
            
            {/* Step 1: Select Main Symptom */}
            <div>
              <label className="block text-xs sm:text-sm font-bold text-white mb-2.5 flex items-center justify-between">
                <span>1. Qual é o principal sintoma?</span>
                <span className="text-[11px] text-cyan-400 font-normal">Selecione uma opção</span>
              </label>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {PROBLEMS.map((prob) => {
                  const isSelected = selectedProblem === prob.id;
                  return (
                    <button
                      key={prob.id}
                      type="button"
                      onClick={() => setSelectedProblem(prob.id)}
                      className={`text-left p-3 rounded-xl border transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-cyan-950/40 border-cyan-400 text-white shadow-sm'
                          : 'bg-slate-800/40 border-slate-700/60 text-slate-300 hover:border-slate-600'
                      }`}
                    >
                      <div className="text-xs font-bold flex items-center justify-between gap-1">
                        <span className="truncate">{prob.title}</span>
                        {isSelected && <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />}
                      </div>
                      <p className="text-[11px] text-slate-400 mt-1 line-clamp-2 leading-tight">
                        {prob.desc}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Balcony Shape */}
            <div>
              <label className="block text-xs sm:text-sm font-bold text-white mb-2">
                2. Formato geométrico da sacada:
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'reta', label: 'Reta', desc: '1 trilho' },
                  { id: 'l', label: 'Em L', desc: '2 cantos' },
                  { id: 'curva', label: 'Curva', desc: 'Articulada' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setShape(item.id as any)}
                    className={`p-2.5 rounded-xl border text-center transition-all cursor-pointer ${
                      shape === item.id
                        ? 'bg-cyan-950/50 border-cyan-400 text-white shadow-sm'
                        : 'bg-slate-800/40 border-slate-700/60 text-slate-300 hover:border-slate-600'
                    }`}
                  >
                    <div className="text-xs font-bold">{item.label}</div>
                    <div className="text-[10px] text-slate-400">{item.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Number of Glass Panes (Slider) */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs sm:text-sm font-bold text-white">
                  3. Quantidade de vidros (lâminas):
                </label>
                <span className="font-mono text-sm sm:text-base font-bold text-cyan-400 tabular-nums">
                  {panelsCount} folhas
                </span>
              </div>
              <input
                type="range"
                min={4}
                max={24}
                step={1}
                value={panelsCount}
                onChange={(e) => setPanelsCount(Number(e.target.value))}
                className="w-full h-3 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-cyan-400"
              />
              <div className="flex justify-between text-[10px] sm:text-[11px] text-slate-500 font-mono mt-1">
                <span>4 (Pequena)</span>
                <span>12 (Média)</span>
                <span>24 (Grande)</span>
              </div>
            </div>

            {/* Step 4: System Age */}
            <div>
              <label className="block text-xs sm:text-sm font-bold text-white mb-2">
                4. Idade da instalação:
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'menos-3', label: '< 3 anos', note: 'Nova' },
                  { id: '3-7', label: '3 a 7 anos', note: 'Roldanas' },
                  { id: 'mais-7', label: '> 7 anos', note: 'Antiga' },
                ].map((age) => (
                  <button
                    key={age.id}
                    type="button"
                    onClick={() => setSystemAge(age.id)}
                    className={`p-2 rounded-lg border text-center transition-all cursor-pointer ${
                      systemAge === age.id
                        ? 'bg-cyan-950/50 border-cyan-400 text-white shadow-sm'
                        : 'bg-slate-800/40 border-slate-700/60 text-slate-300 hover:border-slate-600'
                    }`}
                  >
                    <div className="text-xs font-semibold">{age.label}</div>
                    <div className="text-[10px] text-slate-400">{age.note}</div>
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Result Card: Right Column (5 cols) - COMPACT & COMPACTED FOR MOBILE */}
          <div className="lg:col-span-5 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 p-4 sm:p-6 rounded-2xl border border-cyan-500/30 shadow-xl relative max-w-full overflow-hidden">
            
            {/* Header line */}
            <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4 gap-2">
              <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-cyan-400 truncate">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span className="truncate">Parecer Técnico & Estimativa</span>
              </div>
              <span className="text-[10px] text-slate-400 font-mono shrink-0">
                Anderson Sacadas
              </span>
            </div>

            {/* Diagnostic Content */}
            <div className="space-y-3.5">
              
              {/* Estimated Price Range Card (COMPACT MOBILE FIRST DESIGN) */}
              <div className="p-3.5 sm:p-4 rounded-xl bg-gradient-to-br from-cyan-950/60 via-slate-900 to-emerald-950/40 border border-cyan-400/40 text-left shadow-lg max-w-full overflow-hidden">
                
                <div className="flex flex-wrap items-center justify-between gap-1.5">
                  <div className="flex items-center gap-1 text-[11px] font-bold text-cyan-300 uppercase tracking-wide">
                    <Tag className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>Investimento Estimado:</span>
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 shrink-0">
                    Sem Taxa de Visita
                  </span>
                </div>

                {/* Price Display: Compact & Responsive */}
                <div className="mt-2 flex flex-wrap items-baseline gap-1.5 sm:gap-2">
                  <span className="font-display text-xl sm:text-2xl lg:text-3xl font-extrabold text-white font-mono tabular-nums leading-none">
                    {estimatedCost.min}
                  </span>
                  <span className="text-slate-400 text-xs sm:text-sm font-semibold">a</span>
                  <span className="font-display text-xl sm:text-2xl lg:text-3xl font-extrabold text-cyan-300 font-mono tabular-nums leading-none">
                    {estimatedCost.max}
                  </span>
                </div>

                <p className="text-[10px] sm:text-[11px] text-slate-300 mt-2 leading-snug">
                  Estimativa para {panelsCount} vidros ({shape === 'reta' ? 'Trilho Reto' : shape === 'l' ? 'Formato L' : 'Formato Curvo'}). Inclui mão de obra, regulagem e peças.
                </p>

                {/* Bottom Card Perks */}
                <div className="mt-2.5 pt-2 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-1 text-[10px] sm:text-[11px] text-slate-400">
                  <span className="text-emerald-400 font-semibold flex items-center gap-1">
                    <BadgeCheck className="w-3.5 h-3.5 shrink-0" />
                    <span>Pagamento pós-aprovação</span>
                  </span>
                  <span className="font-medium text-slate-300">Até 12x no cartão</span>
                </div>
              </div>

              {/* Problem Cause & Solution */}
              <div className="space-y-2 pt-1 text-xs">
                <div>
                  <span className="text-slate-400 font-medium">Causa Provável: </span>
                  <strong className="text-white font-bold">{currentProblem.likelyIssue}</strong>
                </div>

                <div>
                  <span className="text-slate-400 font-medium">Solução Recomendada: </span>
                  <span className="text-cyan-300 font-medium">{currentProblem.solution}</span>
                </div>
              </div>

              {/* Execution parameters */}
              <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/70 space-y-1.5 text-[11px] leading-snug">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-slate-400 flex items-center gap-1 shrink-0">
                    <Clock className="w-3 h-3 text-cyan-400" />
                    Tempo estimado:
                  </span>
                  <span className="font-mono font-bold text-white text-right">
                    {getEstimatedDuration()}
                  </span>
                </div>

                <div className="flex items-center justify-between gap-2">
                  <span className="text-slate-400 flex items-center gap-1 shrink-0">
                    <ShieldCheck className="w-3 h-3 text-cyan-400" />
                    Economia média:
                  </span>
                  <span className="font-mono font-bold text-emerald-400 text-right">
                    65% a 75% vs nova
                  </span>
                </div>
              </div>

              {/* Trust highlights */}
              <div className="text-[10px] sm:text-[11px] text-slate-400 space-y-0.5 pt-1">
                <p>✓ Isenção de taxa de visita técnica e orçamento grátis.</p>
                <p>✓ Garantia por escrito e nota fiscal.</p>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 space-y-2">
                <a
                  href={generateWhatsAppMessage()}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 px-3.5 text-xs font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-xl transition-all shadow-md shadow-cyan-500/20 active:scale-95 text-center"
                >
                  <Send className="w-3.5 h-3.5 shrink-0" />
                  <span>Enviar Diagnóstico e Custo para o WhatsApp</span>
                </a>

                <button
                  type="button"
                  onClick={() => onOpenQuoteModal(`Diagnóstico: ${currentProblem.title} (${panelsCount} folhas, Estimativa: ${estimatedCost.min} - ${estimatedCost.max})`)}
                  className="w-full py-2 px-3 text-xs font-semibold text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700/70 rounded-xl transition-all cursor-pointer text-center"
                >
                  Preencher Formulário de Visita
                </button>
              </div>

            </div>
          </div>

        </AnimatedSection>

      </div>
    </section>
  );
};
