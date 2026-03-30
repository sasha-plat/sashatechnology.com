// Defense pages disabled until NDA process is established

"use client";

import { Suspense } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const ACCESS_KEY = "defense2026";

export default function ScoutDefensePage() {
  return (
    <Suspense fallback={null}>
      <ScoutDefensePageInner />
    </Suspense>
  );
}

function ScoutDefensePageInner() {
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

  const specs = [
    { label: "Designation", value: "B1 Scout ISR" },
    { label: "AUW", value: "36.1g (with stealth coatings)" },
    { label: "Stealth Score", value: "9.0/10 (COMSOL validated)" },
    { label: "CIM Radio Profiles", value: "8 (FULL/DATA/MESH/BEACON/STEALTH/EMCON/SILENT/BURST-STEALTH)" },
    { label: "SIGINT Exposure (ISR)", value: "8.7%" },
    { label: "EMCON Endurance", value: "86 hours" },
    { label: "Thermal Sensor", value: "Lynred ATTO640D-04W (640x480, 12um, <35mK NETD)" },
    { label: "Propulsion", value: "PZT Bimorph + EDF 20mm" },
    { label: "Speed", value: "35 cruise / 90 dash / 80 dive km/h" },
    { label: "Hover Endurance", value: "45 minutes" },
    { label: "Cruise Endurance", value: "60 minutes" },
    { label: "Range", value: "2 km round-trip" },
    { label: "Noise @ 10m", value: "< 25 dB(A)" },
    { label: "Comms", value: "BLE 5.3 S=8 + LTE-M (burst TX)" },
    { label: "Stealth Coatings", value: "RAM MT-30 (DE) + Acktar low-e" },
    { label: "Security Element", value: "STSAFE-A110 (CC EAL5+)" },
    { label: "EU Content", value: "> 90% by cost" },
    { label: "ITAR Status", value: "ITAR-free" },
  ];

  return (
    <>
      <section className="relative min-h-[50vh] flex items-center justify-center pt-16">
        <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy to-navy-light" />
        <div className="relative section-container text-center py-20">
          <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/20 rounded-full px-4 py-1.5 mb-6">
            <span className="text-red-400 text-xs font-mono">ISR PLATFORM</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">B1 Scout ISR</h1>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            36.1g biomimetic micro-drone with military-grade stealth, 8 communications intelligence
            management profiles, and 86-hour EMCON endurance. Undetectable. Persistent. Sovereign.
          </p>
        </div>
      </section>

      <section className="section-container py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-bold mb-6">Technical Specifications</h2>
          <div className="glass-card">
            <div className="divide-y divide-white/5">
              {specs.map((s) => (
                <div key={s.label} className="flex justify-between items-center py-3">
                  <span className="text-muted text-sm">{s.label}</span>
                  <span className="font-mono text-gold text-sm text-right max-w-[60%]">{s.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 glass-card">
            <h3 className="font-semibold mb-4">Key Capabilities</h3>
            <ul className="space-y-3 text-sm text-muted">
              <li>Dynamic radio management with burst TX (50x SIGINT reduction)</li>
              <li>Adaptive power control (-4 to +21 dBm)</li>
              <li>NIR 940nm covert illumination</li>
              <li>RAM + low-emissivity coatings for minimized RCS and thermal signature</li>
              <li>BLE S=8 coded PHY for extended range with minimal emissions</li>
              <li>LTE-M OPSEC mode for cellular-based C2 when available</li>
              <li>Serrated trailing edges for acoustic signature reduction</li>
            </ul>
          </div>

          <div className="mt-8 bg-navy-light/80 border border-yellow-500/20 rounded-xl p-6">
            <p className="text-yellow-400 text-sm font-medium mb-2">Classification Notice</p>
            <p className="text-muted text-sm">
              Full operational specifications, mission profiles, and integration documentation
              are available under NDA only. Contact defense@sashatech.ai.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
