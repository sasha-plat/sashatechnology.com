import Link from "next/link";
import NewsletterSignup from "./NewsletterSignup";

interface FooterProps {
  locale?: string;
}

const t = {
  it: {
    brand: "Strumenti intelligenti per professionisti. Droni, occhiali AR e piattaforma AI progettati in Europa.",
    products: "Prodotti",
    company: "Azienda",
    about: "Chi Siamo",
    technology: "Come Funziona",
    contact: "Contatti",
    stayUpdated: "Resta Aggiornato",
    stayUpdatedDesc: "Ricevi novità su prodotti e disponibilità.",
    privacy: "Privacy Policy",
    terms: "Termini di Servizio",
    cookies: "Cookie Policy",
  },
  en: {
    brand: "Smart tools for professionals. Drones, AR glasses, and AI platform designed in Europe.",
    products: "Products",
    company: "Company",
    about: "About",
    technology: "Technology",
    contact: "Contact",
    stayUpdated: "Stay Updated",
    stayUpdatedDesc: "Get product news and availability updates.",
    privacy: "Privacy Policy",
    terms: "Terms of Service",
    cookies: "Cookie Policy",
  },
};

export default function Footer({ locale }: FooterProps) {
  const prefix = locale ? `/${locale}` : "";
  const d = locale === "it" ? t.it : t.en;

  return (
    <footer className="bg-navy-light border-t border-white/5">
      <div className="section-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href={`${prefix}/`} className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gold flex items-center justify-center">
                <span className="text-navy font-bold text-sm">S</span>
              </div>
              <span className="font-bold text-lg tracking-tight">
                Sasha<span className="text-gold">Tech</span>
              </span>
            </Link>
            <p className="text-muted text-sm leading-relaxed">{d.brand}</p>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">{d.products}</h4>
            <ul className="space-y-2">
              {[
                { slug: "guard", label: "B1 Guard" },
                { slug: "inspect", label: "B1 Inspect" },
                { slug: "rescue", label: "B1 Rescue" },
                { slug: "m2", label: "M2 Long-Range" },
                { slug: "glasses", label: "SashaGlasses" },
                { slug: "platform", label: "SashaPlatform" },
              ].map((v) => (
                <li key={v.slug}>
                  <Link href={`${prefix}/products/${v.slug}`} className="text-sm text-muted hover:text-gold transition-colors">
                    {v.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">{d.company}</h4>
            <ul className="space-y-2">
              <li><Link href={`${prefix}/about`} className="text-sm text-muted hover:text-gold transition-colors">{d.about}</Link></li>
              <li><Link href={`${prefix}/technology`} className="text-sm text-muted hover:text-gold transition-colors">{d.technology}</Link></li>
              <li><Link href={`${prefix}/contact`} className="text-sm text-muted hover:text-gold transition-colors">{d.contact}</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">{d.stayUpdated}</h4>
            <p className="text-sm text-muted mb-4">{d.stayUpdatedDesc}</p>
            <NewsletterSignup compact />
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-xs text-muted space-y-1">
            <p>&copy; 2026 SashaTech S.r.l.s. &mdash; Via Bottalico 11, 70124 Bari (BA), Italy</p>
          </div>
          <div className="flex gap-6">
            <Link href={`${prefix}/privacy`} className="text-xs text-muted hover:text-gold transition-colors">{d.privacy}</Link>
            <Link href={`${prefix}/terms`} className="text-xs text-muted hover:text-gold transition-colors">{d.terms}</Link>
            <Link href={`${prefix}/cookies`} className="text-xs text-muted hover:text-gold transition-colors">{d.cookies}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
