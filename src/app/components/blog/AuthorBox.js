"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";

export default function AuthorBox({ author, publishDate, readTime }) {
  const t = useTranslations("authorBox");
  const locale = useLocale();
  
  if (!author) return null;

  return (
    <div className="bg-slate-50 rounded-2xl p-8 mt-12 border border-slate-100">
      <div className="flex flex-col sm:flex-row gap-6">
        <div className="flex-shrink-0">
          <div className="relative w-20 h-20 sm:w-24 sm:h-24 mx-auto sm:mx-0">
            <Image
              src={author.avatar || "/images/authors/default-avatar.png"}
              alt={t("photoAlt", { name: author.name })}
              fill
              className="rounded-2xl object-cover ring-4 ring-white shadow-lg"
            />
          </div>
        </div>

        <div className="flex-1 text-center sm:text-left">
          <h3 className="text-lg font-bold text-slate-900 mb-1">
            {author.name}
          </h3>
          <p className="text-orange-600 text-sm font-semibold mb-4">
            {author.role}
          </p>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            {author.bio}
          </p>

          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 text-sm text-slate-500 mb-4">
            {publishDate && (
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {new Date(publishDate).toLocaleDateString(locale === "id" ? "id-ID" : "en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric"
                })}
              </span>
            )}
            {readTime && (
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {t("readTime", { minutes: readTime })}
              </span>
            )}
          </div>

          {author.social && (
            <div className="flex items-center justify-center sm:justify-start gap-3">
              {author.social.linkedin && (
                <Link
                  href={author.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-slate-400 hover:text-orange-600 hover:shadow-md transition-all"
                  aria-label={t("socialLinkedIn", { name: author.name })}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </Link>
              )}
              {author.social.twitter && (
                <Link
                  href={author.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-slate-400 hover:text-orange-600 hover:shadow-md transition-all"
                  aria-label={t("socialTwitter", { name: author.name })}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
