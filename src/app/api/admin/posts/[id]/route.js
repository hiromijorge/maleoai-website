import { NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';
import { createAdminClient } from '@/lib/supabase';

export async function GET(_, { params }) {
  try {
    const db = createAdminClient();
    const { id } = await params;
    const { data, error } = await db.from('posts').select('*').eq('id', id).single();

    if (error) return NextResponse.json({ error: error.message }, { status: 404 });
    return NextResponse.json(data);
  } catch (err) {
    return NextResponse.json({ error: err.message || 'Internal server error' }, { status: 500 });
  }
}

export async function PUT(request, { params }) {
  try {
    const db = createAdminClient();
    const { id } = await params;
    const body = await request.json();

    const { data, error } = await db
      .from('posts')
      .update(body)
      .eq('id', id)
      .select()
      .single();

    if (error) return NextResponse.json({ error: error.message }, { status: 400 });
    
    // Revalidate insights pages to show updated posts immediately
    try {
      revalidatePath('/en/insights', 'page');
      revalidatePath('/id/insights', 'page');
      revalidatePath('/en/insights/' + data.slug, 'page');
      revalidatePath('/id/insights/' + data.slug, 'page');
    } catch (e) {
      console.error('Revalidation error:', e);
    }
    
    return NextResponse.json(data);
  } catch (err) {
    return NextResponse.json({ error: err.message || 'Internal server error' }, { status: 500 });
  }
}

export async function DELETE(_, { params }) {
  try {
    const db = createAdminClient();
    const { id } = await params;
    
    // Get the slug before deleting for revalidation
    const { data: post } = await db.from('posts').select('slug').eq('id', id).single();
    
    const { error } = await db.from('posts').delete().eq('id', id);

    if (error) return NextResponse.json({ error: error.message }, { status: 400 });
    
    // Revalidate insights pages
    try {
      revalidatePath('/en/insights', 'page');
      revalidatePath('/id/insights', 'page');
      if (post?.slug) {
        revalidatePath('/en/insights/' + post.slug, 'page');
        revalidatePath('/id/insights/' + post.slug, 'page');
      }
    } catch (e) {
      console.error('Revalidation error:', e);
    }
    
    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json({ error: err.message || 'Internal server error' }, { status: 500 });
  }
}
