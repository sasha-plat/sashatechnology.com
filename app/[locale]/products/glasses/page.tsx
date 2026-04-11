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
    heroTitle: "SashaGlasses",
    heroSubtitle: "Occhiali AR che puoi davvero indossare tutto il giorno",
    heroDesc:
      "Gli occhiali AR esistenti sono ingombranti, costosi, durano poche ore e dipendono dal cloud. SashaGlasses risolve tutti questi problemi: aspetto normale, peso piuma, batteria per una giornata intera, e intelligenza artificiale che funziona anche offline.",
    ctaPrimary: "Contattaci",
    ctaSecondary: "Specifiche Tecniche",
    problemTitle: "Il problema degli ",
    problemHighlight: "occhiali AR attuali",
    problemSubtitle: "I dispositivi esistenti non sono pensati per chi lavora sul campo.",
    problems: [
      { icon: "\u2696\uFE0F", title: "Troppo pesanti", description: "La maggior parte degli occhiali AR pesa oltre 100g e si nota subito che li indossi. Non puoi usarli in contesti professionali senza attirare attenzione." },
      { icon: "\u26A1", title: "Batteria che dura ore, non giorni", description: "2-3 ore di autonomia significano che devi ricaricare a meta giornata. Inutile per chi lavora turni interi sul campo." },
      { icon: "\u2601\uFE0F", title: "Dipendenza dal cloud", description: "Senza connessione internet, diventano un fermacarte. In zone remote o in situazioni critiche, non puoi permetterti questa limitazione." },
      { icon: "\uD83D\uDCB0", title: "Costo proibitivo", description: "Migliaia di euro per un dispositivo fragile che non resiste alla vita quotidiana. Non accessibile alla maggior parte dei professionisti." },
    ],
    solutionTitle: "La soluzione: ",
    solutionHighlight: "SashaGlasses",
    solutionSubtitle: "Progettati per professionisti reali, non per demo in laboratorio.",
    features: [
      { icon: "\uD83D\uDC53", title: "Aspetto normale", description: "Design wayfarer slim che sembra un paio di occhiali normali. Nessuno nota la differenza. Compatibili con lenti graduate e Transitions." },
      { icon: "\uD83C\uDFAF", title: "Display binoculare 2K", description: "Due micro-OLED da 2K nel bordo superiore mostrano informazioni critiche senza oscurare la visione. Leggibili anche in pieno sole." },
      { icon: "\uD83E\uDDE0", title: "AI sul dispositivo", description: "Processore neurale integrato che funziona senza connessione internet. Riconoscimento vocale, gesti e contesto ambientale, tutto in locale." },
      { icon: "\uD83D\uDCF7", title: "Tripla fotocamera", description: "Fotocamera principale 13MP wide-angle, visione notturna NIR, e sensore avanzato per condizioni difficili. Vedi di piu di quanto l'occhio umano possa percepire." },
      { icon: "\uD83D\uDD0B", title: "Batteria tutto il giorno", description: "Circa 12 ore di uso normale con una singola carica. Lavora un turno intero senza pensare alla batteria." },
      { icon: "\u270B", title: "Controllo gestuale", description: "Oltre 150 gesti supportati, inclusa la lingua dei segni. Controlla tutto senza toccare nulla e senza parlare." },
    ],
    specsTitle: "Specifiche Tecniche",
    specs: [
      { label: "Peso", value: "~43g" },
      { label: "Display", value: "2x micro-OLED 1280x960 2K" },
      { label: "Luminosita display", value: "10.000 nit" },
      { label: "Fotocamera principale", value: "13MP wide-angle 120\u00B0" },
      { label: "Visione notturna", value: "NIR 2MP, 0.5 lux" },
      { label: "Processore AI", value: "NPU on-device 512 GOPS" },
      { label: "Connettivita", value: "BLE 6.0 + WiFi 6" },
      { label: "Audio", value: "2x MEMS mic (ANC) + 2x bone conduction stereo" },
      { label: "Sensori", value: "IMU 6-DOF AI sensor hub" },
      { label: "Batteria", value: "~12h uso normale" },
      { label: "Ricarica", value: "Pogo dock magnetico USB-C" },
      { label: "Lenti", value: "Compatibili lenti graduate + Transitions" },
      { label: "Materiale", value: "PA12 + rinforzo interno in fibra di carbonio" },
      { label: "Resistenza", value: "Uso quotidiano professionale" },
    ],
    faqTitle: "Domande Frequenti",
    faq: [
      { question: "Posso usarli con le mie lenti graduate?", answer: "Si. SashaGlasses supporta lenti oftalmiche su prescrizione e lenti Transitions fotocromatiche. Il display non interferisce con la correzione visiva." },
      { question: "Come funziona il display?", answer: "Due micro-OLED nel bordo superiore della montatura proiettano informazioni nel campo visivo superiore tramite micro-lenti e beam splitter. Non bloccano la visione centrale." },
      { question: "Funzionano senza smartphone?", answer: "Le funzioni base (riconoscimento vocale, gesti, notifiche) funzionano direttamente sugli occhiali. Per le funzioni AI avanzate (traduzione, LLM), si connettono allo smartphone via BLE." },
      { question: "Quanto costano?", answer: "Il prezzo di vendita target e tra 600 e 900 euro, sensibilmente inferiore alla maggior parte degli occhiali AR disponibili." },
      { question: "Quando saranno disponibili?", answer: "SashaGlasses e attualmente in fase di sviluppo. Le specifiche sono preliminari e soggette a modifiche. Iscriviti alla newsletter per gli aggiornamenti." },
    ],
    ctaTitle: "Vuoi saperne di piu?",
    ctaDesc: "Contattaci per informazioni su disponibilita e pre-ordini.",
    ctaButton: "Contattaci",
  },
  en: {
    badge: "In development",
    heroTitle: "SashaGlasses",
    heroSubtitle: "AR glasses you can actually wear all day",
    heroDesc:
      "Existing AR glasses are bulky, expensive, last a few hours, and depend on the cloud. SashaGlasses solves all of these: normal appearance, featherweight, all-day battery, and AI that works offline.",
    ctaPrimary: "Get in Touch",
    ctaSecondary: "Technical Specs",
    problemTitle: "The problem with ",
    problemHighlight: "current AR glasses",
    problemSubtitle: "Existing devices are not built for professionals who work in the field.",
    problems: [
      { icon: "\u2696\uFE0F", title: "Too heavy", description: "Most AR glasses weigh over 100g and it is immediately obvious you are wearing them. You cannot use them professionally without drawing attention." },
      { icon: "\u26A1", title: "Battery lasts hours, not days", description: "2-3 hours of battery means recharging mid-shift. Useless for anyone working full shifts in the field." },
      { icon: "\u2601\uFE0F", title: "Cloud dependency", description: "Without an internet connection, they become a paperweight. In remote areas or critical situations, you cannot afford this limitation." },
      { icon: "\uD83D\uDCB0", title: "Prohibitive cost", description: "Thousands of euros for a fragile device that cannot withstand daily life. Not accessible to most professionals." },
    ],
    solutionTitle: "The solution: ",
    solutionHighlight: "SashaGlasses",
    solutionSubtitle: "Designed for real professionals, not lab demos.",
    features: [
      { icon: "\uD83D\uDC53", title: "Normal appearance", description: "Slim wayfarer design that looks like regular glasses. Nobody notices the difference. Compatible with prescription and Transitions lenses." },
      { icon: "\uD83C\uDFAF", title: "Binocular 2K display", description: "Two 2K micro-OLEDs in the top bar show critical information without blocking your vision. Readable even in direct sunlight." },
      { icon: "\uD83E\uDDE0", title: "On-device AI", description: "Integrated neural processor that works without internet. Voice recognition, gestures, and environmental awareness, all processed locally." },
      { icon: "\uD83D\uDCF7", title: "Triple camera", description: "13MP wide-angle main camera, NIR night vision, and an advanced sensor for challenging conditions. See more than the human eye can perceive." },
      { icon: "\uD83D\uDD0B", title: "All-day battery", description: "Approximately 12 hours of normal use on a single charge. Work an entire shift without thinking about battery." },
      { icon: "\u270B", title: "Gesture control", description: "Over 150 supported gestures, including sign language. Control everything without touching anything and without speaking." },
    ],
    specsTitle: "Technical Specifications",
    specs: [
      { label: "Weight", value: "~43g" },
      { label: "Display", value: "2x micro-OLED 1280x960 2K" },
      { label: "Display brightness", value: "10,000 nit" },
      { label: "Main camera", value: "13MP wide-angle 120\u00B0" },
      { label: "Night vision", value: "NIR 2MP, 0.5 lux" },
      { label: "AI processor", value: "On-device NPU 512 GOPS" },
      { label: "Connectivity", value: "BLE 6.0 + WiFi 6" },
      { label: "Audio", value: "2x MEMS mic (ANC) + 2x bone conduction stereo" },
      { label: "Sensors", value: "6-DOF AI sensor hub" },
      { label: "Battery", value: "~12h normal use" },
      { label: "Charging", value: "Magnetic pogo dock USB-C" },
      { label: "Lenses", value: "Prescription + Transitions compatible" },
      { label: "Material", value: "PA12 + carbon fibre internal reinforcement" },
      { label: "Durability", value: "Professional daily use" },
    ],
    faqTitle: "Frequently Asked Questions",
    faq: [
      { question: "Can I use them with my prescription lenses?", answer: "Yes. SashaGlasses support prescription ophthalmic lenses and photochromic Transitions lenses. The display does not interfere with vision correction." },
      { question: "How does the display work?", answer: "Two micro-OLEDs in the top bar of the frame project information into the upper field of view through micro-lenses and a beam splitter. They do not block your central vision." },
      { question: "Do they work without a smartphone?", answer: "Basic functions (voice recognition, gestures, notifications) work directly on the glasses. For advanced AI features (translation, LLM), they connect to your smartphone via BLE." },
      { question: "How much do they cost?", answer: "The target retail price is between 600 and 900 euros, significantly lower than most AR glasses currently available." },
      { question: "When will they be available?", answer: "SashaGlasses is currently in development. Specifications are preliminary and subject to change. Subscribe to our newsletter for updates." },
    ],
    ctaTitle: "Want to know more?",
    ctaDesc: "Contact us for availability and pre-order information.",
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
      ? "SashaGlasses \u2014 Occhiali AR indossabili tutto il giorno | SashaTech"
      : "SashaGlasses \u2014 All-day wearable AR glasses | SashaTech",
    description: isIt
      ? "Occhiali AR da 43g con display 2K binoculare, AI on-device, batteria 12h. Progettati per professionisti."
      : "43g AR glasses with binocular 2K display, on-device AI, 12h battery. Designed for professionals.",
  };
}

export default function GlassesPage({ params }: { params: { locale: string } }) {
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
            <p className="text-muted text-sm">SashaGlasses Product Image</p>
          </div>
        </div>
      </section>

      {/* Specs */}
      <section id="specs" className="section-container py-16">
        <div className="max-w-2xl mx-auto">
          <SpecsTable specs={c.specs} title={c.specsTitle} />
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
