import Link from "next/link";

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  description?: string;
  ctaText?: string;
  ctaHref?: string;
  secondaryCta?: { text: string; href: string };
  badge?: string;
}

export default function HeroSection({
  title,
  subtitle,
  description,
  ctaText,
  ctaHref = "/contact",
  secondaryCta,
  badge,
}: HeroSectionProps) {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center pt-16">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy to-navy-light" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-3xl" />

      <div className="relative section-container text-center py-20 md:py-32">
        {badge && (
          <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/20 rounded-full px-4 py-1.5 mb-8">
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            <span className="text-gold text-xs font-medium tracking-wide uppercase">{badge}</span>
          </div>
        )}

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-balance leading-[1.1] mb-6">
          {title}
        </h1>

        {subtitle && (
          <p className="font-mono text-gold text-sm md:text-base tracking-widest mb-6">
            {subtitle}
          </p>
        )}

        {description && (
          <p className="text-muted text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
            {description}
          </p>
        )}

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {ctaText && (
            <Link href={ctaHref} className="btn-primary">
              {ctaText}
            </Link>
          )}
          {secondaryCta && (
            <Link href={secondaryCta.href} className="btn-secondary">
              {secondaryCta.text}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
