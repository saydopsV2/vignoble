import type { Experience } from '../types/domain';
import { IMAGES } from './images';

export const EXPERIENCES: Experience[] = [
  {
    id: 'gite',
    image: IMAGES.experiences.gite,
    alt: 'Charming stone vineyard cottage gite exterior with French blue shutters, terrace overlooking lush vines in Bordeaux countryside, romantic serene atmosphere.',
    topBadge: 'Ouvert toute l’année',
    topBadgeTone: 'light',
    bottomBadges: ['Gîtes de France', 'PAP'],
    icon: 'cottage',
    kicker: 'Capacité 4 / 6 personnes',
    title: 'Gîte au Cœur du Vignoble',
    description:
      "Depuis 2021, ce gîte confortable attenant à la propriété offre un havre de quiétude parfait pour sillonner la région de Saint-Émilion. Vue panoramique sur les rangs de vignes et calme absolu.",
    meta: { label: 'Contact réservation :', value: '06 32 46 30 99', href: 'tel:0632463099' },
    cta: { label: 'Voir les disponibilités', icon: 'mail', href: 'mailto:giteojamard@orange.fr', variant: 'surface' },
  },
  {
    id: 'france-passion',
    image: IMAGES.experiences.francePassion,
    alt: 'Campervan motorhome parked quietly next to vineyard rows at dusk at a peaceful French winery, golden light reflections, idyllic stopover setting.',
    topBadge: 'Adhérent Officiel',
    topBadgeTone: 'gold',
    bottomBadges: ['Depuis 2020'],
    icon: 'rv_hookup',
    kicker: 'Accueil Camping-Cars',
    title: 'Étape France Passion',
    description:
      'Bienvenue aux voyageurs nomades ! Faites étape gratuitement et en toute sécurité dans l’enceinte de notre domaine. Découvrez nos chais, échangez avec les vignerons et repartez avec vos cuvées préférées.',
    meta: { label: 'Accès GPS :', value: 'Jamard Ouest, Lussac' },
    cta: { label: 'Infos accueil camping-car', icon: 'explore', href: '#contact', variant: 'surface' },
  },
  {
    id: 'visite-degustation',
    image: IMAGES.experiences.degustation,
    alt: 'Sommelier pouring deep red Lussac Saint-Emilion wine into a clear crystal tasting glass during an educational cellar tasting with wine barrels in background.',
    topBadge: 'Gratuit au Caveau',
    topBadgeTone: 'primary',
    bottomBadges: ['Du Lun au Ven'],
    icon: 'wine_bar',
    kicker: 'Dégustation Commentée',
    title: 'Visite de Chais & Dégustation',
    description:
      'Présentation des travaux de la vigne selon les saisons, visite des chais de vinification et d’élevage, puis dégustation comparative des millésimes et cuvées singulières.',
    meta: { label: 'Horaires :', value: '9h-12h & 14h-18h' },
    cta: { label: 'Réserver votre visite', icon: 'event_available', href: '#contact', variant: 'primary' },
  },
];

export const FORM_OPTIONS = {
  motifs: [
    { value: 'visite', label: 'Visite de chais & dégustation' },
    { value: 'commande', label: 'Commande de vin au domaine' },
    { value: 'gite', label: 'Renseignements sur le Gîte' },
    { value: 'camping-car', label: 'Étape camping-car (France Passion)' },
    { value: 'salons', label: 'Salons des vins & invitations' },
    { value: 'autre', label: 'Autre question' },
  ],
  personnes: [
    { value: '1-2', label: '1 à 2 personnes' },
    { value: '3-4', label: '3 à 4 personnes' },
    { value: '5-8', label: '5 à 8 personnes' },
    { value: 'groupe', label: 'Groupe (plus de 8 personnes)' },
  ],
} as const;
