import type { Wine, WineFilter } from '../../types/domain';
import { CuveeFilterTabs } from './CuveeFilterTabs';
import { WineCard } from './WineCard';

interface CuveesGridProps {
  wines: Wine[];
  activeFilter: WineFilter;
  counts: Record<WineFilter, number>;
  onFilterChange: (filter: WineFilter) => void;
  onRequestTechSheet: (wine: Wine) => void;
}

export const WINE_FILTERS = [
  { id: 'all' as const, label: 'Toutes les cuvées' },
  { id: 'red' as const, label: "Rouges d'Exception" },
  { id: 'rose' as const, label: 'Rosés & Effervescents' },
  { id: 'singular' as const, label: 'Créations Singulières' },
];

/** Grid of cuvée cards with centered orphan card on large screens. */
export function CuveesGrid({ wines, activeFilter, counts, onFilterChange, onRequestTechSheet }: CuveesGridProps) {
  return (
    <>
      <CuveeFilterTabs filters={WINE_FILTERS} activeFilter={activeFilter} counts={counts} onChange={onFilterChange} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {wines.map((wine, index) => {
          const isLastOddCard = index === wines.length - 1 && wines.length % 2 === 1;
          return (
            <WineCard
              key={wine.id}
              wine={wine}
              className={isLastOddCard ? 'lg:col-start-2' : ''}
              onRequestTechSheet={onRequestTechSheet}
            />
          );
        })}
      </div>
    </>
  );
}
