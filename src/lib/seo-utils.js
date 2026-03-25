// Utility functions untuk SEO optimization

/**
 * Generate Schema.org Article markup (JSON-LD)
 * untuk membantu Google dan AI (ChatGPT/Gemini) memahami konten
 */
export function generateArticleSchema(post, siteUrl = "https://maleo.ai") {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.metaDescription || post.excerpt,
    "image": post.featuredImage?.startsWith('http') 
      ? post.featuredImage 
      : `${siteUrl}${post.featuredImage}`,
    "author": {
      "@type": "Person",
      "name": post.author.name,
      "description": post.author.bio,
      "url": post.author.social?.linkedin || undefined,
    },
    "publisher": {
      "@type": "Organization",
      "name": "Maleo AI",
      "logo": {
        "@type": "ImageObject",
        "url": `${siteUrl}/logo.png`
      }
    },
    "datePublished": post.publishDate,
    "dateModified": post.updatedDate || post.publishDate,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${siteUrl}/insights/${post.slug}`
    },
    "keywords": post.tags?.join(", ") || "",
    "articleSection": post.category,
    "inLanguage": "id-ID"
  };
}

/**
 * Generate BreadcrumbList Schema
 */
export function generateBreadcrumbSchema(items, siteUrl = "https://maleo.ai") {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url.startsWith('http') ? item.url : `${siteUrl}${item.url}`
    }))
  };
}

/**
 * Generate Organization Schema
 */
export function generateOrganizationSchema(siteUrl = "https://maleo.ai") {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Maleo AI",
    "url": siteUrl,
    "logo": `${siteUrl}/logo.png`,
    "description": "Maleo AI adalah perusahaan AI consultancy terkemuka di Asia Tenggara yang menyediakan solusi intelligent automation dan digital transformation.",
    "sameAs": [
      "https://linkedin.com/company/maleoai",
      "https://twitter.com/maleoai",
      "https://facebook.com/maleoai"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "availableLanguage": ["Indonesian", "English"]
    }
  };
}

/**
 * Extract headings dari HTML content untuk Table of Contents
 */
export function extractHeadings(htmlContent) {
  if (!htmlContent) return [];
  
  const headingRegex = /<h([2-3])[^>]*>(.*?)<\/h\1>/gi;
  const headings = [];
  let match;
  
  while ((match = headingRegex.exec(htmlContent)) !== null) {
    const level = parseInt(match[1]);
    // Strip HTML tags dari text
    const text = match[2].replace(/<[^>]*>/g, '');
    // Generate ID dari text
    const id = text
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-');
    
    headings.push({
      level,
      text,
      id: `${id}-${headings.length}` // Tambahkan index untuk memastikan unique
    });
  }
  
  return headings;
}

/**
 * Add IDs to headings dalam HTML content
 */
export function addHeadingIds(htmlContent) {
  if (!htmlContent) return htmlContent;
  
  let index = 0;
  return htmlContent.replace(/<h([2-3])[^>]*>(.*?)<\/h\1>/gi, (match, level, text) => {
    const cleanText = text.replace(/<[^>]*>/g, '');
    const id = cleanText
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-');
    const uniqueId = `${id}-${index++}`;
    return `<h${level} id="${uniqueId}">${text}</h${level}>`;
  });
}

/**
 * Validate SEO metadata
 */
export function validateSEO({ title, description, slug }) {
  const issues = [];
  
  // Title: idealnya 50-60 karakter
  if (!title || title.length < 30) {
    issues.push("SEO Title terlalu pendek (minimal 30 karakter)");
  } else if (title.length > 60) {
    issues.push("SEO Title terlalu panjang (maksimal 60 karakter)");
  }
  
  // Description: idealnya 150-160 karakter
  if (!description || description.length < 120) {
    issues.push("Meta Description terlalu pendek (minimal 120 karakter)");
  } else if (description.length > 160) {
    issues.push("Meta Description terlalu panjang (maksimal 160 karakter)");
  }
  
  // URL: harus mengandung keyword
  if (!slug || slug.length < 10) {
    issues.push("URL slug terlalu pendek");
  }
  
  return {
    isValid: issues.length === 0,
    issues
  };
}

/**
 * Truncate text dengan tetap mempertahankan kata utuh
 */
export function truncateText(text, maxLength) {
  if (!text || text.length <= maxLength) return text;
  
  const truncated = text.slice(0, maxLength);
  const lastSpace = truncated.lastIndexOf(' ');
  
  return truncated.slice(0, lastSpace) + '...';
}

/**
 * Estimate read time dari content
 */
export function estimateReadTime(content) {
  if (!content) return 1;
  
  // Rata-rata orang membaca 200-250 kata per menit dalam Bahasa Indonesia
  const wordsPerMinute = 200;
  const text = content.replace(/<[^>]*>/g, '');
  const wordCount = text.trim().split(/\s+/).length;
  
  return Math.ceil(wordCount / wordsPerMinute);
}
