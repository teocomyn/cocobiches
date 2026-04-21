# 🦌 PROMPT CURSOR · Construction du site COCOBICHES

**À coller tel quel dans Cursor pour démarrer le projet. Ce prompt est conçu pour être exhaustif : il couvre la mission, la stack, le design system, les pages, les fonctionnalités, les performances, l'accessibilité et les livrables.**

---

## 🎯 MISSION

Tu vas construire **le site web du groupe hôtelier COCOBICHES**, propriétaire de trois établissements indépendants à Versailles, à deux minutes du Château :

- **Hôtel d'Angleterre** (3 étoiles, ouvert en 2010)
- **Hôtel du Jeu de Paume** (3 étoiles, ouvert en 2014, activité séminaires forte)
- **Apparts de l'Oncle Louis** (résidence apparthôtel, ouvert en 2018)

L'objectif est de livrer **un site de référence dans l'hôtellerie indépendante française**, qui combine :

1. **Un site ombrelle** `cocobiches.fr` qui présente la marque et redirige vers les 3 établissements
2. **Trois sites dédiés** (un par hôtel) avec leur propre parcours de réservation
3. **Une expérience B2C loisirs** (familles, couples, touristes internationaux)
4. **Une expérience B2B séminaires** dédiée à l'Hôtel du Jeu de Paume avec tunnel de contact
5. **Une architecture technique moderne, performante et maintenable**

Le site doit incarner le positionnement Cocobiches : **hospitalité lifestyle, chaleureuse, authentique, à taille humaine**. Il doit surpasser les sites des grandes chaînes (Accor, Best Western) en étant plus humain, plus beau, plus rapide.

---

## 🏗️ ARCHITECTURE GÉNÉRALE

### Approche monorepo recommandée

```
cocobiches/
├── apps/
│   ├── umbrella/          # cocobiches.fr (site ombrelle)
│   ├── angleterre/        # hotel-angleterre-versailles.fr
│   ├── jeudepaume/        # hotel-jeudepaume.fr (existe déjà)
│   └── oncle-louis/       # apparts-onclelouis-versailles.fr
├── packages/
│   ├── ui/                # composants partagés (Button, Card, Modal...)
│   ├── design-system/     # tokens, couleurs, typos, patterns
│   ├── cms/               # client Sanity ou Payload
│   ├── booking/           # logique de réservation partagée
│   ├── i18n/              # traductions partagées
│   └── utils/             # helpers, hooks, types
├── pnpm-workspace.yaml
├── turbo.json
└── package.json
```

Utiliser **Turborepo** + **pnpm workspaces** pour la gestion du monorepo.

---

## 🛠️ STACK TECHNIQUE

### Frontend
- **Next.js 15** (App Router, Server Components, Server Actions)
- **TypeScript** (strict mode activé)
- **Tailwind CSS 4** avec design tokens custom basés sur le design system Cocobiches
- **Framer Motion** pour les animations sophistiquées
- **shadcn/ui** comme base de composants, customisés aux couleurs Cocobiches
- **Radix UI primitives** pour l'accessibilité (dropdowns, modals, tabs)

### Backend / CMS
- **Sanity.io** comme CMS headless (gestion contenu par les équipes Cocobiches)
- **Next.js Route Handlers** pour l'API
- **Zod** pour la validation des schémas
- **Resend** pour les emails transactionnels
- **Upstash Redis** pour le rate-limiting

### Réservation
- **Intégration avec le moteur de réservation existant** (probablement D-EDGE, Availpro, ou équivalent via iframe ou API)
- **Formulaire contact séminaire** custom avec envoi email + enregistrement Sanity

### Infrastructure
- **Vercel** pour l'hébergement (ou OVHcloud si préférence souveraineté)
- **Vercel Edge Config** pour les feature flags
- **Cloudflare** pour le CDN et la protection DDoS
- **Sentry** pour le monitoring erreurs
- **PostHog** ou **Plausible** pour l'analytics (RGPD-friendly)

