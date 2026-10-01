import React, { useState } from 'react';
import { 
  BookOpen, 
  Search, 
  Sparkles, 
  Globe, 
  ExternalLink, 
  CheckCircle2, 
  XCircle, 
  Clock, 
  ChevronRight, 
  X, 
  Loader2, 
  Send,
  ShieldAlert,
  ArrowRight,
  Eye
} from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';
import { ReaderModeModal, ArticleData } from './ReaderModeModal';

const PRESET_ARTICLES: ArticleData[] = [
  {
    id: 'graxa-trilhos',
    title: 'Por que NUNCA usar graxa ou vaselina sólida nos trilhos da sacada',
    category: 'Manutenção & Cuidados',
    readTime: '3 min de leitura',
    summary: 'Entenda como lubrificantes automotivos pesados criam uma pasta abrasiva com a poeira e destroem os rolamentos em poucos meses.',
    sections: [
      {
        title: 'O Efeito "Pasta Abrasiva"',
        content: 'Quando você aplica graxa comum ou vaselina sólida no trilho inferior da sacada, esses produtos viscosos retêm toda a poeira, fuligem da rua e grãos de areia trazidos pelo vento. Em poucas semanas, essa mistura vira uma lixa química que desgasta o revestimento exterior de nylon das roldanas e emperra os rolamentos.'
      },
      {
        title: 'Como Fazer a Lubrificação Correta',
        content: 'A limpeza do trilho deve ser feita utilizando apenas um pano seco ou levemente umedecido com água e detergente neutro. Se necessário deslizar melhor as folhas, aplique apenas silicone spray neutro náutico específico ou álcool isopropílico para higienização.'
      }
    ],
    doList: [
      'Limpar os trilhos quinzenalmente com pano seco ou aspirador',
      'Manter os drenos de escoamento desobstruídos',
      'Usar exclusivamente lubrificantes secos em spray neutro'
    ],
    dontList: [
      'Nunca aplicar graxa automotiva ou de chassi nos perfis',
      'Não usar vaselina sólida de petróleo',
      'Evitar WD-40 comum nos rolamentos (ele dissolve a graxa interna blindada)'
    ],
    conclusion: 'Se as folhas da sua sacada já estão duras ou raspando, o problema geralmente é a roldana estourada. Agende uma inspeção com a Anderson Sacadas.'
  },
  {
    id: 'abnt-nbr-16259',
    title: 'Norma ABNT NBR 16259: Tudo o que seu condomínio exige para sacadas',
    category: 'Segurança & Legislação',
    readTime: '4 min de leitura',
    summary: 'A norma que regulamenta os sistemas de envidraçamento de sacadas no Brasil e a obrigatoriedade da emissão de ART/RDT do CREA.',
    sections: [
      {
        title: 'O que é a NBR 16259?',
        content: 'A NBR 16259 estabelece os requisitos mínimos de desempenho estrutural, resistência a pressões de vento (de até 180 km/h) e prevenção de quedas de vidros em edifícios residenciais e comerciais.'
      },
      {
        title: 'Responsabilidade Civil do Síndico e do Proprietário',
        content: 'A realização de reformas ou manutenções sem profissional habilitado com registro no CREA/CAU pode resultar em notificações do condomínio, embargo do serviço ou responsabilização em caso de acidentes causados por queda de painéis.'
      }
    ],
    doList: [
      'Exigir Laudo Técnico assinado por Engenheiro credenciado',
      'Exigir Emissão de ART (Anotação de Responsabilidade Técnica)',
      'Manter o certificado de garantia no arquivo do apartamento'
    ],
    dontList: [
      'Não contratar curiosos sem empresa formalizada ou registro técnico',
      'Não alterar a estrutura dos perfis sem autorização da junta de condomínio'
    ],
    conclusion: 'A Anderson Sacadas fornece laudos de vistoria técnica com ART conforme a ABNT NBR 16259 para apresentar à sua administração condominial.'
  },
  {
    id: 'vazamentos-piso',
    title: 'Como eliminar vazamentos de água de chuva e proteger o piso laminado',
    category: 'Vedação & Estanqueidade',
    readTime: '3 min de leitura',
    summary: 'Descubra como o silicone estrutural de cura neutra UV e a substituição das escovas náuticas impedem a entrada de água na tempestade.',
    sections: [
      {
        title: 'O Porquê das Infiltrações',
        content: 'Com o tempo, a radiação solar intensa resseca as juntas de silicone comum e desgasta os fios das escovas de polipropileno. Quando vem uma tempestade com vento forte, a água penetra pelas frestas e escorre para o piso da sala, podendo estufar tábuas de piso vinílico ou laminado.'
      },
      {
        title: 'Solução Definitiva com Silicone UV',
        content: 'A vedação eficaz exige a remoção completa do silicone velho ressecado e a aplicação de silicone de cura neutra estrutural com proteção contra raios UV, garantindo flexibilidade e estanqueidade hidrostática perfeita por anos.'
      }
    ],
    doList: [
      'Substituir as escovas náuticas a cada 2 anos',
      'Refazer a vedação perimetral com silicone neutro UV',
      'Verificar se os furinhos dos drenos na calha não estão entupidos'
    ],
    dontList: [
      'Não passar silicone comum de banheiro (ele amarela e racha com sol)',
      'Não tampar as saídas de drenagem de água da calha inferior'
    ],
    conclusion: 'Proteja seus móveis e piso. A equipe da Anderson Sacadas realiza a revedação completa com vedantes industriais de alta performance.'
  },
  {
    id: 'sinais-roldana-quebrada',
    title: '5 Sinais de que a roldana da sua sacada precisa de substituição urgente',
    category: 'Diagnóstico & Peças',
    readTime: '2 min de leitura',
    summary: 'Aprenda a identificar os sintomas visuais e sonoros de roldanas estouradas antes que o perfil de alumínio seja danificado.',
    sections: [
      {
        title: 'Sinais Clássicos de Desgaste',
        content: '1. Ruído metálico forte ao deslizar a folha.\n2. Vidro pesado exigindo força excessiva para abrir.\n3. Lâmina dando "truc-truc" ou saltando no trilho.\n4. Vidro inclinado ou fora de prumo na boca de saída.\n5. Lascas de nylon preto encontradas no trilho inferior.'
      },
      {
        title: 'Roldanas com Rolamento Blindado Inox 304',
        content: 'A substituição preventiva por roldanas com eixo e rolamento blindado 2RS em aço inox 304 devolve a leveza original e evita que a lâmina desengate do trilho e fique pendurada.'
      }
    ],
    doList: [
      'Chamar assistência ao primeiro sinal de rigidez no deslizamento',
      'Trocar o jogo completo de roldanas para manter o equilíbrio de peso'
    ],
    dontList: [
      'Não forçar o vidro com trancos para não trincar o perfil de alumínio',
      'Não aceitar roldanas com rolamentos de ferro doce que enferrujam rápido'
    ],
    conclusion: 'A Anderson Sacadas possui usinagem própria e troca suas roldanas no próprio local de forma rápida e limpa.'
  }
];

