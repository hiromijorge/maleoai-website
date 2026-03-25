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
      <div className="w-full flex justify-center mb-8 md:mb-10 lg:mb-14 px-4 md:px-6">
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
