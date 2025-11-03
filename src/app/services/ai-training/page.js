import Description from "@/app/components/services/Description";
import Hero from "@/app/components/services/Hero";
import IconCard from "@/app/components/services/IconCard";

const AiTraining = () => {
  const trainingFeatures = [
    {
      icon: "/assets/store-ico.png", // Assuming you have these icons
      title: "Comprehensive AI Fundamentals",
      description:
        "Understand the essentials of AI in a simple and accessible way.",
    },
    {
      icon: "/assets/store-ico.png",
      title: "Real-World Applications",
      description:
        "Explore how AI can address challenges specific to your industry.",
    },
    {
      icon: "/assets/restaurant-ico.png",
      title: "Interactive Projects",
      description: "Gain practical experience using AI tools and technologies.",
    },
    {
      icon: "/assets/real_estate_agent-ico.png",
      title: "Custom Training Programs",
      description:
        "Tailored content designed to meet your team's unique needs and goals.",
    },
  ];

  return (
    <>
      <Hero title="AI Training and Workshop" />
      <Description
        description={
          <>
            At <strong>MALEO</strong>, we are dedicated to equipping businesses
            and individuals with the skills they need to thrive in an AI-driven
            world. In collaboration with Bali AI Bootcamp, we offer AI Training
            and Workshops that combine cutting-edge knowledge with practical,
            hands-on learning experiences. Whether you're a business leader
            discovering AI for the first time or a team seeking advanced
            technical skills, our workshops will give you the knowledge and
            confidence to implement AI effectively. Contact us today to learn
            more about our training programs and how we can help prepare your
            team for the future of AI. Through our partnership with Bali AI
            Bootcamp, we provide:
          </>
        }
      />
      <div
        id="features-section"
        className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {trainingFeatures.map((feature, index) => (
            <IconCard key={index} workflow={feature} />
          ))}
        </div>
        <div className="text-center mt-8 sm:mt-10 lg:mt-12">
          <a
            href="https://wa.me/6282313271338?text=Hello%2C%20I%27m%20interested%20in%20your%20services.%20I%20came%20from%20your%20website."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-orange-500 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg hover:bg-orange-600 transition-colors text-sm sm:text-base"
          >
            Schedule a Consultation Now!
          </a>
        </div>
      </div>
    </>
  );
};

export default AiTraining;
