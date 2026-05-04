/**
 * Stagger publication dates for German and English blog posts.
 * Spreads them over a realistic 3-month window (Feb 1 – April 26, 2026).
 * Run with: node scripts/stagger-dates.cjs
 */

const fs = require('fs');
const path = require('path');

// Realistic date schedule - staggered over ~3 months
const deDates = {
  'was-ist-bitcoin.mdx': '2026-02-03',
  'was-ist-ethereum.mdx': '2026-02-05',
  'bitcoin-halving.mdx': '2026-02-08',
  'ethereum-vs-bitcoin.mdx': '2026-02-11',
  'was-sind-smart-contracts.mdx': '2026-02-14',
  'lightning-network.mdx': '2026-02-17',
  'defi-auf-ethereum.mdx': '2026-02-20',
  'public-private-keys.mdx': '2026-02-24',
  'bitcoin-mining-erklaert.mdx': '2026-02-27',
  'was-sind-gas-gebuehren.mdx': '2026-03-03',
  'ethereum-layer-2.mdx': '2026-03-06',
  'bitcoin-sicher-aufbewahren.mdx': '2026-03-09',
  'beste-bitcoin-wallets.mdx': '2026-03-12',
  'bitcoin-vs-fiat-geld.mdx': '2026-03-16',
  'ethereum-2-0.mdx': '2026-03-19',
  'geschichte-von-bitcoin.mdx': '2026-03-22',
  'bitcoin-21-millionen-limit.mdx': '2026-03-25',
  'was-sind-dapps.mdx': '2026-03-28',
  'wie-sicher-ist-bitcoin.mdx': '2026-03-31',
  'ethereum-nfts-erklaert.mdx': '2026-04-03',
  'bitcoin-transaktionsgebuehren.mdx': '2026-04-06',
  'bitcoin-forks.mdx': '2026-04-08',
  'wer-ist-satoshi-nakamoto.mdx': '2026-04-10',
  'bitcoin-rechtliche-lage-deutschland.mdx': '2026-04-12',
  'ethereum-anwendungsfaelle.mdx': '2026-04-14',
  'ist-bitcoin-anonym.mdx': '2026-04-15',
  'bitcoin-bestaetigungen.mdx': '2026-04-17',
  'bitcoin-senden-empfangen.mdx': '2026-04-18',
  'rolle-der-miner-bitcoin-security.mdx': '2026-04-19',
  'bitcoin-kaufen-anleitung.mdx': '2026-04-21',
  'beste-ethereum-wallets.mdx': '2026-04-22',
  'was-bestimmt-den-bitcoin-preis.mdx': '2026-04-23',
  'bitcoin-mythen-aufgedeckt.mdx': '2026-04-24',
  'zukunft-von-bitcoin.mdx': '2026-04-24',
  'was-ist-ein-bitcoin-node.mdx': '2026-04-26',
};

const enDates = {
  'what-is-bitcoin.mdx': '2026-02-03',
  'ethereum-explained.mdx': '2026-02-05',
  'bitcoin-halving.mdx': '2026-02-08',
  'ethereum-vs-bitcoin.mdx': '2026-02-11',
  'smart-contracts-explained.mdx': '2026-02-14',
  'lightning-network.mdx': '2026-02-17',
  'defi-on-ethereum.mdx': '2026-02-20',
  'public-private-keys.mdx': '2026-02-24',
  'bitcoin-mining.mdx': '2026-02-27',
  'ethereum-gas-fees.mdx': '2026-03-03',
  'ethereum-layer-2.mdx': '2026-03-06',
  'how-to-store-bitcoin-safely.mdx': '2026-03-09',
  'best-bitcoin-wallets.mdx': '2026-03-12',
  'bitcoin-vs-fiat-money.mdx': '2026-03-16',
  'ethereum-2-0.mdx': '2026-03-19',
  'history-of-bitcoin.mdx': '2026-03-22',
  'bitcoin-supply-21-million.mdx': '2026-03-25',
  'what-are-dapps.mdx': '2026-03-28',
  'how-secure-is-bitcoin.mdx': '2026-03-31',
  'ethereum-nfts.mdx': '2026-04-03',
  'bitcoin-transaction-fees.mdx': '2026-04-06',
  'bitcoin-forks.mdx': '2026-04-08',
  'who-is-satoshi-nakamoto.mdx': '2026-04-10',
  'bitcoin-legal-germany.mdx': '2026-04-12',
  'ethereum-use-cases.mdx': '2026-04-14',
  'is-bitcoin-anonymous.mdx': '2026-04-15',
  'what-are-bitcoin-confirmations.mdx': '2026-04-17',
  'how-to-send-receive-bitcoin.mdx': '2026-04-18',
  'role-of-miners-bitcoin-security.mdx': '2026-04-19',
  'how-to-buy-bitcoin.mdx': '2026-04-21',
  'best-ethereum-wallets.mdx': '2026-04-22',
  'what-determines-bitcoins-price.mdx': '2026-04-23',
  'bitcoin-myths-misconceptions.mdx': '2026-04-24',
  'future-of-bitcoin.mdx': '2026-04-24',
  'what-is-a-bitcoin-node.mdx': '2026-04-26',
};

function updateDates(dir, dateMap) {
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.mdx'));
  let updated = 0;
  for (const file of files) {
    const newDate = dateMap[file];
    if (!newDate) {
      console.log(`  [SKIP] No mapping for: ${file}`);
      continue;
    }
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    // Replace the date line in frontmatter
    const updated_content = content.replace(/^date: \d{4}-\d{2}-\d{2}/m, `date: ${newDate}`);
    if (updated_content !== content) {
      fs.writeFileSync(filePath, updated_content, 'utf8');
      console.log(`  [DONE] ${file}: → ${newDate}`);
      updated++;
    } else {
      console.log(`  [SKIP] ${file}: date line not found or already matches`);
    }
  }
  return updated;
}

const deDir = path.join(__dirname, '../src/content/blog/de');
const enDir = path.join(__dirname, '../src/content/blog/en');

console.log('\n📅 Staggering German blog post dates...');
const deCount = updateDates(deDir, deDates);

console.log('\n📅 Staggering English blog post dates...');
const enCount = updateDates(enDir, enDates);

console.log(`\n✅ Done! Updated ${deCount} DE + ${enCount} EN articles.`);
