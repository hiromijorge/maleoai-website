import Description from "@/app/components/services/Description";
import Hero from "@/app/components/services/Hero";
import {
  faCodeCompare,
  faCopy,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "AI Legal Document Assistant - Contract Review Automation | Maleo AI",
  description:
    "Intelligent AI assistant that streamlines contract review, comparison, and risk analysis. Cut legal review time by 50% with automated clause extraction, risk tagging, and compliance checking.",
  keywords:
    "AI legal assistant, contract review automation, legal document analysis, AI contract comparison, compliance automation, legal tech, document AI, contract intelligence",
  openGraph: {
    title: "AI Legal Document Assistant - Smart Contract Review",
    description:
      "Automate legal document review with AI-powered clause extraction, risk analysis, and version comparison.",
    type: "article",
    url: "https://maleoai.com/portfolio/ai-assistant-legal-documents",
  },
  alternates: {
    languages: {
      en: "https://maleoai.com/portfolio/ai-assistant-legal-documents",
      id: "https://maleoai.com/id/portfolio/ai-assistant-legal-documents",
    },
  },
};

const AIAssistantLegalDocuments = () => {
  const allPortfolios = [
    {
      title: "AI Digital Supervisor",
      subtitle: "For Field and Operational Teams",
      overview:
        "A WhatsApp-based AI assistant that automates daily checklists, SOP compliance, and performance tracking. Designed for construction, manufacturing, and hospitality teams where consistency and proof of work matter.",
      image: "/assets/ai-digital-supervisor.png",
      link: "/portfolio/ai-digital-supervisor",
    },
    {
      title: "Customer Service Chatbot",
      subtitle: "For Hospitality and Retail",
      overview:
        "An AI chatbot that manages customer inquiries, bookings, and FAQs in English, Chinese, and Indonesian across WhatsApp, Instagram, and your website. Deliver instant and consistent service around the clock — so your team can focus on guests, not inboxes.",
      image: "/assets/customer-service-chatbot.png",
      link: "/portfolio/customer-service-chatbot",
    },
    {
      title: "Maleo AI Deepfake Detector",
      subtitle: "For Media and Public Trust",
      overview:
        "A deepfake detection tool that analyzes voice, image, and video content for authenticity — built for media, education, and cybersecurity applications. Protect your brand and community from misinformation. Verify content before it spreads.",
      image: "/assets/maleo-ai-deepfake-detector.png",
      link: "/portfolio/maleo-ai-deepfake-detector",
    },
    {
      title: "AI Business Assistant",
      subtitle: "Data Insight and Predictive Operations",
      overview:
        "A specialized AI system that consolidates sensor, production, and logistics data into actionable insights. Reduce downtime, optimize maintenance cycles, and make faster, data-driven decisions across the supply chain.",
      image: "/assets/ai-business-assistant.png",
      link: "/portfolio/ai-business-assistant",
    },
    {
      title: "AI Assistant for Legal Documents",
      subtitle: "Smart Review and Compliance",
      overview:
        "An AI-powered assistant that reviews, summarizes, and cross-checks legal or contract documents to accelerate due diligence and compliance reviews. Cut review time by 50%, minimize human error, and maintain audit-ready compliance across all legal documentation.",
      image: "/assets/ai-assistant-for-legal-documents.png",
      link: "/portfolio/ai-assistant-legal-documents",
    },
  ];

  const currentPath = "/portfolio/ai-assistant-legal-documents";
  const otherPortfolios = allPortfolios.filter(
    (portfolio) => portfolio.link !== currentPath
  );

  const problems = [
    {
      icon: faCopy,
      title: "Inconsistent Document Versions",
      description:
        "Multiple versions floating around create confusion and compliance risks in critical deals.",
    },
    {
      icon: faEyeSlash,
      title: "Hidden Risk Clauses",
      description:
        "Important red flags buried deep in lengthy PDFs go unnoticed until it's too late.",
    },
    {
      icon: faCodeCompare,
      title: "Manual Comparison Under Pressure",
      description:
        "Teams waste hours comparing contracts line-by-line while deadlines loom.",
    },
  ];

  const solutions = [
    {
      title: "Clause Extraction & Risk Tagging",
      description:
        "Automatically identify and flag high-risk clauses, liabilities, and non-standard terms.",
    },
    {
      title: "Contract Comparison (Old vs. New)",
      description:
        "Instantly compare versions and highlight changes, deletions, and additions with context.",
    },
    {
      title: "Automatic Summary & Red-Flag Highlights",
      description:
        "Get executive summaries with critical issues highlighted for immediate action.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Hero title="AI Assistant for Legal Documents" />

      <Description
        title="Your contracts deserve more than copy-paste reviews."
        description="Cut review time by 50%, minimize human error, and maintain audit-ready compliance across all legal documentation."
        subdescription="Powered by advanced natural language processing trained on legal terminology and contract structures, this AI assistant instantly extracts key clauses, highlights potential risks, compares document versions side-by-side, and ensures consistency across your contract portfolio. It transforms days of manual review into minutes of intelligent analysis, giving your legal team the confidence to move fast without missing critical details."
      />

      {/* Problem Section */}
      <div className="bg-gray-50 py-8 md:py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 md:mb-6 text-center">
            Legal Teams Lose Hours to Repetitive Checks
          </h2>
          <p className="text-gray-600 text-lg mb-8 md:mb-12 text-center max-w-3xl mx-auto">
            Manual processes under pressure lead to missed risks and compliance
            gaps.
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
          How Legal AI Assistant Solves This
        </h2>
        <p className="text-gray-600 text-lg mb-8 md:mb-12 text-center max-w-3xl mx-auto">
          Read, summarize, and flag issues instantly — like a tireless paralegal
          working 24/7.
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

      {/* Differentiation Section */}
      <div className="bg-gray-50 py-8 md:py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 md:mb-8">
            What Makes It Different
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed max-w-4xl">
            Built for regulated industries — your documents stay private, never
            exported externally. All processing happens in secure, compliant
            environments with full audit trails. Unlike generic document tools,
            this understands legal terminology and industry-specific contract
            structures.
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
              Automate Your Legal Review Securely
            </h2>
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-white/90 text-base md:text-lg mb-6 md:mb-8 leading-relaxed">
              One missed clause can cost millions. Legal teams at leading firms
              have cut review time in half while catching more risks than ever
              before. Your documents stay private, your compliance stays intact,
              and your team stays focused on strategy, not manual
              cross-checking.
            </p>

            <Link
              href="https://wa.me/6282313271338?text=Hello%2C%20I%27m%20interested%20in%20AI%20Assistant%20for%20Legal%20Documents.%20I%20came%20from%20your%20website."
              target="_blank"
              rel="noopener noreferrer"
              className="font-light bg-[#00A0E4] hover:bg-[#3B82F6]/90 text-white py-3 md:py-4 px-6 md:px-8 text-base md:text-lg rounded-lg w-fit"
            >
              Request Private Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIAssistantLegalDocuments;
