import Link from "next/link";
import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { getAllPosts, getFeaturedPosts, getAllCategories, formatDate } from "@/lib/posts";
import { generateOrganizationSchema } from "@/lib/seo-utils";

export default async function InsightsPage({ params }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('insights');

  const [posts, featuredPosts, categories] = await Promise.all([
    getAllPosts(),
    getFeaturedPosts(),
    getAllCategories(),
  ]);

  const organizationSchema = generateOrganizationSchema();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="pt-32 pb-12 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="inline-block px-4 py-1.5 bg-orange-100 text-orange-700 text-sm font-semibold rounded-full mb-4">
                Blog & Resources
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
                {t('title')}
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed">
                {t('subtitle')}
              </p>
            </div>
          </div>
        </section>

        {/* Featured Posts Section */}
        {featuredPosts.length > 0 && (
          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center gap-3 mb-10">
                <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center">
                  <svg className="w-5 h-5 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-slate-900">{t('featured')}</h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {featuredPosts.slice(0, 2).map((post) => (
                  <article
                    key={post.id}
                    className="group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-orange-500/10 hover:border-orange-200 transition-all duration-500"
                  >
                    <Link href={`/${locale}/insights/${post.slug}`} className="block">
                      <div className="relative aspect-[16/9] overflow-hidden">
                        <Image
                          src={post.featuredImage || "/images/blog/placeholder.jpeg"}
                          alt={post.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-700"
                          sizes="(max-width: 1024px) 100vw, 50vw"
                          priority
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
                            <span>{post.readTime} {t('readTime')}</span>
                          </div>
                          <span className="text-orange-600 font-semibold group-hover:translate-x-1 transition-transform">
                            {t('readMore')}
                          </span>
                        </div>
                      </div>
                    </Link>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Categories Filter */}
        <section className="py-8 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-2">
              <Link
                href={`/${locale}/insights`}
                className="px-5 py-2.5 bg-orange-500 text-white text-sm font-semibold rounded-full shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 transition-all"
              >
                All
              </Link>
              {categories.map((category) => (
                <Link
                  key={category}
                  href={`/${locale}/insights/category/${category.toLowerCase().replace(/\s+/g, '-')}`}
                  className="px-5 py-2.5 bg-white text-slate-700 text-sm font-medium rounded-full border border-slate-200 hover:border-orange-300 hover:text-orange-600 transition-all"
                >
                  {category}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* All Posts Grid */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-10">{t('allArticles')}</h2>

            {posts.length === 0 ? (
              <p className="text-slate-500 text-center py-16">No articles published yet.</p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post) => (
                  <article
                    key={post.id}
                    className="group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl hover:border-orange-200 transition-all duration-500 flex flex-col"
                  >
                    <Link href={`/${locale}/insights/${post.slug}`} className="block flex-1">
                      <div className="relative aspect-[16/10] overflow-hidden">
                        <Image
                          src={post.featuredImage || "/images/blog/placeholder.jpeg"}
                          alt={post.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          loading="lazy"
                        />
                        <span className="absolute top-4 left-4 px-3 py-1 bg-orange-500 text-white text-xs font-bold rounded-full">
                          {post.category}
                        </span>
                      </div>
                      <div className="p-6 flex flex-col flex-1">
                        <h3 className="font-bold text-slate-900 mb-2 group-hover:text-orange-600 transition-colors line-clamp-2 text-lg">
                          {post.title}
                        </h3>
                        <p className="text-slate-600 text-sm line-clamp-2 mb-4 flex-1">{post.excerpt}</p>
                        <div className="flex items-center gap-3 text-sm text-slate-500">
                          <span>{formatDate(post.publishDate)}</span>
                          <span>•</span>
                          <span>{post.readTime} {t('readTime')}</span>
                        </div>
                      </div>
                    </Link>
                  </article>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
    </>
  );
}
