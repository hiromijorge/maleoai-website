import Description from "@/app/components/services/Description";
import Hero from "@/app/components/services/Hero";
import {
  faCircleXmark,
  faClock,
  faRotate,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { portfolios } from "../portfolioData";

export const metadata = {
  title:
    "AI Digital Supervisor - WhatsApp-Based Field Operations Automation | Maleo AI",
  description:
    "WhatsApp-based AI assistant that automates daily checklists, SOP compliance, and performance tracking. Get objective performance data, behavior analytics, and real-time dashboards for construction, manufacturing, and hospitality teams.",
  keywords:
    "AI supervisor, field operations automation, WhatsApp AI assistant, SOP compliance, performance tracking, objective performance data, behavior analytics, real-time dashboard, construction management, manufacturing automation, hospitality operations, task verification",
  openGraph: {
    title:
      "AI Digital Supervisor - Objective Performance Data Through WhatsApp",
    description:
      "Automate daily supervision with AI-powered task verification, behavior analytics, and real-time accountability. Make objective decisions for promotions, bonuses, or penalties based on actual employee behavior data.",
    type: "article",
    url: "https://maleoai.com/portfolio/ai-digital-supervisor",
  },
  alternates: {
    languages: {
      en: "https://maleoai.com/portfolio/ai-digital-supervisor",
      id: "https://maleoai.com/id/portfolio/ai-digital-supervisor",
    },
  },
};

const AIDigitalSupervisor = () => {
  const currentPath = "/portfolio/ai-digital-supervisor";
  const otherPortfolios = portfolios.filter(
    (portfolio) => portfolio.link !== currentPath
  );

  const problems = [
    {
      icon: faCircleXmark,
      title: "Missed Tasks and Fake Checklists",
      description:
        "Inconsistent reports and fake checklists make it hard to trust what is actually getting done.",
    },
    {
      icon: faClock,
      title: "Manual Verification Waste",
      description:
        "Supervisors lose hours chasing proof of work and double checking every task by hand.",
    },
    {
      icon: faRotate,
      title: "Training Does Not Stick",
      description:
        "Mistakes keep happening because training does not carry over to real onsite behavior.",
    },
  ];

  const solutions = [
    {
      title: "Task Checklists Automatically Sent and Logged",
      description:
        "Daily tasks are sent to team members automatically, and every action is tracked in real time.",
    },
    {
      title: "Verified Proof of Completion",
      description:
        "Supervisors confirm task completion using real photo or video evidence.",
    },
    {
      title: "AI Performance Dashboards for Objective Reviews",
      description:
        "Dashboards show completion rates, delays, and performance scores, giving managers instant visibility.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Hero title="AI Digital Supervisor" />

      <Description
        title="Smarter Field Operations. Real-Time Accountability."
        description="A WhatsApp based AI assistant that automates daily checklists, SOP compliance, and performance tracking. Designed for construction, manufacturing, and hospitality teams where consistency and proof of work matter."
        subdescription="Key capabilities include task reminders, photo and video verification, behavior analytics, AR based visual tutorials for onsite guidance, and a real time dashboard for managers to monitor and approve progress."
      />

      {/* Problem Section */}
      <div className="bg-gray-50 py-8 md:py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 md:mb-6 text-center">
            Managing distributed teams is chaotic
          </h2>
          <p className="text-gray-600 text-lg mb-8 md:mb-12 text-center max-w-3xl mx-auto">
            Decision makers feel it as lost time, poor visibility, and lack of
            control.
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
          How AI Digital Supervisor Solves This
        </h2>
        <p className="text-gray-600 text-lg mb-8 md:mb-12 text-center max-w-3xl mx-auto">
          Automate daily supervision through WhatsApp, no new app required.
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
              src="https://www.youtube.com/embed/OgkdVWe-U8Y?si=M85LZVPWJaMja8ok"
              title="AI Digital Supervisor Demo"
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
            Unlike typical task trackers or attendance apps, this system is
            built to understand every role in each specific industry. It gives
            managers and business owners an objective view of performance based
            on real employee behavior data, and it all runs on WhatsApp.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed max-w-4xl mt-4">
            Your team does not need to learn a new app, so adoption is instant
            and friction free. As a manager or business owner, you get a
            dashboard that helps you make the right decisions for the right
            people, whether it is a promotion, a bonus, or a penalty.
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
              See How Maleo Clients Automate Supervision with AI
            </h2>
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-white/90 text-base md:text-lg mb-6 md:mb-8 leading-relaxed">
              Stop wasting hours on manual verification. Join construction,
              manufacturing, and hospitality teams who've cut supervision time
              by 40% while maintaining 100% accountability. Your field
              operations deserve better than spreadsheets and guesswork.
            </p>

            <Link
              href="https://wa.me/6282313271338?text=Hello%2C%20I%27m%20interested%20in%20AI%20Digital%20Supervisor.%20I%20came%20from%20your%20website."
              target="_blank"
              rel="noopener noreferrer"
              className="font-light bg-[#00A0E4] hover:bg-[#3B82F6]/90 text-white py-3 md:py-4 px-6 md:px-8 text-base md:text-lg rounded-lg w-fit"
            >
              Book a 20-Minute Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIDigitalSupervisor;
