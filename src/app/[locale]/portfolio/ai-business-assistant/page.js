import Description from "@/app/components/services/Description";
import Hero from "@/app/components/services/Hero";
import {
  faChainBroken,
  faExclamationTriangle,
  faFileLines,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { portfolios } from "../portfolioData";

export const metadata = {
  title:
    "AI Business Assistant - AI-Based Knowledge for Decision Makers | Maleo AI",
  description:
    "Predictive intelligence assistant that unifies scattered data from production, logistics, and sales. Get 20-40% faster decision making, 25% fewer unplanned downtimes, and real-time cross-department visibility with automated analytics in plain language.",
  keywords:
    "AI business intelligence, predictive analytics, business automation, data-driven decisions, operational intelligence, AI analytics, supply chain optimization, business assistant AI, decision making, cross-department visibility, predictive alerts",
  openGraph: {
    title:
      "AI Business Assistant - Predictive Intelligence for Decision Makers",
    description:
      "Make faster, data-driven decisions with AI that unifies all your operational data. Get predictive alerts, automated analytics in plain language, and complete visibility across departments.",
    type: "article",
    url: "https://maleoai.com/portfolio/ai-business-assistant",
  },
  alternates: {
    languages: {
      en: "https://maleoai.com/portfolio/ai-business-assistant",
      id: "https://maleoai.com/id/portfolio/ai-business-assistant",
    },
  },
};

const AIBusinessAssistant = () => {
  const currentPath = "/portfolio/ai-business-assistant";
  const otherPortfolios = portfolios.filter(
    (portfolio) => portfolio.link !== currentPath
  );

  const problems = [
    {
      icon: faExclamationTriangle,
      title: "Unexpected Disruptions",
      description:
        "Critical issues often surface only after the damage is done because insights arrive too late.",
    },
    {
      icon: faFileLines,
      title: "Manual Reporting Delays",
      description:
        "Teams spend days compiling reports when decisions should be made in hours.",
    },
    {
      icon: faChainBroken,
      title: "Fragmented Data Chaos",
      description:
        "When urgent issues arise and information is scattered, delayed decisions can put your entire business at risk.",
    },
  ];

  const solutions = [
    {
      title: "Predictive Alerts",
      description:
        "Receive warnings before issues occur, allowing you to take proactive action instead of reacting after the fact.",
    },
    {
      title: "Automated Analytics in Plain Language",
      description:
        "Ask complex questions and get clear, contextual answers instantly.",
    },
    {
      title: "Real Time Cross Department Visibility",
      description:
        "Unified dashboards learn your business patterns and provide intelligent, actionable recommendations.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Hero title="AI Business Assistant" />

      <Description
        title="Predictive Intelligence for Your Operations"
        description="Reduce downtime, optimize maintenance cycles, and make faster, data driven decisions across your entire supply chain."
        subdescription="By connecting scattered data from production, logistics, and sales into one conversational interface, this AI assistant becomes your always available analyst. It generates custom reports on demand, spots emerging trends before they turn into problems, and delivers strategic recommendations that keep your business agile, competitive, and making the right decisions."
      />

      {/* Problem Section */}
      <div className="bg-gray-50 py-8 md:py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 md:mb-6 text-center">
            The Problems
          </h2>
          <h3 className="text-xl md:text-2xl font-semibold mb-4 text-center text-[#FF6B2C]">
            Insights Arrive Too Late
          </h3>
          <p className="text-gray-600 text-lg mb-8 md:mb-12 text-center max-w-3xl mx-auto">
            Businesses collect huge amounts of data, but slow decision cycles
            and disconnected information cost time and money.
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
          How the AI Business Assistant Solves This
        </h2>
        <p className="text-gray-600 text-lg mb-4 text-center max-w-3xl mx-auto">
          It unifies all your data across production, logistics, sales, and
          operations into one conversational intelligence layer.
        </p>
        <p className="text-gray-600 text-lg font-semibold mb-8 md:mb-12 text-center max-w-3xl mx-auto">
          Impact: Twenty to forty percent faster decision making, twenty five
          percent fewer unplanned downtimes, and complete visibility across
          departments.
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
            Unlike traditional BI dashboards, this assistant understands
            context. Ask, "Show performance variance for Q2 and predict next
            quarter's risk," and it responds with both the data and the
            reasoning behind it. It speaks your industry language and
            continuously learns from your historical patterns.
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
              Bring Predictive Intelligence to Your Operations
            </h2>
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-white/90 text-base md:text-lg mb-6 md:mb-8 leading-relaxed">
              Your competitors are making faster decisions with AI-powered
              insights while you're still waiting for last week's reports.
              Leading enterprises have cut downtime by 25% and accelerated
              decision-making by 40%. The question isn't whether to adopt
              AI—it's whether you can afford to wait.
            </p>

            <Link
              href="https://wa.me/6282313271338?text=Hello%2C%20I%27m%20interested%20in%20AI%20Business%20Assistant.%20I%20came%20from%20your%20website."
              target="_blank"
              rel="noopener noreferrer"
              className="font-light bg-[#00A0E4] hover:bg-[#3B82F6]/90 text-white py-3 md:py-4 px-6 md:px-8 text-base md:text-lg rounded-lg w-fit"
            >
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIBusinessAssistant;
