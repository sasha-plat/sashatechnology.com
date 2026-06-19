import type { Metadata } from "next";
import { locales } from "../../i18n/locales";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export function generateMetadata(): Metadata {
  return { title: "Terms of Service | SashaTech" };
}

type Section = { h: string; body: string[] };

const COPY: Record<"it" | "en", {
  title: string;
  updated: string;
  sections: Section[];
  contactHeading: string;
  contactEmail: string;
  contactLines: string[];
}> = {
  en: {
    title: "Terms of Service",
    updated: "Last updated: March 31, 2026",
    sections: [
      {
        h: "1. General",
        body: [
          "This website is operated by SashaTech S.r.l.s., Via Bottalico 11, 70124 Bari (BA), Italy, VAT pending registration. By accessing this website, you agree to these terms.",
        ],
      },
      {
        h: "2. Informational Purpose",
        body: [
          "This website is provided for informational purposes only. All product descriptions, specifications, images, and performance data are preliminary and subject to change without notice. Nothing on this website constitutes a binding offer to sell or a contract.",
        ],
      },
      {
        h: "3. No Sales or Pre-Orders",
        body: [
          "This website does not process payments, accept deposits, or facilitate purchases of any kind. No commercial transactions take place through this website. Product availability and pricing will be communicated separately when products become available.",
        ],
      },
      {
        h: "4. Intellectual Property",
        body: [
          "All content on this website, including text, images, logos, and design, is the property of SashaTech S.r.l.s. and is protected by applicable intellectual property laws. Reproduction without written permission is prohibited.",
        ],
      },
      {
        h: "5. Limitation of Liability",
        body: [
          "SashaTech S.r.l.s. makes no warranties regarding the accuracy, completeness, or reliability of information on this website. We are not liable for any damages arising from the use of this website or reliance on its content.",
        ],
      },
      {
        h: "6. Governing Law",
        body: [
          "These terms are governed by Italian law. Any disputes shall be subject to the exclusive jurisdiction of the courts of Bari, Italy.",
        ],
      },
    ],
    contactHeading: "7. Contact",
    contactEmail: "info@sashatechnology.com",
    contactLines: ["SashaTech S.r.l.s.", "Via Bottalico 11, 70124 Bari (BA), Italy"],
  },
  it: {
    title: "Termini di Servizio",
    updated: "Ultimo aggiornamento: 31 marzo 2026",
    sections: [
      {
        h: "1. Generale",
        body: [
          "Questo sito è gestito da SashaTech S.r.l.s., Via Bottalico 11, 70124 Bari (BA), Italia, P.IVA in corso di registrazione. Accedendo a questo sito, accetti i presenti termini.",
        ],
      },
      {
        h: "2. Finalità informativa",
        body: [
          "Questo sito è fornito a soli fini informativi. Tutte le descrizioni di prodotto, le specifiche, le immagini e i dati prestazionali sono preliminari e soggetti a modifica senza preavviso. Nulla in questo sito costituisce un’offerta vincolante di vendita o un contratto.",
        ],
      },
      {
        h: "3. Nessuna vendita o pre-ordine",
        body: [
          "Questo sito non elabora pagamenti, non accetta acconti e non facilita acquisti di alcun tipo. Nessuna transazione commerciale avviene tramite questo sito. La disponibilità dei prodotti e i prezzi saranno comunicati separatamente quando i prodotti diverranno disponibili.",
        ],
      },
      {
        h: "4. Proprietà intellettuale",
        body: [
          "Tutti i contenuti di questo sito, inclusi testi, immagini, loghi e design, sono di proprietà di SashaTech S.r.l.s. e sono protetti dalle leggi applicabili sulla proprietà intellettuale. La riproduzione senza autorizzazione scritta è vietata.",
        ],
      },
      {
        h: "5. Limitazione di responsabilità",
        body: [
          "SashaTech S.r.l.s. non fornisce garanzie in merito all’accuratezza, completezza o affidabilità delle informazioni presenti su questo sito. Non siamo responsabili per eventuali danni derivanti dall’uso di questo sito o dall’affidamento sui suoi contenuti.",
        ],
      },
      {
        h: "6. Legge applicabile",
        body: [
          "I presenti termini sono regolati dalla legge italiana. Ogni controversia sarà soggetta alla giurisdizione esclusiva del Foro di Bari, Italia.",
        ],
      },
    ],
    contactHeading: "7. Contatti",
    contactEmail: "info@sashatechnology.com",
    contactLines: ["SashaTech S.r.l.s.", "Via Bottalico 11, 70124 Bari (BA), Italia"],
  },
};

export default function TermsPage({ params }: { params: { locale: string } }) {
  const t = COPY[params.locale === "it" ? "it" : "en"];
  return (
    <div className="section-container py-20 pt-32 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">{t.title}</h1>
      <div className="prose prose-invert prose-sm text-muted space-y-6 leading-relaxed">
        <p><strong>{t.updated}</strong></p>

        {t.sections.map((s, i) => (
          <div key={i} className="space-y-3">
            <h2 className="text-lg font-semibold text-white mt-8">{s.h}</h2>
            {s.body.map((p, j) => <p key={j}>{p}</p>)}
          </div>
        ))}

        <h2 className="text-lg font-semibold text-white mt-8">{t.contactHeading}</h2>
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
