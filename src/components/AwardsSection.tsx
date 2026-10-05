import { AWARDS } from '../data/site';
import { MaterialIcon } from './ui/MaterialIcon';
import { RevealOnScroll } from './ui/RevealOnScroll';

function AwardCard({ icon, institution, distinction }: { icon: string; institution: string; distinction: string }) {
  return (
    <div className="group p-6 rounded-xl bg-surface border border-outline-variant/30 flex flex-col items-center justify-center text-center hover:shadow-lg hover:-translate-y-1.5 hover:border-secondary/40 transition-all duration-300 cursor-default">
      <MaterialIcon
        name={icon}
        className="text-secondary text-3xl mb-2 group-hover:rotate-6 group-hover:scale-110 transition-transform duration-300"
      />
      <span className="font-title text-title text-on-surface text-sm font-semibold">{institution}</span>
      <span className="font-label-sm text-label-sm text-on-surface-variant mt-1">{distinction}</span>
    </div>
  );
}

export function AwardsSection() {
  return (
    <RevealOnScroll>
      <section className="w-full py-16 px-6 lg:px-12 bg-surface-container-lowest" id="recompenses">
        <div className="max-w-7xl mx-auto text-center">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-semibold block mb-2">
            Reconnaissance Viticole
          </span>
          <h3 className="font-headline-md text-headline-md text-primary mb-10">
            Nos Vins Régulièrement Récompensés
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
            {AWARDS.map((award) => (
              <AwardCard
                key={award.id}
                icon={award.icon}
                institution={award.institution}
                distinction={award.distinction}
              />
            ))}
          </div>
        </div>
      </section>
    </RevealOnScroll>
  );
}
