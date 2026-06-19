import type { Metadata } from "next";
import { getDictionary } from "../../i18n/getDictionary";
import type { Locale } from "../../i18n/locales";
import HeroSection from "../../components/HeroSection";

export const metadata: Metadata = {
  title: "How It Works — SashaTech",
  description: "Discover how SashaTech helps professionals see, communicate, and stay safe in the field.",
};

const capabilities = [
  {
    id: "silent-flight",
    icon: "🔇",
    title_it: "Volo Silenzioso",
    title_en: "Silent Flight",
    subtitle_it: "Sorveglianza senza farsi notare",
    subtitle_en: "Surveillance without being noticed",
    description_it:
      "Il drone vola come un insetto — silenzioso e quasi invisibile. A pochi metri di distanza non lo senti. Questo lo rende perfetto per operazioni di sicurezza, ispezioni e situazioni dove il rumore non è un'opzione.",
    description_en:
      "The drone flies like an insect — silent and nearly invisible. From a few meters away, you can't hear it. This makes it perfect for security operations, inspections, and situations where noise is not an option.",
    benefits_it: ["Inudibile a pochi metri", "Nessun rotore, nessun rumore", "Sorveglianza discreta"],
    benefits_en: ["Inaudible from a few meters", "No rotors, no noise", "Discreet surveillance"],
  },
  {
    id: "see-in-dark",
    icon: "👁️",
    title_it: "Vede al Buio",
    title_en: "Sees in the Dark",
    subtitle_it: "Trova persone e oggetti dove l'occhio umano non arriva",
    subtitle_en: "Finds people and objects where human eyes can't reach",
    description_it:
      "Il drone trova persone al buio totale, attraverso il fumo, la nebbia e la vegetazione fitta. Non importa l'ora del giorno o le condizioni meteo — hai sempre una visione chiara della situazione.",
    description_en:
      "The drone finds people in total darkness, through smoke, fog, and dense vegetation. No matter the time of day or weather conditions — you always have a clear view of the situation.",
    benefits_it: ["Visione notturna", "Vede attraverso fumo e nebbia", "Funziona 24 ore su 24"],
    benefits_en: ["Night vision", "Sees through smoke and fog", "Works 24/7"],
  },
  {
    id: "adaptive-wings",
    icon: "🦋",
    title_it: "Ali che si Adattano",
    title_en: "Wings that Adapt",
    subtitle_it: "Veloce quando serve, efficiente quando conta",
    subtitle_en: "Fast when needed, efficient when it matters",
    description_it:
      "Le ali cambiano forma in volo: si allargano per sorveglianza lenta ed efficiente, si restringono per scatti di velocità. Il drone si adatta automaticamente alla situazione.",
    description_en:
      "The wings change shape in flight: they expand for slow, efficient surveillance, and retract for bursts of speed. The drone adapts automatically to the situation.",
    benefits_it: ["Velocità fino a 90 km/h quando serve", "Efficienza massima in sorveglianza", "Adattamento automatico"],
    benefits_en: ["Speed up to 90 km/h when needed", "Maximum efficiency in surveillance", "Automatic adaptation"],
  },
  {
    id: "pocket-size",
    icon: "✋",
    title_it: "Sta nel Palmo della Mano",
    title_en: "Fits in Your Palm",
    subtitle_it: "Pronto in secondi, ovunque tu sia",
    subtitle_en: "Ready in seconds, wherever you are",
    description_it:
      "Più leggero di una penna, si dispiega in pochi secondi direttamente dalla tasca. Nessun equipaggiamento di lancio, nessuna preparazione. Lo tiri fuori e vola.",
    description_en:
      "Lighter than a pen, it deploys in seconds right from your pocket. No launch equipment, no preparation. Take it out and it flies.",
    benefits_it: ["Nessun equipaggiamento di lancio", "Pronto in secondi", "Portalo ovunque"],
    benefits_en: ["No launch equipment", "Ready in seconds", "Take it anywhere"],
  },
  {
    id: "endurance",
    icon: "🔋",
    title_it: "Oltre 6 Ore di Autonomia",
    title_en: "6+ Hours of Endurance",
    subtitle_it: "Endurance da missione di ispezione",
    subtitle_en: "Endurance for full inspection missions",
    description_it:
      "Una singola sortita copre oltre 6 ore di volo in ispezione: corridoi lunghi e aree estese coperti senza rientrare. Più tempo sull'obiettivo, meno cambi batteria, meno interruzioni operative.",
    description_en:
      "A single sortie covers more than 6 hours of inspection flight: long corridors and wide areas surveyed without returning. More time on target, fewer battery swaps, fewer operational interruptions.",
    benefits_it: ["Oltre 6 h di endurance in ispezione", "Corridoi lunghi senza rientro", "Batterie europee ad alta densità"],
    benefits_en: ["6+ h endurance on inspection missions", "Long corridors without returning", "High-density European batteries"],
  },
  {
    id: "nav-by-nature",
    icon: "🧭",
    title_it: "Navigazione Ispirata alla Natura",
    title_en: "Navigation Inspired by Nature",
    subtitle_it: "Mantiene la rotta anche senza GPS",
    subtitle_en: "Holds course even without GPS",
    description_it:
      "Quando il GPS è disturbato o negato, i nostri sistemi non perdono la rotta: si orientano con la luce del cielo, con la memoria visiva del percorso e con la navigazione inerziale — come fanno gli insetti e gli uccelli migratori.",
    description_en:
      "When GPS is jammed or denied, our systems hold course: they orient by skylight, by visual memory of the route, and by inertial navigation — the way insects and migratory birds do.",
    benefits_it: ["Resistente a jamming e spoofing", "Bussola celeste + memoria visiva", "Ritorno a casa autonomo"],
    benefits_en: ["Resistant to jamming and spoofing", "Sky compass + visual memory", "Autonomous return-to-home"],
  },
  {
    id: "edge-ai",
    icon: "🧠",
    title_it: "Intelligenza a Bordo",
    title_en: "Intelligence at the Edge",
    subtitle_it: "Elabora dove serve, senza dipendere dal cloud",
    subtitle_en: "Processes where it matters, without depending on the cloud",
    description_it:
      "Percezione, ragionamento e assistenza vengono elaborati direttamente a bordo e sul campo. L'operatore riceve le informazioni giuste nel momento decisivo — a mani libere, connesso, consapevole — anche offline.",
    description_en:
      "Perception, reasoning and assistance run directly on-device and in the field. The operator gets the right information at the decisive moment — hands-free, connected, aware — even offline.",
    benefits_it: ["Inferenza AI a bordo", "Funziona anche offline", "Informazioni in tempo reale all'operatore"],
    benefits_en: ["On-device AI inference", "Works even offline", "Real-time information to the operator"],
  },
  {
    id: "sovereign-secure",
    icon: "🔒",
    title_it: "Sovrana e Sicura, per Progetto",
    title_en: "Sovereign & Secure, by Design",
    subtitle_it: "I tuoi dati restano tuoi",
    subtitle_en: "Your data stays yours",
    description_it:
      "Cloud e piattaforma proprietari, senza chiavi straniere. Chiavi crittografiche radicate in hardware, cifratura end-to-end, audit tamper-evident e autenticazione continua. Sicurezza e resilienza sono integrate nel design — non aggiunte dopo.",
    description_en:
      "Proprietary cloud and platform, with no foreign key. Hardware-rooted cryptographic keys, end-to-end encryption, tamper-evident audit and continuous authentication. Security and resilience are built into the design — not bolted on later.",
    benefits_it: ["Chiavi in hardware (secure element / HSM)", "Cifratura end-to-end, post-quantum-ready", "Conforme a GDPR e NIS2"],
    benefits_en: ["Hardware-rooted keys (secure element / HSM)", "End-to-end, post-quantum-ready encryption", "GDPR and NIS2 compliant"],
  },
];

