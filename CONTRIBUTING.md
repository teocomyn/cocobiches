# Contribuer au site Cocobiches

Merci de participer à l’évolution de **cocobiches.fr**. Ce guide aligne le dépôt sur la marque et garde l’historique Git lisible pour toute l’équipe (y compris non technique).

---

## Avant de coder

1. Lire la vision et le ton dans [`cocobiches.md`](cocobiches.md) et [`design-cocobiches.md`](design-cocobiches.md).
2. Travailler sur une branche dédiée (`feat/…`, `fix/…`, `content/…`) plutôt que directement sur `main` si plusieurs personnes poussent sur le dépôt.

---

## Qualité avant pull request

À la racine du dépôt :

```bash
npm run lint
npm run test
npm run build
```

Corriger les erreurs avant demande de fusion.

---

## Messages de commit

On utilise **[Conventional Commits](https://www.conventionalcommits.org/)** en français, avec une **phrase orientée Cocobiches** après les deux-points (ce que ça change pour le site ou la marque, pas seulement le nom d’un fichier ou d’une lib).

### Forme

```
type(scope): sujet court au présent

[corps optionnel · contexte, pages touchées, intention marque]
```

**Types courants**

| Type | Usage |
|------|--------|
| `feat` | Nouvelle fonctionnalité ou section visible |
| `fix` | Correction de bug ou de contenu erroné |
| `content` | Textes, traductions, micro-copy (si vous séparez du code) |
| `docs` | README, spec, commentaires orientés équipe |
| `style` | UI / CSS / animation sans changer la logique métier |
| `chore` | Outils, config, dépendances, déploiement |
| `refactor` | Refactor sans changement de comportement utilisateur |

**Scopes suggérés** (libres, en français ou kebab-case)

`accueil`, `marque`, `jeu-de-paume`, `contact`, `newsletter`, `presse`, `engagements`, `i18n`, `seo`, `accessibilité`, `perf`

### Exemples

Privilégier l’effet **visiteur / marque** :

| Moins parlant | Mieux pour Cocobiches |
|---------------|------------------------|
| `feat: add hero component` | `feat(accueil): héros marque · accroche FR/EN` |
| `fix: button color` | `fix(marque): CTA réservation · contraste WCAG` |
| `chore: bump next` | `chore: mise à jour Next · sécurité & build` |
| `docs: readme` | `docs: README · groupe, trois maisons, site ombrelle` |

### Corps du message (recommandé pour les grosses PR)

Après une ligne vide, 2–5 lignes : intention éditoriale, pages concernées, impact SEO ou accessibilité si pertinent.

---

## Pull requests

- Titre = même esprit que le commit principal (clair pour un humain qui lit l’historique GitHub).
- Lier une issue si elle existe.
- Joindre une capture d’écran pour les changements visuels.
- Mentionner si le contenu a été relu côté marketing / direction.

Le modèle de PR s’affiche automatiquement sur GitHub (voir [.github/pull_request_template.md](.github/pull_request_template.md)).

---

## Propriété intellectuelle

Les contenus textes, visuels et la marque **Cocobiches** restent la propriété du groupe. Les contributions au dépôt sont réputées destinées à l’exploitation du site officiel Cocobiches sauf accord écrit contraire.

---

*Des questions ? Ouvrir une discussion sur le dépôt ou s’adresser à l’équipe projet Cocobiches.*
