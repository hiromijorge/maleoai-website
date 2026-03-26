// Run: node scripts/seed-posts.mjs
import { createClient } from '@supabase/supabase-js';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

// Load .env.local manually
const __dir = dirname(fileURLToPath(import.meta.url));
const envFile = join(__dir, '..', '.env.local');
const env = Object.fromEntries(
  readFileSync(envFile, 'utf8')
    .split('\n')
    .filter(l => l && !l.startsWith('#') && l.includes('='))
    .map(l => l.split('=').map((v, i) => i === 0 ? v.trim() : v.trim()))
);

const supabase = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY);

const posts = [
  {
    slug: "panduan-lengkap-ai-automation-bisnis-2024",
    title: "Panduan Lengkap AI Automation untuk Bisnis di 2024",
    seo_title: "Panduan Lengkap AI Automation Bisnis 2024 | Maleo AI",
    meta_description: "Pelajari cara implementasi AI automation untuk meningkatkan efisiensi bisnis Anda. Panduan lengkap dari Maleo AI untuk transformasi digital yang sukses.",
    excerpt: "Temukan bagaimana AI automation dapat merevolusi operasional bisnis Anda dengan efisiensi tinggi dan biaya yang optimal.",
    content: `Artificial Intelligence (AI) telah menjadi kekuatan pendorong utama dalam transformasi digital bisnis modern. Dalam panduan lengkap ini, kita akan membahas implementasi AI automation yang efektif untuk berbagai skala bisnis.

## Apa itu AI Automation?

AI automation adalah penggunaan teknologi kecerdasan buatan untuk mengotomatisasi tugas-tugas yang sebelumnya memerlukan intervensi manusia. Teknologi ini menggabungkan machine learning, natural language processing, dan robotic process automation (RPA) untuk menciptakan sistem yang dapat belajar dan beradaptasi.

## Manfaat AI Automation untuk Bisnis

Berikut adalah manfaat utama yang dapat diperoleh bisnis dari implementasi AI automation:

### 1. Peningkatan Efisiensi Operasional

Dengan AI automation, tugas-tugas repetitif dapat diselesaikan dalam waktu yang jauh lebih singkat. Proses yang membutuhkan waktu berjam-jam dapat diselesaikan dalam hitungan menit dengan akurasi yang lebih tinggi.

### 2. Pengurangan Biaya Operasional

Otomatisasi mengurangi kebutuhan akan tenaga kerja manual untuk tugas-tugas rutin, sehingga mengurangi biaya operasional jangka panjang. Bisnis dapat mengalokasikan sumber daya manusia ke tugas-tugas yang lebih strategis.

### 3. Peningkatan Akurasi dan Kualitas

Sistem AI bekerja dengan konsistensi tinggi dan minim kesalahan. Hal ini sangat penting untuk proses-proses kritis seperti data entry, verifikasi dokumen, dan analisis data.

## Cara Implementasi AI Automation

Implementasi yang sukses memerlukan perencanaan yang matang. Berikut langkah-langkah kunci:

### Identifikasi Proses yang Cocok untuk Otomatisasi

Tidak semua proses cocok untuk otomatisasi. Fokus pada tugas-tugas yang repetitif, berbasis aturan, dan memiliki volume tinggi.

### Pilih Teknologi yang Tepat

Pilihan teknologi tergantung pada kebutuhan spesifik bisnis Anda. Chatbot untuk customer service, RPA untuk data processing, atau predictive analytics untuk forecasting.

## Kesimpulan

AI automation bukan lagi pilihan, tetapi kebutuhan untuk tetap kompetitif di era digital.`,
    author_name: "Andi Wijaya",
    author_role: "Chief Technology Officer",
    author_bio: "Andi memiliki pengalaman 10+ tahun dalam pengembangan AI solutions dan digital transformation untuk enterprise.",
    author_avatar: "/images/authors/andi-wijaya.png",
    author_linkedin: "https://linkedin.com/in/andiwijaya",
    author_twitter: "https://twitter.com/andiwijaya",
    category: "Artificial Intelligence",
    tags: ["AI", "Automation", "Digital Transformation", "Business"],
    publish_date: "2024-12-15",
    read_time: 8,
    featured_image: "/images/blog/ai-automation-guide.png",
    featured: true,
    status: "published",
  },
  {
    slug: "cara-membuat-chatbot-ai-customer-service",
    title: "Cara Membuat Chatbot AI untuk Customer Service yang Efektif",
    seo_title: "Cara Membuat Chatbot AI Customer Service | Maleo AI",
    meta_description: "Panduan praktis membangun chatbot AI untuk customer service. Tingkatkan kepuasan pelanggan dengan respons cepat 24/7 menggunakan teknologi NLP.",
    excerpt: "Pelajari langkah demi langkah membangun chatbot AI yang dapat meningkatkan kepuasan pelanggan dan mengurangi beban tim support Anda.",
    content: `Chatbot AI telah menjadi solusi penting untuk customer service modern. Dalam artikel ini, kita akan membahas cara membangun chatbot yang efektif dan ramah pengguna.

## Mengapa Chatbot AI Penting?

Customer service yang responsif adalah kunci keberhasilan bisnis. Chatbot AI memungkinkan bisnis memberikan dukungan 24/7 tanpa menambah beban tim manusia secara signifikan.

## Komponen Utama Chatbot AI

### Natural Language Processing (NLP)

NLP adalah teknologi inti yang memungkinkan chatbot memahami bahasa manusia. Sistem ini menganalisis intent, entitas, dan konteks dari pesan pengguna.

### Machine Learning Model

Model ML memungkinkan chatbot belajar dari interaksi sebelumnya dan meningkatkan akurasi respons dari waktu ke waktu.

## Langkah Implementasi

### 1. Definisikan Use Case

Tentukan apa yang ingin chatbot Anda lakukan. FAQ, troubleshooting, atau transaction processing? Fokus pada use case spesifik untuk hasil terbaik.

### 2. Desain Conversation Flow

Buat alur percakapan yang natural. Pertimbangkan berbagai skenario dan pastikan ada mekanisme untuk handover ke agen manusia jika diperlukan.

### 3. Training dan Testing

Latih chatbot dengan dataset yang representatif. Testing yang menyeluruh penting untuk memastikan chatbot siap production.

## Best Practices

Gunakan bahasa yang natural, sediakan opsi escalation, dan selalu pantau metrik performa untuk continuous improvement.`,
    author_name: "Rina Susanti",
    author_role: "AI Solutions Architect",
    author_bio: "Rina berspesialisasi dalam conversational AI dan telah mengimplementasikan chatbot untuk 50+ perusahaan di Asia Tenggara.",
    author_avatar: "/images/authors/rina-susanti.png",
    author_linkedin: "https://linkedin.com/in/rinasusanti",
    author_twitter: "https://twitter.com/rinasusanti",
    category: "Conversational AI",
    tags: ["Chatbot", "Customer Service", "NLP", "Conversational AI"],
    publish_date: "2024-12-10",
    read_time: 6,
    featured_image: "/images/blog/chatbot-customer-service.png",
    featured: false,
    status: "published",
  },
  {
    slug: "machine-learning-untuk-prediksi-penjualan",
    title: "Machine Learning untuk Prediksi Penjualan: Studi Kasus Retail",
    seo_title: "Machine Learning Prediksi Penjualan Retail | Maleo AI",
    meta_description: "Pelajari bagaimana machine learning membantu retail meningkatkan akurasi prediksi penjualan hingga 85%. Case study nyata dengan implementasi praktis.",
    excerpt: "Studi kasus implementasi machine learning untuk forecasting penjualan yang berhasil meningkatkan efisiensi inventory management.",
    content: `Prediksi penjualan yang akurat adalah kunci sukses dalam bisnis retail. Artikel ini membahas bagaimana machine learning dapat merevolusi cara bisnis Anda merencanakan inventory dan strategi penjualan.

## Tantangan Prediksi Penjualan Tradisional

Metode prediksi konvensional seringkali gagal menangkap pola kompleks dalam data penjualan. Faktor musiman, tren, dan event khusus sulit dimodelkan dengan metode statistik sederhana.

## Keunggulan Machine Learning

### Pattern Recognition

Algoritma ML dapat mengidentifikasi pola tersembunyi dalam data historis yang mungkin terlewat oleh analisis manual.

### Multi-factor Analysis

Sistem ML dapat memproses ratusan variabel secara simultan - cuaca, hari libur, promosi, bahkan sentimen media sosial.

## Studi Kasus: Retail Fashion

### Background

Sebuah jaringan retail fashion dengan 50+ store menghadapi masalah overstock dan stockout yang merugikan bisnis secara signifikan.

### Implementasi

Model predictive analytics dibangun menggunakan data 3 tahun terakhir. Features yang digunakan mencakup sales history, seasonal patterns, promotional calendar, dan external factors.

### Hasil

Akurasi prediksi meningkat dari 60% menjadi 85%. Inventory cost turun 20% dan customer satisfaction meningkat karena availability produk yang lebih baik.`,
    author_name: "Budi Santoso",
    author_role: "Data Science Lead",
    author_bio: "Budi adalah data scientist berpengalaman dengan spesialisasi dalam predictive modeling untuk industri retail dan e-commerce.",
    author_avatar: "/images/authors/budi-santoso.png",
    author_linkedin: "https://linkedin.com/in/budisantoso",
    author_twitter: "https://twitter.com/budisantoso",
    category: "Machine Learning",
    tags: ["Machine Learning", "Retail", "Predictive Analytics", "Forecasting"],
    publish_date: "2024-12-05",
    read_time: 10,
    featured_image: "/images/blog/ml-sales-prediction.png",
    featured: true,
    status: "published",
  },
];

console.log(`Seeding ${posts.length} posts to Supabase...`);

for (const post of posts) {
  const { data, error } = await supabase
    .from('posts')
    .upsert(post, { onConflict: 'slug' })
    .select('slug')
    .single();

  if (error) {
    console.error(`❌ Failed: ${post.slug}`, error.message);
  } else {
    console.log(`✅ ${post.slug}`);
  }
}

console.log('\nDone! Posts are now in Supabase.');
