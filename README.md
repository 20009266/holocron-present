# Holocron · Présentation

Site statique (HTML/CSS/JS, sans dépendance ni build) présentant la finalité
opérationnelle de Holocron : suivre l'application des recommandations
techniques, produit par produit, grâce à des collectors ciblés et des statuts
consolidés. Le parcours est volontairement simple : pourquoi changer, comment
les équipes transmettent leur savoir sous forme de Skills et prompts, comment
Holocron fournit le contexte réel des produits, comment le Web UI rend le suivi
lisible, puis trois exemples d'utilisation. OPIK s'inscrit dans la boucle de
test et d'amélioration des réponses, avec les retours utilisateurs et les cas
de référence. Le reporting suit les statuts par plateforme (dont GTDP), domaine
et produit. Une invitation à contribuer renvoie au dépôt GitHub
`holocron-agents`; le schéma technique facultatif est dans
`assets/holocron-archi.png`.

## Structure

| Fichier | Rôle |
| --- | --- |
| `index.html` | Structure et contenu de la présentation |
| `styles.css` | Charte visuelle de la présentation |
| `app.js` | Scrollspy, révélation au défilement, année du footer |
| `favicon.svg` | Icône de l'onglet navigateur |
| `assets/holocron-archi.png` | Schéma technique Holocron |

## Aperçu local

```bash
cd holocron-present
python3 -m http.server 4321
# puis ouvrir http://127.0.0.1:4321
```

## Publication GitHub Pages

1. Pousser ce dossier sur le dépôt.
2. `Settings → Pages → Build and deployment → Source: Deploy from a branch`.
3. Choisir la branche et le dossier `/holocron-present` (ou déplacer le contenu
   à la racine / `docs/` selon la configuration Pages retenue).

Les chemins des ressources sont **relatifs** (`./styles.css`, `./app.js`,
`./assets/holocron-archi.png`), donc
le site fonctionne quel que soit le sous-chemin de publication.

