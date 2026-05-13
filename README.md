# Achados VIP — Site de Links

## Estrutura do projeto

```
achadosvip/
├── index.html          → estrutura da página (não precisa editar)
├── css/
│   └── style.css       → estilos visuais
├── js/
│   ├── config.js       → ⭐ ARQUIVO PRINCIPAL — edite aqui
│   └── app.js          → lógica do site (não precisa editar)
└── assets/
    └── (coloque sua logo e imagens dos produtos aqui)
```

---

## Como personalizar

### Trocar a logo
1. Coloque o arquivo da logo (PNG ou JPG) dentro da pasta `assets/`
2. Abra `js/config.js` e edite:
```js
logo: "logo.png", // nome do seu arquivo
```

### Trocar as fontes
1. Acesse [fonts.google.com](https://fonts.google.com) e escolha suas fontes
2. Substitua o `<link>` de fontes no `index.html`
3. Abra `js/config.js` e edite:
```js
fonts: {
  titulo: "'NomeDaFonte', sans-serif",
  corpo:  "'OutraFonte', sans-serif",
},
```

### Adicionar produto
Em `js/config.js`, adicione um bloco dentro de `produtos: [...]`:
```js
{
  id: "004",
  nome: "Nome do Produto",
  descricao: "Categoria — detalhe",
  estrelas: "4.8",
  vendidos: "1mil+ vendidos",
  emoji: "🏠",
  imagem: "",           // ou "produto004.jpg" se tiver foto
  shopee: "https://...",
  ml:     "https://...",
  tags:   "palavras chave extras para busca",
},
```

### Trocar cores
Em `js/config.js`, edite os valores em `cores: { ... }`.

---

## Como publicar no GitHub Pages

1. Crie um repositório no GitHub (ex: `achadosvip`)
2. Envie todos os arquivos para o repositório
3. Vá em **Settings → Pages**
4. Em **Source**, selecione `main` e pasta `/root`
5. Clique em **Save**
6. Seu site estará em: `https://seuusuario.github.io/achadosvip`

Quando comprar o domínio, configure o **Custom domain** nessa mesma página.
