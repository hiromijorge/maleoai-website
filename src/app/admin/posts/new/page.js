import AdminNav from '@/app/components/admin/AdminNav';
import PostForm from '@/app/components/admin/PostForm';

export default function NewPostPage() {
  return (
    <div className="flex min-h-screen">
      <AdminNav />
      <main className="flex-1 p-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-slate-900">New Post</h1>
            <p className="text-slate-500 text-sm mt-1">Write and publish a new insight article</p>
          </div>
          <PostForm />
        </div>
      </main>
    </div>
  );
}
