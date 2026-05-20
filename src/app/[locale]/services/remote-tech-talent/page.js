import Description from "@/app/components/services/Description";
import Hero from "@/app/components/services/Hero";
import Link from "next/link";
import { getTranslations, setRequestLocale } from "next-intl/server";

const RemoteTechTalent = async ({ params }) => {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('remoteTalent');

  return (
    <>
      <Hero title={t('heroTitle')} />
      <Description title={t('descTitle')} description={t('descText')} />
      
      {/* Network Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-center">
            {t('networkTitle')}
          </h2>
          <p className="text-slate-600 text-lg max-w-4xl mx-auto text-center leading-relaxed">
            {t('networkDesc')}
          </p>
          
          <div className="mt-12">
            <h3 className="text-2xl font-semibold mb-6 text-center">
              {t('bestForTitle')}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
              {[
                t('bestFor1'),
                t('bestFor2'),
                t('bestFor3'),
                t('bestFor4'),
                t('bestFor5'),
              ].map((item, idx) => (
                <div key={idx} className="bg-white rounded-xl p-6 text-center shadow-sm">
                  <div className="text-orange-500 font-semibold">{item}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="w-full flex justify-center mb-8 md:mb-10 lg:mb-14 px-4 md:px-6 py-8">
        <Link
          href="https://wa.me/6282313271338?text=Hello%2C%20I%27m%20interested%20in%20your%20services.%20I%20came%20from%20your%20website."
          className="bg-[#FF761A] text-center text-white text-base md:text-lg font-light px-6 md:px-8 lg:px-12 py-3 md:py-4 rounded-xl hover:bg-blue-600 transition-colors w-full md:w-auto"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t('ctaButton')}
        </Link>
      </div>
    </>
  );
};

export default RemoteTechTalent;
