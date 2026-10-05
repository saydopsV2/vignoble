import type { Experience } from '../types/domain';
import { EXPERIENCES } from '../data/experiences';
import { MaterialIcon } from './ui/MaterialIcon';
import { RevealOnScroll } from './ui/RevealOnScroll';
import { SectionHeading } from './ui/SectionHeading';

const TOP_BADGE_TONES = {
  light: 'bg-surface-container-lowest/90 backdrop-blur-md text-primary',
  gold: 'bg-secondary-fixed text-on-secondary-fixed',
  primary: 'bg-primary-container text-on-primary',
} as const;

const CTA_VARIANTS = {
  surface:
    'bg-surface-container text-primary font-label-md text-label-md tracking-wider uppercase hover:bg-primary hover:text-on-primary',
  primary:
    'bg-primary-container text-on-primary font-label-md text-label-md tracking-wider uppercase hover:bg-primary',
} as const;

function ExperienceCard({ experience }: { experience: Experience }) {
  const { topBadge, topBadgeTone, bottomBadges, icon, kicker, title, description, meta, cta } = experience;

  return (
    <article className="flex flex-col bg-surface-container-lowest rounded-xl overflow-hidden shadow-[0_4px_20px_-2px_rgba(92,22,46,0.04)] border border-outline-variant/30 hover:border-primary/30 hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-500 group">
      <div className="h-60 w-full overflow-hidden relative">
        <div
          className="w-full h-full bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
          style={{ backgroundImage: `url('${experience.image}')` }}
          role="img"
          aria-label={experience.alt}
        />
        <div className={`absolute top-4 left-4 px-3 py-1 rounded-full font-label-sm text-label-sm uppercase tracking-wider font-semibold shadow-sm ${TOP_BADGE_TONES[topBadgeTone]}`}>
          {topBadge}
        </div>
        {bottomBadges.length > 0 && (
          <div className="absolute bottom-4 right-4 flex gap-1">
            {bottomBadges.map((badge) => (
              <span key={badge} className="px-2 py-0.5 rounded bg-inverse-surface/80 text-surface-container-lowest text-xs backdrop-blur-sm">
                {badge}
              </span>
            ))}
          </div>
        )}
      </div>

      <div className="p-8 flex flex-col justify-between flex-1">
        <div>
          <div className="flex items-center gap-2 text-secondary mb-2">
            <MaterialIcon name={icon} className="text-xl group-hover:scale-110 transition-transform" />
            <span className="font-label-sm text-label-sm uppercase tracking-wider font-semibold">
              {kicker}
            </span>
          </div>
          <h3 className="font-headline-sm text-headline-sm text-primary mb-3 group-hover:text-primary-container transition-colors">
            {title}
          </h3>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-6">
            {description}
          </p>
        </div>

        <div className="space-y-4 pt-4 border-t border-surface-container">
          <div className="flex items-center justify-between text-sm text-on-surface-variant">
            <span>{meta.label}</span>
            {meta.href ? (
              <a className="font-semibold text-primary hover:text-secondary transition-colors" href={meta.href}>
                {meta.value}
              </a>
            ) : (
              <span className="font-mono text-xs font-semibold text-primary">{meta.value}</span>
            )}
          </div>
          <a
            href={cta.href}
            className={`w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-lg transition-all duration-300 hover:shadow-md active:scale-[0.98] ${CTA_VARIANTS[cta.variant]}`}
          >
            <MaterialIcon name={cta.icon} className="text-lg" />
            {cta.label}
          </a>
        </div>
      </div>
    </article>
  );
}

export function OenotourismeSection() {
  return (
    <RevealOnScroll>
      <section className="w-full py-24 px-6 lg:px-12 bg-surface" id="oenotourisme">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            align="center"
            eyebrow="Vivre L'Expérience du Vignoble"
            title="Venez nous rencontrer à Lussac Saint-Émilion"
            description="Carine et Olivier Charpentier vous ouvrent les portes du Château Haut-Jamard. Séjournez au cœur du domaine, faites escale en camping-car ou partagez un moment convivial de dégustation."
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {EXPERIENCES.map((experience) => (
              <ExperienceCard key={experience.id} experience={experience} />
            ))}
          </div>
        </div>
      </section>
    </RevealOnScroll>
  );
}
