# Holocron · Présentation

Site vitrine du projet **Holocron**, le système expert d'ADEO dédié à
l'excellence opérationnelle (Infra, Environnements, SRE, Monitoring,
Process Management).

Le site tient dans un fichier statique, [`index.html`](./index.html), accompagné de son icône [`favicon.svg`](./favicon.svg) :

- **Tailwind CSS** (CDN) pour le style ;
- une navigation par ancres (`#pourquoi`, `#conception`, `#contribuer`,
  `#architecture`, `#roadmap`) qui simule plusieurs pages.

## Pages

| Page | Ancre | Statut |
| --- | --- | --- |
| Pourquoi Holocron ? | `#pourquoi` | Publiée |
| Conception | `#conception` | Publiée |
| Contribuer | `#contribuer` | Publiée |
| Architecture | `#architecture` | À venir |
| Roadmap | `#roadmap` | Publiée |

## Mettre à jour la roadmap

La page Roadmap est dans la section `data-page="roadmap"` de `index.html`.
À chaque fin de sprint, mettre à jour :

- la date de mise à jour et le sprint en cours (en-tête de la page) ;
- les statuts dans la matrice « Vision par trimestre » (✓ réalisé, ◐ en cours, ○ planifié).

Hypothèse de capacité : 6 personnes × 4 à 5 h par sprint de 2 semaines,
soit environ 3,5 jours de travail d'équipe par sprint et 20 par trimestre.

## Prévisualiser en local

```bash
cd holocron-present
python3 -m http.server 8080
# puis ouvrir http://localhost:8080
```

Le fichier peut aussi être ouvert directement dans un navigateur.

## Publication

Le site est 100 % statique. Il peut être servi par GitHub Pages (branche `main`,
dossier racine) ou par n'importe quel serveur web interne.

## Liens

- Repository des agents (skills et prompts) :
  [holocron-agents](https://github.com/20009266/holocron-agents)