export const BlogAndExpertTips: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [activeArticle, setActiveArticle] = useState<ArticleData | null>(null);
  const [readerModeArticle, setReaderModeArticle] = useState<ArticleData | null>(null);
  const [searchResultArticle, setSearchResultArticle] = useState<ArticleData | null>(null);
  const [searchError, setSearchError] = useState<string | null>(null);

  const handleExecuteSearch = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!searchQuery.trim()) return;

    setIsSearching(true);
    setSearchError(null);

    try {
      const response = await fetch('/api/blog/search', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: searchQuery }),
      });

      if (!response.ok) {
        throw new Error('Falha na resposta do servidor.');
      }

      const data = await response.json();
      if (data.article) {
        const fullArticle: ArticleData = {
          ...data.article,
          isSearchResult: true,
          sources: data.sources || [],
        };
        setSearchResultArticle(fullArticle);
        setActiveArticle(fullArticle);
      } else {
        throw new Error('Nenhum conteúdo retornado.');
      }
    } catch (err: any) {
      console.error('Erro ao pesquisar com Search Grounding:', err);
      setSearchError('Não foi possível gerar a pesquisa ao vivo. Tente novamente ou leia nossos guias recomendados abaixo.');
    } finally {
      setIsSearching(false);
    }
  };

  const popularTopics = [
    'Como limpar trilho emperrado',
    'Diferença entre vidro laminado e temperado',
    'Quanto tempo dura o silicone da sacada?',
    'Sacada estalando no vento forte'
  ];

  return (
    <section id="blog-dicas" className="py-16 sm:py-24 border-b border-slate-800/80 bg-[#0b0f19]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <AnimatedSection className="max-w-3xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-2 flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-cyan-400" />
            <span>Blog & Dicas de Especialista</span>
          </div>
          <h2 className="font-display text-2xl sm:text-4xl font-bold text-white tracking-tight">
            Base de Conhecimento & Tópicos de Envidraçamento
          </h2>
          <p className="mt-3 text-base text-slate-300">
            Aprenda como conservar o seu sistema, evitar armadilhas de manutenção e leia no **Modo Leitura sem distrações** no seu celular ou computador.
          </p>
        </AnimatedSection>

        {/* SEARCH GROUNDING BAR */}
        <AnimatedSection delay={0.1} className="mb-14">
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-slate-900 via-[#0d1526] to-slate-900 border border-cyan-500/40 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-72 h-72 bg-cyan-500/10 blur-3xl pointer-events-none rounded-full" />

            <div className="relative z-10 max-w-3xl">
              <div className="flex items-center gap-2 mb-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-bold">
                  <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                  <span>IA com Busca no Google Search Grounding em Tempo Real</span>
                </span>
              </div>

              <h3 className="font-display text-xl sm:text-2xl font-extrabold text-white">
                Tem alguma dúvida específica sobre a sua sacada?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                Digite sua dúvida abaixo. Nossa inteligência consulta normas técnicas e bases atualizadas na web para gerar um artigo educativo exclusivo para você.
              </p>

              {/* Form Input */}
              <form onSubmit={handleExecuteSearch} className="mt-5 flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Ex: Como limpar vidros altos com segurança? / O que é ART?"
                    className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-slate-950/80 border border-slate-700 text-slate-100 placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-cyan-400 transition-all"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSearching || !searchQuery.trim()}
                  className={`px-6 py-3.5 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shrink-0 ${
                    isSearching || !searchQuery.trim()
                      ? 'bg-slate-800 text-slate-500 cursor-not-allowed border border-slate-700/50'
                      : 'bg-cyan-400 hover:bg-cyan-300 text-slate-950 cursor-pointer shadow-lg shadow-cyan-500/20 active:scale-95'
                  }`}
                >
                  {isSearching ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Buscando no Google...</span>
                    </>
                  ) : (
                    <>
                      <Search className="w-4 h-4" />
                      <span>Gerar Artigo com IA</span>
                    </>
                  )}
                </button>
              </form>

              {/* Popular quick chips */}
              <div className="mt-4 flex flex-wrap items-center gap-2 text-xs">
                <span className="text-slate-400 text-[11px] font-medium">Tópicos populares:</span>
                {popularTopics.map((topic, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => {
                      setSearchQuery(topic);
                    }}
                    className="px-2.5 py-1 rounded-lg bg-slate-800/80 hover:bg-slate-700 border border-slate-700/80 text-slate-300 hover:text-cyan-300 text-[11px] cursor-pointer transition-colors"
                  >
                    {topic}
                  </button>
                ))}
              </div>

              {searchError && (
                <div className="mt-3 text-xs text-rose-400 flex items-center gap-1.5">
                  <ShieldAlert className="w-4 h-4 shrink-0" />
                  <span>{searchError}</span>
                </div>
              )}
            </div>
          </div>
        </AnimatedSection>

        {/* RECENT SEARCH RESULT BANNER (IF AVAILABLE) */}
        {searchResultArticle && (
          <AnimatedSection className="mb-12">
            <div className="p-6 rounded-2xl bg-cyan-950/30 border-2 border-cyan-400/50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 text-xs text-cyan-300 font-bold uppercase tracking-wider mb-1">
                  <Globe className="w-4 h-4 text-cyan-400" />
                  <span>Resultado Gerado via Search Grounding</span>
                </div>
                <h3 className="font-display text-lg font-bold text-white">
                  {searchResultArticle.title}
                </h3>
                <p className="text-xs text-slate-300 mt-1 line-clamp-2">
                  {searchResultArticle.summary}
                </p>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <button
                  type="button"
                  onClick={() => setReaderModeArticle(searchResultArticle)}
                  className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-cyan-300 border border-cyan-500/40 font-bold text-xs cursor-pointer transition-all flex items-center gap-1.5"
                >
                  <Eye className="w-4 h-4 text-cyan-400" />
                  <span>Modo Leitura</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveArticle(searchResultArticle)}
                  className="px-5 py-2.5 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-xs cursor-pointer shadow-md shadow-cyan-500/20 transition-all flex items-center gap-1.5"
                >
                  <span>Ler Artigo</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </AnimatedSection>
        )}

        {/* PRESET ARTICLES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRESET_ARTICLES.map((article, index) => (
            <AnimatedSection
              key={article.id || index}
              delay={index * 0.05}
              className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/50 transition-all flex flex-col justify-between group cursor-pointer"
              onClick={() => setActiveArticle(article)}
            >
              <div>
                <div className="flex items-center justify-between text-[11px] mb-3">
                  <span className="font-bold px-2.5 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                    {article.category}
                  </span>
                  <span className="text-slate-400 flex items-center gap-1 font-mono">
                    <Clock className="w-3 h-3 text-slate-500" />
                    {article.readTime}
                  </span>
                </div>

                <h3 className="font-display text-base font-bold text-white group-hover:text-cyan-300 transition-colors line-clamp-2">
                  {article.title}
                </h3>

                <p className="mt-2.5 text-xs text-slate-300 leading-relaxed line-clamp-3">
                  {article.summary}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-800/80 flex items-center justify-between gap-2 text-xs">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setReaderModeArticle(article);
                  }}
                  className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-cyan-950 text-cyan-300 border border-slate-700 hover:border-cyan-500/40 text-[11px] font-bold flex items-center gap-1 transition-colors"
                  title="Abrir no Modo Leitura Sem Distrações"
                >
                  <Eye className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Modo Leitura</span>
                </button>

                <div className="font-bold text-cyan-400 group-hover:text-cyan-300 flex items-center gap-0.5">
                  <span>Ler</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

      </div>

      {/* STANDARD ARTICLE MODAL */}
      {activeArticle && !readerModeArticle && (
        <div className="fixed inset-0 z-[120] bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          <div className="bg-slate-900 border border-cyan-500/40 rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative p-6 sm:p-8 space-y-6">
            
            {/* Action Bar Header */}
            <div className="flex items-center justify-between gap-2 border-b border-slate-800 pb-4">
              <button
                type="button"
                onClick={() => setReaderModeArticle(activeArticle)}
                className="px-3 py-1.5 rounded-xl bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border border-cyan-400/40 text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer"
              >
                <Eye className="w-4 h-4 text-cyan-400" />
                <span>Ativar Modo Leitura (Sem Distrações)</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveArticle(null)}
                className="w-9 h-9 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white flex items-center justify-center cursor-pointer transition-colors"
                aria-label="Fechar artigo"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Article Modal Header */}
            <div>
              <div className="flex items-center gap-2 text-xs mb-2">
                <span className="font-bold px-2.5 py-1 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 uppercase tracking-wide">
                  {activeArticle.category}
                </span>
                <span className="text-slate-400 font-mono text-[11px]">{activeArticle.readTime}</span>
                {activeArticle.isSearchResult && (
                  <span className="inline-flex items-center gap-1 text-[11px] text-teal-300 bg-teal-500/20 px-2 py-0.5 rounded border border-teal-500/30">
                    <Globe className="w-3 h-3" /> Search Grounding
                  </span>
                )}
              </div>

              <h2 className="font-display text-xl sm:text-2xl font-extrabold text-white leading-snug">
                {activeArticle.title}
              </h2>
            </div>

            {/* Summary Box */}
            <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700/80 text-xs sm:text-sm text-slate-200 leading-relaxed font-medium">
              {activeArticle.summary}
            </div>

            {/* Sections */}
            <div className="space-y-5 text-xs sm:text-sm text-slate-300 leading-relaxed">
              {activeArticle.sections.map((sec, i) => (
                <div key={i} className="space-y-2">
                  <h3 className="font-display text-base font-bold text-cyan-300 border-l-2 border-cyan-400 pl-3">
                    {sec.title}
                  </h3>
                  <p className="whitespace-pre-line text-slate-300">
                    {sec.content}
                  </p>
                </div>
              ))}
            </div>

            {/* Do's and Don'ts Lists */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              {activeArticle.doList && activeArticle.doList.length > 0 && (
                <div className="p-4 rounded-xl bg-emerald-950/30 border border-emerald-500/30 space-y-2">
                  <div className="font-bold text-xs text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>O que FAZER:</span>
                  </div>
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    {activeArticle.doList.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-emerald-400 font-bold">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {activeArticle.dontList && activeArticle.dontList.length > 0 && (
                <div className="p-4 rounded-xl bg-rose-950/30 border border-rose-500/30 space-y-2">
                  <div className="font-bold text-xs text-rose-400 uppercase tracking-wider flex items-center gap-1.5">
                    <XCircle className="w-4 h-4 text-rose-400" />
                    <span>O que NUNCA fazer:</span>
                  </div>
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    {activeArticle.dontList.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-rose-400 font-bold">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Search Grounding Sources (if available) */}
            {activeArticle.sources && activeArticle.sources.length > 0 && (
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                <div className="text-[11px] font-bold text-cyan-400 flex items-center gap-1.5 uppercase tracking-wide">
                  <Globe className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Fontes Consultadas via Google Search Grounding:</span>
                </div>
                <div className="flex flex-wrap gap-2 text-xs">
                  {activeArticle.sources.map((src, i) => (
                    <a
                      key={i}
                      href={src.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-cyan-300 border border-slate-700 text-[11px] transition-colors"
                    >
                      <span className="truncate max-w-[200px]">{src.title}</span>
                      <ExternalLink className="w-3 h-3 text-cyan-400 shrink-0" />
                    </a>
                  ))}
                </div>
              </div>
            )}

            {/* Conclusion and CTA */}
            {activeArticle.conclusion && (
              <div className="p-4 rounded-2xl bg-cyan-950/40 border border-cyan-500/40 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-xs text-slate-200 italic font-medium">
                  "{activeArticle.conclusion}"
                </p>

                <a
                  href={`https://wa.me/5511934493446?text=Ol%C3%A1%20Anderson!%20Li%20o%20artigo%20'${encodeURIComponent(activeArticle.title)}'%20no%20seu%20site%20e%20gostaria%20de%20tirar%20uma%20d%C3%BAvida%20sobre%20minha%20sacada.`}
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-xs shrink-0 cursor-pointer shadow-md shadow-cyan-500/20 transition-all flex items-center gap-1.5 whitespace-nowrap active:scale-95"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Falar com o Anderson no WhatsApp</span>
                </a>
              </div>
            )}

          </div>
        </div>
      )}

      {/* DEDICATED READER MODE MODAL */}
      <ReaderModeModal
        article={readerModeArticle}
        onClose={() => setReaderModeArticle(null)}
      />

    </section>
  );
};
