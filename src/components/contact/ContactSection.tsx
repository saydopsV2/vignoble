import { ContactInfo } from './ContactInfo';
import { ContactForm } from './ContactForm';
import { RevealOnScroll } from '../ui/RevealOnScroll';

export function ContactSection() {
  return (
    <RevealOnScroll>
      <section className="w-full py-24 px-6 lg:px-12 bg-surface" id="contact">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <ContactInfo />
            <ContactForm />
          </div>
        </div>
      </section>
    </RevealOnScroll>
  );
}
