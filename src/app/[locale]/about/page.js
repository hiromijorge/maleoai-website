import Image from "next/image";
import Description from "@/app/components/services/Description";
import Hero from "@/app/components/services/Hero";
import TechOverview from "@/app/components/services/TechOverview";
import { getTranslations } from "next-intl/server";
import { setRequestLocale } from "next-intl/server";

const About = async ({ params }) => {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('about');

  const expertiseItems = [
    { icon: "/assets/store-ico.png", title: t('exp1Title'), description: t('exp1Desc') },
    { icon: "/assets/restaurant-ico.png", title: t('exp2Title'), description: t('exp2Desc') },
    { icon: "/assets/real_estate_agent-ico.png", title: t('exp3Title'), description: t('exp3Desc') },
    { icon: "/assets/real_estate_agent-ico.png", title: t('exp4Title'), description: t('exp4Desc') },
  ];

  const teamMembers = [
    { name: t('member1Name'), title: t('member1Title'), description: t('member1Desc') },
    { name: t('member2Name'), title: t('member2Title'), description: t('member2Desc') },
    { name: t('member3Name'), title: t('member3Title'), description: t('member3Desc') },
  ];

  return (
    <div className="w-full">
      <Hero title={t('heroTitle')} />

      <Description
        title={t('companyTitle')}
        description={t('companyDesc')}
        subdescription={t('companySubdesc')}
      />

      <div className="bg-[#0088CC] mt-4 py-4 px-4">
        <p className="text-xl md:text-2xl lg:text-3xl font-light tracking-wide text-white text-center">
          {t('partnerText')}
        </p>
      </div>

      <div className="container mx-auto px-4 py-8 md:py-12 lg:py-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-8 md:mb-12 lg:mb-16 text-center">
          {t('ourExpertise')}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {expertiseItems.map((item, index) => (
            <div key={index} className="text-start bg-[#F8F8F8] p-8 rounded-lg">
              <div className="mb-6">
                <Image src={item.icon} alt={item.title} width={40} height={40} className="mr-auto" />
              </div>
              <h3 className="text-xl font-medium mb-4 text-[#FF6B2C] whitespace-pre-line">{item.title}</h3>
              <p className="text-gray-600 text-base">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      <TechOverview />

      <div className="container mx-auto px-4 py-8 md:py-12 lg:py-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-8 md:mb-12 lg:mb-16 text-center">
          {t('meetOurTeam')}
        </h2>
        <h3 className="text-xl md:text-2xl font-medium mb-8 md:mb-12 text-center">{t('techTeam')}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 mb-12 md:mb-16">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-start">
              <h4 className="text-xl font-semibold mb-2 text-[#FF6B2C]">{member.name}</h4>
              <p className="text-lg font-medium mb-4">{member.title}</p>
              <p className="text-gray-600 text-base leading-relaxed">{member.description}</p>
            </div>
          ))}
        </div>

        <h3 className="text-xl md:text-2xl font-medium mb-8 md:mb-12 text-center">{t('advisor')}</h3>
        <div className="max-w-2xl mx-auto px-4">
          <div className="text-start">
            <h4 className="text-xl font-semibold mb-2 text-[#FF6B2C]">{t('advisorName')}</h4>
            <p className="text-lg font-medium mb-4">{t('advisorTitle')}</p>
            <p className="text-gray-600 text-base leading-relaxed">{t('advisorDesc')}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
