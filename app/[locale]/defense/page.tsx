// Defense pages disabled until NDA process is established

"use client";

import { Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const ACCESS_KEY = "defense2026";

export default function DefensePage() {
  return (
    <Suspense fallback={null}>
      <DefensePageInner />
    </Suspense>
  );
}

function DefensePageInner() {
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

  const products = [
    {
      name: "B1 Scout ISR",
      href: `${prefix}/defense/scout?access=${ACCESS_KEY}`,
      description: "70g biomimetic ISR micro-drone. Stealth score 9.0/10. 8 CIM radio profiles. 86h+ EMCON endurance.",
      badge: "ISR",
    },
    {
      name: "B1-SC / B1-FRAG Dardo",
      href: `${prefix}/defense/dardo?access=${ACCESS_KEY}`,
      description: "Precision loitering munition variants. CL-20 warhead. 31mm RHA (SC) or DRF fragmentation (FRAG).",
      badge: "MUNITION",
    },
    {
      name: "M1 Carrier Platform",
      href: `${prefix}/defense/carrier?access=${ACCESS_KEY}`,
      description: "Multi-role carrier: M1-R (2 scout), M1-S (2+1 munition), M1-D (1+2 munition). Ventral bay deployment.",
      badge: "CARRIER",
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center pt-16">
        <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy to-navy-light" />
        <div className="relative section-container text-center py-20">
          <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/20 rounded-full px-4 py-1.5 mb-8">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span className="text-red-400 text-xs font-medium tracking-wide uppercase">Restricted Access</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
            Defense Solutions
          </h1>
          <p className="text-muted text-lg max-w-2xl mx-auto mb-8">
            Military-grade biomimetic UAS platforms for ISR, precision strike, and multi-role carrier operations.
            100% EU supply chain. ITAR-free. EDF-eligible.
          </p>
          <div className="bg-navy-light/80 border border-yellow-500/20 rounded-xl p-6 max-w-xl mx-auto">
            <p className="text-yellow-400 text-sm font-medium mb-2">NDA Required</p>
            <p className="text-muted text-sm">
              Full technical specifications, pricing, and procurement information are available
              under NDA. Contact{" "}
              <a href="mailto:defense@sashatech.ai" className="text-gold hover:underline">
                defense@sashatech.ai
              </a>{" "}
              to initiate the process.
            </p>
          </div>
        </div>
      </section>

      {/* Product Cards */}
      <section className="section-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <Link key={product.name} href={product.href} className="glass-card group hover:scale-[1.02] transition-transform">
              <div className="aspect-[4/3] bg-navy rounded-xl mb-5 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent" />
                <div className="absolute top-3 left-3 bg-red-500/20 text-red-400 text-xs font-mono px-2 py-1 rounded">
                  {product.badge}
                </div>
              </div>
              <h3 className="text-lg font-bold mb-2 group-hover:text-gold transition-colors">{product.name}</h3>
              <p className="text-muted text-sm leading-relaxed">{product.description}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-container py-20">
        <div className="glass-card text-center py-12">
          <h2 className="text-2xl font-bold mb-4">Request Technical Briefing</h2>
          <p className="text-muted mb-8 max-w-md mx-auto">
            Schedule a classified technical briefing with our defense team.
            NATO-cleared personnel available.
          </p>
          <a href="mailto:defense@sashatech.ai" className="btn-primary">
            Contact defense@sashatech.ai
          </a>
        </div>
      </section>
    </>
  );
}
