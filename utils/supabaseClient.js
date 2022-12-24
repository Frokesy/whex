import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://uvsjkwjdnnhkkisgaoqs.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV2c2prd2pkbm5oa2tpc2dhb3FzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzE4ODIzMzQsImV4cCI6MTk4NzQ1ODMzNH0.wN-_DJ9fJNvAhs9REBkDlzymlc51MFMSErpoy6nBAGg'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)