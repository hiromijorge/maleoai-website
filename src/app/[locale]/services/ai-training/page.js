import Description from "@/app/components/services/Description";
import Hero from "@/app/components/services/Hero";
import Link from "next/link";
import { getTranslations, setRequestLocale } from "next-intl/server";

const AITraining = async ({ params }) => {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('aiTraining');

  return (
    <>
      <Hero title={t('heroTitle')} />
      
      {/* Subtitle Section */}
      <section className="py-8 bg-slate-50">
        <div className="container mx-auto px-4">
          <p className="text-xl md:text-2xl text-slate-700 text-center max-w-4xl mx-auto italic">
            {t('subtitle')}
          </p>
        </div>
      </section>

      <Description description={t('challengeTitle')} />

      {/* Challenge Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <p className="text-slate-600 text-lg max-w-4xl mx-auto text-center mb-12">
            {t('challengeIntro')}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              { key: 'challenge1', icon: '📊' },
              { key: 'challenge2', icon: '🔒' },
              { key: 'challenge3', icon: '👤' },
              { key: 'challenge4', icon: '💸' },
            ].map((item) => (
              <div key={item.key} className="bg-slate-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{t(`${item.key}Title`)}</h3>
                <p className="text-slate-600">{t(`${item.key}Desc`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 text-center">
            {t('solutionTitle')}
          </h2>
          <p className="text-slate-300 text-lg max-w-4xl mx-auto text-center">
            {t('solutionDesc')}
          </p>
        </div>
      </section>

      {/* Core Offerings Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-center">
            Core Offerings
          </h2>
          
          {/* Workshop */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                {t('workshopTitle')}
              </h3>
              <p className="text-orange-600 font-semibold mb-4">{t('workshopSubtitle')}</p>
              <p className="text-slate-700 mb-6">{t('workshopDesc')}</p>
              <div className="bg-white rounded-xl p-6 mb-4">
                <p className="text-sm font-semibold text-slate-900 mb-2">Who Should Join:</p>
                <p className="text-slate-600 text-sm">{t('workshopAudience')}</p>
              </div>
              <p className="text-slate-600 text-sm">
                <span className="font-semibold">Timeline:</span> {t('workshopDuration')}
              </p>
            </div>
          </div>

          {/* Custom Dev */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                {t('customDevTitle')}
              </h3>
              <p className="text-blue-600 font-semibold mb-4">{t('customDevSubtitle')}</p>
              <p className="text-slate-700">{t('customDevDesc')}</p>
            </div>
          </div>

          {/* Support */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                {t('supportTitle')}
              </h3>
              <p className="text-green-600 font-semibold mb-4">{t('supportSubtitle')}</p>
              <p className="text-slate-700">{t('supportDesc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Different Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-center">
            {t('differenceTitle')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { key: 'difference1', icon: '🌏' },
              { key: 'difference2', icon: '🛠️' },
              { key: 'difference3', icon: '🔑' },
            ].map((item) => (
              <div key={item.key} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 text-center">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{t(`${item.key}Title`)}</h3>
                <p className="text-slate-600">{t(`${item.key}Desc`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Timeline */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-center">
            {t('benefitsTitle')}
          </h2>
          <div className="max-w-5xl mx-auto">
            <div className="space-y-8">
              {/* 0-3 Months */}
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex-shrink-0 w-24 md:w-32">
                  <div className="bg-orange-500 text-white font-bold px-4 py-2 rounded-lg text-center text-sm">
                    0-3 mo
                  </div>
                </div>
                <div className="flex-1 bg-slate-50 rounded-xl p-6">
                  <h4 className="font-bold text-slate-900 mb-2">{t('benefits3Months')}</h4>
                  <p className="text-slate-600">{t('benefits3MonthsDesc')}</p>
                </div>
              </div>

              {/* 3-6 Months */}
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex-shrink-0 w-24 md:w-32">
                  <div className="bg-blue-500 text-white font-bold px-4 py-2 rounded-lg text-center text-sm">
                    3-6 mo
                  </div>
                </div>
                <div className="flex-1 bg-slate-50 rounded-xl p-6">
                  <h4 className="font-bold text-slate-900 mb-2">{t('benefits6Months')}</h4>
                  <p className="text-slate-600">{t('benefits6MonthsDesc')}</p>
                </div>
              </div>

              {/* 6+ Months */}
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex-shrink-0 w-24 md:w-32">
                  <div className="bg-green-500 text-white font-bold px-4 py-2 rounded-lg text-center text-sm">
                    6+ mo
                  </div>
                </div>
                <div className="flex-1 bg-slate-50 rounded-xl p-6">
                  <h4 className="font-bold text-slate-900 mb-2">{t('benefitsBeyond')}</h4>
                  <p className="text-slate-600">{t('benefitsBeyondDesc')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-orange-400 font-semibold text-sm uppercase tracking-wider">Real Implementations</span>
            <h2 className="text-3xl md:text-4xl font-semibold mt-2">
              Case studies
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { key: 'caseStudy1' },
              { key: 'caseStudy2' },
              { key: 'caseStudy3' },
            ].map((item, idx) => (
              <div key={idx} className="bg-slate-800 rounded-2xl p-8 hover:bg-slate-700 transition-all duration-300">
                <h3 className="text-xl font-bold text-orange-400 mb-4">{t(`${item.key}Title`)}</h3>
                <p className="text-slate-300 text-sm">{t(`${item.key}Desc`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-center">
            {t('faqTitle')}
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              { q: 'faq1Q', a: 'faq1A' },
              { q: 'faq2Q', a: 'faq2A' },
              { q: 'faq3Q', a: 'faq3A' },
              { q: 'faq4Q', a: 'faq4A' },
              { q: 'faq5Q', a: 'faq5A' },
              { q: 'faq6Q', a: 'faq6A' },
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

      {/* Free Consultation Section */}
      <section className="py-16 bg-gradient-to-br from-orange-500 via-orange-600 to-red-600">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            {t('freeConsultTitle')}
          </h2>
          <p className="text-white/90 text-lg mb-8">
            {t('freeConsultDesc')}
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-left mb-8">
            <p className="text-white font-medium mb-4">{t('freeConsultContact')}</p>
            <ul className="space-y-2 text-white/90">
              <li>{t('freeConsultForm')}</li>
              <li>{t('freeConsultEmail')}</li>
              <li>{t('freeConsultWhatsapp')}</li>
            </ul>
            <p className="text-white/80 text-sm mt-4">{t('freeConsultResponse')}</p>
          </div>
          <Link
            href={`/${locale}/contact`}
            className="inline-block bg-white text-orange-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl hover:shadow-white/20 transition-all duration-300 hover:-translate-y-1"
          >
            {t('ctaButton')}
          </Link>
        </div>
      </section>
    </>
  );
};

export default AITraining;
