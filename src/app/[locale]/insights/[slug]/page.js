import { getAllPosts, getPostBySlug } from "@/lib/posts";
import BlogDetailClient from "./BlogDetailClient";

export async function generateMetadata({ params }) {
  const { slug, locale } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: locale === "id" ? "Artikel Tidak Ditemukan | Maleo AI" : "Article Not Found | Maleo AI",
    };
  }

  return {
    metadataBase: new URL("https://maleo.ai"),
    title: post.seoTitle || post.title,
    description: post.metaDescription || post.excerpt,
    keywords: post.tags,
    authors: [{ name: post.author.name }],
    openGraph: {
      title: post.seoTitle || post.title,
      description: post.metaDescription || post.excerpt,
      type: "article",
      locale: locale === "id" ? "id_ID" : "en_US",
      publishedTime: post.publishDate,
      modifiedTime: post.updatedDate || post.publishDate,
      authors: [post.author.name],
      section: post.category,
      tags: post.tags,
      images: [{ url: post.featuredImage, width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.seoTitle || post.title,
      description: post.metaDescription || post.excerpt,
      images: [post.featuredImage],
    },
    alternates: { canonical: `/insights/${post.slug}` },
  };
}

export default async function BlogDetailPage({ params }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  const allPosts = await getAllPosts();
  const relatedPosts = allPosts
    .filter((p) => p.category === post?.category && p.id !== post?.id)
    .slice(0, 3);

  return <BlogDetailClient post={post} relatedPosts={relatedPosts} />;
}
