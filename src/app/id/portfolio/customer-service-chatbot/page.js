import Description from "@/app/components/services/Description";
import Hero from "@/app/components/services/Hero";
import {
  faArrowsRotate,
  faCommentSlash,
  faLanguage,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Customer Service Chatbot - Asisten AI Multibahasa | Maleo AI",
  description:
    "Chatbot AI yang mengelola pertanyaan pelanggan 24/7 dalam bahasa Inggris, Mandarin, dan Indonesia melalui WhatsApp, Instagram, dan web. Sempurna untuk bisnis perhotelan dan retail.",
  keywords:
    "chatbot AI, otomasi layanan pelanggan, chatbot multibahasa, bot WhatsApp, chatbot perhotelan, otomasi retail, dukungan pelanggan 24/7, otomasi pemesanan",
  openGraph: {
    title: "Customer Service Chatbot - Dukungan Multibahasa 24/7",
    description:
      "Berikan balasan sempurna sepanjang waktu dalam bahasa Inggris, Mandarin, dan Indonesia dengan layanan pelanggan bertenaga AI.",
    type: "article",
    url: "https://maleoai.com/id/portfolio/customer-service-chatbot",
  },
  alternates: {
    languages: {
      en: "https://maleoai.com/portfolio/customer-service-chatbot",
      id: "https://maleoai.com/id/portfolio/customer-service-chatbot",
    },
  },
};

const CustomerServiceChatbot = () => {
  const allPortfolios = [
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

  const currentPath = "/id/portfolio/customer-service-chatbot";
  const otherPortfolios = allPortfolios.filter(
    (portfolio) => portfolio.link !== currentPath
  );

  const problems = [
    {
      icon: faCommentSlash,
      title: "Chat Gak Kebales = Duit Hilang",
      description:
        "Customer chat pagi, balesnya siang. Eh, dia udah booking di kompetitor. Kesel kan?",
    },
    {
      icon: faLanguage,
      title: "Bingung Ngurusin Banyak Bahasa",
      description:
        "Tamu Mandarin chat, staf bingung. Turis Inggris nanya, lama translatenya. Ujung-ujungnya pelayanan jadi lambat.",
    },
    {
      icon: faArrowsRotate,
      title: "Pertanyaan Sama Terus, Capek",
      description:
        '"Jam check-in berapa?" "Boleh bawa hewan?" "Ada WiFi?" Ditanya 50 kali sehari, tim jadi robot.',
    },
  ];

  const solutions = [
    {
      title: "Balas Chat Detik Itu Juga",
      description:
        "Customer chat, langsung dijawab. Gak peduli jam berapa. Gak ada lagi pesan yang kelewat.",
    },
    {
      title: "Urus Ribuan Chat Sekaligus",
      description:
        "WhatsApp, Instagram, website—semua platform langsung dijawab. Berapa banyak pun chatnya, AI gak kewalahan.",
    },
    {
      title: "Tim Fokus ke yang Penting",
      description:
        "Pertanyaan standar? AI yang jawab. Tim Anda bisa fokus kasih pengalaman personal ke tamu yang butuh perhatian khusus.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Hero title="Customer Service Chatbot" />

      <Description
        title="Customer Service yang Gak Pernah Tidur"
        description="Tamu chat jam 2 pagi? Pelanggan tanya stok saat weekend? Chatbot AI kami jawab langsung—dalam 3 bahasa."
        subdescription="Bayangin: tamu Mandarin tanya kamar, langsung dijawab bahasa Mandarin. Customer Indonesia chat di Instagram, langsung dibalas Bahasa Indonesia. Semua otomatis, semua natural, semua cepat. Tim Anda gak perlu begadang, gak perlu stress mikirin inbox. Fokus kasih pengalaman terbaik ke tamu yang datang langsung aja."
      />

      {/* Problem Section */}
      <div className="bg-gray-50 py-8 md:py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 md:mb-6 text-center">
            Handle Banyak Customer Itu Exhausting
          </h2>
          <p className="text-gray-600 text-lg mb-8 md:mb-12 text-center max-w-3xl mx-auto">
            Apalagi kalau harus jawab WhatsApp, Instagram, website, dalam 3
            bahasa berbeda. Mental drop.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {problems.map((problem, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm">
                <div className="mb-6">
                  <FontAwesomeIcon
                    icon={problem.icon}
                    className="text-[#FF6B2C] w-12 h-12"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-[#FF6B2C]">
                  {problem.title}
                </h3>
                <p className="text-gray-600">{problem.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Solution Section */}
      <div className="container mx-auto px-4 py-8 md:py-12 lg:py-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 md:mb-6 text-center">
          Solusinya? AI yang Bisa Ngobrol Kayak Manusia
        </h2>
        <p className="text-gray-600 text-lg mb-8 md:mb-12 text-center max-w-3xl mx-auto">
          Cepat, ramah, ngerti context, bisa 3 bahasa. Di platform mana pun
          customer Anda nongkrong.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {solutions.map((solution, index) => (
            <div key={index} className="bg-[#F8F8F8] p-8 rounded-lg">
              <div className="text-[#FF6B2C] mb-4">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-[#FF6B2C]">
                {solution.title}
              </h3>
              <p className="text-gray-600">{solution.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Differentiation Section */}
      <div className="bg-gray-50 py-8 md:py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 md:mb-8">
            Bukan Chatbot Robot Kaku Biasa
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed max-w-4xl">
            Chatbot kami dilatih khusus buat industri hotel dan retail. Ngerti
            tone yang pas, gak jawab kayak robot. Switch bahasa juga mulus—dari
            Inggris ke Mandarin ke Indonesia tanpa aneh. Plus, bisa disesuaikan
            sama gaya brand Anda. Jadi setiap interaksi tetap kerasa personal
            dan profesional.
          </p>
        </div>
      </div>

      {/* Portfolio Navigation Section */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-10 md:mb-16">
            Lihat Solusi Kami yang Lain
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {otherPortfolios.map((portfolio, idx) => (
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#FF6B2C] text-white py-16 md:py-32">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight mb-4">
              Inbox yang Rame = Peluang Cuan
            </h2>
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-white/90 text-base md:text-lg mb-6 md:mb-8 leading-relaxed">
              Chat yang gak kebales = duit yang kabur. Hotel dan toko retail
              yang pakai chatbot kami udah nangkap booking 24/7—bahkan pas
              mereka tidur. Kompetitor lagi offline? Anda tetap closing. Jangan
              biarkan beda bahasa atau beda waktu bikin Anda kehilangan
              customer.
            </p>

            <Link
              href="https://wa.me/6282313271338?text=Halo%2C%20saya%20tertarik%20dengan%20Customer%20Service%20Chatbot.%20Saya%20datang%20dari%20website%20Anda."
              target="_blank"
              rel="noopener noreferrer"
              className="font-light bg-[#00A0E4] hover:bg-[#3B82F6]/90 text-white py-3 md:py-4 px-6 md:px-8 text-base md:text-lg rounded-lg w-fit"
            >
              Mau Coba? Chat Kami
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CustomerServiceChatbot;
