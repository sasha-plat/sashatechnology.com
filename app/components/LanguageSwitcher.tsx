"use client";

import { useState, useRef, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { locales, localeNames, localeFlags, type Locale } from "../i18n/locales";

export default function LanguageSwitcher() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const router = useRouter();

  // Extract current locale from pathname
  const segments = pathname.split("/");
  const currentLocale = (locales as readonly string[]).includes(segments[1])
    ? (segments[1] as Locale)
    : "it";

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const switchLocale = (locale: Locale) => {
    // Replace the locale segment in the pathname
    const newSegments = [...segments];
    if ((locales as readonly string[]).includes(newSegments[1])) {
      newSegments[1] = locale;
    } else {
      newSegments.splice(1, 0, locale);
    }
    router.push(newSegments.join("/") || "/");
    setOpen(false);
  };

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 text-sm text-muted hover:text-white transition-colors px-2 py-1 rounded-lg hover:bg-white/5"
        aria-label="Switch language"
      >
        <span>{localeFlags[currentLocale]}</span>
        <span className="hidden sm:inline">{localeNames[currentLocale]}</span>
        <svg className={`w-3 h-3 transition-transform ${open ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-2 w-48 max-h-80 overflow-y-auto bg-navy-light border border-white/10 rounded-xl shadow-2xl z-50">
          {locales.map((locale) => (
            <button
              key={locale}
              onClick={() => switchLocale(locale)}
              className={`w-full text-left px-4 py-2.5 text-sm flex items-center gap-3 hover:bg-white/5 transition-colors ${
                locale === currentLocale ? "text-gold" : "text-muted hover:text-white"
              }`}
            >
              <span>{localeFlags[locale]}</span>
              <span>{localeNames[locale]}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
