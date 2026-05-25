'use client';

import { useState } from 'react';
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import LeadModal from "@/app/components/LeadModal";
import { trackCTA, trackServiceInterest } from "@/lib/analytics";

export default function Home() {
  const locale = useLocale();
  const t = useTranslations('home');
  const tHero = useTranslations('hero');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState('pilot');

  const openPilotModal = () => {
    trackCTA('start_pilot', 'hero_section');
    setModalType('pilot');
    setIsModalOpen(true);
  };

  const openConsultationModal = () => {
    trackCTA('schedule_consultation', 'cta_section');
    setModalType('consultation');
    setIsModalOpen(true);
  };

  const handleServiceClick = (serviceName) => {
    trackServiceInterest(serviceName);
  };

  return (
    <div className="w-full overflow-hidden">
      {/* Lead Capture Modal */}
      <LeadModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        formType={modalType}
      />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/robot-background.jpeg"
            alt="AI Technology Background"
            fill
            className="object-cover"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-slate-900/70 to-orange-950/60" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-orange-500/20 via-transparent to-transparent" />
        </div>

        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8 pt-20">
          {/* Tag */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8 animate-fade-in-up">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-white/90 text-sm font-medium">{tHero('badge')}</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in-up delay-100">
            {tHero('title')}
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-white/80 mb-10 max-w-3xl mx-auto font-light animate-fade-in-up delay-200">
            {tHero('subtitle')}
          </p>

          {/* Pain Points */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-12 animate-fade-in-up delay-300">
            <div className="flex items-center gap-2 text-white/90">
              <FontAwesomeIcon icon={faCheckCircle} className="text-orange-400 w-5 h-5" />
              <span className="text-sm sm:text-base">{tHero('point1')}</span>
            </div>
            <div className="flex items-center gap-2 text-white/90">
              <FontAwesomeIcon icon={faCheckCircle} className="text-orange-400 w-5 h-5" />
              <span className="text-sm sm:text-base">{tHero('point2')}</span>
            </div>
            <div className="flex items-center gap-2 text-white/90">
              <FontAwesomeIcon icon={faCheckCircle} className="text-orange-400 w-5 h-5" />
              <span className="text-sm sm:text-base">{tHero('point3')}</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up delay-400">
            <button
              onClick={openPilotModal}
              className="group relative overflow-hidden bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-2xl shadow-orange-500/30 hover:shadow-orange-500/50 transition-all duration-300 hover:-translate-y-1"
            >
              <span className="relative z-10 flex items-center gap-2">
                {tHero('ctaPrimary')}
                <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </button>
            <Link
              href={`/${locale}/portfolio`}
              onClick={() => trackCTA('view_case_studies', 'hero_section', `/${locale}/portfolio`)}
              className="group flex items-center gap-2 text-white px-8 py-4 rounded-full font-medium text-lg border border-white/30 hover:bg-white/10 transition-all duration-300"
            >
              {tHero('ctaSecondary')}
              <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </Link>
          </div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <svg className="w-6 h-6 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* Data Support Section - Statistics */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Stat 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{t('stat1Title')}</h3>
                  <p className="text-slate-600 mb-4">{t('stat1Desc')}</p>
                  <a 
                    href="https://www.bcg.com/publications/2025/are-you-generating-value-from-ai-the-widening-gap"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-600 text-sm font-medium hover:underline inline-flex items-center gap-1"
                  >
                    {t('viewSource')}
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{t('stat2Title')}</h3>
                  <p className="text-slate-600 mb-4">{t('stat2Desc')}</p>
                  <a 
                    href="https://www.mckinsey.com/capabilities/tech-and-ai/our-insights/superagency-in-the-workplace-empowering-people-to-unlock-ais-full-potential-at-work"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-600 text-sm font-medium hover:underline inline-flex items-center gap-1"
                  >
                    {t('viewSource')}
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who Are We Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-orange-600 font-semibold text-sm uppercase tracking-wider">{t('whoWeAreTag')}</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mt-4">
              {t('whoWeAreTitle')}
            </h2>
            <p className="text-slate-600 text-lg max-w-3xl mx-auto mt-4">
              {t('whoWeAreDesc')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { key: 'coreTeam', icon: '👥' },
              { key: 'specialistBench', icon: '🎯' },
              { key: 'strategicOversight', icon: '📊' },
              { key: 'outcome', icon: '🚀' },
            ].map((item) => (
              <div key={item.key} className="bg-slate-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all duration-500 border border-transparent hover:border-orange-200">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{t(`${item.key}Title`)}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{t(`${item.key}Desc`)}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-slate-700 font-medium mb-6">{t('whoWeAreClosing')}</p>
            <Link
              href={`/${locale}/about`}
              className="inline-flex items-center gap-2 text-orange-600 font-semibold hover:gap-3 transition-all"
            >
              {t('knowMoreAboutUs')}
              <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-20 bg-slate-900 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white">{t('clientsTitle')}</h2>
          </div>
        </div>

        {/* Client Logos Marquee */}
        <div className="relative w-full">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-slate-900 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-slate-900 to-transparent z-10 pointer-events-none" />

          <div className="flex animate-marquee">
            {[
              { name: 'Cork Protocol', logo: '/assets/companies/Cork.jpeg' },
              { name: 'MapTrack', logo: '/assets/companies/MapTrack.jpeg' },
              { name: 'Syncorp AI', logo: '/assets/companies/Syncorp.svg' },
              { name: 'Training Notebook', logo: '/assets/companies/TTN.svg' },
              { name: 'WangDataMarket', logo: '/assets/companies/WangDataMarket.svg' },
              { name: 'Cork Protocol', logo: '/assets/companies/Cork.jpeg' },
              { name: 'MapTrack', logo: '/assets/companies/MapTrack.jpeg' },
              { name: 'Syncorp AI', logo: '/assets/companies/Syncorp.svg' },
              { name: 'Training Notebook', logo: '/assets/companies/TTN.svg' },
              { name: 'WangDataMarket', logo: '/assets/companies/WangDataMarket.svg' },
            ].map((client, idx) => (
              <div key={idx} className="flex-shrink-0 mx-4 w-48 md:w-56 h-24 relative bg-white rounded-xl shadow-sm">
                <Image
                  src={client.logo}
                  alt={client.name}
                  fill
                  className="object-contain p-4"
                  sizes="224px"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-orange-100 text-orange-700 text-sm font-semibold rounded-full mb-4">
              {t('ourServices')}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              {t('servicesTitle')}
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              {t('servicesSubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: '⚡',
                titleKey: 'service1Title',
                descKey: 'service1Desc',
                href: `/${locale}/services/ai-solutions`,
                serviceName: 'ai_automation'
              },
              {
                icon: '🔍',
                titleKey: 'service2Title',
                descKey: 'service2Desc',
                href: `/${locale}/services/geo`,
                serviceName: 'geo'
              },
              {
                icon: '💻',
                titleKey: 'service3Title',
                descKey: 'service3Desc',
                href: `/${locale}/services/web-app-development`,
                serviceName: 'web_dev'
              },
              {
                icon: '🎓',
                titleKey: 'service4Title',
                descKey: 'service4Desc',
                href: `/${locale}/services/ai-training`,
                serviceName: 'ai_training'
              },
              {
                icon: '🌍',
                titleKey: 'service5Title',
                descKey: 'service5Desc',
                href: `/${locale}/services/remote-tech-talent`,
                serviceName: 'remote_talent'
              },
            ].map((feature, idx) => (
              <Link
                key={idx}
                href={feature.href}
                onClick={() => handleServiceClick(feature.serviceName)}
                className="group relative bg-slate-50 rounded-2xl p-8 hover:bg-white transition-all duration-500 border border-transparent hover:border-orange-200 hover:shadow-2xl hover:shadow-orange-500/10"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-orange-600 transition-colors">
                  {t(feature.titleKey)}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">{t(feature.descKey)}</p>
                <div className="flex items-center text-orange-600 font-semibold text-sm">
                  {t('exploreService')}
                  <svg className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-orange-100 text-orange-700 text-sm font-semibold rounded-full mb-4">
              {t('whyChooseUs')}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900">
              {t('whyChooseTitle')}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: '🎯', key: 'founderFirst', color: 'from-orange-500 to-orange-600' },
              { icon: '✅', key: 'pilotFirst', color: 'from-blue-500 to-blue-600' },
              { icon: '🤝', key: 'accountable', color: 'from-green-500 to-green-600' },
            ].map((item) => (
              <div key={item.key} className="group text-center p-8 bg-white rounded-2xl hover:shadow-xl transition-all duration-500">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} text-white text-3xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{t(`${item.key}Title`)}</h3>
                <p className="text-slate-600 leading-relaxed">{t(`${item.key}Desc`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-orange-600 font-semibold text-sm uppercase tracking-wider">{t('testimonialsTag')}</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mt-4">
              {t('testimonialsTitle')}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-slate-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-500">
              <div className="flex items-center gap-4 mb-6">
                <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src="/assets/clients/Lachlan McRitchie - Maptrack Australia.jpg"
                    alt="Lachlan McRitchie"
                    fill
                    className="object-cover"
                    sizes="64px"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">{t('testimonial1Name')}</h4>
                  <p className="text-slate-600 text-sm">{t('testimonial1Title')}</p>
                </div>
              </div>
              <p className="text-slate-700 leading-relaxed italic">
                &ldquo;{t('testimonial1Text')}&rdquo;
              </p>
              <div className="mt-4 text-orange-600 font-medium">🇦🇺 Australia</div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-slate-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-500">
              <div className="flex items-center gap-4 mb-6">
                <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src="/assets/clients/David Stancel - Cork Protocol.jpg"
                    alt="David Stancel"
                    fill
                    className="object-cover"
                    sizes="64px"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">{t('testimonial2Name')}</h4>
                  <p className="text-slate-600 text-sm">{t('testimonial2Title')}</p>
                </div>
              </div>
              <p className="text-slate-700 leading-relaxed italic">
                &ldquo;{t('testimonial2Text')}&rdquo;
              </p>
              <div className="mt-4 text-orange-600 font-medium">🇺🇸 United States</div>
            </div>
          </div>

          <div className="text-center mt-12">
            <button
              onClick={openPilotModal}
              className="inline-flex items-center gap-2 bg-orange-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-orange-600 transition-colors"
            >
              {t('joinThem')}
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Article Recommendation Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-orange-600 font-semibold text-sm uppercase tracking-wider">{t('articleRecTag')}</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mt-4">
              {t('articleRecTitle')}
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto mt-4">
              {t('articleRecSubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Article 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100">
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                {t('article1Title')}
              </h3>
              <Link
                href={`/${locale}/insights/byteplus-startup-connect-bali`}
                className="inline-flex items-center text-orange-600 font-semibold hover:gap-3 transition-all gap-2"
              >
                {t('readMore')}
                <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>

            {/* Article 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100">
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                {t('article2Title')}
              </h3>
              <Link
                href={`/${locale}/insights/ai-implementation-companies-strategic-approach`}
                className="inline-flex items-center text-orange-600 font-semibold hover:gap-3 transition-all gap-2"
              >
                {t('readMore')}
                <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href={`/${locale}/insights`}
              className="inline-flex items-center gap-2 text-orange-600 font-semibold hover:gap-3 transition-all"
            >
              {t('exploreAllInsights')}
              <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-orange-100 text-orange-700 text-sm font-semibold rounded-full mb-4">
              {t('faqTag')}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900">
              {t('faqTitle')}
            </h2>
          </div>

          <div className="space-y-4">
            {[
              { q: 'faq1Q', a: 'faq1A' },
              { q: 'faq2Q', a: 'faq2A' },
              { q: 'faq3Q', a: 'faq3A' },
              { q: 'faq4Q', a: 'faq4A' },
              { q: 'faq5Q', a: 'faq5A' },
            ].map((faq, idx) => (
              <details key={idx} className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <h3 className="font-semibold text-slate-900 pr-4">{t(faq.q)}</h3>
                  <span className="flex-shrink-0 w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center group-open:rotate-180 transition-transform">
                    <svg className="w-5 h-5 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <div className="px-6 pb-6 text-slate-600 leading-relaxed">
                  {t(faq.a)}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500 via-orange-600 to-red-600" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-30" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            {t('finalCtaTitle')}
          </h2>
          <p className="text-white/90 text-lg mb-10 max-w-2xl mx-auto">
            {t('finalCtaDesc')}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={openPilotModal}
              className="group bg-white text-orange-600 px-8 py-4 rounded-full font-semibold text-lg shadow-2xl hover:shadow-white/20 transition-all duration-300 hover:-translate-y-1"
            >
              <span className="flex items-center gap-2">
                {t('startPilot')}
                <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </button>
            <a
              href="https://wa.me/6282313271338?text=Hello%2C%20I%27m%20interested%20in%20scheduling%20a%20discovery%20call"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackCTA('schedule_discovery_call', 'final_cta', 'whatsapp')}
              className="text-white px-8 py-4 rounded-full font-medium text-lg border-2 border-white/30 hover:bg-white/10 transition-all duration-300"
            >
              {t('scheduleDiscovery')}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
