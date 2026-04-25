/**
 * Intelligence Layer - Data Processing & Metrics
 * Phase 1B: Unlock & Listing Impact Scoring
 */

export interface UnlockData {
  amount: number;
  amountUsd: number;
  percentOfCirculating: number;
  marketCap?: number;
  volume24h?: number;
}

/**
 * Calculates a comprehensive Unlock Impact Score (0–100)
 * 
 * Factors:
 * 1. % Supply Unlocked (Primary factor)
 * 2. USD Value (Size of the event)
 * 3. Market Cap Ratio (Relative weight)
 * 4. Liquidity Proxy (Volume vs Unlock size)
 */
export function calculateUnlockImpactScore(data: UnlockData): {
  score: number;
  label: string;
  color: string;
  description: string;
} {
  const { percentOfCirculating, amountUsd, marketCap, volume24h } = data;
  
  let score = 0;

  // 1. Supply Impact (Max 40 points)
  // Scale: 0% -> 0, 10% -> 40
  score += Math.min((percentOfCirculating / 10) * 40, 40);

  // 2. USD Value Impact (Max 30 points)
  // Scale: $1M -> 5, $100M -> 30 (Logarithmic)
  if (amountUsd > 100000) {
    score += Math.min(Math.log10(amountUsd / 100000) * 10, 30);
  }

  // 3. Liquidity/Market Cap Context (Max 30 points)
  // If we have volume, we calculate the 'Volume Coverage'
  // How many days of volume does this unlock represent?
  if (volume24h && volume24h > 0) {
    const daysToAbsorb = amountUsd / volume24h;
    // 0.1 days -> 0, 2 days -> 30
    score += Math.min(daysToAbsorb * 15, 30);
  } else if (marketCap && marketCap > 0) {
    // Fallback to market cap ratio if volume is missing
    const mcRatio = (amountUsd / marketCap) * 100;
    score += Math.min(mcRatio * 5, 30);
  } else {
    // Basic fallback if no market data
    score += Math.min((percentOfCirculating / 5) * 20, 20);
  }

  // Final score capping
  score = Math.round(Math.min(score, 100));

  // Labels and Colors
  if (score >= 80) return { 
    score, 
    label: 'CRITICAL', 
    color: '#ff003c', 
    description: 'Extreme selling pressure potential. High volatility expected.' 
  };
  if (score >= 60) return { 
    score, 
    label: 'HIGH', 
    color: '#ff8a00', 
    description: 'Significant market impact. Traders should monitor liquidity closely.' 
  };
  if (score >= 40) return { 
    score, 
    label: 'MODERATE', 
    color: '#f3e600', 
    description: 'Moderate impact. Likely to be absorbed by normal market depth.' 
  };
  if (score >= 20) return { 
    score, 
    label: 'LOW', 
    color: '#00f3ff', 
    description: 'Minor impact. Historical data suggests minimal price reaction.' 
  };
  
  return { 
    score, 
    label: 'NEGLIGIBLE', 
    color: '#a0aec0', 
    description: 'Minimal supply increase. No significant impact expected.' 
  };
}

/**
 * Calculates Listing Impact Score (Phase 1B)
 * 0-100 Scale
 * 
 * Factors:
 * 1. Exchange Tier (Binance/Coinbase = Tier 1)
 * 2. Volume Spike
 * 3. Price Change (24h)
 */
export function calculateListingImpactScore(data: {
  exchangeTier: number; // 1, 2, or 3
  volume24h: number;
  avgVolume?: number;
  priceChange24h: number;
}) {
  const { exchangeTier, volume24h, avgVolume, priceChange24h } = data;
  let score = 0;

  // 1. Exchange Tier (Max 50 points)
  if (exchangeTier === 1) score += 50;
  else if (exchangeTier === 2) score += 30;
  else score += 10;

  // 2. Volume Spike (Max 30 points)
  if (avgVolume && avgVolume > 0) {
    const spike = volume24h / avgVolume;
    score += Math.min(spike * 5, 30);
  } else {
    score += 15; // Default if no avg volume
  }

  // 3. Price Momentum (Max 20 points)
  score += Math.min(Math.abs(priceChange24h) * 0.5, 20);

  score = Math.round(Math.min(score, 100));

  if (score >= 80) return { score, label: 'TIER A+', color: '#ff003c', description: 'Major Tier 1 listing with massive liquidity influx.' };
  if (score >= 60) return { score, label: 'TIER A', color: '#ff8a00', description: 'Significant listing on major exchange with high volume.' };
  if (score >= 40) return { score, label: 'TIER B', color: '#f3e600', description: 'Standard listing on mid-tier exchange.' };
  return { score, label: 'TIER C', color: '#00f3ff', description: 'Minor exchange listing with limited impact.' };
}
