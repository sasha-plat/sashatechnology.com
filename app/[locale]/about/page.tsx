import type { Metadata } from "next";
import type { Locale } from "../../i18n/locales";
import HeroSection from "../../components/HeroSection";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About — SashaTech",
  description: "SashaTech is an Italian deep-tech startup building smart tools for professionals who work in the field.",
};

const milestones = [
  { year: "2025", event_it: "SashaTech S.r.l.s. fondata a Bari, Italia", event_en: "SashaTech S.r.l.s. founded in Bari, Italy" },
  { year: "2026", event_it: "Sviluppo piattaforma, fase prototipale", event_en: "Platform development, prototype phase" },
  { year: "2027", event_it: "Prime spedizioni ai clienti (Q3/Q4)", event_en: "First customer shipments (Q3/Q4)" },
  { year: "2028", event_it: "Linea prodotti completa disponibile", event_en: "Full product line available" },
];

const values_it = [
  {
    title: "Sovranità Europea",
    description: "Progettazione e assemblaggio in Europa. Filiera con fornitori europei e alleati NATO.",
  },
  {
    title: "Design Ispirato alla Natura",
    description: "La natura ha risolto il problema del volo 150 milioni di anni fa. Noi applichiamo quelle soluzioni con materiali moderni.",
  },
  {
    title: "Tecnologia per Tutti",
    description: "Capacità che prima erano riservate ai budget militari, ora accessibili anche ai professionisti civili.",
  },
  {
    title: "Privacy al Primo Posto",
    description: "Conforme al GDPR dal primo giorno. I tuoi dati restano sul tuo dispositivo. Nessuna sorpresa.",
  },
];

const values_en = [
  {
    title: "European Sovereignty",
    description: "Design and assembly in Europe. Supply chain with European and NATO-allied suppliers.",
  },
  {
    title: "Nature-Inspired Design",
    description: "Nature solved flight 150 million years ago. We apply those solutions with modern materials.",
  },
  {
    title: "Technology for Everyone",
    description: "Capabilities previously reserved for military budgets, now accessible to civilian professionals.",
  },
  {
    title: "Privacy First",
    description: "GDPR-compliant from day one. Your data stays on your device. No surprises.",
  },
];

export default function AboutPage({ params }: { params: { locale: string } }) {
  const locale = params.locale as Locale;
  const prefix = `/${locale}`;
  const isIt = locale === "it";
  const values = isIt ? values_it : values_en;

  return (
    <>
      <HeroSection
        title={isIt ? "Strumenti intelligenti per chi lavora sul campo" : "Smart tools for people who work in the field"}
        description={isIt
          ? "SashaTech è una startup deep-tech italiana che crea un ecosistema di assistenza AI per professionisti: droni, occhiali AR e piattaforma intelligente."
          : "SashaTech is an Italian deep-tech startup building an AI assistance ecosystem for professionals: drones, AR glasses, and an intelligent platform."}
      />

      {/* Mission */}
      <section className="section-container py-16">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gold text-sm font-medium tracking-wider uppercase mb-4">
            {isIt ? "La Nostra Missione" : "Our Mission"}
          </p>
          <h2 className="text-2xl md:text-4xl font-bold mb-6 leading-tight">
            {isIt
              ? "Dare a ogni professionista un assistente AI che vede, ascolta e protegge"
              : "Give every professional an AI assistant that sees, listens, and protects"}
          </h2>
          <p className="text-muted leading-relaxed">
            {isIt
              ? "Oggi i droni capaci di visione notturna e volo autonomo costano decine di migliaia di euro e richiedono operatori specializzati. SashaTech cambia le regole — un drone tascabile e silenzioso, con gli stessi risultati, che chiunque può usare in pochi secondi."
              : "Today, drones capable of night vision and autonomous flight cost tens of thousands of euros and require specialized operators. SashaTech changes the rules — a pocket-sized, silent drone with the same results, that anyone can use in seconds."}
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="section-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {values.map((v) => (
            <div key={v.title} className="glass-card">
              <h3 className="text-lg font-semibold mb-2 text-gold">{v.title}</h3>
              <p className="text-muted text-sm leading-relaxed">{v.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="section-container py-16">
        <div className="text-center mb-12">
          <p className="text-gold text-sm font-medium tracking-wider uppercase mb-4">
            {isIt ? "Il Team" : "The Team"}
          </p>
          <h2 className="text-2xl md:text-3xl font-bold">
            {isIt ? "Un team multidisciplinare con una visione chiara" : "A multidisciplinary team with a clear vision"}
          </h2>
        </div>
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-muted leading-relaxed">
            {isIt
              ? "Ingegneri, designer e ricercatori con esperienza in aeronautica, intelligenza artificiale, design di prodotto e sicurezza. Uniti dalla convinzione che la tecnologia avanzata debba essere accessibile a tutti i professionisti."
              : "Engineers, designers, and researchers with expertise in aeronautics, artificial intelligence, product design, and security. United by the belief that advanced technology should be accessible to all professionals."}
          </p>
          <p className="text-muted text-sm mt-6">
            
            <Link href={`${prefix}/contact`} className="text-gold hover:underline">
              
            </Link>.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-container py-16">
        <div className="max-w-2xl mx-auto">
          <p className="text-gold text-sm font-medium tracking-wider uppercase mb-8 text-center">
            {isIt ? "Il Nostro Percorso" : "Our Journey"}
          </p>
          <div className="space-y-0">
            {milestones.map((m, i) => (
              <div key={m.year} className="flex gap-6 items-start">
                <div className="flex flex-col items-center">
                  <div className={`w-3 h-3 rounded-full ${
                    i <= 2 ? "bg-gold" : "bg-white/20"
                  }`} />
                  {i < milestones.length - 1 && (
                    <div className="w-px h-16 bg-white/10" />
                  )}
                </div>
                <div className="pb-8">
                  <p className="font-mono text-gold text-sm mb-1">{m.year}</p>
                  <p className="text-muted text-sm">{isIt ? m.event_it : m.event_en}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="bg-navy-light border-t border-white/5">
        <div className="section-container py-20 text-center">
          <p className="text-5xl mb-6">🇮🇹</p>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            {isIt ? "Progettato a Bari, Prodotto in Europa" : "Designed in Bari, Built in Europe"}
          </h2>
          <p className="text-muted max-w-lg mx-auto leading-relaxed">
            {isIt
              ? "SashaTech S.r.l.s. ha sede a Bari, in Puglia. Progettiamo e assembliamo in Europa con una filiera che coinvolge fornitori europei e alleati."
              : "SashaTech S.r.l.s. is headquartered in Bari, Puglia, in southern Italy. Our supply chain spans European and allied countries."}
          </p>
          <div className="mt-8">
            <p className="text-sm text-muted">
              SashaTech S.r.l.s. · Bari (BA), Italy
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
