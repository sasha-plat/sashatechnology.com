import type { Metadata } from "next";
import HeroSection from "../components/HeroSection";

export const metadata: Metadata = {
  title: "Technology \u2014 SashaTech B1 Scout",
  description: "Six breakthrough technologies powering the world's most advanced biomimetic micro-drone.",
};

const technologies = [
  {
    id: "pzt",
    title: "PZT Bimorph Propulsion",
    subtitle: "Silent wings that mimic nature",
    description:
      "The B1 Scout uses piezoelectric (PZT) bimorph actuators to drive biomimetic flapping wings at 60Hz. Unlike conventional rotors, these wings produce thrust through asymmetric stroke kinematics \u2014 a 90\u00B0 downstroke and 40\u00B0 upstroke that generates net lift with near-zero acoustic signature. At 10 meters, the B1 produces less than 25 dB(A), quieter than a whisper.",
    specs: [
      { label: "Actuator", value: "PI Ceramic PIC255 (DE)" },
      { label: "Frequency", value: "60 Hz nominal" },
      { label: "Stroke", value: "90\u00B0 down / 40\u00B0 up" },
      { label: "Thrust", value: "0.38 N per wing" },
      { label: "Noise", value: "< 25 dB(A) @ 10m" },
    ],
  },
  {
    id: "morphing",
    title: "Wing Morphing",
    subtitle: "Nitinol SMA adaptive geometry",
    description:
      "Shape Memory Alloy (Nitinol) actuators embedded in the wing structure allow the B1 Scout to morph its wingspan from 90mm to 60mm in flight. This enables high-speed dash mode with reduced drag, and expanded wings for efficient hover and slow-speed surveillance. The transition takes less than 200ms and consumes minimal power.",
    specs: [
      { label: "Material", value: "Nitinol SMA wire" },
      { label: "Range", value: "90mm \u2192 60mm span" },
      { label: "Transition Time", value: "< 200ms" },
      { label: "Added Weight", value: "+0.2g" },
      { label: "Efficiency Gain", value: "\u00D71.35 in glide mode" },
    ],
  },
  {
    id: "edf",
    title: "EDF 20mm Hybrid Thrust",
    subtitle: "Burst acceleration when you need it",
    description:
      "A compact 20mm Electric Ducted Fan supplements the primary PZT propulsion for high-speed maneuvers, vertical takeoff, and wind resistance. The EDF produces 0.5N of thrust at just 4.5g, enabling dash speeds up to 90 km/h. It activates automatically during takeoff, landing, and when wind compensation is needed.",
    specs: [
      { label: "Diameter", value: "20mm" },
      { label: "Thrust", value: "0.5N" },
      { label: "Weight", value: "4.5g (incl. motor)" },
      { label: "Activation", value: "Auto (takeoff/wind/dash)" },
      { label: "Dash Speed", value: "90 km/h" },
    ],
  },
  {
    id: "thermal",
    title: "Uncooled Thermal Camera",
    subtitle: "Military-grade thermal in a micro package",
    description:
      "The B1 Scout carries a 640\u00D7480 uncooled microbolometer with 12\u00B5m pixel pitch and less than 35mK NETD (Noise Equivalent Temperature Difference). European-made, it provides the same thermal sensitivity found in systems 100\u00D7 heavier. A germanium window ensures optimal IR transmission across the 8\u201314\u00B5m LWIR band.",
    specs: [
      { label: "Resolution", value: "640 \u00D7 480 pixels" },
      { label: "Pixel Pitch", value: "12\u00B5m" },
      { label: "NETD", value: "< 35mK" },
      { label: "Spectral Band", value: "8\u201314\u00B5m LWIR" },
      { label: "Origin", value: "European manufactured" },
      { label: "Window", value: "Germanium (Ge)" },
    ],
  },
  {
    id: "battery",
    title: "Advanced Battery Technology",
    subtitle: "Ultra-light, high-density energy",
    description:
      "The B1 Scout uses next-generation battery technology delivering nearly double the energy density of conventional drone batteries. This enables flight times that far exceed what a 70g drone would normally achieve. Dual-source European supply chain ensures availability and independence.",
    specs: [
      { label: "Energy Density", value: "Nearly 2\u00D7 conventional Li-Po" },
      { label: "Supply Chain", value: "EU-first, dual-source" },
      { label: "Management", value: "Smart auto-detect + profiling" },
      { label: "Charging", value: "Magnetic pogo dock" },
    ],
  },
  {
    id: "pcb",
    title: "4-Layer PCB Miniaturization",
    subtitle: "European manufacturing, maximum density",
    description:
      "All electronics are integrated onto a single 4-layer PCB manufactured in Europe. The board hosts a 480MHz flight controller, multi-protocol wireless SoC (BLE 5.3 + WiFi 6), hardware security element (CC EAL5+), power management, and sensor interfaces \u2014 all in a footprint smaller than a postage stamp. EU component content exceeds 90% by cost.",
    specs: [
      { label: "Layers", value: "4-layer FR4" },
      { label: "Flight Controller", value: "480MHz ARM Cortex-M7" },
      { label: "Connectivity", value: "BLE 5.3 + WiFi 6 + LoRa" },
      { label: "Security", value: "Hardware secure element (CC EAL5+)" },
      { label: "Manufacturing", value: "European PCB fabrication" },
      { label: "EU Content", value: "> 90% by cost" },
    ],
  },
];

