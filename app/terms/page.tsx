import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | SashaTech",
};

export default function TermsPage() {
  return (
    <div className="section-container py-20 pt-32 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Terms of Service</h1>
      <div className="prose prose-invert prose-sm text-muted space-y-6 leading-relaxed">

        <p><strong>Last updated:</strong> March 31, 2026</p>

        <h2 className="text-lg font-semibold text-white mt-8">1. General</h2>
        <p>This website is operated by SashaTech S.r.l.s., Via Bottalico 11, 70124 Bari (BA), Italy, VAT pending registration. By accessing this website, you agree to these terms.</p>

        <h2 className="text-lg font-semibold text-white mt-8">2. Informational Purpose</h2>
        <p>This website is provided for informational purposes only. All product descriptions, specifications, images, and performance data are preliminary and subject to change without notice. Nothing on this website constitutes a binding offer to sell or a contract.</p>

        <h2 className="text-lg font-semibold text-white mt-8">3. No Sales or Pre-Orders</h2>
        <p>This website does not process payments, accept deposits, or facilitate purchases of any kind. No commercial transactions take place through this website. Product availability and pricing will be communicated separately when products become available.</p>

        <h2 className="text-lg font-semibold text-white mt-8">4. Intellectual Property</h2>
        <p>All content on this website, including text, images, logos, and design, is the property of SashaTech S.r.l.s. and is protected by applicable intellectual property laws. Reproduction without written permission is prohibited.</p>

        <h2 className="text-lg font-semibold text-white mt-8">5. Limitation of Liability</h2>
        <p>SashaTech S.r.l.s. makes no warranties regarding the accuracy, completeness, or reliability of information on this website. We are not liable for any damages arising from the use of this website or reliance on its content.</p>

        <h2 className="text-lg font-semibold text-white mt-8">6. Governing Law</h2>
        <p>These terms are governed by Italian law. Any disputes shall be subject to the exclusive jurisdiction of the courts of Bari, Italy.</p>

        <h2 className="text-lg font-semibold text-white mt-8">7. Contact</h2>
        <p>SashaTech S.r.l.s.<br/>Via Bottalico 11, 70124 Bari (BA), Italy<br/>Email: <a href="mailto:info@sashatechnology.com" className="text-gold underline">info@sashatechnology.com</a></p>
      </div>
    </div>
  );
}
