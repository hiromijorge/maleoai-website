import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { Plus_Jakarta_Sans } from "next/font/google";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export function generateStaticParams() {
  return [
    { locale: 'en' },
    { locale: 'id' }
  ];
}

export const dynamic = 'force-static';

export default async function LocaleLayout({ children, params }) {
  const locale = (await params).locale;

  // Required for static generation with next-intl
  setRequestLocale(locale);

  // Load messages for this locale
  let messages = {};
  try {
    messages = await getMessages();
  } catch (e) {
    messages = {};
  }

  return (
    <html lang={locale} className={plusJakartaSans.variable} suppressHydrationWarning>
      <body className={`${plusJakartaSans.className} antialiased`} suppressHydrationWarning>
        <NextIntlClientProvider messages={messages} locale={locale}>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
