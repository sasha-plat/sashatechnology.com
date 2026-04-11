import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Security — SashaTech S.r.l.s.",
  description: "SashaTech Vulnerability Disclosure Policy (VDP). Report security vulnerabilities responsibly.",
};

export default function SecurityPage() {
  return (
    <html lang="en">
      <body className="bg-[#0a0e1a] text-white min-h-screen">
        {/* Nav */}
        <nav className="border-b border-white/10 px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold tracking-wider text-amber-500">
            SASHA
          </Link>
          <div className="flex gap-6 text-sm text-gray-400">
            <Link href="/" className="hover:text-white">Home</Link>
            <Link href="/about" className="hover:text-white">About</Link>
            <Link href="/contact" className="hover:text-white">Contact</Link>
          </div>
        </nav>

        <main className="max-w-3xl mx-auto px-6 py-16">
          <h1 className="text-4xl font-bold mb-2">Security</h1>
          <p className="text-amber-500 text-lg mb-8">Vulnerability Disclosure Policy (VDP)</p>
          <p className="text-gray-400 text-sm mb-12">Version 1.0 — Effective April 2026</p>

          {/* English */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6 text-amber-500">English</h2>

            <h3 className="text-xl font-semibold mt-8 mb-3">Introduction</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              SashaTech S.r.l.s. takes the security of its products and services very seriously.
              We believe that working with the security research community improves our ability
              to protect our users. This Vulnerability Disclosure Policy describes how security
              researchers can report vulnerabilities to us and what to expect in return.
            </p>

            <h3 className="text-xl font-semibold mt-8 mb-3">Scope</h3>
            <p className="text-gray-300 mb-3">This policy applies to:</p>
            <ul className="list-disc list-inside text-gray-300 space-y-1 mb-4">
              <li>SashaPlatform backend (APIs, orchestrator, cloud services)</li>
              <li>SashaGlasses firmware and companion app</li>
              <li>SashaDrone firmware (B1, B2, M2) and control tools</li>
              <li>SashaStudio developer platform (SDKs, CLI, IDE extension)</li>
              <li>The sashatechnology.com domain and public-facing subdomains</li>
            </ul>
            <p className="text-gray-400 mb-4">
              <strong className="text-gray-300">Out of scope:</strong> third-party services, social engineering,
              physical attacks, DoS attacks, software we do not own.
            </p>

            <h3 className="text-xl font-semibold mt-8 mb-3">Safe Harbor</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              SashaTech will not pursue legal action against researchers who act in good faith,
              do not access or modify data beyond what is necessary, respect user privacy,
              do not publicly disclose before we have had reasonable time to remediate,
              and report to{" "}
              <a href="mailto:security@sashatechnology.com" className="text-amber-500 hover:underline">
                security@sashatechnology.com
              </a>.
            </p>

            <h3 className="text-xl font-semibold mt-8 mb-3">Reporting</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Send vulnerability reports to{" "}
              <a href="mailto:security@sashatechnology.com" className="text-amber-500 hover:underline font-semibold">
                security@sashatechnology.com
              </a>.
            </p>
            <p className="text-gray-300 mb-3">Please include:</p>
            <ul className="list-disc list-inside text-gray-300 space-y-1 mb-4">
              <li>A clear description of the vulnerability</li>
              <li>Step-by-step instructions to reproduce the issue</li>
              <li>Affected product, version, and URL/endpoint</li>
              <li>Potential impact</li>
              <li>Any proof-of-concept code or screenshots</li>
            </ul>

            <h3 className="text-xl font-semibold mt-8 mb-3">What to Expect</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-1 mb-4">
              <li>Acknowledgment within 5 business days</li>
              <li>Status updates every 14 days until resolution</li>
              <li>Credit in our security advisory (with your permission)</li>
              <li>No legal action against good-faith researchers</li>
            </ul>

            <h3 className="text-xl font-semibold mt-8 mb-3">Disclosure Timeline</h3>
            <div className="bg-white/5 rounded-lg p-4 mb-4">
              <div className="grid grid-cols-2 gap-2 text-sm text-gray-300">
                <span className="text-amber-500 font-mono">Day 0</span><span>Report received</span>
                <span className="text-amber-500 font-mono">Day 5</span><span>Acknowledgment sent</span>
                <span className="text-amber-500 font-mono">Day 14</span><span>Initial assessment shared</span>
                <span className="text-amber-500 font-mono">Day 90</span><span>Target remediation (high/critical)</span>
                <span className="text-amber-500 font-mono">Day 180</span><span>Target public disclosure</span>
              </div>
            </div>

            <h3 className="text-xl font-semibold mt-8 mb-3">Bug Bounty</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              As of April 2026, SashaTech does not operate a paid bug bounty program. We will
              publicly acknowledge researchers in our advisories and Hall of Fame. A formal
              paid bug bounty program is planned for 2027 Q3.
            </p>
          </section>

          {/* Divider */}
          <hr className="border-white/10 mb-16" />

          {/* Italian */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6 text-amber-500">Italiano</h2>

            <h3 className="text-xl font-semibold mt-8 mb-3">Introduzione</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              SashaTech S.r.l.s. prende molto sul serio la sicurezza dei propri prodotti e servizi.
              Crediamo che lavorare con la community di ricerca sulla sicurezza migliori la nostra
              capacità di proteggere i nostri utenti. Questa Vulnerability Disclosure Policy descrive
              come i ricercatori di sicurezza possono segnalarci vulnerabilità e cosa aspettarsi.
            </p>

            <h3 className="text-xl font-semibold mt-8 mb-3">Ambito</h3>
            <p className="text-gray-300 mb-3">Questa policy si applica a:</p>
            <ul className="list-disc list-inside text-gray-300 space-y-1 mb-4">
              <li>Backend SashaPlatform (API, orchestrator, servizi cloud)</li>
              <li>Firmware SashaGlasses e app companion</li>
              <li>Firmware SashaDrone (B1, B2, M2) e strumenti di controllo</li>
              <li>Piattaforma developer SashaStudio (SDK, CLI, estensione IDE)</li>
              <li>Dominio sashatechnology.com e sottodomini pubblici</li>
            </ul>
            <p className="text-gray-400 mb-4">
              <strong className="text-gray-300">Fuori ambito:</strong> servizi di terze parti, social engineering,
              attacchi fisici, DoS, software non di nostra proprietà.
            </p>

            <h3 className="text-xl font-semibold mt-8 mb-3">Safe Harbor</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              SashaTech non intraprenderà azioni legali contro ricercatori che agiscono in buona fede,
              non accedono o modificano dati oltre il necessario, rispettano la privacy degli utenti,
              e segnalano a{" "}
              <a href="mailto:security@sashatechnology.com" className="text-amber-500 hover:underline">
                security@sashatechnology.com
              </a>.
            </p>

            <h3 className="text-xl font-semibold mt-8 mb-3">Segnalazione</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Invia i report di vulnerabilità a{" "}
              <a href="mailto:security@sashatechnology.com" className="text-amber-500 hover:underline font-semibold">
                security@sashatechnology.com
              </a>.
            </p>

            <h3 className="text-xl font-semibold mt-8 mb-3">Cosa aspettarsi</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-1 mb-4">
              <li>Conferma entro 5 giorni lavorativi</li>
              <li>Aggiornamenti ogni 14 giorni fino alla risoluzione</li>
              <li>Credit nei nostri advisory (con il tuo permesso)</li>
              <li>Nessuna azione legale contro ricercatori in buona fede</li>
            </ul>

            <h3 className="text-xl font-semibold mt-8 mb-3">Timeline</h3>
            <div className="bg-white/5 rounded-lg p-4 mb-4">
              <div className="grid grid-cols-2 gap-2 text-sm text-gray-300">
                <span className="text-amber-500 font-mono">Giorno 0</span><span>Report ricevuto</span>
                <span className="text-amber-500 font-mono">Giorno 5</span><span>Conferma inviata</span>
                <span className="text-amber-500 font-mono">Giorno 14</span><span>Valutazione iniziale</span>
                <span className="text-amber-500 font-mono">Giorno 90</span><span>Target remediation</span>
                <span className="text-amber-500 font-mono">Giorno 180</span><span>Disclosure pubblica</span>
              </div>
            </div>

            <h3 className="text-xl font-semibold mt-8 mb-3">Bug Bounty</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Ad aprile 2026, SashaTech non ha un programma di bug bounty pagato.
              Riconosceremo pubblicamente i ricercatori nei nostri advisory e nella Hall of Fame.
              Un programma formale pagato è pianificato per Q3 2027.
            </p>
          </section>

          {/* Footer */}
          <div className="border-t border-white/10 pt-8 text-sm text-gray-500">
            <p>Last updated: 10 April 2026 — Next review: 10 July 2026</p>
            <p className="mt-2">
              Contact:{" "}
              <a href="mailto:security@sashatechnology.com" className="text-amber-500 hover:underline">
                security@sashatechnology.com
              </a>
            </p>
          </div>
        </main>
      </body>
    </html>
  );
}
