"use client";

import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";

export default function InsightsNotFound() {
  const t = useTranslations("notFound");
  const tb = useTranslations("blog");
  const locale = useLocale();

  return (
    <main className="min-h-screen bg-white">
      <div className="pt-32 pb-12 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Placeholder for spacing */}
        </div>
      </div>

      <div className="flex flex-col items-center justify-center py-20 px-4">
        <div className="w-24 h-24 mx-auto mb-8 bg-orange-100 rounded-2xl flex items-center justify-center">
          <svg
            className="w-12 h-12 text-orange-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
            />
          </svg>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 text-center">
          {t("articleNotFound")}
        </h1>
        <p className="text-slate-600 mb-8 text-lg text-center max-w-md">
          {t("articleDescription")}
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href={`/${locale}/insights`}
            className="inline-flex items-center justify-center gap-2 bg-orange-500 text-white px-6 py-3 rounded-xl font-semibold shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 transition-all"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            {tb("viewAllArticles")}
          </Link>
          <Link
            href={`/${locale}`}
            className="inline-flex items-center justify-center gap-2 border-2 border-slate-200 text-slate-700 px-6 py-3 rounded-xl font-semibold hover:border-orange-500 hover:text-orange-600 transition-all"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            {t("backToHome")}
          </Link>
        </div>
      </div>
    </main>
  );
}
