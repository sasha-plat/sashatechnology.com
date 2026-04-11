import type { Metadata } from "next";
import Link from "next/link";
import { locales } from "../../../i18n/locales";
import HeroSection from "../../../components/HeroSection";
import SpecsTable from "../../../components/SpecsTable";
import FeatureCard from "../../../components/FeatureCard";
import FAQAccordion from "../../../components/FAQAccordion";
import ScrollReveal from "../../../components/ScrollReveal";

const copy = {
  it: {
    badge: "In fase di sviluppo",
    heroTitle: "SashaDrone M2",
    heroSubtitle: "Copertura a lungo raggio per missioni che contano",
    heroDesc:
      "I droni attuali coprono pochi chilometri e volano per pochi minuti. L'M2 e un UAV ad ala fissa che copre centinaia di chilometri in una singola missione, in completa autonomia. Oleodotti, confini, coste, terreni agricoli: monitorati per ore, non minuti.",
    ctaPrimary: "Contattaci",
    ctaSecondary: "Specifiche Tecniche",
    problemTitle: "Il problema della ",
    problemHighlight: "copertura limitata",
    problemSubtitle: "I droni multirotore non sono progettati per coprire grandi aree.",
    problems: [
      { icon: "\u23F1\uFE0F", title: "Autonomia di volo troppo breve", description: "La maggior parte dei droni vola per 20-40 minuti. Insufficiente per monitorare infrastrutture che si estendono per decine o centinaia di chilometri." },
      { icon: "\uD83D\uDDFA\uFE0F", title: "Copertura territoriale minima", description: "Un raggio di pochi chilometri non basta per oleodotti, coste, confini o grandi proprieta agricole. Servono decine di voli e cambi batteria." },
      { icon: "\uD83C\uDF2C\uFE0F", title: "Vulnerabili al vento", description: "I multirotori soffrono il vento forte. In zone costiere, montane o aperte, questo limita drasticamente i giorni operativi." },
      { icon: "\uD83D\uDCCA", title: "Costi operativi elevati", description: "Piu voli, piu operatori, piu tempo. Il monitoraggio di grandi aree con droni a corto raggio moltiplica i costi." },
    ],
    solutionTitle: "La soluzione: ",
    solutionHighlight: "SashaDrone M2",
    solutionSubtitle: "Un UAV ad ala fissa con autonomia di ore e portata di centinaia di chilometri.",
    features: [
      { icon: "\u2708\uFE0F", title: "Ala fissa lambda", description: "Design aerodinamico ad alta efficienza che massimizza portata e autonomia. Struttura biomimetica in fibra di carbonio, leggera e resistente." },
      { icon: "\u26FD", title: "Cella a combustibile H2", description: "Idrogeno come fonte energetica per ore di volo continuo. Nessuna emissione, nessun rumore del motore, operativita in qualsiasi condizione." },
      { icon: "\uD83D\uDCCF", title: "4 taglie, 4 missioni", description: "Da compatto a grande apertura alare. Scegli la taglia giusta per la tua missione: ispezione locale o monitoraggio transcontinentale." },
      { icon: "\uD83D\uDC41\uFE0F", title: "Sensoristica avanzata", description: "Camera ad alta risoluzione, sensore termico, e sensori specializzati per ispezione infrastrutturale, monitoraggio ambientale e ricognizione." },
      { icon: "\uD83E\uDD16", title: "Volo autonomo", description: "Pianifica la rotta, lancia il drone, e l'M2 completa la missione autonomamente. Ritorna alla base con tutti i dati raccolti." },
      { icon: "\uD83D\uDD12", title: "Comunicazioni sicure", description: "Crittografia end-to-end su tutti i canali radio. I tuoi dati restano tuoi, dalla raccolta alla consegna." },
    ],
    specsTitle: "Specifiche Tecniche",
    specs: [
      { label: "Tipo", value: "Ala fissa lambda" },
      { label: "Taglie", value: "S / M / L / XL" },
      { label: "Apertura alare", value: "1.5m \u2014 8m (a seconda della taglia)" },
      { label: "Alimentazione", value: "Cella a combustibile a idrogeno" },
      { label: "Autonomia di volo", value: "Ore di volo continuo" },
      { label: "Portata", value: "Centinaia di km per missione" },
      { label: "Struttura", value: "Fibra di carbonio biomimetica" },
      { label: "Camera", value: "Alta risoluzione + termico" },
      { label: "Comunicazioni", value: "Crittografia AES-256 E2E" },
      { label: "Lancio", value: "Catapulta o pista breve" },
      { label: "Recupero", value: "Atterraggio autonomo" },
      { label: "Progettato in", value: "Europa" },
    ],
    useCasesTitle: "Applicazioni",
    useCases: [
      { title: "Monitoraggio oleodotti e gasdotti", description: "Ispeziona centinaia di km di pipeline in un singolo volo. Rileva perdite, danni e intrusioni con sensori termici e visivi, riducendo drasticamente tempi e costi." },
      { title: "Sorveglianza costiera e di confine", description: "Pattugliamento autonomo di lunghe linee costiere o di confine. Rileva imbarcazioni, veicoli e persone in zone remote, giorno e notte." },
      { title: "Monitoraggio agricolo su larga scala", description: "Copri migliaia di ettari in un singolo volo. Mappa lo stato delle colture, identifica stress idrico e monitora la salute del terreno su intere proprieta." },
      { title: "Ispezione infrastrutturale", description: "Linee elettriche, ferrovie, strade: ispeziona infrastrutture lineari per centinaia di km con un unico lancio, raccogliendo dati ad alta risoluzione." },
    ],
    faqTitle: "Domande Frequenti",
    faq: [
      { question: "Quanto vola l'M2?", answer: "L'autonomia dipende dalla taglia e dalla configurazione. Grazie alla cella a combustibile a idrogeno, l'M2 e progettato per voli di ore, non minuti. I dettagli esatti saranno comunicati con il lancio del prodotto." },
      { question: "Serve un pilota?", answer: "L'M2 vola in modo autonomo seguendo una rotta pianificata. L'operatore monitora e puo intervenire in qualsiasi momento. Le regolazioni EASA per droni di questa categoria richiedono specifica formazione." },
      { question: "Perche l'idrogeno?", answer: "L'idrogeno offre la migliore densita energetica per il peso, fondamentale per voli lunghi. Zero emissioni, ricarica rapida, e nessuna degradazione della batteria nel tempo." },
      { question: "Quali sensori sono disponibili?", answer: "Ogni M2 puo essere configurato con sensori diversi a seconda della missione: camera ad alta risoluzione, termico, multispettrale, e altri sensori specializzati." },
      { question: "Quando sara disponibile?", answer: "L'M2 e in fase avanzata di progettazione. Le specifiche sono preliminari. Contattaci per informazioni sul programma." },
    ],
    ctaTitle: "Interessato all'M2?",
    ctaDesc: "Contattaci per discutere le tue esigenze di monitoraggio a lungo raggio.",
    ctaButton: "Contattaci",
  },
  en: {
    badge: "In development",
    heroTitle: "SashaDrone M2",
    heroSubtitle: "Long-range coverage for missions that matter",
    heroDesc:
      "Current drones cover a few kilometres and fly for a few minutes. The M2 is a fixed-wing UAV that covers hundreds of kilometres in a single mission, fully autonomously. Pipelines, borders, coastlines, farmland: monitored for hours, not minutes.",
    ctaPrimary: "Get in Touch",
    ctaSecondary: "Technical Specs",
    problemTitle: "The problem of ",
    problemHighlight: "limited coverage",
    problemSubtitle: "Multi-rotor drones are not built to cover large areas.",
    problems: [
      { icon: "\u23F1\uFE0F", title: "Flight time too short", description: "Most drones fly for 20-40 minutes. Not enough to monitor infrastructure that stretches tens or hundreds of kilometres." },
      { icon: "\uD83D\uDDFA\uFE0F", title: "Minimal area coverage", description: "A range of a few kilometres is not enough for pipelines, coastlines, borders, or large farms. You need dozens of flights and battery swaps." },
      { icon: "\uD83C\uDF2C\uFE0F", title: "Vulnerable to wind", description: "Multi-rotors struggle in strong wind. In coastal, mountain, or open areas, this dramatically limits the number of operational days." },
      { icon: "\uD83D\uDCCA", title: "High operational costs", description: "More flights, more operators, more time. Monitoring large areas with short-range drones multiplies costs." },
    ],
    solutionTitle: "The solution: ",
    solutionHighlight: "SashaDrone M2",
    solutionSubtitle: "A fixed-wing UAV with hours of endurance and hundreds of kilometres of range.",
    features: [
      { icon: "\u2708\uFE0F", title: "Lambda fixed wing", description: "High-efficiency aerodynamic design that maximises range and endurance. Biomimetic carbon fibre structure, lightweight and resilient." },
      { icon: "\u26FD", title: "H2 fuel cell", description: "Hydrogen as the energy source for hours of continuous flight. Zero emissions, no engine noise, operational in any conditions." },
      { icon: "\uD83D\uDCCF", title: "4 sizes, 4 missions", description: "From compact to large wingspan. Choose the right size for your mission: local inspection or transcontinental monitoring." },
      { icon: "\uD83D\uDC41\uFE0F", title: "Advanced sensors", description: "High-resolution camera, thermal sensor, and specialised sensors for infrastructure inspection, environmental monitoring, and reconnaissance." },
      { icon: "\uD83E\uDD16", title: "Autonomous flight", description: "Plan the route, launch the drone, and the M2 completes the mission autonomously. Returns to base with all collected data." },
      { icon: "\uD83D\uDD12", title: "Secure communications", description: "End-to-end encryption on all radio channels. Your data stays yours, from collection to delivery." },
    ],
    specsTitle: "Technical Specifications",
    specs: [
      { label: "Type", value: "Lambda fixed wing" },
      { label: "Sizes", value: "S / M / L / XL" },
      { label: "Wingspan", value: "1.5m \u2014 8m (depending on size)" },
      { label: "Power", value: "Hydrogen fuel cell" },
      { label: "Flight endurance", value: "Hours of continuous flight" },
      { label: "Range", value: "Hundreds of km per mission" },
      { label: "Structure", value: "Biomimetic carbon fibre" },
      { label: "Camera", value: "High-resolution + thermal" },
      { label: "Communications", value: "AES-256 E2E encryption" },
      { label: "Launch", value: "Catapult or short runway" },
      { label: "Recovery", value: "Autonomous landing" },
      { label: "Designed in", value: "Europe" },
    ],
    useCasesTitle: "Applications",
    useCases: [
      { title: "Pipeline monitoring", description: "Inspect hundreds of km of pipeline in a single flight. Detect leaks, damage, and intrusions with thermal and visual sensors, drastically reducing time and cost." },
      { title: "Coastal and border surveillance", description: "Autonomous patrol of long coastlines or borders. Detect vessels, vehicles, and people in remote areas, day and night." },
      { title: "Large-scale agricultural monitoring", description: "Cover thousands of hectares in a single flight. Map crop health, identify water stress, and monitor soil conditions across entire properties." },
      { title: "Infrastructure inspection", description: "Power lines, railways, roads: inspect linear infrastructure for hundreds of km with a single launch, collecting high-resolution data." },
    ],
    faqTitle: "Frequently Asked Questions",
    faq: [
      { question: "How long does the M2 fly?", answer: "Endurance depends on size and configuration. Thanks to the hydrogen fuel cell, the M2 is designed for flights lasting hours, not minutes. Exact figures will be shared at product launch." },
      { question: "Does it need a pilot?", answer: "The M2 flies autonomously following a planned route. The operator monitors and can intervene at any time. EASA regulations for drones in this category require specific training." },
      { question: "Why hydrogen?", answer: "Hydrogen offers the best energy density for weight, which is critical for long flights. Zero emissions, fast refuelling, and no battery degradation over time." },
      { question: "What sensors are available?", answer: "Each M2 can be configured with different sensors depending on the mission: high-resolution camera, thermal, multispectral, and other specialised sensors." },
      { question: "When will it be available?", answer: "The M2 is in advanced design phase. Specifications are preliminary. Contact us for programme information." },
    ],
    ctaTitle: "Interested in the M2?",
    ctaDesc: "Contact us to discuss your long-range monitoring needs.",
    ctaButton: "Get in Touch",
  },
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const isIt = params.locale === "it";
  return {
    title: isIt
      ? "SashaDrone M2 \u2014 UAV ad ala fissa a lungo raggio | SashaTech"
      : "SashaDrone M2 \u2014 Long-range fixed-wing UAV | SashaTech",
    description: isIt
      ? "UAV ad ala fissa con cella a combustibile a idrogeno. Centinaia di km per missione. 4 taglie. Progettato in Europa."
      : "Fixed-wing UAV with hydrogen fuel cell. Hundreds of km per mission. 4 sizes. Designed in Europe.",
  };
}

