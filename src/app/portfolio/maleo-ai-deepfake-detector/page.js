import Description from "@/app/components/services/Description";
import Hero from "@/app/components/services/Hero";
import {
  faMagnifyingGlass,
  faTriangleExclamation,
  faVideoSlash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { portfolios } from "../portfolioData";

export const metadata = {
  title:
    "Maleo AI Deepfake Detector - AI-Generated Media Verification | Maleo AI",
  description:
    "Stay protected from hoaxes and misleading information. Verify content and detect AI-generated media before it spreads false information with advanced deep learning analysis of voice, image, and video authenticity.",
  keywords:
    "deepfake detection, AI-generated media, hoax detection, video verification, synthetic media detection, AI authenticity, misinformation prevention, media verification, content verification, forensic analysis, public trust, enterprise security",
  openGraph: {
    title: "Maleo AI Deepfake Detector - Verify Content Before It Spreads",
    description:
      "Protect your brand from AI-generated hoaxes and misleading information. Real-time AI content checker with multi-modal analysis and privacy-first architecture for public and enterprise use.",
    type: "article",
    url: "https://maleoai.com/portfolio/maleo-ai-deepfake-detector",
  },
  alternates: {
    languages: {
      en: "https://maleoai.com/portfolio/maleo-ai-deepfake-detector",
      id: "https://maleoai.com/id/portfolio/maleo-ai-deepfake-detector",
    },
  },
};

const MaleoAIDeepfakeDetector = () => {
  const currentPath = "/portfolio/maleo-ai-deepfake-detector";
  const otherPortfolios = portfolios.filter(
    (portfolio) => portfolio.link !== currentPath
  );

  const problems = [
    {
      icon: faVideoSlash,
      title: "Deepfakes Redefine Misinformation",
      description:
        "Synthetic media can now fool human perception, making truth verification nearly impossible.",
    },
    {
      icon: faTriangleExclamation,
      title: "Brand & Public Trust at Risk",
      description:
        "Organizations face daily risks to credibility with no reliable verification method.",
    },
    {
      icon: faMagnifyingGlass,
      title: "No Trustworthy Detection",
      description:
        "Most solutions are either too expensive or lack the accuracy needed for critical decisions.",
    },
  ];

  const solutions = [
    {
      title: "Real Time AI Content Checker",
      description:
        "Quickly identify AI generated images, videos, and audio with high accuracy.",
    },
    {
      title: "Multi Modal Analysis",
      description:
        "Check authenticity across voice, image, and video using advanced AI pattern recognition.",
    },
    {
      title: "Privacy First Architecture",
      description:
        "All data is processed either locally or securely in the cloud, with full transparency and audit logs.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Hero title="Maleo AI Deepfake Detector" />

      <Description
        title="Stay Protected from Hoaxes and Misleading Information"
        description="Maleo AI Deepfake detector helps you verify content and detect AI generated media before it spreads false information."
        subdescription="Using advanced deep learning models trained on millions of synthetic samples, Maleo AI Deepfake detector analyzes subtle visual clues, audio inconsistencies, and timing anomalies that are impossible to catch with the human eye. Within seconds, it provides a confidence score and a detailed forensic report, giving you a reliable first line of defense against AI driven disinformation and manipulation."
      />

      {/* Problem Section */}
      <div className="bg-gray-50 py-8 md:py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 md:mb-6 text-center">
            Deepfakes Are Redefining Misinformation
          </h2>
          <p className="text-gray-600 text-lg mb-8 md:mb-12 text-center max-w-3xl mx-auto">
            Brands, journalists, and organizations face daily risks to public
            trust with no reliable verification method.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {problems.map((problem, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm">
                <div className="mb-6">
                  <FontAwesomeIcon
                    icon={problem.icon}
                    className="text-[#FF6B2C] w-12 h-12"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-[#FF6B2C]">
                  {problem.title}
                </h3>
                <p className="text-gray-600">{problem.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Solution Section */}
      <div className="container mx-auto px-4 py-8 md:py-12 lg:py-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 md:mb-6 text-center">
          How Maleo Deepfake Detector works
        </h2>
        <p className="text-gray-600 text-lg mb-8 md:mb-12 text-center max-w-3xl mx-auto">
          Verify authenticity across audio, image, and video with advanced AI
          analysis.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {solutions.map((solution, index) => (
            <div key={index} className="bg-[#F8F8F8] p-8 rounded-lg">
              <div className="text-[#FF6B2C] mb-4">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-[#FF6B2C]">
                {solution.title}
              </h3>
              <p className="text-gray-600">{solution.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Demo Video Section */}
      <div className="container mx-auto px-4 py-8 md:py-12 lg:py-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-8 md:mb-12 text-center">
          Product Demo
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
              src="https://www.youtube.com/embed/G1NqhoSZqtg"
              title="Maleo AI Deepfake Detector Demo"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>

      {/* Differentiation Section */}
      <div className="bg-gray-50 py-8 md:py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 md:mb-8">
            What Makes It Different
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed max-w-4xl">
            Designed for both public and enterprise use, Maleo AI provides
            transparent and explainable AI decisions with compliance grade
            accuracy that meets regulatory standards.
          </p>
        </div>
      </div>

      {/* More Portfolio Section */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-10 md:mb-16">
            More From Our Work
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {otherPortfolios.map((portfolio, idx) => (
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#FF6B2C] text-white py-16 md:py-32">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight mb-4">
              Verify Every Voice and Face, Protect Your Credibility
            </h2>
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-white/90 text-base md:text-lg mb-6 md:mb-8 leading-relaxed">
              In an era where deepfakes can destroy reputations overnight, trust
              is your most valuable asset. Media organizations, educational
              institutions, and security teams are protecting their communities
              with real-time verification. Don't wait for a crisis to act.
            </p>

            <Link
              href="https://wa.me/6282313271338?text=Hello%2C%20I%27m%20interested%20in%20Maleo%20AI%20Deepfake%20Detector.%20I%20came%20from%20your%20website."
              target="_blank"
              rel="noopener noreferrer"
              className="font-light bg-[#00A0E4] hover:bg-[#3B82F6]/90 text-white py-3 md:py-4 px-6 md:px-8 text-base md:text-lg rounded-lg w-fit"
            >
              Request Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MaleoAIDeepfakeDetector;
