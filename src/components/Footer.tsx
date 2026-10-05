import { NAV_LINKS } from '../data/site';

const FOOTER = {
  brand: {
    name: 'Vignoble Charpentier',
    estate: 'Château Haut-Jamard',
    description:
      "Passion viticole familiale depuis 4 générations à Lussac Saint-Émilion. Vins d'excellence sublimant la richesse argilo-calcaire de notre terroir d'exception.",
    tag: 'Vigneron Récoltant',
  },
  engagements: ['HVE Niveau 4', 'Étape France Passion'],
  hours: {
    label: 'Horaires du Caveau',
    value: 'Lun – Ven : 9h00–12h00 & 14h00–18h00\nWeek-ends & Jours fériés : sur rendez-vous',
  },
  gps: '44.727232, -0.363451',
  gpsNote: 'À 15 min de Saint-Émilion village, accueil camping-caristes réservé.',
  newsletterLabel: 'Le Journal du Domaine',
  newsletterPlaceholder: 'Votre adresse email',
  newsletterCta: "S'inscrire",
  legal: {
    copyright: '© 2025 Vignoble Charpentier – Château Haut-Jamard. Tous droits réservés.',
    links: [
      { id: 'mentions-legales', label: 'Mentions légales', href: '#' },
      { id: 'politique-confidentialite', label: 'Politique de confidentialité', href: '#' },
    ],
    warning: "L'abus d'alcool est dangereux pour la santé, à consommer avec modération.",
  },
};

function BrandColumn() {
  return (
    <div className="flex flex-col space-y-4">
      <div className="flex flex-col">
        <span className="font-headline-sm text-headline-sm text-[#e9c349] tracking-wide">
          {FOOTER.brand.name}
        </span>
        <span className="font-label-md text-label-md tracking-wider text-[#d8c1c4] uppercase mt-1">
          {FOOTER.brand.estate}
        </span>
      </div>
      <p className="font-body-sm text-body-sm text-[#dbdad7] leading-relaxed">
        {FOOTER.brand.description}
      </p>
      <div className="pt-2">
        <span className="inline-block px-3 py-1 rounded-full bg-secondary-container/20 text-[#ffe088] font-label-sm text-label-sm uppercase tracking-wider">
          {FOOTER.brand.tag}
        </span>
      </div>
    </div>
  );
}

function NavColumn() {
  return (
    <div className="flex flex-col space-y-4">
      <h4 className="font-title text-title text-[#e9c349] tracking-wide">Domaine & Savoir-faire</h4>
      <ul className="space-y-2.5 font-body-sm text-body-sm text-[#dbdad7]">
        {NAV_LINKS.slice(0, 4).map((link) => (
          <li key={link.id}>
            <a className="hover:text-[#ffe088] transition-colors duration-200" href={link.href}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>
      <div className="pt-3 space-y-2">
        <span className="font-label-sm text-label-sm uppercase tracking-wider text-[#867276] block">
          Engagements
        </span>
        <div className="flex flex-wrap gap-2">
          {FOOTER.engagements.map((engagement) => (
            <span key={engagement} className="px-2.5 py-1 rounded text-[#ffe088] bg-[#30312f] font-label-sm text-label-sm">
              {engagement}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function ContactColumn() {
  return (
    <div className="flex flex-col space-y-4">
      <h4 className="font-title text-title text-[#e9c349] tracking-wide">Contact & Accueil</h4>
      <div className="font-body-sm text-body-sm text-[#dbdad7] space-y-2 leading-relaxed">
        <p>
          Lieu-dit Jamard Ouest
          <br />
          33570 Lussac, France
        </p>
        <p className="pt-1">
          <span className="text-[#ffe088] font-medium">Tél :</span> 06 07 06 08 20
          <br />
          <span className="text-[#ffe088] font-medium">Fixe :</span> 05 57 74 51 28
        </p>
        <p>
          <span className="text-[#ffe088] font-medium">Email :</span>{' '}
          <a href="mailto:contact@vignoble-charpentier.fr" className="hover:text-[#ffe088] transition-colors">
            contact@vignoble-charpentier.fr
          </a>
        </p>
        <div className="pt-2 border-t border-[#30312f]">
          <span className="font-label-sm text-label-sm uppercase text-[#867276] block mb-1">
            {FOOTER.hours.label}
          </span>
          <p className="text-xs text-[#dbdad7] whitespace-pre-line">{FOOTER.hours.value}</p>
        </div>
      </div>
    </div>
  );
}

function NewsletterColumn() {
  return (
    <div className="flex flex-col space-y-4">
      <h4 className="font-title text-title text-[#e9c349] tracking-wide">Accès & Lettre d'Info</h4>
      <div className="font-body-sm text-body-sm text-[#dbdad7] space-y-1.5">
        <span className="font-label-sm text-label-sm uppercase text-[#867276] block">Coordonnées GPS</span>
        <p className="font-mono text-xs text-[#ffe088]">{FOOTER.gps}</p>
        <p className="text-xs text-[#dbdad7]">{FOOTER.gpsNote}</p>
      </div>
      <div className="pt-2">
        <label className="font-label-sm text-label-sm uppercase tracking-wider text-[#d8c1c4] block mb-2" htmlFor="footer-newsletter">
          {FOOTER.newsletterLabel}
        </label>
        <form className="flex flex-col gap-2" onSubmit={(event) => event.preventDefault()}>
          <input
            className="w-full px-3.5 py-2.5 rounded-lg bg-[#1b1c1a] border border-[#534246] text-[#f2f0ed] placeholder-[#867276] font-body-sm text-body-sm focus:outline-none focus:border-[#e9c349] transition-colors"
            id="footer-newsletter"
            placeholder={FOOTER.newsletterPlaceholder}
            type="email"
          />
          <button
            className="w-full py-2 px-4 rounded-lg bg-[#735c00] hover:bg-[#ffe088] hover:text-[#241a00] text-[#ffffff] font-label-md text-label-md uppercase tracking-wider transition-all duration-300 hover:shadow-md active:scale-[0.98]"
            type="button"
          >
            {FOOTER.newsletterCta}
          </button>
        </form>
      </div>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="w-full bg-[#141416] text-[#f2f0ed] pt-16 pb-12 shadow-[0_-2px_16px_rgba(0,0,0,0.06)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <BrandColumn />
        <NavColumn />
        <ContactColumn />
        <NewsletterColumn />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 mt-12 pt-8 border-t border-[#30312f] flex flex-col md:flex-row items-center justify-between gap-4 font-body-sm text-body-sm text-[#867276]">
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-center sm:text-left">
          <span>{FOOTER.legal.copyright}</span>
          {FOOTER.legal.links.map((link) => (
            <a key={link.id} className="hover:text-[#dbdad7] transition-colors duration-200" href={link.href}>
              {link.label}
            </a>
          ))}
        </div>
        <div className="text-xs text-[#867276] text-center md:text-right italic">
          {FOOTER.legal.warning}
        </div>
      </div>
    </footer>
  );
}
