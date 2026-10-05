import { IMAGES } from '../data/images';
import { GRAPE_VARIETIES } from '../data/site';
import { MaterialIcon } from './ui/MaterialIcon';
import { RevealOnScroll } from './ui/RevealOnScroll';
import { SectionHeading } from './ui/SectionHeading';

const QUOTE = {
  text: "« L'expérience transmise de génération en génération apporte un travail réalisé dans le respect de la tradition tout en évoluant dans la modernité. »",
  author: 'Carine & Olivier Charpentier',
};

function StoryCard() {
  return (
    <div className="p-8 rounded-xl bg-surface-container-lowest shadow-[0_4px_20px_-2px_rgba(92,22,46,0.04)] border border-outline-variant/30 hover:border-primary/20 hover:shadow-md transition-all duration-300">
      <h3 className="font-headline-sm text-headline-sm text-primary mb-4">
        L'attachement viscéral à la terre de Lussac
      </h3>
      <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-4">
        Quatre générations de vignerons se sont succédées au <strong>Château Haut-Jamard</strong>. Aujourd'hui,{' '}
        <strong>Olivier Charpentier et son épouse Carine</strong> exploitent ce vignoble familial de 16 hectares avec une
        ferveur intacte. Avant tout attachés à la nature et artisans de la vigne, ils élaborent avec dévotion des vins
        singuliers dont chaque millésime conte la mémoire des sols.
      </p>
      <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
        Situé à seulement 8 kilomètres au nord de la cité médiévale de Saint-Émilion, le vignoble s'étend sur le lieu-dit
        Jamard Ouest. Les parcelles bénéficient d'une mosaïque de sols rares : <em>argilo-calcaires, argilo-limoneux et
        terres rouges</em>, assurant un drainage naturel d'exception et une insolation généreuse.
      </p>
    </div>
  );
}

function QuoteCard() {
  return (
    <div className="p-8 rounded-xl bg-surface-container-low relative overflow-hidden group border border-outline-variant/20 hover:border-secondary/30 transition-all duration-300">
      <MaterialIcon
        name="format_quote"
        className="absolute -right-2 -bottom-2 text-7xl text-primary/10 select-none group-hover:scale-110 group-hover:text-primary/15 transition-transform duration-500"
      />
      <p className="font-headline-sm text-headline-sm text-primary italic font-serif relative z-10 leading-relaxed">
        {QUOTE.text}
      </p>
      <div className="mt-4 flex items-center gap-3 relative z-10">
        <span className="w-8 h-[2px] bg-secondary group-hover:w-12 transition-all duration-300" />
        <span className="font-label-md text-label-md text-on-surface uppercase tracking-wider font-semibold">
          {QUOTE.author}
        </span>
      </div>
    </div>
  );
}

