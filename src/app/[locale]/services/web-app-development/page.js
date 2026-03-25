import Description from "@/app/components/services/Description";
import Hero from "@/app/components/services/Hero";
import IconCard from "@/app/components/services/IconCard";
import TechOverview from "@/app/components/services/TechOverview";
import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";

const WebAppDevelopment = async ({ params }) => {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('webDev');

  const workflows = [
    { icon: "/assets/store-ico.png", title: t('workflow1Title'), description: t('workflow1Desc') },
    { icon: "/assets/restaurant-ico.png", title: t('workflow2Title'), description: t('workflow2Desc') },
    { icon: "/assets/real_estate_agent-ico.png", title: t('workflow3Title'), description: t('workflow3Desc') },
    { icon: "/assets/real_estate_agent-ico.png", title: t('workflow4Title'), description: t('workflow4Desc') },
    { icon: "/assets/store-ico.png", title: t('workflow5Title'), description: t('workflow5Desc') },
  ];

  return (
    <div className="min-h-screen">
      <Hero title={t('heroTitle')} />

      <Description title={t('descTitle')} description={t('atMaleo')} />

      <div className="bg-gray-50 py-8 md:py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-8 md:mb-12">{t('workflowsTitle')}</h2>
          <div className="flex flex-col gap-4 md:gap-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
              {workflows.slice(0, 3).map((workflow, index) => (
                <IconCard key={index} index={index} workflow={workflow} />
              ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8">
              {workflows.slice(3).map((workflow, index) => (
                <div key={index + 3} className="bg-[#F8F8F8] p-6 md:p-8 rounded-lg">
                  <Image src={workflow.icon} alt={workflow.title} width={40} height={40} className="text-orange-500 mb-4" />
                  <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-orange-500">{workflow.title}</h3>
                  <p className="text-gray-600 text-sm">{workflow.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <TechOverview centered={true} />

      <div className="container mx-auto px-4 py-8 md:py-12 lg:py-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-center mb-8 md:mb-12">{t('projectSummaryTitle')}</h2>
        <div className="relative w-full mb-6 md:mb-8">
          <Image src="/assets/project-summary-img.png" alt="Training Notebook App Mockup" width={500} height={300} className="w-full h-auto object-contain" priority />
        </div>
        <div className="max-w-4xl mr-auto px-2">
          <h3 className="text-2xl md:text-3xl font-semibold mb-3 md:mb-4">{t('projectName')}</h3>
          <p className="text-gray-600 leading-relaxed text-sm md:text-base">{t('projectDesc')}</p>
        </div>
      </div>

      <div className="bg-[#F47B3F] text-white py-12 md:py-16 lg:py-24 text-center px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 md:mb-8 whitespace-pre-line">{t('ctaTitle')}</h2>
          <a
            href="https://wa.me/6282313271338?text=Hello%2C%20I%27m%20interested%20in%20your%20services.%20I%20came%20from%20your%20website."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#3B9BF7] text-white text-base md:text-lg font-light px-8 md:px-12 py-3 md:py-4 rounded-xl hover:bg-blue-600 transition-colors"
          >
            {t('ctaButton')}
          </a>
        </div>
      </div>
    </div>
  );
};

export default WebAppDevelopment;
