"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import LanguageSwitcher from "./LanguageSwitcher";

const productGroups = {
  it: {
    drones: "Droni",
    glasses: "Glasses",
    software: "Piattaforme SW",
    accessories: "Accessori",
  },
  en: {
    drones: "Drones",
    glasses: "Glasses",
    software: "Software Platforms",
    accessories: "Accessories",
  },
};

type ProductItem = { slug: string; name: string; hasPage: boolean };

const droneProducts: ProductItem[] = [
  { slug: "guard", name: "B1 Scout — Guard", hasPage: true },
  { slug: "inspect", name: "B1 Scout — Inspect", hasPage: true },
  { slug: "rescue", name: "B1 Scout — Rescue", hasPage: true },
  { slug: "agri", name: "B1 Scout — Agri", hasPage: true },
  { slug: "cine", name: "B1 Scout — Cine", hasPage: true },
  { slug: "b2", name: "B2 Platform", hasPage: false },
  { slug: "m2", name: "M2 Lambda Wing", hasPage: true },
];

const glassesProducts: ProductItem[] = [
  { slug: "glasses", name: "SashaGlasses", hasPage: true },
  { slug: "id", name: "SashaID", hasPage: false },
];

const softwareProducts: ProductItem[] = [
  { slug: "platform", name: "SashaPlatform", hasPage: true },
  { slug: "fleet", name: "SashaFleet", hasPage: false },
  { slug: "cloud", name: "SashaCloud", hasPage: false },
  { slug: "studio", name: "SashaStudio", hasPage: false },
  { slug: "mission-planner", name: "Mission Planner", hasPage: false },
];

const accessoryProducts: ProductItem[] = [
  { slug: "pogo-dock", name: "Pogo USB Dock", hasPage: false },
];

interface NavbarProps {
  locale?: string;
}

const navT = {
  it: { home: "Home", technology: "Come Funziona", products: "Prodotti", about: "Chi Siamo", contact: "Contatti", cta: "Contattaci" },
  en: { home: "Home", technology: "Technology", products: "Products", about: "About", contact: "Contact", cta: "Get in Touch" },
};

export default function Navbar({ locale }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  const prefix = locale ? `/${locale}` : "";
  const d = locale === "it" ? navT.it : navT.en;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      {/* In Progress Banner */}
      <div className="bg-gold/90 text-navy text-center text-xs font-semibold py-1 tracking-wide">
        {locale === "it"
          ? "Sito in costruzione \u2014 Le specifiche prodotto sono preliminari"
          : "Website under construction \u2014 Product specifications are preliminary"}
      </div>
      <div className="bg-navy/80 backdrop-blur-xl border-b border-white/5">
      <div className="section-container flex items-center justify-between h-16">
        {/* Logo */}
        <Link href={`${prefix}/`} className="flex items-center">
          <Image
            src="/images/logo_red_on_black.png"
            alt="SashaTech"
            width={140}
            height={32}
            className="h-8 w-auto"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <Link href={`${prefix}/`} className="text-sm text-muted hover:text-white transition-colors">
            {d.home}
          </Link>
          <Link href={`${prefix}/technology`} className="text-sm text-muted hover:text-white transition-colors">
            {d.technology}
          </Link>

          {/* Products Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setProductsOpen(true)}
            onMouseLeave={() => setProductsOpen(false)}
          >
            <button className="text-sm text-muted hover:text-white transition-colors flex items-center gap-1">
              {d.products}
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {productsOpen && (
              <div className="absolute top-full left-0 mt-2 w-56 bg-navy-light border border-white/10 rounded-xl shadow-2xl overflow-hidden max-h-[70vh] overflow-y-auto">
                {([
                  { key: "drones" as const, items: droneProducts },
                  { key: "glasses" as const, items: glassesProducts },
                  { key: "software" as const, items: softwareProducts },
                  { key: "accessories" as const, items: accessoryProducts },
                ]).map(({ key, items }, gi) => (
                  <div key={key}>
                    {gi > 0 && <div className="border-t border-white/5" />}
                    <p className="px-4 pt-3 pb-1 text-xs text-gold/60 uppercase tracking-wider">
                      {locale === "it" ? productGroups.it[key] : productGroups.en[key]}
                    </p>
                    {items.map((v) =>
                      v.hasPage ? (
                        <Link
                          key={v.slug}
                          href={`${prefix}/products/${v.slug}`}
                          className="block px-4 py-1.5 text-sm text-muted hover:text-white hover:bg-white/5 transition-colors"
                        >
                          {v.name}
                        </Link>
                      ) : (
                        <span
                          key={v.slug}
                          className="block px-4 py-1.5 text-sm text-muted/40 cursor-default"
                          title={locale === "it" ? "Prossimamente" : "Coming soon"}
                        >
                          {v.name} <span className="text-xs text-muted/30">·</span>
                        </span>
                      )
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          <Link href={`${prefix}/about`} className="text-sm text-muted hover:text-white transition-colors">
            About
          </Link>
          <Link href={`${prefix}/contact`} className="text-sm text-muted hover:text-white transition-colors">
            Contact
          </Link>

          <LanguageSwitcher />
        </div>

        {/* CTA */}
        <Link
          href={`${prefix}/contact`}
          className="hidden md:inline-flex items-center gap-2 bg-gold text-navy font-semibold px-5 py-2 rounded-lg hover:bg-gold-light transition-all text-sm"
        >
          {d.cta}
        </Link>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-navy-light border-t border-white/5">
          <div className="px-4 py-4 space-y-3">
            <Link href={`${prefix}/`} className="block text-muted hover:text-white py-2" onClick={() => setMobileOpen(false)}>
              {d.home}
            </Link>
            <Link href={`${prefix}/technology`} className="block text-muted hover:text-white py-2" onClick={() => setMobileOpen(false)}>
              {d.technology}
            </Link>
            <div className="border-t border-white/5 pt-2">
              {([
                { key: "drones" as const, items: droneProducts },
                { key: "glasses" as const, items: glassesProducts },
                { key: "software" as const, items: softwareProducts },
                { key: "accessories" as const, items: accessoryProducts },
              ]).map(({ key, items }) => (
                <div key={key} className="mb-2">
                  <p className="text-xs text-gold/60 uppercase tracking-wider mb-1 mt-2">
                    {locale === "it" ? productGroups.it[key] : productGroups.en[key]}
                  </p>
                  {items.map((v) =>
                    v.hasPage ? (
                      <Link
                        key={v.slug}
                        href={`${prefix}/products/${v.slug}`}
                        className="block text-muted hover:text-white py-1.5 pl-3 text-sm"
                        onClick={() => setMobileOpen(false)}
                      >
                        {v.name}
                      </Link>
                    ) : (
                      <span
                        key={v.slug}
                        className="block text-muted/40 py-1 pl-3 text-sm"
                      >
                        {v.name}
                      </span>
                    )
                  )}
                </div>
              ))}
            </div>
            <Link href={`${prefix}/about`} className="block text-muted hover:text-white py-2" onClick={() => setMobileOpen(false)}>
              About
            </Link>
            <Link href={`${prefix}/contact`} className="block text-muted hover:text-white py-2" onClick={() => setMobileOpen(false)}>
              Contact
            </Link>
            <div className="border-t border-white/5 pt-3">
              <LanguageSwitcher />
            </div>
            <Link
              href={`${prefix}/contact`}
              className="block text-center bg-gold text-navy font-semibold px-5 py-3 rounded-lg mt-3"
              onClick={() => setMobileOpen(false)}
            >
              {d.cta}
            </Link>
          </div>
        </div>
      )}
      </div>
    </nav>
  );
}