### Qualité de code
- **ESLint** + **Prettier** avec config stricte
- **Husky** + **lint-staged** pour les pre-commit hooks
- **Vitest** pour les tests unitaires
- **Playwright** pour les tests E2E
- **Storybook** pour documenter les composants

---

## 🎨 DESIGN SYSTEM

### Palette de couleurs (tokens Tailwind)

```typescript
// tailwind.config.ts
colors: {
  cocobiches: {
    // Primary · Bleu Marine signature
    marine: {
      DEFAULT: '#2D3077',
      50: '#F0F1F9',
      100: '#DADDF0',
      200: '#B5BBE1',
      300: '#8F99D2',
      400: '#6A77C3',
      500: '#4555B4',
      600: '#2D3077',  // couleur principale
      700: '#242661',
      800: '#1C1D4B',
      900: '#131335',
    },
    // Secondary · Crème
    creme: {
      DEFAULT: '#F4E7DB',
      50: '#FDFAF7',
      100: '#F4E7DB',  // couleur principale
      200: '#E8CEB5',
      300: '#DCB58F',
      400: '#D09C69',
      500: '#C48343',
    },
    // Accent · Vert
    vert: {
      DEFAULT: '#54A16B',
      50: '#EEF7F1',
      100: '#D4EBD9',
      200: '#A8D7B3',
      300: '#7DC38D',
      400: '#54A16B',  // couleur principale
      500: '#3F8253',
      600: '#2F633F',
    },
  },
}
```

### Typographies

- **Montserrat** (principale, Google Fonts) : Regular, Medium, SemiBold, Bold, Black
- **Montecatini Pro** (sacrée, licence achetée) : uniquement pour le logo et les numéros de chambres
- **Typographie distordue custom** : Montserrat Bold avec filtre SVG pour les accueils multilingues ("BIENVENUE / WELCOME / BEM-VINDO / WILLKOMMEN")

### Tokens Tailwind complets

```typescript
fontFamily: {
  sans: ['var(--font-montserrat)', 'system-ui', 'sans-serif'],
  display: ['var(--font-montecatini)', 'serif'],
},
fontSize: {
  'xs': ['0.75rem', { lineHeight: '1rem' }],
  'sm': ['0.875rem', { lineHeight: '1.25rem' }],
  'base': ['1rem', { lineHeight: '1.5rem' }],
  'lg': ['1.125rem', { lineHeight: '1.75rem' }],
  'xl': ['1.25rem', { lineHeight: '1.75rem' }],
  '2xl': ['1.5rem', { lineHeight: '2rem' }],
  '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
  '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
  '5xl': ['3rem', { lineHeight: '1' }],
  '6xl': ['3.75rem', { lineHeight: '1' }],
  '7xl': ['4.5rem', { lineHeight: '1' }],
},
```

### Patterns

Deux patterns à recréer en SVG et exposer comme composants React :
- `<DotsPattern variant="marine-on-creme" />` et `<DotsPattern variant="creme-on-marine" />`
- `<LogoPattern variant="default" />` (répétition du logo à 45°)

### Principe visuel signature

Appliquer la règle **60% bleu marine / 30% crème / 10% vert** sur tous les visuels générés. Le vert est un accent, jamais une couleur structurante.

---

## 📄 STRUCTURE DES PAGES

### Site ombrelle `cocobiches.fr`

```
/                          → Landing groupe, avec les 3 hôtels
/la-marque                 → Histoire, valeurs, équipe
/engagements               → RSE, démarche écologique
/presse                    → Dossier de presse, logos à télécharger
/contact                   → Contact groupe
/partenaires               → Espace agences de voyage (codes GDS, commission)
/blog                      → Articles lifestyle, Versailles, séminaires
/mentions-legales
/politique-confidentialite
```

### Site `hotel-angleterre-versailles.fr`

