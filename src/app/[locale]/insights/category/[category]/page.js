import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { 
  getAllPosts, 
  getAllCategories,
  formatDate 
} from "@/data/blogData";

export async function generateStaticParams() {
  const categories = getAllCategories();
  return categories.map((category) => ({
    category: category.toLowerCase().replace(/\s+/g, '-'),
  }));
}

export async function generateMetadata({ params }) {
  const category = params.category.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  
  return {
    title: `${category} Articles | Maleo AI Insights`,
    description: `Browse all ${category} articles from Maleo AI. Learn about AI, automation, and digital transformation.`,
  };
}

export default function CategoryPage({ params }) {
  const { category } = params;
  const categoryName = category.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  
  const allPosts = getAllPosts();
  const posts = allPosts.filter(post => 
    post.category.toLowerCase().replace(/\s+/g, '-') === category.toLowerCase()
  );
  
  const categories = getAllCategories();
  
  if (posts.length === 0) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Link 
              href="/insights" 
              className="inline-flex items-center gap-2 text-slate-500 hover:text-orange-600 mb-4 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Insights
            </Link>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              {categoryName}
            </h1>
            <p className="text-lg text-slate-600">
              {posts.length} article{posts.length !== 1 ? 's' : ''} in this category
            </p>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2">
            <Link
              href="/insights"
              className="px-5 py-2.5 bg-slate-100 text-slate-700 text-sm font-medium rounded-full hover:bg-slate-200 transition-colors"
            >
              All
            </Link>
            {categories.map((cat) => {
              const catSlug = cat.toLowerCase().replace(/\s+/g, '-');
              const isActive = cat.toLowerCase().replace(/\s+/g, '-') === category.toLowerCase();
              return (
                <Link
                  key={cat}
                  href={`/insights/category/${catSlug}`}
                  className={`px-5 py-2.5 text-sm font-medium rounded-full transition-all ${
                    isActive
                      ? "bg-orange-500 text-white shadow-lg shadow-orange-500/25"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  }`}
                >
                  {cat}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article
                key={post.id}
                className="group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl hover:border-orange-200 transition-all duration-500 flex flex-col"
              >
                <Link href={`/insights/${post.slug}`} className="block flex-1">
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
                    <p className="text-slate-600 text-sm line-clamp-2 mb-4 flex-1">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-3 text-sm text-slate-500">
                      <span>{formatDate(post.publishDate)}</span>
                      <span>•</span>
                      <span>{post.readTime} min read</span>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
