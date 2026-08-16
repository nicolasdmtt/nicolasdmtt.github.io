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
    id: "kind-of-blue",
    artist: "Miles Davis",
    title: "Kind of Blue",
    year: 1959,
    genre: "Jazz",
    cover: "https://upload.wikimedia.org/wikipedia/en/9/9c/MilesDavisKindofBlue.jpg",
    format: "Vinyle 33T",
    status: "owned",
    rating: 9.5,
    favoriteTrack: "So What",
    review: "L'album de jazz par excellence. Une économie de notes absolue, chaque silence compte autant que chaque phrase. Je le repasse à chaque premier café du dimanche.",
    dateAdded: "2024-01-12"
  },
  {
    id: "in-rainbows",
    artist: "Radiohead",
    title: "In Rainbows",
    year: 2007,
    genre: "Rock alternatif",
    cover: "https://upload.wikimedia.org/wikipedia/en/1/14/In_Rainbows_Official_Cover.jpg",
    format: "Vinyle 33T",
    status: "owned",
    rating: 9,
    favoriteTrack: "Reckoner",
    review: "Le son le plus chaud du groupe. 'Reckoner' à lui seul justifie l'achat. Une production qui respire, jamais surchargée.",
    dateAdded: "2024-02-03"
  },
  {
    id: "blonde",
    artist: "Frank Ocean",
    title: "Blonde",
    year: 2016,
    genre: "R&B",
    cover: "https://upload.wikimedia.org/wikipedia/en/9/9a/Blonde_-_Frank_Ocean.jpeg",
    format: "Digital",
    status: "owned",
    rating: 8.5,
    favoriteTrack: "Self Control",
    review: "Fragile et dense à la fois. Il faut plusieurs écoutes pour que les morceaux se révèlent, mais une fois que ça accroche, ça ne lâche plus.",
    dateAdded: "2024-04-18"
  },
  {
    id: "unknown-pleasures",
    artist: "Joy Division",
    title: "Unknown Pleasures",
    year: 1979,
    genre: "Post-punk",
    cover: "https://upload.wikimedia.org/wikipedia/en/1/1a/JoyDivisionUnknownPleasuresalbumcover.jpg",
    format: "Vinyle 33T",
    status: "wishlist",
    dateAdded: "2024-05-02"
  },
  {
    id: "mezzanine",
    artist: "Massive Attack",
    title: "Mezzanine",
    year: 1998,
    genre: "Trip-hop",
    cover: "https://upload.wikimedia.org/wikipedia/en/e/ea/Mezzanine_%28Massive_Attack_album%29.jpg",
    format: "Vinyle 33T",
    status: "wishlist",
    dateAdded: "2024-06-20"
  }
];
