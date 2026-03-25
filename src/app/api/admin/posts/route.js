import { NextResponse } from 'next/server';
import { createAdminClient } from '@/lib/supabase';

export async function GET() {
  const db = createAdminClient();
  const { data, error } = await db
    .from('posts')
    .select('id, slug, title, status, featured, category, publish_date, created_at')
    .order('created_at', { ascending: false });

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data);
}

export async function POST(request) {
  const db = createAdminClient();
  const body = await request.json();

  const { data, error } = await db
    .from('posts')
    .insert([body])
    .select()
    .single();

  if (error) return NextResponse.json({ error: error.message }, { status: 400 });
  return NextResponse.json(data, { status: 201 });
}
