// ============================================================
//  ACHADOS VIP — CONFIGURAÇÃO CENTRAL
//  Edite aqui para personalizar o site sem tocar em outros arquivos
// ============================================================

const CONFIG = {

  // ----------------------------------------------------------
  // MARCA
  // ----------------------------------------------------------
  brand: {
    nome: "Achados VIP",
    slogan: "Organização & Utilidades — só o que vale",
    instagram: "https://instagram.com/achadosvip.br",
    instagramHandle: "@achadosvip.br",

    // Logo: coloque o arquivo em assets/ e informe o nome aqui.
    // Se deixar vazio ("") será exibido o texto do nome no lugar.
    logo: "", // ex: "logo.png"
    logoAlt: "Achados VIP",
  },

  // ----------------------------------------------------------
  // TIPOGRAFIA
  // Qualquer fonte do Google Fonts funciona aqui.
  // Basta trocar o nome e atualizar o link no <head> do index.html
  // ----------------------------------------------------------
  fonts: {
    titulo: "'Montserrat', sans-serif",   // Fonte dos títulos
    corpo:  "'Open Sans', sans-serif",    // Fonte do texto geral
  },

  // ----------------------------------------------------------
  // CORES
  // ----------------------------------------------------------
  cores: {
    verde:      "#7a9e7e",
    rosa:       "#c08080",
    rosaClaro:  "#f0dada",
    fundo:      "#faf8f6",
    texto:      "#2e2e2e",
    textoSuave: "#7a7a7a",
  },

  // ----------------------------------------------------------
  // PRODUTOS
  // Adicione, remova ou edite produtos aqui.
  // Campos:
  //   id        → número do produto (ex: "001")
  //   nome      → nome exibido no card
  //   descricao → subtítulo do card
  //   estrelas  → nota (ex: "4.9")
  //   vendidos  → texto opcional (ex: "3mil+ vendidos")
  //   emoji     → ícone exibido enquanto não há imagem
  //   imagem    → nome do arquivo em assets/ (ou "" para usar emoji)
  //   shopee    → link afiliado Shopee
  //   ml        → link afiliado Mercado Livre
  //   tags      → palavras extras para a busca
  // ----------------------------------------------------------
  produtos: [
    {
      id: "001",
      nome: "Jogo de Taças Diamond Âmbar",
      descricao: "Cozinha & Mesa — 6 peças",
      estrelas: "4.8",
      vendidos: "",
      emoji: "🥂",
      imagem: "",
      shopee: "SEU_LINK_SHOPEE_001",
      ml:     "SEU_LINK_ML_001",
      tags:   "taça vidro mesa elegante diamond âmbar",
    },
    {
      id: "002",
      nome: "Organizador Giratório de Alimentos",
      descricao: "Cozinha — 6 divisórias",
      estrelas: "4.7",
      vendidos: "",
      emoji: "🫙",
      imagem: "",
      shopee: "SEU_LINK_SHOPEE_002",
      ml:     "SEU_LINK_ML_002",
      tags:   "organizador giratório alimentos grãos compartimentos cozinha",
    },
    {
      id: "003",
      nome: "Porta Tempero Giratório Inox",
      descricao: "Cozinha — 16 potes",
      estrelas: "4.9",
      vendidos: "3mil+ vendidos",
      emoji: "🧂",
      imagem: "",
      shopee: "SEU_LINK_SHOPEE_003",
      ml:     "SEU_LINK_ML_003",
      tags:   "tempero inox pote armário cozinha giratório organização",
    },
  ],
};
