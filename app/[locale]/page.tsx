import type { Metadata } from "next";
import { locales } from "../i18n/locales";
import TacticalHero from "../components/TacticalHero";
import BentoEcosystem from "../components/BentoEcosystem";
import PillarBar from "../components/PillarBar";
import GlassesDroneCockpit from "../components/GlassesDroneCockpit";
import ComplianceMarquee from "../components/ComplianceMarquee";
import PartnersInvestorsCTA from "../components/PartnersInvestorsCTA";

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

// ──────────────────────────────────────────────────────────────────
// COPY (it/en) — aligned to the "Sovereign integrated platform"
// narrative (LinkedIn portfolio deck, June 2026). Civil framing.
// ──────────────────────────────────────────────────────────────────
const COPY = {
  it: {
    nav: {
      items: [
        { label: "Capacità", href: "/it/technology" },
        { label: "Velivoli", href: "/it/products/m2" },
        { label: "Glasses", href: "/it/products/glasses" },
        { label: "Platform", href: "/it/products/platform" },
        { label: "Sicurezza", href: "/security" },
        { label: "Azienda", href: "/it/about" },
      ],
      cta: "Diventa partner",
    },
    hero: {
      badge: "Deep-tech europea  ·  Cerchiamo partner e investitori",
      title: "Intelligenza sovrana. Nelle tue mani.",
      subtitle: "Velivoli autonomi (UAV), IA sovrana e un cloud europeo sicuro — un'unica piattaforma integrata.",
      body:
        "Infrastrutture critiche, sicurezza e dati dipendono sempre più da tecnologie che gli Stati non controllano più. Costruiamo le fondamenta sovrane per cambiarlo — pensate per proteggere ciò che conta.",
      ctaPrimary: { label: "Diventa partner o investitore", href: "/it/contact" },
      ctaSecondary: { label: "Esplora la piattaforma", href: "/it/technology" },
      chips: [
        { label: "Per progetto", value: "Sovrana" },
        { label: "Bio-navigazione", value: "Senza GPS" },
        { label: "Intelligenza a bordo", value: "Edge AI" },
        { label: "Normativa UE", value: "NIS2" },
      ],
    },
    ecosystem: {
      eyebrow: "CAPACITÀ · UN'UNICA PIATTAFORMA INTEGRATA",
      heading: "Una piattaforma. Per proteggere ciò che conta.",
      body:
        "Intelligenza che comprende, un'autonomia che impara, sistemi che agiscono — coordinati end-to-end, e sempre sotto il tuo comando.",
      items: [
        {
          badge: "CAPACITÀ 01",
          title: "Intelligenza che comprende",
          description:
            "Un nucleo cognitivo che percepisce, ragiona e assiste — in ogni missione, in ogni lingua.",
          href: "/it/products/platform",
          className: "md:col-span-3 lg:col-span-4 row-span-2",
        },
        {
          badge: "CAPACITÀ 02",
          title: "Un'autonomia che impara",
          description:
            "Il nostro autopilota tattico si addestra contro sé stesso in simulazione — affinando il giudizio in migliaia di missioni prima ancora di volare.",
          href: "/it/technology",
          className: "md:col-span-3 lg:col-span-2 row-span-2",
        },
        {
          badge: "CAPACITÀ 04",
          title: "Sistemi che agiscono",
          description:
            "Velivoli autonomi (UAV) per ispezione, sorveglianza, monitoraggio ambientale, sicurezza pubblica e risposta alle emergenze.",
          href: "/it/products/m2",
          className: "md:col-span-3 lg:col-span-3",
        },
        {
          badge: "CAPACITÀ 05",
          title: "Modulare per progetto",
          description:
            "Una piattaforma, ogni missione. Riconfigurata in minuti, non in mesi — si cambia il payload, non il velivolo.",
          href: "/it/products/m2",
          className: "md:col-span-3 lg:col-span-3",
        },
        {
          badge: "CAPACITÀ 06",
          title: "Navigazione ispirata alla natura",
          description:
            "Quando il GPS è disturbato o negato, i nostri sistemi non perdono la rotta — col cielo, con la memoria, con l'istinto.",
          href: "/it/technology",
          className: "md:col-span-3 lg:col-span-3",
        },
        {
          badge: "CAPACITÀ 07",
          title: "Intelligenza sul campo",
          description:
            "La conoscenza consegnata all'operatore sul campo — a mani libere, connesso, consapevole.",
          href: "/it/products/glasses",
          className: "md:col-span-3 lg:col-span-3",
        },
      ],
    },
    cockpit: {
      eyebrow: "CAPACITÀ 03 · IL COMANDO RESTA TUO",
      heading: "Autonomia piena. Controllo totale. Sempre una tua scelta.",
      body: [
        "Autonomia piena quando la missione lo consente — e controllo immersivo in prima persona nell'istante in cui lo vuoi.",
        "Supervisione totale su ogni asset, con la possibilità di riprendere il comando in qualsiasi momento. Ogni azione è tracciata; le decisioni che contano restano umane.",
        "Il sistema propone. Tu decidi.",
      ],
      tags: [
        { label: "Comando", value: "Operatore" },
        { label: "Controllo", value: "FPV + autonomia" },
        { label: "Supervisione", value: "Totale, real-time" },
        { label: "Audit", value: "Tamper-evident" },
      ],
      cta: { label: "Come funziona", href: "/it/technology" },
    },
    pillars: {
      eyebrow: "CAPACITÀ 08 · INFRASTRUTTURA E SICUREZZA SOVRANE",
      heading: "Sicura e resiliente — per progetto.",
      items: [
        {
          code: "S-01",
          title: "Sovrana per progetto",
          description:
            "Cloud e piattaforma proprietari — nessuna chiave straniera. Chiavi crittografiche radicate in hardware (secure element / HSM).",
        },
        {
          code: "S-02",
          title: "Cifrata end-to-end",
          description:
            "Cifratura post-quantum-ready. Audit tamper-evident, secure boot e aggiornamenti OTA firmati.",
        },
        {
          code: "S-03",
          title: "Fault-tolerant e resiliente",
          description:
            "Architettura ad alta disponibilità. Zeroizzazione e wipe remoto in caso di compromissione.",
        },
        {
          code: "S-04",
          title: "Accesso fidato",
          description:
            "Autenticazione continua (voiceprint, AAL3), controllo two-man, threat-model DO-326A.",
        },
      ],
    },
    compliance: {
      eyebrow: "AFFIDABILE PER PROGETTO · PROGETTATA PER LE NORMATIVE EUROPEE",
      items: [
        "EASA",
        "GDPR",
        "NIS2",
        "AI Act UE",
        "DO-326A",
        "Cyber Resilience Act",
        "IHL · ICRC",
        "Progettata e prodotta in Europa",
      ],
    },
    ask: {
      eyebrow: "COSA CERCHIAMO",
      heading: "Per ora non vendiamo droni. Cerchiamo chi vuole costruire tutto questo con noi.",
      body:
        "Stiamo costruendo verso il primo volo e la validazione sul campo. Se vuoi contribuire all'autonomia sovrana europea, parliamone.",
      points: [
        "Partner strategici e industriali",
        "Investitori — verso il Series A",
        "Clienti pilota nelle infrastrutture critiche",
      ],
      ctaPrimary: { label: "Contattaci", href: "/it/contact" },
      ctaSecondary: { label: "Scopri la piattaforma", href: "/it/technology" },
      kicker: "La tecnologia propone. Le persone decidono.",
    },
  },
  // ──────────────────────────────────────────────────────────────
  en: {
    nav: {
      items: [
        { label: "Capabilities", href: "/en/technology" },
        { label: "Aircraft", href: "/en/products/m2" },
        { label: "Glasses", href: "/en/products/glasses" },
        { label: "Platform", href: "/en/products/platform" },
        { label: "Security", href: "/security" },
        { label: "Company", href: "/en/about" },
      ],
      cta: "Partner with us",
    },
    hero: {
      badge: "European deep-tech  ·  Seeking partners & investors",
      title: "Sovereign intelligence. In your hands.",
      subtitle: "Autonomous aircraft (UAV), sovereign AI and a secure European cloud — one integrated platform.",
      body:
        "Critical infrastructure, security and data increasingly depend on technologies that nations no longer control. We build the sovereign foundation to change that — designed to protect what matters.",
      ctaPrimary: { label: "Become a partner or investor", href: "/en/contact" },
      ctaSecondary: { label: "Explore the platform", href: "/en/technology" },
      chips: [
        { label: "By design", value: "Sovereign" },
        { label: "Bio-navigation", value: "GPS-free" },
        { label: "On-device intelligence", value: "Edge AI" },
        { label: "EU regulation", value: "NIS2" },
      ],
    },
    ecosystem: {
      eyebrow: "CAPABILITIES · ONE INTEGRATED PLATFORM",
      heading: "One platform. Built to protect what matters.",
      body:
        "Intelligence that understands, an autonomy that learns, systems that act — coordinated end to end, and always under your command.",
      items: [
        {
          badge: "CAPABILITY 01",
          title: "Intelligence that understands",
          description:
            "A cognitive core that perceives, reasons and assists — across every mission, in every language.",
          href: "/en/products/platform",
          className: "md:col-span-3 lg:col-span-4 row-span-2",
        },
        {
          badge: "CAPABILITY 02",
          title: "An autonomy that learns",
          description:
            "Our tactical autopilot trains against itself in simulation — sharpening judgement across thousands of missions before ever flying.",
          href: "/en/technology",
          className: "md:col-span-3 lg:col-span-2 row-span-2",
        },
        {
          badge: "CAPABILITY 04",
          title: "Systems that act",
          description:
            "Autonomous aircraft (UAV) for inspection, surveillance, environmental monitoring, public safety and emergency response.",
          href: "/en/products/m2",
          className: "md:col-span-3 lg:col-span-3",
        },
        {
          badge: "CAPABILITY 05",
          title: "Modular by design",
          description:
            "One platform, every mission. Reconfigured in minutes, not months — change the payload, not the aircraft.",
          href: "/en/products/m2",
          className: "md:col-span-3 lg:col-span-3",
        },
        {
          badge: "CAPABILITY 06",
          title: "Navigation inspired by nature",
          description:
            "When GPS is jammed or denied, our systems hold course — by the sky, by memory, by instinct.",
          href: "/en/technology",
          className: "md:col-span-3 lg:col-span-3",
        },
        {
          badge: "CAPABILITY 07",
          title: "Intelligence at the edge",
          description:
            "Knowledge delivered to the operator in the field — hands-free, connected, aware.",
          href: "/en/products/glasses",
          className: "md:col-span-3 lg:col-span-3",
        },
      ],
    },
    cockpit: {
      eyebrow: "CAPABILITY 03 · YOU STAY IN COMMAND",
      heading: "Full autonomy. Total control. Always your call.",
      body: [
        "Full autonomy when the mission allows — and immersive first-person control the instant you want it.",
        "Total supervision over every asset, with the ability to take the stick at any moment. Every action is logged; the decisions that matter stay human.",
        "The system proposes. You decide.",
      ],
      tags: [
        { label: "Command", value: "Operator-led" },
        { label: "Control", value: "FPV + autonomy" },
        { label: "Oversight", value: "Full, real-time" },
        { label: "Audit", value: "Tamper-evident" },
      ],
      cta: { label: "How it works", href: "/en/technology" },
    },
    pillars: {
      eyebrow: "CAPABILITY 08 · SOVEREIGN INFRASTRUCTURE & SECURITY",
      heading: "Secure and resilient — by design.",
      items: [
        {
          code: "S-01",
          title: "Sovereign by design",
          description:
            "Your cloud and platform — no foreign key. Cryptographic keys rooted in hardware (secure element / HSM).",
        },
        {
          code: "S-02",
          title: "Encrypted, end to end",
          description:
            "Post-quantum-ready encryption. Tamper-evident audit, secure boot and signed OTA updates.",
        },
        {
          code: "S-03",
          title: "Fault-tolerant & resilient",
          description:
            "High-availability architecture. Zeroization and remote wipe on compromise.",
        },
        {
          code: "S-04",
          title: "Trusted access",
          description:
            "Continuous authentication (voiceprint, AAL3), two-man control, threat-modelled to DO-326A.",
        },
      ],
    },
    compliance: {
      eyebrow: "TRUSTED BY DESIGN · ENGINEERED TO EUROPEAN REGULATION",
      items: [
        "EASA",
        "GDPR",
        "NIS2",
        "EU AI Act",
        "DO-326A",
        "Cyber Resilience Act",
        "IHL · ICRC",
        "Designed & built in Europe",
      ],
    },
    ask: {
      eyebrow: "WHAT WE'RE LOOKING FOR",
      heading: "We're not selling drones yet. We're looking for the people who'll build this with us.",
      body:
        "We're building toward first flight and field validation. If you want to help build sovereign autonomy in Europe, let's talk.",
      points: [
        "Strategic & industrial partners",
        "Investors — toward Series A",
        "Pilot customers in critical infrastructure",
      ],
      ctaPrimary: { label: "Get in touch", href: "/en/contact" },
      ctaSecondary: { label: "See the platform", href: "/en/technology" },
      kicker: "Technology proposes. People decide.",
    },
  },
} as const;


