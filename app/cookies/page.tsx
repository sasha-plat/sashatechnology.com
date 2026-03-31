import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy | SashaTech",
};

export default function CookiePolicyPage() {
  return (
    <div className="section-container py-20 pt-32 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Cookie Policy</h1>
      <div className="prose prose-invert prose-sm text-muted space-y-6 leading-relaxed">

        <p><strong>Last updated:</strong> March 31, 2026</p>

        <h2 className="text-lg font-semibold text-white mt-8">1. What Are Cookies</h2>
        <p>Cookies are small text files stored on your device when you visit a website. They help websites function properly and can provide information to site owners.</p>

        <h2 className="text-lg font-semibold text-white mt-8">2. Cookies We Use</h2>

        <h3 className="text-md font-semibold text-white mt-4">Essential Cookies</h3>
        <table className="w-full text-xs">
          <thead><tr className="text-left text-muted/70"><th className="pb-2">Name</th><th className="pb-2">Purpose</th><th className="pb-2">Duration</th></tr></thead>
          <tbody>
            <tr><td className="py-1">cookie_consent</td><td>Stores your cookie preference</td><td>1 year</td></tr>
          </tbody>
        </table>
        <p>Essential cookies are necessary for the website to function. They do not require your consent under the ePrivacy Directive.</p>

        <h3 className="text-md font-semibold text-white mt-4">Third-Party Services</h3>
        <p>When you submit a form (newsletter or contact), data is sent to Google Apps Script (Google LLC). Google may set its own cookies according to its privacy policy. No analytics, advertising, or social media cookies are used on this website.</p>

        <h2 className="text-lg font-semibold text-white mt-8">3. Managing Cookies</h2>
        <p>You can control cookies through your browser settings. Disabling essential cookies may affect website functionality. For instructions on managing cookies in your browser, visit <a href="https://www.aboutcookies.org" className="text-gold underline">aboutcookies.org</a>.</p>

        <h2 className="text-lg font-semibold text-white mt-8">4. Changes</h2>
        <p>We may update this Cookie Policy from time to time. Changes will be posted on this page with an updated revision date.</p>

        <h2 className="text-lg font-semibold text-white mt-8">5. Contact</h2>
        <p>For questions about our use of cookies, contact: <a href="mailto:privacy@sashatechnology.com" className="text-gold underline">privacy@sashatechnology.com</a></p>
      </div>
    </div>
  );
}
