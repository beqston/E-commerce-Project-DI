
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://kcevngpaeplxtwdwbrll.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtjZXZuZ3BhZXBseHR3ZHdicmxsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjIzNTA5NDgsImV4cCI6MjAzNzkyNjk0OH0.hj5hTPpvFEqEIAfyRrE3zNqWssmr68xSmwYnMJJ5Ue4'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;