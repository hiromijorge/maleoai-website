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
import { portfolios } from "../portfolioData";

export const metadata = {
  title: "AI Legal Document Assistant - AI-Assisted Contract Review | Maleo AI",
  description:
    "Intelligent legal document checker that helps analyze contracts, reduce review time, and ensure regulatory alignment. AI assists with clause extraction, risk tagging, and version comparison while keeping humans in control of final decisions.",
  keywords:
    "AI legal assistant, contract review automation, legal document analysis, AI contract comparison, compliance support, legal tech, document AI, contract intelligence, human oversight, audit ready compliance, clause extraction, risk analysis",
  openGraph: {
    title: "AI Legal Document Assistant - Faster Review with Human Oversight",
    description:
      "AI-assisted legal document review that helps teams work significantly faster while maintaining human control. Cut review time by 50%, reduce errors, and ensure audit-ready compliance.",
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
  const currentPath = "/portfolio/ai-assistant-legal-documents";
  const otherPortfolios = portfolios.filter(
    (portfolio) => portfolio.link !== currentPath
  );

  const problems = [
    {
      icon: faCopy,
      title: "Inconsistent Document Versions",
      description:
        "Multiple versions circulating at once create confusion and raise compliance risks.",
    },
    {
      icon: faEyeSlash,
      title: "Hidden Risk Clauses",
      description:
        "Important red flags buried deep in lengthy documents often go unnoticed until it is too late.",
    },
    {
      icon: faCodeCompare,
      title: "Manual Comparison Under Pressure",
      description:
        "Teams spend hours comparing contracts line by line while deadlines close in.",
    },
  ];

  const solutions = [
    {
      title: "Clause Extraction and Risk Tagging",
      description:
        "Automatically identifies and flags risky clauses, liabilities, and unusual terms for faster validation.",
    },
    {
      title: "Contract Comparison (Old vs New)",
      description:
        "Quickly compares versions and highlights changes, deletions, and additions with full context.",
    },
    {
      title: "Automatic Summaries and Red Flag Highlights",
      description:
        "Generates concise summaries with critical issues clearly highlighted for human review.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Hero title="AI Assistant for Legal Documents" />

      <Description
        title="Imagine having an intelligent legal document checker that helps you analyze every contract, reduce review time, and ensure documents align with the right regulations."
        description="This assistant helps your legal team work significantly faster, reduce human error, and maintain audit ready compliance across all documents. It supports human reviewers, helping them quickly verify hundreds of clauses and paraphrases that would otherwise take days to check manually."
        subdescription="Powered by advanced natural language processing trained on legal terminology and contract structures, the AI extracts key clauses, flags potential risks, compares document versions side by side, and provides consistent insights across your contract portfolio. It transforms slow, repetitive review work into fast, structured analysis while keeping humans in control of every final decision."
      />

      {/* Problem Section */}
      <div className="bg-gray-50 py-8 md:py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 md:mb-6 text-center">
            The Problems
          </h2>
          <h3 className="text-xl md:text-2xl font-semibold mb-4 text-center text-[#FF6B2C]">
            Legal Teams Lose Hours to Repetitive Checks
          </h3>
          <p className="text-gray-600 text-lg mb-8 md:mb-12 text-center max-w-3xl mx-auto">
            Manual reviews under tight deadlines often lead to missed risks and
            compliance gaps.
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
          How the Legal AI Assistant Solves This
        </h2>
        <h3 className="text-xl md:text-2xl font-semibold mb-4 text-center text-[#FF6B2C]">
          Smart Reading and Instant Summaries
        </h3>
        <p className="text-gray-600 text-lg mb-8 md:mb-12 text-center max-w-3xl mx-auto">
          Reads, summarizes, and flags issues in seconds, giving your team a
          clear starting point for review.
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
            Built for legal and regulated industries, this AI assistant helps
            teams work faster without sacrificing accuracy. It assists with
            compliance but cannot guarantee it, as legal review always requires
            human judgment.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed max-w-4xl mt-4">
            It does not replace lawyers or paralegals; it helps them focus on
            high value decisions while the AI handles the repetitive analysis.
            Documents can be processed locally or securely in a private cloud
            environment, ensuring data control and privacy.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed max-w-4xl mt-4">
            In short, it significantly reduces review time, cuts down on errors,
            and gives your team the clarity to make faster, more confident
            decisions without overpromising or giving up human oversight.
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
