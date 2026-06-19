"use client";

interface Props {
  eyebrow: string;
  items: string[]; // standard codes/names
}

export default function ComplianceMarquee({ eyebrow, items }: Props) {
  // duplicate items for seamless loop
  const loop = [...items, ...items];
  return (
    <section className="relative py-12 bg-bg-primary border-y border-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 mb-6">
        <div className="font-mono text-xs uppercase tracking-[0.25em] text-text-muted">
          {eyebrow}
        </div>
      </div>

      <div className="relative" style={{ maskImage: "linear-gradient(90deg, transparent 0%, black 10%, black 90%, transparent 100%)" }}>
        <div className="flex animate-marquee" style={{ width: "max-content" }}>
          {loop.map((it, i) => (
            <div
              key={i}
              className="mx-8 flex items-center gap-3 whitespace-nowrap"
            >
              <span className="w-2 h-2 bg-accent-amber/60 rotate-45" />
              <span className="font-mono text-sm uppercase tracking-wider text-text-secondary hover:text-accent-amber transition-colors">
                {it}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
