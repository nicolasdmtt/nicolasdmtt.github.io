/* ============================================================
   LA DISCOTHÈQUE — logique commune
   Tu n'as normalement pas besoin de toucher à ce fichier.
   ============================================================ */

const owned = () => ALBUMS.filter(a => a.status === "owned");
const wishlist = () => ALBUMS.filter(a => a.status === "wishlist");

// Attribue à chaque album un numéro de catalogue stable,
// basé sur sa position dans data.js (comme un vrai numéro de label).
function catalogNumber(album) {
  const index = ALBUMS.findIndex(a => a.id === album.id);
  return "N\u00B0" + String(index + 1).padStart(3, "0");
}

function starStamp(rating) {
  // Note sur 10 -> pastille "chiffrée", pas des étoiles génériques.
  return rating.toFixed(1).replace(".", ",");
}

function formatDate(iso) {
  const [y, m, d] = iso.split("-");
  const mois = ["janv.","f\u00E9vr.","mars","avr.","mai","juin","juil.","ao\u00FBt","sept.","oct.","nov.","d\u00E9c."];
  return `${parseInt(d,10)} ${mois[parseInt(m,10)-1]} ${y}`;
}

/* ---------- HOMEPAGE ---------- */
function renderHome() {
  const own = owned();
  const want = wishlist();
  const avg = own.length
    ? (own.reduce((s, a) => s + a.rating, 0) / own.length).toFixed(1)
    : "—";

  document.getElementById("stat-owned").textContent = own.length;
  document.getElementById("stat-wishlist").textContent = want.length;
  document.getElementById("stat-avg").textContent = avg;

  const recent = [...own].sort((a, b) => b.dateAdded.localeCompare(a.dateAdded)).slice(0, 4);
  const grid = document.getElementById("recent-grid");
  grid.innerHTML = recent.map(a => sleeveCardHTML(a)).join("");
}

/* ---------- CARTE POCHETTE (réutilisée sur plusieurs pages) ---------- */
function sleeveCardHTML(album) {
  const link = album.status === "owned" ? `album.html?id=${album.id}` : null;
  const inner = `
    <div class="sleeve">
      <img src="${album.cover}" alt="Pochette de ${album.title}" loading="lazy">
      <span class="cat-tag">${catalogNumber(album)}</span>
      ${album.status === "owned" ? `<span class="rating-stamp">${starStamp(album.rating)}</span>` : ""}
    </div>
    <div class="sleeve-caption">
      <p class="sleeve-title">${album.title}</p>
      <p class="sleeve-artist">${album.artist} — ${album.year}</p>
    </div>`;
  return link
    ? `<a class="sleeve-card" href="${link}">${inner}</a>`
    : `<div class="sleeve-card sleeve-card--static">${inner}</div>`;
}

/* ---------- LISTE "POSSÉDÉS" ---------- */
function renderOwnedList() {
  const grid = document.getElementById("owned-grid");
  const searchInput = document.getElementById("search");
  const sortSelect = document.getElementById("sort");

  function draw() {
    let list = owned();
    const q = searchInput.value.trim().toLowerCase();
    if (q) {
      list = list.filter(a =>
        a.title.toLowerCase().includes(q) || a.artist.toLowerCase().includes(q)
      );
    }
    const sort = sortSelect.value;
    if (sort === "rating-desc") list.sort((a, b) => b.rating - a.rating);
    if (sort === "date-desc") list.sort((a, b) => b.dateAdded.localeCompare(a.dateAdded));
    if (sort === "artist-asc") list.sort((a, b) => a.artist.localeCompare(b.artist));

    grid.innerHTML = list.length
      ? list.map(a => sleeveCardHTML(a)).join("")
      : `<p class="empty-state">Aucun album ne correspond à ta recherche.</p>`;
  }

  searchInput.addEventListener("input", draw);
  sortSelect.addEventListener("change", draw);
  draw();
}

/* ---------- LISTE "ENVIES" ---------- */
function renderWishlist() {
  const grid = document.getElementById("wishlist-grid");
  const list = wishlist();
  grid.innerHTML = list.length
    ? list.map(a => sleeveCardHTML(a)).join("")
    : `<p class="empty-state">Ta liste d'envies est vide pour l'instant.</p>`;
}

/* ---------- PAGE DÉTAIL ---------- */
function renderAlbumDetail() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const album = ALBUMS.find(a => a.id === id);
  const container = document.getElementById("album-detail");

  if (!album) {
    container.innerHTML = `
      <div class="not-found">
        <p class="cat-tag">N\u00B0 ???</p>
        <h1>Album introuvable</h1>
        <p>Cet album n'existe pas ou n'est plus dans la collection.</p>
        <a class="back-link" href="albums.html">&larr; Retour à la collection</a>
      </div>`;
    document.title = "Album introuvable — La Discothèque";
    return;
  }

  document.title = `${album.title} — ${album.artist} — La Discothèque`;

  container.innerHTML = `
    <a class="back-link" href="albums.html">&larr; Retour à la collection</a>
    <div class="detail-layout">
      <div class="detail-cover">
        <img src="${album.cover}" alt="Pochette de ${album.title}">
        <span class="cat-tag cat-tag--big">${catalogNumber(album)}</span>
      </div>
      <div class="detail-info">
        <p class="eyebrow">${album.genre} · ${album.year} · ${album.format || "—"}</p>
        <h1>${album.title}</h1>
        <p class="detail-artist">${album.artist}</p>

        <div class="rating-block">
          <span class="rating-stamp rating-stamp--big">${starStamp(album.rating)}<small>/10</small></span>
          ${album.favoriteTrack ? `<span class="fav-track">Piste préférée : <strong>${album.favoriteTrack}</strong></span>` : ""}
        </div>

        <h2 class="liner-notes-heading">Notes de pochette</h2>
        <p class="liner-notes">${album.review || "Pas encore de review pour cet album."}</p>

        <p class="added-date">Ajouté le ${formatDate(album.dateAdded)}</p>
      </div>
    </div>`;
}
