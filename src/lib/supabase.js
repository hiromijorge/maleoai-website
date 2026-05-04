import { createClient } from '@supabase/supabase-js';

// Get env vars with trimming to avoid whitespace issues
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL?.trim();
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY?.trim();
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY?.trim();

// Public client — respects Row Level Security, safe to use in any component
export const supabase = createClient(
  supabaseUrl || '',
  supabaseAnonKey || ''
);

// Admin client — bypasses RLS, only use in /api/admin/* routes
export function createAdminClient() {
  if (!supabaseUrl || !supabaseServiceKey) {
    throw new Error('Missing Supabase environment variables');
  }
  
  return createClient(
    supabaseUrl,
    supabaseServiceKey,
    { 
      auth: { persistSession: false },
      db: { schema: 'public' }
    }
  );
}
