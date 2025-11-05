import Description from "@/app/components/services/Description";
import Hero from "@/app/components/services/Hero";
import {
  faArrowsRotate,
  faCommentSlash,
  faLanguage,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";
import { portfolios } from "../portfolioData";

export const metadata = {
  title: "Maleo AI Chatbot - Layanan Pelanggan 24 Jam Multibahasa | Maleo AI",
  description:
    "Asisten chat khusus yang dirancang sesuai kebutuhan bisnis Anda. Menjawab pertanyaan, menangani reservasi, mengirim pesan tindak lanjut, dan melakukan upselling dalam Bahasa Indonesia, Inggris, dan Mandarin melalui WhatsApp, Instagram, dan web.",
  keywords:
    "chatbot AI custom, asisten chat multibahasa, pesan tindak lanjut otomatis, upselling AI, chatbot WhatsApp, chatbot perhotelan, chatbot retail, layanan pelanggan 24/7, update knowledge base",
  openGraph: {
    title:
      "Maleo AI Chatbot - Asisten Chat Custom dengan Follow-up dan Upselling",
    description:
      "Layanan pelanggan 24 jam dengan kemampuan follow-up dan upselling. Dirancang khusus untuk kebutuhan bisnis Anda dengan pelatihan mandiri untuk admin.",
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
  const currentPath = "/id/portfolio/customer-service-chatbot";
  const otherPortfolios = portfolios.filter(
    (portfolio) => portfolio.link !== currentPath
  );

  const problems = [
    {
      icon: faCommentSlash,
      title: "Respons Instan Tanpa Waktu Tunggu",
      description:
        "Menjawab pertanyaan pelanggan secara otomatis, kapan pun, tanpa ada pesan yang terlewat.",
    },
    {
      icon: faLanguage,
      title: "Menangani Ribuan Percakapan Sekaligus",
      description:
        "Mengelola interaksi tak terbatas di WhatsApp, Instagram, dan situs web secara bersamaan.",
    },
    {
      icon: faArrowsRotate,
      title: "Membebaskan Tim dari Pekerjaan Rutin",
      description:
        "Tim Anda bisa fokus pada layanan bernilai tinggi, sementara AI menangani pertanyaan berulang.",
    },
  ];

  const solutions = [
    {
      title: "Respons Instan Tanpa Waktu Tunggu",
      description:
        "Menjawab pertanyaan pelanggan secara otomatis, kapan pun, tanpa ada pesan yang terlewat.",
    },
    {
      title: "Menangani Ribuan Percakapan Sekaligus",
      description:
        "Mengelola interaksi tak terbatas di WhatsApp, Instagram, dan situs web secara bersamaan.",
    },
    {
      title: "Membebaskan Tim dari Pekerjaan Rutin",
      description:
        "Tim Anda bisa fokus pada layanan bernilai tinggi, sementara AI menangani pertanyaan berulang.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Hero title="Maleo AI Chatbot" />

      <Description
        title="Layanan Pelanggan 24 Jam dalam Bahasa Inggris, Mandarin, dan Indonesia"
        description="Berikan pelayanan cepat dan konsisten kapan pun tanpa jeda, agar tim Anda bisa fokus pada tamu bukan membalas semua pesan di inbox."
        subdescription="Asisten chat kami dirancang khusus sesuai kebutuhan bisnis Anda. Ia dapat menjawab pertanyaan, membagikan informasi, dan menangani permintaan reservasi dengan alur percakapan yang alami. Selain itu, asisten ini juga bisa mengirim pesan tindak lanjut, mempromosikan penawaran, dan melakukan upselling kepada calon pelanggan dalam berbagai bahasa sementara tim Anda tetap fokus memberikan pengalaman langsung yang berkesan."
      />

      {/* Problem Section */}
      {/* <div className="bg-gray-50 py-8 md:py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 md:mb-6 text-center">
            Tantangan di Layanan Pelanggan Skala Besar
          </h2>
          <p className="text-gray-600 text-lg mb-8 md:mb-12 text-center max-w-3xl mx-auto">
            Mengelola komunikasi lintas bahasa dan platform bisa sangat
            melelahkan.
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
      </div> */}

      {/* Solution Section */}
      <div className="container mx-auto px-4 py-8 md:py-12 lg:py-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 md:mb-6 text-center">
          Solusi dari Maleo AI Chatbot
        </h2>
        <p className="text-gray-600 text-lg mb-8 md:mb-12 text-center max-w-3xl mx-auto">
          Asisten chat yang dirancang khusus sesuai kebutuhan bisnis Anda dengan
          kemampuan follow-up dan upselling.
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
            Keunggulan yang Membedakan
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed max-w-4xl mb-4">
            Ini bukan chatbot generik. Sistem ini dilatih khusus untuk industri
            Anda, memahami konteks dan gaya komunikasi, serta mampu berganti
            bahasa dengan mulus antara Inggris, Mandarin, dan Bahasa Indonesia.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed max-w-4xl mb-4">
            Tujuannya bukan menggantikan tim layanan pelanggan Anda, tapi
            memperluas jangkauan mereka agar bisnis bisa tetap memberikan
            dukungan penuh 24 jam tanpa harus menambah staf.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed max-w-4xl">
            Kami juga melatih admin Anda untuk memperbarui basis pengetahuan
            secara mandiri, dan tim kami selalu siap mendampingi agar AI tetap
            akurat dan andal.
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
