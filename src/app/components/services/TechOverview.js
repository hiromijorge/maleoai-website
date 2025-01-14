import Image from "next/image";

const TechOverview = ({ centered = false }) => {
  return (
    <div className="bg-[#033455] text-white py-16">
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
          Transform your data into actionable insights with cutting-edge machine
          learning services.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {/* Machine Learning and AI */}
          <div className="bg-white rounded-xl p-6">
            <div className="flex items-center gap-2 mb-6">
              <Image
                src="/assets/ai-ico.png"
                alt="ML Icon"
                width={24}
                height={24}
                className="text-[#FF6B2C]"
              />
              <h3 className="text-[#FF6B2C] text-xl font-medium">
                Machine Learning
                <br />
                and AI
              </h3>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <Image
                src="/assets/tensorflow.png"
                alt="TensorFlow"
                width={100}
                height={40}
                className="object-contain"
              />
              <Image
                src="/assets/pytorch.png"
                alt="PyTorch"
                width={100}
                height={40}
                className="object-contain"
              />
              <Image
                src="/assets/scikit.png"
                alt="Scikit"
                width={100}
                height={40}
                className="object-contain"
              />
            </div>
          </div>

          {/* Front End Development */}
          <div className="bg-white rounded-xl p-6">
            <div className="flex items-center gap-2 mb-6">
              <Image
                src="/assets/frontdev-ico.png"
                alt="Frontend Icon"
                width={24}
                height={24}
                className="text-[#FF6B2C]"
              />
              <h3 className="text-[#FF6B2C] text-xl font-medium">
                Front End
                <br />
                Development
              </h3>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <Image
                src="/assets/react.png"
                alt="React"
                width={100}
                height={40}
                className="object-contain"
              />
              <Image
                src="/assets/angular.png"
                alt="Angular"
                width={100}
                height={40}
                className="object-contain"
              />
              <Image
                src="/assets/vuejs.png"
                alt="Vue"
                width={100}
                height={40}
                className="object-contain"
              />
              <Image
                src="/assets/pwa.png"
                alt="PWA"
                width={100}
                height={40}
                className="object-contain"
              />
              <Image
                src="/assets/webpack.png"
                alt="Webpack"
                width={100}
                height={40}
                className="object-contain"
              />
              <Image
                src="/assets/babel.png"
                alt="Babel"
                width={100}
                height={40}
                className="object-contain"
              />
              <Image
                src="/assets/npm.png"
                alt="NPM"
                width={100}
                height={40}
                className="object-contain"
              />
            </div>
          </div>

          {/* Backend Development */}
          <div className="bg-white rounded-xl p-6">
            <div className="flex items-center gap-2 mb-6">
              <Image
                src="/assets/backdev-ico.png"
                alt="Backend Icon"
                width={24}
                height={24}
                className="text-[#FF6B2C]"
              />
              <h3 className="text-[#FF6B2C] text-xl font-medium">
                Backend Development
              </h3>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <Image
                src="/assets/docker.png"
                alt="Docker"
                width={100}
                height={40}
                className="object-contain"
              />
              <Image
                src="/assets/kubernetes.png"
                alt="Kubernetes"
                width={100}
                height={40}
                className="object-contain"
              />
              <Image
                src="/assets/awslambda.png"
                alt="AWS Lambda"
                width={100}
                height={40}
                className="object-contain"
              />
              <Image
                src="/assets/python.png"
                alt="Python"
                width={100}
                height={40}
                className="object-contain"
              />
              <Image
                src="/assets/go.png"
                alt="Go"
                width={100}
                height={40}
                className="object-contain"
              />
              <Image
                src="/assets/java.png"
                alt="Java"
                width={100}
                height={40}
                className="object-contain"
              />
              <Image
                src="/assets/kotlin.png"
                alt="Kotlin"
                width={100}
                height={40}
                className="object-contain"
              />
              <Image
                src="/assets/node.png"
                alt="Node.js"
                width={100}
                height={40}
                className="object-contain"
              />
            </div>
          </div>

          {/* Mobile App Development */}
          <div className="bg-white rounded-xl p-6">
            <div className="flex items-center gap-2 mb-6">
              <Image
                src="/assets/mobile-ico.png"
                alt="Mobile Icon"
                width={24}
                height={24}
                className="text-[#FF6B2C]"
              />
              <h3 className="text-[#FF6B2C] text-xl font-medium">
                Mobile App
                <br />
                Development
              </h3>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <Image
                src="/assets/react.png"
                alt="React Native"
                width={100}
                height={40}
                className="object-contain"
              />
              <Image
                src="/assets/flutter.png"
                alt="Flutter"
                width={100}
                height={40}
                className="object-contain"
              />
              <Image
                src="/assets/arkit.png"
                alt="ARKit"
                width={100}
                height={40}
                className="object-contain"
              />
              <Image
                src="/assets/arcore.png"
                alt="ARCore"
                width={100}
                height={40}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechOverview;
