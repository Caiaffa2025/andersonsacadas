import React, { useState, useEffect } from 'react';
import { 
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
  Home,
  Award,
  Cog,
  HelpCircle,
  Grid,
  MessageSquare,
  PanelLeftClose,
  PanelLeftOpen,
  Send,
  PhoneCall
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface NavbarProps {
  onOpenQuoteModal: (serviceName?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuoteModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [sidebarExpanded, setSidebarExpanded] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const { theme, toggleTheme } = useTheme();

  // Prevent background scrolling when mobile overlay is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);

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
          if (rect.top <= 220 && rect.bottom >= 200) {
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
    { href: '#servicos', label: 'Serviços Especializados', icon: Wrench, id: 'servicos' },
    { href: '#pecas-exclusivas', label: 'Usinagem de Peças', icon: Cog, id: 'pecas-exclusivas' },
    { href: '#simulador', label: 'Diagnóstico & Custo', icon: Calculator, id: 'simulador' },
    { href: '#informacoes-quiz', label: 'Guia & Quiz Técnico', icon: HelpCircle, id: 'informacoes-quiz' },
    { href: '#blog-dicas', label: 'Blog & Dicas', icon: BookOpen, id: 'blog-dicas' },
    { href: '#marcas', label: 'Marcas & Sistemas', icon: Grid, id: 'marcas' },
    { href: '#depoimentos', label: 'Depoimentos', icon: MessageSquare, id: 'depoimentos' },
    { href: '#faq', label: 'Dúvidas Frequentes', icon: HelpCircle, id: 'faq' },
  ];

  // Smooth scroll handler with offset for sticky header
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (!id) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setActiveSection('');
      return;
    }

    const el = document.getElementById(id);
    if (el) {
      const yOffset = -75; // Account for sticky navbar height
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  return (
    <>
      {/* TOP HEADER BAR (Sticky across desktop, tablet, and mobile) */}
      <header className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        scrolled 
          ? 'bg-[#0b0f17]/95 backdrop-blur-md shadow-lg shadow-black/40 border-b border-cyan-500/20' 
          : 'bg-[#0b0f17]/90 backdrop-blur-sm border-b border-slate-800/80'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20 gap-2 sm:gap-4">
            
            {/* Brand Logo & Desktop Rail Toggle */}
            <div className="flex items-center gap-2 sm:gap-3 shrink-0">
              {/* Desktop Left Rail Toggle */}
              <button
                type="button"
                onClick={() => setSidebarExpanded(!sidebarExpanded)}
                className="hidden xl:flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-cyan-400 border border-slate-700/80 transition-all cursor-pointer text-xs font-semibold"
                title={sidebarExpanded ? 'Recolher Menu Lateral' : 'Expandir Menu Lateral'}
              >
                {sidebarExpanded ? (
                  <PanelLeftClose className="w-4 h-4 text-cyan-400" />
                ) : (
                  <PanelLeftOpen className="w-4 h-4 text-cyan-400" />
                )}
                <span className="hidden xl:inline">Menu</span>
              </button>

              <a 
                href="#" 
                onClick={(e) => handleNavClick(e, '')}
                className="flex items-center gap-2 group transition-opacity hover:opacity-95"
              >
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:border-cyan-400 group-hover:bg-cyan-500/20 transition-all shadow-sm shadow-cyan-500/10 shrink-0">
                  <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />
                </div>
                <span className="font-display text-base sm:text-xl lg:text-2xl font-black tracking-tight whitespace-nowrap">
                  <span className="text-cyan-300 dark:text-cyan-300 font-black drop-shadow-[0_1px_8px_rgba(6,182,212,0.8)]">Anderson</span>
                  <span className="text-white dark:text-slate-100 font-extrabold ml-0.5">Sacadas</span>
                </span>
              </a>
            </div>

            {/* Desktop Horizontal Navigation Bar (Visible on lg/xl screens) */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-xs font-semibold text-slate-300">
              {navLinks.slice(1, 6).map((link, idx) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={idx}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.id)}
                    className={`px-2.5 py-1.5 rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                      isActive 
                        ? 'text-cyan-300 bg-cyan-500/10 border border-cyan-500/30 font-bold' 
                        : 'hover:text-white hover:bg-slate-800/60'
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </nav>

            {/* Quick Actions Zone (Desktop, Tablet & Mobile) */}
            <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
              
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                type="button"
                className="p-2 rounded-xl bg-slate-800/80 border border-slate-700/80 text-slate-300 hover:text-cyan-400 transition-all cursor-pointer"
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
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-bold text-emerald-400 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 rounded-xl transition-all shadow-sm"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp</span>
              </a>

              {/* Quote Modal Button */}
              <button
                onClick={() => onOpenQuoteModal()}
                className="inline-flex items-center justify-center px-3 sm:px-4 py-2 text-xs font-extrabold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-xl transition-all shadow-md shadow-cyan-500/20 whitespace-nowrap cursor-pointer active:scale-95"
              >
                Orçamento
              </button>

              {/* Mobile / Tablet Drawer Trigger Button (< 1024px) */}
              <button
                onClick={() => setMobileMenuOpen(true)}
                type="button"
                className="lg:hidden p-2 text-slate-200 hover:text-white rounded-xl bg-slate-800/80 border border-slate-700/80 cursor-pointer transition-colors flex items-center gap-1"
                aria-label="Abrir Menu Suspenso"
              >
                <Menu className="w-5 h-5 text-cyan-400" />
                <span className="text-xs font-bold text-slate-300 hidden xs:inline">Menu</span>
              </button>

            </div>

          </div>
        </div>
      </header>

      {/* DESKTOP FLOATING LEFT RAIL (XL Screens only) */}
      <nav 
        className={`hidden xl:flex fixed left-3 top-1/2 -translate-y-1/2 z-30 flex-col gap-1.5 p-2 rounded-2xl bg-slate-900/95 border border-cyan-500/30 backdrop-blur-xl shadow-2xl transition-all duration-300 ${
          sidebarExpanded ? 'w-52' : 'w-14'
        }`}
        aria-label="Navegação Lateral"
      >
        <div className="flex items-center justify-between px-2 py-1 mb-1 border-b border-slate-800 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
          {sidebarExpanded ? (
            <>
              <span className="text-cyan-400">Atalhos</span>
              <button
                type="button"
                onClick={() => setSidebarExpanded(false)}
                className="text-slate-400 hover:text-cyan-300 cursor-pointer"
              >
                <PanelLeftClose className="w-3.5 h-3.5" />
              </button>
            </>
          ) : (
            <button
              type="button"
              onClick={() => setSidebarExpanded(true)}
              className="w-full flex justify-center text-cyan-400 hover:text-cyan-300 cursor-pointer"
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
                onClick={(e) => handleNavClick(e, link.id)}
                className={`flex items-center gap-2.5 p-2 rounded-xl text-xs font-semibold transition-all group relative cursor-pointer ${
                  isActive
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                    : 'text-slate-300 hover:bg-slate-800/80 hover:text-white border border-transparent'
                }`}
              >
                <div className={`p-1 rounded-lg shrink-0 ${isActive ? 'bg-cyan-400 text-slate-950' : 'bg-slate-800 text-slate-400 group-hover:text-cyan-300'}`}>
                  <Icon className="w-3.5 h-3.5" />
                </div>

                {sidebarExpanded ? (
                  <span className="truncate">{link.label}</span>
                ) : (
                  <div className="absolute left-full ml-2 px-3 py-1 bg-slate-900 text-cyan-300 text-xs font-bold rounded-lg border border-cyan-500/30 whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity shadow-xl z-50">
                    {link.label}
                  </div>
                )}
              </a>
            );
          })}
        </div>

        {sidebarExpanded && (
          <div className="pt-2 mt-1 border-t border-slate-800">
            <button
              type="button"
              onClick={() => onOpenQuoteModal()}
              className="w-full py-2 px-2.5 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 text-[11px] font-extrabold flex items-center justify-center gap-1 shadow-md shadow-cyan-500/20 cursor-pointer transition-all"
            >
              <Send className="w-3 h-3" />
              <span>Pedir Orçamento</span>
            </button>
          </div>
        )}
      </nav>

      {/* FULL-SCREEN APP-LIKE MOBILE OVERLAY MENU DRAWER (< 1024px) */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-[#0a0e17]/98 backdrop-blur-2xl flex flex-col justify-between overflow-y-auto animate-in fade-in duration-200">
          
          {/* Mobile Overlay Top Header Bar */}
          <div className="sticky top-0 z-10 px-4 sm:px-6 py-4 bg-[#0a0e17] border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                <ShieldCheck className="w-4 h-4 text-cyan-400" />
              </div>
              <span className="font-display text-lg font-black text-white">
                <span className="text-cyan-300">Anderson</span> Sacadas
              </span>
            </div>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-xl bg-slate-800/90 text-slate-300 hover:text-white border border-slate-700/80 cursor-pointer flex items-center gap-1 text-xs font-bold"
            >
              <X className="w-5 h-5 text-cyan-400" />
              <span>Fechar</span>
            </button>
          </div>

          {/* Mobile Overlay Content Body */}
          <div className="p-4 sm:p-6 space-y-6 flex-grow">
            
            <div className="p-3.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-between text-xs text-cyan-300 font-medium">
              <span>Selecione a seção desejada:</span>
              <span className="font-mono text-[10px] text-cyan-400">Atendimento SP & Litoral</span>
            </div>

            {/* Categorized Vertical Links Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-semibold text-slate-200">
              {navLinks.map((link, idx) => {
                const Icon = link.icon;
                const isActive = activeSection === link.id || (link.id === '' && activeSection === '');

                return (
                  <a
                    key={idx}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.id)}
                    className={`p-3.5 rounded-xl flex items-center justify-between transition-all cursor-pointer border ${
                      isActive 
                        ? 'bg-cyan-500/20 border-cyan-500/50 text-cyan-300 shadow-md shadow-cyan-500/10 font-bold' 
                        : 'bg-slate-900/80 border-slate-800/90 text-slate-200 hover:bg-slate-800 hover:text-white'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${isActive ? 'bg-cyan-400 text-slate-950' : 'bg-slate-800 text-cyan-400'}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-sm font-bold">{link.label}</span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-500" />
                  </a>
                );
              })}
            </div>

          </div>

          {/* Mobile Overlay Bottom Actions Bar */}
          <div className="p-4 sm:p-6 bg-[#070a10] border-t border-slate-800 space-y-3">
            <a
              href="https://wa.me/5511999999999?text=Ol%C3%A1%2C%20gostaria%20de%20um%20or%C3%A7amento%20para%20manuten%C3%A7%C3%A3o%20da%20minha%20sacada"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3.5 text-xs sm:text-sm font-bold text-emerald-400 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 rounded-xl transition-all shadow-md"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>Chamar no WhatsApp Direto</span>
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuoteModal();
              }}
              className="w-full py-3.5 text-xs sm:text-sm font-extrabold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-xl transition-all shadow-md shadow-cyan-500/20 cursor-pointer active:scale-95"
            >
              Solicitar Orçamento Técnico Grátis
            </button>
          </div>

        </div>
      )}

      {/* MOBILE & TABLET STICKY BOTTOM DOCK (< 768px) */}
      <div className="md:hidden fixed bottom-0 inset-x-0 z-30 bg-slate-950/95 backdrop-blur-md border-t border-slate-800 p-2 px-3 shadow-2xl flex items-center justify-around gap-2">
        <a
          href="https://wa.me/5511999999999?text=Ol%C3%A1!%20Gostaria%20de%20atendimento%20r%C3%A1pido%20pelo%20WhatsApp"
          target="_blank"
          rel="noreferrer"
          className="flex-1 flex flex-col items-center justify-center py-1.5 px-2 rounded-xl bg-emerald-950/50 border border-emerald-500/40 text-emerald-400 hover:bg-emerald-900/50 transition-colors"
        >
          <MessageCircle className="w-4 h-4" />
          <span className="text-[10px] font-bold mt-0.5">WhatsApp</span>
        </a>

        <a
          href="#simulador"
          onClick={(e) => handleNavClick(e, 'simulador')}
          className="flex-1 flex flex-col items-center justify-center py-1.5 px-2 rounded-xl bg-slate-900 border border-slate-800 text-cyan-300 hover:bg-slate-800 transition-colors cursor-pointer"
        >
          <Calculator className="w-4 h-4 text-cyan-400" />
          <span className="text-[10px] font-bold mt-0.5">Diagnóstico</span>
        </a>

        <button
          type="button"
          onClick={() => onOpenQuoteModal()}
          className="flex-1.2 flex items-center justify-center gap-1 py-2 px-3 rounded-xl bg-cyan-400 text-slate-950 font-extrabold text-xs shadow-md shadow-cyan-500/20 active:scale-95 transition-all cursor-pointer"
        >
          <Send className="w-3.5 h-3.5" />
          <span>Orçamento</span>
        </button>
      </div>
    </>
  );
};
