import { useMemo, useState } from 'react';
import type { Wine, WineFilter } from '../types/domain';
import { WINES } from '../data/wines';
import { SectionHeading } from './ui/SectionHeading';
import { RevealOnScroll } from './ui/RevealOnScroll';
import { CuveesGrid } from './cuvees/CuveesGrid';
import { TechSheetModal } from './cuvees/TechSheetModal';

const FILTERS: WineFilter[] = ['all', 'red', 'rose', 'singular'];

/** Cave section: filterable cuvée grid + technical-sheet modal. */
export function CuveesSection() {
  const [activeFilter, setActiveFilter] = useState<WineFilter>('all');
  const [selectedWine, setSelectedWine] = useState<Wine | null>(null);

  const counts = useMemo(() => {
    const result = {} as Record<WineFilter, number>;
    for (const filter of FILTERS) {
      result[filter] =
        filter === 'all' ? WINES.length : WINES.filter((wine) => wine.category === filter).length;
    }
    return result;
  }, []);

  const visibleWines = useMemo(
    () => (activeFilter === 'all' ? WINES : WINES.filter((wine) => wine.category === activeFilter)),
    [activeFilter],
  );

  const openTechSheet = (wine: Wine) => setSelectedWine(wine);
  const closeTechSheet = () => setSelectedWine(null);

  return (
    <RevealOnScroll>
      <section className="w-full py-24 px-6 lg:px-12 bg-surface-container-low" id="cuvees">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            align="center"
            eyebrow="La Cave du Domaine"
            title="Nos 7 Cuvées Artisanales"
            description="Chaque cuvée exprime une facette unique de notre terroir de Lussac Saint-Émilion, des grands classiques de garde aux créations sans sulfites et élevages en amphore."
          />

          <CuveesGrid
            wines={visibleWines}
            activeFilter={activeFilter}
            counts={counts}
            onFilterChange={setActiveFilter}
            onRequestTechSheet={openTechSheet}
          />
        </div>

        <TechSheetModal wine={selectedWine} onClose={closeTechSheet} />
      </section>
    </RevealOnScroll>
  );
}
