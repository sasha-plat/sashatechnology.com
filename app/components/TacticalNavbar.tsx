"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

type NavItem = { label: string; href: string };

interface Props {
  locale: string;
  primary: NavItem[];
  ctaLabel: string;
}

export default function TacticalNavbar({ locale, primary, ctaLabel }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-bg-primary/85 backdrop-blur-xl border-b border-border"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href={`/${locale}`} className="flex items-center gap-2 group">
          <div className="relative w-7 h-7">
            <div className="absolute inset-0 border border-accent-amber rotate-45 group-hover:rotate-90 transition-transform duration-500" />
            <div className="absolute inset-1 bg-accent-amber/30 rotate-45" />
          </div>
          <span className="font-display font-bold text-lg tracking-wide">
            <span className="text-text-primary">SASHA</span>
            <span className="text-accent-amber">TECH</span>
          </span>
        </Link>

        {/* Primary nav — desktop */}
        <nav className="hidden lg:flex items-center gap-1">
          {primary.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-3 py-2 text-sm font-medium text-text-secondary hover:text-accent-amber transition-colors relative group"
            >
              {item.label}
              <span className="absolute inset-x-3 -bottom-0.5 h-px bg-accent-amber scale-x-0 group-hover:scale-x-100 origin-left transition-transform" />
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <Link
            href={`/${locale}/contact`}
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold bg-accent-amber text-bg-primary hover:bg-accent-amber-glow hover:shadow-tactical transition-all"
          >
            {ctaLabel}
            <span aria-hidden>→</span>
          </Link>

          {/* Mobile burger */}
          <button
            aria-label="menu"
            className="lg:hidden inline-flex w-9 h-9 items-center justify-center border border-border hover:border-accent-amber transition"
            onClick={() => setOpen((s) => !s)}
          >
            <span className={`block w-4 h-px bg-text-primary transition ${open ? "rotate-45 translate-y-px" : "-translate-y-1"}`} />
            <span className={`block w-4 h-px bg-text-primary absolute transition ${open ? "opacity-0" : "opacity-100"}`} />
            <span className={`block w-4 h-px bg-text-primary transition ${open ? "-rotate-45 -translate-y-px" : "translate-y-1"}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="lg:hidden border-t border-border bg-bg-secondary">
          <ul className="max-w-7xl mx-auto px-6 py-4 space-y-2">
            {primary.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block py-2 text-text-secondary hover:text-accent-amber transition"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
