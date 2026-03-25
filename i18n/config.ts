export type Locale = (typeof locales)[number];

export const locales = ['en', 'id'] as const;
export const defaultLocale: Locale = 'en';

export const localePrefix = 'always'; // always show /en/ or /id/
