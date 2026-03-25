import { getRequestConfig } from 'next-intl/server';
import { Locale, defaultLocale } from './config';

export default getRequestConfig(async ({ requestLocale }) => {
  // This typically corresponds to the `[locale]` segment
  let locale = await requestLocale as Locale;
  
  // Validate locale
  if (!locale || !['en', 'id'].includes(locale)) {
    locale = defaultLocale;
  }

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default
  };
});
