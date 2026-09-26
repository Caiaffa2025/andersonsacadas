import React, { useState } from 'react';
import { 
  HelpCircle, 
  CheckCircle2, 
  XCircle, 
  AlertTriangle, 
  Lightbulb, 
  ShieldCheck, 
  BookOpen, 
  Award, 
  RotateCcw, 
  Send,
  Droplets,
  Wrench,
  FileText,
  Sparkles,
  ChevronRight
} from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';

interface Question {
  id: number;
  question: string;
  options: { label: string; text: string; isCorrect: boolean }[];
  explanation: string;
}

const QUIZ_QUESTIONS: Question[] = [
  {
    id: 1,
    question: 'Qual produto NUNCA deve ser usado para lubrificar os trilhos da sacada?',
    options: [
      { label: 'A', text: 'Silicone spray neutro ou pano seco', isCorrect: false },
      { label: 'B', text: 'Graxa automotiva ou vaselina sólida comum', isCorrect: true },
      { label: 'C', text: 'Vaselina líquida específica para alumínio', isCorrect: false },
    ],
    explanation: 'A graxa e a vaselina sólida acumulam poeira, fuligem e areia trazidas pelo vento, formando uma "pasta abrasiva" que destrói as roldanas e trava os rolamentos rapidamente.',
  },
  {
    id: 2,
    question: 'Com qual frequência a norma técnica ABNT NBR 16259 recomenda a revisão preventiva?',
    options: [
      { label: 'A', text: 'Apenas quando o vidro travar ou emperrar completamente', isCorrect: false },
      { label: 'B', text: 'A cada 12 meses (anualmente)', isCorrect: true },
      { label: 'C', text: 'A cada 10 anos', isCorrect: false },
    ],
    explanation: 'A revisão preventiva anual verifica parafusos frouxos, reaperto estrutural e desgaste do silicone, prevenindo desabamentos de lâminas e infiltrações graves.',
  },
  {
    id: 3,
    question: 'O que é a sigla ART exigida pela administração dos condomínios?',
    options: [
      { label: 'A', text: 'Autorização do Rolo do Trilho', isCorrect: false },
      { label: 'B', text: 'Anotação de Responsabilidade Técnica emitida por Engenheiro credenciado', isCorrect: true },
      { label: 'C', text: 'Atestado de Reforma do Apartamento', isCorrect: false },
    ],
    explanation: 'A ART é o documento oficial do CREA assinado por um engenheiro civil/mecânico responsável que comprova que a sacada atende aos parâmetros de segurança contra ventanias.',
  },
  {
    id: 4,
    question: 'Qual é o sinal clássico de que a roldana da sua sacada estourou e precisa de troca?',
    options: [
      { label: 'A', text: 'O vidro fica muito pesado, raspando no trilho e fazendo ruído metálico', isCorrect: true },
      { label: 'B', text: 'O vidro fica mais transparente', isCorrect: false },
      { label: 'C', text: 'O vidro abre sozinho sem tocar', isCorrect: false },
    ],
    explanation: 'Quando o revestimento exterior de nylon de engenharia se rompe, o rolamento interno de aço fica exposto e raspa direto no alumínio, podendo emperrar a lâmina.',
  },
  {
    id: 5,
    question: 'Qual a principal vantagem da manutenção em relação a trocar toda a sacada?',
    options: [
      { label: 'A', text: 'Economia de até 70% mantendo os vidros e perfis originais intactos', isCorrect: true },
      { label: 'B', text: 'Não há nenhuma vantagem', isCorrect: false },
      { label: 'C', text: 'Gera mais entulho e quebra-quebra no apartamento', isCorrect: false },
    ],
    explanation: 'Em mais de 95% dos casos, os vidros e perfis de alumínio estão perfeitos. Trocar apenas as roldanas, escovas e vedações renova a sacada sem necessidade de trocar tudo.',
  },
];

