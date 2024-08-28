
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://dknmptaxakcssjsaqoil.supabase.co';

const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRrbm1wdGF4YWtjc3Nqc2Fxb2lsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQ1MDcxNTYsImV4cCI6MjA0MDA4MzE1Nn0.n_PFmjGjMeAK-T1zLCfJ9hn0uRXO0nJIamDYbiGR528";

const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;


