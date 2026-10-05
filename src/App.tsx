import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TerroirSection } from './components/TerroirSection';
import { CuveesSection } from './components/CuveesSection';
import { AwardsSection } from './components/AwardsSection';
import { OenotourismeSection } from './components/OenotourismeSection';
import { SalonsBanner } from './components/SalonsBanner';
import { ContactSection } from './components/contact/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <>
      <a href="#terroir" className="sr-only focus:not-sr-only focus:absolute focus:z-[60] focus:p-4 focus:bg-primary focus:text-on-primary">
        Aller au contenu
      </a>
      <Header />
      <main className="w-full pt-20 bg-surface min-h-[calc(100vh-20rem)]" id="top">
        <Hero />
        <TerroirSection />
        <CuveesSection />
        <AwardsSection />
        <OenotourismeSection />
        <SalonsBanner />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