```
/                          → Homepage HA
/notre-hotel               → Histoire, architecture, équipe
/chambres                  → Catalogue chambres avec filtres
/chambres/[slug]           → Détail chambre
/services                  → Petit-déjeuner, conciergerie, consigne
/versailles                → Guide destination (local expert)
/galerie                   → Photos haute définition
/reserver                  → Moteur de réservation
/contact
```

### Site `hotel-jeudepaume.fr`

```
/                          → Homepage JDP
/notre-hotel
/chambres
/chambres/[slug]
/services
/seminaires                → Landing séminaires B2B
/seminaires/nos-espaces    → Salle réunion + yourte
/seminaires/offres         → Packages séminaires
/seminaires/demande-devis  → Formulaire multi-étapes vers Fanny Colson
/cuisine                   → Brigade 100% féminine, Maÿlis et les Cheffes
/versailles
/galerie
/reserver
/contact
```

### Site `apparts-onclelouis-versailles.fr`

```
/                          → Homepage LAOL
/nos-appartements
/appartements/[slug]
/sejours-longue-duree      → Positionnement B2B missions longues
/services
/versailles
/galerie
/reserver
/contact
```

### Route dynamique i18n

Toutes les pages doivent supporter **au minimum FR + EN** (et prévoir PT + DE en extension future).

```
/[lang]/page-name
middleware.ts pour la détection automatique de la langue
```

---

## 🧩 COMPOSANTS À CONSTRUIRE

### Composants de layout

- `<Header />` avec logo endossement, menu burger mobile, CTA "I BOOK", sélecteur langue
- `<Footer />` avec les 3 hôtels cross-linkés, réseaux sociaux, mentions
- `<BookingBar />` sticky avec date picker, nombre de personnes, bouton "Vérifier"
- `<LanguageSwitcher />` FR / EN / PT / DE
- `<CookieBanner />` conforme RGPD

### Composants hero

- `<HeroVideo />` avec vidéo en background, overlay crème semi-transparent, titre distordu multilingue
- `<HeroImage />` variante statique avec image optimisée
- `<HeroSeminar />` hero B2B avec CTA "Demander un devis"

### Composants contenus

- `<RoomCard />` carte chambre avec image, nom, prix from, CTA
- `<RoomGallery />` carrousel photos immersif avec lightbox
- `<ServiceCard />` carte service avec icône
- `<TeamMember />` portrait équipe avec nom, fonction, bio
- `<Testimonial />` verbatim client avec note
- `<SustainabilityStat />` chiffre RSE animé
- `<PartnerLogoWall />` mur de logos partenaires locaux

### Composants séminaires

- `<VenueCard />` carte espace événementiel (salle, yourte, jardin)
- `<SeminarPackage />` carte offre séminaire
- `<QuoteForm />` formulaire devis multi-étapes avec progression
- `<SeminarCalculator />` estimation tarifaire interactive

### Composants réservation

- `<BookingEngine />` iframe ou composant custom selon intégration
- `<DateRangePicker />` calendrier avec disponibilités
- `<GuestSelector />` sélecteur adultes / enfants / chambres

### Composants interactifs

- `<VersaillesMap />` carte interactive avec les 3 hôtels + Château + points d'intérêt
- `<ItineraryBuilder />` suggestion d'itinéraire 2 jours / 3 jours
- `<VirtualTour />` visite 360° de la yourte JDP et des chambres signatures

### Composants éditoriaux

- `<BlogCard />` carte article
- `<BlogPost />` mise en page long form
- `<Newsletter />` inscription newsletter
- `<RelatedArticles />` articles liés

---

## ✨ FONCTIONNALITÉS CLÉS

### 1. Moteur de réservation unifié

Chaque site hôtel intègre le moteur de résa (D-EDGE ou équivalent) via :
- Composant `<BookingEngine hotelId="..." />` avec paramètres pré-remplis depuis la barre sticky
- Ouverture en modal plein écran ou redirection sur page dédiée
- Récupération des dates depuis le state global (Zustand)
- Possibilité de croiser les disponibilités entre les 3 hôtels ("Pas de dispo ici ? Voici les chambres disponibles dans nos autres hôtels")

