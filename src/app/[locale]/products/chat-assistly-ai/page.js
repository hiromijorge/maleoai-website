import Description from "@/app/components/services/Description";
import Hero from "@/app/components/services/Hero";
import Image from "next/image";
import Link from "next/link";
import { getTranslations, setRequestLocale } from "next-intl/server";

const ChatAssistlyAI = async ({ params }) => {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('chatAssistly');

  const benefits = [
    { icon: "/assets/discount.png", title: t('benefit1Title'), description: t('benefit1Desc') },
    { icon: "/assets/mobile_friendly.png", title: t('benefit2Title'), description: t('benefit2Desc') },
    { icon: "/assets/support_agent.png", title: t('benefit3Title'), description: t('benefit3Desc') },
  ];

  return (
    <div>
      <Hero title={t('heroTitle')} />

      <Description title={t('descTitle')} description={t('descText')} />

      {/* Why Assistly Section */}
      <div className="container mx-auto px-4 py-8 md:py-12 lg:py-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-8 md:mb-12 lg:mb-16 text-center">
          {t('whyAssistly')}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {benefits.map((item, index) => (
            <div key={index} className="text-start bg-[#F8F8F8] p-8 rounded-lg">
              <div className="mb-6">
                <Image src={item.icon} alt={item.title} width={40} height={40} className="mr-auto" />
              </div>
              <h3 className="text-xl font-medium mb-4 text-[#FF6B2C]">{item.title}</h3>
              <p className="text-gray-600 text-base">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Key Benefits Section */}
      <div className="container mx-auto px-4 py-8 md:py-12 lg:py-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-8 md:mb-12 lg:mb-16 text-center">
          {t('keyBenefitsTitle')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {[
            { key: 'kb1', svg: "M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8zm.5-13H11v6l5.2 3.2.8-1.3-4.5-2.7V7z" },
            { key: 'kb2', svg: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" },
            { key: 'kb3', svg: "M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z" },
          ].map(({ key, svg }) => (
            <div key={key} className="bg-[#F8F8F8] p-8 rounded-lg">
              <div className="text-[#FF6B2C] mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d={svg} /></svg>
              </div>
              <h3 className="text-xl font-medium mb-4 text-[#FF6B2C]">{t(`${key}Title`)}</h3>
              <p className="text-gray-600">{t(`${key}Desc`)}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {[
            { key: 'kb4', svg: "M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h18v14zm-7-2h2V7h-4v2h2z" },
            { key: 'kb5', svg: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-7-2h2V7h-4v2h2z" },
          ].map(({ key, svg }) => (
            <div key={key} className="bg-[#F8F8F8] p-8 rounded-lg">
              <div className="text-[#FF6B2C] mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d={svg} /></svg>
              </div>
              <h3 className="text-xl font-medium mb-4 text-[#FF6B2C]">{t(`${key}Title`)}</h3>
              <p className="text-gray-600">{t(`${key}Desc`)}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { key: 'kb6', svg: "M13 10h-3v3h-2v-3H5v-2h3V5h2v3h3v2zm8.5-2.5v9.99l-.01.01H16V17h-1v-3H9v-3h6V9h1v2h2.5z" },
            { key: 'kb7', svg: "M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" },
          ].map(({ key, svg }) => (
            <div key={key} className="bg-[#F8F8F8] p-8 rounded-lg">
              <div className="text-[#FF6B2C] mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d={svg} /></svg>
              </div>
              <h3 className="text-xl font-medium mb-4 text-[#FF6B2C]">{t(`${key}Title`)}</h3>
              <p className="text-gray-600">{t(`${key}Desc`)}</p>
            </div>
          ))}
        </div>

        <div className="w-full flex justify-center mt-12">
          <Link
            href="https://wa.me/6282313271338?text=Hello%2C%20I%27m%20interested%20in%20your%20services.%20I%20came%20from%20your%20website."
            className="bg-[#FF761A] text-center text-white text-base md:text-lg font-light px-6 md:px-8 lg:px-12 py-3 md:py-4 rounded-xl hover:bg-blue-600 transition-colors w-full md:w-auto"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t('ctaButton')}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ChatAssistlyAI;
