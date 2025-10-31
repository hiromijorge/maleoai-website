import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <div className="w-full">
      {/* Navigation and Hero Section wrapper */}
      <div id="home-intro" className="relative">
        {/* Add background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/robot-background.jpeg"
            alt="Robot Background"
            fill
            className="object-cover"
            priority
          />
          {/* Add overlay to ensure text remains readable */}
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Hero Section - remove the existing gradient background */}
        <section className="relative text-white pt-16 md:pt-32 pb-16 md:pb-32 h-screen">
          <div className="relative z-10 max-w-4xl mx-auto text-center px-4 flex flex-col items-center justify-center h-full">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold mb-6 md:mb-8 tracking-wide">
              The Key to Unlocking Your <br className="hidden md:block" />{" "}
              Business's Full Potential
            </h1>
            <div
              id="hero-key-points"
              className="text-lg md:text-xl mb-8 md:mb-10 space-y-2"
            >
              <p className="flex items-center gap-2 justify-center font-light">
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  className="text-white w-5 h-5"
                />
                Outpace competitors with data-driven decisions.
              </p>
              <p className="flex items-center gap-2 justify-center font-light">
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  className="text-white w-5 h-5"
                />
                Understand your customers like never before.
              </p>
              <p className="flex items-center gap-2 justify-center font-light">
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  className="text-white w-5 h-5"
                />
                Save time and focus on growth.
              </p>
            </div>
            <Link
              href="https://cal.com/maleoai/30min?date=2025-01-06&month=2025-01"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary rounded-xl p-3 md:p-4 font-light text-sm md:text-base w-full md:w-auto"
            >
              Discover How AI Can Work for You
            </Link>
          </div>
        </section>
      </div>

      {/* Partners Section */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-10 md:mb-16">
            Client and Partners
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
            {[
              {
                logo: "/assets/companies/Syncorp.svg",
                name: "SynCorp AI",
                country: { flag: "🇦🇪", name: "United Arab Emirates" },
              },
              {
                logo: "/assets/companies/WangDataMarket.svg",
                name: "Wang",
                country: { flag: "🇹🇭", name: "Thailand" },
              },
              {
                logo: "/assets/companies/TTN.svg",
                name: "The Training Notebook",
                country: { flag: "🇺🇸", name: "United States" },
              },
            ].map((partner, idx) => (
              <div
                key={idx}
                className="bg-gray-50 rounded-lg p-12 flex flex-col items-center"
              >
                <div className="h-32 flex items-center justify-center mb-8">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={200}
                    height={80}
                    className="object-contain"
                  />
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <span>{partner.country.flag}</span>
                  <span>{partner.country.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-[#033455] text-white py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-start mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-3 tracking-wide">
              Turn Ambitions into Achievements with AI
            </h2>
            <p className="text-white text-base md:text-lg">
              Our AI solutions deliver real results that you'll notice in your
              bottom line.
            </p>
          </div>

          {/* Feature Image */}
          <div className="relative h-[250px] md:h-[400px] mb-8 md:mb-16 rounded-xl overflow-hidden">
            <Image
              src="/assets/features-bg.png"
              alt="AI Features"
              fill
              className="object-cover"
            />
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {[
              {
                icon: (
                  <svg
                    className="w-6 h-6 text-primary"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42z" />
                  </svg>
                ),
                title: "Cut Costs",
                desc: "Eliminate inefficiencies and save big on operational expenses.",
              },
              {
                icon: (
                  <svg
                    className="w-6 h-6 text-primary"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M3.5 18.49l6-6.01 4 4L22 6.92l-1.41-1.41-7.09 7.97-4-4L2 16.99z" />
                  </svg>
                ),
                title: "Increase revenue",
                desc: "Target the right customers and boost sales effortlessly",
              },
              {
                icon: (
                  <svg
                    className="w-6 h-6 text-primary"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
                    <path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
                  </svg>
                ),
                title: "Save Time",
                desc: "AI handle repetitive tasks so you can focus on strategy",
              },
              {
                icon: (
                  <svg
                    className="w-6 h-6 text-primary"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7z" />
                  </svg>
                ),
                title: "Make Smarter\nDecisions",
                desc: "Leverage insights and stay ahead of the curve.",
              },
            ].map((feature, idx) => (
              <div key={idx} className="bg-white text-gray-800 rounded-xl p-8">
                <div className="text-[#FF6B2C] mb-6">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 leading-tight text-[#FF6B2C]">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="text-center mt-12">
            <Link
              href="https://cal.com/maleoai/30min?date=2025-01-06&month=2025-01"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#FF6B2C] hover:bg-[#FF6B2C]/90 text-white px-8 py-4 rounded-xl text-lg font-light inline-block"
            >
              Let's Build Your Powered Future with AI
            </Link>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-start mb-6 md:mb-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-3 tracking-wide">
              See How Businesses Like <br className="hidden md:block" />
              Yours Are Winning with AI
            </h2>
            <p className="text-gray-600 text-base md:text-lg">
              These aren't dreams – they're real results from AI in action.
              Ready to write your own success story?
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                icon: (
                  <svg
                    className="w-8 h-8 text-[#FF6B2C]"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M19 6h-2c0-2.76-2.24-5-5-5S7 3.24 7 6H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-7-3c1.66 0 3 1.34 3 3H9c0-1.66 1.34-3 3-3zm7 17H5V8h14v12z" />
                  </svg>
                ),
                title: "E-Commerce Store",
                desc: "A chatbot handles customer inquiries instantly, reducing response time by 90% and increasing sales by 30%.",
              },
              {
                icon: (
                  <svg
                    className="w-8 h-8 text-[#FF6B2C]"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M8.1 13.34l2.83-2.83L3.91 3.5c-1.56 1.56-1.56 4.09 0 5.66l4.19 4.18zm6.78-1.81c1.53.71 3.68.21 5.27-1.38 1.91-1.91 2.28-4.65.81-6.12-1.46-1.46-4.2-1.1-6.12.81-1.59 1.59-2.09 3.74-1.38 5.27L3.7 19.87l1.41 1.41L12 14.41l6.88 6.88 1.41-1.41L13.41 13l1.47-1.47z" />
                  </svg>
                ),
                title: "Restaurant Chain",
                desc: "Predictive analytics optimized staffing schedules, cutting labor costs by 20%.",
              },
              {
                icon: (
                  <svg
                    className="w-8 h-8 text-[#FF6B2C]"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z" />
                  </svg>
                ),
                title: "Real Estate Agency",
                desc: "AI-powered lead scoring identified hot prospects, resulting in a 40% increase in closed deals.",
              },
            ].map((story, idx) => (
              <div
                key={idx}
                className="bg-[#F8F8F8] rounded-xl p-8 flex flex-col h-full border border-gray-100"
              >
                <div className="mb-6">{story.icon}</div>
                <h3 className="text-xl font-semibold text-[#FF6B2C] mb-4">
                  {story.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-8">
                  {story.desc}
                </p>
                <div className="mt-auto pt-10">
                  <Link
                    href="https://cal.com/maleoai/30min?date=2025-01-06&month=2025-01"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#FF6B2C] bg-white border border-[#FF6B2C] hover:bg-[#FF6B2C] hover:text-white transition-colors duration-200 px-8 py-3 rounded-lg w-full inline-block text-center"
                  >
                    Get Started Today!
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-3 tracking-wide">
            Your Success is Our Mission
          </h2>
          <p className="text-gray-600 mb-8 md:mb-16">
            When you work with us, you're not just getting AI technology you're
            getting a partner who's dedicated to your success.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-gray-50 p-12 rounded-lg">
              <h3 className="text-[#FF6B2C] text-3xl font-semibold mb-4">
                Simplified Process
              </h3>
              <p className="text-gray-600 font-light">
                We handle the complexity so you don't have to.
              </p>
            </div>

            <div className="bg-gray-50 p-12 rounded-lg">
              <h3 className="text-[#FF6B2C] text-3xl font-semibold mb-4">
                Custom Solutions
              </h3>
              <p className="text-gray-600 font-light">
                AI that fits your unique goals and challenges.
              </p>
            </div>

            <div className="bg-gray-50 p-12 rounded-lg">
              <h3 className="text-[#FF6B2C] text-3xl font-semibold mb-4">
                Expert Support
              </h3>
              <p className="text-gray-600 font-light">
                From ideation to implementation, we're with you every step of
                the way.
              </p>
            </div>
          </div>

          <p className="text-gray-600 mt-4 text-start">
            With a proven track record of delivering measurable results, we're
            here to help you embrace AI with confidence.
          </p>
        </div>
      </section>

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
              href="https://cal.com/maleoai/30min?date=2025-01-06&month=2025-01"
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
}
