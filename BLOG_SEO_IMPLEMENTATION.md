# Implementasi Blog SEO - Maleo AI Website

Dokumentasi lengkap fitur-fitur SEO dan struktur blog yang telah diimplementasikan.

## 📁 Struktur URL

```
maleo.ai/insights/                          → Halaman list artikel
maleo.ai/insights/judul-artikel/            → Halaman detail artikel
maleo.ai/insights/category/nama-kategori/   → Filter kategori (siap dikembangkan)
```

## ✅ Fitur SEO yang Diimplementasikan

### 1. Struktur URL Rapi & SEO-Friendly
- **Format**: `maleo.ai/insights/judul-artikel`
- Menggunakan slug yang bersih dan mengandung kata kunci
- Implementasi di: `src/app/insights/[slug]/page.js`

### 2. Metadata (SEO Title & Meta Description)
Setiap artikel memiliki kolom khusus:
- `seoTitle`: Title untuk SEO (optimal: 50-60 karakter)
- `metaDescription`: Deskripsi untuk SEO (optimal: 150-160 karakter)
- Open Graph tags untuk social media sharing
- Twitter Card tags
- Canonical URL

Implementasi: `src/data/blogData.js` dan `src/app/insights/[slug]/page.js`

### 3. Struktur Konten (Heading Hierarchy)
- **H1**: Judul artikel (satu per halaman)
- **H2**: Section utama
- **H3**: Sub-section
- Table of Contents otomatis dari heading H2 & H3
- Smooth scrolling ke section

Implementasi: `src/lib/seo-utils.js` (extractHeadings, addHeadingIds)

### 4. Optimasi Gambar
- Format: WebP (dengan fallback PNG/JPEG)
- Next.js Image component dengan:
  - Lazy loading (`loading="lazy"`)
  - Priority loading untuk featured image (`priority`)
  - Responsive sizes
  - Blur placeholder
  - Quality optimization (85%)

Implementasi: `src/app/components/blog/BlogContent.js`

### 5. Schema Markup (JSON-LD)
Structured data untuk Google dan AI (ChatGPT/Gemini):

**Article Schema**:
```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "...",
  "author": { "@type": "Person", "name": "..." },
  "publisher": { "@type": "Organization", "name": "Maleo AI" },
  "datePublished": "...",
  "dateModified": "..."
}
```

**BreadcrumbList Schema**:
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [...]
}
```

Implementasi: `src/lib/seo-utils.js` dan `src/app/components/blog/Breadcrumbs.js`

### 6. Mobile Friendly
- Font minimal 16px (mencegah zoom di iOS Safari)
- Responsive typography dengan `clamp()`
- Touch-friendly navigation
- Responsive grid layout

Implementasi: `src/app/globals.css`

### 7. Breadcrumbs Navigation
- Visual navigation: Home > Insights > Category > Article
- Schema.org BreadcrumbList markup
- Mobile-responsive dengan collapse

Implementasi: `src/app/components/blog/Breadcrumbs.js`

### 8. Author Box (E-E-A-T)
Menampilkan:
- Foto penulis
- Nama & Jabatan
- Bio/social proof
- Social media links
- Tanggal publish & read time

Implementasi: `src/app/components/blog/AuthorBox.js`

### 9. Table of Contents
- Otomatis generate dari heading H2 & H3
- Sticky sidebar di desktop
- Collapsible di mobile
- Active section highlighting
- Smooth scroll navigation

Implementasi: `src/app/components/blog/TableOfContents.js`

### 10. Fitur Tambahan
- **Share Buttons**: Twitter, LinkedIn, Facebook, WhatsApp, Copy Link
- **Related Posts**: Internal linking untuk SEO
- **Tags**: Kategorisasi konten
- **Not Found Page**: UX yang baik untuk 404

## 📂 File Structure

```
src/
├── app/
│   ├── insights/
│   │   ├── page.js                 # List artikel
│   │   ├── [slug]/
│   │   │   └── page.js             # Detail artikel
│   │   └── not-found.js            # 404 page
│   ├── components/blog/
│   │   ├── AuthorBox.js            # Author info box
│   │   ├── BlogContent.js          # Content renderer
│   │   ├── Breadcrumbs.js          # Breadcrumb nav
│   │   ├── RelatedPosts.js         # Related articles
│   │   ├── SchemaMarkup.js         # JSON-LD component
│   │   ├── ShareButtons.js         # Social sharing
│   │   └── TableOfContents.js      # TOC component
│   └── globals.css                 # Mobile-friendly styles
├── data/
│   └── blogData.js                 # Blog data & helpers
└── lib/
    └── seo-utils.js                # SEO utility functions

public/
└── images/
    ├── blog/                       # Blog images
    └── authors/                    # Author avatars
```

## 🎯 Cara Menambah Artikel Baru

Edit file `src/data/blogData.js` dan tambahkan object baru ke array `blogPosts`:

```javascript
{
  id: 4,
  slug: "judul-artikel-yang-seo-friendly",
  title: "Judul Artikel yang Menarik",
  seoTitle: "Judul SEO 50-60 Karakter | Maleo AI",
  metaDescription: "Deskripsi SEO 150-160 karakter yang mengandung keyword utama...",
  excerpt: "Ringkasan singkat artikel untuk ditampilkan di list...",
  content: `
    <p>Paragraf pembuka...</p>
    <h2>Heading H2 Section</h2>
    <p>Konten...</p>
    <h3>Heading H3 Sub-section</h3>
    <p>Konten...</p>
  `,
  author: {
    name: "Nama Penulis",
    role: "Jabatan",
    bio: "Bio singkat penulis...",
    avatar: "/images/authors/nama-penulis.png",
    social: {
      linkedin: "https://linkedin.com/in/username",
      twitter: "https://twitter.com/username"
    }
  },
  category: "Nama Kategori",
  tags: ["Tag1", "Tag2", "Tag3"],
  publishDate: "2024-12-20",
  readTime: 8,
  featuredImage: "/images/blog/nama-gambar.png",
  featured: false,
  status: "published"
}
```

## 📱 Responsive Breakpoints

| Breakpoint | Width | Font Size |
|------------|-------|-----------|
| Mobile     | < 640px | 16px minimum |
| Tablet     | 641-1024px | 16px |
| Desktop    | > 1024px | 16-17px |

## 🔍 Validasi SEO

Gunakan tools berikut untuk memvalidasi:
1. **Google Rich Results Test**: https://search.google.com/test/rich-results
2. **Schema Markup Validator**: https://validator.schema.org/
3. **PageSpeed Insights**: https://pagespeed.web.dev/
4. **Mobile-Friendly Test**: https://search.google.com/test/mobile-friendly

## 🚀 Build & Deploy

```bash
# Build untuk production
npm run build

# Output ada di folder /dist
```

## 📝 Best Practices yang Diterapkan

1. **Semantic HTML**: Proper heading hierarchy, article tags, nav elements
2. **Accessibility**: ARIA labels, focus indicators, proper contrast
3. **Performance**: Lazy loading, optimized images, static generation
4. **SEO**: Meta tags, schema markup, canonical URLs, internal linking
5. **UX**: Breadcrumbs, TOC, author info, related posts, share buttons
