import type { Metadata } from "next";
import HeroSection from "../components/HeroSection";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About \u2014 SashaTech S.r.l.s.",
  description: "SashaTech is a deep-tech company in Bari, Italy, building biomimetic micro-drones and cognitive platforms.",
};

const milestones = [
  { year: "2025", event: "Company idea born" },
  { year: "Q1 2026", event: "SashaTech S.r.l.s. founded in Bari, Italy" },
  { year: "Q1 2026", event: "SW/HW development at 80%, first simulations" },
  { year: "Q2 2026", event: "First prototype" },
];

const values = [
  {
    title: "European Sovereignty",
    description: "90%+ EU components. ITAR-free. We believe critical technology should be built where it's used.",
  },
  {
    title: "Biomimetic Design",
    description: "Nature solved flight 150 million years ago. We're applying those solutions with modern materials.",
  },
  {
    title: "Accessible Intelligence",
    description: "Military-grade capabilities at civilian prices. Advanced technology shouldn't be locked behind defense budgets.",
  },
  {
    title: "Privacy by Design",
    description: "GDPR-compliant from day one. On-device processing. Your data stays on your device.",
  },
];

const team = [
  { name: "Founder & CEO", role: "Engineering, Architecture, Vision", placeholder: "F" },
  { name: "", role: "Firmware, Flight Control, PCB Design", placeholder: "C" },
  { name: "", role: "Thermal Imaging, Computer Vision", placeholder: "O" },
  { name: "", role: "DFM, Supply Chain, EU Sourcing", placeholder: "M" },
];

export default function AboutPage() {
  return (
    <>
      <HeroSection
        title="Making Aerial Intelligence Accessible"
        description="SashaTech is a deep-tech company in Bari, Italy, building the next generation of biomimetic micro-drones and cognitive platforms."
      />

      {/* Mission */}
      <section className="section-container py-16">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gold text-sm font-medium tracking-wider uppercase mb-4">Our Mission</p>
          <h2 className="text-2xl md:text-4xl font-bold mb-6 leading-tight">
            We believe that aerial intelligence should be as accessible as a smartphone
          </h2>
          <p className="text-muted leading-relaxed">
            Today, drones capable of thermal imaging and autonomous flight cost tens of thousands
            of euros and require trained operators. The B1 Scout changes that \u2014 a palm-sized,
            silent drone with military-grade sensors, starting at &euro;1,500, that anyone can deploy
            in seconds.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="section-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {values.map((v) => (
            <div key={v.title} className="glass-card">
              <h3 className="text-lg font-semibold mb-2 text-gold">{v.title}</h3>
              <p className="text-muted text-sm leading-relaxed">{v.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="section-container py-16">
        <div className="text-center mb-12">
          <p className="text-gold text-sm font-medium tracking-wider uppercase mb-4">The Team</p>
          <h2 className="text-2xl md:text-3xl font-bold">
            Engineers building for engineers
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {team.map((member) => (
            <div key={member.name} className="glass-card text-center">
              <div className="w-20 h-20 rounded-full bg-navy-lighter mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl text-gold/40 font-bold">{member.placeholder}</span>
              </div>
              <h4 className="font-semibold text-sm mb-1">{member.name}</h4>
              <p className="text-muted text-xs">{member.role}</p>
            </div>
          ))}
        </div>
        <p className="text-center text-muted text-sm mt-8">
          
        </p>
      </section>

      {/* Timeline */}
      <section className="section-container py-16">
        <div className="max-w-2xl mx-auto">
          <p className="text-gold text-sm font-medium tracking-wider uppercase mb-8 text-center">
            Our Journey
          </p>
          <div className="space-y-0">
            {milestones.map((m, i) => (
              <div key={m.year} className="flex gap-6 items-start">
                <div className="flex flex-col items-center">
                  <div className={`w-3 h-3 rounded-full ${
                    i <= 2 ? "bg-gold" : "bg-white/20"
                  }`} />
                  {i < milestones.length - 1 && (
                    <div className="w-px h-16 bg-white/10" />
                  )}
                </div>
                <div className="pb-8">
                  <p className="font-mono text-gold text-sm mb-1">{m.year}</p>
                  <p className="text-muted text-sm">{m.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="bg-navy-light border-t border-white/5">
        <div className="section-container py-20 text-center">
          <p className="text-5xl mb-6">{"\u{1F1EE}\u{1F1F9}"}</p>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Designed in Bari, Built in the EU
          </h2>
          <p className="text-muted max-w-lg mx-auto leading-relaxed">
            SashaTech S.r.l.s. is headquartered in Bari, Puglia, in southern Italy.
            Our supply chain spans European and allied countries
            and ITAR-free exports.
          </p>
          <div className="mt-8">
            <p className="text-sm text-muted">
              SashaTech S.r.l.s. &middot; Bari (BA), Italy
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
