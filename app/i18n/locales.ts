export const locales = ['it', 'en', 'fr', 'de', 'es', 'pt', 'nl', 'pl', 'cs', 'ro', 'hu', 'bg', 'el', 'da', 'sv', 'fi', 'sk', 'hr', 'sl'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'it';

export const localeNames: Record<Locale, string> = {
  it: 'Italiano',
  en: 'English',
  fr: 'Fran\u00e7ais',
  de: 'Deutsch',
  es: 'Espa\u00f1ol',
  pt: 'Portugu\u00eas',
  nl: 'Nederlands',
  pl: 'Polski',
  cs: '\u010ce\u0161tina',
  ro: 'Rom\u00e2n\u0103',
  hu: 'Magyar',
  bg: '\u0411\u044a\u043b\u0433\u0430\u0440\u0441\u043a\u0438',
  el: '\u0395\u03bb\u03bb\u03b7\u03bd\u03b9\u03ba\u03ac',
  da: 'Dansk',
  sv: 'Svenska',
  fi: 'Suomi',
  sk: 'Sloven\u010dina',
  hr: 'Hrvatski',
  sl: 'Sloven\u0161\u010dina',
};

export const localeFlags: Record<Locale, string> = {
  it: '\ud83c\uddee\ud83c\uddf9',
  en: '\ud83c\uddec\ud83c\udde7',
  fr: '\ud83c\uddeb\ud83c\uddf7',
  de: '\ud83c\udde9\ud83c\uddea',
  es: '\ud83c\uddea\ud83c\uddf8',
  pt: '\ud83c\uddf5\ud83c\uddf9',
  nl: '\ud83c\uddf3\ud83c\uddf1',
  pl: '\ud83c\uddf5\ud83c\uddf1',
  cs: '\ud83c\udde8\ud83c\uddff',
  ro: '\ud83c\uddf7\ud83c\uddf4',
  hu: '\ud83c\udded\ud83c\uddfa',
  bg: '\ud83c\udde7\ud83c\uddec',
  el: '\ud83c\uddec\ud83c\uddf7',
  da: '\ud83c\udde9\ud83c\uddf0',
  sv: '\ud83c\uddf8\ud83c\uddea',
  fi: '\ud83c\uddeb\ud83c\uddee',
  sk: '\ud83c\uddf8\ud83c\uddf0',
  hr: '\ud83c\udded\ud83c\uddf7',
  sl: '\ud83c\uddf8\ud83c\uddee',
};
