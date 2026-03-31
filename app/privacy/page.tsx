import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | SashaTech",
};

export default function PrivacyPage() {
  return (
    <div className="section-container py-20 pt-32 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
      <div className="prose prose-invert prose-sm text-muted space-y-6 leading-relaxed">

        <p><strong>Last updated:</strong> March 31, 2026</p>

        <p>SashaTech S.r.l.s. (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;), with registered office at Via Bottalico 11, 70124 Bari (BA), Italy, VAT IT08590320728, is the data controller for personal data collected through this website (www.sashatechnology.com).</p>

        <h2 className="text-lg font-semibold text-white mt-8">1. Data We Collect</h2>
        <p>We collect personal data only when you voluntarily provide it:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Newsletter subscription:</strong> email address</li>
          <li><strong>Contact form:</strong> name, email address, message content</li>
        </ul>
        <p>We do not collect data automatically through tracking cookies, analytics, or similar technologies beyond essential session cookies.</p>

        <h2 className="text-lg font-semibold text-white mt-8">2. Purpose and Legal Basis</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Newsletter:</strong> To send product updates and availability information. Legal basis: your consent (GDPR Art. 6(1)(a)).</li>
          <li><strong>Contact form:</strong> To respond to your inquiry. Legal basis: your consent (GDPR Art. 6(1)(a)) and legitimate interest in responding to requests (GDPR Art. 6(1)(f)).</li>
        </ul>

        <h2 className="text-lg font-semibold text-white mt-8">3. Data Processors</h2>
        <p>Your data is processed through Google Apps Script (Google LLC), which acts as a data processor. Data is stored in Google Sheets within our Google Workspace account. Google&apos;s privacy terms apply: <a href="https://policies.google.com/privacy" className="text-gold underline">https://policies.google.com/privacy</a>.</p>

        <h2 className="text-lg font-semibold text-white mt-8">4. Data Retention</h2>
        <p>Newsletter subscriptions: retained until you unsubscribe. Contact form submissions: retained for 24 months, then deleted. You may request deletion at any time.</p>

        <h2 className="text-lg font-semibold text-white mt-8">5. Your Rights (GDPR Art. 15-22)</h2>
        <p>You have the right to:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Access your personal data</li>
          <li>Rectify inaccurate data</li>
          <li>Request erasure (&quot;right to be forgotten&quot;)</li>
          <li>Restrict processing</li>
          <li>Data portability</li>
          <li>Object to processing</li>
          <li>Withdraw consent at any time</li>
        </ul>
        <p>To exercise these rights, contact us at: <a href="mailto:privacy@sashatechnology.com" className="text-gold underline">privacy@sashatechnology.com</a></p>

        <h2 className="text-lg font-semibold text-white mt-8">6. Supervisory Authority</h2>
        <p>You have the right to lodge a complaint with the Italian Data Protection Authority (Garante per la protezione dei dati personali): <a href="https://www.garanteprivacy.it" className="text-gold underline">www.garanteprivacy.it</a></p>

        <h2 className="text-lg font-semibold text-white mt-8">7. Contact</h2>
        <p>SashaTech S.r.l.s.<br/>Via Bottalico 11, 70124 Bari (BA), Italy<br/>Email: <a href="mailto:privacy@sashatechnology.com" className="text-gold underline">privacy@sashatechnology.com</a></p>
      </div>
    </div>
  );
}
