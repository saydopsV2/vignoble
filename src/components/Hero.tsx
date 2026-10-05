import { IMAGES } from '../data/images';
import { HERO_BADGES } from '../data/site';
import { MaterialIcon } from './ui/MaterialIcon';

const HERO = {
  badge: 'AOC Lussac Saint-Émilion • Depuis 4 Générations',
  title: 'Vignoble Charpentier',
  tagline: "L'excellence de Lussac Saint-Émilion, de la terre à la bouteille.",
  lede: 'Olivier & Carine Charpentier vous accueillent au Château Haut-Jamard au cœur de 16 hectares d’exception certifiés Haute Valeur Environnementale (HVE 4).',
  ctaPrimary: { label: 'Découvrir nos cuvées', icon: 'wine_bar', href: '#cuvees' },
  ctaSecondary: { label: 'Réserver une visite & dégustation', icon: 'calendar_month', href: '#oenotourisme' },
};

export function Hero() {
  return (
    <section className="relative w-full -mt-20 min-h-[92vh] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center animate-kenburns"
        style={{ backgroundImage: `url('${IMAGES.hero}')` }}
        role="img"
        aria-label="Vignoble de Lussac Saint-Émilion baigné de lumière dorée à l'heure d'or"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface via-inverse-surface/65 to-primary/40 backdrop-blur-[1px]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-32 pb-24 text-center flex flex-col items-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary-container/20 backdrop-blur-md shadow-sm mb-6 border border-secondary-fixed/20 animate-fade-in-up">
          <span className="w-2 h-2 rounded-full bg-secondary-fixed-dim animate-pulse" />
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary-fixed">
            {HERO.badge}
          </span>
        </div>

        <h1 className="font-display text-display text-surface-container-lowest max-w-4xl tracking-tight leading-tight mb-5 drop-shadow-md animate-fade-in-up delay-100">
          {HERO.title}
        </h1>
        <p className="font-headline-sm text-headline-sm text-secondary-fixed-dim italic font-serif max-w-2xl mb-4 animate-fade-in-up delay-200">
          {HERO.tagline}
        </p>
        <p className="font-body-lg text-body-lg text-surface-container-low max-w-2xl font-light leading-relaxed mb-10 animate-fade-in-up delay-300">
          {HERO.lede}
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto animate-fade-in-up delay-400">
          <a
            href={HERO.ctaPrimary.href}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-primary-container text-on-primary font-label-lg text-label-lg shadow-lg hover:bg-primary transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(92,22,46,0.4)] active:scale-[0.98]"
          >
            <MaterialIcon name={HERO.ctaPrimary.icon} className="text-[20px] transition-transform duration-300" />
            {HERO.ctaPrimary.label}
          </a>
          <a
            href={HERO.ctaSecondary.href}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-surface-container-lowest/15 backdrop-blur-md text-surface-container-lowest hover:bg-surface-container-lowest hover:text-primary font-label-lg text-label-lg transition-all duration-300 shadow-md border border-white/20 hover:border-white transform hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(0,0,0,0.25)] active:scale-[0.98]"
          >
            <MaterialIcon name={HERO.ctaSecondary.icon} className="text-[20px]" />
            {HERO.ctaSecondary.label}
          </a>
        </div>

        <div className="mt-14 w-full max-w-4xl pt-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-center animate-fade-in-up delay-500">
          {HERO_BADGES.map((badge) => (
            <div
              key={badge.title}
              className="badge-shine flex flex-col items-center p-3 rounded-lg bg-surface-container-lowest/10 backdrop-blur-sm border border-white/10 hover:border-secondary-fixed/40 hover:-translate-y-1 hover:bg-surface-container-lowest/20 transition-all duration-300 cursor-default"
            >
              <MaterialIcon name={badge.icon} className="text-secondary-fixed text-2xl mb-1 transition-transform duration-300 hover:scale-110" />
              <span className="font-label-md text-label-md text-surface-container-lowest uppercase tracking-wider">
                {badge.title}
              </span>
              <span className="font-body-sm text-body-sm text-surface-container-high text-xs">{badge.subtitle}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