### 2. Demande de devis séminaire (tunnel multi-étapes)

Formulaire `<QuoteForm />` sur `/seminaires/demande-devis` avec :
- **Étape 1** : type d'événement (journée d'étude, résidentiel, comex, formation, cocktail, autre)
- **Étape 2** : dates souhaitées + flexibilité
- **Étape 3** : nombre de participants + besoins (hébergement, restauration, activités)
- **Étape 4** : coordonnées + société
- **Étape 5** : résumé + envoi

Le formulaire :
- Sauvegarde en localStorage à chaque étape (reprise possible)
- Envoie un email à `events.hoteljdp.versailles@gmail.com` (Fanny Colson)
- Crée une entrée dans Sanity pour suivi CRM
- Envoie un email de confirmation au prospect avec SLA de réponse ("Nous revenons vers vous sous 24h ouvrées")

### 3. CMS Sanity pour contenus

Schémas Sanity à créer :
- `hotel` (les 3 établissements)
- `room` (chambres avec galerie, équipements, tarif from)
- `service` (services hôtel)
- `teamMember` (membres équipe)
- `seminarPackage` (offres séminaires)
- `venue` (espaces événementiels)
- `blogPost` (articles)
- `testimonial` (avis clients)
- `partner` (partenaires locaux à taguer)
- `siteSettings` (contenus globaux, SEO, social)

### 4. Internationalisation (i18n)

- Détection automatique de la langue via `Accept-Language` + geolocation IP
- Switch manuel persisté dans cookie
- Toutes les chaînes de texte dans `/packages/i18n/locales/{lang}.json`
- Support URLs traduites (`/rooms` en EN, `/chambres` en FR)

### 5. Newsletter et CRM léger

- Inscription depuis footer + popup exit-intent
- Intégration Brevo (ex-Sendinblue) ou Klaviyo
- Double opt-in obligatoire (RGPD)
- Segmentation : loisirs / corporate / presse

### 6. Blog SEO-optimisé

- Articles lifestyle pour SEO local Versailles
- Sujets : "10 activités à Versailles", "Guide séminaires Versailles", "Où déjeuner près du Château", "Notre démarche RSE en 2026"
- Schema.org Article + BreadcrumbList
- Partage social optimisé (OpenGraph, Twitter Cards)

### 7. Carte interactive Versailles

Sur chaque site hôtel, une carte Mapbox custom avec :
- Les 3 hôtels Cocobiches
- Le Château de Versailles et ses jardins
- Les restaurants recommandés (fiches détaillées)
- Les activités de team-building (prestataires partenaires)
- Les gares, parkings, transports

### 8. Espace presse

Sur le site ombrelle, section téléchargeable :
- Dossier de presse PDF
- Logos haute définition (tous formats)
- Photos libres de droits presse
- Contact attaché de presse

### 9. Espace agences de voyage (B2B Travel Trade)

Page `/partenaires` avec :
- Codes GDS (Chain Code AC, Amadeus XVEN71, Galileo H3695, Sabre 285367, Worldspan 0N71)
- Commission jusqu'à 15%
- Surclassement selon disponibilité
- Contact commercial dédié (commercial@cocobiches.com)

### 10. Tracker RSE / engagements

Composant `<SustainabilityDashboard />` avec chiffres animés :
- X% de clients en transport en commun
- X% de produits locaux dans la cuisine
- X tonnes de déchets évités
- X collaborateurs en CDI

Mise à jour via Sanity chaque trimestre.

---

## ⚡ PERFORMANCE ET CORE WEB VITALS

Objectifs :
- **LCP** inférieur à 2.0s
- **INP** inférieur à 200ms
- **CLS** inférieur à 0.1
- **Score Lighthouse** : 95+ sur mobile et desktop

