import type { Wine } from '../types/domain';
import { IMAGES } from './images';

const COMMON_TECH_SHEET = {
  appellation: 'AOC Lussac Saint-Émilion',
  terroir: 'Argilo-calcaire & limoneux',
  certification: 'Haute Valeur Environnementale (HVE 4)',
  serviceTemperature: '16°C – 18°C',
  pairings: 'Viandes rôties, fromages affinés, gibiers',
};

export const WINES: Wine[] = [
  {
    id: 'chateau-haut-jamard',
    name: 'Château Haut-Jamard',
    category: 'red',
    badge: { label: 'Cuvée Historique', tone: 'primary' },
    subBadge: { label: 'AOC Lussac St-Émilion', tone: 'secondary' },
    distinction: "Médaille d'Or",
    blend: '80% Merlot • 15% Cabernet-Sauvignon • 5% Cabernet-Franc',
    description:
      "Vinification traditionnelle respectueuse. Belle trame aromatique de fruits noirs mûrs, cerise griotte et épices douces. Tanins soyeux et finale persistante.",
    image: IMAGES.wines.hautJamard,
    alt: "Elegant bottle of Chateau Haut-Jamard Lussac Saint-Emilion red wine with traditional refined Bordeaux label and gold foil capsule, studio lighting on soft cream background.",
    techSheet: COMMON_TECH_SHEET,
  },
  {
    id: 'prestige-de-haut-jamard',
    name: 'Prestige de Haut-Jamard',
    category: 'red',
    badge: { label: '★ Coup de Cœur', tone: 'secondary' },
    subBadge: { label: 'Vieilli en fûts de chêne', tone: 'primary' },
    distinction: 'Sélection Fût',
    blend: '100% Merlot sélectionné',
    description:
      "Issu des plus vieilles parcelles du plateau. Élevage soigné en fûts de chêne apportant un boisé velouté, notes de vanille, de cacao et une structure majestueuse taillée pour la garde.",
    image: IMAGES.wines.prestige,
    alt: 'Luxury wine bottle Prestige de Haut-Jamard with sophisticated dark label, gold typography, wax seal detail, and sleek reflections, photographed against warm paper-linen background.',
    techSheet: {
      ...COMMON_TECH_SHEET,
      serviceTemperature: '17°C – 18°C',
    },
  },
  {
    id: 'rose-lucile',
    name: 'Rosé Lucile',
    category: 'rose',
    badge: { label: 'Fraîcheur & Gourmandise', tone: 'fixed' },
    distinction: 'Bordeaux Rosé',
    blend: '100% Merlot',
    description:
      "Pressurage direct délicat. Robe lumineuse pétale de rose. Nez friand de fraise des bois, groseille et agrumes. Bouche vive, rafraîchissante et salivante.",
    image: IMAGES.wines.lucile,
    alt: 'Clear Bordeaux wine bottle filled with luminous crystalline pale pink rosé wine Rosé Lucile, delicate condensation, elegant modern label, sunlit background.',
    techSheet: {
      ...COMMON_TECH_SHEET,
      appellation: 'Bordeaux Rosé',
      serviceTemperature: '10°C – 12°C',
      pairings: 'Apéritifs, poissons grillés, salades d’été',
    },
  },
  {
    id: 'juline',
    name: 'Juline',
    category: 'rose',
    badge: { label: 'Fines Bulles Festives', tone: 'secondary' },
    distinction: 'Méthode Traditionnelle',
    blend: '100% Merlot Effervescent',
    description:
      "Deuxième fermentation en bouteille et élevage sur lattes. Cordon de bulles persistantes et crémeuses, arômes de brioche toastée et framboise fraîche.",
    image: IMAGES.wines.juline,
    alt: 'Champagne style sparkling wine bottle Méthode Traditionnelle Rosée Juline with festive rose gold foil, wire cage, and premium label in warm ambient light.',
    techSheet: {
      ...COMMON_TECH_SHEET,
      appellation: 'Crémant de Bordeaux Rosé',
      serviceTemperature: '6°C – 8°C',
      pairings: 'Desserts légers, fruits rouges, apéritif festif',
    },
  },
  {
    id: 'odile-de-jamard',
    name: 'Odile de Jamard',
    category: 'singular',
    badge: { label: 'Vin Naturel • 0 Sulfite Ajouté', tone: 'natural' },
    distinction: 'Pur Raisin',
    blend: '100% Merlot sans sulfites ajoutés',
    description:
      "L'expression nue du raisin. Une vinification sans aucun intrant ni sulfite. Le fruit à l'état brut : cerise croquante, mûre sauvage, avec une vivacité gourmande sans artifice.",
    image: IMAGES.wines.odile,
    alt: 'Modern organic wine bottle Odile de Jamard with minimalist textured recycled label, natural cork finish, crisp clean shadows.',
    techSheet: {
      ...COMMON_TECH_SHEET,
      certification: 'Vinification naturelle — 0 sulfite ajouté',
      pairings: 'Cuisine bio, terrines, grillades légères',
    },
  },
  {
    id: 'eclipse',
    name: 'Eclipse',
    category: 'singular',
    badge: { label: 'Vin Rare • Blanc de Noirs', tone: 'neutral' },
    distinction: 'Inédit Bordelais',
    blend: '100% Merlot vinifié en blanc',
    description:
      "Pressurage immédiat des baies rouges sans macération pelliculaire. Robe or pâle aux reflets argentés. Notes surprenantes de fleurs blanches, pêche de vigne et tension minérale.",
    image: IMAGES.wines.eclipse,
    alt: 'Distinctive wine bottle Eclipse Blanc de Noirs with clear glass revealing pale straw white wine made from red Merlot grapes, sleek label design.',
    techSheet: {
      ...COMMON_TECH_SHEET,
      serviceTemperature: '11°C – 13°C',
      pairings: 'Fruits de mer, poissons fins, fromages de chèvre',
    },
  },
  {
    id: 'cab-ou-pas-cab',
    name: 'Cab ou pas Cab ?',
    category: 'singular',
    badge: { label: 'Élevage en Amphore de Terre Cuite', tone: 'gold' },
    distinction: "Cuvée d'Auteur",
    blend: '100% Cabernet élevé en jarre de terre cuite',
    description:
      "L'amphore préserve la minéralité pure du sol sans l'apport boisé du chêne. Une texture tactile d'une grande fluidité, des tanins polis et une pureté de cassis et poivre sauvage inoubliable.",
    image: IMAGES.wines.cab,
    alt: 'Artisanal wine bottle Cab ou pas Cab with warm terracotta wax cap and artistic hand-drawn typography label, placed next to a miniature clay amphora prop.',
    techSheet: {
      ...COMMON_TECH_SHEET,
      terroir: 'Argilo-calcaire — élevage en amphore',
      pairings: 'Cassoulet, viandes en sauce, châsseloup',
    },
  },
];
