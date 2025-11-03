import Description from "@/app/components/services/Description";
import Hero from "@/app/components/services/Hero";
import IconCard from "@/app/components/services/IconCard";
import TechOverview from "@/app/components/services/TechOverview";
import Image from "next/image";

const WebAppDevelopment = () => {
  const workflows = [
    {
      icon: "/assets/store-ico.png",
      title: "Requirement Gathering",
      description:
        "Our process begins with a thorough understanding of your vision. We collect detailed necessary requirements, innovative, and creative ideas that will transform for a successful project.",
    },
    {
      icon: "/assets/restaurant-ico.png",
      title: "UI/UX Design",
      description:
        "We craft visually appealing and intuitive user interfaces and user-centric style, ensuring an exceptional and user-friendly experience.",
    },
    {
      icon: "/assets/real_estate_agent-ico.png",
      title: "Prototype",
      description:
        "Once the design phase is complete, we create an interactive prototype that serves as the blueprint for the development stage.",
    },
    {
      icon: "/assets/real_estate_agent-ico.png",
      title: "Development",
      description:
        "Our team uses cutting-edge tools and technologies to bring your project to life, maintaining full transparency throughout the development process.",
    },
    {
      icon: "/assets/store-ico.png",
      title: "Quality Assurance",
      description:
        "We are committed to excellence, delivering a product that is 100% free of bugs, with no compromise on quality.",
    },
  ];

  const techStack = [
    {
      title: "Machine Learning and AI",
      tools: ["PyTorch", "TensorFlow"],
    },
    {
      title: "Front End Development",
      tools: ["React", "Vue.js", "PWA"],
    },
    {
      title: "Backend Development",
      tools: ["Python", "Node.js", "Kotlin"],
    },
    {
      title: "Mobile App Development",
      tools: ["Flutter", "React Native"],
    },
  ];

  return (
    <div className="min-h-screen">
      <Hero title="Web and App Development" />

      <Description
        title="We're also dedicated to building reliable and user-friendly web and mobile applications that empower businesses to succeed in today's digital world."
        description={
          <>
            At <strong>MALEO</strong> our team combines technical expertise with
            a deep understanding of user needs to deliver solutions that are
            both practical and impactful. Whether you need a robust web platform
            or a seamless mobile app, we work closely with you throughout the
            development process to ensure the final product meets your
            requirements and aligns with your business goals. Our approach
            emphasizes clarity, functionality, and scalability, making our
            services ideal for startups, SMEs, and mid-sized businesses.
          </>
        }
      />

      <div className="bg-gray-50 py-8 md:py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-8 md:mb-12">
            Our Workflows
          </h2>
          <div className="flex flex-col gap-4 md:gap-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
              {workflows.slice(0, 3).map((workflow, index) => (
                <IconCard key={index} index={index} workflow={workflow} />
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8">
              {workflows.slice(3).map((workflow, index) => (
                <div
                  key={index + 3}
                  className="bg-[#F8F8F8] p-6 md:p-8 rounded-lg"
                >
                  <Image
                    src={workflow.icon}
                    alt={workflow.title}
                    width={40}
                    height={40}
                    className="text-orange-500 mb-4"
                  />
                  <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-orange-500">
                    {workflow.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {workflow.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <TechOverview centered={true} />

      <div className="container mx-auto px-4 py-8 md:py-12 lg:py-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-center mb-8 md:mb-12">
          Project Summary
        </h2>

        <div className="relative w-full mb-6 md:mb-8">
          <div className="w-full relative">
            <Image
              src="/assets/project-summary-img.png"
              alt="Training Notebook App Mockup"
              width={500}
              height={300}
              className="w-full h-auto object-contain"
              priority
            />
          </div>
        </div>

        <div className="max-w-4xl mr-auto px-2">
          <h3 className="text-2xl md:text-3xl font-semibold mb-3 md:mb-4">
            The Training Notebook
          </h3>
          <p className="text-gray-600 leading-relaxed text-sm md:text-base">
            The Training Notebook is our client from US. It is a comprehensive
            software solution designed specifically for personal trainers to
            efficiently manage their clients' information and training programs.
            Developed by a seasoned personal trainer with 17 years of
            experience, te app aims to streamline the administrative aspects of
            personal training, allowing trainers to focus more on client
            engagement and results.
          </p>
        </div>
      </div>

      <div className="bg-[#F47B3F] text-white py-12 md:py-16 lg:py-24 text-center px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 md:mb-8">
            Kickstart Your Digital
            <br />
            Transformation
          </h2>
          <a
            href="https://wa.me/6282313271338?text=Hello%2C%20I%27m%20interested%20in%20your%20services.%20I%20came%20from%20your%20website."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#3B9BF7] text-white text-base md:text-lg font-light px-8 md:px-12 py-3 md:py-4 rounded-xl hover:bg-blue-600 transition-colors"
          >
            Schedule a Consultation Now!
          </a>
        </div>
      </div>
    </div>
  );
};

export default WebAppDevelopment;
