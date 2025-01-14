import Image from "next/image";

const IconCard = ({ index, workflow }) => {
  return (
    <div key={index} className="bg-[#F8F8F8] p-8 rounded-lg">
      <Image
        src={workflow.icon}
        alt={workflow.title}
        width={40}
        height={40}
        className="text-orange-500 mb-4"
      />
      <h3 className="text-xl font-semibold mb-4 text-orange-500">
        {workflow.title}
      </h3>
      <p className="text-gray-600 text-sm">{workflow.description}</p>
    </div>
  );
};

export default IconCard;
