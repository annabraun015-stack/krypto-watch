import { c as createComponent } from './astro-component_CeAmlBsb.mjs';
import 'piccolore';
import { m as maybeRenderHead, a as addAttribute, r as renderTemplate } from './entrypoint_mb6Ro_Qb.mjs';
import 'clsx';
import { r as renderScript } from './BaseLayout_D5KUvymS.mjs';

const $$CryptoTicker = createComponent(($$result, $$props, $$slots) => {
  const coins = [
    { symbol: "BTC", name: "Bitcoin", price: "$98,432", change: "+2.4%", pos: true },
    { symbol: "ETH", name: "Ethereum", price: "$3,218", change: "+1.8%", pos: true },
    { symbol: "SOL", name: "Solana", price: "$182", change: "-0.7%", pos: false },
    { symbol: "BNB", name: "BNB", price: "$412", change: "+0.9%", pos: true },
    { symbol: "XRP", name: "XRP", price: "$0.62", change: "+3.2%", pos: true },
    { symbol: "ADA", name: "Cardano", price: "$0.48", change: "-1.1%", pos: false },
    { symbol: "AVAX", name: "Avalanche", price: "$38", change: "+4.6%", pos: true },
    { symbol: "LINK", name: "Chainlink", price: "$14.2", change: "+2.1%", pos: true }
  ];
  const allCoins = [...coins, ...coins];
  return renderTemplate`${maybeRenderHead()}<div class="ticker-wrap" role="region" aria-label="Crypto Marktpreise" aria-live="polite" data-astro-cid-65p7ywpa> <div class="ticker-inner" aria-hidden="true" data-astro-cid-65p7ywpa> ${allCoins.map((coin) => renderTemplate`<div class="ticker-item" data-astro-cid-65p7ywpa> <span class="ticker-symbol" data-astro-cid-65p7ywpa>${coin.symbol}</span> <span class="ticker-price" data-astro-cid-65p7ywpa>${coin.price}</span> <span${addAttribute(`ticker-change ${coin.pos ? "pos" : "neg"}`, "class")} data-astro-cid-65p7ywpa>${coin.change}</span> </div>`)} </div> </div>`;
}, "C:/Users/Sheikh Farooq/Documents/GitHub/krypto watch/src/components/CryptoTicker.astro", void 0);

const $$MarketData = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$MarketData;
  const marketData = [
    {
      label: "Bitcoin Dominanz",
      labelEn: "Bitcoin Dominance",
      value: "52.4%",
      trend: "+0.8%",
      pos: true,
      icon: "₿",
      desc: "BTC Marktanteil",
      descEn: "BTC Market Share"
    },
    {
      label: "Gesamt-Marktkapitalisierung",
      labelEn: "Total Market Cap",
      value: "$2.18T",
      trend: "+3.2%",
      pos: true,
      icon: "📊",
      desc: "24h Veränderung",
      descEn: "24h Change"
    },
    {
      label: "Fear & Greed Index",
      labelEn: "Fear & Greed Index",
      value: "72",
      trend: "Gier",
      pos: true,
      icon: "🎯",
      desc: "Greed",
      descEn: "Greed"
    },
    {
      label: "DeFi TVL",
      labelEn: "DeFi TVL",
      value: "$98.5B",
      trend: "+1.4%",
      pos: true,
      icon: "🔗",
      desc: "24h Veränderung",
      descEn: "24h Change"
    },
    {
      label: "24h Volumen",
      labelEn: "24h Volume",
      value: "$142B",
      trend: "-5.1%",
      pos: false,
      icon: "💱",
      desc: "Globales Handelsvolumen",
      descEn: "Global Trading Volume"
    },
    {
      label: "ETH Gas Preis",
      labelEn: "ETH Gas Price",
      value: "12 Gwei",
      trend: "-18%",
      pos: true,
      icon: "⛽",
      desc: "24h Durchschnitt",
      descEn: "24h Average"
    }
  ];
  const { locale = "de" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="market-grid" role="list"${addAttribute(locale === "de" ? "Marktdaten" : "Market Data", "aria-label")} data-astro-cid-ee2qjsrn> ${marketData.map((item) => renderTemplate`<div class="price-card" role="listitem" data-astro-cid-ee2qjsrn> <div class="market-card-top" data-astro-cid-ee2qjsrn> <span class="market-icon" aria-hidden="true" data-astro-cid-ee2qjsrn>${item.icon}</span> <span${addAttribute(`trend-pill ${item.pos ? "trend-pos" : "trend-neg"}`, "class")} data-astro-cid-ee2qjsrn> ${item.pos ? "▲" : "▼"} ${item.trend} </span> </div> <div class="coin-price" data-astro-cid-ee2qjsrn>${item.value}</div> <div class="coin-name" data-astro-cid-ee2qjsrn>${locale === "de" ? item.label : item.labelEn ?? item.label}</div> <div class="market-desc" data-astro-cid-ee2qjsrn>${locale === "de" ? item.desc : item.descEn ?? item.desc}</div> </div>`)} </div>`;
}, "C:/Users/Sheikh Farooq/Documents/GitHub/krypto watch/src/components/MarketData.astro", void 0);

const $$FAQ = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$FAQ;
  const { faqs, locale = "de" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="faq-list" role="list" data-astro-cid-al2ca2vr> ${faqs.map((item, idx) => renderTemplate`<div class="faq-item" role="listitem" data-astro-cid-al2ca2vr> <button class="faq-question"${addAttribute(`faq-btn-${idx}`, "id")}${addAttribute(`faq-answer-${idx}`, "aria-controls")} aria-expanded="false" type="button" data-astro-cid-al2ca2vr> <span class="faq-q-text" data-astro-cid-al2ca2vr>${item.q}</span> <span class="faq-icon" aria-hidden="true" data-astro-cid-al2ca2vr> <svg width="20" height="20" viewBox="0 0 20 20" fill="none" data-astro-cid-al2ca2vr> <path d="M5 7.5l5 5 5-5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-al2ca2vr></path> </svg> </span> </button> <div class="faq-answer"${addAttribute(`faq-answer-${idx}`, "id")} role="region"${addAttribute(`faq-btn-${idx}`, "aria-labelledby")} hidden data-astro-cid-al2ca2vr> <div class="faq-answer-inner" data-astro-cid-al2ca2vr> ${item.a} </div> </div> </div>`)} </div>  ${renderScript($$result, "C:/Users/Sheikh Farooq/Documents/GitHub/krypto watch/src/components/FAQ.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/Sheikh Farooq/Documents/GitHub/krypto watch/src/components/FAQ.astro", void 0);

export { $$CryptoTicker as $, $$MarketData as a, $$FAQ as b };
