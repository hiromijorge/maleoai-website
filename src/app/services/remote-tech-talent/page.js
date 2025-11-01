import Description from "@/app/components/services/Description";
import Hero from "@/app/components/services/Hero";
import Link from "next/link";

const RemoteTechTalent = () => {
  return (
    <>
      <Hero title="Remote Tech Talent Outsourcing" />
      <Description
        title="MALEO offers Tech Talent Outsourcing to help businesses save 50-70% on hiring costs for mid to senior-level engineers. "
        description="MALEO offers you get access to top-tier talent from Indonesia while maintaining quality and efficiency. Each outsourced talent comes with a dedicated Project Manager to streamline communication, monitor progress, and ensure smooth collaboration. Additionally, we provide performance reviews every three months to guarantee consistent results and alignment with your business goals."
      />
      <div className="w-full flex justify-center mb-8 md:mb-10 lg:mb-14 px-4 md:px-6">
        <Link
          href="https://wa.me/6282313271338?text=Hello%2C%20I%27m%20interested%20in%20your%20services.%20I%20came%20from%20your%20website."
          className="bg-[#FF761A] text-center text-white text-base md:text-lg font-light px-6 md:px-8 lg:px-12 py-3 md:py-4 rounded-xl hover:bg-blue-600 transition-colors w-full md:w-auto"
          target="_blank"
          rel="noopener noreferrer"
        >
          Get Started with Top-Tier Talent
        </Link>
      </div>
    </>
  );
};

export default RemoteTechTalent;
