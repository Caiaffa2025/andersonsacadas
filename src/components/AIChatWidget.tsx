import React, { useState, useRef, useEffect } from 'react';
import { 
  Bot, 
  Sparkles, 
  X, 
  Send, 
  MessageCircle, 
  User, 
  Loader2, 
  ChevronDown,
  ShieldCheck,
  RotateCcw
} from 'lucide-react';

interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
}

const QUICK_QUESTIONS = [
  'Por que a sacada fica pesada ao deslizar?',
  'Entra água na chuva forte, como resolver?',
  'A empresa que instalou faliu, vocês têm peças?',
  'Cobram taxa de visita técnica em SP e Litoral?',
  'Qual a garantia das roldanas em aço inox?',
];

export const AIChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'assistant',
      content: 'Olá! Sou o Assistente Inteligente da **Anderson Sacadas** (Especialistas desde 2014).\n\nComo posso tirar suas dúvidas sobre manutenção, vedação, roldanas ou barulhos na sua sacada hoje?',
      timestamp: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [unreadCount, setUnreadCount] = useState(1);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setUnreadCount(0);
      chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [isOpen, messages]);

  const handleSendMessage = async (textToSend?: string) => {
    const query = textToSend || inputValue.trim();
    if (!query || isLoading) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      content: query,
      timestamp: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }),
    };

    const newHistory = [...messages, userMsg];
    setMessages(newHistory);
    setInputValue('');
    setIsLoading(true);

    try {
      // Format messages history for server endpoint
      const formattedMessages = newHistory.map((m) => ({
        role: m.role,
        content: m.content,
      }));

      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: formattedMessages }),
      });

      if (!res.ok) {
        throw new Error('Falha no servidor de IA');
      }

      const data = await res.json();
      const botReply = data.reply || 'Desculpe, tive um breve problema para conectar com o banco de soluções técnicas.';

      const botMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: botReply,
        timestamp: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages((prev) => [...prev, botMsg]);
    } catch (err) {
      console.error('Erro no Chat com IA:', err);
      const errorMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: 'Desculpe, a conexão com o assistente oscilou. Você pode fazer a pergunta diretamente ao nosso técnico no WhatsApp (11) 93449-3446.',
        timestamp: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const generateWhatsAppUrl = () => {
    const lastUserQuestion = messages.filter((m) => m.role === 'user').pop()?.content || 'Dúvidas sobre manutenção de sacada';
    const text = `Olá, Anderson Sacadas! Estava conversando com o Assistente de IA do site e gostaria de agendar uma visita/orçamento:%0A%0A` +
      `• Dúvida/Sintoma: ${encodeURIComponent(lastUserQuestion)}%0A%0A` +
      `Gostaria de agendar a visita técnica sem taxa.`;
    return `https://wa.me/5511934493446?text=${text}`;
  };

  const handleResetChat = () => {
    setMessages([
      {
        id: 'welcome',
        role: 'assistant',
        content: 'Olá! Sou o Assistente Inteligente da **Anderson Sacadas** (Especialistas desde 2014).\n\nComo posso tirar suas dúvidas sobre manutenção, vedação, roldanas ou barulhos na sua sacada hoje?',
        timestamp: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }),
      },
    ]);
  };

  return (
    <>
      {/* FLOATING TRIGGER BUTTON (Always visible at bottom left/right) */}
      <div className="fixed bottom-20 sm:bottom-6 left-4 sm:left-6 z-40">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="relative group flex items-center gap-2.5 px-4 py-3 bg-gradient-to-r from-cyan-600 via-cyan-500 to-teal-400 hover:from-cyan-500 hover:to-teal-300 text-slate-950 font-extrabold text-xs sm:text-sm rounded-full shadow-2xl shadow-cyan-500/40 border border-cyan-200 transition-all active:scale-95 cursor-pointer animate-bounce sm:animate-none"
          aria-label="Tirar dúvidas com Inteligência Artificial"
        >
          <div className="relative flex items-center justify-center">
            <Bot className="w-5 h-5 text-slate-950 shrink-0" />
            <Sparkles className="w-3 h-3 text-white absolute -top-1 -right-1" />
          </div>

          <span className="hidden sm:inline">Tirar Dúvidas com IA</span>
          <span className="sm:hidden font-black">IA Sacadas</span>

          {unreadCount > 0 && !isOpen && (
            <span className="absolute -top-1 -right-1 bg-amber-400 text-slate-950 text-[10px] font-black w-5 h-5 rounded-full flex items-center justify-center border-2 border-slate-900 shadow-md">
              {unreadCount}
            </span>
          )}
        </button>
      </div>

      {/* CHAT DRAWER / PANEL */}
      {isOpen && (
        <div className="fixed inset-x-3 bottom-3 sm:bottom-20 sm:left-6 sm:right-auto z-50 w-auto sm:w-[420px] max-w-full h-[540px] max-h-[82vh] bg-[#0c101a] border border-cyan-500/40 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300">
          
          {/* Header */}
          <div className="p-3.5 sm:p-4 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between gap-2 shrink-0">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center text-cyan-300 shadow-inner shrink-0 relative">
                <Bot className="w-5 h-5" />
                <span className="w-2.5 h-2.5 bg-emerald-400 rounded-full absolute -top-0.5 -right-0.5 border-2 border-slate-900 animate-pulse" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h3 className="text-xs sm:text-sm font-extrabold text-white">
                    Assistente IA · Anderson Sacadas
                  </h3>
                  <span className="text-[9px] font-bold px-1.5 py-0.2 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                    24h
                  </span>
                </div>
                <p className="text-[10px] text-slate-400 flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-cyan-400 shrink-0" />
                  Especialista em Envidraçamentos
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={handleResetChat}
                className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
                title="Reiniciar conversa"
              >
                <RotateCcw className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
                aria-label="Fechar assistente de IA"
              >
                <X className="w-5 h-5 text-slate-300" />
              </button>
            </div>
          </div>

          {/* Quick suggestions header if message history is short */}
          {messages.length <= 2 && (
            <div className="px-3 pt-3 pb-1 border-b border-slate-800/60 bg-slate-900/30 shrink-0">
              <div className="text-[10px] font-bold text-cyan-400 uppercase tracking-wider mb-2 flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-cyan-400" />
                <span>Perguntas Frequentes:</span>
              </div>
              <div className="flex gap-1.5 overflow-x-auto pb-2 scrollbar-none text-[11px]">
                {QUICK_QUESTIONS.map((q, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleSendMessage(q)}
                    className="px-2.5 py-1 rounded-lg bg-slate-800/80 hover:bg-cyan-950/60 text-slate-300 hover:text-cyan-300 border border-slate-700/80 hover:border-cyan-500/50 whitespace-nowrap shrink-0 transition-all cursor-pointer"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Messages Body */}
          <div className="flex-grow p-3 sm:p-4 overflow-y-auto space-y-3 text-xs leading-relaxed">
            {messages.map((msg) => {
              const isUser = msg.role === 'user';
              return (
                <div
                  key={msg.id}
                  className={`flex items-start gap-2 ${isUser ? 'justify-end' : 'justify-start'}`}
                >
                  {!isUser && (
                    <div className="w-7 h-7 rounded-lg bg-cyan-950 border border-cyan-500/40 flex items-center justify-center text-cyan-400 shrink-0 mt-0.5">
                      <Bot className="w-4 h-4" />
                    </div>
                  )}

                  <div
                    className={`max-w-[85%] p-3 rounded-2xl text-xs ${
                      isUser
                        ? 'bg-cyan-500 text-slate-950 font-medium rounded-tr-none shadow-md'
                        : 'bg-slate-800/90 text-slate-200 border border-slate-700/70 rounded-tl-none shadow-sm'
                    }`}
                  >
                    <p className="whitespace-pre-line">{msg.content}</p>
                    <span
                      className={`block text-[9px] mt-1 text-right font-mono ${
                        isUser ? 'text-slate-900/70' : 'text-slate-400'
                      }`}
                    >
                      {msg.timestamp}
                    </span>
                  </div>

                  {isUser && (
                    <div className="w-7 h-7 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300 shrink-0 mt-0.5">
                      <User className="w-4 h-4" />
                    </div>
                  )}
                </div>
              );
            })}

            {isLoading && (
              <div className="flex items-center gap-2 text-cyan-400 bg-slate-800/50 p-2.5 rounded-xl border border-slate-700/50 w-fit">
                <Loader2 className="w-4 h-4 animate-spin shrink-0" />
                <span className="text-xs">Analisando histórico técnico e norma NBR 16259...</span>
              </div>
            )}

            <div ref={chatEndRef} />
          </div>

          {/* Bottom WhatsApp CTA Banner */}
          <div className="px-3 py-1.5 bg-emerald-950/40 border-t border-emerald-500/30 flex items-center justify-between gap-2 shrink-0">
            <span className="text-[10px] text-emerald-300 font-medium truncate">
              Quer agendar visita sem taxa de visita?
            </span>
            <a
              href={generateWhatsAppUrl()}
              target="_blank"
              rel="noreferrer"
              className="px-2.5 py-1 text-[11px] font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg flex items-center gap-1 shrink-0 transition-all"
            >
              <MessageCircle className="w-3 h-3" />
              <span>Chamar no WhatsApp</span>
            </a>
          </div>

          {/* Input Footer */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="p-2.5 sm:p-3 bg-slate-900 border-t border-slate-800 flex items-center gap-2 shrink-0"
          >
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Digite sua dúvida sobre a sacada..."
              className="flex-grow px-3.5 py-2 rounded-xl bg-slate-800/90 border border-slate-700 text-white placeholder-slate-400 text-xs focus:outline-none focus:border-cyan-400"
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={!inputValue.trim() || isLoading}
              className="p-2.5 rounded-xl bg-cyan-400 hover:bg-cyan-300 disabled:opacity-40 text-slate-950 font-bold transition-all shrink-0 cursor-pointer"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

        </div>
      )}
    </>
  );
};
