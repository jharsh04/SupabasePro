import { createClient } from '@supabase/supabase-js';

// Replace with your Supabase project details
const supabaseUrl ='https://rlgifsvcrywsvyxxnltk.supabase.co';
const supabaseKey= 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJsZ2lmc3Zjcnl3c3Z5eHhubHRrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE5MTA0MTQsImV4cCI6MjA0NzQ4NjQxNH0.N7scHOW0P48iWNeKyC-e0YP3x-E7c7d7op7N7j6RQyY';
export const supabase = createClient(supabaseUrl, supabaseKey);
