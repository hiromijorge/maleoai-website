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
import { portfolios } from "../portfolioData";

export const metadata = {
  title:
    "Maleo AI Deepfake Detector - Perlindungan dari Hoaks dan Media Palsu | Maleo AI",
  description:
    "Sistem AI yang memeriksa keaslian suara, gambar, dan video untuk melindungi dari konten manipulatif dan hoaks. Dengan teknologi deep learning yang dilatih dari jutaan sampel sintetis untuk deteksi anomali visual dan audio.",
  keywords:
    "deteksi deepfake, verifikasi konten, deteksi hoaks, media buatan AI, keamanan informasi, kepercayaan publik, analisis forensik digital, deteksi manipulasi media",
  openGraph: {
    title:
      "Maleo AI Deepfake Detector - Verifikasi Keaslian Konten Sebelum Menyebar",
    description:
      "Lindungi reputasi dan integritas informasi dengan sistem deteksi deepfake yang transparan dan akurat untuk kebutuhan publik dan perusahaan.",
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
  const currentPath = "/id/portfolio/maleo-ai-deepfake-detector";
  const otherPortfolios = portfolios.filter(
    (portfolio) => portfolio.link !== currentPath
  );

  const solutions = [
    {
      icon: faVideoSlash,
      title: "Pemeriksa Konten AI Secara Real Time",
      description:
        "Mendeteksi gambar, video, dan audio hasil buatan AI dengan tingkat akurasi tinggi dalam waktu singkat.",
    },
    {
      icon: faTriangleExclamation,
      title: "Analisis Multi-Moda",
      description:
        "Memeriksa keaslian suara, gambar, dan video menggunakan teknologi pengenalan pola berbasis AI yang mutakhir.",
    },
    {
      icon: faMagnifyingGlass,
      title: "Arsitektur Berbasis Privasi",
      description:
        "Seluruh data diproses secara lokal atau di cloud dengan sistem keamanan penuh, transparan, dan memiliki catatan audit yang dapat ditelusuri.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Hero title="Maleo AI Deepfake Detector" />

      <Description
        title="Tetap Terlindungi dari Hoaks dan Informasi Menyesatkan"
        description="Maleo AI Deepfake Detector membantu Anda memverifikasi keaslian konten dan mendeteksi media buatan AI sebelum menyebarkan informasi yang salah."
        subdescription="Dengan teknologi deep learning canggih yang dilatih dari jutaan sampel sintetis, sistem ini menganalisis tanda-tanda visual halus, ketidaksesuaian audio, dan anomali waktu yang sering kali tidak bisa dideteksi oleh mata manusia. Dalam hitungan detik, Anda akan mendapatkan skor kepercayaan dan laporan forensik detail sebagai lini pertahanan pertama terhadap disinformasi dan manipulasi berbasis AI."
      />

      {/* How It Works Section */}
      <div className="bg-gray-50 py-8 md:py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 md:mb-6 text-center">
            Cara Kerja Maleo AI Deepfake Detector
          </h2>
          <p className="text-gray-600 text-lg mb-8 md:mb-12 text-center max-w-3xl mx-auto">
            Sistem deteksi multi-moda yang menganalisis keaslian konten secara
            menyeluruh.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm">
                <div className="mb-6">
                  <FontAwesomeIcon
                    icon={solution.icon}
                    className="text-[#FF6B2C] w-12 h-12"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-[#FF6B2C]">
                  {solution.title}
                </h3>
                <p className="text-gray-600">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Demo Video Section */}
      <div className="container mx-auto px-4 py-8 md:py-12 lg:py-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-8 md:mb-12 text-center">
          Lihat Demo Produk
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
            Keunggulan yang Membedakan
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed max-w-4xl">
            Maleo AI dirancang untuk kebutuhan publik maupun perusahaan, dengan
            keputusan AI yang transparan dan dapat dijelaskan. Akurasinya setara
            dengan standar kepatuhan industri dan regulasi, memastikan hasil
            yang dapat dipercaya untuk melindungi reputasi dan integritas
            informasi bisnis Anda.
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
