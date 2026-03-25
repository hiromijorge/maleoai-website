import Description from "@/app/components/services/Description";
import Hero from "@/app/components/services/Hero";
import IconCard from "@/app/components/services/IconCard";
import { getTranslations, setRequestLocale } from "next-intl/server";

const AiTraining = async ({ params }) => {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('aiTraining');

  const trainingFeatures = [
    { icon: "/assets/store-ico.png", title: t('feature1Title'), description: t('feature1Desc') },
    { icon: "/assets/store-ico.png", title: t('feature2Title'), description: t('feature2Desc') },
    { icon: "/assets/restaurant-ico.png", title: t('feature3Title'), description: t('feature3Desc') },
    { icon: "/assets/real_estate_agent-ico.png", title: t('feature4Title'), description: t('feature4Desc') },
  ];

  return (
    <>
      <Hero title={t('heroTitle')} />
      <Description description={t('descText')} />
      <div id="features-section" className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {trainingFeatures.map((feature, index) => (
            <IconCard key={index} workflow={feature} />
          ))}
        </div>
        <div className="text-center mt-8 sm:mt-10 lg:mt-12">
          <a
            href="https://wa.me/6282313271338?text=Hello%2C%20I%27m%20interested%20in%20your%20services.%20I%20came%20from%20your%20website."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-orange-500 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg hover:bg-orange-600 transition-colors text-sm sm:text-base"
          >
            {t('ctaButton')}
          </a>
        </div>
      </div>
    </>
  );
};

export default AiTraining;
