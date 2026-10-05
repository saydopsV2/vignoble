import { NAV_LINKS } from '../data/site';
import { IMAGES } from '../data/images';
import { useScrolledHeader } from '../hooks/useScrolledHeader';

const BRAND = {
  name: 'Vignoble Charpentier',
  appellation: 'Lussac Saint-Émilion',
};

export function Header() {
  const isScrolled = useScrolledHeader();

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full z-50 border-b border-surface-container/60 transition-all duration-300 backdrop-blur-md ${
        isScrolled ? 'bg-surface/95 shadow-md' : 'bg-surface/80 shadow-[0_1px_12px_rgba(0,0,0,0.04)]'
      }`}
    >
      <div className="h-20 max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between gap-6">
        <a href="#top" className="flex items-center gap-4 flex-shrink-0 group">
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

        <div className="flex items-center gap-6 flex-shrink-0">
          <div className="hidden sm:flex flex-col items-end text-right">
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
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-primary-container text-on-primary font-label-lg text-label-lg hover:bg-primary transition-all duration-300 hover:shadow-md hover:scale-[1.02] active:scale-[0.98]"
          >
            Réserver une dégustation
          </a>
        </div>
      </div>
    </header>
  );
}
