import { useMemo, useState } from 'react';
import type { FormEvent, ReactNode } from 'react';
import type { ContactRequest } from '../../types/domain';
import { FORM_OPTIONS } from '../../data/experiences';
import { MaterialIcon } from '../ui/MaterialIcon';

const INITIAL_FORM_STATE: ContactRequest = {
  nom: '',
  email: '',
  telephone: '',
  motif: 'visite',
  dateVisite: '',
  personnes: '1-2',
  message: '',
};

type FormStatus = 'idle' | 'sending' | 'sent';

interface FieldProps {
  id: string;
  label: string;
  required?: boolean;
  children: ReactNode;
}

function Field({ id, label, required = false, children }: FieldProps) {
  return (
    <div>
      <label className="font-label-md text-label-md uppercase tracking-wider text-on-surface block mb-2" htmlFor={id}>
        {label}
        {required && <span aria-hidden="true"> *</span>}
      </label>
      {children}
    </div>
  );
}

const INPUT_CLASSES =
  'w-full h-12 px-4 rounded-lg bg-surface border border-outline-variant text-on-surface font-body-md text-body-md focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all';

export function ContactForm() {
  const [form, setForm] = useState<ContactRequest>(INITIAL_FORM_STATE);
  const [status, setStatus] = useState<FormStatus>('idle');

  const today = useMemo(() => new Date().toISOString().split('T')[0], []);

  const updateField = <K extends keyof ContactRequest>(key: K, value: ContactRequest[K]) => {
    setForm((previous) => ({ ...previous, [key]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === 'sending') return;
    setStatus('sending');

    // Simulation d'envoi — à remplacer par l'appel API du domaine.
    window.setTimeout(() => {
      setStatus('sent');
      setForm(INITIAL_FORM_STATE);
    }, 900);
  };

  return (
    <div className="lg:col-span-7 bg-surface-container-lowest rounded-xl p-8 lg:p-10 shadow-[0_4px_20px_-2px_rgba(92,22,46,0.04)] border border-outline-variant/30">
      <div className="mb-6">
        <h3 className="font-headline-sm text-headline-sm text-primary mb-2">
          Réserver votre moment au caveau
        </h3>
        <p className="font-body-sm text-body-sm text-on-surface-variant">
          Remplissez ce formulaire pour planifier votre visite, dégustation ou commander directement nos cuvées.
        </p>
      </div>

      {status === 'sent' && (
        <div className="mb-6 flex items-center gap-3 p-4 rounded-lg bg-secondary-fixed/20 border border-secondary/30" role="status">
          <MaterialIcon name="check_circle" className="text-secondary text-xl" />
          <p className="font-body-sm text-body-sm text-on-surface">
            Merci pour votre message ! Carine et Olivier Charpentier vous recontacteront sous 24h.
          </p>
        </div>
      )}

      <form className="space-y-5" onSubmit={handleSubmit} noValidate={false}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <Field id="nom" label="Nom & Prénom" required>
            <input
              className={INPUT_CLASSES}
              id="nom"
              name="nom"
              placeholder="Jean Dupont"
              required
              type="text"
              value={form.nom}
              onChange={(event) => updateField('nom', event.target.value)}
            />
          </Field>
          <Field id="email" label="Adresse e-mail" required>
            <input
              className={INPUT_CLASSES}
              id="email"
              name="email"
              placeholder="jean.dupont@email.com"
              required
              type="email"
              value={form.email}
              onChange={(event) => updateField('email', event.target.value)}
            />
          </Field>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <Field id="telephone" label="Téléphone">
            <input
              className={INPUT_CLASSES}
              id="telephone"
              name="telephone"
              placeholder="06 00 00 00 00"
              type="tel"
              value={form.telephone}
              onChange={(event) => updateField('telephone', event.target.value)}
            />
          </Field>
          <Field id="motif" label="Objet de la demande">
            <select
              className={INPUT_CLASSES}
              id="motif"
              name="motif"
              value={form.motif}
              onChange={(event) => updateField('motif', event.target.value)}
            >
              {FORM_OPTIONS.motifs.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </Field>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <Field id="date-visite" label="Date souhaitée">
            <input
              className={INPUT_CLASSES}
              id="date-visite"
              name="date-visite"
              min={today}
              type="date"
              value={form.dateVisite}
              onChange={(event) => updateField('dateVisite', event.target.value)}
            />
          </Field>
          <Field id="personnes" label="Nombre de personnes">
            <select
              className={INPUT_CLASSES}
              id="personnes"
              name="personnes"
              value={form.personnes}
              onChange={(event) => updateField('personnes', event.target.value)}
            >
              {FORM_OPTIONS.personnes.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </Field>
        </div>

        <Field id="message" label="Votre Message ou Cuvées demandées" required>
          <textarea
            className="w-full p-4 rounded-lg bg-surface border border-outline-variant text-on-surface font-body-md text-body-md focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
            id="message"
            name="message"
            placeholder="Indiquez l'heure estimée de votre passage, vos souhaits de dégustation ou les cuvées que vous désirez commander..."
            required
            rows={4}
            value={form.message}
            onChange={(event) => updateField('message', event.target.value)}
          />
        </Field>

        <div className="pt-2">
          <button
            className="w-full py-4 px-6 rounded-lg bg-primary text-on-primary font-label-lg text-label-lg tracking-wider uppercase font-semibold shadow-md hover:bg-primary-container transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 active:scale-[0.98] disabled:opacity-60 disabled:cursor-wait"
            type="submit"
            disabled={status === 'sending'}
          >
            {status === 'sending' ? 'Envoi en cours…' : 'Envoyer ma demande à Carine & Olivier'}
          </button>
          <p className="font-body-sm text-body-sm text-on-surface-variant text-xs text-center mt-3">
            Réponse rapide sous 24h. Données confidentielles utilisées exclusivement pour votre réservation.
          </p>
        </div>
      </form>
    </div>
  );
}
