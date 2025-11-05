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
import { portfolios } from "../portfolioData";

export const metadata = {
  title:
    "AI Business Assistant - Sistem Pengetahuan AI untuk Pengambil Keputusan | Maleo AI",
  description:
    "Asisten bisnis AI yang menghubungkan data produksi, logistik, dan penjualan menjadi satu sistem intelijen percakapan. Prediksi masalah sebelum terjadi, percepat pengambilan keputusan hingga 40%, kurangi downtime hingga 25%, dan dapatkan visibilitas transparan lintas departemen.",
  keywords:
    "asisten bisnis AI, intelijen prediktif, analitik real time, keputusan berbasis data, visibilitas lintas departemen, dashboard BI, sistem pengetahuan AI, prediksi maintenance, optimasi rantai pasokan",
  openGraph: {
    title:
      "AI Business Assistant - Intelijen Prediktif untuk Operasional yang Lebih Cerdas",
    description:
      "Kurangi downtime, optimalkan perencanaan bisnis dengan sistem AI yang mempercepat keputusan hingga 40% dan meningkatkan efisiensi di seluruh rantai pasok.",
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
  const currentPath = "/id/portfolio/ai-business-assistant";
  const otherPortfolios = portfolios.filter(
    (portfolio) => portfolio.link !== currentPath
  );

  const problems = [
    {
      icon: faExclamationTriangle,
      title: "Masalah Bisnis Tak Terduga",
      description:
        "Masalah kritis baru terlihat setelah dampaknya muncul karena analisis tidak dilakukan secara real time.",
    },
    {
      icon: faFileLines,
      title: "Laporan Manual yang Memakan Waktu",
      description:
        "Tim menghabiskan waktu berhari-hari menyusun laporan, padahal keputusan harus dibuat dalam hitungan jam.",
    },
    {
      icon: faChainBroken,
      title: "Data yang Terfragmentasi",
      description:
        "Saat masalah mendesak muncul, data yang tersebar di berbagai departemen membuat keputusan terlambat dan bisnis berisiko kehilangan kendali.",
    },
  ];

  const solutions = [
    {
      title: "Peringatan Prediktif",
      description:
        "Terima peringatan sebelum masalah terjadi, memungkinkan Anda mengambil tindakan proaktif daripada bereaksi setelah kejadian.",
    },
    {
      title: "Analitik Otomatis dalam Bahasa yang Mudah Dipahami",
      description:
        "Ajukan pertanyaan kompleks dan dapatkan jawaban yang jelas dan kontekstual secara instan.",
    },
    {
      title: "Visibilitas Lintas Departemen Secara Real Time",
      description:
        "Dashboard terpadu yang mempelajari pola bisnis Anda dan memberikan rekomendasi cerdas yang dapat ditindaklanjuti.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Hero
        title="Asisten Bisnis AI"
        subtitle="Sistem Pengetahuan AI untuk Pengambil Keputusan Bisnis"
      />

      <Description
        title="Intelijen Prediktif untuk Operasional Anda"
        description="Kurangi downtime, optimalkan perencanaan bisnis dan buat keputusan lebih cepat berbasis data di seluruh rantai pasok bisnis Anda."
        subdescription="Dengan menghubungkan data dari produksi, logistik, dan penjualan ke dalam satu antarmuka percakapan, asisten AI ini berfungsi layaknya analis bisnis pribadi yang selalu siap membantu. Ia dapat membuat laporan khusus sesuai permintaan, mendeteksi tren sejak dini sebelum menjadi masalah, dan memberikan rekomendasi strategis agar bisnis Anda tetap lincah, kompetitif, dan selalu mengambil keputusan yang tepat."
      />

      {/* Problem Section */}
      <div className="bg-gray-50 py-8 md:py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 md:mb-6 text-center">
            Tantangan yang Dihadapi
          </h2>
          <h3 className="text-xl md:text-2xl font-semibold mb-4 text-center text-[#FF6B2C]">
            Informasi Datang Terlambat
          </h3>
          <p className="text-gray-600 text-lg mb-8 md:mb-12 text-center max-w-3xl mx-auto">
            Bisnis mengumpulkan data dalam jumlah besar, tetapi siklus keputusan
            yang lambat dan informasi yang terputus memakan waktu dan biaya.
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
          Bagaimana AI Business Assistant Mengatasi Ini
        </h2>
        <p className="text-gray-600 text-lg mb-4 text-center max-w-3xl mx-auto">
          Sistem ini menyatukan semua data Anda dari produksi, logistik,
          penjualan, dan operasi ke dalam satu lapisan intelijen percakapan.
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
            Apa yang Membuatnya Berbeda
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed max-w-4xl">
            Tidak seperti dashboard BI tradisional, asisten ini memahami
            konteks. Tanyakan, "Tampilkan varians kinerja untuk Q2 dan prediksi
            risiko kuartal berikutnya," dan sistem akan merespons dengan data
            dan alasan di baliknya. Asisten ini berbicara dalam bahasa industri
            Anda dan terus belajar dari pola historis Anda.
          </p>
        </div>
      </div>

      {/* Portfolio Navigation Section */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-10 md:mb-16">
            Karya Lainnya dari Kami
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
              Hadirkan Intelijen Prediktif ke Operasional Anda
            </h2>
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-white/90 text-base md:text-lg mb-6 md:mb-8 leading-relaxed">
              Kompetitor Anda membuat keputusan lebih cepat dengan wawasan
              bertenaga AI sementara Anda masih menunggu laporan minggu lalu.
              Perusahaan terkemuka telah mengurangi downtime sebesar 25% dan
              mempercepat pengambilan keputusan sebesar 40%. Pertanyaannya bukan
              apakah harus mengadopsi AI, tetapi apakah Anda mampu menunggu.
            </p>

            <Link
              href="https://wa.me/6282313271338?text=Halo%2C%20saya%20tertarik%20dengan%20AI%20Business%20Assistant.%20Saya%20datang%20dari%20website%20Anda."
              target="_blank"
              rel="noopener noreferrer"
              className="font-light bg-[#00A0E4] hover:bg-[#3B82F6]/90 text-white py-3 md:py-4 px-6 md:px-8 text-base md:text-lg rounded-lg w-fit"
            >
              Jadwalkan Konsultasi
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIBusinessAssistant;
