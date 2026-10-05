# Vignoble Charpentier — Château Haut-Jamard

Site viticole officiel du domaine, construit avec **Vite + React + TypeScript + Tailwind CSS**.

## Commandes

```bash
npm install      # Installation des dépendances
npm run dev      # Serveur de développement (http://localhost:5173)
npm run build    # Vérification TypeScript + build de production
npm run preview  # Prévisualisation du build de production
```

## Architecture

```
src/
├── types/domain.ts            # Types métier centralisés (Wine, Award, Experience…)
├── data/                      # Couche de données découplée (vins, terroir, expériences, images)
├── hooks/                     # useRevealOnScroll, useScrolledHeader, useModalBehavior
├── components/
│   ├── ui/                    # Atomes : MaterialIcon, Badge, RevealOnScroll, SectionHeading
│   ├── cuvees/                # CuveeFilterTabs, WineCard, CuveesGrid, TechSheetModal
│   ├── contact/               # ContactInfo, ContactForm, ContactSection
│   └── *Section.tsx           # Sections composites (Hero, Terroir, Récompenses…)
├── App.tsx                    # Composition de la page
└── main.tsx                   # Point d'entrée
```

## Principes appliqués

- **Typage strict** : `strict`, `noUnusedLocals`, `noUnusedParameters` activés.
- **Séparation des responsabilités** : données, types, hooks, atomes et sections sont isolés.
- **Composants fonctionnels pures** : props typées, état local minimal, `useMemo` pour les filtrages.
- **Accessibilité** : rôles ARIA (`tablist`, `dialog`, `aria-modal`), labels de boutons, skip-link, contrastes Material 3.
- **Performance** : IntersectionObserver déconnecté après révélation, écouteurs `passive`, `loading="lazy"` sur les visuels.
- **Robustesse** : modale gérée par hook (Escape + scroll lock), formulaire contrôlé avec état d'envoi.

> ⚠️ Le formulaire de contact simule actuellement l'envoi côté client — brancher l'API du domaine dans `ContactForm.tsx`.
