// Defense pages disabled until NDA process is established

"use client";

import { Suspense } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const ACCESS_KEY = "defense2026";

export default function DardoDefensePage() {
  return (
    <Suspense fallback={null}>
      <DardoDefensePageInner />
    </Suspense>
  );
}

function DardoDefensePageInner() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const [authorized, setAuthorized] = useState(false);

  const locale = pathname.split("/")[1] || "it";
  const prefix = `/${locale}`;

  useEffect(() => {
    if (searchParams.get("access") !== ACCESS_KEY) {
      router.replace(`${prefix}/`);
    } else {
      setAuthorized(true);
    }
  }, [searchParams, router, prefix]);

  if (!authorized) return null;

  const scSpecs = [
    { label: "Designation", value: "B1-SC (Shaped Charge)" },
    { label: "Explosive", value: "CL-20 (\u03B5-HNIW), 5.5g" },
    { label: "Liner", value: "Cu, 1.5g" },
    { label: "Penetration", value: "~31mm RHA" },
    { label: "Slug Velocity", value: "2,400 m/s" },
    { label: "AUW", value: "40g" },
    { label: "Endurance (SiCore)", value: "19.6 min" },
    { label: "Endurance (LeydenJar)", value: "17 min" },
    { label: "Range", value: "2 km round-trip" },
    { label: "Guidance", value: "HYBRID (6 modes)" },
    { label: "Safety", value: "MIL-STD-1316 4-level arming" },
    { label: "Fuzing", value: "IMPACT + COMMAND" },
  ];

  const fragSpecs = [
    { label: "Designation", value: "B1-FRAG (DRF v3.1)" },
    { label: "Explosive", value: "CL-20, 2.0g" },
    { label: "Reactive Fill", value: "Al/PTFE (73.5%/26.5%), 1.5g, 8.7 kJ/g" },
    { label: "Sleeve", value: "AISI 304L scored, 3.5g (1.2mm wall)" },
    { label: "Fragment Count", value: "~35 steel 2x2x0.6mm" },
    { label: "Fragment Velocity", value: "900 m/s" },
    { label: "Fragment Cone", value: "60\u00B0" },
    { label: "Thermal Effect", value: "2,500\u00B0C flash, 50ms" },
    { label: "Blast Enhancement", value: "+30%" },
    { label: "Lethal Radius", value: "4.0m (cone)" },
    { label: "Collateral", value: "< 3m lateral" },
    { label: "UXO Self-Destruct", value: "60s" },
    { label: "IHL Compliance", value: "Full (no tungsten)" },
  ];

  return (
    <>
      <section className="relative min-h-[50vh] flex items-center justify-center pt-16">
        <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy to-navy-light" />
        <div className="relative section-container text-center py-20">
          <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/20 rounded-full px-4 py-1.5 mb-6">
            <span className="text-red-400 text-xs font-mono">PRECISION MUNITION</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">B1-SC / B1-FRAG Dardo</h1>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Loitering munition variants with CL-20 warheads. Shaped charge for armor penetration.
            Dual-effect reactive fragmentation for personnel and soft targets. Recoverable airframe.
          </p>
        </div>
      </section>

      <section className="section-container py-16">
        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* SC Variant */}
          <div>
            <h2 className="text-xl font-bold mb-4 text-gold">B1-SC Shaped Charge</h2>
            <div className="glass-card">
              <div className="divide-y divide-white/5">
                {scSpecs.map((s) => (
                  <div key={s.label} className="flex justify-between items-center py-2.5">
                    <span className="text-muted text-sm">{s.label}</span>
                    <span className="font-mono text-gold text-xs text-right max-w-[55%]">{s.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* FRAG Variant */}
          <div>
            <h2 className="text-xl font-bold mb-4 text-gold">B1-FRAG DRF v3.1</h2>
            <div className="glass-card">
              <div className="divide-y divide-white/5">
                {fragSpecs.map((s) => (
                  <div key={s.label} className="flex justify-between items-center py-2.5">
                    <span className="text-muted text-sm">{s.label}</span>
                    <span className="font-mono text-gold text-xs text-right max-w-[55%]">{s.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto mt-12">
          <div className="glass-card">
            <h3 className="font-semibold mb-4">Common Features</h3>
            <ul className="space-y-3 text-sm text-muted">
              <li>CL-20 explosive: VOD 9,500 m/s, 6,230 kJ/kg, TNT equiv 1.98 (Eurenco, France)</li>
              <li>Recoverable airframe: M1 carrier descends to 25m for ventral bay pickup</li>
              <li>MIL-STD-1316 4-level arming with IMPACT + COMMAND fuzing</li>
              <li>UXO self-destruct at 60 seconds post-impact</li>
              <li>Full IHL compliance (no tungsten, controlled fragmentation)</li>
              <li>HYBRID guidance with 6 terminal modes</li>
            </ul>
          </div>

          <div className="mt-8 bg-navy-light/80 border border-yellow-500/20 rounded-xl p-6">
            <p className="text-yellow-400 text-sm font-medium mb-2">Classification Notice</p>
            <p className="text-muted text-sm">
              Detailed warhead performance data, guidance algorithms, and integration specifications
              are available under NDA only. Contact defense@sashatech.ai.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
