import { NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';
import { createAdminClient } from '@/lib/supabase';

export async function GET() {
  try {
    const db = createAdminClient();
    const { data, error } = await db
      .from('posts')
      .select('id, slug, title, status, featured, category, publish_date, created_at')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('GET error:', error);
      return NextResponse.json({ error: error.message, code: error.code }, { status: 500 });
    }
    return NextResponse.json(data);
  } catch (err) {
    console.error('GET exception:', err);
    return NextResponse.json({ 
      error: err.message || 'Internal server error',
      env_check: {
        url_set: !!process.env.NEXT_PUBLIC_SUPABASE_URL,
        key_set: !!process.env.SUPABASE_SERVICE_ROLE_KEY
      }
    }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    let body;
    try {
      body = await request.json();
    } catch (e) {
      return NextResponse.json({ error: 'Invalid JSON in request body' }, { status: 400 });
    }

    // Validate required fields
    if (!body.title || !body.slug) {
      return NextResponse.json({ error: 'Title and slug are required' }, { status: 400 });
    }

    // Log for debugging (will show in Vercel logs)
    console.log('POST /api/admin/posts - Starting insert:', { 
      title: body.title, 
      slug: body.slug
    });

    const db = createAdminClient();
    
    const { data, error } = await db
      .from('posts')
      .insert([body])
      .select()
      .single();

    if (error) {
      console.error('Supabase insert error:', error);
      return NextResponse.json({ 
        error: error.message, 
        code: error.code,
        details: error.details,
        hint: error.hint
      }, { status: 400 });
    }
    
    // Revalidate insights pages to show new posts immediately
    try {
      revalidatePath('/en/insights', 'page');
      revalidatePath('/id/insights', 'page');
      revalidatePath('/en/insights/' + data.slug, 'page');
      revalidatePath('/id/insights/' + data.slug, 'page');
    } catch (e) {
      console.error('Revalidation error:', e);
    }
    
    return NextResponse.json(data, { status: 201 });
  } catch (err) {
    console.error('POST exception:', err);
    return NextResponse.json({ 
      error: err.message || 'Internal server error',
      type: err.name,
      env_check: {
        url_set: !!process.env.NEXT_PUBLIC_SUPABASE_URL,
        key_set: !!process.env.SUPABASE_SERVICE_ROLE_KEY
      }
    }, { status: 500 });
  }
}
