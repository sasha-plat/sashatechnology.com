import type { Metadata } from "next";
import { locales } from "../../i18n/locales";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export function generateMetadata(): Metadata {
  return { title: "Cookie Policy | SashaTech" };
}

type Section = { h: string; body?: string[] };

const COPY: Record<"it" | "en", {
  title: string;
  updated: string;
  intro: Section;
  cookiesHeading: string;
  essentialHeading: string;
  tableHead: { name: string; purpose: string; duration: string };
  tableRow: { name: string; purpose: string; duration: string };
  essentialNote: string;
  thirdPartyHeading: string;
  thirdPartyBody: string;
  rest: Section[];
  contactHeading: string;
  contactBody: string;
  contactEmail: string;
}> = {
  en: {
    title: "Cookie Policy",
    updated: "Last updated: March 31, 2026",
    intro: {
      h: "1. What Are Cookies",
      body: [
        "Cookies are small text files stored on your device when you visit a website. They help websites function properly and can provide information to site owners.",
      ],
    },
    cookiesHeading: "2. Cookies We Use",
    essentialHeading: "Essential Cookies",
    tableHead: { name: "Name", purpose: "Purpose", duration: "Duration" },
    tableRow: { name: "cookie_consent", purpose: "Stores your cookie preference", duration: "1 year" },
    essentialNote:
      "Essential cookies are necessary for the website to function. They do not require your consent under the ePrivacy Directive.",
    thirdPartyHeading: "Third-Party Services",
    thirdPartyBody:
      "When you submit a form (newsletter or contact), data is sent to Google Apps Script (Google LLC). Google may set its own cookies according to its privacy policy. No analytics, advertising, or social media cookies are used on this website.",
    rest: [
      {
        h: "3. Managing Cookies",
        body: [
          "You can control cookies through your browser settings. Disabling essential cookies may affect website functionality. For instructions on managing cookies in your browser, visit aboutcookies.org.",
        ],
      },
      {
        h: "4. Changes",
        body: [
          "We may update this Cookie Policy from time to time. Changes will be posted on this page with an updated revision date.",
        ],
      },
    ],
    contactHeading: "5. Contact",
    contactBody: "For questions about our use of cookies, contact:",
    contactEmail: "privacy@sashatechnology.com",
  },
  it: {
    title: "Cookie Policy",
    updated: "Ultimo aggiornamento: 31 marzo 2026",
    intro: {
      h: "1. Cosa sono i cookie",
      body: [
        "I cookie sono piccoli file di testo memorizzati sul tuo dispositivo quando visiti un sito web. Aiutano i siti a funzionare correttamente e possono fornire informazioni ai gestori del sito.",
      ],
    },
    cookiesHeading: "2. Cookie che utilizziamo",
    essentialHeading: "Cookie essenziali",
    tableHead: { name: "Nome", purpose: "Finalità", duration: "Durata" },
    tableRow: { name: "cookie_consent", purpose: "Memorizza la tua preferenza sui cookie", duration: "1 anno" },
    essentialNote:
      "I cookie essenziali sono necessari al funzionamento del sito. Non richiedono il tuo consenso ai sensi della Direttiva ePrivacy.",
    thirdPartyHeading: "Servizi di terze parti",
    thirdPartyBody:
      "Quando invii un modulo (newsletter o contatto), i dati vengono inviati a Google Apps Script (Google LLC). Google può impostare i propri cookie secondo la sua privacy policy. Su questo sito non vengono utilizzati cookie di analytics, pubblicità o social media.",
    rest: [
      {
        h: "3. Gestione dei cookie",
        body: [
          "Puoi controllare i cookie tramite le impostazioni del browser. Disabilitare i cookie essenziali può compromettere il funzionamento del sito. Per istruzioni sulla gestione dei cookie nel tuo browser, visita aboutcookies.org.",
        ],
      },
      {
        h: "4. Modifiche",
        body: [
          "Potremmo aggiornare questa Cookie Policy di tanto in tanto. Le modifiche saranno pubblicate su questa pagina con una data di revisione aggiornata.",
        ],
      },
    ],
    contactHeading: "5. Contatti",
    contactBody: "Per domande sull’uso dei cookie, contatta:",
    contactEmail: "privacy@sashatechnology.com",
  },
};

export default function CookiePolicyPage({ params }: { params: { locale: string } }) {
  const t = COPY[params.locale === "it" ? "it" : "en"];
  return (
    <div className="section-container py-20 pt-32 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">{t.title}</h1>
      <div className="prose prose-invert prose-sm text-muted space-y-6 leading-relaxed">
        <p><strong>{t.updated}</strong></p>

        <h2 className="text-lg font-semibold text-white mt-8">{t.intro.h}</h2>
        {t.intro.body?.map((p, i) => <p key={i}>{p}</p>)}

        <h2 className="text-lg font-semibold text-white mt-8">{t.cookiesHeading}</h2>
        <h3 className="text-md font-semibold text-white mt-4">{t.essentialHeading}</h3>
        <table className="w-full text-xs">
          <thead>
            <tr className="text-left text-muted/70">
              <th className="pb-2">{t.tableHead.name}</th>
              <th className="pb-2">{t.tableHead.purpose}</th>
              <th className="pb-2">{t.tableHead.duration}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-1">{t.tableRow.name}</td>
              <td>{t.tableRow.purpose}</td>
              <td>{t.tableRow.duration}</td>
            </tr>
          </tbody>
        </table>
        <p>{t.essentialNote}</p>

        <h3 className="text-md font-semibold text-white mt-4">{t.thirdPartyHeading}</h3>
        <p>{t.thirdPartyBody}</p>

        {t.rest.map((s, i) => (
          <div key={i} className="space-y-3">
            <h2 className="text-lg font-semibold text-white mt-8">{s.h}</h2>
            {s.body?.map((p, j) => <p key={j}>{p}</p>)}
          </div>
        ))}

        <h2 className="text-lg font-semibold text-white mt-8">{t.contactHeading}</h2>
        <p>
          {t.contactBody}{" "}
          <a href={`mailto:${t.contactEmail}`} className="text-gold underline">{t.contactEmail}</a>
        </p>
      </div>
    </div>
  );
}
