import React from 'react';
import { ShieldCheck, Phone, Mail, MapPin, MessageCircle, Clock } from 'lucide-react';

interface FooterProps {
  onOpenQuoteModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenQuoteModal }) => {
  return (
    <footer className="bg-[#070a0f] border-t border-slate-800/80 pt-16 pb-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Brand Info (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                <ShieldCheck className="w-4 h-4 text-cyan-400" />
              </div>
              <span className="font-display text-xl font-black tracking-tight">
                <span className="text-cyan-300 dark:text-cyan-300 font-black drop-shadow-[0_1px_8px_rgba(6,182,212,0.8)]">Anderson</span>
                <span className="text-white dark:text-slate-100 font-extrabold ml-0.5">Sacadas</span>
              </span>
            </div>
            
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Desde 2014 dedicados exclusivamente à manutenção, recuperação, estanqueidade e segurança de envidraçamentos de sacadas residenciais e corporativas. Atendemos todas as marcas e fabricamos peças especiais sob medida.
            </p>

            <div className="pt-2 text-slate-500 text-[11px] space-y-1">
              <div>Especialistas em Manutenção Multimarca</div>
              <div>Conformidade com Norma Técnica ABNT NBR 16259</div>
              <div>Atendimento com ART para condomínios</div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <div className="font-display text-xs font-bold uppercase tracking-wider text-white">
              Navegação
            </div>
            <ul className="space-y-2 text-slate-400">
              <li>
                <a href="#por-que-anderson" className="hover:text-cyan-400 transition-colors">
                  Por que a Anderson Sacadas?
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-cyan-400 transition-colors">
                  Serviços Especializados
                </a>
              </li>
              <li>
                <a href="#pecas-exclusivas" className="hover:text-cyan-400 transition-colors">
                  Usinagem de Peças Raras
                </a>
              </li>
              <li>
                <a href="#simulador" className="hover:text-cyan-400 transition-colors">
                  Simulador de Diagnóstico
                </a>
              </li>
              <li>
                <a href="#marcas" className="hover:text-cyan-400 transition-colors">
                  Sistemas Atendidos
                </a>
              </li>
              <li>
                <a href="#depoimentos" className="hover:text-cyan-400 transition-colors">
                  Casos de Clientes
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-cyan-400 transition-colors">
                  Perguntas Frequentes
                </a>
              </li>
            </ul>
          </div>

          {/* Services Quick Links */}
          <div className="space-y-3">
            <div className="font-display text-xs font-bold uppercase tracking-wider text-white">
              Nossos 15 Serviços
            </div>
            <ul className="space-y-1.5 text-slate-400 text-[11px]">
              <li>Manutenção & Substituição de Roldanas</li>
              <li>Alinhamento do Sistema & Destravamento</li>
              <li>Substituição de Vidros & Colagem de Perfis</li>
              <li>Eliminação de Vazamentos & Borrachas</li>
              <li>Adaptação para Máquinas & Aberturas</li>
              <li>Reforma, Modernização & Limpeza Pós Obra</li>
              <li>Laudos Técnicos de Segurança (ART CREA)</li>
            </ul>
          </div>

          {/* Contact Direct */}
          <div className="space-y-3">
            <div className="font-display text-xs font-bold uppercase tracking-wider text-white">
              Central de Atendimento
            </div>
            <div className="space-y-2.5 text-slate-300">
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-emerald-400 transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>WhatsApp: (11) 99999-9999</span>
              </a>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Telefone: (11) 3230-0000</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>contato@sacadaprime.com.br</span>
              </div>
              <div className="flex items-start gap-2 pt-1">
                <Clock className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                <span className="text-slate-400 text-[11px]">
                  Segunda a Sexta: 08h às 18h<br />
                  Sábados: 08h às 13h
                </span>
              </div>
              <div className="flex items-start gap-2 pt-1">
                <MapPin className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                <span className="text-slate-400 text-[11px]">
                  Atendemos São Paulo, Grande ABC, Alphaville e Litoral Paulista.
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom bar with copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
          <div>
            © {new Date().getFullYear()} Anderson Sacadas - Engenharia e Manutenção de Envidraçamento de Sacadas. Todos os direitos reservados. Desde 2014.
          </div>
          <div className="flex items-center gap-4">
            <span>Privacidade & Termos</span>
            <span>·</span>
            <span>Garantia Assegurada</span>
            <span>·</span>
            <button
              onClick={onOpenQuoteModal}
              className="text-cyan-400 hover:underline cursor-pointer"
            >
              Pedir Orçamento
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
