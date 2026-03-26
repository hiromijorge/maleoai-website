import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { getFeaturedPosts, formatDate } from "@/lib/posts";

export default async function Home({ params }) {
  const { locale } = await params;
  setRequestLocale(locale);

  const [t, tHero, tInsights] = await Promise.all([
    getTranslations('home'),
    getTranslations('hero'),
    getTranslations('insights'),
  ]);

  const titleHighlight = tHero('titleHighlight');
  const titleParts = tHero('title').split(titleHighlight);
  const featuredPosts = await getFeaturedPosts();

  return (
    <div className="w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/robot-background.jpeg"
            alt="AI Technology Background"
            fill
            className="object-cover"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-slate-900/70 to-orange-950/60" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-orange-500/20 via-transparent to-transparent" />
        </div>

        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8 pt-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8 animate-fade-in-up">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-white/90 text-sm font-medium">{tHero('badge')}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in-up delay-100">
            {titleParts[0]}
            <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              {titleHighlight}
            </span>
            {titleParts[1]}
          </h1>

          <p className="text-lg sm:text-xl text-white/80 mb-10 max-w-2xl mx-auto font-light animate-fade-in-up delay-200">
            {tHero('subtitle')}
          </p>

          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-12 animate-fade-in-up delay-300">
            <div className="flex items-center gap-2 text-white/90">
              <FontAwesomeIcon icon={faCheckCircle} className="text-orange-400 w-5 h-5" />
              <span className="text-sm sm:text-base">{tHero('point1')}</span>
            </div>
            <div className="flex items-center gap-2 text-white/90">
              <FontAwesomeIcon icon={faCheckCircle} className="text-orange-400 w-5 h-5" />
              <span className="text-sm sm:text-base">{tHero('point2')}</span>
            </div>
            <div className="flex items-center gap-2 text-white/90">
              <FontAwesomeIcon icon={faCheckCircle} className="text-orange-400 w-5 h-5" />
              <span className="text-sm sm:text-base">{tHero('point3')}</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up delay-400">
            <Link
              href="https://wa.me/6282313271338?text=Hello%2C%20I%27m%20interested%20in%20your%20services"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-2xl shadow-orange-500/30 hover:shadow-orange-500/50 transition-all duration-300 hover:-translate-y-1"
            >
              <span className="relative z-10 flex items-center gap-2">
                {tHero('ctaPrimary')}
                <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>
            <Link
              href={`/${locale}/portfolio`}
              className="group flex items-center gap-2 text-white px-8 py-4 rounded-full font-medium text-lg border border-white/30 hover:bg-white/10 transition-all duration-300"
            >
              {tHero('ctaSecondary')}
              <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </Link>
          </div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <svg className="w-6 h-6 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-orange-600 font-semibold text-sm uppercase tracking-wider">{t('trustedBy')}</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">{t('industryLeaders')}</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { logo: "/assets/companies/Syncorp.svg", name: "SynCorp AI", flag: "🇦🇪" },
              { logo: "/assets/companies/WangDataMarket.svg", name: "Wang Data", flag: "🇹🇭" },
              { logo: "/assets/companies/TTN.svg", name: "Training Notebook", flag: "🇺🇸" },
            ].map((partner, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100 hover:border-orange-200"
              >
                <div className="h-24 flex items-center justify-center mb-4 grayscale group-hover:grayscale-0 transition-all duration-500">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={160}
                    height={60}
                    className="object-contain max-h-full"
                  />
                </div>
                <div className="flex items-center justify-center gap-2 text-slate-600">
                  <span className="text-2xl">{partner.flag}</span>
                  <span className="text-sm font-medium">{partner.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features / Services Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-orange-100 text-orange-700 text-sm font-semibold rounded-full mb-4">
              {t('ourServices')}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              {t('servicesTitle')}
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              {t('servicesSubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "⚡",
                titleKey: "service1Title",
                descKey: "service1Desc",
                href: `/${locale}/services/ai-solutions`
              },
              {
                icon: "💻",
                titleKey: "service2Title",
                descKey: "service2Desc",
                href: `/${locale}/services/web-app-development`
              },
              {
                icon: "🌍",
                titleKey: "service3Title",
                descKey: "service3Desc",
                href: `/${locale}/services/remote-tech-talent`
              },
              {
                icon: "🎓",
                titleKey: "service4Title",
                descKey: "service4Desc",
                href: `/${locale}/services/ai-training`
              },
            ].map((feature, idx) => (
              <Link
                key={idx}
                href={feature.href}
                className="group relative bg-slate-50 rounded-2xl p-8 hover:bg-white transition-all duration-500 border border-transparent hover:border-orange-200 hover:shadow-2xl hover:shadow-orange-500/10"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-orange-600 transition-colors">
                  {t(feature.titleKey)}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">{t(feature.descKey)}</p>
                <div className="flex items-center text-orange-600 font-semibold text-sm">
                  {t('learnMore')}
                  <svg className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-orange-500/10 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-16">
            <span className="text-orange-400 font-semibold text-sm uppercase tracking-wider">{t('caseStudies')}</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-4">
              {t('caseStudiesTitle')}
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl">
              {t('caseStudiesSubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "🛒",
                titleKey: "story1Title",
                stat: "90%",
                statLabelKey: "story1StatLabel",
                descKey: "story1Desc",
              },
              {
                icon: "🍽️",
                titleKey: "story2Title",
                stat: "20%",
                statLabelKey: "story2StatLabel",
                descKey: "story2Desc",
              },
              {
                icon: "🏢",
                titleKey: "story3Title",
                stat: "40%",
                statLabelKey: "story3StatLabel",
                descKey: "story3Desc",
              },
            ].map((story, idx) => (
              <div
                key={idx}
                className="group bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hover:border-orange-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-orange-500/20"
              >
                <div className="text-4xl mb-4">{story.icon}</div>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-4xl font-bold text-orange-400">{story.stat}</span>
                  <span className="text-sm text-slate-400">{t(story.statLabelKey)}</span>
                </div>
                <h3 className="text-xl font-bold mb-3">{t(story.titleKey)}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{t(story.descKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full mb-4">
              {t('whyChooseUs')}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900">
              {t('missionTitle')}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "🎯",
                titleKey: "mission1Title",
                descKey: "mission1Desc",
                color: "from-orange-500 to-orange-600"
              },
              {
                icon: "✨",
                titleKey: "mission2Title",
                descKey: "mission2Desc",
                color: "from-blue-500 to-blue-600"
              },
              {
                icon: "🤝",
                titleKey: "mission3Title",
                descKey: "mission3Desc",
                color: "from-green-500 to-green-600"
              },
            ].map((item, idx) => (
              <div key={idx} className="group text-center p-8">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} text-white text-3xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{t(item.titleKey)}</h3>
                <p className="text-slate-600 leading-relaxed">{t(item.descKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Insights Section */}
      <FeaturedInsightsSection posts={featuredPosts} tInsights={tInsights} tHome={t} locale={locale} />

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500 via-orange-600 to-red-600" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-30" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            {t('ctaTitle')}
          </h2>
          <p className="text-white/90 text-lg mb-10 max-w-2xl mx-auto">
            {t('ctaDesc')}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="https://wa.me/6282313271338?text=Hello%2C%20I%27m%20interested%20in%20your%20services"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white text-orange-600 px-8 py-4 rounded-full font-semibold text-lg shadow-2xl hover:shadow-white/20 transition-all duration-300 hover:-translate-y-1"
            >
              <span className="flex items-center gap-2">
                {t('bookFreeConsultation')}
                <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>
            <Link
              href={`/${locale}/contact`}
              className="text-white px-8 py-4 rounded-full font-medium text-lg border-2 border-white/30 hover:bg-white/10 transition-all duration-300"
            >
              {t('contactUs')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function FeaturedInsightsSection({ posts, tInsights, tHome, locale }) {
  const featuredPosts = posts.slice(0, 2);
  if (featuredPosts.length === 0) return null;

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <span className="inline-block px-4 py-1.5 bg-orange-100 text-orange-700 text-sm font-semibold rounded-full mb-4">
              {tHome('blogResources')}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900">
              {tInsights('featured')}
            </h2>
          </div>
          <Link
            href={`/${locale}/insights`}
            className="mt-4 md:mt-0 inline-flex items-center gap-2 text-orange-600 font-semibold hover:gap-3 transition-all"
          >
            {tInsights('allArticles')}
            <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredPosts.map((post) => (
            <article
              key={post.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100"
            >
              <Link href={`/${locale}/insights/${post.slug}`} className="block">
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={post.featuredImage || "/images/blog/placeholder.jpeg"}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <span className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm text-slate-900 text-xs font-bold rounded-full">
                    {post.category}
                  </span>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-orange-600 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-slate-600 mb-4 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-3 text-slate-500">
                      <span>{formatDate(post.publishDate)}</span>
                      <span>•</span>
                      <span>{post.readTime} {tInsights('readTime')}</span>
                    </div>
                    <span className="text-orange-600 font-semibold group-hover:translate-x-1 transition-transform">
                      {tInsights('readMore')}
                    </span>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
