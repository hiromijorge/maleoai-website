"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { formatDate } from "@/data/blogData";

export default function RelatedPosts({ posts = [] }) {
  const t = useTranslations('insights');
  const locale = useLocale();
  if (posts.length === 0) return null;

  return (
    <section className="mt-16">
      <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-orange-100 flex items-center justify-center">
          <svg className="w-4 h-4 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
          </svg>
        </div>
        {t('relatedPosts')}
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <article
            key={post.id}
            className="group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl hover:border-orange-200 transition-all duration-500"
          >
            <Link href={`/${locale}/insights/${post.slug}`} className="block">
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={post.featuredImage || "/images/blog/placeholder.jpeg"}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  loading="lazy"
                />
                <span className="absolute top-3 left-3 px-3 py-1 bg-orange-500 text-white text-xs font-bold rounded-full">
                  {post.category}
                </span>
              </div>

              <div className="p-5">
                <h3 className="font-bold text-slate-900 mb-2 line-clamp-2 group-hover:text-orange-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-slate-600 text-sm line-clamp-2 mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-3 text-xs text-slate-500">
                  <span>{formatDate(post.publishDate)}</span>
                  <span>•</span>
                  <span>{post.readTime} {t('readTime')}</span>
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
