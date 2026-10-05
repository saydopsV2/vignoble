import type { Wine } from '../../types/domain';
import { Badge, SubBadge } from '../ui/Badge';
import { MaterialIcon } from '../ui/MaterialIcon';

interface WineCardProps {
  wine: Wine;
  className?: string;
  onRequestTechSheet: (wine: Wine) => void;
}

/** Product card for a single cuvée, with order CTA and tech-sheet trigger. */
export function WineCard({ wine, className = '', onRequestTechSheet }: WineCardProps) {
  return (
    <article
      className={`cuvee-card group flex flex-col justify-between bg-surface-container-lowest rounded-xl p-6 shadow-[0_4px_20px_-2px_rgba(92,22,46,0.04)] border border-outline-variant/30 hover:border-primary/30 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1.5 animate-fade-in-up ${className}`}
    >
      <div>
        <div className="relative w-full h-72 rounded-lg bg-surface-container-low flex items-center justify-center overflow-hidden mb-6">
          <Badge label={wine.badge.label} tone={wine.badge.tone} />
          {wine.subBadge && <SubBadge label={wine.subBadge.label} tone={wine.subBadge.tone} />}
          <img
            src={wine.image}
            alt={wine.alt}
            loading="lazy"
            className="h-64 object-contain transition-all duration-500 ease-out group-hover:-translate-y-2 group-hover:scale-105 drop-shadow-lg"
          />
        </div>

        <div className="flex items-baseline justify-between mb-2">
          <h3 className="font-headline-sm text-headline-sm text-primary font-semibold group-hover:text-primary-container transition-colors">
            {wine.name}
          </h3>
          <span className="font-label-sm text-label-sm text-secondary font-semibold">
            {wine.distinction}
          </span>
        </div>
        <p className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant mb-3">
          {wine.blend}
        </p>
        <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mb-4">
          {wine.description}
        </p>
      </div>

      <div className="pt-4 flex items-center justify-between gap-3 border-t border-surface-container/60">
        <a
          href="#contact"
          className="flex-1 py-2.5 px-4 rounded-lg bg-primary-container text-on-primary text-center font-label-md text-label-md tracking-wider uppercase hover:bg-primary hover:shadow-md transition-all duration-300"
        >
          Commander au domaine
        </a>
        <button
          type="button"
          onClick={() => onRequestTechSheet(wine)}
          title={`Voir la fiche technique de ${wine.name}`}
          aria-label={`Voir la fiche technique de ${wine.name}`}
          className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-lg bg-surface-container text-primary font-label-md text-label-md tracking-wider uppercase hover:bg-primary hover:text-on-primary hover:rotate-6 transition-all duration-300"
        >
          <MaterialIcon name="description" className="text-lg" />
          <span className="hidden min-[420px]:inline">Plus de détails</span>
        </button>
      </div>
    </article>
  );
}
