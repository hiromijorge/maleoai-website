import Image from "next/image";
import Link from "next/link";
import Description from "../components/services/Description";
import Hero from "../components/services/Hero";
import TechOverview from "../components/services/TechOverview";
import { portfolios } from "./portfolioData";

export const metadata = {
  title: "Portfolio - Proven AI Solutions & Success Stories | Maleo AI",
  description:
    "Explore proven AI solutions that solve real business challenges. From field operations automation to customer service chatbots, deepfake detection, business intelligence, and legal document analysis across industries.",
  keywords:
    "AI portfolio, proven AI solutions, business automation, AI implementation, operational automation, customer engagement AI, deepfake detection, data intelligence, legal document AI, AI case studies, digital transformation",
  openGraph: {
    title: "Portfolio - Proven AI Solutions & Success Stories | Maleo AI",
    description:
      "Discover proven AI implementations that transform workflows and empower teams. Solutions designed to reduce costs, improve efficiency, and create measurable impact across manufacturing, hospitality, media, and enterprise sectors.",
    type: "website",
    url: "https://maleoai.com/portfolio",
  },
  alternates: {
    languages: {
      en: "https://maleoai.com/portfolio",
      id: "https://maleoai.com/id/portfolio",
    },
  },
};

const Portfolio = () => {
  return (
    <div className="min-h-screen">
      <Hero title="Our Portfolio" />

      {/* Description Section */}
      <Description
        title="Proven AI Solutions"
        description="At Maleo AI, we don't just build technology, we deliver solutions that solve real business challenges. Our portfolio showcases AI implementations across industries, from operational automation and customer engagement to content verification and data intelligence."
        subdescription="Each project is designed with a clear purpose, to reduce costs, improve efficiency, and create measurable impact. Explore how we've transformed workflows and empowered teams with intelligent systems tailored to their unique needs."
      />

      {/* Portfolio Section */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-10 md:mb-16">
            What We’ve Delivered
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mb-8">
            {portfolios.slice(0, 3).map((portfolio, idx) => (
              <div
                key={idx}
                className="bg-gray-50 rounded-lg p-8 flex flex-col"
              >
                <div className="w-full h-48 flex items-center justify-center mb-6">
                  <Image
                    src={portfolio.image}
                    alt={portfolio.title}
                    width={800}
                    height={600}
                    className="object-contain w-full h-full"
                  />
                </div>
                <h3 className="text-xl font-semibold text-[#FF6B2C] mb-2">
                  {portfolio.title}
                </h3>
                <p className="text-sm text-gray-500 mb-4">
                  {portfolio.subtitle}
                </p>
                <p className="text-gray-600 text-sm mb-6 flex-grow">
                  {portfolio.overview}
                </p>
                <div className="mt-auto pt-4">
                  <Link
                    href={portfolio.link}
                    className="text-[#FF6B2C] bg-white border border-[#FF6B2C] hover:bg-[#FF6B2C] hover:text-white transition-colors duration-200 px-8 py-3 rounded-lg w-full inline-block text-center"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 max-w-[66.666%] mx-auto">
            {portfolios.slice(3).map((portfolio, idx) => (
              <div
                key={idx + 3}
                className="bg-gray-50 rounded-lg p-8 flex flex-col"
              >
                <div className="w-full h-48 flex items-center justify-center mb-6">
                  <Image
                    src={portfolio.image}
                    alt={portfolio.title}
                    width={800}
                    height={600}
                    className="object-contain w-full h-full"
                  />
                </div>
                <h3 className="text-xl font-semibold text-[#FF6B2C] mb-2">
                  {portfolio.title}
                </h3>
                <p className="text-sm text-gray-500 mb-4">
                  {portfolio.subtitle}
                </p>
                <p className="text-gray-600 text-sm mb-6 flex-grow">
                  {portfolio.overview}
                </p>
                <div className="mt-auto pt-4">
                  <Link
                    href={portfolio.link}
                    className="text-[#FF6B2C] bg-white border border-[#FF6B2C] hover:bg-[#FF6B2C] hover:text-white transition-colors duration-200 px-8 py-3 rounded-lg w-full inline-block text-center"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Overview Section */}
      <TechOverview language="en" />

      {/* Final CTA Section */}
      <section className="bg-[#FF6B2C] text-white py-16 md:py-32">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight mb-4">
              It's Time to Unlock the True Potential of Your Business with AI
            </h2>
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-white/90 text-base md:text-lg mb-6 md:mb-8 leading-relaxed">
              The future isn't waiting, it's happening now. With AI, you have
              the power to revolutionize your operations, delight your
              customers, and dominate your market. Don't let outdated processes
              hold you back.
            </p>

            <Link
              href="https://wa.me/6282313271338?text=Hello%2C%20I%27m%20interested%20in%20your%20services.%20I%20came%20from%20your%20website."
              target="_blank"
              rel="noopener noreferrer"
              className="font-light bg-[#00A0E4] hover:bg-[#3B82F6]/90 text-white py-3 md:py-4 px-6 md:px-8 text-base md:text-lg rounded-lg w-fit"
            >
              Let's Build Your Powered Future with AI
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
