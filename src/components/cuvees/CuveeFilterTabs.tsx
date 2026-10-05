import type { WineFilter } from '../../types/domain';

export interface FilterDefinition {
  id: WineFilter;
  label: string;
}

interface CuveeFilterTabsProps {
  filters: FilterDefinition[];
  activeFilter: WineFilter;
  counts: Record<WineFilter, number>;
  onChange: (filter: WineFilter) => void;
}

/** Pill-shaped category filter tabs with live counts. */
export function CuveeFilterTabs({ filters, activeFilter, counts, onChange }: CuveeFilterTabsProps) {
  return (
    <div
      className="flex flex-wrap items-center justify-center gap-2 mt-8 p-1.5 bg-surface-container/60 rounded-full w-fit mx-auto backdrop-blur-sm"
      role="tablist"
      aria-label="Filtrer les cuvées"
    >
      {filters.map((filter) => {
        const isActive = filter.id === activeFilter;
        return (
          <button
            key={filter.id}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(filter.id)}
            className={`px-5 py-2 rounded-full font-label-md text-label-md tracking-wider uppercase transition-all duration-300 hover:scale-[1.02] ${
              isActive
                ? 'bg-primary text-on-primary shadow-sm'
                : 'bg-transparent text-on-surface-variant hover:text-primary hover:bg-surface-container-lowest'
            }`}
          >
            {filter.label} ({counts[filter.id]})
          </button>
        );
      })}
    </div>
  );
}
