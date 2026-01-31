# Cabinet Infirmier Moulin à Vent Catalunya

Site vitrine pour un cabinet d'infirmières libérales situé à Perpignan (quartiers Moulin à Vent et Catalunya).

**Site en ligne** : https://mathieuabbal.github.io/site_de_sophie/

## Stack technique

- **Framework** : Angular 21 (standalone components, signals)
- **Styles** : Tailwind CSS v4
- **Déploiement** : GitHub Pages via `angular-cli-ghpages`

## Prérequis

- Node.js >= 18
- npm >= 9

## Installation

```bash
npm install
```

## Développement

```bash
npm start
```

Le site est accessible sur `http://localhost:4200`.

## Build

```bash
npm run build
```

Les fichiers de production sont générés dans `dist/site_de_sophie_angular/browser/`.

## Déploiement sur GitHub Pages

```bash
npm run deploy
```

Cette commande exécute le build avec le bon `base-href` puis publie sur la branche `gh-pages`.

> **Note** : Dans les paramètres GitHub du repo, la source de GitHub Pages doit être configurée sur la branche `gh-pages`.

## Structure du projet

```
src/
├── app/
│   ├── app.ts                     # Composant racine
│   └── components/
│       ├── navbar.component.ts     # Navigation + menu mobile
│       ├── hero.component.ts       # Section hero
│       ├── about.component.ts      # Le cabinet & équipe
│       ├── services.component.ts   # 8 services proposés
│       ├── reimbursement.component.ts # Remboursement & prise en charge
│       ├── reviews.component.ts    # Avis Google
│       ├── faq.component.ts        # FAQ accordion
│       ├── contact.component.ts    # Contact & Google Maps
│       ├── footer.component.ts     # Pied de page
│       └── back-to-top.component.ts # Bouton retour en haut
├── assets/images/                  # Images du site
├── styles.css                      # Tailwind + styles globaux
└── index.html                      # Meta tags, Open Graph, Schema.org, GA
```

## Contrainte déontologique

L'Ordre national des infirmiers a établi une charte pour les infirmiers libéraux souhaitant créer un site Internet :
https://www.ordre-infirmiers.fr/assets/files/000/publications/ONI_Charte%20Internet_3volets_231017.pdf