export default function TechnologyPage() {
  return (
    <>
      <HeroSection
        title="Technology"
        subtitle="Six breakthroughs in 36 grams"
        description="Every component of the B1 Scout represents a departure from conventional drone design. No rotors. No noise. No compromise."
      />

      <div className="section-container pb-20">
        <div className="space-y-24">
          {technologies.map((tech, index) => (
            <section key={tech.id} id={tech.id} className="scroll-mt-20">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}>
                {/* Content */}
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <p className="text-gold text-sm font-medium tracking-wider uppercase mb-2">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h2 className="text-2xl md:text-3xl font-bold mb-2">{tech.title}</h2>
                  <p className="text-gold/80 text-sm mb-4">{tech.subtitle}</p>
                  <p className="text-muted leading-relaxed mb-6">{tech.description}</p>

                  {/* Specs mini-table */}
                  <div className="bg-navy-light/50 rounded-xl p-4 border border-white/5">
                    <div className="divide-y divide-white/5">
                      {tech.specs.map((s) => (
                        <div key={s.label} className="flex justify-between py-2">
                          <span className="text-muted text-sm">{s.label}</span>
                          <span className="font-mono text-gold text-sm">{s.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Image placeholder */}
                <div className={`aspect-square bg-navy-light rounded-2xl border border-white/5 relative overflow-hidden ${
                  index % 2 === 1 ? "lg:order-1" : ""
                }`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <p className="text-6xl mb-4 opacity-20">
                        {["~", "\u2248", "\u25B6", "\u{1F321}", "\u26A1", "\u{1F4BB}"][index]}
                      </p>
                      <p className="text-muted/40 text-xs uppercase tracking-wider">
                        {tech.title} Diagram
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>

      {/* EU Manufacturing */}
      <section className="bg-navy-light border-t border-white/5">
        <div className="section-container py-20 text-center">
          <p className="text-gold text-sm font-medium tracking-wider uppercase mb-4">
            Designed &amp; Manufactured in the European Union
          </p>
          <h2 className="text-2xl md:text-4xl font-bold mb-6">
            90%+ EU Component Content
          </h2>
          <p className="text-muted max-w-2xl mx-auto leading-relaxed">
            From PZT ceramics in Germany to thermal sensors in France, PCBs in Belgium,
            and final assembly in Italy \u2014 the B1 Scout is a truly European product.
            ITAR-free. Export-ready. Sovereign supply chain.
          </p>
          <div className="flex flex-wrap justify-center gap-8 mt-12">
            {[
              { country: "Germany", flag: "\u{1F1E9}\u{1F1EA}", components: "PZT, PMIC, Battery" },
              { country: "France", flag: "\u{1F1EB}\u{1F1F7}", components: "Thermal, Secure Element" },
              { country: "Belgium", flag: "\u{1F1E7}\u{1F1EA}", components: "PCB Manufacturing" },
              { country: "Norway", flag: "\u{1F1F3}\u{1F1F4}", components: "BLE + WiFi SoC" },
              { country: "Netherlands", flag: "\u{1F1F3}\u{1F1F1}", components: "Battery Anodes" },
              { country: "Italy", flag: "\u{1F1EE}\u{1F1F9}", components: "Design & Assembly" },
            ].map((item) => (
              <div key={item.country} className="text-center">
                <p className="text-3xl mb-2">{item.flag}</p>
                <p className="text-sm font-medium">{item.country}</p>
                <p className="text-xs text-muted">{item.components}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
