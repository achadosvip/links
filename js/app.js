// ============================================================
//  ACHADOS VIP — APP PRINCIPAL
//  Lê o CONFIG e monta header, produtos e rodapé dinamicamente
// ============================================================

document.addEventListener("DOMContentLoaded", () => {
  aplicarVariaveisCss();
  montarHeader();
  montarProdutos();
  montarRodape();
});

// ── VARIÁVEIS CSS (cores e fontes do config) ──────────────────
function aplicarVariaveisCss() {
  const r = document.documentElement.style;
  const c = CONFIG.cores;
  r.setProperty("--verde", c.verde);
  r.setProperty("--rosa", c.rosa);
  r.setProperty("--rosa-claro", c.rosaClaro);
  r.setProperty("--fundo", c.fundo);
  r.setProperty("--texto", c.texto);
  r.setProperty("--texto-suave", c.textoSuave);
  r.setProperty("--font-titulo", CONFIG.fonts.titulo);
  r.setProperty("--font-corpo", CONFIG.fonts.corpo);
}

// ── HEADER ───────────────────────────────────────────────────
function montarHeader() {
  const b = CONFIG.brand;

  // Logo
  const logoWrap = document.getElementById("logoWrap");
  if (b.logo) {
    logoWrap.innerHTML = `<img src="assets/${b.logo}" alt="${b.logoAlt}" class="logo-img" />`;
  } else {
    logoWrap.innerHTML = `
      <div class="logo-text-circle">
        <span>${b.nome.replace(" ", "<br>")}</span>
      </div>`;
  }

  document.getElementById("brandNome").textContent = "";
  document.getElementById("brandSlogan").textContent = b.slogan;

  const igLink = document.getElementById("igLink");
  igLink.href = b.instagram;
  igLink.querySelector("span").textContent = b.instagramHandle;
}

// ── PRODUTOS ─────────────────────────────────────────────────
function montarProdutos() {
  const lista = document.getElementById("productList");
  lista.innerHTML = "";

  CONFIG.produtos.forEach((p, i) => {
    const card = document.createElement("div");
    card.className = `product-card ${p.featured ? "featured-card" : ""}`;
    card.style.animationDelay = `${i * 0.1}s`;

    // Termos de busca: id, "prod 001", nome, tags
    const termoBusca = [
      p.id,
      `prod ${p.id}`,
      `produto ${p.id}`,
      p.nome.toLowerCase(),
      p.descricao.toLowerCase(),
      p.tags.toLowerCase(),
    ].join(" ");
    card.dataset.busca = termoBusca;

    // Thumbnail
    const thumbHtml = p.imagem
      ? `<div class="product-thumb"><img src="assets/${p.imagem}" alt="${p.nome}" /></div>`
      : `<div class="product-thumb">${p.emoji}</div>`;

    // Estrelas + vendidos
    const starsHtml = `★ ${p.estrelas}${p.vendidos ? " · " + p.vendidos : ""}`;

    card.innerHTML = `
      <div class="product-header">
        ${thumbHtml}
        <div class="product-info">

      ${p.badge ? `<div class="vip-badge">${p.badge}</div>` : ""}

          <span class="product-badge">Prod ${p.id}</span>
          <h3>${p.nome}</h3>
          <p class="desc">${p.descricao}</p>
          <div class="product-stars">${starsHtml}</div>
        </div>
      </div>
      <div class="product-links">
        <a href="${p.shopee}" target="_blank" class="btn-shopee">🛒 Ver na Shopee</a>
        <a href="${p.ml}"     target="_blank" class="btn-ml">📦 Ver no Mercado Livre</a>
      </div>`;

    lista.appendChild(card);
  });
}

// ── BUSCA ─────────────────────────────────────────────────────
function filtrarProdutos() {
  const termo = document.getElementById("searchInput").value.toLowerCase().trim();
  const cards = document.querySelectorAll(".product-card");
  let visiveis = 0;

  cards.forEach(card => {
    const match = card.dataset.busca.includes(termo);
    card.style.display = match ? "" : "none";

    if (match) {
      visiveis++;
      if (termo.length > 0) {
        card.classList.remove("destacado");
        void card.offsetWidth; // força reflow para reiniciar animação
        card.classList.add("destacado");
      } else {
        card.classList.remove("destacado");
      }
    } else {
      card.classList.remove("destacado");
    }
  });

  document.getElementById("emptyState").style.display =
    visiveis === 0 ? "block" : "none";
}

// Expõe para o HTML
window.filtrarProdutos = filtrarProdutos;

// ── RODAPÉ ───────────────────────────────────────────────────
function montarRodape() {
  const b = CONFIG.brand;
  document.getElementById("footerNome").textContent = b.nome;
  document.getElementById("footerSlogan").textContent = b.slogan;
  const footerIg = document.getElementById("footerIg");
  footerIg.href = b.instagram;
  footerIg.textContent = b.instagramHandle;
}
