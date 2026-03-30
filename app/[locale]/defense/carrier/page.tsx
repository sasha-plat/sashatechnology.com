// Defense pages disabled until NDA process is established

"use client";

import { Suspense } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const ACCESS_KEY = "defense2026";

export default function CarrierDefensePage() {
  return (
    <Suspense fallback={null}>
      <CarrierDefensePageInner />
    </Suspense>
  );
}

function CarrierDefensePageInner() {
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

  const variants = [
    {
      name: "M1-R (Recon)",
      payload: "2 x B1 Scout",
      mission: "Extended ISR coverage with coordinated mesh surveillance. Deploy scouts at separate vantage points for overlapping thermal coverage.",
      specs: [
        { label: "Scout Capacity", value: "2 units" },
        { label: "Munition Capacity", value: "0" },
        { label: "Deployment", value: "Ventral bay, sequential" },
        { label: "Recovery", value: "Hover at 25m, magnetic capture" },
      ],
    },
    {
      name: "M1-S (Strike)",
      payload: "2 x B1 Scout + 1 x Dardo",
      mission: "ISR-to-strike chain. Scouts identify and designate targets, Dardo engages with precision. Scout-guided terminal guidance available.",
      specs: [
        { label: "Scout Capacity", value: "2 units" },
        { label: "Munition Capacity", value: "1 unit (SC or FRAG)" },
        { label: "Deployment", value: "Ventral bay, configurable order" },
        { label: "Recovery", value: "Scouts recoverable, Dardo expended" },
      ],
    },
    {
      name: "M1-D (Dual)",
      payload: "1 x B1 Scout + 2 x Dardo",
      mission: "Maximum strike payload with organic ISR. Scout provides BDA (Battle Damage Assessment) and terminal guidance for second munition.",
      specs: [
        { label: "Scout Capacity", value: "1 unit" },
        { label: "Munition Capacity", value: "2 units (any mix SC/FRAG)" },
        { label: "Deployment", value: "Ventral bay, mission-sequenced" },
        { label: "Recovery", value: "Scout recoverable, Dardos expended" },
      ],
    },
  ];

  return (
    <>
      <section className="relative min-h-[50vh] flex items-center justify-center pt-16">
        <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy to-navy-light" />
        <div className="relative section-container text-center py-20">
          <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/20 rounded-full px-4 py-1.5 mb-6">
            <span className="text-red-400 text-xs font-mono">CARRIER PLATFORM</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">M1 Carrier Platform</h1>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Multi-role carrier drone with ventral bay deployment system. Three configurations
            for reconnaissance, strike, and dual operations. All variants share a common airframe.
          </p>
        </div>
      </section>

      <section className="section-container py-16">
        <div className="max-w-4xl mx-auto space-y-8">
          {variants.map((v) => (
            <div key={v.name} className="glass-card">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className="text-xl font-bold text-gold">{v.name}</h2>
                  <p className="text-sm text-muted mt-1">Payload: {v.payload}</p>
                </div>
              </div>
              <p className="text-muted text-sm leading-relaxed mb-6">{v.mission}</p>
              <div className="bg-navy/50 rounded-lg border border-white/5">
                <div className="divide-y divide-white/5">
                  {v.specs.map((s) => (
                    <div key={s.label} className="flex justify-between items-center px-4 py-2.5">
                      <span className="text-muted text-sm">{s.label}</span>
                      <span className="font-mono text-gold text-sm">{s.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto mt-12">
          <div className="glass-card">
            <h3 className="font-semibold mb-4">Platform Notes</h3>
            <ul className="space-y-3 text-sm text-muted">
              <li>M1-H (Relay) variant eliminated: relay function is now a software profile on M1-R</li>
              <li>A1 platform deprecated: all new development on M1 family</li>
              <li>Common airframe across all three variants reduces logistics footprint</li>
              <li>Ventral bay supports hot-swap between Scout and Dardo units in the field</li>
            </ul>
          </div>

          <div className="mt-8 bg-navy-light/80 border border-yellow-500/20 rounded-xl p-6">
            <p className="text-yellow-400 text-sm font-medium mb-2">Classification Notice</p>
            <p className="text-muted text-sm">
              Carrier platform specifications, flight performance, and integration documentation
              are available under NDA only. Contact defense@sashatech.ai.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
