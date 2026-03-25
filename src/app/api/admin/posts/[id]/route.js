import { NextResponse } from 'next/server';
import { createAdminClient } from '@/lib/supabase';

export async function GET(_, { params }) {
  const db = createAdminClient();
  const { id } = await params;
  const { data, error } = await db.from('posts').select('*').eq('id', id).single();

  if (error) return NextResponse.json({ error: error.message }, { status: 404 });
  return NextResponse.json(data);
}

export async function PUT(request, { params }) {
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
  return NextResponse.json(data);
}

export async function DELETE(_, { params }) {
  const db = createAdminClient();
  const { id } = await params;
  const { error } = await db.from('posts').delete().eq('id', id);

  if (error) return NextResponse.json({ error: error.message }, { status: 400 });
  return NextResponse.json({ ok: true });
}
