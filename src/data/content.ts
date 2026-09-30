export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  features: string[];
  recommendedInterval: string;
  category: 'mecanica' | 'vedacao' | 'vidros' | 'modernizacao' | 'consultoria';
}

export interface TestimonialItem {
  id: string;
  author: string;
  role: string;
  condo: string;
  location: string;
  problem: string;
  solution: string;
  rating: number;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: 'tecnica' | 'garantia' | 'custo';
}

export const SUPPORTED_SYSTEMS = [
  { name: 'Reiki', note: 'Todos os modelos (City, Up, Skin)' },
  { name: 'Blindex Sacadas', note: 'Trilhos originais e adaptados' },
  { name: 'Stanley / Roll-Up', note: 'Sistemas articulados e retráteis' },
  { name: 'Mansur / Sanglass', note: 'Roldanas e travas de segurança' },
  { name: 'EuroGlass / Vetromani', note: 'Perfis europeus e nacionais' },
  { name: 'Sistemas Patenteados', note: 'Peças usinadas sob medida' },
  { name: 'Marcas Descontinuadas', note: 'Empresas extintas pós-2010' },
  { name: 'Projetos Especiais', note: 'Sacadas em curva e pé-direito duplo' },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'manutencao-sacadas',
    number: '01',
    title: 'Manutenção de Sacadas',
    shortDesc: 'Revisão periódica completa e prevenção estrutural preventiva para manter a suavidade e a segurança do envidraçamento.',
    fullDesc: 'Checklist rigoroso em até 28 pontos críticos, inspeção dos pontos de fixação no teto e guarda-corpo, reaperto geral e lubrificação técnica.',
    features: ['Inspeciona parafusos e chumbadores', 'Verifica prumo de todas as lâminas', 'Aumenta a vida útil do sistema'],
    recommendedInterval: 'Preventiva a cada 12 meses',
    category: 'mecanica',
  },
  {
    id: 'substituicao-roldanas',
    number: '02',
    title: 'Substituição de Roldanas',
    shortDesc: 'Troca por roldanas blindadas em aço inox 304 e rolamentos náuticos que não enferrujam nem travam com a maresia.',
    fullDesc: 'Substituição do conjunto de roldanas superiores e inferiores por rolamentos de alta resistência e eixos maciços em aço inoxidável.',
    features: ['Rolamento blindado contra poeira e maresia', 'Deslizamento leve com a ponta dos dedos', 'Nylon náutico de alta durabilidade'],
    recommendedInterval: 'Troca recomendada a cada 2 a 3 anos',
    category: 'mecanica',
  },
  {
    id: 'alinhamento-sistema',
    number: '03',
    title: 'Alinhamento do Sistema',
    shortDesc: 'Regulagem milimétrica de prumo e nivelamento dos trilhos, eliminando folgas e riscos de choques entre vidros.',
    fullDesc: 'Calibração individual de altura e nível por folha de vidro temperado, ajustando a saída de recolhimento para evitar atritos.',
    features: ['Elimina folgas e barulhos no vento', 'Garante abertura de 90° perfeita', 'Previne quebras por torção'],
    recommendedInterval: 'Reajuste após ventanias ou folgas',
    category: 'mecanica',
  },
  {
    id: 'substituicao-vidros',
    number: '04',
    title: 'Substituição de Vidros',
    shortDesc: 'Reposição de lâminas de vidro temperado ou laminado trincadas, quebradas ou manchadas no gabarito exato.',
    fullDesc: 'Medição técnica e instalação de novos vidros com lapidação profissional e perfis usinados sob medida para integrar perfeitamente ao seu trilho antigo.',
    features: ['Vidro temperado normatizado NBR 14698', 'Lapidação e furação sob medida', 'Mesma tonalidade do conjunto'],
    recommendedInterval: 'Imediato em caso de avaria',
    category: 'vidros',
  },
  {
    id: 'eliminacao-vazamentos',
    number: '05',
    title: 'Eliminação de Vazamentos',
    shortDesc: 'Vedação hidrostática perimetral com silicone neutro estrutural de cura UV para estanqueidade total contra chuvas fortes.',
    fullDesc: 'Remoção do silicone ressecado antigo, tratamento de limpeza dos perfis de alumínio e aplicação de polímero de silicone resistente a intempéries.',
    features: ['Silicone neutro não corrosivo ao alumínio', 'Bloqueio de água no piso e móveis', 'Proteção contra poeira e ventos'],
    recommendedInterval: 'Renovação a cada 2 anos',
    category: 'vedacao',
  },
  {
    id: 'adaptacao-maquinas',
    number: '06',
    title: 'Adaptação para Máquinas',
    shortDesc: 'Ajuste e modificação de perfis para passagem e encaixe de tubulações de ar-condicionado, cortinas ou móveis.',
    fullDesc: 'Recorte técnico e usinagem de saídas para viabilizar a instalação de condensadoras de ar-condicionado ou persianas sem comprometer a vedação.',
    features: ['Não compromete a estrutura da sacada', 'Vedação técnica ao redor das saídas', 'Solução sob medida'],
    recommendedInterval: 'Sob demanda em reformas',
    category: 'modernizacao',
  },
  {
    id: 'colagem-perfis',
    number: '07',
    title: 'Colagem de Perfis',
    shortDesc: 'Refixação química e mecânica do vidro ao perfil leito de alumínio com adesivo estrutural de alta performance.',
    fullDesc: 'Colagem com elastômero de alta adesão e trava de segurança para evitar descolamentos e desprendimento de vidros da calha de alumínio.',
    features: ['Adesivo de cura neutra de grau industrial', 'Prevenção contra queda de lâminas', 'Alinhamento imediato no leito'],
    recommendedInterval: 'Imediato ao notar folga no perfil',
    category: 'mecanica',
  },
  {
    id: 'substituicao-borrachas',
    number: '08',
    title: 'Substituição de Borrachas',
    shortDesc: 'Troca de gaxetas, vedações flexíveis e escovas de polipropileno hidrorrepelentes que ressecaram com sol e chuva.',
    fullDesc: 'Substituição de fita escova náutica com barreira central impermeável e perfis flexíveis de borracha interfolhas.',
    features: ['Redução de barulho de vento e ruído externo', 'Escova com fita impermeável de silicone', 'Encaixe preciso nos perfis'],
    recommendedInterval: 'Revisão preventiva anual',
    category: 'vedacao',
  },
  {
    id: 'destravamento-vidros',
    number: '09',
    title: 'Destravamento de Vidros',
    shortDesc: 'Desbloqueio de emergência para lâminas emperradas, presas ou atravessadas nas curvas e guias de estacionamento.',
    fullDesc: 'Atendimento técnico para desvencilhar folhas de vidro presas sem forçar os trilhos ou correr risco de quebrar o painel.',
    features: ['Atendimento rápido de emergência', 'Desobstrução de sujeira e oxidação', 'Restauração do curso correto'],
    recommendedInterval: 'Atendimento corretivo pontual',
    category: 'mecanica',
  },
  {
    id: 'troca-componentes',
    number: '10',
    title: 'Troca de Componentes',
    shortDesc: 'Substituição de peças desgastadas: puxadores, fechos, travas anti-vento, guias laterais, cordoalhas e roldanas de saída.',
    fullDesc: 'Contamos com catálogo completo de peças de reposição para todas as marcas e fabricação própria de componentes descontinuados.',
    features: ['Peças originais ou usinadas sob medida', 'Componentes anticorrosivos', 'Restabelecimento do travamento'],
    recommendedInterval: 'Substituição conforme desgaste',
    category: 'mecanica',
  },
  {
    id: 'reforma-modernizacao',
    number: '11',
    title: 'Reforma e Modernização',
    shortDesc: 'Restauração completa do sistema antigo de envidraçamento, devolvendo a estética e a operação suave de uma sacada nova.',
    fullDesc: 'Desmontagem técnica parcial, troca de roldanas, escovas, vedações, reaperto e polimento dos trilhos por uma fração do preço de um sistema novo.',
    features: ['Economia de até 70% vs troca total', 'Sem necessidade de obras no condomínio', 'Garantia renovada por escrito'],
    recommendedInterval: 'Ideal para sacadas com mais de 5 anos',
    category: 'modernizacao',
  },
  {
    id: 'modernizacao-abertura',
    number: '12',
    title: 'Modernização da Abertura',
    shortDesc: 'Ajuste ou substituição da boca de saída e sistema de pivô para recolhimento e estacionamento sem trancos.',
    fullDesc: 'Upgrade dos componentes de rotação e acoplamento das folhas de vidro no ponto de estacionamento para recolhimento fluido.',
    features: ['Abertura mais rápida e intuitiva', 'Menos força necessária para virar as folhas', 'Evita raspagem do vidro na saída'],
    recommendedInterval: 'Quando houver dificuldade no estacionamento',
    category: 'modernizacao',
  },
  {
    id: 'orientacao-tecnica',
    number: '13',
    title: 'Orientação Técnica',
    shortDesc: 'Consultoria e instrução de uso correto, higienização adequada dos trilhos e dicas de conservação periódica.',
    fullDesc: 'Nossos técnicos orientam o morador sobre os movimentos corretos de manuseio para evitar esforço desnecessário e garantir durabilidade.',
    features: ['Manual prático de cuidados diários', 'Dicas de produtos para limpeza de trilhos', 'Suporte pós-atendimento'],
    recommendedInterval: 'Incluso em todas as nossas visitas',
    category: 'consultoria',
  },
  {
    id: 'laudos-seguranca',
    number: '14',
    title: 'Vistoria e Relatório de Segurança',
    shortDesc: 'Vistoria completa e emissão de Comprovante de Conformidade Técnica para o seu condomínio (NBR 16259).',
    fullDesc: 'Documento de vistoria técnica e verificação de estabilidade para prestação de contas à administração do condomínio e garantia de segurança.',
    features: ['Validade perante o condomínio', 'Certificação de estabilidade estrutural', 'Checklist detalhado de 28 pontos'],
    recommendedInterval: 'Recomendado anualmente por condomínios',
    category: 'consultoria',
  },
  {
    id: 'limpeza-pos-obra',
    number: '15',
    title: 'Limpeza Pós Obra',
    shortDesc: 'Remoção de resíduos de reforma, poeira de gesso, graxa velha, colas e poeira acumulada nos trilhos e frestas.',
    fullDesc: 'Higienização profunda das calhas de alumínio e canais de rolamento para eliminar detritos que aceleram o travamento das roldanas.',
    features: ['Aspirador industrial para calhas profundas', 'Solventes neutros biodegradáveis', 'Desobstrução total dos drenos de água'],
    recommendedInterval: 'Após reformas ou anualmente',
    category: 'vedacao',
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 't1',
    author: 'Dr. Marcelo Guimarães',
    role: 'Proprietário de Cobertura',
    condo: 'Condomínio Edifício Mirante do Parque',
    location: 'Vila Mariana, São Paulo',
    problem: 'Três vidros emperrados e a empresa que instalou em 2018 sumiu do mercado. Duas vidraçarias disseram que eu teria que trocar os 18 metros de sacada por R$ 26 mil.',
    solution: 'A SacadaPrime identificou que era o modelo antigo com patente de trava. Eles usinaram as guias no próprio dia e trocaram as roldanas por inox. Gastei uma fração do valor e a sacada ficou mais leve do que quando nova.',
    rating: 5,
  },
  {
    id: 't2',
    author: 'Patrícia Alencar',
    role: 'Arquiteta & Síndica',
    condo: 'Residencial Reserva Imperial',
    location: 'Alphaville, Barueri',
    problem: 'Vários apartamentos com infiltração severa no rodapé durante chuvas de vento, danificando tacos de madeira. Precisávamos de relatório de revisão preventiva e peças resistentes para 32 sacadas.',
    solution: 'Fizeram um mutirão preventivo impecável com troca de vedações em silicone estrutural e escovas náuticas. Zero infiltrações no último verão e relatório aprovado sem ressalvas na assembleia.',
    rating: 5,
  },
  {
    id: 't3',
    author: 'Ricardo Fontes Siqueira',
    role: 'Empresário',
    condo: 'Condomínio Grand Tower',
    location: 'Tatuapé, São Paulo',
    problem: 'Uma lâmina de vidro temperado estava com folga excessiva e raspando no trilho inferior, dando medo de abrir nos dias de vento no 22º andar.',
    solution: 'Atendimento pontual no dia seguinte. O técnico substituiu o conjunto de rolamentos e regulou todos os 14 vidros. A pontualidade e a limpeza do serviço foram impressionantes.',
    rating: 5,
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'A empresa que instalou minha sacada fechou e sumiu. Vocês conseguem consertar mesmo assim?',
    answer: 'Sim! Esse é exatamente o motivo pelo qual existimos desde 2014. Muitas instaladoras mudam de razão social ou encerram as atividades para fugir de garantias. Nós somos especialistas exclusivamente em manutenção multimarca. Conhecemos todos os trilhos do mercado e temos peças para modelos antigos e raros.',
    category: 'tecnica',
  },
  {
    question: 'E se a minha peça não for mais fabricada no mercado?',
    answer: 'Esse é o nosso maior diferencial: nós mesmos fabricamos e usinamos peças sob medida em nossa ferramentaria técnica (guias, saídas, roldanas especiais e travas). Você não precisa gastar milhares de reais trocando todo o envidraçamento só porque uma peça plástica quebrou.',
    category: 'tecnica',
  },
  {
    question: 'Qual a garantia dos serviços e das peças de reposição?',
    answer: 'Oferecemos garantia de 1 a 2 anos por escrito em nossos serviços e componentes, com emissão de nota fiscal e certificado. Nossas roldanas utilizam eixos e rolamentos em aço inox 304 com proteção náutica contra maresia e corrosão.',
    category: 'garantia',
  },
  {
    question: 'Vocês emitem comprovante de revisão e relatório para o condomínio?',
    answer: 'Sim! Emitimos o Comprovante de Manutenção Preventiva e Relatório Técnico de Conformidade segundo as diretrizes da Norma ABNT NBR 16259 para atender a todas as exigências e solicitações das administrações de condomínio.',
    category: 'garantia',
  },
  {
    question: 'Preciso trocar todo o envidraçamento ou a manutenção resolve?',
    answer: 'Em mais de 96% dos casos, o vidro temperado e os perfis estruturais de alumínio estão perfeitamente intactos! O que desgasta naturally são as roldanas plásticas, escovas de vedação, silicone e travas mecânicas. A manutenção especializada recupera 100% da segurança e leveza por uma fração do preço de uma sacada nova.',
    category: 'custo',
  },
  {
    question: 'Como faço para receber um orçamento rápido?',
    answer: 'É muito simples: basta nos enviar uma foto ou um vídeo curto da sua sacada via WhatsApp mostrando o problema (ex: vidro emperrado ou infiltração). Com isso já conseguimos fazer uma pré-avaliação do sistema e fornecer a estimativa de custos com agendamento imediato.',
    category: 'custo',
  },
];

export const STATS = [
  { value: '2014', label: 'Ano de Fundação', detail: 'Mais de uma década de dedicação exclusiva' },
  { value: '+12.400', label: 'Sacadas Restauradas', detail: 'Sem necessidade de troca do sistema completo' },
  { value: '100%', label: 'Marcas Atendidas', detail: 'Estoque ativo e usinagem de peças descontinuadas' },
  { value: 'Até 70%', label: 'Economia Real', detail: 'Custo-benefício incomparável vs nova instalação' },
];