export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const isIt = params.locale === "it";
  return {
    title: isIt
      ? "SashaTech · Autonomia sovrana — UAV, IA e cloud sicuro"
      : "SashaTech · Sovereign autonomy — UAV, AI & secure cloud",
    description: isIt
      ? "Un'unica piattaforma europea integrata: velivoli autonomi (UAV), IA sovrana e cloud sicuro. Cerchiamo partner e investitori verso il Series A."
      : "One integrated European platform: autonomous aircraft (UAV), sovereign AI and a secure cloud. Seeking partners and investors toward Series A.",
  };
}


export default function HomePage({ params }: { params: { locale: string } }) {
  const locale = (params.locale === "en" ? "en" : "it") as keyof typeof COPY;
  const c = COPY[locale];

  return (
    <>
      <TacticalHero
        flagshipBadge={c.hero.badge}
        title={c.hero.title}
        subtitle={c.hero.subtitle}
        body={c.hero.body}
        ctaPrimary={c.hero.ctaPrimary}
        ctaSecondary={c.hero.ctaSecondary}
        chips={[...c.hero.chips]}
      />

      <BentoEcosystem
        eyebrow={c.ecosystem.eyebrow}
        heading={c.ecosystem.heading}
        body={c.ecosystem.body}
        items={[...c.ecosystem.items]}
      />

      <GlassesDroneCockpit
        eyebrow={c.cockpit.eyebrow}
        heading={c.cockpit.heading}
        body={[...c.cockpit.body]}
        tags={[...c.cockpit.tags]}
        cta={c.cockpit.cta}
      />

      <PillarBar
        eyebrow={c.pillars.eyebrow}
        heading={c.pillars.heading}
        pillars={[...c.pillars.items]}
      />

      <ComplianceMarquee
        eyebrow={c.compliance.eyebrow}
        items={[...c.compliance.items]}
      />

      <PartnersInvestorsCTA
        eyebrow={c.ask.eyebrow}
        heading={c.ask.heading}
        body={c.ask.body}
        points={[...c.ask.points]}
        ctaPrimary={c.ask.ctaPrimary}
        ctaSecondary={c.ask.ctaSecondary}
        kicker={c.ask.kicker}
      />
    </>
  );
}
