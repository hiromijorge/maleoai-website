import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const navigationItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "AI Solutions", path: "/services/ai-solutions" },
    { name: "Web and App Development", path: "/services/web-app-development" },
    {
      name: "Remote Tech Talent Outsourcing",
      path: "/services/remote-tech-talent",
    },
    { name: "AI Training and Workshop", path: "/services/ai-training" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <footer className="bg-[#011B2E] text-white py-20">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-16">
        <div>
          <h4 className="text-2xl font-light mb-8">Navigation</h4>
          <div className="space-y-4">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className="block text-white hover:text-white font-light"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-2xl font-light mb-8">Get in Touch</h4>
          <p className="text-white font-light mb-2 text-xl">
            Awan Connection Cafe & Coworking Space
          </p>
          <p className="text-white font-light mb-12">
            Jl. Kayu Manis, Canggu, Kuta Utara, Badung, Bali, Indonesia 80351
          </p>
          <div className="flex gap-5">
            <a
              href="https://wa.me/+6287875874496"
              className="text-white hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/assets/whatsapp-icon.png"
                alt="WhatsApp"
                width={24}
                height={24}
              />
            </a>
            <a
              href="mailto:connect@maleoai.com"
              className="text-white hover:text-white"
            >
              <Image
                src="/assets/email-icon.png"
                alt="Email"
                width={24}
                height={24}
              />
            </a>
            <a
              href="https://www.instagram.com/maleo.ai/"
              className="text-white hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/assets/instagram-icon.png"
                alt="Instagram"
                width={24}
                height={24}
              />
            </a>
            <a
              href="https://www.linkedin.com/company/maleo-ai"
              className="text-white hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/assets/linkedin-icon.png"
                alt="LinkedIn"
                width={24}
                height={24}
              />
            </a>
            <a
              href="https://facebook.com/maleoai"
              className="text-white hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/assets/facebook-icon.png"
                alt="Facebook"
                width={24}
                height={24}
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
