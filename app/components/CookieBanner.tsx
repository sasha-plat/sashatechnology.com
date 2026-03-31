"use client";

import { useState, useEffect } from "react";

interface CookieBannerProps {
  locale?: string;
}

export default function CookieBanner({ locale: _locale }: CookieBannerProps) {
  const [visible, setVisible] = useState(false);

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
            <p className="text-sm font-medium mb-1">We value your privacy</p>
            <p className="text-xs text-muted leading-relaxed">
              We use essential cookies to make our site work. With your consent, we may also use
              non-essential cookies to improve user experience. By clicking &quot;Accept&quot;, you
              agree to our use of cookies. See our{" "}
              <a href="/cookies" className="text-gold hover:underline">Cookie Policy</a> for details.
            </p>
          </div>
          <div className="flex gap-3 shrink-0">
            <button
              onClick={decline}
              className="text-sm text-muted hover:text-white border border-white/10 px-5 py-2 rounded-lg transition-colors"
            >
              Decline
            </button>
            <button
              onClick={accept}
              className="text-sm bg-gold text-navy font-semibold px-5 py-2 rounded-lg hover:bg-gold-light transition-colors"
            >
              Accept
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
