"use client";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";

const TechOverview = ({ centered = false }) => {
  const scrollContainerRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = direction === "left" ? -300 : 300;
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const checkScroll = () => {
    const container = scrollContainerRef.current;
    if (container) {
      setShowLeftArrow(container.scrollLeft > 0);
      setShowRightArrow(
        container.scrollLeft < container.scrollWidth - container.clientWidth
      );
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", checkScroll);
      // Initial check
      checkScroll();
    }
    return () => {
      if (container) {
        container.removeEventListener("scroll", checkScroll);
      }
    };
  }, []);

  return (
    <div className="bg-[#033455] text-white py-16 relative">
      <div className="container mx-auto px-4">
        <h2
          className={`text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 ${
            centered ? "text-center" : ""
          }`}
        >
          Tech Overview
        </h2>
        <p
          className={`text-lg md:text-xl mb-8 md:mb-12 ${
            centered ? "text-center" : ""
          }`}
        >
          At Maleo AI, we harness the power of the newest and most emerging
          technologies to develop innovative, efficient, and scalable web and
          system solutions. Our development approach is rooted in using
          cutting-edge tools and frameworks that keep us ahead of industry
          trends.
        </p>

        {/* Carousel Navigation */}
        {showLeftArrow && (
          <button
            onClick={() => scroll("left")}
            className="absolute left-4 top-1/2 z-10 bg-white/10 hover:bg-white/20 rounded-full p-2 backdrop-blur-sm"
            aria-label="Scroll left"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>
        )}

        {showRightArrow && (
          <button
            onClick={() => scroll("right")}
            className="absolute right-4 top-1/2 z-10 bg-white/10 hover:bg-white/20 rounded-full p-2 backdrop-blur-sm"
            aria-label="Scroll right"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        )}

        {/* Scrollable Container */}
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto gap-4 pb-4 scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {/* Machine Learning and AI */}
          <div className="flex-shrink-0 w-[280px] bg-white rounded-xl p-6">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 mb-4">
                <Image
                  src="/assets/ai-ico.png"
                  alt="ML Icon"
                  width={24}
                  height={24}
                />
                <h3 className="text-[#FF6B2C] text-lg font-medium">
                  Machine Learning and AI
                </h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Image
                  src="/assets/tensor-flow.svg"
                  alt="TensorFlow"
                  width={80}
                  height={30}
                  className="object-contain"
                />
                <Image
                  src="/assets/pytorch.svg"
                  alt="PyTorch"
                  width={80}
                  height={30}
                  className="object-contain"
                />
                <Image
                  src="/assets/scikit-learn.svg"
                  alt="scikit-learn"
                  width={80}
                  height={30}
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          {/* Front End Development */}
          <div className="flex-shrink-0 w-[280px] bg-white rounded-xl p-6">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 mb-4">
                <Image
                  src="/assets/frontdev-ico.png"
                  alt="Frontend Icon"
                  width={24}
                  height={24}
                />
                <h3 className="text-[#FF6B2C] text-lg font-medium">
                  Front End Development
                </h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Image
                  src="/assets/react.svg"
                  alt="React"
                  width={80}
                  height={30}
                  className="object-contain"
                />
                <Image
                  src="/assets/angular.svg"
                  alt="Angular"
                  width={80}
                  height={30}
                  className="object-contain"
                />
                <Image
                  src="/assets/vue-js.svg"
                  alt="Vue"
                  width={80}
                  height={30}
                  className="object-contain"
                />
                <Image
                  src="/assets/pwa.svg"
                  alt="PWA"
                  width={80}
                  height={30}
                  className="object-contain"
                />
                <Image
                  src="/assets/webpack.svg"
                  alt="Webpack"
                  width={80}
                  height={30}
                  className="object-contain"
                />
                <Image
                  src="/assets/npm.svg"
                  alt="NPM"
                  width={80}
                  height={30}
                  className="object-contain"
                />
                <Image
                  src="/assets/babel.svg"
                  alt="Babel"
                  width={80}
                  height={30}
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          {/* Backend Development */}
          <div className="flex-shrink-0 w-[280px] bg-white rounded-xl p-6">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 mb-4">
                <Image
                  src="/assets/backdev-ico.png"
                  alt="Backend Icon"
                  width={24}
                  height={24}
                />
                <h3 className="text-[#FF6B2C] text-lg font-medium">
                  Backend Development
                </h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Image
                  src="/assets/kubernetes.svg"
                  alt="Kubernetes"
                  width={80}
                  height={30}
                  className="object-contain"
                />
                <Image
                  src="/assets/docker.svg"
                  alt="Docker"
                  width={80}
                  height={30}
                  className="object-contain"
                />
                <Image
                  src="/assets/aws-lambda.svg"
                  alt="AWS Lambda"
                  width={80}
                  height={30}
                  className="object-contain"
                />
                <Image
                  src="/assets/python.svg"
                  alt="Python"
                  width={80}
                  height={30}
                  className="object-contain"
                />
                <Image
                  src="/assets/go-icon.svg"
                  alt="Go"
                  width={80}
                  height={30}
                  className="object-contain"
                />
                <Image
                  src="/assets/kotlin.svg"
                  alt="Kotlin"
                  width={80}
                  height={30}
                  className="object-contain"
                />
                <Image
                  src="/assets/node-icon.svg"
                  alt="Node.js"
                  width={80}
                  height={30}
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          {/* Mobile App Development */}
          <div className="flex-shrink-0 w-[280px] bg-white rounded-xl p-6">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 mb-4">
                <Image
                  src="/assets/mobile-ico.png"
                  alt="Mobile Icon"
                  width={24}
                  height={24}
                />
                <h3 className="text-[#FF6B2C] text-lg font-medium">
                  Mobile App Development
                </h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Image
                  src="/assets/ar-kit.svg"
                  alt="AR Native"
                  width={80}
                  height={30}
                  className="object-contain"
                />
                <Image
                  src="/assets/react-native.svg"
                  alt="React Native"
                  width={80}
                  height={30}
                  className="object-contain"
                />
                <Image
                  src="/assets/flutter.svg"
                  alt="Flutter"
                  width={80}
                  height={30}
                  className="object-contain"
                />
                <Image
                  src="/assets/ar-core.svg"
                  alt="ARCore"
                  width={80}
                  height={30}
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          {/* Cloud System */}
          <div className="flex-shrink-0 w-[280px] bg-white rounded-xl p-6">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 mb-4">
                <Image
                  src="/assets/cloud-ico.svg"
                  alt="Cloud Icon"
                  width={24}
                  height={24}
                />
                <h3 className="text-[#FF6B2C] text-lg font-medium">
                  Cloud System
                </h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Image
                  src="/assets/azure-icon.svg"
                  alt="Azure"
                  width={120}
                  height={60}
                  className="object-contain"
                />
                <Image
                  src="/assets/aws.svg"
                  alt="AWS"
                  width={80}
                  height={30}
                  className="object-contain"
                />
                <Image
                  src="/assets/firebase.svg"
                  alt="Firebase"
                  width={80}
                  height={30}
                  className="object-contain"
                />
                <Image
                  src="/assets/triangle-yellow.svg"
                  alt="Firebase"
                  width={80}
                  height={30}
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          {/* Database */}
          <div className="flex-shrink-0 w-[280px] bg-white rounded-xl p-6">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 mb-4">
                <Image
                  src="/assets/database-ico.svg"
                  alt="Database Icon"
                  width={24}
                  height={24}
                />
                <h3 className="text-[#FF6B2C] text-lg font-medium">Database</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Image
                  src="/assets/mongodb.svg"
                  alt="MongoDB"
                  width={80}
                  height={30}
                  className="object-contain"
                />
                <Image
                  src="/assets/dynamodb.svg"
                  alt="DynamoDB"
                  width={80}
                  height={30}
                  className="object-contain"
                />
                <Image
                  src="/assets/mysql.svg"
                  alt="MySQL"
                  width={80}
                  height={30}
                  className="object-contain"
                />
                <Image
                  src="/assets/postgresql.svg"
                  alt="PostgreSQL"
                  width={80}
                  height={30}
                  className="object-contain"
                />
                <Image
                  src="/assets/cassandra.svg"
                  alt="Cassandra"
                  width={80}
                  height={30}
                  className="object-contain"
                />
                <Image
                  src="/assets/planet.svg"
                  alt="MySQL"
                  width={80}
                  height={30}
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          {/* Blockchain */}
          <div className="flex-shrink-0 w-[280px] bg-white rounded-xl p-6">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 mb-4">
                <Image
                  src="/assets/blockchain-ico.svg"
                  alt="Blockchain Icon"
                  width={24}
                  height={24}
                />
                <h3 className="text-[#FF6B2C] text-lg font-medium">
                  Blockchain system
                </h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Image
                  src="/assets/solidity.svg"
                  alt="Solidity"
                  width={80}
                  height={30}
                  className="object-contain"
                />
                <Image
                  src="/assets/ruby.svg"
                  alt="Rust"
                  width={80}
                  height={30}
                  className="object-contain"
                />
                <Image
                  src="/assets/go-icon.svg"
                  alt="Go"
                  width={80}
                  height={30}
                  className="object-contain"
                />
                <Image
                  src="/assets/csharp.svg"
                  alt="C#"
                  width={80}
                  height={30}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Custom scrollbar styles */}
        <style jsx global>{`
          /* Hide scrollbar for Chrome, Safari and Opera */
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }

          /* Hide scrollbar for IE, Edge and Firefox */
          .scrollbar-hide {
            -ms-overflow-style: none; /* IE and Edge */
            scrollbar-width: none; /* Firefox */
          }
        `}</style>
      </div>
    </div>
  );
};

export default TechOverview;
