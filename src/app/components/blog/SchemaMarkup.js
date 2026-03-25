"use client";

import Script from "next/script";

/**
 * Component untuk inject JSON-LD Schema Markup
 * Membantu Google dan AI (ChatGPT/Gemini) memahami struktur konten
 */
export default function SchemaMarkup({ schema }) {
  return (
    <Script
      id="schema-markup"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      strategy="beforeInteractive"
    />
  );
}
