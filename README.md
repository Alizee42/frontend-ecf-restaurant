# Quai Antique — Frontend (ECF)

Application Angular pour le restaurant **Quai Antique**, projet d'examen de certification (Diplôme Niv. 5). Interface publique et back-office admin consommant l'API Symfony.

Démo en ligne : https://main--subtle-alpaca-8698c9.netlify.app/

## Stack technique

| Technologie | Version |
|---|---|
| Angular | 15.1.4 |
| TypeScript | ~4.9.4 |
| Bootstrap | ^4.1.1 |
| jQuery | ^3.2.1 |
| RxJS | ~7.8.0 |
| SCSS | styles personnalisés |
| Angular CLI | ~15.1.4 |

## Prérequis

- Node.js 16+
- Yarn
- Angular CLI 15
- Backend `backend-ecf-restaurant` démarré

## Installation et lancement

```bash
git clone https://github.com/Alizee42/frontend-ecf-restaurant.git
cd frontend-ecf-restaurant

yarn   # installer les dépendances

# Configurer l'URL du backend dans chaque service :
# src/app/core/service/*.service.ts
# Modifier : private baseUrl = 'https://localhost:<port>/api/rest/v1';

ng serve
# Application disponible sur http://localhost:4200
```

## Connexion administrateur

```
Email    : quaiantique@admin.com
Mot de passe : 123456789@
```

## Pages

| Route | Description |
|---|---|
| `/` | Page d'accueil du restaurant |
| `/menu` | Carte et menus |
| `/enregistrer` | Inscription client |
| `/connexion-client` | Connexion client |
| `/reservation` | Réservation de table |
| `/contact` | Contact |
| `/admin` | Connexion administrateur |
| `/admin/*` | Gestion : carte, catégories, formules, horaires, images, menus, réservations, comptes |

## Build et déploiement

```bash
ng build   # Build de production vers dist/
```

Déployable sur Netlify (configuration incluse).