export default async function TechnologyPage({ params }: { params: { locale: string } }) {
  const locale = params.locale as Locale;
  const dict = await getDictionary(locale);
  const isIt = locale === "it";

  return (
    <>
      <HeroSection
        title={dict.technology.title}
        subtitle={dict.technology.subtitle}
        description={dict.technology.subtitle}
      />

      <div className="section-container pb-20">
        <div className="space-y-24">
          {capabilities.map((cap, index) => (
            <section key={cap.id} id={cap.id} className="scroll-mt-20">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}>
                {/* Content */}
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <p className="text-gold text-sm font-medium tracking-wider uppercase mb-2">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h2 className="text-2xl md:text-3xl font-bold mb-2">
                    {isIt ? cap.title_it : cap.title_en}
                  </h2>
                  <p className="text-gold/80 text-sm mb-4">
                    {isIt ? cap.subtitle_it : cap.subtitle_en}
                  </p>
                  <p className="text-muted leading-relaxed mb-6">
                    {isIt ? cap.description_it : cap.description_en}
                  </p>

                  {/* Benefits */}
                  <div className="space-y-3">
                    {(isIt ? cap.benefits_it : cap.benefits_en).map((benefit) => (
                      <div key={benefit} className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                        <span className="text-sm text-muted">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Image placeholder */}
                <div className={`aspect-square bg-navy-light rounded-2xl border border-white/5 relative overflow-hidden ${
                  index % 2 === 1 ? "lg:order-1" : ""
                }`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-6xl opacity-20">{cap.icon}</p>
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>

      {/* Made in Europe */}
      <section className="bg-navy-light border-t border-white/5">
        <div className="section-container py-20 text-center">
          <p className="text-gold text-sm font-medium tracking-wider uppercase mb-4">
            {isIt ? "Progettato e Prodotto nell'Unione Europea" : "Designed & Manufactured in the European Union"}
          </p>
          <h2 className="text-2xl md:text-4xl font-bold mb-6">
            {isIt ? "Progettato in UE" : "Designed in EU"}
          </h2>
          <p className="text-muted max-w-2xl mx-auto leading-relaxed">
            {isIt
              ? "Progettazione e assemblaggio finale in Europa. Filiera con fornitori europei e alleati NATO. Obiettivo: massimizzare il contenuto UE in ogni prodotto."
              : "Design and final assembly in Europe. Supply chain with European and NATO-allied suppliers. Goal: maximize EU content in every product."}
          </p>
          <div className="flex flex-wrap justify-center gap-8 mt-12">
            {[
              { country: isIt ? "Germania" : "Germany", flag: "🇩🇪" },
              { country: isIt ? "Francia" : "France", flag: "🇫🇷" },
              { country: isIt ? "Belgio" : "Belgium", flag: "🇧🇪" },
              { country: isIt ? "Norvegia" : "Norway", flag: "🇳🇴" },
              { country: isIt ? "Paesi Bassi" : "Netherlands", flag: "🇳🇱" },
              { country: isIt ? "Italia" : "Italy", flag: "🇮🇹" },
            ].map((item) => (
              <div key={item.country} className="text-center">
                <p className="text-3xl mb-2">{item.flag}</p>
                <p className="text-sm font-medium">{item.country}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
