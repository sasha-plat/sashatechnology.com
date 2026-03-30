import Link from "next/link";
import NewsletterSignup from "./NewsletterSignup";

interface FooterProps {
  locale?: string;
}

export default function Footer({ locale }: FooterProps) {
  const prefix = locale ? `/${locale}` : "";

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
            <p className="text-muted text-sm leading-relaxed">
              Biomimetic micro-drones designed and manufactured in the EU.
              Making aerial intelligence accessible.
            </p>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Products</h4>
            <ul className="space-y-2">
              {["guard", "inspect", "rescue", "agri", "cine"].map((v) => (
                <li key={v}>
                  <Link href={`${prefix}/products/${v}`} className="text-sm text-muted hover:text-gold transition-colors">
                    B1 {v.charAt(0).toUpperCase() + v.slice(1)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link href={`${prefix}/about`} className="text-sm text-muted hover:text-gold transition-colors">About</Link></li>
              <li><Link href={`${prefix}/technology`} className="text-sm text-muted hover:text-gold transition-colors">Technology</Link></li>
              <li><Link href={`${prefix}/contact`} className="text-sm text-muted hover:text-gold transition-colors">Contact</Link></li>
              <li><Link href={`${prefix}/pre-order`} className="text-sm text-muted hover:text-gold transition-colors">Pre-Order</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Stay Updated</h4>
            <p className="text-sm text-muted mb-4">Get launch updates and early access.</p>
            <NewsletterSignup compact />
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted">
            &copy; 2026 SashaTech S.r.l.s. All rights reserved. Bari, Italy.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-xs text-muted hover:text-gold transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-xs text-muted hover:text-gold transition-colors">Terms of Service</Link>
            <Link href="#" className="text-xs text-muted hover:text-gold transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
