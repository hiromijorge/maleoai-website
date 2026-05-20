'use client';

import Hero from "@/app/components/services/Hero";
import Description from "@/app/components/services/Description";
import LeadModal from "@/app/components/LeadModal";
import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { trackCTA } from "@/lib/analytics";

const GEOServices = () => {
  const locale = useLocale();
  const t = useTranslations('geo');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openAuditModal = () => {
    trackCTA('request_geo_audit', 'geo_page');
    setIsModalOpen(true);
  };

  return (
    <div className="w-full">
      <LeadModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        formType="geo_audit"
      />
      
      <Hero title={t('heroTitle')} />

      <Description title={t('descTitle')} description={t('descText')} />

      {/* Why GEO Matters Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-12 text-center">
            {t('whyGeoTitle')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { key: 'whyGeo1', icon: '📈' },
              { key: 'whyGeo2', icon: '🎯' },
              { key: 'whyGeo3', icon: '🚀' },
            ].map((item) => (
              <div key={item.key} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{t(`${item.key}Title`)}</h3>
                <p className="text-slate-600">{t(`${item.key}Desc`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-12 text-center">
            {t('servicesTitle')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              { key: 'service1', icon: '🏗️' },
              { key: 'service2', icon: '🌐' },
              { key: 'service3', icon: '🔗' },
              { key: 'service4', icon: '🔍' },
            ].map((item) => (
              <div key={item.key} className="bg-slate-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all duration-500 border border-transparent hover:border-orange-200">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{t(`${item.key}Title`)}</h3>
                <p className="text-slate-600">{t(`${item.key}Desc`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-12 text-center">
            {t('processTitle')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { key: 'process1', step: '01' },
              { key: 'process2', step: '02' },
              { key: 'process3', step: '03' },
              { key: 'process4', step: '04' },
            ].map((item) => (
              <div key={item.key} className="text-center">
                <div className="text-5xl font-bold text-orange-500 mb-4">{item.step}</div>
                <h3 className="text-xl font-bold mb-3">{t(`${item.key}Title`)}</h3>
                <p className="text-slate-400">{t(`${item.key}Desc`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-orange-500 via-orange-600 to-red-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            {t('ctaTitle')}
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            {t('ctaDesc')}
          </p>
          <button
            onClick={openAuditModal}
            className="bg-white text-orange-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl hover:shadow-white/20 transition-all duration-300 hover:-translate-y-1"
          >
            {t('ctaButton')}
          </button>
        </div>
      </section>
    </div>
  );
};

export default GEOServices;
