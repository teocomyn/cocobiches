# Application web Cocobiches

Projet **Next.js 15** du site ombrelle Cocobiches. La documentation complète (stack, env, API, déploiement) est dans le [**README à la racine du dépôt**](../README.md).

## Démarrage rapide

```bash
npm install
cp .env.example .env.local
npm run dev
```

- URL locale : [http://localhost:3000](http://localhost:3000) → redirection vers `/fr`
- Build : `npm run build` · Tests : `npm run test` · Lint : `npm run lint`

## Design & typo

- **Police** : Montserrat (`app/layout.tsx`) ; le logo wordmark utilise les assets dans `public/brand/`.
- **Tokens** : variables `--cb-*` et `--color-cocobiches-*` dans `app/globals.css` ; grille éditoriale max **1440px**.
- **Header** : hauteur **72px → 56px** au scroll ; navigation centrée ; CTA réservation via les clés i18n `nav.bookCta` (FR « Réserver », EN « I BOOK »).

Pour le détail design et contenu, voir [`design-cocobiches.md`](../design-cocobiches.md) à la racine du repo.
