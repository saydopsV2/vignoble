import type { ReactNode } from 'react';
import { useRevealOnScroll } from '../../hooks/useRevealOnScroll';

interface RevealOnScrollProps {
  children: ReactNode;
  className?: string;
  threshold?: number;
}

/** Applies the progressive reveal animation when the section enters the viewport. */
export function RevealOnScroll({ children, className = '', threshold = 0.12 }: RevealOnScrollProps) {
  const { ref, isVisible } = useRevealOnScroll<HTMLDivElement>(threshold);

  return (
    <div ref={ref} className={`reveal-on-scroll ${isVisible ? 'is-visible' : ''} ${className}`.trim()}>
      {children}
    </div>
  );
}
