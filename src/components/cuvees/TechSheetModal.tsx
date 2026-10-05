import { createPortal } from 'react-dom';
import type { Wine } from '../../types/domain';
import { MaterialIcon } from '../ui/MaterialIcon';
import { useModalBehavior } from '../../hooks/useModalBehavior';

interface TechSheetModalProps {
  wine: Wine | null;
  onClose: () => void;
}

interface TechSheetRowProps {
  label: string;
  value: string;
  isLast?: boolean;
}

function TechSheetRow({ label, value, isLast = false }: TechSheetRowProps) {
  return (
    <div className={`flex justify-between gap-6 py-2 ${isLast ? '' : 'border-b border-surface-container-low'}`}>
      <span className="text-on-surface font-medium">{label}</span>
      <span className={`text-right ${label === 'Certification' ? 'text-secondary font-semibold' : 'text-on-surface'}`}>
        {value}
      </span>
    </div>
  );
}

/**
 * Technical sheet dialog for a cuvée.
 *
 * Rendered through a React portal on document.body so that `position: fixed`
 * is always relative to the viewport — a transformed ancestor (reveal-on-scroll)
 * would otherwise become the containing block and break centering.
 * Stays mounted for CSS transitions; hidden with opacity/pointer-events when closed.
 */
export function TechSheetModal({ wine, onClose }: TechSheetModalProps) {
  useModalBehavior({ isOpen: wine !== null, onClose });

  const isOpen = wine !== null;

  return createPortal(
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 bg-inverse-surface/60 backdrop-blur-sm transition-all duration-300 ${
        isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      onClick={onClose}
      aria-hidden={!isOpen}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-wine-title"
        className={`bg-surface-container-lowest w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-2xl p-6 sm:p-8 shadow-2xl border border-outline-variant transition-all duration-300 ${
          isOpen ? 'scale-100' : 'scale-95'
        }`}
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-4 border-b border-surface-container">
          <div className="flex items-center gap-2">
            <MaterialIcon name="wine_bar" className="text-secondary text-2xl" />
            <h3 className="font-headline-sm text-headline-sm text-primary" id="modal-wine-title">
              {wine ? `Fiche : ${wine.name}` : 'Fiche Technique'}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Fermer la fiche technique"
            className="w-8 h-8 rounded-full flex items-center justify-center text-on-surface-variant hover:text-primary hover:bg-surface-container transition-colors"
          >
            <MaterialIcon name="close" />
          </button>
        </div>

        <div className="py-6 space-y-4 text-on-surface-variant font-body-sm text-body-sm">
          {wine ? (
            <>
              <TechSheetRow label="Appellation" value={wine.techSheet.appellation} />
              <TechSheetRow label="Terroir" value={wine.techSheet.terroir} />
              <TechSheetRow label="Certification" value={wine.techSheet.certification} />
              <TechSheetRow label="Température de service" value={wine.techSheet.serviceTemperature} />
              <TechSheetRow label="Accords Mets & Vins" value={wine.techSheet.pairings} isLast />
            </>
          ) : (
            <p>Sélectionnez une cuvée pour afficher sa fiche technique.</p>
          )}
        </div>

        <div className="pt-2 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-6 py-2.5 rounded-lg bg-primary text-on-primary font-label-md text-label-md uppercase tracking-wider hover:bg-primary-container transition-colors"
          >
            Fermer
          </button>
        </div>
      </div>
    </div>,
    document.body,
  );
}
