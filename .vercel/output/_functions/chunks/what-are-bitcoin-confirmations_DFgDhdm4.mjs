import { H as createVNode, d as Fragment, _ as __astro_tag_component__ } from './entrypoint_mb6Ro_Qb.mjs';
import 'clsx';

const frontmatter = {
  "title": "What Are Bitcoin Confirmations? How Transaction Security Works",
  "description": "Learn what Bitcoin confirmations are, how many you need for a secure transaction, why the first confirmation takes ~10 minutes, and how block depth protects against double-spend attacks.",
  "date": "2026-04-17T00:00:00.000Z",
  "author": "James Hoffman",
  "category": "bitcoin",
  "tags": ["bitcoin confirmations", "btc", "transaction", "blockchain", "double spend", "security"],
  "image": "/images/blog/bitcoin-transaction.png",
  "imageAlt": "Bitcoin confirmations — transaction flowing through blockchain blocks",
  "coinSymbols": ["BTC"],
  "readingTime": 9,
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
    "slug": "what-is-a-bitcoin-confirmation",
    "text": "What Is a Bitcoin Confirmation?"
  }, {
    "depth": 2,
    "slug": "how-the-confirmation-process-works",
    "text": "How the Confirmation Process Works"
  }, {
    "depth": 2,
    "slug": "how-many-confirmations-do-you-need",
    "text": "How Many Confirmations Do You Need?"
  }, {
    "depth": 2,
    "slug": "block-time-and-why-its-10-minutes",
    "text": "Block Time and Why It’s ~10 Minutes"
  }, {
    "depth": 3,
    "slug": "block-time-variability",
    "text": "Block Time Variability"
  }, {
    "depth": 2,
    "slug": "zero-confirmation-unconfirmed-transactions",
    "text": "Zero-Confirmation (Unconfirmed) Transactions"
  }, {
    "depth": 2,
    "slug": "the-double-spend-attack-explained",
    "text": "The Double-Spend Attack Explained"
  }, {
    "depth": 2,
    "slug": "transaction-stuck-how-to-speed-it-up",
    "text": "Transaction Stuck? How to Speed It Up"
  }, {
    "depth": 3,
    "slug": "rbf-replace-by-fee",
    "text": "RBF (Replace-By-Fee)"
  }, {
    "depth": 3,
    "slug": "cpfp-child-pays-for-parent",
    "text": "CPFP (Child Pays for Parent)"
  }, {
    "depth": 3,
    "slug": "check-mempool-conditions-first",
    "text": "Check Mempool Conditions First"
  }, {
    "depth": 2,
    "slug": "common-confirmation-mistakes",
    "text": "Common Confirmation Mistakes"
  }, {
    "depth": 2,
    "slug": "frequently-asked-questions",
    "text": "Frequently Asked Questions"
  }, {
    "depth": 3,
    "slug": "how-long-does-1-bitcoin-confirmation-take",
    "text": "How long does 1 Bitcoin confirmation take?"
  }, {
    "depth": 3,
    "slug": "why-do-some-exchanges-require-3-confirmations-and-others-6",
    "text": "Why do some exchanges require 3 confirmations and others 6?"
  }, {
    "depth": 3,
    "slug": "can-a-confirmed-bitcoin-transaction-be-reversed",
    "text": "Can a confirmed Bitcoin transaction be reversed?"
  }, {
    "depth": 3,
    "slug": "why-is-my-transaction-showing-in-mempool-but-not-confirmed",
    "text": "Why is my transaction showing in mempool but not confirmed?"
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
    em: "em",
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
          href: "#definition",
          children: "What Is a Bitcoin Confirmation?"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "#process",
          children: "How the Confirmation Process Works"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "#how-many",
          children: "How Many Confirmations Do You Need?"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "#block-time",
          children: "Block Time and Why It’s ~10 Minutes"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "#zero-conf",
          children: "Zero-Confirmation (Unconfirmed) Transactions"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "#double-spend",
          children: "The Double-Spend Attack Explained"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "#stuck",
          children: "Transaction Stuck? How to Speed It Up"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "#by-size",
          children: "Confirmations by Transaction Size"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "#faqs",
          children: "FAQs"
        })
      }), "\n"]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "what-is-a-bitcoin-confirmation",
      children: "What Is a Bitcoin Confirmation?"
    }), "\n", createVNode(_components.p, {
      children: ["A ", createVNode(_components.strong, {
        children: "Bitcoin confirmation"
      }), " is a metric that indicates how deeply a transaction has been embedded in the blockchain. Each time a new block is mined on top of the block containing your transaction, your confirmation count increases by 1."]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "0 confirmations"
        }), " = Transaction has been broadcast but not yet included in a block (in the mempool)"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "1 confirmation"
        }), " = Transaction included in one block"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "3 confirmations"
        }), " = Two more blocks mined on top — very secure for most transactions"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "6 confirmations"
        }), " = Gold standard — used by most exchanges for large amounts"]
      }), "\n"]
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: [createVNode(_components.strong, {
          children: "Featured Snippet Answer:"
        }), " A Bitcoin confirmation is each block that is mined on top of the block containing your transaction. One confirmation means the transaction is in the blockchain. Each additional confirmation makes reversing the transaction exponentially harder. Most exchanges require 3–6 confirmations before crediting funds. Six confirmations is the traditional gold standard, representing approximately one hour of elapsed time."]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["Understanding confirmations is key to ", createVNode(_components.a, {
        href: "/en/blog/how-to-send-receive-bitcoin/",
        children: "sending and receiving Bitcoin"
      }), " safely."]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "how-the-confirmation-process-works",
      children: "How the Confirmation Process Works"
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
            children: "Bitcoin Transaction Life Cycle:"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {})
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "1. You broadcast transaction from wallet"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "          ↓"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "2. Transaction enters the MEMPOOL"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "   (visible on block explorers, 0 confirmations)"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "          ↓"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "3. Miner picks up transaction (prioritizes by fee)"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "          ↓"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "4. Miner finds a valid block hash (Proof of Work)"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "   → Transaction included in Block N"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "   → 1 CONFIRMATION ✓"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "          ↓"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "5. Next miner builds on Block N"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "   → Block N+1 mined"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "   → 2 CONFIRMATIONS ✓"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "          ↓"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "6. Next miner builds on Block N+1"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "   → Block N+2 mined"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "   → 3 CONFIRMATIONS ✓"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "          ↓"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "...continues indefinitely"
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "Each additional block mined on top of your transaction makes reversing it exponentially more expensive because an attacker would need to redo all that Proof of Work."
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "how-many-confirmations-do-you-need",
      children: "How Many Confirmations Do You Need?"
    }), "\n", createVNode(_components.p, {
      children: ["The required number of confirmations depends on the ", createVNode(_components.strong, {
        children: "transaction value"
      }), " and ", createVNode(_components.strong, {
        children: "risk tolerance"
      }), ":"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", createVNode(_components.table, {
      children: [createVNode(_components.thead, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.th, {
            children: "Value"
          }), createVNode(_components.th, {
            children: "Recommended Confirmations"
          }), createVNode(_components.th, {
            children: "Time (~10 min/block)"
          })]
        })
      }), createVNode(_components.tbody, {
        children: [createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "< $10"
          }), createVNode(_components.td, {
            children: "0–1 (unconfirmed acceptable for small amounts)"
          }), createVNode(_components.td, {
            children: "0–10 min"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "$10 – $1,000"
          }), createVNode(_components.td, {
            children: "1–3"
          }), createVNode(_components.td, {
            children: "10–30 min"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "$1,000 – $10,000"
          }), createVNode(_components.td, {
            children: "3–6"
          }), createVNode(_components.td, {
            children: "30–60 min"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "$10,000 – $1,000,000"
          }), createVNode(_components.td, {
            children: "6"
          }), createVNode(_components.td, {
            children: "~1 hour"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "$1,000,000+"
          }), createVNode(_components.td, {
            children: "12–20+"
          }), createVNode(_components.td, {
            children: "2–3.5 hours"
          })]
        })]
      })]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Why 6 confirmations as the “gold standard”?"
      })
    }), "\n", createVNode(_components.p, {
      children: "Satoshi Nakamoto calculated in the Bitcoin whitepaper that 6 confirmations provides a security level where a 51% attacker with 10% of total hash rate would have only a 0.1% chance of successfully reversing the transaction. With today’s massive hash rate (~600 EH/s), 6 confirmations is extraordinarily secure for any practically-sized transaction."
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "block-time-and-why-its-10-minutes",
      children: "Block Time and Why It’s ~10 Minutes"
    }), "\n", createVNode(_components.p, {
      children: ["Bitcoin’s protocol targets ", createVNode(_components.strong, {
        children: "one block every 10 minutes"
      }), " on average. This is enforced through the ", createVNode(_components.strong, {
        children: "difficulty adjustment"
      }), " mechanism — every 2,016 blocks (~2 weeks), mining difficulty automatically adjusts based on how fast blocks are being found."]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Why 10 minutes specifically?"
      })
    }), "\n", createVNode(_components.p, {
      children: "Satoshi chose 10 minutes as a balance between:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Security"
        }), " (enough time for the network to reach consensus before next block)"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Speed"
        }), " (fast enough for most practical transactions)"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Resistance to orphan blocks"
        }), " (blocks mined nearly simultaneously that get rejected)"]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "block-time-variability",
      children: "Block Time Variability"
    }), "\n", createVNode(_components.p, {
      children: ["Importantly, 10 minutes is an ", createVNode(_components.em, {
        children: "average"
      }), " — individual block times vary significantly:"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", createVNode(_components.table, {
      children: [createVNode(_components.thead, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.th, {
            children: "Block Time"
          }), createVNode(_components.th, {
            children: "Probability"
          })]
        })
      }), createVNode(_components.tbody, {
        children: [createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "< 1 minute"
          }), createVNode(_components.td, {
            children: "~9%"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "1–5 minutes"
          }), createVNode(_components.td, {
            children: "~23%"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "5–10 minutes"
          }), createVNode(_components.td, {
            children: "~23%"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "10–20 minutes"
          }), createVNode(_components.td, {
            children: "~23%"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "20–30 minutes"
          }), createVNode(_components.td, {
            children: "~13%"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "> 30 minutes"
          }), createVNode(_components.td, {
            children: "~9%"
          })]
        })]
      })]
    }), "\n", createVNode(_components.p, {
      children: "This explains why sometimes your first confirmation arrives in 3 minutes, other times 25 minutes."
    }), "\n", createVNode(_components.p, {
      children: ["Learn more about ", createVNode(_components.a, {
        href: "/en/blog/bitcoin-mining/",
        children: "Bitcoin mining and block production"
      }), "."]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "zero-confirmation-unconfirmed-transactions",
      children: "Zero-Confirmation (Unconfirmed) Transactions"
    }), "\n", createVNode(_components.p, {
      children: ["A ", createVNode(_components.strong, {
        children: "zero-confirmation transaction"
      }), " (0-conf) is one that has been broadcast to the network but hasn’t been included in a block yet. It exists only in the mempool."]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Should you trust 0-conf transactions?"
      })
    }), "\n", createVNode(_components.p, {
      children: ["For ", createVNode(_components.strong, {
        children: "very small amounts"
      }), " (coffee, micropayments), 0-conf is generally acceptable in practice because:"]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Double-spend attacks require significant cost and are easily detected"
      }), "\n", createVNode(_components.li, {
        children: "Merchants can use tools to detect double-spend attempts"
      }), "\n", createVNode(_components.li, {
        children: "Lightning Network payments eliminate this concern entirely"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["For ", createVNode(_components.strong, {
        children: "significant amounts"
      }), ", always wait for at least 1 confirmation."]
    }), "\n", createVNode(_components.p, {
      children: ["The ", createVNode(_components.a, {
        href: "/en/blog/lightning-network/",
        children: "Lightning Network"
      }), " bypasses the confirmation issue entirely for micropayments — enabling instant, final payments with zero confirmation required."]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "the-double-spend-attack-explained",
      children: "The Double-Spend Attack Explained"
    }), "\n", createVNode(_components.p, {
      children: ["A ", createVNode(_components.strong, {
        children: "double-spend attack"
      }), " is when someone attempts to spend the same Bitcoin twice — sending it to a merchant, then attempting to reverse the transaction and redirect those funds elsewhere."]
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
            children: "Double-Spend Attack Scenario:"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "1. Attacker sends 1 BTC to merchant (waits for goods)"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "2. Simultaneously, attacker mines a secret chain where"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "   those 1 BTC are sent back to their own wallet"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "3. If attacker can make their secret chain longer,"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "   the honest chain reorganizes → merchant's payment undone"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "4. Attacker gets goods + keeps 1 BTC"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {})
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "Defense: More confirmations = exponentially harder attack"
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "To successfully double-spend a 6-confirmation transaction, an attacker would need:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "More than 50% of Bitcoin’s total hash rate"
      }), "\n", createVNode(_components.li, {
        children: "Sustained control for ~1 hour"
      }), "\n", createVNode(_components.li, {
        children: "Cost: Hundreds of millions in hardware + electricity"
      }), "\n", createVNode(_components.li, {
        children: "Risk: Bitcoin price collapses if attack detected, making the attack unprofitable"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["This is why ", createVNode(_components.a, {
        href: "/en/blog/how-secure-is-bitcoin/",
        children: "Bitcoin is considered extremely secure"
      }), "."]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "transaction-stuck-how-to-speed-it-up",
      children: "Transaction Stuck? How to Speed It Up"
    }), "\n", createVNode(_components.p, {
      children: "Transactions can get “stuck” in the mempool when you set a fee too low for current network conditions. Solutions:"
    }), "\n", createVNode(_components.h3, {
      id: "rbf-replace-by-fee",
      children: "RBF (Replace-By-Fee)"
    }), "\n", createVNode(_components.p, {
      children: "If your wallet supports RBF, you can broadcast a new version of the transaction with a higher fee. The higher-fee version will be mined preferentially."
    }), "\n", createVNode(_components.h3, {
      id: "cpfp-child-pays-for-parent",
      children: "CPFP (Child Pays for Parent)"
    }), "\n", createVNode(_components.p, {
      children: "Create a new transaction spending the unconfirmed output, paying a high-enough fee that miners are incentivized to confirm both (the “parent” and the “child” transaction)."
    }), "\n", createVNode(_components.h3, {
      id: "check-mempool-conditions-first",
      children: "Check Mempool Conditions First"
    }), "\n", createVNode(_components.p, {
      children: ["Before sending, check ", createVNode(_components.a, {
        href: "https://mempool.space",
        children: "mempool.space"
      }), " for current fee rates required for the next 1, 3, or 6 blocks."]
    }), "\n", createVNode(_components.p, {
      children: ["Learn more about ", createVNode(_components.a, {
        href: "/en/blog/bitcoin-transaction-fees/",
        children: "Bitcoin transaction fees"
      }), " and how to set the right fee for your needs."]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "common-confirmation-mistakes",
      children: "Common Confirmation Mistakes"
    }), "\n", createVNode(_components.p, {
      children: ["❌ ", createVNode(_components.strong, {
        children: "Waiting for confirmations on Lightning payments"
      }), " — Lightning payments are instant. Confirmations only apply to on-chain transactions."]
    }), "\n", createVNode(_components.p, {
      children: ["❌ ", createVNode(_components.strong, {
        children: "Sending large amounts with 0-confirmation"
      }), " — Always wait for at least 1 confirmation for significant value transfers."]
    }), "\n", createVNode(_components.p, {
      children: ["❌ ", createVNode(_components.strong, {
        children: "Confusing exchange credits with network confirmations"
      }), " — Exchanges may credit your account before their internal threshold and before the block explorer shows 6 confirmations."]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "frequently-asked-questions",
      children: "Frequently Asked Questions"
    }), "\n", createVNode(_components.h3, {
      id: "how-long-does-1-bitcoin-confirmation-take",
      children: "How long does 1 Bitcoin confirmation take?"
    }), "\n", createVNode(_components.p, {
      children: ["On average, ~10 minutes. But due to probability, actual times range from under 1 minute to over 30 minutes. During high network congestion, finding a block still takes 10 minutes — but getting ", createVNode(_components.em, {
        children: "your"
      }), " transaction picked up can take longer if fees are too low."]
    }), "\n", createVNode(_components.h3, {
      id: "why-do-some-exchanges-require-3-confirmations-and-others-6",
      children: "Why do some exchanges require 3 confirmations and others 6?"
    }), "\n", createVNode(_components.p, {
      children: "Risk tolerance and transaction size thresholds vary by exchange policy. Some exchanges use 3 confirmations for standard deposits and 6 for very large amounts. 3 confirmations is generally sufficient for amounts under $10,000."
    }), "\n", createVNode(_components.h3, {
      id: "can-a-confirmed-bitcoin-transaction-be-reversed",
      children: "Can a confirmed Bitcoin transaction be reversed?"
    }), "\n", createVNode(_components.p, {
      children: "Once confirmed, a transaction is extremely difficult to reverse. After 6 confirmations, reversal requires a 51% attack on the entire network — economically catastrophic for the attacker. For all practical purposes, 6+ confirmations means permanent and irreversible settlement."
    }), "\n", createVNode(_components.h3, {
      id: "why-is-my-transaction-showing-in-mempool-but-not-confirmed",
      children: "Why is my transaction showing in mempool but not confirmed?"
    }), "\n", createVNode(_components.p, {
      children: "Your fee is likely too low for current network conditions. Miners prioritize transactions with higher fees per byte. Visit mempool.space to check current fee rates and use RBF to bump your fee if your wallet supports it."
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "indexing-signals",
      children: "Indexing Signals"
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Slug:"
      }), " ", createVNode(_components.code, {
        children: "/en/blog/what-are-bitcoin-confirmations/"
      }), "\n", createVNode(_components.strong, {
        children: "Sitemap Priority:"
      }), " 0.8\n", createVNode(_components.strong, {
        children: "Content Type:"
      }), " Supporting — Transactions Cluster"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Suggested Internal Links:"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.a, {
          href: "/en/blog/how-to-send-receive-bitcoin/",
          children: "How to Send and Receive Bitcoin"
        }), " — “sending transactions”"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.a, {
          href: "/en/blog/bitcoin-transaction-fees/",
          children: "Bitcoin Transaction Fees"
        }), " — “setting fees”"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.a, {
          href: "/en/blog/bitcoin-mining/",
          children: "Bitcoin Mining"
        }), " — “how blocks are produced”"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.a, {
          href: "/en/blog/how-secure-is-bitcoin/",
          children: "How Secure is Bitcoin?"
        }), " — “51% attacks”"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.a, {
          href: "/en/blog/lightning-network/",
          children: "Lightning Network"
        }), " — “instant payments”"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.a, {
          href: "/en/blog/what-is-a-bitcoin-node/",
          children: "What is a Bitcoin Node?"
        }), " — “network consensus”"]
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

const url = "src/content/blog/en/what-are-bitcoin-confirmations.mdx";
const file = "C:/Users/Sheikh Farooq/Documents/GitHub/krypto watch/src/content/blog/en/what-are-bitcoin-confirmations.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/Sheikh Farooq/Documents/GitHub/krypto watch/src/content/blog/en/what-are-bitcoin-confirmations.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
