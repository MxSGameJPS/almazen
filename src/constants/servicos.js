export const SERVICOS = [
  {
    titulo: "Massagem Anti estresse",
    descricao: "Massagem anti stress, também conhecida como relaxante, é uma técnica com movimentos suaves de deslizamento e amassamento, realizada com óleo de semente de girassol e óleo essencial de lavanda. Essa combinação auxilia no combate ao stress, insônia, cansaço, ansiedade, fadiga mental e física. Proporciona intensa sensação de bem-estar e relaxamento.",
    categoria: "Massagens",
    duracoes: [
      { tempo: "50min", valor: "R$ 188,00" },
      { tempo: "80min", valor: "R$ 208,00" }
    ]
  },
  {
    titulo: "Massagem Clássica",
    descricao: "Movimentos suaves de deslizamento e amassamento, realizada com creme neutro. Visa relaxar os músculos, melhorar a circulação sanguínea e promover uma sensação geral de bem-estar. Proporciona intensa sensação de bem-estar e relaxamento.",
    categoria: "Massagens",
    duracoes: [
      { tempo: "30min", valor: "R$ 108,00" },
      { tempo: "50min", valor: "R$ 188,00" },
      { tempo: "80min", valor: "R$ 208,00" }
    ]
  },
  {
    titulo: "Shiatsu",
    descricao: "O Shiatsu é uma terapia corporal de origem Chinesa que atua nos meridianos para liberar o fluxo energético que está prejudicado. Eficaz contra dores nas costas, pescoço, ombros e dores de cabeça (cefaleias). Reduz estresse, ansiedade, insônia e sintomas de depressão. Realizada com a pessoa vestida, com roupas confortáveis.",
    categoria: "Massagens",
    duracoes: [
      { tempo: "30min", valor: "R$ 108,00" },
      { tempo: "50min", valor: "R$ 188,00" },
      { tempo: "80min", valor: "R$ 218,00" }
    ]
  },
  {
    titulo: "Drenagem Linfática Corporal",
    descricao: "A drenagem linfática é uma técnica de massagem especializada, caracterizada por movimentos suaves, lentos e rítmicos, que estimula o sistema linfático a eliminar o excesso de fluidos (edemas) e toxinas do corpo.",
    categoria: "Estética Corporal",
    duracoes: [
      { tempo: "50min", valor: "R$ 178,00" }
    ]
  },
  {
    titulo: "Acupuntura Sistêmica",
    descricao: "Técnica da Medicina Tradicional Chinesa que insere agulhas finas em pontos específicos do corpo para equilibrar a energia (Qi). Estimula o sistema nervoso para liberar neurotransmissores, promovendo alívio de dores, ação anti-inflamatória e melhora no bem-estar físico e emocional.",
    categoria: "Serviços Especiais",
    duracoes: [
      { tempo: "50min", valor: "R$ 168,00" }
    ]
  },
  {
    titulo: "Shiatsu + Reflexologia",
    descricao: "Combo que combina a técnica de Shiatsu para equilíbrio energético com a Reflexologia podal para alívio de tensões em pontos específicos dos pés.",
    categoria: "Combos",
    duracoes: [
      { tempo: "80min", valor: "R$ 238,00" }
    ]
  }
];

export const PLANOS = [
  { sessoes: 4, valorSessao: "R$ 148,00", valorPacote: "R$ 592,00", validade: "6 meses" },
  { sessoes: 6, valorSessao: "R$ 138,00", valorPacote: "R$ 828,00", validade: "6 meses" },
  { sessoes: 12, valorSessao: "R$ 128,00", valorPacote: "R$ 1.536,00", validade: "1 ano" },
  { sessoes: 24, valorSessao: "R$ 118,00", valorPacote: "R$ 2.832,00", validade: "1 ano" },
  { sessoes: 36, valorSessao: "R$ 108,00", valorPacote: "R$ 3.888,00", validade: "1 ano" },
  { sessoes: 48, valorSessao: "R$ 98,00", valorPacote: "R$ 4.704,00", validade: "1 ano" }
];

export const SERVICOS_PLANO = [
  "Massagem Clássica",
  "Massagem Aromática",
  "Massagem Anti estresse",
  "Massagem Ayurveda (Abhyanga)",
  "Candle Massage",
  "Massagem Desportiva",
  "Shiatsu",
  "Shiatsu Facial",
  "Reflexologia (Pés e Pernas)",
  "Drenagem Linfática Corporal",
  "Drenagem Linfática Corporal Gestante",
  "Massagem Clássica + Ventosaterapia",
  "Massagem Modeladora",
  "Massagem Drenomodeladora",
  "Limpeza de Pele",
  "Hidratação Facial + Luz de Led",
  "Massagem Facial + Hidratação Facial",
  "Hidratação Facial Vitamina \"C\"",
  "Acupuntura"
];
