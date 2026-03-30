import type { Metadata } from "next";
import HeroSection from "../components/HeroSection";
import PreOrderForm from "../components/PreOrderForm";

export const metadata: Metadata = {
  title: "Pre-Order \u2014 B1 Scout | SashaTech",
  description: "Reserve your B1 Scout with a \u20AC250 refundable deposit. Shipping starts Q3 2027.",
};

export default function PreOrderPage() {
  return (
    <>
      <HeroSection
        badge="Now accepting deposits"
        title="Reserve Your B1 Scout"
        subtitle="\u20AC250 refundable deposit \u00B7 Shipping Q3 2027"
        description="Be among the first to own the world's most advanced biomimetic micro-drone. Select your variant and secure your place in the production queue."
      />

      <div className="section-container pb-20">
        <div className="max-w-4xl mx-auto">
          <PreOrderForm />

          {/* Refund Policy */}
          <div className="mt-16 glass-card">
            <h3 className="text-lg font-semibold mb-4">Refund &amp; Deposit Policy</h3>
            <div className="space-y-4 text-sm text-muted leading-relaxed">
              <p>
                Your &euro;250 deposit is <span className="text-white font-medium">fully refundable</span> at
                any time before your unit ships. No questions asked.
              </p>
              <p>
                Once your unit enters production (approximately 4 weeks before shipping), you will
                receive an email notification with the remaining balance. At that point, you can either
                complete the purchase or cancel for a full refund.
              </p>
              <p>
                Deposits are held in a segregated escrow account and are not used for R&amp;D or
                operational expenses. Your funds are protected.
              </p>
              <div className="bg-navy/50 rounded-lg p-4 border border-gold/10 mt-4">
                <h4 className="text-white font-medium mb-2">Production Timeline</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>B1 Guard</span>
                    <span className="text-gold font-mono">Q3 2027</span>
                  </div>
                  <div className="flex justify-between">
                    <span>B1 Inspect</span>
                    <span className="text-gold font-mono">Q4 2027</span>
                  </div>
                  <div className="flex justify-between">
                    <span>B1 Rescue</span>
                    <span className="text-gold font-mono">Q4 2027</span>
                  </div>
                  <div className="flex justify-between">
                    <span>B1 Agri</span>
                    <span className="text-gold font-mono">Q1 2028</span>
                  </div>
                  <div className="flex justify-between">
                    <span>B1 Cine</span>
                    <span className="text-gold font-mono">Q1 2028</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Legal */}
          <p className="text-xs text-muted/60 text-center mt-8 max-w-lg mx-auto">
            SashaTech S.r.l.s. &middot; Via Example 1, 70121 Bari (BA), Italy &middot;
            VAT IT12345678901 &middot; All prices include VAT where applicable.
            Specifications subject to change. This is a demonstration site &mdash; no
            real payments are processed.
          </p>
        </div>
      </div>
    </>
  );
}
