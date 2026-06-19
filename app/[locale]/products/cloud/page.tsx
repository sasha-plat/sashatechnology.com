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
    heroTitle: "SashaCloud",
    heroSubtitle: "La tua AI. La tua infrastruttura. La tua sovranità.",
    heroDesc:
      "SashaCloud è l'infrastruttura sovrana di SashaTech come prodotto: l'intero stack AI della piattaforma eseguito sui tuoi server, on-premise o in un data center europeo sovrano. Stesse capacità, nessun dato che lascia il tuo perimetro.",
    ctaPrimary: "Contattaci",
    ctaSecondary: "Scopri le Funzionalità",
    featuresTitle: "Perché ",
    featuresHighlight: "cloud sovrano",
    featuresSubtitle: "Le capacità della piattaforma, sotto il tuo controllo esclusivo.",
    features: [
      { icon: "🇪🇺", title: "Sovranità del dato", description: "I dati restano sui tuoi sistemi, in UE. Nessuna dipendenza da hyperscaler extra-europei, nessuna chiave in mani straniere." },
      { icon: "🏢", title: "Self-hosted / on-premise", description: "Distribuibile sui tuoi server o in un data center sovrano. Stesso stack della piattaforma, zero dati verso l'esterno." },
      { icon: "🔒", title: "Sicura per progetto", description: "Cifratura end-to-end, chiavi radicate in hardware (secure element / HSM), audit tamper-evident, secure boot e aggiornamenti firmati." },
      { icon: "♻️", title: "Fault-tolerant e alta disponibilità", description: "Architettura resiliente con replica e failover. Continuità operativa anche in caso di guasto di un nodo." },
      { icon: "🧠", title: "AI on-premise", description: "Inferenza e orchestrazione AI eseguite localmente per le organizzazioni che richiedono piena riservatezza dei dati." },
      { icon: "📜", title: "Conforme by design", description: "Pensata per GDPR, NIS2 e Cyber Resilience Act. Tracciabilità, gestione consensi e retention configurabili." },
    ],
    govTitle: "SashaGovCloud",
    govSubtitle: "Per il settore pubblico e la difesa.",
    govDesc:
      "SashaGovCloud è la declinazione di SashaCloud per amministrazioni, forze dell'ordine e difesa: deployment isolato, fino all'air-gap completo, per ambienti classificati e infrastrutture critiche nazionali.",
    govPoints: [
      "Deployment isolato / air-gapped per ambienti classificati",
      "Sovranità nazionale: dati e chiavi entro i confini, sotto controllo dell'ente",
      "Hardening security-grade: AAL3, controllo two-man, audit immutabile",
      "Allineato a NIS2 e ai requisiti di sicurezza nazionale",
    ],
    faqTitle: "Domande Frequenti",
    faq: [
      { question: "Che differenza c'è tra SashaPlatform e SashaCloud?", answer: "SashaPlatform è l'assistente AI; SashaCloud è l'infrastruttura sovrana su cui può girare in autonomia. Con SashaCloud lo stesso stack viene eseguito on-premise o in un data center europeo, senza che i dati escano dal tuo perimetro." },
      { question: "Dove vengono conservati i dati?", answer: "Sui tuoi sistemi o in un data center sovrano europeo di tua scelta. Nessun dato viene trasferito a hyperscaler extra-UE." },
      { question: "Cos'è SashaGovCloud?", answer: "È la variante per il settore pubblico e la difesa: deployment isolato fino all'air-gap, per ambienti classificati e infrastrutture critiche nazionali, con hardening di sicurezza dedicato." },
      { question: "È disponibile oggi?", answer: "SashaCloud è in fase di sviluppo. Le specifiche sono preliminari. Contattaci per valutare requisiti, tempi e possibilità di integrazione." },
    ],
    ctaTitle: "Vuoi saperne di più?",
    ctaDesc: "Contattaci per requisiti di deployment sovrano, on-premise e SashaGovCloud.",
    ctaButton: "Contattaci",
  },
  en: {
    badge: "In development",
    heroTitle: "SashaCloud",
    heroSubtitle: "Your AI. Your infrastructure. Your sovereignty.",
    heroDesc:
      "SashaCloud is SashaTech's sovereign infrastructure as a product: the full platform AI stack running on your own servers, on-premise or in a European sovereign data centre. Same capabilities, with no data leaving your perimeter.",
    ctaPrimary: "Get in Touch",
    ctaSecondary: "Discover Features",
    featuresTitle: "Why a ",
    featuresHighlight: "sovereign cloud",
    featuresSubtitle: "The platform's capabilities, under your exclusive control.",
    features: [
      { icon: "🇪🇺", title: "Data sovereignty", description: "Your data stays on your systems, in the EU. No dependency on non-European hyperscalers, no keys in foreign hands." },
      { icon: "🏢", title: "Self-hosted / on-premise", description: "Deployable on your own servers or a sovereign data centre. The same platform stack, with zero data going outside." },
      { icon: "🔒", title: "Secure by design", description: "End-to-end encryption, hardware-rooted keys (secure element / HSM), tamper-evident audit, secure boot and signed updates." },
      { icon: "♻️", title: "Fault-tolerant & high-availability", description: "Resilient architecture with replication and failover. Operational continuity even if a node fails." },
      { icon: "🧠", title: "On-premise AI", description: "AI inference and orchestration run locally for organisations that require full data confidentiality." },
      { icon: "📜", title: "Compliant by design", description: "Built for GDPR, NIS2 and the Cyber Resilience Act. Configurable traceability, consent management and retention." },
    ],
    govTitle: "SashaGovCloud",
    govSubtitle: "For the public sector and defense.",
    govDesc:
      "SashaGovCloud is the SashaCloud variant for government, law enforcement and defense: isolated deployment, up to full air-gap, for classified environments and national critical infrastructure.",
    govPoints: [
      "Isolated / air-gapped deployment for classified environments",
      "National sovereignty: data and keys within borders, under the agency's control",
      "Security-grade hardening: AAL3, two-man control, immutable audit",
      "Aligned with NIS2 and national security requirements",
    ],
    faqTitle: "Frequently Asked Questions",
    faq: [
      { question: "What's the difference between SashaPlatform and SashaCloud?", answer: "SashaPlatform is the AI assistant; SashaCloud is the sovereign infrastructure it can run on independently. With SashaCloud the same stack runs on-premise or in a European data centre, with no data leaving your perimeter." },
      { question: "Where is data stored?", answer: "On your own systems or a European sovereign data centre of your choice. No data is transferred to non-EU hyperscalers." },
      { question: "What is SashaGovCloud?", answer: "It is the variant for the public sector and defense: isolated deployment up to full air-gap, for classified environments and national critical infrastructure, with dedicated security hardening." },
      { question: "Is it available today?", answer: "SashaCloud is in development and specifications are preliminary. Contact us to assess requirements, timelines and integration possibilities." },
    ],
    ctaTitle: "Want to know more?",
    ctaDesc: "Contact us about sovereign and on-premise deployment, and SashaGovCloud.",
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
      ? "SashaCloud — Cloud sovrano e on-premise | SashaTech"
      : "SashaCloud — Sovereign, on-premise cloud | SashaTech",
    description: isIt
      ? "Infrastruttura AI sovrana self-hosted/on-premise. Sovranità del dato, fault-tolerant, conforme GDPR/NIS2. Include SashaGovCloud per settore pubblico e difesa."
      : "Sovereign self-hosted/on-premise AI infrastructure. Data sovereignty, fault-tolerant, GDPR/NIS2 compliant. Includes SashaGovCloud for public sector and defense.",
  };
}

export default function CloudPage({ params }: { params: { locale: string } }) {
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

      {/* Features section */}
      <section id="features" className="section-container py-16">
        <ScrollReveal animation="fade-up">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {c.featuresTitle}<span className="gradient-text">{c.featuresHighlight}</span>
            </h2>
            <p className="text-muted max-w-xl mx-auto">{c.featuresSubtitle}</p>
          </div>
        </ScrollReveal>
        <ScrollReveal animation="fade-up" stagger={0.15} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {c.features.map((f) => (
            <FeatureCard key={f.title} {...f} />
          ))}
        </ScrollReveal>
      </section>

      {/* SashaGovCloud callout */}
      <section className="section-container py-16">
        <ScrollReveal animation="fade-up">
          <div className="glass-card py-12 px-8 border border-gold/20">
            <p className="text-gold text-sm font-medium tracking-wider uppercase mb-2">{c.govSubtitle}</p>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">{c.govTitle}</h2>
            <p className="text-muted max-w-2xl leading-relaxed mb-6">{c.govDesc}</p>
            <ul className="space-y-3 max-w-2xl">
              {c.govPoints.map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                  <span className="text-sm text-muted">{p}</span>
                </li>
              ))}
            </ul>
          </div>
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
