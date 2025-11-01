import Description from "@/app/components/services/Description";
import Hero from "@/app/components/services/Hero";
import {
  faChainBroken,
  faExclamationTriangle,
  faFileLines,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "AI Business Assistant - Intelijen Bisnis Prediktif | Maleo AI",
  description:
    "Asisten intelijen bisnis bertenaga AI yang mengubah data terfragmentasi menjadi wawasan yang dapat ditindaklanjuti. Dapatkan peringatan prediktif, analitik otomatis, dan visibilitas real-time di seluruh produksi, logistik, dan penjualan.",
  keywords:
    "intelijen bisnis AI, analitik prediktif, otomasi bisnis, wawasan data, intelijen operasional, analitik AI, optimasi rantai pasokan, asisten bisnis AI",
  openGraph: {
    title: "AI Business Assistant - Intelijen Prediktif untuk Operasi",
    description:
      "Buat keputusan berbasis data yang lebih cepat dengan intelijen bisnis bertenaga AI yang menghubungkan semua data operasional Anda.",
    type: "article",
    url: "https://maleoai.com/id/portfolio/ai-business-assistant",
  },
  alternates: {
    languages: {
      en: "https://maleoai.com/portfolio/ai-business-assistant",
      id: "https://maleoai.com/id/portfolio/ai-business-assistant",
    },
  },
};

const AIBusinessAssistant = () => {
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

  const currentPath = "/id/portfolio/ai-business-assistant";
  const otherPortfolios = allPortfolios.filter(
    (portfolio) => portfolio.link !== currentPath
  );

  const problems = [
    {
      icon: faExclamationTriangle,
      title: "Masalah Baru Ketahuan Pas Udah Parah",
      description:
        "Mesin rusak, baru ketahuan pas udah mati. Produksi stop, baru sadar ada yang salah. Data ada, tapi telat dipake.",
    },
    {
      icon: faFileLines,
      title: "Laporan Makan Waktu Berhari-hari",
      description:
        "Tim habis seminggu bikin report. Pas jadi, datanya udah basi. Keputusan harus cepat, tapi prosesnya lama banget.",
    },
    {
      icon: faChainBroken,
      title: "Data Berserakan, Gak Nyambung",
      description:
        "Data produksi di sini, logistik di sana, sales di Excel lain. Mau liat big picture? Impossible. Semuanya terpisah-pisah.",
    },
  ];

  const solutions = [
    {
      title: "Dikasih Tau Sebelum Masalah Terjadi",
      description:
        "AI prediksi masalah sebelum kejadian. Mesin mau rusak? Anda udah dikasih alert duluan. Bisa cegah sebelum produksi berhenti total.",
    },
    {
      title: "Tanya Apa Aja, Langsung Dijawab",
      description:
        '"Kenapa sales turun minggu ini?" "Kapan harus restock?" Tanya pake bahasa sehari-hari, dijawab jelas tanpa istilah teknis aneh.',
    },
    {
      title: "Semua Data Jadi Satu, Real-Time",
      description:
        "Dashboard yang nyatuin produksi, logistik, sales dalam satu layar. AI-nya belajar dari pola bisnis Anda dan kasih rekomendasi yang relevan.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Hero title="AI Business Assistant" />

      <Description
        title="Data Anda Sebetulnya Udah Ngomong—Tapi Siapa yang Dengerin?"
        description="Sensor, produksi, logistik—semuanya ngasih data. Tapi angka-angka itu gak ada artinya kalau gak bisa dipakai buat ambil keputusan cepat."
        subdescription="AI Business Assistant nyambungin semua data yang tadinya terpisah-pisah—dari produksi, logistik, sampai sales—jadi satu dashboard yang bisa diajak ngobrol. Mau tanya trend bulan ini? Mau prediksi masalah sebelum kejadian? Tinggal tanya, langsung dijawab dalam bahasa manusia. Bukan jargon teknis yang bikin pusing. Hasil? Keputusan lebih cepat, downtime turun, dan bisnis jalan lebih smooth."
      />

      {/* Problem Section */}
      <div className="bg-gray-50 py-8 md:py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 md:mb-6 text-center">
            Data Banyak, Insight Nol
          </h2>
          <p className="text-gray-600 text-lg mb-8 md:mb-12 text-center max-w-3xl mx-auto">
            Bisnis kumpulin data buanyak banget. Tapi pas butuh buat ambil
            keputusan? Lama, ribet, dan sering udah telat.
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
          AI yang Bisa Ngasih Tau Sebelum Kejadian
        </h2>
        <p className="text-gray-600 text-lg mb-8 md:mb-12 text-center max-w-3xl mx-auto">
          Gak cuma ngelapor apa yang udah terjadi. AI ini prediksi apa yang
          bakal terjadi—biar Anda bisa gerak duluan.
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
            Bukan Dashboard Biasa yang Cuma Nunjukin Grafik
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed max-w-4xl">
            Ini asisten pintar yang belajar dari history bisnis Anda. Dia
            nyambungin data dari berbagai departemen dan ngasih jawaban yang
            bisa langsung dieksekusi. Gak cuma nunjukin grafik naik-turun, tapi
            ngasih tau "ini masalahnya, ini solusinya" dalam bahasa yang Anda
            paham.
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
              Data Anda = Senjata Rahasia Anda
            </h2>
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-white/90 text-base md:text-lg mb-6 md:mb-8 leading-relaxed">
              Perusahaan manufacturing dan logistik yang maju udah pakai AI
              prediktif buat unggul dari kompetitor. Mereka gak nunggu laporan
              bulanan—mereka ambil action berdasarkan alert real-time. Kalau
              data Anda cuma numpuk tanpa dipakai, kompetitor yang bakal pakai
              duluan buat ngalahin Anda.
            </p>

            <Link
              href="https://wa.me/6282313271338?text=Halo%2C%20saya%20tertarik%20dengan%20AI%20Business%20Assistant.%20Saya%20datang%20dari%20website%20Anda."
              target="_blank"
              rel="noopener noreferrer"
              className="font-light bg-[#00A0E4] hover:bg-[#3B82F6]/90 text-white py-3 md:py-4 px-6 md:px-8 text-base md:text-lg rounded-lg w-fit"
            >
              Konsultasi Gratis
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIBusinessAssistant;
