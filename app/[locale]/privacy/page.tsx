import type { Metadata } from "next";
import { locales } from "../../i18n/locales";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  return {
    title: params.locale === "it" ? "Privacy Policy | SashaTech" : "Privacy Policy | SashaTech",
  };
}

type Section = { h: string; body?: string[]; ul?: string[] };

const COPY: Record<"it" | "en", { title: string; updated: string; sections: Section[]; contactEmail: string; contactLines: string[] }> = {
  en: {
    title: "Privacy Policy",
    updated: "Last updated: March 31, 2026",
    sections: [
      {
        h: "",
        body: [
          "SashaTech S.r.l.s. (“we”, “us”, “our”), with registered office at Via Bottalico 11, 70124 Bari (BA), Italy, VAT pending registration, is the data controller for personal data collected through this website (www.sashatechnology.com).",
        ],
      },
      {
        h: "1. Data We Collect",
        body: ["We collect personal data only when you voluntarily provide it:"],
        ul: [
          "Newsletter subscription: email address",
          "Contact form: name, email address, message content",
        ],
      },
      {
        h: "",
        body: [
          "We do not collect data automatically through tracking cookies, analytics, or similar technologies beyond essential session cookies.",
        ],
      },
      {
        h: "2. Purpose and Legal Basis",
        ul: [
          "Newsletter: to send product updates and availability information. Legal basis: your consent (GDPR Art. 6(1)(a)).",
          "Contact form: to respond to your inquiry. Legal basis: your consent (GDPR Art. 6(1)(a)) and legitimate interest in responding to requests (GDPR Art. 6(1)(f)).",
        ],
      },
      {
        h: "3. Data Processors",
        body: [
          "Your data is processed through Google Apps Script (Google LLC), which acts as a data processor. Data is stored in Google Sheets within our Google Workspace account. Google’s privacy terms apply: https://policies.google.com/privacy.",
        ],
      },
      {
        h: "4. Data Retention",
        body: [
          "Newsletter subscriptions: retained until you unsubscribe. Contact form submissions: retained for 24 months, then deleted. You may request deletion at any time.",
        ],
      },
      {
        h: "5. Your Rights (GDPR Art. 15-22)",
        body: ["You have the right to:"],
        ul: [
          "Access your personal data",
          "Rectify inaccurate data",
          "Request erasure (right to be forgotten)",
          "Restrict processing",
          "Data portability",
          "Object to processing",
          "Withdraw consent at any time",
        ],
      },
      {
        h: "6. Supervisory Authority",
        body: [
          "You have the right to lodge a complaint with the Italian Data Protection Authority (Garante per la protezione dei dati personali): www.garanteprivacy.it.",
        ],
      },
    ],
    contactEmail: "privacy@sashatechnology.com",
    contactLines: ["SashaTech S.r.l.s.", "Via Bottalico 11, 70124 Bari (BA), Italy"],
  },
  it: {
    title: "Privacy Policy",
    updated: "Ultimo aggiornamento: 31 marzo 2026",
    sections: [
      {
        h: "",
        body: [
          "SashaTech S.r.l.s. (“noi”), con sede legale in Via Bottalico 11, 70124 Bari (BA), Italia, P.IVA in corso di registrazione, è il titolare del trattamento dei dati personali raccolti tramite questo sito (www.sashatechnology.com).",
        ],
      },
      {
        h: "1. Dati che raccogliamo",
        body: ["Raccogliamo dati personali solo quando li fornisci volontariamente:"],
        ul: [
          "Iscrizione alla newsletter: indirizzo email",
          "Modulo di contatto: nome, indirizzo email, contenuto del messaggio",
        ],
      },
      {
        h: "",
        body: [
          "Non raccogliamo dati automaticamente tramite cookie di tracciamento, analytics o tecnologie simili, oltre ai cookie di sessione essenziali.",
        ],
      },
      {
        h: "2. Finalità e base giuridica",
        ul: [
          "Newsletter: per inviare aggiornamenti sui prodotti e informazioni sulla disponibilità. Base giuridica: il tuo consenso (GDPR Art. 6(1)(a)).",
          "Modulo di contatto: per rispondere alla tua richiesta. Base giuridica: il tuo consenso (GDPR Art. 6(1)(a)) e il legittimo interesse a rispondere alle richieste (GDPR Art. 6(1)(f)).",
        ],
      },
      {
        h: "3. Responsabili del trattamento",
        body: [
          "I tuoi dati sono trattati tramite Google Apps Script (Google LLC), che agisce come responsabile del trattamento. I dati sono conservati in Google Sheets all’interno del nostro account Google Workspace. Si applicano i termini privacy di Google: https://policies.google.com/privacy.",
        ],
      },
      {
        h: "4. Conservazione dei dati",
        body: [
          "Iscrizioni newsletter: conservate fino alla cancellazione dell’iscrizione. Invii dal modulo di contatto: conservati per 24 mesi, poi cancellati. Puoi richiederne la cancellazione in qualsiasi momento.",
        ],
      },
      {
        h: "5. I tuoi diritti (GDPR Art. 15-22)",
        body: ["Hai il diritto di:"],
        ul: [
          "Accedere ai tuoi dati personali",
          "Rettificare dati inesatti",
          "Richiedere la cancellazione (diritto all’oblio)",
          "Limitare il trattamento",
          "Portabilità dei dati",
          "Opporti al trattamento",
          "Revocare il consenso in qualsiasi momento",
        ],
      },
      {
        h: "6. Autorità di controllo",
        body: [
          "Hai il diritto di presentare reclamo all’Autorità Garante per la protezione dei dati personali: www.garanteprivacy.it.",
        ],
      },
    ],
    contactEmail: "privacy@sashatechnology.com",
    contactLines: ["SashaTech S.r.l.s.", "Via Bottalico 11, 70124 Bari (BA), Italia"],
  },
};

export default function PrivacyPage({ params }: { params: { locale: string } }) {
  const t = COPY[params.locale === "it" ? "it" : "en"];
  const contactHeading = params.locale === "it" ? "7. Contatti" : "7. Contact";
  return (
    <div className="section-container py-20 pt-32 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">{t.title}</h1>
      <div className="prose prose-invert prose-sm text-muted space-y-6 leading-relaxed">
        <p><strong>{t.updated}</strong></p>

        {t.sections.map((s, i) => (
          <div key={i} className="space-y-3">
            {s.h && <h2 className="text-lg font-semibold text-white mt-8">{s.h}</h2>}
            {s.body?.map((p, j) => <p key={j}>{p}</p>)}
            {s.ul && (
              <ul className="list-disc pl-5 space-y-1">
                {s.ul.map((li, k) => <li key={k}>{li}</li>)}
              </ul>
            )}
          </div>
        ))}

        <h2 className="text-lg font-semibold text-white mt-8">{contactHeading}</h2>
        <p>
          {t.contactLines.map((line, i) => (
            <span key={i}>{line}<br /></span>
          ))}
          Email: <a href={`mailto:${t.contactEmail}`} className="text-gold underline">{t.contactEmail}</a>
        </p>
      </div>
    </div>
  );
}
