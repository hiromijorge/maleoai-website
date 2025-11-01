import Image from "next/image";
import Link from "next/link";
import Description from "../../components/services/Description";
import Hero from "../../components/services/Hero";
import TechOverview from "../../components/services/TechOverview";

export const metadata = {
  title: "Portofolio - Solusi AI & Kisah Sukses | Maleo AI",
  description:
    "Jelajahi portofolio solusi AI yang telah kami kembangkan untuk klien di berbagai industri. Mulai dari otomasi operasional lapangan hingga chatbot layanan pelanggan, deteksi deepfake, asisten intelijen bisnis, dan analisis dokumen legal.",
  keywords:
    "portofolio AI, solusi AI, kisah sukses pelanggan, studi kasus AI, transformasi digital, implementasi AI, otomasi bisnis, chatbot AI, deteksi deepfake, intelijen bisnis",
  openGraph: {
    title: "Portofolio - Solusi AI & Kisah Sukses | Maleo AI",
    description:
      "Temukan bagaimana kami membantu bisnis mentransformasi operasi mereka dengan solusi AI khusus di sektor manufaktur, perhotelan, media, dan enterprise.",
    type: "website",
    url: "https://maleoai.com/id/portfolio",
  },
  alternates: {
    languages: {
      en: "https://maleoai.com/portfolio",
      id: "https://maleoai.com/id/portfolio",
    },
  },
};

