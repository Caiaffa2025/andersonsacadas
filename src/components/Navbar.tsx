import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  MessageCircle, 
  Menu, 
  X, 
  ShieldCheck, 
  Sun, 
  Moon, 
  ChevronRight, 
  Calculator, 
  BookOpen, 
  Wrench, 
  Sparkles,
  Home,
  Award,
  Cog,
  HelpCircle,
  Grid,
  MessageSquare,
  PanelLeftClose,
  PanelLeftOpen,
  Send
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface NavbarProps {
  onOpenQuoteModal: (serviceName?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuoteModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [sidebarExpanded, setSidebarExpanded] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);

      // Section intersection detection
      const sections = [
        'por-que-anderson',
        'servicos',
        'pecas-exclusivas',
        'simulador',
        'informacoes-quiz',
        'blog-dicas',
        'marcas',
        'depoimentos',
        'faq'
      ];

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#', label: 'Início', icon: Home, id: '' },
    { href: '#por-que-anderson', label: 'Por que Anderson', icon: Award, id: 'por-que-anderson' },
    { href: '#servicos', label: 'Serviços', icon: Wrench, id: 'servicos' },
    { href: '#pecas-exclusivas', label: 'Usinagem Própria', icon: Cog, id: 'pecas-exclusivas' },
    { href: '#simulador', label: 'Diagnóstico & Custo', icon: Calculator, id: 'simulador' },
    { href: '#informacoes-quiz', label: 'Guia & Quiz', icon: HelpCircle, id: 'informacoes-quiz' },
    { href: '#blog-dicas', label: 'Blog & Dicas IA', icon: BookOpen, id: 'blog-dicas' },
    { href: '#marcas', label: 'Sistemas', icon: Grid, id: 'marcas' },
    { href: '#depoimentos', label: 'Depoimentos', icon: MessageSquare, id: 'depoimentos' },
    { href: '#faq', label: 'Dúvidas Frequentes', icon: HelpCircle, id: 'faq' },
  ];

  return (
    <>
      {/* TOP BAR: Header with Brand Logo and Main CTAs */}
      <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled 
          ? 'bg-[#0b0f17]/95 backdrop-blur-md shadow-lg shadow-black/40 border-b border-cyan-500/20' 
          : 'bg-[#0b0f17]/90 backdrop-blur-sm border-b border-slate-800/80'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20 gap-3">
            
            {/* Brand Logo & Sidebar Toggle */}
            <div className="flex items-center gap-3">
              {/* Desktop Vertical Menu Toggle */}
              <button
                type="button"
                onClick={() => setSidebarExpanded(!sidebarExpanded)}
                className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-cyan-400 border border-slate-700/80 transition-all cursor-pointer text-xs font-semibold"
                title={sidebarExpanded ? 'Recolher Menu Vertical' : 'Expandir Menu Vertical'}
              >
                {sidebarExpanded ? (
                  <>
                    <PanelLeftClose className="w-4 h-4 text-cyan-400" />
                    <span>Menu Vertical</span>
                  </>
                ) : (
                  <>
                    <PanelLeftOpen className="w-4 h-4 text-cyan-400" />
                    <span>Menu Vertical</span>
                  </>
                )}
              </button>

              <a 
                href="#" 
                className="flex items-center gap-2 group transition-opacity hover:opacity-95"
              >
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:border-cyan-400 group-hover:bg-cyan-500/20 transition-all shadow-sm shadow-cyan-500/10">
                  <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />
                </div>
                <span className="font-display text-lg sm:text-xl lg:text-2xl font-black tracking-tight">
                  <span className="text-cyan-300 dark:text-cyan-300 font-black drop-shadow-[0_1px_8px_rgba(6,182,212,0.8)]">Anderson</span>
                  <span className="text-white dark:text-slate-100 font-extrabold ml-0.5">Sacadas</span>
                </span>
              </a>
            </div>

            {/* Quick CTAs Zone (Desktop & Tablet) */}
            <div className="flex items-center gap-2 sm:gap-3">
              
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                type="button"
                className="p-2 rounded-xl bg-slate-800/80 border border-slate-700/80 text-slate-300 hover:text-cyan-400 hover:border-cyan-400/50 transition-all cursor-pointer"
                title={theme === 'dark' ? 'Mudar para modo claro' : 'Mudar para modo escuro'}
                aria-label="Alternar tema"
              >
                {theme === 'dark' ? (
                  <Sun className="w-4 h-4 text-amber-400" />
                ) : (
                  <Moon className="w-4 h-4 text-cyan-400" />
                )}
              </button>

              {/* Direct WhatsApp CTA */}
              <a
                href="https://wa.me/5511999999999?text=Ol%C3%A1%2C%20gostaria%20de%20um%20or%C3%A7amento%20para%20manuten%C3%A7%C3%A3o%20da%20minha%20sacada"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-bold text-emerald-400 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 rounded-xl transition-all shadow-sm"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span className="hidden sm:inline">WhatsApp Direto</span>
              </a>

              {/* Quote Modal Button */}
              <button
                onClick={() => onOpenQuoteModal()}
                className="inline-flex items-center justify-center px-4 py-2 text-xs font-extrabold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-xl transition-all shadow-md shadow-cyan-500/20 whitespace-nowrap cursor-pointer active:scale-95"
              >
                Solicitar Orçamento
              </button>

              {/* Mobile Menu Button (< 1024px) */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                type="button"
                className="lg:hidden p-2 text-slate-200 hover:text-white focus:outline-none rounded-xl bg-slate-800/80 border border-slate-700/80 cursor-pointer transition-colors"
                aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5 text-cyan-400" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>

            </div>

          </div>
        </div>
      </header>

      {/* DESKTOP FIXED VERTICAL NAVIGATION SIDEBAR (Floating Rail) */}
      <nav 
        className={`hidden lg:flex fixed left-4 top-1/2 -translate-y-1/2 z-40 flex-col gap-1.5 p-2 rounded-2xl bg-slate-900/90 border border-cyan-500/30 backdrop-blur-xl shadow-2xl shadow-black/80 transition-all duration-300 ${
          sidebarExpanded ? 'w-56' : 'w-14'
        }`}
        aria-label="Navegação Vertical"
      >
        <div className="flex items-center justify-between px-2 py-1 mb-1 border-b border-slate-800 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
          {sidebarExpanded ? (
            <>
              <span className="text-cyan-400">Navegação Vertical</span>
              <button
                type="button"
                onClick={() => setSidebarExpanded(false)}
                className="text-slate-400 hover:text-cyan-300 cursor-pointer"
                title="Minimizar"
              >
                <PanelLeftClose className="w-3.5 h-3.5" />
              </button>
            </>
          ) : (
            <button
              type="button"
              onClick={() => setSidebarExpanded(true)}
              className="w-full flex justify-center text-cyan-400 hover:text-cyan-300 cursor-pointer"
              title="Expandir Menu"
            >
              <PanelLeftOpen className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Vertical Items */}
        <div className="space-y-1">
          {navLinks.map((link, idx) => {
            const Icon = link.icon;
            const isActive = activeSection === link.id || (link.id === '' && activeSection === '');

            return (
              <a
                key={idx}
                href={link.href}
                className={`flex items-center gap-3 p-2 rounded-xl text-xs font-semibold transition-all group relative ${
                  isActive
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm shadow-cyan-500/10'
                    : 'text-slate-300 hover:bg-slate-800/80 hover:text-white border border-transparent'
                }`}
              >
                <div className={`p-1 rounded-lg shrink-0 ${isActive ? 'bg-cyan-400 text-slate-950' : 'bg-slate-800 text-slate-400 group-hover:text-cyan-300'}`}>
                  <Icon className="w-4 h-4" />
                </div>

                {sidebarExpanded ? (
                  <span className="truncate">{link.label}</span>
                ) : (
                  /* Tooltip on collapsed state */
                  <div className="absolute left-full ml-2 px-3 py-1.5 bg-slate-900 text-cyan-300 text-xs font-bold rounded-lg border border-cyan-500/30 whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity shadow-xl z-50">
                    {link.label}
                  </div>
                )}
              </a>
            );
          })}
        </div>

        {/* Quick Vertical CTA */}
        {sidebarExpanded && (
          <div className="pt-2 mt-1 border-t border-slate-800/80">
            <button
              type="button"
              onClick={() => onOpenQuoteModal()}
              className="w-full py-2 px-3 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 text-xs font-extrabold flex items-center justify-center gap-1.5 shadow-md shadow-cyan-500/20 cursor-pointer active:scale-95 transition-all"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Orçar no WhatsApp</span>
            </button>
          </div>
        )}
      </nav>

      {/* MOBILE & TABLET VERTICAL SLIDE-OUT DRAWER (< 1024px) */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-cyan-500/30 bg-[#0c111c]/98 backdrop-blur-xl px-4 sm:px-6 pt-4 pb-6 space-y-4 animate-in slide-in-from-top-2 duration-200 shadow-2xl">
          
          <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs text-slate-300 font-medium">
            <span className="flex items-center gap-1.5 text-cyan-400 font-bold">
              <ShieldCheck className="w-4 h-4" />
              Menu Vertical de Seções
            </span>
            <span className="text-[11px] text-slate-400 font-mono">
              Anderson Sacadas
            </span>
          </div>

          {/* Vertical list for mobile */}
          <div className="flex flex-col space-y-1 text-xs font-semibold text-slate-200">
            {navLinks.map((link, idx) => {
              const Icon = link.icon;
              return (
                <a
                  key={idx}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-3 px-3 rounded-xl hover:bg-slate-800/80 hover:text-cyan-300 flex items-center justify-between transition-colors border border-transparent hover:border-slate-700/60"
                >
                  <div className="flex items-center gap-2.5">
                    <Icon className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>{link.label}</span>
                  </div>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                </a>
              );
            })}
          </div>

          {/* Action CTAs in Mobile Menu */}
          <div className="pt-3 border-t border-slate-800/80 flex flex-col sm:flex-row gap-2.5">
            <a
              href="https://wa.me/5511999999999?text=Ol%C3%A1%2C%20gostaria%20de%20um%20or%C3%A7amento%20para%20manuten%C3%A7%C3%A3o%20da%20minha%20sacada"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 text-xs font-bold text-emerald-400 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 rounded-xl transition-all"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>Atendimento no WhatsApp</span>
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuoteModal();
              }}
              className="w-full py-3 text-xs font-extrabold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-xl transition-all shadow-md shadow-cyan-500/20 cursor-pointer active:scale-95"
            >
              Solicitar Orçamento Grátis
            </button>
          </div>

        </div>
      )}
    </>
  );
};
