const Hero = ({ title }) => {
  return (
    <div
      className="relative h-[300px] sm:h-[400px] md:h-[460px] lg:h-[540px] flex items-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(0, 136, 204, 0.9), rgba(0, 85, 128, 0.9)), url('/assets/background/maleo-bg.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 flex justify-start items-center px-4 sm:px-6 md:px-12 lg:px-16 xl:pl-32">
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold max-w-[90%] sm:max-w-[80%] md:max-w-[70%]">
          {title}
        </h1>
      </div>
    </div>
  );
};

export default Hero;
