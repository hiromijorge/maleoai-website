"use client";

import { useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';

const MDEditor = dynamic(() => import('@uiw/react-md-editor'), { ssr: false });

function generateSlug(title) {
  return title.toLowerCase().replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-').trim();
}

const CATEGORIES = ['Artificial Intelligence', 'Machine Learning', 'Business', 'Technology', 'Tutorial', 'News'];

export default function PostForm({ initialData = {}, postId = null }) {
  const router = useRouter();
  const isEdit = !!postId;

  const [form, setForm] = useState({
    title: initialData.title || '',
    slug: initialData.slug || '',
    status: initialData.status || 'draft',
    featured: initialData.featured ?? false,
    category: initialData.category || 'Artificial Intelligence',
    tags: Array.isArray(initialData.tags) ? initialData.tags.join(', ') : (initialData.tags || ''),
    excerpt: initialData.excerpt || '',
    content: initialData.content || '',
    seo_title: initialData.seo_title || '',
    meta_description: initialData.meta_description || '',
    featured_image: initialData.featured_image || '',
    publish_date: initialData.publish_date || new Date().toISOString().split('T')[0],
    read_time: initialData.read_time || 5,
    author_name: initialData.author_name || 'Maleo AI Team',
    author_role: initialData.author_role || '',
    author_bio: initialData.author_bio || '',
    author_avatar: initialData.author_avatar || '',
    author_linkedin: initialData.author_linkedin || '',
    author_twitter: initialData.author_twitter || '',
  });

  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const [seoOpen, setSeoOpen] = useState(false);
  const [authorOpen, setAuthorOpen] = useState(false);
  const [slugEdited, setSlugEdited] = useState(!!initialData.slug);

  const set = (key, value) => setForm((f) => ({ ...f, [key]: value }));

  function handleTitleChange(e) {
    const title = e.target.value;
    set('title', title);
    if (!slugEdited) {
      set('slug', generateSlug(title));
    }
  }

  async function handleSave(status) {
    setSaving(true);
    setError('');

    const payload = {
      ...form,
      status: status || form.status,
      tags: form.tags.split(',').map((t) => t.trim()).filter(Boolean),
      read_time: Number(form.read_time),
    };

    const url = isEdit ? `/api/admin/posts/${postId}` : '/api/admin/posts';
    const method = isEdit ? 'PUT' : 'POST';

    const res = await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (res.ok) {
      router.push('/admin/posts');
    } else {
      const data = await res.json();
      setError(data.error || 'Something went wrong. Please try again.');
      setSaving(false);
    }
  }

  return (
    <div className="flex gap-6">
      {/* Main Column */}
      <div className="flex-1 space-y-6">
        {/* Title */}
        <div className="bg-white rounded-xl border border-slate-200 p-6">
          <input
            type="text"
            value={form.title}
            onChange={handleTitleChange}
            placeholder="Post title…"
            className="w-full text-2xl font-bold text-slate-900 placeholder:text-slate-300 border-none outline-none"
          />
          <div className="flex items-center gap-2 mt-3">
            <span className="text-xs text-slate-400">Slug:</span>
            <input
              type="text"
              value={form.slug}
              onChange={(e) => { setSlugEdited(true); set('slug', e.target.value); }}
              className="flex-1 text-xs text-slate-500 bg-slate-50 border border-slate-200 rounded px-2 py-1 outline-none focus:border-orange-400"
            />
          </div>
        </div>

        {/* Excerpt */}
        <div className="bg-white rounded-xl border border-slate-200 p-6">
          <label className="block text-sm font-semibold text-slate-700 mb-2">Excerpt</label>
          <textarea
            value={form.excerpt}
            onChange={(e) => set('excerpt', e.target.value)}
            rows={3}
            placeholder="Short summary shown on the insights listing page…"
            className="w-full text-sm text-slate-700 border border-slate-200 rounded-lg px-3 py-2 outline-none focus:border-orange-400 resize-none"
          />
        </div>

        {/* Content Editor */}
        <div className="bg-white rounded-xl border border-slate-200 p-6">
          <label className="block text-sm font-semibold text-slate-700 mb-3">Content</label>
          <div data-color-mode="light">
            <MDEditor
              value={form.content}
              onChange={(v) => set('content', v || '')}
              height={500}
              preview="live"
            />
          </div>
          <p className="text-xs text-slate-400 mt-2">Write in Markdown. Use ## for headings, **bold**, *italic*, etc.</p>
        </div>

        {/* SEO Section */}
        <div className="bg-white rounded-xl border border-slate-200">
          <button
            type="button"
            onClick={() => setSeoOpen(!seoOpen)}
            className="w-full flex items-center justify-between px-6 py-4 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
          >
            SEO Settings
            <svg className={`w-4 h-4 transition-transform ${seoOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {seoOpen && (
            <div className="px-6 pb-6 space-y-4 border-t border-slate-100">
              <div className="pt-4">
                <label className="block text-xs font-medium text-slate-600 mb-1">SEO Title</label>
                <input
                  type="text"
                  value={form.seo_title}
                  onChange={(e) => set('seo_title', e.target.value)}
                  placeholder="Override the page title for search engines…"
                  className="w-full text-sm border border-slate-200 rounded-lg px-3 py-2 outline-none focus:border-orange-400"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-600 mb-1">Meta Description</label>
                <textarea
                  value={form.meta_description}
                  onChange={(e) => set('meta_description', e.target.value)}
                  rows={3}
                  placeholder="~155 character description for Google…"
                  className="w-full text-sm border border-slate-200 rounded-lg px-3 py-2 outline-none focus:border-orange-400 resize-none"
                />
                <p className="text-xs text-slate-400 mt-1">{form.meta_description.length}/155 chars</p>
              </div>
            </div>
          )}
        </div>

        {/* Author Section */}
        <div className="bg-white rounded-xl border border-slate-200">
          <button
            type="button"
            onClick={() => setAuthorOpen(!authorOpen)}
            className="w-full flex items-center justify-between px-6 py-4 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
          >
            Author Details
            <svg className={`w-4 h-4 transition-transform ${authorOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {authorOpen && (
            <div className="px-6 pb-6 border-t border-slate-100">
              <div className="pt-4 grid grid-cols-2 gap-4">
                {[
                  { key: 'author_name', label: 'Name', placeholder: 'Maleo AI Team' },
                  { key: 'author_role', label: 'Role', placeholder: 'e.g. CTO' },
                  { key: 'author_avatar', label: 'Avatar URL', placeholder: '/images/authors/photo.png' },
                  { key: 'author_linkedin', label: 'LinkedIn URL', placeholder: 'https://linkedin.com/in/...' },
                  { key: 'author_twitter', label: 'Twitter URL', placeholder: 'https://twitter.com/...' },
                ].map(({ key, label, placeholder }) => (
                  <div key={key}>
                    <label className="block text-xs font-medium text-slate-600 mb-1">{label}</label>
                    <input
                      type="text"
                      value={form[key]}
                      onChange={(e) => set(key, e.target.value)}
                      placeholder={placeholder}
                      className="w-full text-sm border border-slate-200 rounded-lg px-3 py-2 outline-none focus:border-orange-400"
                    />
                  </div>
                ))}
                <div className="col-span-2">
                  <label className="block text-xs font-medium text-slate-600 mb-1">Bio</label>
                  <textarea
                    value={form.author_bio}
                    onChange={(e) => set('author_bio', e.target.value)}
                    rows={2}
                    className="w-full text-sm border border-slate-200 rounded-lg px-3 py-2 outline-none focus:border-orange-400 resize-none"
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 text-sm px-4 py-3 rounded-lg">
            {error}
          </div>
        )}
      </div>

      {/* Sidebar Column */}
      <div className="w-72 space-y-4 flex-shrink-0">
        {/* Publish */}
        <div className="bg-white rounded-xl border border-slate-200 p-5">
          <h3 className="text-sm font-semibold text-slate-700 mb-4">Publish</h3>
          <div className="space-y-3">
            <div>
              <label className="block text-xs font-medium text-slate-600 mb-1">Status</label>
              <select
                value={form.status}
                onChange={(e) => set('status', e.target.value)}
                className="w-full text-sm border border-slate-200 rounded-lg px-3 py-2 outline-none focus:border-orange-400"
              >
                <option value="draft">Draft</option>
                <option value="published">Published</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-600 mb-1">Publish Date</label>
              <input
                type="date"
                value={form.publish_date}
                onChange={(e) => set('publish_date', e.target.value)}
                className="w-full text-sm border border-slate-200 rounded-lg px-3 py-2 outline-none focus:border-orange-400"
              />
            </div>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={form.featured}
                onChange={(e) => set('featured', e.target.checked)}
                className="w-4 h-4 accent-orange-500"
              />
              <span className="text-sm text-slate-700">Featured post</span>
            </label>
          </div>

          <div className="flex flex-col gap-2 mt-5">
            <button
              type="button"
              onClick={() => handleSave('published')}
              disabled={saving || !form.title || !form.slug}
              className="w-full bg-orange-500 hover:bg-orange-600 disabled:opacity-50 text-white text-sm font-semibold py-2.5 rounded-lg transition-colors"
            >
              {saving ? 'Saving…' : 'Publish'}
            </button>
            <button
              type="button"
              onClick={() => handleSave('draft')}
              disabled={saving || !form.title || !form.slug}
              className="w-full bg-slate-100 hover:bg-slate-200 disabled:opacity-50 text-slate-700 text-sm font-medium py-2.5 rounded-lg transition-colors"
            >
              Save Draft
            </button>
          </div>
        </div>

        {/* Category & Tags */}
        <div className="bg-white rounded-xl border border-slate-200 p-5 space-y-4">
          <div>
            <label className="block text-xs font-medium text-slate-600 mb-1">Category</label>
            <select
              value={form.category}
              onChange={(e) => set('category', e.target.value)}
              className="w-full text-sm border border-slate-200 rounded-lg px-3 py-2 outline-none focus:border-orange-400"
            >
              {CATEGORIES.map((c) => <option key={c}>{c}</option>)}
              <option value="Other">Other…</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-600 mb-1">Tags</label>
            <input
              type="text"
              value={form.tags}
              onChange={(e) => set('tags', e.target.value)}
              placeholder="AI, Business, Strategy"
              className="w-full text-sm border border-slate-200 rounded-lg px-3 py-2 outline-none focus:border-orange-400"
            />
            <p className="text-xs text-slate-400 mt-1">Comma-separated</p>
          </div>
        </div>

        {/* Featured Image */}
        <div className="bg-white rounded-xl border border-slate-200 p-5">
          <label className="block text-xs font-medium text-slate-600 mb-1">Featured Image</label>
          <input
            type="text"
            value={form.featured_image}
            onChange={(e) => set('featured_image', e.target.value)}
            placeholder="/images/blog/my-post.jpg"
            className="w-full text-sm border border-slate-200 rounded-lg px-3 py-2 outline-none focus:border-orange-400"
          />
          {form.featured_image && (
            <img src={form.featured_image} alt="preview" className="mt-3 w-full h-32 object-cover rounded-lg" />
          )}
        </div>

        {/* Read Time */}
        <div className="bg-white rounded-xl border border-slate-200 p-5">
          <label className="block text-xs font-medium text-slate-600 mb-1">Read Time (minutes)</label>
          <input
            type="number"
            value={form.read_time}
            onChange={(e) => set('read_time', e.target.value)}
            min={1}
            max={60}
            className="w-full text-sm border border-slate-200 rounded-lg px-3 py-2 outline-none focus:border-orange-400"
          />
        </div>
      </div>
    </div>
  );
}
