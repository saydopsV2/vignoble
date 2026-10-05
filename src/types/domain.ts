/** Types métier centralisés du domaine Vignoble Charpentier. */

export type WineCategory = 'red' | 'rose' | 'singular';

export type WineFilter = 'all' | WineCategory;

export type BadgeTone =
  | 'primary'
  | 'secondary'
  | 'gold'
  | 'fixed'
  | 'natural'
  | 'neutral';

export interface TechSheet {
  appellation: string;
  terroir: string;
  certification: string;
  serviceTemperature: string;
  pairings: string;
}

export interface Wine {
  id: string;
  name: string;
  category: WineCategory;
  badge: {
    label: string;
    tone: BadgeTone;
  };
  subBadge?: {
    label: string;
    tone: BadgeTone;
  };
  distinction: string;
  blend: string;
  description: string;
  image: string;
  alt: string;
  techSheet: TechSheet;
}

export interface GrapeVariety {
  id: string;
  label: string;
  percentage: number;
  barClass: string;
}

export interface HeroBadge {
  icon: string;
  title: string;
  subtitle: string;
}

export interface Award {
  id: string;
  icon: string;
  institution: string;
  distinction: string;
}

export interface NavLink {
  id: string;
  label: string;
  href: string;
}

export interface ExperienceMeta {
  label: string;
  value: string;
  href?: string;
}

export interface Experience {
  id: string;
  image: string;
  alt: string;
  topBadge: string;
  topBadgeTone: 'light' | 'gold' | 'primary';
  bottomBadges: string[];
  icon: string;
  kicker: string;
  title: string;
  description: string;
  meta: ExperienceMeta;
  cta: {
    label: string;
    icon: string;
    href: string;
    variant: 'surface' | 'primary';
  };
}

export interface ContactRequest {
  nom: string;
  email: string;
  telephone: string;
  motif: string;
  dateVisite: string;
  personnes: string;
  message: string;
}

export interface SelectOption {
  value: string;
  label: string;
}
