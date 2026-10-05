import { useEffect, useState } from 'react';

const SCROLL_THRESHOLD = 40;

/** Header elevation state driven by scroll position. */
export function useScrolledHeader(offset = SCROLL_THRESHOLD) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > offset);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [offset]);

  return isScrolled;
}
