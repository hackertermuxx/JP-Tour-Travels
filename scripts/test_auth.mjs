import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://lpjmzxcsyyazzfxzxuzd.supabase.co',
  'sb_publishable_XrhQ0b8_MHmnRvCnXOhJ8Q_dzpqJ-7h'
);

try {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: 'admin@jptourtravels.com',
    password: 'admin123'
  });
  console.log('Error:', error?.message || 'None');
  console.log('User:', data?.user?.email || 'None');
  console.log('Session:', data?.session ? 'exists' : 'none');
} catch(e) {
  console.log('Exception:', e.message);
}
