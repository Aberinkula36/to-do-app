import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://slfxwljnxnmzqwdlnzhj.supabase.co';
const supabaseAnonToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNsZnh3bGpueG5tenF3ZGxuemhqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjE4ODAwNzUsImV4cCI6MTk3NzQ1NjA3NX0.NOCDJDzxImJtivipwLtzFzWXAedJQAfRIsGEkzy1lHM';

export default createClient(supabaseUrl, supabaseAnonToken);