const Portfolio = () => {
  const portfolios = [
    {
      title: "AI Digital Supervisor",
      subtitle: "Untuk Tim Lapangan dan Operasional",
      overview:
        "Bayangkan supervisor Anda tidak perlu lagi keliling cek pekerjaan satu per satu. AI Digital Supervisor hadir lewat WhatsApp, memverifikasi setiap tugas dengan foto dan video real-time. Tim lapangan Anda tetap produktif, Anda tetap tenang.",
      image: "/assets/ai-digital-supervisor.png",
      link: "/id/portfolio/ai-digital-supervisor",
    },
    {
      title: "Customer Service Chatbot",
      subtitle: "Untuk Perhotelan dan Retail",
      overview:
        "Tamu mengirim pesan pukul 2 pagi? Pelanggan tanya stok di Instagram? Tenang. Chatbot AI kami langsung melayani dalam 3 bahasa—bahkan saat tim Anda tidur. Customer service 24/7 tanpa harus bergadang.",
      image: "/assets/customer-service-chatbot.png",
      link: "/id/portfolio/customer-service-chatbot",
    },
    {
      title: "Maleo AI Deepfake Detector",
      subtitle: "Untuk Media dan Kepercayaan Publik",
      overview:
        "Di era deepfake yang marak, satu video palsu bisa menghancurkan reputasi. Detector kami menganalisis keaslian konten dalam hitungan detik—sebelum viral, sebelum rugi. Lindungi brand Anda dari informasi palsu.",
      image: "/assets/maleo-ai-deepfake-detector.png",
      link: "/id/portfolio/maleo-ai-deepfake-detector",
    },
    {
      title: "AI Business Assistant",
      subtitle: "Wawasan Data dan Operasi Prediktif",
      overview:
        "Data produksi Anda sebetulnya sudah bicara—tapi siapa yang dengerin? AI Business Assistant mengubah angka-angka dari sensor dan logistik jadi insight yang langsung bisa Anda pakai. Prediksi maintenance, kurangi downtime, hemat jutaan.",
      image: "/assets/ai-business-assistant.png",
      link: "/id/portfolio/ai-business-assistant",
    },
    {
      title: "AI Assistant for Legal Documents",
      subtitle: "Review Cerdas dan Kepatuhan",
      overview:
        "Review kontrak 100 halaman bisa bikin mata pegal dan pikiran buntu. AI Assistant kami baca, rangkum, dan tandai risiko dalam waktu singkat. Waktu review turun 50%, akurasi naik, dan Anda bisa pulang lebih cepat.",
      image: "/assets/ai-assistant-for-legal-documents.png",
      link: "/id/portfolio/ai-assistant-legal-documents",
    },
  ];

  return (
    <div className="min-h-screen">
      <Hero title="Portofolio Kami" />

      {/* Description Section */}
      <Description
        title="Solusi AI yang Terbukti"
        description="Di Maleo AI, kami tidak hanya membangun teknologi—kami menghadirkan solusi yang menyelesaikan tantangan bisnis nyata. Portofolio kami menampilkan implementasi AI di berbagai industri, mulai dari otomasi operasional dan keterlibatan pelanggan hingga verifikasi konten dan intelijen data."
        subdescription="Setiap proyek dirancang dengan tujuan yang jelas: mengurangi biaya, meningkatkan efisiensi, dan menciptakan dampak yang terukur. Jelajahi bagaimana kami mentransformasi alur kerja dan memberdayakan tim dengan sistem cerdas yang disesuaikan dengan kebutuhan unik mereka."
      />

      {/* Portfolio Section */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-10 md:mb-16">
            Solusi yang Kami Bangun untuk Masalah Nyata
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mb-8">
            {portfolios.slice(0, 3).map((portfolio, idx) => (
              <div
                key={idx}
                className="bg-gray-50 rounded-lg p-8 flex flex-col"
              >
                <div className="w-full h-48 flex items-center justify-center mb-6">
                  <Image
                    src={portfolio.image}
                    alt={portfolio.title}
                    width={800}
                    height={600}
                    className="object-contain w-full h-full"
                  />
                </div>
                <h3 className="text-xl font-semibold text-[#FF6B2C] mb-2">
                  {portfolio.title}
                </h3>
                <p className="text-sm text-gray-500 mb-4">
                  {portfolio.subtitle}
                </p>
                <p className="text-gray-600 text-sm mb-6 flex-grow">
                  {portfolio.overview}
                </p>
                <div className="mt-auto pt-4">
                  <Link
                    href={portfolio.link}
                    className="text-[#FF6B2C] bg-white border border-[#FF6B2C] hover:bg-[#FF6B2C] hover:text-white transition-colors duration-200 px-8 py-3 rounded-lg w-full inline-block text-center"
                  >
                    Pelajari Lebih Lanjut
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 max-w-[66.666%] mx-auto">
            {portfolios.slice(3).map((portfolio, idx) => (
              <div
                key={idx + 3}
                className="bg-gray-50 rounded-lg p-8 flex flex-col"
              >
                <div className="w-full h-48 flex items-center justify-center mb-6">
                  <Image
                    src={portfolio.image}
                    alt={portfolio.title}
                    width={800}
                    height={600}
                    className="object-contain w-full h-full"
                  />
                </div>
                <h3 className="text-xl font-semibold text-[#FF6B2C] mb-2">
                  {portfolio.title}
                </h3>
                <p className="text-sm text-gray-500 mb-4">
                  {portfolio.subtitle}
                </p>
                <p className="text-gray-600 text-sm mb-6 flex-grow">
                  {portfolio.overview}
                </p>
                <div className="mt-auto pt-4">
                  <Link
                    href={portfolio.link}
                    className="text-[#FF6B2C] bg-white border border-[#FF6B2C] hover:bg-[#FF6B2C] hover:text-white transition-colors duration-200 px-8 py-3 rounded-lg w-full inline-block text-center"
                  >
                    Pelajari Lebih Lanjut
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Overview Section */}
      <TechOverview />

      {/* Final CTA Section */}
      <section className="bg-[#FF6B2C] text-white py-16 md:py-32">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight mb-4">
              Siap Ubah Cara Kerja Bisnis Anda?
            </h2>
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-white/90 text-base md:text-lg mb-6 md:mb-8 leading-relaxed">
              Kompetitor sudah pakai AI. Pelanggan makin menuntut. Operasional
              yang lambat bikin Anda tertinggal. Tapi kabar baiknya? Anda bisa
              mulai hari ini. Ceritakan masalah Anda, kami bantu buatkan
              solusinya.
            </p>

            <Link
              href="https://wa.me/6282313271338?text=Halo%2C%20saya%20tertarik%20dengan%20layanan%20Anda.%20Saya%20datang%20dari%20website%20Anda."
              target="_blank"
              rel="noopener noreferrer"
              className="font-light bg-[#00A0E4] hover:bg-[#3B82F6]/90 text-white py-3 md:py-4 px-6 md:px-8 text-base md:text-lg rounded-lg w-fit"
            >
              Obrolin Proyek Anda Sekarang
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
