import AdminNav from '@/app/components/admin/AdminNav';
import PostForm from '@/app/components/admin/PostForm';
import { createAdminClient } from '@/lib/supabase';
import { notFound } from 'next/navigation';

export default async function EditPostPage({ params }) {
  const { id } = await params;
  const db = createAdminClient();
  const { data, error } = await db.from('posts').select('*').eq('id', id).single();

  if (error || !data) notFound();

  return (
    <div className="flex min-h-screen">
      <AdminNav />
      <main className="flex-1 p-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-slate-900">Edit Post</h1>
            <p className="text-slate-500 text-sm mt-1 font-mono">/insights/{data.slug}</p>
          </div>
          <PostForm initialData={data} postId={id} />
        </div>
      </main>
    </div>
  );
}
