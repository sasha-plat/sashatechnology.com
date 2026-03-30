import type { Locale } from './locales';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Dictionary = Record<string, any>;

const dictionaries: Partial<Record<Locale, () => Promise<Dictionary>>> = {
  it: () => import('./dictionaries/it.json').then((m) => m.default),
  en: () => import('./dictionaries/en.json').then((m) => m.default),
  // Other 17 languages fall back to English for now.
  // Add dedicated JSON files as translations become available.
};

export const getDictionary = async (locale: Locale): Promise<Dictionary> => {
  const loader = dictionaries[locale] || dictionaries.en!;
  return loader();
};
