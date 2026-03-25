"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";

export default function TableOfContents({ headings = [] }) {
  const t = useTranslations('insights');
  const [activeId, setActiveId] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-80px 0px -60% 0px",
        threshold: 0
      }
    );

    headings.forEach((heading) => {
      const element = document.getElementById(heading.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [headings]);

  const handleClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      
      setIsOpen(false);
    }
  };

  if (headings.length === 0) return null;

  return (
    <aside className="toc-container">
      {/* Mobile Toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden w-full flex items-center justify-between p-4 bg-slate-50 border border-slate-200 rounded-xl mb-4"
        aria-expanded={isOpen}
        aria-controls="toc-content"
      >
        <span className="font-semibold text-slate-900 flex items-center gap-2">
          <svg className="w-5 h-5 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          {t('tableOfContents')}
        </span>
        <svg 
          className={`w-5 h-5 text-slate-500 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* TOC Content */}
      <div
        id="toc-content"
        className={`
          ${isOpen ? 'block' : 'hidden'} 
          lg:block
          bg-slate-50 lg:bg-transparent 
          border lg:border-0 
          border-slate-200 
          rounded-xl lg:rounded-none
          p-4 lg:p-0
          lg:sticky lg:top-28
        `}
      >
        <h2 className="hidden lg:flex items-center gap-2 text-lg font-bold text-slate-900 mb-6">
          <svg className="w-5 h-5 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          {t('tableOfContents')}
        </h2>

        <nav aria-label="Table of contents">
          <ul className="space-y-1">
            {headings.map((heading, index) => (
              <li
                key={index}
                className={`${heading.level === 3 ? 'ml-4' : ''}`}
              >
                <a
                  href={`#${heading.id}`}
                  onClick={(e) => handleClick(e, heading.id)}
                  className={`
                    block py-2 text-sm transition-all duration-200 rounded-lg px-3 -mx-2
                    ${activeId === heading.id
                      ? 'text-orange-600 font-semibold bg-orange-50'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                    }
                    ${heading.level === 2 ? 'font-medium' : ''}
                  `}
                >
                  {heading.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
}
