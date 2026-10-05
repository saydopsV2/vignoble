import type { BadgeTone } from '../../types/domain';

const BADGE_TONE_CLASSES: Record<BadgeTone, string> = {
  primary: 'bg-primary/10 text-primary',
  secondary: 'bg-secondary-container/40 text-on-secondary-container',
  gold: 'bg-secondary/15 text-secondary',
  fixed: 'bg-primary-fixed text-primary',
  natural: 'bg-secondary-fixed text-on-secondary-fixed',
  neutral: 'bg-surface-container-highest text-on-surface',
};

interface BadgeProps {
  label: string;
  tone: BadgeTone;
  className?: string;
}

/** Colored pill badge pinned top-left on a wine card. */
export function Badge({ label, tone, className = '' }: BadgeProps) {
  return (
    <span
      className={`absolute top-3 left-3 px-3 py-1 rounded-full font-label-sm text-label-sm uppercase tracking-wider font-semibold transition-all group-hover:bg-primary group-hover:text-on-primary ${BADGE_TONE_CLASSES[tone]} ${className}`}
    >
      {label}
    </span>
  );
}

const SUB_BADGE_TONE_CLASSES: Record<BadgeTone, string> = {
  primary: 'bg-primary/10 text-primary',
  secondary: 'bg-secondary-container/30 text-secondary',
  gold: 'bg-secondary/15 text-secondary',
  fixed: 'bg-primary-fixed text-primary',
  natural: 'bg-secondary-fixed text-on-secondary-fixed',
  neutral: 'bg-surface-container-highest text-on-surface',
};

interface SubBadgeProps {
  label: string;
  tone: BadgeTone;
}

/** Secondary pill badge pinned top-right on a wine card. */
export function SubBadge({ label, tone }: SubBadgeProps) {
  return (
    <span className={`absolute top-3 right-3 px-2.5 py-1 rounded-full font-label-sm text-label-sm ${SUB_BADGE_TONE_CLASSES[tone]}`}>
      {label}
    </span>
  );
}
