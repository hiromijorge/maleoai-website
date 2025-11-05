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
  title:
    "AI Legal Document Assistant - Review Kontrak dengan Bantuan AI | Maleo AI",
  description:
    "Pemeriksa dokumen legal cerdas yang membantu menganalisis kontrak, mengurangi waktu review, dan memastikan keselarasan regulasi. AI membantu ekstraksi klausul, penandaan risiko, dan perbandingan versi sambil menjaga manusia tetap dalam kontrol keputusan final.",
  keywords:
    "asisten legal AI, otomasi review kontrak, analisis dokumen legal, perbandingan kontrak AI, dukungan kepatuhan, teknologi legal, AI dokumen, intelijen kontrak, pengawasan manusia, kepatuhan siap audit, ekstraksi klausul, analisis risiko",
  openGraph: {
    title:
      "AI Legal Document Assistant - Review Lebih Cepat dengan Pengawasan Manusia",
    description:
      "Review dokumen legal dengan bantuan AI yang membantu tim bekerja secara signifikan lebih cepat sambil mempertahankan kontrol manusia. Kurangi waktu review hingga 50%, kurangi kesalahan, dan pastikan kepatuhan siap audit.",
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
      subtitle: "Informasi Data dan Operasi Prediktif",
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
      title: "Versi Dokumen yang Tidak Konsisten",
      description:
        "Beberapa versi beredar sekaligus menciptakan kebingungan dan meningkatkan risiko kepatuhan.",
    },
    {
      icon: faEyeSlash,
      title: "Klausul Risiko Tersembunyi",
      description:
        "Tanda bahaya penting yang terkubur jauh di dalam dokumen panjang sering tidak terperhatikan sampai terlambat.",
    },
    {
      icon: faCodeCompare,
      title: "Perbandingan Manual di Bawah Tekanan",
      description:
        "Tim menghabiskan waktu berjam-jam membandingkan kontrak baris demi baris sementara tenggat waktu mendekat.",
    },
  ];

  const solutions = [
    {
      title: "Ekstraksi Klausul dan Penandaan Risiko",
      description:
        "Secara otomatis mengidentifikasi dan menandai klausul berisiko, liabilitas, dan persyaratan tidak biasa untuk validasi lebih cepat.",
    },
    {
      title: "Perbandingan Kontrak (Lama vs Baru)",
      description:
        "Dengan cepat membandingkan versi dan menyoroti perubahan, penghapusan, dan penambahan dengan konteks penuh.",
    },
    {
      title: "Ringkasan Otomatis dan Sorotan Tanda Bahaya",
      description:
        "Menghasilkan ringkasan ringkas dengan isu kritis yang disorot dengan jelas untuk review manusia.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Hero title="AI Assistant for Legal Documents" />

      <Description
        title="Bayangkan memiliki pemeriksa dokumen legal cerdas yang membantu Anda menganalisis setiap kontrak, mengurangi waktu review, dan memastikan dokumen selaras dengan regulasi yang tepat."
        description="Asisten ini membantu tim legal Anda bekerja secara signifikan lebih cepat, mengurangi kesalahan manusia, dan mempertahankan kepatuhan siap audit di semua dokumen. Ini mendukung reviewer manusia, membantu mereka dengan cepat memverifikasi ratusan klausul dan parafrase yang sebaliknya akan memakan waktu berhari-hari untuk memeriksa secara manual."
        subdescription="Didukung oleh pemrosesan bahasa alami canggih yang dilatih pada terminologi legal dan struktur kontrak, AI mengekstrak klausul kunci, menandai potensi risiko, membandingkan versi dokumen secara berdampingan, dan memberikan informasi konsisten di seluruh portofolio kontrak Anda. Ini mengubah pekerjaan review yang lambat dan berulang menjadi analisis yang cepat dan terstruktur sambil menjaga manusia tetap dalam kontrol setiap keputusan akhir."
      />

      {/* Problem Section */}
      <div className="bg-gray-50 py-8 md:py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 md:mb-6 text-center">
            Masalahnya
          </h2>
          <h3 className="text-xl md:text-2xl font-semibold mb-4 text-center text-[#FF6B2C]">
            Tim Legal Kehilangan Jam untuk Pemeriksaan Berulang
          </h3>
          <p className="text-gray-600 text-lg mb-8 md:mb-12 text-center max-w-3xl mx-auto">
            Review manual di bawah tenggat waktu ketat sering menyebabkan risiko
            yang terlewat dan kesenjangan kepatuhan.
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
          Bagaimana Asisten AI Legal Mengatasi Ini
        </h2>
        <h3 className="text-xl md:text-2xl font-semibold mb-4 text-center text-[#FF6B2C]">
          Pembacaan Cerdas dan Ringkasan Instan
        </h3>
        <p className="text-gray-600 text-lg mb-8 md:mb-12 text-center max-w-3xl mx-auto">
          Membaca, merangkum, dan menandai masalah dalam hitungan detik,
          memberikan tim Anda titik awal yang jelas untuk review.
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
            Dibangun untuk industri legal dan yang diatur, asisten AI ini
            membantu tim bekerja lebih cepat tanpa mengorbankan akurasi. Ini
            membantu dengan kepatuhan tetapi tidak dapat menjaminnya, karena
            review legal selalu memerlukan penilaian manusia.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed max-w-4xl mt-4">
            Ini tidak menggantikan pengacara atau paralegal; ini membantu mereka
            fokus pada keputusan bernilai tinggi sementara AI menangani analisis
            berulang. Dokumen dapat diproses secara lokal atau dengan aman di
            lingkungan cloud pribadi, memastikan kontrol data dan privasi.
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
              Otomatiskan Review Legal Anda dengan Aman
            </h2>
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-white/90 text-base md:text-lg mb-6 md:mb-8 leading-relaxed">
              Satu klausul yang terlewat dapat merugikan jutaan. Tim legal di
              firma terkemuka telah memotong waktu review hingga setengahnya
              sambil menangkap lebih banyak risiko daripada sebelumnya. Dokumen
              Anda tetap privat, kepatuhan Anda tetap utuh, dan tim Anda tetap
              fokus pada strategi, bukan pemeriksaan silang manual.
            </p>

            <Link
              href="https://wa.me/6282313271338?text=Halo%2C%20saya%20tertarik%20dengan%20AI%20Assistant%20for%20Legal%20Documents.%20Saya%20datang%20dari%20website%20Anda."
              target="_blank"
              rel="noopener noreferrer"
              className="font-light bg-[#00A0E4] hover:bg-[#3B82F6]/90 text-white py-3 md:py-4 px-6 md:px-8 text-base md:text-lg rounded-lg w-fit"
            >
              Minta Demo Privat
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIAssistantLegalDocuments;