export const BalconyInfoAndQuiz: React.FC = () => {
  // Quiz states
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: number }>({});
  const [showResults, setShowResults] = useState(false);

  const handleSelectOption = (questionIndex: number, optionIndex: number) => {
    setSelectedAnswers({ ...selectedAnswers, [questionIndex]: optionIndex });
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < QUIZ_QUESTIONS.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResults(true);
    }
  };

  const handleResetQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswers({});
    setShowResults(false);
  };

  const calculateScore = () => {
    let score = 0;
    QUIZ_QUESTIONS.forEach((q, idx) => {
      const selectedOptIdx = selectedAnswers[idx];
      if (selectedOptIdx !== undefined && q.options[selectedOptIdx]?.isCorrect) {
        score++;
      }
    });
    return score;
  };

  const currentQuestion = QUIZ_QUESTIONS[currentQuestionIndex];
  const hasAnsweredCurrent = selectedAnswers[currentQuestionIndex] !== undefined;

  return (
    <section id="informacoes-quiz" className="py-16 sm:py-24 border-b border-slate-800/80 bg-[#090d15]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION 1: IMPORTANT BALCONY FACTS & GUIDELINES */}
        <AnimatedSection className="max-w-3xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-2 flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-cyan-400" />
            <span>Guia Técnico & Informações Cruciais</span>
          </div>
          <h2 className="font-display text-2xl sm:text-4xl font-bold text-white tracking-tight">
            O que você precisa saber sobre a segurança da sua sacada
          </h2>
          <p className="mt-3 text-base text-slate-300">
            Envidraçamentos de sacada são estruturas de engenharia submetidas a rajadas de vento e cargas de peso elevadas. Conheça as orientações técnicas fundamentais.
          </p>
        </AnimatedSection>

        {/* 4 Key Knowledge Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          
          <AnimatedSection delay={0.05} className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-4">
                <FileText className="w-5 h-5" />
              </div>
              <h3 className="font-display text-base font-bold text-white">
                Norma ABNT NBR 16259
              </h3>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                Estabelece os requisitos de segurança e desempenho para sistemas de envidraçamento. Exige que a estrutura suporte pressões de vento de até 180 km/h sem risco de descolamento.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-800/80 text-[11px] text-cyan-400 font-semibold">
              Conformidade Obrigatória
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1} className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-400 mb-4">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <h3 className="font-display text-base font-bold text-white">
                Perigo da Graxa nos Trilhos
              </h3>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                Usar graxa ou óleos pesados atrai poeira da rua e cria uma massa dura que trava os rolamentos. A limpeza deve ser feita com pano úmido e lubrificação neutra específica.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-800/80 text-[11px] text-rose-400 font-semibold">
              Erro Mais Comum
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.15} className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-4">
                <Droplets className="w-5 h-5" />
              </div>
              <h3 className="font-display text-base font-bold text-white">
                Infiltração e Silicone UV
              </h3>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                O silicone comum resseca com os raios solares e racha em 12 meses. O silicone de cura neutra estrutural mantém a elasticidade e impede a passagem de água em tempestades.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-800/80 text-[11px] text-emerald-400 font-semibold">
              Proteção do Piso
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2} className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-4">
                <Wrench className="w-5 h-5" />
              </div>
              <h3 className="font-display text-base font-bold text-white">
                Roldanas Inox vs Comuns
              </h3>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                Roldanas de ferro doce enferrujam com a umidade da chuva. A Anderson Sacadas utiliza exclusivamente conjuntos com rolamentos blindados 2RS e eixos em Aço Inox AISI 304.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-800/80 text-[11px] text-cyan-400 font-semibold">
              Durabilidade 5x Maior
            </div>
          </AnimatedSection>

        </div>

        {/* SECTION 2: INTERACTIVE QUIZ */}
        <div id="quiz-sacadas" className="pt-8">
          <AnimatedSection className="p-6 sm:p-10 rounded-3xl bg-gradient-to-b from-slate-900 via-[#0d131f] to-slate-950 border border-cyan-500/30 shadow-2xl relative overflow-hidden">
            
            {/* Background ambient accent */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 blur-3xl pointer-events-none rounded-full" />

            <div className="relative z-10 max-w-3xl mx-auto">
              
              {/* Quiz Header */}
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold mb-3">
                  <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Quiz Interativo de Conhecimento</span>
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-lime-400 tracking-tight drop-shadow-[0_0_12px_rgba(163,230,53,0.6)]">
                  Descubra o estado da sua sacada em 5 perguntas!
                </h3>
                <p className="text-xs sm:text-sm text-lime-300 font-bold mt-2 drop-shadow-[0_0_8px_rgba(163,230,53,0.4)]">
                  Teste seus conhecimentos técnicos e saiba se o seu envidraçamento precisa de manutenção preventiva imediata.
                </p>
              </div>

              {!showResults ? (
                /* Active Quiz Question Card */
                <div className="space-y-6">
                  
                  {/* Progress Indicator */}
                  <div className="flex items-center justify-between text-xs text-lime-400 font-bold font-mono mb-2 drop-shadow-[0_0_8px_rgba(163,230,53,0.5)]">
                    <span className="text-lime-400">Pergunta {currentQuestionIndex + 1} de {QUIZ_QUESTIONS.length}</span>
                    <span className="text-lime-400">{Math.round(((currentQuestionIndex + 1) / QUIZ_QUESTIONS.length) * 100)}% concluído</span>
                  </div>

                  <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden border border-lime-500/30">
                    <div 
                      className="bg-gradient-to-r from-lime-400 to-emerald-400 h-full transition-all duration-300 shadow-[0_0_10px_rgba(163,230,53,0.8)]"
                      style={{ width: `${((currentQuestionIndex + 1) / QUIZ_QUESTIONS.length) * 100}%` }}
                    />
                  </div>

                  {/* Question Box */}
                  <div className="p-5 sm:p-7 rounded-2xl bg-slate-900/90 border-2 border-cyan-500/40 shadow-xl shadow-cyan-500/10 space-y-4">
                    
                    {/* High-visibility Question Tag */}
                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-cyan-400 text-slate-950 font-extrabold text-xs tracking-wide uppercase shadow-sm">
                        <HelpCircle className="w-3.5 h-3.5" />
                        <span>Pergunta #{currentQuestionIndex + 1}</span>
                      </span>
                    </div>

                    {/* Question Heading in High-Contrast Cyan/White */}
                    <h4 className="font-display text-lg sm:text-xl font-extrabold text-cyan-300 leading-snug tracking-tight">
                      {currentQuestion.question}
                    </h4>

                    {/* Options list */}
                    <div className="space-y-3 pt-3">
                      {currentQuestion.options.map((opt, optIdx) => {
                        const isSelected = selectedAnswers[currentQuestionIndex] === optIdx;

                        return (
                          <button
                            key={optIdx}
                            type="button"
                            onClick={() => handleSelectOption(currentQuestionIndex, optIdx)}
                            className={`w-full p-4 rounded-xl border text-left transition-all cursor-pointer flex items-start gap-3.5 ${
                              isSelected
                                ? opt.isCorrect
                                  ? 'bg-emerald-950/60 border-2 border-emerald-400 text-white shadow-md shadow-emerald-500/20'
                                  : 'bg-rose-950/60 border-2 border-rose-400 text-white shadow-md shadow-rose-500/20'
                                : 'bg-slate-800/80 border border-slate-700 text-slate-100 hover:border-cyan-400 hover:bg-slate-800 hover:text-cyan-200'
                            }`}
                          >
                            <span className={`w-7 h-7 rounded-lg flex items-center justify-center font-mono text-xs font-bold shrink-0 ${
                              isSelected
                                ? opt.isCorrect ? 'bg-emerald-400 text-slate-950' : 'bg-rose-500 text-white'
                                : 'bg-slate-700/80 border border-slate-600 text-cyan-300'
                            }`}>
                              {opt.label}
                            </span>
                            <span className="text-xs sm:text-sm font-semibold mt-0.5 leading-relaxed">
                              {opt.text}
                            </span>
                          </button>
                        );
                      })}
                    </div>

                    {/* Explanation Box when answered */}
                    {hasAnsweredCurrent && (
                      <div className="mt-5 p-4 rounded-xl bg-cyan-950/50 border border-cyan-400/50 text-xs text-slate-100 space-y-1.5 shadow-inner">
                        <div className="font-extrabold text-cyan-300 flex items-center gap-1.5 text-xs uppercase tracking-wide">
                          <Lightbulb className="w-4 h-4 text-cyan-400" />
                          <span>Explicação Técnica do Especialista:</span>
                        </div>
                        <p className="leading-relaxed text-slate-200 text-xs sm:text-sm">
                          {currentQuestion.explanation}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Next / Finish Button */}
                  <div className="flex justify-end pt-2">
                    <button
                      type="button"
                      disabled={!hasAnsweredCurrent}
                      onClick={handleNextQuestion}
                      className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-xs sm:text-sm transition-all ${
                        hasAnsweredCurrent
                          ? 'bg-cyan-400 hover:bg-cyan-300 text-slate-950 cursor-pointer shadow-lg shadow-cyan-500/20 active:scale-95'
                          : 'bg-slate-800 text-slate-500 cursor-not-allowed border border-slate-700/50'
                      }`}
                    >
                      <span>
                        {currentQuestionIndex < QUIZ_QUESTIONS.length - 1 ? 'Próxima Pergunta' : 'Ver Meu Resultado'}
                      </span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>

                </div>
              ) : (
                /* Quiz Results Screen */
                <div className="text-center space-y-6 py-4">
                  <div className="w-16 h-16 rounded-2xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-300 mx-auto">
                    <Award className="w-8 h-8" />
                  </div>

                  <div>
                    <h4 className="font-display text-2xl font-extrabold text-white">
                      Resultado do Quiz: {calculateScore()} de {QUIZ_QUESTIONS.length} Acertos!
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-lg mx-auto">
                      {calculateScore() >= 4
                        ? 'Parabéns! Você demonstra excelente conhecimento sobre a segurança do envidraçamento de sacadas!'
                        : calculateScore() >= 2
                        ? 'Muito bem! Você entende os conceitos básicos, mas vale a pena agendar uma revisão preventiva com o Anderson.'
                        : 'Atenção! Sua sacada pode estar precisando de uma inspeção urgente para evitar riscos de emperramento ou vazamentos.'}
                    </p>
                  </div>

                  {/* Summary of answers */}
                  <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 text-left space-y-3 text-xs max-h-60 overflow-y-auto">
                    {QUIZ_QUESTIONS.map((q, idx) => {
                      const userOptIdx = selectedAnswers[idx];
                      const userOpt = q.options[userOptIdx];
                      const isCorrect = userOpt?.isCorrect;

                      return (
                        <div key={idx} className="p-3 rounded-xl bg-slate-800/50 border border-slate-700/50 flex items-start gap-2.5">
                          {isCorrect ? (
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          ) : (
                            <XCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                          )}
                          <div>
                            <div className="font-extrabold text-cyan-300 text-xs sm:text-sm">
                              {idx + 1}. {q.question}
                            </div>
                            <div className={`mt-0.5 font-medium ${isCorrect ? 'text-emerald-300' : 'text-rose-300'}`}>
                              Sua resposta: {userOpt ? userOpt.text : 'Não respondida'}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Actions */}
                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      type="button"
                      onClick={handleResetQuiz}
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-semibold cursor-pointer transition-all"
                    >
                      <RotateCcw className="w-4 h-4 text-cyan-400" />
                      <span>Refazer Quiz</span>
                    </button>

                    <a
                      href={`https://wa.me/5511999999999?text=Ol%C3%A1%20Anderson!%20Fiz%20o%20Quiz%20no%20site%20e%20acertei%20${calculateScore()}%20de%205%20perguntas.%20Gostaria%20de%20agendar%20uma%20visita%20t%C3%A9cnica%20gratuita%20para%20minha%20sacada.`}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 text-xs sm:text-sm font-bold shadow-lg shadow-cyan-500/20 cursor-pointer transition-all active:scale-95"
                    >
                      <Send className="w-4 h-4" />
                      <span>Enviar Resultado para WhatsApp do Anderson</span>
                    </a>
                  </div>

                </div>
              )}

            </div>
          </AnimatedSection>
        </div>

      </div>
    </section>
  );
};