export default function M2Page({ params }: { params: { locale: string } }) {
  const c = params.locale === "it" ? copy.it : copy.en;
  const prefix = `/${params.locale}`;

  return (
    <>
      <HeroSection
        badge={c.badge}
        title={c.heroTitle}
        subtitle={c.heroSubtitle}
        description={c.heroDesc}
        ctaText={c.ctaPrimary}
        ctaHref={`${prefix}/contact`}
        secondaryCta={{ text: c.ctaSecondary, href: "#specs" }}
      />

      {/* Problem section */}
      <section className="section-container py-16">
        <ScrollReveal animation="fade-up">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {c.problemTitle}<span className="gradient-text">{c.problemHighlight}</span>
            </h2>
            <p className="text-muted max-w-xl mx-auto">{c.problemSubtitle}</p>
          </div>
        </ScrollReveal>
        <ScrollReveal animation="fade-up" stagger={0.15} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {c.problems.map((p) => (
            <FeatureCard key={p.title} {...p} />
          ))}
        </ScrollReveal>
      </section>

      {/* Solution section */}
      <section className="section-container py-16">
        <ScrollReveal animation="fade-up">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {c.solutionTitle}<span className="gradient-text">{c.solutionHighlight}</span>
            </h2>
            <p className="text-muted max-w-xl mx-auto">{c.solutionSubtitle}</p>
          </div>
        </ScrollReveal>
        <ScrollReveal animation="fade-up" stagger={0.15} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {c.features.map((f) => (
            <FeatureCard key={f.title} {...f} />
          ))}
        </ScrollReveal>
      </section>

      {/* Product Image Placeholder */}
      <section className="section-container py-8">
        <div className="aspect-[2/1] bg-navy-light rounded-2xl border border-white/5 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent" />
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-muted text-sm">SashaDrone M2 Product Image</p>
          </div>
        </div>
      </section>

      {/* Specs */}
      <section id="specs" className="section-container py-16">
        <div className="max-w-2xl mx-auto">
          <SpecsTable specs={c.specs} title={c.specsTitle} />
        </div>
      </section>

      {/* Use Cases */}
      <section className="section-container py-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">{c.useCasesTitle}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {c.useCases.map((uc) => (
            <div key={uc.title} className="glass-card">
              <div className="aspect-[3/2] bg-navy rounded-xl mb-4 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent" />
              </div>
              <h3 className="font-semibold mb-2">{uc.title}</h3>
              <p className="text-muted text-sm leading-relaxed">{uc.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="section-container py-16">
        <div className="max-w-2xl mx-auto">
          <FAQAccordion items={c.faq} title={c.faqTitle} />
        </div>
      </section>

      {/* CTA */}
      <section className="section-container py-20">
        <div className="glass-card text-center py-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">{c.ctaTitle}</h2>
          <p className="text-muted mb-8 max-w-md mx-auto">{c.ctaDesc}</p>
          <Link href={`${prefix}/contact`} className="btn-primary">
            {c.ctaButton}
          </Link>
        </div>
      </section>
    </>
  );
}
