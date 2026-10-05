import type { GrapeVariety, HeroBadge, NavLink, Award } from '../types/domain';
import { IMAGES } from './images';

export const NAV_LINKS: NavLink[] = [
  { id: 'le-domaine-terroir', label: 'Le Domaine & Terroir', href: '#terroir' },
  { id: 'nos-cuvees', label: 'Nos Cuvées', href: '#cuvees' },
  { id: 'oenotourisme-sejour', label: 'Œnotourisme & Séjour', href: '#oenotourisme' },
  { id: 'recompenses', label: 'Récompenses', href: '#recompenses' },
  { id: 'contact', label: 'Contact', href: '#contact' },
];

export const HERO_BADGES: HeroBadge[] = [
  { icon: 'grass', title: '16 ha enherbé', subtitle: "Argilo-calcaire d'élite" },
  { icon: 'eco', title: 'Certifié HVE 4', subtitle: 'Exigence environnementale' },
  { icon: 'rv_hookup', title: 'France Passion', subtitle: 'Étape camping-caristes' },
  { icon: 'cottage', title: 'Gîte au Domaine', subtitle: '4 à 6 personnes' },
];

export const GRAPE_VARIETIES: GrapeVariety[] = [
  {
    id: 'merlot',
    label: 'Merlot Noir (Rondeur, velouté, opulence)',
    percentage: 80,
    barClass: 'bg-primary',
  },
  {
    id: 'cabernet-sauvignon',
    label: 'Cabernet Sauvignon (Structure & potentiel de garde)',
    percentage: 15,
    barClass: 'bg-primary-container',
  },
  {
    id: 'cabernet-franc',
    label: 'Cabernet Franc (Finesse aromatique & épices)',
    percentage: 5,
    barClass: 'bg-secondary',
  },
];

export const AWARDS: Award[] = [
  { id: 'concours-lyon', icon: 'workspace_premium', institution: 'Concours de Lyon', distinction: "Médaille d'Or" },
  { id: 'gilbert-gaillard', icon: 'military_tech', institution: 'Gilbert & Gaillard', distinction: '90+ Points Gold' },
  { id: 'finalise', icon: 'wine_bar', institution: 'Féminalise', distinction: 'Distinction Or' },
  { id: 'vignerons-independants', icon: 'award_star', institution: 'Vignerons Indép.', distinction: 'Lauréat Concours' },
  { id: 'challenge-international', icon: 'stars', institution: 'Challenge Int.', distinction: 'Médaille de Bronze' },
  { id: 'vins-aquitaine', icon: 'verified', institution: "Vins d'Aquitaine", distinction: 'Concours Bordeaux' },
];

export const CONTACT = {
  address: { label: 'Adresse du Vignoble', lines: ['Lieu-dit Jamard Ouest', '33570 Lussac, France'] },
  phones: [
    { number: '06 07 06 08 20', label: 'Olivier', href: 'tel:0607060820' },
    { number: '06 32 46 30 99', label: 'Carine / Gîte', href: 'tel:0632463099' },
    { number: '05 57 74 51 28', label: 'Fixe propriété', href: 'tel:0557745128' },
  ],
  emails: [
    { address: 'contact@vignoble-charpentier.fr', label: 'contact@vignoble-charpentier.fr', href: 'mailto:contact@vignoble-charpentier.fr' },
    { address: 'giteojamard@orange.fr', label: 'giteojamard@orange.fr (Réservation gîte)', href: 'mailto:giteojamard@orange.fr' },
  ],
  gps: { dms: "N 44° 43' 38.036\" - O 0° 21' 48.422\"", decimal: 'Lat: 44.727232 • Long: -0.363451' },
  cellarHours: 'Lun – Ven : 9h00–12h00 & 14h00–18h00',
  mapCaption: { title: 'Château Haut-Jamard', subtitle: 'À 10 min du bourg de Saint-Émilion' },
  mapImage: IMAGES.map,
  mapAlt: 'Vignoble de Lussac Saint-Émilion au cœur des collines bordelaises, vue aérienne des parcelles de Jamard Ouest.',
};
