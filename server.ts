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

// Search Grounding Blog Search Endpoint
app.post('/api/blog/search', async (req, res) => {
  try {
    const { query } = req.body;
    if (!query || typeof query !== 'string') {
      return res.status(400).json({ error: 'Termo de busca é obrigatório' });
    }

    const ai = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    });

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
