import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.SUPABASE_URL;
const supabaseAnonKey = import.meta.env.SUPABASE_ANON_KEY;

export const supabase = createClient(
  supabaseUrl || 'https://placeholder.supabase.co',
  supabaseAnonKey || 'placeholder'
);

/**
 * Calculates the "Supply Shock" intensity.
 * High Shock = Major selling pressure potential.
 */
export function calculateSupplyShock(unlockAmount: number, totalCirculating: number) {
  if (!totalCirculating || totalCirculating === 0) return { label: 'LOW', color: '#00f3ff' };
  
  const ratio = (unlockAmount / totalCirculating) * 100;
  
  if (ratio > 5) return { label: 'CRITICAL', color: '#ff003c' }; // Red
  if (ratio > 2) return { label: 'HIGH', color: '#ff8a00' };    // Orange
  if (ratio > 0.5) return { label: 'MEDIUM', color: '#f3e600' }; // Yellow
  return { label: 'LOW', color: '#00f3ff' };                   // Cyan
}
