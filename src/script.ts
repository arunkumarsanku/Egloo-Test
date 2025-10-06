type IconName = "wine" | "fork" | "lotus" | "clock";   // Icon types

interface Card {  // Card structure
  img: string;
  title: string;
  desc: string;
  price: string;
  iva: string;
  duration: number;
  icons: IconName[];
  wide: boolean;
}

const ICONS: Record<IconName, string> = { // Icon paths
  wine:  "./assets/images/glass-with-wine.png",
  fork:  "./assets/images/fork.png",
  lotus: "./assets/images/lotus.png",
  clock: "./assets/images/clock.png",
};

const CARDS: Card[] = [                   // Card data
  {
    img: "./assets/images/3-wines-experience.png",
    title: "3 WINES EXPERIENCE",
    desc: "Degustazione di tre vini al Rifugio del Vino e visita alla cantina e alla cantina",
    price: "€25,00 a persona",
    iva: "IVA INCLUSA",
    duration: 60,
    icons: ["wine", "clock"],
    wide: false
  },
  {
    img: "./assets/images/5-wines-experience.png",
    title: "5 WINES EXPERIENCE",
    desc: "Degustazione di 5 vini del territorio presso il Rifugio del Vino e visita in cantina e barricaia",
    price: "€34,00 a persona",
    iva: "IVA INCLUSA",
    duration: 90,
    icons: ["wine", "clock"],
    wide: false
  },
  {
    img: "./assets/images/wine-and-cheese-experience.png",
    title: "WINE AND CHEESE EXPERIENCE",
    desc: "Degustazione di 5 vini selezionati in abbinamento a 6 formaggi locali e visita alla cantina e barricaia",
    price: "€45,00 a persona",
    iva: "IVA INCLUSA",
    duration: 90,
    icons: ["wine", "fork", "clock"],
    wide: false
  },
  {
    img: "./assets/images/top-wines-experience.png",
    title: "TOP WINES EXPERIENCE",
    desc: "Degustazione di 5 vini di alta qualità accompagnati da un tagliere della gastronomia locale e visita alla cantina e barricaia",
    price: "€65,00 a persona",
    iva: "IVA INCLUSA",
    duration: 100,
    icons: ["wine", "fork", "clock"],
    wide: false
  },
  {
    img: "./assets/images/coteau-la-tour-experience.png",
    title: "CÔTEAU LA TOUR EXPERIENCE",
    desc: "Degustazione di 5 vini accompagnati da un tagliere della gastronomia locale e visita in cantina e barricaia. Tour del vigneto di Côteau e brindisi nella torre medievale",
    price: "€75,00 a persona",
    iva: "IVA INCLUSA",
    duration: 120,
    icons: ["wine", "lotus", "clock"],
    wide: false
  },
  {
    img: "./assets/images/winemakers-experience.png",
    title: "WINEMAKER’S EXPERIENCE",
    desc: "Scopri il mondo, raccontato dal nostro enologo Raffaele. Visita della cantina e degustazione di 5 vini",
    price: "€90,00 a persona",
    iva: "IVA inclusa",
    duration: 100,
    icons: ["wine", "clock"],
    wide: false
  },
  {
    img: "./assets/images/coteau-la-tour-experience2.png",
    title: "CÔTEAU LA TOUR EXPERIENCE PLUS",
    desc: "Degustazione di 5 vini accompagnati da un tagliere della gastronomia locale e visita in cantina e barricaia. Tour del vigneto di Côteau e brindisi nella torre medievale",
    price: "A partire da €346,00",
    iva: "IVA INCLUSA",
    duration: 90,
    icons: ["wine", "fork", "lotus", "clock"],
    wide: true
  }
];

const escapeHtml = (s: string): string => // Escape HTML special characters
  String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

function renderIcons(icons: IconName[], duration: number): string { // Render icons HTML
  return `
    <div class="icons">
      ${icons.map((name) => {
        const src = ICONS[name];
        const alt = name.charAt(0).toUpperCase() + name.slice(1);
        if (name === "clock") {
          return `<span class="icon"><img src="${src}" alt="${alt}"> ${escapeHtml(duration.toString())}’</span>`;
        }
        return `<span class="icon"><img src="${src}" alt="${alt}"></span>`;
      }).join("")}
    </div>`;
}

function renderCard(card: Card): string { // Render card HTML
  const wideClass = card.wide ? "card full-width" : "card";
  return `
    <article class="${wideClass}" id="${card.title.replace(/\s+/g, '-')}">
      <img src="${escapeHtml(card.img)}" alt="${escapeHtml(card.title)}" loading="lazy">
      <div class="card-content">
        ${renderIcons(card.icons, card.duration)}
        <h3>${escapeHtml(card.title)}</h3>
        <p>${escapeHtml(card.desc)}</p>
        <div class="price-block">
          <span class="label">PREZZO</span>
          <div class="price">
            <span class="amount">${escapeHtml(card.price)}</span>
            <span class="iva">${escapeHtml(card.iva)}</span>
          </div>
        </div>
        <button aria-label="View details of ${escapeHtml(card.title)}">
          <span>Dettagli</span>
          <span>→</span>
        </button>
      </div>
    </article>`;
}

function renderMenuItem(card: Card): string { // Render menu item HTML
  return `
    <li>
      <a href="#${card.title.replace(/\s+/g, '-')}">
        <span class="title">${escapeHtml(card.title)}</span>
      </a>
    </li>`;
}

document.addEventListener("DOMContentLoaded", () => { // On DOM ready
  const cardsContainer = document.getElementById("cards");
  const menu = document.getElementById("experience-menu");

  if (cardsContainer) cardsContainer.innerHTML = CARDS.map(renderCard).join("");
  if (menu) menu.innerHTML = CARDS.map(renderMenuItem).join("");
});
