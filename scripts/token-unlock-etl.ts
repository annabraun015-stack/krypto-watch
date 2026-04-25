import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';

dotenv.config();

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Error: SUPABASE_URL and SUPABASE_ANON_KEY must be set in .env');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function runETL() {
  console.log('🚀 Starting Token Unlock ETL...');

  // 1. Load Master Dataset
  const dataPath = path.resolve(process.cwd(), 'src/data/unlocks-master.json');
  const masterData = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));

  const slugs = masterData.map((c: any) => c.slug);

  // 2. Fetch Real-time Prices from CoinGecko
  console.log(`📊 Fetching prices for ${slugs.length} tokens...`);
  const response = await fetch(
    `https://api.coingecko.com/api/v3/simple/price?ids=${slugs.join(',')}&vs_currencies=usd&include_market_cap=true`
  );
  const prices = await response.json();

  for (const coin of masterData) {
    const coinPrice = prices[coin.slug]?.usd || 0;
    const marketCap = prices[coin.slug]?.usd_market_cap || 0;

    console.log(`🔍 Processing ${coin.name} ($${coinPrice})`);

    // 3. Upsert Coin Metadata
    const { error: coinError } = await supabase.from('coins').upsert({
      id: coin.slug,
      name: coin.name,
      symbol: coin.symbol,
      circulating_supply: marketCap / coinPrice || 0, // Approx
    });

    if (coinError) {
      console.error(`❌ Error upserting coin ${coin.slug}:`, coinError.message);
      continue;
    }

    // 4. Upsert Unlock Events
    for (const unlock of coin.unlocks) {
      const amountUsd = unlock.amount * coinPrice;
      const percentOfCirculating = (unlock.amount / (marketCap / coinPrice)) * 100 || 0;

      const { error: unlockError } = await supabase.from('unlock_events').upsert({
        id: `${coin.slug}-${unlock.date}-${unlock.category}`, // deterministic ID
        coin_id: coin.slug,
        unlock_date: unlock.date,
        amount: unlock.amount,
        amount_usd: amountUsd,
        percent_of_circulating: percentOfCirculating,
        category: unlock.category,
        is_cliff: unlock.isCliff
      });

      if (unlockError) {
        console.error(`❌ Error upserting unlock for ${coin.slug}:`, unlockError.message);
      }
    }
  }

  console.log('✅ ETL Pipeline Completed Successfully.');
}

runETL().catch(err => {
  console.error('💥 ETL Failed:', err);
  process.exit(1);
});
