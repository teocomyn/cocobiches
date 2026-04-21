# Cocobiches

Site vitrine du **groupe hôtelier Cocobiches** — trois maisons indépendantes à Versailles, à deux pas du Château : [Hôtel d’Angleterre](https://www.hotel-angleterre.com/), [Hôtel du Jeu de Paume](https://www.hotel-jeudepaume.fr/), [Apparts de l’Oncle Louis](https://www.apparts-oncle-louis.fr/).

Ce dépôt contient l’application **Next.js** (site ombrelle multilingue, parcours marque, tunnel Hôtel du Jeu de Paume, contact, newsletter).

---

## Sommaire

- [Stack](#stack)
- [Prérequis](#prérequis)
- [Installation](#installation)
- [Scripts](#scripts)
- [Variables d’environnement](#variables-denvironnement)
- [Internationalisation](#internationalisation)
- [API & formulaires](#api--formulaires)
- [SEO & perf](#seo--perf)
- [Tests & qualité](#tests--qualité)
- [Déploiement](#déploiement)
- [Documentation interne](#documentation-interne)

---

## Stack

| Domaine | Choix |
|--------|--------|
| Framework | [Next.js 15](https://nextjs.org/) (App Router, React 19) |
| Langage | TypeScript (strict) |
| Styles | [Tailwind CSS v4](https://tailwindcss.com/) + tokens Cocobiches (`app/globals.css`) |
| Animation | [Framer Motion](https://www.framer.com/motion/) |
| Scroll | [Lenis](https://lenis.darkroom.engineering/) |
| Validation | [Zod](https://zod.dev/) |
| Tests | [Vitest](https://vitest.dev/) |
| Lint | ESLint (config Next.js) |

---

## Prérequis

- **Node.js** 20+ (recommandé : LTS actuelle)
- **npm** (ou pnpm / yarn si vous préférez)

---

## Installation

```bash
git clone https://github.com/teocomyn/cocobiches.git
cd cocobiches/web
npm install
cp .env.example .env.local   # optionnel : URL site, webhooks, Plausible
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000) — redirection vers `/fr` par défaut ([middleware](web/middleware.ts)).

---

## Scripts

À lancer depuis `web/` :

| Commande | Rôle |
|----------|------|
| `npm run dev` | Serveur de dev (Turbopack) |
| `npm run build` | Build de production |
| `npm run start` | Sert le build localement |
| `npm run lint` | ESLint |
| `npm run test` | Vitest (tests unitaires) |

---

## Variables d’environnement

Fichier modèle : [`web/.env.example`](web/.env.example).

| Variable | Usage |
|----------|--------|
| `NEXT_PUBLIC_SITE_URL` | URL canonique du site (sitemap, métadonnées). Défaut : `https://www.cocobiches.fr` |
| `CONTACT_WEBHOOK_URL` | Optionnel — POST JSON des soumissions contact (ex. Slack, Zapier) |
| `NEWSLETTER_WEBHOOK_URL` | Optionnel — idem pour la newsletter |
| `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` | Optionnel — domaine [Plausible](https://plausible.io/) (analytics sans cookies) |

Sans webhook, les API loguent côté serveur en développement / production.

---

## Internationalisation

- **Locales** : `fr` (défaut), `en`
- **Dictionnaires** : `web/messages/fr.json`, `web/messages/en.json`
- **Routes** : préfixe `/fr/...` et `/en/...` ; les URLs sans locale sont redirigées vers le français

---

## API & formulaires

| Route | Méthode | Description |
|-------|---------|-------------|
| `/api/contact` | `POST` | Formulaire contact (nom, email, message, honeypot anti-spam) |
| `/api/newsletter` | `POST` | Inscription newsletter (email, consentement RGPD, honeypot) |

Schémas Zod : `web/lib/validation/contact.ts`.

---

## SEO & perf

- Métadonnées par page, `sitemap.xml`, `robots.txt`
- Image Open Graph dynamique : `web/app/[locale]/opengraph-image.tsx`
- JSON-LD (Organisation sur l’accueil, hôtel sur les pages Jeu de Paume)
- En-têtes de sécurité dans [`web/next.config.ts`](web/next.config.ts) (`X-Frame-Options`, `X-Content-Type-Options`, etc.)

---

## Tests & qualité

```bash
cd web && npm run test && npm run lint && npm run build
```

Les tests vivent dans `web/tests/`. Le build valide le prérendu statique des routes `[locale]`.

---

## Déploiement

L’app est prête pour **[Vercel](https://vercel.com/)** (ou tout hébergeur Node compatible Next.js 15) : définir les variables d’environnement dans le tableau de bord, pointer le répertoire racine du build sur `web/` si le monorepo reste à la racine du dépôt.

---

## Documentation interne

| Fichier | Contenu |
|---------|---------|
| [`cocobiches.md`](cocobiches.md) | Vision produit, périmètre, exigences (référence projet) |
| [`design-cocobiches.md`](design-cocobiches.md) | Design system, tonalité, patterns UI |

---

## Structure du dépôt

```
cocobiches/
├── README.md                 # ce fichier
├── cocobiches.md             # spec / vision
├── design-cocobiches.md      # design & contenu
└── web/                      # application Next.js
    ├── app/                  # App Router, pages, API, layouts
    ├── components/           # UI, sections, layout
    ├── messages/             # i18n FR / EN
    ├── lib/                  # utilitaires, i18n, validation
    ├── public/               # assets statiques
    └── tests/                # Vitest
```

---

**Cocobiches** — hospitalité lifestyle à Versailles.
