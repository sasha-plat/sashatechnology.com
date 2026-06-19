import Link from "next/link";

interface Props {
  eyebrow: string;
  heading: string;
  body: string[];
  tags: { label: string; value: string }[];
  cta: { label: string; href: string };
}

export default function GlassesDroneCockpit({
  eyebrow,
  heading,
  body,
  tags,
  cta,
}: Props) {
  return (
    <section className="relative py-24 lg:py-32 bg-bg-primary overflow-hidden">
      <div aria-hidden className="absolute inset-0 bg-radial-glow opacity-50" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          {/* Left — narrative */}
          <div className="lg:col-span-6">
            <div className="font-mono text-xs uppercase tracking-[0.25em] text-accent-cyan mb-3">
              {eyebrow}
            </div>
            <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-text-primary leading-[1.05]">
              {heading}
            </h2>
            <div className="mt-6 space-y-4">
              {body.map((p, i) => (
                <p
                  key={i}
                  className="text-base md:text-lg text-text-secondary leading-relaxed"
                >
                  {p}
                </p>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {tags.map((t) => (
                <div
                  key={t.label}
                  className="px-3 py-2 border border-border bg-bg-secondary/60"
                >
                  <span className="font-mono text-[10px] uppercase tracking-widest text-text-muted">
                    {t.label}
                  </span>
                  <span className="ml-2 font-mono text-sm text-accent-amber">
                    {t.value}
                  </span>
                </div>
              ))}
            </div>

            <Link
              href={cta.href}
              className="mt-10 inline-flex items-center gap-2 px-6 py-3 font-semibold border border-accent-amber text-accent-amber hover:bg-accent-amber hover:text-bg-primary transition-all"
            >
              {cta.label}
              <span aria-hidden>→</span>
            </Link>
          </div>

          {/* Right — HUD mockup (CSS art, placeholder for real video later) */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/3] bg-bg-secondary border border-border overflow-hidden">
              {/* HUD bg */}
              <div aria-hidden className="absolute inset-0 bg-scan-grid opacity-50" />
              <div aria-hidden className="absolute inset-0 bg-grid-tactical bg-grid-sm opacity-30" />

              {/* Crosshair */}
              <div aria-hidden className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-40 h-40">
                  <div className="absolute inset-0 border border-accent-amber/40 rounded-full" />
                  <div className="absolute inset-x-0 top-1/2 h-px bg-accent-amber/60" />
                  <div className="absolute inset-y-0 left-1/2 w-px bg-accent-amber/60" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 border-2 border-accent-amber" />
                </div>
              </div>

              {/* Corner tactical labels */}
              <div className="absolute top-4 left-4 font-mono text-xs text-accent-amber">
                <div className="text-[10px] uppercase text-text-muted">altitude</div>
                <div className="text-lg font-bold">312 m</div>
              </div>
              <div className="absolute top-4 right-4 font-mono text-xs text-accent-amber text-right">
                <div className="text-[10px] uppercase text-text-muted">heading</div>
                <div className="text-lg font-bold">047°</div>
              </div>
              <div className="absolute bottom-4 left-4 font-mono text-xs text-accent-cyan">
                <div className="text-[10px] uppercase text-text-muted">range</div>
                <div className="text-lg font-bold">42.7 km</div>
              </div>
              <div className="absolute bottom-4 right-4 font-mono text-xs text-accent-cyan text-right">
                <div className="text-[10px] uppercase text-text-muted">endurance</div>
                <div className="text-lg font-bold">47:23</div>
              </div>

              {/* Status banner */}
              <div className="absolute top-1/2 left-4 -translate-y-1/2 px-2 py-1 bg-accent-amber/10 border border-accent-amber/40 font-mono text-[10px] uppercase tracking-widest text-accent-amber">
                M2-M • AUTOPILOT
              </div>
              <div className="absolute top-[58%] left-4 px-2 py-1 bg-signal-success/10 border border-signal-success/40 font-mono text-[10px] uppercase tracking-widest text-signal-success">
                BOUNDED AUTONOMY • OK
              </div>

              {/* Scan line */}
              <div aria-hidden className="absolute inset-x-0 h-px bg-accent-cyan/60 animate-scan-line" />
            </div>

            <div className="mt-4 font-mono text-[10px] uppercase tracking-widest text-text-muted text-center">
              SashaGlasses HUD · Live telemetry · Gesture + Voice command
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
