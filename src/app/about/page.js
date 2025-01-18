import Image from "next/image";
import Description from "../components/services/Description";
import Hero from "../components/services/Hero";
import TechOverview from "../components/services/TechOverview";

const About = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <Hero title="About  Maleo  AI" />

      {/* Company Description */}
      <Description
        title="Dynamic AI Consulting and Software Development company headquartered in Bali, Indonesia."
        description="We offer innovative technology services to transform your business, including AI development for process automation and decision-making, machine learning solutions to harness data for predictive insights and personalization, high-quality data annotation to enhance AI and ML models, and augmented reality solutions for immersive experiences and interactive engagement."
        subdescription="Whether you're a local startup or an international enterprise, our goal is to unlock new possibilities, foster growth, and create a lasting impact on your business and the AI industry as a whole."
      />

      <div className="bg-[#0088CC] mt-4 py-4 px-4">
        <p className="text-xl md:text-2xl lg:text-3xl font-light tracking-wide text-white text-center">
          We are not just consultants, we are partners in collaboration
        </p>
      </div>

      {/* Expertise Section */}
      <div className="container mx-auto px-4 py-8 md:py-12 lg:py-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-8 md:mb-12 lg:mb-16 text-center">
          Our Expertise
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {[
            {
              icon: "/assets/store-ico.png",
              title: "AI Solutions",
              description:
                "Customizable strategies to solve complex business challenges.",
            },
            {
              icon: "/assets/restaurant-ico.png",
              title: "Tech Talent\nOutsourcing",
              description:
                "Providing businesses with access to highly skilled and diverse tech professionals.",
            },
            {
              icon: "/assets/real_estate_agent-ico.png",
              title: "Web and & Mobile\nApp Development",
              description: "Building intuitive and impactful digital products.",
            },
            {
              icon: "/assets/real_estate_agent-ico.png",
              title: "AI Training &\nWorkshops",
              description:
                "Empowering teams with the knowledge to integrate AI into their operations.",
            },
          ].map((item, index) => (
            <div key={index} className="text-start bg-[#F8F8F8] p-8 rounded-lg">
              <div className="mb-6">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={40}
                  height={40}
                  className="mr-auto"
                />
              </div>
              <h3 className="text-xl font-medium mb-4 text-[#FF6B2C] whitespace-pre-line">
                {item.title}
              </h3>
              <p className="text-gray-600 text-base">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Tech Overview */}
      <TechOverview />

      {/* Team Section */}
      <div className="container mx-auto px-4 py-8 md:py-12 lg:py-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-8 md:mb-12 lg:mb-16 text-center">
          Meet Our Team
        </h2>
        <h3 className="text-xl md:text-2xl font-medium mb-8 md:mb-12 text-center">
          Tech Team
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 mb-12 md:mb-16">
          {[
            {
              name: "Hiromi Jorge",
              title: "Software Engineer",
              description:
                "As a product manager and AI consultant, he has led multi-million-dollar projects across various industries, blending technology and business. He specializes in creating scalable AI solutions that transform operations, optimize processes, and deliver impactful results. His diverse experience helps organizations harness AI for lasting success.",
            },
            {
              name: "Gregorius Natanael Elwirehardja",
              title: "AI Researcher",
              description:
                "Machine Learning Engineer at Nomura Research Institute Indonesia, specializing in AI, data science, and deep learning. With experience as a researcher and lecturer at Bina Nusantara University, expertise lies in AI applications for bioinformatics and data science. Additionally, mentoring students and delivering NVIDIA workshops enhances knowledge sharing in machine learning. Focused on driving AI innovation to solve real-world challenges through academic and industry projects.",
            },
            {
              name: "Arsen Arijanyan",
              title: "Machine Learning Engineer",
              description:
                "Arsen Arijanyan holds a Master's degree in Computer and Information Science from the American University of Armenia. Currently, he is an ML Engineer and Automation Engineer at Metaport, specializing in logistics automation. His previous experience at inDATAaside involved developing computer vision algorithms for various industries. Arsen's expertise in AI and deep learning fosters innovation across various industries.",
            },
          ].map((member, index) => (
            <div key={index} className="text-start">
              <h4 className="text-xl font-semibold mb-2 text-[#FF6B2C]">
                {member.name}
              </h4>
              <p className="text-lg font-medium mb-4">{member.title}</p>
              <p className="text-gray-600 text-base leading-relaxed">
                {member.description}
              </p>
            </div>
          ))}
        </div>

        <h3 className="text-xl md:text-2xl font-medium mb-8 md:mb-12 text-center">
          Advisor
        </h3>
        <div className="max-w-2xl mx-auto px-4">
          <div className="text-start">
            <h4 className="text-xl font-semibold mb-2 text-[#FF6B2C]">
              Alan Kashkash
            </h4>
            <p className="text-lg font-medium mb-4">
              Partner & AI Lead at Global AI Bootcamps
            </p>
            <p className="text-gray-600 text-base leading-relaxed">
              Partner & AI Lead at Global AI Bootcamps. Serve as an AI lead at
              Global AI Bootcamps, where he teaches professionals how to
              implement AI tools & strategies that foster innovation & success.
              As the former CEO of Linguido, the first generative AI learning
              management system, Alan worked closely with OpenAI during GPT-3
              closed beta. Linguido was recognized as a featured startup at web.
              Summit 2022 and won a Polish government grant.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
