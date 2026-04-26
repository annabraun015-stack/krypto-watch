/**
 * signal-engine.ts — Core Intelligence Signal Engine
 * Converts multi-factor on-chain data into scored trading signals
 * No raw data dumps — only interpretable insights
 */

export type SignalType = 'bullish' | 'bearish' | 'neutral';

export interface SignalFactor {
  name: string;
  weight: number;        // 0–1
  score: number;         // -1 (very bearish) to +1 (very bullish)
  impact: SignalType;
  description: string;
}

export interface TokenSignal {
  token: 'BTC' | 'ETH';
  signal: SignalType;
  confidence: number;    // 0–100
  factors: SignalFactor[];
  summary: string;
  generatedAt: number;   // unix timestamp
  priceContext: {
    price: number;
    change24h: number;
  };
}

export interface SignalHistory {
  token: 'BTC' | 'ETH';
  date: string;
  signal: SignalType;
  confidence: number;
  priceAtSignal: number;
  priceAfter24h?: number;
  accuracy?: boolean;
}

// ── Signal Engine ─────────────────────────────────────────────────────────

export function computeSignal(inputs: {
  token: 'BTC' | 'ETH';
  inflow24h: number;
  outflow24h: number;
  netFlow24h: number;
  inflowChange7d: number;
  reserveChange24h: number;    // % change in exchange reserves
  reserveChange7d: number;
  whaleAccumulation: number;   // net whale buying (positive = buying)
  smartMoneySignal: number;    // -1 to +1 from smart wallet activity
  price: number;
  priceChange24h: number;
}): TokenSignal {
  const {
    token, inflow24h, outflow24h, netFlow24h, inflowChange7d,
    reserveChange24h, reserveChange7d, whaleAccumulation,
    smartMoneySignal, price, priceChange24h
  } = inputs;

  const factors: SignalFactor[] = [];

  // ─ Factor 1: Exchange Flow Ratio (weight: 0.30) ─
  const flowRatio = outflow24h > 0 ? inflow24h / outflow24h : 1;
  const flowScore = flowRatio > 1.3 ? -0.8 : flowRatio < 0.75 ? 0.8 : 0;
  factors.push({
    name: 'Exchange Flow Ratio',
    weight: 0.30,
    score: flowScore,
    impact: flowScore > 0.2 ? 'bullish' : flowScore < -0.2 ? 'bearish' : 'neutral',
    description: flowScore > 0 
      ? `Net outflow of $${((outflow24h - inflow24h) / 1e6).toFixed(1)}M — coins leaving exchanges (accumulation)`
      : flowScore < 0
      ? `Net inflow of $${((inflow24h - outflow24h) / 1e6).toFixed(1)}M — coins entering exchanges (sell pressure)`
      : 'Balanced inflow/outflow — no directional pressure',
  });

  // ─ Factor 2: Reserve Trend (weight: 0.25) ─
  const resScore = reserveChange7d < -3 ? 0.9 : reserveChange7d < -1 ? 0.5 : reserveChange7d > 3 ? -0.8 : reserveChange7d > 1 ? -0.4 : 0;
  factors.push({
    name: 'Exchange Reserve Trend',
    weight: 0.25,
    score: resScore,
    impact: resScore > 0.2 ? 'bullish' : resScore < -0.2 ? 'bearish' : 'neutral',
    description: reserveChange7d < 0
      ? `Reserves fell ${Math.abs(reserveChange7d).toFixed(1)}% over 7d — supply leaving exchanges`
      : reserveChange7d > 0
      ? `Reserves rose ${reserveChange7d.toFixed(1)}% over 7d — coins moving to exchanges`
      : 'Exchange reserves stable — no major redistribution',
  });

  // ─ Factor 3: Whale Accumulation (weight: 0.25) ─
  const whaleScore = Math.max(-1, Math.min(1, whaleAccumulation / 5));
  factors.push({
    name: 'Whale Accumulation',
    weight: 0.25,
    score: whaleScore,
    impact: whaleScore > 0.2 ? 'bullish' : whaleScore < -0.2 ? 'bearish' : 'neutral',
    description: whaleAccumulation > 1
      ? `Whales net-bought ${whaleAccumulation.toFixed(1)} ${token} in large transactions`
      : whaleAccumulation < -1
      ? `Whales net-sold ${Math.abs(whaleAccumulation).toFixed(1)} ${token} in large transactions`
      : 'Whale activity balanced — no clear directional bias',
  });

  // ─ Factor 4: Smart Money Activity (weight: 0.20) ─
  factors.push({
    name: 'Smart Money Activity',
    weight: 0.20,
    score: smartMoneySignal,
    impact: smartMoneySignal > 0.2 ? 'bullish' : smartMoneySignal < -0.2 ? 'bearish' : 'neutral',
    description: smartMoneySignal > 0.3
      ? 'Top-performing wallets showing net buying activity'
      : smartMoneySignal < -0.3
      ? 'Top-performing wallets showing net selling / distribution'
      : 'Smart money wallets showing mixed / neutral positioning',
  });

  // ─ Weighted composite score ─
  const compositeScore = factors.reduce((sum, f) => sum + f.score * f.weight, 0);
  const confidence = Math.round(Math.min(100, Math.abs(compositeScore) * 100 + 30));
  const signal: SignalType = compositeScore > 0.12 ? 'bullish' : compositeScore < -0.12 ? 'bearish' : 'neutral';

  // ─ Natural language summary ─
  const topFactor = [...factors].sort((a, b) => Math.abs(b.score * b.weight) - Math.abs(a.score * a.weight))[0];
  const summary = generateSummary(token, signal, confidence, topFactor, { inflow24h, outflow24h, reserveChange7d, whaleAccumulation });

  return {
    token, signal, confidence, factors, summary,
    generatedAt: Math.floor(Date.now() / 1000),
    priceContext: { price, change24h: priceChange24h },
  };
}

