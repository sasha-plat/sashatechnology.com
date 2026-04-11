import type { Metadata } from "next";
import Link from "next/link";
import { locales } from "../../../i18n/locales";
import HeroSection from "../../../components/HeroSection";
import FeatureCard from "../../../components/FeatureCard";
import FAQAccordion from "../../../components/FAQAccordion";
import ScrollReveal from "../../../components/ScrollReveal";

const copy = {
  it: {
    badge: "In fase di sviluppo",
    heroTitle: "SashaPlatform",
    heroSubtitle: "Il tuo assistente AI personale per il campo",
    heroDesc:
      "I professionisti che lavorano sul campo devono tradurre lingue, gestire contatti, consultare documenti e restare al sicuro. Oggi fanno tutto manualmente, tra app diverse e distrazioni. SashaPlatform centralizza tutto in un unico assistente vocale intelligente.",
    ctaPrimary: "Contattaci",
    ctaSecondary: "Scopri le Funzionalita",
    problemTitle: "Il problema degli ",
    problemHighlight: "strumenti frammentati",
    problemSubtitle: "I professionisti sul campo usano decine di app diverse per fare il loro lavoro.",
    problems: [
      { icon: "\uD83D\uDCF1", title: "Troppe app, poco tempo", description: "Traduttore, CRM, scanner documenti, meteo, navigatore: ogni funzione e una app diversa. Cambiare app continuamente rallenta il lavoro." },
      { icon: "\uD83C\uDF10", title: "Barriere linguistiche", description: "In contesti internazionali, la comunicazione fallisce senza traduzione istantanea. I traduttori automatici non capiscono il contesto professionale." },
      { icon: "\uD83D\uDCC4", title: "Documenti persi e non tracciati", description: "Foto di documenti perse nel rullino, appunti dimenticati, informazioni critiche che non vengono registrate per l'audit." },
      { icon: "\u26A0\uFE0F", title: "Nessun avviso proattivo", description: "Pericoli meteo, sismici, allerte di sicurezza: il professionista deve cercarli attivamente invece di riceverli automaticamente." },
    ],
    solutionTitle: "La soluzione: ",
    solutionHighlight: "SashaPlatform",
    solutionSubtitle: "Un assistente AI che vede, ascolta, traduce e protegge.",
    features: [
      { icon: "\uD83C\uDF10", title: "Traduzione in 19 lingue", description: "Traduzione in tempo reale di conversazioni parlate. Capisce il contesto professionale e traduce in modo naturale, non letterale." },
      { icon: "\uD83D\uDDE3\uFE0F", title: "Comandi vocali", description: "Controlla tutto con la voce in italiano o inglese. Nessun bisogno di toccare lo schermo. Funziona con occhiali, telefono e auricolari." },
      { icon: "\uD83D\uDC65", title: "CRM integrato", description: "Registra contatti, interazioni e follow-up automaticamente. Punteggio lead, gestione pipeline, e promemoria vocali." },
      { icon: "\uD83D\uDCC4", title: "Cattura documenti", description: "Scansiona, riconosci e archivia documenti con la fotocamera. Estrazione automatica di dati, compiti e campi da compilare." },
      { icon: "\u26A0\uFE0F", title: "Allerte di sicurezza", description: "Ricevi avvisi proattivi su pericoli meteo, sismici e ambientali nella tua zona. Percorsi di fuga calcolati in tempo reale." },
      { icon: "\uD83D\uDC53", title: "11 profili professionali", description: "Si adatta automaticamente al tuo ruolo: guida turistica, forze dell'ordine, soccorritore, vendite, logistica e altri. Ogni profilo attiva le funzioni giuste." },
    ],
    faqTitle: "Domande Frequenti",
    faq: [
      { question: "Serve una connessione internet?", answer: "Molte funzioni base funzionano offline. Per traduzione avanzata e AI conversazionale, serve connessione dati. L'architettura supporta anche deployment on-premise per organizzazioni che lo richiedono." },
      { question: "Quali lingue supporta?", answer: "19 lingue con traduzione in tempo reale, incluse tutte le principali lingue europee. Il rilevamento automatico della lingua permette conversazioni multilingue senza configurazione." },
      { question: "Come si integra con gli occhiali?", answer: "SashaPlatform e il cervello AI che alimenta SashaGlasses. Le informazioni elaborate dalla piattaforma vengono mostrate direttamente nel display degli occhiali tramite BLE." },
      { question: "I dati sono al sicuro?", answer: "GDPR-compliant by design. Crittografia end-to-end, audit trail legale, gestione consensi granulare. Per massima sicurezza, disponibile anche in versione on-premise con SashaCloud." },
      { question: "Quanto costa?", answer: "SashaPlatform e inclusa nell'ecosistema SashaTech. I dettagli sui piani di abbonamento saranno comunicati con il lancio. Contattaci per informazioni." },
    ],
    ctaTitle: "Vuoi saperne di piu?",
    ctaDesc: "Contattaci per informazioni su disponibilita e possibilita di integrazione.",
    ctaButton: "Contattaci",
  },
  en: {
    badge: "In development",
    heroTitle: "SashaPlatform",
    heroSubtitle: "Your personal AI assistant for the field",
    heroDesc:
      "Field professionals need to translate languages, manage contacts, handle documents, and stay safe. Today they do it all manually, across different apps and distractions. SashaPlatform centralises everything into one intelligent voice assistant.",
    ctaPrimary: "Get in Touch",
    ctaSecondary: "Discover Features",
    problemTitle: "The problem of ",
    problemHighlight: "fragmented tools",
    problemSubtitle: "Field professionals use dozens of different apps to do their job.",
    problems: [
      { icon: "\uD83D\uDCF1", title: "Too many apps, too little time", description: "Translator, CRM, document scanner, weather, navigation: every function is a different app. Constantly switching apps slows you down." },
      { icon: "\uD83C\uDF10", title: "Language barriers", description: "In international settings, communication fails without instant translation. Automatic translators do not understand professional context." },
      { icon: "\uD83D\uDCC4", title: "Lost and untracked documents", description: "Document photos lost in the camera roll, forgotten notes, critical information that never gets recorded for audit." },
      { icon: "\u26A0\uFE0F", title: "No proactive alerts", description: "Weather dangers, seismic events, security alerts: professionals must actively search for them instead of receiving them automatically." },
    ],
    solutionTitle: "The solution: ",
    solutionHighlight: "SashaPlatform",
    solutionSubtitle: "An AI assistant that sees, listens, translates, and protects.",
    features: [
      { icon: "\uD83C\uDF10", title: "Translation in 19 languages", description: "Real-time translation of spoken conversations. Understands professional context and translates naturally, not literally." },
      { icon: "\uD83D\uDDE3\uFE0F", title: "Voice commands", description: "Control everything with your voice in Italian or English. No need to touch the screen. Works with glasses, phone, and earbuds." },
      { icon: "\uD83D\uDC65", title: "Integrated CRM", description: "Automatically records contacts, interactions, and follow-ups. Lead scoring, pipeline management, and voice reminders." },
      { icon: "\uD83D\uDCC4", title: "Document capture", description: "Scan, recognise, and archive documents with the camera. Automatic extraction of data, tasks, and form fields." },
      { icon: "\u26A0\uFE0F", title: "Safety alerts", description: "Receive proactive warnings about weather, seismic, and environmental hazards in your area. Escape routes calculated in real time." },
      { icon: "\uD83D\uDC53", title: "11 professional profiles", description: "Adapts automatically to your role: tourist guide, law enforcement, emergency responder, sales, logistics, and more. Each profile activates the right features." },
    ],
    faqTitle: "Frequently Asked Questions",
    faq: [
      { question: "Does it need an internet connection?", answer: "Many core functions work offline. For advanced translation and conversational AI, a data connection is required. The architecture also supports on-premise deployment for organisations that require it." },
      { question: "Which languages does it support?", answer: "19 languages with real-time translation, including all major European languages. Automatic language detection enables multilingual conversations without configuration." },
      { question: "How does it integrate with the glasses?", answer: "SashaPlatform is the AI brain powering SashaGlasses. Information processed by the platform is displayed directly in the glasses via BLE." },
      { question: "Is my data secure?", answer: "GDPR-compliant by design. End-to-end encryption, legal audit trail, granular consent management. For maximum security, also available as on-premise with SashaCloud." },
      { question: "How much does it cost?", answer: "SashaPlatform is included in the SashaTech ecosystem. Subscription plan details will be shared at launch. Contact us for information." },
    ],
    ctaTitle: "Want to know more?",
    ctaDesc: "Contact us for availability and integration possibilities.",
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
      ? "SashaPlatform \u2014 Assistente AI per professionisti | SashaTech"
      : "SashaPlatform \u2014 AI assistant for professionals | SashaTech",
    description: isIt
      ? "Assistente AI con traduzione in 19 lingue, CRM, cattura documenti, allerte sicurezza. 11 profili professionali."
      : "AI assistant with 19-language translation, CRM, document capture, safety alerts. 11 professional profiles.",
  };
}

export default function PlatformPage({ params }: { params: { locale: string } }) {
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
        secondaryCta={{ text: c.ctaSecondary, href: "#features" }}
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

      {/* Solution / Features section */}
      <section id="features" className="section-container py-16">
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
