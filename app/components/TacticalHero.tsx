"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

interface Props {
  flagshipBadge: string;        // e.g. "SASHADRONE M2-M  ·  FLAGSHIP"
  title: string;                // hero headline
  subtitle: string;             // 1-line under-title
  body: string;                 // 1-2 sentence description
  ctaPrimary: { label: string; href: string };
  ctaSecondary: { label: string; href: string };
  // metric chips below CTAs (e.g. "4 m wingspan", "50 h endurance", "3000 km range")
  chips?: { label: string; value: string }[];
}

export default function TacticalHero({
  flagshipBadge,
  title,
  subtitle,
  body,
  ctaPrimary,
  ctaSecondary,
  chips = [],
}: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Lightweight starfield / particles — military HUD vibe
  useEffect(() => {
    const c = canvasRef.current;
    if (!c) return;
    const ctx = c.getContext("2d");
    if (!ctx) return;
    let raf = 0;
    const resize = () => {
      c.width = c.clientWidth;
      c.height = c.clientHeight;
    };
    resize();
    window.addEventListener("resize", resize);
    const N = 80;
    const dots = Array.from({ length: N }, () => ({
      x: Math.random() * c.width,
      y: Math.random() * c.height,
      r: Math.random() * 1.2 + 0.2,
      v: Math.random() * 0.3 + 0.05,
      a: Math.random() * 0.5 + 0.2,
    }));
    const tick = () => {
      ctx.clearRect(0, 0, c.width, c.height);
      for (const d of dots) {
        d.y += d.v;
        if (d.y > c.height) {
          d.y = -2;
          d.x = Math.random() * c.width;
        }
        ctx.fillStyle = `rgba(255,165,10,${d.a})`;
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fill();
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden bg-bg-primary">
      {/* Layered background — radial glow + grid + particles + scan */}
      <div aria-hidden className="absolute inset-0 bg-radial-glow" />
      <div aria-hidden className="absolute inset-0 bg-grid-tactical bg-grid-md opacity-50" />
      <canvas
        ref={canvasRef}
        aria-hidden
        className="absolute inset-0 w-full h-full pointer-events-none opacity-70"
      />
      <div aria-hidden className="absolute inset-0 bg-scan-grid opacity-40 mix-blend-screen pointer-events-none" />

      {/* Top corner brackets — tactical HUD touch */}
      <div aria-hidden className="absolute top-24 left-6 lg:left-10 w-12 h-12 border-l-2 border-t-2 border-accent-amber/60" />
      <div aria-hidden className="absolute top-24 right-6 lg:right-10 w-12 h-12 border-r-2 border-t-2 border-accent-amber/60" />
      <div aria-hidden className="absolute bottom-12 left-6 lg:left-10 w-12 h-12 border-l-2 border-b-2 border-accent-amber/60" />
      <div aria-hidden className="absolute bottom-12 right-6 lg:right-10 w-12 h-12 border-r-2 border-b-2 border-accent-amber/60" />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-32 lg:py-40 w-full">
        <div className="max-w-4xl animate-fade-in">
          {/* Flagship badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 border border-accent-amber/40 bg-accent-amber/5 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 bg-accent-amber animate-pulse-glow rounded-full" />
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent-amber">
              {flagshipBadge}
            </span>
          </div>

          {/* Title */}
          <h1 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-text-primary">
            {title}
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-xl md:text-2xl text-text-secondary leading-snug max-w-3xl">
            {subtitle}
          </p>

          {/* Body */}
          <p className="mt-4 text-base md:text-lg text-text-muted leading-relaxed max-w-2xl">
            {body}
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href={ctaPrimary.href}
              className="group inline-flex items-center gap-2 px-6 py-3 font-semibold bg-accent-amber text-bg-primary hover:bg-accent-amber-glow hover:shadow-tactical transition-all"
            >
              {ctaPrimary.label}
              <span className="group-hover:translate-x-1 transition-transform" aria-hidden>→</span>
            </Link>
            <Link
              href={ctaSecondary.href}
              className="inline-flex items-center gap-2 px-6 py-3 font-semibold border border-border hover:border-accent-amber text-text-primary hover:text-accent-amber transition-all"
            >
              {ctaSecondary.label}
            </Link>
          </div>

          {/* Metric chips */}
          {chips.length > 0 && (
            <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl">
              {chips.map((chip) => (
                <div
                  key={chip.label}
                  className="px-4 py-3 bg-bg-secondary/60 backdrop-blur-sm border border-border hover:border-accent-amber/50 transition-colors"
                >
                  <div className="font-mono text-2xl font-bold text-accent-amber">
                    {chip.value}
                  </div>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-text-muted mt-1">
                    {chip.label}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
