import { H as createVNode, d as Fragment, _ as __astro_tag_component__ } from './entrypoint_mb6Ro_Qb.mjs';
import 'clsx';

const frontmatter = {
  "title": "Bitcoin Supply: Why Only 21 Million BTC Will Ever Exist",
  "description": "Learn why Bitcoin's supply is capped at 21 million, how Satoshi Nakamoto engineered this scarcity, what happens when all Bitcoin is mined, and why this makes Bitcoin the hardest money ever created.",
  "date": "2026-04-17T00:00:00.000Z",
  "author": "James Hoffman",
  "category": "bitcoin",
  "tags": ["bitcoin supply", "21 million", "btc", "scarcity", "halving", "digital gold", "monetary policy"],
  "image": "/images/blog/bitcoin-supply.png",
  "imageAlt": "Bitcoin 21 million supply — golden vault with restricted supply visualization",
  "coinSymbols": ["BTC"],
  "readingTime": 10,
  "featured": false,
  "locale": "en"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "table-of-contents",
    "text": "Table of Contents"
  }, {
    "depth": 2,
    "slug": "the-21-million-cap-bitcoins-most-important-property",
    "text": "The 21 Million Cap: Bitcoin’s Most Important Property"
  }, {
    "depth": 2,
    "slug": "how-satoshi-engineered-scarcity",
    "text": "How Satoshi Engineered Scarcity"
  }, {
    "depth": 2,
    "slug": "current-bitcoin-supply-status",
    "text": "Current Bitcoin Supply Status"
  }, {
    "depth": 3,
    "slug": "supply-distribution",
    "text": "Supply Distribution"
  }, {
    "depth": 2,
    "slug": "lost-bitcoin-the-real-available-supply",
    "text": "Lost Bitcoin: The Real Available Supply"
  }, {
    "depth": 2,
    "slug": "satoshis-bitcoins-divisibility",
    "text": "Satoshis: Bitcoin’s Divisibility"
  }, {
    "depth": 2,
    "slug": "why-21-million-the-math-behind-the-number",
    "text": "Why 21 Million? The Math Behind the Number"
  }, {
    "depth": 3,
    "slug": "theory-1-round-number-in-satoshis",
    "text": "Theory 1: Round Number in Satoshis"
  }, {
    "depth": 3,
    "slug": "theory-2-geometric-series-convergence",
    "text": "Theory 2: Geometric Series Convergence"
  }, {
    "depth": 3,
    "slug": "theory-3-aligned-with-global-monetary-supply",
    "text": "Theory 3: Aligned with Global Monetary Supply"
  }, {
    "depth": 2,
    "slug": "what-happens-when-all-bitcoin-is-mined",
    "text": "What Happens When All Bitcoin Is Mined?"
  }, {
    "depth": 2,
    "slug": "bitcoin-vs-gold-scarcity-compared",
    "text": "Bitcoin vs. Gold: Scarcity Compared"
  }, {
    "depth": 2,
    "slug": "frequently-asked-questions",
    "text": "Frequently Asked Questions"
  }, {
    "depth": 3,
    "slug": "can-bitcoins-21-million-cap-be-changed",
    "text": "Can Bitcoin’s 21 million cap be changed?"
  }, {
    "depth": 3,
    "slug": "what-happens-if-i-lose-my-bitcoin",
    "text": "What happens if I lose my Bitcoin?"
  }, {
    "depth": 3,
    "slug": "are-all-21-million-bitcoins-the-same",
    "text": "Are all 21 million Bitcoins the same?"
  }, {
    "depth": 3,
    "slug": "why-doesnt-bitcoin-just-print-more-to-pay-miners-post-2140",
    "text": "Why doesn’t Bitcoin just print more to pay miners post-2140?"
  }, {
    "depth": 2,
    "slug": "indexing-signals",
    "text": "Indexing Signals"
  }];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    code: "code",
    h2: "h2",
    h3: "h3",
    hr: "hr",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    span: "span",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h2, {
      id: "table-of-contents",
      children: "Table of Contents"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "#21-million",
          children: "The 21 Million Cap: Bitcoin’s Most Important Property"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "#how-engineered",
          children: "How Satoshi Engineered Scarcity"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "#current-supply",
          children: "Current Bitcoin Supply Status"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "#lost-bitcoin",
          children: "Lost Bitcoin: The Real Available Supply"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "#satoshis",
          children: "Satoshis: Bitcoin’s Divisibility"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "#math",
          children: "Why 21 Million? The Math Behind the Number"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "#after-mining",
          children: "What Happens When All Bitcoin Is Mined?"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "#vs-gold",
          children: "Bitcoin vs. Gold: Scarcity Compared"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "#faqs",
          children: "FAQs"
        })
      }), "\n"]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "the-21-million-cap-bitcoins-most-important-property",
      children: "The 21 Million Cap: Bitcoin’s Most Important Property"
    }), "\n", createVNode(_components.p, {
      children: ["Bitcoin will only ever have ", createVNode(_components.strong, {
        children: "21 million coins"
      }), ". This is not a promise, a policy, or a corporate decision. It is written in code and enforced by every one of the 18,000+ nodes on the Bitcoin network."]
    }), "\n", createVNode(_components.p, {
      children: "No single person, company, government, or majority of miners can change this without the agreement of virtually every Bitcoin participant — a threshold so high it is effectively impossible."
    }), "\n", createVNode(_components.p, {
      children: ["This is what makes Bitcoin fundamentally different from every fiat currency in human history: ", createVNode(_components.strong, {
        children: "its supply cannot be inflated"
      }), "."]
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: [createVNode(_components.strong, {
          children: "Featured Snippet Answer:"
        }), " Bitcoin’s maximum supply is exactly 21 million BTC, a limit hard-coded into the protocol by Satoshi Nakamoto. New Bitcoin enters circulation only through block rewards paid to miners, which halve approximately every 4 years. As of 2026, approximately 19.7 million BTC have been mined. The final Bitcoin will be mined around the year 2140. This fixed supply is the foundation of Bitcoin’s value as a deflationary store of value."]
      }), "\n"]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "how-satoshi-engineered-scarcity",
      children: "How Satoshi Engineered Scarcity"
    }), "\n", createVNode(_components.p, {
      children: ["The 21 million cap is enforced through the ", createVNode(_components.strong, {
        children: "block reward system"
      }), " and ", createVNode(_components.strong, {
        children: "halving schedule"
      }), ":"]
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "plaintext",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "Bitcoin Issuance Schedule:"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "Block 0–209,999:       50 BTC/block    → ~10.5M BTC total"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "Block 210,000–419,999: 25 BTC/block    → ~5.25M BTC total"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "Block 420,000–629,999: 12.5 BTC/block  → ~2.625M BTC total"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "Block 630,000–839,999: 6.25 BTC/block  → ~1.3125M BTC total"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "Block 840,000–1,049,999: 3.125 BTC/block → ~0.65625M BTC"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "...continues, halving every 210,000 blocks..."
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "Block ~6,930,000+:      ~0 BTC/block   (dust amounts)"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "TOTAL: Converges to 20,999,999.9769... ≈ 21 million BTC"
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["This is a ", createVNode(_components.strong, {
        children: "geometric series"
      }), " — each era adds half the BTC of the previous era. The sum of an infinite geometric series with ratio 1/2 converges to twice the first term: 2 × 10.5M = 21M."]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.a, {
        href: "/en/blog/bitcoin-halving/",
        children: "Learn everything about Bitcoin halving"
      }), " to understand how this schedule plays out in practice."]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "current-bitcoin-supply-status",
      children: "Current Bitcoin Supply Status"
    }), "\n", createVNode(_components.p, {
      children: "As of April 2026:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", createVNode(_components.table, {
      children: [createVNode(_components.thead, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.th, {
            children: "Metric"
          }), createVNode(_components.th, {
            children: "Value"
          })]
        })
      }), createVNode(_components.tbody, {
        children: [createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "Total Mined"
          }), createVNode(_components.td, {
            children: "~19.73 million BTC"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "Mined (%)"
          }), createVNode(_components.td, {
            children: "~93.95%"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "Remaining to Mine"
          }), createVNode(_components.td, {
            children: "~1.27 million BTC"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "Daily New Supply"
          }), createVNode(_components.td, {
            children: "~450 BTC/day"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "Annual Inflation Rate"
          }), createVNode(_components.td, {
            children: "~0.85%"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "Years Until ~95% Mined"
          }), createVNode(_components.td, {
            children: "Already reached"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "Years Until 99% Mined"
          }), createVNode(_components.td, {
            children: "~2032"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "Year of Final Satoshi"
          }), createVNode(_components.td, {
            children: "~2140"
          })]
        })]
      })]
    }), "\n", createVNode(_components.h3, {
      id: "supply-distribution",
      children: "Supply Distribution"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", createVNode(_components.table, {
      children: [createVNode(_components.thead, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.th, {
            children: "Category"
          }), createVNode(_components.th, {
            children: "Estimated BTC"
          }), createVNode(_components.th, {
            children: "Notes"
          })]
        })
      }), createVNode(_components.tbody, {
        children: [createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "Mined and circulating"
          }), createVNode(_components.td, {
            children: "~14–17M BTC"
          }), createVNode(_components.td, {
            children: "Active supply"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "Lost permanently"
          }), createVNode(_components.td, {
            children: "~3–4M BTC"
          }), createVNode(_components.td, {
            children: "Dead wallets, lost keys"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "Satoshi’s holdings"
          }), createVNode(_components.td, {
            children: "~1M BTC"
          }), createVNode(_components.td, {
            children: "Never moved"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "Exchange held"
          }), createVNode(_components.td, {
            children: "~2–3M BTC"
          }), createVNode(_components.td, {
            children: "Varies"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "ETF/institutional held"
          }), createVNode(_components.td, {
            children: "~1.5M+ BTC"
          }), createVNode(_components.td, {
            children: "Growing rapidly"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "Long-term HODLers"
          }), createVNode(_components.td, {
            children: "~7–9M BTC"
          }), createVNode(_components.td, {
            children: "Illiquid supply"
          })]
        })]
      })]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "lost-bitcoin-the-real-available-supply",
      children: "Lost Bitcoin: The Real Available Supply"
    }), "\n", createVNode(_components.p, {
      children: ["Blockchain analytics firm Chainalysis estimates that ", createVNode(_components.strong, {
        children: "3 to 4 million Bitcoin are permanently lost"
      }), " — meaning their private keys are gone forever, no recovery possible."]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Sources of lost Bitcoin:"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Early miners who formatted hard drives before Bitcoin had value"
      }), "\n", createVNode(_components.li, {
        children: "Long-forgotten wallets with lost seed phrases"
      }), "\n", createVNode(_components.li, {
        children: "Exchange failures (Mt. Gox’s unrecovered BTC)"
      }), "\n", createVNode(_components.li, {
        children: "Accidental destruction (James Howells’ landfill hard drive with 7,500 BTC)"
      }), "\n", createVNode(_components.li, {
        children: "Satoshi’s ~1M BTC (unlikely to ever move)"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "The real circulating supply: ~15–17 million Bitcoin"
      })
    }), "\n", createVNode(_components.p, {
      children: "This means the effective scarcity is even greater than the 21M cap suggests. With ETFs and institutional holders absorbing millions of BTC, the liquid, tradeable supply is shrinking rapidly."
    }), "\n", createVNode(_components.p, {
      children: ["Understanding ", createVNode(_components.a, {
        href: "/en/blog/public-private-keys/",
        children: "private key management"
      }), " is the only way to ensure your Bitcoin is not added to the “lost” category."]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "satoshis-bitcoins-divisibility",
      children: "Satoshis: Bitcoin’s Divisibility"
    }), "\n", createVNode(_components.p, {
      children: ["While Bitcoin has a hard cap of 21 million “coins,” each Bitcoin is divisible into ", createVNode(_components.strong, {
        children: "100 million satoshis"
      }), ":"]
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "plaintext",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "Bitcoin Denominations:"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "1 BTC          = 100,000,000 satoshis"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "0.1 BTC        = 10,000,000 satoshis (1 deci-bitcoin)"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "0.01 BTC       = 1,000,000 satoshis (\"1 bit\" on Lightning)"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "0.001 BTC      = 100,000 satoshis (milli-bitcoin)"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "0.0001 BTC     = 10,000 satoshis"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "0.00000001 BTC = 1 satoshi (smallest unit)"
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "21 million BTC × 100 million = 2.1 quadrillion satoshis"
      })
    }), "\n", createVNode(_components.p, {
      children: ["This means even if Bitcoin reaches $10 million per coin, 1 satoshi = $0.10 — still usable for micropayments. The ", createVNode(_components.a, {
        href: "/en/blog/lightning-network/",
        children: "Lightning Network"
      }), " enables payments of even 1 satoshi."]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "why-21-million-the-math-behind-the-number",
      children: "Why 21 Million? The Math Behind the Number"
    }), "\n", createVNode(_components.p, {
      children: "Satoshi never explicitly explained why 21 million specifically. But from the code and economics, we can infer the logic:"
    }), "\n", createVNode(_components.h3, {
      id: "theory-1-round-number-in-satoshis",
      children: "Theory 1: Round Number in Satoshis"
    }), "\n", createVNode(_components.p, {
      children: ["21 million BTC × 100,000,000 satoshis = ", createVNode(_components.strong, {
        children: "2.1 quadrillion satoshis"
      }), "\n≈ 2 quadrillion = a round number in the range of global transaction capacity"]
    }), "\n", createVNode(_components.h3, {
      id: "theory-2-geometric-series-convergence",
      children: "Theory 2: Geometric Series Convergence"
    }), "\n", createVNode(_components.p, {
      children: "The block reward series (50, 25, 12.5, 6.25…) with 210,000 blocks per era naturally converges to 2 × 10.5M = 21M when summed to infinity. This may be the most natural cap for this issuance schedule."
    }), "\n", createVNode(_components.h3, {
      id: "theory-3-aligned-with-global-monetary-supply",
      children: "Theory 3: Aligned with Global Monetary Supply"
    }), "\n", createVNode(_components.p, {
      children: "Satoshi aimed to create a currency that could serve a global monetary function. 21 million provides enough units (when subdivided into satoshis) for billions of people to each hold meaningful fractions."
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Satoshi’s own quote (Nov 2008):"
      })
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "“If you imagine it being used for some fraction of world commerce, then there’s only going to be 21 million coins for the whole world, so it would be worth much more per unit.”"
      }), "\n"]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "what-happens-when-all-bitcoin-is-mined",
      children: "What Happens When All Bitcoin Is Mined?"
    }), "\n", createVNode(_components.p, {
      children: ["Around ", createVNode(_components.strong, {
        children: "2140"
      }), ", the final fraction of a Bitcoin will be mined. After this point:"]
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "plaintext",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "Post-2140 Bitcoin Mining:"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "Block Reward = 0 BTC"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "   ↓"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "Miner Revenue = Transaction Fees Only"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "   ↓"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "Fee Market Must Sustain Network Security"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "   ↓"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "As Bitcoin adoption grows → More transactions →"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "More fees per block → Security sustained"
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Key questions:"
      })
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Will fees be enough to secure the network?"
          }), " Researchers debate this. With Bitcoin as global settlement layer + Lightning Network driving volume → the fee market should generate sufficient revenue for miners."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "What if fees aren’t enough?"
          }), " Some argue the block reward running out is a long-term security risk. Others believe the fee market will naturally mature as adoption grows. This remains an active area of academic research."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Will Bitcoin’s code change before 2140?"
          }), " Almost certainly there will be protocol upgrades over 114 years, but research today focuses on solutions that maintain the 21M cap as an inviolable property."]
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "bitcoin-vs-gold-scarcity-compared",
      children: "Bitcoin vs. Gold: Scarcity Compared"
    }), "\n", createVNode(_components.p, {
      children: "Bitcoin is often called “digital gold” — but how does its scarcity actually compare?"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", createVNode(_components.table, {
      children: [createVNode(_components.thead, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.th, {
            children: "Scarcity Metric"
          }), createVNode(_components.th, {
            children: "Bitcoin"
          }), createVNode(_components.th, {
            children: "Gold"
          })]
        })
      }), createVNode(_components.tbody, {
        children: [createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "Total supply cap"
          }), createVNode(_components.td, {
            children: "21 million BTC (absolute)"
          }), createVNode(_components.td, {
            children: "Unknown (new mines found)"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "Annual supply growth"
          }), createVNode(_components.td, {
            children: "0.85% (declining to 0%)"
          }), createVNode(_components.td, {
            children: "1.5–2% (consistent)"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "Stock-to-Flow ratio"
          }), createVNode(_components.td, {
            children: "~120 (post-2024)"
          }), createVNode(_components.td, {
            children: "~62"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "Supply predictable?"
          }), createVNode(_components.td, {
            children: "Perfectly (code-enforced)"
          }), createVNode(_components.td, {
            children: "No (geological uncertainty)"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "Can supply be debased?"
          }), createVNode(_components.td, {
            children: "No"
          }), createVNode(_components.td, {
            children: "Yes (asteroid mining, new deposits)"
          })]
        })]
      })]
    }), "\n", createVNode(_components.p, {
      children: ["Bitcoin’s stock-to-flow ratio already exceeds gold — making it the scarcest major monetary asset in existence. This metric is discussed thoroughly in our analysis of ", createVNode(_components.a, {
        href: "/en/blog/what-determines-bitcoins-price/",
        children: "what determines Bitcoin’s price"
      }), "."]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "frequently-asked-questions",
      children: "Frequently Asked Questions"
    }), "\n", createVNode(_components.h3, {
      id: "can-bitcoins-21-million-cap-be-changed",
      children: "Can Bitcoin’s 21 million cap be changed?"
    }), "\n", createVNode(_components.p, {
      children: "Theoretically, via a hard fork that would require near-universal agreement across all Bitcoin nodes and participants. In practice, any attempt to change this would split the network — and the version with the original 21M cap would retain the “Bitcoin” identity. The community has shown zero appetite for supply cap changes."
    }), "\n", createVNode(_components.h3, {
      id: "what-happens-if-i-lose-my-bitcoin",
      children: "What happens if I lose my Bitcoin?"
    }), "\n", createVNode(_components.p, {
      children: ["It’s gone permanently. Lost Bitcoin reduces the effective circulating supply, which (all else equal) increases the scarcity premium on remaining Bitcoin. This is why ", createVNode(_components.a, {
        href: "/en/blog/public-private-keys/",
        children: "private key security"
      }), " is critical."]
    }), "\n", createVNode(_components.h3, {
      id: "are-all-21-million-bitcoins-the-same",
      children: "Are all 21 million Bitcoins the same?"
    }), "\n", createVNode(_components.p, {
      children: "Economically yes: 1 BTC = 1 BTC (fungibility). Technically, some chain analysis firms try to “taint” BTC from specific sources, but this remains controversial and doesn’t affect the Bitcoin protocol itself."
    }), "\n", createVNode(_components.h3, {
      id: "why-doesnt-bitcoin-just-print-more-to-pay-miners-post-2140",
      children: "Why doesn’t Bitcoin just print more to pay miners post-2140?"
    }), "\n", createVNode(_components.p, {
      children: "Because the 21M cap is Bitcoin’s most fundamental value proposition. Any change would destroy the “digital gold” narrative and undermine the reason institutions allocate to Bitcoin. The community will not accept this."
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "indexing-signals",
      children: "Indexing Signals"
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Slug:"
      }), " ", createVNode(_components.code, {
        children: "/en/blog/bitcoin-supply-21-million/"
      }), "\n", createVNode(_components.strong, {
        children: "Sitemap Priority:"
      }), " 0.85\n", createVNode(_components.strong, {
        children: "Content Type:"
      }), " Supporting — Economics Cluster"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Suggested Internal Links:"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.a, {
          href: "/en/blog/what-is-bitcoin/",
          children: "What is Bitcoin?"
        }), " — “Bitcoin fundamentals”"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.a, {
          href: "/en/blog/bitcoin-halving/",
          children: "Bitcoin Halving"
        }), " — “halving schedule”"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.a, {
          href: "/en/blog/bitcoin-mining/",
          children: "Bitcoin Mining"
        }), " — “how new BTC is created”"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.a, {
          href: "/en/blog/what-determines-bitcoins-price/",
          children: "What Determines Bitcoin’s Price"
        }), " — “scarcity and price”"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.a, {
          href: "/en/blog/bitcoin-vs-fiat-money/",
          children: "Bitcoin vs. Fiat Money"
        }), " — “comparing supply models”"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.a, {
          href: "/en/blog/public-private-keys/",
          children: "Public vs Private Keys"
        }), " — “protecting your supply”"]
      }), "\n"]
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}

const url = "src/content/blog/en/bitcoin-supply-21-million.mdx";
const file = "C:/Users/Sheikh Farooq/Documents/GitHub/krypto watch/src/content/blog/en/bitcoin-supply-21-million.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/Sheikh Farooq/Documents/GitHub/krypto watch/src/content/blog/en/bitcoin-supply-21-million.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