Techniques à appliquer :
- `next/image` systématique avec tailles explicites
- Images au format AVIF + fallback WebP, générées via Sanity CDN avec paramètres responsive
- Polices en `font-display: swap` et preload
- Critical CSS inliné
- Pas de JavaScript inutile sur les pages statiques (Server Components par défaut)
- Lazy loading des composants below-the-fold
- Preconnect vers les domaines tiers (Sanity, Mapbox, moteur résa)
- Service Worker avec cache stratégique (images, fonts)

---

## 🔍 SEO

### Technical SEO

- **Sitemap XML** auto-généré par Next.js
- **Robots.txt** structuré
- **Hreflang** pour les versions linguistiques
- **Canonical URLs** systématiques
- **Structured data Schema.org** :
  - `Hotel` sur les pages hôtel
  - `Room` sur les pages chambre
  - `Event` pour les séminaires
  - `LocalBusiness` sur les pages contact
  - `Article` sur le blog
  - `BreadcrumbList` partout
  - `Review` pour les témoignages

### On-page SEO

- Title et Meta description unique par page
- H1 unique et descriptif
- Alt text sur toutes les images
- Liens internes maillés entre les 3 hôtels
- URLs propres et SEO-friendly

### Local SEO

- Fiches Google Business Profile optimisées (3 établissements)
- NAP cohérent (Name, Address, Phone) sur tous les sites
- Google My Business intégré avec avis
- Backlinks depuis Office de Tourisme Versailles, Versailles Grand Parc

---

## ♿ ACCESSIBILITÉ

Conformité **WCAG 2.2 niveau AA** minimum, idéalement AAA sur les parcours critiques.

- Contrastes vérifiés (ratio minimum 4.5:1 pour texte normal, 3:1 pour texte large)
- Navigation clavier fonctionnelle sur 100% du site
- Focus states visibles sur tous les éléments interactifs
- Skip links pour sauter au contenu principal
- Aria-labels sur tous les composants interactifs
- Sous-titres sur les vidéos
- Formulaires avec labels explicites et messages d'erreur clairs
- Respect de `prefers-reduced-motion` pour les animations
- Testé avec VoiceOver, NVDA, et JAWS

---

## 🎬 ANIMATIONS ET MICRO-INTERACTIONS

### Philosophie

Animations subtiles, jamais gratuites. Chaque animation doit servir la compréhension ou le plaisir, jamais la distraire.

### À intégrer

