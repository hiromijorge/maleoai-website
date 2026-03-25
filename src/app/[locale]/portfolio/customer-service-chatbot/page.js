import Description from "@/app/components/services/Description";
import Hero from "@/app/components/services/Hero";
import {
  faArrowsRotate,
  faCommentSlash,
  faLanguage,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { portfolios } from "../portfolioData";

export const metadata = {
  title: "Maleo AI Chatbot - Custom Multilingual AI Assistant | Maleo AI",
  description:
    "Custom chat assistant that handles inquiries, manages bookings, sends follow-ups, and upsells in English, Mandarin, and Indonesian. Built around your company's needs with 24/7 support across WhatsApp, Instagram, and web.",
  keywords:
    "AI chatbot, custom chat assistant, multilingual chatbot, WhatsApp bot, hospitality chatbot, retail automation, 24/7 customer support, booking automation, follow-up messages, upselling, knowledge base training",
  openGraph: {
    title: "Maleo AI Chatbot - Custom 24/7 Multilingual Support",
    description:
      "Deliver perfect replies around the clock in English, Mandarin, and Indonesian. Custom-built chat assistant that extends your team's reach without hiring extra staff.",
    type: "article",
    url: "https://maleoai.com/portfolio/customer-service-chatbot",
  },
  alternates: {
    languages: {
      en: "https://maleoai.com/portfolio/customer-service-chatbot",
      id: "https://maleoai.com/id/portfolio/customer-service-chatbot",
    },
  },
};

const CustomerServiceChatbot = () => {
  const currentPath = "/portfolio/customer-service-chatbot";
  const otherPortfolios = portfolios.filter(
    (portfolio) => portfolio.link !== currentPath
  );

  const problems = [
    {
      icon: faCommentSlash,
      title: "Missed Messages = Lost Bookings",
      description:
        "Every unanswered WhatsApp message is a potential customer walking away to your competitor.",
    },
    {
      icon: faLanguage,
      title: "Multilingual Chaos",
      description:
        "Staff can't manage conversations in English, Mandarin, and Indonesian at scale.",
    },
    {
      icon: faArrowsRotate,
      title: "Repetitive Questions Drain Time",
      description:
        "Your team wastes hours answering the same FAQs instead of focusing on guests.",
    },
  ];

  const solutions = [
    {
      title: "Zero Response Time",
      description:
        "Instant replies to customer inquiries 24/7, ensuring no message goes unanswered.",
    },
    {
      title: "Handle Thousands of Chats",
      description:
        "Automatically manage unlimited conversations simultaneously across WhatsApp, Instagram, and web.",
    },
    {
      title: "Free Staff for High-Value Work",
      description:
        "Your team can focus on personalized guest experiences while AI handles routine inquiries.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Hero title="Maleo AI Chatbot" />

      <Description
        title="Deliver Perfect Replies 24/7 in English, Mandarin, and Indonesian"
        description="Provide instant and consistent customer service around the clock, so your team can focus on guests instead of inboxes."
        subdescription="Our custom chat assistant is built around your company's needs. It handles questions, shares information, and manages booking inquiries with a natural conversational flow. It can also send follow up messages, promote offers, and upsell to potential customers in multiple languages — while your staff focuses on delivering exceptional in person experiences that leave a lasting impression."
      />

      {/* Problem Section */}
      <div className="bg-gray-50 py-8 md:py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 md:mb-6 text-center">
            Customer Service at Scale Is Overwhelming
          </h2>
          <p className="text-gray-600 text-lg mb-8 md:mb-12 text-center max-w-3xl mx-auto">
            Especially across multiple languages and platforms.
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
          How Our Chatbot Solves This
        </h2>
        <p className="text-gray-600 text-lg mb-8 md:mb-12 text-center max-w-3xl mx-auto">
          Instant, personalized, multilingual replies on WhatsApp, Instagram, or
          your website.
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
            This is not a generic chatbot. It is trained for your industry,
            understands tone, and can switch smoothly between English, Mandarin,
            and Bahasa Indonesia.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed max-w-4xl mt-4">
            It is not meant to replace your customer service team, but to extend
            their reach so you can offer 24 hour support without hiring extra
            staff. We also train your admins to keep the knowledge base updated,
            and our team is always ready to support yours in keeping the AI
            sharp and reliable.
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
              Turn Your Chat Inbox Into a Sales Engine
            </h2>
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-white/90 text-base md:text-lg mb-6 md:mb-8 leading-relaxed">
              Every unanswered message is revenue walking out the door. Hotels,
              retail stores, and service businesses are capturing bookings 24/7
              with our AI chatbot while their competitors sleep. Don't let
              language barriers or time zones limit your growth.
            </p>

            <Link
              href="https://wa.me/6282313271338?text=Hello%2C%20I%27m%20interested%20in%20Customer%20Service%20Chatbot.%20I%20came%20from%20your%20website."
              target="_blank"
              rel="noopener noreferrer"
              className="font-light bg-[#00A0E4] hover:bg-[#3B82F6]/90 text-white py-3 md:py-4 px-6 md:px-8 text-base md:text-lg rounded-lg w-fit"
            >
              Book Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CustomerServiceChatbot;
