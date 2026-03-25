"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import AdminNav from '@/app/components/admin/AdminNav';

function StatusBadge({ status }) {
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
      status === 'published' ? 'bg-green-100 text-green-700' : 'bg-slate-100 text-slate-600'
    }`}>
      {status}
    </span>
  );
}

export default function PostsPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState(null);

  async function loadPosts() {
    const res = await fetch('/api/admin/posts');
    if (res.ok) setPosts(await res.json());
    setLoading(false);
  }

  useEffect(() => { loadPosts(); }, []);

  async function toggleStatus(post) {
    const next = post.status === 'published' ? 'draft' : 'published';
    await fetch(`/api/admin/posts/${post.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status: next }),
    });
    loadPosts();
  }

  async function toggleFeatured(post) {
    await fetch(`/api/admin/posts/${post.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ featured: !post.featured }),
    });
    loadPosts();
  }

  async function deletePost(id) {
    if (!confirm('Delete this post? This cannot be undone.')) return;
    setDeleting(id);
    await fetch(`/api/admin/posts/${id}`, { method: 'DELETE' });
    loadPosts();
    setDeleting(null);
  }

  return (
    <div className="flex min-h-screen">
      <AdminNav />
      <main className="flex-1 p-8">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-2xl font-bold text-slate-900">Posts</h1>
              <p className="text-slate-500 text-sm mt-1">{posts.length} total</p>
            </div>
            <Link
              href="/admin/posts/new"
              className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              New Post
            </Link>
          </div>

          {loading ? (
            <div className="text-center py-24 text-slate-400">Loading…</div>
          ) : posts.length === 0 ? (
            <div className="text-center py-24">
              <p className="text-slate-500 mb-4">No posts yet.</p>
              <Link href="/admin/posts/new" className="text-orange-600 font-semibold hover:underline">
                Create your first post →
              </Link>
            </div>
          ) : (
            <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-100 bg-slate-50">
                    <th className="text-left px-6 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Title</th>
                    <th className="text-left px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Status</th>
                    <th className="text-left px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Featured</th>
                    <th className="text-left px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Category</th>
                    <th className="text-left px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Date</th>
                    <th className="px-4 py-3" />
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {posts.map((post) => (
                    <tr key={post.id} className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="font-medium text-slate-900 line-clamp-1">{post.title}</div>
                        <div className="text-slate-400 text-xs mt-0.5">/insights/{post.slug}</div>
                      </td>
                      <td className="px-4 py-4">
                        <button onClick={() => toggleStatus(post)} title="Click to toggle">
                          <StatusBadge status={post.status} />
                        </button>
                      </td>
                      <td className="px-4 py-4">
                        <button
                          onClick={() => toggleFeatured(post)}
                          className={`text-lg transition-transform hover:scale-110 ${post.featured ? 'text-orange-500' : 'text-slate-300'}`}
                          title={post.featured ? 'Remove featured' : 'Mark as featured'}
                        >
                          ★
                        </button>
                      </td>
                      <td className="px-4 py-4 text-slate-600">{post.category}</td>
                      <td className="px-4 py-4 text-slate-500 whitespace-nowrap">
                        {post.publish_date ? new Date(post.publish_date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : '—'}
                      </td>
                      <td className="px-4 py-4">
                        <div className="flex items-center gap-2 justify-end">
                          <Link
                            href={`/admin/posts/${post.id}/edit`}
                            className="text-slate-500 hover:text-orange-600 transition-colors"
                            title="Edit"
                          >
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                            </svg>
                          </Link>
                          <button
                            onClick={() => deletePost(post.id)}
                            disabled={deleting === post.id}
                            className="text-slate-400 hover:text-red-500 transition-colors disabled:opacity-50"
                            title="Delete"
                          >
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
