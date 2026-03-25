"use client";

import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";

export default function NotFound() {
  const t = useTranslations("notFound");
  const locale = useLocale();

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-slate-900 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-slate-700 mb-4">
          {t("title")}
        </h2>
        <p className="text-slate-500 mb-8">{t("description")}</p>
        <Link
          href={`/${locale}`}
          className="inline-flex items-center gap-2 bg-orange-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-orange-600 transition-colors"
        >
          {t("goHome")}
        </Link>
      </div>
    </div>
  );
}
