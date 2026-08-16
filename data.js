/*
  ============================================================
  LA DISCOTHÈQUE — données des albums
  ============================================================
  C'est ici, et seulement ici, que tu dois modifier ton site
  au quotidien. Chaque bloc { ... } est un album.

  Pour AJOUTER un album : copie un bloc existant, colle-le,
  change les valeurs, ajoute une virgule après le bloc précédent.

  Champs :
    id           -> identifiant unique, sans espace ni accent
                    (sert dans l'URL, ex: "kind-of-blue")
    artist       -> nom de l'artiste
    title        -> titre de l'album
    year         -> année de sortie (nombre)
    genre        -> genre musical
    cover        -> URL de la pochette (jpg/png en ligne)
    format       -> "Vinyle", "CD", "Digital"...
    status       -> "owned"   = tu le possèdes
                     "wishlist" = tu le veux
    rating       -> note sur 10 (uniquement si status = "owned")
    favoriteTrack-> ton morceau préféré (facultatif)
    review       -> ta review, aussi longue que tu veux
    dateAdded    -> format "AAAA-MM-JJ", sert à trier les nouveautés
  ============================================================
*/

const ALBUMS = [
  {
    id: "brat",
    artist: "Charli XCX",
    title: "Brat",
    year: 2025,
    genre: "Pop",
    cover: "https://upload.wikimedia.org/wikipedia/commons/6/60/Charli_XCX_-_Brat_%28album_cover%29.png",
    format: "CD",
    status: "owned",
    rating: 9.0,
    favoriteTrack: "Everything is Romantic",
    review: "tbd",
    dateAdded: "2026-04-13"
  },
];
