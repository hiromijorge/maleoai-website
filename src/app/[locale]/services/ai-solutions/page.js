import Description from "@/app/components/services/Description";
import Hero from "@/app/components/services/Hero";
import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";

const AISolutions = async ({ params }) => {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('aiSolutions');

  const devServices = [
    { icon: "/assets/store-ico.png", title: t('aiDev1Title'), description: t('aiDev1Desc') },
    { icon: "/assets/restaurant-ico.png", title: t('aiDev2Title'), description: t('aiDev2Desc') },
    { icon: "/assets/real_estate_agent-ico.png", title: t('aiDev3Title'), description: t('aiDev3Desc') },
  ];

  const mlSolutions = [
    { image: "/assets/ai-solutions-img-1.png", title: t('ml1Title'), description: t('ml1Desc') },
    { image: "/assets/ai-solutions-img-2.png", title: t('ml2Title'), description: t('ml2Desc') },
    { image: "/assets/ai-solutions-img-3.png", title: t('ml3Title'), description: t('ml3Desc') },
  ];

  return (
    <div className="w-full">
      <Hero title={t('heroTitle')} />

      <Description title={t('descTitle')} description={t('descText')} />

      <div className="container mx-auto py-16 px-4">
        <h2 className="text-4xl md:text-5xl font-semibold mb-8 text-start">{t('aiDevTitle')}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {devServices.map((service, index) => (
            <div key={index} className="text-start bg-[#F8F8F8] p-8 rounded-lg">
              <div className="mb-6">
                <Image src={service.icon} alt={service.title} width={40} height={40} className="mr-auto" />
              </div>
              <h3 className="text-xl font-medium mb-4 text-[#FF6B2C]">{service.title}</h3>
              <p className="text-gray-600 text-base">{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-[#001B29] text-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-semibold mb-4">{t('mlTitle')}</h2>
          <p className="text-lg md:text-xl mb-12">{t('mlSubtitle')}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {mlSolutions.map((solution, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden p-4 md:p-6">
                <Image src={solution.image} alt={solution.title} width={600} height={200} className="w-full h-[150px] md:h-[200px] object-cover rounded-lg" />
                <div className="py-4 md:py-6">
                  <h3 className="text-[#FF6B2C] text-2xl md:text-3xl font-medium mb-2">{solution.title}</h3>
                  <p className="text-gray-600 text-base md:text-lg">{solution.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-[#FF761A] py-16 md:py-32">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="max-w-[600px] text-left">
            <h2 className="text-white text-3xl md:text-5xl font-normal mb-4">{t('ctaTitle')}</h2>
          </div>
          <div className="flex flex-col items-start gap-4">
            <p className="text-white text-base md:text-lg">{t('ctaDesc')}</p>
            <a
              href="https://wa.me/6282313271338?text=Hello%2C%20I%27m%20interested%20in%20your%20services.%20I%20came%20from%20your%20website."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto bg-[#00A0E4] text-white px-8 py-4 rounded-lg font-light text-lg hover:bg-[#4499d1] transition-colors"
            >
              {t('ctaButton')}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AISolutions;
