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
import { portfolios } from "../portfolioData";

export const metadata = {
  title:
    "AI Digital Supervisor - Operasional Lapangan yang Lebih Cerdas | Maleo AI",
  description:
    "Asisten AI berbasis WhatsApp yang mengotomasi checklist harian, kepatuhan SOP, dan pelacakan kinerja dengan data perilaku kerja objektif. Analisis real-time untuk tim konstruksi, manufaktur, dan perhotelan.",
  keywords:
    "AI supervisor, otomasi operasional lapangan, asisten AI WhatsApp, kepatuhan SOP, pelacakan kinerja objektif, analisis perilaku kerja, dashboard AI, verifikasi tugas real time, AR tutorial lapangan",
  openGraph: {
    title: "AI Digital Supervisor - Akuntabilitas Real Time untuk Tim Lapangan",
    description:
      "Otomasi pengawasan harian dengan verifikasi foto/video, analisis perilaku kerja, dan dashboard AI untuk keputusan yang lebih akurat.",
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
  const currentPath = "/id/portfolio/ai-digital-supervisor";
  const otherPortfolios = portfolios.filter(
    (portfolio) => portfolio.link !== currentPath
  );

  const problems = [
    {
      icon: faCircleXmark,
      title: "Checklist palsu dan laporan tidak konsisten",
      description:
        "Sulit memastikan pekerjaan benar-benar selesai sesuai standar.",
    },
    {
      icon: faClock,
      title: "Verifikasi manual buang waktu",
      description:
        "Supervisor harus terus mengejar bukti kerja dan memeriksa satu per satu tugas secara manual.",
    },
    {
      icon: faRotate,
      title: "Pelatihan tidak bertahan lama",
      description:
        "Kesalahan terus berulang karena karyawan tidak mengingat lagi informasi dan hasil pelatihan tidak terbawa ke perilaku nyata di lapangan.",
    },
  ];

  const solutions = [
    {
      title: "Checklist Harian Otomatis & Tercatat",
      description:
        "Tugas harian dikirim otomatis ke anggota tim, dan setiap aktivitas tercatat secara real time.",
    },
    {
      title: "Bukti Pekerjaan Terverifikasi",
      description:
        "Supervisor dapat mengonfirmasi tugas selesai dengan bukti foto atau video yang nyata.",
    },
    {
      title: "Dashboard Kinerja Berbasis AI",
      description:
        "Menampilkan tingkat penyelesaian, keterlambatan, dan skor kinerja, sehingga manajer punya pandangan objektif terhadap performa tim (Objective performance review).",
    },
  ];

  return (
    <div className="min-h-screen">
      <Hero title="AI Digital Supervisor" />

      <Description
        title="Operasional Lapangan yang Lebih Cerdas, Akuntabilitas Secara Real Time"
        description="Asisten AI berbasis WhatsApp yang mengotomatiskan checklist harian, kepatuhan SOP, dan pelacakan kinerja. Dirancang untuk tim lintas industri yang mengutamakan konsistensi dan bukti kerja."
        subdescription="Fitur utamanya mencakup pengingat tugas, verifikasi foto dan video (jika diperlukan), analisis perilaku kerja, panduan visual berbasis AR untuk instruksi di lapangan, serta dashboard real time bagi manajer untuk memantau dan menyetujui progres."
      />

      {/* Problem Section */}
      <div className="bg-gray-50 py-8 md:py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 md:mb-6 text-center">
            Tantangan yang Sering Terjadi
          </h2>
          <p className="text-gray-600 text-lg mb-8 md:mb-12 text-center max-w-3xl mx-auto">
            Mengelola tim yang berada di berbagai lokasi (termasuk luar kota)
            itu rumit. Pemilik bisnis dan pengambil keputusan sering kehilangan
            waktu karena visibilitas yang minim dan kurangnya kontrol, sehingga
            meningkatkan potensi Fraud yang mengakibatkan kerugian bisnis.
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
          Solusi dari AI Digital Supervisor
        </h2>
        <p className="text-gray-600 text-lg mb-8 md:mb-12 text-center max-w-3xl mx-auto">
          Asisten ini mengotomatisasi pengawasan harian langsung lewat WhatsApp
          karyawan, tanpa perlu instal aplikasi baru.
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
          Lihat Demo Produk
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
            Keunggulan yang Membedakan
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed max-w-4xl mb-4">
            Berbeda dari aplikasi absen atau task tracker biasa, sistem ini
            dirancang untuk memahami setiap peran di industri masing-masing.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed max-w-4xl mb-4">
            Pemilik bisnis dan manajer mendapatkan gambaran objektif tentang
            performa tim berdasarkan data perilaku kerja yang nyata yang
            semuanya berjalan lewat WhatsApp.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed max-w-4xl">
            Tim Anda tidak perlu adaptasi aplikasi baru, jadi penggunaannya
            langsung mudah dan cepat. Sebagai manajer atau pemilik bisnis, Anda
            bisa memantau progres lewat dashboard yang membantu mengambil
            keputusan lebih akurat termasuk untuk promosi, bonus, atau evaluasi.
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
