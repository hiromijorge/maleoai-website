"use client";

import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { formatDate } from "@/lib/posts";
import {
  generateArticleSchema,
  generateBreadcrumbSchema,
  extractHeadings,
} from "@/lib/seo-utils";
import BlogContent from "@/app/components/blog/BlogContent";
import AuthorBox from "@/app/components/blog/AuthorBox";
import TableOfContents from "@/app/components/blog/TableOfContents";
import ShareButtons from "@/app/components/blog/ShareButtons";
import RelatedPosts from "@/app/components/blog/RelatedPosts";

export default function BlogDetailClient({ post, relatedPosts }) {
  const t = useTranslations("insights");
  const locale = useLocale();

  if (!post) {
    notFound();
  }

  const headings = extractHeadings(post.content);
  const articleSchema = generateArticleSchema(post);
  const breadcrumbSchema = generateBreadcrumbSchema([
    {
      name: post.category,
      url: `/${locale}/insights/category/${post.category
        .toLowerCase()
        .replace(/\s+/g, "-")}`,
    },
    { name: post.title, url: `/${locale}/insights/${post.slug}` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <main className="min-h-screen bg-white">
        {/* Article Header */}
        <header className="pt-32 pb-12 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <Link
                href={`/${locale}/insights/category/${post.category
                  .toLowerCase()
                  .replace(/\s+/g, "-")}`}
                className="inline-block px-4 py-1.5 bg-orange-100 text-orange-700 text-sm font-semibold rounded-full mb-6 hover:bg-orange-200 transition-colors"
              >
                {post.category}
              </Link>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-8 leading-tight">
                {post.title}
              </h1>

              <div className="flex flex-wrap items-center gap-6 text-slate-600">
                <div className="flex items-center gap-3">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-orange-200">
                    <Image
                      src={
                        post.author.avatar ||
                        "/images/authors/default-avatar.png"
                      }
                      alt={post.author.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-slate-900 font-semibold">
                      {post.author.name}
                    </p>
                    <p className="text-sm">{post.author.role}</p>
                  </div>
                </div>

                <div className="h-8 w-px bg-slate-300 hidden sm:block" />

                <div className="flex items-center gap-4 text-sm">
                  <time
                    dateTime={post.publishDate}
                    className="flex items-center gap-2"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    {formatDate(post.publishDate)}
                  </time>
                  <span className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    {post.readTime} {t("readTime")}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <div className="py-12 lg:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
              {/* Sidebar - Table of Contents */}
              <aside className="lg:col-span-3 order-2 lg:order-1">
                <div className="lg:sticky lg:top-28">
                  <TableOfContents headings={headings} />
                </div>
              </aside>

              {/* Main Article Content */}
              <article className="lg:col-span-9 order-1 lg:order-2">
                <div className="max-w-3xl mx-auto">
                  <BlogContent
                    content={post.content}
                    featuredImage={post.featuredImage}
                    title={post.title}
                  />

                  {/* Tags */}
                  <div className="mt-12 pt-8 border-t border-slate-200">
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-4 py-2 bg-slate-100 text-slate-700 text-sm font-medium rounded-full hover:bg-slate-200 transition-colors cursor-pointer"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Share Buttons */}
                  <ShareButtons
                    url={`/insights/${post.slug}`}
                    title={post.title}
                  />

                  {/* Author Box */}
                  <AuthorBox
                    author={post.author}
                    publishDate={post.publishDate}
                    readTime={post.readTime}
                  />

                  {/* Related Posts */}
                  <RelatedPosts posts={relatedPosts} />
                </div>
              </article>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
