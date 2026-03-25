"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";

const Footer = () => {
  const t = useTranslations('footer');
  const locale = useLocale();

  const navigationItems = [
    { nameKey: "navHome", path: `/${locale}` },
    { nameKey: "navAbout", path: `/${locale}/about` },
    { nameKey: "navServices", path: `/${locale}/services/ai-solutions` },
    { nameKey: "navPortfolio", path: `/${locale}/portfolio` },
    { nameKey: "navInsights", path: `/${locale}/insights` },
    { nameKey: "navContact", path: `/${locale}/contact` },
  ];

  const serviceItems = [
    { nameKey: "svcAI", path: `/${locale}/services/ai-solutions` },
    { nameKey: "svcWeb", path: `/${locale}/services/web-app-development` },
    { nameKey: "svcTalent", path: `/${locale}/services/remote-tech-talent` },
    { nameKey: "svcTraining", path: `/${locale}/services/ai-training` },
  ];

  const socialLinks = [
    {
      name: "WhatsApp",
      icon: "/assets/whatsapp-icon.png",
      href: "https://wa.me/6282313271338?text=Hello%2C%20I%27m%20interested%20in%20your%20services"
    },
    {
      name: "Email",
      icon: "/assets/email-icon.png",
      href: "mailto:connect@maleoai.com"
    },
    {
      name: "Instagram",
      icon: "/assets/instagram-icon.png",
      href: "https://www.instagram.com/maleo.ai/"
    },
    {
      name: "LinkedIn",
      icon: "/assets/linkedin-icon.png",
      href: "https://www.linkedin.com/company/maleo-ai"
    },
    {
      name: "Facebook",
      icon: "/assets/facebook-icon.png",
      href: "https://facebook.com/maleoai"
    },
  ];

  return (
    <footer className="bg-slate-950 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-500/10 via-transparent to-transparent" />

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand Column */}
            <div className="lg:col-span-1">
              <Link href={`/${locale}`} className="flex items-center gap-3 mb-6">
                <div className="relative w-12 h-12">
                  <Image
                    src="/assets/main-logo.svg"
                    alt="Maleo AI"
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="font-bold text-2xl">
                  Maleo<span className="text-orange-500">.</span>AI
                </span>
              </Link>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                {t('description')}
              </p>

              <div className="flex items-center gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center hover:bg-orange-500 transition-colors duration-300 group"
                    aria-label={social.name}
                  >
                    <Image
                      src={social.icon}
                      alt={social.name}
                      width={20}
                      height={20}
                      className="opacity-70 group-hover:opacity-100 transition-opacity"
                    />
                  </a>
                ))}
              </div>
            </div>

            {/* Navigation Column */}
            <div>
              <h4 className="font-semibold text-lg mb-6">{t('navigation')}</h4>
              <ul className="space-y-3">
                {navigationItems.map((item) => (
                  <li key={item.nameKey}>
                    <Link
                      href={item.path}
                      className="text-slate-400 hover:text-orange-400 transition-colors duration-300 text-sm"
                    >
                      {t(item.nameKey)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services Column */}
            <div>
              <h4 className="font-semibold text-lg mb-6">{t('services')}</h4>
              <ul className="space-y-3">
                {serviceItems.map((item) => (
                  <li key={item.nameKey}>
                    <Link
                      href={item.path}
                      className="text-slate-400 hover:text-orange-400 transition-colors duration-300 text-sm"
                    >
                      {t(item.nameKey)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Column */}
            <div>
              <h4 className="font-semibold text-lg mb-6">{t('getInTouch')}</h4>
              <div className="space-y-4">
                <div>
                  <p className="text-slate-400 text-sm mb-1">{t('location')}</p>
                  <p className="text-white text-sm">
                    Awan Connection Cafe & Coworking Space<br />
                    Jl. Kayu Manis, Canggu, Bali 80351
                  </p>
                </div>
                <div>
                  <p className="text-slate-400 text-sm mb-1">{t('email')}</p>
                  <a
                    href="mailto:connect@maleoai.com"
                    className="text-white text-sm hover:text-orange-400 transition-colors"
                  >
                    connect@maleoai.com
                  </a>
                </div>
                <div>
                  <p className="text-slate-400 text-sm mb-1">{t('phone')}</p>
                  <a
                    href="https://wa.me/6282313271338"
                    className="text-white text-sm hover:text-orange-400 transition-colors"
                  >
                    +62 823-1327-1338
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-slate-500 text-sm">
                {t('copyright', { year: new Date().getFullYear() })}
              </p>
              <div className="flex items-center gap-6">
                <span className="text-slate-500 text-sm">{t('privacyPolicy')}</span>
                <span className="text-slate-500 text-sm">{t('termsOfService')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
