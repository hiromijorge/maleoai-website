import Description from "@/app/components/services/Description";
import Hero from "@/app/components/services/Hero";
import {
  faCircleXmark,
  faClock,
  faRotate,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "AI Digital Supervisor - Otomasi Operasional Lapangan | Maleo AI",
  description:
    "Asisten AI berbasis WhatsApp yang mengotomasi checklist harian, kepatuhan SOP, dan pelacakan kinerja untuk tim konstruksi, manufaktur, dan perhotelan. Kurangi waktu supervisi hingga 40%.",
  keywords:
    "AI supervisor, otomasi operasional lapangan, asisten AI WhatsApp, kepatuhan SOP, pelacakan kinerja, otomasi manufaktur, manajemen konstruksi, verifikasi tugas",
  openGraph: {
    title: "AI Digital Supervisor - Operasional Lapangan yang Lebih Cerdas",
    description:
      "Otomasi operasional lapangan dengan verifikasi tugas bertenaga AI dan akuntabilitas real-time melalui WhatsApp.",
    type: "article",
    url: "https://maleoai.com/id/portfolio/ai-digital-supervisor",
  },
  alternates: {
    languages: {
      en: "https://maleoai.com/portfolio/ai-digital-supervisor",
      id: "https://maleoai.com/id/portfolio/ai-digital-supervisor",
    },
  },
};

const AIDigitalSupervisor = () => {
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

  const currentPath = "/id/portfolio/ai-digital-supervisor";
  const otherPortfolios = allPortfolios.filter(
    (portfolio) => portfolio.link !== currentPath
  );

  const problems = [
    {
      icon: faCircleXmark,
      title: "Checklist Cuma Formalitas Doang",
      description:
        "Tim lapangan centang semua tanpa ngerjain beneran. Pas ada masalah, baru ketahuan mereka bohong.",
    },
    {
      icon: faClock,
      title: "Supervisor Keliling Terus, Tetep Aja Kecolongan",
      description:
        "Supervisor habis waktu berjam-jam keliling cek kerjaan. Udah capek, tetep aja ada yang lolos.",
    },
    {
      icon: faRotate,
      title: "Training Mahal, Tapi Lupa Lagi",
      description:
        "Abis training mahal-mahal, seminggu kemudian tim balik lagi ke kebiasaan lama. Uang buang percuma.",
    },
  ];

  const solutions = [
    {
      title: "Checklist Otomatis Langsung ke HP Tim",
      description:
        "Pagi-pagi, tugas harian udah masuk WhatsApp masing-masing. Selesai satu, langsung ketandain. Real-time.",
    },
    {
      title: "AI Cek Foto & Video, Gak Bisa Diakali",
      description:
        "Upload foto sembarangan? AI langsung tau itu foto lama atau palsu. Semua bukti kerja terverifikasi otomatis.",
    },
    {
      title: "Dashboard Sekali Lihat, Semua Jelas",
      description:
        "Buka dashboard, langsung tau siapa yang udah selesai, siapa yang telat, dan siapa yang bolos. Tanpa perlu tanya satu-satu.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Hero title="AI Digital Supervisor" />

      <Description
        title="Supervisor Digital yang Gak Pernah Tidur"
        description="Bayangkan punya supervisor yang bisa cek pekerjaan 50 orang sekaligus, gak pernah capek, dan gak pernah lupa. Itulah AI Digital Supervisor."
        subdescription="Lewat WhatsApp—aplikasi yang udah dipake tim Anda sehari-hari—sistem ini verifikasi setiap tugas pakai computer vision. Foto palsu? Ketahuan. Laporan fiktif? Langsung ketangkep. Hasilnya? Waktu supervisi turun 40%, akuntabilitas naik drastis, dan Anda punya data lapangan yang bisa dipercaya 100%."
      />

      {/* Problem Section */}
      <div className="bg-gray-50 py-8 md:py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 md:mb-6 text-center">
            Kerja Lapangan Itu Susah Dikontrol
          </h2>
          <p className="text-gray-600 text-lg mb-8 md:mb-12 text-center max-w-3xl mx-auto">
            Jarak jauh, banyak lokasi, dan supervisor cuma punya dua mata. Ini
            masalah klasik yang bikin kepala pusing setiap hari.
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
          Solusinya? Automasi + AI Verifikasi
        </h2>
        <p className="text-gray-600 text-lg mb-8 md:mb-12 text-center max-w-3xl mx-auto">
          Semua jalan lewat WhatsApp. Gak perlu install aplikasi baru, gak perlu
          training ribet. Langsung pakai.
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
              src="https://www.youtube.com/embed/OgkdVWe-U8Y?si=M85LZVPWJaMja8ok"
              title="Demo AI Digital Supervisor"
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
            Kenapa Beda dari Apps Lain?
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed max-w-4xl">
            Aplikasi task manager lain bikin ribet—harus install, harus login,
            harus training. Sistem kami? Jalan di WhatsApp yang udah semua orang
            punya. Langsung pakai pagi ini, langsung jalan sore ini. Plus, kami
            paham kebutuhan spesifik industri konstruksi, pabrik, dan hotel.
            Bukan cuma to-do list biasa.
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
              Mau Lihat Cara Kerjanya?
            </h2>
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-white/90 text-base md:text-lg mb-6 md:mb-8 leading-relaxed">
              Perusahaan konstruksi, pabrik, dan hotel udah pakai ini buat
              potong waktu supervisi 40%. Akuntabilitas naik, drama turun.
              Spreadsheet dan nebak-nebak udah gak jaman. Saatnya pakai sistem
              yang bener-bener kerja.
            </p>

            <Link
              href="https://wa.me/6282313271338?text=Halo%2C%20saya%20tertarik%20dengan%20AI%20Digital%20Supervisor.%20Saya%20datang%20dari%20website%20Anda."
              target="_blank"
              rel="noopener noreferrer"
              className="font-light bg-[#00A0E4] hover:bg-[#3B82F6]/90 text-white py-3 md:py-4 px-6 md:px-8 text-base md:text-lg rounded-lg w-fit"
            >
              Chat Kami, Tanya-Tanya Dulu
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIDigitalSupervisor;
