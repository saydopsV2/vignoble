import { useEffect, useState } from 'react';
import { NAV_LINKS } from '../data/site';
import { IMAGES } from '../data/images';
import { useScrolledHeader } from '../hooks/useScrolledHeader';
import { MaterialIcon } from './ui/MaterialIcon';

const BRAND = {
  name: 'Vignoble Charpentier',
  appellation: 'Lussac Saint-Émilion',
};

const MOBILE_BREAKPOINT = 1024; // taille xl : au-delà, le menu burger disparaît

export function Header() {
  const isScrolled = useScrolledHeader();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () => setIsMenuOpen(true);
  const closeMenu = () => setIsMenuOpen(false);

  // Verrouille le scroll tant que le menu est ouvert.
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  // Ferme le menu à l'Échap ou lors du passage en écran desktop.
  useEffect(() => {
    if (!isMenuOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeMenu();
    };

    const handleResize = () => {
      if (window.innerWidth >= MOBILE_BREAKPOINT) closeMenu();
    };

    document.addEventListener('keydown', handleKeyDown);
    window.addEventListener('resize', handleResize, { passive: true });

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full z-50 border-b border-surface-container/60 transition-all duration-300 backdrop-blur-md ${
        isScrolled ? 'bg-surface/95 shadow-md' : 'bg-surface/80 shadow-[0_1px_12px_rgba(0,0,0,0.04)]'
      }`}
    >
      <div className="h-20 max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between gap-6">
        <a href="#top" className="flex items-center gap-4 flex-shrink-0 group" aria-label="Vignoble Charpentier — accueil">
          <img
            alt={BRAND.name}
            src={IMAGES.logo}
            className="w-8 h-8 rounded-full object-cover transition-transform duration-300 group-hover:scale-105 group-hover:ring-2 group-hover:ring-secondary/40"
          />
          <div className="flex flex-col">
            <span className="font-headline-sm text-headline-sm tracking-tight text-primary leading-none transition-colors duration-200 group-hover:text-primary-container">
              {BRAND.name}
            </span>
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant mt-0.5">
              {BRAND.appellation}
            </span>
          </div>
        </a>

        {/* Navigation bureau */}
        <nav className="hidden xl:flex items-center gap-8" aria-label="Navigation principale">
          {NAV_LINKS.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className="nav-link-hover font-label-lg text-label-lg text-on-surface-variant hover:text-on-surface transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4 lg:gap-6 flex-shrink-0">
          <div className="hidden lg:flex flex-col items-end text-right">
            <span className="font-label-sm text-label-sm uppercase text-on-surface-variant tracking-wider">
              Caveau & Visites
            </span>
            <a
              className="font-body-md text-body-md font-semibold text-on-surface hover:text-secondary transition-colors duration-200"
              href="tel:0607060820"
            >
              06 07 06 08 20
            </a>
          </div>
          <a
            href="#contact"
            className="hidden md:inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-primary-container text-on-primary font-label-lg text-label-lg hover:bg-primary transition-all duration-300 hover:shadow-md hover:scale-[1.02] active:scale-[0.98]"
          >
            Réserver une dégustation
          </a>

          {/* Bouton burger — tablette & mobile (morphing ☰ ↔ ✕) */}
          <button
            type="button"
            onClick={isMenuOpen ? closeMenu : openMenu}
            aria-label={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            className="xl:hidden w-11 h-11 rounded-lg flex items-center justify-center text-primary hover:bg-surface-container transition-colors duration-300"
          >
            <span className="relative block w-6 h-5" aria-hidden="true">
              {/* Barre du haut : descend au centre et pivote à 45° */}
              <span
                className={`absolute left-0 h-[2px] w-full rounded-full bg-current transition-all duration-300 ease-out ${
                  isMenuOpen ? 'top-1/2 -translate-y-1/2 rotate-45' : 'top-0'
                }`}
              />
              {/* Barre centrale : s'efface */}
              <span
                className={`absolute left-0 top-1/2 h-[2px] w-full -translate-y-1/2 rounded-full bg-current transition-all duration-300 ease-out ${
                  isMenuOpen ? 'scale-x-0 opacity-0' : 'scale-x-100 opacity-100'
                }`}
              />
              {/* Barre du bas : monte au centre et pivote à -45° */}
              <span
                className={`absolute left-0 h-[2px] w-full rounded-full bg-current transition-all duration-300 ease-out ${
                  isMenuOpen ? 'top-1/2 -translate-y-1/2 -rotate-45' : 'top-[18px]'
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Menu mobile / tablette — panneau coulissant */}
      <div
        id="mobile-menu"
        className={`xl:hidden overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isMenuOpen ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0'
        }`}
        aria-hidden={!isMenuOpen}
      >
        <nav
          className="flex flex-col gap-1 px-6 pb-6 pt-2 bg-surface/95 backdrop-blur-md border-t border-surface-container/60"
          aria-label="Navigation mobile"
        >
          {NAV_LINKS.map((link, index) => (
            <a
              key={link.id}
              href={link.href}
              onClick={closeMenu}
              className={`px-4 py-3 rounded-lg font-label-lg text-label-lg text-on-surface-variant hover:text-primary hover:bg-surface-container transition-colors duration-200 ${
                isMenuOpen ? `animate-fade-in-up ${index > 0 ? `delay-${index * 100}` : ''}` : ''
              }`}
            >
              {link.label}
            </a>
          ))}

          <div className="mt-3 pt-4 border-t border-surface-container space-y-3">
            <a
              href="tel:0607060820"
              onClick={closeMenu}
              className="flex items-center justify-between px-4 py-3 rounded-lg bg-surface-container-low hover:bg-surface-container transition-colors duration-200"
            >
              <span className="flex items-center gap-3 font-body-md text-body-md font-semibold text-on-surface">
                <MaterialIcon name="phone_in_talk" className="text-secondary text-xl" />
                06 07 06 08 20
              </span>
              <span className="font-label-sm text-label-sm uppercase text-on-surface-variant tracking-wider">
                Caveau & Visites
              </span>
            </a>
            <a
              href="#contact"
              onClick={closeMenu}
              className="flex items-center justify-center gap-2 px-4 py-3.5 rounded-lg bg-primary-container text-on-primary font-label-lg text-label-lg hover:bg-primary transition-all duration-300"
            >
              <MaterialIcon name="wine_bar" className="text-xl" />
              Réserver une dégustation
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
