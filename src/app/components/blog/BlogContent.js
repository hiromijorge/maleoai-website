"use client";

import Image from "next/image";
import { addHeadingIds } from "@/lib/seo-utils";

export default function BlogContent({ content, featuredImage, title }) {
  const contentWithIds = addHeadingIds(content);

  return (
    <article className="blog-content">
      {featuredImage && (
        <div className="relative w-full aspect-[16/9] mb-10 rounded-2xl overflow-hidden shadow-2xl shadow-slate-200">
          <Image
            src={featuredImage}
            alt={title}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 900px"
            quality={85}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>
      )}

      <div 
        className="prose prose-lg max-w-none
          prose-headings:text-slate-900 prose-headings:font-bold
          prose-h1:text-3xl prose-h1:mb-6
          prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4 prose-h2:text-orange-600
          prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
          prose-p:text-slate-700 prose-p:leading-relaxed prose-p:mb-6
          prose-a:text-orange-600 prose-a:font-semibold prose-a:no-underline hover:prose-a:underline
          prose-strong:text-slate-900 prose-strong:font-bold
          prose-ul:list-disc prose-ul:pl-6 prose-ul:mb-6
          prose-ol:list-decimal prose-ol:pl-6 prose-ol:mb-6
          prose-li:text-slate-700 prose-li:mb-2
          prose-blockquote:border-l-4 prose-blockquote:border-orange-500 
          prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-slate-600
          prose-img:rounded-xl prose-img:shadow-lg
          prose-code:bg-slate-100 prose-code:px-2 prose-code:py-1 prose-code:rounded 
          prose-code:text-sm prose-code:font-mono prose-code:text-slate-800
          prose-pre:bg-slate-900 prose-pre:p-6 prose-pre:rounded-2xl prose-pre:my-8
          [&>*:first-child]:mt-0
        "
        dangerouslySetInnerHTML={{ __html: contentWithIds }}
      />
    </article>
  );
}
