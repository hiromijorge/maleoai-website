"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations, useLocale } from "next-intl";
import { useState, useEffect, useRef } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const t = useTranslations('nav');
  const locale = useLocale();
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const servicesRef = useRef(null);
  const productsRef = useRef(null);
  const languageRef = useRef(null);

  // Check if current page has hero section (needs transparent navbar initially)
  const hasHeroSection = pathname === `/${locale}` || pathname === `/${locale}/`;

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      // For pages without hero, always show scrolled state
      // For homepage, show scrolled state after scrolling
      setIsScrolled(!hasHeroSection || window.scrollY > 20);
    };
    
    // Initial check
    handleScroll();
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasHeroSection]);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target)) {
        setIsServicesOpen(false);
      }
      if (productsRef.current && !productsRef.current.contains(event.target)) {
        setIsProductsOpen(false);
      }
      if (languageRef.current && !languageRef.current.contains(event.target)) {
        setIsLanguageOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
    setIsProductsOpen(false);
    setIsLanguageOpen(false);
  }, [pathname]);

  const isIndonesian = locale === 'id';
  
  const getLocaleUrl = (targetLocale) => {
    const currentPath = pathname.replace(`/${locale}`, '') || '/';
    return `/${targetLocale}${currentPath}`;
  };

  const navLinks = [
    { name: t('home'), href: "/" },
    { name: t('about'), href: "/about" },
    { name: t('portfolio'), href: "/portfolio" },
    { name: t('insights'), href: "/insights" },
    { name: t('contact'), href: "/contact" },
  ];

  const isActive = (href) => {
    const localizedPath = `/${locale}${href}`;
    if (href === "/") return pathname === `/${locale}` || pathname === `/${locale}/`;
    return pathname?.startsWith(localizedPath);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? "bg-white/95 backdrop-blur-xl shadow-lg shadow-black/5" 
            : hasHeroSection 
              ? "bg-transparent"
              : "bg-white/95 backdrop-blur-xl shadow-lg shadow-black/5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href={`/${locale}`} className="flex items-center gap-3 group">
              <div className="relative w-10 h-10 transition-transform duration-300 group-hover:scale-110">
                <Image
                  src="/assets/main-logo.svg"
                  alt="Maleo AI"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <span className={`font-bold text-xl tracking-tight transition-colors duration-300 ${
                isScrolled || !hasHeroSection ? "text-slate-900" : "text-white"
              }`}>
                Maleo<span className="text-orange-500">.</span>AI
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={`/${locale}${link.href}`}
                  className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full ${
                    isActive(link.href)
                      ? (isScrolled || !hasHeroSection)
                        ? "text-orange-600 bg-orange-50" 
                        : "text-white bg-white/20"
                      : (isScrolled || !hasHeroSection)
                        ? "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                        : "text-white/80 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {link.name}
                  {isActive(link.href) && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-orange-500 rounded-full" />
                  )}
                </Link>
              ))}

              {/* Services Dropdown */}
              <div className="relative" ref={servicesRef}>
                <button
                  onClick={() => {
                    setIsServicesOpen(!isServicesOpen);
                    setIsProductsOpen(false);
                    setIsLanguageOpen(false);
                  }}
                  className={`flex items-center gap-1 px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full ${
                    pathname?.startsWith(`/${locale}/services`)
                      ? (isScrolled || !hasHeroSection)
                        ? "text-orange-600 bg-orange-50" 
                        : "text-white bg-white/20"
                      : (isScrolled || !hasHeroSection)
                        ? "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                        : "text-white/80 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {t('services')}
                  <svg
                    className={`w-4 h-4 transition-transform duration-300 ${isServicesOpen ? "rotate-180" : ""}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Services Mega Menu */}
                <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[640px] transition-all duration-300 ${
                  isServicesOpen 
                    ? "opacity-100 translate-y-0 pointer-events-auto" 
                    : "opacity-0 -translate-y-4 pointer-events-none"
                }`}>
                  <div className="bg-white rounded-2xl shadow-2xl shadow-black/10 border border-slate-100 p-2 overflow-hidden">
                    <div className="grid grid-cols-2 gap-1">
                      {[
                        {
                          name: t('aiSolutions'),
                          href: `/${locale}/services/ai-solutions`,
                          desc: t('aiSolutionsDesc'),
                          icon: "🤖"
                        },
                        {
                          name: t('webAppDev'),
                          href: `/${locale}/services/web-app-development`,
                          desc: t('webAppDevDesc'),
                          icon: "💻"
                        },
                        {
                          name: t('remoteTalent'),
                          href: `/${locale}/services/remote-tech-talent`,
                          desc: t('remoteTalentDesc'),
                          icon: "🌐"
                        },
                        {
                          name: t('aiTraining'),
                          href: `/${locale}/services/ai-training`,
                          desc: t('aiTrainingDesc'),
                          icon: "🎓"
                        },
                      ].map((service) => (
                        <Link
                          key={service.name}
                          href={service.href}
                          className="flex items-start gap-4 p-4 rounded-xl hover:bg-orange-50 transition-all duration-300 group"
                        >
                          <span className="text-2xl">{service.icon}</span>
                          <div>
                            <h3 className="font-semibold text-slate-900 group-hover:text-orange-600 transition-colors">
                              {service.name}
                            </h3>
                            <p className="text-sm text-slate-500 mt-1">{service.desc}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Products Dropdown */}
              <div className="relative" ref={productsRef}>
                <button
                  onClick={() => {
                    setIsProductsOpen(!isProductsOpen);
                    setIsServicesOpen(false);
                    setIsLanguageOpen(false);
                  }}
                  className={`flex items-center gap-1 px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full ${
                    pathname?.startsWith(`/${locale}/products`)
                      ? (isScrolled || !hasHeroSection)
                        ? "text-orange-600 bg-orange-50" 
                        : "text-white bg-white/20"
                      : (isScrolled || !hasHeroSection)
                        ? "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                        : "text-white/80 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {t('products')}
                  <svg
                    className={`w-4 h-4 transition-transform duration-300 ${isProductsOpen ? "rotate-180" : ""}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                <div className={`absolute top-full right-0 mt-4 w-72 transition-all duration-300 ${
                  isProductsOpen 
                    ? "opacity-100 translate-y-0 pointer-events-auto" 
                    : "opacity-0 -translate-y-4 pointer-events-none"
                }`}>
                  <div className="bg-white rounded-2xl shadow-2xl shadow-black/10 border border-slate-100 p-2">
                    <Link
                      href={`/${locale}/products/chat-assistly-ai`}
                      className="flex items-start gap-4 p-4 rounded-xl hover:bg-orange-50 transition-all duration-300 group"
                    >
                      <span className="text-2xl">💬</span>
                      <div>
                        <h3 className="font-semibold text-slate-900 group-hover:text-orange-600 transition-colors">
                          Chat Assistly AI
                        </h3>
                        <p className="text-sm text-slate-500 mt-1">{t('chatAssistlyDesc')}</p>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side Actions */}
            <div className="hidden lg:flex items-center gap-3">
              {/* Language Switcher - Available on ALL pages */}
              <div className="relative" ref={languageRef}>
                <button
                  onClick={() => {
                    setIsLanguageOpen(!isLanguageOpen);
                    setIsServicesOpen(false);
                    setIsProductsOpen(false);
                  }}
                  className={`flex items-center gap-2 px-3 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    (isScrolled || !hasHeroSection)
                      ? "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                      : "text-white/80 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  <span className="text-lg">{isIndonesian ? "🇮🇩" : "🇬🇧"}</span>
                  <span className="uppercase text-xs tracking-wider">{isIndonesian ? "ID" : "EN"}</span>
                  <svg
                    className={`w-3 h-3 transition-transform duration-300 ${isLanguageOpen ? "rotate-180" : ""}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                <div className={`absolute top-full right-0 mt-3 w-40 transition-all duration-300 ${
                  isLanguageOpen 
                    ? "opacity-100 translate-y-0 pointer-events-auto" 
                    : "opacity-0 -translate-y-4 pointer-events-none"
                }`}>
                  <div className="bg-white rounded-xl shadow-xl shadow-black/10 border border-slate-100 overflow-hidden">
                    <Link
                      href={getLocaleUrl('en')}
                      className={`flex items-center gap-3 px-4 py-3 transition-colors ${
                        !isIndonesian ? "bg-orange-50 text-orange-600" : "hover:bg-slate-50 text-slate-700"
                      }`}
                    >
                      <span className="text-lg">🇬🇧</span>
                      <span className="font-medium">English</span>
                    </Link>
                    <Link
                      href={getLocaleUrl('id')}
                      className={`flex items-center gap-3 px-4 py-3 transition-colors ${
                        isIndonesian ? "bg-orange-50 text-orange-600" : "hover:bg-slate-50 text-slate-700"
                      }`}
                    >
                      <span className="text-lg">🇮🇩</span>
                      <span className="font-medium">Bahasa</span>
                    </Link>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <Link
                href="https://wa.me/6282313271338?text=Hello%2C%20I%27m%20interested%20in%20your%20services"
                target="_blank"
                rel="noopener noreferrer"
                className="relative overflow-hidden group bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-2.5 rounded-full text-sm font-semibold shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 transition-all duration-300 hover:-translate-y-0.5"
              >
                <span className="relative z-10 flex items-center gap-2">
                  {t('bookCall')}
                  <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors ${
                (isScrolled || !hasHeroSection) ? "text-slate-900 hover:bg-slate-100" : "text-white hover:bg-white/10"
              }`}
            >
              <div className="w-6 h-5 relative flex flex-col justify-between">
                <span className={`w-full h-0.5 transition-all duration-300 origin-left ${
                  (isScrolled || !hasHeroSection) ? "bg-slate-900" : "bg-white"
                } ${isMobileMenuOpen ? "rotate-45 translate-x-0.5" : ""}`} />
                <span className={`w-full h-0.5 transition-all duration-300 ${
                  (isScrolled || !hasHeroSection) ? "bg-slate-900" : "bg-white"
                } ${isMobileMenuOpen ? "opacity-0" : ""}`} />
                <span className={`w-full h-0.5 transition-all duration-300 origin-left ${
                  (isScrolled || !hasHeroSection) ? "bg-slate-900" : "bg-white"
                } ${isMobileMenuOpen ? "-rotate-45 translate-x-0.5" : ""}`} />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300 ${
        isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`} onClick={() => setIsMobileMenuOpen(false)} />

      {/* Mobile Menu */}
      <div className={`fixed top-0 right-0 bottom-0 w-[300px] bg-white z-50 lg:hidden transition-transform duration-500 ease-out shadow-2xl ${
        isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
      }`}>
        <div className="flex flex-col h-full">
          {/* Mobile Header */}
          <div className="flex items-center justify-between p-4 border-b border-slate-100">
            <span className="font-bold text-lg text-slate-900">Menu</span>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
            >
              <svg className="w-6 h-6 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Mobile Navigation */}
          <div className="flex-1 overflow-y-auto p-4">
            <div className="space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={`/${locale}${link.href}`}
                  className={`flex items-center px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                    isActive(link.href)
                      ? "bg-orange-50 text-orange-600"
                      : "text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  {link.name}
                </Link>
              ))}

              {/* Mobile Services */}
              <div className="pt-2">
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                    pathname?.startsWith(`/${locale}/services`)
                      ? "bg-orange-50 text-orange-600"
                      : "text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  {t('services')}
                  <svg className={`w-5 h-5 transition-transform duration-300 ${isServicesOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${isServicesOpen ? "max-h-96 mt-2" : "max-h-0"}`}>
                  <div className="pl-4 space-y-1">
                    {[
                      { name: t('aiSolutions'), href: `/${locale}/services/ai-solutions` },
                      { name: t('webAppDev'), href: `/${locale}/services/web-app-development` },
                      { name: t('remoteTalent'), href: `/${locale}/services/remote-tech-talent` },
                      { name: t('aiTraining'), href: `/${locale}/services/ai-training` },
                    ].map((service) => (
                      <Link
                        key={service.name}
                        href={service.href}
                        className="flex items-center px-4 py-2 text-sm text-slate-600 hover:text-orange-600 transition-colors"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Mobile Products */}
              <div className="pt-2">
                <button
                  onClick={() => setIsProductsOpen(!isProductsOpen)}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                    pathname?.startsWith(`/${locale}/products`)
                      ? "bg-orange-50 text-orange-600"
                      : "text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  {t('products')}
                  <svg className={`w-5 h-5 transition-transform duration-300 ${isProductsOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${isProductsOpen ? "max-h-32 mt-2" : "max-h-0"}`}>
                  <div className="pl-4 space-y-1">
                    <Link
                      href={`/${locale}/products/chat-assistly-ai`}
                      className="flex items-center px-4 py-2 text-sm text-slate-600 hover:text-orange-600 transition-colors"
                    >
                      Chat Assistly AI
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Footer */}
          <div className="p-4 border-t border-slate-100 space-y-3">
            {/* Mobile Language Switcher */}
            <div className="flex gap-2">
              <Link
                href={getLocaleUrl('en')}
                className={`flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-medium transition-all ${
                  !isIndonesian
                    ? "bg-orange-500 text-white"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                <span className="text-lg">🇬🇧</span>
                English
              </Link>
              <Link
                href={getLocaleUrl('id')}
                className={`flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-medium transition-all ${
                  isIndonesian
                    ? "bg-orange-500 text-white"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                <span className="text-lg">🇮🇩</span>
                Bahasa
              </Link>
            </div>

            <Link
              href="https://wa.me/6282313271338?text=Hello%2C%20I%27m%20interested%20in%20your%20services"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg shadow-orange-500/30"
            >
              {t('bookCall')}
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
