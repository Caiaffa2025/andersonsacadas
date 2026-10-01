import express from 'express';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Initialize Gemini SDK with telemetry header
const getAIClient = () => {
  return new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      },
    },
  });
};

// 1. AI Customer Support Chat Endpoint
app.post('/api/chat', async (req, res) => {
  const { messages } = req.body;
  if (!messages || !Array.isArray(messages) || messages.length === 0) {
    return res.status(400).json({ error: 'Histórico de mensagens é obrigatório' });
  }

  const systemInstruction = `Você é o Assistente Virtual Inteligente da "Anderson Sacadas" — especialista número 1 em manutenção, regulagem, vedação e usinagem de peças para envidraçamento de sacadas no estado de São Paulo desde 2014.

Sua missão é responder dúvidas técnicas dos clientes de forma rápida, clara, gentil, profissional e sincera.

Diretrizes Principais:
1. Identidade: Você é o suporte inteligente da Anderson Sacadas (Anderson Sacadas - Desde 2014).
2. Especialidades: Troca de roldanas blindadas em aço inox 304 (que não oxida nem emperra com maresia), vedação contra chuvas com silicone estrutural UV e escovas náuticas, regulagem e prumo de lâminas travadas, e fabricação própria de peças fora de linha/patenteadas para todas as marcas (Reiki, Blindex, Mansur, Sanglass, Stanley, etc.).
3. Transparência: Em 96% dos casos NÃO é necessário trocar a sacada toda. Explicar que a manutenção recupera o sistema por uma fração do valor de uma sacada nova.
4. Padrões de Segurança: Conhecimento da norma ABNT NBR 16259 e emissão de laudo/relatório para condomínios.
5. Ação e Agendamento: Se o cliente quiser agendar uma visita técnica ou orçamento final, informe que a visita não possui taxa e oriente a clicar no botão de WhatsApp para falar direto com o técnico pelo número (11) 93449-3446.
6. Estilo de resposta: Curta, direta, organizada com marcadores quando apropriado e muito solícita. Em português do Brasil.`;

  try {
    const ai = getAIClient();

    // Convert messages for model
    let contents = messages.map((m: { role: string; content: string }) => ({
      role: m.role === 'user' ? 'user' : 'model',
      parts: [{ text: m.content }],
    }));

    // CRITICAL FIX FOR GEMINI API: First element in contents MUST have role 'user'
    while (contents.length > 0 && contents[0].role === 'model') {
      contents.shift();
    }

    if (contents.length === 0) {
      const lastUserMsg = messages.filter((m: any) => m.role === 'user').pop();
      contents = [
        {
          role: 'user',
          parts: [{ text: lastUserMsg?.content || 'Olá, gostaria de saber sobre manutenção de sacadas.' }],
        },
      ];
    }

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents,
      config: {
        systemInstruction,
        temperature: 0.7,
      },
    });

    const reply = response.text || 'Olá! Como posso te ajudar com a manutenção ou regulagem da sua sacada hoje?';

    return res.json({ reply });
  } catch (error: any) {
    console.error('Erro na rota /api/chat:', error?.message || error);

    // Smart Domain Fallback Response ensuring the user always receives an accurate, expert reply
    const lastUserQuery = messages.filter((m: any) => m.role === 'user').pop()?.content?.toLowerCase() || '';
    
    let fallbackReply = 'Nossa equipe técnica da **Anderson Sacadas** (desde 2014) atende toda a Grande SP e Litoral sem taxa de visita. Você pode agendar sua avaliação gratuita no WhatsApp **(11) 93449-3446**!';

    if (lastUserQuery.includes('pesad') || lastUserQuery.includes('emperr') || lastUserQuery.includes('trava') || lastUserQuery.includes('dura')) {
      fallbackReply = 'Quando as lâminas de vidro da sacada ficam pesadas ou travando ao deslizar, o motivo é o desgaste do nylon das roldanas. A **Anderson Sacadas** faz a substituição por roldanas blindadas em **Aço Inox 304** no próprio local, devolvendo o deslizamento suave! Agende uma visita sem taxa pelo WhatsApp **(11) 93449-3446**.';
    } else if (lastUserQuery.includes('chuva') || lastUserQuery.includes('vaza') || lastUserQuery.includes('água') || lastUserQuery.includes('infiltr')) {
      fallbackReply = 'Infiltrações de água na chuva ocorrem quando o silicone comum resseca e racha sob o sol. Nós aplicamos **silicone de cura neutra estrutural com proteção UV** e trocamos as escovas de vedação náuticas para proteger o piso e móveis da sua sala!';
    } else if (lastUserQuery.includes('taxa') || lastUserQuery.includes('visita') || lastUserQuery.includes('custa') || lastUserQuery.includes('orçamento') || lastUserQuery.includes('valor')) {
      fallbackReply = 'Não cobramos taxa de visita técnica em São Paulo, ABC, Alphaville e Litoral. A avaliação e o orçamento são 100% gratuitos e sem compromisso. Clique no botão abaixo para chamar no WhatsApp **(11) 93449-3446**!';
    } else if (lastUserQuery.includes('faliu') || lastUserQuery.includes('marca') || lastUserQuery.includes('peça') || lastUserQuery.includes('antig')) {
      fallbackReply = 'Mesmo se a empresa que instalou a sua sacada fechou ou a marca saiu de linha, a **Anderson Sacadas** possui ferramentaria própria e usina peças sob medida para qualquer modelo (Reiki, Blindex, Mansur, Sanglass, etc.). Não é necessário trocar a sacada inteira!';
    }

    return res.json({ reply: fallbackReply });
  }
});

