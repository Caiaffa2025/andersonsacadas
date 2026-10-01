import React, { useState } from 'react';
import { X, Send, CheckCircle2, ShieldCheck, MessageCircle, AlertCircle } from 'lucide-react';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTopic?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({ isOpen, onClose, initialTopic }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [neighborhood, setNeighborhood] = useState('');
  const [condo, setCondo] = useState('');
  const [panels, setPanels] = useState('8');
  const [problemDescription, setProblemDescription] = useState(initialTopic || '');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setError('Por favor, informe seu nome.');
      return;
    }
    if (!phone.trim() || phone.trim().length < 8) {
      setError('Por favor, informe um telefone de contato válido com DDD.');
      return;
    }

    setError('');
    setSubmitted(true);
  };

  const getWhatsAppForwardLink = () => {
    const text = `Olá, Anderson Sacadas! Solicitação de Orçamento:%0A%0A` +
      `• Nome: ${encodeURIComponent(name || 'Cliente')}%0A` +
      `• Telefone/WhatsApp: ${encodeURIComponent(phone)}%0A` +
      `• Bairro/Cidade: ${encodeURIComponent(neighborhood || 'Não informado')}%0A` +
      `• Condomínio: ${encodeURIComponent(condo || 'Não informado')}%0A` +
      `• Quantidade de lâminas: ${encodeURIComponent(panels)}%0A` +
      `• Descrição do problema: ${encodeURIComponent(problemDescription || 'Manutenção geral da sacada')}%0A%0A` +
      `Gostaria de um retorno com o valor e disponibilidade de data.`;
    return `https://wa.me/5511934493446?text=${text}`;
  };

  const resetForm = () => {
    setName('');
    setPhone('');
    setNeighborhood('');
    setCondo('');
    setProblemDescription('');
    setSubmitted(false);
    setError('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-lg max-h-[92vh] overflow-y-auto bg-[#0d121c] border border-slate-700/80 rounded-2xl shadow-2xl p-5 sm:p-8 my-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          type="button"
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-cyan-400 uppercase tracking-wider mb-1">
              <ShieldCheck className="w-4 h-4" />
              <span>Orçamento Sem Compromisso</span>
            </div>
            
            <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
              Solicitar Avaliação Técnica
            </h3>
            
            <p className="text-xs sm:text-sm text-slate-300 mt-1 mb-5">
              Receba um diagnóstico prévio com estimativa de valor para recuperação do seu envidraçamento.
            </p>

            {error && (
              <div className="mb-4 p-3 rounded-lg bg-rose-950/40 border border-rose-800/60 text-xs text-rose-300 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0 text-rose-400" />
                <span>{error}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-3.5 text-left">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Seu Nome Completo *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ex: Carlos Silva"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-slate-800/80 border border-slate-700 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-cyan-400"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    WhatsApp com DDD *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="(11) 99999-9999"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-800/80 border border-slate-700 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-cyan-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Bairro / Cidade
                  </label>
                  <input
                    type="text"
                    value={neighborhood}
                    onChange={(e) => setNeighborhood(e.target.value)}
                    placeholder="Ex: Moema, SP"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-800/80 border border-slate-700 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-cyan-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Nome do Condomínio / Edifício
                  </label>
                  <input
                    type="text"
                    value={condo}
                    onChange={(e) => setCondo(e.target.value)}
                    placeholder="Ex: Edifício Metropolitan"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-800/80 border border-slate-700 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-cyan-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Quantos vidros (lâminas)?
                  </label>
                  <select
                    value={panels}
                    onChange={(e) => setPanels(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-800/80 border border-slate-700 text-white text-xs sm:text-sm focus:outline-none focus:border-cyan-400"
                  >
                    <option value="4 a 6 vidros">4 a 6 vidros (pequena)</option>
                    <option value="7 a 10 vidros">7 a 10 vidros (média)</option>
                    <option value="11 a 16 vidros">11 a 16 vidros (grande)</option>
                    <option value="Mais de 16 vidros">Mais de 16 vidros (cobertura)</option>
                    <option value="Não sei exatamente">Não sei ao certo</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  O que está acontecendo com a sacada?
                </label>
                <textarea
                  rows={3}
                  value={problemDescription}
                  onChange={(e) => setProblemDescription(e.target.value)}
                  placeholder="Ex: Os vidros estão muito pesados, raspando no trilho de baixo e entra água quando chove forte..."
                  className="w-full px-3.5 py-2 rounded-lg bg-slate-800/80 border border-slate-700 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-cyan-400 resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 px-4 text-xs sm:text-sm font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-xl transition-all shadow-md shadow-cyan-500/20 active:scale-95 cursor-pointer"
                >
                  Confirmar e Receber Proposta
                </button>
              </div>

              <div className="text-[11px] text-slate-400 text-center pt-1">
                Seus dados estão protegidos. Não enviamos spam nem repassamos informações.
              </div>
            </form>
          </div>
        ) : (
          <div className="py-6 text-center space-y-4">
            <div className="w-14 h-14 mx-auto rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="font-display text-xl font-bold text-white">
              Solicitação Registrada com Sucesso!
            </h3>

            <p className="text-xs sm:text-sm text-slate-300 max-w-sm mx-auto leading-relaxed">
              Obrigado, <strong className="text-white">{name}</strong>! Nossos especialistas técnicos entrarão em contato no seu WhatsApp (<strong className="text-white">{phone}</strong>).
            </p>

            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-left text-xs text-slate-300 space-y-1">
              <div><strong>Local:</strong> {neighborhood || 'Não informado'} {condo ? `(${condo})` : ''}</div>
              <div><strong>Lâminas:</strong> {panels}</div>
              <div><strong>Observação:</strong> {problemDescription || 'Revisão geral'}</div>
            </div>

            <div className="pt-2 flex flex-col gap-2">
              <a
                href={getWhatsAppForwardLink()}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 text-xs sm:text-sm font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-xl transition-all shadow-md shadow-emerald-500/20"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Abrir Diretamente no WhatsApp Agora</span>
              </a>

              <button
                type="button"
                onClick={resetForm}
                className="w-full py-2.5 px-4 text-xs font-semibold text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                Fechar janela
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
