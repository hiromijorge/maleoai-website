import { supabase } from './supabase';
import { marked } from 'marked';

// Configure marked for safe rendering
marked.setOptions({ breaks: true, gfm: true });

function mapPost(row) {
  return {
    id: row.id,
    slug: row.slug,
    title: row.title,
    seoTitle: row.seo_title,
    metaDescription: row.meta_description,
    excerpt: row.excerpt,
    // Convert markdown → HTML so BlogContent.js works unchanged
    content: row.content ? marked(row.content) : '',
    rawContent: row.content,
    author: {
      name: row.author_name || 'Maleo AI Team',
      role: row.author_role || '',
      bio: row.author_bio || '',
      avatar: row.author_avatar || '/images/authors/default-avatar.png',
      social: {
        linkedin: row.author_linkedin || '',
        twitter: row.author_twitter || '',
      },
    },
    category: row.category,
    tags: row.tags || [],
    publishDate: row.publish_date,
    readTime: row.read_time,
    featuredImage: row.featured_image,
    featured: row.featured,
    status: row.status,
    updatedDate: row.updated_at,
  };
}

export async function getAllPosts() {
  const { data, error } = await supabase
    .from('posts')
    .select('*')
    .eq('status', 'published')
    .order('publish_date', { ascending: false });

  if (error) { console.error('getAllPosts error:', error); return []; }
  return data.map(mapPost);
}

export async function getFeaturedPosts() {
  const { data, error } = await supabase
    .from('posts')
    .select('*')
    .eq('status', 'published')
    .eq('featured', true)
    .order('publish_date', { ascending: false });

  if (error) { console.error('getFeaturedPosts error:', error); return []; }
  return data.map(mapPost);
}

export async function getPostBySlug(slug) {
  const { data, error } = await supabase
    .from('posts')
    .select('*')
    .eq('slug', slug)
    .eq('status', 'published')
    .single();

  if (error) return null;
  return mapPost(data);
}

export async function getAllCategories() {
  const { data } = await supabase
    .from('posts')
    .select('category')
    .eq('status', 'published');

  if (!data) return [];
  return [...new Set(data.map((r) => r.category))];
}

export async function getPostsByCategory(category) {
  const { data, error } = await supabase
    .from('posts')
    .select('*')
    .eq('status', 'published')
    .ilike('category', category)
    .order('publish_date', { ascending: false });

  if (error) { console.error('getPostsByCategory error:', error); return []; }
  return data.map(mapPost);
}

export function formatDate(dateStr) {
  if (!dateStr) return '';
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function generateSlug(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}
