import Link from "next/link";

interface Props {
  eyebrow: string;
  heading: string;
  body: string;
  points: string[];
  ctaPrimary: { label: string; href: string };
  ctaSecondary: { label: string; href: string };
  kicker?: string;
}

export default function PartnersInvestorsCTA({
  eyebrow,
  heading,
  body,
  points,
  ctaPrimary,
  ctaSecondary,
  kicker,
}: Props) {
  return (
    <section className="relative py-24 lg:py-32 bg-bg-primary overflow-hidden">
      <div aria-hidden className="absolute inset-0 bg-radial-glow" />
      <div aria-hidden className="absolute inset-0 bg-grid-tactical bg-grid-md opacity-40" />

      {/* Corner brackets — tactical HUD touch */}
      <div aria-hidden className="absolute top-10 left-6 lg:left-10 w-10 h-10 border-l-2 border-t-2 border-accent-amber/50" />
      <div aria-hidden className="absolute bottom-10 right-6 lg:right-10 w-10 h-10 border-r-2 border-b-2 border-accent-amber/50" />

      <div className="relative max-w-5xl mx-auto px-6 lg:px-10 text-center">
        <div className="font-mono text-xs uppercase tracking-[0.25em] text-accent-cyan mb-4">
          {eyebrow}
        </div>

        <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-text-primary leading-[1.1] max-w-4xl mx-auto">
          {heading}
        </h2>

        <p className="mt-6 text-base md:text-lg text-text-secondary leading-relaxed max-w-2xl mx-auto">
          {body}
        </p>

        {/* Points */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-3xl mx-auto">
          {points.map((p) => (
            <div
              key={p}
              className="px-4 py-4 border border-border bg-bg-secondary/60 backdrop-blur-sm text-text-secondary text-sm font-medium hover:border-accent-amber/50 transition-colors"
            >
              {p}
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href={ctaPrimary.href}
            className="group inline-flex items-center gap-2 px-7 py-3 font-semibold bg-accent-amber text-bg-primary hover:bg-accent-amber-glow hover:shadow-tactical transition-all"
          >
            {ctaPrimary.label}
            <span className="group-hover:translate-x-1 transition-transform" aria-hidden>→</span>
          </Link>
          <Link
            href={ctaSecondary.href}
            className="inline-flex items-center gap-2 px-7 py-3 font-semibold border border-border hover:border-accent-amber text-text-primary hover:text-accent-amber transition-all"
          >
            {ctaSecondary.label}
          </Link>
        </div>

        {kicker && (
          <p className="mt-12 font-display text-lg md:text-xl text-accent-amber">
            {kicker}
          </p>
        )}
      </div>
    </section>
  );
}
