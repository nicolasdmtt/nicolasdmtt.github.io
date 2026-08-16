# La Discothèque

Un site statique pour cataloguer les albums que tu possèdes (avec tes reviews)
et ceux que tu veux. Aucun serveur, aucune base de données : tout est dans un
fichier JavaScript que tu modifies à la main.

## Architecture

```
index.html          Accueil : stats + derniers ajouts
albums.html          Liste des albums possédés (recherche + tri)
wishlist.html        Liste des albums voulus
album.html?id=...    Fiche détail générée dynamiquement (review, note, etc.)
css/style.css        Style du site
js/data.js            <-- LE SEUL FICHIER À MODIFIER AU QUOTIDIEN
js/app.js             Logique d'affichage (pas besoin d'y toucher)
```

La fiche détail n'est pas un fichier par album : `album.html` lit le
paramètre `?id=` dans l'URL et va chercher l'album correspondant dans
`js/data.js`. Ça évite de créer une page HTML à chaque nouvel achat.

## Ajouter / modifier un album

Ouvre `js/data.js` et ajoute un bloc dans le tableau `ALBUMS`, sur le
modèle des exemples déjà présents. Les commentaires en haut du fichier
expliquent chaque champ. C'est le seul fichier que tu auras à toucher
pour faire vivre le site.

## Mettre le site en ligne sur GitHub Pages (gratuit)

1. **Crée un compte GitHub** si tu n'en as pas déjà un : https://github.com

2. **Crée un nouveau dépôt (repository)**
   - Clique sur le "+" en haut à droite → "New repository"
   - Nom au choix, par exemple `ma-discotheque`
   - Laisse-le en "Public"
   - Ne coche PAS "Add a README" (on a déjà le nôtre)
   - Clique sur "Create repository"

3. **Envoie les fichiers du site**
   - Sur la page du dépôt vide, clique sur "uploading an existing file"
   - Glisse-dépose TOUT le contenu de ce dossier (`index.html`,
     `albums.html`, `wishlist.html`, `album.html`, le dossier `css/`,
     le dossier `js/`, ce `README.md`) — pas le dossier lui-même,
     son contenu
   - En bas de page, clique sur "Commit changes"

4. **Active GitHub Pages**
   - Dans le dépôt, va dans "Settings" (en haut)
   - Dans le menu de gauche, clique sur "Pages"
   - Sous "Build and deployment" → "Source", choisis "Deploy from a branch"
   - Sous "Branch", choisis `main` et le dossier `/ (root)`, puis "Save"

5. **Récupère ton lien**
   - Après 1 à 2 minutes, rafraîchis la page "Pages" : un bandeau vert
     affiche l'URL de ton site, du type :
     `https://ton-pseudo.github.io/ma-discotheque/`

## Mettre à jour le site après le premier envoi

Pour chaque nouvel album, deux façons de faire :

- **Depuis le navigateur** (le plus simple) : va dans le dépôt sur
  github.com → ouvre `js/data.js` → clique sur l'icône crayon (Edit) →
  ajoute ton bloc d'album → "Commit changes". Le site se met à jour
  automatiquement en une minute ou deux.
- **En local avec Git**, si tu es à l'aise avec la ligne de commande :
  modifie `js/data.js`, puis
  ```
  git add js/data.js
  git commit -m "Ajout d'un album"
  git push
  ```

## Tester en local avant de publier

Double-clique simplement sur `index.html` : le site fonctionne sans
serveur, directement dans le navigateur, grâce au choix d'un fichier
JavaScript pour les données plutôt qu'un fichier JSON chargé en `fetch`.

## Pistes d'évolution (facultatif)

- Filtrer par genre sur `albums.html`
- Ajouter un champ `tracklist` par album et l'afficher sur `album.html`
- Ajouter une page "genres" listant les genres et le nombre d'albums par genre
- Passer les pochettes en images hébergées dans le dépôt (`img/pochettes/`)
  plutôt qu'en URL externe, pour ne plus dépendre d'un site tiers
