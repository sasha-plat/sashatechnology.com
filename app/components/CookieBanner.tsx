"use client";

import { useState, useEffect } from "react";

interface CookieBannerProps {
  locale?: string;
}

const cookieT = {
  it: {
    title: "Rispettiamo la tua privacy",
    text: "Utilizziamo solo cookie essenziali per il funzionamento del sito. Cliccando \"Accetta\" acconsenti al loro utilizzo. Consulta la nostra",
    policy: "Cookie Policy",
    accept: "Accetta",
    decline: "Rifiuta",
  },
  en: {
    title: "We value your privacy",
    text: "We use essential cookies to make our site work. By clicking \"Accept\", you agree to our use of cookies. See our",
    policy: "Cookie Policy",
    accept: "Accept",
    decline: "Decline",
  },
};

export default function CookieBanner({ locale }: CookieBannerProps) {
  const [visible, setVisible] = useState(false);
  const d = locale === "it" ? cookieT.it : cookieT.en;
  const prefix = locale ? `/${locale}` : "";

  useEffect(() => {
    const consent = localStorage.getItem("sashatech-cookie-consent");
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("sashatech-cookie-consent", "accepted");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem("sashatech-cookie-consent", "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4">
      <div className="section-container">
        <div className="bg-navy-light border border-white/10 rounded-2xl p-6 flex flex-col md:flex-row items-start md:items-center gap-4 shadow-2xl">
          <div className="flex-1">
            <p className="text-sm font-medium mb-1">{d.title}</p>
            <p className="text-xs text-muted leading-relaxed">
              {d.text}{" "}
              <a href={`${prefix}/cookies`} className="text-gold hover:underline">{d.policy}</a>.
            </p>
          </div>
          <div className="flex gap-3 shrink-0">
            <button
              onClick={decline}
              className="text-sm text-muted hover:text-white border border-white/10 px-5 py-2 rounded-lg transition-colors"
            >
              {d.decline}
            </button>
            <button
              onClick={accept}
              className="text-sm bg-gold text-navy font-semibold px-5 py-2 rounded-lg hover:bg-gold-light transition-colors"
            >
              {d.accept}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