- Fade-in au scroll sur les sections (Intersection Observer)
- Parallax léger sur les hero images (max 20% de translation)
- Hover subtil sur les cartes (scale 1.02 + shadow augmentée)
- Transition de page douce entre les routes (Framer Motion AnimatePresence)
- Menu burger avec transition sophistiquée (slide + fade)
- Chiffres RSE animés au scroll (count up)
- Carrousels chambres avec inertie
- Cursor custom sur desktop (point bleu marine qui s'agrandit sur les éléments interactifs)

### Easing recommandé

```typescript
const easing = {
  smooth: [0.22, 1, 0.36, 1],
  bouncy: [0.68, -0.55, 0.265, 1.55],
  quick: [0.4, 0, 0.2, 1],
}
```

---

## 🌐 INTÉGRATIONS TIERCES

- **Moteur de réservation** : D-EDGE, Reservit, Availpro ou équivalent (à préciser avec Élise)
- **Paiement** : Stripe pour les acomptes séminaires (si applicable)
- **Emails transactionnels** : Resend
- **Newsletter** : Brevo / Klaviyo
- **Analytics** : Plausible ou PostHog (pas de Google Analytics pour respect RGPD strict)
- **Cartes** : Mapbox GL JS
- **Avis clients** : Google Reviews API + TripAdvisor API
- **Chatbot** (optionnel phase 2) : Crisp ou Intercom
- **CRM séminaires** : HubSpot Free ou Notion via API
- **Réseaux sociaux** : Instagram Graph API pour afficher le feed en homepage

---

## 🔒 SÉCURITÉ

- Content Security Policy strict
- HTTPS forcé partout
- Headers de sécurité (HSTS, X-Frame-Options, Referrer-Policy)
- Rate limiting sur les formulaires (Upstash Redis)
- Captcha invisible (hCaptcha) sur le formulaire séminaires
- Validation Zod côté client ET serveur
- Protection CSRF sur toutes les mutations
- Logs d'audit sur les actions sensibles

---

## 📱 RESPONSIVE

Breakpoints Tailwind customisés :

```typescript
screens: {
  'xs': '375px',    // petits mobiles
  'sm': '640px',    // mobiles
  'md': '768px',    // tablettes
  'lg': '1024px',   // laptops
  'xl': '1280px',   // desktops
  '2xl': '1536px',  // grands écrans
  '3xl': '1920px',  // 4K et ultra-wide
},
```

Approche **mobile-first** stricte. Le site doit être parfait sur iPhone SE (375px) avant d'être beau sur un écran 4K.

---

## 🧪 TESTS

### Unit tests (Vitest)
- Tous les utils et hooks
- Logique métier (calculs séjours, validation formulaires)
- Composants critiques (Booking, QuoteForm)

### E2E tests (Playwright)
- Parcours de réservation complet
- Parcours de demande de devis séminaire
- Navigation entre les 3 sites
- Switch de langue
- Accessibilité (axe-playwright)

### Visual regression (Chromatic)
- Tous les composants Storybook

---

## 📦 LIVRABLES ATTENDUS

### Code
- Monorepo Turborepo complet, déployé sur Vercel
- Documentation Storybook hébergée
- Documentation Sanity Studio pour les équipes
- README détaillé par app avec instructions dev / build / deploy

### Assets
- Favicon multi-format (16x16, 32x32, 180x180, 512x512, maskable)
- Apple Touch Icons
- OpenGraph images par page (1200x630)
- PWA manifest

### Documents
- Guide de contribution (CONTRIBUTING.md)
- Guide des composants (dans Storybook)
- Guide CMS (comment éditer le contenu dans Sanity)
- Rapport d'accessibilité (axe-core + audit manuel)
- Rapport de performance (Lighthouse CI)

---

## 🚀 PHASES DE DÉVELOPPEMENT

### Phase 1 (semaines 1 à 4) : Foundation
- Setup monorepo
- Design system + tokens
- Composants UI de base
- Schémas Sanity
- Configuration i18n

### Phase 2 (semaines 5 à 8) : Site ombrelle + HA
- Homepage ombrelle
- Site Hôtel d'Angleterre complet
- Moteur de résa intégré
- SEO technique

### Phase 3 (semaines 9 à 12) : JDP + Séminaires
- Site Jeu de Paume complet
- Tunnel séminaires B2B
- CRM léger
- Tests E2E

### Phase 4 (semaines 13 à 14) : Oncle Louis
- Site Apparts complet
- Positionnement longue durée

### Phase 5 (semaines 15 à 16) : Polish & Launch
- Optimisations performance
- Tests accessibilité
- Beta testing avec 10 utilisateurs
- Lancement progressif (HA d'abord, puis JDP, puis LAOL, puis ombrelle)

---

## 🎨 RÉFÉRENCES VISUELLES ET INSPIRATION

Le site doit viser l'excellence de :

- **Habitat Hotel Barcelona** (habitathotels.com) : pour l'émotion photographique
- **The Hoxton** (thehoxton.com) : pour le design system cohérent multi-hôtels
- **Les Domaines de Fontenille** (domainedefontenille.com) : pour le storytelling lifestyle
- **Experimental Group** (experimentalgroup.com) : pour la fraîcheur visuelle
- **Soho House** (sohohouse.com) : pour l'exclusivité et les parcours B2B

Mais avec une **identité propre Cocobiches**, jamais une copie. Le bleu marine + crème + vert doit être le parti-pris signature, immédiatement reconnaissable.

---

## 📊 MÉTRIQUES DE SUCCÈS

Après 3 mois en ligne, le site doit démontrer :

- **Taux de conversion réservations directes** : +30% vs moteur actuel
- **Demandes de devis séminaires** : 2x plus de leads qualifiés
- **Score Lighthouse** : 95+ sur toutes les pages critiques
- **Temps moyen sur le site** : +50% vs ancienne version
- **Taux de rebond** : inférieur à 35%
- **Pages / session** : supérieur à 3.5
- **Mots-clés SEO top 3** : "hôtel Versailles", "séminaire Versailles", "hôtel près du Château de Versailles"

---

## 🗣️ TONALITÉ ÉDITORIALE

Toutes les rédactions de contenu (titres, CTA, microcopy) doivent respecter ces règles :

- **"Nous"** collectif partout, jamais "je"
- **Vouvoiement** systématique avec les visiteurs
- **Phrases courtes**, directes
- **Verbes à l'actif**
- **Lexique privilégié** : maison, équipe, famille, convivialité, chaleureux, authentique, sur-mesure, confidentiel, à taille humaine, patrimoine
- **Lexique proscrit** : luxueux, haut de gamme, prestigieux (trop générique), révolutionnaire, innovant (vide de sens), offre (préférer "séjour" ou "expérience")

### Exemples de microcopy

- CTA résa : "Réserver notre chambre" (pas "Book now")
- CTA séminaire : "Organisons votre événement" (pas "Demander un devis")
- 404 : "Cette page a pris quelques jours de congés. Revenons à l'essentiel."
- Confirmation résa : "Quel bonheur de vous accueillir bientôt à Versailles."
- Erreur formulaire : "Il nous manque encore un petit détail."

---

## 🔧 COMMANDES UTILES

```bash
# Installer les dépendances
pnpm install

# Lancer tous les sites en dev
pnpm dev

# Lancer un site spécifique
pnpm dev --filter=jeudepaume

# Build tous les sites
pnpm build

# Lancer les tests
pnpm test

# Linter
pnpm lint

# Storybook
pnpm storybook

# Sanity Studio
pnpm sanity
```

---

## ❓ QUESTIONS À CLARIFIER AVANT DE COMMENCER

Avant d'écrire la moindre ligne de code, demande-moi :

1. Quel moteur de réservation est actuellement utilisé et peut-on accéder à son API ?
2. Les domaines finaux sont-ils arrêtés (hotel-angleterre-versailles.fr ou autre) ?
3. Y a-t-il une volonté de PWA / app mobile dans un second temps ?
4. Budget cloud / hébergement (Vercel Pro, OVH, etc.) ?
5. Les équipes Cocobiches auront-elles une formation Sanity Studio ?
6. Y a-t-il un calendrier de lancement impératif (saison touristique 2026) ?
7. Les contenus actuels sont-ils à reprendre ou à réécrire intégralement ?
8. Les photos actuelles sont-elles suffisantes ou faut-il un shooting ?
9. Existe-t-il une base de données clients à importer (CRM existant) ?
10. Le site doit-il s'intégrer avec un PMS hôtelier (Mews, Opera, autre) ?

---

## 🏁 INSTRUCTION FINALE POUR CURSOR

Commence par :

1. **Créer la structure du monorepo** avec Turborepo + pnpm workspaces
2. **Configurer Tailwind** avec tous les tokens du design system ci-dessus
3. **Créer le package `design-system`** avec les composants de base (Button, Typography, Container)
4. **Créer le schéma Sanity initial** dans `packages/cms`
5. **Bootstrap le site `jeudepaume`** avec homepage minimale qui démontre l'identité visuelle

Puis attend ma validation avant de continuer avec les autres sites.

**Code en TypeScript strict. Respecte les conventions Next.js 15 App Router. Pas de `any`, pas de `@ts-ignore`. Commente les parties complexes. Teste ce que tu construis.**

Je suis disponible pour valider chaque étape et clarifier les décisions produit / design. Posons ensemble les fondations de ce qui doit devenir le site hôtelier le plus élégant et performant de France.

---

**Design system détaillé disponible dans `DESIGN.md` à la racine du projet.**

**Contact projet : Elise Comyn (Direction Cocobiches)**

*Que l'aventure commence.* 🦌