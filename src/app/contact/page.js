"use client";
import Hero from "../components/services/Hero";

const Contact = () => {
  const socialLinks = [
    {
      name: "Email",
      icon: "envelope-fill",
      link: "mailto:connect@maleoai.com",
      className: "col-span-2 lg:col-span-1",
    },
    {
      name: "Whatsapp",
      icon: "telephone-fill",
      link: "https://wa.me/+6282121424873",
      className: "col-span-2 lg:col-span-1",
    },
    {
      name: "LinkedIn",
      icon: "linkedin",
      link: "https://www.linkedin.com/company/maleo-ai",
      className: "col-span-1",
    },
    {
      name: "Facebook",
      icon: "facebook",
      link: "https://facebook.com/maleoai",
      className: "col-span-1",
    },
    {
      name: "Instagram",
      icon: "instagram",
      link: "https://www.instagram.com/maleo.ai/",
      className: "col-span-1",
    },
  ];

  return (
    <>
      <Hero title="Contact Us" />
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
          {/* Location Section */}
          <div className="bg-gray-50 p-4 sm:p-8 rounded-lg">
            <div className="flex flex-col items-start gap-2 mb-4 sm:mb-6">
              <div className="text-[#F47521] text-2xl sm:text-3xl">
                <i className="bi bi-geo-alt-fill"></i>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#F47521]">
                Our Location
              </h2>
            </div>

            <p className="text-gray-700 mb-4 sm:mb-6 text-sm sm:text-base">
              Awan Connection Cafe & Coworking Space, Jl. Kayu Manis, Canggu,
              Kuta Utara, Badung, Bali, Indonesia 80351
            </p>

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.5066088024805!2d115.14017757497187!3d-8.643271987899247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd2393caf0f6ae1%3A0xbb630d254ed97c73!2sAwan%20Connection%20-%20Cafe%20%26%20Coworking%20Space!5e0!3m2!1sid!2sid!4v1735968579543!5m2!1sid!2sid"
              className="w-full h-[250px] sm:h-[300px] rounded-lg"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Contact Section */}
          <div className="bg-gray-50 p-4 sm:p-8 rounded-lg">
            <div className="flex-col items-center gap-2 mb-4 sm:mb-6">
              <div className="text-[#F47521] text-2xl sm:text-3xl">
                <i className="bi bi-telephone-fill"></i>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#F47521]">
                Our Contacts
              </h2>
            </div>

            <div className="grid grid-cols-2 gap-2 sm:gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex flex-col items-center justify-center p-3 sm:p-6 bg-white rounded-lg hover:shadow-md transition-shadow ${social.className}`}
                >
                  <span className="text-[#0A2472] text-xl sm:text-2xl mb-1 sm:mb-2">
                    <i className={`bi bi-${social.icon}`}></i>
                  </span>
                  <span className="text-[#0A2472] font-medium text-sm sm:text-base">
                    {social.name}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
