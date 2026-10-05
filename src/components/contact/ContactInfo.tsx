import type { ReactElement } from 'react';
import { CONTACT } from '../../data/site';
import { MaterialIcon } from '../ui/MaterialIcon';

const CONTACT_BLOCKS = [
  {
    icon: 'pin_drop',
    title: CONTACT.address.label,
    key: 'address',
  },
  {
    icon: 'phone_in_talk',
    title: 'Téléphones Directs',
    key: 'phones',
  },
  {
    icon: 'mail',
    title: 'Courriels',
    key: 'emails',
  },
  {
    icon: 'navigation',
    title: 'Coordonnées GPS Précises',
    key: 'gps',
  },
] as const;

function AddressBlock() {
  return (
    <p className="font-body-sm text-body-sm text-on-surface-variant">
      {CONTACT.address.lines.map((line) => (
        <span key={line}>
          {line}
          <br />
        </span>
      ))}
    </p>
  );
}

function PhonesBlock() {
  return (
    <p className="font-body-sm text-body-sm text-on-surface-variant space-y-1">
      {CONTACT.phones.map((phone) => (
        <a key={phone.href} className="hover:text-primary transition-colors block" href={phone.href}>
          {phone.number} ({phone.label})
        </a>
      ))}
    </p>
  );
}

function EmailsBlock() {
  return (
    <p className="font-body-sm text-body-sm text-on-surface-variant">
      {CONTACT.emails.map((email, index) => (
        <a
          key={email.href}
          href={email.href}
          className={`hover:text-primary transition-colors block ${index === 0 ? 'font-medium' : 'text-xs'}`}
        >
          {email.label}
        </a>
      ))}
    </p>
  );
}

function GpsBlock() {
  return (
    <p className="font-mono text-xs text-on-surface-variant">
      {CONTACT.gps.dms}
      <br />
      <span className="text-primary font-semibold">{CONTACT.gps.decimal}</span>
    </p>
  );
}

const BLOCK_RENDERERS: Record<(typeof CONTACT_BLOCKS)[number]['key'], () => ReactElement> = {
  address: AddressBlock,
  phones: PhonesBlock,
  emails: EmailsBlock,
  gps: GpsBlock,
};

export function ContactInfo() {
  return (
    <div className="lg:col-span-5 flex flex-col space-y-8">
      <div>
        <span className="font-label-md text-label-md uppercase tracking-widest text-secondary font-semibold block mb-2">
          Nous Situer & Venir
        </span>
        <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight mb-4">
          Château Haut-Jamard
        </h2>
        <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
          Pour un accueil optimal et une parfaite disponibilité lors de votre dégustation, merci de bien
          vouloir prévenir de votre venue.
        </p>
      </div>

      <div className="p-6 rounded-xl bg-surface-container-lowest shadow-[0_4px_20px_-2px_rgba(92,22,46,0.04)] border border-outline-variant/30 space-y-5">
        {CONTACT_BLOCKS.map((block, index) => {
          const Content = BLOCK_RENDERERS[block.key];
          return (
            <div
              key={block.key}
              className={`flex items-start gap-4 group ${index > 0 ? 'pt-4 border-t border-surface-container' : ''}`}
            >
              <MaterialIcon
                name={block.icon}
                className="text-secondary text-2xl mt-1 group-hover:scale-110 transition-transform"
              />
              <div>
                <span className="font-title text-title text-on-surface block text-base font-semibold">
                  {block.title}
                </span>
                <Content />
              </div>
            </div>
          );
        })}
      </div>

      <div className="w-full h-52 rounded-xl bg-cover bg-center shadow-md relative overflow-hidden group hover:shadow-xl transition-all duration-300">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url('${CONTACT.mapImage}')` }}
          role="img"
          aria-label={CONTACT.mapAlt}
        />
        <div className="absolute inset-0 bg-primary/20 backdrop-blur-[1px] group-hover:bg-primary/10 transition-colors duration-300 flex items-center justify-center">
          <div className="px-4 py-2 rounded-lg bg-surface-container-lowest/90 shadow text-center transform group-hover:scale-105 transition-transform duration-300">
            <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold block">
              {CONTACT.mapCaption.title}
            </span>
            <span className="font-body-sm text-body-sm text-on-surface-variant text-xs">
              {CONTACT.mapCaption.subtitle}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
