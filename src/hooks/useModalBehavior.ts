import { useEffect } from 'react';

interface UseModalBehaviorOptions {
  isOpen: boolean;
  onClose: () => void;
}

/**
 * Shared modal behavior: Escape key close + body scroll lock.
 */
export function useModalBehavior({ isOpen, onClose }: UseModalBehaviorOptions) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);
}
