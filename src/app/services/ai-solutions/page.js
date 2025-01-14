import Description from "@/app/components/services/Description";
import Hero from "@/app/components/services/Hero";
import Image from "next/image";

const AISolutions = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <Hero title="AI Solutions" />

      {/* Innovative Technologies Section */}
      <Description
        title="Innovative Technologies to Enhance Your Business Potential"
        description="We offer innovative technology services to transform your business,
            including AI development for process automation and decision-making,
            machine learning solutions to harness data for predictive insights
            and personalization, high-quality data annotation to enhance AI and
            ML models, and augmented reality solutions for immersive experiences
            and interactive engagement."
      />
      {/* AI Development Services Section */}
      <div className="container mx-auto py-16 px-4">
        <h2 className="text-4xl md:text-5xl font-semibold mb-8 text-start">
          AI Development Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            {
              icon: "/assets/store-ico.png",
              title: "Custom AI Applications",
              description:
                "Build intelligent systems for tasks like decision-making, customer engagement, and process automation.",
            },
            {
              icon: "/assets/restaurant-ico.png",
              title: "Natural Language Processing (NLP)",
              description:
                "Create systems that understand and process human language for chatbots, sentiment analysis, and more.",
            },
            {
              icon: "/assets/real_estate_agent-ico.png",
              title: "AI-Powered Process Automation",
              description:
                "Streamline repetitive tasks and boost operational efficiency using AI-driven automation tools.",
            },
          ].map((service, index) => (
            <div key={index} className="text-start bg-[#F8F8F8] p-8 rounded-lg">
              <div className="mb-6">
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={40}
                  height={40}
                  className="mr-auto"
                />
              </div>
              <h3 className="text-xl font-medium mb-4 text-[#FF6B2C]">
                {service.title}
              </h3>
              <p className="text-gray-600 text-base">{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Machine Learning Solutions Section */}
      <div className="bg-[#001B29] text-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-semibold mb-4">
            Machine Learning Solutions
          </h2>
          <p className="text-lg md:text-xl mb-12">
            Transform your data into actionable insights with cutting-edge
            machine learning services.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Predictive Analytics */}
            <div className="bg-white rounded-lg overflow-hidden p-4 md:p-6">
              <Image
                src="/assets/ai-solutions-img-1.png"
                alt="Predictive Analytics"
                width={600}
                height={200}
                className="w-full h-[150px] md:h-[200px] object-cover rounded-lg"
              />
              <div className="py-4 md:py-6">
                <h3 className="text-[#FF6B2C] text-2xl md:text-3xl font-medium mb-2">
                  Predictive Analytics
                </h3>
                <p className="text-gray-600 text-base md:text-lg">
                  Forecast trends and behaviors with precision using ML
                  algorithms.
                </p>
              </div>
            </div>

            {/* Recommendation Systems */}
            <div className="bg-white rounded-lg overflow-hidden p-4 md:p-6">
              <Image
                src="/assets/ai-solutions-img-2.png"
                alt="Recommendation Systems"
                width={600}
                height={200}
                className="w-full h-[150px] md:h-[200px] object-cover rounded-lg"
              />
              <div className="py-4 md:py-6">
                <h3 className="text-[#FF6B2C] text-2xl md:text-3xl font-medium mb-2">
                  Recommendation Systems
                </h3>
                <p className="text-gray-600 text-base md:text-lg">
                  Personalize user experiences with intelligent product or
                  service recommendations.
                </p>
              </div>
            </div>

            {/* Image Recognition & Analysis */}
            <div className="bg-white rounded-lg overflow-hidden p-4 md:p-6">
              <Image
                src="/assets/ai-solutions-img-3.png"
                alt="Image Recognition & Analysis"
                width={600}
                height={200}
                className="w-full h-[150px] md:h-[200px] object-cover rounded-lg"
              />
              <div className="py-4 md:py-6">
                <h3 className="text-[#FF6B2C] text-2xl md:text-3xl font-medium mb-2">
                  Image Recognition & Analysis
                </h3>
                <p className="text-gray-600 text-base md:text-lg">
                  Develop computer vision models for tasks like facial
                  recognition, object detection, and image labeling.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-[#FF761A] py-16 md:py-32">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="max-w-[600px] text-left">
            <h2 className="text-white text-3xl md:text-5xl font-normal mb-4">
              It's Time to Unlock the True Potential of Your Business with AI
            </h2>
          </div>

          <div className="flex flex-col items-start gap-4">
            <p className="text-white text-base md:text-lg">
              The future isn't waiting, it's happening now. With AI, you have
              the power to revolutionize your operations, delight your
              customers, and dominate your market. Don't let outdated processes
              hold you back.
            </p>
            <button className="w-full md:w-auto bg-[#00A0E4] text-white px-8 py-4 rounded-lg font-light text-lg hover:bg-[#4499d1] transition-colors">
              Let's Build Your Powered Future with AI
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AISolutions;
