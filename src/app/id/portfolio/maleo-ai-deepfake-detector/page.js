import Description from "@/app/components/services/Description";
import Hero from "@/app/components/services/Hero";
import {
  faMagnifyingGlass,
  faTriangleExclamation,
  faVideoSlash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Maleo AI Deepfake Detector - Verifikasi Keaslian Video | Maleo AI",
  description:
    "Platform deteksi deepfake tingkat enterprise yang menganalisis keaslian konten suara, gambar, dan video. Lindungi brand Anda dari misinformasi yang dihasilkan AI dengan model deep learning canggih.",
  keywords:
    "deteksi deepfake, verifikasi video, deteksi media sintetis, keaslian AI, pencegahan misinformasi, verifikasi media, AI deepfake, analisis forensik",
  openGraph: {
    title: "Maleo AI Deepfake Detector - Deteksi Konten Palsu Sebelum Menyebar",
    description:
      "Verifikasi keaslian video dengan deteksi AI tingkat enterprise. Lindungi brand dan komunitas Anda dari deepfake.",
    type: "article",
    url: "https://maleoai.com/id/portfolio/maleo-ai-deepfake-detector",
  },
  alternates: {
    languages: {
      en: "https://maleoai.com/portfolio/maleo-ai-deepfake-detector",
      id: "https://maleoai.com/id/portfolio/maleo-ai-deepfake-detector",
    },
  },
};

const MaleoAIDeepfakeDetector = () => {
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

  const currentPath = "/id/portfolio/maleo-ai-deepfake-detector";
  const otherPortfolios = allPortfolios.filter(
    (portfolio) => portfolio.link !== currentPath
  );

  const problems = [
    {
      icon: faVideoSlash,
      title: "Deepfake Udah Terlalu Realistis",
      description:
        "Video palsu sekarang udah kayak asli. Mata manusia aja bisa ketipu. Gimana mau tau mana yang beneran?",
    },
    {
      icon: faTriangleExclamation,
      title: "Brand Anda Bisa Jadi Korban Kapan Aja",
      description:
        "Satu video palsu tentang brand Anda bisa viral dalam sejam. Reputasi yang dibangun bertahun-tahun bisa hancur semalam.",
    },
    {
      icon: faMagnifyingGlass,
      title: "Susah Cari Detector yang Bisa Dipercaya",
      description:
        "Tool yang ada mahal banget atau akurasinya ngaco. Buat keputusan penting, Anda butuh yang bener-bener reliable.",
    },
  ];

  const solutions = [
    {
      title: "Upload, Tunggu Sebentar, Hasil Keluar",
      description:
        "Integrasikan lewat API atau langsung upload ke dashboard kami. Gak perlu ribet setup macam-macam.",
    },
    {
      title: "Cek Audio, Video, Gambar—Semuanya",
      description:
        "Mau cek suara, foto, atau video? Bisa semua. AI kami analisis pola yang gak keliatan mata telanjang.",
    },
    {
      title: "Data Anda Aman, Gak Bocor Kemana-Mana",
      description:
        "Diproses lokal atau di cloud yang secure. Semua transparan, ada log audit lengkap. Privacy is priority.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Hero title="Maleo AI Deepfake Detector" />

      <Description
        title="Satu Video Palsu Bisa Hancurin Reputasi"
        description="Deepfake makin canggih, makin susah dibedain. Tapi tenang, detector kami bisa bedain mana asli mana palsu—dalam hitungan detik."
        subdescription="AI kami udah dilatih dengan jutaan sampel video, foto, dan audio palsu. Dia bisa ngeliat detail kecil yang mata manusia gak bakal ketangkep—mulai dari pixel yang aneh, suara yang gak natural, sampai gerakan yang janggal. Hasilnya? Skor keaslian yang akurat plus laporan lengkap. Biar Anda bisa cegah penyebaran konten palsu sebelum viral dan merusak brand."
      />

      {/* Problem Section */}
      <div className="bg-gray-50 py-8 md:py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 md:mb-6 text-center">
            Era Deepfake: Apa Lagi yang Bisa Dipercaya?
          </h2>
          <p className="text-gray-600 text-lg mb-8 md:mb-12 text-center max-w-3xl mx-auto">
            Perusahaan media, brand besar, sampai organisasi publik setiap hari
            terancam konten palsu. Dan cara manual? Udah gak mempan.
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
          AI Kami Bisa Bedain Asli vs Palsu
        </h2>
        <p className="text-gray-600 text-lg mb-8 md:mb-12 text-center max-w-3xl mx-auto">
          Upload konten, AI langsung analisis dari pixel sampai audio wave.
          Hasilnya? Skor keaslian yang jelas dan bisa Anda pakai buat ambil
          keputusan.
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

      {/* Demo Video Section */}
      <div className="container mx-auto px-4 py-8 md:py-12 lg:py-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-8 md:mb-12 text-center">
          Lihat dalam Aksi
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
              src="https://www.youtube.com/embed/G1NqhoSZqtg"
              title="Demo Maleo AI Deepfake Detector"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>

      {/* Differentiation Section */}
      <div className="bg-gray-50 py-8 md:py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 md:mb-8">
            Bukan Tool Asal-asalan Buat Main-main
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed max-w-4xl">
            Ini tool enterprise-grade buat institusi serius—media, pemerintah,
            tim security. Setiap hasil ada log audit lengkap, keputusan AI bisa
            dijelaskan, dan akurasinya memenuhi standar regulasi. Bukan cuma
            asal tebak, tapi beneran reliable buat keputusan penting.
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
              Jangan Tunggu Sampai Viral Baru Nyesel
            </h2>
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-white/90 text-base md:text-lg mb-6 md:mb-8 leading-relaxed">
              Deepfake bisa hancurin reputasi dalam semalam. Kepercayaan yang
              dibangun bertahun-tahun bisa lenyap dalam sejam. Media, institusi,
              dan perusahaan besar udah pakai verifikasi real-time buat lindungi
              kredibilitas mereka. Jangan tunggu krisis baru gerak.
            </p>

            <Link
              href="https://wa.me/6282313271338?text=Halo%2C%20saya%20tertarik%20dengan%20Maleo%20AI%20Deepfake%20Detector.%20Saya%20datang%20dari%20website%20Anda."
              target="_blank"
              rel="noopener noreferrer"
              className="font-light bg-[#00A0E4] hover:bg-[#3B82F6]/90 text-white py-3 md:py-4 px-6 md:px-8 text-base md:text-lg rounded-lg w-fit"
            >
              Coba Tool-nya Sekarang
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MaleoAIDeepfakeDetector;
