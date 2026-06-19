interface Pillar {
  code: string;          // e.g. "P-01"
  title: string;
  description: string;
}

interface Props {
  eyebrow: string;
  heading: string;
  pillars: Pillar[];
}

export default function PillarBar({ eyebrow, heading, pillars }: Props) {
  return (
    <section className="relative py-24 lg:py-32 bg-bg-secondary border-y border-border">
      <div aria-hidden className="absolute inset-0 bg-grid-tactical bg-grid-sm opacity-30" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-3xl mb-14">
          <div className="font-mono text-xs uppercase tracking-[0.25em] text-accent-cyan mb-3">
            {eyebrow}
          </div>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-text-primary leading-tight">
            {heading}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border-t border-l border-border">
          {pillars.map((p) => (
            <div
              key={p.code}
              className="p-8 border-r border-b border-border bg-bg-primary/40 hover:bg-bg-tertiary/40 transition-colors group"
            >
              <div className="font-mono text-xs text-accent-amber mb-4">
                {p.code}
              </div>
              <h3 className="font-display font-bold text-2xl text-text-primary mb-3 group-hover:text-accent-amber transition-colors">
                {p.title}
              </h3>
              <p className="text-sm text-text-muted leading-relaxed">
                {p.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
