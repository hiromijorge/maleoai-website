import Description from "@/app/components/services/Description";
import Hero from "@/app/components/services/Hero";
import {
  faCodeCompare,
  faCopy,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "AI Legal Document Assistant - Otomasi Review Kontrak | Maleo AI",
  description:
    "Asisten AI cerdas yang menyederhanakan review kontrak, perbandingan, dan analisis risiko. Pangkas waktu review legal hingga 50% dengan ekstraksi klausul otomatis, penandaan risiko, dan pemeriksaan kepatuhan.",
  keywords:
    "asisten legal AI, otomasi review kontrak, analisis dokumen legal, perbandingan kontrak AI, otomasi kepatuhan, teknologi legal, AI dokumen, intelijen kontrak",
  openGraph: {
    title: "AI Legal Document Assistant - Review Kontrak Cerdas",
    description:
      "Otomasi review dokumen legal dengan ekstraksi klausul bertenaga AI, analisis risiko, dan perbandingan versi.",
    type: "article",
    url: "https://maleoai.com/id/portfolio/ai-assistant-legal-documents",
  },
  alternates: {
    languages: {
      en: "https://maleoai.com/portfolio/ai-assistant-legal-documents",
      id: "https://maleoai.com/id/portfolio/ai-assistant-legal-documents",
    },
  },
};

const AIAssistantLegalDocuments = () => {
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

  const currentPath = "/id/portfolio/ai-assistant-legal-documents";
  const otherPortfolios = allPortfolios.filter(
    (portfolio) => portfolio.link !== currentPath
  );

  const problems = [
    {
      icon: faCopy,
      title: "Versi Dokumen Banyak, Bingung Mana yang Bener",
      description:
        "Versi 1, 2, 3, final, final-revisi, final-final... Bingung sendiri mana yang terbaru. Bahaya banget kalau yang diteken versi yang salah.",
    },
    {
      icon: faEyeSlash,
      title: "Klausul Bahaya Nyempil di Tengah-tengah",
      description:
        "Kontrak 100 halaman, klausul berisiko nyempil di halaman 73. Pas ketahuan? Udah telat, udah tanda tangan.",
    },
    {
      icon: faCodeCompare,
      title: "Bandingin Kontrak Lama vs Baru? Pegel!",
      description:
        "Scroll halaman 1-50, cek satu-satu apa yang berubah. Makan waktu berjam-jam. Deadline makin deket, stress makin tinggi.",
    },
  ];

  const solutions = [
    {
      title: "AI Tandain Klausul yang Bahaya",
      description:
        "Upload kontrak, AI langsung scan dan kasih tanda merah di klausul yang berisiko. Kewajiban tersembunyi? Langsung ketangkep.",
    },
    {
      title: "Bandingin Versi Lama vs Baru, Otomatis",
      description:
        "Upload dua versi, AI kasih tau apa aja yang berubah, ditambahin, atau dihapus. Gak perlu scroll bolak-balik.",
    },
    {
      title: "Ringkasan Singkat, Langsung ke Poin Penting",
      description:
        "Kontrak 100 halaman? AI bikin ringkasan 1 halaman dengan highlight red flag yang harus diperhatiin. Simple.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Hero title="AI Assistant for Legal Documents" />

      <Description
        title="Baca Kontrak 100 Halaman = Mata Pegal, Otak Buntu"
        description="Kontrak tebal penuh istilah legal bikin pusing. Tapi harus teliti kan? Satu klausul kelewat, bisa rugi besar."
        subdescription="AI Legal Assistant kami baca kontrak super cepat, tandain risiko yang tersembunyi, bandingin versi lama vs baru, dan kasih ringkasan yang gampang dipahami. Yang tadinya butuh berhari-hari buat review, sekarang cuma butuh beberapa menit. Tim legal Anda bisa kerja lebih cepat tanpa takut ada yang kelewat. Akurasi naik, waktu review turun 50%, dan Anda bisa pulang lebih cepat."
      />

      {/* Problem Section */}
      <div className="bg-gray-50 py-8 md:py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 md:mb-6 text-center">
            Review Legal = Buang-Buang Waktu Berharga
          </h2>
          <p className="text-gray-600 text-lg mb-8 md:mb-12 text-center max-w-3xl mx-auto">
            Baca manual, cek satu-satu, takut ada yang kelewat. Kejar deadline,
            risiko tinggi. Ada cara yang lebih cerdas.
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
          Biar AI yang Baca, Anda Tinggal Ambil Keputusan
        </h2>
        <p className="text-gray-600 text-lg mb-8 md:mb-12 text-center max-w-3xl mx-auto">
          Upload dokumen, AI langsung kerja. Ekstrak klausul, analisis risiko,
          bandingin versi. Cepat, akurat, gampang.
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
            Dilatih Khusus Buat Kontrak Legal
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed max-w-4xl">
            Ini bukan AI asal-asalan yang cuma copy-paste. AI kami dilatih
            khusus buat ngerti bahasa legal—klausul liability, indemnity,
            compliance requirement—semua dipahami dengan konteks. Hasilnya bukan
            cuma ekstrak data mentah, tapi penjelasan yang bisa langsung dipakai
            buat ambil keputusan.
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
              Kenapa Habiskan Hari-hari Kalau Bisa Selesai dalam Menit?
            </h2>
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-white/90 text-base md:text-lg mb-6 md:mb-8 leading-relaxed">
              Firma hukum dan tim legal perusahaan besar udah pakai AI buat
              percepat due diligence tanpa korbankan akurasi. Mereka gak
              ngebut-ngebut review manual sambil kesepakatan nunggu. Deal gak
              bisa nunggu. Kontrak terlalu penting buat proses yang lambat.
            </p>

            <Link
              href="https://wa.me/6282313271338?text=Halo%2C%20saya%20tertarik%20dengan%20AI%20Assistant%20for%20Legal%20Documents.%20Saya%20datang%20dari%20website%20Anda."
              target="_blank"
              rel="noopener noreferrer"
              className="font-light bg-[#00A0E4] hover:bg-[#3B82F6]/90 text-white py-3 md:py-4 px-6 md:px-8 text-base md:text-lg rounded-lg w-fit"
            >
              Cobain Sekarang
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIAssistantLegalDocuments;
