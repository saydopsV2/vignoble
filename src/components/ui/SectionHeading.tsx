import type { ReactNode } from 'react';

interface SectionHeadingProps {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  align?: 'left' | 'center';
  titleClassName?: string;
}

/** Standardized section header with eyebrow label, title and optional lead paragraph. */
export function SectionHeading({ eyebrow, title, description, align = 'left', titleClassName = '' }: SectionHeadingProps) {
  const isCentered = align === 'center';

  return (
    <div className={isCentered ? 'text-center max-w-3xl mx-auto' : ''}>
      <span className="font-label-md text-label-md uppercase tracking-widest text-secondary font-semibold block mb-2">
        {eyebrow}
      </span>
      <h2 className={`font-headline-lg text-headline-lg text-primary tracking-tight ${isCentered ? 'mb-4' : 'max-w-2xl'} ${titleClassName}`}>
        {title}
      </h2>
      {description && (
        <p className="font-body-lg text-body-lg text-on-surface-variant font-light">{description}</p>
      )}
    </div>
  );
}
