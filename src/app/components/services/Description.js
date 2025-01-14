const Description = ({ title, description, subdescription }) => {
  return (
    <div className="container mx-auto py-8 md:py-12 lg:py-16 px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {title && (
          <div className="md:col-span-1">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-wide leading-tight mb-6 md:mb-0">
              {title}
            </h2>
          </div>
        )}
        <div
          className={`text-gray-600 bg-[#F8F8F8] p-6 md:p-8 lg:p-10 rounded-xl ${
            title ? "md:col-span-2" : "md:col-span-3"
          }`}
        >
          <p className="text-base leading-relaxed mb-4">{description}</p>
          <p className="text-base leading-relaxed">{subdescription}</p>
        </div>
      </div>
    </div>
  );
};

export default Description;
