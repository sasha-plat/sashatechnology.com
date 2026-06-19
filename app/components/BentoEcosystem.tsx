import Link from "next/link";

interface Item {
  title: string;
  description: string;
  href: string;
  // grid span hints
  className?: string;
  badge?: string;
  // 36×36 icon as JSX
  icon?: React.ReactNode;
}

interface Props {
  eyebrow: string;
  heading: string;
  body?: string;
  items: Item[];
}

export default function BentoEcosystem({ eyebrow, heading, body, items }: Props) {
  return (
    <section className="relative py-24 lg:py-32 bg-bg-primary">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section header */}
        <div className="max-w-3xl mb-12">
          <div className="font-mono text-xs uppercase tracking-[0.25em] text-accent-cyan mb-3">
            {eyebrow}
          </div>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-text-primary leading-tight">
            {heading}
          </h2>
          {body && (
            <p className="mt-4 text-lg text-text-secondary leading-relaxed">
              {body}
            </p>
          )}
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 auto-rows-[180px] gap-4">
          {items.map((item, i) => (
            <Link
              key={i}
              href={item.href}
              className={`group relative overflow-hidden border border-border hover:border-accent-amber/50 bg-bg-secondary hover:bg-bg-tertiary transition-all duration-300 p-6 ${
                item.className || "md:col-span-3 lg:col-span-2 row-span-1"
              }`}
            >
              {/* Top-right amber accent on hover */}
              <div aria-hidden className="absolute top-0 right-0 w-32 h-32 bg-accent-amber/0 group-hover:bg-accent-amber/5 rounded-full blur-3xl transition-all duration-700" />

              {/* Top-left corner bracket */}
              <div aria-hidden className="absolute top-2 left-2 w-4 h-4 border-l border-t border-accent-amber/40 group-hover:border-accent-amber transition-colors" />

              {item.badge && (
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent-amber mb-3">
                  {item.badge}
                </div>
              )}

              {item.icon && (
                <div className="mb-4 text-accent-amber">{item.icon}</div>
              )}

              <h3 className="font-display font-bold text-xl text-text-primary group-hover:text-accent-amber transition-colors leading-tight">
                {item.title}
              </h3>

              <p className="mt-2 text-sm text-text-muted leading-relaxed">
                {item.description}
              </p>

              {/* Bottom-right arrow */}
              <div className="absolute bottom-4 right-4 text-accent-amber opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all">
                →
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