function GrapeVarietyBars() {
  return (
    <div className="p-6 rounded-xl bg-surface-container-lowest shadow-[0_4px_20px_-2px_rgba(92,22,46,0.04)] border border-outline-variant/30 hover:border-primary/20 transition-all duration-300">
      <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-semibold block mb-3">
        Encépagement traditionnel Lussac Saint-Émilion
      </span>
      <div className="space-y-4 font-body-sm text-body-sm">
        {GRAPE_VARIETIES.map((variety) => (
          <div key={variety.id} className="group/progress">
            <div className="flex justify-between mb-1.5">
              <span className="font-medium text-on-surface group-hover/progress:text-primary transition-colors">
                {variety.label}
              </span>
              <span className="font-semibold text-primary">{variety.percentage}%</span>
            </div>
            <div className="w-full bg-surface-container h-2.5 rounded-full overflow-hidden p-0.5">
              <div
                className={`${variety.barClass} h-full rounded-full transition-all duration-1000 ease-out`}
                style={{ width: `${variety.percentage}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function BackgroundCard({ image, alt, badge, title, subtitle }: { image: string; alt: string; badge: string; title: string; subtitle: string }) {
  return (
    <div
      className="sm:col-span-2 relative rounded-xl overflow-hidden min-h-[220px] bg-cover bg-center flex flex-col justify-end p-6 group hover:shadow-xl transition-all duration-500"
      style={{ backgroundImage: `url('${image}')` }}
      role="img"
      aria-label={alt}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface via-inverse-surface/60 to-transparent transition-opacity duration-300 group-hover:opacity-90" />
      <div className="relative z-10 text-surface-container-lowest transition-transform duration-300 group-hover:-translate-y-1">
        <span className="px-2.5 py-1 rounded bg-secondary-container/30 text-secondary-fixed text-xs font-semibold uppercase tracking-wider mb-2 inline-block backdrop-blur-sm">
          {badge}
        </span>
        <h4 className="font-headline-sm text-headline-sm text-surface-container-lowest mb-1">{title}</h4>
        <p className="font-body-sm text-body-sm text-surface-dim line-clamp-2">{subtitle}</p>
      </div>
    </div>
  );
}

function StatCard({ icon, value, label, description }: { icon: string; value: string; label: string; description: string }) {
  return (
    <div className="rounded-xl p-6 bg-surface-container-lowest shadow-[0_4px_20px_-2px_rgba(92,22,46,0.04)] border border-outline-variant/30 flex flex-col justify-between hover:shadow-lg hover:-translate-y-1 hover:border-primary/20 transition-all duration-300 group">
      <div>
        <div className="w-10 h-10 rounded-lg bg-surface-container-low flex items-center justify-center text-primary mb-3 group-hover:bg-primary group-hover:text-on-primary transition-colors duration-300">
          <MaterialIcon name={icon} className="transition-transform duration-300 group-hover:scale-110" />
        </div>
        <span className="font-display text-display text-primary leading-none block font-semibold mb-1 group-hover:text-primary-container transition-colors">
          {value}
        </span>
        <span className="font-label-lg text-label-lg text-on-surface uppercase tracking-wider block">{label}</span>
      </div>
      <p className="font-body-sm text-body-sm text-on-surface-variant mt-4">{description}</p>
    </div>
  );
}

function CommitmentCard() {
  return (
    <div className="rounded-xl p-6 bg-primary-container text-on-primary shadow-md flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
      <div>
        <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center text-secondary-fixed mb-3 group-hover:scale-110 transition-transform duration-300">
          <MaterialIcon name="psychiatry" />
        </div>
        <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary-fixed-dim block mb-1">
          Engagements
        </span>
        <span className="font-title text-title text-surface-container-lowest block font-semibold">
          HVE 4 & Vignes Enherbées
        </span>
      </div>
      <p className="font-body-sm text-body-sm text-surface-container-high/90 mt-4 leading-relaxed">
        Lutte phytosanitaire raisonnée certifiée niveau 3 (2018) puis niveau 4 (2022) en partenariat avec la Chambre
        d'Agriculture.
      </p>
    </div>
  );
}

export function TerroirSection() {
  return (
    <RevealOnScroll>
      <section className="w-full py-24 px-6 lg:px-12 bg-surface" id="terroir">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
            <SectionHeading
              eyebrow="Tradition & Respect du Vivant"
              title="Une passion de famille transmise depuis quatre générations"
            />
            <div className="hidden md:flex items-center gap-3">
              <img
                alt="Logo Vignoble Charpentier"
                src={IMAGES.logo}
                className="h-14 w-auto object-contain opacity-90 rounded hover:opacity-100 hover:scale-105 transition-all duration-300"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-6 flex flex-col space-y-6">
              <StoryCard />
              <QuoteCard />
              <GrapeVarietyBars />
            </div>

            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <BackgroundCard
                image={IMAGES.cellar}
                alt="Cave voûtée avec barriques de chêne et amphores en terre cuite, éclairage tamisé chaleureux."
                badge="Chais & Élevage"
                title="Fûts de chêne français & Amphores"
                subtitle="L'alliance subtile d'un élevage sous bois maîtrisé et de la micro-oxygénation pure en terre cuite."
              />
              <StatCard
                icon="landscape"
                value="16"
                label="Hectares de Vignes"
                description="Vallons et plateaux d'un seul tenant au lieu-dit Jamard Ouest, garantissant une régularité remarquable."
              />
              <CommitmentCard />
              <BackgroundCard
                image={IMAGES.harvest}
                alt="Mains du vigneron tenant des grains de Merlot mûrs lors des vendanges sélectives, lumière matinale douce."
                badge="Savoir-Faire Artisanal"
                title="Vendanges soignées & Ébourgeonnage"
                subtitle="Un travail de la vigne réalisé à la main, dans le respect des cycles naturels."
              />
            </div>
          </div>
        </div>
      </section>
    </RevealOnScroll>
  );
}