function generateSummary(
  token: string,
  signal: SignalType,
  confidence: number,
  topFactor: SignalFactor,
  data: { inflow24h: number; outflow24h: number; reserveChange7d: number; whaleAccumulation: number }
): string {
  const confText = confidence >= 70 ? 'strong' : confidence >= 50 ? 'moderate' : 'weak';
  const netFlow = data.outflow24h - data.inflow24h;

  if (signal === 'bullish') {
    if (topFactor.name === 'Exchange Flow Ratio')
      return `${token} showing ${confText} bullish signal. Net outflow of $${(netFlow / 1e6).toFixed(1)}M from exchanges in 24h suggests accumulation. Coins moving to private wallets.`;
    if (topFactor.name === 'Whale Accumulation')
      return `${token} whales accumulated ${data.whaleAccumulation.toFixed(0)} ${token} in large transactions. Combined with outflow trend — ${confText} bullish setup.`;
    if (topFactor.name === 'Exchange Reserve Trend')
      return `${token} exchange reserves fell ${Math.abs(data.reserveChange7d).toFixed(1)}% over 7 days. Reduced supply on exchanges — ${confText} bullish pressure.`;
    return `${token} showing ${confText} bullish signal driven by ${topFactor.name.toLowerCase()}.`;
  }

  if (signal === 'bearish') {
    if (topFactor.name === 'Exchange Flow Ratio')
      return `${token} showing ${confText} bearish signal. Net inflow of $${(Math.abs(netFlow) / 1e6).toFixed(1)}M to exchanges in 24h — elevated sell pressure. Watch support levels.`;
    if (topFactor.name === 'Exchange Reserve Trend')
      return `${token} exchange reserves rose ${data.reserveChange7d.toFixed(1)}% over 7 days. Growing supply on exchanges — potential ${confText} sell pressure ahead.`;
    return `${token} showing ${confText} bearish signal driven by ${topFactor.name.toLowerCase()}.`;
  }

  return `${token} showing neutral signal — no dominant directional pressure. Inflow/outflow balanced at $${(data.inflow24h / 1e6).toFixed(1)}M vs $${(data.outflow24h / 1e6).toFixed(1)}M.`;
}

// ── Mock historical signal data ─────────────────────────────────────────

export function generateSignalHistory(token: 'BTC' | 'ETH', days = 30): SignalHistory[] {
  const signals: SignalType[] = ['bullish', 'bearish', 'neutral'];
  const basePrice = token === 'BTC' ? 94000 : 3200;
  return Array.from({ length: days }, (_, i) => {
    const d = new Date(Date.now() - (days - 1 - i) * 86400000);
    const sig = signals[Math.floor(Math.random() * 3)];
    const priceAtSignal = basePrice * (0.85 + Math.random() * 0.3);
    const priceAfter24h = priceAtSignal * (1 + (Math.random() - 0.45) * 0.06);
    const accuracy = (sig === 'bullish' && priceAfter24h > priceAtSignal) ||
                     (sig === 'bearish' && priceAfter24h < priceAtSignal);
    return {
      token,
      date: d.toISOString().split('T')[0],
      signal: sig,
      confidence: Math.floor(Math.random() * 40 + 50),
      priceAtSignal,
      priceAfter24h,
      accuracy,
    };
  });
}

// ── Signal scoring for demo ────────────────────────────────────────────

export function buildLiveSignals(prices: { btc: number; eth: number; btcChange24h: number; ethChange24h: number }) {
  const btcWA = (Math.random() - 0.35) * 10;
  const ethWA = (Math.random() - 0.45) * 12000;
  const btcInflow  = 28_400_000 + (Math.random() - 0.5) * 8e6;
  const btcOutflow = 31_200_000 + (Math.random() - 0.5) * 8e6;
  const ethInflow  = 42_100_000 + (Math.random() - 0.5) * 12e6;
  const ethOutflow = 38_700_000 + (Math.random() - 0.5) * 12e6;

  const btcSignal = computeSignal({
    token: 'BTC',
    inflow24h: btcInflow, outflow24h: btcOutflow,
    netFlow24h: btcInflow - btcOutflow,
    inflowChange7d: (Math.random() - 0.5) * 25,
    reserveChange24h: (Math.random() - 0.5) * 3,
    reserveChange7d: (Math.random() - 0.55) * 10,
    whaleAccumulation: btcWA,
    smartMoneySignal: (Math.random() - 0.4),
    price: prices.btc, priceChange24h: prices.btcChange24h,
  });

  const ethSignal = computeSignal({
    token: 'ETH',
    inflow24h: ethInflow, outflow24h: ethOutflow,
    netFlow24h: ethInflow - ethOutflow,
    inflowChange7d: (Math.random() - 0.5) * 25,
    reserveChange24h: (Math.random() - 0.5) * 3,
    reserveChange7d: (Math.random() - 0.45) * 10,
    whaleAccumulation: ethWA,
    smartMoneySignal: (Math.random() - 0.5),
    price: prices.eth, priceChange24h: prices.ethChange24h,
  });

  return { btcSignal, ethSignal };
}
