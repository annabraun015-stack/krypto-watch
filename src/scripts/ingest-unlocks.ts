import fs from 'fs';
import path from 'path';
import { calculateUnlockImpactScore } from '../lib/intelligence';

/**
 * PHASE 1B: ETL PIPELINE ENGINE
 * 
 * This script handles the daily ingestion of token unlock data,
 * computes intelligence metrics (Impact Score), and updates the master data store.
 */

// Simulation of external API response (e.g., from TokenUnlocks.app or CoinGecko)
const MOCK_API_DATA = {
  market_data: {
    "arbitrum": { mcap: 2600000000, vol: 380000000, supply: 2600000000 },
    "worldcoin": { mcap: 620000000, vol: 18000000, supply: 190000000 },
    "solana": { mcap: 68000000000, vol: 2500000000, supply: 440000000 },
    "optimism": { mcap: 2400000000, vol: 110000000, supply: 1000000000 },
    "sui": { mcap: 1700000000, vol: 420000000, supply: 1300000000 }
  }
};

async function runIngestion() {
  console.log('🚀 Starting ETL Ingestion Pipeline...');

  const dataPath = path.resolve(process.cwd(), 'src/data/unlocks-master.json');
  const masterData = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));

  const updatedData = masterData.map((coin: any) => {
    const market = (MOCK_API_DATA.market_data as any)[coin.slug];
    
    if (!market) {
      console.warn(`⚠️ No market data found for ${coin.slug}. Skipping metric update.`);
      return coin;
    }

    // Update global coin metrics
    coin.marketCap = market.mcap;
    coin.volume24h = market.vol;
    coin.circulatingSupply = market.supply;

    // Compute metrics for each unlock
    coin.unlocks = coin.unlocks.map((u: any) => {
      const amountUsd = (u.amount * (market.mcap / market.supply));
      const percentOfCirculating = (u.amount / market.supply) * 100;

      const impact = calculateUnlockImpactScore({
        amount: u.amount,
        amountUsd: amountUsd,
        percentOfCirculating: percentOfCirculating,
        marketCap: market.mcap,
        volume24h: market.vol
      });

      return {
        ...u,
        amountUsd,
        percentOfCirculating,
        computedMetrics: {
          impactScore: impact.score,
          impactLabel: impact.label,
          lastUpdated: new Date().toISOString()
        }
      };
    });

    console.log(`✅ Processed ${coin.name} (${coin.symbol}): Score computed for ${coin.unlocks.length} events.`);
    return coin;
  });

  // Write back to master file (Local Cache/DB)
  fs.writeFileSync(dataPath, JSON.stringify(updatedData, null, 2));

  console.log('\n✨ ETL PIPELINE COMPLETE');
  console.log(`📂 Updated: ${dataPath}`);
  console.log(`📊 Metrics Computed: Impact Score (Multi-factor), Liquidity Proxy, MCap Ratio.`);
}

runIngestion().catch(console.error);
