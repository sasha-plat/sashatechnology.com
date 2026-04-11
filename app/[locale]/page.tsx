import Link from "next/link";
import { getDictionary } from "../i18n/getDictionary";
import type { Locale } from "../i18n/locales";
import HeroSection from "../components/HeroSection";
import FeatureCard from "../components/FeatureCard";
import NewsletterSignup from "../components/NewsletterSignup";
import ScrollReveal from "../components/ScrollReveal";


export default async function Home({ params }: { params: { locale: string } }) {
  const locale = params.locale as Locale;
  const dict = await getDictionary(locale);
  const prefix = `/${locale}`;

  const features = [
    { icon: "🔇", title: dict.features.silent.title, description: dict.features.silent.desc },
    { icon: "👁️", title: dict.features.thermal.title, description: dict.features.thermal.desc },
    { icon: "🔋", title: dict.features.watch.title, description: dict.features.watch.desc },
    { icon: "✋", title: dict.features.portable.title, description: dict.features.portable.desc },
  ];

  const mainProductSlugs = ["drone", "glasses", "platform", "m2"] as const;
  const mainProducts = mainProductSlugs.map((slug) => ({
    slug,
    name: dict.ecosystem[slug].name,
    tagline: dict.ecosystem[slug].tagline,
    description: dict.ecosystem[slug].description,
    specs: dict.ecosystem[slug].specs,
  }));
  const secondaryProductSlugs = ["fleet", "cloud"] as const;
  const secondaryProducts = secondaryProductSlugs.map((slug) => ({
    slug,
    name: dict.ecosystem[slug].name,
    tagline: dict.ecosystem[slug].tagline,
    description: dict.ecosystem[slug].description,
    specs: dict.ecosystem[slug].specs,
  }));

  const profileGroups = [
    {
      category: dict.profiles.categories.civilian,
      items: [
        dict.profiles.general,
        dict.profiles.tourOperator,
        dict.profiles.touristGuide,
        dict.profiles.sales,
        dict.profiles.logistics,
      ],
    },
    {
      category: dict.profiles.categories.govSecurity,
      items: [
        dict.profiles.lawEnforcement,
        dict.profiles.fieldOperator,
        dict.profiles.securityAgent,
        dict.profiles.compliance,
        dict.profiles.emergencyResponder,
      ],
    },
    {
      category: dict.profiles.categories.defense,
      items: [dict.profiles.military],
    },
  ];

  return (
    <>
      {/* Hero */}
      <HeroSection
        badge={dict.hero.badge}
        title={dict.hero.title}
        subtitle={dict.hero.subtitle}
        description={dict.hero.description}
        ctaText={dict.hero.ctaOrder}
        ctaHref={`${prefix}/contact`}
        secondaryCta={{ text: dict.hero.ctaTech, href: `${prefix}/technology` }}
      />

      {/* Video Placeholder */}
      <ScrollReveal animation="scale-in">
        <section className="section-container py-16">
          <div className="relative aspect-video rounded-2xl overflow-hidden bg-navy-light border border-white/5">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-4 hover:bg-gold/30 hover:scale-110 transition-all duration-300 cursor-pointer">
                  <svg className="w-8 h-8 text-gold ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <p className="text-muted text-sm">{dict.video.cta}</p>
              </div>
            </div>
            <div className="absolute inset-0 opacity-5">
              <div className="w-full h-full"
                style={{
                  backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
                  backgroundSize: "40px 40px",
                }}
              />
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Features */}
      <section className="section-container py-16">
        <ScrollReveal animation="fade-up">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {dict.features.title}<span className="gradient-text">{dict.features.titleHighlight}</span>
            </h2>
            <p className="text-muted max-w-xl mx-auto">
              {dict.features.subtitle}
            </p>
          </div>
        </ScrollReveal>
        <ScrollReveal animation="fade-up" stagger={0.15} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((f) => (
            <FeatureCard key={f.title} {...f} />
          ))}
        </ScrollReveal>
      </section>

      {/* Ecosystem */}
      <section className="section-container py-16">
        <ScrollReveal animation="fade-up">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {dict.ecosystem.title}<span className="gradient-text">{dict.ecosystem.titleHighlight}</span>
            </h2>
            <p className="text-muted max-w-xl mx-auto">
              {dict.ecosystem.subtitle}
            </p>
          </div>
        </ScrollReveal>
        <ScrollReveal animation="fade-up" stagger={0.2} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {mainProducts.map((p) => (
            <div key={p.slug} className="glass-card flex flex-col justify-between group hover:border-gold/20 transition-all duration-300">
              <div className="aspect-[4/3] bg-navy rounded-xl mb-5 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent group-hover:from-gold/10 transition-all duration-500" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1">{p.name}</h3>
                <p className="text-gold text-sm font-medium mb-3">{p.tagline}</p>
                <p className="text-muted text-sm leading-relaxed mb-4">{p.description}</p>
                <p className="font-mono text-xs text-muted/60">{p.specs}</p>
              </div>
            </div>
          ))}
        </ScrollReveal>
        <ScrollReveal animation="fade-up" stagger={0.15} className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {secondaryProducts.map((p) => (
            <div key={p.slug} className="glass-card flex flex-row items-start gap-5 group hover:border-gold/20 transition-all duration-300">
              <div className="w-16 h-16 bg-navy rounded-xl flex-shrink-0 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-gold/10 to-transparent" />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-1">{p.name}</h3>
                <p className="text-gold text-xs font-medium mb-2">{p.tagline}</p>
                <p className="text-muted text-sm leading-relaxed">{p.description}</p>
              </div>
            </div>
          ))}
        </ScrollReveal>
      </section>

      {/* Professional Profiles */}
      <section className="section-container py-16">
        <ScrollReveal animation="fade-up">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {dict.profiles.title}<span className="gradient-text">{dict.profiles.titleHighlight}</span>
            </h2>
            <p className="text-muted max-w-xl mx-auto">
              {dict.profiles.subtitle}
            </p>
          </div>
        </ScrollReveal>
        <ScrollReveal animation="fade-up" stagger={0.1} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {profileGroups.map((group) => (
            <div key={group.category}>
              <h3 className="text-sm uppercase tracking-widest text-gold mb-4 font-semibold">{group.category}</h3>
              <div className="space-y-3">
                {group.items.map((profile) => (
                  <div key={profile.name} className="glass-card !p-4 hover:border-gold/20 transition-all duration-300">
                    <h4 className="font-semibold text-sm mb-1">{profile.name}</h4>
                    <p className="text-muted text-xs leading-relaxed">{profile.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </ScrollReveal>
      </section>

      {/* EU Manufacturing Banner */}
      <section className="section-container py-16">
        <p className="text-center text-sm text-muted/60">
          {locale === "it" ? "Progettato e prodotto in Europa" : "Designed and manufactured in Europe"}
        </p>
      </section>

      {/* Newsletter */}
      <ScrollReveal animation="fade-up">
        <section className="section-container py-20">
          <div className="glass-card text-center py-12 px-6 hover:border-gold/20 transition-all duration-500">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              {dict.newsletter.title}
            </h2>
            <p className="text-muted mb-8 max-w-md mx-auto">
              {dict.newsletter.subtitle}
            </p>
            <NewsletterSignup />
          </div>
        </section>
      </ScrollReveal>
    </>
  );
}
