import React, { useState, useEffect } from 'react';
import { 
  X, 
  BookOpen, 
  Type, 
  Sun, 
  Moon, 
  Palette, 
  CheckCircle2, 
  XCircle, 
  Globe, 
  ExternalLink, 
  Send, 
  Printer, 
  Copy, 
  Check, 
  Sliders
} from 'lucide-react';

export interface ArticleData {
  id?: string;
  title: string;
  category: string;
  readTime: string;
  summary: string;
  sections: { title: string; content: string }[];
  doList?: string[];
  dontList?: string[];
  conclusion?: string;
  sources?: { title: string; url: string }[];
  isSearchResult?: boolean;
}

interface ReaderModeModalProps {
  article: ArticleData | null;
  onClose: () => void;
}

type ReaderTheme = 'dark' | 'sepia' | 'light';
type FontSize = 'sm' | 'base' | 'lg' | 'xl';

export const ReaderModeModal: React.FC<ReaderModeModalProps> = ({ article, onClose }) => {
  const [readerTheme, setReaderTheme] = useState<ReaderTheme>('dark');
  const [fontSize, setFontSize] = useState<FontSize>('base');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (article) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [article]);

  if (!article) return null;

  const handleCopySummary = () => {
    const textToCopy = `${article.title}\n\nResumo:\n${article.summary}\n\nLeia mais no site Anderson Sacadas.`;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  // Font size class mapper
  const getFontSizeClass = () => {
    switch (fontSize) {
      case 'sm':
        return 'text-xs sm:text-sm leading-relaxed';
      case 'base':
        return 'text-sm sm:text-base leading-relaxed';
      case 'lg':
        return 'text-base sm:text-lg leading-relaxed';
      case 'xl':
        return 'text-lg sm:text-xl leading-relaxed';
      default:
        return 'text-sm sm:text-base leading-relaxed';
    }
  };

  // Theme style mapper
  const getThemeClasses = () => {
    switch (readerTheme) {
      case 'sepia':
        return {
          bg: 'bg-[#fbf0d9] text-[#2c221e]',
          cardBg: 'bg-[#f3e3be] border-[#e2cca0] text-[#2c221e]',
          accentText: 'text-[#8c4a11]',
          mutedText: 'text-[#6b5545]',
          border: 'border-[#e2cca0]',
          buttonBg: 'bg-[#8c4a11] text-white hover:bg-[#733c0d]',
          headerBg: 'bg-[#f3e3be]/90 border-[#e2cca0]',
        };
      case 'light':
        return {
          bg: 'bg-slate-50 text-slate-900',
          cardBg: 'bg-white border-slate-200 text-slate-900 shadow-sm',
          accentText: 'text-cyan-700',
          mutedText: 'text-slate-600',
          border: 'border-slate-200',
          buttonBg: 'bg-cyan-600 text-white hover:bg-cyan-700',
          headerBg: 'bg-white/90 border-slate-200',
        };
      case 'dark':
      default:
        return {
          bg: 'bg-[#090d16] text-slate-100',
          cardBg: 'bg-slate-900/90 border-slate-800 text-slate-100',
          accentText: 'text-cyan-400',
          mutedText: 'text-slate-400',
          border: 'border-slate-800',
          buttonBg: 'bg-cyan-400 text-slate-950 hover:bg-cyan-300',
          headerBg: 'bg-[#090d16]/90 border-slate-800',
        };
    }
  };

  const themeStyle = getThemeClasses();

  return (
    <div className="fixed inset-0 z-[130] bg-slate-950/85 backdrop-blur-md flex flex-col items-center justify-between p-2 sm:p-4 overflow-hidden animate-in fade-in duration-200">
      
      {/* READER MODE TOOLBAR */}
      <div className={`w-full max-w-3xl rounded-2xl p-3 mb-3 backdrop-blur-md border shadow-lg flex items-center justify-between gap-2 shrink-0 ${themeStyle.headerBg}`}>
        
        {/* Title Indicator */}
        <div className="flex items-center gap-2 truncate max-w-[45%] sm:max-w-none">
          <div className="p-1.5 rounded-lg bg-cyan-500/20 text-cyan-400 shrink-0">
            <BookOpen className="w-4 h-4" />
          </div>
          <div className="truncate">
            <span className="text-[10px] uppercase font-bold tracking-wider text-cyan-400 block">
              Modo Leitura Sem Distrações
            </span>
            <span className="text-xs font-bold truncate block">
              {article.title}
            </span>
          </div>
        </div>

        {/* Reader Controls */}
        <div className="flex items-center gap-1.5 shrink-0">
          
          {/* Font Size Selector */}
          <div className="flex items-center gap-0.5 p-1 rounded-xl bg-slate-800/40 border border-slate-700/50">
            <button
              type="button"
              onClick={() => setFontSize('sm')}
              className={`px-1.5 py-0.5 text-[10px] font-bold rounded ${fontSize === 'sm' ? 'bg-cyan-500 text-slate-950' : 'text-slate-400 hover:text-white'}`}
              title="Tamanho pequeno"
            >
              A-
            </button>
            <button
              type="button"
              onClick={() => setFontSize('base')}
              className={`px-1.5 py-0.5 text-xs font-bold rounded ${fontSize === 'base' ? 'bg-cyan-500 text-slate-950' : 'text-slate-400 hover:text-white'}`}
              title="Tamanho médio"
            >
              A
            </button>
            <button
              type="button"
              onClick={() => setFontSize('lg')}
              className={`px-1.5 py-0.5 text-sm font-bold rounded ${fontSize === 'lg' ? 'bg-cyan-500 text-slate-950' : 'text-slate-400 hover:text-white'}`}
              title="Tamanho grande"
            >
              A+
            </button>
          </div>

          {/* Theme Palette Toggle */}
          <div className="flex items-center gap-1 p-1 rounded-xl bg-slate-800/40 border border-slate-700/50">
            <button
              type="button"
              onClick={() => setReaderTheme('dark')}
              className={`w-5 h-5 rounded-full bg-[#090d16] border border-cyan-400 flex items-center justify-center ${readerTheme === 'dark' ? 'ring-2 ring-cyan-400' : ''}`}
              title="Tema Escuro Noite"
            >
              <Moon className="w-2.5 h-2.5 text-cyan-400" />
            </button>
            <button
              type="button"
              onClick={() => setReaderTheme('sepia')}
              className={`w-5 h-5 rounded-full bg-[#fbf0d9] border border-[#8c4a11] flex items-center justify-center ${readerTheme === 'sepia' ? 'ring-2 ring-[#8c4a11]' : ''}`}
              title="Tema Sépia Confortável"
            >
              <Palette className="w-2.5 h-2.5 text-[#8c4a11]" />
            </button>
            <button
              type="button"
              onClick={() => setReaderTheme('light')}
              className={`w-5 h-5 rounded-full bg-white border border-slate-400 flex items-center justify-center ${readerTheme === 'light' ? 'ring-2 ring-cyan-600' : ''}`}
              title="Tema Claro Impresso"
            >
              <Sun className="w-2.5 h-2.5 text-slate-800" />
            </button>
          </div>

          {/* Copy & Print Utility */}
          <button
            type="button"
            onClick={handleCopySummary}
            className="p-1.5 rounded-lg bg-slate-800/40 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
            title="Copiar resumo do artigo"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
          </button>

          <button
            type="button"
            onClick={handlePrint}
            className="hidden sm:inline-flex p-1.5 rounded-lg bg-slate-800/40 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
            title="Imprimir artigo"
          >
            <Printer className="w-4 h-4" />
          </button>

          {/* Close Reader */}
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-xl bg-rose-500/20 text-rose-300 hover:bg-rose-500/30 transition-colors cursor-pointer ml-1"
            title="Sair do Modo Leitura"
          >
            <X className="w-5 h-5" />
          </button>

        </div>
      </div>

      {/* READING CANVAS (Ultra clean typography focus) */}
      <div className={`w-full max-w-2xl flex-grow overflow-y-auto rounded-2xl p-6 sm:p-10 shadow-2xl transition-colors duration-300 border ${themeStyle.bg} ${themeStyle.border}`}>
        
        {/* Article Meta Header */}
        <div className="mb-6 pb-6 border-b border-current/15 space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold">
            <span className={`px-2.5 py-0.5 rounded uppercase tracking-wider text-[10px] font-extrabold border ${themeStyle.cardBg}`}>
              {article.category}
            </span>
            <span className={`font-mono text-[11px] ${themeStyle.mutedText}`}>
              {article.readTime}
            </span>
            {article.isSearchResult && (
              <span className="inline-flex items-center gap-1 text-[10px] font-bold text-teal-600 bg-teal-100 px-2 py-0.5 rounded">
                <Globe className="w-3 h-3" /> Search Grounding
              </span>
            )}
          </div>

          <h1 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight leading-tight">
            {article.title}
          </h1>

          <div className={`p-4 rounded-xl border italic font-medium ${themeStyle.cardBg} ${getFontSizeClass()}`}>
            "{article.summary}"
          </div>
        </div>

        {/* Content Body Sections */}
        <div className={`space-y-6 ${getFontSizeClass()}`}>
          {article.sections.map((section, idx) => (
            <div key={idx} className="space-y-2">
              <h2 className={`font-display text-lg sm:text-xl font-bold ${themeStyle.accentText}`}>
                {section.title}
              </h2>
              <p className="whitespace-pre-line leading-relaxed font-sans">
                {section.content}
              </p>
            </div>
          ))}
        </div>

        {/* Do's and Don'ts Checklist */}
        <div className="my-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          {article.doList && article.doList.length > 0 && (
            <div className={`p-4 rounded-xl border space-y-2 ${themeStyle.cardBg}`}>
              <div className="font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 text-emerald-600">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Recomendações Práticas:</span>
              </div>
              <ul className="space-y-1.5 text-xs">
                {article.doList.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-emerald-500 font-bold">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {article.dontList && article.dontList.length > 0 && (
            <div className={`p-4 rounded-xl border space-y-2 ${themeStyle.cardBg}`}>
              <div className="font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 text-rose-500">
                <XCircle className="w-4 h-4 text-rose-500" />
                <span>O que Evitar:</span>
              </div>
              <ul className="space-y-1.5 text-xs">
                {article.dontList.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-rose-500 font-bold">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Sources Consulted */}
        {article.sources && article.sources.length > 0 && (
          <div className={`p-4 rounded-xl border mb-6 space-y-2 text-xs ${themeStyle.cardBg}`}>
            <div className={`font-bold text-[11px] flex items-center gap-1.5 uppercase tracking-wide ${themeStyle.accentText}`}>
              <Globe className="w-3.5 h-3.5" />
              <span>Fontes e Normas Consultadas:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {article.sources.map((src, i) => (
                <a
                  key={i}
                  href={src.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded border text-[11px] underline opacity-90 hover:opacity-100"
                >
                  <span>{src.title}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Conclusion Footer Callout */}
        {article.conclusion && (
          <div className={`p-5 rounded-xl border flex flex-col sm:flex-row items-center justify-between gap-4 ${themeStyle.cardBg}`}>
            <div>
              <span className={`text-[10px] font-bold uppercase tracking-wider block ${themeStyle.accentText}`}>
                Conselho do Especialista Anderson Sacadas
              </span>
              <p className="text-xs sm:text-sm font-medium mt-0.5">
                "{article.conclusion}"
              </p>
            </div>

            <a
              href={`https://wa.me/5511934493446?text=Ol%C3%A1%20Anderson!%20Li%20o%20artigo%20'${encodeURIComponent(article.title)}'%20no%20modo%20leitura%20e%20gostaria%20de%20agendar%20atendimento.`}
              target="_blank"
              rel="noreferrer"
              className={`px-4 py-2.5 rounded-xl font-bold text-xs shrink-0 flex items-center gap-1.5 transition-all shadow-md active:scale-95 whitespace-nowrap ${themeStyle.buttonBg}`}
            >
              <Send className="w-3.5 h-3.5" />
              <span>Falar no WhatsApp (11) 93449-3446</span>
            </a>
          </div>
        )}

      </div>

    </div>
  );
};
