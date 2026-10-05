import { MaterialIcon } from './ui/MaterialIcon';
import { RevealOnScroll } from './ui/RevealOnScroll';

const SALON = {
  kicker: 'Tournées & Événements',
  title: 'Retrouvez-nous lors de nos salons en France & Belgique',
  description:
    "Nous participons à plusieurs foires du vin et soirées dégustation toute l'année. Rejoignez notre carnet d'adresses pour recevoir votre invitation personnelle et vos entrées gratuites.",
  cta: { label: 'Recevoir le calendrier des salons', href: '#contact' },
};

export function SalonsBanner() {
  return (
    <RevealOnScroll>
      <section className="w-full py-16 px-6 lg:px-12 bg-primary text-on-primary relative overflow-hidden">
        <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-primary-fixed-dim/10 blur-3xl pointer-events-none" />
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 rounded-full bg-secondary-fixed/20 flex items-center justify-center flex-shrink-0 text-secondary-fixed shadow-inner transition-transform duration-300 hover:rotate-12">
              <MaterialIcon name="local_activity" className="text-3xl" />
            </div>
            <div>
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary-fixed block mb-1">
                {SALON.kicker}
              </span>
              <h3 className="font-headline-sm text-headline-sm text-surface-container-lowest mb-2">
                {SALON.title}
              </h3>
              <p className="font-body-sm text-body-sm text-surface-dim max-w-xl">{SALON.description}</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto flex-shrink-0">
            <a
              href={SALON.cta.href}
              className="w-full sm:w-auto px-6 py-3.5 rounded-lg bg-secondary-fixed text-on-secondary-fixed font-label-md text-label-md uppercase tracking-wider font-semibold hover:bg-secondary-fixed-dim transition-all duration-300 text-center hover:shadow-[0_8px_20px_rgba(255,224,136,0.35)] transform hover:-translate-y-0.5 active:scale-[0.98]"
            >
              {SALON.cta.label}
            </a>
          </div>
        </div>
      </section>
    </RevealOnScroll>
  );
}