// 2. Search Grounding Blog Search Endpoint
app.post('/api/blog/search', async (req, res) => {
  try {
    const { query } = req.body;
    if (!query || typeof query !== 'string') {
      return res.status(400).json({ error: 'Termo de busca é obrigatório' });
    }

    const ai = getAIClient();

    const prompt = `Você é o Anderson, técnico e especialista fundador da Anderson Sacadas, com mais de 10 anos de experiência em manutenção de envidraçamentos.
O usuário quer ler um artigo de dicas de especialista sobre: "${query}".

Sua tarefa é consultar fontes confiáveis na web (Search Grounding), normas ABNT NBR 16259 e boas práticas de engenharia de sacadas para fornecer um artigo educativo, completo e prático.

Retorne EXCLUSIVAMENTE um objeto JSON válido no seguinte formato:
{
  "title": "Título Chamativo e Profissional",
  "category": "Dicas do Especialista",
  "readTime": "3 min de leitura",
  "summary": "Resumo explicativo do tema em duas frases.",
  "sections": [
    {
      "title": "Subtítulo da Seção 1",
      "content": "Explicação detalhada e técnica sobre o assunto."
    },
    {
      "title": "Subtítulo da Seção 2",
      "content": "Dicas adicionais e o que dizem as normas de segurança."
    }
  ],
  "doList": [
    "Recomendação prática 1",
    "Recomendação prática 2",
    "Recomendação prática 3"
  ],
  "dontList": [
    "Erro grave a evitar 1",
    "Erro grave a evitar 2"
  ],
  "conclusion": "Conselho final assinado pelo Anderson Sacadas sobre a importância da manutenção preventiva."
}`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: prompt,
      config: {
        tools: [{ googleSearch: {} }],
        responseMimeType: 'application/json',
      },
    });

    const groundingChunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks || [];
    const sources = groundingChunks
      .map((chunk: any) => ({
        title: chunk.web?.title || 'Pesquisa na Web',
        url: chunk.web?.uri || '',
      }))
      .filter((s: any) => s.url);

    let article = null;
    try {
      article = JSON.parse(response.text || '{}');
    } catch {
      article = {
        title: `Guia de Especialista: ${query}`,
        category: 'Dicas de Manutenção',
        readTime: '3 min de leitura',
        summary: response.text?.slice(0, 180) || 'Orientações práticas de conservação para sua sacada.',
        sections: [
          {
            title: 'Análise do Especialista',
            content: response.text || 'Importante manter os trilhos limpos e livres de detritos.',
          },
        ],
        doList: ['Limpeza frequente com pano seco', 'Verificação anual de roldanas e vedações'],
        dontList: ['Jamais aplicar graxa nos trilhos', 'Não utilizar produtos abrasivos nos vidros'],
        conclusion: 'Sua segurança vem sempre em primeiro lugar. Agende uma revisão técnica gratuita com a Anderson Sacadas.',
      };
    }

    res.json({ article, sources });
  } catch (error: any) {
    console.error('Erro na rota /api/blog/search:', error);
    res.status(500).json({
      error: 'Não foi possível gerar a pesquisa agora. Tente novamente em instantes.',
      details: error?.message,
    });
  }
});

async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'custom',
    });
    app.use(vite.middlewares);
    app.use('*', async (req, res, next) => {
      const url = req.originalUrl;
      try {
        const indexPath = path.resolve('./index.html');
        let rawHtml = '<!DOCTYPE html><html><head></head><body><div id="root"></div><script type="module" src="/src/main.tsx"></script></body></html>';
        if (fs.existsSync(indexPath)) {
          rawHtml = fs.readFileSync(indexPath, 'utf-8');
        }
        const template = await vite.transformIndexHtml(url, rawHtml);
        res.status(200).set({ 'Content-Type': 'text/html' }).end(template);
      } catch (e: any) {
        vite.ssrFixStacktrace(e);
        next(e);
      }
    });
  } else {
    app.use(express.static('dist'));
  }

  app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
  });
}

startServer();
